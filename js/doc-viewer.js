(function () {
  const params = new URLSearchParams(location.search);
  const path = params.get('path') || '';
  const loading = document.getElementById('doc-loading');
  const content = document.getElementById('doc-content');
  const error = document.getElementById('doc-error');

  if (!path || path.includes('..')) {
    loading.hidden = true;
    error.hidden = false;
    return;
  }

  marked.setOptions({ gfm: true, breaks: true, headerIds: true, mangle: false });

  fetch(path)
    .then((r) => {
      if (!r.ok) throw new Error('not found');
      return r.text();
    })
    .then((md) => {
      const titleMatch = md.match(/^#\s+(.+)$/m);
      if (titleMatch) document.title = `${titleMatch[1].replace(/\*\*/g, '')} — Portfolio`;
      content.innerHTML = marked.parse(md);
      content.querySelectorAll('a[href$=".md"]').forEach((a) => {
        const href = a.getAttribute('href');
        if (href && !href.startsWith('http')) {
          const base = path.includes('/') ? path.replace(/[^/]+$/, '') : '';
          a.setAttribute('href', `doc.html?path=${encodeURIComponent(base + href)}`);
        }
      });
      content.querySelectorAll('table').forEach((t) => t.classList.add('md-table'));
      loading.hidden = true;
      content.hidden = false;
    })
    .catch(() => {
      loading.hidden = true;
      error.hidden = false;
    });
})();
