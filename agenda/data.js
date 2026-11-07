/* Dados da agenda OSCE — matérias, temas sugeridos (vindos dos casos da plataforma) e cronograma. */
window.EXAM_DATE = '2026-11-11';
window.PLATFORM_URL = 'https://sarardc.github.io/oscesimulado/';

window.PHASES = [
  'Ler o resumo / aula do tema',
  'Fazer os casos OSCE da plataforma (com cronômetro)',
  'Anotar os erros e refazer o que errei'
];

window.SUBJECTS = [
  { id: 'hemato', name: 'Hematologia', color: '#e5484d', topics: [
    'Anemia ferropriva', 'Anemia megaloblástica — deficiência de B12', 'Talassemia alfa',
    'Doença falciforme — crise vaso-oclusiva', 'LLA pediátrica', 'LMA', 'Linfoma de Hodgkin',
    'PTI — púrpura trombocitopênica imune', 'Mieloma múltiplo', 'Neutropenia febril', 'Síndrome de lise tumoral' ] },
  { id: 'geri', name: 'Geriatria', color: '#8e4ec6', topics: [
    'Doença de Alzheimer', 'Delirium', 'Quedas recorrentes no idoso', 'Polifarmácia e iatrogenia',
    'Síndrome da fragilidade e sarcopenia', 'Incontinência urinária no idoso', 'Lesão por pressão',
    'Osteoporose com fratura vertebral', 'Violência contra a pessoa idosa', 'Cuidados paliativos na demência avançada' ] },
  { id: 'infecto', name: 'Infectologia', color: '#30a46c', topics: [
    'Oxiuríase', 'Dengue com sinais de alarme', 'Sífilis adquirida', 'HIV — diagnóstico inicial',
    'Leptospirose', 'Chikungunya', 'Malária', 'Doença de Chagas aguda', 'Toxoplasmose gestacional', 'Esquistossomose mansônica' ] },
  { id: 'derma', name: 'Dermatologia', color: '#f76b15', topics: [
    'Melanoma extensivo superficial', 'Melanoma nodular', 'Melanoma acral lentiginoso', 'Carcinoma basocelular',
    'Ceratose seborreica', 'Ceratose actínica e campo de cancerização', 'Psoríase em placas', 'Hanseníase multibacilar', 'Escabiose' ] },
  { id: 'orto', name: 'Ortopedia', color: '#0090ff', topics: [
    'Luxação de ombro', 'Fratura de colo do fêmur', 'Síndrome compartimental aguda da perna', 'Fratura de Colles — rádio distal',
    'Lesão do LCA', 'Gonartrose', 'Hérnia de disco lombar — L5-S1', 'Ruptura do manguito rotador',
    'Fratura bimaleolar do tornozelo', 'Osteossarcoma' ] },
  { id: 'uti', name: 'Medicina Intensiva', color: '#12a594', topics: [
    'Choque séptico', 'SDRA', 'Choque cardiogênico', 'Choque hemorrágico', 'Parada cardiorrespiratória',
    'Injúria renal aguda', 'Delirium em UTI', 'Cetoacidose diabética grave', 'Intoxicação grave por opioides',
    'Politraumatizado — avaliação inicial (ATLS)' ] },
  { id: 'urg', name: 'Urgência', color: '#e93d82', topics: [] },
  { id: 'neuro', name: 'Emergência neurológica', color: '#6e56cf', topics: [
    'AVC isquêmico', 'AVC hemorrágico', 'Estado de mal epiléptico', 'Meningite bacteriana', 'Hemorragia subaracnóidea',
    'Crise miastênica', 'Síndrome de Guillain-Barré', 'Encefalopatia de Wernicke', 'Hipertensão intracraniana', 'Trombose venosa cerebral' ] },
  { id: 'oftalmo', name: 'Oftalmologia', color: '#ab6400', topics: [
    'Conjuntivite', 'Glaucoma agudo', 'Retinopatia diabética', 'Catarata', 'Trauma ocular / corpo estranho corneano',
    'Olho vermelho — uveíte anterior', 'Ambliopia e estrabismo', 'DMRI', 'Retinopatia hipertensiva / fundoscopia',
    'Celulite orbitária vs. pré-septal' ] },
  { id: 'legal', name: 'Medicina Legal', color: '#5b6b7a', topics: [
    'Declaração de óbito', 'Corpo de delito e classificação de lesões corporais', 'Violência sexual — atendimento inicial',
    'Violência doméstica contra a mulher', 'Suspeita de maus-tratos infantis', 'Sigilo médico — limites e quebra justificada',
    'Acidente de trabalho — CAT', 'Atestado médico — elaboração correta', 'Recusa de tratamento e consentimento informado',
    'Tanatologia forense — sinais de morte' ] }
];

var REV = { generic: true, title: 'Revisão do dia', tasks: [
  'Reler as anotações de erros do dia', 'Refazer 3 casos que errei', 'Marcar o que ainda está fraco (vai para a revisão de terça)' ] };

window.SCHEDULE = [
  { d: '2026-11-06', chip: 'Sex', label: 'Sexta 06/11', title: 'Largada', blocks: [
    { time: '22:00–23:30', sid: 'hemato' } ] },
  { d: '2026-11-07', chip: 'Sáb', label: 'Sábado 07/11', title: '3 matérias', blocks: [
    { time: '08:30–10:30', sid: 'geri' }, { time: '10:45–12:45', sid: 'infecto' },
    { time: '14:30–16:30', sid: 'derma' }, Object.assign({ time: '19:30–20:30' }, REV) ] },
  { d: '2026-11-08', chip: 'Dom', label: 'Domingo 08/11', title: '3 matérias', blocks: [
    { time: '08:30–10:30', sid: 'orto' }, { time: '10:45–12:45', sid: 'uti' },
    { time: '14:30–16:30', sid: 'urg' }, Object.assign({ time: '19:30–20:30' }, REV) ] },
  { d: '2026-11-09', chip: 'Seg', label: 'Segunda 09/11', title: '3 matérias', blocks: [
    { time: '08:30–10:30', sid: 'neuro' }, { time: '10:45–12:45', sid: 'oftalmo' },
    { time: '14:30–16:30', sid: 'legal' }, Object.assign({ time: '19:30–20:30' }, REV) ] },
  { d: '2026-11-10', chip: 'Ter', label: 'Terça 10/11', title: 'Revisão geral', blocks: [
    { time: '08:30–11:30', generic: true, title: 'Revisão geral — pontos fracos', tasks: [
      'Passar pelas 10 matérias usando só as anotações de erros', 'Condutas e doses de urgência (revisão rápida)', 'Checklists dos casos que mais errei' ] },
    { time: '14:00–17:00', generic: true, title: 'Simulado: casos sortidos', tasks: [
      'Fazer 6 casos aleatórios, 10 min cada, com cronômetro', 'Corrigir cada um pelo checklist', 'Anotar o que ainda falha' ] },
    { time: '20:00', generic: true, title: 'Fechar o dia', tasks: [
      'Separar documento e material da prova', 'Revisão leve de 30 min (nada novo)', 'Dormir cedo — 7 a 8 horas' ] } ] },
  { d: '2026-11-11', chip: 'Qua', label: 'Quarta 11/11', title: 'Dia do OSCE', blocks: [
    { time: 'Manhã', generic: true, title: 'Dia da prova', tasks: [
      'Café da manhã e conferir documento/material', 'Revisar só mnemônicos e condutas (máx. 30 min)', 'Em cada estação: ler a tarefa, seguir o checklist, respirar' ] } ] }
];
