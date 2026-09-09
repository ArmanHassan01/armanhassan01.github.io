(function () {
  const d = window.portfolioData;
  if (!d) throw new Error('portfolioData was not loaded.');

  document.title = d.site.title;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = d.site.description;

  const $ = (sel) => document.querySelector(sel);
  const esc = (value = '') => String(value).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const tags = (items = []) => items.map(x => `<span class="tag">${esc(x)}</span>`).join('');
  const linkOrHash = (x) => x || '#';

  function socialLinks() {
    const icons = {
      linkedin: 'in', googleScholar: 'G', github: '&lt;/&gt;', orcid: 'iD'
    };
    return Object.entries(d.links)
      .filter(([, url]) => url)
      .map(([key, url]) => `<a class="social-link" href="${esc(url)}" target="_blank" rel="noreferrer" data-social="${esc(key)}" aria-label="${esc(key)}">${icons[key] || esc(key)}</a>`)
      .join('');
  }

  $('#hero').innerHTML = `
    <div class="hero-copy reveal">
      <div class="eyebrow">${esc(d.personal.eyebrow)}</div>
      <h1>${esc(d.personal.name)}</h1>
      <p class="hero-kicker">${esc(d.personal.subtitle)}</p>
      <p class="hero-text">${esc(d.personal.heroText)}</p>
      <div class="phd-chip"><span></span>${esc(d.personal.phdStatus)}</div>
      <div class="hero-actions">
        <a class="btn btn-primary" href="#research">View research</a>
        <a class="btn btn-secondary cv-link" data-location="hero" href="${esc(d.personal.cv)}" target="_blank">Download CV</a>
        <a class="text-link email-link" data-location="hero" href="mailto:${esc(d.personal.email)}">Email me ↗</a>
      </div>
      <div class="social-row">${socialLinks()}</div>
    </div>
    <div class="hero-visual reveal">
      <div class="portrait-shell">
        <div class="lattice lattice-a"></div><div class="lattice lattice-b"></div>
        <img src="${esc(d.personal.profileImage)}" alt="Portrait of ${esc(d.personal.name)}" class="portrait">
        <div class="portrait-caption"><strong>${esc(d.personal.title)}</strong><span>${esc(d.personal.institution)}</span></div>
      </div>
    </div>`;

  $('#stats').innerHTML = d.academicStats.map(s => `<div class="stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('');

  if (d.site.sections.researchInterests) {
    $('#research-interests').innerHTML = `
      <div class="section-head reveal"><span class="section-index">01</span><div><p class="eyebrow">Research direction</p><h2>Research Interests</h2><p>Material systems and mechanical architectures where composition, geometry, interfaces, and structure create useful thermal or robotic behavior.</p></div></div>
      <div class="interest-grid">${d.researchInterests.map((r, i) => `
        <article class="interest-card ${esc(r.emphasis)} reveal">
          <div class="card-number">0${i + 1}</div>
          <p class="micro-label">${esc(r.label)}</p>
          <h3>${esc(r.title)}</h3>
          <p>${esc(r.description)}</p>
          <div class="tag-row">${tags(r.topics)}</div>
        </article>`).join('')}</div>`;
  }

  const researchOrder = d.site.featuredResearch.map(id => d.researchProjects.find(x => x.id === id)).filter(Boolean);
  if (d.site.sections.research) {
    $('#research').innerHTML = `
      <div class="section-head reveal"><span class="section-index">02</span><div><p class="eyebrow">Selected work</p><h2>Featured Research</h2><p>Current and completed research in molecular simulation, thermal transport, advanced materials, and nanoscale systems.</p></div></div>
      <div class="research-list">${researchOrder.map((r, i) => `
        <article class="research-card reveal" data-research-id="${esc(r.id)}">
          <div class="research-image-wrap"><img src="${esc(r.image)}" alt="${esc(r.imageAlt)}" class="research-image"></div>
          <div class="research-content">
            <div class="project-meta"><span>${esc(r.type)}</span><span class="status-dot"></span><span>${esc(r.status)}</span></div>
            <h3>${esc(r.title)}</h3>
            <p class="institution">${esc(r.institution)}</p>
            ${r.supervisor ? `<p class="supervisor">${esc(r.supervisor)}</p>` : ''}
            <p>${esc(r.summary)}</p>
            <div class="tag-row">${tags(r.tags)}</div>
            <div class="method-line"><strong>Methods</strong><span>${esc(r.methods.join(' · '))}</span></div>
          </div>
        </article>`).join('')}</div>
      <div class="workflow reveal">
        ${['Atomic Structure','Force Field / Validation','Equilibration','Molecular Dynamics','Thermal / Diffusion Analysis','Post-processing','Physical Interpretation'].map((x, i, arr) => `<div class="workflow-step"><span>${String(i+1).padStart(2,'0')}</span><strong>${x}</strong></div>${i < arr.length-1 ? '<div class="workflow-arrow">→</div>' : ''}`).join('')}
      </div>`;
  }

  if (d.site.sections.publications) {
    $('#publications').innerHTML = `
      <div class="section-head reveal"><span class="section-index">03</span><div><p class="eyebrow">Research output</p><h2>Publications</h2><p>Peer-reviewed and conference research contributions.</p></div></div>
      <div class="publication-list">${d.publications.map((p, i) => `
        <article class="publication reveal">
          <div class="publication-number">${String(i+1).padStart(2,'0')}</div>
          <div class="publication-main"><div class="publication-year">${esc(p.year)}</div><h3>${esc(p.title)}</h3><p class="authors">${esc(p.authors)}</p><p>${esc(p.venue)}</p><p class="contribution">${esc(p.contribution)}</p></div>
          <div class="publication-action"><a href="${esc(p.url)}" target="_blank" rel="noreferrer" class="btn btn-small publication-link" data-title="${esc(p.title)}">DOI ↗</a><span>${esc(p.doi)}</span></div>
        </article>`).join('')}</div>`;
  }

  if (d.site.sections.bridge) {
    $('#bridge').innerHTML = `
      <div class="bridge-box reveal">
        <p class="eyebrow">Research trajectory</p><h2>${esc(d.researchBridge.title)}</h2><p class="bridge-intro">${esc(d.researchBridge.text)}</p>
        <div class="bridge-stages">${d.researchBridge.stages.map((s, i) => `<div class="bridge-stage"><div class="bridge-icon">${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3><ul>${s.items.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>${i < d.researchBridge.stages.length-1 ? '<div class="bridge-arrow">→</div>' : ''}`).join('')}</div>
      </div>`;
  }

  const projectOrder = d.site.featuredProjects.map(id => d.engineeringProjects.find(x => x.id === id)).filter(Boolean);
  const remaining = d.engineeringProjects.filter(x => !d.site.featuredProjects.includes(x.id));
  const projects = [...projectOrder, ...remaining];
  if (d.site.sections.projects) {
    $('#projects').innerHTML = `
      <div class="section-head reveal"><span class="section-index">04</span><div><p class="eyebrow">Mechanical systems</p><h2>Selected Engineering Projects</h2><p>Mechanical design, prototyping, and robotic-system experience supporting my interests in mechanisms, adaptive structures, and material-enabled robotics.</p></div></div>
      <div class="project-grid">${projects.map((p, i) => `
        <article class="project-card reveal ${i === 0 ? 'project-featured' : ''}" data-project-id="${esc(p.id)}">
          <div class="project-image-wrap"><img src="${esc(p.image)}" alt="${esc(p.title)}" class="project-image"></div>
          <div class="project-body"><p class="micro-label">${esc(p.category)}</p><h3>${esc(p.title)}</h3><p class="role">${esc(p.role)}</p><p>${esc(p.description)}</p><div class="tag-row">${tags(p.tags)}</div></div>
        </article>`).join('')}</div>`;
  }

  if (d.site.sections.experience) {
    $('#experience').innerHTML = `
      <div class="section-head reveal"><span class="section-index">05</span><div><p class="eyebrow">Experience</p><h2>Professional & Engineering Leadership</h2></div></div>
      <div class="experience-grid">
        <div><h3 class="experience-label">Professional Experience</h3>${d.professionalExperience.map(e => `<article class="timeline-item reveal"><span class="timeline-dot"></span><div><p class="period">${esc(e.period)}</p><h3>${esc(e.role)}</h3><p class="institution">${esc(e.organization)}</p><p>${esc(e.description)}</p></div></article>`).join('')}</div>
        <div><h3 class="experience-label">Engineering Leadership</h3>${d.leadershipExperience.map(e => `<article class="timeline-item reveal"><span class="timeline-dot"></span><div><p class="period">${esc(e.period)}</p><h3>${esc(e.role)}</h3><p class="institution">${esc(e.organization)}</p><p>${esc(e.description)}</p></div></article>`).join('')}</div>
      </div>
      <article class="education-card reveal"><div><p class="eyebrow">Education</p><h3>${esc(d.education.degree)}</h3><p>${esc(d.education.institution)} · ${esc(d.education.graduation)}</p><p class="education-thesis"><strong>Thesis:</strong> ${esc(d.education.thesis)}</p></div><div class="education-metrics"><div><strong>${esc(d.education.cgpa)}</strong><span>CGPA</span></div><div><strong>${esc(d.education.rank)}</strong><span>Class Rank</span></div><div><strong>${esc(d.education.honors)}</strong><span>Academic Honor</span></div></div></article>`;
  }

  if (d.site.sections.skills) {
    $('#skills').innerHTML = `
      <div class="section-head reveal"><span class="section-index">06</span><div><p class="eyebrow">Capabilities</p><h2>Technical Toolkit</h2><p>No percentage bars — just the tools and methods I actually use.</p></div></div>
      <div class="skills-grid">${Object.entries(d.skills).map(([name, items]) => `<article class="skill-card reveal"><h3>${esc(name)}</h3><div class="skill-list">${items.map(x => `<span>${esc(x)}</span>`).join('')}</div></article>`).join('')}</div>`;
  }

  if (d.site.sections.honors) {
    $('#honors').innerHTML = `<div class="honors-strip reveal">${d.honors.map(h => `<div><strong>${esc(h.title)}</strong><span>${esc(h.detail)}</span></div>`).join('')}</div>`;
  }

  if (d.site.sections.about) {
    $('#about').innerHTML = `<div class="about-grid"><div class="section-head reveal"><span class="section-index">07</span><div><p class="eyebrow">About</p><h2>Researcher + Mechanical Engineer</h2></div></div><p class="about-copy reveal">${esc(d.about)}</p></div>`;
  }

  if (d.site.sections.contact) {
    $('#contact').innerHTML = `<div class="contact-card reveal"><div><p class="eyebrow">Fall 2027</p><h2>${esc(d.contact.heading)}</h2><p>${esc(d.contact.text)}</p></div><div class="contact-actions"><a class="btn btn-primary email-link" data-location="contact" href="mailto:${esc(d.personal.email)}">Email Arman</a><a class="btn btn-secondary cv-link" data-location="contact" href="${esc(d.personal.cv)}" target="_blank">Download Academic CV</a><span>${esc(d.personal.email)}</span></div></div>`;
  }

  $('#footer-name').textContent = d.personal.shortName;
  $('#footer-email').textContent = d.personal.email;
  $('#footer-email').href = `mailto:${d.personal.email}`;
  $('#nav-cv').href = d.personal.cv;
  $('#nav-email').href = `mailto:${d.personal.email}`;

  document.querySelectorAll('.cv-link, #nav-cv').forEach(a => a.addEventListener('click', () => {
    if (d.analytics.trackCvDownloads && window.trackPortfolioEvent) window.trackPortfolioEvent('cv_download', { location: a.dataset.location || 'navbar', file_name: d.personal.cv.split('/').pop() });
  }));
  document.querySelectorAll('.email-link, #nav-email').forEach(a => a.addEventListener('click', () => {
    if (d.analytics.trackEmailClicks && window.trackPortfolioEvent) window.trackPortfolioEvent('email_click', { location: a.dataset.location || 'navbar' });
  }));
  document.querySelectorAll('.publication-link').forEach(a => a.addEventListener('click', () => {
    if (d.analytics.trackPublicationClicks && window.trackPortfolioEvent) window.trackPortfolioEvent('publication_click', { publication_title: a.dataset.title, destination_type: 'doi' });
  }));
  document.querySelectorAll('[data-research-id]').forEach(a => a.addEventListener('click', () => {
    const r = d.researchProjects.find(x => x.id === a.dataset.researchId);
    if (r && d.analytics.trackProjectViews && window.trackPortfolioEvent) window.trackPortfolioEvent('research_project_view', { project_slug: r.id, project_title: r.title });
  }));
  document.querySelectorAll('[data-project-id]').forEach(a => a.addEventListener('click', () => {
    const p = d.engineeringProjects.find(x => x.id === a.dataset.projectId);
    if (p && d.analytics.trackProjectViews && window.trackPortfolioEvent) window.trackPortfolioEvent('engineering_project_view', { project_slug: p.id, project_title: p.title });
  }));
  document.querySelectorAll('[data-social]').forEach(a => a.addEventListener('click', () => {
    if (d.analytics.trackSocialClicks && window.trackPortfolioEvent) window.trackPortfolioEvent('social_click', { platform: a.dataset.social });
  }));

  const observer = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }), { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  const toggle = $('#menu-toggle');
  const menu = $('#nav-links');
  toggle.addEventListener('click', () => { menu.classList.toggle('open'); toggle.setAttribute('aria-expanded', menu.classList.contains('open')); });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
})();
