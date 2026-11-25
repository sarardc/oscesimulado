// Sala de Simulação · Encerramento e correção.
// Script comum (não é módulo): compartilha o escopo global com os outros arquivos da sala,
// carregados em ordem pelo sala/index.html.
"use strict";
/* =========================================================================
   ENCERRAMENTO E CORREÇÃO
   ========================================================================= */
function endStation(reason){
  if (!S || S.ended) return;
  if (S.dyn && !S.dyn.obito && reason !== "obito") S.dyn.ev.push({t:now(), txt: S.dyn.estavel ? "Fim da estação — paciente estável" : "Fim da estação — paciente ainda instável", kind: S.dyn.estavel ? "ok" : "warn"});
  S.ended = true; S.elapsed = Math.min(now(), S.c.tempo);
  stopLoops();
  beep(520,.35); setTimeout(()=>beep(520,.35), 420);
  if (reason==="tempo") toast("Tempo esgotado.", "warn");
  setTimeout(() => renderFeedback(), reason==="tempo" ? 900 : 0);
}
function evaluate(override){
  const c = S.c;
  const items = c.checklist.map((it, i) => {
    let r = it.test(S) || {ok:false};
    let byAI = false;
    if (override && it.ia && override[i]!=null){ if (override[i] !== r.ok) byAI = true; r = {ok: !!override[i], ev: r.ev || (override[i] ? "Reconhecido pelo avaliador IA" : undefined)}; }
    return Object.assign({}, it, {ok:r.ok, ev:r.ev, byAI, i});
  });
  const doms = {};
  items.forEach(it => { const d = doms[it.d] = doms[it.d] || {got:0, tot:0}; d.tot += it.w; if (it.ok) d.got += it.w; });
  const got = items.reduce((a,it)=>a+(it.ok?it.w:0),0), tot = items.reduce((a,it)=>a+it.w,0);
  const crit = (c.criticos||[]).filter(k => k.test(S)).map(k => k.l);
  if (S.critIA) S.critIA.forEach(i => { const t = (c.criticosTexto||[])[i]; if (t) crit.push(t); });
  return {items, doms, pct: Math.round(100*got/tot), got, tot, crit};
}
function renderFeedback(override, ai){
  const c = S.c, R = evaluate(override);
  document.body.style.overflow = "";
  const hist = store.get("osce-sala-hist", {});
  const h = hist[c.id] || {best:0, n:0};
  if (!S.saved){ h.n++; S.saved = true; }
  h.best = Math.max(h.best, R.pct); hist[c.id] = h; store.set("osce-sala-hist", hist);
  const R2 = 52, C = 2*Math.PI*R2, col = R.pct>=70 ? "var(--ok)" : R.pct>=50 ? "var(--warn)" : "var(--crit)";
  const domOrder = [...new Set(c.checklist.map(i=>i.d))];
  const aiBox = ai === "loading" ? `<div class="ai-box"><b>Avaliador IA</b><span class="note">Revisando a hipótese, a conduta e a conversa…</span></div>`
    : ai && ai.comentario ? `<div class="ai-box"><b>Comentário do avaliador</b><span>${esc(ai.comentario)}</span>${ai.fortes?.length?`<div><b>Pontos fortes</b><ul>${ai.fortes.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>`:""}${ai.melhorar?.length?`<div><b>Para melhorar</b><ul>${ai.melhorar.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>`:""}</div>` : "";
  $("#app").innerHTML = `
  <section class="screen"><div class="fb">
    <div class="fb-head">
      <svg class="ring" viewBox="0 0 132 132" role="img" aria-label="Nota ${R.pct}%"><circle cx="66" cy="66" r="${R2}" fill="none" stroke="var(--sunk)" stroke-width="12"/><circle cx="66" cy="66" r="${R2}" fill="none" stroke="${col}" stroke-width="12" stroke-linecap="round" stroke-dasharray="${C*R.pct/100} ${C}" transform="rotate(-90 66 66)"/><text x="66" y="72" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="28" font-weight="600" fill="var(--ink)">${R.pct}%</text></svg>
      <div>
        <div class="eyebrow">${esc(c.area)} · ${esc(c.pac.nome)} · ${S.mode==="prova"?"Prova":"Treino"}</div>
        <h1>${S.dyn?.obito ? "O paciente morreu" : R.pct>=70 ? "Estação aprovada" : R.pct>=50 ? "Quase lá" : "Vale refazer esta estação"}</h1>
        <p>${R.got.toLocaleString("pt-BR")} de ${R.tot.toLocaleString("pt-BR")} pontos · tempo usado ${fmt(S.elapsed)} de ${fmt(c.tempo)} · ${S.transcript.filter(m=>m.who==="me").length} falas · melhor nota nesta estação: ${h.best}%</p>
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:12px">
          <button class="btn primary" id="again">${ic("door")}Refazer a estação</button>
          <button class="btn" id="toLobby">${ic("back")}Outras estações</button>
        </div>
      </div>
    </div>
    <div class="doms">${domOrder.map(d => { const v = R.doms[d]; const p = Math.round(100*v.got/v.tot); return `<div class="dom"><div class="row"><span>${esc(d)}</span><b>${p}%</b></div><div class="bar"><i style="width:${p}%"></i></div></div>`; }).join("")}</div>
    ${S.dyn ? desfechoHTML() : ""}
    ${R.crit.length ? `<div class="crit-list">${R.crit.map(x=>`<div><b>Erro crítico:</b> ${esc(x)}</div>`).join("")}</div>` : ""}
    <div class="fb-grid">
      <div class="card"><h2>Checklist da estação</h2>
        ${domOrder.map(d => `<div><div class="eyebrow" style="margin:8px 0 2px">${esc(d)}</div>${R.items.filter(it=>it.d===d).map(it => `<div class="ck ${it.ok?"y":"n"}"><span class="mk">${it.ok?"✓":"✕"}</span><div>${esc(it.l)}${it.byAI?`<span class="ia">IA</span>`:""}${it.ev?`<span class="ev">${esc(it.ev)}</span>`:""}${!it.ok && it.dica?`<span class="dica">${esc(it.dica)}</span>`:""}</div><span class="w">${String(it.w).replace(".",",")}</span></div>`).join("")}</div>`).join("")}
      </div>
      <div style="display:grid;gap:20px;min-width:0">
        ${aiBox ? `<div class="card">${aiBox}</div>` : ""}
        ${c.gabarito ? gabaritoHTML(c.gabarito) : ""}
        <div class="card"><h2>Sua hipótese e conduta</h2>
          <dl class="kv"><dt>Hipótese</dt><dd>${esc(S.hip)||"<span class='note'>não registrada</span>"}</dd><dt>Diferenciais</dt><dd>${esc(S.dif)||"—"}</dd></dl>
          <div class="note" style="white-space:pre-wrap">${esc(S.conduta)||"Conduta não registrada por escrito."}</div>
          ${c.emergencia ? `<div><div class="eyebrow">Ordens executadas</div>${Object.keys(S.orders).sort((a,b)=>S.orders[a]-S.orders[b]).map(k=>`<div class="tl"><span class="w">${fmt(S.orders[k])}</span>${esc(ORD_NAME[k])}</div>`).join("") || "<span class='note'>Nenhuma</span>"}</div>` : ""}
        </div>
        <div class="card"><h2>Transcrição</h2><div class="transcript" style="max-height:420px;overflow:auto">${S.transcript.length ? S.transcript.map(m => `<div class="tl ${m.who==="me"?"me":""}"><span class="w">${m.who==="me"?"Você":esc(m.label || speakerName(m.who))} · ${fmt(m.t)}</span>${esc(m.text)}</div>`).join("") : "<span class='note'>Sem falas registradas.</span>"}</div></div>
      </div>
    </div>
  </div></section>`;
  window.scrollTo(0,0);
  $("#again").onclick = () => renderDoor(c.id);
  $("#toLobby").onclick = renderLobby;
  if (ai===undefined && CAP.sample && !CAP.aiOff) runAIEval();
}
function desfechoHTML(){
  const st = S.dyn, cls = st.obito ? "obito-d" : st.estavel ? "vivo" : "instavel";
  const tit = st.obito ? `Óbito às ${fmt(st.obitoT)}` : st.estavel ? "Paciente vivo e estabilizado" : "Paciente vivo, mas ainda instável";
  const sub = st.obito ? st.motivo : st.rosc ? `Houve ${st.rosc} parada(s) revertida(s).` : st.estavel ? "As condutas certas, no tempo certo, reverteram a piora." : "Faltou tratar a causa a tempo: o quadro ainda piorava ao fim da estação.";
  const linhas = st.ev.slice().sort((a,b) => a.t-b.t).map(e => `<div class="tl ${e.kind}"><span class="w">${fmt(e.t)}${e.kind==="ordem" ? " · ordem" : ""}</span>${esc(e.txt)}</div>`).join("");
  return `<div class="desfecho ${cls}"><b>${esc(tit)}</b><span>${esc(sub)}</span></div>
    <div class="card"><h2>Linha do tempo</h2><div class="transcript tline">${linhas || "<span class='note'>Nenhuma ordem dada.</span>"}</div></div>`;
}
function gabaritoHTML(g){
  const li = arr => `<ul>${arr.map(x => `<li>${esc(x)}</li>`).join("")}</ul>`;
  return `<div class="card gab"><h2>Gabarito da estação</h2>
    ${g.diag ? `<div><div class="eyebrow">Diagnóstico</div>${esc(g.diag)}</div>` : ""}
    ${g.foto ? `<div><div class="eyebrow">Fotodescrição esperada</div>${li(splitP(g.foto))}</div>` : ""}
    ${(g.difs||[]).length ? `<div><div class="eyebrow">Diferenciais</div>${li(g.difs)}</div>` : ""}
    ${(g.exames||[]).length ? `<div><div class="eyebrow">Exames esperados</div>${li(g.exames.map(e => `${e.exam}: ${e.expected||e.justify||""}`))}</div>` : ""}
    ${g.conduta ? `<div><div class="eyebrow">Conduta esperada</div>${li(splitP(g.conduta))}</div>` : ""}
    ${(g.achados||[]).length ? `<div><div class="eyebrow">${S.c.id === "p1-spikes" ? "As 6 etapas do SPIKES" : "Achados esperados"}</div>${li(g.achados)}</div>` : ""}
    ${(g.modelo||[]).length ? `<div><div class="eyebrow">${S.c.id === "p1-spikes" ? "Exemplo de condução" : "Anamnese modelo"}</div>${g.modelo.map(([t, x]) => `<p style="margin:0 0 6px"><b>${esc(t)}:</b> ${esc(x)}</p>`).join("")}</div>` : ""}
  </div>`;
}
async function runAIEval(){
  const c = S.c, snap = S;
  renderFeedback(undefined, "loading");
  const sessao = {
    hip: S.hip, dif: S.dif, conduta: S.conduta, notas: S.notas,
    ordens: Object.keys(S.orders).map(k=>ordName(k)+" ("+fmt(S.orders[k])+")").join("; "),
    desfecho: S.dyn ? (S.dyn.obito ? "óbito" : S.dyn.estavel ? "estabilizado" : "instável") : "",
    manobras: c.exame.flatMap(g=>g.itens).filter(it=>S.man[it.id]!=null).map(it=>it.nome).join("; "),
    exames: Object.keys(S.exams).map(id=>examDef(id).nome).join("; "),
    falas: S.transcript.filter(m=>m.who==="me").map(m=>`[${fmt(m.t)}] ${m.text}`).join("\n"),
  };
  try{
    const r = await askIA("avaliador", sessao, "default");
    if (S !== snap) return;
    const ov = {};
    if (Array.isArray(r?.itens)) r.itens.forEach(x => { if (Number.isInteger(+x?.i)) ov[+x.i] = !!x.ok; });
    else if (r && r.itens) for (const k in r.itens) ov[+k] = !!r.itens[k];
    if (r && Array.isArray(r.criticos)) S.critIA = r.criticos.map(Number).filter(n => Number.isInteger(n));
    renderFeedback(ov, r || {});
  }catch(e){
    if (S !== snap) return;
    renderFeedback(undefined, {comentario: e?.code==="not_granted" ? "" : "O avaliador IA não respondeu. A correção acima usa o reconhecimento automático do texto."});
  }
}
