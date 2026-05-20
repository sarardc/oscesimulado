Como funciona (regras simples)
Cada arquivo .js de dados precisa de duas coisas:


// 1. declarar uma const global (sem export)
const minhaEspecialidadeStations = [ ... ];

// 2. NADA MAIS — sem export default, sem module.exports
Em index.html, carregar antes do api.js:
<!---- 

<script src="data/casos.js"></script>
<script src="data/endocrino_parsed.js"></script>
<script src="data/pediatria_parsed.js"></script>   já estava aqui 

<script src="js/api.js"></script>   lê tudo e monta stations[] -->
Em api.js, adicionar a nova variável no array:


const allSpecialties = [
  ...urologyStations,
  ...endocrineStations,
  ...pediatriaStations,
  // → para cada novo arquivo, adicione uma linha aqui
];
Para adicionar uma nova especialidade no futuro:

Crie data/cardio_parsed.js com const cardioStations = [...]
Adicione <script src="data/cardio_parsed.js"> no HTML
Adicione ...cardioStations no api.js