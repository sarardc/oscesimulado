// Sala de Simulação · Casos do 1º período: anamnese e semiologia.
// Script comum (não é módulo): compartilha o escopo global com os outros arquivos da sala,
// carregados em ordem pelo sala/index.html.
"use strict";
/* =========================================================================
   1º PERÍODO — ANAMNESE E SEMIOLOGIA
   Casos para quem está aprendendo: o foco é a anamnese completa, na ordem certa,
   e as manobras do exame físico; o raciocínio pedido é o diagnóstico sindrômico.
   ========================================================================= */
const AN_ORDEM = ["Identificação","Queixa principal","História da doença atual","Interrogatório sintomatológico","Antecedentes pessoais","Antecedentes familiares","Hábitos e estilo de vida","Condições socioeconômicas e culturais"];
const AN = {
  nome:{g:"Identificação", q:"Qual é o seu nome completo?", kw:/(seu nome|como (o senhor |a senhora |voce )?se chama|nome completo)/},
  idade:{g:"Identificação", q:"Quantos anos o(a) senhor(a) tem?", kw:/(idade|quantos anos|data de nascimento)/},
  natural:{g:"Identificação", q:"Onde nasceu e onde mora?", kw:/(nasceu|natural|de onde (o senhor |a senhora |voce )?(e|vem)|onde (o senhor |a senhora |voce )?mora|procedencia|cidade)/},
  prof:{g:"Identificação", q:"Qual é a sua profissão?", kw:/(profiss|trabalh|ocupac|emprego|servico|faz da vida)/},
  cor:{g:"Identificação", q:"Como o(a) senhor(a) se declara quanto à cor da pele?", kw:/(\bcor\b|\braca\b|etnia|se declara|branc[oa]|pard[oa]|negr[oa])/},
  religiao:{g:"Identificação", q:"Tem alguma religião?", kw:/(religi|igreja|culto|missa|\bcren(ca|te)|espirit)/},
  civil:{g:"Identificação", q:"Qual é o seu estado civil?", kw:/(casad|estado civil|solteir|viuv|divorc|mora com quem|com quem (o senhor |a senhora |voce )?mora)/},
  qp:{g:"Queixa principal", q:"O que traz o(a) senhor(a) aqui hoje?", kw:/(o que (o |a )?(traz|trouxe)|motivo|queixa|como posso (te |lhe )?ajudar|em que posso|o que (o senhor |a senhora |voce )?(sente|esta sentindo)|o que (esta )?acontec)/},
  nascimento:{g:"Antecedentes pessoais", q:"Sabe como foi o seu nascimento e o seu desenvolvimento na infância?", kw:/(como (foi o seu |voce )?nasc|nascimento|prematur|desenvolvimento|parto (normal|cesarea) quando)/},
  gineco:{g:"Antecedentes pessoais", q:"Com que idade menstruou pela primeira vez? Teve gestações, partos ou abortos? Já entrou na menopausa?", kw:/(menarca|primeira menstrua|gestac|gravid|engravid|parto|aborto|cesarea|menopausa|preventivo|papanicolau|ciclo menstrual)/},
  infancia:{g:"Antecedentes pessoais", q:"Teve doenças na infância, como sarampo, catapora ou caxumba?", kw:/(infancia|quando (era )?crianca|sarampo|catapora|caxumba|rubeola|coqueluche)/},
  transfusao:{g:"Antecedentes pessoais", q:"Já recebeu transfusão de sangue?", kw:/(transfus|recebeu sangue|tomou sangue)/},
  trauma:{g:"Antecedentes pessoais", q:"Já sofreu algum acidente, fratura ou traumatismo?", kw:/(trauma|acidente|fratur|quebrou|machucou serio|batida)/},
  dp:{g:"Antecedentes pessoais", q:"Tem alguma doença crônica?", kw:/(doenca|pressao alta|diabet|problema de saude|cronic|hipertens)/},
  meds:{g:"Antecedentes pessoais", q:"Usa algum remédio?", kw:/(remedio|medica|toma (algum|alguma)|usa (algum|alguma)|tratamento)/},
  alergia:{g:"Antecedentes pessoais", q:"Tem alergia a algum medicamento?", kw:/(alergi)/},
  cirurgia:{g:"Antecedentes pessoais", q:"Já fez cirurgia ou foi internado(a)?", kw:/(cirurgi|operou|operad|internad|internac)/},
  vacina:{g:"Antecedentes pessoais", q:"Como está a sua vacinação?", kw:/(vacin)/},
  af:{g:"Antecedentes familiares", q:"Alguém na família tem doenças?", kw:/(familia|\bpai\b|\bmae\b|irma|parente|heredit|familiar)/},
  fumo:{g:"Hábitos e estilo de vida", q:"Fuma ou já fumou? Quanto e por quanto tempo?", kw:/(fum|cigarro|tabag)/},
  alcool:{g:"Hábitos e estilo de vida", q:"Consome bebida alcoólica? Quanto?", kw:/(bebe\b|bebida|alcool|cerveja|cachaca|pinga|vinho)/},
  drogas:{g:"Hábitos e estilo de vida", q:"Usa outras drogas?", kw:/(droga|maconha|cocaina|crack|substancia)/},
  exposicao:{g:"Hábitos e estilo de vida", q:"Já trabalhou em outras ocupações? Tem contato com poeira, produtos químicos ou agrotóxicos?", kw:/(outr(o|a)s? (trabalho|ocupac|emprego)|trabalhou (antes|com)|exposi|poeira|quimic|agrotox|amianto|solvente)/},
  ativ:{g:"Hábitos e estilo de vida", q:"Pratica atividade física?", kw:/(atividade fisica|exercic|caminhad|academia|esporte|sedentar)/},
  alim:{g:"Hábitos e estilo de vida", q:"Como é a sua alimentação?", kw:/(aliment|comida|\bcome\b|dieta|\bsal\b|gordura|fritura)/},
  sono:{g:"Hábitos e estilo de vida", q:"Como está o seu sono?", kw:/(sono|dorme|dormir|insonia)/},
  vidasexual:{g:"Hábitos e estilo de vida", q:"Como está a sua vida sexual? Tem parceria fixa? Usa preservativo?", kw:/(vida sexual|sexualmente|ativ(o|a|idade) sexual|parceir|preservativo|camisinha|relac(ao|oes) sex|\bsexo\b|\bist\b|doenca sexualmente)/},
  escolaridade:{g:"Condições socioeconômicas e culturais", q:"Até que série o(a) senhor(a) estudou?", kw:/(escolar|estudou|ate que (serie|ano)|faculdade|ensino (medio|fundamental|superior)|sabe ler)/},
  renda:{g:"Condições socioeconômicas e culturais", q:"Qual é a renda da família? Quantas pessoas dependem dela?", kw:/(renda|salario|quanto (ganha|recebe)|dinheiro|sustent|depende(m)? (da|de))/},
  lazer:{g:"Condições socioeconômicas e culturais", q:"Como é o relacionamento em casa? O que faz no tempo livre?", kw:/(lazer|tempo livre|diversao|relacionamento|convivio|se da bem|famil(ia)? (unida|em casa))/},
  animais:{g:"Condições socioeconômicas e culturais", q:"Tem animais em casa?", kw:/(anima(l|is)|cachorro|gato|bicho|passaro|galinha)/},
  moradia:{g:"Condições socioeconômicas e culturais", q:"Como é a sua casa? Tem água encanada e esgoto?", kw:/(sua casa|moradia|mora em|saneamento|agua encanada|esgoto|comodo|onde (o senhor |a senhora |voce )?vive)/},
};
function anamnese(base, outros){
  const out = [];
  for (const [id, r] of Object.entries(base)){ const d = AN[id]; if (d) out.push({id, g:d.g, q:d.q, kw:d.kw, r}); }
  outros.forEach(h => out.push(Object.assign({g:"História da doença atual"}, h)));
  return out.sort((a, b) => AN_ORDEM.indexOf(a.g) - AN_ORDEM.indexOf(b.g));
}
const TN = (ids, n) => s => { const h = ids.filter(id => s.topics[id]); return h.length >= n ? {ok:true, ev:`${h.length} de ${ids.length} itens perguntados`} : {ok:false, ev: h.length ? `Só ${h.length} de ${ids.length} itens` : undefined}; };
const TERMS = (re, n) => s => { const txt = norm(s.transcript.filter(m => m.who === "me").map(m => m.text).join(" ") + " " + s.notas + " " + s.conduta + " " + s.hip + " " + s.dif); const g = new RegExp(re.source, "g"); const hits = new Set(txt.match(g) || []); return hits.size >= n ? {ok:true, ev:`${hits.size} termos semiológicos usados`} : {ok:false, ev: hits.size ? `Só ${hits.size} termo(s)` : "Achados não descritos"}; };
const ORDEM_AN = s => {
  // usa a mediana dos horários de cada seção: uma pergunta solta que cai em outra seção não inverte a ordem
  const first = g => { const ts = s.c.topicos.filter(tp => tp.g === g && s.topics[tp.id]).map(tp => s.topics[tp.id].t).sort((x, y) => x - y); return ts.length ? ts[Math.floor((ts.length - 1) / 2)] : null; };
  const seq = ["Identificação","História da doença atual","Antecedentes pessoais","Hábitos e estilo de vida"].map(first).filter(x => x != null);
  if (seq.length < 3) return {ok:false, ev:"Anamnese incompleta para avaliar a ordem"};
  for (let i = 1; i < seq.length; i++) if (seq[i] < seq[i-1]) return {ok:false, ev:"Seções fora de ordem"};
  return {ok:true, ev:"Identificação → HDA → antecedentes → hábitos"};
};
function ckP1(o){
  const it = [
    {d:"Comunicação", l:"Apresenta-se pelo nome e função", w:.5, test:C("apresentou")},
    {d:"Comunicação", l:"Chama o paciente pelo nome", w:.5, test:C("nome")},
    {d:"Comunicação", l:"Demonstra empatia e escuta ativa", w:.5, test:C("empatia")},
    {d:"Comunicação", l:"Fecha a consulta perguntando se há dúvidas", w:.5, test:C("entendimento")},
    {d:"Anamnese", l:"Identificação completa (nome, idade, cor, estado civil, profissão, naturalidade/procedência, religião)", w:1, test:TN(["nome","idade","cor","civil","prof","natural","religiao"], 5), dica:"A identificação vem primeiro e orienta o raciocínio: idade, cor, profissão e procedência mudam as hipóteses (Porto)."},
    {d:"Anamnese", l:"Queixa principal nas palavras do paciente", w:.5, test:T("qp")},
    ...o.hda.map(([l, ids, w]) => ({d:"História da doença atual", l, w: w || .5, test:T(...ids)})),
    {d:"Anamnese", l:"Interrogatório sintomatológico (revisa outros sistemas)", w:1, test:TN(o.isda, 3)},
    {d:"Anamnese", l:"Antecedentes pessoais: doenças e medicamentos em uso", w:1, test:TN(["dp","meds"], 2)},
    {d:"Anamnese", l:"Antecedentes pessoais: alergias, cirurgias e internações", w:.5, test:TN(["alergia","cirurgia"], 2)},
    {d:"Anamnese", l:"Antecedentes pessoais fisiológicos (nascimento e desenvolvimento; na mulher: menarca, ciclos, gestações/partos/abortos, menopausa)", w:.5, test:s => s.c.pac.sexo === "Feminino" ? T("gineco")(s) : TN(["nascimento","gineco"], 1)(s)},
    {d:"Anamnese", l:"Antecedentes pessoais patológicos: doenças da infância, traumatismos e transfusões", w:.5, test:TN(["infancia","trauma","transfusao","transf"], 2)},
    {d:"Anamnese", l:"Vacinação", w:.25, test:T("vacina")},
    {d:"Anamnese", l:"Antecedentes familiares", w:.5, test:T("af")},
    {d:"Anamnese", l:"Hábitos: tabagismo e etilismo (com quantidade e tempo)", w:1, test:TN(["fumo","alcool"], 2)},
    {d:"Anamnese", l:"Hábitos: atividade física e alimentação", w:.5, test:TN(["ativ","alim"], 1)},
    {d:"Anamnese", l:"Ocupação atual e anteriores / exposição ocupacional", w:.5, test:T("exposicao")},
    {d:"Anamnese", l:"Vida sexual (parceria, uso de preservativo, queixas)", w:.5, test:T("vidasexual"), dica:"A vida sexual faz parte da anamnese de todo adulto. Pergunte com naturalidade, sem julgamento, e explique por que está perguntando."},
    {d:"Anamnese", l:"Condições socioeconômicas e culturais (moradia e saneamento, escolaridade, renda, relações familiares e lazer, animais)", w:1, test:TN(["moradia","escolaridade","renda","lazer","animais"], 3)},
    {d:"Anamnese", l:"Segue a ordem da anamnese (identificação → HDA → antecedentes → hábitos)", w:.5, test:ORDEM_AN},
    {d:"Exame físico", l:"Ectoscopia (inspeção geral)", w:.5, test:M("ectoscopia")},
    {d:"Exame físico", l:"Sinais vitais", w:.5, test:M("sv")},
    ...o.exame.map(([l, ids, w]) => ({d:"Exame físico", l, w: w || .5, test:M(...ids)})),
    {d:"Raciocínio", l:"Diagnóstico sindrômico: " + o.sindrome, w:2, ia:true, test:H(o.sindRe)},
    {d:"Raciocínio", l:"Descreve os achados com terminologia semiológica (falado ou nas anotações)", w:1, ia:true, test:TERMS(o.terms, 3)},
  ];
  return it;
}
const P1_BASE = {persona:"Paciente colaborativo, linguagem simples. Responde só ao que for perguntado, sem adiantar informações. Se o aluno usar termos técnicos, pede para explicar. Se perguntarem algo que não está na ficha, responda de forma coerente e geralmente negativa.", area:"P1 duda", nivel:"Anamnese e semiologia", tempo:900, labelHip:"Diagnóstico sindrômico", labelCond:"Descrição dos achados e próximos passos"};
const P1_TAREFAS = sistema => ["Faça a anamnese completa (roteiro do Porto): identificação, queixa principal, HDA, interrogatório sintomatológico, antecedentes pessoais fisiológicos e patológicos, antecedentes familiares, hábitos e estilo de vida e condições socioeconômicas e culturais.", `Examine o paciente com foco no ${sistema}, nomeando cada manobra (inspeção, palpação, percussão e ausculta).`, "Descreva os achados em voz alta ou nas anotações e diga o diagnóstico sindrômico."];

const P1_CASOS = [
/* ------------------------------------------------ 1. RESPIRATÓRIO — CONDENSAÇÃO */
Object.assign({}, P1_BASE, {
  id:"p1-condensacao", ativo:true, img:"img/rafael.jpg", focus:"74% 40%", voz:"buttery",
  local:"Ambulatório de semiologia", titulo:"Tosse com catarro e febre",
  pac:{nome:"Carlos Eduardo Santos", primeiro:"carlos", trat:"Seu Carlos", idade:45, sexo:"Masculino", prof:"Pedreiro"},
  enunciado:"Carlos, 45 anos, procura o ambulatório com tosse e febre. Você é o estudante responsável pela anamnese e pelo exame físico.",
  tarefas:P1_TAREFAS("aparelho respiratório"),
  topicos:anamnese({
    nome:"Carlos Eduardo Santos.", idade:"Quarenta e cinco.", natural:"Nasci em Itabuna, na Bahia. Moro em São Paulo há vinte anos.", prof:"Sou pedreiro.", civil:"Casado, tenho dois filhos.",
    qp:"Tô com uma tosse com catarro e febre faz quatro dias.",
    dp:"Tenho pressão alta.", meds:"Losartana 50 mg de manhã.", alergia:"Nenhuma que eu saiba.", cirurgia:"Operei apendicite com vinte anos. Internado, só nessa vez.", vacina:"Tomei a da gripe ano passado… acho.",
    af:"Meu pai é hipertenso e minha mãe tem diabetes.",
    fumo:"Fumo um maço por dia desde os dezoito anos.", alcool:"Cerveja no fim de semana, umas quatro latas.", drogas:"Não.", ativ:"O serviço já é pesado; academia não.", alim:"Como de tudo, bastante fritura.", sono:"Durmo bem, menos esses dias com a tosse.", vidasexual:"Sou casado, só com a minha esposa. A gente não usa camisinha.", cor:"Sou pardo.", religiao:"Católico, vou à missa de vez em quando.", nascimento:"Nasci de parto normal, em casa, na roça. Minha mãe diz que andei e falei na época certa.", infancia:"Tive catapora e sarampo, acho.", transfusao:"Nunca recebi sangue.", trauma:"Caí de um andaime há uns cinco anos e quebrei o braço.", exposicao:"Trabalho com cimento e poeira o dia todo, sem máscara. Antes trabalhei na roça.", escolaridade:"Estudei até a quinta série.", renda:"Uns dois salários mínimos, depende da obra. Somos quatro em casa.", lazer:"Futebol com os amigos no domingo. Em casa é tranquilo.", animais:"Tenho um cachorro.",
    moradia:"Casa de alvenaria, quatro cômodos, com água encanada e esgoto.",
  }, [
    {id:"inicio", q:"Quando começou?", kw:/(quando comecou|quanto tempo|desde quando|ha quantos dias|comecou como)/, r:"Começou há quatro dias, de repente, com febre e calafrio."},
    {id:"tosse", q:"Como é a tosse? Tem catarro? De que cor?", kw:/(tosse|catarro|escarro|secrec|cor do)/, r:"Tosse com catarro amarelado, meio cor de ferrugem."},
    {id:"febre", q:"Mediu a febre? Teve calafrios?", kw:/(febre|temperatura|calafrio|mediu)/, r:"Medi 39 graus ontem, com calafrio de bater o queixo."},
    {id:"dor", q:"Tem dor? Onde? Piora com a respiração?", kw:/(\bdor\b|doi|pontada|respirar fundo)/, r:"Uma pontada do lado direito, embaixo, que piora quando respiro fundo ou tusso."},
    {id:"dispneia", q:"Sente falta de ar?", kw:/(falta de ar|cansaco|dispneia|folego)/, r:"Um pouco, quando ando mais rápido."},
    {id:"fatores", q:"O que melhora ou piora? Tomou algum remédio?", kw:/(melhora|piora|tomou|antitermico|dipirona)/, r:"Tomei dipirona: a febre baixa e volta."},
    {id:"contato", q:"Tem alguém doente em casa?", kw:/(alguem (doente|com)|contato|gripad)/, r:"Meu filho ficou gripado semana passada."},
    {id:"apetite", g:"Interrogatório sintomatológico", q:"Como está o apetite e o peso?", kw:/(apetite|peso|emagrec)/, r:"Sem fome esses dias. O peso está igual."},
    {id:"hemopt", g:"Interrogatório sintomatológico", q:"Saiu sangue com a tosse?", kw:/(sangue)/, r:"Sangue não."},
    {id:"cefaleia", g:"Interrogatório sintomatológico", q:"Tem dor de cabeça?", kw:/(cabeca)/, r:"Uma dor de cabeça leve junto com a febre."},
    {id:"urina", g:"Interrogatório sintomatológico", q:"Como está a urina?", kw:/(urin|xixi)/, r:"Normal."},
    {id:"intestino", g:"Interrogatório sintomatológico", q:"E o intestino?", kw:/(intestin|fezes|evacu|diarreia)/, r:"Normal."},
    {id:"edema", g:"Interrogatório sintomatológico", q:"Notou inchaço no corpo?", kw:/(inch|edema)/, r:"Não."},
  ]),
  exame:[
    {g:"Geral", itens:[
      {id:"ectoscopia", nome:"Ectoscopia (inspeção geral)", achado:"Regular estado geral, corado, hidratado, acianótico, anictérico, febril ao toque, levemente taquipneico."},
      {id:"sv", nome:"Sinais vitais", achado:"PA 132 × 84 mmHg · FC 104 bpm · FR 24 irpm · Tax 38,6 °C · SpO₂ 93% em ar ambiente"},
      {id:"linfo", nome:"Palpação de linfonodos cervicais", achado:"Não palpáveis."},
    ]},
    {g:"Tórax — inspeção", itens:[
      {id:"insp_est", nome:"Inspeção estática (forma do tórax, abaulamentos, cicatrizes)", achado:"Tórax normolíneo, simétrico, sem abaulamentos ou retrações."},
      {id:"insp_din", nome:"Inspeção dinâmica (tipo e ritmo respiratório, tiragem)", achado:"Respiração toracoabdominal, regular, taquipneica, sem tiragem."},
    ]},
    {g:"Tórax — palpação", itens:[
      {id:"expans", nome:"Expansibilidade (ápices e bases)", achado:"Expansibilidade REDUZIDA na base direita."},
      {id:"ftv", nome:"Frêmito toracovocal (pedir para dizer \"trinta e três\")", achado:"Frêmito toracovocal AUMENTADO na base direita (região infraescapular direita)."},
    ]},
    {g:"Tórax — percussão e ausculta", itens:[
      {id:"percussao", nome:"Percussão comparativa do tórax", achado:"SUBMACICEZ na base direita; som claro pulmonar no restante."},
      {id:"ausc_pulm", nome:"Ausculta pulmonar", achado:"Murmúrio vesicular presente, com ESTERTORES CREPITANTES e SOPRO TUBÁRIO na base direita."},
      {id:"ausc_voz", nome:"Ausculta da voz (broncofonia, pectorilóquia)", achado:"Broncofonia AUMENTADA e pectorilóquia fônica na base direita."},
    ]},
    {g:"Outros sistemas", itens:[
      {id:"ausc_card", nome:"Ausculta cardíaca", achado:"Ritmo regular, taquicárdico, bulhas normofonéticas, sem sopros."},
      {id:"abdome", nome:"Exame do abdome", achado:"Plano, flácido, indolor, sem visceromegalias."},
      {id:"mmii", nome:"Membros inferiores", achado:"Sem edema, panturrilhas livres."},
    ]},
  ],
  exames:{}, hipRe:/(condensa|consolida)/,
  checklist:ckP1({
    hda:[["Início e evolução", ["inicio"], 1], ["Características da tosse e da expectoração", ["tosse"], 1], ["Febre (medida, calafrios)", ["febre"]], ["Dor torácica: localização e relação com a respiração (pleurítica)", ["dor"], 1], ["Dispneia", ["dispneia"]], ["Fatores de melhora/piora e tratamentos tentados", ["fatores"]], ["Contactantes doentes", ["contato"]]],
    isda:["apetite","hemopt","cefaleia","urina","intestino","edema"],
    exame:[["Inspeção estática e dinâmica do tórax", ["insp_est","insp_din"]], ["Expansibilidade", ["expans"]], ["Frêmito toracovocal", ["ftv"], 1], ["Percussão comparativa", ["percussao"], 1], ["Ausculta pulmonar", ["ausc_pulm"], 1], ["Ausculta da voz", ["ausc_voz"]]],
    sindrome:"síndrome de condensação pulmonar na base direita", sindRe:/(condensa|consolida)/,
    terms:/(fremito|submacic|macicez|crepita|sopro tubario|broncofonia|pectoriloquia|expansibilidade)/,
  }),
  criticos:[],
  gabarito:{
    diag:"Síndrome de condensação pulmonar na base direita (provável pneumonia adquirida na comunidade).",
    achados:["Expansibilidade reduzida na base direita","Frêmito toracovocal AUMENTADO (o pulmão consolidado transmite melhor a vibração)","Submacicez à percussão","Estertores crepitantes e sopro tubário","Broncofonia aumentada e pectorilóquia","Diferencie do derrame pleural: no derrame o frêmito está ABOLIDO e o murmúrio, abolido"],
    modelo:[["Identificação","Carlos Eduardo Santos, 45 anos, masculino, pardo, casado, católico, pedreiro, natural de Itabuna (BA), procedente de São Paulo (SP)."],["QP","\"Tosse com catarro e febre há 4 dias.\""],["HDA","Há 4 dias, início súbito de febre (39 °C) com calafrios, tosse produtiva com expectoração amarelada/ferruginosa e dor torácica em pontada na base direita, que piora à inspiração profunda e à tosse (pleurítica). Dispneia aos médios esforços. Uso de dipirona com melhora transitória da febre. Contato domiciliar com quadro gripal."],["ISDA","Hiporexia, cefaleia leve. Nega hemoptise, alterações urinárias ou intestinais, edema."],["Antecedentes pessoais","Fisiológicos: parto domiciliar normal, desenvolvimento adequado. Patológicos: catapora e sarampo na infância; fratura de braço (queda de andaime) há 5 anos; HAS em uso de losartana 50 mg/dia; apendicectomia aos 20 anos. Nega alergias e transfusões. Vacinação para influenza incerta."],["Antecedentes familiares","Pai hipertenso; mãe diabética."],["Hábitos e estilo de vida","Tabagista, 27 anos-maço. Etilismo social (4 latas de cerveja/semana). Sedentário fora do trabalho; dieta rica em frituras. Vida sexual ativa com parceira fixa, sem uso de preservativo. Ocupação: pedreiro, exposição a poeira de cimento sem proteção; trabalho rural prévio."],["Condições socioeconômicas e culturais","Casa de alvenaria, 4 cômodos, com saneamento básico. Estudou até a 5ª série. Renda de cerca de 2 salários mínimos para 4 pessoas. Lazer: futebol aos domingos. Um cão em casa."]],
  },
}),
/* ------------------------------------------------ 2. CARDIOVASCULAR — ESTENOSE AÓRTICA */
Object.assign({}, P1_BASE, {
  id:"p1-estenose", ativo:true, img:"img/joaquim.jpg", focus:"72% 40%", voz:"buttery",
  local:"Ambulatório de semiologia", titulo:"Desmaio ao subir a ladeira",
  pac:{nome:"Osvaldo Pereira", primeiro:"osvaldo", trat:"Seu Osvaldo", idade:72, sexo:"Masculino", prof:"Motorista aposentado"},
  enunciado:"Osvaldo, 72 anos, procura o ambulatório porque desmaiou há dois dias. Você é o estudante responsável pela anamnese e pelo exame físico.",
  tarefas:P1_TAREFAS("aparelho cardiovascular"),
  topicos:anamnese({
    nome:"Osvaldo Pereira.", idade:"Setenta e dois.", natural:"Sou de Juiz de Fora, Minas. Moro aqui há quarenta anos.", prof:"Fui motorista de ônibus, hoje sou aposentado.", civil:"Sou viúvo. Moro com a minha filha.",
    qp:"Eu desmaiei quando estava subindo a ladeira de casa.",
    dp:"Pressão alta e colesterol.", meds:"Anlodipino e sinvastatina.", alergia:"Nenhuma.", cirurgia:"Operei catarata dos dois olhos. Nunca fiquei internado.", vacina:"Tomo as vacinas do posto todo ano.",
    af:"Meu irmão morreu do coração, com setenta anos.",
    fumo:"Fumei trinta anos, um maço por dia. Parei faz quinze.", alcool:"Não bebo.", drogas:"Nunca.", ativ:"Caminho na praça, mas agora canso.", alim:"Comida caseira, a minha filha cozinha.", sono:"Durmo bem.", vidasexual:"Sou viúvo. Faz tempo que não tenho vida sexual.", cor:"Branco.", religiao:"Sou espírita.", nascimento:"Nasci em casa; não sei dizer mais nada.", infancia:"Sarampo e caxumba.", transfusao:"Nunca.", trauma:"Nunca me machuquei sério.", exposicao:"Fui motorista a vida toda. Antes, trabalhei numa pedreira.", escolaridade:"Fiz até o ginásio.", renda:"Vivo da aposentadoria, um salário e meio, e a minha filha ajuda.", lazer:"Jogo dominó na praça. Me dou bem com a família.", animais:"Não tenho.",
    moradia:"Moro na casa da minha filha, com água e esgoto.",
  }, [
    {id:"inicio", q:"Quando foi? O que estava fazendo?", kw:/(quando (foi|aconteceu)|que dia|o que (o senhor )?estava fazendo|quanto tempo)/, r:"Foi anteontem, subindo a ladeira de casa com as compras."},
    {id:"sincope", q:"Como foi o desmaio? Perdeu a consciência? Por quanto tempo?", kw:/(desmai|apag|perdeu a consciencia|quanto tempo (ficou|durou)|caiu)/, r:"Escureceu tudo e eu caí. A vizinha disse que fiquei uns segundos desacordado e acordei logo, sem ficar confuso."},
    {id:"convulsao", q:"Tremeu, mordeu a língua ou urinou?", kw:/(tremeu|mordeu|lingua|urinou|convuls|se debateu)/, r:"Ela disse que não tremi, não mordi a língua, nem fiz xixi."},
    {id:"previos", q:"Já tinha acontecido antes?", kw:/(antes|outra vez|primeira vez|ja (tinha|aconteceu))/, r:"Desmaiar, nunca. Mas sinto tontura quando faço força."},
    {id:"esforco", q:"Tem relação com esforço?", kw:/(esforco|subindo|forca|andando|parado|repouso)/, r:"Sempre que faço força. Parado, nada."},
    {id:"dor", q:"Sente dor ou aperto no peito?", kw:/(peito|aperto|angina|\bdor\b)/, r:"Um aperto no peito quando ando rápido, que passa quando eu paro. Faz uns seis meses."},
    {id:"dispneia", q:"Sente falta de ar?", kw:/(falta de ar|cansa|dispneia|folego)/, r:"Canso para subir escada. Piorou este ano."},
    {id:"palpit", q:"Sente o coração disparar?", kw:/(palpit|dispar|batedeira|coracao acelerad)/, r:"Não."},
    {id:"edema", g:"Interrogatório sintomatológico", q:"Notou inchaço nas pernas?", kw:/(inch|edema)/, r:"Os pés incham um pouco à noite."},
    {id:"ortopneia", g:"Interrogatório sintomatológico", q:"Consegue dormir deitado?", kw:/(travesseiro|deitad|deitar)/, r:"Durmo com um travesseiro, normal."},
    {id:"peso", g:"Interrogatório sintomatológico", q:"O peso mudou?", kw:/(peso|emagrec|engord)/, r:"Está igual."},
    {id:"urina", g:"Interrogatório sintomatológico", q:"Como está a urina?", kw:/(urin|xixi)/, r:"Levanto uma vez à noite, de resto normal."},
    {id:"cefaleia", g:"Interrogatório sintomatológico", q:"Tem dor de cabeça?", kw:/(cabeca)/, r:"Não."},
    {id:"visao", g:"Interrogatório sintomatológico", q:"E a visão?", kw:/(visao|enxerg|vista)/, r:"Depois da catarata, enxergo bem."},
  ]),
  exame:[
    {g:"Geral", itens:[
      {id:"ectoscopia", nome:"Ectoscopia (inspeção geral)", achado:"Bom estado geral, lúcido, corado, hidratado, acianótico, eupneico em repouso."},
      {id:"sv", nome:"Sinais vitais", achado:"PA 118 × 88 mmHg (pressão de pulso reduzida: 30 mmHg) · FC 72 bpm, regular · FR 16 irpm · SpO₂ 96%"},
    ]},
    {g:"Pulsos e pescoço", itens:[
      {id:"carotida", nome:"Palpação do pulso carotídeo", achado:"Pulso de ascensão LENTA e BAIXA amplitude (pulso parvus et tardus)."},
      {id:"pulsos", nome:"Pulsos periféricos (radiais, pediosos)", achado:"Pulsos presentes e simétricos, de baixa amplitude."},
      {id:"jugular", nome:"Pulso venoso jugular a 45°", achado:"Sem turgência jugular."},
    ]},
    {g:"Precórdio", itens:[
      {id:"insp_prec", nome:"Inspeção do precórdio", achado:"Sem abaulamentos; ictus não visível."},
      {id:"ictus", nome:"Palpação do ictus cordis", achado:"Ictus no 5º espaço intercostal, na linha hemiclavicular esquerda, PROPULSIVO e sustentado, 2 polpas digitais."},
      {id:"fremito", nome:"Palpação de frêmitos nos focos", achado:"FRÊMITO SISTÓLICO palpável no foco aórtico."},
      {id:"ausc_ao", nome:"Ausculta do foco aórtico (2º EIC à direita) e irradiação", achado:"SOPRO SISTÓLICO EJETIVO, em diamante (crescendo-decrescendo), rude, 4+/6+, mais intenso no foco aórtico, IRRADIANDO PARA AS CARÓTIDAS. B2 hipofonética."},
      {id:"ausc_mitral", nome:"Ausculta do foco mitral e demais focos", achado:"B1 normofonética; o sopro é audível no foco mitral com timbre mais agudo (fenômeno de Gallavardin). Sem B3."},
    ]},
    {g:"Outros sistemas", itens:[
      {id:"ausc_pulm", nome:"Ausculta pulmonar", achado:"Murmúrio vesicular presente, sem ruídos adventícios."},
      {id:"mmii", nome:"Membros inferiores", achado:"Edema maleolar 1+/4+, simétrico."},
      {id:"abdome", nome:"Exame do abdome", achado:"Flácido, indolor, sem visceromegalias."},
    ]},
  ],
  exames:{}, hipRe:/(estenose aort|estenose da valva aort)/,
  checklist:ckP1({
    hda:[["Circunstância e início do desmaio", ["inicio"], 1], ["Características da síncope (perda de consciência, duração, recuperação)", ["sincope"], 1], ["Diferencia de crise convulsiva (liberação esfincteriana, mordedura, abalos)", ["convulsao"], 1], ["Relação com o esforço", ["esforco"], 1], ["Episódios prévios", ["previos"]], ["Dor torácica", ["dor"]], ["Dispneia", ["dispneia"]], ["Palpitações", ["palpit"]]],
    isda:["edema","ortopneia","peso","urina","cefaleia","visao"],
    exame:[["Pulso carotídeo", ["carotida"], 1], ["Pulsos periféricos", ["pulsos"]], ["Pulso venoso jugular", ["jugular"]], ["Palpação do ictus", ["ictus"], 1], ["Pesquisa de frêmitos", ["fremito"]], ["Ausculta de todos os focos", ["ausc_ao","ausc_mitral"], 1], ["Ausculta pulmonar", ["ausc_pulm"]]],
    sindrome:"sopro sistólico ejetivo em foco aórtico — estenose aórtica (tríade: síncope, angina e dispneia aos esforços)", sindRe:/(estenose aort|estenose da valva aort|valvopatia aort)/,
    terms:/(sopro|sistolic|ejetiv|foco aortico|carotid|parvus|tardus|fremito|propulsiv|diamante|crescendo)/,
  }),
  criticos:[],
  gabarito:{
    diag:"Estenose aórtica sintomática (síncope e angina aos esforços), provavelmente degenerativa.",
    achados:["Pulso parvus et tardus (ascensão lenta, baixa amplitude)","Pressão de pulso reduzida","Ictus propulsivo e sustentado (hipertrofia do VE), sem desvio","Frêmito sistólico no foco aórtico","Sopro sistólico ejetivo em diamante, foco aórtico, irradiando para as carótidas","B2 hipofonética (válvula calcificada e pouco móvel)"],
    modelo:[["Identificação","Osvaldo Pereira, 72 anos, masculino, branco, viúvo, espírita, motorista aposentado, natural de Juiz de Fora (MG)."],["QP","\"Desmaiei subindo a ladeira.\""],["HDA","Há 2 dias, síncope durante esforço (subindo ladeira com peso), com perda de consciência de segundos e recuperação rápida e completa, sem abalos, mordedura de língua ou liberação esfincteriana. Refere pré-síncope aos esforços, angina aos esforços há 6 meses, que alivia com o repouso, e dispneia progressiva aos médios esforços no último ano. Nega palpitações."],["ISDA","Edema maleolar vespertino. Nega ortopneia, alterações urinárias, cefaleia ou alterações visuais."],["Antecedentes pessoais","Fisiológicos: nascimento domiciliar, sem outras informações. Patológicos: sarampo e caxumba na infância; HAS e dislipidemia (anlodipino, sinvastatina); facectomia bilateral. Nega alergias, internações, traumas e transfusões. Vacinação anual em dia."],["Antecedentes familiares","Irmão faleceu por cardiopatia aos 70 anos."],["Hábitos e estilo de vida","Ex-tabagista (30 anos-maço, parou há 15 anos). Nega etilismo. Caminhadas, hoje limitadas pela dispneia. Sem vida sexual ativa desde a viuvez. Ocupações: motorista; trabalho prévio em pedreira."],["Condições socioeconômicas e culturais","Mora com a filha, casa com saneamento básico. Estudou até o ginásio. Renda: aposentadoria (1,5 salário) com ajuda da filha. Lazer: dominó na praça; bom relacionamento familiar. Sem animais."]],
  },
}),
/* ------------------------------------------------ 3. ABDOME — ASCITE / HIPERTENSÃO PORTAL */
Object.assign({}, P1_BASE, {
  id:"p1-ascite", ativo:true, img:"img/joaquim.jpg", focus:"72% 40%", voz:"buttery",
  local:"Ambulatório de semiologia", titulo:"Barriga crescendo e pernas inchadas",
  pac:{nome:"Manoel Gomes da Silva", primeiro:"manoel", trat:"Seu Manoel", idade:58, sexo:"Masculino", prof:"Garçom aposentado"},
  enunciado:"Manoel, 58 anos, procura o ambulatório porque a barriga está crescendo há 3 meses. Você é o estudante responsável pela anamnese e pelo exame físico.",
  tarefas:P1_TAREFAS("abdome"),
  topicos:anamnese({
    nome:"Manoel Gomes da Silva.", idade:"Cinquenta e oito.", natural:"Sou de Recife. Vim pra cá com vinte anos.", prof:"Fui garçom a vida toda, hoje estou aposentado.", civil:"Sou divorciado. Moro sozinho.",
    qp:"Minha barriga está crescendo e as pernas inchando.",
    dp:"Disseram que eu tinha gordura no fígado… e diabetes.", meds:"Metformina, quando eu lembro.", alergia:"Nenhuma.", cirurgia:"Nunca operei, nunca fiquei internado.", vacina:"Hepatite? Não sei se tomei.",
    af:"Meu pai bebia muito e morreu do fígado.",
    fumo:"Fumo meio maço por dia, desde moleque.", alcool:"Bebi cachaça todo dia por uns trinta anos, meio litro por dia. Parei faz dois meses.", drogas:"Não.", ativ:"Não faço nada.", alim:"Como mal, sozinho, muita coisa pronta.", sono:"Às vezes troco o dia pela noite.", vidasexual:"Depois do divórcio tive algumas parceiras… nem sempre usei camisinha.", cor:"Sou negro.", religiao:"Não tenho religião.", nascimento:"Nasci em casa, em Recife. Não sei mais detalhes.", infancia:"Não lembro.", trauma:"Briga de bar há uns anos: levei pontos na cabeça.", exposicao:"Sempre trabalhei de garçom, à noite.", escolaridade:"Estudei até a quarta série.", renda:"A aposentadoria, um salário mínimo.", lazer:"Fico em casa vendo TV. Não falo muito com os filhos desde o divórcio.", animais:"Tenho um gato.",
    moradia:"Moro num quarto e sala, tem água e esgoto.",
  }, [
    {id:"inicio", q:"Desde quando a barriga está crescendo?", kw:/(quando comecou|quanto tempo|desde quando|ha quantos)/, r:"Faz uns três meses. A calça não fecha mais."},
    {id:"dor", q:"Sente dor na barriga?", kw:/(\bdor\b|doi|incomod)/, r:"Dor não, só um peso, um desconforto."},
    {id:"ictericia", q:"Notou a pele ou os olhos amarelados?", kw:/(amarel|ictericia|olhos)/, r:"Minha irmã falou que meus olhos estão amarelos."},
    {id:"urina", q:"Como está a cor da urina?", kw:/(urin|xixi)/, r:"Às vezes sai escura, cor de coca-cola."},
    {id:"fezes", q:"E as fezes?", kw:/(fezes|evacu|intestin)/, r:"Normais… às vezes mais claras."},
    {id:"sangra", q:"Teve sangramento? Vomitou sangue? Fezes pretas?", kw:/(sangr|sangue|vomit|fezes pretas|gengiva)/, r:"A gengiva sangra quando escovo. Nunca vomitei sangue."},
    {id:"confusao", q:"Tem ficado confuso ou sonolento?", kw:/(confus|esquec|sonolen|memoria)/, r:"Às vezes fico esquecido e troco o dia pela noite."},
    {id:"edema", q:"Como é o inchaço das pernas?", kw:/(inch|edema|pernas)/, r:"As pernas incham no fim do dia."},
    {id:"peso", g:"Interrogatório sintomatológico", q:"E o peso?", kw:/(peso|emagrec|engord)/, r:"Emagreci dos braços, mas a barriga cresceu."},
    {id:"febre", g:"Interrogatório sintomatológico", q:"Teve febre?", kw:/(febre)/, r:"Não."},
    {id:"dispneia", g:"Interrogatório sintomatológico", q:"Sente falta de ar?", kw:/(falta de ar|cansa|folego)/, r:"Um pouco, quando a barriga está muito grande."},
    {id:"prurido", g:"Interrogatório sintomatológico", q:"Sente coceira?", kw:/(coceira|prurido|coca)/, r:"Coceira no corpo, às vezes."},
    {id:"transf", g:"Antecedentes pessoais", q:"Já recebeu sangue? Tem tatuagem?", kw:/(transfus|recebeu sangue|tatuag|seringa|hepatite)/, r:"Tenho uma tatuagem de trinta anos atrás. Nunca recebi sangue."},
  ]),
  exame:[
    {g:"Geral", itens:[
      {id:"ectoscopia", nome:"Ectoscopia (inspeção geral)", achado:"Emagrecido, ictérico +2/4+, hipocorado +/4+, hidratado, consciente e orientado."},
      {id:"sv", nome:"Sinais vitais", achado:"PA 104 × 66 mmHg · FC 92 bpm · FR 18 irpm · Tax 36,4 °C"},
      {id:"pele", nome:"Pele, mãos e tórax (estigmas)", achado:"Aranhas vasculares no tórax, eritema palmar, ginecomastia bilateral, rarefação de pelos."},
      {id:"flapping", nome:"Pesquisa de flapping (asterixe)", achado:"Flapping discreto presente."},
    ]},
    {g:"Abdome — inspeção e ausculta", itens:[
      {id:"insp_abd", nome:"Inspeção do abdome", achado:"Abdome globoso, cicatriz umbilical plana, CIRCULAÇÃO COLATERAL periumbilical (tipo porta)."},
      {id:"ausc_abd", nome:"Ausculta abdominal (antes da palpação)", achado:"Ruídos hidroaéreos presentes e normais."},
    ]},
    {g:"Abdome — percussão", itens:[
      {id:"perc_abd", nome:"Percussão do abdome", achado:"MACICEZ nos flancos com timpanismo central."},
      {id:"macicez_movel", nome:"Macicez móvel de decúbito", achado:"POSITIVA: a área de macicez se desloca com a mudança de decúbito."},
      {id:"piparote", nome:"Sinal do piparote", achado:"POSITIVO (ascite volumosa)."},
      {id:"hepatimetria", nome:"Hepatimetria", achado:"7 cm na linha hemiclavicular direita (fígado reduzido)."},
      {id:"traube", nome:"Percussão do espaço de Traube", achado:"Espaço de Traube OCUPADO (maciço)."},
    ]},
    {g:"Abdome — palpação", itens:[
      {id:"palp_sup", nome:"Palpação superficial", achado:"Abdome tenso, indolor, sem massas."},
      {id:"palp_baco", nome:"Palpação do baço", achado:"Baço palpável a 3 cm do rebordo costal esquerdo (ESPLENOMEGALIA)."},
      {id:"palp_figado", nome:"Palpação do fígado", achado:"Fígado de difícil palpação por causa da ascite."},
    ]},
    {g:"Outros sistemas", itens:[
      {id:"mmii", nome:"Membros inferiores", achado:"Edema 2+/4+ bilateral, depressível (cacifo positivo)."},
      {id:"ausc_card", nome:"Ausculta cardíaca", achado:"Ritmo regular, sem sopros."},
      {id:"ausc_pulm", nome:"Ausculta pulmonar", achado:"Murmúrio vesicular presente, levemente reduzido nas bases."},
    ]},
  ],
  exames:{}, hipRe:/(ascite|hipertensao portal|cirros|insuficiencia hepatica)/,
  checklist:ckP1({
    hda:[["Início e evolução do aumento abdominal", ["inicio"], 1], ["Dor abdominal", ["dor"]], ["Icterícia", ["ictericia"], 1], ["Colúria e acolia", ["urina","fezes"]], ["Sangramentos (gengiva, hematêmese, melena)", ["sangra"], 1], ["Alterações de consciência (encefalopatia)", ["confusao"], 1], ["Edema de membros inferiores", ["edema"]]],
    isda:["peso","febre","dispneia","prurido"],
    exame:[["Estigmas de hepatopatia (pele, mãos, tórax)", ["pele"], 1], ["Pesquisa de flapping", ["flapping"]], ["Inspeção do abdome", ["insp_abd"], 1], ["Ausculta antes da palpação", ["ausc_abd"]], ["Percussão do abdome", ["perc_abd"]], ["Pesquisa de ascite: macicez móvel e/ou piparote", ["macicez_movel","piparote"], 1], ["Hepatimetria e espaço de Traube", ["hepatimetria","traube"]], ["Palpação do baço", ["palp_baco"], 1]],
    sindrome:"ascite com hipertensão portal e sinais de insuficiência hepatocelular (provável cirrose alcoólica)", sindRe:/(ascite|hipertensao portal|insuficiencia hepat|cirros)/,
    terms:/(macicez movel|piparote|circulacao colateral|aranhas? vascular|eritema palmar|ginecomastia|esplenomegal|flapping|asterix|ictericia|traube|hepatimetria)/,
  }),
  criticos:[],
  gabarito:{
    diag:"Síndrome de hipertensão portal com ascite e sinais de insuficiência hepatocelular (provável cirrose hepática alcoólica, com possível encefalopatia leve).",
    achados:["Icterícia, aranhas vasculares, eritema palmar, ginecomastia (insuficiência hepatocelular)","Circulação colateral tipo porta e esplenomegalia (hipertensão portal)","Macicez nos flancos, macicez móvel e piparote positivos (ascite)","Hepatimetria reduzida (fígado cirrótico pequeno)","Flapping (encefalopatia hepática)","Na sequência do exame do abdome, a ausculta vem antes da palpação"],
    modelo:[["Identificação","Manoel Gomes da Silva, 58 anos, masculino, negro, divorciado, sem religião, garçom aposentado, natural de Recife (PE)."],["QP","\"Barriga crescendo e pernas inchando.\""],["HDA","Há 3 meses, aumento progressivo do volume abdominal, com desconforto sem dor, associado a edema vespertino de membros inferiores, icterícia notada por familiar, colúria intermitente e episódios de hipocolia. Gengivorragia à escovação; nega hematêmese e melena. Refere esquecimento e inversão do ciclo sono-vigília."],["ISDA","Perda de massa muscular em membros, dispneia quando a distensão é maior, prurido. Nega febre."],["Antecedentes pessoais","Fisiológicos: nascimento domiciliar, sem outras informações. Patológicos: não recorda doenças da infância; trauma cranioencefálico leve com sutura (briga); esteatose hepática e diabetes (metformina irregular); tatuagem há 30 anos; nega transfusões, cirurgias e alergias. Vacinação para hepatite B desconhecida."],["Antecedentes familiares","Pai etilista, faleceu por hepatopatia."],["Hábitos e estilo de vida","Etilismo: cerca de 500 mL de cachaça/dia por 30 anos, abstêmio há 2 meses. Tabagista, meio maço/dia. Sedentário, alimentação inadequada. Múltiplas parcerias após o divórcio, uso irregular de preservativo (risco para hepatites virais e IST)."],["Condições socioeconômicas e culturais","Mora sozinho, quarto e sala com saneamento básico. Estudou até a 4ª série. Renda: aposentadoria de 1 salário mínimo. Pouco contato com os filhos desde o divórcio; lazer restrito à TV. Um gato em casa."]],
  },
}),
/* ------------------------------------------------ 4. NEUROLÓGICO — SÍNDROME PIRAMIDAL */
Object.assign({}, P1_BASE, {
  id:"p1-piramidal", ativo:true, img:"img/lucia.jpg", focus:"72% 40%", voz:"rounded",
  local:"Ambulatório de semiologia", titulo:"O lado direito ficou fraco depois do derrame",
  pac:{nome:"Maria Aparecida Souza", primeiro:"maria", trat:"Dona Cida", idade:66, sexo:"Feminino", prof:"Costureira aposentada"},
  enunciado:"Dona Cida, 66 anos, vem ao ambulatório três meses depois de um AVC. Você é o estudante responsável pela anamnese e pelo exame neurológico.",
  tarefas:P1_TAREFAS("sistema nervoso"),
  topicos:anamnese({
    nome:"Maria Aparecida Souza. Pode me chamar de Cida.", idade:"Sessenta e seis.", natural:"Sou de Londrina, no Paraná. Moro aqui há trinta anos.", prof:"Fui costureira, hoje sou aposentada.", civil:"Casada. Moro com o meu marido.",
    qp:"Fiquei com o lado direito fraco depois do derrame.",
    dp:"Pressão alta e diabetes. E disseram que o meu coração bate desritmado.", meds:"Losartana, metformina, AAS… e um remédio para afinar o sangue que eu não comprei.", alergia:"Nenhuma.", cirurgia:"Fiz laqueadura. Fiquei internada uma semana por causa do derrame.", vacina:"Em dia, eu acho.",
    af:"A minha mãe teve derrame com setenta anos.",
    fumo:"Nunca fumei.", alcool:"Não bebo.", drogas:"Não.", ativ:"Faço fisioterapia duas vezes por semana.", alim:"Tento comer sem sal.", sono:"Durmo bem.", vidasexual:"Com o meu marido. Depois do derrame diminuiu bastante.", cor:"Branca.", religiao:"Católica.", nascimento:"Parto normal, em casa.", gineco:"Menstruei com treze anos. Tive três filhos, todos de parto normal, nenhum aborto. A menopausa veio com cinquenta.", infancia:"Sarampo.", transfusao:"Nunca recebi sangue.", trauma:"Só a queda no banheiro, mês passado.", exposicao:"Costurei quarenta anos, sentada.", escolaridade:"Fiz até a oitava série.", renda:"Eu e meu marido aposentados, uns três salários.", lazer:"Antes do derrame eu costurava e ia à igreja. Agora fico mais em casa.", animais:"Um cachorrinho.",
    moradia:"Casa térrea. O banheiro é pequeno e não tem barra de apoio.",
  }, [
    {id:"inicio", q:"Como começou?", kw:/(como comecou|quando (comecou|foi|aconteceu)|quanto tempo)/, r:"Faz três meses. Acordei com o braço e a perna direitos sem força e a boca torta. Fiquei internada uma semana."},
    {id:"evolucao", q:"Como evoluiu desde então?", kw:/(evolu|melhor|piorou|desde entao|fisioterap)/, r:"Melhorei um pouco com a fisioterapia, mas a perna ainda arrasta."},
    {id:"fala", q:"Teve dificuldade para falar?", kw:/(fala|falar|palavra|entender)/, r:"No começo não conseguia falar direito. Hoje falo bem, às vezes troco palavras."},
    {id:"sensib", q:"Sente dormência ou formigamento?", kw:/(dormen|formig|sensibilidade|sente (o|a) (braco|perna))/, r:"O lado direito fica dormente às vezes."},
    {id:"rigidez", q:"O braço fica duro ou com câimbra?", kw:/(duro|rigid|caimbra|espasm|travad|mao fecha)/, r:"A mão fica dura, fechada, e às vezes dá câimbra."},
    {id:"marcha", q:"Como está andando?", kw:/(anda|andar|marcha|bengala|caminh)/, r:"Ando com bengala. A perna direita faz um arco."},
    {id:"quedas", q:"Teve quedas?", kw:/(queda|caiu|caí)/, r:"Caí uma vez no banheiro, mês passado."},
    {id:"degluticao", q:"Tem dificuldade para engolir?", kw:/(engol|engasg|deglut)/, r:"Engasgo às vezes com água."},
    {id:"urina", g:"Interrogatório sintomatológico", q:"Como está a urina?", kw:/(urin|xixi|segura)/, r:"Às vezes não seguro a urina."},
    {id:"humor", g:"Interrogatório sintomatológico", q:"Como está o seu humor?", kw:/(humor|triste|desanim|chor|ansios)/, r:"Fico triste por depender dos outros."},
    {id:"palpit", g:"Interrogatório sintomatológico", q:"Sente o coração disparar?", kw:/(palpit|dispar|coracao)/, r:"Às vezes o coração dispara, fica desritmado."},
    {id:"cefaleia", g:"Interrogatório sintomatológico", q:"Tem dor de cabeça?", kw:/(cabeca)/, r:"Não."},
    {id:"visao", g:"Interrogatório sintomatológico", q:"E a visão?", kw:/(visao|enxerg|vista)/, r:"Normal, com óculos."},
  ]),
  exame:[
    {g:"Geral", itens:[
      {id:"ectoscopia", nome:"Ectoscopia (inspeção geral)", achado:"Bom estado geral, lúcida, orientada no tempo e no espaço, discreta assimetria facial."},
      {id:"sv", nome:"Sinais vitais", achado:"PA 148 × 90 mmHg · FC 88 bpm, IRREGULAR · FR 16 irpm · Tax 36,3 °C"},
      {id:"pulso", nome:"Pulso radial", achado:"Irregular, com amplitude variável."},
      {id:"ausc_card", nome:"Ausculta cardíaca", achado:"Ritmo IRREGULARMENTE IRREGULAR, sem sopros."},
    ]},
    {g:"Nervos cranianos", itens:[
      {id:"face", nome:"Mímica facial (VII par)", achado:"Desvio da rima labial para a ESQUERDA ao sorrir, com apagamento do sulco nasolabial direito; fronte preservada (paralisia facial CENTRAL à direita)."},
      {id:"pares", nome:"Demais pares cranianos", achado:"Pupilas isocóricas e fotorreagentes, movimentação ocular preservada, língua sem desvio."},
    ]},
    {g:"Motricidade", itens:[
      {id:"forca_ms", nome:"Força muscular dos membros superiores (graus 0 a 5)", achado:"Grau 3/5 no membro superior direito; 5/5 à esquerda."},
      {id:"forca_mi", nome:"Força muscular dos membros inferiores (graus 0 a 5)", achado:"Grau 4/5 no membro inferior direito; 5/5 à esquerda."},
      {id:"mingazzini", nome:"Manobras deficitárias (braços estendidos, Mingazzini)", achado:"Queda lenta dos membros superior e inferior direitos."},
      {id:"tonus", nome:"Tônus muscular (movimentação passiva)", achado:"Hipertonia ELÁSTICA (espástica) à direita, com sinal do canivete."},
    ]},
    {g:"Reflexos", itens:[
      {id:"reflexos", nome:"Reflexos profundos (bicipital, tricipital, patelar, aquileu)", achado:"HIPERREFLEXIA à direita (3+), com clônus de tornozelo esgotável à direita; 2+ à esquerda."},
      {id:"babinski", nome:"Reflexo cutâneo-plantar", achado:"Sinal de BABINSKI à direita (extensão do hálux); flexor à esquerda."},
    ]},
    {g:"Sensibilidade, coordenação e marcha", itens:[
      {id:"sensib_ex", nome:"Sensibilidade tátil e dolorosa", achado:"Hipoestesia tátil e dolorosa no dimídio direito."},
      {id:"coord", nome:"Coordenação (índex-nariz, calcanhar-joelho)", achado:"Sem dismetria à esquerda; prejudicada à direita pela fraqueza."},
      {id:"marcha_ex", nome:"Marcha", achado:"Marcha CEIFANTE (helicópode) à direita, com apoio de bengala."},
      {id:"romberg", nome:"Teste de Romberg", achado:"Não realizado com segurança (paciente não se mantém de pés juntos sem apoio)."},
    ]},
  ],
  exames:{}, hipRe:/(piramid|neuronio motor superior|primeiro neuronio|hemipares|hemiplegi)/,
  checklist:ckP1({
    hda:[["Início e modo de instalação (súbito)", ["inicio"], 1], ["Evolução e reabilitação", ["evolucao"]], ["Alterações da fala", ["fala"]], ["Alterações de sensibilidade", ["sensib"]], ["Rigidez/espasticidade", ["rigidez"]], ["Marcha e quedas", ["marcha","quedas"], 1], ["Disfagia", ["degluticao"], 1]],
    isda:["urina","humor","palpit","cefaleia","visao"],
    exame:[["Mímica facial (VII par)", ["face"], 1], ["Força muscular graduada", ["forca_ms","forca_mi"], 1], ["Manobras deficitárias", ["mingazzini"]], ["Tônus", ["tonus"], 1], ["Reflexos profundos", ["reflexos"], 1], ["Reflexo cutâneo-plantar", ["babinski"], 1], ["Sensibilidade", ["sensib_ex"]], ["Marcha", ["marcha_ex"]], ["Pulso e ausculta cardíaca (fonte embólica)", ["pulso","ausc_card"]]],
    sindrome:"síndrome piramidal (do neurônio motor superior) à direita — hemiparesia espástica desproporcionada, com paralisia facial central", sindRe:/(piramid|neuronio motor superior|primeiro neuronio|hemipares|hemiplegi)/,
    terms:/(hiperreflex|babinski|espastic|canivete|ceifante|helicopod|paralisia facial central|hemipares|clonus|hipertonia)/,
  }),
  criticos:[],
  gabarito:{
    diag:"Síndrome piramidal (do neurônio motor superior) à direita: hemiparesia espástica com paralisia facial central, sequela de AVC isquêmico, provavelmente cardioembólico (ritmo irregular sugere fibrilação atrial).",
    achados:["Paralisia facial CENTRAL (poupa a fronte) do mesmo lado da hemiparesia","Força 3/5 no braço e 4/5 na perna (hemiparesia desproporcionada)","Hipertonia elástica com sinal do canivete (espasticidade)","Hiperreflexia e clônus","Sinal de Babinski","Marcha ceifante","Pulso e ausculta irregulares: pensar em fibrilação atrial como causa do AVC"],
    modelo:[["Identificação","Maria Aparecida Souza, 66 anos, feminino, branca, casada, católica, costureira aposentada, natural de Londrina (PR)."],["QP","\"Fiquei com o lado direito fraco depois do derrame.\""],["HDA","Há 3 meses, déficit motor em dimídio direito e desvio de rima de instalação súbita, percebidos ao acordar, com afasia inicial; internada por 7 dias. Melhora parcial com fisioterapia. Persistem fraqueza e rigidez à direita, parestesias, marcha com arrasto do membro inferior direito (uso de bengala), uma queda no último mês e disfagia para líquidos."],["ISDA","Urgência/incontinência urinária ocasional, humor deprimido, palpitações. Nega cefaleia e alterações visuais."],["Antecedentes pessoais","Fisiológicos: parto domiciliar normal; menarca aos 13 anos, G3P3A0 (partos normais), menopausa aos 50 anos. Patológicos: sarampo na infância; queda no banheiro há 1 mês; HAS, DM2 e arritmia (losartana, metformina, AAS; anticoagulante prescrito e não adquirido); laqueadura tubária. Nega alergias e transfusões."],["Antecedentes familiares","Mãe com AVC aos 70 anos."],["Hábitos e estilo de vida","Nega tabagismo e etilismo. Fisioterapia 2x/semana. Dieta hipossódica. Vida sexual com o marido, reduzida após o AVC. Ocupação: costureira por 40 anos."],["Condições socioeconômicas e culturais","Casa térrea; banheiro sem barras de apoio (risco de quedas). Estudou até a 8ª série. Renda do casal: cerca de 3 salários. Lazer (costura, igreja) reduzido após o AVC. Um cão em casa."]],
  },
}),
/* ------------------------------------------------ 5. TIREOIDE — TIREOTOXICOSE */
Object.assign({}, P1_BASE, {
  id:"p1-tireoide", ativo:true, img:"img/camila.jpg", focus:"72% 40%", voz:"airy",
  local:"Ambulatório de semiologia", titulo:"Agitada, emagrecendo e com o coração acelerado",
  pac:{nome:"Bianca Ramos", primeiro:"bianca", trat:"Bianca", idade:32, sexo:"Feminino", prof:"Professora"},
  enunciado:"Bianca, 32 anos, procura o ambulatório porque está emagrecendo e com palpitações. Você é o estudante responsável pela anamnese e pelo exame físico.",
  tarefas:P1_TAREFAS("pescoço e tireoide (e sinais sistêmicos)"),
  topicos:anamnese({
    nome:"Bianca Ramos.", idade:"Trinta e dois.", natural:"Sou de Belo Horizonte e moro aqui mesmo.", prof:"Sou professora do ensino fundamental.", civil:"Sou solteira, moro sozinha.",
    qp:"Ando muito agitada, emagrecendo e com o coração acelerado.",
    dp:"Nenhuma.", meds:"Só o anticoncepcional.", alergia:"Nenhuma.", cirurgia:"Nunca operei nem fiquei internada.", vacina:"Está em dia.",
    af:"A minha mãe tem problema de tireoide e toma remédio.",
    fumo:"Fumo uns cinco cigarros por dia.", alcool:"Vinho, socialmente.", drogas:"Não.", ativ:"Parei a academia porque fico cansada.", alim:"Estou comendo bem mais do que antes.", sono:"Durmo mal, acordo agitada.", vidasexual:"Tenho um namorado. Uso anticoncepcional e às vezes camisinha. A vontade diminuiu.", cor:"Parda.", religiao:"Evangélica, mas não frequento muito.", nascimento:"Nasci de cesárea, no tempo certo. Desenvolvimento normal.", gineco:"Menstruei com doze anos, ciclos de 28 dias até começar isso. Nunca engravidei.", infancia:"Catapora.", transfusao:"Nunca.", trauma:"Nunca.", exposicao:"Sempre fui professora, em sala de aula.", escolaridade:"Superior completo, pedagogia.", renda:"Uns quatro salários mínimos. Moro sozinha.", lazer:"Saio com os amigos e leio. Ultimamente estou sem paciência.", animais:"Tenho uma gata.",
    moradia:"Apartamento com tudo certinho.",
  }, [
    {id:"inicio", q:"Quando começou?", kw:/(quando comecou|quanto tempo|desde quando|ha quantos)/, r:"Há uns quatro meses."},
    {id:"peso", q:"Quanto peso perdeu?", kw:/(peso|emagrec|quilo)/, r:"Perdi sete quilos, comendo mais do que antes."},
    {id:"palpit", q:"Como são as palpitações?", kw:/(palpit|coracao|dispar|acelerad)/, r:"O coração dispara até quando estou parada."},
    {id:"calor", q:"Sente muito calor? Sua muito?", kw:/(calor|suor|sua\b|frio|temperatura)/, r:"Sinto calor o tempo todo. Todo mundo de casaco e eu suando."},
    {id:"tremor", q:"Tem tremores?", kw:/(trem|treme|letra)/, r:"As mãos tremem. A minha letra ficou feia."},
    {id:"humor", q:"Como está o seu humor e o sono?", kw:/(humor|irrit|nervos|ansios|chor)/, r:"Fico irritada, choro fácil e durmo mal."},
    {id:"olhos", q:"Notou algo nos olhos?", kw:/(olho|vista|visao|saltad)/, r:"Os meus olhos parecem mais saltados e ardem."},
    {id:"pescoco", q:"Notou algo no pescoço?", kw:/(pescoco|garganta|caroco|papo)/, r:"Acho que o meu pescoço está mais grosso."},
    {id:"intestino", q:"Como está o intestino?", kw:/(intestin|fezes|evacu|diarreia)/, r:"Evacuo umas três vezes por dia, fezes amolecidas."},
    {id:"menstr", q:"Como está a menstruação?", kw:/(menstrua|ciclo|regra|\bdum\b)/, r:"Ficou mais curta e fraca."},
    {id:"fraqueza", g:"Interrogatório sintomatológico", q:"Sente fraqueza?", kw:/(fraqueza|forca|escada)/, r:"Fraqueza para subir escada."},
    {id:"dispneia", g:"Interrogatório sintomatológico", q:"Sente falta de ar?", kw:/(falta de ar|folego|cansa)/, r:"Um pouco, ao esforço."},
    {id:"cabelo", g:"Interrogatório sintomatológico", q:"E o cabelo e a pele?", kw:/(cabelo|unha|pele)/, r:"O cabelo está caindo muito."},
    {id:"urina", g:"Interrogatório sintomatológico", q:"Como está a urina?", kw:/(urin|xixi)/, r:"Normal."},
  ]),
  exame:[
    {g:"Geral", itens:[
      {id:"ectoscopia", nome:"Ectoscopia (inspeção geral)", achado:"Agitada, fala rápida, emagrecida, pele quente e úmida."},
      {id:"sv", nome:"Sinais vitais e antropometria", achado:"PA 136 × 64 mmHg (pressão de pulso alargada) · FC 118 bpm, regular · FR 18 irpm · Tax 37,3 °C · Peso 54 kg (IMC 19,8 kg/m²)"},
      {id:"maos", nome:"Mãos (tremor, pele)", achado:"Tremor FINO de extremidades (folha de papel sobre as mãos estendidas); palmas quentes e úmidas."},
    ]},
    {g:"Olhos", itens:[
      {id:"olhos_ex", nome:"Inspeção ocular (exoftalmia, retração palpebral)", achado:"EXOFTALMIA bilateral, retração palpebral, olhar fixo."},
      {id:"lidlag", nome:"Pesquisa do atraso palpebral (lid-lag)", achado:"Atraso palpebral POSITIVO ao olhar para baixo."},
    ]},
    {g:"Pescoço e tireoide", itens:[
      {id:"insp_pesc", nome:"Inspeção do pescoço (pedir para deglutir)", achado:"Aumento DIFUSO e simétrico da região cervical anterior, que se move com a deglutição."},
      {id:"palp_tir", nome:"Palpação da tireoide (abordagem posterior e anterior)", achado:"Tireoide aumentada cerca de 2 vezes, DIFUSA, lisa, de consistência elástica, indolor, SEM nódulos."},
      {id:"ausc_tir", nome:"Ausculta da tireoide", achado:"SOPRO contínuo sobre a tireoide."},
      {id:"linfo", nome:"Palpação de linfonodos cervicais", achado:"Não palpáveis."},
    ]},
    {g:"Outros sistemas", itens:[
      {id:"ausc_card", nome:"Ausculta cardíaca", achado:"Taquicardia regular, B1 hiperfonética, sem sopros."},
      {id:"reflexos", nome:"Reflexos profundos", achado:"Vivos, com fase de relaxamento rápida."},
      {id:"pretibial", nome:"Região pré-tibial", achado:"Sem mixedema pré-tibial."},
      {id:"abdome", nome:"Exame do abdome", achado:"Plano, flácido, indolor, ruídos hidroaéreos aumentados."},
    ]},
  ],
  exames:{}, hipRe:/(tireotox|hipertireoid|graves|basedow)/,
  checklist:ckP1({
    hda:[["Início e tempo de evolução", ["inicio"]], ["Perda de peso com apetite preservado", ["peso"], 1], ["Palpitações", ["palpit"]], ["Intolerância ao calor e sudorese", ["calor"], 1], ["Tremor", ["tremor"]], ["Alterações de humor e sono", ["humor"]], ["Sintomas oculares", ["olhos"], 1], ["Aumento do pescoço", ["pescoco"]], ["Hábito intestinal", ["intestino"]], ["Ciclo menstrual", ["menstr"]]],
    isda:["fraqueza","dispneia","cabelo","urina"],
    exame:[["Tremor de extremidades", ["maos"]], ["Inspeção ocular", ["olhos_ex"], 1], ["Atraso palpebral", ["lidlag"]], ["Inspeção do pescoço com deglutição", ["insp_pesc"]], ["Palpação da tireoide", ["palp_tir"], 1], ["Ausculta da tireoide", ["ausc_tir"]], ["Linfonodos cervicais", ["linfo"]], ["Ausculta cardíaca", ["ausc_card"]]],
    sindrome:"síndrome de tireotoxicose com bócio difuso e oftalmopatia (doença de Graves)", sindRe:/(tireotox|hipertireoid|graves|basedow)/,
    terms:/(exoftalm|bocio|difus|sopro|tremor fino|taquicard|retracao palpebral|lid.?lag|atraso palpebral|pele quente)/,
  }),
  criticos:[],
  gabarito:{
    diag:"Síndrome de tireotoxicose (hipertireoidismo) com bócio difuso, sopro tireoidiano e oftalmopatia: doença de Graves.",
    achados:["Taquicardia com pressão de pulso alargada","Pele quente e úmida, tremor fino","Exoftalmia, retração palpebral e lid-lag (oftalmopatia: específica de Graves)","Bócio difuso, liso, indolor, que sobe com a deglutição","Sopro tireoidiano (hiperfluxo)","Reflexos vivos"],
    modelo:[["Identificação","Bianca Ramos, 32 anos, feminino, parda, solteira, evangélica, professora, natural e procedente de Belo Horizonte (MG)."],["QP","\"Agitada, emagrecendo e com o coração acelerado.\""],["HDA","Há 4 meses, perda ponderal de 7 kg com aumento do apetite, palpitações em repouso, intolerância ao calor com sudorese, tremor de mãos, irritabilidade, labilidade emocional e insônia. Refere protrusão e ardência ocular e aumento do volume cervical. Aumento da frequência evacuatória (3x/dia, fezes amolecidas) e oligomenorreia."],["ISDA","Fraqueza proximal, dispneia aos esforços, queda de cabelo. Sem queixas urinárias."],["Antecedentes pessoais","Fisiológicos: nascida de cesárea a termo, desenvolvimento normal; menarca aos 12 anos, ciclos regulares prévios, nuligesta. Patológicos: catapora na infância; nega comorbidades, cirurgias, internações, traumas, transfusões e alergias. Anticoncepcional oral. Vacinação em dia."],["Antecedentes familiares","Mãe com doença tireoidiana em tratamento."],["Hábitos e estilo de vida","Tabagista, 5 cigarros/dia. Etilismo social. Interrompeu a atividade física por fadiga. Vida sexual ativa com parceiro fixo, anticoncepcional oral e preservativo irregular; refere redução da libido. Ocupação: professora."],["Condições socioeconômicas e culturais","Mora sozinha, apartamento com saneamento básico. Ensino superior completo. Renda de cerca de 4 salários. Lazer: amigos e leitura. Uma gata em casa."]],
  },
}),
];

/* ------------------------------------------------ 6. ANEMIA FERROPRIVA */
P1_CASOS.push(Object.assign({}, P1_BASE, {
  id:"p1-anemia", ativo:true, img:"img/camila.jpg", focus:"72% 40%", voz:"airy",
  local:"Ambulatório de semiologia", titulo:"Cansaço e vontade de comer gelo",
  pac:{nome:"Juliana Prado", primeiro:"juliana", trat:"Juliana", idade:28, sexo:"Feminino", prof:"Caixa de supermercado"},
  enunciado:"Juliana, 28 anos, procura o ambulatório por cansaço há alguns meses. Você é o estudante responsável pela anamnese e pelo exame físico.",
  tarefas:P1_TAREFAS("exame físico geral: pele, mucosas, fâneros e aparelho cardiovascular"),
  topicos:anamnese({
    nome:"Juliana Prado.", idade:"Vinte e oito.", natural:"Sou daqui mesmo, nasci e moro na cidade.", prof:"Sou caixa de supermercado.", civil:"Solteira, moro com a minha mãe.",
    qp:"Ando muito cansada, sem força pra nada.",
    dp:"Nenhuma doença.", meds:"Não uso nada, só dipirona quando tenho cólica.", alergia:"Nenhuma.", cirurgia:"Nunca operei nem fiquei internada.", vacina:"Acho que está em dia.",
    af:"A minha mãe teve mioma e tirou o útero.",
    fumo:"Não fumo.", alcool:"Só em festa.", drogas:"Não.", ativ:"Não consigo fazer nada, canso.", alim:"Sou vegetariana há dois anos, mas como mal, muito pão e macarrão.", sono:"Durmo bem, mas acordo cansada.", vidasexual:"Tenho namorado. Uso camisinha às vezes; não tomo anticoncepcional.", cor:"Negra.", religiao:"Católica.", nascimento:"Parto normal, no tempo certo.", gineco:"Menstruei com onze anos. Nunca engravidei. O ciclo é de 28 dias, mas desce por oito dias e muito forte.", infancia:"Tive bronquite quando era pequena.", transfusao:"Nunca.", trauma:"Nunca.", exposicao:"Sempre trabalhei no comércio.", escolaridade:"Ensino médio completo.", renda:"Um salário e meio. Divido as contas com a minha mãe.", lazer:"Gosto de dançar, mas ando sem ânimo. Me dou bem com a minha mãe.", animais:"Não tenho.",
    moradia:"Casa com a minha mãe, tem água e esgoto.",
  }, [
    {id:"inicio", q:"Desde quando está cansada?", kw:/(quando comecou|quanto tempo|desde quando|ha quantos)/, r:"Faz uns seis meses, foi piorando aos poucos."},
    {id:"cansaco", q:"O cansaço aparece em que situações?", kw:/(cansa|fraqueza|forca|esforco|escada|trabalho)/, r:"Subir a escada do trabalho me deixa sem ar, e o coração dispara."},
    {id:"tontura", q:"Sente tontura ou falta de ar?", kw:/(tontura|tonta|escurec|falta de ar|desmai)/, r:"Fico tonta quando levanto rápido."},
    {id:"menstr", q:"Como é a sua menstruação? Quantos dias, quantos absorventes?", kw:/(menstrua|ciclo|regra|absorvente|fluxo|\bdum\b)/, r:"Desce muito: dura uns oito dias, troco o absorvente noturno de duas em duas horas e às vezes vaza com coágulos."},
    {id:"pica", q:"Tem vontade de comer coisas diferentes, como gelo ou terra?", kw:/(gelo|terra|vontade de comer|desejo|pica|mastig)/, r:"Tenho uma vontade enorme de mastigar gelo. Como um copo cheio por dia."},
    {id:"sangra", q:"Teve outros sangramentos? Fezes escuras ou com sangue?", kw:/(sangr|sangue|fezes (escuras|pretas)|gengiva|nariz)/, r:"Fora a menstruação, não. Fezes normais."},
    {id:"unhas", q:"Notou mudança em unhas, cabelo ou língua?", kw:/(unha|cabelo|lingua|boca|canto da boca)/, r:"As unhas estão quebrando, e o canto da boca racha."},
    {id:"palpit", q:"Sente o coração disparar?", kw:/(palpit|coracao|dispar|batedeira)/, r:"Quando faço esforço, dispara."},
    {id:"peso", g:"Interrogatório sintomatológico", q:"O peso mudou?", kw:/(peso|emagrec|engord)/, r:"Está igual."},
    {id:"febre", g:"Interrogatório sintomatológico", q:"Teve febre?", kw:/(febre)/, r:"Não."},
    {id:"intestino", g:"Interrogatório sintomatológico", q:"Como funciona o intestino?", kw:/(intestin|evacu|diarreia|prisao de ventre)/, r:"Normal, todo dia."},
    {id:"urina", g:"Interrogatório sintomatológico", q:"E a urina?", kw:/(urin|xixi)/, r:"Normal."},
    {id:"frio", g:"Interrogatório sintomatológico", q:"Sente muito frio?", kw:/(frio|gelad)/, r:"Sinto as mãos geladas."},
  ]),
  exame:[
    {g:"Geral", itens:[
      {id:"ectoscopia", nome:"Ectoscopia (inspeção geral)", achado:"Bom estado geral, lúcida, HIPOCORADA +++/4+, hidratada, acianótica, anictérica."},
      {id:"sv", nome:"Sinais vitais e antropometria", achado:"PA 104 × 64 mmHg · FC 102 bpm · FR 18 irpm · Tax 36,4 °C · Peso 55 kg · IMC 20,2 kg/m²"},
    ]},
    {g:"Pele, mucosas e fâneros", itens:[
      {id:"mucosas", nome:"Mucosas (conjuntivas e oral)", achado:"Conjuntivas palpebrais e mucosa oral DESCORADAS +++/4+."},
      {id:"palmas", nome:"Pregas palmares", achado:"Palidez das pregas palmares."},
      {id:"unhas_ex", nome:"Unhas", achado:"Unhas finas, frágeis, com depressão central (COILONÍQUIA, unha em colher)."},
      {id:"lingua", nome:"Língua e lábios", achado:"Língua lisa e despapilada (GLOSSITE atrófica); QUEILITE angular."},
      {id:"ictericia", nome:"Pesquisa de icterícia (escleras)", achado:"Escleras anictéricas."},
    ]},
    {g:"Cardiovascular", itens:[
      {id:"ausc_card", nome:"Ausculta cardíaca", achado:"Taquicardia regular; SOPRO SISTÓLICO suave 2+/6+ em foco pulmonar, sem irradiação (sopro funcional por hiperfluxo)."},
      {id:"pulsos", nome:"Pulsos periféricos", achado:"Amplos e simétricos."},
    ]},
    {g:"Abdome e linfonodos", itens:[
      {id:"baco", nome:"Palpação do baço", achado:"Baço não palpável."},
      {id:"figado", nome:"Palpação do fígado", achado:"Fígado não palpável."},
      {id:"linfo", nome:"Palpação de linfonodos (cervicais, axilares, inguinais)", achado:"Não palpáveis."},
    ]},
  ],
  exames:{}, hipRe:/(anemi|ferropriv|deficiencia de ferro)/,
  checklist:ckP1({
    hda:[["Início e evolução do cansaço", ["inicio"]], ["Relação do cansaço com esforço", ["cansaco"]], ["Tontura / intolerância ortostática", ["tontura"]], ["Investiga perdas: padrão menstrual (duração, quantidade, coágulos)", ["menstr"], 1.5], ["Outros sangramentos", ["sangra"], 1], ["Perversão do apetite (pica / pagofagia)", ["pica"], 1], ["Alterações de unhas, cabelos e boca", ["unhas"]], ["Palpitações", ["palpit"]]],
    isda:["peso","febre","intestino","urina","frio"],
    exame:[["Inspeção de mucosas (conjuntivas e oral)", ["mucosas"], 1], ["Pregas palmares", ["palmas"]], ["Inspeção das unhas", ["unhas_ex"], 1], ["Inspeção da língua e lábios", ["lingua"], 1], ["Pesquisa de icterícia", ["ictericia"]], ["Ausculta cardíaca", ["ausc_card"], 1], ["Palpação do baço e linfonodos", ["baco","linfo"]]],
    sindrome:"síndrome anêmica com sinais de carência de ferro (provável anemia ferropriva por perda menstrual e baixa ingestão)", sindRe:/(anemi|ferropriv|deficiencia de ferro|carencia de ferro)/,
    terms:/(hipocorad|descorad|palidez|coiloniquia|glossite|queilite|sopro sistolico|funcional|taquicard)/,
  }),
  criticos:[],
  gabarito:{
    diag:"Síndrome anêmica com sinais de deficiência de ferro: provável anemia ferropriva por perda menstrual aumentada (menorragia) e baixa ingestão de ferro.",
    achados:["Palidez cutâneo-mucosa +++/4+ (conjuntivas, mucosa oral, pregas palmares)","Taquicardia e sopro sistólico funcional (hiperfluxo)","Coiloníquia, glossite atrófica e queilite angular (sinais de carência de ferro)","Pica / pagofagia (vontade de comer gelo)","Ausência de icterícia e de esplenomegalia (afasta hemólise)"],
    modelo:[["Identificação","Juliana Prado, 28 anos, feminino, negra, solteira, católica, caixa de supermercado, natural e procedente desta cidade."],["QP","\"Cansaço, sem força para nada.\""],["HDA","Há 6 meses, astenia progressiva com dispneia e palpitações aos esforços, tontura ortostática e extremidades frias. Refere ciclos menstruais de 8 dias com fluxo intenso (troca de absorvente a cada 2 h, coágulos e escapes), pagofagia (um copo de gelo por dia), unhas quebradiças e fissuras nos cantos da boca. Nega outros sangramentos."],["ISDA","Sem alterações de peso, febre, alterações intestinais ou urinárias."],["Antecedentes pessoais","Fisiológicos: parto normal a termo; menarca aos 11 anos, ciclos de 28 dias com 8 dias de fluxo intenso; nuligesta. Patológicos: bronquite na infância; sem comorbidades atuais; dipirona eventual para cólica. Nega cirurgias, internações, traumas, transfusões e alergias."],["Antecedentes familiares","Mãe histerectomizada por mioma."],["Hábitos e estilo de vida","Vegetariana há 2 anos, dieta pobre em ferro (rica em carboidratos). Nega tabagismo; etilismo social. Sedentária por cansaço. Vida sexual ativa, preservativo irregular, sem método hormonal (considerar gravidez). Ocupação: sempre no comércio."],["Condições socioeconômicas e culturais","Mora com a mãe, casa com saneamento básico. Ensino médio completo. Renda de 1,5 salário, dividindo as despesas com a mãe. Lazer: dança, hoje reduzido pelo cansaço. Sem animais."]],
  },
}));

/* ------------------------------------------------ 7. DIABETES */
P1_CASOS.push(Object.assign({}, P1_BASE, {
  id:"p1-diabetes", ativo:true, img:"img/joaquim.jpg", focus:"72% 40%", voz:"buttery",
  local:"Ambulatório de semiologia", titulo:"Muita sede e formigamento nos pés",
  pac:{nome:"Sérgio Almeida", primeiro:"sergio", trat:"Seu Sérgio", idade:56, sexo:"Masculino", prof:"Taxista"},
  enunciado:"Sérgio, 56 anos, procura o ambulatório porque tem sentido muita sede e urinado muito. Você é o estudante responsável pela anamnese e pelo exame físico.",
  tarefas:P1_TAREFAS("exame físico geral, antropometria e exame dos pés"),
  topicos:anamnese({
    nome:"Sérgio Almeida.", idade:"Cinquenta e seis.", natural:"Nasci em Campinas e moro aqui há trinta anos.", prof:"Sou taxista, fico o dia todo sentado.", civil:"Casado, dois filhos.",
    qp:"Estou com muita sede e urinando demais.",
    dp:"Pressão alta. Nunca fiz exame de açúcar.", meds:"Losartana.", alergia:"Nenhuma.", cirurgia:"Operei hérnia na barriga. Nunca fiquei internado.", vacina:"Não sei.",
    af:"Minha mãe e meu irmão têm diabetes. Meu pai teve infarto.",
    fumo:"Fumei vinte anos, parei faz dez.", alcool:"Umas cervejas no domingo.", drogas:"Não.", ativ:"Nenhuma. Fico o dia inteiro no carro.", alim:"Como na rua: salgado, refrigerante, marmita.", sono:"Durmo mal porque levanto para urinar.", vidasexual:"Só com a minha esposa. Tem falhado a ereção… fico sem graça de falar.", cor:"Branco.", religiao:"Católico.", nascimento:"Parto normal.", infancia:"Catapora.", transfusao:"Nunca.", trauma:"Bati o carro há dez anos, sem fratura.", exposicao:"Fui metalúrgico antes de ser taxista.", escolaridade:"Ensino médio.", renda:"Uns três salários, depende das corridas. Somos quatro.", lazer:"Futebol na TV. A família é unida.", animais:"Dois cachorros.",
    moradia:"Casa própria, com saneamento.",
  }, [
    {id:"inicio", q:"Desde quando?", kw:/(quando comecou|quanto tempo|desde quando|ha quantos)/, r:"Uns três meses."},
    {id:"sede", q:"Quanta água está bebendo?", kw:/(sede|agua|beb(e|endo) (muita|quanta)|litro)/, r:"Bebo uns quatro, cinco litros por dia. A boca fica seca."},
    {id:"diurese", q:"Quantas vezes urina? Levanta à noite?", kw:/(urin|xixi|banheiro|noite)/, r:"Toda hora, e levanto umas quatro vezes à noite."},
    {id:"fome_peso", q:"Como está a fome e o peso?", kw:/(fome|apetite|peso|emagrec)/, r:"Como bastante, mas perdi uns seis quilos."},
    {id:"visao", q:"Notou alteração na visão?", kw:/(visao|vista|enxerg|embac)/, r:"A vista fica embaçada às vezes."},
    {id:"pes", q:"Sente formigamento, dormência ou dor nos pés?", kw:/(pe\b|pes\b|formig|dormen|queima|sensibilidade)/, r:"Os pés formigam e queimam à noite, como se estivesse de meia."},
    {id:"feridas", q:"Tem alguma ferida que demora a cicatrizar?", kw:/(ferida|machuc|cicatriz|cortou|infecc)/, r:"Um calo no pé que machucou e demorou pra fechar."},
    {id:"cansaco", q:"Sente cansaço?", kw:/(cansa|fraqueza|sonolen)/, r:"Ando cansado e com sono depois do almoço."},
    {id:"dor_peito", g:"Interrogatório sintomatológico", q:"Sente dor no peito?", kw:/(peito|aperto)/, r:"Não."},
    {id:"infec", g:"Interrogatório sintomatológico", q:"Teve infecções de pele ou urina?", kw:/(infecc|coceira|micose|ardencia)/, r:"Uma coceira na virilha que não passa."},
    {id:"sexual", g:"Interrogatório sintomatológico", q:"Como está a função sexual?", kw:/(sexual|erec|libido)/, r:"Tem falhado, doutor… fico sem graça de falar."},
    {id:"intestino", g:"Interrogatório sintomatológico", q:"E o intestino?", kw:/(intestin|evacu|fezes|diarreia)/, r:"Normal."},
  ]),
  exame:[
    {g:"Geral e antropometria", itens:[
      {id:"ectoscopia", nome:"Ectoscopia (inspeção geral)", achado:"Bom estado geral, lúcido, corado, mucosas levemente secas, obesidade central."},
      {id:"sv", nome:"Sinais vitais", achado:"PA 146 × 92 mmHg · FC 84 bpm · FR 16 irpm · Tax 36,5 °C"},
      {id:"imc", nome:"Peso, altura e IMC", achado:"Peso 98 kg · Altura 1,74 m · IMC 32,4 kg/m² (obesidade grau I)"},
      {id:"cintura", nome:"Circunferência abdominal", achado:"112 cm (aumentada)."},
      {id:"acantose", nome:"Inspeção de pescoço e axilas", achado:"ACANTOSE NIGRICANS em região cervical posterior e axilas."},
      {id:"virilha", nome:"Inspeção de pele e dobras", achado:"Placa avermelhada e úmida na região inguinal (intertrigo / candidíase)."},
    ]},
    {g:"Exame dos pés", itens:[
      {id:"pes_insp", nome:"Inspeção dos pés (pele, unhas, calos, entre os dedos)", achado:"Pele seca com fissuras nos calcanhares; calosidade com cicatriz recente em cabeça do 1º metatarso direito; unhas espessadas."},
      {id:"monofil", nome:"Sensibilidade protetora com monofilamento 10 g", achado:"Monofilamento NÃO percebido em 4 de 10 pontos em ambos os pés."},
      {id:"diapasao", nome:"Sensibilidade vibratória com diapasão 128 Hz", achado:"Vibração REDUZIDA nos háluxes."},
      {id:"aquileu", nome:"Reflexo aquileu", achado:"Reflexos aquileus diminuídos bilateralmente."},
      {id:"pediosos", nome:"Palpação dos pulsos pediosos e tibiais posteriores", achado:"Pulsos presentes e simétricos, levemente diminuídos."},
    ]},
    {g:"Outros", itens:[
      {id:"ausc_card", nome:"Ausculta cardíaca", achado:"Ritmo regular, sem sopros."},
      {id:"fundo", nome:"Fundoscopia", achado:"Não realizada no ambulatório de semiologia: solicitar avaliação oftalmológica."},
    ]},
  ],
  exames:{}, hipRe:/(diabet|hiperglicem)/,
  checklist:ckP1({
    hda:[["Início e evolução", ["inicio"]], ["Polidipsia", ["sede"], 1], ["Poliúria e noctúria", ["diurese"], 1], ["Polifagia e perda de peso", ["fome_peso"], 1], ["Visão turva", ["visao"]], ["Sintomas de neuropatia nos pés", ["pes"], 1], ["Feridas de difícil cicatrização", ["feridas"]], ["Fadiga", ["cansaco"]]],
    isda:["dor_peito","infec","sexual","intestino"],
    exame:[["Peso, altura e IMC", ["imc"], 1], ["Circunferência abdominal", ["cintura"], 1], ["Pesquisa de acantose nigricans", ["acantose"]], ["Inspeção dos pés", ["pes_insp"], 1], ["Monofilamento", ["monofil"], 1], ["Diapasão (sensibilidade vibratória)", ["diapasao"]], ["Pulsos pediosos e tibiais posteriores", ["pediosos"], 1], ["Reflexo aquileu", ["aquileu"]]],
    sindrome:"síndrome hiperglicêmica (4 Ps: poliúria, polidipsia, polifagia e perda de peso) — provável diabetes mellitus tipo 2 com neuropatia periférica", sindRe:/(diabet|hiperglicem)/,
    terms:/(poliuria|polidipsia|polifagia|perda de peso|acantose|monofilamento|neuropatia|obesidade|circunferencia|imc)/,
  }),
  criticos:[],
  gabarito:{
    diag:"Síndrome hiperglicêmica (poliúria, polidipsia, polifagia e perda de peso): provável diabetes mellitus tipo 2, com sinais de neuropatia periférica e resistência insulínica.",
    achados:["Obesidade central (IMC 32,4; cintura 112 cm)","Acantose nigricans (resistência à insulina)","Pés: pele seca, calosidade e cicatriz, perda da sensibilidade protetora ao monofilamento, vibração reduzida, aquileus diminuídos (neuropatia periférica)","Pulsos pediosos presentes","Intertrigo inguinal (infecções de pele são mais comuns na hiperglicemia)"],
    modelo:[["Identificação","Sérgio Almeida, 56 anos, masculino, branco, casado, católico, taxista, natural de Campinas (SP)."],["QP","\"Muita sede e urinando demais.\""],["HDA","Há 3 meses, polidipsia (4 a 5 L/dia), poliúria com noctúria (4x/noite), polifagia com perda de 6 kg, visão turva intermitente, parestesias em queimação nos pés em padrão de \"meia\", piores à noite, e calosidade plantar com cicatrização lenta. Refere fadiga e sonolência pós-prandial."],["ISDA","Prurido inguinal persistente, disfunção erétil. Nega dor torácica e alterações intestinais."],["Antecedentes pessoais","Fisiológicos: parto normal. Patológicos: catapora na infância; acidente automobilístico há 10 anos, sem fraturas; HAS em uso de losartana; herniorrafia abdominal; nunca rastreou glicemia. Nega alergias e transfusões. Vacinação desconhecida."],["Antecedentes familiares","Mãe e irmão diabéticos; pai com infarto."],["Hábitos e estilo de vida","Ex-tabagista (20 anos, parou há 10). Etilismo social. Sedentário, dieta rica em ultraprocessados e refrigerante. Vida sexual com a esposa; queixa de disfunção erétil. Ocupações: taxista; metalúrgico previamente."],["Condições socioeconômicas e culturais","Casa própria com saneamento básico. Ensino médio. Renda de cerca de 3 salários para 4 pessoas. Família unida; lazer: futebol na TV. Dois cães em casa."]],
  },
}));

/* ------------------------------------------------ 8. HIPERTENSÃO ARTERIAL */
P1_CASOS.push(Object.assign({}, P1_BASE, {
  id:"p1-has", ativo:true, img:"img/lucia.jpg", focus:"72% 40%", voz:"rounded",
  local:"Ambulatório de semiologia", titulo:"Pressão alta medida na farmácia",
  pac:{nome:"Rosa Maria Lima", primeiro:"rosa", trat:"Dona Rosa", idade:57, sexo:"Feminino", prof:"Cozinheira"},
  enunciado:"Rosa, 57 anos, procura o ambulatório porque a pressão deu alta na farmácia. Você é o estudante responsável pela anamnese, pela aferição correta da pressão arterial e pelo exame físico.",
  tarefas:["Faça a anamnese completa (roteiro do Porto): identificação, queixa principal, HDA, interrogatório sintomatológico, antecedentes pessoais fisiológicos e patológicos, antecedentes familiares, hábitos e estilo de vida e condições socioeconômicas e culturais.", "Afira a pressão arterial com a técnica correta, verbalizando cada etapa.", "Faça o exame físico cardiovascular e a antropometria. Descreva os achados e diga o diagnóstico sindrômico."],
  topicos:anamnese({
    nome:"Rosa Maria Lima.", idade:"Cinquenta e sete.", natural:"Sou de Feira de Santana. Moro aqui há vinte e cinco anos.", prof:"Sou cozinheira num restaurante.", civil:"Casada, três filhos.",
    qp:"Minha pressão deu alta na farmácia, dezesseis por dez.",
    dp:"Que eu saiba, nenhuma. Nunca fui ao médico direito.", meds:"Não tomo nada.", alergia:"Nenhuma.", cirurgia:"Três cesáreas.", vacina:"Tomei as da campanha.",
    af:"Meu pai morreu de derrame e minha mãe tem pressão alta.",
    fumo:"Nunca fumei.", alcool:"Não bebo.", drogas:"Não.", ativ:"Nenhuma, só o trabalho.", alim:"Experimento muita comida salgada no trabalho; uso bastante sal e tempero pronto.", sono:"Ronco muito, meu marido reclama.", vidasexual:"Com o meu marido, normal.", cor:"Sou parda.", religiao:"Evangélica, vou ao culto todo domingo.", nascimento:"Nasci em casa, de parteira.", gineco:"Menstruei com treze anos. Três gestações, três cesáreas, nenhum aborto. Menopausa com cinquenta e dois.", infancia:"Não lembro de doença grave.", transfusao:"Recebi sangue numa das cesáreas.", trauma:"Nunca.", exposicao:"Sempre trabalhei em cozinha, com muito calor.", escolaridade:"Estudei até a sexta série.", renda:"Eu e meu marido somamos uns três salários.", lazer:"A igreja é o meu lazer. Em casa está tudo bem.", animais:"Um cachorro e galinhas no quintal.",
    moradia:"Casa com água e esgoto.",
  }, [
    {id:"quando", q:"Quando mediu? Já tinha medido antes?", kw:/(quando (mediu|foi)|antes|outras vezes|ja (tinha|mediu))/, r:"Medi semana passada na farmácia. Em março, no posto, também deu alta, mas não liguei."},
    {id:"sintomas", q:"Sente alguma coisa?", kw:/(sente|sintoma|incomod|como (a senhora )?se sente)/, r:"Na maior parte do tempo não sinto nada."},
    {id:"cefaleia", q:"Tem dor de cabeça? Onde?", kw:/(cabeca|nuca)/, r:"De vez em quando dói a nuca, de manhã."},
    {id:"tontura", q:"Tontura, visão turva?", kw:/(tontura|visao|vista|embac|zumbido)/, r:"Às vezes vejo uns pontinhos."},
    {id:"dor_peito", q:"Sente dor no peito ou falta de ar?", kw:/(peito|aperto|falta de ar|dispneia|cansa)/, r:"Canso subindo ladeira, mas dor no peito não."},
    {id:"edema", q:"Tem inchaço?", kw:/(inch|edema)/, r:"Os tornozelos incham no fim do dia de trabalho."},
    {id:"urina", g:"Interrogatório sintomatológico", q:"Como está a urina?", kw:/(urin|xixi|espuma)/, r:"Normal."},
    {id:"palpit", g:"Interrogatório sintomatológico", q:"Sente palpitações?", kw:/(palpit|dispar|coracao)/, r:"Não."},
    {id:"peso", g:"Interrogatório sintomatológico", q:"E o peso?", kw:/(peso|engord|emagrec)/, r:"Engordei uns oito quilos nos últimos anos."},
    {id:"menop", g:"Interrogatório sintomatológico", q:"Já entrou na menopausa?", kw:/(menopausa|menstrua|calor)/, r:"Parei de menstruar com cinquenta e dois."},
    {id:"sede", g:"Interrogatório sintomatológico", q:"Sente muita sede ou urina muito?", kw:/(sede|diabet|acucar)/, r:"Não."},
  ]),
  exame:[
    {g:"Aferição da pressão arterial (técnica)", itens:[
      {id:"pa_repouso", nome:"Deixar a paciente sentada em repouso por 5 minutos, pés no chão, bexiga vazia, sem falar", achado:"Paciente em repouso, sentada, costas apoiadas, pernas descruzadas."},
      {id:"pa_braco", nome:"Medir a circunferência do braço e escolher o manguito adequado", achado:"Circunferência do braço 34 cm: manguito de adulto GRANDE."},
      {id:"pa_posicao", nome:"Posicionar o braço na altura do coração, palma para cima", achado:"Braço apoiado na altura do 4º espaço intercostal."},
      {id:"pa_palpat", nome:"Estimar a pressão sistólica pelo método palpatório (pulso radial)", achado:"O pulso radial desaparece em 158 mmHg: insuflar até cerca de 190 mmHg."},
      {id:"pa_ausc", nome:"Aferição auscultatória (Korotkoff I e V)", achado:"PA 162 × 102 mmHg no braço direito."},
      {id:"pa_bracos", nome:"Medir nos dois braços", achado:"Braço esquerdo 158 × 100 mmHg (diferença < 15 mmHg)."},
      {id:"pa_repete", nome:"Repetir a medida após 1 a 2 minutos e fazer a média", achado:"Segunda medida 160 × 100 mmHg (média 161 × 101 mmHg)."},
      {id:"pa_ortost", nome:"Medir em pé (hipotensão ortostática)", achado:"Em pé, 156 × 98 mmHg, sem queda significativa."},
    ]},
    {g:"Geral e antropometria", itens:[
      {id:"ectoscopia", nome:"Ectoscopia (inspeção geral)", achado:"Bom estado geral, corada, hidratada, obesa."},
      {id:"sv", nome:"Frequência cardíaca, respiratória e temperatura", achado:"FC 78 bpm, regular · FR 16 irpm · Tax 36,3 °C"},
      {id:"imc", nome:"Peso, altura e IMC", achado:"Peso 84 kg · Altura 1,58 m · IMC 33,6 kg/m²"},
      {id:"cintura", nome:"Circunferência abdominal", achado:"104 cm (aumentada)."},
    ]},
    {g:"Cardiovascular", itens:[
      {id:"ictus", nome:"Palpação do ictus cordis", achado:"Ictus no 5º EIC, na linha hemiclavicular esquerda, 2 polpas, levemente propulsivo."},
      {id:"ausc_card", nome:"Ausculta cardíaca", achado:"Ritmo regular em 2 tempos com B4 audível no foco mitral; B2 hiperfonética no foco aórtico; sem sopros."},
      {id:"carotidas", nome:"Ausculta das carótidas", achado:"Sem sopros."},
      {id:"pulsos", nome:"Pulsos periféricos (radiais e femorais simultâneos)", achado:"Pulsos simétricos, sem atraso radiofemoral."},
      {id:"sopro_abd", nome:"Ausculta abdominal (sopro de artérias renais)", achado:"Sem sopros abdominais."},
      {id:"mmii", nome:"Membros inferiores", achado:"Edema maleolar discreto, 1+/4+."},
    ]},
  ],
  exames:{}, hipRe:/(hipertens|\bhas\b|pressao alta)/,
  checklist:ckP1({
    hda:[["Medidas anteriores da pressão", ["quando"], 1], ["Presença ou ausência de sintomas", ["sintomas"]], ["Cefaleia", ["cefaleia"]], ["Sintomas visuais / tontura", ["tontura"]], ["Sintomas cardiovasculares (dor torácica, dispneia)", ["dor_peito"], 1], ["Edema", ["edema"]]],
    isda:["urina","palpit","peso","menop","sede"],
    exame:[["Técnica: repouso de 5 minutos antes da medida", ["pa_repouso"], 1], ["Técnica: manguito adequado à circunferência do braço", ["pa_braco"], 1], ["Técnica: braço na altura do coração", ["pa_posicao"], .5], ["Técnica: estimativa palpatória da sistólica", ["pa_palpat"], 1], ["Aferição auscultatória", ["pa_ausc"], 1], ["Medida nos dois braços", ["pa_bracos"], 1], ["Repete a medida e calcula a média", ["pa_repete"], 1], ["IMC e circunferência abdominal", ["imc","cintura"], 1], ["Palpação do ictus e ausculta cardíaca", ["ictus","ausc_card"], 1], ["Pulsos radiais e femorais (atraso radiofemoral)", ["pulsos"]]],
    sindrome:"hipertensão arterial sistêmica estágio 2, com sinais de repercussão cardíaca (B4) e risco cardiovascular elevado (obesidade central, provável apneia do sono)", sindRe:/(hipertens|\bhas\b|pressao alta)/,
    terms:/(manguito|palpatori|korotkoff|media|estagio|b4|quarta bulha|b2 hiperfon|circunferencia|imc|obesidade)/,
  }),
  criticos:[],
  gabarito:{
    diag:"Hipertensão arterial sistêmica estágio 2 (média 161 × 101 mmHg, confirmada por medidas em ocasiões diferentes), com B4 (hipertrofia/disfunção diastólica do VE) e fatores de risco: obesidade central, sedentarismo, alto consumo de sal, história familiar e provável apneia do sono (ronco).",
    achados:["Técnica: repouso 5 min, manguito pela circunferência do braço (34 cm = adulto grande), braço no nível do coração, estimativa palpatória, medida nos 2 braços, 2 medidas com média","PA média 161 × 101 mmHg: estágio 2","IMC 33,6 e cintura 104 cm (obesidade central)","Ictus levemente propulsivo e B4 (rigidez do VE hipertrofiado)","B2 hiperfonética no foco aórtico","Sem atraso radiofemoral nem sopros abdominais (rastreio de causas secundárias)"],
    modelo:[["Identificação","Rosa Maria Lima, 57 anos, feminino, parda, casada, evangélica, cozinheira, natural de Feira de Santana (BA)."],["QP","\"Pressão alta na farmácia, 160 por 100.\""],["HDA","Paciente assintomática na maior parte do tempo, com duas medidas elevadas em ocasiões diferentes (março, no posto; semana passada, na farmácia: 160 × 100 mmHg). Refere cefaleia occipital matinal ocasional, escotomas esporádicos, dispneia aos grandes esforços e edema maleolar vespertino. Nega dor torácica."],["ISDA","Ganho de 8 kg nos últimos anos. Menopausa aos 52 anos. Nega palpitações, alterações urinárias, polidipsia."],["Antecedentes pessoais","Fisiológicos: nascimento domiciliar (parteira); menarca aos 13 anos, G3P3(cesáreas)A0, menopausa aos 52 anos. Patológicos: sem doenças da infância lembradas; transfusão sanguínea em uma das cesáreas; sem diagnósticos prévios nem medicações. Nega alergias e traumas."],["Antecedentes familiares","Pai faleceu por AVC; mãe hipertensa."],["Hábitos e estilo de vida","Nunca fumou, nega etilismo. Sedentária. Alto consumo de sal e temperos industrializados. Roncos intensos (suspeita de apneia do sono). Vida sexual ativa com o marido, sem queixas. Ocupação: cozinheira (ambiente quente)."],["Condições socioeconômicas e culturais","Casa com saneamento básico. Estudou até a 6ª série. Renda do casal: cerca de 3 salários. Lazer: igreja; bom relacionamento familiar. Um cão e galinhas no quintal."]],
  },
}));

/* ------------------------------------------------ 9. SPIKES — COMUNICAÇÃO DE MÁ NOTÍCIA */
P1_CASOS.push(Object.assign({}, P1_BASE, {
  id:"p1-spikes", ativo:true, img:"img/camila.jpg", focus:"72% 40%", voz:"airy",
  local:"Ambulatório de mastologia", titulo:"Resultado da biópsia (protocolo SPIKES)",
  nivel:"Comunicação · SPIKES", labelHip:"Em uma frase: qual notícia você precisa comunicar?", labelCond:"Próximos passos combinados com a paciente",
  pac:{nome:"Helena Martins", primeiro:"helena", trat:"Helena", idade:47, sexo:"Feminino", prof:"Contadora"},
  enunciado:"Helena, 47 anos, volta ao ambulatório para receber o resultado da biópsia de um nódulo na mama esquerda. O laudo mostra carcinoma ductal invasivo. Ela veio sozinha; o marido está no estacionamento.",
  tarefas:["Comunique o resultado à paciente usando o protocolo SPIKES.", "Acolha as reações emocionais.", "Combine os próximos passos com ela. Não é preciso detalhar o tratamento."],
  persona:"Mulher de 47 anos, contadora, objetiva, mas visivelmente ansiosa: pressente que o resultado não é bom. Fala pouco no início. Reage como uma pessoa real: se o aluno der a notícia de forma brusca ou com jargão, fica confusa e pergunta 'o que isso quer dizer?'. Ao ouvir a palavra câncer, fica em silêncio, chora e depois pergunta 'eu vou morrer?' e 'vou perder a mama?'. Se o aluno acolher com empatia, ela se acalma aos poucos. Quer que o marido participe. Não faz perguntas sobre remédios.",
  topicos:[
    {id:"cumprimento", g:"Abertura", q:"Bom dia, Helena. Como a senhora está?", kw:/(bom dia|boa tarde|como (a senhora |voce )?(esta|vai))/, r:"Ansiosa, doutor(a). Não dormi direito esperando esse resultado."},
    {id:"acompanhante", g:"S — Setting (ambiente)", q:"Gostaria que alguém estivesse com a senhora agora?", kw:/(acompanhante|alguem (com|junto|estivesse|esteja|aqui|presente)|marido|chamar alguem|quer que (alguem|chame)|acompanhad)/, r:"Meu marido está no estacionamento… sim, eu gostaria que ele viesse."},
    {id:"percepcao", g:"P — Percepção", q:"O que a senhora sabe sobre o motivo da biópsia?", kw:/(o que (a senhora |voce )?(sabe|entendeu|acha|imagina)|o que (te |lhe )?(disseram|falaram|explicaram)|por que (fez|foi feita) (a )?biopsia)/, r:"O médico do posto achou um caroço no meu peito e disse que precisava ver se era benigno ou não. Eu tenho medo de ser algo ruim."},
    {id:"convite", g:"I — Convite", q:"Como a senhora prefere que eu explique o resultado?", kw:/(quer (saber|que eu (explique|fale|conte))|como (a senhora |voce )?prefere|quanto (de )?detalhe|posso (explicar|falar|conversar)|esta pronta)/, r:"Pode falar tudo, doutor(a). Prefiro saber a verdade."},
    {id:"noticia", g:"K — Conhecimento", q:"(Comunicar o diagnóstico com aviso prévio e linguagem simples)", kw:/(cancer|maligno|tumor|carcinoma|resultado (mostrou|confirmou))/, r:"(Fica em silêncio, os olhos enchem de lágrimas.) …Câncer? Meu Deus…"},
    {id:"morrer", g:"E — Emoções", q:"(Responder à pergunta sobre morrer)", kw:/(morrer|morte|cura|tem cura|grave)/, r:"Eu vou morrer, doutor(a)? Eu tenho dois filhos…"},
    {id:"mama", g:"E — Emoções", q:"(Responder ao medo de perder a mama)", kw:/(mama|seio|peito|tirar|cirurgia|mastectom)/, r:"Vou ter que tirar o peito?"},
    {id:"filhos", g:"E — Emoções", q:"Quem são as pessoas importantes para a senhora?", kw:/(filhos|famil|quem (pode|esta)|apoio|contar com)/, r:"Meus filhos têm 12 e 15 anos. Não sei nem como vou contar pra eles."},
    {id:"entendeu", g:"S — Estratégia e resumo", q:"Pode me contar com as suas palavras o que entendeu?", kw:/(o que (a senhora |voce )?entendeu|com (as )?suas palavras|pode me (dizer|contar|repetir))/, r:"Que o caroço é um câncer, que precisa de mais exames e que vou ser acompanhada por uma equipe. Que muita gente se trata e fica bem."},
    {id:"duvidas", g:"S — Estratégia e resumo", q:"A senhora tem alguma dúvida?", kw:/(alguma (duvida|pergunta)|quer (perguntar|saber mais))/, r:"Quando eu volto? Posso trazer o meu marido?"},
  ],
  exame:[], exames:{}, hipRe:/(cancer|carcinoma|maligno)/,
  checklist:[
    {d:"S — Ambiente", l:"Apresenta-se pelo nome e função", w:.5, test:C("apresentou")},
    {d:"S — Ambiente", l:"Prepara o ambiente: senta-se, garante privacidade, evita interrupções", w:1, ia:true, test:K(/(sent(e|ar|a)|privacidade|porta|sem interrup|celular|silencio|reservad|com calma|tempo para (a senhora|voce|conversar))/)},
    {d:"S — Ambiente", l:"Oferece a presença de um acompanhante", w:1, test:T("acompanhante")},
    {d:"P — Percepção", l:"Pergunta o que a paciente já sabe ou imagina sobre o exame", w:1.5, test:T("percepcao"), dica:"Antes de falar, pergunte. A resposta mostra o que ela já sabe e o que teme."},
    {d:"I — Convite", l:"Pergunta como e quanto a paciente quer saber", w:1.5, test:T("convite")},
    {d:"K — Conhecimento", l:"Faz um aviso prévio (\"infelizmente, o resultado não foi o que esperávamos\")", w:1, ia:true, test:K(/(infelizmente|nao (foi|e) (o que|a noticia)|lamento|noticia (dificil|nao (e )?boa)|nao (sao|e) boas?)/)},
    {d:"K — Conhecimento", l:"Comunica o diagnóstico de forma clara, usando a palavra \"câncer\"", w:1.5, ia:true, test:K(/(cancer|maligno)/)},
    {d:"K — Conhecimento", l:"Usa linguagem simples, sem jargão (ou explica os termos técnicos)", w:1, ia:true, test:s => /(carcinoma ductal|invasiv|neoplasia|histopatolog|estadiamento|imuno)/.test(norm(s.transcript.filter(m=>m.who==="me").map(m=>m.text).join(" "))) ? {ok:false, ev:"Usou termos técnicos"} : {ok:true, ev:"Sem jargão detectado"}},
    {d:"K — Conhecimento", l:"Dá a informação em partes e verifica o entendimento", w:1, test:ANY(T("entendeu"), C("entendimento"))},
    {d:"E — Emoções", l:"Reconhece e nomeia a emoção da paciente (\"percebo que isso é muito difícil\")", w:1.5, ia:true, test:ANY(C("empatia"), K(/(percebo|imagino|vejo que|e normal (sentir|ficar|ter medo)|entendo (o seu|que)|deve ser (muito )?dificil|faz sentido)/))},
    {d:"E — Emoções", l:"Permite o silêncio e o choro, sem interromper nem mudar de assunto", w:.5, ia:true, test:s => ({ok:true, ev:"Avaliado pelo avaliador IA quando disponível"})},
    {d:"E — Emoções", l:"Responde com honestidade às perguntas difíceis (morte, mama), sem falsas promessas", w:1, ia:true, test:T("morrer","mama")},
    {d:"S — Estratégia", l:"Explica os próximos passos (mais exames, equipe especializada) sem detalhar tratamento", w:1, ia:true, test:K(/(proximos passos|exames|equipe|oncolog|especialista|encaminh|acompanhad)/)},
    {d:"S — Estratégia", l:"Pergunta sobre a rede de apoio (família, filhos) e oferece apoio psicológico", w:1, ia:true, test:ANY(T("filhos"), K(/(psicolog|apoio|famil|marido|filhos)/))},
    {d:"S — Estratégia", l:"Resume, abre espaço para dúvidas e combina o retorno", w:1, ia:true, test:ANY(T("duvidas"), K(/(retorno|voltar|vamos nos ver|marcar|resum)/))},
    {d:"S — Estratégia", l:"Garante que a paciente não ficará sozinha (\"vamos acompanhar a senhora\")", w:.5, ia:true, test:K(/(nao (vai|esta) sozinha|vamos (acompanhar|cuidar|estar)|estamos juntos|conte comigo)/)},
  ],
  criticos:[
    {l:"Deu a notícia sem perguntar antes o que a paciente sabia (pulou a etapa P)", test:s => { const n = s.topics.noticia, p = s.topics.percepcao; return !!n && (!p || p.t > n.t); }},
  ],
  gabarito:{
    diag:"Notícia: a biópsia confirmou câncer de mama (carcinoma ductal invasivo).",
    achados:["S (Setting): sentar, privacidade, desligar o celular, oferecer acompanhante","P (Perception): \"O que a senhora sabe sobre o motivo da biópsia?\"","I (Invitation): \"Como a senhora prefere que eu explique?\"","K (Knowledge): aviso prévio + informação clara, em partes, sem jargão; verificar o entendimento","E (Emotions): silêncio, nomear a emoção, validar (\"é normal sentir medo\")","S (Strategy/Summary): próximos passos, rede de apoio, retorno combinado, \"não vai estar sozinha\""],
    modelo:[["S","\"Helena, vamos nos sentar aqui com calma. Desliguei o meu celular para conversarmos sem interrupção. A senhora gostaria que o seu marido estivesse aqui com a gente?\""],["P","\"Antes de eu falar do resultado, o que a senhora sabe sobre o porquê de termos feito essa biópsia?\""],["I","\"A senhora prefere que eu explique todos os detalhes ou que eu fale primeiro o principal?\""],["K","\"Infelizmente, o resultado não foi o que a gente esperava. A biópsia mostrou que esse nódulo é um câncer de mama.\" (pausa) \"O que a senhora entendeu do que eu falei?\""],["E","(silêncio) \"Eu percebo que essa notícia é muito difícil. É normal sentir medo agora.\" Diante de \"vou morrer?\": \"Ainda precisamos de alguns exames para saber a extensão, mas hoje muitas mulheres com câncer de mama fazem o tratamento e ficam bem. Vou ser honesto(a) com a senhora em cada etapa.\""],["S","\"Os próximos passos são alguns exames e o encaminhamento para a equipe que vai cuidar da senhora. Vamos marcar o retorno para esta semana, e a senhora pode trazer o seu marido. A senhora não vai passar por isso sozinha. Que dúvidas a senhora tem agora?\""]],
  },
}));

CASOS.splice(DYN_CASOS.length, 0, ...P1_CASOS);
