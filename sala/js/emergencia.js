// Sala de Simulação · Ordens da emergência, sinais vitais e monitor.
// Script comum (não é módulo): compartilha o escopo global com os outros arquivos da sala,
// carregados em ordem pelo sala/index.html.
"use strict";
/* =========================================================================
   EMERGÊNCIA: ordens e sinais vitais dinâmicos
   ========================================================================= */
function giveOrder(id, fromChat){
  if (S?.c?.dyn) return dynOrder(id, fromChat);
  if (!S || S.orders[id]!=null) return;
  const t = now(), v = S.vit;
  S.orders[id] = t;
  const nurse = msg => { S.transcript.push({who:"enfermeira", text:msg, t:now()}); if (!fromChat) { showCaption(null, msg, "enfermeira"); speak(msg, "enfermeira"); } };
  switch(id){
    case "mov": S.mon = true; nurse("Paciente monitorizado e com acesso venoso calibroso no braço direito."); break;
    case "o2": nurse("Cateter nasal a 2 litros instalado."); setTimeout(()=>{ if(S) S.vit.sat = 96; }, 4000); break;
    case "glic": nurse("Glicemia capilar: 186."); break;
    case "aas": nurse("AAS 300 mg: ele mastigou."); break;
    case "p2y12": nurse("Segundo antiagregante administrado."); break;
    case "anticoag": nurse("Heparina em bolus feita."); break;
    case "nitrato":
      nurse("Isossorbida sublingual administrada.");
      setTimeout(() => { if (!S || S.ended) return; v.pas = 70; v.pad = 42; v.fc = 48; S.drop = true;
        const m = "Doutor! A pressão caiu para 70 por 42, ele está muito tonto e mais pálido!";
        S.transcript.push({who:"enfermeira", text:m, t:now()}); showCaption(null, m, "enfermeira"); speak(m, "enfermeira"); toast("Hipotensão grave após o nitrato.", "crit"); beep(990,.25); }, 4500);
      break;
    case "morfina": nurse("Morfina 2 mg feita, lentamente."); v.pas -= 6; break;
    case "bb":
      nurse("Metoprolol EV feito.");
      setTimeout(() => { if (!S || S.ended) return; v.fc = 40; v.pas -= 12; const m = "Doutor, a frequência caiu para 40 e a pressão está caindo!"; S.transcript.push({who:"enfermeira", text:m, t:now()}); showCaption(null, m, "enfermeira"); speak(m, "enfermeira"); toast("Bradicardia importante após o betabloqueador.", "crit"); beep(990,.25); }, 4000);
      break;
    case "sf": nurse("Soro fisiológico 500 mL correndo aberto."); S.fluid = true; break;
    case "icp": S.reperf = true; nurse("Hemodinâmica acionada: a sala fica pronta em cerca de 30 minutos. Vou preparar o paciente para o transporte."); break;
    case "trombolise": S.reperf = true; nurse("Tenecteplase em infusão, doutor."); toast("Com hemodinâmica disponível, a angioplastia primária seria a escolha.", "warn"); break;
  }
  if (S.drawer==="ordens" || S.drawer==="conversa") renderDrawer();
}
function evolveVitals(el){
  const v = S.vit, dt = .25;
  if (S.c.emergencia && !S.reperf) { v.pas = Math.max(78, v.pas - .02*dt*10); v.pad = Math.max(48, v.pad - .012*dt*10); }
  if (S.fluid) { v.pas = Math.min(112, v.pas + .25*dt*4); v.pad = Math.min(70, v.pad + .15*dt*4); if (v.fc < 58) v.fc += .05; }
  if (v.fc!=null) v.fc += (Math.random()-.5)*.15; if (v.sat!=null) v.sat = Math.min(99, Math.max(S.c.emergencia ? 88 : 40, v.sat + (Math.random()-.5)*.05));
  const mon = $("#monitor");
  if (mon){
    const alarm = S.mon && (S.dyn?.pcr || S.dyn?.obito || (v.pas!=null && v.pas < 80) || (v.fc!=null && (v.fc < 45 || v.fc > 130)) || (v.sat!=null && v.sat < 90) || v.fr < 8);
    mon.classList.toggle("alarm", alarm);
    const tNow = performance.now();
    if (alarm && (!S.lastAlarm || tNow - S.lastAlarm > 6000)){ S.lastAlarm = tNow; alarmTone(); }
    const h = $("#mHR"); if (h){ h.textContent = v.fc==null ? "--" : Math.round(v.fc); $("#mSP").textContent = v.sat==null ? "--" : Math.round(v.sat); $("#mPA").textContent = v.pas==null ? "--/--" : `${Math.round(v.pas)}/${Math.round(v.pad)}`; $("#mFR").textContent = Math.round(v.fr||0); }
  }
}
function startMonitor(){
  const mon = $("#monitor"); if (!mon) return;
  const draw = () => {
    if (!S) return;
    if (!S.mon){
      if (!mon.dataset.off){ mon.dataset.off = 1; mon.innerHTML = `<div class="mh"><span>MONITOR · LEITO 2</span><span>—</span></div><div class="off">SEM SINAL<br>paciente não monitorizado</div>`; }
      rafId = requestAnimationFrame(draw); return;
    }
    if (mon.dataset.off !== "0"){
      mon.dataset.off = "0";
      mon.innerHTML = `<div class="mh"><span>MONITOR · LEITO 2</span><span>DII</span></div><canvas id="mCv" width="560" height="108"></canvas>
        <div class="vals"><div class="v hr"><small>FC</small><b id="mHR">--</b></div><div class="v sp"><small>SpO₂</small><b id="mSP">--</b></div><div class="v pa"><small>PNI</small><b id="mPA">--</b></div><div class="v fr"><small>FR</small><b id="mFR">--</b></div></div>`;
      S.sweep = 0;
    }
    const cv = $("#mCv"); if (!cv) return;
    const ctx = cv.getContext("2d"), W = cv.width, Hh = cv.height;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pxPerSec = 110, RR = 60 / Math.max(20, S.vit.fcDraw || S.vit.fc || 60), rit = S.vit.ritmo || "sinus";
    const val = tt => { const tb = ((tt % RR)+RR)%RR; const g=(x,m,s,a)=>a*Math.exp(-((x-m)**2)/(2*s*s));
      if (rit==="fv") return .45*Math.sin(2*Math.PI*4.3*tt) + .3*Math.sin(2*Math.PI*6.1*tt+1) + .2*Math.sin(2*Math.PI*2.7*tt+2);
      if (rit==="assist") return .02*Math.sin(2*Math.PI*.4*tt);
      if (rit==="sine") return .8*Math.sin(2*Math.PI*tb/RR);
      if (rit==="tv") return g(tb,.09,.04,1.1) + g(tb,.21,.055,-.6);
      if (rit==="hyperk") return g(tb,.2,.03,.6) - g(tb,.26,.03,.3) + g(tb,.45,.03,.95);
      if (rit==="peaked") return g(tb,.215,.011,1) + g(tb,.24,.011,-.15) + g(tb,.4,.025,.75);
      return g(tb,.08,.022,.12)+g(tb,.19,.008,-.05)+g(tb,.215,.011,1)+g(tb,.24,.011,-.15)+ .3*(tb>.25&&tb<.45?1:0)*Math.sin(Math.PI*(tb-.25)/.2)*.6 + g(tb,.4,.045,.28); };
    if (reduce){
      ctx.fillStyle="#05080A"; ctx.fillRect(0,0,W,Hh); ctx.strokeStyle="#4BE37A"; ctx.lineWidth=2; ctx.beginPath();
      for (let x=0;x<W;x++){ const y = Hh*.65 - val(x/pxPerSec)*Hh*.5; x?ctx.lineTo(x,y):ctx.moveTo(x,y); } ctx.stroke();
      const beatLoop = () => { if (!S || S.ended || !S.mon) return; pulseBeep(); S.beatTimer = setTimeout(beatLoop, 60000 / Math.max(20, S.vit.fc)); };
      if (!S.beatTimer) beatLoop();
      return;
    }
    const nowT = performance.now(); const dtS = Math.min(.1, ((nowT - (S.lastFrame || nowT)) / 1000)); S.lastFrame = nowT;
    S.sweepAcc = (S.sweepAcc || 0) + dtS * pxPerSec;
    const step = Math.floor(S.sweepAcc); S.sweepAcc -= step;
    for (let k=0;k<step;k++){
      const bi = Math.floor((S.sweep / pxPerSec - .215) / RR);
      if (S.beatIdx !== undefined && bi > S.beatIdx) pulseBeep();
      S.beatIdx = bi;
      const x = S.sweep % W, tt = S.sweep / pxPerSec;
      ctx.fillStyle="#05080A"; ctx.fillRect(x, 0, 14, Hh);
      const y = Hh*.65 - val(tt)*Hh*.5, yp = Hh*.65 - val((S.sweep-1)/pxPerSec)*Hh*.5;
      ctx.strokeStyle="#4BE37A"; ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(Math.max(0,x-1), yp); ctx.lineTo(x, y); ctx.stroke();
      S.sweep++;
    }
    rafId = requestAnimationFrame(draw);
  };
  draw();
}
function stopLoops(){ if (loopId) clearInterval(loopId); loopId = null; if (S?.beatTimer){ clearTimeout(S.beatTimer); S.beatTimer = null; } if (rafId) cancelAnimationFrame(rafId); rafId = null; try{ CAP.tts?.stop?.(); }catch(e){} try{ if (S?.listening) CAP.dict?.stop(); }catch(e){} }
