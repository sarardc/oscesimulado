let stations = [];

async function loadStations() {
  const base = document.querySelector('base')?.href ?? location.href;
  const url = new URL('data/stations.json', base);
  const res = await fetch(url);
  stations = await res.json();
  renderCards();
}

loadStations();
