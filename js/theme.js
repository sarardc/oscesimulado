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
