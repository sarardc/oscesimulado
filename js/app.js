let pepScores = {};

function updatePepScore(index, score) {
  const checkbox = document.getElementById(`checkbox-${index}`);
  const scoreCell = document.getElementById(`score-${index}`);
  const totalCell = document.getElementById('pep-total');

  if (checkbox.checked) {
    pepScores[index] = score;
    scoreCell.classList.add('hidden');
  } else {
    delete pepScores[index];
    scoreCell.classList.remove('hidden');
  }

  const total = Object.values(pepScores).reduce((sum, val) => sum + val, 0);
  totalCell.textContent = total.toFixed(1);
}

function goHome() {
  pauseTimer();
  resetTimer();
  document.getElementById('home').style.display = 'block';
  document.getElementById('station-view').style.display = 'none';
}

function openStation(id) {
  const st = stations.find(s => s.id === id);
  if (!st) return;
  window.currentStation = st; // usado pela geração do prompt "para levar" (js/promptExport.js)
  document.getElementById('home').style.display = 'none';
  document.getElementById('station-view').style.display = 'block';
  document.getElementById('sv-title').textContent = `Estação ${st.id} — ${st.tema}`;
  document.getElementById('sv-sub').textContent = st.sub;
  buildTabsNav(st);
  showTab(0);
  resetTimer();
  renderTabs(st);
  pepScores = {};
}

// Listeners abaixo substituem os antigos onclick=""/onchange="" inline —
// bloqueados pela Content-Security-Policy (script-src) sem 'unsafe-inline'.
// Estes elementos são estáticos no HTML (sempre existem quando este script
// roda, já que é carregado ao final do <body>).
document.querySelector('.back-btn').addEventListener('click', goHome);
document.getElementById('timer-toggle-btn').addEventListener('click', toggleTimer);
document.getElementById('timer-reset-btn').addEventListener('click', resetTimer);

// Delegação de clique nas abas (A/B/C/D...): o container .tabs-nav é
// reaproveitado entre estações (buildTabsNav só substitui o innerHTML dele,
// em js/ui.js), então um único listener aqui cobre tanto os botões estáticos
// do HTML quanto os gerados dinamicamente.
document.querySelector('.tabs-nav').addEventListener('click', (e) => {
  const btn = e.target.closest('.tab-btn');
  if (btn && btn.dataset.tabIdx !== undefined) showTab(Number(btn.dataset.tabIdx));
});

// Delegação para os checkboxes do checklist/PEP (gerados dinamicamente em
// renderPepTable, js/ui.js, e recriados a cada estação aberta).
document.addEventListener('change', (e) => {
  const checkbox = e.target.closest('.pep-checkbox');
  if (checkbox) updatePepScore(Number(checkbox.dataset.idx), Number(checkbox.dataset.score));
});

