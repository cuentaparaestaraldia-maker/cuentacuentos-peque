#!/usr/bin/env python3
"""
Generador de audios MP3 para Cuenta Cuentos · English Learning.
Lee data/stories.js y genera un MP3 en inglés y otro en español por cada escena en assets/audio/.
También puede usarse con --engine edge en una máquina local para usar voces neuronales de Edge TTS.
"""
import argparse
import os
import re
import json
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
STORIES_JS = ROOT / "data" / "stories.js"
AUDIO_DIR = ROOT / "assets" / "audio"


def extract_scenes_from_js(js_path: Path):
    text = js_path.read_text(encoding="utf-8")
    # Extrae bloques { id: '...', en: '...', es: '...' }
    pattern = re.compile(
        r"id:\s*'([^']+)',\s*\n\s*en:\s*'((?:\\'|[^'])*)',\s*\n\s*es:\s*'((?:\\'|[^'])*)'",
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


def generate_gtts_pair(scene, overwrite=False):
    from gtts import gTTS

    results = []
    for lang_key, tld in [("en", "com"), ("es", "es")]:
        out_path = AUDIO_DIR / f"{scene['id']}_{lang_key}.mp3"
        if out_path.exists() and not overwrite:
            results.append((out_path.name, "skipped"))
            continue
        tts = gTTS(text=scene[lang_key], lang=lang_key, tld=tld, slow=False)
        tts.save(str(out_path))
        results.append((out_path.name, "generated"))
    return results


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--overwrite", action="store_true", help="Regenerar MP3 existentes")
    parser.add_argument("--workers", type=int, default=6, help="Hilos paralelos para gTTS")
    args = parser.parse_args()

    AUDIO_DIR.mkdir(parents=True, exist_ok=True)
    scenes = extract_scenes_from_js(STORIES_JS)
    print(f"Encontradas {len(scenes)} escenas en {STORIES_JS.name}.")

    done = 0
    with ThreadPoolExecutor(max_workers=args.workers) as pool:
        futures = [pool.submit(generate_gtts_pair, s, args.overwrite) for s in scenes]
        for fut in as_completed(futures):
            res = fut.result()
            done += 1
            if done % 10 == 0 or done == len(scenes):
                print(f"Progreso: {done}/{len(scenes)} escenas procesadas")

    print(f"Listo. Archivos en {AUDIO_DIR}: {len(list(AUDIO_DIR.glob('*.mp3')))} MP3")


if __name__ == "__main__":
    main()
