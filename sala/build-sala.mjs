// Gera os dados da Sala de Simulação a partir de data/stations.json.
// Uso: node build.js && node sala/build-sala.mjs
// Saída: sala/casos-repo.json + cópia das fotos usadas em sala/img/estacoes/
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync } from 'fs';

// Especialidades do repositório que entram na sala (comparação sem acento/maiúsculas).
const TEMAS = ['dermatologia', 'medicina intensiva', 'cardiologia', 'pneumologia'];

const norm = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const all = JSON.parse(readFileSync('data/stations.json', 'utf8'));
const casos = all.filter(st => TEMAS.includes(norm(st.tema)));

mkdirSync('sala/img/estacoes', { recursive: true });
for (const st of casos) {
  const src = st.instB?.photo?.src;
  if (src && existsSync(src)) copyFileSync(src, 'sala/' + src);
}

writeFileSync('sala/casos-repo.json', JSON.stringify(casos));
console.log(`Sala: ${casos.length} estações (${TEMAS.join(', ')}) -> sala/casos-repo.json`);
