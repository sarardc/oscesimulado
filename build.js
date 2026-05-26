import { writeFileSync } from 'fs';
import { urologyStations, endocrineStations } from './data/casos.js';
import endocrineStations1 from './data/endocrino_parsed.js';
import pediatriaStations from './data/pediatria_parsed.js';
import pediatria2 from './data/pediatria2.js';
import uro1stations from './data/uro1.js';
import psiq1stations from './data/psiq1.js';
import uro2stations from './data/uro2.js';
import nefro2 from './data/nefro2.js';
import neuro from './data/neuro.js';
import orl from './data/orl.js';
import ped3 from './data/ped3.js';
import oftalmo from './data/oftalmo.js';

function sanitizeTopic(topic) {
  if (!topic) return '';
  return topic.toString().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, '-').replace(/[^\w-]/g, '').toLowerCase();
}

const allStations = [
  ...urologyStations,
  ...endocrineStations,
  ...endocrineStations1,
  ...pediatriaStations,
  ...pediatria2,
  ...uro1stations,
  ...psiq1stations,
  ...uro2stations,
  ...nefro2,
  ...neuro,
  ...orl,
  ...ped3,
  ...oftalmo,
].map((st, idx) => ({
  ...st,
  id: idx + 1,
  topic: sanitizeTopic(st.topic),
}));

writeFileSync('data/stations.json', JSON.stringify(allStations));
console.log(`Build concluido: ${allStations.length} estacoes -> data/stations.json`);
