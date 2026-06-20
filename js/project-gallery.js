(function () {
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const project = typeof PROJECTS !== 'undefined' ? PROJECTS.find((p) => p.id === id) : null;
  const images = (typeof GALLERY_MANIFEST !== 'undefined' && GALLERY_MANIFEST[id]) || [];

  const header = document.getElementById('project-header');
  const grid = document.getElementById('gallery-grid');
  const tabs = document.getElementById('gallery-tabs');
  const docs = document.getElementById('doc-links');
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  const lbCap = document.getElementById('lightbox-caption');

  if (!project) {
    header.innerHTML = '<h2>Project not found</h2><p><a href="index.html">Back to portfolio</a></p>';
    return;
  }

  document.title = `${project.name} — Screenshot Gallery`;

  header.innerHTML = `
    <span class="project-tag">${project.tag}</span>
    <h2>${project.name}</h2>
    <p>${project.summary}</p>
    ${typeof renderProjectMeta === 'function' ? renderProjectMeta(project) : ''}
    <div class="project-stack" style="margin-top:1rem">${project.stack.map((s) => `<span>${s}</span>`).join('')}</div>
  `;

  docs.innerHTML = `
    <a href="${project.readme}" class="btn btn-ghost">README</a>
    <a href="${project.caseStudy}" class="btn btn-ghost">Case Study</a>
    <a href="${project.arch}" class="btn btn-ghost">Architecture</a>
    <a href="${project.api}" class="btn btn-ghost">API Docs</a>
    ${project.repo ? `<a href="${project.repo}" class="btn btn-primary" target="_blank" rel="noopener">GitHub Repo</a>` : ''}
    <a href="https://github.com/Abdelrahman1203/Abdelrahman1203.github.io" class="btn btn-ghost" target="_blank" rel="noopener">Portfolio Source</a>
  `;

  function groupImages(list) {
    const mobile = list.filter((p) => p.includes('/mobile/') || p.includes('mobile-'));
    const pages = list.filter((p) => p.includes('/pages/') && !mobile.some((m) => m.endsWith(p.split('/').pop())));
    const actions = list.filter((p) => p.includes('/actions/'));
    const root = list.filter((p) => !p.includes('/pages/') && !p.includes('/actions/') && !p.includes('/mobile/'));
    const dedupe = (arr) => [...new Set(arr.map((p) => p.split('/').pop() + p))].map((k) => arr.find((p) => k.startsWith(p.split('/').pop()))).filter(Boolean);
    return {
      All: list,
      Mobile: mobile,
      Pages: dedupe([...pages, ...root.filter((p) => !mobile.includes(p))]),
      Actions: actions,
    };
  }

  const groups = groupImages(images);
  let current = images;
  let lbIndex = 0;

  function renderGrid(imgs) {
    if (!imgs.length) {
      grid.innerHTML = '<p class="gallery-empty">No screenshots yet for this project.</p>';
      return;
    }
    grid.innerHTML = imgs.map((src, i) => {
      const label = src.split('/').pop().replace('.png', '').replace(/-/g, ' ');
      return `
        <figure class="gallery-item" data-index="${i}">
          <img src="${src}" alt="${label}" loading="lazy">
          <figcaption>${label}</figcaption>
        </figure>`;
    }).join('');

    grid.querySelectorAll('.gallery-item').forEach((el) => {
      el.addEventListener('click', () => openLightbox(Number(el.dataset.index)));
    });
  }

  tabs.innerHTML = Object.keys(groups)
    .filter((k) => groups[k].length > 0)
    .map((k, i) => `<button type="button" class="gallery-tab${i === 0 ? ' active' : ''}" data-group="${k}">${k} (${groups[k].length})</button>`)
    .join('');

  tabs.querySelectorAll('.gallery-tab').forEach((btn) => {
    btn.addEventListener('click', () => {
      tabs.querySelectorAll('.gallery-tab').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      current = groups[btn.dataset.group];
      renderGrid(current);
    });
  });

  current = groups.All.length ? groups.All : images;
  renderGrid(current);

  function openLightbox(i) {
    lbIndex = i;
    lbImg.src = current[i];
    lbCap.textContent = current[i].split('/').pop().replace('.png', '').replace(/-/g, ' ');
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = '';
  }

  lightbox.querySelector('.lightbox-close').onclick = closeLightbox;
  lightbox.querySelector('.lightbox-prev').onclick = () => {
    lbIndex = (lbIndex - 1 + current.length) % current.length;
    openLightbox(lbIndex);
  };
  lightbox.querySelector('.lightbox-next').onclick = () => {
    lbIndex = (lbIndex + 1) % current.length;
    openLightbox(lbIndex);
  };
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => {
    if (lightbox.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') lightbox.querySelector('.lightbox-prev').click();
    if (e.key === 'ArrowRight') lightbox.querySelector('.lightbox-next').click();
  });
})();
