/** Turn a repo-relative markdown path into a rendered doc page URL. */
function docUrl(path) {
  return `doc.html?path=${encodeURIComponent(path)}`;
}
