document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  renderCaseStudies();
  setupNav();
});

function docUrl(path) {
  return `doc.html?path=${encodeURIComponent(path)}`;
}

function projectCardHtml(p, compact = false) {
  return `
    <article class="project-card${compact ? ' project-card-compact' : ''}">
      <div class="project-thumb">
        <img src="${p.thumb}" alt="${p.name} screenshot" loading="lazy"
          onerror="this.parentElement.innerHTML='<div class=\\'placeholder\\'>${p.name.charAt(0)}</div>'">
      </div>
      <div class="project-body">
        <span class="project-tag">${p.tag}</span>
        <h3>${p.name}</h3>
        ${p.impact ? `<p class="project-impact">${p.impact}</p>` : ''}
        <p>${p.summary}</p>
        ${renderProjectMeta(p)}
        <div class="project-stack">${p.stack.map((s) => `<span>${s}</span>`).join('')}</div>
        <div class="project-links">
          <a href="project.html?id=${p.id}">Screenshots (${typeof GALLERY_COUNTS !== 'undefined' && GALLERY_COUNTS[p.id] ? GALLERY_COUNTS[p.id] : '→'})</a>
          <a href="${docUrl(p.readme)}">README</a>
          <a href="${docUrl(p.caseStudy)}">Case Study</a>
          <a href="${docUrl(p.arch)}">Architecture</a>
          ${p.repo ? `<a href="${p.repo}" target="_blank" rel="noopener">GitHub</a>` : ''}
        </div>
      </div>
    </article>
  `;
}

function renderProjects() {
  if (typeof PROJECTS === 'undefined') return;

  const featuredIds = typeof FEATURED_PROJECT_IDS !== 'undefined'
    ? FEATURED_PROJECT_IDS
    : PROJECTS.map((p) => p.id);

  const featured = featuredIds
    .map((id) => PROJECTS.find((p) => p.id === id))
    .filter(Boolean);
  const other = PROJECTS.filter((p) => !featuredIds.includes(p.id));

  const featuredGrid = document.getElementById('project-grid');
  const otherGrid = document.getElementById('other-project-grid');

  if (featuredGrid) {
    featuredGrid.innerHTML = featured.map((p) => projectCardHtml(p)).join('');
  }
  if (otherGrid) {
    otherGrid.innerHTML = other.map((p) => projectCardHtml(p, true)).join('');
  }
}

function renderCaseStudies() {
  const grid = document.getElementById('case-grid');
  if (!grid || typeof CASE_STUDIES === 'undefined') return;

  const featuredIds = typeof FEATURED_PROJECT_IDS !== 'undefined' ? FEATURED_PROJECT_IDS : [];
  const studies = featuredIds.length
    ? CASE_STUDIES.filter((c) => featuredIds.includes(c.projectId))
    : CASE_STUDIES;

  grid.innerHTML = studies.map((c) => `
    <article class="case-card">
      <h3>${c.title}</h3>
      <p class="impact">${c.impact}</p>
      <p>${c.summary}</p>
      <a href="${docUrl(c.link)}">Read case study →</a>
      ${c.projectId ? `<a href="project.html?id=${c.projectId}" class="case-gallery-link">View screenshots →</a>` : ''}
    </article>
  `).join('');
}

function setupNav() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  toggle?.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}
