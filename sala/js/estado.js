// Sala de Simulação · Preferências e estado da estação em curso.
// Script comum (não é módulo): compartilha o escopo global com os outros arquivos da sala,
// carregados em ordem pelo sala/index.html.
"use strict";
/* =========================================================================
   ESTADO E CAPACIDADES
   ========================================================================= */
const prefs = Object.assign({mode:"treino", voz:true, area:"Todas", monSom:true}, store.get("osce-sala-prefs", {}));
const savePrefs = () => store.set("osce-sala-prefs", prefs);
let CAP = {sample:null, tts:null, dict:null, aiOff:false};
let S = null;              // estado da estação em curso
let loopId = null, rafId = null;
