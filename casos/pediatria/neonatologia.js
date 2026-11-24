// Casos de Neonatologia (10)
const neonatologia = [
  // ── ESTAÇÃO 7: Neonatologia — Reanimação Neonatal ────────────────────────────
  {
    id: 7,
    title: "Recém-nascido a termo com choro fraco na sala de parto",
    sub: "Maternidade — Centro Obstétrico / Sala de Parto",
    tema: 'Neonatologia',
    topic: "reanimacao-neonatal",
    level: "difícil",
    cardAccent: "#C62828",

    instA: {
      scenario: "Atenção Hospitalar — Maternidade, Centro Obstétrico. Mesa de reanimação neonatal equipada com O₂, máscara, ventilador de pressão positiva, material de intubação, adrenalina e volume.",
      patient: "RN a termo, masculino, nascido de cesárea eletiva. Mãe com pré-natal regular, sem intercorrências. Líquido amniótico claro.",
      complaint: "RN a termo trazido à mesa de reanimação após cesárea — choro fraco, tônus reduzido.",
      tasks: [
        "Avalie o recém-nascido de forma sistemática.",
        "Realize os procedimentos iniciais necessários na mesa de reanimação.",
        "Verbalize e justifique cada decisão clínica durante o atendimento.",
        "Realize o exame físico do recém-nascido após a estabilização.",
        "Oriente a mãe sobre o estado do bebê e os próximos passos.",
        "Incentive e oriente sobre os cuidados nas primeiras horas de vida."
      ]
    },

    instB: {
      vitals: {
        PA: "—",
        FC: "138 bpm (após estabilização)",
        FR: "46 irpm",
        Tax: "36,9°C",
        Peso: "3.350 g",
        Altura: "50 cm",
        IMC: "PC: 34 cm · IG: 39 semanas"
      },
      physicalGeneral: "Após estabilização: RN em bom estado geral, corado, ativo, chorando vigorosamente.",
      physicalSeg: [
        "FONTANELAS: Normotensas.",
        "OLHOS: Reflexo vermelho presente bilateralmente.",
        "PALATO: Íntegro.",
        "CARDIOVASCULAR: RCR 2T, sem sopros.",
        "ABDOME: Coto umbilical com 2 artérias e 1 veia.",
        "GENITÁLIA: Masculina, testículos tópicos, fimose fisiológica.",
        "COLUNA: Sem abaulamentos.",
        "ORTOLANI/BARLOW: Negativo bilateralmente.",
        "REFLEXOS PRIMITIVOS: Moro, preensão palmar e plantar, sucção — presentes."
      ],
      labs: [],
      image: {
        title: "Avaliação Inicial do RN + Apgar 1º Minuto",
        report: "AVALIAÇÃO INICIAL (após passos iniciais):\n  Gestação: 39 semanas — a termo\n  Líquido amniótico: Claro\n  Após aquecimento e estímulo: choro fraco, tônus reduzido, FC 85 bpm, respiração irregular, cianose generalizada\n\nAPGAR — 1º MINUTO:\n  FC (<100 bpm)          → 1\n  Esforço respiratório (irregular) → 1\n  Tônus muscular (flexão leve)   → 1\n  Irritabilidade reflexa (careta)  → 1\n  Cor (cianótico)          → 0\n  TOTAL: 4 (depressão leve-moderada)"
      },
      note: "O RN chega à mesa de reanimação após a cesárea. O candidato deve avaliar os 3 critérios iniciais, decidir pelo clampeamento imediato e executar os passos iniciais. O Apgar deve ser calculado verbalmente. O exame físico pós-estabilização é entregue como impresso após a estabilização clínica ser verbalizada pelo candidato.",
      patientProfile: "RN masculino de M.S. Mãe: 28 anos, primigesta, professora.",
      script: [
        { trigger: "Sobre o que aconteceu (mãe — após estabilização)", speech: "Ele estava bem? Por que foi para aquela mesa?" },
        { trigger: "Sobre amamentação", speech: "Posso amamentar agora? Quero dar o peito." },
        { trigger: "Sobre alta", speech: "Quando posso ir para o quarto com ele?" }
      ],
      hiddenInfo: [
        "A mãe não sabe que o bebê precisou de VPP — só pergunta se o candidato se aproximar para explicar."
      ],
      actorBehavior: "Mãe acordada na mesa cirúrgica, ansiosa mas cooperativa. Tom de preocupação contida. Receptiva a explicações tranquilizadoras."
    },

    instC: {
      diagnosis: "RN a termo com depressão neonatal leve-moderada ao nascimento (Apgar 4 no 1º minuto) com necessidade de VPP. Recuperação completa após reanimação (Apgar esperado 7–8 no 5º minuto). Exame físico neonatal normal.",
      differentials: [
        "RN vigoroso — afastado pelo Apgar 4, choro fraco e tônus reduzido.",
        "Sepse neonatal precoce — afastada pela ausência de febre materna, corioamnionite e líquido claro; não é o diagnóstico principal neste momento.",
        "Encefalopatia hipóxico-isquêmica — a avaliar se Apgar persistentemente baixo após reanimação adequada."
      ],
      context: "RN a termo, 39 semanas, cesárea eletiva, líquido claro. Após os passos iniciais, persiste com choro fraco, tônus reduzido, FC 85 bpm e cianose — Apgar 4 no 1º minuto. Indicação de VPP com ar ambiente (21%). Após estabilização, exame físico neonatal completo — normal.",
      justify: "O RN não atende aos 3 critérios para permanecer com a mãe (choro fraco + tônus reduzido). Após os passos iniciais, FC <100 bpm e respiração irregular indicam VPP imediata com ar ambiente (21%), conforme SBP 2021. A aspiração rotineira NÃO é indicada com líquido claro. O clampeamento deve ser imediato (RN não vigoroso que vai para a mesa).",
      expectedAnamnesis: [
        "IG ao nascimento.",
        "Características do líquido amniótico.",
        "Pré-natal: intercorrências, doenças maternas, uso de medicamentos.",
        "Cardiotocografia e vitalidade fetal intraparto."
      ],
      expectedPhysical: [
        "3 critérios iniciais: a termo? tônus? choro/respiração?",
        "Passos iniciais: aquecimento, posicionamento, aspiração (somente se obstrução), estimulação.",
        "FC após passos iniciais: <100 bpm → VPP.",
        "Cálculo do Apgar: verbalizar os 5 critérios com as notas.",
        "Exame físico neonatal sistemático cabeça → pés (após estabilização).",
        "Reflexos primitivos: Moro, preensão palmar/plantar, sucção, Babinski."
      ],
      expectedExams: [
        { exam: "SpO₂ (oxímetro neonatal — pulso pré-ductal, mão direita)", justify: "Monitorar saturação durante a reanimação", expected: "Melhora progressiva após VPP" },
        { exam: "Glicemia capilar", justify: "Triagem de hipoglicemia neonatal", expected: "Normal neste caso" },
        { exam: "Gasometria", justify: "Se Apgar persistentemente baixo após reanimação adequada", expected: "Não indicada neste caso" }
      ],
      expectedConduct: [
        "Passos iniciais: Clampeamento imediato do cordão → mesa de reanimação → aquecer → posicionar (pescoço em leve extensão) → aspirar (somente se obstrução visível com líquido claro) → estimular (friccionar dorso ou solas dos pés).",
        "VPP: Iniciar com ar ambiente (FiO₂ 21%). Máscara cobrindo nariz e boca. Frequência: 40–60 movimentos/min. Verificar expansão torácica. Avaliar FC após 30 segundos.",
        "Progressão: FC ≥100 após VPP → manter suporte, monitorar. FC <60 após VPP adequada → aumentar FiO₂, checar técnica → intubação + massagem 3:1 + adrenalina.",
        "Após estabilização: Exame físico neonatal completo. Cuidados de rotina: vitamina K 1 mg IM, nitrato de prata ou eritromicina ocular, identificação, triagem neonatal (teste do pezinho a partir de 48h, orelhinha, olhinho, coraçãozinho).",
        "Orientações à mãe: Explicar que o bebê precisou de ajuda para começar a respirar mas está bem agora. Incentivar amamentação na primeira hora."
      ],
      expectedCommunication: [
        "Apresentação: nome, função, tom calmo e organizador.",
        "Comunicação do diagnóstico: explicar à mãe que o bebê precisou de ajuda para respirar na mesa, mas que está bem e os exames estão normais.",
        "Escuta ativa: responder à pergunta sobre amamentação com afirmação positiva e encorajamento."
      ],
      criticalErrors: [
        "Iniciar VPP com O₂ 100% sem antes tentar ar ambiente (21%) — erro crítico (SBP 2021).",
        "Não iniciar VPP com FC <100 bpm após os passos iniciais.",
        "Iniciar massagem cardíaca sem VPP prévia adequada.",
        "Aspirar rotineiramente com líquido amniótico claro — não recomendado.",
        "Fazer clampeamento oportuno em RN não vigoroso que vai para a mesa de reanimação."
      ]
    },

    instD: {
      title: "CHECKLIST — REANIMAÇÃO NEONATAL E EXAME FÍSICO DO RN A TERMO",
      sections: [
        {
          h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
          items: [
            { item: "Comunicou à mãe de forma clara e tranquilizadora o que aconteceu com o bebê.", score: 0.5, ref: "CFM, Res. 2.232/2019" },
            { item: "Incentivou o contato pele a pele e a amamentação na primeira hora após estabilização.", score: 0.5, ref: "MS. Atenção ao RN, 2020" }
          ]
        },
        {
          h: "BLOCO 2 — ANAMNESE / AVALIAÇÃO INICIAL",
          items: [
            { item: "Avaliou os 3 critérios iniciais: a termo? tônus adequado? choro/respiração?", score: 1.0, ref: "SBP. Reanimação Neonatal, 2021" },
            { item: "Decidiu pelo clampeamento imediato (RN não vigoroso para mesa de reanimação).", score: 0.5, ref: "SBP. Reanimação Neonatal, 2021" }
          ]
        },
        {
          h: "BLOCO 3 — EXAME FÍSICO / PASSOS INICIAIS",
          items: [
            { item: "Realizou passos iniciais: aqueceu, posicionou, estimulou (sem aspirar com líquido claro).", score: 1.0, ref: "SBP. Reanimação Neonatal, 2021" },
            { item: "Calculou e verbalizou o Apgar corretamente (total 4 no 1º minuto, 5 critérios).", score: 1.0, ref: "SBP. Reanimação Neonatal, 2021" },
            { item: "Realizou exame físico neonatal sistemático após estabilização (cabeça → pés).", score: 1.0, ref: "MS. Atenção ao RN, 2020" },
            { item: "Avaliou e verbalizou os reflexos primitivos (Moro, preensão, sucção).", score: 0.5, ref: "MS. Atenção ao RN, 2020" }
          ]
        },
        {
          h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
          items: [
            { item: "Indicou VPP com ar ambiente (FiO₂ 21%) — não com O₂ 100% — pela FC <100 bpm.", score: 1.5, ref: "SBP. Reanimação Neonatal, 2021" },
            { item: "Avaliou a resposta à VPP e descreveu os critérios de progressão.", score: 0.5, ref: "SBP. Reanimação Neonatal, 2021" }
          ]
        },
        {
          h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
          items: [
            { item: "Indicou cuidados de rotina do RN: vitamina K IM, profilaxia ocular, triagens neonatais.", score: 0.5, ref: "MS. Atenção ao RN, 2020" },
            { item: "Orientou a mãe sobre amamentação na primeira hora e contato pele a pele.", score: 0.5, ref: "MS. Atenção ao RN, 2020" }
          ]
        }
      ]
    }
  },

  // ── ESTAÇÃO 8: Neonatologia — Doença da Membrana Hialina ────────────────────
  {
    id: 8,
    title: "RN com 2 horas de vida com 'respiração estranha' e gemido",
    sub: "Maternidade / UTI Neonatal",
    tema: 'Neonatologia',
    topic: "membrana-hialina",
    level: "difícil",
    cardAccent: "#37474F",

    instA: {
      scenario: "Atenção Hospitalar — Maternidade, alojamento conjunto / UTI Neonatal. Berço aquecido, oxímetro, O₂, CPAP nasal disponíveis.",
      patient: "RN masculino, 2 horas de vida, 36 semanas, cesárea eletiva. Mãe diabética gestacional. A mãe refere que o bebê está com 'respiração estranha' e 'fazendo barulho'.",
      complaint: "RN de 36 semanas com 2 horas de vida com desconforto respiratório — gemido e respiração rápida.",
      tasks: [
        "Avalie o RN de forma sistemática.",
        "Verbalize a avaliação respiratória de forma estruturada.",
        "Solicite os exames complementares que julgar pertinentes e interprete-os.",
        "Formule a hipótese diagnóstica principal e os diagnósticos diferenciais.",
        "Defina a conduta adequada e comunique à mãe."
      ]
    },

    instB: {
      vitals: {
        PA: "—",
        FC: "152 bpm",
        FR: "74 irpm",
        Tax: "36,8°C",
        Peso: "3.100 g",
        Altura: "49 cm",
        IMC: "IG: 38 semanas"
      },
      physicalGeneral: "RN com desconforto respiratório moderado, gemência expiratória audível.",
      physicalSeg: [
        "SpO₂: 91% em ar ambiente.",
        "RESPIRATÓRIO: Taquipneia (74 irpm), gemência expiratória audível sem estetoscópio, retração intercostal e xifoidea, batimento de asa de nariz.",
        "CARDIOVASCULAR: Taquicardia, sem sopros.",
        "TÔNUS: Levemente reduzido.",
        "ESTADO GERAL: Comprometido pelo desconforto respiratório."
      ],
      labs: [
        { test: "pH", val: "7,24", ref: "7,35–7,45", alt: true },
        { test: "pCO₂", val: "55 mmHg", ref: "35–45", alt: true },
        { test: "pO₂", val: "42 mmHg", ref: "60–80", alt: true },
        { test: "HCO₃", val: "23 mEq/L", ref: "22–26", alt: false },
        { test: "BE", val: "-3", ref: "-2 a +2", alt: true }
      ],
      image: {
        title: "Escore de Silverman-Andersen + RX de Tórax",
        report: "SILVERMAN-ANDERSEN:\n  Balanço toraco-abdominal → 0\n  Retração intercostal     → 1\n  Retração xifoidea        → 1\n  Batimento de asa de nariz → 1\n  Gemência expiratória     → 2 (audível sem estetoscópio)\n  TOTAL: 5 — desconforto moderado\n\nRX DE TÓRAX:\n  Infiltrado reticulogranular difuso bilateral, broncograma aéreo proeminente, aspecto em 'vidro despolido'. Pulmões com volume reduzido.\n  CONCLUSÃO: Padrão sugestivo de Doença da Membrana Hialina (DMH)."
      },
      note: "O Silverman-Andersen é avaliado verbalmente pelo candidato — entregar a tabela após a verbalização da avaliação de cada parâmetro. RX e gasometria somente se solicitados verbalmente.",
      patientProfile: "RN masculino de C.R. Mãe: 32 anos, professora, diabética gestacional.",
      script: [
        { trigger: "Preocupação inicial (mãe)", speech: "Esse barulhinho é normal? Ele parece com dificuldade de respirar." },
        { trigger: "Sobre diabetes", speech: "Eu tive diabetes na gravidez, fiz dieta e insulina no final." },
        { trigger: "Pergunta ativa", speech: "É grave? Vai precisar de UTI?" },
        { trigger: "Pergunta ativa", speech: "Consigo amamentar? Posso ficar com ele?" }
      ],
      hiddenInfo: [
        "A mãe tomou corticoide antenatal apenas 1 dose (incompleta) — só revela se perguntada sobre uso de medicamentos na gestação.",
        "Não houve sofrimento fetal intraparto — só relevante se o candidato perguntar sobre CTG e vitalidade fetal."
      ],
      actorBehavior: "Mãe preocupada, deitada no leito, ainda em recuperação pós-cirúrgica. Tom ansioso mas controlado. Muito receptiva a explicações."
    },

    instC: {
      diagnosis: "Doença da Membrana Hialina (DMH) / Síndrome do Desconforto Respiratório do RN — prematuro tardio (38 semanas), filho de mãe diabética gestacional (fatores de risco para deficiência de surfactante).",
      differentials: [
        "Taquipneia Transitória do RN (TTRN) — considerar pela cesárea eletiva sem trabalho de parto; diferenciada pela persistência >6h, padrão RX diferente (infiltrado perihilar, líquido na cissura) e Silverman mais leve.",
        "Pneumonia neonatal — considerar se história de corioamnionite, febre materna ou rotura prolongada de membranas; sem esses fatores, menos provável.",
        "Hipertensão pulmonar persistente do RN — considerar se cianose sem melhora ao O₂ e RX pouco alterado."
      ],
      context: "RN de 36 semanas (prematuro), filho de mãe diabética gestacional, com desconforto respiratório moderado desde as primeiras horas de vida (Silverman 5), SpO₂ 91%, RX com padrão em vidro despolido e broncograma aéreo — diagnóstico de DMH. A diabetes materna retarda a maturação pulmonar fetal.",
      justify: "A DMH resulta da deficiência de surfactante, que estabiliza os alvéolos. Fatores de risco neste caso: prematuridade tardia (38 semanas — maturação pulmonar ainda incompleta) e filho de mãe diabética (hiperinsulinismo fetal inibe a síntese de surfactante). O quadro clínico (taquipneia, gemência, Silverman 5) e o RX (vidro despolido, broncograma, volume reduzido) são clássicos.",
      expectedAnamnesis: [
        "IG e tipo de parto.",
        "Diabetes gestacional: controle, uso de insulina, hemoglobina glicada.",
        "Uso de corticoide antenatal (betametasona).",
        "Sofrimento fetal intraparto (CTG, pH do cordão).",
        "Rotura de membranas e características do líquido amniótico.",
        "Febre materna / corioamnionite."
      ],
      expectedPhysical: [
        "FR (taquipneia neonatal: >60 irpm).",
        "SpO₂ pré-ductal (mão direita).",
        "Cálculo do Escore de Silverman-Andersen (5 parâmetros).",
        "Ausculta pulmonar: MV reduzido, sem crepitações grossas.",
        "Avaliação do tônus e estado geral."
      ],
      expectedExams: [
        { exam: "RX de tórax", justify: "Confirmar DMH e afastar outras causas", expected: "Vidro despolido bilateral, broncograma" },
        { exam: "Gasometria arterial", justify: "Avaliar gravidade: acidose respiratória", expected: "pH 7,24, pCO₂ 55, pO₂ 42" },
        { exam: "Glicemia capilar", justify: "Triagem de hipoglicemia (filho de diabética)", expected: "Avaliar" },
        { exam: "Hemograma + hemocultura", justify: "Afastar pneumonia/sepse neonatal", expected: "Considerar antes de ATB" }
      ],
      expectedConduct: [
        "Farmacológica: Surfactante exógeno (poractant alfa ou beractant) intratraqueal — indicado se FiO₂ >30% em CPAP ou se falha do CPAP. Técnica INSURE (INtubação → SURfactante → Extubação para CPAP) ou LISA/MIST se disponível. Antibioticoterapia empírica enquanto aguarda culturas (ampicilina + gentamicina) se não for possível afastar sepse.",
        "Não farmacológica: CPAP nasal (pressão 5–7 cmH₂O) como primeira linha. O₂ suplementar para manter SpO₂ 91–95% (evitar hiperoxia no prematuro). Manter temperatura, glicemia e suporte nutricional.",
        "Encaminhamento: Transferência imediata para UTI Neonatal.",
        "Orientações à mãe: Explicar que o bebê tem dificuldade para respirar porque o pulmão ainda não produziu suficiente da substância que o ajuda a se expandir. Informar sobre a necessidade de UTI, que a amamentação será apoiada (ordenha se necessário) e que ela poderá visitar o bebê.",
        "Seguimento: Monitoração contínua em UTI. Reavaliação da necessidade de surfactante em 6–12h."
      ],
      expectedCommunication: [
        "Apresentação: nome, função, tom calmo e empático com mãe em recuperação pós-cirúrgica.",
        "Comunicação do diagnóstico: explicar de forma acessível que o pulmão do bebê precisa de ajuda para funcionar, que o tratamento existe e é eficaz, e que ele estará na UTI com monitoração contínua.",
        "Escuta ativa: confirmar que a mãe poderá amamentar (com apoio da ordenha) e visitar o filho."
      ],
      criticalErrors: [
        "Não reconhecer desconforto respiratório moderado (Silverman 5, SpO₂ 91%).",
        "Não solicitar RX de tórax.",
        "Não indicar CPAP nasal como primeira linha.",
        "Confundir com TTRN e atrasar o tratamento (TTRN é diagnóstico de exclusão, melhora em 24–72h).",
        "Não transferir para UTI Neonatal."
      ]
    },

    instD: {
      title: "CHECKLIST — DESCONFORTO RESPIRATÓRIO NEONATAL: DOENÇA DA MEMBRANA HIALINA",
      sections: [
        {
          h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
          items: [
            { item: "Apresentou-se e abordou a mãe em recuperação com empatia e clareza.", score: 0.5, ref: "CFM, Res. 2.232/2019" },
            { item: "Explicou o diagnóstico de forma acessível (pulmão do bebê precisa de ajuda).", score: 0.5, ref: "MS. Comunicação em Saúde, 2022" },
            { item: "Confirmou que a amamentação será apoiada e que a mãe poderá visitar o filho.", score: 0.5, ref: "MS. Atenção ao RN, 2020" }
          ]
        },
        {
          h: "BLOCO 2 — ANAMNESE",
          items: [
            { item: "Investigou IG, tipo de parto e diabetes gestacional.", score: 0.5, ref: "SBP. Reanimação Neonatal, 2021" },
            { item: "Perguntou sobre uso de corticoide antenatal.", score: 0.5, ref: "ERS. Consensus RDS, 2022" },
            { item: "Perguntou sobre sofrimento fetal e características do líquido amniótico.", score: 0.5, ref: "SBP. Reanimação Neonatal, 2021" }
          ]
        },
        {
          h: "BLOCO 3 — EXAME FÍSICO",
          items: [
            { item: "Avaliou FR (74 irpm — taquipneia neonatal) e SpO₂ (91%).", score: 0.5, ref: "SBP. Reanimação Neonatal, 2021" },
            { item: "Calculou e verbalizou o Silverman-Andersen corretamente (total 5 — desconforto moderado).", score: 1.5, ref: "MS. Atenção ao RN, 2020" }
          ]
        },
        {
          h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
          items: [
            { item: "Solicitou RX de tórax com justificativa.", score: 0.5, ref: "ERS. Consensus RDS, 2022" },
            { item: "Solicitou gasometria arterial com justificativa.", score: 0.5, ref: "ERS. Consensus RDS, 2022" },
            { item: "Formulou diagnóstico correto: DMH em prematuro tardio filho de mãe diabética.", score: 1.0, ref: "ERS. Consensus RDS, 2022" }
          ]
        },
        {
          h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
          items: [
            { item: "Indicou CPAP nasal como primeira linha de suporte respiratório.", score: 1.0, ref: "ERS. Consensus RDS, 2022 · SBP, 2021" },
            { item: "Mencionou surfactante exógeno como próximo passo se falha do CPAP.", score: 0.5, ref: "ERS. Consensus RDS, 2022" },
            { item: "Indicou transferência para UTI Neonatal.", score: 0.5, ref: "MS. Atenção ao RN, 2020" }
          ]
        }
      ]
    }
  },

  // ── ESTAÇÃO 9: Neonatologia — Icterícia Neonatal / Incompatibilidade Rh ──────
  {
    id: 9,
    title: "RN de 36 horas de vida ficando 'amarelinho'",
    sub: "Maternidade — Alojamento Conjunto",
    tema: 'Neonatologia',
    topic: "ictericia-neonatal",
    level: "difícil",
    cardAccent: "#F9A825",

    instA: {
      scenario: "Atenção Hospitalar — Maternidade, alojamento conjunto. A enfermeira solicita avaliação do RN.",
      patient: "RN, 36 horas de vida, masculino. Parto normal a termo. Mãe O negativo, RN A positivo. A mãe percebeu que o bebê 'está ficando amarelinho'.",
      complaint: "RN de 36 horas de vida com icterícia progressiva — mãe O negativo, RN Rh positivo.",
      tasks: [
        "Apresente-se e acolha a mãe de forma empática.",
        "Realize anamnese sobre o quadro atual do recém-nascido.",
        "Solicite e interprete o exame físico.",
        "Solicite os exames laboratoriais que julgar pertinentes e interprete-os.",
        "Formule o diagnóstico e indique o tratamento adequado com justificativa.",
        "Comunique à mãe o diagnóstico e a conduta de forma clara e empática."
      ]
    },

    instB: {
      vitals: {
        PA: "—",
        FC: "148 bpm",
        FR: "44 irpm",
        Tax: "36,8°C",
        Peso: "3.100 g (ao nascer: 3.300 g)",
        Altura: "—",
        IMC: "IG: 39 semanas · Perda: ~6%"
      },
      physicalGeneral: "Regular, hipoativo, sugando pouco.",
      physicalSeg: [
        "ICTERÍCIA — ZONA DE KRAMER: Zona IV (membros superiores e inferiores até os joelhos).",
        "HEPATOESPLENOMEGALIA: Esplenomegalia leve (+2 cm).",
        "PALIDEZ: Leve.",
        "URINA: Colúria (urina escura).",
        "FONTANELA: Normotensa.",
        "NEUROLÓGICO: Hipoativo, hipotônico."
      ],
      labs: [
        { test: "Bilirrubina total", val: "18,5 mg/dL", ref: "—", alt: true },
        { test: "Bilirrubina direta", val: "0,9 mg/dL", ref: "—", alt: false },
        { test: "Bilirrubina indireta", val: "17,6 mg/dL", ref: "—", alt: true },
        { test: "Hemoglobina", val: "10,2 g/dL", ref: "—", alt: true },
        { test: "Hematócrito", val: "30%", ref: "—", alt: true },
        { test: "Reticulócitos", val: "12%", ref: "—", alt: true },
        { test: "Coombs direto (TCD)", val: "Positivo 3+", ref: "Negativo", alt: true },
        { test: "Grupo sanguíneo RN", val: "A Rh positivo", ref: "—", alt: false },
        { test: "Grupo sanguíneo mãe", val: "O Rh negativo", ref: "—", alt: false }
      ],
      image: null,
      note: "Entregar o exame físico após solicitação verbal. Os exames laboratoriais são entregues somente após solicitação específica de cada exame ou do conjunto (bilirrubinas, hemograma, tipagem sanguínea, Coombs).",
      patientProfile: "RN masculino de T.O. Mãe: 26 anos, auxiliar administrativa, Rh negativo (não sabia que poderia causar problema).",
      script: [
        { trigger: "Queixa principal", speech: "Doutor, ele está ficando amarelinho. Isso é normal?" },
        { trigger: "Sobre amamentação", speech: "Ele está mamando pouco, fica sonolento. Ontem mamava mais." },
        { trigger: "Sobre urina", speech: "Achei que a fralda estava com um xixi mais escuro hoje." },
        { trigger: "Sobre o tipo sanguíneo", speech: "Eu sei que sou sangue O negativo, mas nunca me explicaram o que isso significava na gravidez." },
        { trigger: "Pergunta ativa", speech: "Vai precisar fazer alguma coisa? Posso continuar amamentando?" },
        { trigger: "Pergunta ativa", speech: "Isso foi por causa do meu sangue? Eu causei isso?" }
      ],
      hiddenInfo: [
        "A mãe não recebeu imunoglobulina anti-D (RhoGAM) na gestação anterior — só revela se perguntada sobre gestações anteriores e uso de anti-D.",
        "O RN ficou amarelado desde as primeiras 12 horas de vida, mas a mãe não avisou — só revela se perguntada sobre quando exatamente percebeu."
      ],
      actorBehavior: "Mãe preocupada, com sentimento de culpa ao descobrir que o tipo sanguíneo dela pode ter causado o problema. Tom ansioso e culpado. Receptiva a esclarecimentos."
    },

    instC: {
      diagnosis: "Doença Hemolítica do Recém-Nascido (DHRN) por incompatibilidade Rh (anti-D) com hiperbilirrubinemia grave e anemia hemolítica.",
      differentials: [
        "Icterícia fisiológica — afastada pelo início precoce (<24h, conforme informação escondida), progressão rápida, Coombs positivo e anemia hemolítica.",
        "Incompatibilidade ABO — considerar (mãe O, RN A), mas o Coombs fortemente positivo e a gravidade apontam para incompatibilidade Rh como mecanismo principal.",
        "Esferocitose hereditária — afastada pela ausência de história familiar e pela presença de Coombs positivo."
      ],
      context: "RN de 36 horas, a termo, com icterícia zona IV de Kramer, bilirrubina total 18,5 mg/dL (predominantemente indireta), anemia hemolítica (Hb 10,2g/dL, reticulocitose 12%), Coombs direto positivo 3+, esplenomegalia e colúria. Mãe O Rh negativo, RN A Rh positivo — incompatibilidade Rh com aloimunização materna (anti-D). Indicação de fototerapia intensiva e avaliação para exsanguineotransfusão pelo nomograma de Bhutani.",
      justify: "A incompatibilidade Rh ocorre quando mãe Rh negativa é sensibilizada por hemácias Rh positivas do feto (geralmente em gestação anterior ou procedimento invasivo) e produz anticorpos IgG anti-D, que atravessam a placenta e destroem as hemácias fetais. O Coombs direto positivo 3+ confirma hemólise mediada por anticorpos. A BT 18,5 mg/dL em RN com 36h de vida é patológica e requer fototerapia intensiva imediata com avaliação pelo nomograma de Bhutani para exsanguineotransfusão.",
      expectedAnamnesis: [
        "Quando a mãe percebeu a icterícia pela primeira vez (início nas primeiras 24h?).",
        "Alimentação: volume e frequência das mamadas.",
        "Diurese: número e cor das fraldas.",
        "Colúria e acolia fecal.",
        "Grupo sanguíneo materno (já conhecido: O Rh negativo).",
        "Gestações anteriores: número, abortamentos, procedimentos invasivos.",
        "Uso de imunoglobulina anti-D na gestação atual e anterior.",
        "Pré-natal: pesquisa de anticorpos irregulares (Coombs indireto materno)."
      ],
      expectedPhysical: [
        "Estado geral e nível de alerta (hipoatividade = sinal de alerta neurológico).",
        "Classificação da icterícia pelas zonas de Kramer (I a V).",
        "Pesquisa de palidez (anemia hemolítica).",
        "Pesquisa de hepatoesplenomegalia.",
        "Avaliação neurológica: tônus, reflexos, choro (sinais de encefalopatia bilirrubínica).",
        "Avaliação das fezes (acolia) e urina (colúria)."
      ],
      expectedExams: [
        { exam: "Bilirrubinas total, direta e indireta", justify: "Quantificar e classificar a hiperbilirrubinemia", expected: "BT 18,5 mg/dL, BI 17,6 mg/dL" },
        { exam: "Hemograma com reticulócitos", justify: "Avaliar anemia hemolítica", expected: "Hb 10,2, Ht 30%, Retic 12%" },
        { exam: "Coombs direto (TCD)", justify: "Confirmar hemólise por anticorpos", expected: "Positivo 3+" },
        { exam: "Tipagem sanguínea do RN", justify: "Confirmar incompatibilidade", expected: "A Rh positivo" }
      ],
      expectedConduct: [
        "Farmacológica: Fototerapia intensiva imediata (indicada pela BT e pela idade em horas no nomograma de Bhutani, com fatores de risco — Coombs positivo, hemólise, BI elevada). Imunoglobulina EV (0,5–1 g/kg) se fototerapia intensiva falhar ou BT próxima ao limiar de exsanguineotransfusão. Exsanguineotransfusão se atingir o limiar do nomograma de Bhutani para alto risco — não há valor fixo universal.",
        "Não farmacológica: Manter amamentação (não suspender). Hidratação adequada. Monitorar bilirrubina sérica a cada 4–6h durante fototerapia intensiva.",
        "Encaminhamento: Banco de sangue para tipagem e reserva de hemácias para eventual exsanguineotransfusão.",
        "Orientações à mãe: Explicar a incompatibilidade Rh sem culpabilizá-la. Esclarecer que o problema foi identificado e o tratamento será iniciado agora. Confirmar que a amamentação será mantida. Orientar sobre a fototerapia (olhos protegidos, não significa que o bebê está em perigo imediato).",
        "Seguimento: Controle de BT a cada 4–6h durante fototerapia intensiva. Reavaliação pelo nomograma. Na próxima gestação: Coombs indireto materno e imunoglobulina anti-D profilática."
      ],
      expectedCommunication: [
        "Apresentação: nome, função, tom acolhedor com mãe culpada.",
        "Comunicação do diagnóstico: explicar que há uma diferença no tipo de sangue entre ela e o bebê, e que isso causou uma reação que está sendo tratada. Acolher o sentimento de culpa sem reforçá-lo.",
        "Escuta ativa: responder à pergunta 'eu causei isso?' com empatia e clareza técnica."
      ],
      criticalErrors: [
        "Não solicitar Coombs direto.",
        "Não identificar a incompatibilidade Rh como causa da hemólise.",
        "Não indicar fototerapia intensiva imediatamente.",
        "Suspender amamentação sem indicação.",
        "Citar valor fixo de BT como critério universal de exsanguineotransfusão sem mencionar o nomograma de Bhutani e os fatores de risco individuais."
      ]
    },

    instD: {
      title: "CHECKLIST — ICTERÍCIA NEONATAL POR INCOMPATIBILIDADE RH",
      sections: [
        {
          h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
          items: [
            { item: "Apresentou-se e acolheu o sentimento de culpa da mãe com empatia.", score: 0.5, ref: "CFM, Res. 2.232/2019" },
            { item: "Explicou a incompatibilidade Rh em linguagem acessível, sem culpabilizar.", score: 0.5, ref: "MS. Comunicação em Saúde, 2022" },
            { item: "Confirmou que a amamentação será mantida.", score: 0.5, ref: "SBP. Hiperbilirrubinemia, 2021" }
          ]
        },
        {
          h: "BLOCO 2 — ANAMNESE",
          items: [
            { item: "Perguntou quando percebeu a icterícia (início precoce <24h = patológico).", score: 0.5, ref: "SBP. Hiperbilirrubinemia, 2021" },
            { item: "Investigou alimentação, diurese, colúria e acolia.", score: 0.5, ref: "SBP. Hiperbilirrubinemia, 2021" },
            { item: "Perguntou sobre gestações anteriores e uso de imunoglobulina anti-D.", score: 0.5, ref: "SBP. Hiperbilirrubinemia, 2021" }
          ]
        },
        {
          h: "BLOCO 3 — EXAME FÍSICO",
          items: [
            { item: "Avaliou e classificou a icterícia pelas zonas de Kramer (identificou Zona IV).", score: 1.0, ref: "SBP. Hiperbilirrubinemia, 2021" },
            { item: "Pesquisou e identificou palidez e esplenomegalia.", score: 0.5, ref: "SBP. Hiperbilirrubinemia, 2021" },
            { item: "Avaliou estado neurológico (hipoatividade, tônus).", score: 0.5, ref: "SBP. Hiperbilirrubinemia, 2021" }
          ]
        },
        {
          h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
          items: [
            { item: "Solicitou bilirrubinas (total, direta, indireta), hemograma com reticulócitos e Coombs direto.", score: 1.0, ref: "SBP. Hiperbilirrubinemia, 2021" },
            { item: "Identificou incompatibilidade Rh como causa (mãe O Rh-, RN Rh+, Coombs 3+, hemólise).", score: 1.0, ref: "SBP. Hiperbilirrubinemia, 2021" }
          ]
        },
        {
          h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
          items: [
            { item: "Indicou fototerapia intensiva imediatamente com justificativa.", score: 1.0, ref: "SBP. Hiperbilirrubinemia, 2021 · AAP, 2022" },
            { item: "Avaliou e mencionou critérios para exsanguineotransfusão pelo nomograma de Bhutani (não citou valor fixo).", score: 1.0, ref: "SBP. Hiperbilirrubinemia, 2021" },
            { item: "Orientou controle seriado de bilirrubina (a cada 4–6h durante fototerapia intensiva).", score: 0.5, ref: "SBP. Hiperbilirrubinemia, 2021" }
          ]
        }
      ]
    }
  },

  {
      id: 11,
      title: "Bebê de 12 dias – resultado alterado no teste do pezinho",
      sub: "UBS – Atenção Primária",
      tema: 'Neonatologia',
      topic: "Triagem Neonatal / Hipotireoidismo Congênito",
      level: "moderado",
      cardAccent: "#4f9cf9",

        instA: {
            scenario: "Atenção Primária à Saúde, UBS. Consultório de puericultura, turno diurno.",
            patient: "B.S., 12 dias de vida, feminino. Mãe: 26 anos, auxiliar administrativa, sem comorbidades conhecidas. Parto vaginal a termo, sem intercorrências referidas.",
            complaint: "Mãe comparece à primeira consulta de puericultura e menciona que 'fizeram uns testes no hospital antes de sair, mas não me explicaram direito o que eram'. Traz a caderneta da criança.",
            tasks: [
                "Apresente-se à mãe e estabeleça vínculo antes de iniciar o atendimento.",
                "Verifique na caderneta de saúde quais triagens neonatais foram realizadas e identifique pendências ou alterações.",
                "Explique à mãe o que é cada triagem neonatal, para que serve e o que ocorre se não for realizada.",
                "Solicite o exame físico pertinente e interprete os achados encontrados.",
                "Defina a conduta adequada diante dos resultados e dos achados clínicos.",
                "Oriente a mãe sobre o seguimento e os próximos passos."
            ]
        },

        instB: {
            vitals: {
            PA: null,
            FC: "134 bpm",
            FR: "42 irpm",
            Tax: "36,8°C",
            Peso: "3.600 g",
            Altura: "50 cm",
            IMC: null
            },
            physicalGeneral: "Regular estado geral para a situação. Ativa ao estímulo, porém com resposta diminuída. Rósea, hidratada, anictérica ao exame inicial. Choro fraco.",
            physicalSeg: [
                "NEUROLÓGICO: Hipotonia leve; reflexos primitivos (Moro, preensão palmar, sucção) presentes, porém com intensidade levemente diminuída.",
                "FACE: Fácies mixedematosa leve; macroglossia discreta; choro rouco.",
                "FONTANELAS: Bregmática abaulada (+); lambdoide normal.",
                "CARDIOVASCULAR: RCR 2T, bulhas normofonéticas, sem sopros; FC 134 bpm.",
                "RESPIRATÓRIO: MV presente bilateralmente, sem ruídos adventícios; FR 42 irpm.",
                "ABDOME: Hérnia umbilical (+); fígado e baço não palpáveis.",
                "PELE: Ressecada, com leve mottling; lanugo em dorso."
            ],
            labs: [
            { test: "TSH (papel-filtro – teste do pezinho)", val: "Elevado – encaminhado para confirmação", ref: "< 10 mUI/L", alt: true },
            { test: "TSH sérico", val: "98 mUI/L", ref: "0,5–5,0 mUI/L", alt: true },
            { test: "T4 livre sérico", val: "0,4 ng/dL", ref: "0,8–2,0 ng/dL", alt: true }
            ],
            image: null,
            note: "Entregar a caderneta de saúde (impresso com triagens neonatais) ao início da estação. Entregar o impresso de exame físico somente se o candidato solicitar verbalmente o exame físico. Entregar os resultados laboratoriais de TSH e T4 livre séricos somente se o candidato solicitá-los especificamente (não entregar apenas pela solicitação do 'teste do pezinho' – o papel-filtro já consta na caderneta).",
            patientProfile: "Beatriz S., 12 dias de vida, feminino. Mãe: Camila S., 26 anos, auxiliar administrativa, casada. Parto vaginal a termo (39 semanas), sem intercorrências. Aleitamento materno exclusivo em curso, porém com dificuldade – bebê mama pouco e dorme muito.",
            script: [
            { trigger: "Abertura / queixa principal", speech: "Boa tarde, doutor(a). Vim fazer a consultinha da Beatriz. Ela nasceu bem, mas lá no hospital fizeram uns testes e um deles deu alguma coisa errada. Ninguém me explicou direito. Fiquei preocupada." },
            { trigger: "Sobre o teste do pezinho", speech: "Falaram que o resultado de um dos testes deu alterado, que era no sangue do calcanhar. Deram um papel para eu vir cá, mas não me disseram o que era." },
            { trigger: "Sobre amamentação", speech: "Eu tô amamentando, mas ela mama pouco. Fica dormindo na hora de mamar, tenho que ficar acordando ela. Às vezes fico preocupada que ela não tá comendo o suficiente." },
            { trigger: "Sobre o choro da bebê", speech: "O choro dela é meio fraquinho, né? Diferente do que eu esperava. Às vezes parece rouco." },
            { trigger: "Sobre o umbigo", speech: "Ah, o umbigo dela é estufado assim desde que nasceu. É normal?" },
            { trigger: "Sobre a linguinha", speech: "Ah, esse teste da linguinha… eles falaram que iam fazer antes de eu sair, mas não fizeram não. Ficou pra fazer aqui." },
            { trigger: "Pergunta ativa – diagnóstico", speech: "O que é isso que deu errado no teste, doutor(a)? É grave?" },
            { trigger: "Pergunta ativa – tratamento", speech: "Ela vai precisar tomar remédio para sempre? Tem cura?" },
            { trigger: "Pergunta ativa – amamentação", speech: "Posso continuar amamentando mesmo com o remédio?" },
            { trigger: "Pergunta ativa – desenvolvimento", speech: "Isso vai afetar o desenvolvimento dela? Ela vai ser normal?" }
            ],
            hiddenInfo: [
            "A mãe não sabe informar se fez todas as sorologias do pré-natal – só revela se o candidato perguntar especificamente sobre exames do pré-natal: 'Fiz o pré-natal, mas não lembro de todos os exames. Acho que fiz tudo que mandaram.'",
            "A bebê ainda não realizou o teste da linguinha – só revela se o candidato perguntar especificamente sobre esse teste: 'Eles falaram que iam fazer, mas quando fui embora do hospital não tinham feito.'"
            ],
            actorBehavior: "Mãe ansiosa e amorosa, visivelmente preocupada com o resultado alterado do teste. Colaborativa e receptiva às explicações. Demonstra insegurança sobre a amamentação. Responde prontamente às perguntas, mas não oferece informações espontaneamente além das mencionadas na abertura. Reage com alívio visível quando o médico explica com clareza. Se o candidato não se apresentar ou não explicar o que vai fazer, permanece tensa e quieta."
        },

        instC: {
            diagnosis: "Hipotireoidismo congênito primário detectado pelo Programa Nacional de Triagem Neonatal (PNTN). Teste do pezinho com TSH elevado confirmado por TSH sérico 98 mUI/L e T4 livre baixo (0,4 ng/dL). Achados clínicos compatíveis: macroglossia, hipotonia, fontanela abaulada, hérnia umbilical, choro rouco, sonolência excessiva.",
            differentials: [
            "Hipotireoidismo transitório neonatal – TSH elevado transitório, mais comum em prematuros ou após exposição a iodo; excluído pela clínica sugestiva e pela confirmação sérica com T4 baixo.",
            "Síndrome de Down – hipotonia, macroglossia e fontanelas abauladas podem mimetizar; excluído pela ausência de dismorfias típicas e confirmado pelo perfil tireoidiano.",
            "Infecção congênita (TORSCH) – pode causar hipotonia e alterações sistêmicas; excluído pela ausência de petéquias, hepatoesplenomegalia e sorologias negativas no pré-natal."
            ],
            context: "Lactente feminina de 12 dias com hipotireoidismo congênito detectado pelo teste do pezinho, confirmado laboratorialmente. Apresenta achados clínicos clássicos da doença. O diagnóstico e o tratamento precoces são essenciais para prevenir déficit intelectual irreversível.",
            justify: "TSH sérico 98 mUI/L (VR < 5,0 mUI/L) com T4 livre 0,4 ng/dL (VR 0,8–2,0 ng/dL) confirmam hipotireoidismo congênito primário. A clínica reforça: macroglossia, hipotonia, fontanela bregmática abaulada, hérnia umbilical, choro rouco e sonolência excessiva são sinais clássicos. O teste do pezinho com TSH elevado no papel-filtro foi a triagem positiva que motivou a consulta.",
            expectedAnamnesis: [
            "Identificar qual teste do pezinho alterou e verificar na caderneta todos os 5 testes do PNTN.",
            "Investigar se o teste da linguinha foi realizado (pendente).",
            "Perguntar sobre amamentação: frequência, duração, ganho de peso.",
            "Investigar comportamento da bebê: sonolência, choro, atividade.",
            "Perguntar sobre pré-natal: sorologias, intercorrências, uso de medicamentos pela mãe (amiodarona, propiltiouracil).",
            "Investigar histórico familiar de doença tireoidiana.",
            "Perguntar sobre icterícia prolongada (dado relevante mesmo que não presente)."
            ],
            expectedPhysical: [
            "Sinais vitais: aferir FC (taquicardia ou bradicardia), Tax, peso e comparar com peso ao nascer.",
            "Inspeção: fácies (mixedematosa), coloração (palidez, icterícia), edema, choro (rouco?).",
            "Palpação: fontanelas (abaulamento), abdome (hérnia umbilical, visceromegalias), tônus muscular.",
            "Neurológico: reflexos primitivos, tônus, nível de alerta.",
            "Tireoide: palpação do pescoço (bócio – ausente nesse caso).",
            "Manobra específica: avaliação do reflexo de sucção e preensão palmar (diminuídos)."
            ],
            expectedExams: [
            { exam: "TSH sérico", justify: "Confirmar resultado do papel-filtro", expected: "Elevado: 98 mUI/L" },
            { exam: "T4 livre sérico", justify: "Confirmar hipofunção tireoidiana", expected: "Baixo: 0,4 ng/dL" },
            { exam: "Hemograma", justify: "Investigar anemia associada", expected: "Pode mostrar anemia leve" },
            { exam: "Ultrassom de tireoide", justify: "Identificar agenesia, hipoplasia ou ectopia – realizado pelo especialista", expected: "Solicitado pelo endocrinologista pediátrico" }
            ],
            expectedConduct: [
            "Farmacológica: Levotiroxina sódica 10–15 mcg/kg/dia VO, dose única diária em jejum – iniciar imediatamente após confirmação laboratorial (idealmente até o 14º dia de vida). Dose calculada para 3,6 kg: 36–54 mcg/dia – iniciar com 37,5 mcg/dia (comprimido fracionado). Ajuste conforme TSH e T4L de controle. (Referência: MS/PNTN 2023; SBP 2021)",
            "Não farmacológica: Manter aleitamento materno exclusivo; orientar administração do medicamento 30 minutos antes da mamada; não administrar junto com fórmulas de soja (reduzem absorção).",
            "Encaminhamento: Endocrinologia pediátrica com urgência (dentro de 7 dias).",
            "Orientações ao paciente: Explicar à mãe que o hipotireoidismo congênito é tratável; que o remédio precisará ser usado por toda a vida (na maioria dos casos); que o tratamento precoce previne atraso no desenvolvimento; que o leite materno pode e deve ser mantido; administrar o remédio diluído em pequena quantidade de água ou leite materno (não diluir em mamadeira cheia).",
            "Seguimento: TSH e T4 livre séricos a cada 2 semanas no primeiro mês; retorno em 15 dias; encaminhamento ao endocrinologista pediátrico com urgência. Agendar avaliação do teste da linguinha (frenilho lingual)."
            ],
            expectedCommunication: [
            "Apresentação: Apresentar-se pelo nome, cargo, cumprimentar a mãe e a bebê, criar vínculo antes de iniciar perguntas.",
            "Comunicação do diagnóstico: Explicar em linguagem acessível que o teste detectou que a glândula tireoide da bebê não está funcionando bem; que isso é tratável com um remédio simples; que quanto mais cedo tratar, melhor para o desenvolvimento da criança.",
            "Escuta ativa: Validar a preocupação da mãe; responder com clareza às perguntas sobre tratamento, amamentação e desenvolvimento; evitar termos técnicos sem explicação; perguntar se a mãe ficou com alguma dúvida ao final."
            ],
            criticalErrors: [
            "Não reconhecer o TSH alterado no papel-filtro como urgência diagnóstica que exige confirmação imediata.",
            "Não solicitar confirmação laboratorial (TSH e T4 livre séricos) antes de iniciar o tratamento.",
            "Tranquilizar a mãe sem investigar os achados clínicos sugestivos (macroglossia, hipotonia, fontanela abaulada).",
            "Não indicar levotiroxina mesmo com TSH sérico e T4 livre confirmando hipotireoidismo.",
            "Não encaminhar para endocrinologia pediátrica com urgência.",
            "Orientar suspensão do aleitamento materno (conduta incorreta – manter AME)."
            ]
        },

        instD: {
            title: "CHECKLIST – TRIAGEM NEONATAL E HIPOTIREOIDISMO CONGÊNITO",
            sections: [
            {
                h: "BLOCO 1 – COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
                items: [
                { item: "Apresentou-se pelo nome e função à mãe antes de iniciar o atendimento.", score: 0.5, ref: "CFM 2232/2019; MS – Humanização no SUS" },
                { item: "Explicou à mãe o que iria fazer durante a consulta antes de iniciar.", score: 0.5, ref: "MS – Política Nacional de Humanização, 2013" },
                { item: "Perguntou à mãe como ela estava se sentindo e como estava sendo cuidar da bebê.", score: 0.5, ref: "SBP – Puericultura, 2022" }
                ]
            },
            {
                h: "BLOCO 2 – ANAMNESE",
                items: [
                { item: "Verificou na caderneta quais triagens neonatais foram realizadas e identificou o TSH alterado.", score: 1.0, ref: "MS – PNTN, 2023" },
                { item: "Identificou que o teste da linguinha não foi realizado (pendente).", score: 0.5, ref: "MS – PNTN, 2023" },
                { item: "Perguntou sobre amamentação: frequência, duração, comportamento da bebê ao mamar.", score: 0.5, ref: "SBP – Aleitamento Materno, 2021" },
                { item: "Investigou comportamento da bebê: sonolência, choro, atividade.", score: 0.5, ref: "SBP – Triagem Neonatal, 2021" },
                { item: "Perguntou sobre histórico familiar de doença tireoidiana.", score: 0.3, ref: "SBP – Triagem Neonatal, 2021" }
                ]
            },
            {
                h: "BLOCO 3 – EXAME FÍSICO",
                items: [
                { item: "Solicitou o exame físico verbalmente e avaliou peso com comparação ao nascimento.", score: 0.5, ref: "SBP – Puericultura, 2022" },
                { item: "Identificou pelo menos dois achados sugestivos de hipotireoidismo congênito (macroglossia, hipotonia, fontanela abaulada, hérnia umbilical, choro rouco).", score: 1.0, ref: "SBP – Triagem Neonatal, 2021; MS – PNTN, 2023" },
                { item: "Avaliou reflexos primitivos e tônus muscular.", score: 0.5, ref: "SBP – Neurologia Pediátrica, 2021" }
                ]
            },
            {
                h: "BLOCO 4 – RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
                items: [
                { item: "Formulou hipótese de hipotireoidismo congênito com base no TSH alterado e nos achados clínicos.", score: 1.0, ref: "MS – PNTN, 2023" },
                { item: "Solicitou TSH sérico e T4 livre para confirmação diagnóstica.", score: 1.0, ref: "MS – PNTN, 2023; SBP, 2021" },
                { item: "Explicou os 5 testes do PNTN à mãe em linguagem acessível (pezinho, orelhinha, olhinho, coraçãozinho, linguinha).", score: 0.5, ref: "MS – PNTN, 2023" }
                ]
            },
            {
                h: "BLOCO 5 – CONDUTA E ORIENTAÇÃO AO PACIENTE",
                items: [
                { item: "Indicou levotiroxina na dose correta (10–15 mcg/kg/dia VO) e orientou administração antes da mamada.", score: 1.0, ref: "MS – PNTN, 2023; SBP – Endocrinologia Pediátrica, 2022" },
                { item: "Encaminhou para endocrinologia pediátrica com urgência.", score: 0.5, ref: "MS – PNTN, 2023" },
                { item: "Orientou manutenção do aleitamento materno exclusivo.", score: 0.3, ref: "SBP – Aleitamento Materno, 2021" },
                { item: "Agendou retorno em 15 dias com pedido de TSH e T4 livre de controle.", score: 0.3, ref: "MS – PNTN, 2023" },
                { item: "Perguntou à mãe se ficou com dúvidas e verificou compreensão das orientações.", score: 0.3, ref: "MS – Política Nacional de Humanização, 2013" }
                ]
            }
        ]
     }
    },

  // Caso 12

    {
  id: 12,
  title: "Recém-nascido com icterícia, manchas na pele e barriga distendida",
  sub: "Maternidade — Alojamento Conjunto",
  tema: 'Neonatologia',
  topic: "Infecções Congênitas / Síndrome da Rubéola Congênita",
  level: "difícil",
  cardAccent: "#e57373",

  instA: {
    scenario: "Nível Hospitalar — Maternidade. Alojamento conjunto, turno da manhã. A enfermeira solicita avaliação de RN com 5 dias de vida por apresentar icterícia, petéquias e abdome distendido.",
    patient: "RN masculino, 5 dias de vida. Mãe: J.C., 24 anos, auxiliar de serviços gerais, pré-natal irregular (3 consultas). Parto vaginal a termo.",
    complaint: "Enfermeira refere: 'O bebê está amarelado, com manchinhas vermelhas no corpo e a barriga dele parece maior do que deveria.'",
    tasks: [
      "Realize a anamnese com a mãe com foco em pré-natal, sorologias e infecções durante a gestação.",
      "Solicite o exame físico neonatal completo e interprete os achados.",
      "Formule a hipótese diagnóstica de infecção congênita e identifique o agente mais provável.",
      "Solicite os exames complementares pertinentes para confirmação diagnóstica.",
      "Defina a conduta terapêutica e os encaminhamentos necessários.",
      "Comunique à mãe o diagnóstico em linguagem acessível e oriente sobre notificação compulsória."
    ]
  },

  instB: {
    vitals: {
      PA: null,
      FC: "158 bpm",
      FR: "52 irpm",
      Tax: "37,2°C",
      Peso: "2.800 g",
      Altura: "46 cm",
      IMC: null
    },
    physicalGeneral: "Regular estado geral. Hipoativo, pouco responsivo ao estímulo. Ictérico (zona III–IV de Kramer). Petéquias difusas em tronco e membros. Choro fraco. Palidez cutâneo-mucosa leve.",
    physicalSeg: [
      "PELE: Petéquias difusas em tronco e membros; icterícia zona III–IV; sem vesículas.",
      "OLHOS: Catarata bilateral ao reflexo vermelho (reflexo vermelho ausente bilateralmente).",
      "CARDIOVASCULAR: Sopro sistólico 2+/6+ em foco pulmonar; RCR 2T.",
      "RESPIRATÓRIO: MV presente bilateralmente, sem ruídos adventícios.",
      "ABDOME: Hepatomegalia (+3 cm abaixo do RCD); esplenomegalia (+2 cm); abdome distendido.",
      "NEUROLÓGICO: Hipotonia leve; fontanela normotensa; reflexos primitivos presentes, diminuídos.",
      "PESO: 2.800 g (nasceu 2.600 g — RCIU com ganho de 200 g em 5 dias, dentro do esperado para o contexto)."
    ],
    labs: [
      { test: "Plaquetas", val: "42.000/mm³", ref: "150.000–400.000/mm³", alt: true },
      { test: "Hemoglobina", val: "10 g/dL", ref: "14–20 g/dL (RN)", alt: true },
      { test: "Bilirrubina Total", val: "12 mg/dL", ref: "< 12 mg/dL (5º dia)", alt: true },
      { test: "Bilirrubina Indireta", val: "8 mg/dL", ref: "Predominante indireta normal", alt: false },
      { test: "Bilirrubina Direta", val: "4 mg/dL", ref: "< 1 mg/dL", alt: true },
      { test: "TGO", val: "3× o limite superior", ref: "Até 40 U/L", alt: true },
      { test: "TGP", val: "3× o limite superior", ref: "Até 40 U/L", alt: true },
      { test: "IgM anti-rubéola (RN)", val: "Positivo", ref: "Negativo", alt: true },
      { test: "Anti-CMV IgM (RN)", val: "Negativo", ref: "Negativo", alt: false },
      { test: "VDRL materno", val: "Não realizado", ref: "Não reagente", alt: true },
      { test: "PCR toxoplasma (RN)", val: "Negativo", ref: "Negativo", alt: false }
    ],
    image: "Radiografia de tórax: Cardiomegalia leve. Aumento da trama vascular pulmonar. Arco pulmonar proeminente — achados compatíveis com cardiopatia congênita (provável estenose de artéria pulmonar). Ultrassom de crânio (se solicitado): Sem hidrocefalia, sem calcificações intracranianas.",
    note: "Entregar o impresso de exame físico ao início. Entregar os exames laboratoriais somente se solicitados verbalmente pelo candidato. Entregar o laudo de imagem somente se radiografia de tórax ou USG de crânio forem solicitados explicitamente. Se o candidato solicitar VDRL da mãe, informar que não foi realizado durante o pré-natal (pré-natal irregular).",
    patientProfile: "RN: Joaquim C., 5 dias de vida, masculino. Mãe: Joana C., 24 anos, auxiliar de serviços gerais, solteira. Pré-natal irregular (apenas 3 consultas). Parto vaginal a termo, sem intercorrências referidas. Mora com a mãe e a avó materna. Baixa escolaridade.",
    script: [
      { trigger: "Abertura / queixa principal", speech: "Doutor(a), tô preocupada com meu filho. Ele tá amarelado, com umas manchinhas vermelhas no corpo e a barriga parece maior. A enfermeira mandou chamar o médico." },
      { trigger: "Sobre o pré-natal", speech: "Fiz só três consultas. Não deu pra fazer mais, precisava trabalhar. O médico falou que eu tive uma infecção durante a gravidez, uma virose, mas não me explicou direito." },
      { trigger: "Sobre sorologias (se perguntado)", speech: "Fiz alguns exames de sangue nas consultas, mas não sei dizer quais. Não tenho o papel aqui." },
      { trigger: "Sobre vacinação materna (se perguntado)", speech: "Não lembro se tomei vacina contra rubéola. Acho que não." },
      { trigger: "Sobre febre na gestação (se perguntado)", speech: "Tive uma febre com manchinhas vermelhas pelo corpo lá no segundo mês de gravidez. Durou uns dias e passou." },
      { trigger: "Sobre o bebê", speech: "Ele tá meio paradão, não chora muito. Ontem percebi que ele não tava olhando direito pra minha cara." },
      { trigger: "Pergunta ativa — diagnóstico", speech: "O que ele tem, doutor(a)? É grave?" },
      { trigger: "Pergunta ativa — transmissão", speech: "Fui eu que passei essa doença pra ele?" },
      { trigger: "Pergunta ativa — cura", speech: "Tem cura? Ele vai ficar bem?" },
      { trigger: "Pergunta ativa — notificação", speech: "Precisa avisar alguém? A prefeitura ou alguma coisa assim?" }
    ],
    hiddenInfo: [
      "A mãe teve exantema febril (febre com manchas vermelhas pelo corpo) no segundo mês de gestação — só revela se o candidato perguntar especificamente sobre doenças ou infecções durante a gravidez.",
      "A mãe não sabe se foi vacinada contra rubéola — só revela se perguntada diretamente sobre vacinação materna."
    ],
    actorBehavior: "Mãe jovem, assustada e visivelmente ansiosa. Escolaridade baixa, dificuldade com termos médicos — responde melhor a perguntas simples e diretas. Colaborativa quando abordada com empatia. Tende a se calar se o candidato usar linguagem técnica sem explicar. Demonstra culpa e angústia ao saber que pode ter transmitido a infecção ao filho. Reage com alívio relativo quando o médico explica com clareza e sem julgamentos."
  },

  instC: {
    diagnosis: "Síndrome da Rubéola Congênita. Tríade clássica: catarata bilateral + cardiopatia congênita (provável estenose de artéria pulmonar) + surdez neurossensorial (a investigar por PEATE). Achados adicionais: petéquias difusas ('blueberry muffin'), hepatoesplenomegalia, RCIU, trombocitopenia, icterícia colestática, elevação de transaminases. IgM anti-rubéola positivo no RN confirma a infecção congênita. Mãe com exantema febril no 1º trimestre, não vacinada.",
    differentials: [
      "Citomegalovirose congênita (CMV) — petéquias, hepatoesplenomegalia e trombocitopenia semelhantes; entretanto, calcificações intracranianas periventriculares e microcefalia são mais típicas; anti-CMV IgM negativo exclui nesse caso.",
      "Toxoplasmose congênita — pode causar hepatoesplenomegalia e trombocitopenia; calcificações cerebrais difusas e hidrocefalia são mais típicas; PCR toxoplasma negativo exclui.",
      "Sífilis congênita — hepatoesplenomegalia, icterícia e petéquias semelhantes; VDRL materno não realizado — deve ser investigado para exclusão concomitante; rinite sifilítica e periostite são achados mais específicos."
    ],
    context: "RN de 5 dias com Síndrome da Rubéola Congênita confirmada por IgM anti-rubéola positivo. Mãe não vacinada com exantema febril no 1º trimestre. Tríade clássica presente (catarata + cardiopatia + surdez a confirmar). Sem tratamento antiviral específico disponível — manejo multidisciplinar e notificação compulsória imediata são obrigatórios.",
    justify: "IgM anti-rubéola positivo no RN confirma infecção congênita ativa (IgM não atravessa a barreira placentária — sua presença no RN indica produção própria). A tríade catarata bilateral + sopro em foco pulmonar (estenose de AP) + investigação pendente de surdez, associada a petéquias ('blueberry muffin'), hepatoesplenomegalia, trombocitopenia e elevação de transaminases, é altamente específica para Síndrome da Rubéola Congênita. O contexto epidemiológico reforça: mãe não vacinada, exantema febril no 1º trimestre.",
    expectedAnamnesis: [
      "Perguntar sobre pré-natal: número de consultas, sorologias realizadas.",
      "Investigar infecções durante a gestação: febre, exantema, época gestacional.",
      "Perguntar sobre vacinação materna contra rubéola.",
      "Investigar uso de medicamentos na gestação.",
      "Perguntar sobre VDRL materno (para exclusão de sífilis concomitante).",
      "Investigar comportamento do RN: choro, sucção, movimentos oculares.",
      "Perguntar sobre audição do RN: resposta a sons (impossível avaliar clinicamente com 5 dias)."
    ],
    expectedPhysical: [
      "Sinais vitais: FC, FR, Tax, peso e comparação ao nascimento (RCIU).",
      "Inspeção: icterícia (zona de Kramer), petéquias, coloração, atividade.",
      "Olhos: reflexo vermelho (ausente = catarata).",
      "Ausculta cardíaca: sopro (EP).",
      "Abdome: hepatoesplenomegalia.",
      "Neurológico: tônus, fontanelas, reflexos primitivos.",
      "Manobra específica: reflexo vermelho bilateral com oftalmoscópio ou lanterna — ausência indica catarata."
    ],
    expectedExams: [
      { exam: "IgM anti-rubéola (RN)", justify: "Confirmar infecção congênita por rubéola", expected: "Positivo" },
      { exam: "VDRL (mãe e RN)", justify: "Excluir sífilis congênita concomitante", expected: "Não realizado na mãe — solicitar" },
      { exam: "Anti-CMV IgM", justify: "Excluir CMV congênito", expected: "Negativo" },
      { exam: "PCR toxoplasma", justify: "Excluir toxoplasmose congênita", expected: "Negativo" },
      { exam: "Hemograma", justify: "Avaliar trombocitopenia e anemia", expected: "Plaquetas 42.000; Hb 10" },
      { exam: "TGO/TGP", justify: "Avaliar hepatite congênita", expected: "Elevadas (3×)" },
      { exam: "Bilirrubinas", justify: "Avaliar icterícia colestática", expected: "BD elevada" },
      { exam: "PEATE (audiometria neonatal)", justify: "Investigar surdez neurossensorial (componente da tríade)", expected: "Aguardado — parte da tríade" },
      { exam: "Ecocardiograma", justify: "Caracterizar cardiopatia congênita", expected: "Estenose de artéria pulmonar" },
      { exam: "USG de crânio", justify: "Afastar calcificações intracranianas", expected: "Sem calcificações" }
    ],
    expectedConduct: [
      "Farmacológica: Não há antiviral específico para rubéola congênita. Tratamento de suporte: fototerapia para icterícia (bilirrubina total 12 mg/dL — avaliar necessidade conforme curva de Bhutani); suporte nutricional; não há indicação de gamaglobulina ou antiviral.",
      "Não farmacológica: Isolamento de contato e gotícula enquanto hospitalizado (RN com rubéola congênita pode excretar o vírus por meses); suporte nutricional; monitorização de sinais vitais.",
      "Encaminhamento: Cardiologia pediátrica (cardiopatia congênita — estenose de AP); Oftalmologia pediátrica (catarata bilateral — cirurgia precoce necessária para prevenir ambliopia); Audiologia (PEATE para investigar surdez); Neurologia pediátrica (acompanhamento do desenvolvimento).",
      "Orientações ao paciente: Explicar à mãe que a infecção foi adquirida durante a gestação; que não há tratamento para a rubéola em si, mas que as sequelas serão tratadas por especialistas; que o bebê precisará de acompanhamento prolongado; que a própria mãe deve ser vacinada após o período pós-parto (exceto durante gestação).",
      "Seguimento: Notificação compulsória imediata à vigilância epidemiológica municipal; acompanhamento multidisciplinar ambulatorial; vacinação da mãe com tríplice viral após alta."
    ],
    expectedCommunication: [
      "Apresentação: Apresentar-se pelo nome, sentar-se ao nível da mãe, criar vínculo sem julgamentos sobre o pré-natal irregular.",
      "Comunicação do diagnóstico: Explicar em linguagem simples que o bebê foi infectado por um vírus durante a gestação chamado rubéola; que isso causou algumas alterações nos olhos, no coração e possivelmente na audição; que existem tratamentos para cada problema; que será necessário apoio de vários médicos especialistas.",
      "Escuta ativa: Validar o sentimento de culpa da mãe sem reforçá-lo; explicar que a vacinação poderia ter prevenido, mas sem tom acusatório; perguntar se a mãe tem rede de apoio (companheiro, família)."
    ],
    criticalErrors: [
      "Não reconhecer a tríade clássica da Síndrome da Rubéola Congênita (catarata + cardiopatia + surdez).",
      "Não solicitar VDRL materno para exclusão de sífilis congênita concomitante.",
      "Não mencionar a notificação compulsória imediata à vigilância epidemiológica.",
      "Não encaminhar para oftalmologia (catarata bilateral exige cirurgia precoce para prevenir ambliopia irreversível).",
      "Não encaminhar para cardiologia pediátrica diante do sopro sugestivo de cardiopatia congênita.",
      "Indicar antiviral para rubéola (não há — conduta incorreta que demonstra erro de raciocínio)."
    ]
  },

  instD: {
    title: "CHECKLIST — INFECÇÃO CONGÊNITA EM RECÉM-NASCIDO",
    sections: [
      {
        h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Apresentou-se pelo nome e função à mãe antes de iniciar.", score: 0.5, ref: "CFM 2232/2019; MS — Humanização no SUS" },
          { item: "Abordou a mãe sem julgamentos sobre o pré-natal irregular, demonstrando empatia.", score: 0.5, ref: "MS — Política Nacional de Humanização, 2013" },
          { item: "Perguntou como a mãe estava se sentindo e se tinha rede de apoio.", score: 0.3, ref: "MS — Atenção à Saúde da Mulher, 2022" }
        ]
      },
      {
        h: "BLOCO 2 — ANAMNESE",
        items: [
          { item: "Investigou pré-natal: número de consultas, sorologias realizadas.", score: 0.5, ref: "MS — Atenção ao Pré-natal de Baixo Risco, 2012" },
          { item: "Perguntou especificamente sobre infecções durante a gestação (febre, exantema, época).", score: 1.0, ref: "MS — Guia de Vigilância em Saúde, 2022" },
          { item: "Investigou vacinação materna contra rubéola.", score: 0.5, ref: "MS — Calendário Vacinal, 2023" },
          { item: "Perguntou sobre VDRL materno para exclusão de sífilis concomitante.", score: 0.5, ref: "MS — PCDT Sífilis Congênita, 2022" }
        ]
      },
      {
        h: "BLOCO 3 — EXAME FÍSICO",
        items: [
          { item: "Solicitou exame físico e identificou petéquias difusas ('blueberry muffin').", score: 0.5, ref: "SBP — Infecções Congênitas, 2021" },
          { item: "Avaliou o reflexo vermelho e identificou sua ausência bilateral (catarata).", score: 1.0, ref: "SBP — Triagem Neonatal, 2021" },
          { item: "Identificou sopro cardíaco e hepatoesplenomegalia ao exame.", score: 0.5, ref: "SBP — Infecções Congênitas, 2021" }
        ]
      },
      {
        h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Formulou diagnóstico de Síndrome da Rubéola Congênita com base nos achados clínicos e laboratoriais.", score: 1.0, ref: "MS — Guia de Vigilância em Saúde, 2022" },
          { item: "Solicitou IgM anti-rubéola no RN para confirmação diagnóstica.", score: 0.5, ref: "SBP — Infecções Congênitas, 2021" },
          { item: "Solicitou VDRL (mãe e RN) para exclusão de sífilis congênita.", score: 0.5, ref: "MS — PCDT Sífilis Congênita, 2022" },
          { item: "Solicitou ecocardiograma e PEATE para investigação das sequelas.", score: 0.5, ref: "SBP — Infecções Congênitas, 2021" }
        ]
      },
      {
        h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Indicou encaminhamentos multidisciplinares: oftalmologia, cardiologia pediátrica e audiologia.", score: 1.0, ref: "SBP — Infecções Congênitas, 2021" },
          { item: "Mencionou notificação compulsória imediata à vigilância epidemiológica.", score: 1.0, ref: "MS — Guia de Vigilância em Saúde, 2022" },
          { item: "Explicou à mãe o diagnóstico em linguagem acessível, sem julgamentos.", score: 0.5, ref: "MS — Política Nacional de Humanização, 2013" },
          { item: "Orientou sobre isolamento do RN enquanto hospitalizado.", score: 0.3, ref: "MS — Guia de Vigilância em Saúde, 2022" },
          { item: "Orientou vacinação da mãe com tríplice viral após alta (não durante gestação).", score: 0.4, ref: "MS — Calendário Vacinal, 2023" }
        ]
      }
    ]
  }
},

  {
  id: 10,
  title: 'Recém-nascido com resultado alterado no teste do pezinho — PKU',
  sub: 'UBS — Atenção Primária',
  tema: 'Neonatologia',
  topic: 'Fenilcetonúria — Teste do Pezinho',
  level: 'moderado',
  cardAccent: '#1565C0',
  instA: {
    scenario: 'Atenção Primária — UBS. Consultório, turno matutino. A mãe foi convocada pelo resultado alterado do teste do pezinho do bebê.',
    patient: 'Mãe de H.S., 18 dias de vida, masculino, a termo, peso ao nascer 3.320g.',
    complaint: 'Mãe convocada pela UBS após resultado alterado no teste do pezinho — fenilalanina elevada.',
    tasks: [
      'Realize a anamnese dirigida ao caso (com a mãe)',
      'Realize o exame físico pertinente no recém-nascido',
      'Explique o significado do resultado alterado e a hipótese diagnóstica',
      'Solicite os exames complementares confirmatórios',
      'Oriente a mãe sobre os próximos passos e encaminhamento urgente'
    ]
  },
  instB: {
    vitals: {
      PA: 'Não aferida',
      FC: '138 bpm',
      FR: '44 irpm',
      Tax: '36,8°C',
      Peso: '3.680 g (ganho de peso adequado)',
      Altura: '51 cm',
      IMC: '—'
    },
    physicalGeneral: 'Bom estado geral, ativo, reativo, normocorado, hidratado. Fontanela anterior normotensa. Sem dismorfias. Sem hepatoesplenomegalia. Odor de urina normal (fenilcetonúria: odor de "mofo" pode aparecer mais tarde se não tratada). Reflexos neonatais presentes.',
    physicalSeg: 'NEUROLÓGICO NEONATAL: Reflexos primitivos presentes (Moro, preensão, sucção). Tônus normal. Sem convulsões. | PELE: Normocorada. Sem hipopigmentação ainda (surge tardiamente se não tratada). | ASPECTO GERAL: Fenótipo normal ao nascimento — sem manifestações clínicas ainda (fase assintomática).',
    labs: [
      { test: 'Triagem neonatal — fenilalanina (pezinho)', val: '18 mg/dL', ref: '< 2 mg/dL (triagem)', alt: true },
      { test: 'Fenilalanina plasmática confirmatória', val: '22 mg/dL', ref: '< 2 mg/dL', alt: true },
      { test: 'Tirosina plasmática', val: '0,8 mg/dL', ref: '0,5–2,0 mg/dL', alt: false },
      { test: 'Razão Fen/Tir', val: '27,5', ref: '< 3 (normal)', alt: true }
    ],
    image: null,
    note: 'Ator é a mãe (muito ansiosa por ter sido convocada). Entregar peso e sinais vitais ao início. Entregar exame físico ao exame. Resultado do pezinho deve ser apresentado no início como o motivo da consulta. Resultados confirmatórios somente se solicitados. Reforçar que o bebê está assintomático — esse é o objetivo da triagem neonatal.',
    patientProfile: 'Mãe: Helena S., 22 anos, estudante. Bebê: Hugo S., 18 dias de vida, masculino, a termo.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutor, recebi uma ligação do posto dizendo que o resultado do pezinho do meu filho deu alterado. Fiquei apavorada, não consigo dormir pensando no que pode ser.' },
      { trigger: 'Sobre o bebê', speech: 'Ele está bem, mamando, crescendo, não tem nada diferente que eu possa ver.' },
      { trigger: 'Sobre o parto', speech: 'Nasceu de parto normal, de 39 semanas, pesou 3.320g. Saiu tudo bem no hospital.' },
      { trigger: 'Sobre amamentação', speech: 'Estou amamentando exclusivamente, ele pega bem no seio.' },
      { trigger: 'Sobre histórico familiar', speech: 'Não sei de ninguém na família com problema assim. Mas somos primos, eu e o pai do bebê.' },
      { trigger: 'Sobre desenvolvimento', speech: 'Ele parece normal, reage aos sons, olha pra mim.' },
      { trigger: 'Pergunta ativa 1', speech: 'O que é fenilcetonúria? O meu filho vai ter problema no desenvolvimento?' },
      { trigger: 'Pergunta ativa 2', speech: 'Precisa parar de amamentar?' }
    ],
    hiddenInfo: 'Os pais são primos de segundo grau — consanguinidade aumenta risco de doenças autossômicas recessivas como PKU; só revela se perguntado sobre grau de parentesco entre os pais. | Uma tia da mãe tem "problema metabólico que precisou de dieta especial" — possível PKU heterozigoto ou outro IEM; só revela se perguntado sobre histórico familiar de doenças metabólicas.',
    actorBehavior: 'Muito ansiosa, chorosa. Alivia progressivamente conforme o candidato explica que o bebê está bem por enquanto e que o diagnóstico precoce é positivo. Cabe ao candidato transmitir urgência sem causar pânico desnecessário.'
  },
  instC: {
    diagnosis: 'Fenilcetonúria clássica (PKU) — diagnóstico pela triagem neonatal — criança assintomática em fase de janela terapêutica. Doença autossômica recessiva por deficiência de fenilalanina hidroxilase.',
    differentials: [
      'Hiperfenilalaninemia benigna — fenilalanina levemente elevada (2–6 mg/dL), sem comprometimento se não tratada; aqui Fen = 22 mg/dL com razão Fen/Tir > 3 = PKU clássica.',
      'Deficiência de tetrobiopterina (BH4) — PKU atípica com neurológico precoce; dosagem de pterinas distingue.',
      'Tirosinemia transitória neonatal — tirosina elevada; aqui tirosina normal.'
    ],
    context: 'Recém-nascido assintomático com PKU clássica diagnosticada pela triagem neonatal (fenilalanina 22 mg/dL, razão Fen/Tir > 3). A triagem identifica a doença na janela assintomática, antes do dano neurológico irreversível que ocorre com o acúmulo de fenilalanina. Tratamento dietético imediato é essencial.',
    justify: 'Fenilalanina plasmática > 20 mg/dL + razão Fenilalanina/Tirosina > 3 + triagem neonatal elevada = PKU clássica. Bebê assintomático porque a triagem foi realizada antes do dano cerebral. Sem tratamento, acúmulo de fenilalanina causa deficiência intelectual severa, convulsões, microcefalia e hipopigmentação.',
    expectedAnamnesis: 'Data da coleta do pezinho e data do resultado | Estado atual do bebê (alimentação, comportamento, desenvolvimento) | Tipo de alimentação (AME — proteína de leite materno contém fenilalanina) | Consanguinidade dos pais | Histórico familiar de PKU ou doenças metabólicas | Intercorrências no parto e período neonatal',
    expectedPhysical: 'Peso e crescimento (avaliar ganho ponderal) | Estado neurológico neonatal (reflexos primitivos, tônus) | Pele (hipopigmentação — surge tardiamente) | Fontanela (normotensa) | Dismorfias (ausentes na PKU)',
    expectedExams: [
      { exam: 'Fenilalanina e tirosina plasmáticas', justify: 'Confirmar triagem e classificar gravidade', expected: 'Fen > 20 mg/dL, Razão Fen/Tir > 3' },
      { exam: 'Dosagem de pterinas urinárias', justify: 'Afastar deficiência de BH4 (PKU atípica)', expected: 'Normal (PKU clássica)' },
      { exam: 'Teste de resposta ao BH4 (sapropterina)', justify: 'Avaliar responsividade em PKU leve-moderada ⚠️', expected: '—' }
    ],
    expectedConduct: 'Farmacológica: Sapropterina (Kuvan) em casos responsivos — avaliar no centro de referência. (CONITEC/MS 2022) | Não farmacológica: Dieta hipofenilalanina imediata — redução drástica de proteína natural + fórmula metabólica de aminoácidos sem fenilalanina. O aleitamento materno pode ser mantido de forma controlada (quantidades monitoradas de fenilalanina). | Encaminhamento: Encaminhamento URGENTE (em 24–48h) ao serviço de referência em erros inatos do metabolismo (SREIM) — antes de qualquer atraso que possa causar dano neurológico. | Orientações: Explicar à mãe que o diagnóstico precoce é uma grande conquista; que sem tratamento haveria dano cerebral; que com tratamento o bebê pode ter desenvolvimento normal; que é urgente o encaminhamento. | Seguimento: SREIM — acompanhamento multiprofissional (médico metabolista, nutricionista, psicólogo).',
    expectedCommunication: 'Apresentação: Apresentar-se, acolher a ansiedade da mãe. | Comunicação do diagnóstico: "Helena, o resultado indica que o Hugo tem uma doença chamada fenilcetonúria. Mas a boa notícia é que encontramos antes de ele ter qualquer problema. Com tratamento imediato, ele pode se desenvolver completamente normal." | Escuta ativa: Validar a ansiedade; focar na mensagem positiva do diagnóstico precoce; ser claro sobre urgência sem causar pânico.',
    criticalErrors: [
      'Não encaminhar urgentemente ao SREIM (cada dia sem tratamento pode causar dano neurológico)',
      'Orientar desmame imediato sem indicação (AME pode ser mantido com controle de fenilalanina)',
      'Não explicar a natureza genética e a necessidade de aconselhamento genético dos pais',
      'Minimizar a urgência do encaminhamento',
      'Não solicitar fenilalanina plasmática confirmatória'
    ]
  },
  instD: {
    title: 'CHECKLIST — RESULTADO ALTERADO NO PEZINHO — FENILCETONÚRIA',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Acolheu a ansiedade da mãe e comunicou o diagnóstico com empatia', score: 0.5, ref: 'CFM 2.217/2018' },
          { item: 'Transmitiu a mensagem positiva do diagnóstico precoce (bebê ainda assintomático)', score: 1.0, ref: 'PNS/MS, 2023' },
          { item: 'Explicou PKU em linguagem acessível (acúmulo de proteína que pode afetar o cérebro)', score: 0.5, ref: 'PNS/MS, 2023' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Verificou data da coleta e resultado do pezinho', score: 0.5, ref: 'PNS/MS, 2023' },
          { item: 'Investigou estado atual do bebê (alimentação, comportamento)', score: 0.5, ref: 'PNS/MS, 2023' },
          { item: 'Questionou consanguinidade dos pais e histórico familiar de doenças metabólicas', score: 0.5, ref: 'PNS/MS, 2023' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Avaliou ganho de peso e estado neurológico neonatal (reflexos, tônus)', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Verificou ausência de dismorfias e de manifestações clínicas (fase assintomática)', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Formulou hipótese de PKU clássica com base no valor de fenilalanina e razão Fen/Tir', score: 1.0, ref: 'PNS/MS, 2023' },
          { item: 'Solicitou dosagem confirmatória de fenilalanina e tirosina plasmáticas', score: 1.0, ref: 'PNS/MS, 2023' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Encaminhou urgentemente ao SREIM (serviço de referência em erros inatos do metabolismo)', score: 1.5, ref: 'PNS/MS, 2023' },
          { item: 'Informou sobre a possibilidade de manter AME de forma controlada', score: 0.5, ref: 'PNS/MS, 2023' },
          { item: 'Orientou sobre natureza genética e aconselhamento para os pais', score: 0.5, ref: 'PNS/MS, 2023' }
        ]
      }
    ]
  }
},

  {
  id: 11,
  title: 'Bebê com resultado alterado no pezinho — hormônio da tireoide',
  sub: 'UBS — Atenção Primária',
  tema: 'Neonatologia',
  topic: 'Hipotireoidismo Congênito — Teste do Pezinho',
  level: 'moderado',
  cardAccent: '#1565C0',
  instA: {
    scenario: 'UBS — Atenção Primária. Consultório, turno matutino. Mãe convocada pelo resultado alterado do pezinho.',
    patient: 'Mãe de A.L., 15 dias de vida, feminina, a termo, parto normal.',
    complaint: 'Recém-nascida convocada por TSH elevado na triagem neonatal. Mãe refere que bebê está sonolenta e come pouco.',
    tasks: [
      'Realize a anamnese dirigida ao caso',
      'Realize o exame físico pertinente no recém-nascido',
      'Explique o diagnóstico e sua importância',
      'Solicite os exames confirmatórios',
      'Inicie o tratamento e encaminhe adequadamente'
    ]
  },
  instB: {
    vitals: {
      PA: 'Não aferida',
      FC: '112 bpm',
      FR: '38 irpm',
      Tax: '36,2°C (hipotermia leve)',
      Peso: '3.420 g (peso nascimento: 3.350g — ganho adequado)',
      Altura: '50 cm',
      IMC: '—'
    },
    physicalGeneral: 'Regular estado geral, hipotônica, sonolenta, choro fraco ("rouco"). Pele seca e fria ao toque. Macroglossia discreta. Fontanela posterior aberta (> 0,5 cm). Icterícia neonatal prolongada (+/4+). Reflexos neonatais presentes porém com latência aumentada. Fácies mixedematosa discretamente insinuada.',
    physicalSeg: 'NEUROLÓGICO: Hipotonia generalizada, choro fraco e rouco, sucção débil. | PELE: Seca, pele marmórea, edema discreto generalizado. | ABDOME: Hérnia umbilical presente. | TIREÓIDE: Glândula não palpável (ausência ou ectopia).',
    labs: [
      { test: 'TSH neonatal (pezinho)', val: '68 mUI/L', ref: '< 10 mUI/L', alt: true },
      { test: 'TSH sérico confirmatório', val: '84 mUI/L', ref: '0,5–5,0 mUI/L', alt: true },
      { test: 'T4 livre', val: '0,4 ng/dL', ref: '0,8–2,0 ng/dL', alt: true }
    ],
    image: 'Cintilografia ou USG de tireoide (se solicitada): Glândula tireoide não visualizada em posição eutópica — provável agenesia ou ectopia (confirmar com cintilografia).',
    note: 'Ator é a mãe. Entregar peso e temperatura ao início. Entregar exame físico ao exame (enfatizar hipotonia, sonolência, macroglossia, fontanela posterior aberta). Exames laboratoriais somente se solicitados. Destacar que a janela terapêutica para o SNC é curta — início imediato de levotiroxina é essencial.',
    patientProfile: 'Mãe: Ana L., 28 anos, professora. Bebê: Alice L., 15 dias de vida, feminina, a termo.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutor, me ligaram do posto dizendo que o resultado do pezinho estava alterado. Tem algo no hormônio da tireoide.' },
      { trigger: 'Sobre o bebê', speech: 'Ela é muito dorminhoca, às vezes preciso acordar pra mamar. E quando chora é aquele choro bem fraquinho, diferente.' },
      { trigger: 'Sobre mamada', speech: 'Mama devagar, cansa muito, às vezes adormece no meio.' },
      { trigger: 'Sobre a pele', speech: 'A pele dela parece seca, meio fria. E ainda tá um pouco amarelada, achei que era normal de recém-nascido.' },
      { trigger: 'Sobre o umbigo', speech: 'Tem uma hérnia no umbigo, o médico do hospital disse que é comum.' },
      { trigger: 'Sobre a gravidez', speech: 'A gravidez foi normal, fiz pré-natal todo. Sem problema na tireoide.' },
      { trigger: 'Sobre parto', speech: 'Nasceu de parto normal, de 39 semanas.' },
      { trigger: 'Pergunta ativa 1', speech: 'O que é hipotireoidismo congênito? Vai afetar o cérebro dela?' },
      { trigger: 'Pergunta ativa 2', speech: 'Ela vai tomar remédio para sempre?' }
    ],
    hiddenInfo: 'A mãe não fez dosagem de TSH durante o pré-natal — hipotireoidismo materno poderia ter sido identificado; só revela se perguntado sobre exames da tireoide na gestação. | Bebê com icterícia prolongada (> 14 dias) — sinal clínico de hipotireoidismo congênito; só revela se perguntado sobre icterícia.',
    actorBehavior: 'Ansiosa, com medo de sequela neurológica. Colaborativa. Fica aliviada com a mensagem de que o tratamento precoce previne sequelas. Cabe ao candidato transmitir urgência de forma tranquilizadora.'
  },
  instC: {
    diagnosis: 'Hipotireoidismo congênito primário — provável agenesia de tireoide — com TSH > 80 mUI/L, T4 livre suprimido e sinais clínicos presentes (hipotonia, choro rouco, macroglossia, icterícia prolongada, fontanela posterior aberta).',
    differentials: [
      'Hipotireoidismo transitório neonatal — por deficiência de iodo ou anticorpos maternos; geralmente TSH < 50 e T4 normal ou leve queda; normaliza em semanas.',
      'Hipotireoidismo central (hipopituitarismo) — TSH baixo/normal com T4 baixo; raramente identificado pelo pezinho (triagem TSH).',
      'Icterícia neonatal por outras causas — sem hipotonia, sem outros sinais de hipotireoidismo.'
    ],
    context: 'Recém-nascida com hipotireoidismo congênito primário grave (TSH 84 mUI/L, T4L 0,4 ng/dL), com manifestações clínicas presentes (hipotonia, choro rouco, sonolência, icterícia prolongada, macroglossia, hérnia umbilical). Diagnóstico pela triagem neonatal — sem tratamento imediato há risco de retardo mental irreversível.',
    justify: 'TSH > 10 mUI/L na triagem = resultado positivo → confirmar com TSH e T4L séricos. TSH 84 mUI/L + T4L 0,4 ng/dL = hipotireoidismo primário grave. Sinais clínicos confirmam: hipotonia, choro rouco, fontanela posterior > 0,5 cm, icterícia prolongada, macroglossia, pele fria e seca, hérnia umbilical.',
    expectedAnamnesis: 'Data e valor da triagem neonatal | Sintomas: sonolência excessiva, mamada fraca, choro fraco | Icterícia (tempo de duração — prolongada > 14 dias) | Constipação intestinal | TSH materno na gestação (hipotireoidismo materno) | Uso de amiodarona, iodo ou antitireoidianos na gestação | Consanguinidade',
    expectedPhysical: 'Temperatura (hipotermia) | Hipotonia, letargia, choro rouco | Macroglossia | Fontanela posterior aberta (> 0,5 cm) | Icterícia prolongada | Hérnia umbilical | Pele seca, fria, marmórea | Palpação de tireoide',
    expectedExams: [
      { exam: 'TSH e T4L séricos', justify: 'Confirmar triagem e classificar gravidade', expected: 'TSH muito elevado, T4L suprimido' },
      { exam: 'Cintilografia de tireoide ou USG', justify: 'Avaliar presença/ausência e ectopia da glândula', expected: 'Ausência ou ectopia' },
      { exam: 'Idade óssea (Rx punho/joelho)', justify: 'Avaliar retardo de maturação óssea', expected: 'Retardo' }
    ],
    expectedConduct: 'Farmacológica: Levotiroxina (LT4) oral: 10–15 mcg/kg/dia — iniciar IMEDIATAMENTE após coleta dos exames confirmatórios, sem aguardar resultado. (SBP 2022 / MS 2013) | Não farmacológica: Manter aleitamento materno (não interfere com levotiroxina se administrada 30 min antes). | Encaminhamento: Endocrinologia pediátrica URGENTE (em 24–48h); serviço de referência em triagem neonatal. | Orientações: Explicar que sem tratamento precoce há risco de dano cerebral irreversível; que com tratamento imediato o desenvolvimento pode ser completamente normal; que o medicamento é para toda a vida. | Seguimento: T4L e TSH seriados; avaliação do neurodesenvolvimento.',
    expectedCommunication: 'Apresentação: Apresentar-se, acolher a mãe. | Comunicação do diagnóstico: "Ana, a Alice tem hipotireoidismo congênito — a tireoide dela não está funcionando. Precisamos começar o remédio hoje. Com tratamento imediato, ela pode se desenvolver completamente normal." | Escuta ativa: Responder com clareza sobre sequelas e necessidade do medicamento; não minimizar nem alarmar excessivamente.',
    criticalErrors: [
      'Não iniciar levotiroxina imediatamente (aguardar resultado de exames antes de tratar)',
      'Não encaminhar urgentemente à endocrinologia pediátrica',
      'Não reconhecer os sinais clínicos de hipotireoidismo no exame físico',
      'Não solicitar T4L e TSH séricos confirmatórios',
      'Não orientar sobre necessidade de tratamento contínuo (lifetime)'
    ]
  },
  instD: {
    title: 'CHECKLIST — BEBÊ COM TSH ELEVADO NO PEZINHO — HIPOTIREOIDISMO CONGÊNITO',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Acolheu a mãe e comunicou o diagnóstico com empatia', score: 0.5, ref: 'CFM 2.217/2018' },
          { item: 'Transmitiu mensagem de que o tratamento precoce previne sequelas neurológicas', score: 1.0, ref: 'PNS/MS, 2023' },
          { item: 'Respondeu à preocupação sobre o uso de medicamento permanente', score: 0.5, ref: 'PNS/MS, 2023' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Investigou sintomas de hipotireoidismo (sonolência, mamada fraca, choro fraco, constipação)', score: 1.0, ref: 'SBP / PNS, 2023' },
          { item: 'Questionou icterícia prolongada como sinal de hipotireoidismo', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Perguntou sobre TSH materno durante a gestação', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Identificou hipotonia, choro rouco, macroglossia e fontanela posterior aberta', score: 1.0, ref: 'SBP, 2022' },
          { item: 'Aferiu temperatura (hipotermia) e avaliou pele (seca, fria)', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Palpou tireoide e identificou ausência da glândula', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Formulou hipótese de hipotireoidismo congênito primário grave', score: 0.5, ref: 'SBP / PNS, 2023' },
          { item: 'Solicitou TSH e T4L séricos confirmatórios', score: 0.5, ref: 'SBP / PNS, 2023' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Iniciou levotiroxina IMEDIATAMENTE (10–15 mcg/kg/dia) sem aguardar exames', score: 1.5, ref: 'SBP 2022 / MS 2013' },
          { item: 'Encaminhou urgentemente à endocrinologia pediátrica (24–48h)', score: 0.5, ref: 'SBP / PNS, 2023' },
          { item: 'Orientou sobre tratamento permanente e importância da adesão', score: 0.5, ref: 'SBP, 2022' }
        ]
      }
    ]
  }
},

  {
  id: 12,
  title: 'Bebê com pezinho alterado para anemia falciforme',
  sub: 'UBS — Atenção Primária',
  tema: 'Neonatologia',
  topic: 'Doença Falciforme — Teste do Pezinho',
  level: 'moderado',
  cardAccent: '#1565C0',
  instA: {
    scenario: 'UBS — Atenção Primária. Consultório, turno matutino. Mãe convocada pelo pezinho alterado.',
    patient: 'Mãe de D.O., 22 dias de vida, masculino, a termo, afrodescendente.',
    complaint: 'Recém-nascido convocado por resultado do pezinho sugestivo de doença falciforme. Bebê aparentemente bem.',
    tasks: [
      'Realize a anamnese dirigida ao caso',
      'Realize o exame físico pertinente',
      'Explique o diagnóstico e sua importância para a família',
      'Solicite os exames confirmatórios',
      'Inicie as medidas preventivas e encaminhe adequadamente'
    ]
  },
  instB: {
    vitals: {
      PA: 'Não aferida',
      FC: '132 bpm',
      FR: '42 irpm',
      Tax: '37,0°C',
      Peso: '3.980 g',
      Altura: '52 cm',
      IMC: '—'
    },
    physicalGeneral: 'Bom estado geral, ativo, reativo, normocorado (icterícia fisiológica resolvida), hidratado. Sem esplenomegalia (baço normal nessa fase). Sem sinais de crise vaso-oclusiva. Sem edema de mãos ou pés (dactilite — pode aparecer a partir dos 6 meses).',
    physicalSeg: 'PELE: Normocorada. Sem palidez intensa. | ABDOME: Fígado palpável a 2 cm do RCD (normal para a idade). Baço não palpável. | NEUROLÓGICO: Reflexos primitivos presentes, tônus normal.',
    labs: [
      { test: 'Triagem neonatal — eletroforese Hb (pezinho)', val: 'Padrão FS (HbF + HbS)', ref: 'FA (HbF + HbA)', alt: true },
      { test: 'Eletroforese de Hb confirmatória', val: 'HbS 87%, HbF 13%, HbA ausente', ref: 'HbA > 95%', alt: true },
      { test: 'Hemograma', val: 'Hb 14,2 g/dL, leucócitos 12.400/mm³', ref: '—', alt: false }
    ],
    image: null,
    note: 'Ator é a mãe. Entregar peso e sinais vitais ao início. Entregar exame físico ao exame. Exames confirmatórios somente se solicitados. Ressaltar que o bebê está assintomático — manifestações clínicas surgem após 6 meses (queda da HbF). Penicilina profilática e vacinas específicas são medidas preventivas essenciais.',
    patientProfile: 'Mãe: Diana O., 24 anos, auxiliar administrativa, afrodescendente. Bebê: Davi O., 22 dias, masculino.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutor, ligaram do posto dizendo que o pezinho do meu filho deu alterado. Falaram que pode ser anemia falciforme.' },
      { trigger: 'Sobre o bebê', speech: 'Ele está ótimo, mamando bem, ganhando peso, ativo. Não tem nada diferente.' },
      { trigger: 'Sobre histórico familiar', speech: 'Meu marido tem traço falciforme, me disseram isso quando ele foi doar sangue. E minha irmã tem anemia falciforme.' },
      { trigger: 'Sobre o nascimento', speech: 'Nasceu de parto normal, 38 semanas, sem intercorrência.' },
      { trigger: 'Sobre o que sabe', speech: 'Sei que anemia falciforme é grave, que as pessoas têm muita dor. Fico com medo.' },
      { trigger: 'Sobre vacinação', speech: 'Vacinas estou em dia, fiz tudo no cartão.' },
      { trigger: 'Pergunta ativa 1', speech: 'Ele vai ter vida normal? Vai ter muita dor?' },
      { trigger: 'Pergunta ativa 2', speech: 'Meus outros filhos podem ter também?' }
    ],
    hiddenInfo: 'Pai tem traço falciforme (HbAS) confirmado — ambos os pais são portadores, o que implica risco de 25% para a doença em cada gestação; só revela com detalhes se perguntado sobre o resultado do exame do pai. | A mãe também pode ser portadora (não fez exame) — só revela se perguntado sobre resultado da mãe.',
    actorBehavior: 'Ansiosa, mas informada sobre o que é a doença (tem irmã com doença falciforme). Preocupada com a qualidade de vida do filho. Cabe ao candidato ser honesto sobre a gravidade e ao mesmo tempo apresentar o plano de cuidados que muda o prognóstico.'
  },
  instC: {
    diagnosis: 'Doença falciforme — anemia falciforme homozigota (HbSS) — diagnosticada pela triagem neonatal, em fase assintomática (predomínio de HbF protetora). Herança autossômica recessiva com ambos os pais portadores (HbAS).',
    differentials: [
      'Traço falciforme (HbAS) — heterozigoto, assintomático; eletroforese mostra HbA + HbS; aqui HbA ausente = HbSS.',
      'SC (HbSC) — dupla heterozigose com HbC; eletroforese mostra HbS + HbC; quadro geralmente mais leve; aqui apenas HbS e HbF.',
      'S/Beta-talassemia — HbS + HbA reduzida; aqui HbA ausente = HbSS ou S/Beta0.'
    ],
    context: 'Recém-nascido afrodescendente com doença falciforme (HbSS) diagnosticada pela triagem neonatal em fase assintomática. A proteção pela HbF dura até 6 meses; após isso, crises vaso-oclusivas, infecções graves e anemia hemolítica podem ocorrer. O diagnóstico precoce permite intervenção preventiva que reduz morbimortalidade.',
    justify: 'Triagem neonatal com padrão FS (HbF + HbS, sem HbA) + eletroforese confirmatória com HbS 87%, ausência de HbA = HbSS. Historicamente claro: pai com traço falciforme, tia materna com doença falciforme. Hemograma normal porque HbF ainda predomina (proteção neonatal).',
    expectedAnamnesis: 'Data e resultado do pezinho | Estado atual do bebê (assintomático) | Histórico familiar (traço ou doença falciforme nos pais/irmãos) | Vacinação do calendário básico | Tipo de alimentação',
    expectedPhysical: 'Estado geral, atividade, hidratação | Palidez (anemia — leve ou ausente nessa fase) | Baço (esplenomegalia pode surgir mais tarde) | Icterícia (hemólise) | Dactilite (edema doloroso de mãos/pés — surge a partir dos 6 meses)',
    expectedExams: [
      { exam: 'Eletroforese de hemoglobina', justify: 'Confirmar diagnóstico e classificar subtipo', expected: 'HbSS confirmado' },
      { exam: 'Hemograma completo', justify: 'Avaliar hemoglobina basal e leucocitose', expected: 'Hb normal nessa fase' },
      { exam: 'Tipagem sanguínea', justify: 'Para futuros episódios de transfusão', expected: '—' }
    ],
    expectedConduct: 'Farmacológica: Penicilina V profilática oral 125 mg VO 2x/dia a partir dos 2–3 meses de vida, até os 5 anos (prevenção de infecções por pneumococo — maior causa de morte). (MS/SBP 2022) | Não farmacológica: Vacinas adicionais: pneumocócica conjugada (Prevnar), meningocócica, influenza, hepatite A — além do calendário básico; hidratação adequada; evitar exposição ao frio e à hipóxia. | Encaminhamento: Hematologia pediátrica — acompanhamento especializado regular. | Orientações: Explicar que o bebê está bem agora mas que a doença se manifestará após 6 meses; importância da penicilina profilática (não pode falhar); sinais de alarme (febre > 38,5°C, palidez súbita, dor abdominal intensa, priapismo). | Seguimento: Hematologia pediátrica; vacinação rigorosa; controle ambulatorial mensal nos primeiros anos.',
    expectedCommunication: 'Apresentação: Apresentar-se, acolher a mãe. | Comunicação do diagnóstico: "Diana, o Davi tem anemia falciforme. Agora ele está protegido pelo hemograma de recém-nascido. O que faremos é iniciar um antibiótico preventivo e acompanhamento especializado para que ele cresça bem." | Escuta ativa: Responder sobre qualidade de vida com realismo e esperança; abordar o risco para futuros filhos.',
    criticalErrors: [
      'Não iniciar penicilina profilática (principal medida preventiva de mortalidade na doença falciforme)',
      'Não encaminhar à hematologia pediátrica',
      'Não orientar sobre sinais de alarme (febre como emergência)',
      'Não solicitar eletroforese confirmatória',
      'Não abordar o risco genético para futuros filhos e necessidade de aconselhamento genético'
    ]
  },
  instD: {
    title: 'CHECKLIST — BEBÊ COM PEZINHO ALTERADO — DOENÇA FALCIFORME',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Acolheu a mãe com empatia e explicou o diagnóstico com clareza', score: 0.5, ref: 'CFM 2.217/2018' },
          { item: 'Respondeu à preocupação sobre qualidade de vida com realismo e esperança', score: 0.5, ref: 'PNHAH/MS, 2001' },
          { item: 'Abordou o risco genético para futuros filhos e aconselhamento genético', score: 0.5, ref: 'PNS/MS, 2023' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Investigou histórico familiar de doença ou traço falciforme', score: 1.0, ref: 'PNS/MS, 2023' },
          { item: 'Verificou vacinação e estado atual do bebê', score: 0.5, ref: 'PNI/MS, 2023' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Avaliou palidez, icterícia e baço (esplenomegalia)', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Verificou ausência de dactilite e crise vaso-oclusiva atual', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Confirmou diagnóstico de HbSS pela eletroforese confirmatória', score: 1.0, ref: 'PNS/MS, 2023' },
          { item: 'Explicou que HbF protege na fase neonatal e que sintomas surgem após 6 meses', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Iniciou penicilina profilática (125 mg VO 2x/dia)', score: 1.5, ref: 'MS/SBP 2022' },
          { item: 'Orientou vacinação adicional (pneumocócica, meningocócica, influenza)', score: 0.5, ref: 'PNI/MS, 2023' },
          { item: 'Encaminhou à hematologia pediátrica e orientou sinais de alarme (febre como emergência)', score: 1.0, ref: 'SBP / PNS, 2023' }
        ]
      }
    ]
  }
},

  {
  id: 13,
  title: 'Bebê com pezinho alterado e genitália ambígua ao nascimento',
  sub: 'Maternidade — Neonatologia',
  tema: 'Neonatologia',
  topic: 'Hiperplasia Adrenal Congênita — Teste do Pezinho',
  level: 'moderado',
  cardAccent: '#1565C0',
  instA: {
    scenario: 'Maternidade. Alojamento conjunto, segundo dia de vida.',
    patient: 'Mãe de R.S., 2 dias de vida, sexo feminino ao nascimento, a termo.',
    complaint: 'Triagem neonatal com 17-OHP elevada. Ao exame: genitália ambígua com clitóris hipertrofiado.',
    tasks: [
      'Realize a anamnese dirigida ao caso',
      'Realize o exame físico pertinente',
      'Explique a hipótese diagnóstica e sua gravidade',
      'Solicite os exames de urgência',
      'Inicie as medidas imediatas e oriente a família'
    ]
  },
  instB: {
    vitals: {
      PA: 'Não aferida',
      FC: '148 bpm',
      FR: '46 irpm',
      Tax: '36,9°C',
      Peso: '3.100 g',
      Altura: '49 cm',
      IMC: '—'
    },
    physicalGeneral: 'Regular estado geral. Ativo, com choro vigoroso. Normocorado. Levemente irritado. Sem dismorfias faciais. Fontanela normotensa.',
    physicalSeg: 'GENITÁLIA: Clitóris hipertrofiado (comprimento > 1 cm), lábios maiores fundidos parcialmente (escore de virilização de Prader grau III), orifício urogenital único. Sem gônadas palpáveis nas bolsas escrotalizadas. | ABDOME: Sem visceromegalias. | NEUROLÓGICO: Reflexos neonatais presentes e simétricos.',
    labs: [
      { test: '17-OHP triagem (pezinho)', val: '98 nmol/L', ref: '< 30 nmol/L', alt: true },
      { test: '17-OHP sérica confirmatória', val: '420 nmol/L', ref: '< 10 nmol/L', alt: true },
      { test: 'Sódio', val: '132 mEq/L', ref: '135–145 mEq/L', alt: true },
      { test: 'Potássio', val: '6,2 mEq/L', ref: '3,5–5,5 mEq/L', alt: true },
      { test: 'Cortisol basal', val: '2 µg/dL', ref: '5–25 µg/dL', alt: true },
      { test: 'ACTH', val: '820 pg/mL', ref: '< 46 pg/mL', alt: true },
      { test: 'Cariótipo (se solicitado)', val: '46XX', ref: '—', alt: false }
    ],
    image: 'USG pélvica/abdominal (se solicitada): Útero e ovários presentes. Sem gônadas na região inguinal ou escrotal. Sem suprarrenais visualizadas adequadamente.',
    note: 'Ator é a mãe. Entregar sinais vitais e resultado do pezinho ao início. Entregar exame físico detalhado ao exame. Exames confirmatórios somente se solicitados. Reforçar urgência: forma perdedora de sal (sódio baixo, potássio alto) é emergência endócrina que pode ser fatal em dias se não tratada.',
    patientProfile: 'Mãe: Renata S., 29 anos, professora. Bebê: nome não definido, sexo biológico 46XX, 2 dias de vida.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutor, me disseram que o resultado do pezinho e o exame do bebê estão alterados. Falaram que tem algo na genitália. Estou assustada.' },
      { trigger: 'Sobre o nascimento', speech: 'Nasceu bem, de cesárea, 38 semanas. Só que desde o início o médico ficou olhando para a genitália do bebê.' },
      { trigger: 'Sobre o bebê', speech: 'Está mamando pouco, fica jogando o leite fora. Parece mais irritada hoje.' },
      { trigger: 'Sobre o nome', speech: 'A gente não deu nome ainda porque estava esperando para entender o que está acontecendo.' },
      { trigger: 'Sobre a família', speech: 'Não sei de ninguém da família com isso. Mas somos parentes distantes, eu e meu marido.' },
      { trigger: 'Sobre a gravidez', speech: 'O pré-natal foi normal, o ultrassom mostrou menina.' },
      { trigger: 'Pergunta ativa 1', speech: 'Meu bebê é menina ou menino? Como vou registrar?' },
      { trigger: 'Pergunta ativa 2', speech: 'Vai precisar de cirurgia?' }
    ],
    hiddenInfo: 'Os pais são primos de terceiro grau — consanguinidade aumenta risco de doenças autossômicas recessivas; só revela se perguntado sobre grau de parentesco. | Bebê com vômitos e irritabilidade crescentes — pode indicar crise adrenal por perda de sal; só revela se perguntado sobre alimentação e vômitos.',
    actorBehavior: 'Mãe extremamente ansiosa e confusa sobre o sexo do bebê. Não recebeu explicação adequada até o momento. Cabe ao candidato ser empático, claro e multidisciplinar ao comunicar. Evitar termos como "hermafrodita" ou "sexo indefinido" — usar terminologia atual (diferença do desenvolvimento sexual — DDS).'
  },
  instC: {
    diagnosis: 'Hiperplasia adrenal congênita (HAC) por deficiência de 21-hidroxilase — forma clássica perdedora de sal — em 46XX com virilização grau III de Prader. Urgência endócrina com risco de crise adrenal por perda de sal (hiponatremia, hipercalemia).',
    differentials: [
      'HAC forma virilizante simples — sem perda de sal; Na e K normais; aqui eletrólitos alterados confirma forma perdedora de sal.',
      'Diferença do desenvolvimento sexual 46XY (ex: insensibilidade androgênica) — cariótipo 46XY com genitália feminina; aqui cariótipo 46XX.',
      'Tumor virilizante materno — virilização materna durante gestação; aqui sem histórico.'
    ],
    context: 'Recém-nascida 46XX com HAC clássica perdedora de sal por deficiência de 21-hidroxilase: genitália ambígua (virilização Prader III), 17-OHP sérica muito elevada, crise adrenal em desenvolvimento (hiponatremia, hipercalemia, vômitos). Emergência endócrina neonatal com diagnóstico pela triagem neonatal.',
    justify: '17-OHP > 100 nmol/L + genitália ambígua 46XX + hiponatremia + hipercalemia + cortisol baixo + ACTH muito elevado = HAC clássica perdedora de sal por deficiência de 21-OH. A forma perdedora de sal é a mais grave e potencialmente fatal se não tratada nas primeiras 2 semanas de vida.',
    expectedAnamnesis: 'Resultado e data do pezinho | Aspecto da genitália desde o nascimento | Alimentação: vômitos, recusa, irritabilidade (sinais de crise adrenal) | Histórico familiar de consanguinidade ou HAC | Gestação e pré-natal (ultra-sonografia — identificou genitália?)',
    expectedPhysical: 'Genitália: grau de virilização (escore de Prader), palpação de gônadas | Sinais de crise adrenal: hipotensão, taquicardia, desidratação, vômitos | Sinais vitais: PA, FC | Estado geral: irritabilidade, hipotonia',
    expectedExams: [
      { exam: '17-OHP sérica', justify: 'Confirmar HAC', expected: 'Muito elevada' },
      { exam: 'Ionograma (Na, K)', justify: 'Avaliar perda de sal — urgência', expected: 'Hiponatremia, hipercalemia' },
      { exam: 'Cortisol e ACTH', justify: 'Confirmar insuficiência adrenal', expected: 'Cortisol baixo, ACTH elevado' },
      { exam: 'Cariótipo', justify: 'Definir sexo biológico', expected: '46XX' },
      { exam: 'USG pélvica', justify: 'Identificar estruturas internas (útero, ovários)', expected: 'Útero e ovários presentes' }
    ],
    expectedConduct: 'Farmacológica: URGÊNCIA: Hidrocortisona EV 25 mg/m²/dose (dose de estresse) + reposição de sal (SF 0,9% EV) para correção da crise adrenal. Após estabilização: hidrocortisona oral + fludrocortisona + suplementação de sal. (SBP 2022 / SBEM 2022) | Não farmacológica: Monitorização cardíaca e de eletrólitos contínua. | Encaminhamento: Endocrinologia pediátrica URGENTE (em horas). Equipe multidisciplinar para DDS: endocrinologista, cirurgião pediátrico, psicólogo, assistente social — para orientação sobre identidade de gênero e cirurgia (se/quando/se indicada). | Orientações: Usar terminologia adequada ("diferença do desenvolvimento sexual — DDS"); não usar "hermafrodita"; explicar que o bebê tem genética feminina (46XX) e que o tratamento é urgente para a saúde; adiar decisões sobre nome e registro enquanto aguarda equipe especializada. | Seguimento: Acompanhamento multiprofissional; decisão sobre cirurgia é multidisciplinar e não urgente.',
    expectedCommunication: 'Apresentação: Apresentar-se, acolher com empatia máxima. | Comunicação do diagnóstico: "Renata, sei que está muito assustada. Seu bebê tem uma condição chamada hiperplasia adrenal congênita — as glândulas produziram hormônios que alteraram a genitália. Geneticamente, seu bebê é feminino (46XX). Agora precisamos tratar uma urgência no sangue." | Escuta ativa: Acolher a pergunta sobre o sexo com respeito; não forçar decisões imediatas; encaminhar para equipe especializada antes de qualquer decisão sobre registro ou cirurgia.',
    criticalErrors: [
      'Não reconhecer a urgência da crise adrenal por perda de sal (pode ser fatal em dias)',
      'Não iniciar hidrocortisona EV imediatamente',
      'Usar terminologia inadequada ("hermafrodita", "sexo indefinido")',
      'Forçar decisão sobre nome e sexo de registro sem suporte multidisciplinar',
      'Não encaminhar urgentemente à endocrinologia pediátrica'
    ]
  },
  instD: {
    title: 'CHECKLIST — BEBÊ COM PEZINHO ALTERADO E GENITÁLIA AMBÍGUA — HAC',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Acolheu a mãe com empatia máxima em situação de alta vulnerabilidade', score: 0.5, ref: 'CFM 2.217/2018' },
          { item: 'Utilizou terminologia adequada ("DDS", não "hermafrodita")', score: 0.5, ref: 'SBP / CFM, 2022' },
          { item: 'Não pressionou decisão imediata sobre nome/registro; explicou necessidade de equipe especializada', score: 0.5, ref: 'SBP / CFM, 2022' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Investigou resultado do pezinho (17-OHP) e sinais de crise adrenal (vômitos, irritabilidade)', score: 1.0, ref: 'SBP / SBEM, 2022' },
          { item: 'Questionou histórico familiar de consanguinidade ou HAC', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Avaliou grau de virilização da genitália (Prader) e palpação de gônadas', score: 1.0, ref: 'SBP / SBEM, 2022' },
          { item: 'Identificou sinais de crise adrenal: taquicardia, vômitos, irritabilidade', score: 1.0, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Formulou hipótese de HAC forma perdedora de sal com urgência clínica', score: 1.0, ref: 'SBP / SBEM, 2022' },
          { item: 'Solicitou ionograma, cortisol, ACTH, 17-OHP confirmatória e cariótipo', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Iniciou hidrocortisona EV (dose de estresse) e reposição de sal como emergência', score: 1.5, ref: 'SBP 2022 / SBEM 2022' },
          { item: 'Encaminhou urgentemente à endocrinologia pediátrica e equipe multidisciplinar de DDS', score: 1.0, ref: 'SBP / CFM, 2022' }
        ]
      }
    ]
  }
},

  {
  id: 14,
  title: 'Bebê com pezinho alterado — enzima da biotina',
  sub: 'UBS — Atenção Primária',
  tema: 'Neonatologia',
  topic: 'Deficiência de Biotinidase — Teste do Pezinho',
  level: 'moderado',
  cardAccent: '#1565C0',
  instA: {
    scenario: 'UBS — Atenção Primária. Consultório, turno matutino. Mãe convocada por pezinho alterado.',
    patient: 'Mãe de C.F., 20 dias de vida, feminina, a termo.',
    complaint: 'Recém-nascida convocada por atividade de biotinidase reduzida no teste do pezinho. Bebê aparentemente bem.',
    tasks: [
      'Realize a anamnese dirigida ao caso',
      'Realize o exame físico pertinente',
      'Explique a hipótese diagnóstica e seu significado',
      'Solicite os exames confirmatórios',
      'Inicie o tratamento e oriente a família'
    ]
  },
  instB: {
    vitals: {
      PA: 'Não aferida',
      FC: '128 bpm',
      FR: '40 irpm',
      Tax: '36,8°C',
      Peso: '3.520 g',
      Altura: '51 cm',
      IMC: '—'
    },
    physicalGeneral: 'Bom estado geral, ativo, reativo, normocorado, hidratado, sem dismorfias. Sem manifestações clínicas no momento (fase assintomática — triagem precoce).',
    physicalSeg: 'NEUROLÓGICO: Reflexos primitivos presentes, tônus normal. Sem convulsões. | PELE/CABELOS: Normais (alopecia e dermatite surgem tardiamente se não tratada). | SENSORIAL: Sem alterações evidentes (perda auditiva e visual surgem sem tratamento).',
    labs: [
      { test: 'Triagem — biotinidase (pezinho)', val: '12% atividade enzimática', ref: '> 30%', alt: true },
      { test: 'Biotinidase sérica confirmatória', val: '10% atividade', ref: '> 30% (forma profunda: < 10%)', alt: true }
    ],
    image: null,
    note: 'Ator é a mãe. Entregar peso e sinais vitais ao início. Bebê assintomático (triagem precoce). Exames confirmatórios somente se solicitados. Ressaltar que o tratamento é simples (biotina oral) e totalmente preventivo — prognóstico excelente com diagnóstico precoce.',
    patientProfile: 'Mãe: Camila F., 26 anos, recepcionista. Bebê: Clara F., 20 dias, feminina.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutor, me ligaram dizendo que a biotinidase da minha filha está baixa no pezinho. Nem sabia o que era isso.' },
      { trigger: 'Sobre o bebê', speech: 'Ela está ótima, mamando bem, ganhando peso, dormindo. Não parece nada errado.' },
      { trigger: 'Sobre histórico', speech: 'Ninguém da família que eu saiba tem algum problema assim.' },
      { trigger: 'Sobre a gravidez', speech: 'Gravidez e parto foram normais, sem complicação.' },
      { trigger: 'Sobre biotina', speech: 'Ouvi que biotina é vitamina dos cabelos. Tem relação?' },
      { trigger: 'Pergunta ativa 1', speech: 'O que pode acontecer se não tratar?' },
      { trigger: 'Pergunta ativa 2', speech: 'O tratamento é para sempre? É caro?' }
    ],
    hiddenInfo: 'Os pais são primos afastados — consanguinidade relevante para doença autossômica recessiva; só revela se perguntado. | Uma sobrinha da mãe teve "convulsão inexplicável na infância" — possível caso não diagnosticado de deficiência de biotinidase; só revela se perguntado sobre histórico familiar de convulsões ou doenças neurológicas na infância.',
    actorBehavior: 'Mãe tranquila mas curiosa. Fica aliviada quando entende que o tratamento é simples e eficaz. Cabe ao candidato comunicar claramente as consequências da não adesão.'
  },
  instC: {
    diagnosis: 'Deficiência profunda de biotinidase (atividade enzimática < 10%) — doença autossômica recessiva — diagnosticada pela triagem neonatal em fase assintomática. Sem tratamento: convulsões, hipotonia, alopecia, dermatite, perda auditiva e visual.',
    differentials: [
      'Deficiência parcial de biotinidase (10–30%) — forma leve, pode não requerer tratamento contínuo ou requer só em períodos de estresse metabólico.',
      'Deficiência de carboxilases múltiplas por deficiência de holocarboxilase sintetase — quadro similar mas sem resposta à biotina oral em altas doses.',
      'Resultado falso-positivo do pezinho — biotinidase sérica confirmatória resolve.'
    ],
    context: 'Recém-nascida com deficiência profunda de biotinidase (< 10%) diagnosticada pela triagem neonatal em fase assintomática. A biotinidase é a enzima responsável por reciclar a biotina (vitamina B7); sua deficiência leva a deficiência de biotina livre, com consequências neurológicas, sensoriais e cutâneas graves se não tratada. O tratamento com biotina oral é simples, barato e completamente preventivo.',
    justify: 'Atividade de biotinidase < 10% na triagem e confirmatória = deficiência profunda. Bebê assintomático porque ainda não acumulou substâncias tóxicas (triagem precoce). Sem tratamento, os sintomas surgem entre semanas e meses: convulsões mioclônicas, hipotonia, alopecia, dermatite perioral, crise acidótica, perda auditiva neurossensorial e atrofia óptica.',
    expectedAnamnesis: 'Data e resultado do pezinho | Estado atual do bebê (assintomático) | Consanguinidade dos pais | Histórico familiar de convulsões ou doenças neurológicas inexplicadas na infância | Alimentação',
    expectedPhysical: 'Estado geral, tônus, reflexos neonatais | Pele e cabelos (normais nessa fase) | Audição (teste da orelhinha — realizado?) | Ausência de dismorfias',
    expectedExams: [
      { exam: 'Biotinidase sérica confirmatória', justify: 'Confirmar deficiência e classificar gravidade', expected: '< 10% (deficiência profunda)' },
      { exam: 'Amônia e lactato', justify: 'Avaliar crise acidótica metabólica', expected: 'Normais nessa fase' },
      { exam: 'EEG', justify: 'Se convulsões presentes', expected: 'Normal nessa fase' }
    ],
    expectedConduct: 'Farmacológica: Biotina oral 5–20 mg/dia, dose única diária, por toda a vida. O tratamento é simples, de baixo custo e disponível no SUS. (SBP 2022 / MS 2013) | Não farmacológica: Manter aleitamento materno. Nenhuma restrição dietética necessária. | Encaminhamento: Serviço de referência em erros inatos do metabolismo (SREIM) para acompanhamento; genética médica para aconselhamento familiar. | Orientações: Explicar que a biotina é uma vitamina; que o tratamento é simples e previne completamente as sequelas; que sem tratamento podem ocorrer convulsões, surdez e cegueira; que o medicamento é para toda a vida e não pode ser interrompido. | Seguimento: SREIM; audiometria seriada; avaliação neurológica e oftalmológica periódica.',
    expectedCommunication: 'Apresentação: Apresentar-se, acolher a mãe. | Comunicação do diagnóstico: "Camila, a Clara tem uma deficiência de uma enzima chamada biotinidase. A boa notícia é que o tratamento é uma vitamina oral, simples e eficaz. Com ela, a Clara pode crescer completamente normal." | Escuta ativa: Responder sobre custo e duração do tratamento; reforçar a importância da adesão.',
    criticalErrors: [
      'Não iniciar biotina oral imediatamente',
      'Não encaminhar ao SREIM para acompanhamento especializado',
      'Não explicar as graves consequências da não adesão ao tratamento',
      'Não solicitar biotinidase sérica confirmatória antes de iniciar tratamento',
      'Confundir com deficiência parcial (10–30%) e não tratar'
    ]
  },
  instD: {
    title: 'CHECKLIST — BEBÊ COM PEZINHO ALTERADO — DEFICIÊNCIA DE BIOTINIDASE',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Acolheu a mãe e comunicou o diagnóstico com clareza', score: 0.5, ref: 'CFM 2.217/2018' },
          { item: 'Transmitiu a mensagem positiva: tratamento simples com prognóstico excelente', score: 1.0, ref: 'PNS/MS, 2023' },
          { item: 'Explicou as consequências da não adesão sem causar pânico', score: 0.5, ref: 'PNS/MS, 2023' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Verificou resultado do pezinho e estado atual do bebê', score: 0.5, ref: 'PNS/MS, 2023' },
          { item: 'Investigou consanguinidade e histórico familiar de convulsões/doenças metabólicas', score: 1.0, ref: 'PNS/MS, 2023' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Avaliou tônus, reflexos neonatais e estado cutâneo', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Confirmou ausência de manifestações clínicas (fase assintomática)', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Formulou hipótese de deficiência de biotinidase e solicitou confirmatório', score: 1.0, ref: 'PNS/MS, 2023' },
          { item: 'Diferenciou deficiência profunda (< 10%) de parcial (10–30%)', score: 0.5, ref: 'PNS/MS, 2023' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Iniciou biotina oral (5–20 mg/dia) imediatamente', score: 2.0, ref: 'SBP 2022 / MS 2013' },
          { item: 'Encaminhou ao SREIM e orientou sobre tratamento permanente', score: 1.0, ref: 'PNS/MS, 2023' }
        ]
      }
    ]
  }
},
];

export default neonatologia;
