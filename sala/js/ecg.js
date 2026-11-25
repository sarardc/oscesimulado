// Sala de Simulação · Eletrocardiograma desenhado a partir da descrição do caso.
// Script comum (não é módulo): compartilha o escopo global com os outros arquivos da sala,
// carregados em ordem pelo sala/index.html.
"use strict";
/* =========================================================================
   ECG (traçado desenhado a partir de parâmetros por derivação)
   ========================================================================= */
const LEADS_NORMAL = {
  DI:{r:.8,s:.1,t:.25}, DII:{r:1.1,s:.15,t:.3}, DIII:{r:.5,s:.1,t:.12}, aVR:{r:.9,s:.1,t:.25,inv:1}, aVL:{r:.45,s:.1,t:.12}, aVF:{r:.8,s:.12,t:.2},
  V1:{r:.25,s:1.0,t:.08}, V2:{r:.5,s:1.3,t:.35}, V3:{r:.9,s:.8,t:.4}, V4:{r:1.4,s:.4,t:.4}, V5:{r:1.5,s:.2,t:.35}, V6:{r:1.1,s:.1,t:.3}
};
/* Monta os parâmetros do traçado a partir da descrição escrita do ECG (casos do repositório). */
function ecgFromText(text){
  const t = String(text||"").replace(/\bD([123])\b/g, (m, d) => "D" + "I".repeat(+d)), n = norm(t);
  const fcm = n.match(/fc(?: media)?\s*(?:de\s*)?(\d{2,3})/) || n.match(/(\d{2,3})\s*bpm/);
  const cfg = {fc: fcm ? +fcm[1] : 75, rhythm:"sinus", leads:{}};
  if (/fibrilacao ventricular/.test(n)) cfg.rhythm = "vf";
  else if (/(fibrilacao atrial|ausencia de ondas? p|rr (totalmente )?irregular|ondas f\b)/.test(n)) cfg.rhythm = "af";
  else if (/(taquicardia regular de complexo estreito|sem onda p visivel|taquicardia supraventricular|tpsv)/.test(n)) cfg.rhythm = "svt";
  const LD = ["DI","DII","DIII","aVR","aVL","aVF","V1","V2","V3","V4","V5","V6"];
  const leadsIn = seg => {
    const out = new Set(); const re = /\b(DIII|DII|DI|aVR|aVL|aVF|V[1-6])\b(?:\s*[–-]\s*(V[1-6]))?/g; let m;
    while ((m = re.exec(seg))) { if (m[2]) { for (let k = +m[1][1]; k <= +m[2][1]; k++) out.add("V"+k); } else out.add(m[1]); }
    return [...out];
  };
  const after = (re) => { const res = []; let m; const g2 = new RegExp(re.source, "gi"); while ((m = g2.exec(t))) { const rest = t.slice(m.index + m[0].length); res.push(rest.split(/[;.)]|\s(com|e sem|sem)\s/i)[0]); } return res; };
  const set = (lds, k, v) => lds.forEach(l => { cfg.leads[l] = Object.assign(cfg.leads[l]||{}, {[k]: v}); });
  const has = re => { const g2 = new RegExp(re.source, "g"); let m; while ((m = g2.exec(n))) { if (!/(nao ha|sem|ausencia de|nao apresenta)[^.;]{0,25}$/.test(n.slice(Math.max(0, m.index - 30), m.index))) return true; } return false; };
  after(/supra(desnivelamento)?\s*(do segmento\s*)?(de\s*)?st/).forEach(seg => { const lds = leadsIn(seg); set(lds, "st", .28); set(lds, "t", .45); });
  after(/infra(desnivelamento)?\s*(do segmento\s*)?(de\s*)?(st\s*)?/).forEach(seg => set(leadsIn(seg), "st", -.15));
  after(/ondas?\s*q/).forEach(seg => { const inc = /incipiente/i.test(seg); set(leadsIn(seg), "q", inc ? .18 : .32); });
  after(/invers(ao|ão)\s*(da onda\s*|de\s*)?t/).forEach(seg => set(leadsIn(seg), "t", -.22));
  if (has(/s1q3t3/)) { set(["DI"], "s", .5); set(["DIII"], "q", .3); set(["DIII"], "t", -.2); }
  if (has(/(hve|sobrecarga ventricular esquerda|sokolow)/)) {
    set(["V1"], "s", 1.9); set(["V2"], "s", 2.2); set(["V5"], "r", 2.2); set(["V6"], "r", 1.8); set(["aVL"], "r", .9);
    if (/(repolariza|strain)/.test(n)) { set(["V5","V6","DI","aVL"], "st", -.08); set(["V5","V6","DI","aVL"], "t", -.18); }
  }
  if (has(/(\bbre\b|bloqueio de ramo esquerdo)/)) {
    cfg.wide = true;
    set(["V1","V2","V3"], "bre", "neg"); set(["V1","V2","V3"], "st", .1); set(["V1","V2","V3"], "t", .35);
    set(["DI","aVL","V5","V6"], "bre", "pos"); set(["DI","aVL","V5","V6"], "st", -.1); set(["DI","aVL","V5","V6"], "t", -.25);
  }
  if (has(/(\bbrd\b|bloqueio de ramo direito)/)) { set(["V1"], "rp", .35); set(["DI","V6"], "s", .25); }
  return cfg;
}
function ecgSVG(cfg){
  const fc = cfg.fc||75, RR = 60/fc, L = {}, rh_ = cfg.rhythm || "sinus";
  for (const k in LEADS_NORMAL) L[k] = Object.assign({}, LEADS_NORMAL[k], (cfg.leads||{})[k]||{});
  const g = (x,mu,sd,a) => a*Math.exp(-((x-mu)**2)/(2*sd*sd));
  const sm = (x,a,b) => x<=a?0:x>=b?1:((x-a)/(b-a))**2*(3-2*((x-a)/(b-a)));
  // instantes de cada batimento (irregulares na FA; semente fixa para o traçado não mudar)
  let seed = 7; const rnd = () => (seed = (seed*16807) % 2147483647) / 2147483647;
  const beats = []; for (let t = -RR*.6; t < 11; ) { beats.push(t); t += rh_==="af" ? RR*(.55 + .9*rnd()) : RR; }
  const tbOf = t => { let b = beats[0]; for (const x of beats){ if (x <= t) b = x; else break; } return t - b; };
  const W = cfg.wide ? 1 : 0, sh = W ? .03 : 0;
  const v = (t, P) => {
    if (rh_==="assist") return .015*Math.sin(2*Math.PI*.5*t);
    if (rh_==="sine") { const tt = ((t % RR) + RR) % RR; const y = .85*Math.sin(2*Math.PI*tt/RR) * (P.r > .6 ? 1 : .7); return P.inv ? -y : y; }
    if (rh_==="tv") { const tb2 = ((t % RR) + RR) % RR; const A = (P.r - (P.s||.1)) >= 0 ? 1.1 : -1.1; const y = g(tb2,.09,.04,A) + g(tb2,.21,.055,-A*.55); return P.inv ? -y : y; }
    if (rh_==="vf") { const y = .45*Math.sin(2*Math.PI*4.3*t + (P.r||1)) + .3*Math.sin(2*Math.PI*6.1*t + 1) + .2*Math.sin(2*Math.PI*2.7*t + 2); return y; }
    const tb = tbOf(t);
    let y = 0;
    if (rh_==="sinus") y += g(tb,.08,.022,.12);
    if (rh_==="af") y += .035*Math.sin(2*Math.PI*6.7*t + (P.r||0)*3) + .02*Math.sin(2*Math.PI*10.9*t + 1.3);
    if (W) {
      if (P.bre==="neg") y += g(tb,.205,.012,.12) + g(tb,.25,.032,-(P.s||1.5));
      else if (P.bre==="pos") y += g(tb,.215,.022,P.r*.9) + g(tb,.255,.022,P.r);
      else y += g(tb,.22,.026,P.r) + g(tb,.26,.02,-(P.s||.1));
    } else {
      y += g(tb,.19,P.q?.016:.008,-(P.q||.04)) + g(tb,.215,.011,P.r) + g(tb,.24,.011,-(P.s||.1));
      if (P.rp) y += g(tb,.258,.009,P.rp);
    }
    y += (P.st||0) * sm(tb,.245+sh,.29+sh) * (1 - sm(tb,.40+sh,.48+sh));
    y += g(tb,.40+sh,P.tsd||.045,P.t);
    return P.inv ? -y : y;
  };
  const pxs = 100, mv = 40, cw = 250, rh = 110;
  const path = (lead, x0, y0, t0, dur) => { let d = ""; for (let t=0; t<=dur; t+=.004){ d += (t?"L":"M")+(x0+t*pxs).toFixed(1)+","+(y0 - v(t0+t, L[lead])*mv).toFixed(1); } return d; };
  const rows = [["DI","aVR","V1","V4"],["DII","aVL","V2","V5"],["DIII","aVF","V3","V6"]];
  let paths = "", labels = "";
  rows.forEach((row, ri) => row.forEach((ld, ci) => {
    const x0 = ci*cw, y0 = 62 + ri*rh;
    paths += `<path d="${path(ld, x0, y0, ci*2.5, 2.5)}"/>`;
    labels += `<text x="${x0+6}" y="${y0-34}">${ld}</text>`;
  }));
  const yR = 62 + 3*rh;
  paths += `<path d="${path("DII", 0, yR, 0, 10)}"/>`; labels += `<text x="6" y="${yR-34}">DII longo</text>`;
  const H = yR + 50;
  return `<svg viewBox="0 0 1000 ${H}" role="img" aria-label="Eletrocardiograma de 12 derivações">
    <defs><pattern id="s" width="4" height="4" patternUnits="userSpaceOnUse"><path d="M4 0H0V4" fill="none" stroke="#F3C9C9" stroke-width=".5"/></pattern>
    <pattern id="b" width="20" height="20" patternUnits="userSpaceOnUse"><rect width="20" height="20" fill="url(#s)"/><path d="M20 0H0V20" fill="none" stroke="#E79A9A" stroke-width=".9"/></pattern></defs>
    <rect width="1000" height="${H}" fill="#FFF8F6"/><rect width="1000" height="${H}" fill="url(#b)"/>
    <g fill="none" stroke="#1B1F24" stroke-width="1.35" stroke-linejoin="round">${paths}</g>
    <g font-family="IBM Plex Mono, monospace" font-size="13" fill="#1B1F24">${labels}<text x="994" y="${H-8}" text-anchor="end" font-size="11">25 mm/s · 10 mm/mV</text></g></svg>`;
}
