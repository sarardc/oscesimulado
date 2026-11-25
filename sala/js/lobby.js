// Sala de Simulação · Lobby e porta da estação.
// Script comum (não é módulo): compartilha o escopo global com os outros arquivos da sala,
// carregados em ordem pelo sala/index.html.
"use strict";
/* =========================================================================
   LOBBY
   ========================================================================= */
function renderLobby(){
  stopLoops();
  S = null;
  document.body.style.overflow = "";
  const hist = store.get("osce-sala-hist", {});
  $("#app").innerHTML = `
  <section class="screen"><div class="lobby">
    <div class="lobby-head">
      <div>
        <div class="eyebrow">Estações de habilidades clínicas</div>
        <h1>Sala de Simulação OSCE</h1>
        <p>Você entra no consultório, conversa com o paciente com as suas próprias palavras, examina, pede exames e decide a conduta. O cronômetro corre como na prova. No fim, recebe o checklist corrigido, com a evidência de cada item.</p>
      </div>
      <div class="setup">
        <div class="seg" role="group" aria-label="Modo">
          <button id="mTreino" aria-pressed="${prefs.mode==="treino"}">Treino<small>Roteiro de perguntas, laudos e dicas</small></button>
          <button id="mProva" aria-pressed="${prefs.mode==="prova"}">Prova<small>Sem dicas nem laudos: como no dia</small></button>
        </div>
        <div class="setup-row">${aiChip()}<span>${CAP.tts ? "O paciente fala em voz alta" : "Respostas em legenda"}</span></div>
      </div>
    </div>
    <div class="filters" role="group" aria-label="Filtrar por especialidade">${["Todas", ...[...new Set(CASOS.map(c => c.area))].sort((a, b) => { const r = x => x === "P1 duda" ? 0 : x === "Casos dinâmicos" ? 1 : 2; return r(a) - r(b) || a.localeCompare(b, "pt-BR"); })].map(a => `<button data-area="${esc(a)}" aria-pressed="${prefs.area===a}">${esc(a)} <span class="mono">${a==="Todas" ? CASOS.length : CASOS.filter(c=>c.area===a).length}</span></button>`).join("")}</div>
    <div class="stations">
      ${CASOS.filter(c => prefs.area==="Todas" || c.area===prefs.area).map(c => {
        const h = hist[c.id];
        return `<button class="st-card" data-case="${c.id}" ${c.ativo?"":"disabled"}>
          ${(c.thumb || c.img) ? `<img src="${c.thumb || c.img}" alt="">` : `<div class="noimg" aria-hidden="true">${ic("steth")}</div>`}
          <div class="body">
            <div class="meta"><span class="chip acc">${esc(c.area)}</span><span class="chip mono">${c.tempo/60} min</span>${c.dyn ? `<span class="chip warn">Risco de óbito</span>` : c.nivel?`<span class="chip">${esc(c.nivel)}</span>`:""}${c.ativo?"":`<span class="chip">Em produção</span>`}${h?`<span class="chip ${h.best>=70?"ok":"warn"}">Melhor: ${h.best}%</span>`:""}</div>
            <h3>${esc(c.titulo)}</h3>
            <p>${esc(c.pac.nome)}, ${idadeStr(c.pac)}${c.local?" · "+esc(c.local.split(" · ")[0]):""}</p>
          </div></button>`;
      }).join("")}
    </div>
    <div class="how">
      <div><b>Pergunte com as suas palavras</b>Não há lista de perguntas para clicar na prova. O paciente só conta o que você perguntar.</div>
      <div><b>Fale ou digite</b>Use o microfone para conversar em voz alta, como na estação real.</div>
      <div><b>Paciente que reage</b>Na sala de emergência, o monitor responde às suas ordens: a conduta errada derruba a pressão.</div>
      <div><b>Correção com evidência</b>Cada item do checklist mostra o minuto e a frase em que você o cumpriu.</div>
    </div>
  </div></section>`;
  $("#mTreino").onclick = () => { prefs.mode="treino"; savePrefs(); renderLobby(); };
  $("#mProva").onclick = () => { prefs.mode="prova"; savePrefs(); renderLobby(); };
  document.querySelectorAll("[data-case]").forEach(b => b.onclick = () => renderDoor(b.dataset.case));
  document.querySelectorAll("[data-area]").forEach(b => b.onclick = () => { prefs.area = b.dataset.area; savePrefs(); renderLobby(); });
  if (prefs.area!=="Todas" && !CASOS.some(c => c.area===prefs.area)) { /* especialidade ainda carregando */ }
}

/* =========================================================================
   PORTA DA ESTAÇÃO
   ========================================================================= */
function renderDoor(id){
  stopLoops();
  const c = CASOS.find(x => x.id===id);
  let left = 60;
  $("#app").innerHTML = `
  <section class="door">
    <article class="sheet">
      <div class="eyebrow">${esc(c.area)} · ${esc(c.titulo)} · ${prefs.mode==="prova"?"Modo prova":"Modo treino"}</div>
      <h2>${esc(c.local)}</h2>
      <p class="enun">${esc(c.enunciado)}</p>
      <div><div class="eyebrow" style="margin-bottom:6px">Nesta estação, você deverá</div><ol>${c.tarefas.map(t=>`<li>${esc(t)}</li>`).join("")}</ol></div>
      <div class="foot">
        <div><div class="eyebrow">Leitura</div><div class="count" id="doorCount">01:00</div></div>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <button class="btn ghost" id="doorBack">${ic("back")}Voltar</button>
          <button class="btn primary" id="doorGo">${ic("door")}Entrar na sala</button>
        </div>
      </div>
      <p class="note" style="margin:0;color:#5F6B74">Tempo de estação: ${c.tempo/60} minutos. Ao sinal sonoro, a estação é encerrada.</p>
    </article>
  </section>`;
  $("#doorBack").onclick = renderLobby;
  $("#doorGo").onclick = () => enterRoom(c);
  loopId = setInterval(() => {
    left--; const el = $("#doorCount"); if (el) el.textContent = fmt(left);
    if (left <= 0){ clearInterval(loopId); enterRoom(c); }
  }, 1000);
}
