// News index: show only the posts of the chosen type; a year with none left is hidden. Without JS the filter stays hidden and every post shows.
(() => {
  const bar = document.querySelector('.nl-filter');
  if (!bar) return;
  bar.hidden = false;
  bar.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;
    const type = btn.dataset.type;
    bar.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
    document.querySelectorAll('.nl-row').forEach((row) => { row.hidden = Boolean(type) && row.dataset.type !== type; });
    document.querySelectorAll('.pl-year').forEach((year) => { year.hidden = !year.querySelector('.nl-row:not([hidden])'); });
  });
})();
