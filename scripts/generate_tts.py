#!/usr/bin/env python3
"""
Generador de voces neuronales expresivas (Voz de niña cuentacuentos en Inglés y Español)
para Cuenta Cuentos · English Learning.
Genera 3 archivos MP3 por escena en assets/audio/:
  - {id}_en.mp3      : Inglés a velocidad natural (voz de niña en-US-AnaNeural)
  - {id}_en_slow.mp3 : Inglés lento neuronal nativo (voz de niña en-US-AnaNeural a -30%)
  - {id}_es.mp3      : Español con timbre y formantes de niña dulce (es-ES-ElviraNeural + ajuste vocal infantil)
"""
import argparse
import asyncio
import os
import re
import subprocess
import tempfile
import urllib.request
from concurrent.futures import ProcessPoolExecutor
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
STORIES_JS = ROOT / "data" / "stories.js"
AUDIO_DIR = ROOT / "assets" / "audio"

EDGE_VOICE_EN = "en-US-AnaNeural"
EDGE_VOICE_ES = "es-ES-ElviraNeural"

KOKORO_MODEL_URL = "https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/kokoro-v1.0.int8.onnx"
KOKORO_VOICES_URL = "https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/voices-v1.0.bin"
KOKORO_MODEL_PATH = Path("/tmp/kokoro-v1.0.int8.onnx")
KOKORO_VOICES_PATH = Path("/tmp/voices-v1.0.bin")


def extract_scenes_from_js(js_path: Path):
    text = js_path.read_text(encoding="utf-8")
    pattern = re.compile(
        r"id:\s*'([^']+)',(?:\s*\n\s*image:\s*'[^']+',)?\s*\n\s*en:\s*'((?:\\'|[^'])*)',\s*\n\s*es:\s*'((?:\\'|[^'])*)'",
        re.MULTILINE,
    )
    scenes = []
    for m in pattern.finditer(text):
        scenes.append({
            "id": m.group(1),
            "en": m.group(2).replace("\\'", "'"),
            "es": m.group(3).replace("\\'", "'"),
        })
    return scenes


def apply_child_timbre_es(in_mp3: Path, out_mp3: Path):
    """
    Ajusta suavemente los formantes del tracto vocal (+8.5%) manteniendo la duración natural
    para que la voz española tenga el mismo timbre dulce de niña pequeña que en-US-AnaNeural.
    """
    subprocess.run(
        [
            "ffmpeg", "-y", "-loglevel", "error",
            "-i", str(in_mp3),
            "-af", "asetrate=24000*1.085,aresample=24000,atempo=0.935",
            "-codec:a", "libmp3lame", "-b:a", "64k", "-ar", "24000",
            str(out_mp3),
        ],
        check=True,
    )


async def try_edge_tts(scenes, overwrite=False, only_es=False):
    import edge_tts

    test_comm = edge_tts.Communicate("Hello!", EDGE_VOICE_EN)
    with tempfile.NamedTemporaryFile(suffix=".mp3", delete=True) as tmp:
        await test_comm.save(tmp.name)

    print(f"Usando Microsoft Edge Neural TTS (Voz de niña en EN y ES)...")
    sem = asyncio.Semaphore(12)
    done = 0

    async def gen_scene(scene):
        nonlocal done
        sid = scene["id"]
        jobs = []
        if not only_es:
            jobs.extend([
                (AUDIO_DIR / f"{sid}_en.mp3", scene["en"], EDGE_VOICE_EN, "+0%", "+0Hz", False),
                (AUDIO_DIR / f"{sid}_en_slow.mp3", scene["en"], EDGE_VOICE_EN, "-30%", "+0Hz", False),
            ])
        jobs.append(
            (AUDIO_DIR / f"{sid}_es.mp3", scene["es"], EDGE_VOICE_ES, "+0%", "+16Hz", True)
        )

        async with sem:
            for out_path, txt, voice, rate, pitch, child_es in jobs:
                if out_path.exists() and not overwrite:
                    continue
                for attempt in range(3):
                    try:
                        comm = edge_tts.Communicate(txt, voice, rate=rate, pitch=pitch)
                        if child_es:
                            with tempfile.NamedTemporaryFile(suffix=".mp3", delete=False) as tmp_f:
                                tmp_name = tmp_f.name
                            try:
                                await comm.save(tmp_name)
                                apply_child_timbre_es(Path(tmp_name), out_path)
                            finally:
                                if os.path.exists(tmp_name):
                                    os.remove(tmp_name)
                        else:
                            await comm.save(str(out_path))
                        break
                    except Exception:
                        if attempt == 2:
                            raise
                        await asyncio.sleep(0.8 * (attempt + 1))
            done += 1
            if done % 10 == 0 or done == len(scenes):
                print(f"Edge Neural TTS: {done}/{len(scenes)} escenas completadas")

    await asyncio.gather(*(gen_scene(s) for s in scenes))


def ensure_kokoro_files():
    if not KOKORO_MODEL_PATH.exists():
        urllib.request.urlretrieve(KOKORO_MODEL_URL, str(KOKORO_MODEL_PATH))
    if not KOKORO_VOICES_PATH.exists():
        urllib.request.urlretrieve(KOKORO_VOICES_URL, str(KOKORO_VOICES_PATH))


_kokoro_instance = None


def _init_kokoro_worker():
    global _kokoro_instance
    os.environ["OMP_NUM_THREADS"] = "1"
    from kokoro_onnx import Kokoro
    _kokoro_instance = Kokoro(str(KOKORO_MODEL_PATH), str(KOKORO_VOICES_PATH))


def _kokoro_synth_scene(args):
    scene, overwrite = args
    import soundfile as sf

    sid = scene["id"]
    specs = [
        (AUDIO_DIR / f"{sid}_en.mp3", scene["en"], "af_heart", 0.94, "en-us"),
        (AUDIO_DIR / f"{sid}_en_slow.mp3", scene["en"], "af_heart", 0.70, "en-us"),
        (AUDIO_DIR / f"{sid}_es.mp3", scene["es"], "ef_dora", 0.96, "es"),
    ]
    for out_path, text, voice, speed, lang in specs:
        if out_path.exists() and not overwrite:
            continue
        samples, sr = _kokoro_instance.create(text, voice=voice, speed=speed, lang=lang)
        with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as tmp_wav:
            wav_path = tmp_wav.name
        try:
            sf.write(wav_path, samples, sr)
            subprocess.run(
                [
                    "ffmpeg", "-y", "-loglevel", "error",
                    "-i", wav_path,
                    "-codec:a", "libmp3lame", "-b:a", "64k", "-ar", "24000",
                    str(out_path),
                ],
                check=True,
            )
        finally:
            if os.path.exists(wav_path):
                os.remove(wav_path)
    return sid


def run_kokoro_tts(scenes, overwrite=False, workers=2):
    ensure_kokoro_files()
    items = [(s, overwrite) for s in scenes]
    with ProcessPoolExecutor(max_workers=workers, initializer=_init_kokoro_worker) as pool:
        for _ in pool.map(_kokoro_synth_scene, items):
            pass


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--overwrite", action="store_true", help="Regenerar MP3 existentes")
    parser.add_argument("--only-es", action="store_true", help="Regenerar solo los MP3 en español")
    parser.add_argument("--engine", choices=["auto", "edge", "kokoro"], default="auto")
    parser.add_argument("--workers", type=int, default=max(1, (os.cpu_count() or 2)))
    args = parser.parse_args()

    AUDIO_DIR.mkdir(parents=True, exist_ok=True)
    scenes = extract_scenes_from_js(STORIES_JS)
    print(f"Procesando {len(scenes)} escenas...")

    if args.engine in ("auto", "edge"):
        try:
            asyncio.run(try_edge_tts(scenes, overwrite=args.overwrite, only_es=args.only_es))
            print("Generación completada con éxito mediante Edge Neural TTS.")
            return
        except Exception as e:
            if args.engine == "edge":
                raise
            print(f"Pasando a Kokoro v1.0 Neural TTS ({e.__class__.__name__})...")

    run_kokoro_tts(scenes, overwrite=args.overwrite, workers=args.workers)


if __name__ == "__main__":
    main()
