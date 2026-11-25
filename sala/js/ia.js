// Sala de Simulação · IA: servidor próprio, claude.ai e selo do lobby.
// Script comum (não é módulo): compartilha o escopo global com os outros arquivos da sala,
// carregados em ordem pelo sala/index.html.
"use strict";
/* ---------- IA fora do claude.ai: servidor próprio (pasta api/ do repositório) ----------
   Cole em IA_API_URL o endereço do Worker publicado (ex.: https://osce-ia.SEU-USUARIO.workers.dev/ia).
   Vazio = sem IA fora do claude.ai (roteiro local). O servidor monta os prompts a partir da
   ficha do caso que ele mesmo guarda; a página só envia o id do caso e os dados da sessão. */
const IA_API_URL = "";
function webSample(url){
  if (!url) return null;
  return { web:true, async ask(tipo, casoId, sessao){
    const ctl = new AbortController(), tm = setTimeout(() => ctl.abort(), tipo === "avaliador" ? 90000 : 30000);
    try{
      const r = await fetch(url, {method:"POST", headers:{"content-type":"application/json"}, body: JSON.stringify({tipo, casoId, sessao}), signal: ctl.signal});
      if (r.status === 429) throw Object.assign(new Error("limite"), {code:"limit"});
      if (!r.ok) throw Object.assign(new Error("HTTP " + r.status), {code:"unavailable"});
      return await r.json();
    } finally { clearTimeout(tm); }
  }};
}
// Só o texto do caso que a IA precisa (sem expressões regulares nem funções). O servidor
// guarda uma cópia gerada por scripts/build-sala-ia.mjs a partir desta mesma função.
function fichaDoCaso(c){
  return {
    id: c.id, titulo: c.titulo || "", repo: !!c.repo, crianca: !!c.crianca, equipe: !!c.equipe, emergencia: !!c.emergencia, dyn: !!c.dyn,
    pac: {nome: c.pac.nome || "", idade: c.pac.idade, idadeTxt: c.pac.idadeTxt || "", sexo: c.pac.sexo || "", prof: c.pac.prof || ""},
    local: c.local || "", persona: c.persona || "", enunciado: c.enunciado || "", tarefas: c.tarefas || [], enfermeira: c.enfermeira || "",
    topicos: (c.topicos || []).map(tp => ({id: tp.id, trig: tp.trig || "", ativo: !!tp.ativo, r: tp.r || ""})),
    ordens: (c.dyn ? dynOrdList(c) : ORDENS).map(o => ({id: o.id, nome: o.nome})),
    checklistIA: (c.checklist || []).map((it, i) => it.ia ? {i, l: it.l} : null).filter(Boolean),
    criticosTexto: c.criticosTexto || [],
  };
}
async function askIA(tipo, sessao, tier){
  const P = window.SalaIA;
  if (CAP.sample?.web) return CAP.sample.ask(tipo, S.c.id, sessao);
  if (!P) throw Object.assign(new Error("módulo de prompts não carregou"), {code:"unavailable"});
  return CAP.sample.json(P.PROMPTS[tipo](fichaDoCaso(S.c), sessao), {modelTier:tier, cache:false});
}

function refreshCapsUI(){
  const el = $("#aiStatus"); if (el) el.outerHTML = aiChip();
  const mic = $("#micBtn"); if (mic) mic.hidden = !CAP.dict;
  const vb = $("#voiceBtn"); if (vb) vb.hidden = !CAP.tts;
}
const aiChip = () => (CAP.sample && !CAP.aiOff)
  ? `<span id="aiStatus" class="chip ok aimode" title="As respostas são geradas por IA a partir da ficha do paciente">Paciente com IA</span>`
  : `<span id="aiStatus" class="chip aimode" title="Sem IA disponível: respostas pelo roteiro local">Roteiro local${window.claude?.use ? "" : ` · <a href="${AI_URL}" target="_blank" rel="noopener">versão com IA ↗</a>`}</span>`;
// Versão publicada no claude.ai, onde o paciente responde com IA (exige conta no Claude)
const AI_URL = "https://claude.ai/artifact/9zEPyeyJFeZPUbgttLtaiY";
