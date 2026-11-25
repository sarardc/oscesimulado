// Sala de Simulação · Conversa com o paciente e a enfermeira.
// Script comum (não é módulo): compartilha o escopo global com os outros arquivos da sala,
// carregados em ordem pelo sala/index.html.
"use strict";
/* =========================================================================
   CONVERSA: paciente / enfermeira (IA com fallback local)
   ========================================================================= */
async function say(text){
  if (!S || S.ended) return;
  if (S.busy){ toast("Aguarde a resposta antes de falar de novo."); return; }
  const c = S.c, t = now(), to = S.talkTo;
  S.transcript.push({who:"me", to, text, t});
  detectCom(text, t, to);
  showCaption(text, "…", to);
  S.busy = true; { const sb = $("#sendBtn"); if (sb) sb.disabled = true; }
  let reply = null;
  if (S.dyn && to !== "enfermeira" && dynConsc() === "inconsciente") reply = {fala:"(Não responde.)", emocao:"inconsciente"};
  else try{
    if (CAP.sample && !CAP.aiOff) reply = to==="enfermeira" ? await aiNurse(text) : await aiPatient(text);
  }catch(e){
    if (e?.code === "not_granted"){ CAP.aiOff = true; refreshCapsUI(); toast("IA não autorizada: usando o roteiro local do paciente.", "warn"); }
    if (e?.code === "limit"){ CAP.aiOff = true; refreshCapsUI(); toast("A IA atingiu o limite de uso por agora: o paciente segue pelo roteiro local por 1 minuto.", "warn"); setTimeout(() => { CAP.aiOff = false; refreshCapsUI(); }, 60000); }
    reply = null;
  }
  if (!reply) reply = to==="enfermeira" ? localNurse(text) : localPatient(text);
  // marca tópicos: IA + palavras-chave locais
  const ids = new Set(reply.topicos || []);
  if (to==="paciente") for (const tp of c.topicos) if (tp.kw.test(norm(text))) ids.add(tp.id);
  for (const id of ids) if (!S.topics[id] && c.topicos.some(x=>x.id===id)) S.topics[id] = {t, q:text};
  if (reply.com) for (const k in reply.com) if (reply.com[k] && !S.com[k]) S.com[k] = {t, q:text};
  if (to==="enfermeira"){
    const ords = new Set(reply.ordens || []);
    for (const o of ordList()) if (o.kw.test(norm(text)) && ORD_VERB.test(norm(text))) ords.add(o.id);
    if (S.dyn) S.collect = [];
    for (const id of ords) giveOrder(id, true);
    if (S.dyn){ if (S.collect.length) reply.fala = S.collect.join(" "); S.collect = null; }
    if (/(ecg|eletro)/.test(norm(text)) && /(faz|faca|fazer|realiz|solicit|quero|pode|pega)/.test(norm(text))) requestExam("ecg");
    if (/(sinais vitais|pressao|frequencia|saturacao|como (ele )?esta)/.test(norm(text))) S.vitalsAsked = true;
  }
  let f = reply.fala || "…", label = reply.quem || "";
  const lm = f.match(/^\s*\[([^\]]{2,30})\]\s*/); if (lm){ label = lm[1]; f = f.slice(lm[0].length); }
  if (!label && c.crianca && to !== "enfermeira") label = "Mãe";
  S.transcript.push({who:to, label, text:f, t:now(), emo:reply.emocao});
  showCaption(text, f, to, reply.emocao, label);
  S.busy = false; const sb = $("#sendBtn"); if (sb) sb.disabled = false;
  if (S.drawer==="conversa") renderDrawer();
  speak(f, to);
}
function speak(text, who){
  if (!CAP.tts || !prefs.voz) return;
  const voice = who==="enfermeira" ? "airy" : (S?.c.voz || "buttery");
  CAP.tts.speak(text, {voice, language:"pt-BR"}).catch(()=>{});
}
function detectCom(text, t, to){
  const n = norm(text), c = S.c;
  const mark = k => { if (!S.com[k]) S.com[k] = {t, q:text}; };
  if (to!=="enfermeira" || !c.emergencia){
    for (const k in COM_RE) if (COM_RE[k].test(n)) mark(k);
    const fn = norm(c.pac.trat), pn = c.pac.primeiro;
    if ((pn && n.includes(pn)) || (fn.length>4 && !/^(o senhor|a senhora|paciente)$/.test(fn) && n.includes(fn))) mark("nome");
  }
}
function history(max=18){
  return S.transcript.slice(-max).map(m => `${m.who==="me" ? (m.to==="enfermeira"?"Médico(a) → enfermeira":"Médico(a)") : m.who==="enfermeira" ? "Enfermeira Carla" : (m.label || S.c.pac.trat)}: ${m.text}`).join("\n");
}
async function aiPatient(text){
  const c = S.c;
  const vitais = c.equipe ? `FC ${Math.round(S.vit.fc)} bpm, PA ${Math.round(S.vit.pas)}x${Math.round(S.vit.pad)} mmHg, SpO2 ${S.vit.sat==null ? "não aferida" : Math.round(S.vit.sat)+"%"}, FR ${Math.round(S.vit.fr)} irpm` : "";
  const r = await askIA("paciente", {historico: history(), fala: text, estado: S.dyn ? dynEstadoTxt() : "", vitais}, "quick");
  if (!r || typeof r.fala !== "string") return null;
  return r;
}
async function aiNurse(text){
  const v = S.vit;
  const situacao = S.dyn ? (S.mon ? "Estado do paciente: " + dynEstadoTxt() + "." : "Paciente AINDA NÃO monitorizado. Estado aparente: " + dynEstadoTxt() + ".") : S.mon ? `Monitor: FC ${Math.round(v.fc)} bpm, PA ${Math.round(v.pas)}x${Math.round(v.pad)} mmHg, SpO2 ${Math.round(v.sat)}%, FR ${Math.round(v.fr)} irpm.` : "Paciente AINDA NÃO monitorizado (sem sinais vitais disponíveis até o médico pedir monitorização).";
  const feitas = Object.keys(S.orders).map(k => ordName(k)).join("; ") || "nenhuma";
  const r = await askIA("enfermeira", {historico: history(), fala: text, situacao, feitas}, "quick");
  if (!r || typeof r.fala !== "string") return null;
  if (Array.isArray(r.exames) && r.exames.includes("ecg")) setTimeout(() => requestExam("ecg"), 50);
  return r;
}
function localPatient(text){
  const n = norm(text), c = S.c;
  let hits = c.topicos.filter(tp => tp.kw.test(n));
  if (!hits.length && c.repo){
    // reserva: aproxima pelo conteúdo das falas e por quem foi chamado (mãe, enfermagem, SAMU...)
    const mine = new Set(stems(text));
    const role = /\b(mae|pai|filh[oa]|familia|esposa|marido|senhora da familia)\b/.test(n) ? "Família" : /\b(enfermeir[oa]|enfermagem|equipe|tecnic[oa])\b/.test(n) ? "Enfermagem" : /\bsamu\b/.test(n) ? "SAMU" : "";
    let best = null, bs = 0;
    for (const tp of c.topicos){ if (tp.ativo) continue; let sc = stems(tp.trig+" "+tp.r).filter(x => mine.has(x)).length; if (role && (tp.quem === role || (role === "Família" && tp.quem === "Mãe"))) sc += 1.5; if (S.topics[tp.id]) sc -= .5; if (sc > bs){ bs = sc; best = tp; } }
    if (best && bs >= 1) hits = [best];
  }
  if (!hits.length && S.dyn && dynConsc() === "sonolento") return {fala:"(Geme e abre os olhos devagar) …hum… doutor…", emocao:"sonolento"};
  if (!hits.length){
    if (/(bom dia|boa tarde|boa noite|\bola\b|\boi\b|tudo bem|prazer)/.test(n)) return {fala: c.id==="rafael" ? "Oi. Tudo bem..." : "Bom dia, doutor.", emocao:"neutro"};
    if (/(examin|vou (te |lhe )?examinar|posso (te |lhe )?examinar|deitar|tirar a blusa)/.test(n)) return {fala:"Pode sim, doutor.", emocao:"neutro"};
    if (COM_RE.explicou.test(n)) return {fala:"Entendi, doutor. E isso tem tratamento?", emocao:"preocupado"};
    return {fala:"Desculpa, doutor, não entendi direito. Pode perguntar de outro jeito?", emocao:"neutro"};
  }
  const fresh = hits.filter(tp => !S.topics[tp.id]);
  const pick = (fresh.length ? fresh : hits).slice(0, 2);
  return {fala: pick.map(tp => tp.r).join(" "), quem: pick[0].quem || "", topicos: hits.map(h=>h.id), emocao: c.id==="rafael" ? "triste" : c.emergencia ? "com dor" : "neutro"};
}
function localNurse(text){
  const n = norm(text), v = S.vit;
  const isOrder = ordList().filter(o => o.kw.test(n));
  if (isOrder.length) return {fala: "Certo, doutor. " + isOrder.map(o => o.nome).join(", ") + ": providenciando agora.", ordens: isOrder.map(o=>o.id)};
  if (/(ecg|eletro)/.test(n)) return {fala:"Vou fazer o eletro agora, doutor."};
  if (S.dyn && /(sinais vitais|pressao|frequencia|saturacao|como (ela |ele )?esta|monitor|pulso)/.test(n)) return {fala: S.dyn.obito ? "Doutor(a), não há mais sinais vitais." : S.dyn.pcr ? "Doutor(a), ele está sem pulso!" : S.mon ? `PA ${Math.round(S.vit.pas)} por ${Math.round(S.vit.pad)}, frequência ${Math.round(S.vit.fc)}, saturando ${Math.round(S.vit.sat)}%, respiração ${Math.round(S.vit.fr)}.` : "Ainda não monitorizei, doutor(a). Quer que eu monitorize e pegue acesso?"};
  if (/(sinais vitais|pressao|frequencia|saturacao|como (ele )?esta|monitor)/.test(n)) return {fala: S.mon ? `Ele está com PA ${Math.round(v.pas)} por ${Math.round(v.pad)}, frequência ${Math.round(v.fc)}, saturando ${Math.round(v.sat)}%.` : "Ainda não monitorizei, doutor. Quer que eu monitorize e pegue acesso?"};
  if (/(peso|quanto pesa)/.test(n)) return {fala:"Uns 86 quilos, doutor."};
  if (/(hemodinamica|cateterismo|cate\b)/.test(n)) return {fala:"A hemodinâmica está de sobreaviso, doutor. Quer que eu acione?"};
  return {fala:"Pois não, doutor. O que o senhor precisa?"};
}
