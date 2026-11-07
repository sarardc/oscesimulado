(function () {
  'use strict';
  var KEY = 'osce-agenda-v1';
  var mem = null;
  var store = {
    get: function () { try { return JSON.parse(localStorage.getItem(KEY)); } catch (e) { return mem; } },
    set: function (v) { mem = v; try { localStorage.setItem(KEY, JSON.stringify(v)); } catch (e) {} }
  };
  var S = store.get() || {};
  S.done = S.done || {};
  S.pomos = S.pomos || {};
  S.seq = S.seq || 0;
  S.timer = S.timer || null;
  if (!S.topics) {
    S.topics = {};
    SUBJECTS.forEach(function (s) {
      S.topics[s.id] = s.topics.map(function (t) { return { id: 't' + (++S.seq), t: t, done: false }; });
    });
  }
  function save() { store.set(S); }

  var $app = document.getElementById('app');
  var $pill = document.getElementById('pill');
  var $nav = document.getElementById('nav');

  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function subj(id) { return SUBJECTS.filter(function (s) { return s.id === id; })[0]; }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function dkey(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function today() { return dkey(new Date()); }
  function daysTo(k) {
    var a = new Date(today() + 'T00:00:00'), b = new Date(k + 'T00:00:00');
    return Math.round((b - a) / 86400000);
  }
  function pct(a, b) { return b ? Math.round(100 * a / b) : 0; }

  /* ---------- progresso ---------- */
  function subjectCounts(sid) {
    var t = S.topics[sid] || [], n = PHASES.length + t.length, d = 0;
    PHASES.forEach(function (_, i) { if (S.done['p:' + sid + ':' + i]) d++; });
    t.forEach(function (x) { if (x.done) d++; });
    return { done: d, total: n };
  }
  function overall() {
    var d = 0, n = 0;
    SUBJECTS.forEach(function (s) { var c = subjectCounts(s.id); d += c.done; n += c.total; });
    return pct(d, n);
  }
  function blockTasks(day, bi) {
    var b = day.blocks[bi], id = day.d + '-' + bi;
    if (b.generic) return b.tasks.map(function (t, i) { return { key: 'g:' + id + ':' + i, label: t }; });
    return PHASES.map(function (t, i) { return { key: 'p:' + b.sid + ':' + i, label: t }; });
  }
  function blockPct(day, bi) {
    var ts = blockTasks(day, bi), d = ts.filter(function (t) { return S.done[t.key]; }).length;
    return pct(d, ts.length);
  }

  /* ---------- estado de tela ---------- */
  var V = { tab: 'agenda', day: null, sid: null };
  (function initDay() {
    var t = today(), first = SCHEDULE[0].d, last = SCHEDULE[SCHEDULE.length - 1].d;
    V.day = t < first ? first : t > last ? last : t;
  })();

  function ring(p, size) {
    return '<div class="ring" style="--p:' + p + ';--s:' + (size || 64) + 'px"><span>' + p + '%</span></div>';
  }

  /* ---------- agenda ---------- */
  function nextAction() {
    var day = SCHEDULE.filter(function (d) { return d.d === V.day; })[0];
    for (var bi = 0; bi < day.blocks.length; bi++) {
      var ts = blockTasks(day, bi);
      for (var i = 0; i < ts.length; i++) {
        if (!S.done[ts[i].key]) {
          var b = day.blocks[bi];
          return { name: b.generic ? b.title : subj(b.sid).name, time: b.time, label: ts[i].label, color: b.generic ? '#5b6b7a' : subj(b.sid).color };
        }
      }
    }
    return null;
  }

  function viewAgenda() {
    var dl = daysTo(EXAM_DATE);
    var head = dl > 0 ? 'Faltam <b>' + dl + '</b> dia' + (dl > 1 ? 's' : '') + ' para o OSCE'
      : dl === 0 ? '<b>É hoje!</b> Você estudou, confia.' : 'OSCE realizado. Parabéns pelo esforço!';
    var h = '<section class="hero"><div><p class="eyebrow">Quarta, 11/11</p><h1>' + head + '</h1>' +
      '<p class="muted">Pomodoros hoje: <b>' + (S.pomos[today()] || 0) + '</b></p></div>' + ring(overall(), 72) + '</section>';

    h += '<div class="chips">' + SCHEDULE.map(function (d) {
      var ds = d.blocks.map(function (_, i) { return blockPct(d, i); }), avg = ds.length ? Math.round(ds.reduce(function (a, b) { return a + b; }, 0) / ds.length) : 0;
      return '<button class="chip' + (d.d === V.day ? ' on' : '') + (d.d === today() ? ' now' : '') + '" data-act="day" data-d="' + d.d + '"><span>' + d.chip + '</span><b>' + d.d.slice(8) + '</b><i style="--w:' + avg + '%"></i></button>';
    }).join('') + '</div>';

    var day = SCHEDULE.filter(function (d) { return d.d === V.day; })[0];
    var na = nextAction();
    if (na) {
      h += '<section class="next" style="--c:' + na.color + '"><p class="eyebrow">Próxima ação · ' + esc(na.time) + '</p>' +
        '<h2>' + esc(na.name) + '</h2><p>' + esc(na.label) + '</p>' +
        '<button class="big" data-act="start">▶ Começar agora (25 min)</button>' +
        '<p class="tip">Só 5 minutos já valem. Abriu o material? Já começou.</p></section>';
    } else {
      h += '<section class="next ok"><h2>Dia concluído ✓</h2><p>Tudo marcado. Descanse — dormir bem também é estudar.</p></section>';
    }

    h += '<h3 class="sec">' + esc(day.label) + ' · ' + esc(day.title) + '</h3>';
    day.blocks.forEach(function (b, bi) {
      var s = b.generic ? null : subj(b.sid), color = s ? s.color : '#5b6b7a', p = blockPct(day, bi);
      h += '<article class="block" style="--c:' + color + '"><header><div><span class="time">' + esc(b.time) + '</span><h4>' + esc(s ? s.name : b.title) + '</h4></div>' +
        '<span class="pct">' + p + '%</span></header><ul class="tasks">';
      blockTasks(day, bi).forEach(function (t) {
        h += '<li><label><input type="checkbox" data-act="toggle" data-k="' + t.key + '"' + (S.done[t.key] ? ' checked' : '') + '><span>' + esc(t.label) + '</span></label></li>';
      });
      h += '</ul>';
      if (s) {
        var c = subjectCounts(s.id);
        h += '<button class="link" data-act="open" data-sid="' + s.id + '">Temas da matéria (' + (S.topics[s.id] || []).filter(function (x) { return x.done; }).length + '/' + (S.topics[s.id] || []).length + ') →</button>';
      }
      h += '</article>';
    });
    h += '<p class="foot">Os horários são sugestão — ajuste ao seu dia. O que importa é marcar o que foi feito.</p>';
    return h;
  }

  /* ---------- matérias ---------- */
  function viewMaterias() {
    var h = '<h1 class="title">Matérias</h1><div class="grid">';
    SUBJECTS.forEach(function (s) {
      var c = subjectCounts(s.id), p = pct(c.done, c.total);
      h += '<button class="card" style="--c:' + s.color + '" data-act="open" data-sid="' + s.id + '"><span class="dot"></span><b>' + esc(s.name) + '</b>' +
        '<small>' + c.done + '/' + c.total + ' itens</small><div class="bar"><i style="width:' + p + '%"></i></div></button>';
    });
    return h + '</div>';
  }

  function viewSubject() {
    var s = subj(V.sid), c = subjectCounts(s.id), ts = S.topics[s.id] || [];
    var h = '<button class="back" data-act="back">← Matérias</button><section class="hero" style="--c:' + s.color + '"><div><p class="eyebrow">Matéria</p><h1>' + esc(s.name) + '</h1>' +
      '<p class="muted">' + c.done + ' de ' + c.total + ' itens</p></div>' + ring(pct(c.done, c.total), 72) + '</section>';
    h += '<h3 class="sec">Etapas</h3><article class="block" style="--c:' + s.color + '"><ul class="tasks">';
    PHASES.forEach(function (t, i) {
      var k = 'p:' + s.id + ':' + i;
      h += '<li><label><input type="checkbox" data-act="toggle" data-k="' + k + '"' + (S.done[k] ? ' checked' : '') + '><span>' + esc(t) + '</span></label></li>';
    });
    h += '</ul></article><h3 class="sec">Temas (' + ts.length + ')</h3>';
    if (!ts.length) h += '<p class="empty">Nenhum tema ainda. Cole os temas abaixo, um por linha.</p>';
    else {
      h += '<article class="block" style="--c:' + s.color + '"><ul class="tasks">';
      ts.forEach(function (x) {
        h += '<li class="row"><label><input type="checkbox" data-act="ttoggle" data-id="' + x.id + '"' + (x.done ? ' checked' : '') + '><span>' + esc(x.t) + '</span></label>' +
          '<button class="x" aria-label="Remover" data-act="tdel" data-id="' + x.id + '">×</button></li>';
      });
      h += '</ul></article>';
    }
    h += '<div class="add"><textarea id="newtopics" rows="4" placeholder="Cole ou digite os temas — um por linha"></textarea>' +
      '<button class="big sec2" data-act="tadd">+ Adicionar temas</button></div>' +
      '<a class="link out" href="' + PLATFORM_URL + '" target="_blank" rel="noopener">Abrir os casos OSCE na plataforma ↗</a>';
    return h;
  }

  /* ---------- foco ---------- */
  function fmt(ms) { var s = Math.max(0, Math.ceil(ms / 1000)); return pad(Math.floor(s / 60)) + ':' + pad(s % 60); }
  function viewFoco() {
    var t = S.timer, h = '<h1 class="title">Foco</h1><section class="timer">';
    if (t) {
      h += '<p class="eyebrow">' + (t.mode === 'focus' ? 'Foco' : 'Pausa') + (t.label ? ' · ' + esc(t.label) : '') + '</p>' +
        '<div class="clock" id="clock">' + fmt(t.end - Date.now()) + '</div>' +
        '<button class="big sec2" data-act="stop">Parar</button>';
    } else {
      h += '<p class="eyebrow">Pomodoro</p><div class="clock">25:00</div>' +
        '<button class="big" data-act="start">▶ Começar 25 min</button>' +
        '<p class="tip">25 min de foco, 5 de pausa. Celular longe, só o material aberto.</p>';
    }
    h += '</section><p class="foot">Pomodoros hoje: <b>' + (S.pomos[today()] || 0) + '</b></p>';
    return h;
  }

  /* ---------- render ---------- */
  function render() {
    var scroll = window.scrollY;
    var html = V.tab === 'agenda' ? viewAgenda() : V.tab === 'foco' ? viewFoco() : V.sid ? viewSubject() : viewMaterias();
    $app.innerHTML = html;
    Array.prototype.forEach.call($nav.children, function (b) { b.classList.toggle('on', b.dataset.tab === V.tab); });
    updatePill();
    window.scrollTo(0, scroll);
  }

  /* ---------- timer ---------- */
  var tick = null;
  function beep() {
    try {
      var c = new (window.AudioContext || window.webkitAudioContext)(), o = c.createOscillator(), g = c.createGain();
      o.connect(g); g.connect(c.destination); o.frequency.value = 880; g.gain.value = 0.25; o.start();
      setTimeout(function () { o.stop(); c.close(); }, 700);
    } catch (e) {}
    try { if (navigator.vibrate) navigator.vibrate([200, 100, 200]); } catch (e) {}
  }
  function startTimer(mode, label) {
    S.timer = { mode: mode, end: Date.now() + (mode === 'focus' ? 25 : 5) * 60000, label: label || '' };
    save(); runTick(); render();
  }
  function runTick() {
    if (tick) clearInterval(tick);
    tick = setInterval(function () {
      if (!S.timer) { clearInterval(tick); tick = null; return; }
      var left = S.timer.end - Date.now();
      if (left <= 0) {
        var m = S.timer.mode, l = S.timer.label;
        beep();
        if (m === 'focus') { S.pomos[today()] = (S.pomos[today()] || 0) + 1; startTimer('break', 'Levante, beba água'); }
        else { S.timer = null; save(); render(); }
        return;
      }
      var c = document.getElementById('clock'); if (c) c.textContent = fmt(left);
      updatePill();
    }, 1000);
  }
  function updatePill() {
    if (S.timer && V.tab !== 'foco') { $pill.hidden = false; $pill.textContent = (S.timer.mode === 'focus' ? '⏱ ' : '☕ ') + fmt(S.timer.end - Date.now()); }
    else $pill.hidden = true;
  }

  /* ---------- eventos ---------- */
  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-act],[data-tab]');
    if (!el) return;
    if (el.dataset.tab) { V.tab = el.dataset.tab; if (V.tab !== 'materias') V.sid = null; render(); window.scrollTo(0, 0); return; }
    var a = el.dataset.act;
    if (a === 'toggle') { S.done[el.dataset.k] = el.checked; save(); render(); }
    else if (a === 'ttoggle') { S.topics[V.sid].forEach(function (x) { if (x.id === el.dataset.id) x.done = el.checked; }); save(); render(); }
    else if (a === 'tdel') { S.topics[V.sid] = S.topics[V.sid].filter(function (x) { return x.id !== el.dataset.id; }); save(); render(); }
    else if (a === 'tadd') {
      var ta = document.getElementById('newtopics'), lines = ta.value.split(/\n+/).map(function (x) { return x.replace(/^[\s\-–•*\d.)]+/, '').trim(); }).filter(Boolean);
      if (!lines.length) return;
      S.topics[V.sid] = (S.topics[V.sid] || []).concat(lines.map(function (t) { return { id: 't' + (++S.seq), t: t, done: false }; }));
      save(); render();
    }
    else if (a === 'day') { V.day = el.dataset.d; render(); }
    else if (a === 'open') { V.tab = 'materias'; V.sid = el.dataset.sid; render(); window.scrollTo(0, 0); }
    else if (a === 'back') { V.sid = null; render(); }
    else if (a === 'start') { var na = V.tab === 'agenda' ? nextAction() : null; startTimer('focus', na ? na.name : ''); if (V.tab === 'agenda') { V.tab = 'foco'; render(); window.scrollTo(0, 0); } }
    else if (a === 'stop') { S.timer = null; save(); render(); }
  });
  $pill.addEventListener('click', function () { V.tab = 'foco'; render(); });

  if (S.timer) { if (S.timer.end <= Date.now()) { S.timer = null; save(); } else runTick(); }
  render();

  if ('serviceWorker' in navigator && /^https?:/.test(location.protocol)) {
    try { navigator.serviceWorker.register('sw.js').catch(function () {}); } catch (e) {}
  }
})();
