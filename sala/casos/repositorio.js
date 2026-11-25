// Sala de Simulação · Estações do site (casos-repo.json) convertidas para a sala.
// Script comum (não é módulo): compartilha o escopo global com os outros arquivos da sala,
// carregados em ordem pelo sala/index.html.
"use strict";
/* =========================================================================
   ESTAÇÕES DO REPOSITÓRIO (data/stations.json → formato da sala)
   Gerado por sala/build-sala.mjs em casos-repo.json. O checklist vem do gabarito (instC);
   o avaliador IA revisa todos os itens, e o reconhecimento local por palavras serve de reserva.
   ========================================================================= */
const STOP = new Set("paciente pacientes sobre quando outros outras sinais exame exames avaliar avaliacao presenca ausencia tempo historia investigar pergunta perguntar questionar caracterizar quanto qualquer durante antes depois desde entre sempre ainda tambem muito pouco forma local devem possivel principal relacao associado associada candidato solicitar realizar orientar explicar identificar verificar descrever pesquisar incluindo inclusive principalmente especialmente".split(" "));
const stems = t => [...new Set(norm(t).split(/[^a-z0-9]+/).filter(w => w.length>=5 && !STOP.has(w)).map(w => w.slice(0,5)))];
const hasStems = (item, text, min=1) => { const a = stems(item); if (!a.length) return false; const b = new Set(stems(text)); return a.filter(x => b.has(x)).length >= Math.min(min, a.length); };
const SAID = (item, min=1) => s => { for (const m of s.transcript){ if (m.who==="me" && hasStems(item, m.text, min)) return {ok:true, ev:quote(m.t, m.text)}; } return {ok:false}; };
const DID = item => s => { for (const g of s.c.exame) for (const it of g.itens){ if (s.man[it.id]!=null && hasStems(item, it.nome)) return {ok:true, ev:`${fmt(s.man[it.id])} — ${it.nome}`}; } return {ok:false}; };
const ASKED_EX = item => s => { for (const id in s.exams){ const n = examDef(id).nome || ""; if (hasStems(item, n)) return {ok:true, ev:`${fmt(s.exams[id].t)} — solicitou ${n}`}; } return {ok:false}; };
const WROTE = (item, min=2) => s => hasStems(item, s.conduta+" \n "+s.notas, min) ? {ok:true, ev:"Registrado na conduta/anotações"} : SAID(item, min)(s);
const DIAG = topic => { const w = String(topic||"").split("-").filter(x => x.length>=4 && !["para","tipo","forma","campo"].includes(x)).map(x => x.slice(0,5)); const need = w.length>=3 ? 2 : 1;
  return s => { const b = new Set(stems(s.hip+" "+s.dif)); return w.filter(x => b.has(x)).length >= need ? {ok:true, ev:`Hipótese: “${s.hip||s.dif}”`} : {ok:false}; }; };
const PHOTO = s => { const txt = norm(s.transcript.filter(m=>m.who==="me").map(m=>m.text).join(" ")+" "+s.notas+" "+s.conduta);
  const hits = new Set(txt.match(/(papul|macul|mancha|placa|nodul|vesic|pustul|crost|escam|eritem|hipercr|hipocr|ulcer|topogr|distrib|descam|lique|atrof|cicatr|tuberc|bolha|acrom|enduri|telang|perol|bord|simetr|assimetr)/g) || []);
  return hits.size>=3 ? {ok:true, ev:`${hits.size} termos semiológicos usados`} : {ok:false, ev: hits.size ? `Só ${hits.size} termo(s) semiológico(s)` : undefined}; };
const comTest = x => { const n = norm(x);
  if (/apresent/.test(n)) return C("apresentou");
  if (/(sigil|confid)/.test(n)) return C("sigilo");
  if (/(duvid|entend|compreens)/.test(n)) return C("entendimento");
  if (/(empat|acolh|preocupa|medo|ansied|tranquil|valid|escuta)/.test(n)) return ANY(C("empatia"), SAID(x));
  if (/(diagnost|explic|comunic|inform|orient)/.test(n)) return ANY(C("explicou"), SAID(x));
  return SAID(x); };
const splitP = t => String(t||"").split(/\s+\|\s+/).map(x => x.trim()).filter(Boolean);
const titleCase = t => t.toLowerCase().replace(/(^|\s|\()([a-zà-ú]+)/g, (m,a,b) => a + (/^(e|de|da|do|das|dos|em|com|a|o)$/.test(b) && a ? b : b.charAt(0).toUpperCase()+b.slice(1)));
const cleanAchado = t => String(t||"").replace(/\s*[—-]\s*(informar|fornecid|entregar|so |só |somente)[^|]*$/i, "").trim();

const AREA_FIX = {"emergencias neurologicas":"Emergências Neurológicas", "obstetricia":"Obstetrícia", "cirurgia pediatrica":"Cirurgia Pediátrica", "pediatria geral":"Pediatria Geral", "medicina intensiva":"Medicina Intensiva", "medicina legal":"Medicina Legal"};
const idadeStr = p => p.idadeTxt || (Math.round(p.idade) + " anos");
const areaNome = t => { const n = norm(t).trim(); return AREA_FIX[n] || (n.charAt(0).toUpperCase() + n.slice(1)); };
function fromStation(st){
  const A = st.instA||{}, B = st.instB||{}, K2 = st.instC||{};
  const pat = String(A.patient||"");
  const nome = (pat.split(",")[0].trim() || "Paciente").replace(/^(m[ãa]e|pai|respons[áa]vel|av[óô])\s+d[eoa]s?\s+/i, "");
  const mA = pat.match(/(\d+)\s*anos?\b/i), mM = pat.match(/(\d+)\s*m[eê]s(es)?\b/i), mD = pat.match(/(\d+)\s*dias?\b/i), mH = pat.match(/(\d+)\s*horas?\b/i), rn = /^\s*RN\b|rec[ée]m.nascid/i.test(pat);
  const idade = mA ? +mA[1] + (mM ? +mM[1]/12 : 0) : mM ? +mM[1]/12 : mD ? +mD[1]/365 : (mH || rn) ? 0 : 40;
  const idadeTxt = mA ? (+mA[1] + (+mA[1] === 1 ? " ano" : " anos") + (mM ? " e " + mM[1] + (+mM[1] === 1 ? " mês" : " meses") : "")) : mM ? mM[1] + (+mM[1] === 1 ? " mês" : " meses") : mD ? mD[1] + " dias de vida" : mH ? mH[1] + " horas de vida" : rn ? "recém-nascido" : "";
  const fem = /feminin/i.test(pat) || /\bsra\b|\bdona\b/i.test(nome);
  const iniciais = /^([A-ZÀ-Ú]\.){2,}/.test(nome.replace(/\s/g,""));
  const primeiro = iniciais ? "" : nome.split(/\s+/)[0];
  const trat = iniciais ? (idade>=55 ? (fem?"a senhora":"o senhor") : "Paciente") : (idade>=60 ? (fem?"Dona ":"Seu ")+primeiro : primeiro);
  const scriptTxt = [...(Array.isArray(B.script) ? B.script : []), ...(Array.isArray(K2.script) ? K2.script : [])].map(x => x.trigger).join(" ");
  const equipe = /intensiva|emergenc/.test(norm(st.tema)) || (/(uti|trauma|pronto|emergencia|ps —|ps -)/.test(norm(st.sub)) && /(enfermag|samu|famil|equipe|acompanhante|colega)/.test(norm(scriptTxt)));
  const ps = /(pronto|ps —|ps -|\bupa\b|emergencia|\buti\b|trauma)/.test(norm(st.sub));
  const crianca = idade < 14;
  const bebe = idade < 2;
  const img = bebe ? null : (equipe || ps) ? "img/emergencia.jpg" : crianca ? (fem ? "img/menina.jpg" : "img/menino.jpg") : fem ? (idade>=55 ? "img/lucia.jpg" : "img/camila.jpg") : (idade>=55 ? "img/joaquim.jpg" : "img/rafael.jpg");
  const vv = B.vitals || {}; const vget = re => { for (const k in vv) if (re.test(k)) return String(vv[k]); return ""; };
  const num = (t, re) => { const m = String(t).match(re); return m ? +m[1] : null; };
  const pa = vget(/^pa\b|press/i).match(/(\d{2,3})\s*[x×/]\s*(\d{2,3})/);
  const vitIni = {fc: num(vget(/^fc|frequ[eê]ncia card/i), /(\d{2,3})/), pas: pa ? +pa[1] : null, pad: pa ? +pa[2] : null, sat: num(vget(/sp ?o|sat/i), /(\d{2,3})/), fr: num(vget(/^fr|frequ[eê]ncia resp/i), /(\d{1,2})/)};
  const monitor = (equipe || ps) && vitIni.fc && vitIni.pas;
  const roleOf = (tr, sp) => { const n = norm(tr), f = norm(sp).slice(0, 40); if (/^\(?\s*paciente/.test(f) || /^paciente/.test(n)) return "Paciente"; return /\bsamu\b/.test(n) ? "SAMU" : /\b(famil\w*|mae|pai|filh[oa]s?|espos[oa]|acompanhante)\b/.test(n) ? "Família" : /\b(colega|quem trouxe)\b/.test(n) ? "Acompanhante" : /\b(enfermag\w*|equipe|chamado|relato|informacao)\b/.test(n) ? "Enfermagem" : "Paciente"; };
  const prof = (pat.split(",").slice(1).find(x => !/anos|sexo|masculin|feminin|fototipo/i.test(x)) || "").trim();
  // roteiro
  const scriptSrc = (Array.isArray(B.script) && B.script.length) ? B.script : (Array.isArray(K2.script) ? K2.script : []);
  if (!scriptSrc.length && A.complaint) scriptSrc.push({trigger:"Queixa principal", speech:A.complaint});
  const topicos = scriptSrc.map((sc, i) => {
    const tr = String(sc.trigger||"");
    const ativo = /pergunta ativa|pergunta do paciente|paciente pergunta/i.test(tr);
    const qp = /queixa principal|abertura|in[ií]cio/i.test(tr);
    const tema = tr.replace(/^(sobre|quando perguntad[oa] sobre|se perguntad[oa] sobre)\s+/i, "");
    const st2 = stems(tema);
    const kw = ativo ? /$^/ : qp ? /(o que (te |o |a )?(traz|trouxe)|motivo|queixa|como posso|em que posso|o que (o senhor |a senhora |voce )?(sente|esta sentindo)|qual o problema)/ : (st2.length ? new RegExp("("+st2.join("|")+")") : /$^/);
    return {id:"s"+i, g: ativo ? "Perguntas do paciente" : qp ? "Queixa principal" : "Anamnese", q: qp ? "O que traz você aqui hoje?" : "Pergunte "+tema.charAt(0).toLowerCase()+tema.slice(1), kw, r:String(sc.speech||""), ativo, trig:tr, quem: equipe ? roleOf(tr, sc.speech) : crianca ? ((bebe || /\b(mae|pai|responsavel|avo)\b/.test(norm(tr))) ? "Mãe" : "Criança") : ""};
  });
  // exame físico
  const vit = B.vitals ? Object.entries(B.vitals).map(([k,v]) => `${k} ${v}`).join(" · ") : "";
  const geral = [{id:"geral", nome:"Inspeção geral", achado: B.physicalGeneral || "Sem alterações."}];
  if (vit) geral.push({id:"sv", nome:"Sinais vitais e antropometria", achado: vit});
  const seg = []; let fotoUsada = false;
  (Array.isArray(B.physicalSeg) ? B.physicalSeg : splitP(B.physicalSeg)).forEach((x, i) => {
    const m = x.match(/^([^:]{2,90}):\s*([\s\S]*)$/);
    const nm = m ? titleCase(m[1].trim()) : "Exame segmentar "+(i+1);
    const ach = m ? m[2] : x;
    if (B.photo && !fotoUsada && /impresso fotogr|ver (a )?foto/i.test(ach)){ fotoUsada = true; seg.push({id:"seg"+i, nome: nm+" — impresso fotográfico", foto:B.photo}); }
    else seg.push({id:"seg"+i, nome:nm, achado:cleanAchado(ach)});
  });
  if (B.photo && !fotoUsada) seg.unshift({id:"foto", nome:"Inspeção da lesão — impresso fotográfico", foto:B.photo});
  if (B.image && typeof B.image === "object" && B.image.report) seg.push({id:"imgobj", nome: String(B.image.title||"Achado adicional").replace(/\s*\((entregar|somente|só)[^)]*\)/i, ""), achado: B.image.report});
  // exames do caso
  const examesCaso = (B.labs||[]).map((l, i) => ({id:"cx"+i, nome:l.test, res:`${l.val}${l.ref ? "\nReferência: "+l.ref : ""}`, alt:!!l.alt, t:6, grupo:"Exames deste caso"}));
  (K2.expectedExams||[]).forEach((e, i) => {
    if (examesCaso.some(x => hasStems(e.exam, x.nome))) return;
    examesCaso.push({id:"cxe"+i, nome:e.exam, res: e.expected || "Resultado compatível com o quadro.", t:8, grupo:"Exames deste caso"});
  });
  if (typeof B.image === "string" && B.image.trim()){
    splitP(B.image).flatMap(x => x.split(/(?<=\.)\s+(?=[A-ZÀ-Ú][^.:|]{2,70}:\s)/)).forEach((part, i) => {
      const mm = part.match(/^([^:]{3,80}):\s*([\s\S]+)$/);
      const nm = mm ? mm[1].replace(/\s*\([^)]*\)/g,"").trim() : "Laudo complementar do caso";
      const dup = examesCaso.find(x => norm(x.nome) === norm(nm));
      if (dup) { dup.res = (mm ? mm[2] : part) + "\n\n" + dup.res; return; }
      examesCaso.push({id:"cximg"+i, nome:nm, res: mm ? mm[2] : part, t:8, grupo:"Exames deste caso"});
    });
  }
  // resultados do caso substituem os valores padrão do catálogo
  const exames = {};
  const CAT = [[/(\becg\b|eletrocardio)/,"ecg"],[/(radiograf|\brx\b|raio.?x)/,"rx"],[/ecocardio/,"eco"],[/troponin/,"troponina"],[/(\bbnp\b|natriur)/,"bnp"],[/d.?dimero/,"ddimero"],[/gasometr/,"gaso"],[/hemograma/,"hemograma"],[/(tomografia (computadorizada )?de cranio|\btc de cranio)/,"tc_cranio"],[/coagulograma/,"coag"],[/(\btsh\b)/,"tsh"],[/(hemoglobina glicada|hba1c)/,"hba1c"],[/(perfil lipidico|lipidograma|colesterol total)/,"lipidograma"]];
  for (let k = examesCaso.length-1; k >= 0; k--){
    const e = examesCaso[k], n = norm(e.nome);
    if (/^ver (a )?descri/.test(norm(e.res)) && examesCaso.some((x, j) => j !== k && CAT.some(([re]) => re.test(n) && re.test(norm(x.nome))))) { examesCaso.splice(k, 1); continue; }
    if (/derivacoes direitas|v4r/.test(n)) continue;
    const hit = CAT.find(([re]) => re.test(n));
    if (!hit) continue;
    if (/^ver (a )?descri/.test(norm(e.res))) { examesCaso.splice(k, 1); continue; }
    if (exames[hit[1]]) exames[hit[1]].res = e.res + "\n\n" + exames[hit[1]].res;
    else exames[hit[1]] = {res:e.res, ecg:null, laudo:null, alt:e.alt};
    examesCaso.splice(k, 1);
  }
  if (exames.ecg && !/derivacoes direitas/.test(norm(exames.ecg.res))) { const txt = exames.ecg.res; exames.ecg = {res:txt, ecg: ecgFromText(txt), desc: txt}; }
  // checklist a partir do gabarito (instC.expected*), do PEP antigo (instC.pep) ou do checklist da aba D
  const ck = [];
  const temExpected = K2.expectedAnamnesis || K2.expectedConduct || K2.expectedPhysical;
  const secoes = !temExpected ? (Array.isArray(K2.pep) ? K2.pep : ((st.instD?.sections||[]).some(x => Array.isArray(x.items) && x.items.some(i => i && i.item)) ? st.instD.sections : [])) : [];
  secoes.forEach(sec => {
    const h = String(sec.section || sec.h || ""), hn = norm(h);
    const d = /comunic|relacao/.test(hn) ? "Comunicação" : /anamnese|historia/.test(hn) ? "Anamnese" : /exame fisico|exame/.test(hn) && !/complementar|investig/.test(hn) ? "Exame físico" : /conduta|tratamento|orienta|manejo|terapeut|seguimento/.test(hn) ? "Conduta" : "Raciocínio";
    (sec.items||[]).forEach(it => { const x = String(it.item||"").trim(); if (!x) return; const w = +it.score || .5;
      const test = d === "Comunicação" ? comTest(x) : d === "Anamnese" ? ANY(SAID(x), s => { for (const tp of s.c.topicos){ const hh = s.topics[tp.id]; if (hh && !tp.ativo && hasStems(x, tp.q+" "+tp.r, 2)) return {ok:true, ev:quote(hh.t, hh.q)}; } return {ok:false}; }) : d === "Exame físico" ? ANY(DID(x), SAID(x)) : d === "Conduta" ? WROTE(x, 2) : ANY(ASKED_EX(x), WROTE(x, 2), s => hasStems(x, s.hip+" "+s.dif, 2) ? {ok:true, ev:"Hipótese/diferenciais"} : {ok:false});
      ck.push({d, l:x, w, ia:true, test}); });
  });
  if (secoes.length && K2.diagnosis && !ck.some(x => /hipotese|diagnost/.test(norm(x.l)))) ck.push({d:"Raciocínio", l:"Hipótese diagnóstica: "+K2.diagnosis, w:2, ia:true, test:DIAG(st.topic)});
  splitP(K2.expectedCommunication).forEach(x => ck.push({d:"Comunicação", l:x, w:.5, ia:true, test:comTest(x)}));
  const TOPIC = x => s => { for (const tp of s.c.topicos){ const h = s.topics[tp.id]; if (h && !tp.ativo && hasStems(x, tp.q+" "+tp.r, 2)) return {ok:true, ev:quote(h.t, h.q)}; } return {ok:false}; };
  splitP(K2.expectedAnamnesis).forEach(x => ck.push({d:"Anamnese", l:x, w:1, ia:true, test:ANY(SAID(x), TOPIC(x))}));
  splitP(K2.expectedPhysical).forEach(x => ck.push({d:"Exame físico", l:x, w:1, ia:true, test:ANY(DID(x), SAID(x))}));
  if (K2.photoDescription) ck.push({d:"Exame físico", l:"Fotodescrição das lesões com terminologia dermatológica formal (falada ou nas anotações)", w:1.5, ia:true, test:PHOTO});
  if (K2.diagnosis && !secoes.length) ck.push({d:"Raciocínio", l:"Hipótese diagnóstica: "+K2.diagnosis, w:2, ia:true, test:DIAG(st.topic)});
  if ((K2.differentials||[]).length){ const nomes = K2.differentials.map(d => String(d).split(/\s+—\s+/)[0]); ck.push({d:"Raciocínio", l:"Diferenciais pertinentes: "+nomes.join("; "), w:1, ia:true, test: s => { const ok = nomes.find(n => hasStems(n, s.dif+" "+s.hip)); return ok ? {ok:true, ev:`Citou: ${ok}`} : {ok:false}; }}); }
  (K2.expectedExams||[]).forEach(e => ck.push({d:"Raciocínio", l:"Solicita "+e.exam+(e.justify ? " — "+e.justify : ""), w:.5, ia:true, test:ANY(ASKED_EX(e.exam), WROTE(e.exam,1))}));
  splitP(K2.expectedConduct).flatMap(x => x.length>200 ? x.split(/;\s+/) : [x]).map(x => x.trim()).filter(x => x.length>3).forEach(x => ck.push({d:"Conduta", l:x, w:1, ia:true, test:WROTE(x, 2)}));
  const ativos = topicos.filter(t => t.ativo).map(t => t.r);
  const abertura = equipe && topicos[0] && /(informa|relato|chamado|enfermag|samu|famil|quem trouxe|equipe)/.test(norm(topicos[0].trig)) ? topicos[0] : null;
  return {
    id:"st"+st.id, ativo:true, repo:true, equipe, crianca, monitor: !!monitor, vitIni, abertura, img, focus: (equipe || ps) ? "55% 45%" : "72% 40%", voz: fem ? (idade>=55 ? "rounded" : "airy") : "buttery",
    area: areaNome(st.tema), nivel: st.level, local: st.sub || "Consultório", tempo:600, titulo: st.title,
    pac:{nome, primeiro: norm(primeiro), trat, idade, idadeTxt, sexo: fem ? "Feminino" : "Masculino", prof: prof || "—"},
    enunciado: [A.scenario, A.patient ? "Paciente: "+A.patient : "", A.complaint ? "Queixa: "+A.complaint : ""].filter(Boolean).join(" "),
    tarefas: A.tasks || [],
    persona: [B.patientProfile, B.actorBehavior ? "COMPORTAMENTO: "+B.actorBehavior : "", B.hiddenInfo ? "INFORMAÇÕES OCULTAS (revele cada uma só na condição descrita): "+B.hiddenInfo : "", B.note ? "ORIENTAÇÕES DO APLICADOR (achados de exame e impressos são entregues pelo sistema, não por você; siga as restrições sobre o que revelar): "+B.note : "", ativos.length ? "PERGUNTAS QUE VOCÊ FAZ POR INICIATIVA PRÓPRIA quando o aluno começar a explicar o diagnóstico ou a conduta: "+ativos.join(" / ") : ""].filter(Boolean).join("\n"),
    topicos, exame:[{g:"Geral", itens:geral}, {g:"Exame segmentar", itens:seg}].filter(g => g.itens.length),
    exames, examesCaso, checklist: ck, criticos: [], criticosTexto: K2.criticalErrors || [],
    gabarito:{diag:K2.diagnosis, foto:K2.photoDescription, difs:K2.differentials, conduta:K2.expectedConduct, exames:K2.expectedExams},
  };
}
async function loadRepoCases(){
  try{
    const r = await fetch("casos-repo.json"); if (!r.ok) return;
    const arr = await r.json(); const extra = [];
    const titulos = new Set(CASOS.map(c => norm(c.titulo)));
    for (const st of arr){ if (titulos.has(norm(st.title))) continue; try{ extra.push(fromStation(st)); }catch(e){} }
    const i = CASOS.findIndex(c => !c.ativo);
    CASOS.splice(i<0 ? CASOS.length : i, 0, ...extra);
    if (!S && $(".lobby")) renderLobby();
  }catch(e){}
}
