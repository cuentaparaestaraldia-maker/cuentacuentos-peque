// Motor de Audio y Secuenciador Flexible para Cuenta Cuentos · English Learning
// Soporta MP3 neuronales pre-generados:
//   - {sceneId}_en_slow.mp3 (inglés lento nativo neuronal ~0.70x, sin distorsión metálica por time-stretch)
//   - {sceneId}_en.mp3      (inglés natural narrativo 1.00x)
//   - {sceneId}_es.mp3      (español cálido narrativo 1.00x)
// y fallback automático a las mejores voces de Web Speech API.

class StoryAudioEngine {
  constructor() {
    this.audio = new Audio();
    this.audio.preload = 'auto';
    this._runToken = 0;
    this._rafId = null;
    this._activeTimer = null;
    this.isPlaying = false;
    this.voices = [];
    this._loadVoices();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = () => this._loadVoices();
    }
  }

  _loadVoices() {
    if (!('speechSynthesis' in window)) return;
    this.voices = window.speechSynthesis.getVoices() || [];
  }

  _pickVoice(lang) {
    if (!this.voices.length) this._loadVoices();
    const prefix = lang === 'es' ? 'es' : 'en';
    // Priorizar voces Natural / Online / Premium si el navegador las ofrece
    const langVoices = this.voices.filter((v) => v.lang && v.lang.toLowerCase().startsWith(prefix));
    const natural = langVoices.find((v) => /natural|online|neural|premium|enhanced|siri|google/i.test(v.name));
    if (natural) return natural;

    const preferred =
      lang === 'es'
        ? ['es-ES', 'es-MX', 'es-US']
        : ['en-US', 'en-GB', 'en-AU'];
    for (const code of preferred) {
      const exact = langVoices.find((v) => v.lang.startsWith(code));
      if (exact) return exact;
    }
    return langVoices[0] || null;
  }

  stop() {
    this._runToken++;
    this.isPlaying = false;
    if (this._rafId) {
      cancelAnimationFrame(this._rafId);
      this._rafId = null;
    }
    if (this._activeTimer) {
      clearTimeout(this._activeTimer);
      this._activeTimer = null;
    }
    try {
      this.audio.pause();
      this.audio.currentTime = 0;
    } catch (_) {}
    if ('speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch (_) {}
    }
  }

  _sleep(ms, token) {
    return new Promise((resolve) => {
      this._activeTimer = setTimeout(() => {
        resolve(token === this._runToken);
      }, ms);
    });
  }

  /**
   * Reproduce un audio (MP3 neuronal de escena o TTS de palabra suelta) con progreso continuo [0..1] para el karaoke.
   */
  playClip({ sceneId = null, text, lang = 'en', rate = 1.0, onProgress = null }, token) {
    return new Promise((resolve) => {
      if (token !== this._runToken) return resolve(false);

      const finish = (ok) => {
        if (this._rafId) {
          cancelAnimationFrame(this._rafId);
          this._rafId = null;
        }
        if (onProgress && ok) onProgress(1);
        resolve(ok && token === this._runToken);
      };

      if (sceneId) {
        // Si es inglés lento (<= 0.82x), usamos la grabación neuronal lenta nativa (_en_slow.mp3)
        // cuya velocidad base ya es 0.70x, evitando así el efecto metálico del time-stretch del navegador.
        const useSlowFile = lang === 'en' && rate <= 0.82;
        const primarySrc = useSlowFile
          ? `assets/audio/${sceneId}_en_slow.mp3`
          : `assets/audio/${sceneId}_${lang}.mp3`;
        const effectiveRate = useSlowFile
          ? Math.max(0.75, Math.min(1.25, rate / 0.70))
          : Math.max(0.55, Math.min(1.35, rate));

        this._playAudioElement(primarySrc, effectiveRate, onProgress, token)
          .then((played) => {
            if (played) return finish(true);
            if (useSlowFile) {
              // Fallback al archivo _en.mp3 si _en_slow.mp3 no existiera
              return this._playAudioElement(`assets/audio/${sceneId}_en.mp3`, rate, onProgress, token)
                .then((ok2) => {
                  if (ok2) return finish(true);
                  return this._playSpeechFallback({ text, lang, rate, onProgress }, token).then(finish);
                });
            }
            return this._playSpeechFallback({ text, lang, rate, onProgress }, token).then(finish);
          });
      } else {
        this._playSpeechFallback({ text, lang, rate, onProgress }, token).then(finish);
      }
    });
  }

  _playAudioElement(src, playbackRate, onProgress, token) {
    return new Promise((resolve) => {
      if (token !== this._runToken) return resolve(false);
      const audio = this.audio;
      audio.src = src;
      audio.playbackRate = playbackRate;
      if ('preservesPitch' in audio) audio.preservesPitch = true;
      if ('mozPreservesPitch' in audio) audio.mozPreservesPitch = true;
      if ('webkitPreservesPitch' in audio) audio.webkitPreservesPitch = true;

      let settled = false;
      const cleanup = () => {
        audio.onended = null;
        audio.onerror = null;
      };

      const tick = () => {
        if (token !== this._runToken) {
          cleanup();
          return resolve(false);
        }
        if (audio.duration && isFinite(audio.duration) && onProgress) {
          onProgress(Math.min(1, audio.currentTime / audio.duration));
        }
        if (!audio.paused && !audio.ended) {
          this._rafId = requestAnimationFrame(tick);
        }
      };

      audio.onended = () => {
        if (settled) return;
        settled = true;
        cleanup();
        resolve(true);
      };

      audio.onerror = () => {
        if (settled) return;
        settled = true;
        cleanup();
        resolve(false);
      };

      audio.play()
        .then(() => {
          if (token !== this._runToken) {
            cleanup();
            return resolve(false);
          }
          audio.playbackRate = playbackRate;
          this._rafId = requestAnimationFrame(tick);
        })
        .catch(() => {
          if (settled) return;
          settled = true;
          cleanup();
          resolve(false);
        });
    });
  }

  _playSpeechFallback({ text, lang, rate, onProgress }, token) {
    return new Promise((resolve) => {
      if (token !== this._runToken) return resolve(false);
      if (!('speechSynthesis' in window)) {
        const estMs = Math.max(900, (text.split(/\s+/).length * 420) / rate);
        const start = performance.now();
        const sim = () => {
          if (token !== this._runToken) return resolve(false);
          const p = Math.min(1, (performance.now() - start) / estMs);
          if (onProgress) onProgress(p);
          if (p < 1) this._rafId = requestAnimationFrame(sim);
          else resolve(true);
        };
        this._rafId = requestAnimationFrame(sim);
        return;
      }

      try {
        window.speechSynthesis.cancel();
      } catch (_) {}

      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = lang === 'es' ? 'es-ES' : 'en-US';
      const voice = this._pickVoice(lang);
      if (voice) utter.voice = voice;
      utter.rate = Math.max(0.55, Math.min(1.4, rate));
      utter.pitch = 1.04;

      const words = text.trim().split(/\s+/);
      const estMs = Math.max(800, (words.length * 410) / utter.rate);
      const start = performance.now();
      let done = false;

      const tick = () => {
        if (done || token !== this._runToken) return;
        if (onProgress) {
          onProgress(Math.min(0.95, (performance.now() - start) / estMs));
        }
        this._rafId = requestAnimationFrame(tick);
      };

      utter.onboundary = (ev) => {
        if (done || token !== this._runToken || !onProgress) return;
        if (typeof ev.charIndex === 'number' && text.length > 0) {
          onProgress(Math.min(0.98, (ev.charIndex + 1) / text.length));
        }
      };

      utter.onend = () => {
        done = true;
        if (this._rafId) cancelAnimationFrame(this._rafId);
        if (onProgress) onProgress(1);
        resolve(token === this._runToken);
      };

      utter.onerror = () => {
        done = true;
        if (this._rafId) cancelAnimationFrame(this._rafId);
        resolve(false);
      };

      this._rafId = requestAnimationFrame(tick);
      window.speechSynthesis.speak(utter);
    });
  }

  /**
   * Ejecuta la secuencia completa de pasos configurados para una escena.
   */
  async playSceneSequence(scene, steps, pauseMs, callbacks = {}) {
    this.stop();
    const token = this._runToken;
    this.isPlaying = true;

    const activeSteps = steps.filter((s) => s.enabled);
    if (activeSteps.length === 0) {
      this.isPlaying = false;
      if (callbacks.onComplete) callbacks.onComplete(true);
      return;
    }

    for (let sIdx = 0; sIdx < activeSteps.length; sIdx++) {
      const step = activeSteps[sIdx];
      const repeats = Math.max(1, Number(step.repeats) || 1);
      const text = step.lang === 'es' ? scene.es : scene.en;

      for (let rep = 1; rep <= repeats; rep++) {
        if (token !== this._runToken) return;

        if (callbacks.onStepStart) {
          callbacks.onStepStart(step, rep, repeats, sIdx, activeSteps.length);
        }

        const ok = await this.playClip(
          {
            sceneId: scene.id,
            text,
            lang: step.lang,
            rate: Number(step.rate) || 1.0,
            onProgress: (ratio) => {
              if (callbacks.onKaraokeProgress) {
                callbacks.onKaraokeProgress(ratio, step.lang);
              }
            }
          },
          token
        );

        if (!ok || token !== this._runToken) return;

        if (callbacks.onKaraokeEnd) callbacks.onKaraokeEnd(step.lang);

        const isVeryLast = sIdx === activeSteps.length - 1 && rep === repeats;
        if (!isVeryLast && pauseMs > 0) {
          const slept = await this._sleep(pauseMs, token);
          if (!slept || token !== this._runToken) return;
        }
      }
    }

    if (token === this._runToken) {
      this.isPlaying = false;
      if (callbacks.onComplete) callbacks.onComplete(true);
    }
  }

  async playSingleStep(scene, step, callbacks = {}) {
    this.stop();
    const token = this._runToken;
    this.isPlaying = true;
    const text = step.lang === 'es' ? scene.es : scene.en;

    if (callbacks.onStepStart) callbacks.onStepStart(step, 1, 1, 0, 1);

    const ok = await this.playClip(
      {
        sceneId: scene.id,
        text,
        lang: step.lang,
        rate: Number(step.rate) || 1.0,
        onProgress: (ratio) => {
          if (callbacks.onKaraokeProgress) callbacks.onKaraokeProgress(ratio, step.lang);
        }
      },
      token
    );

    if (token === this._runToken) {
      this.isPlaying = false;
      if (callbacks.onKaraokeEnd) callbacks.onKaraokeEnd(step.lang);
      if (callbacks.onSingleComplete) callbacks.onSingleComplete(ok);
    }
  }

  async speakWord(text, lang = 'en', rate = 0.9) {
    this.stop();
    const token = this._runToken;
    await this.playClip({ sceneId: null, text, lang, rate }, token);
  }
}

window.StoryAudioEngine = StoryAudioEngine;
