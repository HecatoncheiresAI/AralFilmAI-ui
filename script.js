(function () {
  'use strict';

  /* =========================================================
     VIEW NAVIGATION (sidebar + "go to" buttons)
  ========================================================== */
  const sidebarItems = document.querySelectorAll('.sidebar-item');
  const views = document.querySelectorAll('.view');
  const topNavLinks = document.querySelectorAll('.nav-link');

  function showView(name) {
    views.forEach(v => v.classList.toggle('active', v.id === 'view-' + name));
    sidebarItems.forEach(i => i.classList.toggle('active', i.dataset.view === name));
    document.querySelector('.workspace').scrollTop = 0;
    // close mobile sidebar after navigating
    document.getElementById('sidebar').classList.remove('open');
  }

  sidebarItems.forEach(item => {
    item.addEventListener('click', () => showView(item.dataset.view));
  });

  document.querySelectorAll('[data-goto]').forEach(btn => {
    btn.addEventListener('click', () => showView(btn.dataset.goto));
  });

  // Top nav is decorative-ish but wire "Projects" -> dashboard, others just toggle active state
  const topNavMap = { dashboard: 'dashboard', studio: 'timeline', characters: 'characters' };
  topNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      topNavLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      const key = link.dataset.topnav;
      if (topNavMap[key]) showView(topNavMap[key]);
    });
  });

  /* Mobile sidebar toggle */
  const mobileNavToggle = document.getElementById('mobileNavToggle');
  const sidebar = document.getElementById('sidebar');
  if (mobileNavToggle) {
    mobileNavToggle.addEventListener('click', () => sidebar.classList.toggle('open'));
  }

  /* =========================================================
     GENERIC SELECTABLE PILL / CARD GROUPS
     (format cards, style cards, render pills, inspector pills)
  ========================================================== */
  function wireSelectableGroup(container) {
    const items = container.querySelectorAll('.selectable');
    items.forEach(item => {
      item.addEventListener('click', () => {
        items.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
      });
    });
  }
  document.querySelectorAll('[data-group]').forEach(wireSelectableGroup);
  document.querySelectorAll('.format-grid.choosable').forEach(wireSelectableGroup);
  document.querySelectorAll('.style-grid').forEach(wireSelectableGroup);

  /* Accent color dots in inspector */
  document.querySelectorAll('.color-row').forEach(row => {
    const dots = row.querySelectorAll('.color-dot');
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        dots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
      });
    });
  });

  /* =========================================================
     INSPECTOR: collapsible sections + collapse whole panel
  ========================================================== */
  document.querySelectorAll('.inspector-section-head').forEach(head => {
    head.addEventListener('click', () => {
      head.closest('.inspector-section').classList.toggle('collapsed');
    });
  });

  const inspector = document.getElementById('inspector');
  const inspectorToggle = document.getElementById('inspectorToggle');
  if (inspectorToggle) {
    inspectorToggle.addEventListener('click', () => {
      inspector.classList.toggle('collapsed');
    });
  }

  /* =========================================================
     SLIDERS: live value labels (Field of view, Intensity, etc.)
  ========================================================== */
  document.querySelectorAll('.field-group .slider').forEach(slider => {
    const valueEl = slider.closest('.field-group').querySelector('.field-value');
    if (!valueEl) return;
    const unit = valueEl.textContent.trim().endsWith('°') ? '°' : '%';
    slider.addEventListener('input', () => {
      valueEl.textContent = slider.value + unit;
    });
  });

  /* Audio panel range sliders */
  document.querySelectorAll('.range-field').forEach(field => {
    const input = field.querySelector('input[type="range"]');
    const label = field.querySelector('span');
    if (!input || !label) return;
    input.addEventListener('input', () => {
      label.textContent = input.value + '%';
    });
  });

  /* =========================================================
     PROFILE MODAL
  ========================================================== */
  const modalOverlay = document.getElementById('modalOverlay');
  const profileChip = document.getElementById('profileChip');
  const modalClose = document.getElementById('modalClose');

  function openModal() { modalOverlay.classList.add('open'); }
  function closeModal() { modalOverlay.classList.remove('open'); }

  if (profileChip) profileChip.addEventListener('click', openModal);
  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  /* =========================================================
     CREATE PROJECT WIZARD
  ========================================================== */
  const wizardSteps = document.querySelectorAll('.wizard-step');
  const wizardPanes = document.querySelectorAll('.wizard-pane');
  const wizardBack = document.getElementById('wizardBack');
  const wizardNext = document.getElementById('wizardNext');
  const generateBtn = document.getElementById('generateBtn');
  const generateStatus = document.getElementById('generateStatus');
  let currentStep = 1;
  const totalSteps = wizardPanes.length;

  function renderWizard() {
    wizardSteps.forEach(step => {
      const n = Number(step.dataset.step);
      step.classList.toggle('active', n === currentStep);
      step.classList.toggle('done', n < currentStep);
    });
    wizardPanes.forEach(pane => {
      pane.classList.toggle('active', Number(pane.dataset.pane) === currentStep);
    });
    wizardBack.disabled = currentStep === 1;
    wizardNext.style.display = currentStep === totalSteps ? 'none' : 'inline-flex';
  }

  if (wizardNext) {
    wizardNext.addEventListener('click', () => {
      if (currentStep < totalSteps) {
        currentStep++;
        renderWizard();
      }
    });
  }
  if (wizardBack) {
    wizardBack.addEventListener('click', () => {
      if (currentStep > 1) {
        currentStep--;
        renderWizard();
      }
    });
  }
  wizardSteps.forEach(step => {
    step.addEventListener('click', () => {
      currentStep = Number(step.dataset.step);
      renderWizard();
    });
  });

  if (generateBtn) {
    generateBtn.addEventListener('click', () => {
      generateBtn.disabled = true;
      const messages = [
        'Analyzing your brief…',
        'Drafting script structure…',
        'Composing storyboard frames…',
        'Casting characters…',
        'Concept ready.'
      ];
      let i = 0;
      generateStatus.textContent = messages[0];
      const interval = setInterval(() => {
        i++;
        if (i >= messages.length) {
          clearInterval(interval);
          generateBtn.disabled = false;
          setTimeout(() => showView('storyboard'), 700);
          return;
        }
        generateStatus.textContent = messages[i];
      }, 700);
    });
  }

  if (wizardPanes.length) renderWizard();

  /* =========================================================
     FAKE AI CHAT (dashboard + assistant page)
  ========================================================== */
  const aiReplies = [
    'Generating concept… let me sketch three visual directions for that.',
    'On it. Drafting a shot list based on the mood you described.',
    'Got it — I will lean into high-contrast lighting and slow camera moves.',
    'Here is a first pass: three acts, cold-blue palette, minimal dialogue.',
    'Noted. I will keep pacing tight and favor wide establishing shots.'
  ];

  function setupChat(formId, inputId, scrollId) {
    const form = document.getElementById(formId);
    const input = document.getElementById(inputId);
    const scroll = document.getElementById(scrollId);
    if (!form || !input || !scroll) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = input.value.trim();
      if (!text) return;

      const userMsg = document.createElement('div');
      userMsg.className = 'chat-msg user';
      userMsg.innerHTML = '<div class="chat-bubble"></div>';
      userMsg.querySelector('.chat-bubble').textContent = text;
      scroll.appendChild(userMsg);
      input.value = '';
      scroll.scrollTop = scroll.scrollHeight;

      const typing = document.createElement('div');
      typing.className = 'chat-msg ai';
      typing.innerHTML = '<div class="chat-bubble typing">Thinking…</div>';
      scroll.appendChild(typing);
      scroll.scrollTop = scroll.scrollHeight;

      setTimeout(() => {
        const reply = aiReplies[Math.floor(Math.random() * aiReplies.length)];
        typing.querySelector('.chat-bubble').textContent = reply;
        typing.querySelector('.chat-bubble').classList.remove('typing');
        scroll.scrollTop = scroll.scrollHeight;
      }, 900);
    });
  }

  setupChat('dashChatForm', 'dashChatInput', 'dashChatScroll');
  setupChat('assistantChatForm', 'assistantChatInput', 'assistantChatScroll');

  /* =========================================================
     RENDER SCREEN — fake progress
  ========================================================== */
  const renderBtn = document.getElementById('renderBtn');
  const renderProgressWrap = document.getElementById('renderProgressWrap');
  const renderProgressFill = document.getElementById('renderProgressFill');
  const renderProgressLabel = document.getElementById('renderProgressLabel');

  if (renderBtn) {
    renderBtn.addEventListener('click', () => {
      renderBtn.disabled = true;
      renderProgressWrap.classList.add('visible');
      let pct = 0;
      renderProgressLabel.textContent = 'Rendering…';
      const timer = setInterval(() => {
        pct += Math.random() * 12 + 4;
        if (pct >= 100) {
          pct = 100;
          clearInterval(timer);
          renderProgressLabel.textContent = 'Complete';
          renderBtn.disabled = false;
        } else {
          renderProgressLabel.textContent = Math.floor(pct) + '%';
        }
        renderProgressFill.style.width = pct + '%';
      }, 450);
    });
  }

  /* =========================================================
     TIMELINE — draggable playhead
  ========================================================== */
  const playhead = document.getElementById('playhead');
  const timelineCard = document.querySelector('.timeline-card');

  if (playhead && timelineCard) {
    let dragging = false;

    const startDrag = () => { dragging = true; };
    const stopDrag = () => { dragging = false; };
    const onMove = (clientX) => {
      const rect = timelineCard.getBoundingClientRect();
      let pct = ((clientX - rect.left) / rect.width) * 100;
      pct = Math.max(0, Math.min(100, pct));
      playhead.style.left = pct + '%';
    };

    playhead.addEventListener('mousedown', startDrag);
    window.addEventListener('mouseup', stopDrag);
    window.addEventListener('mousemove', (e) => { if (dragging) onMove(e.clientX); });

    playhead.addEventListener('touchstart', startDrag, { passive: true });
    window.addEventListener('touchend', stopDrag);
    window.addEventListener('touchmove', (e) => {
      if (dragging && e.touches[0]) onMove(e.touches[0].clientX);
    }, { passive: true });

    // click-to-seek on the lane background
    timelineCard.addEventListener('click', (e) => {
      if (e.target.closest('.clip') || e.target === playhead) return;
      onMove(e.clientX);
    });
  }

  /* =========================================================
     TIMELINE CLIPS — simple selection state
  ========================================================== */
  document.querySelectorAll('.clip').forEach(clip => {
    clip.addEventListener('click', (e) => {
      e.stopPropagation();
      document.querySelectorAll('.clip').forEach(c => c.style.outline = 'none');
      clip.style.outline = '2px solid #fff';
    });
  });

})();
