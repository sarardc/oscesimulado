/**
 * js/theme.js
 * ─────────────────────────────────────────────────────────────────────────
 * Alternância de tema claro/escuro e do menu de filtros da home. Extraído
 * para arquivo externo (antes era um <script> inline em index.html) para
 * funcionar sob uma Content-Security-Policy sem 'unsafe-inline' em
 * script-src.
 */

(function () {
  const saved = localStorage.getItem('theme');
  if (saved === 'light') document.documentElement.classList.add('light');
})();

// ── Tamanho da letra ────────────────────────────────────────────────────────
// Níveis em %, aplicados como classe fs-NN no <html> (ver css/style.css).
const FONT_LEVELS = [90, 100, 115, 130, 150];

function readFontLevel() {
  try {
    const v = parseInt(localStorage.getItem('fontSize'), 10);
    return FONT_LEVELS.includes(v) ? v : 100;
  } catch (e) { return 100; }
}

function applyFontLevel(level) {
  const root = document.documentElement;
  FONT_LEVELS.forEach(l => root.classList.remove('fs-' + l));
  if (level !== 100) root.classList.add('fs-' + level);
  const label = document.getElementById('font-size-label');
  if (label) label.textContent = level + '%';
  const dec = document.getElementById('font-dec-btn');
  const inc = document.getElementById('font-inc-btn');
  if (dec) dec.disabled = level === FONT_LEVELS[0];
  if (inc) inc.disabled = level === FONT_LEVELS[FONT_LEVELS.length - 1];
}

function changeFontLevel(step) {
  const i = FONT_LEVELS.indexOf(readFontLevel());
  const next = FONT_LEVELS[Math.min(FONT_LEVELS.length - 1, Math.max(0, i + step))];
  try { localStorage.setItem('fontSize', String(next)); } catch (e) { /* sem armazenamento */ }
  applyFontLevel(next);
}

applyFontLevel(readFontLevel());

function toggleTheme() {
  const isLight = document.documentElement.classList.toggle('light');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  document.getElementById('theme-icon').textContent  = isLight ? '☽' : '☀';
  document.getElementById('theme-label').textContent = isLight ? 'Escuro' : 'Claro';
}

function toggleFGroup(id) {
  const grp = document.getElementById(id);
  grp.classList.toggle('open');
}

function toggleFilterSidebar() {
  const sidebar = document.getElementById('filter-sidebar');
  const arr = document.getElementById('filter-toggle-arr');
  const expanded = sidebar.classList.toggle('expanded');
  arr.textContent = expanded ? '▴' : '▾';
}

document.addEventListener('DOMContentLoaded', function () {
  const isLight = document.documentElement.classList.contains('light');
  document.getElementById('theme-icon').textContent  = isLight ? '☽' : '☀';
  document.getElementById('theme-label').textContent = isLight ? 'Escuro' : 'Claro';

  // Listeners abaixo substituem os antigos onclick="" inline — bloqueados
  // pela Content-Security-Policy (script-src) sem 'unsafe-inline'.
  document.getElementById('theme-toggle-btn').addEventListener('click', toggleTheme);
  document.getElementById('filter-toggle-btn').addEventListener('click', toggleFilterSidebar);

  applyFontLevel(readFontLevel());
  document.getElementById('font-dec-btn').addEventListener('click', () => changeFontLevel(-1));
  document.getElementById('font-inc-btn').addEventListener('click', () => changeFontLevel(1));

  // Delegação única no container: cobre tanto o cabeçalho de cada grupo
  // (expandir/recolher) quanto qualquer botão de tema (setFilter, definida
  // em js/ui.js — já carregada quando este evento dispara, pois o
  // DOMContentLoaded só ocorre após todos os <script> do documento rodarem).
  document.getElementById('filter-list').addEventListener('click', (e) => {
    const grpBtn = e.target.closest('.fgrp-hdr');
    if (grpBtn) {
      toggleFGroup(grpBtn.closest('.fgrp').id);
      return;
    }
    const filterBtn = e.target.closest('.filter-btn');
    if (filterBtn) setFilter(filterBtn.dataset.tema);
  });
});
