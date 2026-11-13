// Módulo de Karaoke de Lectura para niños de 4 años
// - Ilumina palabra por palabra proporcionalmente a su duración fonética (longitud)
// - Permite alternar MAYÚSCULAS / minúsculas (ideal para primeros lectores)
// - Permite tocar cualquier palabra individual para escucharla

class KaraokeRenderer {
  constructor(enContainer, esContainer, onWordClick) {
    this.enContainer = enContainer;
    this.esContainer = esContainer;
    this.onWordClick = onWordClick;
    this.uppercase = false;
    this.currentEn = '';
    this.currentEs = '';
    this.enWeights = [];
    this.esWeights = [];
  }

  setUppercase(isUpper) {
    this.uppercase = Boolean(isUpper);
    this.render(this.currentEn, this.currentEs);
  }

  _buildWordList(text) {
    if (!text) return { words: [], weights: [] };
    const words = text.trim().split(/\s+/);
    // Peso proporcional a caracteres + pequeño margen por palabra
    const rawWeights = words.map((w) => Math.max(2, w.replace(/[^a-zA-ZáéíóúñÁÉÍÓÚÑ]/g, '').length) + 1.5);
    const total = rawWeights.reduce((a, b) => a + b, 0);
    let acc = 0;
    const weights = rawWeights.map((w) => {
      const start = acc / total;
      acc += w;
      const end = acc / total;
      return { start, end };
    });
    return { words, weights };
  }

  render(enText, esText) {
    this.currentEn = enText || '';
    this.currentEs = esText || '';

    const enData = this._buildWordList(this.currentEn);
    const esData = this._buildWordList(this.currentEs);
    this.enWeights = enData.weights;
    this.esWeights = esData.weights;

    this._renderLine(this.enContainer, enData.words, 'en');
    this._renderLine(this.esContainer, esData.words, 'es');
  }

  _renderLine(container, words, lang) {
    if (!container) return;
    container.innerHTML = '';
    words.forEach((word, idx) => {
      const span = document.createElement('button');
      span.type = 'button';
      span.className = 'k-word';
      span.dataset.index = String(idx);
      span.dataset.lang = lang;
      span.textContent = this.uppercase ? word.toUpperCase() : word;
      span.title = lang === 'en' ? 'Toca para escuchar esta palabra' : 'Toca para oír en español';
      span.addEventListener('click', () => {
        // Limpiar signos de puntuación al leer palabra suelta
        const clean = word.replace(/[.,!¡?¿"“”]/g, '');
        if (clean && this.onWordClick) {
          span.classList.add('is-tapped');
          setTimeout(() => span.classList.remove('is-tapped'), 450);
          this.onWordClick(clean, lang);
        }
      });
      container.appendChild(span);
    });
  }

  updateProgress(ratio, lang) {
    const container = lang === 'es' ? this.esContainer : this.enContainer;
    const otherContainer = lang === 'es' ? this.enContainer : this.esContainer;
    const weights = lang === 'es' ? this.esWeights : this.enWeights;
    if (!container || !weights.length) return;

    // Resaltar bloque activo
    container.classList.add('is-speaking');
    if (otherContainer) otherContainer.classList.remove('is-speaking');

    const spans = container.querySelectorAll('.k-word');
    spans.forEach((span, idx) => {
      const w = weights[idx];
      if (!w) return;
      span.classList.remove('is-active', 'is-done');
      if (ratio >= 1) {
        span.classList.add('is-done');
      } else if (ratio >= w.start && ratio < w.end) {
        span.classList.add('is-active');
      } else if (ratio >= w.end) {
        span.classList.add('is-done');
      }
    });
  }

  clearHighlight(lang = null) {
    const targets = lang
      ? [lang === 'es' ? this.esContainer : this.enContainer]
      : [this.enContainer, this.esContainer];
    targets.forEach((c) => {
      if (!c) return;
      c.classList.remove('is-speaking');
      c.querySelectorAll('.k-word').forEach((s) => s.classList.remove('is-active', 'is-done'));
    });
  }
}

window.KaraokeRenderer = KaraokeRenderer;
