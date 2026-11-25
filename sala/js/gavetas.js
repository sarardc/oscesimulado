// Sala de Simulação · Gavetas: conversa, exame físico, exames, ordens, prontuário, conduta.
// Script comum (não é módulo): compartilha o escopo global com os outros arquivos da sala,
// carregados em ordem pelo sala/index.html.
"use strict";
/* =========================================================================
   GAVETAS
   ========================================================================= */
function openDrawer(id){
  if (!S) return;
  S.drawer = id;
  document.querySelectorAll("[data-tool]").forEach(b => b.setAttribute("aria-pressed", b.dataset.tool===id));
  if (id==="exames"){ S.unread = 0; setBadge("exames", 0); }
  $("#stage")?.classList.toggle("dopen", !!id);
  renderDrawer();
}
function setBadge(id, n){ const b = document.querySelector(`[data-badge="${id}"]`); if (b){ b.hidden = !n; b.textContent = n; } }
function drawerShell(title, sub, body){
  return `<aside class="drawer" role="dialog" aria-label="${esc(title)}"><header><div><h2>${esc(title)}</h2>${sub?`<p>${sub}</p>`:""}</div><button class="iconbtn" id="dClose" aria-label="Fechar">${ic("close")}</button></header><div class="dbody" id="dBody">${body}</div></aside>`;
}
function renderDrawer(){
  const host = $("#drawerHost"); if (!host || !S) return;
  const keep = $("#dBody")?.scrollTop || 0;
  const c = S.c, id = S.drawer;
  if (!id){ host.innerHTML = ""; return; }
  let html = "";
  if (id==="conversa"){
    const tr = S.transcript.length ? `<div class="transcript">${S.transcript.map(m => `<div class="tl ${m.who==="me"?"me":""}"><span class="w">${m.who==="me" ? (m.to==="enfermeira"?"Você → Enf. Carla":"Você") : esc(m.label || speakerName(m.who))} · ${fmt(m.t)}</span>${esc(m.text)}</div>`).join("")}</div>` : `<div class="empty">Cumprimente, apresente-se e comece a anamnese pela caixa de texto ou pelo microfone.</div>`;
    let roteiro = "";
    if (S.mode==="treino"){
      const groups = {};
      c.topicos.filter(tp => !tp.ativo).forEach(tp => (groups[tp.g] = groups[tp.g] || []).push(tp));
      roteiro = `<div class="group"><div class="eyebrow">Roteiro sugerido (modo treino)</div><p class="note" style="margin:0">Clique para perguntar ou use como lembrete. No modo prova este roteiro não aparece.</p></div>` +
        Object.entries(groups).map(([g, list]) => `<div class="group"><div class="eyebrow">${esc(g)}</div>${list.map(tp => `<button class="item ${S.topics[tp.id]?"done":""}" data-ask="${tp.id}">${esc(tp.q)}${S.topics[tp.id]?`<span class="st">✓ ${fmt(S.topics[tp.id].t)}</span>`:""}</button>`).join("")}</div>`).join("");
    }
    html = drawerShell("Conversa", S.mode==="treino" ? "Transcrição e roteiro de anamnese" : "Transcrição da consulta", `<div class="group"><div class="eyebrow">Transcrição</div>${tr}</div>${roteiro}`);
  }
  else if (id==="exame"){
    html = drawerShell("Exame físico", "Escolha a manobra: o achado aparece logo abaixo.", c.exame.map(gr => `<div class="group"><div class="eyebrow">${esc(gr.g)}</div>${gr.itens.map(it => {
      const done = S.man[it.id]!=null;
      return `<button class="item ${done?"done":""}" data-man="${it.id}">${esc(it.nome)}${done?`<span class="st">${fmt(S.man[it.id])}</span>`:""}</button>${done ? (it.foto ? fotoHTML(it.foto) : `<div class="finding">${esc(findingText(it))}</div>`) : ""}`;
    }).join("")}</div>`).join(""));
  }
  else if (id==="exames"){
    const req = Object.keys(S.exams);
    const imp = req.length ? req.sort((a,b)=>S.exams[b].t-S.exams[a].t).map(eid => impresso(eid)).join("") : `<div class="empty">Nenhum exame solicitado. Os resultados chegam como impressos, após o tempo de processamento.</div>`;
    const gs = {}; (c.examesCaso||[]).forEach(e => (gs["Exames deste caso"]=gs["Exames deste caso"]||[]).push(e)); EXAMES.forEach(e => (gs[e.grupo]=gs[e.grupo]||[]).push(e));
    html = drawerShell("Exames complementares", S.mode==="prova" ? "Digite o exame que deseja solicitar." : "Solicite e aguarde o impresso.", `
      <div class="group"><div class="eyebrow">Impressos recebidos</div>${imp}</div>
      <input class="search" id="exSearch" placeholder="Buscar exame (ex.: troponina, BNP, ECG)" aria-label="Buscar exame" value="${esc(S.exQ||"")}">
      ${Object.entries(gs).map(([g, list]) => `<div class="group" data-exg><div class="eyebrow">${esc(g)}</div>${list.map(e => `<button class="item ${S.exams[e.id]?"done":""}" data-ex="${e.id}" data-name="${esc(norm(e.nome))}" ${S.exams[e.id]?"disabled":""}>${esc(e.nome)}<span class="st">${S.exams[e.id]?"solicitado":"~"+(examDef(e.id).t||e.t||6)+" s"}</span></button>`).join("")}</div>`).join("")}`);
  }
  else if (id==="ordens"){
    const gs = {}; ordList().forEach(o => (gs[o.g]=gs[o.g]||[]).push(o));
    const cnt = id => S.dyn?.cnt?.[id] || 0;
    html = drawerShell("Ordens à enfermagem", "A enfermeira Carla executa na hora. Você também pode falar as ordens no chat (Falar com: Enf. Carla).",
      Object.entries(gs).map(([g, list]) => `<div class="group"><div class="eyebrow">${esc(g)}</div>${list.map(o => { const done = S.orders[o.id]!=null, lock = done && !o.rep && !(o.id==="rcp" && !S.dyn?.rcp); return `<button class="item ${done?"done":""}" data-ord="${o.id}" ${lock?"disabled":""}>${esc(o.nome)}${done?`<span class="st">✓ ${fmt(S.orders[o.id])}${o.rep && cnt(o.id)>1 ? " · "+cnt(o.id)+"×" : ""}</span>`:""}</button>`; }).join("")}</div>`).join(""));
  }
  else if (id==="prontuario"){
    const anam = c.topicos.filter(tp => S.topics[tp.id] && !tp.oculto);
    const exf = c.exame.flatMap(g => g.itens).filter(it => S.man[it.id]!=null);
    html = drawerShell("Prontuário", "Montado automaticamente com o que você investigou.", `
      <div class="group"><div class="eyebrow">Identificação</div><dl class="kv"><dt>Nome</dt><dd>${esc(c.pac.nome)}</dd><dt>Idade</dt><dd>${idadeStr(c.pac)}</dd><dt>Sexo</dt><dd>${esc(c.pac.sexo)}</dd><dt>Profissão</dt><dd>${esc(c.pac.prof)}</dd></dl></div>
      <div class="group"><div class="eyebrow">Anamnese (${anam.length} de ${c.topicos.length} pontos da ficha)</div>${anam.length ? anam.map(tp => `<div class="tl"><span class="w">${esc(tp.g)}</span>${esc(tp.r)}</div>`).join("") : `<div class="empty">Ainda nada investigado.</div>`}</div>
      <div class="group"><div class="eyebrow">Exame físico</div>${exf.length ? exf.map(it => `<div class="tl"><span class="w">${esc(it.nome)}</span>${it.foto ? "Impresso fotográfico recebido (ver Exame físico)." : esc(findingText(it))}</div>`).join("") : `<div class="empty">Nenhuma manobra realizada.</div>`}</div>
      <div class="field"><label for="notas">Anotações livres</label><textarea id="notas" rows="5" placeholder="Rascunho do seu raciocínio">${esc(S.notas)}</textarea></div>`);
  }
  else if (id==="conduta"){
    html = drawerShell("Hipótese e conduta", "Escreva com as suas palavras: não há alternativas para escolher.", `
      <div class="field"><label for="hip">${esc(c.labelHip || "Hipótese diagnóstica principal")}</label><input id="hip" value="${esc(S.hip)}" placeholder="Seja específico: diagnóstico, classificação, etiologia"></div>
      <div class="field"><label for="dif">Diagnósticos diferenciais</label><textarea id="dif" rows="3" placeholder="Um por linha">${esc(S.dif)}</textarea></div>
      <div class="field"><label for="cond">${esc(c.labelCond || "Conduta e orientações")}</label><small>O que você também explicar ao paciente na conversa conta para a nota.</small><textarea id="cond" rows="8" placeholder="Medicamentos com dose, exames, encaminhamentos, orientações, retorno">${esc(S.conduta)}</textarea></div>
      ${c.emergencia ? `<p class="note">Na emergência, os medicamentos contam pelas <b>Ordens</b> executadas pela enfermeira.</p>` : ""}`);
  }
  host.innerHTML = html;
  const body = $("#dBody"); if (body) body.scrollTop = keep;
  $("#dClose").onclick = () => openDrawer(null);
  host.querySelectorAll("[data-ask]").forEach(b => b.onclick = () => { const tp = c.topicos.find(x=>x.id===b.dataset.ask); say(tp.q); });
  host.querySelectorAll("[data-man]").forEach(b => b.onclick = () => { if (S.man[b.dataset.man]==null){ S.man[b.dataset.man] = now(); renderDrawer(); } });
  host.querySelectorAll("[data-ex]").forEach(b => b.onclick = () => requestExam(b.dataset.ex));
  host.querySelectorAll("[data-ord]").forEach(b => b.onclick = () => giveOrder(b.dataset.ord));
  host.querySelectorAll("[data-zoom]").forEach(b => b.onclick = () => zoomImp(b.dataset.zoom));
  host.querySelectorAll("[data-zimg]").forEach(b => b.onclick = () => zoomImg(b.getAttribute("src"), b.getAttribute("alt")));
  const exs = $("#exSearch"); if (exs){ const f = () => { S.exQ = exs.value; const q = norm(exs.value).trim(); const show = S.mode==="treino" || q.length>=2; host.querySelectorAll("[data-ex]").forEach(b => b.hidden = !show || (q && !q.split(/\s+/).every(w => b.dataset.name.includes(w)))); host.querySelectorAll("[data-exg]").forEach(g => g.hidden = ![...g.querySelectorAll("[data-ex]")].some(b=>!b.hidden)); }; exs.oninput = f; f(); }
  const bind = (sel, key) => { const e = $(sel); if (e) e.oninput = () => { S[key] = e.value; }; };
  bind("#hip","hip"); bind("#dif","dif"); bind("#cond","conduta"); bind("#notas","notas");
}
function fotoHTML(f){
  return `<figure class="photo"><img src="${esc(f.src)}" alt="${esc(f.alt||f.title||"Fotografia da lesão")}" data-zimg>${f.caption?`<figcaption>${esc(f.caption)}</figcaption>`:""}${f.request?`<div class="req">${esc(f.request)} Fale em voz alta para o paciente/examinador ou escreva em Prontuário → Anotações.</div>`:""}</figure>`;
}
function zoomImg(src, alt){
  const host = $("#stage"); if (!host) return;
  const z = document.createElement("div"); z.className = "zoom";
  z.innerHTML = `<div class="imp"><header><b>${esc(alt||"Fotografia")}</b><button class="btn ghost" style="color:#1D232A;border-color:#C9C3AE">Fechar</button></header><img src="${esc(src)}" alt="${esc(alt||"")}"></div>`;
  z.onclick = ev => { if (ev.target===z || ev.target.closest("button")) z.remove(); };
  host.appendChild(z);
}
function findingText(it){
  const a = typeof it.achado === "function" ? it.achado() : it.achado;
  if (a !== "VITAIS") return a;
  const v = S.vit;
  if (S.dyn?.obito) return "Sem sinais vitais.";
  if (S.dyn?.pcr) return "Sem pulso central palpável, sem respiração efetiva.";
  return `PA ${Math.round(v.pas)} × ${Math.round(v.pad)} mmHg · FC ${Math.round(v.fc)} bpm · FR ${Math.round(v.fr)} irpm · SpO₂ ${Math.round(v.sat)}% (aferidos em ${fmt(S.man[it.id])})`;
}
function examDef(id){ const extra = (S?.c.examesCaso||[]).find(e => e.id===id); return Object.assign({}, EXAME[id] || extra || {}, (S?.c.exames||{})[id] || {}); }
function requestExam(id){
  if (!S || S.exams[id]) return;
  const d = examDef(id), t = now();
  S.exams[id] = {t, ready:false};
  if (id === "ecg" && S.c.dyn){ const st = S.dyn, D = S.c.dyn; S.exams.ecg.cfg = st.obito ? {fc:30, rhythm:"assist"} : st.pcr ? (st.ritmo === "fv" ? {rhythm:"vf"} : {fc:40}) : D.ecg ? D.ecg(st, t) : {fc:Math.round(S.vit.fc||80)}; }
  toast(`${d.nome}: solicitado.`);
  if (S.drawer==="exames") renderDrawer();
  setTimeout(() => {
    if (!S || !S.exams[id]) return;
    S.exams[id].ready = true; S.exams[id].tr = now();
    if (S.drawer!=="exames"){ S.unread++; setBadge("exames", S.unread); }
    toast(`Resultado disponível: ${d.nome}.`);
    if (S.drawer==="exames") renderDrawer();
  }, (d.t || 6) * 1000);
}
function impresso(id){
  const d = examDef(id), e = S.exams[id];
  if (!e.ready) return `<div class="imp wait"><header><b>${esc(d.nome)}</b><span>${fmt(e.t)}</span></header>Aguardando resultado…</div>`;
  const showLaudo = S.mode==="treino" && d.laudo;
  if (e.cfg) d.ecg = e.cfg;
  const body = d.ecg ? `<div class="ecgwrap" data-zoom="${id}" role="button" tabindex="0" title="Ampliar">${ecgSVG(d.ecg)}</div>` : `<div class="res">${esc(d.res)}${S.mode==="treino" && d.alt ? "\n(alterado)" : ""}</div>`;
  const descHTML = d.ecg && d.desc ? `<div class="laudo"><b>Descrição do impresso:</b> ${esc(d.desc)}<br><span style="color:#6B7178">Traçado ilustrativo gerado a partir da descrição.</span></div>` : "";
  return `<div class="imp"><header><b>${esc(d.nome)}</b><span>${esc(S.c.pac.nome.split(" ")[0])} · ${fmt(e.tr)}</span></header>${body}${showLaudo?`<div class="laudo"><b>Laudo (treino):</b> ${esc(d.laudo)}</div>`:""}${descHTML}</div>`;
}
function zoomImp(id){
  const d = examDef(id), host = $("#stage"); if (!host) return;
  const z = document.createElement("div"); z.className = "zoom";
  z.innerHTML = `<div class="imp"><header><b>${esc(EXAME[id].nome)}</b><button class="btn ghost" style="color:#1D232A;border-color:#C9C3AE">Fechar</button></header><div class="ecgwrap">${ecgSVG(S.exams[id]?.cfg || d.ecg)}</div></div>`;
  z.onclick = ev => { if (ev.target===z || ev.target.closest("button")) z.remove(); };
  host.appendChild(z);
}
