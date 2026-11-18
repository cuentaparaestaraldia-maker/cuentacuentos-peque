#!/usr/bin/env python3
"""
Analiza los MP3 de assets/audio/ para extraer la ventana real de voz [start, end]
sin silencios iniciales ni finales, generando js/audioTimings.js para sincronizar
el karaoke con precisión milimétrica.
"""
import json
import re
import subprocess
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
AUDIO_DIR = ROOT / "assets" / "audio"
OUT_JS = ROOT / "js" / "audioTimings.js"


def analyze_mp3(path: Path):
    cmd = [
        "ffmpeg", "-i", str(path),
        "-af", "silencedetect=noise=-35dB:d=0.04",
        "-f", "null", "-",
    ]
    proc = subprocess.run(cmd, stderr=subprocess.PIPE, stdout=subprocess.DEVNULL, text=True)
    stderr = proc.stderr

    # Duration from ffmpeg header: Duration: 00:00:07.52
    dur_match = re.search(r"Duration:\s*(\d+):(\d+):(\d+\.\d+)", stderr)
    duration = 0.0
    if dur_match:
        h, m, s = dur_match.groups()
        duration = int(h) * 3600 + int(m) * 60 + float(s)

    starts = [float(x) for x in re.findall(r"silence_start:\s*([0-9.]+)", stderr)]
    ends = [float(x) for x in re.findall(r"silence_end:\s*([0-9.]+)", stderr)]

    speech_start = 0.0
    if starts and starts[0] <= 0.06 and ends:
        speech_start = round(ends[0], 3)

    speech_end = round(duration, 3)
    if starts and duration > 0:
        last_start = starts[-1]
        # Si hay un silencio al final del archivo (termina cerca de duration o sin silence_end posterior)
        last_end = ends[-1] if len(ends) >= len(starts) else duration
        if last_end >= duration - 0.15 and last_start > speech_start + 0.2:
            speech_end = round(last_start, 3)

    return path.stem, [speech_start, speech_end]


def main():
    mp3s = sorted(AUDIO_DIR.glob("*.mp3"))
    timings = {}
    with ThreadPoolExecutor(max_workers=8) as pool:
        for key, val in pool.map(analyze_mp3, mp3s):
            timings[key] = val

    content = (
        "// Ventana real de voz [inicio, fin] en segundos por cada audio (sin silencios)\n"
        "// Generado automáticamente por scripts/generate_audio_timings.py\n"
        f"window.AUDIO_TIMINGS = {json.dumps(timings, separators=(',', ':'))};\n"
    )
    OUT_JS.write_text(content, encoding="utf-8")
    print(f"Generado {OUT_JS} con {len(timings)} entradas.")


if __name__ == "__main__":
    main()
