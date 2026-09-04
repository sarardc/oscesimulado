/**
 * js/gemini.js
 * ─────────────────────────────────────────────────────────────────────────
 * Configuração e integração com a API Gemini (Google AI Studio).
 *
 * Este arquivo concentra TUDO relacionado à IA:
 *   - config (modelo, endpoint, chave do usuário)
 *   - a "chamada crua" à API (chamarGemini)
 *   - a montagem dos prompts, sempre alimentados com os dados REAIS da
 *     estação aberta (instA/instB/instC), para que a IA nunca precise
 *     "inventar" nada sobre o caso.
 *
 * O restante do app (index.html) só usa o objeto global `GeminiOSCE`.
 */

// ── Configuração ─────────────────────────────────────────────────────────

const GEMINI_CONFIG = {
  model: 'gemini-3.6-flash',
  apiKeyStorageKey: 'gemini_api_key',
  // Quantas mensagens (médico+paciente) do histórico são reenviadas a cada
  // chamada do chat. O prompt de sistema (regras + dados do caso) é
  // reenviado em TODA chamada — é o próprio funcionamento da API, que não
  // guarda memória entre requisições — então mantê-lo curto e limitar essa
  // janela é o que mais economiza tokens em consultas longas, já que as
  // chaves gratuitas dos alunos têm cota de tokens limitada.
  maxHistoryMensagens: 10,
  endpoint(model, apiKey) {
    return `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
  },
};

function getGeminiApiKey() {
  return localStorage.getItem(GEMINI_CONFIG.apiKeyStorageKey);
}

function setGeminiApiKey(chave) {
  localStorage.setItem(GEMINI_CONFIG.apiKeyStorageKey, chave);
}

// ── Chamada genérica à API ───────────────────────────────────────────────
// `systemPrompt` vai como systemInstruction (instrução de sistema real da
// API), separado do histórico da conversa — é isso que faz a IA obedecer
// de forma consistente às regras e aos dados do caso.

// `maxOutputTokens` limita o tamanho da resposta (respostas mais curtas saem
// mais rápido). `thinkingBudget: 0` pede ao modelo para pular a etapa de
// "raciocínio" antes de responder — útil para falas de paciente/exames, que
// não exigem esse passo extra; não usamos isso no debriefing, que se
// beneficia de mais raciocínio para avaliar corretamente o estudante.
async function chamarGemini({ systemPrompt, contents, temperature, maxOutputTokens, thinkingBudget }) {
  const apiKey = getGeminiApiKey();
  if (!apiKey) throw new Error('Chave da API Gemini não configurada.');

  const url = GEMINI_CONFIG.endpoint(GEMINI_CONFIG.model, apiKey);

  function montarCorpo(incluirThinking) {
    const generationConfig = {};
    if (temperature !== undefined) generationConfig.temperature = temperature;
    if (maxOutputTokens !== undefined) generationConfig.maxOutputTokens = maxOutputTokens;
    if (incluirThinking && thinkingBudget !== undefined) {
      generationConfig.thinkingConfig = { thinkingBudget };
    }
    const body = { contents };
    if (systemPrompt) body.systemInstruction = { parts: [{ text: systemPrompt }] };
    if (Object.keys(generationConfig).length) body.generationConfig = generationConfig;
    return body;
  }

  async function chamar(incluirThinking) {
    const resposta = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(montarCorpo(incluirThinking)),
    });
    return resposta.json();
  }

  let dados = await chamar(true);

  // Se esta conta/versão da API não aceitar thinkingConfig, repete sem ele
  // em vez de falhar a conversa inteira.
  if (dados.error && thinkingBudget !== undefined && /thinking/i.test(dados.error.message || '')) {
    dados = await chamar(false);
  }

  if (dados.error) {
    throw new Error(dados.error.message || 'Erro desconhecido na API Gemini.');
  }

  const candidato = dados.candidates && dados.candidates[0];
  const texto = candidato?.content?.parts?.map(p => p.text || '').join('') || '';
  if (!texto) throw new Error('A IA não retornou nenhuma resposta.');
  return texto;
}

// Mantém só as últimas `maxMensagens` entradas do histórico (garantindo que
// a janela sempre comece numa fala do médico, para não quebrar o contexto).
function janelaHistorico(historico, maxMensagens) {
  if (historico.length <= maxMensagens) return historico;
  let inicio = historico.length - maxMensagens;
  while (inicio < historico.length - 1 && historico[inicio].role !== 'user') {
    inicio++;
  }
  return historico.slice(inicio);
}

// ── Helpers para ler os dados da estação (mesmo formato usado em ui.js) ──

function toListaSimples(val) {
  if (!val) return [];
  if (Array.isArray(val)) return val;
  return String(val).split('|').map(s => s.trim()).filter(Boolean);
}

function formatarSinaisVitais(v) {
  if (!v) return 'não informado';
  return `PA: ${v.PA} | FC: ${v.FC} | FR: ${v.FR} | Tax: ${v.Tax} | Peso: ${v.Peso} | Altura: ${v.Altura} | IMC: ${v.IMC}`;
}

// Formata o checklist PEP (schema mais antigo do gabarito: seções com itens
// e pontuação), usado como fallback quando a estação não tem os campos
// expectedAnamnesis/expectedPhysical/expectedConduct/etc. do schema novo.
function formatarPep(pep) {
  if (!pep || !pep.length) return '';
  const secoes = pep[0] && pep[0].items === undefined ? [{ items: pep }] : pep;
  return secoes.map(sec => {
    const titulo = sec.section || sec.h;
    const linhas = (sec.items || []).map(it => `  - ${it.item} (peso ${it.score})`).join('\n');
    return titulo ? `${titulo}:\n${linhas}` : linhas;
  }).join('\n');
}

function formatarListaExames(instB) {
  const linhas = [];
  (instB.labs || []).forEach(l => linhas.push(`- ${l.test}: ${l.val} (valor de referência: ${l.ref})`));
  if (instB.image) {
    if (typeof instB.image === 'object' && instB.image.title) {
      linhas.push(`- ${instB.image.title}: ${instB.image.report}`);
    } else if (typeof instB.image === 'string') {
      linhas.push(`- Imagem: ${instB.image}`);
    }
  }
  return linhas.join('\n');
}

// ── Prompt do PACIENTE (grounding com instA + instB) ────────────────────
// A IA só pode falar como paciente com base no que está escrito aqui.
// Ela nunca recebe o diagnóstico nem o gabarito (instC) nesta etapa,
// para simular corretamente a anamnese, e é instruída a não fornecer
// resultados de exame — isso é papel do botão "Solicitar Exames".

// Texto enxuto de propósito: este prompt inteiro é reenviado em TODA
// mensagem do chat (a API não guarda contexto entre chamadas), então cada
// palavra aqui é multiplicada pelo número de falas da consulta.
function montarContextoPaciente(estacao) {
  const a = estacao.instA || {};
  const b = estacao.instB || {};
  const c = estacao.instC || {};

  // Em ~1 a cada 8 estações (schema mais antigo), o roteiro do paciente foi
  // cadastrado em instC.script em vez de instB.script — sem este fallback a
  // fala do paciente ficava sem nenhum roteiro específico nesses casos.
  const scriptFonte = (b.script && b.script.length) ? b.script : (c.script || []);
  const scriptTxt = scriptFonte
    .map(s => `- "${s.trigger}" → ${s.speech}`)
    .join('\n');

  const hiddenTxt = toListaSimples(b.hiddenInfo).map(h => `- ${h}`).join('\n');

  return `Você é um paciente simulado de OSCE. Regras: fale em 1ª pessoa, leigo, 2-3 frases curtas; use SÓ os dados abaixo, sem inventar nada; nunca revele o diagnóstico nem use termos técnicos; não dê resultado de exame físico/laboratorial (diga que isso é para o médico examinar/solicitar); só revele "informações escondidas" se perguntado diretamente sobre aquilo; se perguntarem algo fora daqui, responda de forma genérica e plausível, sem criar novos achados clínicos.

CASO:
Paciente: ${a.patient || 'não informado'}
Queixa: ${a.complaint || 'não informado'}
Cenário: ${a.scenario || 'não informado'}
${scriptTxt ? `Respostas a perguntas específicas:\n${scriptTxt}` : ''}
${hiddenTxt ? `Informações escondidas:\n${hiddenTxt}` : ''}
${b.actorBehavior ? `Comportamento: ${b.actorBehavior}` : ''}`;
}

// ── Prompt de EXAMES (grounding com instB, sem inventar valores) ────────

function montarContextoExames(estacao) {
  const b = estacao.instB || {};
  const examesTxt = formatarListaExames(b);

  return `Sistema de resultados de exames de uma estação de OSCE. NUNCA invente valores — use só os dados reais abaixo.

Sinais vitais: ${formatarSinaisVitais(b.vitals)}
Exame físico geral: ${b.physicalGeneral || 'não informado'}
Exame segmentar: ${toListaSimples(b.physicalSeg).join('; ') || 'não informado'}
Exames laboratoriais/imagem disponíveis:
${examesTxt || '(nenhum cadastrado nesta estação)'}

Tarefa: o médico vai pedir exames em texto livre. Identifique quais itens acima correspondem ao pedido (aceite sinônimos/abreviações comuns), devolva EXATAMENTE os valores acima para eles, e para o que não constar na lista diga que "não foi disponibilizado nesta estação". Sem diagnóstico nem interpretação — só liste os achados.`;
}

// ── Resumo técnico completo (grounding para o debriefing) ───────────────
// Aqui sim usamos o gabarito (instC), pois esta chamada serve para avaliar
// o estudante — não para o paciente.

function resumoTecnicoDoCaso(estacao) {
  const a = estacao.instA || {};
  const b = estacao.instB || {};
  const c = estacao.instC || {};
  const partes = [];

  partes.push(`Título da estação: ${estacao.title || ''} (tema: ${estacao.tema || ''})`);
  if (a.scenario) partes.push(`Cenário: ${a.scenario}`);
  if (a.complaint) partes.push(`Queixa principal: ${a.complaint}`);
  partes.push(`Sinais vitais: ${formatarSinaisVitais(b.vitals)}`);
  if (b.physicalGeneral) partes.push(`Exame físico geral: ${b.physicalGeneral}`);
  const seg = toListaSimples(b.physicalSeg);
  if (seg.length) partes.push(`Exame segmentar: ${seg.join('; ')}`);
  const examesTxt = formatarListaExames(b);
  if (examesTxt) partes.push(`Exames disponíveis nesta estação:\n${examesTxt}`);
  if (c.diagnosis) partes.push(`Diagnóstico correto: ${c.diagnosis}`);
  if (c.context) partes.push(`Contexto clínico: ${c.context}`);
  if (c.justify) partes.push(`Justificativa diagnóstica: ${c.justify}`);
  if (c.differentials?.length) partes.push(`Diagnósticos diferenciais: ${c.differentials.join('; ')}`);
  const anamnese = toListaSimples(c.expectedAnamnesis);
  if (anamnese.length) partes.push(`Pontos esperados na anamnese: ${anamnese.join('; ')}`);
  const fisico = toListaSimples(c.expectedPhysical);
  if (fisico.length) partes.push(`Achados esperados no exame físico: ${fisico.join('; ')}`);
  if (c.expectedExams?.length) {
    partes.push(`Exames que deveriam ser solicitados: ${c.expectedExams.map(e => `${e.exam} (${e.justify})`).join('; ')}`);
  }
  const conduta = toListaSimples(c.expectedConduct);
  if (conduta.length) partes.push(`Conduta esperada: ${conduta.join('; ')}`);
  const comunicacao = toListaSimples(c.expectedCommunication);
  if (comunicacao.length) partes.push(`Comunicação esperada com o paciente: ${comunicacao.join('; ')}`);
  // Schema mais antigo do gabarito: checklist PEP setorizado com pontuação,
  // no lugar dos campos "expected*" acima.
  if (c.pep?.length) partes.push(`Checklist de avaliação (PEP):\n${formatarPep(c.pep)}`);
  if (c.criticalErrors?.length) partes.push(`Erros críticos a evitar: ${c.criticalErrors.join('; ')}`);

  return partes.join('\n\n');
}

// ── Prompt "para levar": um único texto autocontido para o aluno colar (ou
// anexar como arquivo .md) em qualquer outra IA de chat/voz, quando os
// tokens da chave própria acabarem. Não faz nenhuma chamada à API — é
// montado 100% localmente a partir dos dados da estação, e junta os três
// papéis que aqui são separados (paciente / exames / avaliador) numa única
// instrução, já que do outro lado não existem os nossos botões dedicados.
function montarPromptStandalone(estacao) {
  const a = estacao.instA || {};
  const b = estacao.instB || {};
  const c = estacao.instC || {};

  // Mesmo fallback de montarContextoPaciente: ~1 a cada 8 estações tem o
  // roteiro em instC.script em vez de instB.script.
  const scriptFonte = (b.script && b.script.length) ? b.script : (c.script || []);
  const scriptTxt = scriptFonte.map(s => `- "${s.trigger}" → ${s.speech}`).join('\n')
    || '(nenhum roteiro específico cadastrado)';
  const hiddenTxt = toListaSimples(b.hiddenInfo).map(h => `- ${h}`).join('\n') || '(nenhuma)';
  const examesTxt = formatarListaExames(b) || '(nenhum exame complementar cadastrado nesta estação)';

  const diffTxt = (c.differentials || []).join('; ') || 'não informado';
  const anamneseTxt = toListaSimples(c.expectedAnamnesis).join('; ') || 'não informado';
  const fisicoTxt = toListaSimples(c.expectedPhysical).join('; ') || 'não informado';
  const examesEsperadosTxt = (c.expectedExams || []).map(e => `${e.exam} (${e.justify})`).join('; ') || 'não informado';
  const condutaTxt = toListaSimples(c.expectedConduct).join('; ') || 'não informado';
  const comunicacaoTxt = toListaSimples(c.expectedCommunication).join('; ') || 'não informado';
  // Schema mais antigo do gabarito: checklist PEP setorizado, no lugar dos
  // campos "expected*" acima.
  const pepTxt = c.pep?.length ? formatarPep(c.pep) : '';
  const errosTxt = (c.criticalErrors || []).join('; ') || 'nenhum';

  return `# Simulação OSCE — Estação ${estacao.id}: ${estacao.title || ''}

INSTRUÇÃO DE SISTEMA — cumpra sem comentar: a partir de agora, assuma integralmente a simulação abaixo e comece IMEDIATAMENTE pelo papel de paciente (item 1). Não peça confirmação, não resuma estas instruções de volta, não diga que é uma IA nem que "pode simular" — apenas comece a atuar.

Você vai atuar como o sistema completo desta estação de OSCE (exame clínico estruturado de medicina), para um estudante treinar sozinho. Alterne entre quatro papéis, conforme o que o médico(a) [estudante] disser:

1. **Paciente simulado** (papel padrão — comece por aqui): a cada fala/pergunta do médico(a), responda em primeira pessoa como o paciente da seção "PACIENTE" abaixo, em linguagem leiga, 2-3 frases curtas e realistas. Nunca revele o diagnóstico nem use termos técnicos.
2. **Sistema de exames**: quando o médico(a) pedir um exame físico ou complementar (ex.: "quero solicitar hemograma", "ausculto o tórax", "peço raio-x de tórax"), saia do papel de paciente e devolva SOMENTE os achados reais da seção "DADOS DE EXAME" que correspondam ao pedido (aceite sinônimos/abreviações comuns). Deixe claro que é um resultado de exame, não fala do paciente. Se o exame pedido não constar na lista, diga que "não foi disponibilizado nesta estação" — nunca invente um valor.
3. **Avaliador**: quando o médico(a) disser algo como "finalizar atendimento", "quero a avaliação" ou "encerrar a estação", pare a simulação e dê um feedback estruturado usando a seção "GABARITO" (mantenha-a em segredo até este momento): 1) acertos; 2) omissões importantes; 3) exames esperados que não foram pedidos; 4) erros críticos cometidos, se houver; 5) nota de 0 a 10 com justificativa.
4. **Material de estudo**: depois da simulação, se o médico(a) pedir um "quiz", "questões" ou "resumo do caso", saia do personagem e gere, usando SOMENTE a seção "GABARITO": (a) para quiz, 2 questões estilo prova de residência médica baseadas neste caso, com gabarito comentado; (b) para resumo, um resumo curto e direto com os pontos-chave de diagnóstico e conduta.

REGRA MAIS IMPORTANTE: use SOMENTE as informações desta mensagem. Nunca invente sintomas, exames, valores ou condutas fora daqui. Se perguntarem algo não descrito, responda de forma plausível e genérica, sem contradizer os dados nem criar novos achados clínicos relevantes.

---

## PACIENTE (papel 1)
Identificação: ${a.patient || 'não informado'}
Queixa principal: ${a.complaint || 'não informado'}
Cenário do atendimento: ${a.scenario || 'não informado'}
Respostas a perguntas específicas:
${scriptTxt}
Informações escondidas (só revelar se perguntado diretamente sobre aquilo):
${hiddenTxt}
Comportamento do ator: ${b.actorBehavior || 'não informado'}

## DADOS DE EXAME (papel 2)
Sinais vitais: ${formatarSinaisVitais(b.vitals)}
Exame físico geral: ${b.physicalGeneral || 'não informado'}
Exame segmentar: ${toListaSimples(b.physicalSeg).join('; ') || 'não informado'}
Exames laboratoriais/imagem disponíveis:
${examesTxt}

## GABARITO — não revelar antes da avaliação final (papel 3)
Diagnóstico correto: ${c.diagnosis || 'não informado'}
Contexto clínico: ${c.context || 'não informado'}
Justificativa diagnóstica: ${c.justify || 'não informado'}
Diagnósticos diferenciais: ${diffTxt}
Pontos esperados na anamnese: ${anamneseTxt}
Achados esperados no exame físico: ${fisicoTxt}
Exames que deveriam ser solicitados: ${examesEsperadosTxt}
Conduta esperada: ${condutaTxt}
Comunicação esperada com o paciente: ${comunicacaoTxt}
${pepTxt ? `Checklist de avaliação (PEP):\n${pepTxt}` : ''}
Erros críticos a evitar: ${errosTxt}

---
Comece agora, sem esperar confirmação: cumprimente o médico(a) e exponha sua queixa principal em poucas frases, já em personagem (papel 1).`;
}

// ── API pública usada pelo index.html ───────────────────────────────────

window.GeminiOSCE = {
  getApiKey: getGeminiApiKey,
  setApiKey: setGeminiApiKey,

  // Não chama a API — monta localmente o prompt "para levar" (ver acima).
  gerarPromptOffline: montarPromptStandalone,

  // Gera a fala inicial do paciente (substitui a saudação fixa "dor no peito").
  // thinkingBudget:0 e maxOutputTokens baixo: é só uma fala curta em
  // personagem, não precisa de raciocínio extra — sai bem mais rápido.
  async saudacaoInicial(estacao) {
    const sistema = montarContextoPaciente(estacao);
    const contents = [{
      role: 'user',
      parts: [{ text: 'Cumprimente o médico(a) que acabou de entrar e exponha sua queixa principal em poucas frases, como um paciente real faria ao ser chamado para a consulta.' }],
    }];
    const texto = await chamarGemini({ systemPrompt: sistema, contents, temperature: 0.6, maxOutputTokens: 150, thinkingBudget: 0 });
    contents.push({ role: 'model', parts: [{ text: texto }] });
    return { texto, contents };
  },

  // Continua a conversa com o paciente simulado. `historico` é mutado
  // (recebe a fala do médico e a resposta do paciente) para manter o
  // contexto completo — mas só uma janela recente dele é enviada à API,
  // para o prompt não crescer (e ficar mais lento) ao longo da consulta.
  async responderComoPaciente(estacao, historico, textoUsuario) {
    historico.push({ role: 'user', parts: [{ text: textoUsuario }] });
    const sistema = montarContextoPaciente(estacao);
    const contents = janelaHistorico(historico, GEMINI_CONFIG.maxHistoryMensagens);
    const texto = await chamarGemini({ systemPrompt: sistema, contents, temperature: 0.6, maxOutputTokens: 150, thinkingBudget: 0 });
    historico.push({ role: 'model', parts: [{ text: texto }] });
    return texto;
  },

  // Botão "Solicitar Exames": devolve somente o que está cadastrado na aba B.
  // É uma tarefa de busca/formatação simples — também não precisa de
  // raciocínio extra.
  async solicitarExames(estacao, pedidoTexto) {
    const sistema = montarContextoExames(estacao);
    const contents = [{ role: 'user', parts: [{ text: pedidoTexto }] }];
    return chamarGemini({ systemPrompt: sistema, contents, temperature: 0, maxOutputTokens: 300, thinkingBudget: 0 });
  },

  // Avaliação final, fundamentada no gabarito real (instC) + no que
  // realmente aconteceu na consulta (chat) e nos exames pedidos.
  async gerarDebriefing(estacao, historico, examesSolicitados) {
    const contexto = resumoTecnicoDoCaso(estacao);
    const examesTxt = (examesSolicitados || [])
      .map(e => `Pedido: "${e.pedido}" → Resposta: "${e.resultado}"`)
      .join('\n') || '(nenhum exame foi solicitado durante o atendimento)';

    const sistema = `Você é um avaliador de estações de OSCE. Use SOMENTE os dados reais da estação abaixo (gabarito) para avaliar o desempenho do estudante. Não invente critérios que não constem aqui.

=== GABARITO E DADOS DA ESTAÇÃO ===
${contexto}

=== EXAMES SOLICITADOS PELO ESTUDANTE DURANTE O ATENDIMENTO ===
${examesTxt}

Com base na conversa entre o médico(a) [estudante] e o paciente simulado (fornecida a seguir) e nos exames acima, produza um feedback estruturado e objetivo em português com:
1) Acertos na anamnese e conduta;
2) Omissões importantes (itens do gabarito não abordados);
3) Exames esperados que não foram solicitados (se houver);
4) Erros críticos cometidos, se houver;
5) Nota final de 0 a 10, com breve justificativa.`;

    // Sem thinkingBudget aqui: avaliar o estudante contra o gabarito se
    // beneficia do raciocínio do modelo. Só limitamos o tamanho da resposta.
    const contents = [...historico, { role: 'user', parts: [{ text: 'Gere a avaliação final do meu atendimento com base em tudo que conversamos.' }] }];
    return chamarGemini({ systemPrompt: sistema, contents, temperature: 0.3, maxOutputTokens: 700 });
  },
};
