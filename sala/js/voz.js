// Sala de Simulação · Voz e microfone do navegador.
// Script comum (não é módulo): compartilha o escopo global com os outros arquivos da sala,
// carregados em ordem pelo sala/index.html.
"use strict";
/* ---------- voz e microfone do próprio navegador (Web Speech API) ----------
   Fora do claude.ai não existe window.claude: a sala usa a síntese de voz e o
   reconhecimento de fala do navegador, com a mesma interface de CAP.tts / CAP.dict. */
function browserTTS(){
  const ss = window.speechSynthesis;
  if (!ss || typeof SpeechSynthesisUtterance === "undefined") return null;
  let voices = [];
  const load = () => { try{ voices = ss.getVoices() || []; }catch(e){ voices = []; } };
  load(); try{ ss.addEventListener("voiceschanged", load); }catch(e){}
  const ptVoice = () => {
    const pt = voices.filter(v => /^pt[-_]BR/i.test(v.lang)); const any = pt.length ? pt : voices.filter(v => /^pt/i.test(v.lang));
    return any.find(v => /google|natural|neural|luciana|francisca|thalita/i.test(v.name)) || any[0] || null;
  };
  return {
    speak(text, {voice, language} = {}){
      return new Promise(res => {
        try{
          ss.cancel();
          const u = new SpeechSynthesisUtterance(String(text).replace(/\([^)]*\)/g, " ").trim());
          u.lang = language || "pt-BR"; const v = ptVoice(); if (v) u.voice = v;
          // a voz do navegador é uma só: o tom diferencia enfermeira, criança, homem e mulher
          const pac = S?.c?.pac || {};
          if (voice === "airy") u.pitch = 1.2;
          else if (S?.c?.crianca && pac.idade >= 3) u.pitch = 1.45;
          else u.pitch = /^m/i.test(pac.sexo || "") ? .8 : 1.08;
          u.rate = pac.idade >= 70 ? .95 : 1.05;
          u.onend = u.onerror = () => res();
          ss.speak(u);
        }catch(e){ res(); }
      });
    },
    stop(){ try{ ss.cancel(); }catch(e){} },
  };
}
function browserDictation(){
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) return null;
  const cb = {partial:()=>{}, final:()=>{}, state:()=>{}};
  let rec = null, endWait = null;
  const fail = code => Object.assign(new Error(code), {code});
  return {
    onPartial(f){ cb.partial = f; }, onFinal(f){ cb.final = f; }, onState(f){ cb.state = f; },
    start({language} = {}){
      return new Promise((resolve, reject) => {
        try{ rec?.abort(); }catch(e){}
        let started = false;
        rec = new SR(); rec.lang = language || "pt-BR"; rec.continuous = true; rec.interimResults = true;
        rec.onstart = () => { started = true; cb.state({state:"listening"}); resolve(); };
        rec.onresult = e => {
          let interim = "";
          for (let i = e.resultIndex; i < e.results.length; i++){
            const r = e.results[i], t = r[0].transcript;
            if (r.isFinal) cb.final({text: " " + t.trim()}); else interim += t;
          }
          cb.partial({text: interim.trim()});
        };
        rec.onerror = e => {
          const code = /not-allowed|service-not-allowed/.test(e.error) ? "not_granted" : /audio-capture|network/.test(e.error) ? "unavailable" : e.error;
          if (!started) reject(fail(code));
        };
        rec.onend = () => { rec = null; cb.state({state:"idle"}); if (endWait){ endWait(); endWait = null; } };
        cb.state({state:"starting"});
        try{ rec.start(); }catch(e){ cb.state({state:"idle"}); reject(fail("unavailable")); }
      });
    },
    // espera o reconhecimento entregar o último trecho antes de resolver
    stop(){ return new Promise(res => { if (!rec) return res(); endWait = res; try{ rec.stop(); }catch(e){ res(); } setTimeout(() => { if (endWait){ endWait(); endWait = null; } }, 1500); }); },
  };
}
function wireDictation(dc){
  if (!dc) return;
  dc.onPartial(({text}) => { if (S && S.listening){ const inp = $("#say"); if (inp){ inp.value = (S.dictBase + " " + text).trim(); } } });
  dc.onFinal(({text}) => { if (S && S.listening){ S.dictBase = (S.dictBase + text).replace(/^\s+/,""); const inp = $("#say"); if (inp) inp.value = S.dictBase; } });
  dc.onState(({state}) => { if (!S) return; S.listening = state==="listening" || state==="starting"; const b = $("#micBtn"); if (b) b.setAttribute("aria-pressed", S.listening); const st = $("#stopRecBtn"); if (st) st.hidden = !S.listening; });
}
