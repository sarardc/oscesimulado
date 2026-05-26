let stations = [];

async function loadStations() {
  const res = await fetch('/api/stations');
  stations = await res.json();
  renderCards();
}

loadStations();
