document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  renderCaseStudies();
  setupNav();
});

const PORTFOLIO_URL = 'https://abdelrahman1203.github.io/';
const PORTFOLIO_SOURCE = 'https://github.com/Abdelrahman1203/Abdelrahman1203.github.io';

function docUrl(path) {
  return `doc.html?path=${encodeURIComponent(path)}`;
}

function renderProjects() {
  const grid = document.getElementById('project-grid');
  if (!grid || typeof PROJECTS === 'undefined') return;

  grid.innerHTML = PROJECTS.map((p) => `
    <article class="project-card">
      <div class="project-thumb">
        <img src="${p.thumb}" alt="${p.name} screenshot" loading="lazy"
          onerror="this.parentElement.innerHTML='<div class=\\'placeholder\\'>${p.name.charAt(0)}</div>'">
      </div>
      <div class="project-body">
        <span class="project-tag">${p.tag}</span>
        <h3>${p.name}</h3>
        <p>${p.summary}</p>
        ${renderProjectMeta(p)}
        <div class="project-stack">${p.stack.map((s) => `<span>${s}</span>`).join('')}</div>
        <div class="project-links">
          <a href="project.html?id=${p.id}">Screenshots (${typeof GALLERY_COUNTS !== 'undefined' && GALLERY_COUNTS[p.id] ? GALLERY_COUNTS[p.id] : '→'})</a>
          <a href="${docUrl(p.readme)}">README</a>
          <a href="${docUrl(p.caseStudy)}">Case Study</a>
          <a href="${docUrl(p.arch)}">Architecture</a>
          <a href="${docUrl(p.api)}">API Docs</a>
          ${p.repo ? `<a href="${p.repo}" target="_blank" rel="noopener">GitHub Repo</a>` : ''}
        </div>
      </div>
    </article>
  `).join('');
}

function renderCaseStudies() {
  const grid = document.getElementById('case-grid');
  if (!grid || typeof CASE_STUDIES === 'undefined') return;

  grid.innerHTML = CASE_STUDIES.map((c) => `
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
