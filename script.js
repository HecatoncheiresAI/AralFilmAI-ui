(function () {
  'use strict';

  /* =========================================================
     INTERNATIONALIZATION (English / Russian / Uzbek)
  ========================================================== */
  const translations = {
    en: {
      'banner.dev': 'This system is under development. Some features are placeholders and may change.',
      'topnav.projects': 'Projects', 'topnav.studio': 'Studio', 'topnav.characters': 'Characters',
      'topnav.assets': 'Assets', 'topnav.marketplace': 'Marketplace',
      'sidebar.dashboard': 'Dashboard', 'sidebar.create': 'Create Project', 'sidebar.assistant': 'AI Assistant',
      'sidebar.scripts': 'Scripts', 'sidebar.storyboard': 'Storyboard', 'sidebar.characters': 'Characters',
      'sidebar.scenes': 'Scenes', 'sidebar.timeline': 'Timeline', 'sidebar.audio': 'Audio',
      'sidebar.render': 'Rendering', 'sidebar.export': 'Export', 'sidebar.storage': 'Cloud storage',
      'dash.greeting': 'Good evening, Sardor',
      'dash.subtitle': 'Three projects are in progress. Rendering queue is clear.',
      'dash.newProject': 'New Project', 'dash.createNew': 'Create new project',
      'dash.chooseFormat': 'Choose a format to begin', 'dash.recent': 'Recent projects',
      'dash.viewAll': 'View all', 'dash.progress': 'Production progress',
      'dash.aiAssistant': 'AI creative assistant', 'dash.aiAssistantSub': 'Describe a scene, get a concept back',
      'format.film': 'Film', 'format.filmSub': 'Feature & short narrative',
      'format.commercial': 'Commercial', 'format.commercialSub': 'Brand & product ads',
      'format.musicVideo': 'Music Video', 'format.musicVideoSub': 'Rhythm-driven visuals',
      'format.animation': 'Animation', 'format.animationSub': 'Stylized & motion',
      'status.rendering': 'Rendering', 'status.inStoryboard': 'In Storyboard', 'status.draft': 'Draft',
      'status.completed': 'Completed', 'status.locked': 'Locked', 'status.editing': 'Editing',
      'progress.script': 'Script', 'progress.storyboard': 'Storyboard', 'progress.characters': 'Characters',
      'progress.scenes': 'Scenes', 'progress.rendering': 'Rendering',
      'chat.placeholder': 'Describe the shot, mood, or story you need…', 'chat.send': 'Send',
      'create.title': 'Create a new project',
      'create.subtitle': 'Four short steps and AralFilm will draft your first cut.',
      'wizard.step1': 'Project Type', 'wizard.step2': 'Creative Idea', 'wizard.step3': 'Visual Style',
      'wizard.step4': 'Generate', 'wizard.whatMaking': 'What are you making?',
      'wizard.describeIdea': 'Describe your idea',
      'wizard.ideaPlaceholder': 'Describe your idea… setting, characters, tone, key moments.',
      'wizard.ideaHint': 'Tip: mention mood, era, and pacing for a sharper first draft.',
      'wizard.chooseStyle': 'Choose a visual style', 'wizard.ready': 'Ready to generate',
      'wizard.readySub': 'AralFilm will draft a script, storyboard, and shot list from your brief.',
      'wizard.createWithAI': 'Create with AI', 'wizard.back': 'Back', 'wizard.continue': 'Continue',
      'style.realistic': 'Realistic', 'style.cinematic': 'Cinematic', 'style.fantasy': 'Fantasy',
      'style.scifi': 'Sci-Fi', 'style.vintage': 'Vintage', 'style.minimal': 'Minimal',
      'style.anime': 'Anime', 'style.filmNoir': 'Film Noir', 'style.documentary': 'Documentary',
      'assistant.title': 'AI Assistant', 'assistant.subtitle': 'Your creative co-writer across every stage of production.',
      'assistant.greeting': "Hi Sardor. Tell me what you're building today and I'll help shape it.",
      'assistant.placeholder': 'Ask for a concept, a scene rewrite, a shot list…',
      'scripts.title': 'Scripts', 'scripts.subtitle': 'Draft and revise screenplay pages for the active project.',
      'scripts.newScene': 'New Scene',
      'storyboard.title': 'Storyboard', 'storyboard.addFrame': 'Add Frame', 'storyboard.addScene': 'Add scene',
      'shot.wide': 'Wide shot', 'shot.closeup': 'Close-up', 'shot.tracking': 'Tracking shot',
      'shot.establishing': 'Establishing', 'shot.twoshot': 'Two-shot', 'frame.camera': 'Camera',
      'char.title': 'Character Studio', 'char.subtitle': 'Design a character and keep it consistent across every scene.',
      'char.regenerate': 'Regenerate Preview', 'char.name': 'Name', 'char.age': 'Age',
      'char.appearance': 'Appearance', 'char.personality': 'Personality', 'char.clothing': 'Clothing',
      'char.style': 'Style', 'char.generate': 'Generate Character',
      'scenes.title': 'Scenes', 'scenes.subtitle': 'All scenes in Neon Horizon, grouped by act.',
      'scenes.colScene': 'Scene', 'scenes.colLocation': 'Location', 'scenes.colDuration': 'Duration',
      'scenes.colStatus': 'Status',
      'timeline.title': 'Timeline', 'timeline.zoom': 'Zoom', 'timeline.video': 'Video',
      'timeline.audio': 'Audio', 'timeline.effects': 'Effects',
      'audio.title': 'Audio', 'audio.subtitle': 'Score, dialogue, and sound design layers.',
      'audio.score': 'Score', 'audio.voice': 'Voice', 'audio.ambience': 'Station Ambience',
      'render.title': 'Render', 'render.subtitle': 'Configure output settings for Neon Horizon — Act I.',
      'render.resolution': 'Resolution', 'render.framerate': 'Frame rate', 'render.color': 'Color',
      'render.standard': 'Standard', 'render.cinema': 'Cinema', 'render.start': 'Start Render',
      'render.queued': 'Queued', 'render.rendering': 'Rendering…', 'render.complete': 'Complete',
      'export.title': 'Export', 'export.subtitle': 'Deliver finished cuts to your destinations.',
      'export.download': 'Download',
      'inspector.sceneSettings': 'Scene Settings', 'inspector.camera': 'Camera', 'inspector.lens': 'Lens',
      'inspector.movement': 'Movement', 'inspector.dolly': 'Dolly', 'inspector.static': 'Static',
      'inspector.handheld': 'Handheld', 'inspector.crane': 'Crane', 'inspector.fov': 'Field of view',
      'inspector.lighting': 'Lighting', 'inspector.intensity': 'Intensity',
      'light.cinematic': 'Cinematic', 'light.soft': 'Soft', 'light.dark': 'Dark',
      'inspector.ambience': 'Ambience', 'inspector.accentColor': 'Accent color',
      'modal.profile': 'Profile', 'modal.studioPlan': 'Studio plan', 'modal.accountSettings': 'Account settings',
      'modal.billing': 'Billing & plan', 'modal.team': 'Team members', 'modal.signOut': 'Sign out'
    },
    ru: {
      'banner.dev': 'Система находится в разработке. Некоторые функции являются заглушками и могут измениться.',
      'topnav.projects': 'Проекты', 'topnav.studio': 'Студия', 'topnav.characters': 'Персонажи',
      'topnav.assets': 'Ресурсы', 'topnav.marketplace': 'Маркетплейс',
      'sidebar.dashboard': 'Панель', 'sidebar.create': 'Создать проект', 'sidebar.assistant': 'ИИ-ассистент',
      'sidebar.scripts': 'Сценарии', 'sidebar.storyboard': 'Раскадровка', 'sidebar.characters': 'Персонажи',
      'sidebar.scenes': 'Сцены', 'sidebar.timeline': 'Таймлайн', 'sidebar.audio': 'Аудио',
      'sidebar.render': 'Рендеринг', 'sidebar.export': 'Экспорт', 'sidebar.storage': 'Облачное хранилище',
      'dash.greeting': 'Добрый вечер, Сардор',
      'dash.subtitle': 'Три проекта в работе. Очередь рендеринга свободна.',
      'dash.newProject': 'Новый проект', 'dash.createNew': 'Создать новый проект',
      'dash.chooseFormat': 'Выберите формат, чтобы начать', 'dash.recent': 'Недавние проекты',
      'dash.viewAll': 'Показать все', 'dash.progress': 'Прогресс производства',
      'dash.aiAssistant': 'ИИ-творческий ассистент', 'dash.aiAssistantSub': 'Опишите сцену — получите концепцию',
      'format.film': 'Фильм', 'format.filmSub': 'Полнометражные и короткие истории',
      'format.commercial': 'Реклама', 'format.commercialSub': 'Бренд и реклама продуктов',
      'format.musicVideo': 'Клип', 'format.musicVideoSub': 'Визуал в ритме музыки',
      'format.animation': 'Анимация', 'format.animationSub': 'Стилизация и движение',
      'status.rendering': 'Рендеринг', 'status.inStoryboard': 'Раскадровка', 'status.draft': 'Черновик',
      'status.completed': 'Готово', 'status.locked': 'Утверждено', 'status.editing': 'Редактируется',
      'progress.script': 'Сценарий', 'progress.storyboard': 'Раскадровка', 'progress.characters': 'Персонажи',
      'progress.scenes': 'Сцены', 'progress.rendering': 'Рендеринг',
      'chat.placeholder': 'Опишите кадр, настроение или историю…', 'chat.send': 'Отправить',
      'create.title': 'Создание нового проекта',
      'create.subtitle': 'Четыре коротких шага — и AralFilm подготовит первый черновой монтаж.',
      'wizard.step1': 'Тип проекта', 'wizard.step2': 'Идея', 'wizard.step3': 'Визуальный стиль',
      'wizard.step4': 'Генерация', 'wizard.whatMaking': 'Что вы создаёте?',
      'wizard.describeIdea': 'Опишите свою идею',
      'wizard.ideaPlaceholder': 'Опишите идею… обстановка, персонажи, настроение, ключевые моменты.',
      'wizard.ideaHint': 'Совет: укажите настроение, эпоху и темп повествования для точного черновика.',
      'wizard.chooseStyle': 'Выберите визуальный стиль', 'wizard.ready': 'Готово к генерации',
      'wizard.readySub': 'AralFilm подготовит сценарий, раскадровку и список кадров по вашему брифу.',
      'wizard.createWithAI': 'Создать с ИИ', 'wizard.back': 'Назад', 'wizard.continue': 'Продолжить',
      'style.realistic': 'Реализм', 'style.cinematic': 'Кинематографичный', 'style.fantasy': 'Фэнтези',
      'style.scifi': 'Научная фантастика', 'style.vintage': 'Винтаж', 'style.minimal': 'Минимализм',
      'style.anime': 'Аниме', 'style.filmNoir': 'Нуар', 'style.documentary': 'Документальный',
      'assistant.title': 'ИИ-ассистент', 'assistant.subtitle': 'Ваш творческий соавтор на всех этапах производства.',
      'assistant.greeting': 'Привет, Сардор. Расскажите, над чем вы работаете, и я помогу это сформировать.',
      'assistant.placeholder': 'Запросите концепцию, переписку сцены, список кадров…',
      'scripts.title': 'Сценарии', 'scripts.subtitle': 'Пишите и редактируйте страницы сценария активного проекта.',
      'scripts.newScene': 'Новая сцена',
      'storyboard.title': 'Раскадровка', 'storyboard.addFrame': 'Добавить кадр', 'storyboard.addScene': 'Добавить сцену',
      'shot.wide': 'Общий план', 'shot.closeup': 'Крупный план', 'shot.tracking': 'Проездка камеры',
      'shot.establishing': 'Установочный план', 'shot.twoshot': 'Двойной план', 'frame.camera': 'Камера',
      'char.title': 'Студия персонажей', 'char.subtitle': 'Создайте персонажа и сохраните его облик во всех сценах.',
      'char.regenerate': 'Обновить превью', 'char.name': 'Имя', 'char.age': 'Возраст',
      'char.appearance': 'Внешность', 'char.personality': 'Характер', 'char.clothing': 'Одежда',
      'char.style': 'Стиль', 'char.generate': 'Сгенерировать персонажа',
      'scenes.title': 'Сцены', 'scenes.subtitle': 'Все сцены проекта Neon Horizon по актам.',
      'scenes.colScene': 'Сцена', 'scenes.colLocation': 'Локация', 'scenes.colDuration': 'Длительность',
      'scenes.colStatus': 'Статус',
      'timeline.title': 'Таймлайн', 'timeline.zoom': 'Масштаб', 'timeline.video': 'Видео',
      'timeline.audio': 'Аудио', 'timeline.effects': 'Эффекты',
      'audio.title': 'Аудио', 'audio.subtitle': 'Музыка, диалоги и слои звукового дизайна.',
      'audio.score': 'Музыка', 'audio.voice': 'Голос', 'audio.ambience': 'Атмосфера станции',
      'render.title': 'Рендеринг', 'render.subtitle': 'Настройте параметры вывода для Neon Horizon — Акт I.',
      'render.resolution': 'Разрешение', 'render.framerate': 'Частота кадров', 'render.color': 'Цвет',
      'render.standard': 'Стандарт', 'render.cinema': 'Кино', 'render.start': 'Начать рендеринг',
      'render.queued': 'В очереди', 'render.rendering': 'Рендеринг…', 'render.complete': 'Готово',
      'export.title': 'Экспорт', 'export.subtitle': 'Доставьте готовые монтажи в нужные места.',
      'export.download': 'Скачать',
      'inspector.sceneSettings': 'Настройки сцены', 'inspector.camera': 'Камера', 'inspector.lens': 'Объектив',
      'inspector.movement': 'Движение', 'inspector.dolly': 'Тележка', 'inspector.static': 'Статика',
      'inspector.handheld': 'С рук', 'inspector.crane': 'Кран', 'inspector.fov': 'Угол обзора',
      'inspector.lighting': 'Освещение', 'inspector.intensity': 'Интенсивность',
      'light.cinematic': 'Кинематографичное', 'light.soft': 'Мягкое', 'light.dark': 'Тёмное',
      'inspector.ambience': 'Атмосфера', 'inspector.accentColor': 'Акцентный цвет',
      'modal.profile': 'Профиль', 'modal.studioPlan': 'Тариф Studio', 'modal.accountSettings': 'Настройки аккаунта',
      'modal.billing': 'Оплата и тариф', 'modal.team': 'Участники команды', 'modal.signOut': 'Выйти'
    },
    uz: {
      'banner.dev': "Tizim ishlab chiqilmoqda. Ba'zi funksiyalar namuna sifatida ko‘rsatilgan va o‘zgarishi mumkin.",
      'topnav.projects': 'Loyihalar', 'topnav.studio': 'Studiya', 'topnav.characters': 'Personajlar',
      'topnav.assets': 'Resurslar', 'topnav.marketplace': 'Bozor',
      'sidebar.dashboard': 'Boshqaruv paneli', 'sidebar.create': 'Loyiha yaratish', 'sidebar.assistant': 'AI Yordamchi',
      'sidebar.scripts': 'Ssenariylar', 'sidebar.storyboard': 'Raskadrovka', 'sidebar.characters': 'Personajlar',
      'sidebar.scenes': 'Sahnalar', 'sidebar.timeline': 'Vaqt chizig‘i', 'sidebar.audio': 'Audio',
      'sidebar.render': 'Rendering', 'sidebar.export': 'Eksport', 'sidebar.storage': 'Bulutli xotira',
      'dash.greeting': 'Xayrli kech, Sardor',
      'dash.subtitle': 'Uchta loyiha jarayonda. Rendering navbati bo‘sh.',
      'dash.newProject': 'Yangi loyiha', 'dash.createNew': 'Yangi loyiha yaratish',
      'dash.chooseFormat': 'Boshlash uchun formatni tanlang', 'dash.recent': 'So‘nggi loyihalar',
      'dash.viewAll': 'Barchasini ko‘rish', 'dash.progress': 'Ishlab chiqarish jarayoni',
      'dash.aiAssistant': 'AI ijodiy yordamchi', 'dash.aiAssistantSub': 'Sahnani tasvirlang — g‘oya oling',
      'format.film': 'Film', 'format.filmSub': 'To‘liq metrajli va qisqa hikoyalar',
      'format.commercial': 'Reklama', 'format.commercialSub': 'Brend va mahsulot reklamalari',
      'format.musicVideo': 'Musiqiy klip', 'format.musicVideoSub': 'Ritmga mos vizual',
      'format.animation': 'Animatsiya', 'format.animationSub': 'Stilizatsiya va harakat',
      'status.rendering': 'Rendering', 'status.inStoryboard': 'Raskadrovkada', 'status.draft': 'Qoralama',
      'status.completed': 'Tugallangan', 'status.locked': 'Tasdiqlangan', 'status.editing': 'Tahrirlanmoqda',
      'progress.script': 'Ssenariy', 'progress.storyboard': 'Raskadrovka', 'progress.characters': 'Personajlar',
      'progress.scenes': 'Sahnalar', 'progress.rendering': 'Rendering',
      'chat.placeholder': 'Kadr, kayfiyat yoki hikoyani tasvirlang…', 'chat.send': 'Yuborish',
      'create.title': 'Yangi loyiha yaratish',
      'create.subtitle': 'To‘rtta qisqa qadam va AralFilm birinchi qoralamani tayyorlaydi.',
      'wizard.step1': 'Loyiha turi', 'wizard.step2': 'Ijodiy g‘oya', 'wizard.step3': 'Vizual uslub',
      'wizard.step4': 'Generatsiya', 'wizard.whatMaking': 'Nima yaratmoqchisiz?',
      'wizard.describeIdea': 'G‘oyangizni tasvirlang',
      'wizard.ideaPlaceholder': 'G‘oyani tasvirlang… muhit, personajlar, kayfiyat, asosiy lahzalar.',
      'wizard.ideaHint': 'Maslahat: aniqroq qoralama uchun kayfiyat, davr va sur’atni ko‘rsating.',
      'wizard.chooseStyle': 'Vizual uslubni tanlang', 'wizard.ready': 'Generatsiyaga tayyor',
      'wizard.readySub': 'AralFilm brifingiz asosida ssenariy, raskadrovka va kadrlar ro‘yxatini tayyorlaydi.',
      'wizard.createWithAI': 'AI bilan yaratish', 'wizard.back': 'Orqaga', 'wizard.continue': 'Davom etish',
      'style.realistic': 'Realistik', 'style.cinematic': 'Kinematografik', 'style.fantasy': 'Fantastika',
      'style.scifi': 'Ilmiy fantastika', 'style.vintage': 'Vintaj', 'style.minimal': 'Minimal',
      'style.anime': 'Anime', 'style.filmNoir': 'Film-nuar', 'style.documentary': 'Hujjatli',
      'assistant.title': 'AI Yordamchi', 'assistant.subtitle': 'Ishlab chiqarishning har bosqichidagi ijodiy hamkoringiz.',
      'assistant.greeting': 'Salom, Sardor. Bugun nima yaratayotganingizni ayting, shakllantirishga yordam beraman.',
      'assistant.placeholder': 'G‘oya, sahna tahriri yoki kadrlar ro‘yxatini so‘rang…',
      'scripts.title': 'Ssenariylar', 'scripts.subtitle': 'Faol loyiha uchun ssenariy sahifalarini yozing va tahrirlang.',
      'scripts.newScene': 'Yangi sahna',
      'storyboard.title': 'Raskadrovka', 'storyboard.addFrame': 'Kadr qo‘shish', 'storyboard.addScene': 'Sahna qo‘shish',
      'shot.wide': 'Umumiy plan', 'shot.closeup': 'Yaqin plan', 'shot.tracking': 'Kuzatuv kadri',
      'shot.establishing': 'Kirish plani', 'shot.twoshot': 'Ikkilik plan', 'frame.camera': 'Kamera',
      'char.title': 'Personaj studiyasi', 'char.subtitle': 'Personaj yarating va uni barcha sahnalarda bir xil saqlang.',
      'char.regenerate': 'Ko‘rinishni yangilash', 'char.name': 'Ism', 'char.age': 'Yosh',
      'char.appearance': 'Tashqi ko‘rinish', 'char.personality': 'Xarakter', 'char.clothing': 'Kiyim',
      'char.style': 'Uslub', 'char.generate': 'Personaj yaratish',
      'scenes.title': 'Sahnalar', 'scenes.subtitle': 'Neon Horizon loyihasidagi barcha sahnalar, aktlar bo‘yicha.',
      'scenes.colScene': 'Sahna', 'scenes.colLocation': 'Joylashuv', 'scenes.colDuration': 'Davomiyligi',
      'scenes.colStatus': 'Holati',
      'timeline.title': 'Vaqt chizig‘i', 'timeline.zoom': 'Masshtab', 'timeline.video': 'Video',
      'timeline.audio': 'Audio', 'timeline.effects': 'Effektlar',
      'audio.title': 'Audio', 'audio.subtitle': 'Musiqa, dialog va tovush dizayni qatlamlari.',
      'audio.score': 'Musiqa', 'audio.voice': 'Ovoz', 'audio.ambience': 'Stansiya muhiti',
      'render.title': 'Rendering', 'render.subtitle': 'Neon Horizon — I akt uchun chiqish sozlamalari.',
      'render.resolution': 'Ruxsat', 'render.framerate': 'Kadr chastotasi', 'render.color': 'Rang',
      'render.standard': 'Standart', 'render.cinema': 'Kino', 'render.start': 'Renderni boshlash',
      'render.queued': 'Navbatda', 'render.rendering': 'Render qilinmoqda…', 'render.complete': 'Tayyor',
      'export.title': 'Eksport', 'export.subtitle': 'Tayyor montajlarni kerakli manzillarga yetkazing.',
      'export.download': 'Yuklab olish',
      'inspector.sceneSettings': 'Sahna sozlamalari', 'inspector.camera': 'Kamera', 'inspector.lens': 'Linza',
      'inspector.movement': 'Harakat', 'inspector.dolly': 'Doli', 'inspector.static': 'Statik',
      'inspector.handheld': 'Qo‘lda', 'inspector.crane': 'Kran', 'inspector.fov': 'Ko‘rish burchagi',
      'inspector.lighting': 'Yoritish', 'inspector.intensity': 'Intensivlik',
      'light.cinematic': 'Kinematografik', 'light.soft': 'Yumshoq', 'light.dark': 'Qorong‘i',
      'inspector.ambience': 'Muhit', 'inspector.accentColor': 'Urg‘u rangi',
      'modal.profile': 'Profil', 'modal.studioPlan': 'Studiya tarifi', 'modal.accountSettings': 'Hisob sozlamalari',
      'modal.billing': 'To‘lov va tarif', 'modal.team': 'Jamoa a\u2019zolari', 'modal.signOut': 'Chiqish'
    }
  };

  let currentLang = 'en';

  function applyTranslations(lang) {
    currentLang = translations[lang] ? lang : 'en';
    const dict = translations[currentLang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
    });

    document.documentElement.setAttribute('lang', currentLang);

    const labelEl = document.getElementById('langCurrentLabel');
    if (labelEl) labelEl.textContent = currentLang.toUpperCase();

    document.querySelectorAll('.lang-option').forEach(opt => {
      opt.classList.toggle('active', opt.dataset.lang === currentLang);
    });
  }

  function setupLanguageSwitcher() {
    const switcher = document.getElementById('langSwitcher');
    const currentBtn = document.getElementById('langCurrentBtn');
    if (!switcher || !currentBtn) return;

    currentBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      switcher.classList.toggle('open');
      currentBtn.setAttribute('aria-expanded', switcher.classList.contains('open'));
    });

    switcher.querySelectorAll('.lang-option').forEach(opt => {
      opt.addEventListener('click', () => {
        applyTranslations(opt.dataset.lang);
        switcher.classList.remove('open');
        currentBtn.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', (e) => {
      if (!switcher.contains(e.target)) {
        switcher.classList.remove('open');
        currentBtn.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        switcher.classList.remove('open');
        currentBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  setupLanguageSwitcher();
  applyTranslations('en');

  /* Dev banner dismiss */
  const devBanner = document.getElementById('devBanner');
  const devBannerClose = document.getElementById('devBannerClose');
  if (devBannerClose && devBanner) {
    devBannerClose.addEventListener('click', () => devBanner.classList.add('hidden'));
  }

  /* Expose translation helper for other parts of this script (render status, etc.) */
  function t(key) {
    return (translations[currentLang] && translations[currentLang][key]) || translations.en[key] || key;
  }

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
      renderProgressLabel.textContent = t('render.rendering');
      const timer = setInterval(() => {
        pct += Math.random() * 12 + 4;
        if (pct >= 100) {
          pct = 100;
          clearInterval(timer);
          renderProgressLabel.textContent = t('render.complete');
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
