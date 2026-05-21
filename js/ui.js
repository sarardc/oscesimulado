let activeFilter = 'all';

function setFilter(tema) {
  activeFilter = tema;
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tema === tema);
  });
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
      <div class="card-title">${st.title}</div>
      <div class="card-sub">${st.sub}</div>
      <div class="card-meta">
        <span class="pill ${temaClass}">${st.tema}</span>
        <span class="pill ${levelClass}">${st.level}</span>
      </div>`;
    card.onclick = () => openStation(st.id);
    grid.appendChild(card);
  });
}

function buildTabsNav(st) {
  const nav = document.querySelector('.tabs-nav');
  if (st.id >= 30) {
    nav.innerHTML = `
      <button class="tab-btn active" onclick="showTab(0)"><span class="tab-key">A</span><span class="tab-desc">Instruções ao Candidato</span></button>
      <button class="tab-btn" onclick="showTab(1)"><span class="tab-key">B</span><span class="tab-desc">Impressos</span></button>
      <button class="tab-btn" onclick="showTab(2)"><span class="tab-key">B1</span><span class="tab-desc">Script do Paciente</span></button>
      <button class="tab-btn" onclick="showTab(3)"><span class="tab-key">C</span><span class="tab-desc">Gabarito do Avaliador</span></button>
      <button class="tab-btn" onclick="showTab(4)"><span class="tab-key">D</span><span class="tab-desc">Checklist</span></button>`;
  } else {
    nav.innerHTML = `
      <button class="tab-btn active" onclick="showTab(0)"><span class="tab-key">A</span><span class="tab-desc">Instruções ao Candidato</span></button>
      <button class="tab-btn" onclick="showTab(1)"><span class="tab-key">B</span><span class="tab-desc">Impressos</span></button>
      <button class="tab-btn" onclick="showTab(2)"><span class="tab-key">C</span><span class="tab-desc">Gabarito do Avaliador</span></button>
      <button class="tab-btn" onclick="showTab(3)"><span class="tab-key">D</span><span class="tab-desc">Material de Estudo</span></button>`;
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
      <p>${a.scenario}</p>
    </div>
    <div class="section-block">
      <h3>Identificação do Paciente</h3>
      <p>${a.patient}</p>
    </div>
    <div class="section-block">
      <h3>Queixa Principal</h3>
      <p style="font-size:15px;color:var(--text)">${a.complaint}</p>
    </div>
    <div class="section-block">
      <h3>Tarefas a Executar</h3>
      <ul class="task-list">
        ${a.tasks.map((t, i) => `<li><span class="task-num">${i + 1}</span>${t}</li>`).join('')}
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
      <div class="vt-item"><span class="vt-label">PA:</span><span class="vt-val">${b.vitals.PA}</span></div>
      <div class="vt-item"><span class="vt-label">FC:</span><span class="vt-val">${b.vitals.FC}</span></div>
      <div class="vt-item"><span class="vt-label">FR:</span><span class="vt-val">${b.vitals.FR}</span></div>
      <div class="vt-item"><span class="vt-label">Tax:</span><span class="vt-val">${b.vitals.Tax}</span></div>
      <div class="vt-item"><span class="vt-label">Peso:</span><span class="vt-val">${b.vitals.Peso}</span></div>
      <div class="vt-item"><span class="vt-label">Altura:</span><span class="vt-val">${b.vitals.Altura}</span></div>
      <div class="vt-item"><span class="vt-label">IMC:</span><span class="vt-val">${b.vitals.IMC}</span></div>
    </div>
    <div style="margin-top:16px">
      <div style="font-size:12px;color:var(--text3);margin-bottom:6px;font-family:var(--mono)">EXAME FÍSICO GERAL</div>
      <div style="font-size:13px;color:var(--text2);line-height:1.7">${b.physicalGeneral}</div>
    </div>
    <div style="margin-top:14px">
      <div style="font-size:12px;color:var(--text3);margin-bottom:6px;font-family:var(--mono)">EXAME SEGMENTAR</div>
      ${b.physicalSeg.map(s => `<div style="font-size:13px;color:var(--text2);line-height:1.8;margin-bottom:4px">${s}</div>`).join('')}
    </div>
  </div>`;

  if (b.labs && b.labs.length) {
    html += `<div class="section-block">
      <h3>Impresso — Exames Laboratoriais</h3>
      <div class="table-scroll">
      <table class="lab-table">
        <tr><th>Exame</th><th>Resultado</th><th>Valor de Referência</th></tr>
        ${b.labs.map(l => `<tr>
          <td>${l.test}</td>
          <td class="${l.alt ? 'altered' : ''}">${l.val}</td>
          <td class="ref">${l.ref}</td>
        </tr>`).join('')}
      </table>
      </div>
    </div>`;
  }

  if (b.image) {
    if (typeof b.image === 'object' && b.image.title) {
      html += `<div class="impression-box">
        <h4>Impresso — ${b.image.title}</h4>
        <pre style="font-size:12px;color:var(--text2);white-space:pre-wrap;line-height:1.8;font-family:var(--mono)">${b.image.report}</pre>
      </div>`;
    } else if (typeof b.image === 'string') {
      html += `<div class="alert alert-info">🔬 <strong>Imagem:</strong> ${b.image}</div>`;
    }
  }

  if (b.note) {
    html += `<div class="alert alert-info" style="margin-top:8px">ℹ ${b.note}</div>`;
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
        <div class="script-trigger">${s.trigger}</div>
        <div class="script-speech">"${s.speech}"</div>
      </div>`).join('')}
    </div>`;
  }

  if (b.hiddenInfo && b.hiddenInfo.length) {
    html += `<div class="section-block">
      <h3>Informações Escondidas</h3>
      <div style="display:flex;flex-direction:column;gap:6px">
        ${b.hiddenInfo.map(h => `<div class="alert alert-warn" style="margin:0">🔒 ${h}</div>`).join('')}
      </div>
    </div>`;
  }

  if (b.actorBehavior) {
    html += `<div class="alert alert-info" style="margin-top:8px">🎭 <strong>Comportamento do Ator:</strong> ${b.actorBehavior}</div>`;
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
        <div class="script-trigger">${s.trigger}</div>
        <div class="script-speech">"${s.speech}"</div>
      </div>`).join('')}
    </div>`;
  }

  if (b.hiddenInfo && b.hiddenInfo.length) {
    html += `<div class="section-block">
      <h3>Informações Escondidas</h3>
      <div style="display:flex;flex-direction:column;gap:6px">
        ${b.hiddenInfo.map(h => `<div class="alert alert-warn" style="margin:0">🔒 ${h}</div>`).join('')}
      </div>
    </div>`;
  }

  if (b.actorBehavior) {
    html += `<div class="alert alert-info" style="margin-top:8px">🎭 <strong>Comportamento do Ator:</strong> ${b.actorBehavior}</div>`;
  }

  if (!html) {
    html = `<div style="padding:40px;text-align:center;color:var(--text3)">Nenhum script disponível para esta estação.</div>`;
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
    if (heading) rows += `<tr><td colspan="3" class="pep-section">${heading}</td></tr>`;
    sec.items.forEach(item => {
      rows += `<tr>
        <td>${item.item}</td>
        <td class="pep-score" id="score-${idx}">${item.score.toFixed(1)}</td>
        <td class="pep-checkbox-cell">
          <input type="checkbox" id="checkbox-${idx}" aria-label="Marcar item da PEP"
            onchange="updatePepScore(${idx}, ${item.score})">
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
      <p style="font-size:15px;font-weight:600;color:var(--accent2)">${c.diagnosis}</p>
      <p style="margin-top:10px">${c.context}</p>
      <p style="margin-top:8px;font-size:13px;color:var(--text3)">${c.justify}</p>
    </div>`;

  // Diagnósticos diferenciais (novo schema)
  if (c.differentials && c.differentials.length) {
    html += `<div class="section-block">
      <h3>Diagnósticos Diferenciais</h3>
      <ul style="margin:0;padding-left:20px;color:var(--text2);font-size:13px;line-height:1.9">
        ${c.differentials.map(d => `<li>${d}</li>`).join('')}
      </ul>
    </div>`;
  }

  // Anamnese esperada (novo schema)
  if (c.expectedAnamnesis && c.expectedAnamnesis.length) {
    html += `<div class="section-block">
      <h3>Anamnese Esperada</h3>
      <ul style="margin:0;padding-left:20px;color:var(--text2);font-size:13px;line-height:1.9">
        ${c.expectedAnamnesis.map(i => `<li>${i}</li>`).join('')}
      </ul>
    </div>`;
  }

  // Exame físico esperado (novo schema)
  if (c.expectedPhysical && c.expectedPhysical.length) {
    html += `<div class="section-block">
      <h3>Exame Físico Esperado</h3>
      <ul style="margin:0;padding-left:20px;color:var(--text2);font-size:13px;line-height:1.9">
        ${c.expectedPhysical.map(i => `<li>${i}</li>`).join('')}
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
        ${c.expectedExams.map(e => `<tr><td>${e.exam}</td><td>${e.justify}</td><td>${e.expected}</td></tr>`).join('')}
      </table>
      </div>
    </div>`;
  }

  // Conduta esperada (novo schema)
  if (c.expectedConduct && c.expectedConduct.length) {
    html += `<div class="section-block">
      <h3>Conduta Esperada</h3>
      <ul style="margin:0;padding-left:20px;color:var(--text2);font-size:13px;line-height:1.9">
        ${c.expectedConduct.map(i => `<li>${i}</li>`).join('')}
      </ul>
    </div>`;
  }

  // Comunicação esperada (novo schema)
  if (c.expectedCommunication && c.expectedCommunication.length) {
    html += `<div class="section-block">
      <h3>Comunicação Esperada</h3>
      <ul style="margin:0;padding-left:20px;color:var(--text2);font-size:13px;line-height:1.9">
        ${c.expectedCommunication.map(i => `<li>${i}</li>`).join('')}
      </ul>
    </div>`;
  }

  // Script do paciente (schema antigo: instC.script)
  if (c.script && c.script.length) {
    html += `<div class="section-block">
      <h3>Script do Paciente Simulado</h3>
      ${c.script.map(s => `<div class="script-line">
        <div class="script-trigger">${s.trigger}</div>
        <div class="script-speech">"${s.speech}"</div>
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
        <tr><th>Item Avaliado</th><th style="width:80px">Pontos</th><th class="checkbox-header"></th></tr>
        ${rows}
        <tr style="border-top:2px solid var(--border)">
          <td style="font-weight:600;color:var(--text)">TOTAL</td>
          <td class="pep-total" id="pep-total">0.0</td>
          <td></td>
        </tr>
      </table>
      </div>
    </div>`;
  }

  html += `<div class="section-block" style="border-left:3px solid var(--danger)">
    <h3>Erros Críticos</h3>
    ${c.criticalErrors.map(e => `<div class="critical-error">${e}</div>`).join('')}
  </div>`;

  return html;
}

// ── TAB D — Checklist (novo schema) ou Material de Estudo (schema antigo) ───

function renderTabD(st) {
  const d = st.instD;

  if (!d || !d.sections || !d.sections.length) {
    return `<div style="padding:40px;text-align:center;color:var(--text3)">Nenhum material disponível para esta estação.</div>`;
  }

  // Detecta schema pelo primeiro section: novo tem .items, antigo tem .body
  const isChecklist = Array.isArray(d.sections[0].items);

  if (isChecklist) {
    const rows = renderPepTable(d.sections, 0);
    return `
      <div style="margin-bottom:20px">
        <div style="font-family:var(--mono);font-size:11px;letter-spacing:2px;text-transform:uppercase;color:var(--text3);margin-bottom:6px">Checklist Avaliativo</div>
        <div style="font-size:20px;font-weight:600;color:var(--text)">${d.title}</div>
      </div>
      <div class="section-block">
        <div class="table-scroll">
        <table class="pep-table">
          <tr><th>Item Avaliado</th><th style="width:80px">Pontos</th><th class="checkbox-header"></th></tr>
          ${rows}
          <tr style="border-top:2px solid var(--border)">
            <td style="font-weight:600;color:var(--text)">TOTAL</td>
            <td class="pep-total" id="pep-total">0.0</td>
            <td></td>
          </tr>
        </table>
        </div>
      </div>`;
  }

  // Schema antigo: seções educacionais com HTML no .body
  return `
    <div style="margin-bottom:20px">
      <div style="font-family:var(--mono);font-size:11px;letter-spacing:2px;text-transform:uppercase;color:var(--text3);margin-bottom:6px">Material de Estudo</div>
      <div style="font-size:20px;font-weight:600;color:var(--text)">${d.title}</div>
    </div>
    ${d.sections.map(sec => `
      <div class="study-section">
        <h3>${sec.h}</h3>
        ${sec.body}
      </div>
    `).join('')}`;
}
