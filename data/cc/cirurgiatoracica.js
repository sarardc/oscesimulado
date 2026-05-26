const ctoracica = [ 
    {
  id: 1,
  title: "Dispneia progressiva e dor torácica há 1 semana",
  sub: "PS — Pronto-Socorro",
  tema: "Cirurgia",
  topic: "derrame pleural",
  level: "moderado",
  cardAccent: "#3B7DD8",
  instA: {
    scenario: "Pronto-Socorro de hospital geral. Turno diurno. Caso clínico escrito — sem ator.",
    patient: "H.M., 58 anos, masculino, motorista de caminhão, hipertenso em uso de losartana.",
    complaint: "Falta de ar que piora ao deitar e dor no lado direito do peito há cerca de 1 semana.",
    tasks: [
      "Analise o quadro clínico apresentado e formule hipóteses diagnósticas.",
      "Interprete os achados do exame físico fornecidos e identifique os sinais compatíveis com o diagnóstico.",
      "Solicite e interprete os exames complementares mais adequados para confirmar a hipótese diagnóstica.",
      "Proponha a conduta terapêutica inicial e identifique quando o encaminhamento cirúrgico é necessário.",
      "Identifique os diagnósticos diferenciais relevantes e os critérios para distinção entre transudato e exsudato."
    ]
  },
  instB: {
    vitals: {
      PA: "138/88 mmHg",
      FC: "102 bpm",
      FR: "24 irpm",
      Tax: "37,8°C",
      Peso: "84 kg",
      Altura: "1,72 m",
      IMC: "28,4 kg/m²"
    },
    physicalGeneral: "Paciente em regular estado geral, consciente, orientado, taquidispneico em repouso, com saturação de O₂ de 91% em ar ambiente. Fácies de desconforto. Mucosas hipocoradas 1+/4+, acianótico.",
    physicalSeg: "TÓRAX: Expansibilidade reduzida à direita. Frêmito toracovocal abolido no terço inferior do hemitórax direito. Percussão com macicez no terço inferior direito. Ausculta: murmúrio vesicular abolido no terço inferior direito, sem ruídos adventícios nos demais campos. | CARDIOVASCULAR: Bulhas rítmicas normofonéticas, sem sopros. Taquicardia sinusal. | ABDOME: Flácido, indolor, sem visceromegalias, sem sinais de ascite. | MMII: Edema 1+/4+ em tornozelos bilateralmente.",
    labs: [
      { test: "Hemoglobina", val: "10,8 g/dL", ref: "13,5–17,5 g/dL", alt: true },
      { test: "Leucócitos", val: "14.200/mm³", ref: "4.000–11.000/mm³", alt: true },
      { test: "Neutrófilos", val: "82%", ref: "50–70%", alt: true },
      { test: "Plaquetas", val: "310.000/mm³", ref: "150.000–400.000/mm³", alt: false },
      { test: "PCR", val: "128 mg/L", ref: "< 5 mg/L", alt: true },
      { test: "Creatinina", val: "1,1 mg/dL", ref: "0,7–1,2 mg/dL", alt: false },
      { test: "Ureia", val: "38 mg/dL", ref: "15–45 mg/dL", alt: false },
      { test: "DHL sérico", val: "520 UI/L", ref: "140–280 UI/L", alt: true },
      { test: "Proteínas totais séricas", val: "6,8 g/dL", ref: "6,4–8,3 g/dL", alt: false },
      { test: "Albumina sérica", val: "3,1 g/dL", ref: "3,5–5,0 g/dL", alt: true },
      { test: "Glicemia", val: "102 mg/dL", ref: "70–99 mg/dL", alt: false },
      { test: "LÍQUIDO PLEURAL — Proteínas", val: "4,2 g/dL", ref: "—", alt: true },
      { test: "LÍQUIDO PLEURAL — DHL", val: "410 UI/L", ref: "—", alt: true },
      { test: "LÍQUIDO PLEURAL — Glicose", val: "48 mg/dL", ref: "—", alt: true },
      { test: "LÍQUIDO PLEURAL — Leucócitos", val: "4.800/mm³ (80% neutrófilos)", ref: "—", alt: true },
      { test: "LÍQUIDO PLEURAL — pH", val: "7,18", ref: "—", alt: true },
      { test: "LÍQUIDO PLEURAL — Coloração", val: "Amarelo turvo", ref: "—", alt: true }
    ],
    image: "RADIOGRAFIA DE TÓRAX PA: Velamento homogêneo do seio costofrênico direito com nível superior côncavo (curva de Damoiseau), compatível com derrame pleural de moderado volume à direita, estimado em aproximadamente 800 mL. Desvio discret do mediastino para a esquerda. Parênquima pulmonar esquerdo sem consolidações ou nódulos evidentes. Seios costofrênicos à esquerda livres. Área cardíaca nos limites superiores da normalidade (ICT 0,50). | ULTRASSONOGRAFIA DE TÓRAX (à beira leito): Coleção anecogênica com septos finos no hemitórax direito. Volume estimado compatível com radiografia. Marcação para toracocentese realizada.",
    note: "Estação sem ator. Entregar o impresso de sinais vitais e exame físico ao início da estação junto com os dados clínicos do caso. Entregar os resultados laboratoriais (sangue) quando o candidato os solicitar verbalmente. Entregar o resultado do líquido pleural somente após o candidato solicitar a toracocentese diagnóstica e interpretar a indicação corretamente. Entregar os laudos de imagem quando o candidato os solicitar.",
    patientProfile: "H.M., 58 anos, masculino. Motorista de caminhão autônomo, tabagista (40 anos-maço), hipertenso há 10 anos em uso de losartana 50 mg/dia. Mora com a esposa. Refere perda de peso de aproximadamente 6 kg nos últimos 3 meses.",
    script: [],
    hiddenInfo: "Perda de peso de 6 kg nos últimos 3 meses — dado presente no perfil do paciente, deve ser valorizado no raciocínio clínico sobre etiologia neoplásica. | Tabagismo pesado (40 anos-maço) — fator de risco para câncer de pulmão como causa do derrame.",
    actorBehavior: "Estação sem ator — não há paciente simulado. O candidato deve raciocinar com base nos dados clínicos, exame físico e exames complementares fornecidos nos impressos."
  },
  instC: {
    diagnosis: "Derrame pleural exsudativo à direita, de provável etiologia infecciosa/parapneumônica complicado (pH 7,18, glicose baixa, DHL elevado no líquido), com necessidade de drenagem torácica. Diagnóstico diferencial com neoplasia pulmonar deve ser investigado dado o contexto (tabagismo 40 anos-maço, perda de peso).",
    differentials: [
      "Derrame parapneumônico simples — excluído pelos critérios de Light (exsudato) e pela baixa glicose e pH ácido no líquido, que indicam derrame complicado",
      "Derrame pleural neoplásico — incluído como diferencial prioritário pelo tabagismo maciço, perda de peso de 6 kg e achados de exsudato; exige citologia oncótica do líquido e TC de tórax",
      "Derrame pleural por tuberculose — incluído pela epidemiologia brasileira; líquido com linfocitose seria mais sugestivo, mas a apresentação pode ser mista; exige ADA e cultura",
      "Transudato por insuficiência cardíaca — excluído pelos critérios de Light (proteínas e DHL do líquido elevados) e pela ausência de congestão pulmonar bilateral"
    ],
    context: "Paciente masculino, 58 anos, tabagista pesado, com derrame pleural moderado à direita de provável origem infecciosa complicada. Os critérios de Light confirmam exsudato, e o pH ácido com glicose baixa do líquido indicam necessidade de drenagem. O contexto de perda de peso e tabagismo exige investigação oncológica paralela.",
    justify: "Critérios de Light positivos (proteínas líquido/soro > 0,5 e DHL líquido/soro > 0,6), confirmando exsudato. pH < 7,20 e glicose < 60 mg/dL no líquido pleural são critérios para derrame parapneumônico complicado, indicando drenagem cirúrgica. Leucocitose com neutrofilia e PCR elevado reforçam processo infeccioso ativo. A perda de peso e o tabagismo maciço obrigam a investigação oncológica mesmo após resolução do quadro agudo.",
    expectedAnamnesis: "Caracterizar dispneia: início, progressão, ortopneia, posição de alívio | Caracterizar dor torácica: localização, irradiação, tipo (pleurítica?), intensidade | Febre e calafrios: duração e padrão | Tosse: produtiva ou seca, característica do escarro | Perda de peso: quantificar em kg e período | Tabagismo: carga tabágica em anos-maço | Comorbidades: HAS, DM, doença pulmonar prévia | Medicamentos em uso: losartana, AINEs, anticoagulantes | Exposição ocupacional: amianto, sílica (motorista de caminhão) | Histórico de neoplasia ou tuberculose prévia | Histórico familiar de neoplasia pulmonar | Contato com tuberculose",
    expectedPhysical: "Sinais vitais: avaliar taquicardia, taquipneia, febre e saturação de O₂ | Inspeção: expansibilidade torácica assimétrica (reduzida à direita), taquipneia, posição antálgica | Palpação: frêmito toracovocal abolido no hemitórax direito inferior — achado clássico de derrame | Percussão: macicez no hemitórax direito inferior — delimitar o nível do derrame | Ausculta: murmúrio vesicular abolido no hemitórax direito inferior; egofonia na borda superior do derrame | Cardiovascular: taquicardia, avaliar desvio de ictus (desvio mediastinal em grandes derrames) | MMII: edema (rastrear IC como causa)",
    expectedExams: [
      { exam: "Radiografia de tórax PA e perfil", justify: "Exame inicial de escolha para confirmar derrame pleural, estimar volume e avaliar desvio mediastinal", expected: "Velamento do seio costofrênico com curva de Damoiseau; desvio mediastinal contralateral em derrames volumosos" },
      { exam: "Ultrassonografia de tórax à beira leito", justify: "Superior à radiografia para quantificar e localizar o derrame, identificar septações e guiar toracocentese", expected: "Coleção anecogênica com ou sem septações; orientação para punção segura" },
      { exam: "Toracocentese diagnóstica com análise do líquido pleural", justify: "Essencial para caracterizar exsudato vs transudato (critérios de Light) e investigar etiologia", expected: "Proteínas, DHL, glicose, pH, celularidade, diferencial, cultura, ADA, citologia oncótica" },
      { exam: "Hemograma completo", justify: "Avaliar leucocitose (processo infeccioso), anemia (neoplasia)", expected: "Leucocitose com neutrofilia em parapneumônico; anemia em neoplasia" },
      { exam: "PCR e VHS", justify: "Marcadores inflamatórios para monitorar resposta ao tratamento", expected: "Elevados no processo infeccioso" },
      { exam: "Tomografia computadorizada de tórax com contraste", justify: "Investigar causa subjacente (neoplasia, pneumonia, abscessos), especialmente com tabagismo e perda de peso", expected: "Avaliar parênquima, mediastino, pleura e presença de nódulos ou massas" },
      { exam: "ADA (adenosina deaminase) no líquido pleural", justify: "Rastrear tuberculose pleural — epidemiologia brasileira exige", expected: "ADA > 40 U/L sugere tuberculose" },
      { exam: "Citologia oncótica do líquido pleural", justify: "Investigar neoplasia como causa do exsudato, especialmente com tabagismo e perda de peso", expected: "Células atípicas sugestivas de adenocarcinoma em derrame neoplásico" }
    ],
    expectedConduct: "Farmacológica: Antibioticoterapia empírica para derrame parapneumônico complicado — amoxicilina-clavulanato 875/125 mg VO a cada 12h (ambulatorial, se estável) OU ampicilina-sulbactam 3g IV a cada 6h (internação); avaliar espectro para anaeróbios; analgesia para dor pleurítica com dipirona 1g IV a cada 6h ou paracetamol 500mg VO a cada 6h; evitar AINEs por risco de mascarar evolução; anticoagulação profilática conforme risco tromboembólico | Não farmacológica: Drenagem torácica obrigatória no derrame parapneumônico complicado (pH < 7,20, glicose < 60 mg/dL, DHL > 1000 UI/L ou cultura positiva) — dreno torácico calibroso (28–32 Fr) em selo d'água; oxigenoterapia suplementar para manter SpO₂ > 94%; decúbito elevado | Encaminhamento: Cirurgia torácica se falha da drenagem em 48–72h, empiema loculado, paquipleurite ou fístula broncopleural; Pneumologia/Oncologia se investigação para neoplasia confirmar malignidade | Orientações ao paciente: Explicar necessidade de internação e drenagem; orientar sobre o procedimento; abordar investigação oncológica com linguagem acessível e empática dado o contexto de tabagismo e perda de peso | Seguimento: Radiografia de controle após drenagem; TC de tórax após resolução do quadro agudo para investigar causa subjacente; retorno em 7 dias após alta; sinais de alarme: piora da dispneia, febre persistente, dor intensa",
    expectedCommunication: "Apresentação: Identificar-se como médico responsável, explicar que irá analisar o caso e propor conduta | Comunicação do diagnóstico: Explicar em linguagem acessível que há líquido acumulado em volta do pulmão direito causando a falta de ar, que exames indicam infecção como causa provável e que um procedimento para drenar esse líquido será necessário | Escuta ativa: Reconhecer o desconforto respiratório do paciente; validar preocupações; explicar cada passo do plano diagnóstico e terapêutico; mencionar a necessidade de investigar outras causas (sem alarmismo excessivo sobre neoplasia antes da confirmação)",
    criticalErrors: [
      "Não realizar ou não indicar a toracocentese diagnóstica em derrame de volume moderado sem diagnóstico etiológico definido",
      "Classificar o derrame como transudato sem aplicar os critérios de Light — conduta incorreta levaria a tratamento inadequado",
      "Não indicar drenagem torácica em derrame parapneumônico complicado (pH < 7,20) — risco de evolução para empiema e sepse",
      "Não investigar etiologia neoplásica em paciente tabagista pesado com perda de peso e exsudato — omissão diagnóstica grave",
      "Prescrever AINEs para dor pleurítica em contexto de possível infecção — pode mascarar febre e sinais de evolução",
      "Não solicitar ADA do líquido pleural no contexto epidemiológico brasileiro — omissão de tuberculose como diagnóstico diferencial"
    ]
  },
  instD: {
    title: "CHECKLIST — DERRAME PLEURAL: DIAGNÓSTICO E CONDUTA",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Identificou-se como médico responsável pelo caso antes de iniciar a análise", score: 0.5, ref: "CFM Res. 2232/2019 — Direitos do paciente" },
          { item: "Demonstrou raciocínio organizado e sequencial, comunicando o plano de forma clara", score: 0.5, ref: "ABEM — Competências clínicas do internato, 2022" }
        ]
      },
      {
        h: "ANAMNESE E HISTÓRICO CLÍNICO",
        items: [
          { item: "Identificou dispneia progressiva com piora em decúbito (ortopneia) como sintoma cardinal", score: 0.5, ref: "Sociedade Brasileira de Pneumologia — Diretrizes em Derrame Pleural, 2021" },
          { item: "Identificou dor torácica pleurítica (localização, caráter, piora com inspiração) como dado relevante", score: 0.5, ref: "SBPT — Diretrizes em Derrame Pleural, 2021" },
          { item: "Identificou o tabagismo pesado (40 anos-maço) como fator de risco para neoplasia pulmonar", score: 1.0, ref: "INCA/MS — Tabagismo e câncer de pulmão, 2023" },
          { item: "Identificou a perda de peso de 6 kg nos últimos 3 meses como sinal de alarme para neoplasia", score: 1.0, ref: "SBPT — Diretrizes em Derrame Pleural, 2021; INCA, 2023" },
          { item: "Investigou febre, calafrios e sintomas de infecção como possível etiologia infecciosa", score: 0.5, ref: "SBPT — Diretrizes em Derrame Pleural, 2021" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Identificou frêmito toracovocal abolido no hemitórax direito inferior como achado de derrame", score: 1.0, ref: "Semiologia Médica — Porto, 8ª ed., 2019" },
          { item: "Identificou macicez à percussão no hemitórax direito inferior delimitando o derrame", score: 0.5, ref: "Semiologia Médica — Porto, 8ª ed., 2019" },
          { item: "Identificou abolição do murmúrio vesicular no hemitórax direito inferior à ausculta", score: 0.5, ref: "Semiologia Médica — Porto, 8ª ed., 2019" },
          { item: "Valorizou a taquipneia (FR 24 irpm) e a baixa saturação (91%) como indicadores de gravidade", score: 0.5, ref: "SBPT — Diretrizes em Insuficiência Respiratória, 2020" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Aplicou os critérios de Light corretamente para classificar o derrame como exsudato (proteínas líquido/soro > 0,5 e DHL líquido/soro > 0,6)", score: 1.0, ref: "Light RW. Pleural diseases, 2013; SBPT, 2021" },
          { item: "Identificou o pH < 7,20 e glicose < 60 mg/dL como critérios de derrame parapneumônico complicado", score: 1.0, ref: "SBPT — Diretrizes em Derrame Pleural, 2021" },
          { item: "Solicitou ou indicou toracocentese diagnóstica com análise completa do líquido pleural", score: 0.5, ref: "SBPT — Diretrizes em Derrame Pleural, 2021" },
          { item: "Solicitou ou indicou TC de tórax para investigação etiológica (neoplasia/tuberculose)", score: 0.5, ref: "SBPT, 2021; INCA/MS, 2023" },
          { item: "Solicitou ou indicou ADA do líquido pleural para rastreio de tuberculose", score: 0.5, ref: "SBPT — Diretrizes em Tuberculose, 2022; MS/SUS" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO",
        items: [
          { item: "Indicou drenagem torácica para derrame parapneumônico complicado (pH < 7,20)", score: 1.0, ref: "SBPT — Diretrizes em Derrame Pleural, 2021; BTS Guidelines, 2010 ⚠️ referência internacional endossada pela SBPT" },
          { item: "Propôs antibioticoterapia adequada com cobertura para germes gram-positivos e anaeróbios", score: 0.5, ref: "MS/RENAME 2022; SBPT, 2021" },
          { item: "Indicou investigação oncológica (citologia do líquido, TC, encaminhamento) dado o contexto de tabagismo e perda de peso", score: 0.5, ref: "INCA/MS — Rastreamento câncer de pulmão, 2023; SBPT, 2021" }
        ]
      }
    ]
  }
},

]