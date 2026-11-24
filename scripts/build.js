// Junta todos os casos de casos/ em data/stations.json, o arquivo que o site lê.
// Uso (na raiz do repositório): npm run build   (ou: node scripts/build.js)
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import todosOsCasos from '../casos/index.js';

const SAIDA = fileURLToPath(new URL('../data/stations.json', import.meta.url));

function sanitizeTopic(topic) {
  if (!topic) return '';
  return topic.toString().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, '-').replace(/[^\w-]/g, '').toLowerCase();
}

const allStations = todosOsCasos.map((st, idx) => ({
  ...st,
  id: idx + 1,
  topic: sanitizeTopic(st.topic),
}));

writeFileSync(SAIDA, JSON.stringify(allStations));
console.log(`Build concluido: ${allStations.length} estacoes -> data/stations.json`);
