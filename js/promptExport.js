/**
 * js/promptExport.js
 * ─────────────────────────────────────────────────────────────────────────
 * Geração do prompt "para levar": um único texto autocontido, montado 100%
 * localmente a partir dos dados da estação (instA/instB/instC), para o
 * aluno copiar ou baixar como .md e colar em qualquer IA externa de
 * chat/voz (Claude, ChatGPT, Gemini, etc.).
 *
 * Este arquivo NÃO faz nenhuma chamada de rede nem usa chave de API —
 * o projeto não se comunica com nenhum provedor de IA. A simulação
 * acontece inteiramente fora daqui, na ferramenta de IA que o aluno
 * escolher usar.
 *
 * O restante do app (index.html) só usa o objeto global `PromptExport`.
 */

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

// ── Prompt "para levar": um único texto autocontido para o aluno colar (ou
// anexar como arquivo .md) em qualquer IA de chat/voz externa. Não faz
// nenhuma chamada à API — é montado 100% localmente a partir dos dados da
// estação, e junta os três papéis (paciente / exames / avaliador) numa
// única instrução, já que do outro lado não existem os nossos botões
// dedicados.
function montarPromptStandalone(estacao) {
  const a = estacao.instA || {};
  const b = estacao.instB || {};
  const c = estacao.instC || {};

  // ~1 a cada 8 estações (schema mais antigo) tem o roteiro do paciente
  // cadastrado em instC.script em vez de instB.script — sem este fallback a
  // fala do paciente ficaria sem nenhum roteiro específico nesses casos.
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

window.PromptExport = {
  gerarPromptOffline: montarPromptStandalone,
};
