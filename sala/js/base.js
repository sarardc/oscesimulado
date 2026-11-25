// Sala de Simulação · Ícones e utilitários.
// Script comum (não é módulo): compartilha o escopo global com os outros arquivos da sala,
// carregados em ordem pelo sala/index.html.
"use strict";
/* =========================================================================
   ÍCONES
   ========================================================================= */
const I = {
  chat:'<path d="M4 5h16v11H9l-5 4z"/><path d="M8 9h8M8 12h5"/>',
  steth:'<path d="M6 3v6a5 5 0 0 0 10 0V3"/><path d="M11 14v2a4 4 0 0 0 8 0v-2"/><circle cx="19" cy="12" r="2"/>',
  flask:'<path d="M9 3h6M10 3v6L4.5 18.5A1.6 1.6 0 0 0 6 21h12a1.6 1.6 0 0 0 1.5-2.5L14 9V3"/><path d="M7 15h10"/>',
  folder:'<path d="M4 4h6l2 2h8v13H4z"/><path d="M8 11h8M8 15h5"/>',
  clip:'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M9 10l2 2 4-4M9 16h6"/>',
  syringe:'<path d="M18 2l4 4M15 5l4 4M17 7L8 16l-3 1 1-3 9-9"/><path d="M11 7l6 6M3 21l3-3"/>',
  stop:'<rect x="6" y="6" width="12" height="12" rx="2"/>',
  mic:'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
  send:'<path d="M4 12l16-8-6 16-2-6z"/>',
  close:'<path d="M6 6l12 12M18 6L6 18"/>',
  pulse:'<path d="M3 12h4l2-6 4 12 2-6h6"/>',
  vol:'<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a8 8 0 0 1 0 11"/>',
  door:'<path d="M5 21V3h11v18M3 21h18M13 12h.01"/>',
  back:'<path d="M15 6l-6 6 6 6"/>',
};
const ic = (n, cls="i") => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true">${I[n]}</svg>`;

/* =========================================================================
   UTILITÁRIOS
   ========================================================================= */
const $ = (s, el=document) => el.querySelector(s);
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const norm = s => String(s||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");
const fmt = sec => { sec = Math.max(0, Math.round(sec)); return String(Math.floor(sec/60)).padStart(2,"0")+":"+String(sec%60).padStart(2,"0"); };
const store = {
  get(k, d){ try{ const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; }catch(e){ return d; } },
  set(k, v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){} }
};
