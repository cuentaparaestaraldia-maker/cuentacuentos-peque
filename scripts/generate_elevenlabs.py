#!/usr/bin/env python3
"""
Generador de voces ultra-expresivas con ElevenLabs para Cuenta Cuentos.
Genera los archivos MP3 para el cuento seleccionado usando el modelo eleven_multilingual_v2
y produce el audio pausado (_en_slow.mp3) mediante atempo con preservación tonal sin consumir cuota extra.
"""
import argparse
import json
import os
import subprocess
import sys
import time
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
STORIES_JS = ROOT / "data" / "stories.js"
AUDIO_DIR = ROOT / "assets" / "audio"

# Voz predeterminada: Jessica (Playful, Bright, Warm) - Ideal para cuentos infantiles
DEFAULT_VOICE_ID = "cgSgspJ2msm6clMCkdW9"
DEFAULT_MODEL_ID = "eleven_multilingual_v2"


def get_subscription_info(api_key: str):
    headers = {"xi-api-key": api_key}
    req = urllib.request.Request("https://api.elevenlabs.io/v1/user/subscription", headers=headers)
    try:
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            used = data.get("character_count", 0)
            limit = data.get("character_limit", 10000)
            return used, limit
    except Exception as e:
        print(f"Error consultando cuenta de ElevenLabs: {e}")
        return None, None


def synthesize_elevenlabs(text: str, voice_id: str, api_key: str, out_path: Path):
    url = f"https://api.elevenlabs.io/v1/text-to-speech/{voice_id}"
    headers = {
        "xi-api-key": api_key,
        "Content-Type": "application/json",
        "Accept": "audio/mpeg",
    }
    payload = {
        "text": text,
        "model_id": DEFAULT_MODEL_ID,
        "voice_settings": {
            "stability": 0.45,       # Mayor expresividad y dinámica
            "similarity_boost": 0.75,
            "style": 0.40,           # Expresividad estilo narración infantil
            "use_speaker_boost": True,
        },
    }
    req = urllib.request.Request(
        url,
        data=json.dumps(payload).encode("utf-8"),
        headers=headers,
        method="POST",
    )
    for attempt in range(3):
        try:
            with urllib.request.urlopen(req, timeout=30) as resp:
                audio_bytes = resp.read()
                out_path.write_bytes(audio_bytes)
                return True
        except urllib.error.HTTPError as e:
            err_msg = e.read().decode("utf-8", errors="ignore")
            print(f"  [HTTP {e.code}] Error en síntesis: {err_msg}")
            if attempt == 2:
                raise
            time.sleep(2 * (attempt + 1))
        except Exception as e:
            print(f"  Error en intento {attempt+1}: {e}")
            if attempt == 2:
                raise
            time.sleep(2 * (attempt + 1))
    return False


def create_slow_audio(in_en_mp3: Path, out_en_slow_mp3: Path):
    """Genera la versión lenta (~0.78x) preservando formantes y timbre sin consumir créditos."""
    subprocess.run(
        [
            "ffmpeg", "-y", "-loglevel", "error",
            "-i", str(in_en_mp3),
            "-af", "atempo=0.78",
            "-codec:a", "libmp3lame", "-b:a", "128k", "-ar", "44100",
            str(out_en_slow_mp3),
        ],
        check=True,
    )


def extract_story_scenes(js_path: Path, prefix: str):
    if str(ROOT) not in sys.path:
        sys.path.insert(0, str(ROOT))
    from scripts.generate_tts import extract_scenes_from_js
    all_scenes = extract_scenes_from_js(js_path)
    return [s for s in all_scenes if s["id"].startswith(prefix)]


def main():
    parser = argparse.ArgumentParser(description="Generador ElevenLabs para cuentos infantiles")
    parser.add_argument("--api-key", default=os.environ.get("ELEVENLABS_API_KEY", ""))
    parser.add_argument("--voice-id", default=DEFAULT_VOICE_ID, help="ID de la voz de ElevenLabs (default: Jessica)")
    parser.add_argument("--story-prefix", default="dogs_", help="Prefijo de escenas a generar (default: dogs_)")
    parser.add_argument("--classic-only", action="store_true", help="Generar únicamente las 21 escenas de la versión clásica")
    args = parser.parse_args()

    api_key = args.api_key.strip()
    if not api_key:
        print("Error: Se requiere una API Key de ElevenLabs.")
        sys.exit(1)

    used_before, limit = get_subscription_info(api_key)
    if used_before is not None:
        print(f"=== Estado Cuenta ElevenLabs ===")
        print(f"Caracteres usados: {used_before} / {limit} (Disponibles: {limit - used_before})")

    AUDIO_DIR.mkdir(parents=True, exist_ok=True)
    scenes = extract_story_scenes(STORIES_JS, args.story_prefix)
    if args.classic_only:
        scenes = [s for s in scenes if "_c_" in s["id"]]

    total_chars = sum(len(s["en"]) + len(s["es"]) for s in scenes)
    print(f"\nGenerando {len(scenes)} escenas ({total_chars} caracteres en total)...")

    if used_before is not None and (limit - used_before) < total_chars:
        print(f"Error: La cuota disponible ({limit - used_before}) es menor a los caracteres necesarios ({total_chars}).")
        sys.exit(1)

    for i, s in enumerate(scenes, 1):
        sid = s["id"]
        en_file = AUDIO_DIR / f"{sid}_en.mp3"
        en_slow_file = AUDIO_DIR / f"{sid}_en_slow.mp3"
        es_file = AUDIO_DIR / f"{sid}_es.mp3"

        print(f"[{i}/{len(scenes)}] Procesando {sid}...")

        # 1. Inglés normal con ElevenLabs
        synthesize_elevenlabs(s["en"], args.voice_id, api_key, en_file)

        # 2. Inglés lento derivado (gratis, sin consumo de créditos)
        create_slow_audio(en_file, en_slow_file)

        # 3. Español con ElevenLabs (misma voz multilingüe)
        synthesize_elevenlabs(s["es"], args.voice_id, api_key, es_file)

        # Pausa suave de cortesía entre peticiones
        time.sleep(0.5)

    used_after, _ = get_subscription_info(api_key)
    if used_after is not None:
        print(f"\n=== Generación Completada con Éxito ===")
        print(f"Caracteres consumidos en esta tanda: {used_after - used_before}")
        print(f"Caracteres restantes en tu cuenta: {limit - used_after} de {limit}")


if __name__ == "__main__":
    main()
