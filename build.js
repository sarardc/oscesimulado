import { writeFileSync } from 'fs';
import { fontes } from './data/fontes.js';

function sanitizeTopic(topic) {
  if (!topic) return '';
  return topic.toString().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, '-').replace(/[^\w-]/g, '').toLowerCase();
}

const allStations = fontes.flatMap(f => f.estacoes).map((st, idx) => ({
  ...st,
  id: idx + 1,
  topic: sanitizeTopic(st.topic),
}));

writeFileSync('data/stations.json', JSON.stringify(allStations));
console.log(`Build concluido: ${allStations.length} estacoes -> data/stations.json`);
