// Controlador principal de Cuenta Cuentos · English Learning

(function () {
  const STORAGE_KEY = 'cuentacuentos_peque_config_v2';

  const PRESETS = {
    iniciacion: {
      label: '🌱 Iniciación (EN lento → ES → EN normal)',
      pauseMs: 700,
      steps: [
        { id: 'p1', enabled: true, lang: 'en', rate: 0.70, repeats: 1 },
        { id: 'p2', enabled: true, lang: 'es', rate: 1.00, repeats: 1 },
        { id: 'p3', enabled: true, lang: 'en', rate: 1.00, repeats: 1 }
      ]
    },
    bilingue: {
      label: '🌿 Bilingüe (ES → EN)',
      pauseMs: 650,
      steps: [
        { id: 'p1', enabled: false, lang: 'en', rate: 0.70, repeats: 1 },
        { id: 'p2', enabled: true, lang: 'es', rate: 1.00, repeats: 1 },
        { id: 'p3', enabled: true, lang: 'en', rate: 0.95, repeats: 1 }
      ]
    },
    refuerzo_en: {
      label: '🌳 Solo Inglés (Lento → Normal)',
      pauseMs: 650,
      steps: [
        { id: 'p1', enabled: true, lang: 'en', rate: 0.70, repeats: 1 },
        { id: 'p2', enabled: false, lang: 'es', rate: 1.00, repeats: 1 },
        { id: 'p3', enabled: true, lang: 'en', rate: 1.00, repeats: 1 }
      ]
    },
    solo_en: {
      label: '🚀 Inmersión Inglés (1x)',
      pauseMs: 600,
      steps: [
        { id: 'p1', enabled: false, lang: 'en', rate: 0.70, repeats: 1 },
        { id: 'p2', enabled: false, lang: 'es', rate: 1.00, repeats: 1 },
        { id: 'p3', enabled: true, lang: 'en', rate: 1.00, repeats: 1 }
      ]
    },
    solo_es: {
      label: '🇪🇸 Solo Español',
      pauseMs: 600,
      steps: [
        { id: 'p1', enabled: false, lang: 'en', rate: 0.70, repeats: 1 },
        { id: 'p2', enabled: true, lang: 'es', rate: 1.00, repeats: 1 },
        { id: 'p3', enabled: false, lang: 'en', rate: 1.00, repeats: 1 }
      ]
    }
  };

  function defaultConfig() {
    return {
      mode: 'full', // 'full' | 'audio'
      uppercase: false,
      autoAdvance: true,
      pauseMs: 700,
      steps: JSON.parse(JSON.stringify(PRESETS.iniciacion.steps))
    };
  }

  function loadConfig() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultConfig();
      const parsed = JSON.parse(raw);
      return {
        ...defaultConfig(),
        ...parsed,
        steps: Array.isArray(parsed.steps) && parsed.steps.length ? parsed.steps : defaultConfig().steps
      };
    } catch (_) {
      return defaultConfig();
    }
  }

  function saveConfig(cfg) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cfg));
    } catch (_) {}
  }

  const state = {
    config: loadConfig(),
    view: 'home', // 'home' | 'player'
    story: null,
    versionKey: 'classic', // 'classic' | 'short'
    sceneIndex: 0,
    isPlaying: false,
    activeStepId: null,
    activeRepeatText: ''
  };

  const engine = new window.StoryAudioEngine();
  let karaoke = null;

  // Referencias DOM
  const el = {};
  function cacheDom() {
    el.body = document.body;
    el.homeView = document.getElementById('home-view');
    el.playerView = document.getElementById('player-view');
    el.storyGrid = document.getElementById('story-grid');

    // Mode toggles (home + header)
    el.modeFullBtns = document.querySelectorAll('[data-mode-btn="full"]');
    el.modeAudioBtns = document.querySelectorAll('[data-mode-btn="audio"]');

    // Player elements
    el.backHomeBtn = document.getElementById('back-home-btn');
    el.playerTitle = document.getElementById('player-story-title');
    el.versionSwitchShort = document.getElementById('ver-btn-short');
    el.versionSwitchClassic = document.getElementById('ver-btn-classic');
    el.sceneCounter = document.getElementById('scene-counter');
    el.progressDots = document.getElementById('progress-dots');

    // Visual stage (full mode)
    el.visualStage = document.getElementById('visual-stage');
    el.stageBg = document.getElementById('stage-bg');
    el.stageCover = document.getElementById('stage-cover');
    el.stageHero = document.getElementById('stage-hero');
    el.stageParticles = document.getElementById('stage-particles');
    el.hotspotLayer = document.getElementById('hotspot-layer');
    el.hotspotToast = document.getElementById('hotspot-toast');

    // Audio-only stage
    el.audioOnlyStage = document.getElementById('audio-only-stage');
    el.audioOnlyEmoji = document.getElementById('audio-only-emoji');
    el.audioOnlyStatus = document.getElementById('audio-only-status');
    el.audioOnlySubtitle = document.getElementById('audio-only-subtitle');

    // Karaoke
    el.karaokeCard = document.getElementById('karaoke-card');
    el.karaokeEn = document.getElementById('karaoke-en');
    el.karaokeEs = document.getElementById('karaoke-es');
    el.caseToggleBtn = document.getElementById('case-toggle-btn');

    // Step pills & controls
    el.stepPills = document.getElementById('step-pills');
    el.playPauseBtn = document.getElementById('play-pause-btn');
    el.prevSceneBtn = document.getElementById('prev-scene-btn');
    el.nextSceneBtn = document.getElementById('next-scene-btn');
    el.replaySceneBtn = document.getElementById('replay-scene-btn');

    // Settings drawer / modal
    el.openSettingsBtns = document.querySelectorAll('[data-open-settings]');
    el.settingsModal = document.getElementById('settings-modal');
    el.closeSettingsBtn = document.getElementById('close-settings-btn');
    el.presetSelect = document.getElementById('preset-select');
    el.stepsEditorList = document.getElementById('steps-editor-list');
    el.addStepBtn = document.getElementById('add-step-btn');
    el.pauseRange = document.getElementById('pause-range');
    el.pauseRangeVal = document.getElementById('pause-range-val');
    el.autoAdvanceToggle = document.getElementById('auto-advance-toggle');
  }

  function applyModeUI() {
    const isAudio = state.config.mode === 'audio';
    el.body.classList.toggle('mode-audio-only', isAudio);
    el.body.classList.toggle('mode-full', !isAudio);

    el.modeFullBtns.forEach((b) => b.classList.toggle('is-active', !isAudio));
    el.modeAudioBtns.forEach((b) => b.classList.toggle('is-active', isAudio));

    if (el.visualStage && el.audioOnlyStage && el.karaokeCard) {
      el.visualStage.hidden = isAudio;
      el.karaokeCard.hidden = isAudio;
      el.audioOnlyStage.hidden = !isAudio;
    }
  }

  function setMode(mode) {
    state.config.mode = mode === 'audio' ? 'audio' : 'full';
    saveConfig(state.config);
    applyModeUI();
  }

  function renderHome() {
    el.storyGrid.innerHTML = '';
    window.STORIES.forEach((story) => {
      const card = document.createElement('article');
      card.className = 'story-card';
      card.style.setProperty('--story-accent', story.accent);

      card.innerHTML = `
        <div class="story-cover-wrap">
          <img src="${story.cover}" alt="${story.titleEs}" class="story-cover-img" loading="lazy" />
          <span class="story-emoji-badge">${story.emoji}</span>
          <span class="story-age-badge">${story.ageTag}</span>
        </div>
        <div class="story-card-body">
          <h3 class="story-title-es">${story.titleEs}</h3>
          <p class="story-title-en">${story.titleEn}</p>
          <div class="story-actions">
            <button type="button" class="btn-start-version btn-classic" data-story="${story.id}" data-ver="classic">
              📖 Cuento Clásico <small>(${story.versions.classic.scenes.length} escenas)</small>
            </button>
            <button type="button" class="btn-start-version btn-short" data-story="${story.id}" data-ver="short">
              🌱 Versión Breve <small>(${story.versions.short.scenes.length} escenas)</small>
            </button>
          </div>
        </div>
      `;

      card.querySelectorAll('.btn-start-version').forEach((btn) => {
        btn.addEventListener('click', () => {
          openStory(btn.dataset.story, btn.dataset.ver);
        });
      });

      el.storyGrid.appendChild(card);
    });
  }

  function getCurrentScenes() {
    if (!state.story) return [];
    return state.story.versions[state.versionKey].scenes;
  }

  function getCurrentScene() {
    const scenes = getCurrentScenes();
    return scenes[state.sceneIndex] || null;
  }

  function openStory(storyId, versionKey = 'short') {
    const story = window.STORIES.find((s) => s.id === storyId);
    if (!story) return;
    engine.stop();
    state.isPlaying = false;
    state.story = story;
    state.versionKey = versionKey;
    state.sceneIndex = 0;
    state.view = 'player';

    el.homeView.hidden = true;
    el.playerView.hidden = false;
    el.playerTitle.textContent = `${story.emoji} ${story.titleEs}`;
    el.versionSwitchShort.classList.toggle('is-active', versionKey === 'short');
    el.versionSwitchClassic.classList.toggle('is-active', versionKey === 'classic');

    renderScene();
    // Auto-iniciar lectura al entrar al cuento
    startPlayback();
  }

  function goHome() {
    engine.stop();
    state.isPlaying = false;
    state.view = 'home';
    el.playerView.hidden = true;
    el.homeView.hidden = false;
    updatePlayButton();
  }

  function switchVersion(verKey) {
    if (!state.story || state.versionKey === verKey) return;
    engine.stop();
    state.isPlaying = false;
    state.versionKey = verKey;
    state.sceneIndex = 0;
    el.versionSwitchShort.classList.toggle('is-active', verKey === 'short');
    el.versionSwitchClassic.classList.toggle('is-active', verKey === 'classic');
    renderScene();
    startPlayback();
  }

  function renderStepPills() {
    el.stepPills.innerHTML = '';
    const activeSteps = state.config.steps.filter((s) => s.enabled);
    if (!activeSteps.length) {
      el.stepPills.innerHTML = '<span class="step-empty-msg">Activa al menos 1 paso en ⚙️ Ajustes</span>';
      return;
    }

    const scene = getCurrentScene();
    activeSteps.forEach((step) => {
      const pill = document.createElement('button');
      pill.type = 'button';
      pill.className = 'step-pill';
      pill.dataset.stepId = step.id;
      const icon = step.lang === 'es' ? '🇪🇸' : step.rate < 0.82 ? '🐢' : '🐇';
      const langTxt = step.lang === 'es' ? 'ES' : 'EN';
      const repTxt = step.repeats > 1 ? ` ×${step.repeats}` : '';
      pill.innerHTML = `<span>${icon}</span> <strong>${langTxt}</strong> <small>${Number(step.rate).toFixed(2)}x${repTxt}</small>`;
      if (state.activeStepId === step.id) {
        pill.classList.add('is-active');
      }
      pill.addEventListener('click', () => {
        if (!scene) return;
        playSingleStep(scene, step);
      });
      el.stepPills.appendChild(pill);
    });
  }

  function renderScene() {
    const scenes = getCurrentScenes();
    const scene = getCurrentScene();
    if (!scene) return;

    el.sceneCounter.textContent = `Escena ${state.sceneIndex + 1} de ${scenes.length}`;

    // Progress dots
    el.progressDots.innerHTML = '';
    scenes.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'p-dot';
      if (idx === state.sceneIndex) dot.classList.add('is-current');
      else if (idx < state.sceneIndex) dot.classList.add('is-done');
      dot.setAttribute('aria-label', `Ir a escena ${idx + 1}`);
      dot.addEventListener('click', () => {
        engine.stop();
        state.sceneIndex = idx;
        renderScene();
        startPlayback();
      });
      el.progressDots.appendChild(dot);
    });

    // Visual stage
    el.stageBg.style.background = scene.sky;
    el.stageCover.src = state.story.cover;
    el.stageCover.alt = state.story.titleEs;
    el.stageHero.textContent = scene.hero;
    el.stageHero.className = `stage-hero anim-${scene.anim || 'float'}`;
    renderParticles(scene.anim);

    // Hotspots interactivos
    el.hotspotLayer.innerHTML = '';
    (scene.hotspots || []).forEach((hs) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'hotspot-btn';
      btn.style.left = `${hs.x}%`;
      btn.style.top = `${hs.y}%`;
      btn.innerHTML = `<span class="hs-emoji">${hs.emoji}</span><span class="hs-label">${hs.en}</span>`;
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        triggerHotspot(hs, btn);
      });
      el.hotspotLayer.appendChild(btn);
    });

    // Audio-only stage
    el.audioOnlyEmoji.textContent = state.story.emoji;
    el.audioOnlyStatus.textContent = `Escena ${state.sceneIndex + 1} de ${scenes.length}`;
    el.audioOnlySubtitle.textContent = 'Pulsa Play para escuchar el cuento';

    // Karaoke
    karaoke.clearHighlight();
    karaoke.render(scene.en, scene.es);

    // Controls
    el.prevSceneBtn.disabled = state.sceneIndex === 0;
    el.nextSceneBtn.disabled = state.sceneIndex >= scenes.length - 1;
    state.activeStepId = null;
    renderStepPills();
    updatePlayButton();
  }

  function renderParticles(anim) {
    el.stageParticles.innerHTML = '';
    const map = {
      wind: ['💨', '🍃', '🍂'],
      sparkle: ['✨', '⭐', '🌟'],
      sleep: ['💤', '🌙', '⭐'],
      run: ['💨', '🐾'],
      bounce: ['🎵', '✨'],
      float: ['☁️', '🦋'],
      shake: ['❗', '🍃'],
      pulse: ['✨', '💫']
    };
    const icons = map[anim] || ['✨'];
    for (let i = 0; i < 6; i++) {
      const span = document.createElement('span');
      span.className = `particle p-anim-${anim || 'float'}`;
      span.textContent = icons[i % icons.length];
      span.style.left = `${12 + i * 15}%`;
      span.style.top = `${16 + ((i * 23) % 55)}%`;
      span.style.animationDelay = `${i * 0.45}s`;
      el.stageParticles.appendChild(span);
    }
  }

  let toastTimer = null;
  async function triggerHotspot(hs, btnEl) {
    state.isPlaying = false;
    updatePlayButton();
    btnEl.classList.add('is-popped');
    setTimeout(() => btnEl.classList.remove('is-popped'), 600);

    el.hotspotToast.textContent = `${hs.emoji} ${hs.en} · ${hs.es}`;
    el.hotspotToast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.hotspotToast.classList.remove('is-visible'), 2200);

    await engine.speakWord(hs.en, 'en', 0.85);
    await new Promise((r) => setTimeout(r, 300));
    await engine.speakWord(hs.es, 'es', 1.0);
  }

  function updatePlayButton() {
    if (!el.playPauseBtn) return;
    el.playPauseBtn.innerHTML = state.isPlaying
      ? '⏸️ <span>Pausar</span>'
      : '▶️ <span>Escuchar</span>';
    el.playPauseBtn.classList.toggle('is-playing', state.isPlaying);
  }

  function highlightStepPill(stepId, rep, repeats) {
    state.activeStepId = stepId;
    el.stepPills.querySelectorAll('.step-pill').forEach((p) => {
      p.classList.toggle('is-active', p.dataset.stepId === stepId);
    });
    if (state.config.mode === 'audio' && el.audioOnlySubtitle) {
      const scene = getCurrentScene();
      const step = state.config.steps.find((s) => s.id === stepId);
      if (scene && step) {
        const langLabel = step.lang === 'es' ? '🇪🇸 Español' : `🇬🇧 Inglés (${Number(step.rate).toFixed(2)}x)`;
        const repLabel = repeats > 1 ? ` · Repetición ${rep}/${repeats}` : '';
        el.audioOnlySubtitle.textContent = `${langLabel}${repLabel}`;
      }
    }
  }

  function startPlayback() {
    const scene = getCurrentScene();
    if (!scene) return;
    const activeSteps = state.config.steps.filter((s) => s.enabled);
    if (!activeSteps.length) {
      openSettings();
      return;
    }

    state.isPlaying = true;
    updatePlayButton();
    karaoke.clearHighlight();

    engine.playSceneSequence(scene, state.config.steps, state.config.pauseMs, {
      onStepStart: (step, rep, repeats) => {
        highlightStepPill(step.id, rep, repeats);
      },
      onKaraokeProgress: (ratio, lang) => {
        karaoke.updateProgress(ratio, lang);
      },
      onKaraokeEnd: () => {
        // Mantiene brevemente el estado completado
      },
      onComplete: (completed) => {
        state.isPlaying = false;
        state.activeStepId = null;
        renderStepPills();
        updatePlayButton();

        if (!completed) return;

        const scenes = getCurrentScenes();
        const shouldAuto = state.config.mode === 'audio' || state.config.autoAdvance;
        if (shouldAuto && state.sceneIndex < scenes.length - 1) {
          setTimeout(() => {
            if (state.view === 'player' && !engine.isPlaying) {
              state.sceneIndex++;
              renderScene();
              startPlayback();
            }
          }, 900);
        } else if (state.sceneIndex >= scenes.length - 1 && state.config.mode === 'audio') {
          el.audioOnlySubtitle.textContent = '✨ ¡Fin del cuento! Pulsa Play para repetir.';
        }
      }
    });
  }

  function playSingleStep(scene, step) {
    state.isPlaying = true;
    updatePlayButton();
    karaoke.clearHighlight();

    engine.playSingleStep(scene, step, {
      onStepStart: (st, rep, repeats) => highlightStepPill(st.id, rep, repeats),
      onKaraokeProgress: (ratio, lang) => karaoke.updateProgress(ratio, lang),
      onSingleComplete: () => {
        state.isPlaying = false;
        state.activeStepId = null;
        renderStepPills();
        updatePlayButton();
      }
    });
  }

  function togglePlayPause() {
    if (state.isPlaying) {
      engine.stop();
      state.isPlaying = false;
      state.activeStepId = null;
      renderStepPills();
      updatePlayButton();
    } else {
      startPlayback();
    }
  }

  function goScene(delta) {
    const scenes = getCurrentScenes();
    const next = state.sceneIndex + delta;
    if (next < 0 || next >= scenes.length) return;
    engine.stop();
    state.isPlaying = false;
    state.sceneIndex = next;
    renderScene();
    startPlayback();
  }

  // ---- Panel de Ajustes de Secuencia (⚙️) ----
  function openSettings() {
    renderSettingsModal();
    el.settingsModal.hidden = false;
  }

  function closeSettings() {
    el.settingsModal.hidden = true;
    if (state.view === 'player') {
      renderStepPills();
    }
  }

  function renderSettingsModal() {
    el.pauseRange.value = String(state.config.pauseMs);
    el.pauseRangeVal.textContent = `${(state.config.pauseMs / 1000).toFixed(1)}s`;
    el.autoAdvanceToggle.checked = Boolean(state.config.autoAdvance);

    el.stepsEditorList.innerHTML = '';
    state.config.steps.forEach((step, idx) => {
      const row = document.createElement('div');
      row.className = `step-editor-row ${step.enabled ? '' : 'is-disabled'}`;
      row.innerHTML = `
        <div class="step-row-top">
          <label class="switch-label">
            <input type="checkbox" class="step-enable-chk" ${step.enabled ? 'checked' : ''} />
            <span class="step-num">Paso ${idx + 1}</span>
          </label>
          <select class="step-lang-sel" aria-label="Idioma del paso">
            <option value="en" ${step.lang === 'en' ? 'selected' : ''}>🇬🇧 Inglés</option>
            <option value="es" ${step.lang === 'es' ? 'selected' : ''}>🇪🇸 Español</option>
          </select>
          <select class="step-rep-sel" aria-label="Repeticiones">
            <option value="1" ${Number(step.repeats) === 1 ? 'selected' : ''}>1× vez</option>
            <option value="2" ${Number(step.repeats) === 2 ? 'selected' : ''}>2× veces</option>
            <option value="3" ${Number(step.repeats) === 3 ? 'selected' : ''}>3× veces</option>
          </select>
          ${state.config.steps.length > 1 ? '<button type="button" class="btn-del-step" title="Eliminar paso">🗑️</button>' : ''}
        </div>
        <div class="step-row-speed">
          <span>Velocidad:</span>
          <input type="range" class="step-rate-range" min="0.50" max="1.25" step="0.05" value="${step.rate}" />
          <strong class="step-rate-val">${Number(step.rate).toFixed(2)}x</strong>
        </div>
      `;

      const chk = row.querySelector('.step-enable-chk');
      const langSel = row.querySelector('.step-lang-sel');
      const repSel = row.querySelector('.step-rep-sel');
      const rateRange = row.querySelector('.step-rate-range');
      const rateVal = row.querySelector('.step-rate-val');
      const delBtn = row.querySelector('.btn-del-step');

      chk.addEventListener('change', () => {
        step.enabled = chk.checked;
        row.classList.toggle('is-disabled', !step.enabled);
        saveConfig(state.config);
      });
      langSel.addEventListener('change', () => {
        step.lang = langSel.value;
        saveConfig(state.config);
      });
      repSel.addEventListener('change', () => {
        step.repeats = Number(repSel.value);
        saveConfig(state.config);
      });
      rateRange.addEventListener('input', () => {
        step.rate = Number(rateRange.value);
        rateVal.textContent = `${step.rate.toFixed(2)}x`;
        saveConfig(state.config);
      });
      if (delBtn) {
        delBtn.addEventListener('click', () => {
          state.config.steps.splice(idx, 1);
          saveConfig(state.config);
          renderSettingsModal();
        });
      }

      el.stepsEditorList.appendChild(row);
    });
  }

  function bindEvents() {
    el.modeFullBtns.forEach((b) => b.addEventListener('click', () => setMode('full')));
    el.modeAudioBtns.forEach((b) => b.addEventListener('click', () => setMode('audio')));

    el.backHomeBtn.addEventListener('click', goHome);
    el.versionSwitchShort.addEventListener('click', () => switchVersion('short'));
    el.versionSwitchClassic.addEventListener('click', () => switchVersion('classic'));

    el.playPauseBtn.addEventListener('click', togglePlayPause);
    el.prevSceneBtn.addEventListener('click', () => goScene(-1));
    el.nextSceneBtn.addEventListener('click', () => goScene(1));
    el.replaySceneBtn.addEventListener('click', () => startPlayback());

    el.caseToggleBtn.addEventListener('click', () => {
      state.config.uppercase = !state.config.uppercase;
      saveConfig(state.config);
      el.caseToggleBtn.textContent = state.config.uppercase ? 'abc' : 'ABC';
      karaoke.setUppercase(state.config.uppercase);
    });

    el.openSettingsBtns.forEach((b) => b.addEventListener('click', openSettings));
    el.closeSettingsBtn.addEventListener('click', closeSettings);
    el.settingsModal.addEventListener('click', (e) => {
      if (e.target === el.settingsModal) closeSettings();
    });

    el.presetSelect.addEventListener('change', () => {
      const key = el.presetSelect.value;
      if (!PRESETS[key]) return;
      state.config.steps = JSON.parse(JSON.stringify(PRESETS[key].steps));
      state.config.pauseMs = PRESETS[key].pauseMs;
      saveConfig(state.config);
      renderSettingsModal();
    });

    el.addStepBtn.addEventListener('click', () => {
      state.config.steps.push({
        id: 'step_' + Date.now(),
        enabled: true,
        lang: 'en',
        rate: 0.90,
        repeats: 1
      });
      saveConfig(state.config);
      renderSettingsModal();
    });

    el.pauseRange.addEventListener('input', () => {
      state.config.pauseMs = Number(el.pauseRange.value);
      el.pauseRangeVal.textContent = `${(state.config.pauseMs / 1000).toFixed(1)}s`;
      saveConfig(state.config);
    });

    el.autoAdvanceToggle.addEventListener('change', () => {
      state.config.autoAdvance = el.autoAdvanceToggle.checked;
      saveConfig(state.config);
    });
  }

  function init() {
    cacheDom();
    karaoke = new window.KaraokeRenderer(el.karaokeEn, el.karaokeEs, (word, lang) => {
      state.isPlaying = false;
      updatePlayButton();
      engine.speakWord(word, lang, lang === 'en' ? 0.85 : 1.0);
    });
    karaoke.setUppercase(state.config.uppercase);
    el.caseToggleBtn.textContent = state.config.uppercase ? 'abc' : 'ABC';

    applyModeUI();
    renderHome();
    bindEvents();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
