const uro2stations = [
{
  id: 1,
  title: "Dor testicular intensa de início súbito em adolescente",
  sub: "UPA — Urgência e Emergência",
  tema: "Urologia",
  topic: "Torção testicular",
  level: "moderado",
  cardAccent: "#E53935",

  instA: {
    scenario: "UPA — Urgência e Emergência. Sala de atendimento, turno noturno.",
    patient: "M.O., 15 anos, masculino, estudante, sem comorbidades conhecidas.",
    complaint: "Dor forte no testículo esquerdo que começou de repente há cerca de 3 horas.",
    tasks: [
      "Realize a anamnese dirigida ao caso",
      "Realize o exame físico urológico pertinente",
      "Formule a hipótese diagnóstica principal e os diagnósticos diferenciais",
      "Solicite e interprete os exames complementares pertinentes",
      "Proponha a conduta adequada e oriente o paciente e o acompanhante"
    ]
  },

  instB: {
    vitals: { PA: "128/80 mmHg", FC: "104 bpm", FR: "18 irpm", Tax: "37,2°C", Peso: "62 kg", Altura: "1,70 m", IMC: "21,5 kg/m²" },
    physicalGeneral: "Paciente em regular estado geral, agitado, com fácies de dor. Lúcido e orientado. Pele e mucosas normocoradas, hidratadas. Abdome sem alterações.",
    physicalSeg: [
      "GENITÁLIA EXTERNA: Testículo esquerdo elevado, com eixo transverso (testículo horizontal), edemaciado e com eritema escrotal. Dor intensa à palpação. Sinal de Prehn negativo (dor não melhora com elevação da bolsa escrotal). Ausência de reflexo cremastérico esquerdo. Testículo direito em posição normal, indolor.",
      "ABDOME: Plano, sem dor à palpação, sem massas palpáveis, sem defesa ou descompressão positiva."
    ],
    labs: [
      { test: "Hemograma completo", val: "Leucócitos 9.800/mm³, sem desvio", ref: "4.000–11.000/mm³", alt: false },
      { test: "PCR", val: "0,4 mg/dL", ref: "< 0,5 mg/dL", alt: false },
      { test: "Urina tipo I (EAS)", val: "Sem leucocitúria, sem hematúria", ref: "Negativo", alt: false },
      { test: "Beta-HCG", val: "Negativo", ref: "Negativo", alt: false }
    ],
    image: "Doppler colorido escrotal (se solicitado): Ausência de fluxo vascular no testículo esquerdo. Testículo esquerdo com dimensões aumentadas e ecotextura heterogênea. Testículo direito com fluxo preservado e ecotextura homogênea. Conclusão: Achados compatíveis com torção testicular esquerda.",
    note: "Entregar o impresso de sinais vitais e exame físico no início da estação. Entregar os exames laboratoriais somente se solicitados verbalmente pelo candidato. Entregar o laudo do Doppler somente se solicitado. Atenção: o Doppler não deve atrasar a conduta cirúrgica — se candidato solicitar Doppler antes de indicar cirurgia, aguardar e pontuar, mas observar se ele hesita na conduta definitiva.",
    patientProfile: "Mateus O., 15 anos, masculino, estudante do ensino médio. Acompanhado pela mãe (42 anos, professora). Sem comorbidades. Residente em área urbana.",
    script: [
      { trigger: "Queixa principal", speech: "Doutor, meu testículo tá doendo muito, de um jeito que eu nunca senti antes. Começou do nada, faz umas 3 horas, eu tava dormindo e acordei com essa dor." },
      { trigger: "Sobre localização e intensidade", speech: "É no lado esquerdo, aqui ó. Tá muito inchado. A dor é forte demais, dou 9 de 10." },
      { trigger: "Sobre início", speech: "Foi de repente, sem fazer nada. Eu tava deitado, aí de repente aquela dor forte." },
      { trigger: "Sobre febre ou corrimento", speech: "Não, não tive febre não. Sem corrimento nenhum." },
      { trigger: "Sobre náusea ou vômito", speech: "Tô meio enjoado sim, acho que de tanta dor." },
      { trigger: "Sobre atividade sexual ou trauma", speech: "Não, não tive relação não. E não bati lá não." },
      { trigger: "Sobre episódios anteriores", speech: "Acho que umas duas vezes antes tive uma dorzinha assim, mas passou rapidinho." },
      { trigger: "Pergunta ativa", speech: "Doutor, o que eu tenho? É grave? Vou perder meu testículo?" },
      { trigger: "Pergunta ativa (mãe)", speech: "Precisa operar, doutor? Pode esperar um pouco mais?" }
    ],
    hiddenInfo: [
      "Episódios prévios de dor testicular espontânea que resolveram sozinhos (torção-detorção intermitente): só revelar se perguntado especificamente sobre episódios anteriores de dor testicular",
      "Uso de cueca boxer folgada: só revelar se perguntado sobre hábitos de vestuário ou posição do testículo"
    ],
    actorBehavior: "Paciente adolescente, com vergonha moderada no início da consulta, especialmente com a presença da mãe. Apresenta dor visível (carranca, posição antálgica). Fica mais ansioso quando se fala em cirurgia. A mãe é ansiosa e tende a falar pelo filho — candidato deve conduzir anamnese diretamente com o paciente. Tom colaborativo após abordagem empática."
  },

  instC: {
    diagnosis: "Torção testicular esquerda aguda — emergência urológica cirúrgica.",
    differentials: [
      "Epididimite/orquiepididimite aguda — inclusão: dor scrotal aguda, edema; exclusão: ausência de febre, leucocitúria ou leucocitose, Sinal de Prehn negativo, ausência de corrimento, ausência de fluxo ao Doppler",
      "Torção de apêndice testicular (hidátide de Morgagni) — inclusão: dor scrotal aguda em adolescente; exclusão: dor menos intensa, pode haver ponto azul visível, fluxo Doppler preservado",
      "Hérnia inguinal encarcerada — inclusão: dor inguinoescrotal aguda; exclusão: ausência de massa inguinal, sem déficit de trânsito intestinal, exame físico não compatível",
      "Trauma escrotal — inclusão: dor e edema escrotal; exclusão: negado pelo paciente, sem história de trauma"
    ],
    context: "Adolescente de 15 anos com dor testicular esquerda de início súbito, 3 horas de evolução, sem febre ou corrimento. Testículo elevado, horizontal, sem reflexo cremastérico, com Sinal de Prehn negativo e ausência de fluxo ao Doppler — quadro clássico de torção testicular aguda. Trata-se de emergência cirúrgica com janela de viabilidade testicular de até 6 horas.",
    justify: "A tríade dor testicular súbita + ausência de reflexo cremastérico + Sinal de Prehn negativo tem alta sensibilidade para torção testicular. A elevação e horizontalização do testículo (deformidade em badalo de sino), associadas à ausência de fluxo no Doppler colorido, confirmam o diagnóstico. A ausência de febre, leucocitose e leucocitúria afasta processo infeccioso. Episódios prévios sugerem torção intermitente, reforçando diagnóstico.",
    expectedAnamnesis: [
      "Início, duração e características da dor (localização, intensidade, irradiação, início súbito x gradual)",
      "Fatores desencadeantes (trauma, atividade física, espontâneo)",
      "Sintomas associados: náuseas, vômitos, febre, corrimento uretral",
      "Episódios anteriores semelhantes",
      "Atividade sexual recente (IST como diferencial)",
      "Antecedentes urológicos (criptorquidia, cirurgias prévias)",
      "Histórico familiar de torção testicular"
    ],
    expectedPhysical: [
      "Sinais vitais: FC elevada (dor), afebril — relevante para diferenciar infecção",
      "Inspeção: eritema, edema escrotal, assimetria, elevação testicular",
      "Palpação: dor intensa à palpação do testículo esquerdo, testículo em posição horizontal (sinal do badalo de sino)",
      "Sinal de Prehn: elevação da bolsa escrotal — negativo (não alivia dor) na torção",
      "Reflexo cremastérico: ausente no lado afetado (sensibilidade ~99%)",
      "Pesquisa de ponto azul (apêndice testicular torcido)",
      "Avaliação de canal inguinal (hérnia)"
    ],
    expectedExams: [
      { exam: "Doppler colorido escrotal", justify: "Avaliação do fluxo vascular testicular — padrão-ouro diagnóstico", expected: "Ausência de fluxo no testículo afetado" },
      { exam: "Hemograma", justify: "Afastar processo infeccioso", expected: "Normal (sem leucocitose)" },
      { exam: "Urina tipo I (EAS)", justify: "Afastar infecção urinária ou epididimite", expected: "Sem leucocitúria ou hematúria" },
      { exam: "Beta-HCG", justify: "Afastar tumor germinativo em adolescente", expected: "Negativo" }
    ],
    expectedConduct: [
      "Farmacológica: Analgesia imediata — dipirona 1g IV ou cetoprofeno 100mg IV para controle da dor enquanto aguarda cirurgia. Não retardar cirurgia por analgesia.",
      "Não farmacológica: Nada por via oral (NPO) imediato; acesso venoso; preparo para centro cirúrgico urgente",
      "Encaminhamento: Acionamento imediato do cirurgião/urologista de plantão. Orquidopexia bilateral de urgência (dentro de 6 horas do início dos sintomas para viabilidade testicular >90%)",
      "Orientações ao paciente/familiar: Explicar que é uma emergência, que o testículo pode perder a circulação e precisar ser retirado se não operar rapidamente. Cirurgia é o único tratamento definitivo. Orquidopexia bilateral para prevenir recorrência contralateral.",
      "Seguimento: Pós-operatório com urologista. Orientar sobre vigilância do testículo contralateral."
    ],
    expectedCommunication: [
      "Apresentação: Apresentar-se pelo nome e função, cumprimentar paciente e acompanhante, dirigir perguntas diretamente ao adolescente respeitando privacidade",
      "Comunicação do diagnóstico: Explicar em linguagem acessível que o testículo girou e está sem circulação, sendo necessária cirurgia urgente — sem alarmar desnecessariamente, mas sendo claro sobre a urgência",
      "Escuta ativa: Reconhecer o constrangimento do adolescente, perguntar se tem dúvidas, acolher a ansiedade da mãe sem excluir o paciente da conversa"
    ],
    criticalErrors: [
      "Não identificar torção testicular como emergência cirúrgica e retardar o encaminhamento cirúrgico",
      "Tratar como epididimite e prescrever antibiótico sem considerar torção testicular no diagnóstico diferencial",
      "Solicitar apenas exames e aguardar resultados sem indicar cirurgia urgente — perda da janela de viabilidade",
      "Não avaliar reflexo cremastérico e Sinal de Prehn no exame físico",
      "Não orientar o familiar sobre a urgência e necessidade de consentimento cirúrgico imediato"
    ]
  },

  instD: {
    title: "CHECKLIST",
    sections: [
      {
        h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Apresentou-se pelo nome ao paciente e ao acompanhante", score: 0.5, ref: "CFM 2.217/2018 — Código de Ética Médica" },
          { item: "Dirigiu a anamnese diretamente ao adolescente, respeitando sua autonomia", score: 0.5, ref: "ECA, Art. 17; CFM — boas práticas em pediatria" },
          { item: "Explicou o diagnóstico em linguagem acessível ao paciente e familiar", score: 0.5, ref: "CFM 2.217/2018" }
        ]
      },
      {
        h: "BLOCO 2 — ANAMNESE",
        items: [
          { item: "Investigou início, duração e característica da dor (súbito vs gradual)", score: 1.0, ref: "Campbell-Walsh Urology / Diretrizes SBU" },
          { item: "Perguntou sobre trauma local e atividade sexual recente", score: 0.5, ref: "SBU — Urologia Geral, 2022" },
          { item: "Investigou sintomas associados: febre, náusea, vômito, corrimento uretral", score: 0.5, ref: "SBU — Urologia Geral, 2022" },
          { item: "Questionou episódios anteriores semelhantes de dor testicular", score: 1.0, ref: "SBU — Torção testicular intermitente" },
          { item: "Investigou antecedentes cirúrgicos urológicos (criptorquidia, orquidopexia)", score: 0.5, ref: "SBU — Urologia Geral, 2022" }
        ]
      },
      {
        h: "BLOCO 3 — EXAME FÍSICO",
        items: [
          { item: "Avaliou sinais vitais (FC e temperatura)", score: 0.3, ref: "SBU — Urgências Urológicas" },
          { item: "Inspecionou a bolsa escrotal (edema, eritema, elevação testicular)", score: 0.5, ref: "SBU — Urgências Urológicas" },
          { item: "Pesquisou Sinal de Prehn (elevação da bolsa escrotal — negativo na torção)", score: 1.0, ref: "SBU — Urgências Urológicas, 2022" },
          { item: "Pesquisou reflexo cremastérico (ausente na torção)", score: 1.0, ref: "SBU — Urgências Urológicas, 2022" }
        ]
      },
      {
        h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Formulou hipótese de torção testicular como principal diagnóstico", score: 1.0, ref: "SBU — Urgências Urológicas, 2022" },
          { item: "Solicitou Doppler colorido escrotal como exame confirmatório", score: 0.5, ref: "SBU — Urgências Urológicas, 2022" },
          { item: "Solicitou EAS/urina tipo I para afastar infecção urinária", score: 0.3, ref: "SBU — Urgências Urológicas, 2022" },
          { item: "Mencionou ao menos 1 diagnóstico diferencial pertinente (epididimite ou torção de apêndice)", score: 0.5, ref: "SBU — Urgências Urológicas, 2022" }
        ]
      },
      {
        h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Indicou encaminhamento cirúrgico urgente (urologista/cirurgião) sem retardar", score: 1.0, ref: "SBU — Urgências Urológicas, 2022" },
          { item: "Prescreveu analgesia enquanto aguarda cirurgia", score: 0.3, ref: "MS — Protocolos de Urgência" },
          { item: "Explicou ao paciente/familiar a necessidade de cirurgia urgente e o risco de perda testicular", score: 0.5, ref: "CFM 2.217/2018 — Consentimento informado" },
          { item: "Orientou sobre NPO imediato e preparo pré-operatório", score: 0.3, ref: "Protocolo perioperatório — CFM" }
        ]
      }
    ]
  }
},
{
  id: 2,
  title: "Dor e inchaço no escroto com febre alta em homem diabético",
  sub: "UPA — Urgência e Emergência",
  tema: "Urologia",
  topic: "Síndrome de Fournier",
  level: "moderado",
  cardAccent: "#B71C1C",

  instA: {
    scenario: "UPA — Urgência e Emergência. Sala de triagem, turno diurno.",
    patient: "J.R., 58 anos, masculino, motorista de caminhão, diabético tipo 2.",
    complaint: "Escroto muito inchado, vermelho e com dor há 4 dias, com febre desde ontem.",
    tasks: [
      "Realize a anamnese dirigida ao caso",
      "Realize o exame físico pertinente",
      "Formule a hipótese diagnóstica e os principais diagnósticos diferenciais",
      "Solicite os exames complementares adequados",
      "Proponha a conduta e oriente o paciente sobre a gravidade e o tratamento"
    ]
  },

  instB: {
    vitals: { PA: "100/60 mmHg", FC: "118 bpm", FR: "22 irpm", Tax: "38,9°C", Peso: "88 kg", Altura: "1,72 m", IMC: "29,7 kg/m²" },
    physicalGeneral: "Paciente em mau estado geral, taquicárdico, febril, com fácies de dor e ansioso. Lúcido e orientado, porém prostrado. Pele e mucosas descoradas (+/4+), levemente desidratado.",
    physicalSeg: [
      "GENITÁLIA EXTERNA: Importante edema escrotal bilateral com eritema, calor local e dor intensa à palpação. Presença de área necrótica (escurecimento cutâneo) no escroto esquerdo com bordas mal definidas. Crepitação à palpação (enfisema subcutâneo). Odor fétido. Pênis sem alterações evidentes. Região perineal com extensão do eritema.",
      "ABDOME: Globoso (obesidade), flácido, levemente doloroso em hipogástrio, sem peritonismo.",
      "MMII: Sem edema, pulsos palpáveis."
    ],
    labs: [
      { test: "Hemograma", val: "Leucócitos 22.400/mm³ com 18% de bastões", ref: "4.000–11.000/mm³", alt: true },
      { test: "Glicemia", val: "387 mg/dL", ref: "70–99 mg/dL", alt: true },
      { test: "Creatinina", val: "2,1 mg/dL", ref: "0,7–1,2 mg/dL", alt: true },
      { test: "Ureia", val: "68 mg/dL", ref: "15–45 mg/dL", alt: true },
      { test: "Sódio", val: "132 mEq/L", ref: "136–145 mEq/L", alt: true },
      { test: "PCR", val: "18,4 mg/dL", ref: "< 0,5 mg/dL", alt: true },
      { test: "Lactato", val: "3,8 mmol/L", ref: "< 2,0 mmol/L", alt: true },
      { test: "Hemocultura", val: "Coleta enviada — resultado pendente", ref: "—", alt: false },
      { test: "Urina tipo I", val: "Glucosúria 3+, cetonúria 1+", ref: "Negativo", alt: true }
    ],
    image: "Tomografia computadorizada de pelve e períneo (se solicitada): Espessamento e edema das fáscias do períneo e escroto bilateralmente. Presença de gás nos tecidos moles do escroto e região perineal esquerda, estendendo-se à raiz da coxa ipsilateral. Sem coleção abscedada delimitada. Ausência de comprometimento abdominal. Conclusão: Achados compatíveis com fasciíte necrosante perineal (Síndrome de Fournier).",
    note: "Entregar sinais vitais e exame físico no início da estação. Entregar exames laboratoriais somente se solicitados. Entregar laudo de TC somente se solicitada. Observação: candidato não precisa solicitar TC para fazer diagnóstico clínico — o quadro clínico + crepitação são suficientes. Pontuar adequadamente se fizer diagnóstico clínico sem TC.",
    patientProfile: "José R., 58 anos, masculino, motorista de caminhão, casado, 3 filhos. Diabético tipo 2 há 12 anos, hipertenso. Mora em área urbana. Veio acompanhado da esposa.",
    script: [
      { trigger: "Queixa principal", speech: "Doutor, tô com o saco muito inchado e doendo há uns 4 dias. Ontem começou essa febre e tô me sentindo muito mal, fraco." },
      { trigger: "Sobre início e evolução", speech: "Começou com uma dorzinha pequena, achei que era frieira ou coisa assim. Fui deixando, mas foi piorando muito rápido." },
      { trigger: "Sobre febre", speech: "Ontem à noite tava com 39 de febre, tomei dipirona mas não baixou muito." },
      { trigger: "Sobre odor e aspecto", speech: "Minha mulher falou que tá com um cheiro ruim. Eu vi que ficou uma parte mais escura, mas não queria vir ao médico não." },
      { trigger: "Sobre diabetes", speech: "Tenho diabetes há anos, mas confesso que não tô tomando o remédio direito não. Faz uns 3 meses que não meço a glicose." },
      { trigger: "Sobre feridas ou procedimentos", speech: "Não fiz cirurgia não. Mas tive uma espinha no saco uns 15 dias atrás, espremei e saiu um pus." },
      { trigger: "Sobre medicamentos", speech: "Tomo metformina e amlodipina, mas tô irregular." },
      { trigger: "Pergunta ativa", speech: "Doutor, é grave isso? Tenho que internar?" },
      { trigger: "Pergunta ativa", speech: "Vou perder alguma coisa? Vai ter que operar?" }
    ],
    hiddenInfo: [
      "Episódio prévio de espinha/furúnculo escrotal há 15 dias com drenagem espontânea: só revelar se perguntado sobre lesão prévia, ferida ou porta de entrada",
      "Irregularidade no uso de medicamentos para diabetes há 3 meses: só revelar se perguntado especificamente sobre adesão ao tratamento"
    ],
    actorBehavior: "Paciente com dor intensa, prostrado, levemente confuso pela febre. Envergonhado com a queixa genital e resistente inicialmente a mostrar a região. Após abordagem empática, coopera com o exame. A esposa está muito ansiosa e faz perguntas durante a consulta — candidato deve conduzir com diplomacia."
  },

  instC: {
    diagnosis: "Síndrome de Fournier (fasciíte necrosante perineoescrotal) em paciente diabético descompensado, com sepse associada (critérios: febre, taquicardia, leucocitose com desvio, lactato elevado).",
    differentials: [
      "Orquiepididimite aguda — inclusão: dor e edema escrotal + febre; exclusão: presença de crepitação, necrose cutânea, comprometimento do estado geral incompatível com infecção simples",
      "Abscesso escrotal localizado — inclusão: eritema, dor, febre; exclusão: extensão para o períneo, crepitação, odor fétido, gás na TC",
      "Celulite escrotal — inclusão: eritema e edema sem necrose aparente em fases iniciais; exclusão: crepitação, necrose visível, toxemia sistêmica grave",
      "Hérnia inguinoescrotal complicada — inclusão: aumento de volume escrotal; exclusão: ausência de massa inguinal, sem relação com peristaltismo, necrose cutânea presente"
    ],
    context: "Homem diabético tipo 2 descompensado, 58 anos, com fasciíte necrosante perineoescrotal de evolução subaguda (4 dias), provavelmente originada de foco infeccioso local (furúnculo escrotal prévio). Apresenta-se com sepse estabelecida. Condição de alto risco de mortalidade, exige intervenção cirúrgica emergencial.",
    justify: "O diagnóstico de Síndrome de Fournier é clínico: dor desproporcional ao exame, crepitação (gás subcutâneo por germes anaeróbios), eritema com área necrótica, odor fétido e extensão rápida da infecção em paciente imunocomprometido (DM descompensado). O gás na TC confirma fasciíte necrosante. Critérios de sepse presentes: FC >100, Tax >38,5°C, leucocitose com desvio, lactato >2 mmol/L.",
    expectedAnamnesis: [
      "Início, duração e progressão dos sintomas (evolução rápida é sinal de alerta)",
      "Febre, calafrios, queda do estado geral",
      "Porta de entrada: feridas, procedimentos perineais, instrumentalização uretral, furúnculos",
      "Comorbidades imunossupressoras: diabetes, corticoterapia, etilismo, HIV",
      "Controle glicêmico atual (último uso de insulina/hipoglicemiante, glicemia recente)",
      "Medicamentos em uso e adesão",
      "Antecedentes cirúrgicos perineais ou urológicos"
    ],
    expectedPhysical: [
      "Sinais vitais: taquicardia, febre, hipotensão (sepse) — avaliação de choque",
      "Inspeção: eritema, necrose cutânea, edema importante do escroto e períneo",
      "Palpação: crepitação à palpação (patognomônica de gás subcutâneo), dor desproporcional",
      "Avaliação da extensão: verificar se atinge raiz de coxas, abdome inferior, períneo",
      "Avaliação sistêmica: hidratação, perfusão, nível de consciência (sinais de sepse)"
    ],
    expectedExams: [
      { exam: "Hemograma completo", justify: "Avaliar leucocitose e desvio (sepse)", expected: "Leucocitose com desvio à esquerda" },
      { exam: "Glicemia", justify: "Avaliar descompensação diabética", expected: "Hiperglicemia importante" },
      { exam: "Creatinina e ureia", justify: "Avaliar função renal (sepse, desidratação)", expected: "Elevados" },
      { exam: "Lactato sérico", justify: "Critério de sepse grave / choque séptico", expected: "Elevado (>2 mmol/L)" },
      { exam: "PCR", justify: "Marcador inflamatório", expected: "Muito elevado" },
      { exam: "Hemocultura", justify: "Identificar agente etiológico", expected: "Coleta antes dos antibióticos" },
      { exam: "TC de pelve e períneo", justify: "Extensão da infecção e presença de gás", expected: "Gás subcutâneo, extensão fascial" }
    ],
    expectedConduct: [
      "Farmacológica: Antibioticoterapia empírica de amplo espectro imediata (cobertura para Gram-positivos, Gram-negativos e anaeróbios): piperacilina-tazobactam 4,5g IV 6/6h + clindamicina 600mg IV 8/8h (ou metronidazol 500mg IV 8/8h) ⚠️ [Protocolo baseado em IDSA 2014 e adaptação SBU — verificar protocolo institucional]. Insulinoterapia para controle glicêmico. Suporte hemodinâmico com cristaloides IV.",
      "Não farmacológica: Acesso venoso calibroso (2 acessos), reposição volêmica agressiva, sondagem vesical de demora, monitorização contínua",
      "Encaminhamento: Acionamento imediato de cirurgião/urologista para desbridamento cirúrgico emergencial — tratamento definitivo. Considerar UTI no pós-operatório",
      "Orientações ao paciente/familiar: Explicar gravidade da situação com clareza e empatia. Necessidade de cirurgia urgente com possibilidade de ressecção tecidual ampla. Importância do controle do diabetes",
      "Seguimento: UTI pós-operatória, curativos diários, re-exploração cirúrgica se necessário, controle glicêmico rigoroso"
    ],
    expectedCommunication: [
      "Apresentação: Apresentar-se, acolher paciente e esposa, reconhecer gravidade sem causar pânico",
      "Comunicação do diagnóstico: Explicar que é uma infecção grave nos tecidos do escroto e região próxima que precisa de cirurgia urgente e antibiótico forte. Evitar termos que causem pânico sem preparo",
      "Escuta ativa: Acolher o constrangimento do paciente, responder às dúvidas da esposa, garantir que entenderam a urgência"
    ],
    criticalErrors: [
      "Não identificar a Síndrome de Fournier e tratar como epididimite simples com antibiótico oral ambulatorial",
      "Não acionar cirurgia urgente — desbridamento cirúrgico é o pilar do tratamento e seu atraso aumenta mortalidade",
      "Não iniciar antibioticoterapia endovenosa empírica de amplo espectro imediatamente",
      "Não identificar sepse (não avaliar FC, Tax, lactato, perfusão)",
      "Não investigar e manejar a descompensação diabética (glicemia >380 mg/dL)",
      "Não coletar hemoculturas antes de iniciar antibioticoterapia"
    ]
  },

  instD: {
    title: "CHECKLIST",
    sections: [
      {
        h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Apresentou-se pelo nome ao paciente e acompanhante", score: 0.3, ref: "CFM 2.217/2018" },
          { item: "Abordou o tema genital com respeito e sem constrangimento ao paciente", score: 0.5, ref: "CFM — Humanização no atendimento" },
          { item: "Comunicou a gravidade do caso ao paciente e familiar de forma clara e empática", score: 0.5, ref: "CFM 2.217/2018 — Comunicação de más notícias" }
        ]
      },
      {
        h: "BLOCO 2 — ANAMNESE",
        items: [
          { item: "Investigou início, duração e progressão dos sintomas", score: 0.5, ref: "SBU — Urgências Urológicas, 2022" },
          { item: "Pesquisou porta de entrada (feridas, furúnculos, procedimentos prévios)", score: 1.0, ref: "SBU — Síndrome de Fournier, 2022" },
          { item: "Investigou comorbidades imunossupressoras, especialmente diabetes e controle glicêmico", score: 1.0, ref: "SBU — Síndrome de Fournier, 2022" },
          { item: "Questionou uso e adesão a medicamentos", score: 0.5, ref: "SBU — Síndrome de Fournier, 2022" }
        ]
      },
      {
        h: "BLOCO 3 — EXAME FÍSICO",
        items: [
          { item: "Avaliou sinais vitais completos (incluindo Tax e FC)", score: 0.5, ref: "Sepsis-3 / MS — Protocolo de Sepse, 2019" },
          { item: "Inspecionou o escroto e períneo (eritema, necrose, extensão)", score: 0.5, ref: "SBU — Urgências Urológicas, 2022" },
          { item: "Pesquisou crepitação à palpação escrotal (sinal patognomônico)", score: 1.0, ref: "SBU — Síndrome de Fournier, 2022" },
          { item: "Avaliou extensão para períneo, raiz de coxas e abdome", score: 0.5, ref: "SBU — Síndrome de Fournier, 2022" }
        ]
      },
      {
        h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Formulou hipótese de Síndrome de Fournier (fasciíte necrosante)", score: 1.0, ref: "SBU — Urgências Urológicas, 2022" },
          { item: "Reconheceu critérios de sepse e solicitou lactato sérico", score: 0.5, ref: "MS — Protocolo de Sepse, 2019" },
          { item: "Solicitou hemograma, glicemia e função renal", score: 0.3, ref: "MS — Protocolo de Sepse, 2019" },
          { item: "Solicitou hemocultura antes de iniciar antibiótico", score: 0.5, ref: "MS — Protocolo de Sepse, 2019" }
        ]
      },
      {
        h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Iniciou antibioticoterapia EV de amplo espectro imediatamente", score: 1.0, ref: "SBU / IDSA — Fasciíte Necrosante ⚠️" },
          { item: "Indicou encaminhamento cirúrgico urgente para desbridamento", score: 1.0, ref: "SBU — Urgências Urológicas, 2022" },
          { item: "Iniciou reposição volêmica e suporte hemodinâmico", score: 0.5, ref: "MS — Protocolo de Sepse, 2019" }
        ]
      }
    ]
  }
},
{
  id: 3,
  title: "Criança com dificuldade para urinar e dor no pênis",
  sub: "UBS — Atenção Primária",
  tema: "Urologia",
  topic: "Fimose",
  level: "moderado",
  cardAccent: "#1565C0",

  instA: {
    scenario: "UBS — Atenção Primária. Consultório pediátrico, turno diurno. A mãe traz a criança.",
    patient: "L.S., 7 anos, masculino, estudante, sem comorbidades conhecidas.",
    complaint: "Mãe refere que o filho tem dificuldade para urinar e dor no pênis há alguns meses.",
    tasks: [
      "Realize a anamnese dirigida à mãe e à criança",
      "Realize o exame físico genital pertinente",
      "Formule a hipótese diagnóstica e classifique o grau da condição",
      "Proponha a conduta adequada conforme a classificação",
      "Oriente a mãe sobre o manejo, cuidados e seguimento"
    ]
  },

  instB: {
    vitals: { PA: "90/60 mmHg", FC: "88 bpm", FR: "18 irpm", Tax: "36,8°C", Peso: "22 kg", Altura: "1,22 m", IMC: "14,8 kg/m²" },
    physicalGeneral: "Paciente em bom estado geral, lúcido, orientado, colaborativo. Pele e mucosas normocoradas e hidratadas. Sem adenomegalias palpáveis.",
    physicalSeg: [
      "GENITÁLIA EXTERNA: Prepúcio com aderência total ao glande — impossibilidade de retração do prepúcio mesmo com tração suave. Orifício prepucial puntiforme com jato urinário fino e em leque. Sem sinais de infecção (eritema, secreção, odor). Sem cicatrizes ou endurecimento do prepúcio (anel branco). Testículos em bolsa escrotal bilateral, volume e posição normais.",
      "ABDOME: Sem globo vesical palpável, plano, sem dor."
    ],
    labs: [
      { test: "Urina tipo I (EAS)", val: "Normal", ref: "Normal", alt: false }
    ],
    image: "image: null",
    note: "Entregar sinais vitais no início. Exame físico entregar como impresso ao candidato quando solicitado. EAS entregar apenas se solicitado. A criança pode ser representada por boneco/manequim para o exame físico genital — avaliador descreve os achados ao candidato quando ele solicita o exame.",
    patientProfile: "Lucas S., 7 anos, masculino, estudante do ensino fundamental. Mãe: Carla S., 32 anos, auxiliar administrativa. Pai ausente. Sem comorbidades. Vacinação em dia.",
    script: [
      { trigger: "Queixa principal (mãe)", speech: "Doutor, meu filho tá com dificuldade para fazer xixi há uns 6 meses, o jato é fraco e fino. Às vezes ele reclama que dói também." },
      { trigger: "Sobre dor (criança)", speech: "Dói aqui quando eu faço xixi (aponta para o pênis)" },
      { trigger: "Sobre infecção urinária anterior (mãe)", speech: "Ele já teve infecção urinária duas vezes, o médico anterior receitou antibiótico." },
      { trigger: "Sobre higiene (mãe)", speech: "Eu tento limpar, mas não consigo abrir, fica fechado mesmo. Já forcei um pouco uma vez e ele chorou muito." },
      { trigger: "Sobre tentativa de retração forçada", speech: "O pediatra anterior falou pra eu ir abrindo devagarinho, mas ele sente muita dor." },
      { trigger: "Sobre cirurgia (mãe)", speech: "Precisa operar, doutor? Meu vizinho falou que tem que tirar tudo. Fico com medo." },
      { trigger: "Pergunta ativa (mãe)", speech: "Isso vai melhorar sozinho ou precisa fazer alguma coisa?" },
      { trigger: "Pergunta ativa (mãe)", speech: "Posso continuar tentando abrir em casa ou é perigoso?" }
    ],
    hiddenInfo: [
      "Episódio de balanopostite (inflamação da glande/prepúcio) há 3 meses, tratado com antibiótico tópico: só revelar se perguntado sobre infecções ou inflamações no pênis",
      "Tentativa de retração forçada pelo pediatra anterior: só revelar se perguntado sobre manipulação prévia do prepúcio"
    ],
    actorBehavior: "Mãe ansiosa, protetora, com medo de cirurgia. Traz a criança que é tímida mas colaborativa quando abordada diretamente com linguagem adequada à idade. A mãe tende a responder por ele — candidato deve incluir a criança na conversa de forma lúdica e respeitosa."
  },

  instC: {
    diagnosis: "Fimose verdadeira grau IV (classificação de Kikiros) em criança de 7 anos, com complicações recorrentes (infecções urinárias, balanopostite) e sintomas obstrutivos (jato fino, puntiforme). Indicação de tratamento ativo.",
    differentials: [
      "Fimose fisiológica — inclusão: prepúcio não retrátil em criança; exclusão: fimose fisiológica é esperada até os 3–4 anos, aos 7 anos com sintomas obstrutivos e infecções recorrentes é considerada patológica",
      "Balanopostite — inclusão: dor e dificuldade miccional; exclusão: ausência de eritema, secreção ou odor no momento atual; é complicação da fimose, não diagnóstico principal",
      "Estenose de meato uretral — inclusão: jato fino; exclusão: a obstrução é prepucial, não do meato; exame físico diferencia"
    ],
    context: "Criança de 7 anos com fimose sintomática com orifício puntiforme, infecções urinárias recorrentes e balanopostite prévia. A persistência da fimose após os 5 anos com sintomas obstrutivos e complicações infecciosas configura indicação de tratamento, preferencialmente iniciando com corticoterapia tópica.",
    justify: "Fimose fisiológica regride naturalmente: aos 6–7 anos, cerca de 80% dos meninos já têm prepúcio retrátil. A persistência com orifício puntiforme (grau IV de Kikiros), jato urinário em leque, infecções urinárias recorrentes e balanopostite configura fimose patológica. A tentativa de retração forçada é contraindicada pois gera fissuras, sinéquias e cicatrizes (fimose cicatricial secundária).",
    expectedAnamnesis: [
      "Duração e progressão da dificuldade miccional (jato, esforço, choro)",
      "Infecções urinárias anteriores (número de episódios, tratamentos)",
      "Episódios de balanopostite (inflamação local)",
      "Tentativas de retração — forçada ou não",
      "Manipulação ou orientação de médicos anteriores",
      "Presença de anel branco/cicatriz no prepúcio (liquen escleroso)",
      "Higiene local (como é realizada)",
      "Sintomas de ITU atual (febre, disúria, urina turva)"
    ],
    expectedPhysical: [
      "Inspeção: orifício prepucial — avaliar tamanho, presença de anel fibrótico/branco",
      "Classificação de Kikiros (grau I a V): grau IV = retração apenas descobre glande parcialmente sob pressão; grau V = nenhuma retração",
      "Verificar ausência de sinais inflamatórios agudos (eritema, secreção)",
      "Pesquisar cicatrizes ou endurecimento (liquen escleroso/balanite xerótica obliterante)",
      "Verificar posição e volume testicular bilateral",
      "Não realizar retração forçada"
    ],
    expectedExams: [
      { exam: "Urina tipo I (EAS)", justify: "Rastrear ITU em atividade", expected: "Normal no momento; se alterado, tratar antes do procedimento" },
      { exam: "Urocultura", justify: "Se EAS alterado", expected: "Identificar agente e sensibilidade" }
    ],
    expectedConduct: [
      "Farmacológica: Corticosteroide tópico — betametasona 0,1% creme, aplicar na área de estreitamento do prepúcio 2x/dia por 4–8 semanas com massagem suave. Taxa de sucesso de 65–95% em fimose sem liquen escleroso (SBP/SBU). Associar higiene local com água e sabão neutro.",
      "Não farmacológica: Orientar higiene peniana adequada (sem retração forçada); ensinar técnica correta de aplicação do creme; evitar manipulação agressiva",
      "Encaminhamento: Se falha ao tratamento tópico após 8 semanas → encaminhar para urologista pediátrico para posthectomia (circuncisão) ou postectomia parcial",
      "Orientações ao paciente/familiar: Explicar que não é necessário abrir à força; o creme ajuda o prepúcio a alargar naturalmente; cirurgia é opção se o creme não funcionar; não é urgente",
      "Seguimento: Retorno em 4–6 semanas para avaliar resposta ao tratamento tópico"
    ],
    expectedCommunication: [
      "Apresentação: Apresentar-se, incluir a criança na conversa com linguagem adequada à idade",
      "Comunicação do diagnóstico: Explicar para a mãe que é uma abertura pequena no prepúcio que pode melhorar com uma pomada antes de pensar em cirurgia; tranquilizá-la sobre a retração forçada ser contraindicada",
      "Escuta ativa: Acolher o medo da mãe em relação à cirurgia, explicar que cirurgia é a última opção"
    ],
    criticalErrors: [
      "Orientar ou realizar retração forçada do prepúcio — causa fissuras, sinéquias e agrava o quadro",
      "Indicar circuncisão cirúrgica imediata sem tentar corticoterapia tópica primeiro (quando sem contraindicação)",
      "Não identificar as complicações da fimose (ITUs recorrentes, balanopostite) que indicam tratamento ativo",
      "Tranquilizar a mãe dizendo que vai passar sozinho sem investigar ou tratar — aos 7 anos com sintomas obstrutivos, conduta expectante isolada não é adequada",
      "Não orientar sobre higiene peniana adequada e técnica correta de aplicação do creme"
    ]
  },

  instD: {
    title: "CHECKLIST",
    sections: [
      {
        h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Apresentou-se pelo nome à mãe e dirigiu-se também à criança com linguagem adequada à faixa etária", score: 0.5, ref: "CFM 2.217/2018; ECA Art. 17" },
          { item: "Explicou o diagnóstico em linguagem acessível, desmistificando o medo da cirurgia", score: 0.5, ref: "CFM 2.217/2018" },
          { item: "Perguntou à mãe se tinha dúvidas ao final da consulta", score: 0.3, ref: "CFM 2.217/2018" }
        ]
      },
      {
        h: "BLOCO 2 — ANAMNESE",
        items: [
          { item: "Investigou características do jato urinário (fino, em leque, esforço)", score: 0.5, ref: "SBP — Uropatias Pediátricas, 2021" },
          { item: "Questionou episódios anteriores de ITU e balanopostite", score: 1.0, ref: "SBP — Uropatias Pediátricas, 2021" },
          { item: "Perguntou sobre tentativas de retração forçada anteriores", score: 0.5, ref: "SBP — Fimose, 2021" },
          { item: "Investigou presença de dor miccional e sintomas de ITU ativa", score: 0.5, ref: "SBP — Uropatias Pediátricas, 2021" }
        ]
      },
      {
        h: "BLOCO 3 — EXAME FÍSICO",
        items: [
          { item: "Inspecionou o prepúcio e classificou o orifício (puntiforme/estreito)", score: 1.0, ref: "Kikiros et al. — Classificação de Fimose; SBP 2021" },
          { item: "Verificou ausência de sinais inflamatórios agudos (eritema, secreção)", score: 0.5, ref: "SBP — Uropatias Pediátricas, 2021" },
          { item: "Avaliou presença de anel branco/cicatriz (liquen escleroso)", score: 0.5, ref: "SBP — Fimose, 2021" },
          { item: "Verificou posição e volume testicular bilateral", score: 0.3, ref: "SBP — Exame Genital Masculino" }
        ]
      },
      {
        h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Formulou hipótese de fimose patológica com complicações (ITU, balanopostite)", score: 1.0, ref: "SBP — Uropatias Pediátricas, 2021" },
          { item: "Solicitou urina tipo I para rastrear ITU ativa", score: 0.5, ref: "SBP — Uropatias Pediátricas, 2021" }
        ]
      },
      {
        h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Prescreveu corticosteroide tópico (betametasona 0,1%) com orientação da técnica de aplicação", score: 1.0, ref: "SBP / SBU — Fimose, 2021; RENAME 2022" },
          { item: "Contraindicou retração forçada e orientou higiene adequada", score: 0.5, ref: "SBP — Fimose, 2021" },
          { item: "Orientou retorno em 4–6 semanas para reavaliação e mencionou cirurgia como segunda opção", score: 0.5, ref: "SBP — Fimose, 2021" },
          { item: "Tranquilizou a mãe sobre a desnecessidade de cirurgia imediata", score: 0.3, ref: "CFM 2.217/2018" }
        ]
      }
    ]
  }
},
{
  id: 4,
  title: "Homem com pênis preso e inchado após relação sexual",
  sub: "UPA — Urgência e Emergência",
  tema: "Urologia",
  topic: "Parafimose",
  level: "moderado",
  cardAccent: "#E65100",

  instA: {
    scenario: "UPA — Urgência e Emergência. Sala de atendimento, turno noturno.",
    patient: "R.M., 22 anos, masculino, estudante universitário, sem comorbidades.",
    complaint: "Pênis inchado e com dor há cerca de 2 horas, não consegue voltar o prepúcio ao lugar.",
    tasks: [
      "Realize a anamnese dirigida ao caso",
      "Realize o exame físico genital pertinente",
      "Formule a hipótese diagnóstica",
      "Proponha e execute (ou descreva) a conduta de redução adequada",
      "Oriente o paciente sobre prevenção de recorrência e seguimento"
    ]
  },

  instB: {
    vitals: { PA: "122/76 mmHg", FC: "96 bpm", FR: "16 irpm", Tax: "36,7°C", Peso: "73 kg", Altura: "1,75 m", IMC: "23,8 kg/m²" },
    physicalGeneral: "Paciente em bom estado geral, consciente, orientado, com fácies de dor e vergonha. Pele e mucosas normocoradas, bem hidratado.",
    physicalSeg: [
      "GENITÁLIA EXTERNA: Prepúcio retraído e fixo atrás da glande, formando anel constritor circular visível. Glande edemaciada, cianótica e com aumento de volume. Pele do prepúcio edemaciada distalmente ao anel constritor. Sem necrose visível. Sem lacerações ou hematomas. Meato uretral visível e pérvio.",
      "ABDOME: Sem alterações."
    ],
    labs: [],
    image: "image: null",
    note: "Entregar sinais vitais no início. Exame físico como impresso quando solicitado. Nenhum exame laboratorial é necessário para esse caso. Avaliador deve descrever os achados do exame físico ao candidato como se fosse o exame real. A redução manual deve ser descrita pelo candidato — não precisa ser realizada fisicamente. Pontuar se descreve a técnica corretamente.",
    patientProfile: "Rafael M., 22 anos, masculino, estudante universitário de engenharia. Solteiro. Sem comorbidades. Sem cirurgias prévias. Veio desacompanhado, visivelmente envergonhado.",
    script: [
      { trigger: "Queixa principal", speech: "Doutor… é uma coisa constrangedora. Tive relação sexual hoje à noite e o prepúcio ficou preso atrás, não consigo voltar. Tá muito inchado e doendo." },
      { trigger: "Sobre tempo e evolução", speech: "Faz umas 2 horas. Tentei empurrar de volta mas não consegui, só ficou pior." },
      { trigger: "Sobre atividade sexual", speech: "Foi durante a relação, o prepúcio foi pra trás e não voltou mais." },
      { trigger: "Sobre tentativas de redução", speech: "Tentei colocar gelo mas não adiantou. Forçar também não deu certo." },
      { trigger: "Sobre febre ou corrimento", speech: "Não, sem febre. Sem corrimento." },
      { trigger: "Sobre fimose prévia", speech: "Nunca tive problema de prepúcio antes. Sabia que tinha que voltar, mas nunca tinha acontecido isso." },
      { trigger: "Pergunta ativa", speech: "Vai precisar operar, doutor? Vai ficar normal?" },
      { trigger: "Pergunta ativa", speech: "Dói muito o que vai fazer? Tem como anestesiar?" }
    ],
    hiddenInfo: [
      "Histórico de uma retração semelhante no passado que resolveu sozinha (episódio prévio leve): só revelar se perguntado sobre episódios anteriores semelhantes",
      "Nunca foi orientado sobre necessidade de reduzir o prepúcio após relação ou higiene: só revelar se perguntado sobre orientações prévias sobre cuidados do prepúcio"
    ],
    actorBehavior: "Extremamente envergonhado no início. Após abordagem empática e sem julgamento, torna-se colaborativo. Ansiosa com a possibilidade de procedimento doloroso ou cirurgia. Responde bem quando o candidato o trata com normalidade e explica cada passo do procedimento."
  },

  instC: {
    diagnosis: "Parafimose aguda — anel constritor prepucial com edema e congestão da glande, sem sinais de necrose. Condição de urgência urológica com redução manual indicada.",
    differentials: [
      "Priapismo — inclusão: pênis em tumescência e doloroso; exclusão: o aumento de volume é da glande e do prepúcio distal ao anel, não da haste peniana; sem ereção sustentada",
      "Edema alérgico peniano (angioedema) — inclusão: edema peniano; exclusão: sem história de alergia, sem urticária, anel constritor visível",
      "Trauma peniano — inclusão: dor e edema; exclusão: mecanismo típico de parafimose pós-relação, sem hematoma ou laceração"
    ],
    context: "Jovem de 22 anos sem antecedentes urológicos, com parafimose aguda após relação sexual, com 2 horas de evolução. Glande edemaciada e cianótica sem sinais de necrose — janela adequada para redução manual. Caso urgente mas sem emergência cirúrgica imediata.",
    justify: "O diagnóstico de parafimose é essencialmente clínico: prepúcio retraído e fixo formando anel constritor proximal à glande, com edema distal progressivo por obstrução linfático-venosa. A cianose da glande indica comprometimento vascular por constrição, mas ausência de necrose permite tentativa de redução manual antes de abordagem cirúrgica.",
    expectedAnamnesis: [
      "Tempo de início (quanto mais tarde, maior o edema)",
      "Mecanismo (relação sexual, higiene, cateterismo, manipulação)",
      "Tentativas de redução anteriores",
      "Sintomas de comprometimento vascular (dormência, escurecimento da glande)",
      "Histórico de fimose ou retração prévia",
      "Alergias (diagnóstico diferencial com angioedema)",
      "ISTs ou infecções locais"
    ],
    expectedPhysical: [
      "Inspeção: identificar anel constritor, grau de edema, coloração da glande (rósea/cianótica/necrótica)",
      "Avaliar viabilidade tecidual: cianose ≠ necrose — cianose ainda permite redução manual",
      "Verificar meato uretral (pérvio x obstruído — retenção urinária?)",
      "Avaliar temperatura local e sensibilidade da glande"
    ],
    expectedExams: [
      { exam: "Nenhum exame necessário em parafimose aguda sem complicações", justify: "Diagnóstico clínico", expected: "—" }
    ],
    expectedConduct: [
      "Farmacológica: Analgesia tópica ou sistêmica antes da redução: EMLA (lidocaína + prilocaína) tópico por 15–20 min; ou bloqueio peniano (lidocaína 1% sem vasoconstritor); ou dipirona/cetoprofeno IV para analgesia sistêmica",
      "Não farmacológica — Redução manual (técnica):"
    ],
    expectedCommunication: [
      "Apresentação: Apresentar-se sem julgamento, normalizar a situação, garantir privacidade",
      "Comunicação do diagnóstico: Explicar que o prepúcio ficou preso e está comprimindo a glande, causando o inchaço; é possível resolver sem cirurgia na maioria das vezes",
      "Escuta ativa: Reconhecer o constrangimento, explicar cada passo antes de fazer, perguntar sobre nível de dor"
    ],
    criticalErrors: [
      "Não realizar tentativa de redução manual e encaminhar diretamente para cirurgia sem indicação",
      "Não analgesia prévia ao procedimento de redução",
      "Não orientar sobre necessidade de reduzir o prepúcio após relação/higiene para prevenir recorrência",
      "Não avaliar viabilidade da glande (presença de necrose contraindica redução manual simples)",
      "Usar vasoconstritor no bloqueio peniano (contraindicado — risco de isquemia)"
    ]
  },

  instD: {
    title: "CHECKLIST",
    sections: [
      {
        h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Apresentou-se pelo nome e garantiu privacidade ao paciente", score: 0.5, ref: "CFM 2.217/2018" },
          { item: "Abordou a queixa genital sem julgamento, normalizando a situação", score: 0.5, ref: "CFM — Humanização no atendimento" },
          { item: "Explicou o procedimento de redução antes de realizá-lo, obtendo concordância do paciente", score: 0.5, ref: "CFM 2.217/2018 — Consentimento informado" }
        ]
      },
      {
        h: "BLOCO 2 — ANAMNESE",
        items: [
          { item: "Investigou o tempo de início e mecanismo da parafimose", score: 0.5, ref: "SBU — Urgências Urológicas, 2022" },
          { item: "Perguntou sobre tentativas prévias de redução e resultado", score: 0.5, ref: "SBU — Urgências Urológicas, 2022" },
          { item: "Investigou sintomas de comprometimento vascular (dormência, escurecimento da glande)", score: 0.5, ref: "SBU — Urgências Urológicas, 2022" },
          { item: "Questionou histórico de fimose ou episódios anteriores", score: 0.5, ref: "SBU — Urgências Urológicas, 2022" }
        ]
      },
      {
        h: "BLOCO 3 — EXAME FÍSICO",
        items: [
          { item: "Identificou e descreveu o anel constritor prepucial", score: 1.0, ref: "SBU — Urgências Urológicas, 2022" },
          { item: "Avaliou a viabilidade da glande (cianose vs. necrose)", score: 1.0, ref: "SBU — Urgências Urológicas, 2022" },
          { item: "Verificou pérvio do meato uretral (retenção urinária?)", score: 0.5, ref: "SBU — Urgências Urológicas, 2022" }
        ]
      },
      {
        h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Formulou hipótese de parafimose aguda sem necrose, com indicação de redução manual", score: 1.0, ref: "SBU — Urgências Urológicas, 2022" },
          { item: "Identificou que não há necessidade de exames complementares para diagnóstico", score: 0.3, ref: "SBU — Urgências Urológicas, 2022" }
        ]
      },
      {
        h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Prescreveu ou descreveu analgesia antes da redução (tópica ou sistêmica)", score: 0.5, ref: "SBU — Urgências Urológicas, 2022" },
          { item: "Descreveu corretamente a técnica de redução manual (compressão + tração prepucial)", score: 1.0, ref: "SBU — Urgências Urológicas, 2022" },
          { item: "Contraindicou uso de vasoconstritor no bloqueio peniano", score: 0.5, ref: "SBU — Urgências Urológicas, 2022" },
          { item: "Orientou sobre redução do prepúcio após relação/higiene para prevenir recorrência", score: 0.5, ref: "SBU — Urgências Urológicas, 2022" },
          { item: "Encaminhou para urologista eletivo para avaliação de posthectomia preventiva", score: 0.5, ref: "SBU — Urgências Urológicas, 2022" }
        ]
      }
    ]
  }
},
{
  id: 5,
  title: "Ereção dolorosa e prolongada sem estímulo sexual",
  sub: "UPA — Urgência e Emergência",
  tema: "Urologia",
  topic: "Priapismo",
  level: "moderado",
  cardAccent: "#6A1B9A",

  instA: {
    scenario: "UPA — Urgência e Emergência. Sala de atendimento, turno noturno.",
    patient: "C.S., 34 anos, masculino, professor, sem comorbidades referidas.",
    complaint: "Ereção há mais de 4 horas que não cede, com dor progressiva.",
    tasks: [
      "Realize a anamnese dirigida ao caso",
      "Realize o exame físico peniano pertinente",
      "Classifique o tipo de priapismo e formule a hipótese diagnóstica",
      "Solicite e interprete os exames complementares pertinentes",
      "Proponha a conduta adequada e oriente o paciente"
    ]
  },

  instB: {
    vitals: { PA: "132/84 mmHg", FC: "100 bpm", FR: "18 irpm", Tax: "36,9°C", Peso: "78 kg", Altura: "1,78 m", IMC: "24,6 kg/m²" },
    physicalGeneral: "Paciente em regular estado geral, constrangido e com fácies de dor moderada. Lúcido e orientado. Pele e mucosas normocoradas, bem hidratado.",
    physicalSeg: [
      "GENITÁLIA EXTERNA: Pênis em ereção completa, corpo cavernoso rígido e doloroso à palpação. Glande e corpo esponjoso flácidos (diferencial importante para priapismo isquêmico). Sem lacerações, hematomas ou deformidades. Temperatura local aumentada. Meato pérvio.",
      "ABDOME: Sem alterações. Sem massa palpável em hipogástrio."
    ],
    labs: [
      { test: "Hemograma", val: "Hemoglobina 7,2 g/dL, VCM 68 fL, CHCM 30 g/dL", ref: "Hb: 13,5–17,5 g/dL", alt: true },
      { test: "Leucócitos", val: "8.200/mm³, sem desvio", ref: "4.000–11.000/mm³", alt: false },
      { test: "Plaquetas", val: "320.000/mm³", ref: "150.000–400.000/mm³", alt: false },
      { test: "Gasometria do aspirado cavernoso (se solicitada)", val: "pH 7,10 / pO2 28 mmHg / pCO2 68 mmHg", ref: "pH 7,35-7,45 / pO2 >60 mmHg", alt: true },
      { test: "Eletroforese de hemoglobina (se solicitada)", val: "HbSS (padrão falciforme)", ref: "HbAA", alt: true }
    ],
    image: "Doppler peniano (se solicitado): Ausência de fluxo nas artérias cavernosas bilateralmente. Achado compatível com priapismo isquêmico (baixo fluxo).",
    note: "Entregar sinais vitais e exame físico no início. Hemograma entregar se solicitado. Gasometria do aspirado cavernoso e Doppler entregar somente após candidato indicar aspiração cavernosa ou solicitar Doppler especificamente. Eletroforese de hemoglobina entregar se solicitada. A presença de anemia microcítica hipocrômica no hemograma deve levar o candidato a investigar anemia falciforme como causa.",
    patientProfile: "Carlos S., 34 anos, masculino, professor do ensino fundamental, casado. Natural da Bahia, residente em São Paulo há 5 anos. Sem acompanhante na UPA.",
    script: [
      { trigger: "Queixa principal", speech: "Doutor, eu tô com uma ereção há mais de 4 horas e não passa. Tá doendo muito. Eu sei que parece estranho vir ao pronto-socorro por isso, mas eu não consigo fazer ela ir embora." },
      { trigger: "Sobre início e contexto", speech: "Começou durante o sono, acordei assim. Não tinha nada de especial acontecendo." },
      { trigger: "Sobre dor", speech: "Tá doendo muito, especialmente quando aperto. No começo não doía tanto, mas foi piorando." },
      { trigger: "Sobre medicamentos ou drogas", speech: "Não tomei nada, nenhum remédio para isso. Não uso droga não." },
      { trigger: "Sobre doenças anteriores", speech: "Olha… eu sei que tenho anemia, minha mãe tem também. Nunca fui muito a médico. Acho que é anemia falciforme." },
      { trigger: "Sobre episódios anteriores", speech: "Já tive isso uma vez quando era criança, mas passou sozinho." },
      { trigger: "Sobre tentativas de resolução", speech: "Tentei urinar, tomar banho frio, nada adiantou." },
      { trigger: "Pergunta ativa", speech: "Doutor, isso pode me deixar impotente?" },
      { trigger: "Pergunta ativa", speech: "Vai precisar de cirurgia? Vai doer o que vai fazer?" }
    ],
    hiddenInfo: [
      "Diagnóstico de anemia falciforme desde a infância, mas sem acompanhamento regular: só revelar se perguntado especificamente sobre doenças hematológicas ou anemia",
      "Episódio semelhante na infância: só revelar se perguntado sobre episódios anteriores de priapismo"
    ],
    actorBehavior: "Constrangido mas cooperativo quando abordado com naturalidade. Sente dor moderada-intensa (7/10). Fica claramente ansioso quando se menciona possibilidade de impotência ou cirurgia. Responde bem a explicações claras e empáticas."
  },

  instC: {
    diagnosis: "Priapismo isquêmico (baixo fluxo) prolongado (>4 horas) em paciente com anemia falciforme — emergência urológica.",
    differentials: [
      "Priapismo não-isquêmico (alto fluxo) — inclusão: ereção prolongada; exclusão: dor intensa (alto fluxo geralmente indolor), ausência de fluxo no Doppler, gasometria com hipóxia e acidose (baixo fluxo)",
      "Priapismo induzido por medicamentos (IPDE5, antipsicóticos, antidepressivos) — inclusão: pode causar priapismo; exclusão: negado pelo paciente, investigar proativamente",
      "Priapismo por infiltração neoplásica (leucemia, metástase) — inclusão: diferencial em adulto sem causa óbvia; exclusão: leucócitos normais, sem história de neoplasia, contexto de anemia falciforme como causa mais provável"
    ],
    context: "Homem de 34 anos com anemia falciforme (HbSS) não acompanhada, apresentando priapismo isquêmico agudo com mais de 4 horas de evolução. A vaso-oclusão dos corpos cavernosos é complicação conhecida da doença falciforme. Risco significativo de disfunção erétil permanente se não tratado em até 24–36 horas.",
    justify: "Priapismo isquêmico: corpo cavernoso rígido e doloroso + glande/esponjoso flácidos + ausência de fluxo ao Doppler + gasometria com acidose e hipóxia no aspirado cavernoso. Anemia microcítica hipocrômica no hemograma + naturalidade da Bahia + história familiar de anemia levam à investigação de anemia falciforme, confirmada pela eletroforese. Associação bem estabelecida: 35–42% dos homens com HbSS desenvolvem priapismo ao longo da vida ⚠️ [ASH Guidelines, 2020 — não há diretriz específica brasileira; HEMORIO segue protocolo baseado nestas diretrizes].",
    expectedAnamnesis: [
      "Duração exata da ereção (crítico — >4–6h já é emergência)",
      "Presença de dor (isquêmico = doloroso; não isquêmico = indolor)",
      "Uso de medicamentos: IPDE5 (sildenafil), antipsicóticos (haloperidol, clorpromazina), antidepressivos (trazodona), anti-hipertensivos (hidralazina), anticoagulantes",
      "Uso de drogas ilícitas (cocaína, álcool)",
      "Doenças hematológicas (anemia falciforme, leucemia)",
      "Episódios anteriores (priapismo de stuttering)",
      "História de trauma perineal (causa de priapismo alto fluxo)"
    ],
    expectedPhysical: [
      "Inspeção: pênis em ereção, coloração",
      "Palpação: rigidez dos corpos cavernosos (rígidos no isquêmico) vs. glande e esponjoso (flácidos no isquêmico — diferencial chave)",
      "Doppler peniano: ausência de fluxo = isquêmico; fluxo aumentado = não-isquêmico",
      "Avaliar perineal: trauma, fístula arteriovenosa (alto fluxo)"
    ],
    expectedExams: [
      { exam: "Hemograma", justify: "Rastrear causa hematológica", expected: "Anemia (HbSS), leucocitose (neoplasia)" },
      { exam: "Gasometria do aspirado cavernoso", justify: "Diferencia isquêmico (hipóxico, acidótico) de não isquêmico", expected: "pH baixo, pO2 baixa, pCO2 alta" },
      { exam: "Doppler peniano colorido", justify: "Avalia fluxo arterial cavernoso", expected: "Ausência de fluxo no isquêmico" },
      { exam: "Eletroforese de hemoglobina", justify: "Confirmar anemia falciforme", expected: "HbSS" }
    ],
    expectedConduct: [
      "Farmacológica — 1ª linha: Aspiração do aspirado cavernoso + irrigação com solução salina; seguido de injeção intracavernosa de simpaticomimético: fenilefrina 100–200 mcg a cada 3–5 min (máximo 1mg/h) — ⚠️ [AUA Guidelines 2021 — não há protocolo próprio MS; RENAME inclui fenilefrina apenas para outras indicações]. Em anemia falciforme: hidratação IV, analgesia, oxigenoterapia e considerar transfusão/exsanguínotransfusão",
      "Não farmacológica: Hidratação IV, O2 suplementar se SatO2 < 95%, analgesia",
      "Encaminhamento: Urologista de urgência se falha do tratamento farmacológico → shunt cirúrgico",
      "Orientações ao paciente: Explicar risco de disfunção erétil permanente se não tratado; importância do acompanhamento de anemia falciforme; orientar a retornar imediatamente em episódios futuros",
      "Seguimento: Hematologista para manejo da anemia falciforme; urologista para monitoramento de função erétil"
    ],
    expectedCommunication: [
      "Apresentação: Apresentar-se, normalizar a situação clínica sem constrangimento",
      "Comunicação do diagnóstico: Explicar que é uma ereção por falta de circulação no pênis, não é prazer, e pode causar dano permanente se não tratado — linguagem direta mas empática",
      "Escuta ativa: Responder à preocupação sobre impotência com honestidade e esperança realista"
    ],
    criticalErrors: [
      "Não identificar priapismo como emergência e retardar o tratamento (risco de disfunção erétil permanente aumenta proporcionalmente ao tempo)",
      "Não diferenciar priapismo isquêmico de não isquêmico — tratamentos são opostos",
      "Não investigar causa — especialmente medicamentos e doenças hematológicas",
      "Usar adrenalina ao invés de fenilefrina intracavernosa — risco de crise hipertensiva grave ⚠️",
      "Não tratar a anemia falciforme associada (hidratação, O2, analgesia)"
    ]
  },

  instD: {
    title: "CHECKLIST",
    sections: [
      {
        h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Apresentou-se pelo nome e abordou a queixa sem constrangimento ou julgamento", score: 0.5, ref: "CFM 2.217/2018" },
          { item: "Explicou o diagnóstico e o risco de disfunção erétil permanente de forma clara e empática", score: 0.5, ref: "CFM 2.217/2018 — Comunicação de más notícias" }
        ]
      },
      {
        h: "BLOCO 2 — ANAMNESE",
        items: [
          { item: "Investigou a duração exata da ereção", score: 1.0, ref: "SBU — Urgências Urológicas, 2022" },
          { item: "Perguntou sobre uso de medicamentos (IPDE5, antipsicóticos, trazodona) e drogas", score: 0.5, ref: "SBU — Urgências Urológicas, 2022" },
          { item: "Investigou doenças hematológicas (anemia falciforme, leucemia)", score: 1.0, ref: "SBU — Urgências Urológicas, 2022" },
          { item: "Questionou episódios anteriores de priapismo", score: 0.5, ref: "SBU — Urgências Urológicas, 2022" },
          { item: "Investigou trauma perineal recente", score: 0.3, ref: "SBU — Urgências Urológicas, 2022" }
        ]
      },
      {
        h: "BLOCO 3 — EXAME FÍSICO",
        items: [
          { item: "Avaliou rigidez dos corpos cavernosos vs. flacidez do esponjoso e glande (diferencial isquêmico)", score: 1.0, ref: "SBU — Urgências Urológicas, 2022" },
          { item: "Solicitou Doppler peniano ou indicou aspiração cavernosa para gasometria", score: 0.5, ref: "SBU — Urgências Urológicas, 2022" }
        ]
      },
      {
        h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Classificou o priapismo como isquêmico (baixo fluxo) com base nos achados", score: 1.0, ref: "SBU — Urgências Urológicas, 2022" },
          { item: "Associou o priapismo com anemia falciforme após hemograma alterado", score: 0.5, ref: "SBU / HEMORIO — Anemia Falciforme e Priapismo" },
          { item: "Solicitou eletroforese de hemoglobina para confirmar a causa", score: 0.5, ref: "MS — Anemia Falciforme, 2015" }
        ]
      },
      {
        h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Indicou aspiração cavernosa e injeção de fenilefrina intracavernosa", score: 1.0, ref: "SBU / AUA Guidelines 2021 ⚠️" },
          { item: "Não utilizou adrenalina (contraindicada) no lugar de fenilefrina", score: 0.5, ref: "SBU — Urgências Urológicas, 2022" },
          { item: "Indicou hidratação IV, oxigenoterapia e analgesia no contexto de anemia falciforme", score: 0.5, ref: "MS — Anemia Falciforme, 2015" },
          { item: "Orientou sobre seguimento com hematologista e risco de recorrência", score: 0.3, ref: "MS — Anemia Falciforme, 2015" }
        ]
      }
    ]
  }
},
{
  id: 6,
  title: "Homem com curvatura peniana progressiva e dor durante as relações",
  sub: "Ambulatório — Clínica Urológica",
  tema: "Urologia",
  topic: "Doença de Peyronie",
  level: "moderado",
  cardAccent: "#00695C",

  instA: {
    scenario: "Ambulatório de urologia. Consultório, turno diurno.",
    patient: "F.A., 52 anos, masculino, contador, hipertenso.",
    complaint: "Pênis ficando curvado há 8 meses e dor nas relações sexuais.",
    tasks: [
      "Realize a anamnese dirigida ao caso",
      "Realize o exame físico peniano pertinente",
      "Formule a hipótese diagnóstica e diagnósticos diferenciais",
      "Solicite os exames complementares pertinentes e interprete os resultados",
      "Proponha a conduta e oriente o paciente sobre a doença e tratamento"
    ]
  },

  instB: {
    vitals: { PA: "138/88 mmHg", FC: "74 bpm", FR: "16 irpm", Tax: "36,6°C", Peso: "84 kg", Altura: "1,74 m", IMC: "27,8 kg/m²" },
    physicalGeneral: "Paciente em bom estado geral, lúcido, orientado, sem queixas agudas. Ligeiramente acima do peso. Sem alterações sistêmicas ao exame geral.",
    physicalSeg: [
      "GENITÁLIA EXTERNA: À palpação do corpo cavernoso dorsal, identificada placa fibrosa endurecida de aproximadamente 2 cm × 1 cm na face dorsal do pênis, a 3 cm da base, não dolorosa em repouso. Pênis em repouso sem deformidade visível. Sem lesões cutâneas ou úlceras. Testículos normais bilateralmente.",
      "Fotografia do pênis em ereção (fornecida pelo paciente se solicitada): Curvatura dorsal de aproximadamente 45° na ereção."
    ],
    labs: [
      { test: "Testosterona total", val: "380 ng/dL", ref: "300–1.000 ng/dL", alt: false },
      { test: "Glicemia de jejum", val: "102 mg/dL", ref: "70–99 mg/dL", alt: true },
      { test: "Colesterol total", val: "218 mg/dL", ref: "< 200 mg/dL", alt: true },
      { test: "LDL", val: "142 mg/dL", ref: "< 130 mg/dL", alt: true },
      { test: "PSA total", val: "1,8 ng/mL", ref: "< 4,0 ng/mL (52 anos)", alt: false }
    ],
    image: "Ultrassonografia peniana com Doppler (se solicitada): Placa calcificada na face dorsal do corpo cavernoso direito, medindo 1,8 × 0,9 cm, a 3 cm da base. Fluxo vascular cavernoso preservado bilateralmente com pico de velocidade sistólica de 28 cm/s após estímulo farmacológico (papaverina). Conclusão: Achados compatíveis com Doença de Peyronie com componente calcificado. Sem evidência de disfunção erétil vasculogênica grave.",
    note: "Entregar sinais vitais e exame físico no início. Exames laboratoriais somente se solicitados. USG com Doppler somente se solicitada. Se o candidato perguntar sobre fotos ou documentação da curvatura, informar que o paciente trouxe uma fotografia em ereção mostrando curvatura dorsal de 45°.",
    patientProfile: "Fernando A., 52 anos, masculino, contador, casado há 20 anos, 2 filhos adultos. Hipertenso em uso de losartana 50mg/dia. Sem cirurgias prévias. Não fuma, etilismo leve (1 dose/dia).",
    script: [
      { trigger: "Queixa principal", speech: "Doutor, há uns 8 meses o meu pênis ficou curvado durante a ereção e dói quando tenho relação. Tô com vergonha até de falar isso, mas tá atrapalhando meu casamento." },
      { trigger: "Sobre início e progressão", speech: "Comecei a notar uma curvatura pequena, mas foi aumentando. Hoje tá com uns 45 graus de curvatura pra cima. Nos primeiros meses doía bastante, agora a dor diminuiu um pouco." },
      { trigger: "Sobre trauma", speech: "Não me lembro de ter machucado. Talvez tenha forçado uma vez, mas nada sério." },
      { trigger: "Sobre ereção e função", speech: "A ereção ainda vem, mas às vezes parece que enfraqueceu um pouco. A relação tá difícil por causa da curvatura." },
      { trigger: "Sobre nódulo", speech: "Quando aperto aqui (aponta para a base) sinto uma coisa dura, como um caroço." },
      { trigger: "Sobre medicamentos", speech: "Tomo losartana pra pressão. Só isso." },
      { trigger: "Sobre relacionamento", speech: "Minha esposa tá preocupada comigo, mas a gente ainda tenta. Só que tá difícil." },
      { trigger: "Pergunta ativa", speech: "Isso tem cura, doutor? Vai voltar ao normal?" },
      { trigger: "Pergunta ativa", speech: "Vai precisar de cirurgia? Tem pomada ou remédio que resolve?" }
    ],
    hiddenInfo: [
      "Episódio de trauma peniano durante relação sexual há 10 meses (dobrou o pênis): só revelar se perguntado especificamente sobre trauma peniano ou sobre o que aconteceu antes do início da curvatura",
      "Sintomas de disfunção erétil leve (dificuldade ocasional de manter ereção): só revelar se perguntado especificamente sobre qualidade e manutenção da ereção"
    ],
    actorBehavior: "Constrangido no início, mas torna-se mais aberto com abordagem empática e profissional. Preocupado com o impacto no casamento e com a possibilidade de cirurgia. Ansioso com prognóstico. Responde bem quando médico normaliza a queixa como condição clínica tratável."
  },

  instC: {
    diagnosis: "Doença de Peyronie — fase crônica estável (sem dor ativa em repouso, curvatura estabilizada há > 3 meses) com placa calcificada e curvatura dorsal de 45°. Disfunção erétil leve associada.",
    differentials: [
      "Fibrose cavernosa pós-priapismo — inclusão: placa fibrosa cavernosa; exclusão: sem história de priapismo, localização dorsal típica de Peyronie",
      "Carcinoma peniano — inclusão: placa endurecida no pênis; exclusão: placa profunda, sem úlcera, sem lesão cutânea, sem linfadenopatia, contexto clínico incompatível",
      "Curvatura congênita (corda ventre) — inclusão: curvatura peniana; exclusão: início na vida adulta, sem curvatura desde a infância/adolescência, placa adquirida palpável"
    ],
    context: "Homem de 52 anos com Doença de Peyronie fase crônica estável, com curvatura dorsal de 45°, placa calcificada e disfunção erétil leve associada. Provável gatilho: microtrauma peniano. Fatores de risco associados: hipertensão, dislipidemia, etilismo. Encontra-se na fase adequada para planejamento de tratamento definitivo.",
    justify: "Critérios diagnósticos preenchidos: placa fibrosa palpável na túnica albugínea, curvatura peniana na ereção com angulação > 30°, dor que regrediu (fase crônica), deformidade estável há mais de 3 meses. A calcificação à USG é característica de fase crônica. A disfunção erétil associada pode ser multifatorial (vasculogênica leve, psicogênica, mecânica pela deformidade).",
    expectedAnamnesis: [
      "Tempo de início, progressão e estabilização da curvatura",
      "Presença e evolução da dor (presente na fase aguda, diminui na crônica)",
      "Grau de curvatura estimado (documentar com foto se possível)",
      "Trauma peniano (relação sexual com dobramento — causa mais comum)",
      "Qualidade da ereção antes e depois: disfunção erétil associada",
      "Impacto na vida sexual e no relacionamento",
      "Comorbidades: diabetes, HAS, dislipidemia, tabagismo (fatores de risco)",
      "Uso de betabloqueadores, antifibróticos ou outros medicamentos",
      "Outros locais de fibrose (contratura de Dupuytren, fibrose de Ledderhose — associação com Peyronie)"
    ],
    expectedPhysical: [
      "Inspeção: pênis em repouso (deformidade pode não ser visível), verificar lesões cutâneas",
      "Palpação: identificar placa na túnica albugínea (localização, tamanho, consistência, calcificação)",
      "Documentar curvatura: solicitar foto em ereção ou realizar teste de ereção farmacológica no consultório",
      "Pesquisa de Dupuytren (palma das mãos) e fibrose plantar",
      "Exame testicular bilateral"
    ],
    expectedExams: [
      { exam: "USG peniana com Doppler", justify: "Avaliar placa, calcificação e fluxo vascular (disfunção erétil vasculogênica)", expected: "Placa calcificada, fluxo preservado" },
      { exam: "Testosterona total", justify: "Avaliar hipogonadismo associado à disfunção erétil", expected: "Normal ou reduzida" },
      { exam: "Glicemia", justify: "Rastrear diabetes (fator de risco)", expected: "Normal ou limítrofe" },
      { exam: "Perfil lipídico", justify: "Fator de risco cardiovascular e para Peyronie", expected: "Dislipidemia presente" }
    ],
    expectedConduct: [
      "Fase aguda (< 12 meses, com dor): colchicina oral, vitamina E, pentoxifilina ⚠️ [evidências limitadas; AUA 2015 e SBU não recomendam tratamento oral isolado como padrão]. Injeção intracavernosa de colagenase de Clostridium histolyticum (CCH) — aprovada FDA/Anvisa para curvatura 30°–90° sem calcificação ⚠️",
      "Fase crônica estável (> 12 meses, sem dor, curvatura estável): Tratamento cirúrgico é padrão-ouro:",
      "Curvatura ≤60°, ereção preservada: plicatura da túnica albugínea (técnica de Nesbit)",
      "Curvatura >60° ou ereção comprometida: enxerto da túnica albugínea ou implante de prótese peniana",
      "Para este caso: Fase crônica com calcificação → CCH contraindicada → indicação cirúrgica (plicatura ou enxerto conforme avaliação intraoperatória)",
      "Orientações ao paciente: Explicar que a doença não tem cura espontânea na fase crônica, que a cirurgia é eficaz, e que a disfunção erétil pode ser tratada concomitantemente; impacto psicológico deve ser abordado",
      "Seguimento: Urologista especializado em andrologia; avaliar indicação de suporte psicológico/sexológico"
    ],
    expectedCommunication: [
      "Apresentação: Apresentar-se, acolher o constrangimento do paciente, normalizar a condição",
      "Comunicação do diagnóstico: Explicar que é uma cicatriz na bainha do pênis que causa a curvatura, tem tratamento, e que a cirurgia costuma ter bons resultados",
      "Escuta ativa: Explorar impacto no relacionamento, validar a preocupação, incluir a parceira no plano de cuidado quando pertinente"
    ],
    criticalErrors: [
      "Não palpar a placa e não documentar a curvatura (sem isso não há diagnóstico adequado)",
      "Indicar tratamento cirúrgico na fase aguda (com dor ativa) — aumenta risco de agravamento",
      "Tranquilizar o paciente dizendo que vai melhorar sozinho — na fase crônica a resolução espontânea é rara (<10%) ⚠️",
      "Não investigar e não abordar disfunção erétil associada",
      "Não investigar fatores de risco cardiovascular e metabólico (diabetes, dislipidemia)"
    ]
  },

  instD: {
    title: "CHECKLIST",
    sections: [
      {
        h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Apresentou-se, acolheu o constrangimento e normalizou a queixa como condição clínica", score: 0.5, ref: "CFM 2.217/2018" },
          { item: "Explicou o diagnóstico de forma acessível (cicatriz na túnica = curvatura) e abordou prognóstico com realismo", score: 0.5, ref: "CFM 2.217/2018" },
          { item: "Perguntou sobre impacto na vida sexual e no relacionamento", score: 0.5, ref: "SBU — Andrologia, 2022" }
        ]
      },
      {
        h: "BLOCO 2 — ANAMNESE",
        items: [
          { item: "Investigou início, progressão e estabilização da curvatura (fase aguda vs. crônica)", score: 1.0, ref: "SBU — Doença de Peyronie, 2022" },
          { item: "Pesquisou história de trauma peniano", score: 0.5, ref: "SBU — Doença de Peyronie, 2022" },
          { item: "Investigou qualidade da ereção e disfunção erétil associada", score: 0.5, ref: "SBU — Doença de Peyronie, 2022" },
          { item: "Questionou comorbidades (diabetes, HAS, dislipidemia, tabagismo)", score: 0.5, ref: "SBU — Doença de Peyronie, 2022" }
        ]
      },
      {
        h: "BLOCO 3 — EXAME FÍSICO",
        items: [
          { item: "Palpou o pênis e identificou a placa fibrosa (localização, tamanho, consistência)", score: 1.0, ref: "SBU — Doença de Peyronie, 2022" },
          { item: "Solicitou documentação fotográfica da curvatura em ereção ou descreveu curvatura", score: 0.5, ref: "SBU — Doença de Peyronie, 2022" },
          { item: "Pesquisou contratura de Dupuytren (palma das mãos)", score: 0.3, ref: "SBU — Doença de Peyronie, 2022" }
        ]
      },
      {
        h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Classificou como fase crônica (dor regressiva, curvatura estável >3 meses)", score: 1.0, ref: "SBU — Doença de Peyronie, 2022" },
          { item: "Solicitou USG peniana com Doppler para avaliar placa e função erétil vascular", score: 0.5, ref: "SBU — Doença de Peyronie, 2022" }
        ]
      },
      {
        h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Indicou tratamento cirúrgico como padrão-ouro na fase crônica estável", score: 1.0, ref: "SBU — Doença de Peyronie, 2022" },
          { item: "Não indicou cirurgia na fase aguda (ou não contraindicou corretamente se aplicável)", score: 0.5, ref: "SBU — Doença de Peyronie, 2022" },
          { item: "Orientou sobre disfunção erétil associada e necessidade de tratamento conjunto", score: 0.5, ref: "SBU — Andrologia / Doença de Peyronie, 2022" },
          { item: "Encaminhou para urologista/andrologista especializado", score: 0.3, ref: "SBU — Doença de Peyronie, 2022" }
        ]
      }
    ]
  }
},
{
  id: 7,
  title: "Homem com estalido e dor peniana durante relação sexual",
  sub: "UPA — Urgência e Emergência",
  tema: "Urologia",
  topic: "Fratura de pênis",
  level: "moderado",
  cardAccent: "#4527A0",

  instA: {
    scenario: "UPA — Urgência e Emergência. Sala de atendimento, turno noturno.",
    patient: "A.L., 29 anos, masculino, analista de sistemas, sem comorbidades.",
    complaint: "Ouviu um estalo no pênis durante a relação sexual há 2 horas, seguido de dor intensa, perda da ereção e inchaço.",
    tasks: [
      "Realize a anamnese dirigida ao caso",
      "Realize o exame físico peniano pertinente",
      "Formule a hipótese diagnóstica",
      "Solicite os exames complementares pertinentes (se indicados)",
      "Proponha a conduta e oriente o paciente"
    ]
  },

  instB: {
    vitals: { PA: "124/78 mmHg", FC: "92 bpm", FR: "16 irpm", Tax: "36,7°C", Peso: "75 kg", Altura: "1,76 m", IMC: "24,2 kg/m²" },
    physicalGeneral: "Paciente em bom estado geral, consciente, orientado, com dor moderada e muito constrangido. Pele e mucosas normocoradas, bem hidratado.",
    physicalSeg: [
      "GENITÁLIA EXTERNA: Pênis flácido com hematoma extenso em face dorsal e lateral esquerda, com equimose peniana em berinjela (beringela sign) — coloração arroxeada característica. Desvio do pênis para a direita. Edema importante. Prepúcio edemaciado. Sem sangramento uretral externo visível. Sem hematoma escrotal ou perineal. Meato uretral pérvio, sem sangue.",
      "ABDOME: Sem alterações."
    ],
    labs: [],
    image: "Uretrocistografia retrógrada (se solicitada, para afastar lesão uretral): Sem extravasamento de contraste. Uretra íntegra em todo seu trajeto. Conclusão: Sem evidência de lesão uretral.",
    note: "Entregar sinais vitais e exame físico no início. Uretrocistografia retrógrada somente se candidato suspeitar de lesão uretral e solicitar especificamente. Diagnóstico é essencialmente clínico — não há necessidade de exame de imagem para fratura de pênis sem suspeita de lesão uretral. Pontuar adequadamente se candidato reconhece isso e não retarda a cirurgia por exames. RM peniana pode ser solicitada em casos duvidosos, mas não é padrão para casos clássicos.",
    patientProfile: "André L., 29 anos, masculino, analista de sistemas, namorado. Sem comorbidades. Sem cirurgias prévias. Veio acompanhado da namorada que aguarda na recepção.",
    script: [
      { trigger: "Queixa principal", speech: "Doutor, é muito constrangedor falar isso… Estava tendo relação e de repente ouvi um estalo alto, sentiu uma dor muito forte, o pênis ficou mole na hora e começou a inchar muito." },
      { trigger: "Sobre o mecanismo", speech: "Minha parceira estava em cima de mim e fez um movimento errado, dobrou. Aí veio aquele estalo." },
      { trigger: "Sobre sangramento", speech: "Não saiu sangue pela urina não, pelo menos que eu tenha visto." },
      { trigger: "Sobre dor", speech: "Tava com dor 8 de 10 logo depois. Agora tá 6. O inchaço aumentou muito." },
      { trigger: "Sobre tentativa de urinar", speech: "Tentei fazer xixi logo depois, consegui, mas fiquei com medo." },
      { trigger: "Sobre parceira", speech: "Ela tá esperando lá fora. Ela ficou apavorada." },
      { trigger: "Pergunta ativa", speech: "Vai precisar de cirurgia, doutor? Vai ficar normal?" },
      { trigger: "Pergunta ativa", speech: "Vai ficar impotente? Consegue conssertar?" }
    ],
    hiddenInfo: [
      "Dificuldade em urinar logo após o evento (jato fraco por cerca de 10 minutos, depois normalizou): só revelar se perguntado especificamente sobre sintomas urinários após o trauma",
      "Parceira também apresentou lesão vaginal leve (só relevante se candidato perguntar sobre a parceira): dado para enriquecer o raciocínio sobre mecanismo de trauma"
    ],
    actorBehavior: "Extremamente constrangido e angustiado. Medo de impotência e de nunca mais funcionar. Melhora muito com abordagem empática, profissional e sem julgamento. Colaborativo. Responde bem quando candidato explica que cirurgia precoce tem bons resultados."
  },

  instC: {
    diagnosis: "Fratura de pênis — rotura da túnica albugínea do corpo cavernoso esquerdo, com hematoma peniano extenso (sinal da berinjela) e desvio contralateral. Sem lesão uretral associada.",
    differentials: [
      "Rotura de veia dorsal superficial do pênis — inclusão: equimose e hematoma pós-trauma sexual; exclusão: ausência de estalo, desvio e perda imediata da ereção — típicos de fratura verdadeira da albugínea",
      "Hematoma peniano sem rotura da albugínea — inclusão: equimose e edema pós-trauma; exclusão: estalo audível + desvio contralateral = rotura franca da albugínea",
      "Lesão uretral associada — inclusão: trauma peniano agudo; exclusão: sem sangramento uretral, conseguiu urinar após evento (rastrear ativamente com uretrocistografia)"
    ],
    context: "Jovem de 29 anos com fratura peniana clássica — estalido + perda imediata de ereção + hematoma em berinjela + desvio contralateral à lesão — ocorrida durante relação sexual com parceira em posição superior. Ausência de lesão uretral. Emergência cirúrgica com melhor prognóstico quando operado nas primeiras 24 horas.",
    justify: "Tríade clássica: (1) estalido audível durante relação sexual, (2) perda imediata de ereção com detumescência abrupta, (3) hematoma extenso com coloração em berinjela e desvio do pênis para o lado oposto à rotura. Diagnóstico essencialmente clínico — sensibilidade e especificidade superiores a 95% com os critérios clínicos isolados. Lesão uretral deve ser ativamente rastreada (10–20% dos casos de fratura peniana).",
    expectedAnamnesis: [
      "Mecanismo (posição, tipo de movimento, parceiro/a)",
      "Ocorrência de estalo (sinal patognomônico)",
      "Perda imediata de ereção",
      "Dor e localização",
      "Sangramento uretral ou dificuldade miccional (lesão uretral?)",
      "Capacidade de urinar após o evento",
      "Tempo de evolução (cirurgia precoce = melhor resultado)",
      "Comorbidades (diabetes, doenças vasculares — impacto no pós-op)"
    ],
    expectedPhysical: [
      "Inspeção: hematoma peniano (sinal da berinjela), desvio peniano, edema",
      "Palpação: pode-se palpar a rotura como gap na albugínea (nem sempre possível com edema)",
      "Meato uretral: presença de sangue (lesão uretral)",
      "Avaliação do escroto e períneo (extensão do hematoma)",
      "Não tentar produzir ereção para exame"
    ],
    expectedExams: [
      { exam: "Nenhum exame obrigatório para diagnóstico clínico típico", justify: "Diagnóstico clínico suficiente", expected: "—" },
      { exam: "Uretrocistografia retrógrada", justify: "Se suspeita de lesão uretral (sangue no meato, retenção)", expected: "Normal neste caso" },
      { exam: "RM peniana", justify: "Casos duvidosos ou para localização precisa da rotura", expected: "Rotura da albugínea visível" }
    ],
    expectedConduct: [
      "Farmacológica: Analgesia IV (dipirona 1g), NPO (preparar para cirurgia)",
      "Não farmacológica: Acesso venoso, imobilização com atadura/compressa fria para limitar hematoma enquanto aguarda cirurgia",
      "Cirúrgica — padrão-ouro: Exploração cirúrgica e rafia da rotura da túnica albugínea nas primeiras 24–48h. Cirurgia precoce associa-se a menor taxa de DE pós-op e curvatura residual (<10%) vs. tratamento conservador (>30%)",
      "Contraindicado: Tratamento conservador (bandagem + anti-inflamatório) em fratura clínica evidente — aumenta complicações",
      "Orientações: Explicar que cirurgia precoce tem excelente prognóstico funcional; abstinência sexual por 6–8 semanas pós-op; seguimento com urologista",
      "Seguimento: Urologista no pós-operatório; avaliar curvatura residual e função erétil em 3 meses"
    ],
    expectedCommunication: [
      "Apresentação: Apresentar-se sem julgamento, garantir privacidade, abordar com naturalidade",
      "Comunicação do diagnóstico: Explicar que é uma lesão na camada que envolve o pênis, que é tratável com cirurgia e que o prognóstico é bom quando operado precocemente",
      "Escuta ativa: Abordar o medo de impotência com honestidade e esperança realista (cirurgia precoce tem muito bom resultado)"
    ],
    criticalErrors: [
      "Não identificar fratura de pênis e tratar conservadoramente sem indicação cirúrgica",
      "Retardar a cirurgia solicitando exames de imagem desnecessários (sem suspeita de lesão uretral)",
      "Não rastrear lesão uretral associada (não perguntar sobre sangramento uretral ou dificuldade miccional)",
      "Tentar reduzir manualmente o hematoma ou realizar procedimentos locais inadequados",
      "Não encaminhar ao urologista/cirurgião e orientar apenas tratamento conservador em caso clínico evidente"
    ]
  },

  instD: {
    title: "CHECKLIST",
    sections: [
      {
        h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Apresentou-se e abordou a queixa sem julgamento, garantindo privacidade", score: 0.5, ref: "CFM 2.217/2018" },
          { item: "Explicou diagnóstico e prognóstico com honestidade e esperança realista", score: 0.5, ref: "CFM 2.217/2018" }
        ]
      },
      {
        h: "BLOCO 2 — ANAMNESE",
        items: [
          { item: "Investigou o mecanismo do trauma (posição, movimento, parceiro/a)", score: 0.5, ref: "SBU — Urgências Urológicas, 2022" },
          { item: "Perguntou sobre presença de estalido e perda imediata de ereção (tríade clássica)", score: 1.0, ref: "SBU — Urgências Urológicas, 2022" },
          { item: "Investigou sangramento uretral e capacidade de urinar após o evento", score: 1.0, ref: "SBU — Urgências Urológicas, 2022" },
          { item: "Questionou tempo de evolução desde o trauma", score: 0.5, ref: "SBU — Urgências Urológicas, 2022" }
        ]
      },
      {
        h: "BLOCO 3 — EXAME FÍSICO",
        items: [
          { item: "Identificou sinal da berinjela (hematoma e desvio peniano)", score: 1.0, ref: "SBU — Urgências Urológicas, 2022" },
          { item: "Avaliou o meato uretral para sangramento (rastreio de lesão uretral)", score: 1.0, ref: "SBU — Urgências Urológicas, 2022" },
          { item: "Avaliou extensão do hematoma (escroto, períneo)", score: 0.3, ref: "SBU — Urgências Urológicas, 2022" }
        ]
      },
      {
        h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Formulou diagnóstico de fratura de pênis com base nos critérios clínicos", score: 1.0, ref: "SBU — Urgências Urológicas, 2022" },
          { item: "Reconheceu que diagnóstico é clínico e não retardou conduta por exames de imagem", score: 0.5, ref: "SBU — Urgências Urológicas, 2022" }
        ]
      },
      {
        h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Indicou exploração cirúrgica urgente como tratamento padrão-ouro", score: 1.0, ref: "SBU — Urgências Urológicas, 2022" },
          { item: "Contraindicou tratamento conservador no caso clínico evidente", score: 0.5, ref: "SBU — Urgências Urológicas, 2022" },
          { item: "Orientou sobre prognóstico positivo com cirurgia precoce e abstinência sexual pós-op", score: 0.5, ref: "SBU — Urgências Urológicas, 2022" }
        ]
      }
    ]
  }
},
{
  id: 8,
  title: "Homem de 68 anos com dificuldade para urinar e PSA alterado",
  sub: "Ambulatório — Atenção Primária / Oncologia",
  tema: "Urologia",
  topic: "Câncer de próstata",
  level: "moderado",
  cardAccent: "#1A237E",

  instA: {
    scenario: "Ambulatório de atenção primária / urologia. Consultório, turno diurno.",
    patient: "O.M., 68 anos, masculino, aposentado, hipertenso e diabético.",
    complaint: "Retorna com resultado de PSA elevado solicitado na consulta anterior, refere dificuldade para urinar há meses.",
    tasks: [
      "Realize a anamnese dirigida ao caso",
      "Realize o exame físico pertinente, incluindo toque retal",
      "Interprete os exames complementares disponíveis",
      "Formule a hipótese diagnóstica e os diagnósticos diferenciais",
      "Proponha a conduta e oriente o paciente sobre os próximos passos"
    ]
  },

  instB: {
    vitals: { PA: "142/88 mmHg", FC: "72 bpm", FR: "16 irpm", Tax: "36,5°C", Peso: "80 kg", Altura: "1,69 m", IMC: "28,0 kg/m²" },
    physicalGeneral: "Paciente em bom estado geral, lúcido, orientado, cooperativo. Sem perda de peso aparente. Pele e mucosas normocoradas e hidratadas.",
    physicalSeg: [
      "TOQUE RETAL: Próstata aumentada, consistência endurecida e irregular no lobo direito, com nódulo palpável. Lobo esquerdo de consistência elástica. Ausência de dor à palpação. Sulco mediano apagado. Volume estimado ~40 mL. Ausência de comprometimento retal.",
      "ABDOME: Flácido, sem massas, sem globo vesical palpável.",
      "MMII: Sem edema, sem sinal de TVP."
    ],
    labs: [
      { test: "PSA total", val: "18,4 ng/mL", ref: "< 4,0 ng/mL", alt: true },
      { test: "PSA livre", val: "1,6 ng/mL", ref: "—", alt: false },
      { test: "Relação PSA livre/total", val: "8,7%", ref: "> 25% sugere benignidade", alt: true },
      { test: "Creatinina", val: "1,1 mg/dL", ref: "0,7–1,2 mg/dL", alt: false },
      { test: "Hemoglobina", val: "13,1 g/dL", ref: "13,5–17,5 g/dL", alt: true },
      { test: "Fosfatase alcalina", val: "142 U/L", ref: "40–130 U/L", alt: true },
      { test: "Cálcio sérico", val: "10,8 mg/dL", ref: "8,5–10,5 mg/dL", alt: true }
    ],
    image: "Ultrassonografia transretal (USTR) — se solicitada: Próstata com volume de 42 mL. Área hipoecoica no lobo direito periférico, medindo 1,4 × 1,2 cm. Sem extensão extracapsular visível ao US. Conclusão: Nódulo hipoecóico em zona periférica direita — biópsia recomendada.",
    note: "Entregar sinais vitais no início. Exames laboratoriais entregar como impresso ao início (PSA foi solicitado na consulta anterior). Laudo de USTR apenas se solicitado. O toque retal deve ser descrito pelo avaliador quando o candidato solicitar e descrever a técnica. Candidato que não realiza toque retal perde ponto crítico.",
    patientProfile: "Orlando M., 68 anos, masculino, aposentado (ex-metalúrgico), casado, 4 filhos. Hipertenso há 15 anos, DM2 há 8 anos. Irmão com câncer de próstata diagnosticado aos 62 anos.",
    script: [
      { trigger: "Queixa principal", speech: "Doutor, vim buscar o resultado daquele exame de sangue. Mas também tô com dificuldade para urinar faz uns 8 meses, fico acordando à noite 3, 4 vezes." },
      { trigger: "Sobre os sintomas urinários", speech: "O jato é fraco, às vezes tenho que esperar pra começar. E à noite é a pior coisa, acordo várias vezes com vontade." },
      { trigger: "Sobre dor óssea", speech: "Às vezes sinto uma dor nas costas, aqui na lombar. Acho que é da idade, né?" },
      { trigger: "Sobre histórico familiar", speech: "Meu irmão mais novo teve câncer de próstata há 3 anos. Tá fazendo tratamento." },
      { trigger: "Sobre exame anterior", speech: "Nunca tinha feito esse exame do PSA antes. O senhor pediu na última consulta." },
      { trigger: "Sobre hábitos", speech: "Não fumo. Bebo uma cervejinha no fim de semana. Caminho uns 20 minutinhos por dia." },
      { trigger: "Sobre o resultado do PSA", speech: "Esse número 18 que veio no exame, é muito alto, doutor? Fico com medo que seja câncer." },
      { trigger: "Pergunta ativa", speech: "É câncer, doutor? O que vai acontecer agora?" },
      { trigger: "Pergunta ativa", speech: "Vai precisar operar? Tem cura?" }
    ],
    hiddenInfo: [
      "Dor óssea lombar de intensidade moderada há 2 meses, que vem aumentando progressivamente: só revelar se perguntado especificamente sobre dor óssea, dores no corpo ou sintomas osteomusculares",
      "Histórico familiar de câncer de próstata no irmão: só revelar se perguntado sobre histórico familiar de câncer de próstata especificamente"
    ],
    actorBehavior: "Paciente ansioso com o resultado do PSA elevado, mas sem pânico. Preocupado com a possibilidade de câncer e com o que aconteceu com o irmão. Muito respeitoso e deferente com o médico. Fica visivelmente apreensivo quando se fala em biópsia ou tratamento. Necessita de explicações claras e calmaria."
  },

  instC: {
    diagnosis: "Suspeita de adenocarcinoma de próstata — PSA 18,4 ng/mL + relação PSA livre/total 8,7% (alta probabilidade de malignidade) + toque retal com nódulo duro irregular no lobo direito. Investigação com biópsia prostática indicada. Sintomas urinários obstrutivos associados. Dor lombar progressiva levanta suspeita de doença avançada (metástase óssea a afastar).",
    differentials: [
      "Hiperplasia prostática benigna (HPB) — inclusão: sintomas obstrutivos, próstata aumentada, idade; exclusão: PSA muito elevado (18,4), relação livre/total baixa (8,7%), nódulo duro irregular ao toque — perfil incompatível com HPB isolada",
      "Prostatite crônica — inclusão: pode elevar PSA; exclusão: sem dor perineal, sem sintomas inflamatórios, nódulo ao toque não compatível com prostatite",
      "Metástase óssea de CA de próstata — a considerar: dor lombar progressiva + fosfatase alcalina elevada + cálcio elevado → cintilografia óssea indicada se confirmado diagnóstico de CA próstata"
    ],
    context: "Paciente de 68 anos com fatores de risco para CA de próstata (idade, histórico familiar, raça não confirmada), sintomas urinários obstrutivos, PSA elevado com relação livre/total desfavorável e toque retal suspeito. Quadro de alta suspeição oncológica exigindo confirmação histológica. Dor lombar progressiva e fosfatase alcalina elevada tornam necessário estadiamento ósseo.",
    justify: "PSA > 10 ng/mL tem alta probabilidade de CA de próstata (>50%). Relação PSA livre/total < 10% indica probabilidade > 70% de malignidade. Toque retal com nódulo duro, irregular, com sulco mediano apagado é fortemente sugestivo de CA. Fosfatase alcalina elevada + hipercalcemia discreta + dor lombar progressiva são sinais de alerta para metástase óssea — estadiamento urgente após confirmação histológica.",
    expectedAnamnesis: [
      "Sintomas urinários do trato inferior (LUTS): jato fraco, hesitação, noctúria, urgência, disúria",
      "Hematúria ou hematospermia",
      "Dor óssea (localização, intensidade, progressão — metástase)",
      "Emagrecimento, anorexia, fadiga (síndrome paraneoplásica)",
      "Histórico familiar de CA de próstata ou mama",
      "Raça/etnia (negros têm maior risco)",
      "PSA anterior (velocidade de aumento)",
      "Comorbidades e medicamentos (impacto no tratamento)"
    ],
    expectedPhysical: [
      "Sinais vitais: PA (hipertensão pode contraindicar ou influenciar tratamentos)",
      "Toque retal: técnica correta (decúbito lateral, dedo indicador lubrificado), avaliação de: volume, consistência (elástica = benigno, endurecida/pétrea = suspeito), superfície (lisa vs. nodular/irregular), mobilidade, dor",
      "Buscar adenomegalias (inguinais, supraclaviculares)",
      "Palpação abdominal: globo vesical, massas"
    ],
    expectedExams: [
      { exam: "PSA total + PSA livre (relação livre/total)", justify: "Avaliação de probabilidade de malignidade", expected: "PSA 18,4; relação 8,7% (alto risco)" },
      { exam: "USTR com biópsia de próstata", justify: "Confirmação histológica — indicação definitiva", expected: "Nódulo hipoecóico; biópsia: adenocarcinoma" },
      { exam: "Fosfatase alcalina e cálcio sérico", justify: "Rastrear metástase óssea", expected: "Elevados — investigar" },
      { exam: "Cintilografia óssea", justify: "Estadiamento ósseo se CA confirmado e sintomas ósseos", expected: "A solicitar após biópsia" },
      { exam: "TC de abdome e pelve ou RM de próstata (mpMRI)", justify: "Estadiamento local e linfonodal", expected: "A solicitar após confirmação" }
    ],
    expectedConduct: [
      "Investigação imediata: Encaminhamento ao urologista para biópsia prostática transretal guiada por US (USTR-biópsia) — confirmação histológica é obrigatória antes do tratamento",
      "Farmacológica: Não iniciar tratamento oncológico sem biópsia. Manter tratamento de comorbidades. Analgesia para dor lombar (avaliar)",
      "Estadiamento após biópsia: PSA, USTR, RM multiparamétrica de próstata (mpMRI), cintilografia óssea se Gleason ≥8 ou sintomas ósseos, TC abdome/pelve",
      "Orientações ao paciente: Explicar que PSA elevado e toque retal suspeito precisam de confirmação com biópsia; diagnóstico definitivo é pelo exame do tecido. Quando confirmado: opções terapêuticas conforme estadiamento (prostatectomia radical, radioterapia, hormonioterapia). Câncer de próstata localizado tem bom prognóstico",
      "Seguimento: Urologista para biópsia e estadiamento"
    ],
    expectedCommunication: [
      "Apresentação: Apresentar-se, retomar contexto da consulta anterior",
      "Comunicação do diagnóstico: Os exames são preocupantes e precisamos confirmar com uma biópsia antes de dizer com certeza o que é. Não afirmar câncer sem biópsia. Não minimizar",
      "Escuta ativa: Acolher o medo do paciente, validar a preocupação com o irmão, dar esperança realista sem falsas promessas"
    ],
    criticalErrors: [
      "Não realizar toque retal — exame fundamental e insubstituível na investigação de CA de próstata",
      "Afirmar diagnóstico de câncer de próstata sem biópsia histológica",
      "Iniciar tratamento (hormonioterapia, cirurgia) sem confirmação histológica",
      "Não investigar dor lombar progressiva e marcadores de metástase (fosfatase alcalina, cálcio) — pode representar doença avançada",
      "Tranquilizar o paciente dizendo que PSA alto não é câncer sem investigação adequada e encaminhamento"
    ]
  },

  instD: {
    title: "CHECKLIST",
    sections: [
      {
        h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Apresentou-se e retomou o contexto da consulta anterior com o paciente", score: 0.3, ref: "CFM 2.217/2018" },
          { item: "Comunicou a suspeita diagnóstica sem afirmar câncer antes da biópsia, mas sem minimizar", score: 0.5, ref: "CFM 2.217/2018 — Comunicação de más notícias" },
          { item: "Acolheu o medo do paciente em relação ao câncer e ao histórico familiar", score: 0.5, ref: "CFM 2.217/2018" }
        ]
      },
      {
        h: "BLOCO 2 — ANAMNESE",
        items: [
          { item: "Investigou sintomas urinários obstrutivos e irritativos (LUTS) de forma sistemática", score: 0.5, ref: "SBU — CA de Próstata / HPB, 2022" },
          { item: "Pesquisou dor óssea (localização, progressão, características)", score: 1.0, ref: "SBU — CA de Próstata, 2022" },
          { item: "Questionou histórico familiar de CA de próstata ou mama", score: 0.5, ref: "SBU — CA de Próstata, 2022" },
          { item: "Investigou sintomas sistêmicos (emagrecimento, fadiga, anorexia)", score: 0.3, ref: "SBU — CA de Próstata, 2022" }
        ]
      },
      {
        h: "BLOCO 3 — EXAME FÍSICO",
        items: [
          { item: "Realizou toque retal com técnica adequada descrita (posição, lubrificação, avaliação completa)", score: 1.0, ref: "SBU — CA de Próstata, 2022; CFM" },
          { item: "Descreveu os achados do toque retal (consistência, nódulo, sulco mediano)", score: 1.0, ref: "SBU — CA de Próstata, 2022" }
        ]
      },
      {
        h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Interpretou PSA elevado + relação livre/total baixa como de alta suspeição para malignidade", score: 1.0, ref: "SBU — CA de Próstata, 2022" },
          { item: "Indicou encaminhamento para biópsia prostática guiada por USTR", score: 0.5, ref: "SBU — CA de Próstata, 2022" },
          { item: "Solicitou marcadores de metástase (fosfatase alcalina, cálcio) diante de dor lombar progressiva", score: 0.5, ref: "SBU — Estadiamento CA Próstata, 2022" }
        ]
      },
      {
        h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Não iniciou tratamento oncológico sem confirmação histológica", score: 1.0, ref: "SBU — CA de Próstata, 2022; CFM" },
          { item: "Encaminhou para urologista para biópsia e estadiamento", score: 0.5, ref: "SBU — CA de Próstata, 2022" },
          { item: "Orientou o paciente sobre o processo diagnóstico e prognóstico realista", score: 0.5, ref: "CFM 2.217/2018" }
        ]
      }
    ]
  }
},
{
  id: 9,
  title: "Hematúria macroscópica indolor em homem de 56 anos",
  sub: "UBS — Atenção Primária / Ambulatório",
  tema: "Urologia",
  topic: "Câncer renal",
  level: "moderado",
  cardAccent: "#BF360C",

  instA: {
    scenario: "UBS — Atenção Primária. Consultório, turno diurno.",
    patient: "M.T., 56 anos, masculino, engenheiro civil, tabagista.",
    complaint: "Urina com sangue há cerca de 3 semanas, sem dor.",
    tasks: [
      "Realize a anamnese dirigida ao caso",
      "Realize o exame físico pertinente",
      "Formule as hipóteses diagnósticas e os diagnósticos diferenciais",
      "Solicite e interprete os exames complementares adequados",
      "Proponha a conduta e oriente o paciente"
    ]
  },

  instB: {
    vitals: { PA: "158/96 mmHg", FC: "78 bpm", FR: "16 irpm", Tax: "36,7°C", Peso: "82 kg", Altura: "1,76 m", IMC: "26,5 kg/m²" },
    physicalGeneral: "Paciente em bom estado geral, lúcido, orientado. Ligeiro emagrecimento referido pelo próprio paciente (3 kg em 2 meses). Pele e mucosas normocoradas, bem hidratado.",
    physicalSeg: [
      "ABDOME: Presença de massa palpável no flanco direito, de consistência sólida, superfície irregular, sem pulsatilidade, levemente dolorosa à palpação profunda. Ausência de circulação colateral abdominal visível.",
      "FLANCOS: Manobra de punho-percussão (Giordano) positiva à direita (dor à percussão no ângulo costovertebral direito).",
      "MMII: Sem edema, pulsos normais.",
      "GENITÁLIA: Varicocele grossa à esquerda (grau III), de aparecimento recente conforme anamnese."
    ],
    labs: [
      { test: "Hemograma", val: "Hemoglobina 10,4 g/dL, VCM 88 fL", ref: "13,5–17,5 g/dL", alt: true },
      { test: "Hematócrito", val: "31%", ref: "41–53%", alt: true },
      { test: "Eritrossedimentação (VHS)", val: "68 mm/h", ref: "< 15 mm/h", alt: true },
      { test: "Ureia", val: "22 mg/dL", ref: "15–45 mg/dL", alt: false },
      { test: "Creatinina", val: "1,0 mg/dL", ref: "0,7–1,2 mg/dL", alt: false },
      { test: "Cálcio sérico", val: "11,2 mg/dL", ref: "8,5–10,5 mg/dL", alt: true },
      { test: "Fosfatase alcalina", val: "155 U/L", ref: "40–130 U/L", alt: true },
      { test: "Urina tipo I", val: "Hematúria macroscópica (+++), sem cilindros, sem proteinúria significativa", ref: "—", alt: true }
    ],
    image: "Ultrassonografia de rins, ureteres e bexiga (RUSG) — se solicitada: Rim direito com massa sólida heterogênea no polo superior, medindo 7,5 × 6,2 cm, com áreas de necrose central. Rim esquerdo sem alterações. Bexiga sem lesões. Sem cálculos visíveis. Conclusão: Massa renal direita sólida — neoplasia renal não pode ser excluída. Tomografia computadorizada de abdome com contraste recomendada para caracterização.",
    note: "Entregar sinais vitais no início. Exames laboratoriais como impresso ao início (solicitados na consulta anterior ou como parte da investigação de hematúria). RUSG somente se solicitada. Atenção: a varicocele esquerda de aparecimento recente é um sinal de alarme de compressão de veia renal esquerda por trombose tumoral — sinal altamente sugestivo de tumor renal avançado. Pontuar candidato que identifica e comenta sobre esse achado.",
    patientProfile: "Marcelo T., 56 anos, masculino, engenheiro civil, casado, 2 filhos. Tabagista (30 maços-ano). Hipertensão arterial diagnosticada recentemente (PA 158/96 nesta consulta). Sem outros antecedentes. Nega familiares com neoplasias conhecidas.",
    script: [
      { trigger: "Queixa principal", speech: "Doutor, há umas 3 semanas a minha urina ficou avermelhada, com sangue. Não dói nada, por isso demorei pra vir. Mas foi ficando mais frequente." },
      { trigger: "Sobre a hematúria", speech: "É vermelho mesmo, não rosado. Aparece do nada, passa, aí volta. Sem dor nenhuma." },
      { trigger: "Sobre sintomas associados", speech: "Tô me sentindo mais cansado, perdi uns 3 quilos sem querer nos últimos 2 meses." },
      { trigger: "Sobre dor no flanco", speech: "Tenho uma dorzinha aqui no lado direito, mas achei que era da coluna." },
      { trigger: "Sobre a varicocele", speech: "Ah sim, apareceu esse caroço nas veias aqui na virilha/saco esquerdo faz umas 6 semanas. Nunca tive isso antes." },
      { trigger: "Sobre tabagismo", speech: "Fumo faz 30 anos, umas 20 cigarros por dia. Já tentei parar várias vezes." },
      { trigger: "Sobre febre", speech: "Às vezes fico com um calorzinho, febre baixa mesmo. Uma vez deu 37,8." },
      { trigger: "Pergunta ativa", speech: "Isso pode ser câncer, doutor? Fico com medo." },
      { trigger: "Pergunta ativa", speech: "Precisa tirar o rim?" }
    ],
    hiddenInfo: [
      "Varicocele esquerda de aparecimento recente (6 semanas): só revelar se perguntado especificamente sobre alterações genitais, varicosidades ou sintomas novos no escroto/virilha",
      "Febre baixa vespertina intermitente há 3 semanas: só revelar se perguntado especificamente sobre febre ou sintomas sistêmicos"
    ],
    actorBehavior: "Paciente aparentemente calmo, mas com ansiedade subjacente sobre a possibilidade de câncer. Responde com brevidade inicialmente. Com abordagem empática e perguntas abertas, torna-se mais comunicativo. Muito preocupado com a necessidade de cirurgia."
  },

  instC: {
    diagnosis: "Suspeita de carcinoma de células renais (CCR) — tumor renal direito com tríade clássica parcial (hematúria + massa em flanco + dor), varicocele esquerda de aparecimento súbito (trombose tumoral da veia renal), síndrome paraneoplásica (hipercalcemia, anemia, VHS elevada, febre).",
    differentials: [
      "Angiomiolipoma renal — inclusão: massa renal; exclusão: angiomiolipoma é hiperecóico ao US (não heterogêneo/necrótico), geralmente assintomático, sem hematúria franca",
      "Tumor urotelial de pelve renal / carcinoma de células transicionais — inclusão: hematúria macroscópica indolor + massa renal; exclusão: mais comum em bexiga; na pelve renal a massa é diferente imageticamente; tabagismo é fator de risco comum a ambos",
      "Cálculo renal com obstrução — inclusão: hematúria + dor em flanco; exclusão: hematúria completamente indolor, ausência de cólica, sem cálculo visível ao US, massa sólida ao US",
      "Abscesso ou cisto renal complicado — inclusão: massa renal com febre; exclusão: massa sólida heterogênea, sem síndrome febril proeminente, varicocele recente incompatível"
    ],
    context: "Homem de 56 anos, tabagista pesado, com hematúria macroscópica indolor, massa renal palpável, anemia, hipercalcemia, VHS elevada e varicocele esquerda de aparecimento recente — quadro altamente sugestivo de carcinoma de células renais avançado com provável trombose de veia renal. Tríade clássica de Virchow (hematúria + massa + dor) presente de forma incompleta.",
    justify: "Hematúria macroscópica indolor em adulto deve ser considerada malignidade do trato urinário até prova em contrário. A massa sólida heterogênea no polo superior do rim direito, o tabagismo (principal fator de risco para CCR e CA urotelial), a anemia normocrômica, hipercalcemia (síndromes paraneoplásicas ocorrem em 20–30% dos CCR), VHS elevada e a varicocele esquerda súbita (obstrução/invasão da veia renal esquerda por extensão tumoral — sinal de alarme para CCR avançado) completam o quadro de alta suspeição.",
    expectedAnamnesis: [
      "Caracterização da hematúria: inicial/total/terminal, com ou sem coágulos, dor associada",
      "Sintomas sistêmicos: emagrecimento, astenia, febre (síndrome paraneoplásica)",
      "Dor em flanco (caráter, localização)",
      "Tabagismo (fator de risco principal)",
      "Exposição ocupacional (metalurgia, solventes, anilinas)",
      "Histórico familiar de neoplasias renais (von Hippel-Lindau)",
      "Sintomas urinários associados (urgência, disúria — diferenciar de tumor urotelial)",
      "Aparecimento de varicocele escrotal recente (sinal de alarme)"
    ],
    expectedPhysical: [
      "Palpação abdominal: massa em flanco, características (tamanho, consistência, mobilidade, pulsatilidade)",
      "Manobra de Giordano (punho-percussão renal): positiva à direita",
      "Exame genital: pesquisa de varicocele (especialmente súbita à esquerda)",
      "Pressão arterial (hipertensão pode ser paraneoplásica em CCR)",
      "Avaliação de adenomegalias (supraclavicular, inguinal)"
    ],
    expectedExams: [
      { exam: "Urina tipo I + urocultura", justify: "Confirmar hematúria e afastar infecção", expected: "Hematúria macroscópica, sem infecção" },
      { exam: "Hemograma + função renal", justify: "Anemia paraneoplásica, função renal basal", expected: "Anemia, função renal preservada" },
      { exam: "Cálcio sérico", justify: "Síndromes paraneoplásicas de CCR", expected: "Hipercalcemia" },
      { exam: "USG renal (RUSG)", justify: "Caracterização inicial da massa", expected: "Massa sólida heterogênea" },
      { exam: "TC de abdome e pelve com contraste", justify: "Padrão-ouro para caracterização e estadiamento", expected: "Massa renal com realce, possível trombose venosa" },
      { exam: "Cintilografia óssea", justify: "Se FA elevada + sintomas ósseos", expected: "Avaliar metástases" }
    ],
    expectedConduct: [
      "Encaminhamento urgente: Urologista/oncologista para estadiamento completo e definição de tratamento",
      "Exames de estadiamento: TC de tórax, abdome e pelve com contraste; RM se suspeita de trombose de veia cava; cintilografia óssea se FA elevada",
      "Tratamento definitivo (após confirmação e estadiamento): Nefrectomia radical ou parcial (se tumor localizado); imunoterapia/terapia-alvo para doença avançada (sunitinibe, pazopanibe, nivolumabe) ⚠️ [Protocolos INCA/MS — confirmar incorporação via CONITEC]",
      "Orientações: Explicar que há massa no rim que precisa ser investigada com urgência, que hematúria sem dor em adulto exige investigação rigorosa, que o diagnóstico definitivo é por imagem e biópsia/cirurgia",
      "Seguimento: Encaminhamento preferencial urgente"
    ],
    expectedCommunication: [
      "Apresentação: Apresentar-se, retomar queixa, demonstrar escuta",
      "Comunicação do diagnóstico: Informar que há uma massa no rim que precisa de investigação urgente, pois pode ser algo sério, mas que precisa de mais exames para definir com precisão",
      "Escuta ativa: Acolher o medo do paciente, responder à pergunta sobre câncer com honestidade e empatia"
    ],
    criticalErrors: [
      "Tratar hematúria como infecção urinária sem investigação de neoplasia em adulto com hematúria macroscópica indolor",
      "Não palpar o abdome e não identificar a massa em flanco",
      "Não identificar a varicocele esquerda de aparecimento recente como sinal de alarme de tumor renal avançado",
      "Não encaminhar com urgência para urologista/oncologista",
      "Tranquilizar o paciente dizendo que é só infecção ou minimizar a gravidade sem investigação adequada"
    ]
  },

  instD: {
    title: "CHECKLIST",
    sections: [
      {
        h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Apresentou-se e demonstrou escuta ativa às queixas do paciente", score: 0.3, ref: "CFM 2.217/2018" },
          { item: "Comunicou a necessidade de investigação urgente sem alarmar desnecessariamente", score: 0.5, ref: "CFM 2.217/2018 — Comunicação de más notícias" },
          { item: "Respondeu à pergunta sobre câncer com honestidade e empatia", score: 0.5, ref: "CFM 2.217/2018" }
        ]
      },
      {
        h: "BLOCO 2 — ANAMNESE",
        items: [
          { item: "Caracterizou a hematúria (duração, intensidade, presença de coágulos, presença de dor)", score: 0.5, ref: "SBU — Uropatias, 2022" },
          { item: "Investigou sintomas sistêmicos (emagrecimento, febre, fadiga — síndromes paraneoplásicas)", score: 0.5, ref: "SBU — CA Renal, 2022" },
          { item: "Questionou tabagismo como fator de risco para neoplasias urológicas", score: 0.5, ref: "INCA — Fatores de risco, 2023" },
          { item: "Perguntou especificamente sobre varicocele de aparecimento recente", score: 1.0, ref: "SBU — CA Renal, 2022" }
        ]
      },
      {
        h: "BLOCO 3 — EXAME FÍSICO",
        items: [
          { item: "Palpou os flancos e identificou e descreveu a massa renal", score: 1.0, ref: "SBU — CA Renal, 2022" },
          { item: "Realizou e interpretou a manobra de Giordano (punho-percussão)", score: 0.5, ref: "SBU — CA Renal, 2022" },
          { item: "Avaliou a genitália e identificou a varicocele esquerda recente", score: 1.0, ref: "SBU — CA Renal, 2022" },
          { item: "Mediu e registrou a pressão arterial (hipertensão como sinal paraneoplásico)", score: 0.3, ref: "SBU — CA Renal, 2022" }
        ]
      },
      {
        h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Formulou hipótese de neoplasia renal como principal diagnóstico", score: 1.0, ref: "SBU — CA Renal, 2022" },
          { item: "Solicitou USG renal e TC de abdome/pelve com contraste para estadiamento", score: 0.5, ref: "SBU — CA Renal, 2022" },
          { item: "Interpretou hipercalcemia e VHS elevada como sugestivos de síndrome paraneoplásica", score: 0.5, ref: "SBU — CA Renal, 2022" }
        ]
      },
      {
        h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Encaminhou com urgência para urologista/oncologista", score: 1.0, ref: "SBU — CA Renal / INCA, 2022" },
          { item: "Não diagnosticou hematúria como ITU e não prescreveu antibiótico sem exames", score: 0.5, ref: "SBU — Uropatias, 2022" },
          { item: "Orientou o paciente sobre a necessidade de investigação urgente e próximos passos", score: 0.5, ref: "CFM 2.217/2018" }
        ]
      }
    ]
  }
},
{
  id: 10,
  title: "Homem de 45 anos com dificuldade para manter a ereção há 8 meses",
  sub: "Ambulatório — Atenção Primária",
  tema: "Urologia",
  topic: "Disfunção erétil",
  level: "moderado",
  cardAccent: "#004D40",

  instA: {
    scenario: "Ambulatório de atenção primária. Consultório, turno diurno.",
    patient: "P.N., 45 anos, masculino, contador, hipertenso, fumante.",
    complaint: "Há 8 meses com dificuldade para manter a ereção e isso está afetando seu relacionamento.",
    tasks: [
      "Realize a anamnese dirigida ao caso, incluindo aspectos psicossociais",
      "Realize o exame físico pertinente",
      "Solicite e interprete os exames complementares adequados",
      "Formule a hipótese diagnóstica com a etiologia mais provável",
      "Proponha a conduta e oriente o paciente"
    ]
  },

  instB: {
    vitals: { PA: "148/92 mmHg", FC: "76 bpm", FR: "16 irpm", Tax: "36,6°C", Peso: "87 kg", Altura: "1,74 m", IMC: "28,7 kg/m²" },
    physicalGeneral: "Paciente em bom estado geral, lúcido, orientado, levemente constrangido. Pele e mucosas normocoradas, hidratadas. Sem fácies cushingóide. Distribuição de gordura centralizada (circunferência abdominal ~98 cm).",
    physicalSeg: [
      "GENITÁLIA: Pênis de tamanho normal, sem deformidades. Testículos presentes bilateralmente, volume reduzido (estimado 12 mL bilateralmente — normal > 15 mL em adultos). Epidídimos sem alterações. Sem varicocele.",
      "SISTEMA CARDIOVASCULAR: Pulsos periféricos presentes, porém diminuídos em membros inferiores (Índice tornozelo-braquial: 0,8 — limítrofe para doença arterial periférica).",
      "ABDOME: Adiposidade central, flácido, sem massas, sem organomegalias."
    ],
    labs: [
      { test: "Glicemia de jejum", val: "112 mg/dL", ref: "70–99 mg/dL", alt: true },
      { test: "HbA1c", val: "6,2%", ref: "< 5,7%", alt: true },
      { test: "Colesterol total", val: "234 mg/dL", ref: "< 200 mg/dL", alt: true },
      { test: "LDL", val: "158 mg/dL", ref: "< 130 mg/dL", alt: true },
      { test: "HDL", val: "38 mg/dL", ref: "> 40 mg/dL", alt: true },
      { test: "Triglicerídeos", val: "186 mg/dL", ref: "< 150 mg/dL", alt: true },
      { test: "Testosterona total", val: "240 ng/dL", ref: "300–1.000 ng/dL", alt: true },
      { test: "Testosterona livre", val: "6,2 pg/mL", ref: "9–30 pg/mL", alt: true },
      { test: "LH", val: "3,2 mIU/mL", ref: "1,7–8,6 mIU/mL", alt: false },
      { test: "FSH", val: "4,8 mIU/mL", ref: "1,5–12,4 mIU/mL", alt: false },
      { test: "Prolactina", val: "12 ng/mL", ref: "2–18 ng/mL", alt: false },
      { test: "PSA", val: "1,2 ng/mL", ref: "< 4,0 ng/mL", alt: false }
    ],
    image: "image: null",
    note: "Entregar sinais vitais e exame físico no início. Exames laboratoriais somente se solicitados. Índice tornozelo-braquial (ITB) entregar somente se candidato solicitar ou referir avaliação de doença arterial periférica como parte da investigação de DE vasculogênica. ITB = 0,8 indica doença arterial periférica leve, sugestivo de comprometimento vascular peniano.",
    patientProfile: "Paulo N., 45 anos, masculino, contador, casado há 15 anos, 2 filhos. Hipertenso há 5 anos em uso de atenolol 50mg/dia. Fumante (15 cigarros/dia há 20 anos). Sedentário. Alimentação hipercalórica.",
    script: [
      { trigger: "Queixa principal", speech: "Doutor, é difícil falar isso, mas faz uns 8 meses que tenho dificuldade pra manter a ereção. Fica dura no início, mas na hora H perde. Isso tá destruindo meu casamento." },
      { trigger: "Sobre início e contexto", speech: "Começou devagar, foi piorando. Minha esposa fica frustrada, eu fico com vergonha, aí piora ainda mais." },
      { trigger: "Sobre ereções matinais", speech: "Antes eu acordava com ereção toda manhã. Agora quase nunca acontece isso." },
      { trigger: "Sobre masturbação", speech: "Quando fico sozinho também acontece a mesma coisa, não fica por muito tempo." },
      { trigger: "Sobre tabagismo e outros hábitos", speech: "Fumo há 20 anos. Não pratico exercício. Como muito, admito." },
      { trigger: "Sobre remédios em uso", speech: "Tomo atenolol pra pressão. Só isso." },
      { trigger: "Sobre estresse", speech: "Tô com problema no trabalho sim, muito estresse. Mas acho que não é só psicológico, porque até sozinho acontece." },
      { trigger: "Sobre libido", speech: "A vontade de ter relação ainda existe, mas o desempenho… aí é que está." },
      { trigger: "Pergunta ativa", speech: "Tem remédio pra isso, doutor? Aquela pastilha azul funciona?" },
      { trigger: "Pergunta ativa", speech: "É da cabeça ou é do corpo?" }
    ],
    hiddenInfo: [
      "Uso de atenolol (betabloqueador) há 5 anos — causa iatrogênica relevante de disfunção erétil: só revelar se perguntado sobre medicamentos em uso com nome e dose",
      "Ausência de ereções espontâneas matinais há meses (indica componente orgânico predominante): só revelar se perguntado especificamente sobre ereções noturnas ou matinais (ereção de despertar)"
    ],
    actorBehavior: "Constrangido no início, mas torna-se aberto com abordagem empática e sem julgamento. Demonstra frustração com a situação e ansiedade sobre o relacionamento. Curioso sobre os remédios para isso. Receptivo a explicações sobre fatores de risco modificáveis."
  },

  instC: {
    diagnosis: "Disfunção erétil de etiologia multifatorial — componente vasculogênico predominante (aterosclerose/doença arterial associada a tabagismo, HAS, pré-diabetes, dislipidemia, síndrome metabólica) + componente hormonal (testosterona reduzida / hipogonadismo hipogonadotrófico funcional) + provável componente iatrogênico (betabloqueador — atenolol) + componente psicogênico secundário.",
    differentials: [
      "DE psicogênica pura — inclusão: estresse, conflito relacional; exclusão: ausência de ereções espontâneas (orgânico), múltiplos fatores de risco vasculares, mesma disfunção durante masturbação",
      "DE neurológica — inclusão: pode coexistir; exclusão: sem história de cirurgia pélvica, sem neuropatia evidente, sem trauma medular",
      "DE endocrinológica isolada (hipogonadismo) — inclusão: testosterona baixa, volume testicular reduzido; exclusão: LH/FSH normais sugerem hipogonadismo hipogonadotrófico funcional (obesidade, sedentarismo), não primário; mas contribui para o quadro"
    ],
    context: "Homem de 45 anos com síndrome metabólica (HAS, pré-diabetes, dislipidemia, sobrepeso, tabagismo), testosterona baixa e uso de atenolol, apresentando DE multifatorial com componente vasculogênico predominante. Ausência de ereções espontâneas e mesma disfunção durante masturbação indicam componente orgânico predominante, não apenas psicogênico.",
    justify: "A DE vasculogênica é a causa mais comum em homens acima de 40 anos com fatores de risco cardiovascular. O atenolol é um betabloqueador não-seletivo com reconhecido efeito adverso de DE (mecanismo: redução do débito cardíaco + efeito central). A testosterona reduzida (hipogonadismo hipogonadotrófico funcional — associado a obesidade e sedentarismo) amplifica a DE. O componente psicogênico é secundário (ansiedade de desempenho), não primário. A DE é marcador de risco cardiovascular — deve-se investigar doença coronariana.",
    expectedAnamnesis: [
      "Caracterizar a DE: início, progressão, presença de ereções matinais/noturnas/espontâneas, qualidade durante masturbação",
      "Diferenciar orgânico (ausência de ereções espontâneas) de psicogênico (ereções espontâneas preservadas)",
      "Libido preservada ou reduzida (hipogonadismo)",
      "Fatores de risco cardiovasculares: HAS, DM, tabagismo, dislipidemia, sedentarismo, obesidade",
      "Medicamentos: betabloqueadores, diuréticos tiazídicos, antidepressivos, antipsicóticos, anti-andrógenos",
      "Uso de álcool, drogas ilícitas",
      "Cirurgias pélvicas/perineais (prostatectomia, retossigmoidectomia)",
      "Histórico de trauma pélvico ou medular",
      "Aspectos psicossociais: estresse, depressão, conflito relacional"
    ],
    expectedPhysical: [
      "Sinais vitais: PA (HAS)",
      "Genitália: tamanho peniano, volume testicular (redução sugere hipogonadismo), varicocele",
      "Caracteres sexuais secundários: distribuição de pelos, ginecomastia",
      "Avaliação cardiovascular: pulsos periféricos (doença arterial periférica = correlata de DE vasculogênica), índice tornozelo-braquial",
      "Medida da circunferência abdominal (síndrome metabólica)",
      "Avaliação neurológica básica: reflexo bulbocavernoso, sensibilidade perineal"
    ],
    expectedExams: [
      { exam: "Testosterona total e livre", justify: "Hipogonadismo como causa/fator contribuinte", expected: "Reduzida" },
      { exam: "LH e FSH", justify: "Diferenciar hipogonadismo primário de secundário", expected: "Normais (hipogonadotrófico funcional)" },
      { exam: "Glicemia, HbA1c", justify: "Diabetes como causa de DE vasculogênica/neuropática", expected: "Pré-diabetes" },
      { exam: "Perfil lipídico", justify: "Dislipidemia como fator de risco cardiovascular/vascular", expected: "Alterado" },
      { exam: "PSA", justify: "Rastreamento em > 40 anos com fatores de risco (afastar CA próstata antes de terapia com testosterona)", expected: "Normal" }
    ],
    expectedConduct: [
      "Modificação de estilo de vida (1ª linha): Cessação do tabagismo (reduz DE em até 40%), atividade física regular, perda de peso, dieta adequada — melhoram função erétil independentemente de outras intervenções",
      "Ajuste de medicamento: Discutir com cardiologista/clínico a substituição do atenolol por anti-hipertensivo com menor impacto na DE (ex: losartana, amlodipina, IECA) — losartana tem efeito positivo na DE ⚠️ [SBH 2020 + SBU 2022]",
      "Farmacológica — 1ª linha para DE: Inibidores de PDE5 — sildenafila 50mg (ou tadalafila 5mg contínua); prescrever com orientação sobre uso, efeitos adversos e contraindicações (nitratos — contraindicação absoluta)",
      "Terapia hormonal: Se testosterona confirmadamente baixa após 2 medições, avaliar reposição de testosterona (após afastar CA de próstata pelo PSA)",
      "Encaminhamento: Urologista/andrologista se falha ao tratamento de 1ª linha",
      "Seguimento: Retorno em 4–8 semanas para avaliação da resposta"
    ],
    expectedCommunication: [
      "Apresentação: Apresentar-se com naturalidade, abordar tema sem constrangimento",
      "Comunicação do diagnóstico: Explicar que a DE tem múltiplas causas identificáveis e tratáveis neste caso; que está relacionada ao coração e aos vasos; que mudança de estilo de vida + medicamento têm boa resposta",
      "Escuta ativa: Validar a dificuldade de falar sobre o assunto, incluir a perspectiva da relação, responder às perguntas sobre pastilha azul com informação adequada"
    ],
    criticalErrors: [
      "Não investigar a etiologia (tratar empiricamente com IPDE5 sem investigação de causa orgânica)",
      "Prescrever IPDE5 sem perguntar sobre uso de nitratos (contraindicação absoluta — risco de hipotensão grave)",
      "Não reconhecer o atenolol como fator iatrogênico contribuinte para DE",
      "Não abordar os fatores de risco cardiovasculares modificáveis (DE é marcador de evento cardiovascular)",
      "Classificar como problema psicológico sem investigação de componente orgânico (ausência de ereções espontâneas = orgânico)"
    ]
  },

  instD: {
    title: "CHECKLIST",
    sections: [
      {
        h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Abordou a queixa sexual sem julgamento e garantiu privacidade", score: 0.5, ref: "CFM 2.217/2018" },
          { item: "Perguntou sobre impacto no relacionamento e bem-estar psicossocial", score: 0.5, ref: "SBU — Andrologia / DE, 2022" }
        ]
      },
      {
        h: "BLOCO 2 — ANAMNESE",
        items: [
          { item: "Investigou presença de ereções espontâneas (matinais/noturnas) para diferenciar orgânico de psicogênico", score: 1.0, ref: "SBU — Disfunção Erétil, 2022" },
          { item: "Questionou todos os medicamentos em uso com nome e dose (identificar atenolol)", score: 1.0, ref: "SBU — Disfunção Erétil, 2022" },
          { item: "Investigou fatores de risco cardiovasculares (tabagismo, HAS, DM, dislipidemia)", score: 0.5, ref: "SBU — Disfunção Erétil, 2022" },
          { item: "Pesquisou libido (diferencia DE de hipogonadismo isolado)", score: 0.5, ref: "SBU — Andrologia, 2022" }
        ]
      },
      {
        h: "BLOCO 3 — EXAME FÍSICO",
        items: [
          { item: "Avaliou genitália (pênis, volume testicular)", score: 0.5, ref: "SBU — Andrologia, 2022" },
          { item: "Avaliou pulsos periféricos e/ou solicitou índice tornozelo-braquial", score: 0.5, ref: "SBU — Disfunção Erétil, 2022" },
          { item: "Mediu circunferência abdominal e PA (síndrome metabólica)", score: 0.5, ref: "SBH — HAS, 2020; SBD, 2022" }
        ]
      },
      {
        h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Identificou etiologia multifatorial com componente vasculogênico predominante", score: 1.0, ref: "SBU — Disfunção Erétil, 2022" },
          { item: "Solicitou testosterona total, glicemia e perfil lipídico", score: 0.5, ref: "SBU — Disfunção Erétil, 2022" },
          { item: "Identificou atenolol como possível causa iatrogênica e propôs substituição", score: 0.5, ref: "SBH 2020; SBU — DE, 2022" }
        ]
      },
      {
        h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Prescreveu IPDE5 (sildenafila ou tadalafila) com orientação de uso e contraindicações", score: 0.5, ref: "SBU — DE, 2022; RENAME 2022" },
          { item: "Contraindicou IPDE5 com nitratos (ou confirmou ausência de uso de nitratos antes de prescrever)", score: 0.5, ref: "SBU — DE, 2022" },
          { item: "Indicou modificações de estilo de vida (cessação do tabagismo, exercício, perda de peso) como intervenção de 1ª linha", score: 0.5, ref: "SBU — DE, 2022" },
          { item: "Orientou sobre DE como marcador de risco cardiovascular e a importância do controle dos fatores de risco", score: 0.5, ref: "SBC / SBU — DE e Risco CV, 2022" }
        ]
      }
    ]
  }
},
{
  id: 11,
  title: "Casal sem filhos após 2 anos tentando engravidar naturalmente",
  sub: "Ambulatório — Reprodução Humana / Urologia",
  tema: "Urologia",
  topic: "Infertilidade masculina",
  level: "moderado",
  cardAccent: "#1B5E20",

  instA: {
    scenario: "Ambulatório de urologia/reprodução humana. Consultório, turno diurno.",
    patient: "T.F., 33 anos, masculino, professor universitário, sem comorbidades referidas.",
    complaint: "Casal sem filhos após 2 anos de relações sem proteção. Parceira já foi avaliada e está normal. Veio para investigação do fator masculino.",
    tasks: [
      "Realize a anamnese andrológica completa",
      "Realize o exame físico andrológico pertinente",
      "Solicite e interprete os exames complementares adequados",
      "Formule a hipótese diagnóstica da causa de infertilidade masculina",
      "Proponha a conduta e oriente o casal"
    ]
  },

  instB: {
    vitals: { PA: "118/74 mmHg", FC: "70 bpm", FR: "16 irpm", Tax: "36,5°C", Peso: "76 kg", Altura: "1,78 m", IMC: "24,0 kg/m²" },
    physicalGeneral: "Paciente em bom estado geral, lúcido, orientado, eutrófico. Caracteres sexuais secundários desenvolvidos normalmente. Distribuição de pelos normal para o sexo. Sem ginecomastia. Pele e mucosas normocoradas e hidratadas.",
    physicalSeg: [
      "GENITÁLIA: Pênis de tamanho e aspecto normais. Testículo direito: volume normal (~18 mL), consistência firme, epidídimo normal. Testículo esquerdo: volume reduzido (~10 mL), consistência diminuída (amolecido). Epidídimo esquerdo discretamente aumentado. Varicocele grau II à esquerda identificada pela manobra de Valsalva (dilatação de plexo pampiniforme, desaparece com decúbito). Sem varicocele à direita.",
      "ABDOME: Sem alterações."
    ],
    labs: [
      { test: "Espermograma — Volume", val: "2,8 mL", ref: "≥ 1,5 mL", alt: false },
      { test: "Espermograma — Concentração", val: "8 × 10⁶/mL", ref: "≥ 16 × 10⁶/mL", alt: true },
      { test: "Espermograma — Motilidade progressiva", val: "26%", ref: "≥ 30%", alt: true },
      { test: "Espermograma — Morfologia normal", val: "2%", ref: "≥ 4%", alt: true },
      { test: "Espermograma — Vitalidade", val: "58%", ref: "≥ 54%", alt: false },
      { test: "Testosterona total", val: "420 ng/dL", ref: "300–1.000 ng/dL", alt: false },
      { test: "FSH", val: "9,8 mIU/mL", ref: "1,5–12,4 mIU/mL", alt: false },
      { test: "LH", val: "6,2 mIU/mL", ref: "1,7–8,6 mIU/mL", alt: false },
      { test: "Prolactina", val: "10 ng/mL", ref: "2–18 ng/mL", alt: false }
    ],
    image: "Ultrassonografia testicular com Doppler (se solicitada): Testículo esquerdo com volume de 9,8 mL, ecotextura heterogênea. Plexo pampiniforme esquerdo com veias dilatadas (diâmetro máximo 3,2 mm em Valsalva). Aumento do fluxo venoso ao Doppler colorido. Testículo direito normal. Conclusão: Varicocele esquerda grau II confirmada. Hipotrofia testicular esquerda.",
    note: "Entregar sinais vitais no início. Espermograma e hormônios entregar quando solicitados. USG testicular somente se solicitada. Atenção: candidato que não realiza exame físico andrológico (varicocele, volume testicular) perde item crítico. O exame físico é fundamental para o diagnóstico de varicocele.",
    patientProfile: "Thiago F., 33 anos, masculino, professor universitário, casado há 4 anos. Sem comorbidades. Nenhuma cirurgia prévia. Sem medicamentos. Parceira: 31 anos, investigação ginecológica sem alterações.",
    script: [
      { trigger: "Queixa principal", speech: "Doutor, minha esposa e eu tentamos engravidar há 2 anos sem proteção e nada. Ela foi no ginecologista e está tudo bem com ela. Me mandaram vir aqui para ver se o problema é meu." },
      { trigger: "Sobre função sexual", speech: "A função sexual é normal, não tenho problema de ereção nem ejaculação." },
      { trigger: "Sobre doenças anteriores", speech: "Nunca tive doença séria. Não fiz nenhuma cirurgia." },
      { trigger: "Sobre febre alta na infância", speech: "Não que eu me lembre. Não tive caxumba." },
      { trigger: "Sobre trabalho e exposições", speech: "Dou aulas, não trabalho com produto químico nem calor intenso." },
      { trigger: "Sobre hábitos", speech: "Não fumo, bebo socialmente. Vou à academia 3 vezes por semana." },
      { trigger: "Sobre anabolizante", speech: "Já usei anabolizante por 1 ano, faz uns 4 anos atrás. Queria aumentar a massa muscular." },
      { trigger: "Sobre dor ou desconforto testicular", speech: "Às vezes sinto um peso aqui do lado esquerdo, mas não é dor forte." },
      { trigger: "Pergunta ativa", speech: "O espermograma que fiz deu baixo. Isso quer dizer que não posso ter filhos?" },
      { trigger: "Pergunta ativa", speech: "Tem tratamento? Pode melhorar?" }
    ],
    hiddenInfo: [
      "Uso de esteroides anabolizantes por 1 ano há 4 anos (causa de supressão do eixo hipotálamo-hipofisário-gonadal): só revelar se perguntado especificamente sobre uso de anabolizantes, suplementos hormonais ou medicamentos para ganho de massa muscular",
      "Sensação de peso testicular esquerdo: só revelar se perguntado especificamente sobre dor, desconforto ou sintomas escrotais"
    ],
    actorBehavior: "Paciente inteligente, racional, ligeiramente ansioso com o diagnóstico. Tende a fazer perguntas técnicas. Demonstra frustração discreta com a situação. Responde bem a explicações detalhadas. Está preocupado com o julgamento do médico sobre o uso de anabolizante."
  },

  instC: {
    diagnosis: "Infertilidade masculina por varicocele esquerda grau II com oligoastenoteratozoospermia (OAT) associada + provável hipogonadismo secundário tardio por uso prévio de anabolizantes (recuperação parcial do eixo — testosterona normal, mas volume testicular esquerdo reduzido e espermograma ainda alterado).",
    differentials: [
      "Infertilidade idiopática — inclusão: alteração do espermograma sem causa clara; exclusão: varicocele identificada ao exame físico + uso prévio de anabolizantes são causas identificáveis e potencialmente tratáveis",
      "Hipogonadismo hipogonadotrófico por uso de anabolizante (supressão do eixo) — inclusão: uso prévio de EAA, alterações no espermograma; exclusão: testosterona e gonadotrofinas normalizadas após 4 anos, sem supressão ativa atual; contribui historicamente mas varicocele é causa predominante atual",
      "Obstrução do ducto deferente ou epidídimo — inclusão: volume e motilidade alterados; exclusão: espermograma com concentração reduzida mas presente (azoospermia obstrutiva teria concentração zero), FSH normal"
    ],
    context: "Homem de 33 anos com infertilidade do casal, espermograma com OAT leve-moderada e varicocele esquerda grau II com hipotrofia testicular ipsilateral — causa mais comum e tratável de infertilidade masculina. Uso prévio de anabolizantes é fator contribuinte adicional. Tratamento cirúrgico da varicocele tem potencial de melhorar parâmetros espermáticos em até 60–70% dos casos ⚠️ [EAU 2023 — dado sem diretriz brasileira específica].",
    justify: "Varicocele é a causa identificável mais comum de infertilidade masculina (35–40% dos casos). O mecanismo envolve aumento da temperatura escrotal, estresse oxidativo e hipóxia testicular, levando à disfunção das células de Sertoli e de Leydig. A OAT (oligospermia + astenospermia + teratospermia) é o padrão espermático típico. A hipotrofia testicular esquerda ao exame físico e ao US confirma o comprometimento funcional do testículo afetado. O uso prévio de anabolizantes suprime o eixo HPG; após 4 anos, a recuperação pode ser parcial.",
    expectedAnamnesis: [
      "Duração e método de tentativa de gravidez (2 anos sem proteção = infertilidade)",
      "Investigação da parceira (já feita — normal)",
      "Doenças infecciosas: caxumba, orquiepididimite, ISTs",
      "Cirurgias prévias: criptorquidia, hérnia inguinal, orquidopexia, vasectomia",
      "Trauma escrotal",
      "Exposições: calor (sauna, banheira quente, trabalho em altas temperaturas), radiação, quimioterapia",
      "Uso de anabolizantes, esteroides, medicamentos gonadotóxicos",
      "Uso de tabaco, álcool, maconha",
      "Dor, peso ou desconforto testicular (varicocele sintomática)",
      "Histórico familiar de infertilidade ou doenças genéticas"
    ],
    expectedPhysical: [
      "Caracteres sexuais secundários (hipogonadismo?)",
      "Volume testicular bilateral com orquidômetro de Prader (hipotrofia = dano testicular)",
      "Consistência testicular (amolecida = comprometimento espermatogênico)",
      "Varicocele: inspeção e palpação em repouso + manobra de Valsalva (classificação: grau I = palpável em Valsalva; grau II = palpável em repouso; grau III = visível)",
      "Epidídimo: cistos, distensão (obstrução?)",
      "Ducto deferente: presença bilateral (ausência congênita bilateral = CBAVD — associada à fibrose cística)",
      "Pênis: hipospádia (retroejaculação?)"
    ],
    expectedExams: [
      { exam: "Espermograma (parâmetros OMS 2021)", justify: "Avaliação do fator masculino — exame central", expected: "OAT: oligospermia + astenospermia + teratospermia" },
      { exam: "Testosterona total + FSH + LH", justify: "Avaliar função endócrina gonadal e eixo HPG", expected: "Normais (varicocele funcional sem hipogonadismo ativo)" },
      { exam: "USG testicular com Doppler", justify: "Confirmar varicocele, avaliar volume e ecotextura", expected: "Varicocele grau II, hipotrofia testicular esquerda" },
      { exam: "Cariótipo (se indicado)", justify: "Descartar síndrome de Klinefelter se FSH muito elevado", expected: "Normal neste caso" }
    ],
    expectedConduct: [
      "Cirúrgica — 1ª linha para varicocele clínica com alteração espermática: Varicocelectomia (abordagem subinguinal microcirúrgica é padrão-ouro) — melhora de parâmetros espermáticos em 60–70% e taxa de gravidez espontânea aumentada ⚠️ [EAU 2023; SBU considera varicocelectomia indicada em varicocele clínica + espermograma alterado + parceira fértil]",
      "Período de observação pós-cirurgia: Novo espermograma em 3–6 meses após varicocelectomia",
      "Se falha ao tratamento cirúrgico: Reprodução assistida (IIU ou FIV/ICSI)",
      "Orientações: Evitar calor escrotal (sauna, banheira quente), não usar anabolizantes, manter hábitos saudáveis, esperar 3 meses para novos espermatozoides maduros após qualquer intervenção",
      "Seguimento: Urologista/andrologista + equipe de reprodução assistida se necessário"
    ],
    expectedCommunication: [
      "Apresentação: Apresentar-se, incluir o casal se possível",
      "Comunicação do diagnóstico: Explicar que há uma dilatação de veias no testículo esquerdo que aquece o testículo e prejudica a produção de espermatozoides — condição tratável",
      "Escuta ativa: Responder à pergunta sobre possibilidade de filhos com esperança realista; não minimizar o uso prévio de anabolizante como causa contribuinte"
    ],
    criticalErrors: [
      "Não realizar exame físico andrológico e não identificar varicocele — diagnóstico perdido",
      "Não solicitar espermograma como exame central da investigação do fator masculino",
      "Encaminhar diretamente para reprodução assistida sem investigar e tratar causas corrigíveis (varicocele)",
      "Não investigar uso de anabolizantes (causa iatrogênica de infertilidade)",
      "Diagnosticar como infertilidade idiopática sem exame físico adequado"
    ]
  },

  instD: {
    title: "CHECKLIST",
    sections: [
      {
        h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Abordou o tema de infertilidade com empatia, sem julgamento sobre o uso de anabolizante", score: 0.5, ref: "CFM 2.217/2018" },
          { item: "Respondeu à pergunta sobre possibilidade de ter filhos com realismo e esperança", score: 0.5, ref: "CFM 2.217/2018" }
        ]
      },
      {
        h: "BLOCO 2 — ANAMNESE",
        items: [
          { item: "Investigou duração da tentativa de gravidez e resultado da investigação da parceira", score: 0.5, ref: "SBU — Andrologia/Infertilidade, 2022" },
          { item: "Pesquisou cirurgias prévias, criptorquidia, orquiepididimite, caxumba", score: 0.5, ref: "SBU — Andrologia/Infertilidade, 2022" },
          { item: "Perguntou especificamente sobre uso de anabolizantes e drogas gonadotóxicas", score: 1.0, ref: "SBU — Andrologia/Infertilidade, 2022" },
          { item: "Investigou exposições ocupacionais e hábitos (calor, tabaco, álcool)", score: 0.5, ref: "SBU — Andrologia/Infertilidade, 2022" }
        ]
      },
      {
        h: "BLOCO 3 — EXAME FÍSICO",
        items: [
          { item: "Avaliou volume e consistência testicular bilateral", score: 0.5, ref: "SBU — Andrologia/Infertilidade, 2022" },
          { item: "Pesquisou varicocele com manobra de Valsalva e classificou o grau", score: 1.0, ref: "SBU — Andrologia/Infertilidade, 2022" },
          { item: "Verificou presença e continuidade do ducto deferente bilateral", score: 0.5, ref: "SBU — Andrologia/Infertilidade, 2022" }
        ]
      },
      {
        h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Solicitou espermograma como exame central da investigação do fator masculino", score: 1.0, ref: "SBU — Andrologia/Infertilidade, 2022; OMS 2021" },
          { item: "Solicitou testosterona, FSH e LH para avaliação hormonal", score: 0.5, ref: "SBU — Andrologia/Infertilidade, 2022" },
          { item: "Interpretou espermograma corretamente (OAT) e associou à varicocele", score: 0.5, ref: "SBU — Andrologia/Infertilidade, 2022" }
        ]
      },
      {
        h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Indicou varicocelectomia microcirúrgica como tratamento de 1ª linha", score: 1.0, ref: "SBU — Andrologia/Infertilidade, 2022" },
          { item: "Orientou sobre evitar calor escrotal, tabaco e anabolizantes", score: 0.5, ref: "SBU — Andrologia/Infertilidade, 2022" },
          { item: "Explicou o processo de 3 meses para novos espermatozoides e reavaliação pós-cirurgia", score: 0.5, ref: "SBU — Andrologia/Infertilidade, 2022" }
        ]
      }
    ]
  }
},
{
  id: 12,
  title: "Mulher com paraplegia que não consegue urinar de forma voluntária",
  sub: "Ambulatório — Reabilitação / Urologia",
  tema: "Urologia",
  topic: "Bexiga neurogênica",
  level: "moderado",
  cardAccent: "#37474F",

  instA: {
    scenario: "Ambulatório de reabilitação/urologia. Consultório, turno diurno.",
    patient: "R.P., 38 anos, feminino, fisioterapeuta, paraplégica após acidente de trânsito há 1 ano.",
    complaint: "Dificuldade para esvaziar a bexiga de forma voluntária, episódios de escape de urina e infecções urinárias frequentes desde o acidente.",
    tasks: [
      "Realize a anamnese dirigida ao caso, incluindo histórico neurológico e urológico",
      "Realize o exame físico pertinente, incluindo avaliação neurológica pélvica",
      "Solicite e interprete os exames complementares adequados",
      "Formule a hipótese diagnóstica com classificação da bexiga neurogênica",
      "Proponha a conduta e oriente a paciente sobre o manejo da bexiga neurogênica"
    ]
  },

  instB: {
    vitals: { PA: "118/74 mmHg", FC: "72 bpm", FR: "16 irpm", Tax: "37,1°C", Peso: "62 kg", Altura: "1,64 m", IMC: "23,0 kg/m²" },
    physicalGeneral: "Paciente em bom estado geral, lúcida, orientada, em cadeira de rodas. Pele e mucosas normocoradas. Sem sinais de desidratação. Ausência de movimentação voluntária de membros inferiores.",
    physicalSeg: [
      "NEUROLÓGICO — MEMBROS INFERIORES: Paraplegia espástica abaixo de T12. Ausência de sensibilidade no dermátomo S2-S4 (períneo, genitália). Reflexo bulbocavernoso presente (reflexo sacral intacto — lesão acima do centro medular sacral). Tônus anal aumentado ao toque retal.",
      "ABDOMINAL/PÉLVICO: Globo vesical palpável em hipogástrio, bexiga percutível acima da sínfise púbica. Sem dor à palpação abdominal (ausência de sensibilidade visceral).",
      "GENITÁLIA FEMININA: Sem alterações externas."
    ],
    labs: [
      { test: "Urina tipo I (EAS)", val: "Leucocitúria 3+, nitrito positivo, hematúria microscópica 1+", ref: "Negativo", alt: true },
      { test: "Urocultura", val: "Escherichia coli 10⁵ UFC/mL — sensível a nitrofurantoína e SMX-TMP", ref: "Negativo", alt: true },
      { test: "Creatinina", val: "1,3 mg/dL", ref: "0,5–1,1 mg/dL (feminino)", alt: true },
      { test: "Ureia", val: "36 mg/dL", ref: "15–45 mg/dL", alt: false },
      { test: "Resíduo pós-miccional (RPM) por cateterismo", val: "380 mL", ref: "< 50 mL", alt: true }
    ],
    image: "Ultrassonografia renal bilateral (se solicitada): Rim direito com pelve renal dilatada (grau I). Rim esquerdo normal. Bexiga com parede espessada (> 5 mm) e capacidade reduzida (estimada 200 mL). Conclusão: Hidronefrose leve à direita — provável uropatia obstrutiva por bexiga hiperrefléxica com dissinergia detrusor-esfincteriana. Avaliação urodinâmica recomendada.",
    note: "Entregar sinais vitais no início. EAS e urocultura como impressos disponíveis. Creatinina e ureia entregar se solicitados. RPM por cateterismo entregar somente se candidato indicar avaliação do resíduo pós-miccional. USG renal somente se solicitada. Candidato que indica cateterismo intermitente limpo (CIL) como tratamento principal deve ser pontuado como item essencial.",
    patientProfile: "Roberta P., 38 anos, feminino, fisioterapeuta (atualmente afastada), solteira, mora com os pais. Lesão medular traumática (acidente de moto) há 1 ano, nível T12 ASIA A (lesão completa). Em programa de reabilitação motora. Boa adesão ao tratamento de reabilitação motora, mas com dificuldades no manejo urológico.",
    script: [
      { trigger: "Queixa principal", speech: "Doutor/a, desde o acidente não consigo urinar normalmente. Às vezes faço xixi sozinha e às vezes vaza sem eu querer. E já tive 4 infecções urinárias esse ano." },
      { trigger: "Sobre o acidente e a lesão", speech: "Foi um acidente de moto há um ano. Fiquei paraplégica. Não sinto nem mexo as pernas." },
      { trigger: "Sobre como urina atualmente", speech: "Às vezes aperto a barriga e sai um pouco. Outras vezes vaza do nada. Às vezes não sai nada e fico com a barriga dura." },
      { trigger: "Sobre as ITUs", speech: "Já tomei antibiótico 4 vezes esse ano. Toda vez que tenho infecção fico com febre e mal-estar." },
      { trigger: "Sobre cateterismo", speech: "Me falaram de sonda, mas tenho medo e vergonha de usar. Não sei se vou conseguir." },
      { trigger: "Sobre dor", speech: "Não sinto dor na barriga mesmo quando a bexiga enche muito. Não sinto quase nada na região do períneo." },
      { trigger: "Sobre os rins", speech: "Alguém me disse que a bexiga pode machucar os rins. Isso é verdade?" },
      { trigger: "Pergunta ativa", speech: "Tem jeito de melhorar isso? Vou ter que usar sonda para sempre?" },
      { trigger: "Pergunta ativa", speech: "E se eu não fizer esse tratamento, o que pode acontecer?" }
    ],
    hiddenInfo: [
      "Tentou realizar cateterismo em casa mas desistiu por dificuldade técnica e vergonha: só revelar se perguntado especificamente sobre tentativas anteriores de cateterismo ou o que já foi orientado sobre o manejo da bexiga",
      "Hidronefrose leve diagnosticada em USG realizado recentemente em outro serviço: só revelar se perguntado sobre exames de imagem recentes ou avaliação renal prévia"
    ],
    actorBehavior: "Paciente inteligente, com conhecimento de saúde (fisioterapeuta), mas emocionalmente fragilizada com as limitações pós-lesão. Demonstra relutância em relação ao cateterismo (vergonha, medo de dor, impacto na autoestima). Fica muito preocupada quando se fala em risco renal. Responde muito bem à explicação detalhada e à abordagem de autonomia no tratamento."
  },

  instC: {
    diagnosis: "Bexiga neurogênica hiperrefléxica (espástica) com dissinergia detrusor-esfincteriana em paciente com lesão medular completa T12-ASIA A, com ITU de repetição, hidronefrose leve à direita e resíduo pós-miccional elevado (380 mL). Risco de lesão renal por pressão vesical elevada.",
    differentials: [
      "Bexiga neurogênica flácida (lesão de neurônio motor inferior — abaixo de S2-S4) — inclusão: bexiga sem controle voluntário; exclusão: reflexo bulbocavernoso presente e tônus anal aumentado indicam lesão acima do centro sacral (neurônio motor superior = bexiga hiperrefléxica)",
      "ITU alta (pielonefrite) — inclusão: urocultura positiva + hidronefrose; exclusão: hidronefrose é crônica e não aguda, sem febre atual, causa da hidronefrose é obstrutiva (uropatia neurogênica)",
      "Estenose uretral — inclusão: resíduo elevado + dificuldade miccional; exclusão: causa primária é neurológica, contexto clínico inequívoco"
    ],
    context: "Paciente jovem com lesão medular T12 completa e bexiga neurogênica hiperrefléxica, cursando com dissinergia detrusor-esfincteriana, ITUs de repetição, hidronefrose leve e RPM >300 mL. A pressão vesical elevada e o RPM elevado representam risco significativo de comprometimento da função renal a longo prazo — manejo urológico adequado é essencial para preservação renal.",
    justify: "Lesão medular acima de S2-S4 (T12) = lesão de neurônio motor superior = bexiga hiperrefléxica + dissinergia detrusor-esfincteriana (contração simultânea de detrusor e esfíncter externo = esvaziamento incompleto + pressão alta). O reflexo bulbocavernoso presente confirma arco reflexo sacral intacto. A ausência de sensibilidade perineal explica a ausência de dor com bexiga distendida. O RPM de 380 mL + hidronefrose leve direita indicam risco para lesão renal crônica.",
    expectedAnamnesis: [
      "Nível e completude da lesão medular (ASIA)",
      "Tempo desde a lesão",
      "Padrão miccional atual: como esvazia a bexiga, frequência, escape, urgência",
      "ITUs: número, tratamentos, hospitalizações, agentes causadores",
      "Manobras utilizadas: Credé, Valsalva, cateterismo (técnica, frequência, complicações)",
      "Sintomas de disreflexia autonômica (hipertensão abrupta, cefaleia, sudorese — emergência em lesões acima de T6)",
      "Avaliação de função renal prévia (creatinina, USG)",
      "Medicamentos: anticolinérgicos em uso? Botox intravesical prévio?",
      "Impacto na qualidade de vida e autonomia"
    ],
    expectedPhysical: [
      "Inspeção: globo vesical visível/palpável",
      "Palpação e percussão suprapúbica: bexiga distendida",
      "Avaliação neurológica pélvica: sensibilidade S2-S4 (dermatoma perineal), reflexo bulbocavernoso (arco sacral), tônus do esfíncter anal (tônus do esfíncter uretral indireto)",
      "Avaliação de pressão arterial (disreflexia autonômica em T6 e acima)"
    ],
    expectedExams: [
      { exam: "EAS + urocultura", justify: "Diagnóstico e tratamento de ITU ativa", expected: "ITU por E. coli" },
      { exam: "Creatinina e ureia", justify: "Função renal basal (risco de lesão por hiperpressão)", expected: "Creatinina levemente elevada" },
      { exam: "Resíduo pós-miccional (RPM)", justify: "Avaliar esvaziamento vesical — RPM >100 mL é significativo", expected: "380 mL (muito elevado)" },
      { exam: "USG renal bilateral", justify: "Avaliar hidronefrose (uropatia obstrutiva)", expected: "Hidronefrose leve D" },
      { exam: "Estudo urodinâmico", justify: "Padrão-ouro para classificação funcional da bexiga neurogênica", expected: "Bexiga hiperrefléxica + dissinergia" }
    ],
    expectedConduct: [
      "1ª linha — Cateterismo Intermitente Limpo (CIL): Técnica padrão-ouro para esvaziamento vesical em bexiga neurogênica — 4 a 6x/dia, volume máximo de 400 mL por cateterismo. Reduz ITUs, protege os rins, melhora qualidade de vida",
      "Farmacológica: Anticolinérgicos (oxibutinina 5mg 2-3x/dia ou solifenacina 5–10mg/dia) para controlar hiperatividade do detrusor + CIL. Ou toxina botulínica intravesical se refratária",
      "ITU atual: Tratar conforme antibiograma — nitrofurantoína 100mg 2x/dia por 5 dias (infecção baixa, E. coli sensível)",
      "Seguimento renal: Monitorização da função renal a cada 3–6 meses; USG renal semestral",
      "Encaminhamento: Urologista para estudo urodinâmico e seguimento especializado",
      "Orientações: Explicar o risco renal de bexiga hiperpressora; ensinar CIL (autonomia da paciente); ingestão hídrica >2L/dia; higiene do cateterismo; sinais de ITU"
    ],
    expectedCommunication: [
      "Apresentação: Apresentar-se, reconhecer a complexidade da situação",
      "Comunicação do diagnóstico: Explicar que a bexiga não se comunica mais bem com o cérebro e que o tratamento com cateterismo é essencial para proteger os rins",
      "Escuta ativa: Abordar a relutância ao cateterismo com empatia, explicar que muitos pacientes aprendem e ganham autonomia, não minimizar o impacto na autoestima"
    ],
    criticalErrors: [
      "Não avaliar resíduo pós-miccional — fundamental para diagnóstico e conduta",
      "Não indicar cateterismo intermitente limpo (CIL) — tratamento padrão-ouro, sua omissão representa falha grave",
      "Prescrever apenas antibiótico para ITU sem tratar a causa base (esvaziamento inadequado)",
      "Não investigar comprometimento renal (função renal, hidronefrose) em paciente com bexiga neurogênica",
      "Não realizar avaliação neurológica pélvica (reflexo bulbocavernoso, sensibilidade S2-S4) — essencial para classificação da bexiga neurogênica"
    ]
  },

  instD: {
    title: "CHECKLIST",
    sections: [
      {
        h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Apresentou-se e reconheceu a complexidade clínica e emocional da situação da paciente", score: 0.5, ref: "CFM 2.217/2018" },
          { item: "Abordou a relutância ao cateterismo com empatia e explicou o conceito de autonomia no tratamento", score: 0.5, ref: "CFM 2.217/2018; MS — Reabilitação, 2022" }
        ]
      },
      {
        h: "BLOCO 2 — ANAMNESE",
        items: [
          { item: "Investigou nível e completude da lesão medular e tempo desde a lesão", score: 0.5, ref: "SBU — Bexiga Neurogênica, 2022" },
          { item: "Caracterizou o padrão miccional atual (forma de esvaziar, escape, urgência)", score: 0.5, ref: "SBU — Bexiga Neurogênica, 2022" },
          { item: "Pesquisou número e frequência de ITUs e tratamentos realizados", score: 0.5, ref: "SBU — Bexiga Neurogênica, 2022" },
          { item: "Perguntou sobre uso de técnicas de esvaziamento vesical (CIL, Credé, Valsalva)", score: 0.5, ref: "SBU — Bexiga Neurogênica, 2022" }
        ]
      },
      {
        h: "BLOCO 3 — EXAME FÍSICO",
        items: [
          { item: "Palpou o hipogástrio e identificou globo vesical", score: 0.5, ref: "SBU — Bexiga Neurogênica, 2022" },
          { item: "Pesquisou reflexo bulbocavernoso e sensibilidade S2-S4 (avaliação do arco sacral)", score: 1.0, ref: "SBU — Bexiga Neurogênica, 2022" },
          { item: "Avaliou tônus do esfíncter anal (correlato indireto do esfíncter uretral)", score: 0.5, ref: "SBU — Bexiga Neurogênica, 2022" }
        ]
      },
      {
        h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Classificou como bexiga neurogênica hiperrefléxica (lesão de neurônio motor superior, acima de S2)", score: 1.0, ref: "SBU — Bexiga Neurogênica, 2022" },
          { item: "Indicou medição de resíduo pós-miccional como parte da investigação", score: 0.5, ref: "SBU — Bexiga Neurogênica, 2022" },
          { item: "Solicitou USG renal para avaliar hidronefrose e creatinina para função renal", score: 0.5, ref: "SBU — Bexiga Neurogênica, 2022" }
        ]
      },
      {
        h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Indicou cateterismo intermitente limpo (CIL) como tratamento padrão-ouro", score: 1.0, ref: "SBU — Bexiga Neurogênica, 2022; MS 2013" },
          { item: "Prescreveu anticolinérgico para controle da hiperatividade do detrusor", score: 0.5, ref: "SBU — Bexiga Neurogênica, 2022; RENAME 2022" },
          { item: "Tratou ITU atual com antibiótico adequado conforme antibiograma", score: 0.3, ref: "MS — PCDT ITU, 2021" },
          { item: "Orientou sobre risco renal e necessidade de monitoramento seriado da função renal", score: 0.5, ref: "SBU — Bexiga Neurogênica, 2022" }
        ]
      }
    ]
  }
},
{
  id: 13,
  title: "Mulher de 62 anos com perda involuntária de urina ao tossir e se exercitar",
  sub: "Ambulatório — Atenção Primária / Ginecologia-Urologia",
  tema: "Urologia",
  topic: "Incontinência urinária",
  level: "moderado",
  cardAccent: "#880E4F",

  instA: {
    scenario: "Ambulatório de atenção primária. Consultório, turno diurno.",
    patient: "D.A., 62 anos, feminino, aposentada, pós-menopausa, multípara.",
    complaint: "Perde urina ao tossir, espirrar e se exercitar há cerca de 2 anos. Está envergonhada e evitando sair de casa.",
    tasks: [
      "Realize a anamnese dirigida ao caso, incluindo impacto na qualidade de vida",
      "Realize o exame físico pertinente, incluindo avaliação do assoalho pélvico",
      "Solicite e interprete os exames complementares adequados",
      "Classifique o tipo de incontinência urinária e formule o diagnóstico",
      "Proponha a conduta e oriente a paciente"
    ]
  },

  instB: {
    vitals: { PA: "132/82 mmHg", FC: "72 bpm", FR: "16 irpm", Tax: "36,5°C", Peso: "72 kg", Altura: "1,58 m", IMC: "28,9 kg/m²" },
    physicalGeneral: "Paciente em bom estado geral, lúcida, orientada, levemente envergonhada. Pele e mucosas normocoradas, hidratadas. Sobrepeso. Sem edema.",
    physicalSeg: [
      "ABDOMINAL: Adiposidade central, flácido, sem massas, sem globo vesical.",
      "GINECOLÓGICO (exame pélvico): Introito vaginal com mucosa atrófica. Parede anterior da vagina com cistocele grau II (prolapso vesical até o introito). Sem retocele ou prolapso uterino. Manobra de Valsalva (tosse forçada com espéculo em posição): gotejamento de urina visível ao realizar manobra de tosse (teste da tosse positivo = Stress Test positivo). Teste do absorvente (Pad Test): candidato deve indicar o exame — não realizado nesta estação. Tônus do assoalho pélvico reduzido ao toque vaginal.",
      "NEUROLÓGICO: Reflexos dos membros inferiores normais. Sensibilidade perineal preservada."
    ],
    labs: [
      { test: "Urina tipo I (EAS)", val: "Sem leucocitúria, sem hematúria, sem glucosúria", ref: "Normal", alt: false },
      { test: "Glicemia de jejum", val: "98 mg/dL", ref: "70–99 mg/dL", alt: false },
      { test: "Creatinina", val: "0,8 mg/dL", ref: "0,5–1,1 mg/dL", alt: false },
      { test: "Resíduo pós-miccional (RPM)", val: "35 mL", ref: "< 50 mL", alt: false }
    ],
    image: "image: null",
    note: "Entregar sinais vitais no início. EAS como impresso disponível. Demais laboratoriais somente se solicitados. Exame ginecológico: avaliador descreve os achados quando candidato solicita e descreve adequadamente o exame pélvico. Manobra de tosse (stress test): avaliador informa ao realizar tosse forçada, observou-se perda de urina em jato pequeno. RPM somente se candidato indicar cateterismo ou solicitar ultrassom com RPM.",
    patientProfile: "Dalva A., 62 anos, feminino, aposentada (ex-professora), viúva, 3 filhos (todos partos normais, o maior RN pesou 4.100g). Pós-menopausa há 10 anos. Sem terapia hormonal. Hipertensa. Sedentária. IMC 28,9.",
    script: [
      { trigger: "Queixa principal", speech: "Doutora/Doutor, tô muito envergonhada de falar isso, mas há uns 2 anos perco urina quando tusso, espirro ou faço algum esforço. Já parei de fazer caminhada e de sair com as amigas com medo de acontecer na rua." },
      { trigger: "Sobre frequência e volume", speech: "Acontece várias vezes por dia. É pouco, mas suficiente pra molhar a calcinha. Uso absorvente todo dia." },
      { trigger: "Sobre urgência miccional", speech: "Às vezes também dá uma vontade muito forte de urinar e não consigo segurar. Mas o principal é quando faço força." },
      { trigger: "Sobre os partos", speech: "Tive 3 filhos normais. O último foi enorme, quase 4 quilos e meio. Precisou de episiotomia nos três." },
      { trigger: "Sobre menopausa e TH", speech: "Não tomo hormônio não. Parei de menstruar há 10 anos." },
      { trigger: "Sobre limitações", speech: "Parei de fazer exercício, evito sair de casa, fico ansiosa quando não sei onde tem banheiro perto." },
      { trigger: "Sobre tratamentos anteriores", speech: "Nunca fiz nada. Tinha vergonha de contar pro médico. Achei que era normal da idade." },
      { trigger: "Pergunta ativa", speech: "Isso tem cura, doutora? Ou vou ter que conviver com isso?" },
      { trigger: "Pergunta ativa", speech: "Vai precisar de cirurgia?" }
    ],
    hiddenInfo: [
      "Urgência miccional associada (componente misto): só revelar se perguntado especificamente sobre urgência ou vontade súbita de urinar além do esforço",
      "Uso diário de absorvente há 1 ano: só revelar se perguntado especificamente sobre estratégias para lidar com a perda ou uso de proteção íntima"
    ],
    actorBehavior: "Envergonhada no início, mas muito aliviada quando percebe que o médico aborda o assunto com naturalidade. Demonstra alívio ao saber que tem tratamento. Preocupada com cirurgia (outra vizinha fez e não ficou boa). Muito motivada quando lhe explicam sobre fisioterapia do assoalho pélvico. Aberta e cooperativa após abordagem empática."
  },

  instC: {
    diagnosis: "Incontinência urinária mista — predomínio de IU de esforço (stress) com componente de urgência associado. Fatores contribuintes: hipoestrogenismo pós-menopausa (atrofia urogenital), cistocele grau II, multiparidade com partos normais traumáticos, sobrepeso.",
    differentials: [
      "IU de urgência pura (bexiga hiperativa) — inclusão: episódios de urgência referidos; exclusão: predomínio dos episódios aos esforços (tosse, exercício), teste da tosse positivo, sem urgência como queixa predominante",
      "IU de esforço pura — inclusão: perda ao esforço, teste da tosse positivo; exclusão: componente de urgência referido sugere IU mista",
      "Fístula vesicovaginal — inclusão: perda urinária em mulher; exclusão: sem cirurgias pélvicas prévias, perda relacionada ao esforço, não contínua"
    ],
    context: "Mulher de 62 anos, pós-menopáusica, multípara com partos traumáticos, sobrepeso, com IU mista com predomínio de esforço, cistocele grau II e atrofia urogenital por hipoestrogenismo. Importante impacto na qualidade de vida com isolamento social. Caso com várias intervenções não cirúrgicas eficazes disponíveis antes de considerar cirurgia.",
    justify: "IU de esforço: perda sincronizada ao aumento da pressão intra-abdominal (tosse, espirro, esforço) com teste da tosse positivo, cistocele grau II (hipermobilidade uretral por enfraquecimento do assoalho pélvico), fatores de risco clássicos (multiparidade, menopausa, sobrepeso). Componente de urgência sugere IU mista — comum em mulheres pós-menopáusicas. RPM normal afasta bexiga hipoativa obstrutiva.",
    expectedAnamnesis: [
      "Tipo de perda: ao esforço (IU de esforço) vs. urgência (IU de urgência) vs. contínua (fístula)",
      "Frequência, volume e impacto na qualidade de vida",
      "Uso de proteção (absorvente)",
      "Histórico obstétrico: paridade, tipo de parto, peso dos RNs, uso de fórceps, lacerações",
      "Menopausa e uso de terapia hormonal (atrofia urogenital)",
      "IMC e sobrepeso (fator de risco)",
      "Medicamentos: diuréticos, anticolinérgicos, alfa-bloqueadores",
      "Constipação intestinal (disfunção do assoalho pélvico)",
      "Cirurgias pélvicas prévias",
      "Sintomas de prolapso genital (sensação de algo saindo pela vagina)",
      "Avaliação de urgência miccional concomitante"
    ],
    expectedPhysical: [
      "Inspeção genital: atrofia vaginal, prolapso (cistocele, retocele, histerocele)",
      "Teste da tosse (Stress Test): perda visível de urina à tosse forçada = IU de esforço",
      "Tônus do assoalho pélvico: avaliação digital (escala de Oxford, 0–5)",
      "Palpação abdominal: globo vesical ausente, massas",
      "Avaliação neurológica perineal básica: sensibilidade, reflexos"
    ],
    expectedExams: [
      { exam: "EAS", justify: "Afastar ITU como causa de urgência", expected: "Normal" },
      { exam: "Resíduo pós-miccional (RPM)", justify: "Descartar bexiga hipoativa ou obstrução", expected: "Normal (< 50 mL)" },
      { exam: "Diário miccional", justify: "Padrão de micções, episódios de perda, urgência", expected: "Ferramenta diagnóstica e de monitoramento" },
      { exam: "Estudo urodinâmico", justify: "Padrão-ouro para diagnóstico diferencial de tipos de IU", expected: "Considerar antes de cirurgia" },
      { exam: "Pad Test (teste do absorvente)", justify: "Quantificar volume da perda", expected: "> 1g em 1h = positivo" }
    ],
    expectedConduct: [
      "1ª linha — não cirúrgico:",
      "Fisioterapia do assoalho pélvico (exercícios de Kegel supervisionados por fisioterapeuta) — evidência nível A para IU de esforço; melhora em 50–70% ⚠️ [NICE 2019 + CFM/SBU: recomendação brasileira alinhada]",
      "Perda de peso (IMC reduzir para < 25) — reduz pressão intra-abdominal",
      "Estrogenioterapia tópica vaginal (creme de estriol) para atrofia urogenital — melhora trofismo do assoalho pélvico",
      "Micções programadas / biofeedback",
      "2ª linha (se falha ao tratamento conservador):",
      "IU de urgência resistente: anticolinérgicos (oxibutinina, solifenacina) ou mirabegrom",
      "IU de esforço resistente: cirurgia — sling suburetral (TVT ou TOT) — alta taxa de sucesso (80–90%) ⚠️ [EAU 2023; SBU]",
      "Orientações: Explicar que IU tem tratamento eficaz; fisioterapia como 1ª escolha antes de cirurgia; redução de peso; evitar cafeína e álcool",
      "Seguimento: Retorno em 6–8 semanas para avaliação da resposta ao tratamento conservador"
    ],
    expectedCommunication: [
      "Apresentação: Apresentar-se, normalizar a queixa (condição muito comum, afeta 1 em cada 3 mulheres após os 50 anos)",
      "Comunicação do diagnóstico: Explicar que é fraqueza dos músculos que sustentam a bexiga — tem tratamento eficaz, especialmente fisioterapia",
      "Escuta ativa: Validar o impacto na qualidade de vida, acolher o medo da cirurgia, explicar que cirurgia não é a primeira opção"
    ],
    criticalErrors: [
      "Não realizar o teste da tosse (Stress Test) — exame essencial para diagnóstico de IU de esforço",
      "Indicar cirurgia como primeira opção sem tentativa de tratamento conservador (fisioterapia do assoalho pélvico)",
      "Não investigar componente de urgência (IU mista) — impacta na escolha do tratamento farmacológico",
      "Tranquilizar a paciente dizendo que é normal da idade e não oferecer tratamento",
      "Não avaliar RPM — essencial para afastar bexiga hipoativa antes de iniciar anticolinérgicos"
    ]
  },

  instD: {
    title: "CHECKLIST",
    sections: [
      {
        h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Normalizou a queixa, informando que incontinência urinária é condição comum e tratável", score: 0.5, ref: "CFM 2.217/2018; SBU — IU, 2022" },
          { item: "Perguntou sobre impacto da IU na qualidade de vida (isolamento, vergonha, limitações)", score: 0.5, ref: "SBU — IU, 2022; CFM 2.217/2018" },
          { item: "Respondeu ao medo da cirurgia explicando que não é a primeira opção", score: 0.3, ref: "CFM 2.217/2018" }
        ]
      },
      {
        h: "BLOCO 2 — ANAMNESE",
        items: [
          { item: "Diferenciou o tipo de perda (ao esforço vs. urgência vs. mista) com perguntas específicas", score: 1.0, ref: "SBU — IU, 2022" },
          { item: "Investigou histórico obstétrico (paridade, tipo de parto, peso dos RNs)", score: 0.5, ref: "SBU — IU, 2022" },
          { item: "Pesquisou menopausa e uso de terapia hormonal", score: 0.5, ref: "SBU — IU, 2022" },
          { item: "Questionou uso de protetores/absorventes e impacto na rotina social", score: 0.3, ref: "SBU — IU, 2022" }
        ]
      },
      {
        h: "BLOCO 3 — EXAME FÍSICO",
        items: [
          { item: "Realizou exame pélvico com avaliação do assoalho pélvico (tônus) e identificou cistocele", score: 1.0, ref: "SBU — IU, 2022; FEBRASGO, 2021" },
          { item: "Realizou e interpretou o teste da tosse (Stress Test) — perda visível ao esforço", score: 1.0, ref: "SBU — IU, 2022" },
          { item: "Avaliou atrofia vaginal (hipoestrogenismo)", score: 0.3, ref: "SBU — IU, 2022" }
        ]
      },
      {
        h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Classificou como IU mista com predomínio de esforço", score: 0.5, ref: "SBU — IU, 2022" },
          { item: "Solicitou EAS para afastar ITU e RPM para afastar bexiga hipoativa", score: 0.5, ref: "SBU — IU, 2022" }
        ]
      },
      {
        h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Indicou fisioterapia do assoalho pélvico (exercícios de Kegel) como tratamento de 1ª linha", score: 1.0, ref: "SBU / NICE — IU, 2022" },
          { item: "Orientou sobre perda de peso como medida adjuvante", score: 0.3, ref: "SBU — IU, 2022" },
          { item: "Indicou estrogenioterapia tópica vaginal para atrofia urogenital", score: 0.5, ref: "SBU — IU, 2022; FEBRASGO, 2021" },
          { item: "Não indicou cirurgia como primeira opção", score: 0.5, ref: "SBU — IU, 2022" }
        ]
      }
    ]
  }
},
{
  id: 14,
  title: "Trauma por acidente de moto com suspeita de lesão uretral",
  sub: "UPA — Urgência e Emergência",
  tema: "Urologia",
  topic: "Trauma urogenital",
  level: "moderado",
  cardAccent: "#F57F17",

  instA: {
    scenario: "UPA — Urgência e Emergência. Sala de trauma, turno noturno. Paciente chega trazido pelo SAMU após acidente de motocicleta.",
    patient: "E.V., 27 anos, masculino, motoboy, sem comorbidades.",
    complaint: "Trauma pélvico em acidente de moto. Queixa de dor pélvica intensa, sangue na uretra e incapacidade de urinar.",
    tasks: [
      "Realize a anamnese dirigida ao trauma, incluindo mecanismo e sintomas urológicos",
      "Realize o exame físico pertinente, incluindo avaliação pélvica e genital",
      "Formule a hipótese diagnóstica e os diagnósticos diferenciais",
      "Solicite os exames complementares adequados e interprete os resultados",
      "Proponha a conduta correta e oriente a equipe sobre os próximos passos"
    ]
  },

  instB: {
    vitals: { PA: "98/62 mmHg", FC: "118 bpm", FR: "22 irpm", Tax: "36,8°C", Peso: "72 kg", Altura: "1,74 m", IMC: "23,8 kg/m²" },
    physicalGeneral: "Paciente em regular estado geral, agitado, com dor pélvica intensa. Consciente e orientado. Pele e mucosas levemente descoradas (+/4+). Sinais de instabilidade hemodinâmica leve (hipotensão + taquicardia).",
    physicalSeg: [
      "PELVE: Dor à compressão do anel pélvico. Instabilidade pélvica à compressão lateral. Hematoma perineal e escrotal (sinal de Destot). Equimose em asa de borboleta no períneo.",
      "GENITÁLIA: Uretra com sangramento uretral externo visível (uretrorragia). Pênis sem hematoma na haste. Escroto com hematoma leve.",
      "ABDOME: Hipogástrio doloroso, sem defesa/peritonismo. Sem globo vesical palpável.",
      "MMII: Mobilidade preservada bilateralmente. Sem déficit neurológico aparente."
    ],
    labs: [
      { test: "Hemograma", val: "Hemoglobina 10,2 g/dL", ref: "13,5–17,5 g/dL", alt: true },
      { test: "Hematócrito", val: "30%", ref: "41–53%", alt: true },
      { test: "Creatinina", val: "1,0 mg/dL", ref: "0,7–1,2 mg/dL", alt: false },
      { test: "Tipagem sanguínea", val: "O positivo", ref: "—", alt: false }
    ],
    image: "Raio X de pelve (se solicitado): Fratura do ramo isquiopúbico direito e fratura da sínfise púbica — padrão de fratura pélvica do tipo livro aberto (open book). Sem luxação de quadril. Uretrocistografia retrógrada (se solicitada): Extravasamento de contraste na uretra membranosa — confirmação de rotura uretral posterior parcial.",
    note: "Entregar sinais vitais e exame físico imediatamente (paciente pós-trauma). Hemograma e tipagem entregues ao início. Raio X de pelve somente se solicitado. CRÍTICO: candidato NÃO deve tentar cateterismo vesical de sonda sem antes realizar uretrocistografia — contraindicado na suspeita de lesão uretral (risco de completar rotura parcial). Pontuar negativamente se candidato tentar cateterizar sem investigação. Uretrocistografia deve ser solicitada antes do cateterismo.",
    patientProfile: "Eduardo V., 27 anos, masculino, motoboy, solteiro. Sem comorbidades. Sem cirurgias prévias. Acidente a ~60 km/h com colisão frontal. Usava capacete. Trazido pelo SAMU com colar cervical.",
    script: [
      { trigger: "Queixa principal", speech: "Doutor, eu bati a moto… tô com muita dor aqui embaixo, na virilha. Tá saindo sangue… acho que é sangue na uretra." },
      { trigger: "Sobre o mecanismo do acidente", speech: "Colidi de frente com um carro que invadiu minha faixa. Bati a pelve no tanque da moto." },
      { trigger: "Sobre a urina", speech: "Tentei fazer xixi depois do acidente, não saiu nada. Dói muito tentar." },
      { trigger: "Sobre dor pélvica", speech: "A dor é aqui na parte de baixo, na virilha dos dois lados. Dói muito quando mexo." },
      { trigger: "Sobre outras lesões", speech: "A cabeça tá bem, tinha capacete. O joelho direito bateu um pouco mas não parece quebrado." },
      { trigger: "Sobre sensibilidade das pernas", speech: "Sinto as pernas, consigo mexer. Mas tá doendo o quadril." },
      { trigger: "Pergunta ativa", speech: "Doutor, por que tá saindo sangue ali? É grave?" },
      { trigger: "Pergunta ativa", speech: "Vou conseguir urinar? Vai precisar de cirurgia?" }
    ],
    hiddenInfo: [
      "Incapacidade total de urinar desde o acidente (há 2 horas): só revelar se perguntado especificamente sobre tentativas de urinar e quando urinou pela última vez",
      "Sensação de algo solto na bacia ao movimentar: só revelar se perguntado sobre sensação de instabilidade ou crepitação pélvica"
    ],
    actorBehavior: "Paciente agitado por dor, com medo. Cooperativo quando solicitado a responder perguntas mas com dificuldade de manter posição para exame por causa da dor. Fica muito ansioso quando se fala em sonda ou cirurgia."
  },

  instC: {
    diagnosis: "Trauma urogenital com rotura uretral posterior parcial (uretra membranosa) associada a fratura pélvica do tipo livro aberto (open book). Instabilidade hemodinâmica leve por sangramento pélvico. Retenção urinária aguda por rotura uretral.",
    differentials: [
      "Rotura vesical intraperitoneal — inclusão: trauma pélvico, retenção/incapacidade de urinar; exclusão: uretrorragia externa visível indica lesão uretral; na rotura vesical intraperitoneal, o paciente geralmente consegue tentar urinar (sem obstrução)",
      "Rotura uretral anterior (bulbar) — inclusão: sangramento uretral pós-trauma; exclusão: fratura pélvica + lesão da uretra membranosa indica lesão posterior; lesão anterior tipicamente por queda em cavalete (straddle injury), sem fratura pélvica",
      "Contusão renal com hematúria — inclusão: trauma + sangramento urinário; exclusão: sangramento é uretral (externo, antes da micção), não hematúria; mecanismo pélvico"
    ],
    context: "Jovem de 27 anos com trauma pélvico de alta energia, fratura pélvica tipo open book, rotura uretral posterior parcial e instabilidade hemodinâmica. A uretrorragia + incapacidade de urinar + fratura pélvica formam a tríade clínica clássica de lesão uretral posterior. Requer estabilização hemodinâmica, uretrocistografia retrógrada antes de qualquer tentativa de cateterismo e definição de tratamento urológico.",
    justify: "Tríade diagnóstica de lesão uretral: (1) uretrorragia, (2) retenção urinária/incapacidade de urinar, (3) fratura pélvica. A equimose perineal em asa de borboleta e o hematoma escrotal (sinal de Destot) são achados clássicos de fratura pélvica com lesão uretral. A uretrocistografia confirma extravasamento de contraste na uretra membranosa. Cateterismo uretral está contraindicado sem realização prévia de uretrocistografia — pode converter rotura parcial em rotura completa.",
    expectedAnamnesis: [
      "Mecanismo do trauma (alta energia, direção do impacto)",
      "Uso de capacete e cinto de segurança",
      "Tentativa de urinar após o acidente (sucesso/insucesso)",
      "Uretrorragia (sangue pela uretra antes de urinar)",
      "Dor pélvica (localização, intensidade)",
      "Sensibilidade e mobilidade dos membros inferiores (lesão medular?)",
      "Perda de consciência (TCE?)",
      "Alergias e medicamentos (preparo para cirurgia)",
      "Comorbidades, tipagem sanguínea"
    ],
    expectedPhysical: [
      "Sinais vitais: hipotensão + taquicardia = choque hemorrágico Classe II (a avaliar)",
      "Inspeção do períneo e genitália: uretrorragia, hematoma perineal (asa de borboleta), hematoma escrotal (sinal de Destot)",
      "Compressão pélvica: instabilidade do anel pélvico (sem realizar mais de 1 compressão — risco de agravar sangramento)",
      "Palpação retal/prostática: próstata elevada ou flutuante ao toque = lesão uretral posterior (sinal clássico — não realizar em todos os casos de trauma pélvico; opcional e só se exame geral estabilizado)",
      "Avaliação neurológica de MMII: sensibilidade, força, reflexos"
    ],
    expectedExams: [
      { exam: "Raio X de pelve", justify: "Identificar fratura pélvica — urgente", expected: "Fratura open book" },
      { exam: "Uretrocistografia retrógrada", justify: "Avaliar lesão uretral ANTES de cateterismo — obrigatório", expected: "Extravasamento na uretra membranosa" },
      { exam: "Hemograma + tipagem sanguínea", justify: "Avaliar sangramento + preparar para transfusão", expected: "Anemia por sangramento" },
      { exam: "Raio X de tórax + coluna cervical", justify: "Protocolo de trauma de alta energia", expected: "Normal neste caso" },
      { exam: "TC de abdome e pelve com contraste", justify: "Se estabilizado hemodinamicamente — avaliação completa do trauma", expected: "Fratura pélvica + hematoma retroperitoneal" }
    ],
    expectedConduct: [
      "Imediato: Dois acessos venosos calibrosos, reposição volêmica (cristaloides + hemoderivados se indicado), monitorização contínua",
      "Contraindicado: Cateterismo uretral sem uretrocistografia prévia",
      "Após uretrocistografia: Se rotura parcial → cateterismo suprapúbico por punção (cistostomia) para desvio urinário; se rotura completa → cistostomia + reparação uretral cirúrgica diferida (6–8 semanas)",
      "Fratura pélvica instável: Estabilização com cinta pélvica ou fixador externo — ortopedia urgente",
      "Encaminhamentos: Urologista + ortopedista + cirurgião de trauma (abordagem multidisciplinar)",
      "Orientações: Explicar para o paciente e família a gravidade e necessidade de cirurgia"
    ],
    expectedCommunication: [
      "Apresentação: Apresentar-se rapidamente (contexto de urgência), ser direto e eficiente",
      "Comunicação: Explicar brevemente ao paciente que é preciso fazer exames de imagem antes de qualquer cateterismo para não agravar a lesão",
      "Escuta ativa: Reconhecer a dor e o medo do paciente, ser direto e tranquilizador dentro da urgência"
    ],
    criticalErrors: [
      "Realizar cateterismo uretral sem uretrocistografia prévia — contraindica​ção absoluta na suspeita de lesão uretral",
      "Não reconhecer a instabilidade hemodinâmica e não iniciar reposição volêmica",
      "Não identificar uretrorragia como sinal de lesão uretral e solicitar cateterismo de rotina",
      "Não solicitar raio X de pelve para avaliar fratura pélvica associada",
      "Não envolver equipe multidisciplinar (ortopedia + urologia + cirurgia de trauma)"
    ]
  },

  instD: {
    title: "CHECKLIST",
    sections: [
      {
        h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Apresentou-se brevemente e foi direto e eficiente dentro do contexto de urgência", score: 0.3, ref: "CFM 2.217/2018" },
          { item: "Explicou ao paciente por que não pode ser cateterizado imediatamente (aguardar uretrocistografia)", score: 0.5, ref: "CFM 2.217/2018 — Consentimento em urgência" }
        ]
      },
      {
        h: "BLOCO 2 — ANAMNESE",
        items: [
          { item: "Investigou o mecanismo e a energia do trauma (colisão frontal, alta velocidade)", score: 0.5, ref: "ATLS — Trauma de Alta Energia; SBU, 2022" },
          { item: "Perguntou sobre tentativa de urinar e sucesso/insucesso após o trauma", score: 0.5, ref: "SBU — Trauma Urológico, 2022" },
          { item: "Investigou sensibilidade e mobilidade de membros inferiores (lesão medular)", score: 0.5, ref: "ATLS; SBU — Trauma Urológico, 2022" }
        ]
      },
      {
        h: "BLOCO 3 — EXAME FÍSICO",
        items: [
          { item: "Avaliou sinais vitais e identificou instabilidade hemodinâmica (hipotensão + taquicardia)", score: 0.5, ref: "ATLS; MS — Protocolo de Trauma, 2019" },
          { item: "Identificou uretrorragia ao exame genital", score: 1.0, ref: "SBU — Trauma Urológico, 2022" },
          { item: "Identificou equimose perineal (asa de borboleta) e hematoma escrotal como sinais clássicos", score: 0.5, ref: "SBU — Trauma Urológico, 2022" },
          { item: "Avaliou instabilidade pélvica com compressão única (não repetir para evitar agravar sangramento)", score: 0.5, ref: "ATLS — Fratura Pélvica" }
        ]
      },
      {
        h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Contraindicou cateterismo uretral sem uretrocistografia prévia", score: 1.0, ref: "SBU — Trauma Urológico, 2022" },
          { item: "Solicitou uretrocistografia retrógrada como exame pré-cateterismo", score: 1.0, ref: "SBU — Trauma Urológico, 2022" },
          { item: "Solicitou raio X de pelve para avaliar fratura pélvica", score: 0.5, ref: "ATLS; SBU — Trauma Urológico, 2022" }
        ]
      },
      {
        h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Iniciou reposição volêmica com 2 acessos venosos calibrosos", score: 0.5, ref: "ATLS — Choque Hemorrágico" },
          { item: "Indicou cistostomia suprapúbica para desvio urinário (após uretrocistografia)", score: 0.5, ref: "SBU — Trauma Urológico, 2022" },
          { item: "Acionou equipe multidisciplinar (urologia + ortopedia + cirurgia de trauma)", score: 0.5, ref: "SBU — Trauma Urológico, 2022" }
        ]
      }
    ]
  }
},
{
  id: 15,
  title: "Homem de 66 anos com dificuldade para urinar e jato fraco progressivo",
  sub: "Ambulatório — Atenção Primária",
  tema: "Urologia",
  topic: "Hiperplasia prostática benigna",
  level: "moderado",
  cardAccent: "#0D47A1",

  instA: {
    scenario: "Ambulatório de atenção primária. Consultório, turno diurno.",
    patient: "N.B., 66 anos, masculino, aposentado, hipertenso, diabético.",
    complaint: "Dificuldade para urinar, jato fraco e acordando muitas vezes à noite para urinar há cerca de 1 ano.",
    tasks: [
      "Realize a anamnese completa, incluindo aplicação do escore IPSS",
      "Realize o exame físico pertinente, incluindo toque retal",
      "Solicite e interprete os exames complementares adequados",
      "Formule a hipótese diagnóstica e os diagnósticos diferenciais",
      "Proponha a conduta e oriente o paciente sobre o tratamento e seguimento"
    ]
  },

  instB: {
    vitals: { PA: "144/88 mmHg", FC: "74 bpm", FR: "16 irpm", Tax: "36,6°C", Peso: "84 kg", Altura: "1,70 m", IMC: "29,1 kg/m²" },
    physicalGeneral: "Paciente em bom estado geral, lúcido, orientado, sem perda de peso aparente. Pele e mucosas normocoradas e hidratadas. Sem fácies de dor.",
    physicalSeg: [
      "TOQUE RETAL: Próstata aumentada (volume estimado ~50 mL), lobos simétricos, superfície lisa, consistência elástico-fibrosa homogênea, sulco mediano preservado, ausência de nódulos. Sem dor à palpação. Esfíncter anal com tônus normal.",
      "ABDOME: Flácido, sem massas palpáveis. Sem globo vesical palpável.",
      "MMII: Sem edema, pulsos normais."
    ],
    labs: [
      { test: "PSA total", val: "3,2 ng/mL", ref: "< 4,0 ng/mL (66 anos)", alt: false },
      { test: "PSA livre", val: "1,2 ng/mL", ref: "—", alt: false },
      { test: "Relação PSA livre/total", val: "37,5%", ref: "> 25% sugere benignidade", alt: false },
      { test: "Urina tipo I (EAS)", val: "Sem leucocitúria, sem hematúria", ref: "Normal", alt: false },
      { test: "Creatinina", val: "1,1 mg/dL", ref: "0,7–1,2 mg/dL", alt: false },
      { test: "Glicemia", val: "132 mg/dL", ref: "70–99 mg/dL", alt: true },
      { test: "Hemoglobina", val: "13,8 g/dL", ref: "13,5–17,5 g/dL", alt: false }
    ],
    image: "Ultrassonografia de vias urinárias com RPM (se solicitada): Próstata com volume de 52 mL, contornos regulares, ecotextura homogênea. Sem nódulos suspeitos. Bexiga com parede espessada (4 mm). Resíduo pós-miccional: 120 mL. Rins sem dilatação pielocalicial. Conclusão: Achados compatíveis com HPB. Presença de resíduo pós-miccional significativo.",
    note: "Entregar sinais vitais no início. Exames laboratoriais como impresso disponível. USG somente se solicitada. Toque retal deve ser descrito pelo avaliador quando solicitado e descrito pelo candidato. IPSS: avaliador pode entregar impresso do questionário IPSS se candidato mencionar o escore — ou candidato pode perguntar as 7 perguntas verbalmente; pontuação estimada: 18 pontos (sintomas moderados-graves).",
    patientProfile: "Nelson B., 66 anos, masculino, aposentado (ex-funcionário público), casado, 3 filhos. Hipertenso há 10 anos (losartana 50mg), DM2 há 6 anos (metformina 850mg 2x/dia). Sem cirurgias prévias. Não fuma, etilismo leve. Sem história familiar de CA de próstata.",
    script: [
      { trigger: "Queixa principal", speech: "Doutor, faz uns 12 meses que estou com dificuldade para urinar. O jato é fraco, fino, às vezes tenho que fazer força. E acordo 3 ou 4 vezes por noite para urinar — isso tá me deixando exausto." },
      { trigger: "Sobre urgência", speech: "Às vezes dá uma vontade muito urgente de urinar e tenho que correr para o banheiro." },
      { trigger: "Sobre jato e hesitação", speech: "Demoro para começar a urinar, o jato é fraco e às vezes fica pingando no final. Às vezes sinto que não esvaziou tudo." },
      { trigger: "Sobre hematúria", speech: "Não vi sangue na urina não." },
      { trigger: "Sobre dor", speech: "Não tenho dor para urinar não." },
      { trigger: "Sobre medicamentos", speech: "Tomo losartana e metformina. Só isso." },
      { trigger: "Sobre impacto na vida", speech: "Não consigo sair de casa por muito tempo porque tenho que ficar perto de banheiro. Tô com vergonha de viajar com a família." },
      { trigger: "Pergunta ativa", speech: "Isso é da próstata, doutor? Precisa de cirurgia?" },
      { trigger: "Pergunta ativa", speech: "Tem remédio que resolve ou só cirurgia resolve?" }
    ],
    hiddenInfo: [
      "Episódio de retenção urinária aguda há 3 meses que resolveu espontaneamente após banho quente (não foi ao médico): só revelar se perguntado especificamente sobre episódios de não conseguir urinar de forma alguma",
      "Não consegue terminar o sono completo há meses por causa da noctúria (acorda 3–4x/noite): só revelar de forma mais detalhada se perguntado sobre qualidade do sono e impacto da noctúria"
    ],
    actorBehavior: "Paciente calmo, bem-humorado, porém visivelmente cansado pelo sono prejudicado. Colaborativo e receptivo. Aliviado quando médico menciona que há medicamento que pode ajudar antes de cirurgia. Responde bem a explicações claras e objetivas."
  },

  instC: {
    diagnosis: "Hiperplasia prostática benigna (HPB) com sintomas moderados-graves do trato urinário inferior (LUTS) — IPSS ~18, próstata ~50 mL, RPM 120 mL, PSA compatível com benignidade (relação livre/total 37,5%). Episódio prévio de retenção urinária aguda (fator de risco para retenção futura). Indicação de tratamento farmacológico com alfabloquador ± inibidor de 5-alfa-redutase.",
    differentials: [
      "Câncer de próstata — inclusão: homem idoso com LUTS, PSA 3,2 (limítrofe para a faixa etária); exclusão: PSA < 4,0 ng/mL, relação livre/total 37,5% (baixo risco de malignidade), toque retal com próstata lisa, simétrica, elástica, sem nódulos",
      "Prostatite crônica — inclusão: pode causar LUTS; exclusão: sem dor perineal, sem dor pós-ejaculatória, sem disúria, contexto clínico de HPB com próstata volumosa",
      "Estenose uretral — inclusão: jato fraco e hesitação; exclusão: ausência de trauma uretral prévio, ausência de ISTs, próstata volumosa ao toque justifica o quadro"
    ],
    context: "Homem de 66 anos com HPB sintomática (IPSS moderado-grave), próstata de 50 mL, RPM significativo (120 mL) e episódio prévio de retenção. O PSA é compatível com benignidade. A diabetes e a hipertensão podem influenciar a função vesical. A qualidade de vida está significativamente comprometida, com indicação de tratamento farmacológico combinado.",
    justify: "LUTS obstrutivos (jato fraco, hesitação, esforço miccional, sensação de esvaziamento incompleto) + LUTS irritativos (noctúria, urgência) em homem > 50 anos com próstata volumosa e PSA compatível com benignidade configuram HPB. IPSS 18 = sintomas moderados (8–19). RPM 120 mL indica comprometimento do esvaziamento. PSA 3,2 com relação livre/total 37,5% é baixo risco para CA — não indica biópsia.",
    expectedAnamnesis: [
      "Aplicação do escore IPSS (7 perguntas padronizadas): esvaziamento incompleto, frequência aumentada, intermitência, urgência, jato fraco, esforço, noctúria — pontuação 0–7 (leve), 8–19 (moderado), 20–35 (grave)",
      "Episódios de retenção urinária aguda",
      "Hematúria (afastar CA)",
      "Infecções urinárias recorrentes",
      "Medicamentos: bloqueadores alfa-1 (tansulosina), inibidores de 5-AR, anticolinérgicos, diuréticos",
      "Comorbidades: DM (bexiga hipoativa), HAS",
      "Cirurgias pélvicas prévias (estenose uretral)",
      "Impacto na qualidade de vida (sono, atividades)"
    ],
    expectedPhysical: [
      "Sinais vitais: PA (HAS controlada?)",
      "Palpação suprapúbica: globo vesical",
      "Toque retal: volume estimado, consistência, superfície, sulco mediano, nódulos, dor",
      "Avaliação neurológica básica dos membros inferiores (bexiga neurogênica como diagnóstico diferencial)"
    ],
    expectedExams: [
      { exam: "PSA total + PSA livre (relação livre/total)", justify: "Rastrear CA de próstata, dimensionar próstata indiretamente", expected: "PSA 3,2; relação 37,5% — baixo risco" },
      { exam: "EAS + urocultura", justify: "Afastar ITU", expected: "Normal" },
      { exam: "Creatinina", justify: "Avaliar função renal (uropatia obstrutiva crônica)", expected: "Normal" },
      { exam: "USG de vias urinárias com RPM", justify: "Volume prostático, espessura da parede vesical, RPM, hidronefrose", expected: "Próstata 52 mL, RPM 120 mL" },
      { exam: "IPSS (questionário)", justify: "Classificar sintomas e monitorar resposta ao tratamento", expected: "~18 pontos (moderado-grave)" }
    ],
    expectedConduct: [
      "IPSS moderado-grave + próstata > 40 mL + RPM significativo → tratamento farmacológico combinado:",
      "Alfabloquador (relaxa músculo liso do colo vesical): tansulosina 0,4 mg/dia ou alfuzosina 10 mg/dia (RENAME 2022)",
      "Inibidor de 5-alfa-redutase (reduz volume prostático): dutasterida 0,5 mg/dia ou finasterida 5 mg/dia (RENAME 2022). Indicado em próstatas > 40 mL — reduz risco de retenção e necessidade de cirurgia",
      "Combinação alfabloquador + inibidor 5-AR é superior a monoterapia em próstatas volumosas (estudo MTOPS/CombAT) ⚠️",
      "Não farmacológico: Orientações comportamentais — micções programadas, reduzir ingestão de líquidos à noite, evitar álcool e café, evitar descongestionantes (pioram obstrução)",
      "Cirurgia: Indicada se: falha ao tratamento farmacológico, retenção urinária recorrente, ITU de repetição, litíase vesical, insuficiência renal por HPB → RTU de próstata (padrão-ouro cirúrgico para próstatas < 80 mL)",
      "Seguimento: Reavaliação em 4–6 semanas (alfabloquador começa a agir em dias); IPSS de controle; PSA anual; toque retal anual"
    ],
    expectedCommunication: [
      "Apresentação: Apresentar-se, retonar a queixa",
      "Comunicação do diagnóstico: Explicar que é aumento benigno da próstata que comprime o canal urinário; que não é câncer (PSA normal, toque normal); que há medicamento eficaz",
      "Escuta ativa: Acolher o impacto na qualidade de vida (sono, limitações); tranquilizar sobre a não necessidade de cirurgia imediata"
    ],
    criticalErrors: [
      "Não realizar toque retal — essencial para afastar CA de próstata e avaliar volume",
      "Não aplicar escore IPSS — ferramenta fundamental para classificação e monitoramento",
      "Iniciar anticolinérgico isolado em HPB — aumenta o RPM e risco de retenção aguda",
      "Não investigar RPM — RPM >300 mL pode indicar cirurgia independente dos sintomas",
      "Afirmar que é câncer de próstata sem biópsia baseado apenas no PSA limítrofe"
    ]
  },

  instD: {
    title: "CHECKLIST",
    sections: [
      {
        h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Apresentou-se e retomou a queixa, demonstrando atenção ao impacto na qualidade de vida", score: 0.3, ref: "CFM 2.217/2018" },
          { item: "Explicou o diagnóstico de forma acessível (aumento benigno da próstata, não é câncer)", score: 0.5, ref: "CFM 2.217/2018" },
          { item: "Tranquilizou o paciente sobre não precisar de cirurgia imediata, explicando as opções de tratamento", score: 0.5, ref: "CFM 2.217/2018" }
        ]
      },
      {
        h: "BLOCO 2 — ANAMNESE",
        items: [
          { item: "Aplicou o escore IPSS (7 domínios de sintomas urinários) para classificação", score: 1.0, ref: "SBU — HPB, 2022; AUA/EAU Guidelines" },
          { item: "Investigou episódios de retenção urinária aguda prévia", score: 0.5, ref: "SBU — HPB, 2022" },
          { item: "Pesquisou medicamentos em uso que podem agravar os sintomas urinários", score: 0.5, ref: "SBU — HPB, 2022" },
          { item: "Questionou impacto na qualidade de vida (sono, limitação de atividades)", score: 0.3, ref: "SBU — HPB, 2022" }
        ]
      },
      {
        h: "BLOCO 3 — EXAME FÍSICO",
        items: [
          { item: "Realizou toque retal com técnica adequada e descreveu os achados (volume, consistência, superfície, nódulos)", score: 1.0, ref: "SBU — HPB / CA Próstata, 2022" },
          { item: "Palpou o hipogástrio para pesquisa de globo vesical", score: 0.3, ref: "SBU — HPB, 2022" }
        ]
      },
      {
        h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Interpretou PSA + relação livre/total como baixo risco de malignidade (não indicou biópsia)", score: 0.5, ref: "SBU — HPB / CA Próstata, 2022" },
          { item: "Solicitou USG de vias urinárias com RPM e interpretou os achados", score: 0.5, ref: "SBU — HPB, 2022" },
          { item: "Formulou diagnóstico de HPB com sintomas moderados-graves baseado em IPSS + exame físico + exames", score: 1.0, ref: "SBU — HPB, 2022" }
        ]
      },
      {
        h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Prescreveu alfabloquador (tansulosina ou alfuzosina) como tratamento farmacológico de 1ª linha", score: 0.5, ref: "SBU — HPB, 2022; RENAME 2022" },
          { item: "Associou inibidor de 5-alfa-redutase (finasterida ou dutasterida) por próstata > 40 mL", score: 0.5, ref: "SBU — HPB, 2022; RENAME 2022" },
          { item: "Contraindicou anticolinérgico isolado em HPB (risco de aumentar RPM e retenção)", score: 0.5, ref: "SBU — HPB, 2022" },
          { item: "Orientou medidas comportamentais (reduzir líquidos à noite, evitar álcool e café, micções programadas)", score: 0.3, ref: "SBU — HPB, 2022" },
          { item: "Programou seguimento em 4–6 semanas com IPSS de controle e PSA anual", score: 0.3, ref: "SBU — HPB, 2022" }
        ]
      }
    ]
  }
}
]