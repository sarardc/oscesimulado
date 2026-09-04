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
  // chamada do chat. Mantém o prompt enxuto — e portanto mais rápido —
  // mesmo em consultas longas, sem perder o contexto recente da conversa.
  maxHistoryMensagens: 16,
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

function montarContextoPaciente(estacao) {
  const a = estacao.instA || {};
  const b = estacao.instB || {};

  const scriptTxt = (b.script || [])
    .map(s => `- Se o médico(a) perguntar sobre "${s.trigger}", responda com base nesta ideia: "${s.speech}"`)
    .join('\n');

  const hiddenTxt = toListaSimples(b.hiddenInfo).map(h => `- ${h}`).join('\n');

  return `Você é um PACIENTE SIMULADO em uma estação de OSCE (exame clínico estruturado de medicina). Siga estas regras rigorosamente:

1. Responda sempre em primeira pessoa, como o paciente descrito abaixo, em linguagem leiga (não técnica), de forma curta e realista — no máximo 2 a 3 frases por resposta.
2. Baseie-se SOMENTE nas informações fornecidas abaixo. Nunca invente sintomas, doenças, histórico, medicações ou fatos que não constem aqui.
3. Nunca revele o diagnóstico e nunca use termos médicos técnicos.
4. Não forneça resultados de exame físico ou laboratorial durante a conversa: se perguntarem por eles, responda apenas algo como "isso é algo que o(a) senhor(a) doutor(a) precisa examinar/solicitar", pois esses dados são obtidos por outro canal.
5. As "informações escondidas" listadas abaixo só devem ser reveladas se o médico(a) perguntar de forma direta e específica sobre aquele assunto — não as ofereça espontaneamente.
6. Se perguntarem algo não descrito no seu caso, responda de forma plausível e genérica, sem contradizer os dados abaixo e sem criar novos achados clínicos relevantes.

DADOS DO CASO (uso interno — não se refira a "estação" ou "caso" na conversa):
- Identificação do paciente: ${a.patient || 'não informado'}
- Queixa principal (a ser expressa com suas próprias palavras): ${a.complaint || 'não informado'}
- Cenário do atendimento: ${a.scenario || 'não informado'}
${scriptTxt ? `\nRoteiro de respostas a perguntas específicas:\n${scriptTxt}` : ''}
${hiddenTxt ? `\nInformações a revelar somente se perguntado diretamente:\n${hiddenTxt}` : ''}
${b.actorBehavior ? `\nComportamento/atitude a manter durante toda a simulação: ${b.actorBehavior}` : ''}`;
}

// ── Prompt de EXAMES (grounding com instB, sem inventar valores) ────────

function montarContextoExames(estacao) {
  const b = estacao.instB || {};
  const examesTxt = formatarListaExames(b);

  return `Você é o sistema de resultados de exames de uma estação de OSCE. Você NUNCA inventa valores. Abaixo estão os ÚNICOS dados reais disponíveis nesta estação:

SINAIS VITAIS: ${formatarSinaisVitais(b.vitals)}
EXAME FÍSICO GERAL: ${b.physicalGeneral || 'não informado'}
EXAME SEGMENTAR: ${toListaSimples(b.physicalSeg).join('; ') || 'não informado'}
EXAMES LABORATORIAIS/IMAGEM DISPONÍVEIS:
${examesTxt || '(nenhum exame complementar cadastrado nesta estação)'}

TAREFA: o médico(a) vai pedir, em texto livre, um ou mais exames físicos ou complementares. Você deve:
1. Identificar, entre os dados acima, quais correspondem ao pedido (aceite sinônimos e abreviações comuns: ex. "hemograma" = "hemograma completo", "Rx tórax" = radiografia de tórax).
2. Devolver EXATAMENTE os valores/achados listados acima para os itens correspondentes — nunca altere, arredonde ou complemente um valor.
3. Para qualquer item pedido que NÃO exista na lista acima, informe claramente algo como "Exame X não disponibilizado nesta estação" — nunca invente um resultado para ele.
4. Não dê diagnóstico nem interpretação clínica: apenas devolva os achados/resultados, organizados em uma lista curta.`;
}

// ── Resumo técnico completo (grounding para debriefing / quiz / resumo) ─
// Aqui sim usamos o gabarito (instC), pois essas chamadas servem para
// avaliar o estudante ou gerar material de estudo — não para o paciente.

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
  if (c.criticalErrors?.length) partes.push(`Erros críticos a evitar: ${c.criticalErrors.join('; ')}`);

  return partes.join('\n\n');
}

// ── API pública usada pelo index.html ───────────────────────────────────

window.GeminiOSCE = {
  getApiKey: getGeminiApiKey,
  setApiKey: setGeminiApiKey,

  // Gera a fala inicial do paciente (substitui a saudação fixa "dor no peito").
  // thinkingBudget:0 e maxOutputTokens baixo: é só uma fala curta em
  // personagem, não precisa de raciocínio extra — sai bem mais rápido.
  async saudacaoInicial(estacao) {
    const sistema = montarContextoPaciente(estacao);
    const contents = [{
      role: 'user',
      parts: [{ text: 'Cumprimente o médico(a) que acabou de entrar e exponha sua queixa principal em poucas frases, como um paciente real faria ao ser chamado para a consulta.' }],
    }];
    const texto = await chamarGemini({ systemPrompt: sistema, contents, temperature: 0.6, maxOutputTokens: 200, thinkingBudget: 0 });
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
    const texto = await chamarGemini({ systemPrompt: sistema, contents, temperature: 0.6, maxOutputTokens: 200, thinkingBudget: 0 });
    historico.push({ role: 'model', parts: [{ text: texto }] });
    return texto;
  },

  // Botão "Solicitar Exames": devolve somente o que está cadastrado na aba B.
  // É uma tarefa de busca/formatação simples — também não precisa de
  // raciocínio extra.
  async solicitarExames(estacao, pedidoTexto) {
    const sistema = montarContextoExames(estacao);
    const contents = [{ role: 'user', parts: [{ text: pedidoTexto }] }];
    return chamarGemini({ systemPrompt: sistema, contents, temperature: 0, maxOutputTokens: 400, thinkingBudget: 0 });
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
    return chamarGemini({ systemPrompt: sistema, contents, temperature: 0.3, maxOutputTokens: 900 });
  },

  async gerarQuiz(estacao) {
    const sistema = `Use exclusivamente os dados reais do caso abaixo para criar as questões. Não invente informações fora deste contexto.\n\n${resumoTecnicoDoCaso(estacao)}`;
    const contents = [{ role: 'user', parts: [{ text: 'Gere 2 questões estilo prova de residência médica baseadas neste caso clínico, com gabarito comentado.' }] }];
    return chamarGemini({ systemPrompt: sistema, contents, temperature: 0.4, maxOutputTokens: 700, thinkingBudget: 0 });
  },

  async gerarResumo(estacao) {
    const sistema = `Use exclusivamente os dados reais do caso abaixo. Não invente informações fora deste contexto.\n\n${resumoTecnicoDoCaso(estacao)}`;
    const contents = [{ role: 'user', parts: [{ text: 'Gere um resumo rápido e direto ao ponto com os pontos-chave de diagnóstico e conduta deste caso clínico.' }] }];
    return chamarGemini({ systemPrompt: sistema, contents, temperature: 0.4, maxOutputTokens: 500, thinkingBudget: 0 });
  },
};
