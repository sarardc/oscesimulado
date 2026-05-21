function sanitizeTopic(topic) {
  if (!topic) return '';
  return topic.toString().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, '-').replace(/[^\w-]/g, '').toLowerCase();
}

const allSpecialties = [
  ...urologyStations,
  ...endocrineStations,
  ...endocrineStations1,
  ...pediatriaStations,
  ...pediatria2,
  ...URO1stations,
];

const stations = allSpecialties.map((st, idx) => ({
  ...st,
  id: idx + 1,
  topic: sanitizeTopic(st.topic),
}));
