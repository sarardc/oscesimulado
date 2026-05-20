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

renderCards();
