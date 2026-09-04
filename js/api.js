let stations = [];

async function loadStations() {
  const base = document.querySelector('base')?.href ?? location.href;
  const url = new URL('data/stations.json', base);
  const res = await fetch(url);
  stations = await res.json();
  renderCards();
}

// Aguarda o documento terminar de carregar antes de chamar renderCards()
// (definida em js/ui.js, carregado depois deste arquivo): sem isso, se o
// fetch acima resolver mais rápido que os demais <script> do documento
// terminarem de carregar, renderCards() ainda não existiria.
document.addEventListener('DOMContentLoaded', loadStations);
