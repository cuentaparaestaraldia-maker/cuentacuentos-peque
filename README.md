# 📖 Cuenta Cuentos · English Learning (4 años)

Aplicativo web interactivo para aprender inglés escuchando y leyendo cuentos clásicos frase a frase.

## ✨ Funcionalidades principales
- **Modo Completo vs. Modo Solo Audio**:
  - 🎨 **Modo Completo**: Escenas ilustradas con micro-animaciones, objetos interactivos *"Toca y Aprende"* y tarjeta de lectura **Karaoke** palabra por palabra (con botón `ABC / abc` para alternar **MAYÚSCULAS / minúsculas**).
  - 🎧 **Modo Solo Audio**: Tema nocturno suave que reproduce todo el cuento seguido respetando la secuencia configurada (ideal para el coche o antes de dormir).
- **Secuenciador de Audio Flexible (`⚙️`)**:
  - Activa o desactiva cada paso, cambia el idioma (`🇬🇧 Inglés` / `🇪🇸 Español`), ajusta la velocidad (`0.50x` a `1.25x` sin deformar el tono de la voz), elige repeticiones (`1×`, `2×`, `3×`) o usa perfiles rápidos en 1 clic.
- **Versiones Corta y Clásica**:
  - Cada cuento incluye versión **⚡ Corta (5 escenas)** y **📖 Clásica (8 escenas)**.

## ➕ Cómo añadir más cuentos en el futuro
1. Añade un nuevo objeto al array `window.STORIES` en `data/stories.js`.
2. Ejecuta `python3 scripts/generate_tts.py` para generar automáticamente los MP3 en `assets/audio/`.
