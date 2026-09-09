(function () {
  const d = window.portfolioData;
  if (!d) return;

  const type = document.body.dataset.detailType;
  const id = new URLSearchParams(window.location.search).get('id');
  const root = document.querySelector('#detail-root');
  const esc = (value = '') => String(value).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const tags = (items = []) => items.map(x => `<span class="tag">${esc(x)}</span>`).join('');

  const collection = type === 'research' ? d.researchProjects : d.engineeringProjects;
  const item = collection.find(x => x.id === id);

  if (!item) {
    document.title = `Not found | ${d.personal.shortName}`;
    root.innerHTML = `<section class="container detail-not-found"><p class="eyebrow">Not found</p><h1>This ${type} page does not exist.</h1><p>The link may be outdated or the item may have been renamed in portfolio-data.js.</p><a class="btn btn-primary" href="index.html">Return home</a></section>`;
    return;
  }

  document.title = `${item.title} | ${d.personal.shortName}`;

  const gallery = (item.gallery && item.gallery.length ? item.gallery : [{ src: item.image, alt: item.imageAlt || item.title, caption: '' }]).filter(x => x && x.src);
  const hero = gallery[0] || { src: item.image, alt: item.title, caption: '' };
  const detail = item.detail || {};
  const detailSections = detail.sections || [];
  const videos = item.videos || [];
  const links = item.links || [];
  const subprojects = item.subprojects || [];

  const meta = type === 'research'
    ? `${esc(item.type || '')}${item.status ? ` · ${esc(item.status)}` : ''}`
    : `${esc(item.category || '')}${item.role ? ` · ${esc(item.role)}` : ''}`;

  const renderSubprojectGallery = (sub) => {
    const images = (sub.gallery || []).filter(x => x && x.src);
    if (!images.length) return '';
    return `
      <div class="subproject-gallery">
        ${images.map(g => `
          <button class="subproject-image" type="button" data-sub-image="${esc(g.src)}" data-sub-alt="${esc(g.alt || g.caption || sub.title)}" data-sub-caption="${esc(g.caption || '')}">
            <img src="${esc(g.src)}" alt="${esc(g.alt || g.caption || sub.title)}">
            ${g.caption ? `<span>${esc(g.caption)}</span>` : ''}
          </button>
        `).join('')}
      </div>`;
  };

  const renderSubprojectVideos = (sub) => {
    const vids = sub.videos || [];
    if (!vids.length) return '';
    return `<div class="subproject-videos">${vids.map(v => v.embed
      ? `<article class="video-card"><div class="video-frame"><iframe src="${esc(v.embed)}" title="${esc(v.title || sub.title)}" loading="lazy" allowfullscreen></iframe></div><h3>${esc(v.title || '')}</h3><p>${esc(v.caption || '')}</p></article>`
      : `<article class="video-card"><video controls preload="metadata" ${v.poster ? `poster="${esc(v.poster)}"` : ''}><source src="${esc(v.src)}" type="video/mp4">Your browser does not support HTML video.</video><h3>${esc(v.title || '')}</h3><p>${esc(v.caption || '')}</p></article>`
    ).join('')}</div>`;
  };

  const subprojectMarkup = subprojects.length ? `
    <section class="subprojects-section" id="subsystems">
      <div class="container">
        <div class="detail-section-heading subprojects-heading">
          <p class="eyebrow">Rover R&D</p>
          <h2>Mechanical Subsystems</h2>
          <p>These are individual R&D efforts within the larger Team Interplanetar rover program. Use the links below to jump directly to a subsystem.</p>
        </div>

        <nav class="subproject-jump-nav" aria-label="Interplanetar subsystem navigation">
          ${subprojects.map(sub => `<a href="#${esc(sub.id)}">${esc(sub.title)}</a>`).join('')}
        </nav>

        <div class="subproject-list">
          ${subprojects.map((sub, index) => `
            <article class="subproject-case" id="${esc(sub.id)}">
              <div class="subproject-number">${String(index + 1).padStart(2, '0')}</div>
              <div class="subproject-copy">
                <p class="micro-label">${esc(sub.role || 'R&D')}</p>
                <h3>${esc(sub.title)}</h3>
                <p>${esc(sub.description || '')}</p>
                ${sub.tags && sub.tags.length ? `<div class="tag-row">${tags(sub.tags)}</div>` : ''}
              </div>
              ${renderSubprojectGallery(sub)}
              ${renderSubprojectVideos(sub)}
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  ` : '';

  root.innerHTML = `
    <section class="detail-hero">
      <div class="container detail-hero-grid">
        <div class="detail-hero-copy reveal visible">
          <a class="detail-back" href="index.html#${type === 'research' ? 'research' : 'projects'}">← Back to ${type === 'research' ? 'research' : 'projects'}</a>
          <p class="eyebrow">${type === 'research' ? 'Research case study' : 'Engineering case study'}</p>
          <h1>${esc(item.title)}</h1>
          <p class="detail-meta">${meta}</p>
          ${type === 'research' && item.institution ? `<p class="institution">${esc(item.institution)}</p>` : ''}
          ${type === 'research' && item.supervisor ? `<p class="supervisor">${esc(item.supervisor)}</p>` : ''}
          <p class="detail-lead">${esc(item.summary || item.description || '')}</p>
          <div class="tag-row">${tags(item.tags || [])}</div>
        </div>
        <button class="detail-hero-media gallery-trigger" data-gallery-index="0" aria-label="Open main image">
          <img src="${esc(hero.src)}" alt="${esc(hero.alt || item.title)}">
          <span>View image ↗</span>
        </button>
      </div>
    </section>

    <section class="container detail-content">
      <div class="detail-main">
        ${detail.question ? `<section class="detail-section"><p class="micro-label">${type === 'research' ? 'Research question' : 'Engineering challenge'}</p><h2>${esc(detail.question)}</h2></section>` : ''}
        ${detail.approach ? `<section class="detail-section"><h2>${type === 'research' ? 'Approach' : 'Design approach'}</h2><p>${esc(detail.approach)}</p></section>` : ''}
        ${detail.contribution ? `<section class="detail-section"><h2>My contribution</h2><p>${esc(detail.contribution)}</p></section>` : ''}
        ${subprojects.length ? `<section class="detail-section"><h2>Subsystems in this program</h2><p>This project groups ${subprojects.length} related rover R&D efforts under Team Interplanetar instead of presenting them as unrelated homepage projects.</p><a class="inline-detail-link" href="#subsystems">Explore the mechanical subsystems ↓</a></section>` : ''}
        ${detailSections.map(s => `<section class="detail-section"><h2>${esc(s.title)}</h2><p>${esc(s.text)}</p></section>`).join('')}
      </div>

      <aside class="detail-side">
        ${(item.methods && item.methods.length) ? `<div class="detail-side-card"><p class="micro-label">Methods / tools</p>${item.methods.map(x => `<span>${esc(x)}</span>`).join('')}</div>` : ''}
        ${(detail.highlights && detail.highlights.length) ? `<div class="detail-side-card"><p class="micro-label">Highlights</p><ul>${detail.highlights.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>` : ''}
        ${subprojects.length ? `<div class="detail-side-card"><p class="micro-label">Subsystems</p>${subprojects.map(sub => `<a class="detail-external" href="#${esc(sub.id)}">${esc(sub.title)} ↓</a>`).join('')}</div>` : ''}
        ${links.length ? `<div class="detail-side-card"><p class="micro-label">Links</p>${links.filter(l => l.url).map(l => `<a class="detail-external" href="${esc(l.url)}" target="_blank" rel="noreferrer">${esc(l.label)} ↗</a>`).join('')}</div>` : ''}
      </aside>
    </section>

    ${subprojectMarkup}

    ${gallery.length ? `<section class="container detail-gallery-section"><div class="detail-section-heading"><p class="eyebrow">${subprojects.length ? 'Program overview' : 'Visuals'}</p><h2>${subprojects.length ? 'Selected Rover Visuals' : 'Gallery'}</h2><p>Click any image to view it at full size.</p></div><div class="detail-gallery">${gallery.map((g, i) => `<button class="gallery-item gallery-trigger" data-gallery-index="${i}" aria-label="Open ${esc(g.caption || g.alt || item.title)}"><img src="${esc(g.src)}" alt="${esc(g.alt || g.caption || item.title)}"><span>${esc(g.caption || '')}</span></button>`).join('')}</div></section>` : ''}

    ${videos.length ? `<section class="section section-alt"><div class="container"><div class="detail-section-heading"><p class="eyebrow">Motion</p><h2>Video</h2></div><div class="video-grid">${videos.map(v => v.embed ? `<article class="video-card"><div class="video-frame"><iframe src="${esc(v.embed)}" title="${esc(v.title || item.title)}" loading="lazy" allowfullscreen></iframe></div><h3>${esc(v.title || '')}</h3><p>${esc(v.caption || '')}</p></article>` : `<article class="video-card"><video controls preload="metadata" ${v.poster ? `poster="${esc(v.poster)}"` : ''}><source src="${esc(v.src)}" type="video/mp4">Your browser does not support HTML video.</video><h3>${esc(v.title || '')}</h3><p>${esc(v.caption || '')}</p></article>`).join('')}</div></div></section>` : ''}

    <section class="container detail-next"><div><p class="eyebrow">Continue exploring</p><h2>Return to the full portfolio</h2></div><a class="btn btn-primary" href="index.html#${type === 'research' ? 'research' : 'projects'}">Back to ${type === 'research' ? 'research' : 'projects'}</a></section>
  `;

  if (window.trackPortfolioEvent && d.analytics.trackProjectViews) {
    window.trackPortfolioEvent(type === 'research' ? 'research_project_view' : 'engineering_project_view', {
      project_slug: item.id,
      project_title: item.title,
      view_type: 'detail_page'
    });
  }

  const lightbox = document.querySelector('#lightbox');
  const lightboxImage = document.querySelector('#lightbox-image');
  const lightboxCaption = document.querySelector('#lightbox-caption');
  let activeIndex = 0;

  function openLightbox(index) {
    if (!gallery.length) return;
    activeIndex = (index + gallery.length) % gallery.length;
    const current = gallery[activeIndex];
    lightboxImage.src = current.src;
    lightboxImage.alt = current.alt || current.caption || item.title;
    lightboxCaption.textContent = current.caption || '';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
  }

  function openCustomLightbox(src, alt, caption) {
    lightboxImage.src = src;
    lightboxImage.alt = alt || item.title;
    lightboxCaption.textContent = caption || '';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
  }

  document.querySelectorAll('.gallery-trigger').forEach(btn => btn.addEventListener('click', () => openLightbox(Number(btn.dataset.galleryIndex || 0))));
  document.querySelectorAll('.subproject-image').forEach(btn => btn.addEventListener('click', () => {
    openCustomLightbox(btn.dataset.subImage, btn.dataset.subAlt, btn.dataset.subCaption);
  }));

  document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
  document.querySelector('.lightbox-prev').addEventListener('click', () => openLightbox(activeIndex - 1));
  document.querySelector('.lightbox-next').addEventListener('click', () => openLightbox(activeIndex + 1));
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft' && gallery.length) openLightbox(activeIndex - 1);
    if (e.key === 'ArrowRight' && gallery.length) openLightbox(activeIndex + 1);
  });

  // If the link includes a subsystem hash, scroll to it after the page renders.
  if (window.location.hash) {
    requestAnimationFrame(() => {
      const target = document.querySelector(window.location.hash);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
})();


/* ==========================================================
   INTERMEDIATE MOTION — DETAIL / CASE-STUDY PAGES
   ========================================================== */
(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  const progress = document.createElement('div');
  progress.className = 'scroll-progress';
  progress.setAttribute('aria-hidden', 'true');
  document.body.appendChild(progress);

  const updateProgress = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
    progress.style.transform = `scaleX(${ratio})`;
  };
  updateProgress();
  window.addEventListener('scroll', updateProgress, { passive: true });

  const motionTargets = [
    ...document.querySelectorAll(
      '.detail-section, .detail-side-card, .detail-gallery-section, .gallery-item, .video-card, .subproject-case, .detail-next'
    )
  ];

  motionTargets.forEach((el, i) => {
    el.classList.add('detail-motion');
    el.style.setProperty('--detail-delay', `${(i % 4) * 55}ms`);
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('motion-visible');
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -8% 0px'
  });

  motionTargets.forEach(el => observer.observe(el));

  /* Gentle hero-media parallax */
  const heroMedia = document.querySelector('.detail-hero-media');
  if (heroMedia && window.matchMedia('(pointer:fine)').matches) {
    const img = heroMedia.querySelector('img');
    heroMedia.addEventListener('pointermove', e => {
      const r = heroMedia.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      if (img) img.style.transform = `translate3d(${x * 5}px, ${y * 5}px, 0) scale(1.018)`;
    });
    heroMedia.addEventListener('pointerleave', () => {
      if (img) img.style.transform = '';
    });
  }

  /* Entry state for page */
  requestAnimationFrame(() => document.body.classList.add('detail-page-ready'));
})();
