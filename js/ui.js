let activeFilter = 'all';

function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function toList(val) {
  if (!val) return [];
  if (Array.isArray(val)) return val;
  return String(val).split('|').map(s => s.trim()).filter(Boolean);
}

function setFilter(tema) {
  activeFilter = tema;
  const normTema = tema.toLowerCase();
  let label = 'Todas';
  document.querySelectorAll('.filter-btn').forEach(btn => {
    const isActive = (btn.dataset.tema || '').toLowerCase() === normTema;
    btn.classList.toggle('active', isActive);
    if (isActive) label = btn.textContent.trim();
  });

  const currentEl = document.getElementById('filter-toggle-current');
  if (currentEl) currentEl.textContent = label;

  // No mobile, recolhe o painel de filtros após escolher um tema para liberar espaço para os cards
  const sidebar = document.getElementById('filter-sidebar');
  const arr = document.getElementById('filter-toggle-arr');
  if (sidebar && sidebar.classList.contains('expanded')) {
    sidebar.classList.remove('expanded');
    if (arr) arr.textContent = '▾';
  }

  renderCards();
}

function showTab(idx) {
  document.querySelectorAll('.tab-btn').forEach((b, i) => b.classList.toggle('active', i === idx));
  document.querySelectorAll('.tab-content').forEach((c, i) => c.classList.toggle('active', i === idx));
}

function renderCards() {
  const grid = document.getElementById('cards-grid');
  grid.innerHTML = '';
  const norm = s => s.toLowerCase();
  const visible = activeFilter === 'all'
    ? stations
    : stations.filter(st => norm(st.tema) === norm(activeFilter));
  const countEl = document.getElementById('filter-count');
  if (countEl) countEl.textContent = `(${visible.length})`;
  visible.forEach(st => {
    const levelClass = `pill-level-${st.level}`;
    const temaClass = `pill-${String(st.tema).toLowerCase().replace(/\s+/g, '-')}`;
    const card = document.createElement('div');
    card.className = 'card';
    card.style.setProperty('--card-accent', st.cardAccent);
    card.innerHTML = `
      <div class="card-num">ESTAÇÃO ${st.id}</div>
      <div class="card-title">${esc(st.title)}</div>
      <div class="card-sub">${esc(st.sub)}</div>
      <div class="card-meta">
        <span class="pill ${temaClass}">${esc(st.tema)}</span>
        <span class="pill ${levelClass}">${esc(st.level)}</span>
      </div>`;
    card.onclick = () => openStation(st.id);
    grid.appendChild(card);
  });
}

// Os botões abaixo não levam onclick="" inline (bloqueado pela CSP sem
// 'unsafe-inline'); um único listener delegado em .tabs-nav (ligado uma vez
// em app.js) lê o atributo data-tab-idx de cada botão.
function buildTabsNav(st) {
  const nav = document.querySelector('.tabs-nav');
  if (st.id >= 30) {
    nav.innerHTML = `
      <button class="tab-btn active" data-tab-idx="0"><span class="tab-key">A</span><span class="tab-desc">Instruções ao Candidato</span></button>
      <button class="tab-btn" data-tab-idx="1"><span class="tab-key">B</span><span class="tab-desc">Impressos</span></button>
      <button class="tab-btn" data-tab-idx="2"><span class="tab-key">B1</span><span class="tab-desc">Script do Paciente</span></button>
      <button class="tab-btn" data-tab-idx="3"><span class="tab-key">C</span><span class="tab-desc">Gabarito do Avaliador</span></button>
      <button class="tab-btn" data-tab-idx="4"><span class="tab-key">D</span><span class="tab-desc">Checklist</span></button>`;
  } else {
    nav.innerHTML = `
      <button class="tab-btn active" data-tab-idx="0"><span class="tab-key">A</span><span class="tab-desc">Instruções ao Candidato</span></button>
      <button class="tab-btn" data-tab-idx="1"><span class="tab-key">B</span><span class="tab-desc">Impressos</span></button>
      <button class="tab-btn" data-tab-idx="2"><span class="tab-key">C</span><span class="tab-desc">Gabarito do Avaliador</span></button>
      <button class="tab-btn" data-tab-idx="3"><span class="tab-key">D</span><span class="tab-desc">Material de Estudo</span></button>`;
  }
}

function renderTabs(st) {
  if (st.id >= 30) {
    document.getElementById('tab0').innerHTML = renderTabA(st);
    document.getElementById('tab1').innerHTML = renderTabBExamsOnly(st);
    document.getElementById('tab2').innerHTML = renderTabB1Script(st);
    document.getElementById('tab3').innerHTML = renderTabC(st);
    document.getElementById('tab4').innerHTML = renderTabD(st);
    document.getElementById('tab4').style.display = '';
  } else {
    document.getElementById('tab0').innerHTML = renderTabA(st);
    document.getElementById('tab1').innerHTML = renderTabB(st);
    document.getElementById('tab2').innerHTML = renderTabC(st);
    document.getElementById('tab3').innerHTML = renderTabD(st);
    document.getElementById('tab4').innerHTML = '';
    document.getElementById('tab4').style.display = 'none';
  }
}

// ── TAB A — Instruções ao Candidato ─────────────────────────────────────────

function renderTabA(st) {
  const a = st.instA;
  return `
    <div class="section-block">
      <h3>Cenário de Atendimento</h3>
      <p>${esc(a.scenario)}</p>
    </div>
    <div class="section-block">
      <h3>Identificação do Paciente</h3>
      <p>${esc(a.patient)}</p>
    </div>
    <div class="section-block">
      <h3>Queixa Principal</h3>
      <p class="complaint-text">${esc(a.complaint)}</p>
    </div>
    <div class="section-block">
      <h3>Tarefas a Executar</h3>
      <ul class="task-list">
        ${a.tasks.map((t, i) => `<li><span class="task-num">${i + 1}</span>${esc(t)}</li>`).join('')}
      </ul>
    </div>
    <div class="alert alert-info">
      ⏱ <strong>10 minutos</strong> Inicie o timer e comece a consulta. Solicite os achados do exame físico e exames complementares que julgar necessários.
    </div>
    <div class="alert alert-warn">
      ⚠ Não são fornecidas pistas sobre o diagnóstico. Raciocine com base na anamnese e nos exames solicitados.
    </div>`;
}

// ── TAB B — Impressos (Sinais Vitais, Exames, Script) ────────────────────────

function renderExamsBlock(b) {
  let html = `<div class="impression-box">
    <h4>Impresso — Sinais Vitais e Exame Físico</h4>
    <div class="vt">
      <div class="vt-item"><span class="vt-label">PA:</span><span class="vt-val">${esc(b.vitals.PA)}</span></div>
      <div class="vt-item"><span class="vt-label">FC:</span><span class="vt-val">${esc(b.vitals.FC)}</span></div>
      <div class="vt-item"><span class="vt-label">FR:</span><span class="vt-val">${esc(b.vitals.FR)}</span></div>
      <div class="vt-item"><span class="vt-label">Tax:</span><span class="vt-val">${esc(b.vitals.Tax)}</span></div>
      <div class="vt-item"><span class="vt-label">Peso:</span><span class="vt-val">${esc(b.vitals.Peso)}</span></div>
      <div class="vt-item"><span class="vt-label">Altura:</span><span class="vt-val">${esc(b.vitals.Altura)}</span></div>
      <div class="vt-item"><span class="vt-label">IMC:</span><span class="vt-val">${esc(b.vitals.IMC)}</span></div>
    </div>
    <div class="mt-16">
      <div class="field-label">EXAME FÍSICO GERAL</div>
      <div class="field-value">${esc(b.physicalGeneral)}</div>
    </div>
    <div class="mt-14">
      <div class="field-label">EXAME SEGMENTAR</div>
      ${toList(b.physicalSeg).map(s => `<div class="seg-item">${esc(s)}</div>`).join('')}
    </div>
  </div>`;

  if (b.labs && b.labs.length) {
    html += `<div class="section-block">
      <h3>Impresso — Exames Laboratoriais</h3>
      <div class="table-scroll">
      <table class="lab-table">
        <tr><th>Exame</th><th>Resultado</th><th>Valor de Referência</th></tr>
        ${b.labs.map(l => `<tr>
          <td>${esc(l.test)}</td>
          <td class="${l.alt ? 'altered' : ''}">${esc(l.val)}</td>
          <td class="ref">${esc(l.ref)}</td>
        </tr>`).join('')}
      </table>
      </div>
    </div>`;
  }

  if (b.image) {
    if (typeof b.image === 'object' && b.image.title) {
      html += `<div class="impression-box">
        <h4>Impresso — ${esc(b.image.title)}</h4>
        <pre class="report-pre">${esc(b.image.report)}</pre>
      </div>`;
    } else if (typeof b.image === 'string') {
      html += `<div class="alert alert-info">🔬 <strong>Imagem:</strong> ${esc(b.image)}</div>`;
    }
  }

  if (b.note) {
    html += `<div class="alert alert-info mt-8">ℹ ${esc(b.note)}</div>`;
  }

  return html;
}

// Casos < 30: aba B com tudo (exames + script)
function renderTabB(st) {
  const b = st.instB;
  let html = renderExamsBlock(b);

  if (b.script && b.script.length) {
    html += `<div class="section-block">
      <h3>Script do Paciente Simulado</h3>
      ${b.script.map(s => `<div class="script-line">
        <div class="script-trigger">${esc(s.trigger)}</div>
        <div class="script-speech">"${esc(s.speech)}"</div>
      </div>`).join('')}
    </div>`;
  }

  if (b.hiddenInfo && b.hiddenInfo.length) {
    html += `<div class="section-block">
      <h3>Informações Escondidas</h3>
      <div class="hidden-info-list">
        ${toList(b.hiddenInfo).map(h => `<div class="alert alert-warn m-0">🔒 ${esc(h)}</div>`).join('')}
      </div>
    </div>`;
  }

  if (b.actorBehavior) {
    html += `<div class="alert alert-info mt-8">🎭 <strong>Comportamento do Ator:</strong> ${esc(b.actorBehavior)}</div>`;
  }

  return html;
}

// Casos >= 30: aba B somente com exames
function renderTabBExamsOnly(st) {
  return renderExamsBlock(st.instB);
}

// Casos >= 30: aba B1 com script do paciente
function renderTabB1Script(st) {
  const b = st.instB;
  let html = '';

  if (b.script && b.script.length) {
    html += `<div class="section-block">
      <h3>Script do Paciente Simulado</h3>
      ${b.script.map(s => `<div class="script-line">
        <div class="script-trigger">${esc(s.trigger)}</div>
        <div class="script-speech">"${esc(s.speech)}"</div>
      </div>`).join('')}
    </div>`;
  }

  if (b.hiddenInfo && b.hiddenInfo.length) {
    html += `<div class="section-block">
      <h3>Informações Escondidas</h3>
      <div class="hidden-info-list">
        ${toList(b.hiddenInfo).map(h => `<div class="alert alert-warn m-0">🔒 ${esc(h)}</div>`).join('')}
      </div>
    </div>`;
  }

  if (b.actorBehavior) {
    html += `<div class="alert alert-info mt-8">🎭 <strong>Comportamento do Ator:</strong> ${esc(b.actorBehavior)}</div>`;
  }

  if (!html) {
    html = `<div class="empty-state">Nenhum script disponível para esta estação.</div>`;
  }

  return html;
}

// ── TAB C — Gabarito do Avaliador ────────────────────────────────────────────

function renderPepTable(sections, startIndex) {
  let idx = startIndex;
  let rows = '';
  // Support flat array [{item, score}] (legacy) and sectioned [{h/section, items:[...]}] (new)
  if (sections.length && sections[0].items === undefined) {
    sections = [{ h: '', items: sections }];
  }
  sections.forEach(sec => {
    const heading = sec.section || sec.h;
    if (heading) rows += `<tr><td colspan="3" class="pep-section">${esc(heading)}</td></tr>`;
    sec.items.forEach(item => {
      rows += `<tr>
        <td>${esc(item.item)}</td>
        <td class="pep-score" id="score-${idx}">${item.score.toFixed(1)}</td>
        <td class="pep-checkbox-cell">
          <input type="checkbox" id="checkbox-${idx}" class="pep-checkbox" aria-label="Marcar item da PEP"
            data-idx="${idx}" data-score="${item.score}">
        </td>
      </tr>`;
      idx++;
    });
  });
  return rows;
}

function renderTabC(st) {
  const c = st.instC;

  let html = `<div class="alert alert-warn">⚠ Esta aba é restrita ao avaliador. Não abrir antes do término da estação.</div>
    <div class="section-block">
      <h3>Diagnóstico</h3>
      <p class="diagnosis-text">${esc(c.diagnosis)}</p>
      <p class="mt-10">${esc(c.context)}</p>
      <p class="justify-text">${esc(c.justify)}</p>
    </div>`;

  // Diagnósticos diferenciais (novo schema)
  if (c.differentials && c.differentials.length) {
    html += `<div class="section-block">
      <h3>Diagnósticos Diferenciais</h3>
      <ul class="expected-list">
        ${c.differentials.map(d => `<li>${d}</li>`).join('')}
      </ul>
    </div>`;
  }

  // Anamnese esperada (novo schema)
  if (c.expectedAnamnesis && c.expectedAnamnesis.length) {
    html += `<div class="section-block">
      <h3>Anamnese Esperada</h3>
      <ul class="expected-list">
        ${toList(c.expectedAnamnesis).map(i => `<li>${esc(i)}</li>`).join('')}
      </ul>
    </div>`;
  }

  // Exame físico esperado (novo schema)
  if (c.expectedPhysical && c.expectedPhysical.length) {
    html += `<div class="section-block">
      <h3>Exame Físico Esperado</h3>
      <ul class="expected-list">
        ${toList(c.expectedPhysical).map(i => `<li>${esc(i)}</li>`).join('')}
      </ul>
    </div>`;
  }

  // Exames complementares esperados (novo schema)
  if (c.expectedExams && c.expectedExams.length) {
    html += `<div class="section-block">
      <h3>Exames Complementares Esperados</h3>
      <div class="table-scroll">
      <table class="lab-table">
        <tr><th>Exame</th><th>Justificativa</th><th>Resultado Esperado</th></tr>
        ${c.expectedExams.map(e => `<tr><td>${esc(e.exam)}</td><td>${esc(e.justify)}</td><td>${esc(e.expected)}</td></tr>`).join('')}
      </table>
      </div>
    </div>`;
  }

  // Conduta esperada (novo schema)
  if (c.expectedConduct && c.expectedConduct.length) {
    html += `<div class="section-block">
      <h3>Conduta Esperada</h3>
      <ul class="expected-list">
        ${toList(c.expectedConduct).map(i => `<li>${esc(i)}</li>`).join('')}
      </ul>
    </div>`;
  }

  // Comunicação esperada (novo schema)
  if (c.expectedCommunication && c.expectedCommunication.length) {
    html += `<div class="section-block">
      <h3>Comunicação Esperada</h3>
      <ul class="expected-list">
        ${toList(c.expectedCommunication).map(i => `<li>${esc(i)}</li>`).join('')}
      </ul>
    </div>`;
  }

  // Script do paciente (schema antigo: instC.script)
  if (c.script && c.script.length) {
    html += `<div class="section-block">
      <h3>Script do Paciente Simulado</h3>
      ${c.script.map(s => `<div class="script-line">
        <div class="script-trigger">${esc(s.trigger)}</div>
        <div class="script-speech">"${esc(s.speech)}"</div>
      </div>`).join('')}
    </div>`;
  }

  // PEP (schema antigo: instC.pep)
  if (c.pep && c.pep.length) {
    const rows = renderPepTable(c.pep, 0);
    html += `<div class="section-block">
      <h3>PEP — Padrão Esperado de Procedimentos</h3>
      <div class="table-scroll">
      <table class="pep-table">
        <tr><th>Item Avaliado</th><th class="col-points">Pontos</th><th class="checkbox-header"></th></tr>
        ${rows}
        <tr class="row-total">
          <td class="cell-total-label">TOTAL</td>
          <td class="pep-total" id="pep-total">0.0</td>
          <td></td>
        </tr>
      </table>
      </div>
    </div>`;
  }

  html += `<div class="section-block section-critical">
    <h3>Erros Críticos</h3>
    ${c.criticalErrors.map(e => `<div class="critical-error">${esc(e)}</div>`).join('')}
  </div>`;

  return html;
}

// ── TAB D — Checklist (novo schema) ou Material de Estudo (schema antigo) ───

function renderTabD(st) {
  const d = st.instD;

  if (!d || !d.sections || !d.sections.length) {
    return `<div class="empty-state">Nenhum material disponível para esta estação.</div>`;
  }

  // Detecta schema pelo primeiro section: novo tem .items, antigo tem .body
  const isChecklist = Array.isArray(d.sections[0].items);

  if (isChecklist) {
    const rows = renderPepTable(d.sections, 0);
    return `
      <div class="tab-d-header">
        <div class="tab-d-kicker">Checklist Avaliativo</div>
        <div class="tab-d-title">${esc(d.title)}</div>
      </div>
      <div class="section-block">
        <div class="table-scroll">
        <table class="pep-table">
          <tr><th>Item Avaliado</th><th class="col-points">Pontos</th><th class="checkbox-header"></th></tr>
          ${rows}
          <tr class="row-total">
            <td class="cell-total-label">TOTAL</td>
            <td class="pep-total" id="pep-total">0.0</td>
            <td></td>
          </tr>
        </table>
        </div>
      </div>`;
  }

  // Schema antigo: seções educacionais com HTML no .body
  return `
    <div class="tab-d-header">
      <div class="tab-d-kicker">Material de Estudo</div>
      <div class="tab-d-title">${esc(d.title)}</div>
    </div>
    ${d.sections.map(sec => `
      <div class="study-section">
        <h3>${esc(sec.h)}</h3>
        ${sec.body}
      </div>
    `).join('')}`;
}
