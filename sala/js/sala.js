// Sala de Simulação · A sala: cena, cronômetro, sons e legendas.
// Script comum (não é módulo): compartilha o escopo global com os outros arquivos da sala,
// carregados em ordem pelo sala/index.html.
"use strict";
/* =========================================================================
   SALA
   ========================================================================= */
function enterRoom(c){
  stopLoops();
  unlockAudio();
  beep(880, .18);
  S = {
    c, mode:prefs.mode, t0:performance.now(), elapsed:0, ended:false,
    transcript:[], topics:{}, man:{}, exams:{}, orders:{}, com:{},
    hip:"", dif:"", conduta:"", notas:"",
    drawer:null, talkTo:"paciente", busy:false, unread:0, dictBase:"", listening:false,
    warned:{}, vitalsAsked:false,
    vit: c.monitor ? {fc:c.vitIni.fc, pas:c.vitIni.pas, pad:c.vitIni.pad||Math.round(c.vitIni.pas*.62), sat:c.vitIni.sat ?? null, fr:c.vitIni.fr||18} : {fc:52, pas:94, pad:60, sat:93, fr:22}, mon:!!c.monitor, reperf:false,
    findingsOpen:{},
  };
  if (c.dyn){ S.dyn = initDyn(c); S.vit = {}; S.mon = false; dynTick(); }
  $("#app").innerHTML = `
  <section class="room">
    <header class="topbar">
      <button class="iconbtn" id="exitBtn" title="Sair da estação" aria-label="Sair da estação">${ic("back")}</button>
      <div class="who"><b>${esc(c.pac.nome)}, ${idadeStr(c.pac)}</b><span>${esc(c.local)}</span></div>
      <div class="sp"></div>
      <span class="hide-sm">${aiChip()}</span>
      <span class="chip hide-sm">${S.mode==="prova"?"Prova":"Treino"}</span>
      ${c.emergencia || c.monitor || c.dyn ? `<button class="iconbtn" id="monSomBtn" aria-pressed="${prefs.monSom}" title="Som do monitor" aria-label="Som do monitor">${ic("pulse")}</button>` : ""}
      <button class="iconbtn" id="voiceBtn" aria-pressed="${prefs.voz}" title="Voz do paciente" aria-label="Voz do paciente" ${CAP.tts?"":"hidden"}>${ic("vol")}</button>
      <div class="timer" id="timer" role="timer" aria-live="off">${fmt(c.tempo)}</div>
      <button class="btn danger hide-sm" id="endBtn">Encerrar</button>
    </header>
    <div class="main">
      <div class="stage" id="stage">
        ${c.img ? "" : `<div class="noscene" aria-hidden="true">${ic("steth")}<span>Sem ilustração para este caso</span></div>`}<img class="scene" ${c.img ? "" : "hidden"} src="${c.img || ""}" alt="Cena: ${esc(c.pac.nome)} ${c.emergencia?"na sala de emergência":"no consultório"}" style="object-position:${c.focus}">
        <div class="vignette"></div>
        ${c.emergencia || c.monitor || c.dyn ? `<div class="monitor" id="monitor"></div>` : ""}
        <div class="toast-wrap" id="toasts" aria-live="polite"></div>
        <div class="caption" id="caption" aria-live="polite"></div>
      </div>
      <nav class="rail" id="rail" aria-label="Ferramentas">
        ${tool("conversa","chat","Conversa")}
        ${tool("exame","steth","Exame físico")}
        ${tool("exames","flask","Exames")}
        ${c.emergencia || c.dyn ? tool("ordens","syringe","Ordens") : ""}
        ${tool("prontuario","folder","Prontuário")}
        ${tool("conduta","clip","Hipótese e conduta")}
        <button class="tool" id="endBtn2" style="color:var(--crit)">${ic("close")}Encerrar</button>
      </nav>
      <div id="drawerHost"></div>
    </div>
    <form class="composer" id="composer" autocomplete="off">
      ${c.emergencia || c.dyn ? `<select id="talkTo" aria-label="Falar com"><option value="paciente">Paciente</option><option value="enfermeira">Enf. Carla</option></select>` : ""}
      <input id="say" placeholder="${c.emergencia || c.dyn ? "Fale com o paciente ou dê ordens à enfermeira…" : c.equipe ? "Fale com a equipe, a família ou o paciente…" : c.crianca ? (c.pac.idade < 2 ? "Converse com a mãe…" : "Converse com a mãe ou com a criança…") : c.repo ? "Converse com o paciente…" : `Converse com ${esc(c.pac.trat)}…`}" aria-label="Sua fala">
      <button type="button" class="iconbtn mic" id="micBtn" aria-pressed="false" title="Falar (microfone)" aria-label="Falar pelo microfone" ${CAP.dict?"":"hidden"}>${ic("mic")}</button>
      <button type="button" class="btn rec-stop" id="stopRecBtn" hidden title="Parar de gravar e enviar">${ic("stop")}<span>Parar</span></button>
      <button class="btn primary" id="sendBtn" type="submit">${ic("send")}<span class="hide-sm">Enviar</span></button>
    </form>
  </section>`;
  document.body.style.overflow = "hidden";
  showCaption(null, c.emergencia ? "Seu Antônio geme baixinho, com a mão fechada sobre o peito." : c.dyn ? "A enfermeira Carla aguarda as suas ordens. O tempo está correndo." : `${c.equipe ? "A equipe aguarda as suas orientações." : c.crianca ? (c.pac.idade < 2 ? "A mãe aguarda com o bebê no colo." : "A criança aguarda com a mãe, sentada ao lado (fora da imagem).") : (c.repo ? "O paciente" : c.pac.trat)+" aguarda você começar."}${c.repo ? " A ilustração é genérica; os dados do paciente estão no enunciado." : ""}`, "cena");

  $("#composer").onsubmit = e => { e.preventDefault(); const v = $("#say").value.trim(); if (v) { $("#say").value=""; S.dictBase=""; say(v); } };
  $("#exitBtn").onclick = () => confirmInline("Sair sem corrigir? O tempo e as respostas desta tentativa serão perdidos.", renderLobby);
  $("#endBtn").onclick = $("#endBtn2").onclick = () => confirmInline("Encerrar a estação agora e ver a correção?", () => endStation("manual"));
  const mb = $("#monSomBtn"); if (mb) mb.onclick = () => { prefs.monSom = !prefs.monSom; savePrefs(); mb.setAttribute("aria-pressed", prefs.monSom); if (prefs.monSom) unlockAudio(); };
  const vb = $("#voiceBtn"); vb.onclick = () => { prefs.voz = !prefs.voz; savePrefs(); vb.setAttribute("aria-pressed", prefs.voz); if (!prefs.voz) CAP.tts?.stop?.(); };
  const tt = $("#talkTo"); if (tt) tt.onchange = () => { S.talkTo = tt.value; $("#say").focus(); };
  $("#micBtn").onclick = toggleMic;
  $("#stopRecBtn").onclick = stopRec;
  document.querySelectorAll("[data-tool]").forEach(b => b.onclick = () => openDrawer(b.dataset.tool === S.drawer ? null : b.dataset.tool));
  if (c.emergencia || c.monitor || c.dyn) startMonitor();
  if (c.abertura){ const ab = c.abertura; S.topics[ab.id] = {t:0, q:"(relato inicial)"}; S.transcript.push({who:"paciente", label:ab.quem, text:ab.r, t:0}); setTimeout(() => { if (S && S.c===c){ showCaption(null, ab.r, "paciente", null, ab.quem); speak(ab.r, "paciente"); } }, 600); }
  loopId = setInterval(tick, 250);
  $("#say").focus();
}
const tool = (id, icon, label) => `<button class="tool" data-tool="${id}" aria-pressed="false">${ic(icon)}<span>${label}</span><span class="badge" data-badge="${id}" hidden></span></button>`;
const now = () => S ? (performance.now() - S.t0)/1000 : 0;

function tick(){
  if (!S || S.ended) return;
  const c = S.c, el = now(), rem = c.tempo - el;
  const t = $("#timer"); if (t){ t.textContent = fmt(rem); t.className = "timer" + (rem<=30 ? " crit" : rem<=120 ? " warn" : ""); }
  if (rem<=120 && !S.warned.w2){ S.warned.w2=1; beep(660,.12); toast("Faltam 2 minutos.", "warn"); }
  if (rem<=30 && !S.warned.w30){ S.warned.w30=1; beep(660,.12); setTimeout(()=>beep(660,.12),200); }
  if (c.dyn) dynTick();
  if (c.emergencia || c.monitor || c.dyn) evolveVitals(el);
  if (rem <= 0) endStation("tempo");
}

function confirmInline(msg, yes){
  const host = $("#toasts"); if (!host) return yes();
  const d = document.createElement("div");
  d.className = "toast warn"; d.style.pointerEvents = "auto";
  d.innerHTML = `<div style="display:grid;gap:8px"><span>${esc(msg)}</span><div style="display:flex;gap:8px;justify-content:flex-end"><button class="btn ghost" data-a="n">Continuar na estação</button><button class="btn primary" data-a="y">Confirmar</button></div></div>`;
  host.appendChild(d);
  d.querySelector('[data-a="n"]').onclick = () => d.remove();
  d.querySelector('[data-a="y"]').onclick = () => { d.remove(); yes(); };
}
function toast(msg, kind=""){
  const host = $("#toasts"); if (!host) return;
  const d = document.createElement("div"); d.className = "toast " + kind; d.textContent = msg; host.appendChild(d);
  setTimeout(() => d.remove(), 5200);
}
let actx = null;
function unlockAudio(){ try{ actx = actx || new (window.AudioContext || window.webkitAudioContext)(); if (actx.state === "suspended") actx.resume(); }catch(e){} }
function tone(f, dur, vol=.08, when=0, type="sine"){
  try{
    unlockAudio(); if (!actx) return;
    const t0 = actx.currentTime + when, o = actx.createOscillator(), g = actx.createGain();
    o.type = type; o.frequency.value = f;
    g.gain.setValueAtTime(0, t0); g.gain.linearRampToValueAtTime(vol, t0 + .006); g.gain.setValueAtTime(vol, t0 + dur - .015); g.gain.linearRampToValueAtTime(0, t0 + dur);
    o.connect(g); g.connect(actx.destination); o.start(t0); o.stop(t0 + dur + .02);
  }catch(e){}
}
function beep(f, dur){ tone(f, dur, .08); }
/* Bipe do oxímetro: tom cai conforme a saturação (como nos monitores reais). */
function pulseBeep(){
  if (!S || S.ended || !S.mon || !prefs.monSom || S.dyn?.pcr || S.dyn?.obito || S.vit.fc == null) return;
  const sat = S.vit.sat == null ? 97 : S.vit.sat;
  if (S.vit.ritmo === "fv" || S.vit.ritmo === "assist") return;
  tone(Math.max(330, Math.min(980, 980 - (100 - sat) * 26)), .085, .045, 0, "triangle");
}
/* Alarme de prioridade alta: 3 + 2 pulsos (padrão IEC 60601-1-8). */
function alarmTone(){
  if (!prefs.monSom) return;
  [0, .2, .4, .9, 1.1].forEach(w => tone(988, .13, .06, w, "square"));
}

/* ---------- legenda (fala) ---------- */
function showCaption(meText, otherText, speaker, emo, label){
  const cap = $("#caption"); if (!cap) return;
  let h = "";
  if (meText) h += `<div class="cap me"><div class="spk">Você</div>${esc(meText)}</div>`;
  if (otherText === "…") h += `<div class="cap"><div class="spk">${esc(S?.c.equipe ? "Equipe / paciente" : speakerName(speaker))}</div><span class="dots"><span></span><span></span><span></span></span></div>`;
  else if (otherText) h += `<div class="cap"><div class="spk">${esc(label || speakerName(speaker))}${emo && emo!=="neutro" ? `<span class="emo">· parece ${esc(emo)}</span>` : ""}</div>${esc(otherText)}</div>`;
  cap.innerHTML = h;
}
const speakerName = sp => sp==="enfermeira" ? "Enf. Carla" : sp==="cena" ? "Cena" : (S?.c.repo ? "Paciente" : (S?.c.pac.trat || "Paciente"));

/* ---------- microfone ---------- */
function stopRec(){
  const d = CAP.dict; if (!d || !S) return;
  const st = $("#stopRecBtn"); if (st) st.hidden = true;
  d.stop().then(() => { const v = $("#say")?.value.trim(); if (v){ $("#say").value=""; S.dictBase=""; say(v); } }).catch(()=>{});
}
function toggleMic(){
  const d = CAP.dict; if (!d || !S) return;
  if (S.listening){ stopRec(); } else {
    S.dictBase = $("#say").value.trim();
    d.start({language:"pt-BR"}).catch(e => {
      if (e?.code === "not_granted" || e?.code === "unavailable"){ $("#micBtn").hidden = true; toast("Microfone indisponível. Continue digitando.", "warn"); }
    });
  }
}
