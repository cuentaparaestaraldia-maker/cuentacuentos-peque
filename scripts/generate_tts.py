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

# Voces neuronales expresivas de alta fidelidad (Opción 1: Calidez y entonación viva para niños)
DEFAULT_VOICE_EN = "en-US-JennyNeural"  # Voz natural, cálida y con entonación de cuento en inglés
DEFAULT_VOICE_ES = "es-MX-DaliaNeural"  # Voz dulce, suave y melódica de narradora infantil en español


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


async def try_edge_tts(scenes, voice_en=DEFAULT_VOICE_EN, voice_es=DEFAULT_VOICE_ES, overwrite=False, only_es=False):
    import edge_tts

    print(f"Probando conexión Edge TTS (EN: {voice_en}, ES: {voice_es})...")
    with tempfile.NamedTemporaryFile(suffix=".mp3", delete=True) as tmp:
        await edge_tts.Communicate("Hello little friends!", voice_en).save(tmp.name)
        await edge_tts.Communicate("¡Hola pequeños amigos!", voice_es).save(tmp.name)

    print(f"Usando Edge Neural TTS Expresivo (EN: {voice_en}, ES: {voice_es})...")
    sem = asyncio.Semaphore(8)
    done = 0

    async def gen_scene(scene):
        nonlocal done
        sid = scene["id"]
        jobs = []
        if not only_es:
            jobs.extend([
                # Inglés natural expresivo
                (AUDIO_DIR / f"{sid}_en.mp3", scene["en"], voice_en, "+0%", "+0Hz"),
                # Inglés pausado didáctico (ritmo pedagógico claro sin sonar arrastrado)
                (AUDIO_DIR / f"{sid}_en_slow.mp3", scene["en"], voice_en, "-22%", "+0Hz"),
            ])
        # Español con modulación natural nativa (sin filtros por software que aplanen la voz)
        jobs.append(
            (AUDIO_DIR / f"{sid}_es.mp3", scene["es"], voice_es, "+0%", "+0Hz")
        )

        async with sem:
            for out_path, txt, voice, rate, pitch in jobs:
                if out_path.exists() and not overwrite:
                    continue
                for attempt in range(3):
                    try:
                        comm = edge_tts.Communicate(txt, voice, rate=rate, pitch=pitch)
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


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--overwrite", action="store_true", help="Regenerar MP3 existentes")
    parser.add_argument("--only-es", action="store_true", help="Regenerar solo los MP3 en español")
    parser.add_argument("--voice-en", default=DEFAULT_VOICE_EN, help="Voz Edge TTS para inglés")
    parser.add_argument("--voice-es", default=DEFAULT_VOICE_ES, help="Voz Edge TTS para español")
    parser.add_argument("--workers", type=int, default=8)
    args = parser.parse_args()

    AUDIO_DIR.mkdir(parents=True, exist_ok=True)
    scenes = extract_scenes_from_js(STORIES_JS)
    print(f"Procesando {len(scenes)} escenas...")

    asyncio.run(try_edge_tts(
        scenes,
        voice_en=args.voice_en,
        voice_es=args.voice_es,
        overwrite=args.overwrite,
        only_es=args.only_es,
    ))
    print("Generación completada con éxito mediante Edge Neural TTS.")


if __name__ == "__main__":
    main()

