// Sala de Simulação · Catálogo de exames, auxiliares de checklist e ordens da emergência.
// Script comum (não é módulo): compartilha o escopo global com os outros arquivos da sala,
// carregados em ordem pelo sala/index.html.
"use strict";
/* =========================================================================
   CATÁLOGO DE EXAMES (valores normais por padrão; cada caso sobrescreve)
   ========================================================================= */
const EXAMES = [
  {id:"hemograma", nome:"Hemograma completo", grupo:"Laboratório", t:6, res:"Hb 13,6 g/dL · Ht 40%\nLeucócitos 7.400/mm³ (diferencial normal)\nPlaquetas 248.000/mm³"},
  {id:"renal", nome:"Ureia e creatinina", grupo:"Laboratório", t:6, res:"Ureia 32 mg/dL\nCreatinina 0,9 mg/dL"},
  {id:"eletrolitos", nome:"Sódio e potássio", grupo:"Laboratório", t:6, res:"Na 139 mEq/L\nK 4,2 mEq/L"},
  {id:"glicemia", nome:"Glicemia de jejum", grupo:"Laboratório", t:5, res:"Glicemia 91 mg/dL"},
  {id:"hba1c", nome:"Hemoglobina glicada", grupo:"Laboratório", t:6, res:"HbA1c 5,3%"},
  {id:"lipidograma", nome:"Perfil lipídico", grupo:"Laboratório", t:6, res:"CT 182 · LDL 104 · HDL 52 · TG 128 mg/dL"},
  {id:"tsh", nome:"TSH e T4 livre", grupo:"Laboratório", t:6, res:"TSH 2,1 mUI/L\nT4L 1,2 ng/dL"},
  {id:"bnp", nome:"BNP / NT-proBNP", grupo:"Laboratório", t:7, res:"BNP 38 pg/mL"},
  {id:"troponina", nome:"Troponina ultrassensível", grupo:"Laboratório", t:9, res:"Troponina I us: 4 ng/L (ref. < 19)"},
  {id:"ddimero", nome:"D-dímero", grupo:"Laboratório", t:7, res:"D-dímero 220 ng/mL (ref. < 500)"},
  {id:"coag", nome:"Coagulograma (TP/TTPa)", grupo:"Laboratório", t:6, res:"TP 12,8 s · RNI 1,0\nTTPa 29 s"},
  {id:"gaso", nome:"Gasometria arterial", grupo:"Laboratório", t:4, res:"pH 7,41 · pCO2 39 · pO2 94 · HCO3 24 · SatO2 97%"},
  {id:"urina", nome:"Urina tipo 1", grupo:"Laboratório", t:6, res:"Densidade 1.018 · sem leucocitúria, hematúria ou proteinúria"},
  {id:"bhcg", nome:"Beta-hCG", grupo:"Laboratório", t:6, res:"Beta-hCG: negativo"},
  {id:"tox", nome:"Triagem toxicológica", grupo:"Laboratório", t:8, res:"Negativa para as substâncias pesquisadas"},
  {id:"ecg", nome:"Eletrocardiograma (12 derivações)", grupo:"Gráficos e imagem", t:3, ecg:{fc:76}},
  {id:"ecg_d", nome:"ECG com derivações direitas (V3R/V4R) e posteriores", grupo:"Gráficos e imagem", t:3, res:"V3R, V4R: sem alteração de ST\nV7–V9: sem alteração de ST"},
  {id:"rx", nome:"Radiografia de tórax (PA e perfil)", grupo:"Gráficos e imagem", t:8, res:"Área cardíaca normal. Campos pulmonares sem alterações. Seios costofrênicos livres."},
  {id:"eco", nome:"Ecocardiograma transtorácico", grupo:"Gráficos e imagem", t:10, res:"Câmaras de dimensões normais. FEVE 63% (Simpson). Valvas sem alterações."},
  {id:"tc_cranio", nome:"Tomografia de crânio", grupo:"Gráficos e imagem", t:10, res:"Sem alterações. Ausência de lesões expansivas ou sangramento."},
  {id:"rm_cranio", nome:"Ressonância de crânio", grupo:"Gráficos e imagem", t:12, res:"Sem alterações."},
];
const EXAME = Object.fromEntries(EXAMES.map(e => [e.id, e]));

/* =========================================================================
   AUXILIARES DE CHECKLIST
   Cada item tem test(s) → {ok, ev}. Itens com ia:true são revisados pelo avaliador IA (texto livre).
   ========================================================================= */
const quote = (t, q) => `${fmt(t)} — “${q.length>90 ? q.slice(0,88)+"…" : q}”`;
const T = (...ids) => s => { const h = ids.map(id => s.topics[id]).filter(Boolean).sort((a,b)=>a.t-b.t)[0]; return h ? {ok:true, ev:quote(h.t, h.q)} : {ok:false}; };
const M = (...ids) => s => { const h = ids.map(id => s.man[id]).filter(v=>v!=null).sort((a,b)=>a-b)[0]; return h!=null ? {ok:true, ev:`${fmt(h)} — manobra realizada`} : {ok:false}; };
const X = (...ids) => s => { const h = ids.map(id => s.exams[id] && {id, t:s.exams[id].t}).filter(Boolean).sort((a,b)=>a.t-b.t)[0]; return h ? {ok:true, ev:`${fmt(h.t)} — solicitou ${examDef(h.id).nome}`} : {ok:false}; };
const O = (...ids) => s => { const h = ids.map(id => s.orders[id]!=null && {id, t:s.orders[id]}).filter(Boolean).sort((a,b)=>a.t-b.t)[0]; return h ? {ok:true, ev:`${fmt(h.t)} — ordem: ${ordName(h.id)}`} : {ok:false}; };
const NO = (...ids) => s => { const g = ids.filter(id => s.orders[id]!=null); return g.length ? {ok:false, ev:`Prescreveu: ${g.map(id=>ordName(id)).join(", ")}`} : {ok:true, ev:"Não prescrito"}; };
const C = flag => s => s.com[flag] ? {ok:true, ev:quote(s.com[flag].t, s.com[flag].q)} : {ok:false};
const H = re => s => { const txt = norm(s.hip+" \n "+s.dif); return re.test(txt) ? {ok:true, ev:`Hipótese: “${s.hip||s.dif}”`} : {ok:false}; };
const K = re => s => {
  if (re.test(norm(s.conduta))) return {ok:true, ev:"Registrado na conduta"};
  const u = s.transcript.find(m => m.who==="me" && re.test(norm(m.text)));
  return u ? {ok:true, ev:quote(u.t, u.text)} : {ok:false};
};
const ANY = (...fs) => s => { for (const f of fs){ const r = f(s); if (r.ok) return r; } return {ok:false}; };
const ECG_BY = sec => s => { const e = s.exams.ecg; if (!e) return {ok:false, ev:"ECG não solicitado"}; return e.t <= sec ? {ok:true, ev:`ECG solicitado em ${fmt(e.t)}`} : {ok:false, ev:`ECG só em ${fmt(e.t)} (meta: até ${fmt(sec)})`}; };
const NOT_X = (...ids) => s => { const g = ids.filter(id => s.exams[id]); return g.length ? {ok:false, ev:`Solicitou ${g.map(id=>EXAME[id].nome).join(", ")} sem indicação`} : {ok:true, ev:"Sem exames de imagem desnecessários"}; };

const COM_RE = {
  apresentou:/(meu nome (e|eh)|me chamo|sou (o|a) (dr|doutor|doutora|medic|residente|estudante|academic|intern)|sou (dr|doutor|doutora)\b)/,
  empatia:/(entendo|imagino|compreendo|sinto muito|lamento|deve ser (dificil|complicado|ruim|pesado|assustador)|estou aqui|vamos (cuidar|resolver|juntos|te ajudar)|fique tranquil|obrigad[oa] por (contar|confiar|compartilhar|falar)|faz sentido (voce|o senhor|a senhora) (estar|se sentir)|e normal (sentir|ficar))/,
  entendimento:/(alguma duvida|ficou (claro|alguma duvida)|entendeu|tem alguma pergunta|quer perguntar|faz sentido pra|consegui explicar|pode me (dizer|repetir) o que entendeu)/,
  explicou:/(o que (o senhor|a senhora|voce) tem|seu (coracao|exame|problema)|suspeit|diagnostico|vamos (precisar|fazer|tratar|levar|encaminh)|o tratamento|isso (acontece|e causado|explica))/,
  sigilo:/(sigilo|confidencial|fica entre (nos|a gente)|segredo|nao vou contar)/,
};

/* =========================================================================
   ORDENS DA SALA DE EMERGÊNCIA
   ========================================================================= */
const ORDENS = [
  {id:"mov", nome:"Monitorização + acesso venoso", g:"Suporte", kw:/(monitor|acesso|veia|mov\b|puncion|cateter venoso)/},
  {id:"o2", nome:"O2 por cateter nasal 2 L/min", g:"Suporte", kw:/(oxigeni|o2|cateter nasal|oxigenio)/},
  {id:"glic", nome:"Glicemia capilar", g:"Suporte", kw:/(dextro|hgt|glicemia capilar)/},
  {id:"aas", nome:"AAS 300 mg mastigado", g:"Antitrombóticos", kw:/(aas|aspirina|acido acetil)/},
  {id:"p2y12", nome:"Clopidogrel 600 mg (ou ticagrelor 180 mg)", g:"Antitrombóticos", kw:/(clopidogrel|ticagrelor|prasugrel|p2y12)/},
  {id:"anticoag", nome:"Heparina não fracionada EV (bolus)", g:"Antitrombóticos", kw:/(heparina|enoxaparina|clexane|anticoagul)/},
  {id:"nitrato", nome:"Isossorbida 5 mg sublingual", g:"Sintomáticos", kw:/(isossorbida|isordil|nitrato|nitroglicerina|tridil)/},
  {id:"morfina", nome:"Morfina 2 mg EV", g:"Sintomáticos", kw:/(morfina)/},
  {id:"bb", nome:"Metoprolol 5 mg EV", g:"Sintomáticos", kw:/(metoprolol|betabloq|beta-bloq|esmolol)/},
  {id:"sf", nome:"SF 0,9% 500 mL EV em bolus", g:"Suporte", kw:/(soro|sf\b|cristaloide|volume|ringer|expans)/},
  {id:"icp", nome:"Acionar hemodinâmica (angioplastia primária)", g:"Reperfusão", kw:/(hemodinamica|cateterismo|angioplastia|icp|cate\b)/},
  {id:"trombolise", nome:"Tenecteplase EV (trombólise)", g:"Reperfusão", kw:/(tenecteplase|alteplase|trombolit|tnk|estreptoquinase|fibrinolit)/},
];
const ORD_NAME = Object.fromEntries(ORDENS.map(o => [o.id, o.nome]));
