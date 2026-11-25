// Sala de Simulação · Motor dos casos dinâmicos (o paciente piora, melhora ou morre).
// Script comum (não é módulo): compartilha o escopo global com os outros arquivos da sala,
// carregados em ordem pelo sala/index.html.
"use strict";
/* =========================================================================
   CASOS DINÂMICOS
   O paciente tem uma gravidade g (0–100) que muda a cada segundo conforme a taxa
   do caso (pontos/min). As ordens alteram g e a taxa. Em g = 100 o paciente para;
   a RCP com o tratamento certo pode trazer de volta; sem isso, óbito.
   ========================================================================= */
const PCR_ORD = [
  {id:"rcp", nome:"Iniciar RCP (compressões 100–120/min, 5–6 cm)", g:"Parada cardiorrespiratória", kw:/(\brcp\b|compress|massagem cardiaca)/, rep:false},
  {id:"choque", nome:"Desfibrilar 200 J bifásico (choque NÃO sincronizado)", g:"Parada cardiorrespiratória", kw:/(desfibril|choque nao sincron|chocar|choque de 200|choque 200)/, rep:true},
  {id:"adr_pcr", nome:"Adrenalina 1 mg EV (protocolo de PCR)", g:"Parada cardiorrespiratória", kw:/((adrenalina|epinefrina)\s*1\s*mg|adrenalina da parada)/, rep:true},
  {id:"amio_pcr", nome:"Amiodarona 300 mg EV (FV/TV sem pulso)", g:"Parada cardiorrespiratória", kw:/(amiodarona 300)/, rep:false},
];
const MOV_ORD = {id:"mov", nome:"Monitorização + acesso venoso + O2 disponível", g:"Suporte", kw:/(monitor|acesso|veia|\bmov\b|puncion)/};
const ORD_VERB = /(faz|faca|fazer|administr|\bda\b|dar|\bde\b|instal|coloc|pega|pegue|aciona|acionar|liga|ligar|chama|chamar|prescrev|vamos|quero|pode|inicia|iniciar|corre|correr|solicito|peco|realiz|mastig|repete|repita|manda|aplica|aplique|punciona|drena|drene|cardiovert|choca|choque|desfibril|intub|eleva|eleve)/;
const lerp = (a, b, f) => a + (b - a) * f;
function dynVitals(stages, g){
  const st = stages; if (g <= st[0].g) return Object.assign({}, st[0]);
  for (let i = 1; i < st.length; i++){ if (g <= st[i].g){ const a = st[i-1], b = st[i], f = (g - a.g) / (b.g - a.g); const o = {}; for (const k of ["fc","pas","pad","sat","fr"]) o[k] = lerp(a[k], b[k], f); return o; } }
  return Object.assign({}, st[st.length-1]);
}
function dynOrdList(c){ return [MOV_ORD, ...c.dyn.ordens, ...PCR_ORD]; }
function ordName(id){ if (S?.c?.dyn){ const o = dynOrdList(S.c).find(x => x.id === id); if (o) return o.nome; } return ORD_NAME[id] || id; }
function ordList(){ return S?.c?.dyn ? dynOrdList(S.c) : ORDENS; }

function initDyn(c){
  const D = c.dyn;
  const st = {g: D.g0, f:{}, pcr:false, obito:false, estavel:false, estavelT:null, rosc:0, satBonus:0, ev:[], later:[], lastT:0, gMax:D.g0, marks:{}};
  (D.init || (()=>{}))(st);
  return st;
}
function dynApi(){
  const st = S.dyn, t = now();
  return {
    t, st,
    nurse(msg, kind){ if (S.collect){ S.collect.push(msg); return; } const m = {who:"enfermeira", text:msg, t:now()}; S.transcript.push(m); showCaption(null, msg, "enfermeira", null, "Enf. Carla"); speak(msg, "enfermeira"); if (kind) toast(msg, kind); },
    event(txt, kind){ st.ev.push({t:now(), txt, kind:kind||""}); },
    crit(txt){ (st.crit = st.crit || []).includes(txt) || st.crit.push(txt); st.ev.push({t:now(), txt:"Conduta inadequada: "+txt, kind:"crit"}); },
    later(sec, fn){ st.later.push({at: now() + sec, fn}); },
    monitor(){ S.mon = true; st.f.acesso = true; },
  };
}
function dynConsc(){
  const st = S.dyn; if (!st) return "alerta";
  if (st.pcr || st.obito) return "inconsciente";
  const g = S.c.dyn.gEff ? S.c.dyn.gEff(st, now()) : st.g;
  return g >= 82 ? "inconsciente" : g >= 58 ? "sonolento" : "alerta";
}
function dynEstadoTxt(){
  const st = S.dyn, v = S.vit, c = dynConsc();
  if (st.obito) return "o paciente morreu";
  if (st.pcr) return "o paciente está em parada cardiorrespiratória, sem pulso";
  return `consciência: ${c}; FC ${Math.round(v.fc)} bpm, PA ${Math.round(v.pas)}x${Math.round(v.pad)} mmHg, SpO2 ${Math.round(v.sat)}%, FR ${Math.round(v.fr)} irpm; ${st.g < 30 ? "melhorando" : st.g < 60 ? "instável" : "muito grave, piorando"}`;
}
function dynOrder(id, fromChat){
  if (!S || S.ended || !S.dyn || S.dyn.obito) return;
  const c = S.c, D = c.dyn, st = S.dyn, api = dynApi(), t = api.t;
  const o = dynOrdList(c).find(x => x.id === id); if (!o) return;
  if (S.orders[id] != null && !o.rep && id !== "rcp"){ if (!fromChat) toast(`${o.nome}: já feito.`); return; }
  if (o.precisaAcesso && !st.f.acesso){ api.nurse("Doutor(a), ainda não temos acesso venoso. Quer que eu puncione e monitorize primeiro?"); return; }
  if (S.orders[id] == null) S.orders[id] = t;
  st.cnt = st.cnt || {}; st.cnt[id] = (st.cnt[id] || 0) + 1;
  st.ev.push({t, txt: o.nome, kind:"ordem"});
  // ordens de PCR
  if (id === "mov"){ api.monitor(); api.nurse("Monitorizado, acesso venoso calibroso no braço e oxigênio à disposição."); }
  else if (id === "rcp"){
    if (!st.pcr){ api.crit("RCP em paciente com pulso"); api.nurse("Doutor(a), ele tem pulso! Não vou comprimir."); S.orders.rcp = null; delete S.orders.rcp; }
    else if (!st.rcp){ st.rcp = true; st.rcpT = t; api.nurse("Iniciando compressões! Trocando a cada 2 minutos."); }
  }
  else if (id === "choque"){
    if (st.pcr){ if (st.ritmo === "fv" || st.ritmo === "tv"){ st.chocado = true; api.nurse("Afastem! Choque de 200 J dado. Voltando às compressões."); } else { api.crit("Desfibrilação em ritmo não chocável"); api.nurse("Doutor(a), o ritmo não é chocável… choque dado mesmo assim. Voltando às compressões."); } }
    else if (D.onChoqueComPulso) D.onChoqueComPulso(st, api);
    else { api.crit("Choque não sincronizado em paciente com pulso"); st.g = Math.min(100, st.g + 20); api.nurse("Choque dado… doutor, ele piorou!"); }
  }
  else if (id === "adr_pcr"){
    if (!st.pcr){ if (D.onAdrEV) D.onAdrEV(st, api); else { api.crit("Adrenalina 1 mg EV em bolus em paciente com pulso"); st.g = Math.min(100, st.g + 20); api.nurse("Adrenalina feita… doutor, taquicardia importante e a pressão disparou, agora está caindo!"); } }
    else { st.adrPCR = (st.adrPCR || 0) + 1; api.nurse("Adrenalina 1 mg EV feita. Próxima dose em 3 a 5 minutos."); }
  }
  else if (id === "amio_pcr"){ if (st.pcr) api.nurse("Amiodarona 300 mg em bolus feita."); else api.nurse("Doutor(a), ele tem pulso. A dose de 300 mg em bolus é da parada… feita mesmo assim."); }
  else {
    const msg = o.run ? o.run(st, api) : null;
    if (msg) api.nurse(msg);
  }
  if (S.drawer === "ordens" || S.drawer === "conversa") renderDrawer();
}
function enterPCR(ritmo){
  const st = S.dyn, t = now();
  st.pcr = true; st.pcrT = t; st.rcp = false; st.chocado = false; st.adrPCR = 0; st.ritmo = ritmo || S.c.dyn.ritmoPCR || "aesp";
  st.ev.push({t, txt:`Parada cardiorrespiratória (${st.ritmo === "fv" ? "fibrilação ventricular" : st.ritmo === "tv" ? "TV sem pulso" : "atividade elétrica sem pulso"})`, kind:"crit"});
  const m = `Doutor(a)! Ele não responde e está sem pulso! ${S.mon ? "No monitor: " + (st.ritmo === "fv" ? "fibrilação ventricular." : "ritmo organizado, mas sem pulso.") : "Ainda não está monitorizado!"}`;
  S.transcript.push({who:"enfermeira", text:m, t}); showCaption(null, m, "enfermeira", null, "Enf. Carla"); speak(m, "enfermeira");
  toast("Parada cardiorrespiratória.", "crit"); alarmTone();
}
function dynTick(){
  const c = S.c, D = c.dyn, st = S.dyn; if (!st || st.obito) return;
  const t = now(), dt = Math.max(0, t - (st.lastT || t)); st.lastT = t;
  // ações agendadas
  for (const L of st.later.splice(0)) { if (t >= L.at) L.fn(dynApi()); else st.later.push(L); }
  if (!st.pcr){
    const rate = D.rate(st, t);
    st.g = Math.max(0, Math.min(100, st.g + rate * dt / 60));
    st.gMax = Math.max(st.gMax, st.g);
    // falas automáticas da equipe ao cruzar limiares
    (D.marcos || []).forEach((m, i) => { if (!st.marks[i] && st.g >= m.g){ st.marks[i] = 1; const a = dynApi(); a.nurse(m.msg, "warn"); a.event(m.msg, "warn"); } });
    if (st.g >= 100) enterPCR(D.ritmoPCR);
    // estabilização
    if (!st.estavel && st.g <= 25 && rate <= 0){ st.estavelT = st.estavelT ?? t; if (t - st.estavelT >= 20){ st.estavel = true; st.ev.push({t, txt:"Paciente estabilizado", kind:"ok"}); toast("Paciente estabilizado.", ""); } }
    else if (st.g > 25 || rate > 0) st.estavelT = null;
  } else {
    const shockable = st.ritmo === "fv" || st.ritmo === "tv";
    const ok = st.rcp && (shockable ? st.chocado : st.adrPCR > 0) && (D.reversivel ? D.reversivel(st) : true) && t - st.rcpT >= 12;
    if (ok){
      st.pcr = false; st.rosc++; st.g = 78; st.ritmo = null;
      st.ev.push({t, txt:"Retorno da circulação espontânea (RCE)", kind:"ok"});
      const m = "Voltou pulso! Pulso carotídeo palpável, a pressão está voltando.";
      S.transcript.push({who:"enfermeira", text:m, t}); showCaption(null, m, "enfermeira", null, "Enf. Carla"); speak(m, "enfermeira"); toast("Retorno da circulação espontânea.");
    } else if ((!st.rcp && t - st.pcrT > 60) || t - st.pcrT > 150){
      dynObito(!st.rcp ? "Sem RCP por mais de 1 minuto de parada" : "Parada sem retorno da circulação após 2,5 minutos (causa não revertida)");
    }
  }
  // sinais vitais
  if (st.obito) return;
  if (st.pcr){ S.vit = Object.assign(S.vit, {fc:null, pas:null, pad:null, sat:null, fr:0, ritmo: st.ritmo, fcDraw: st.ritmo === "fv" ? 300 : st.ritmo === "tv" ? 200 : 40}); }
  else {
    const gE = D.gEff ? D.gEff(st, t) : st.g;
    const v = dynVitals(D.estagios, gE);
    v.sat = Math.min(100, v.sat + (st.satBonus || 0));
    if (D.ajusta) D.ajusta(v, st, t);
    v.ritmo = D.ritmo ? D.ritmo(st, t) : "sinus"; v.fcDraw = v.fc;
    S.vit = Object.assign(S.vit || {}, v);
  }
}
function dynObito(motivo){
  const st = S.dyn, t = now();
  st.obito = true; st.obitoT = t; st.motivo = motivo; st.pcr = false;
  S.vit = Object.assign(S.vit, {fc:null, pas:null, pad:null, sat:null, fr:0, ritmo:"assist", fcDraw:40});
  st.ev.push({t, txt:"Óbito — " + motivo, kind:"crit"});
  const m = `Óbito constatado às ${fmt(t)}.`;
  S.transcript.push({who:"enfermeira", text:m, t}); showCaption(null, m, "enfermeira", null, "Enf. Carla");
  const stg = $("#stage");
  if (stg){ const d = document.createElement("div"); d.className = "obito"; d.innerHTML = `<b>ÓBITO</b><span class="mono">${fmt(t)}</span><small>${esc(motivo)}</small>`; stg.appendChild(d); }
  tone(880, 3.5, .05, 0, "sine");
  const ref = S; setTimeout(() => { if (S === ref) endStation("obito"); }, 4500);
}
