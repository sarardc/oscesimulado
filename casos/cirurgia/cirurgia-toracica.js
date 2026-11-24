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

{
  id: 2,
  title: "Cansaço, tosse seca e falta de ar há três semanas",
  sub: "Ambulatório de Pneumologia — Hospital Geral",
  tema: "Cirurgia",
  topic: "derrame pleural",
  level: "moderado",
  cardAccent: "#3B7DD8",
  instA: {
    scenario: "Ambulatório de Pneumologia de hospital geral. Turno matutino. Caso clínico escrito — sem ator.",
    patient: "L.F., 65 anos, feminino, aposentada, ex-tabagista (30 anos-maço, parou há 8 anos), sem comorbidades conhecidas.",
    complaint: "Tosse seca persistente, cansaço progressivo e falta de ar aos médios esforços há 3 semanas.",
    tasks: [
      "Analise o quadro clínico e formule hipóteses diagnósticas justificadas.",
      "Interprete os achados do exame físico e identifique os sinais compatíveis com a hipótese principal.",
      "Solicite e interprete os exames complementares necessários para elucidação diagnóstica.",
      "Aplique os critérios de Light ao líquido pleural fornecido e classifique o derrame.",
      "Proponha conduta inicial e indique o encaminhamento adequado conforme o diagnóstico."
    ]
  },
  instB: {
    vitals: {
      PA: "122/76 mmHg",
      FC: "88 bpm",
      FR: "20 irpm",
      Tax: "36,6°C",
      Peso: "58 kg",
      Altura: "1,60 m",
      IMC: "22,7 kg/m²"
    },
    physicalGeneral: "Paciente em bom estado geral, consciente, orientada, eupneica em repouso. Mucosas hipocoradas 2+/4+, anictérica, acianótica. Emagrecida. Saturação de O₂ de 94% em ar ambiente.",
    physicalSeg: "TÓRAX: Expansibilidade discretamente reduzida à esquerda. Frêmito toracovocal diminuído no terço inferior do hemitórax esquerdo. Percussão com submaciez no terço inferior esquerdo. Ausculta: murmúrio vesicular reduzido no terço inferior esquerdo, sem sibilos ou estertores. | CARDIOVASCULAR: Bulhas rítmicas normofonéticas, sem sopros. | ABDOME: Flácido, indolor, sem massas palpáveis, fígado no rebordo costal direito. | MMII: Sem edemas.",
    labs: [
      { test: "Hemoglobina", val: "9,4 g/dL", ref: "12,0–16,0 g/dL", alt: true },
      { test: "VCM", val: "82 fL", ref: "80–100 fL", alt: false },
      { test: "Leucócitos", val: "9.800/mm³", ref: "4.000–11.000/mm³", alt: false },
      { test: "Plaquetas", val: "420.000/mm³", ref: "150.000–400.000/mm³", alt: true },
      { test: "PCR", val: "22 mg/L", ref: "< 5 mg/L", alt: true },
      { test: "DHL sérico", val: "480 UI/L", ref: "140–280 UI/L", alt: true },
      { test: "Proteínas totais séricas", val: "6,5 g/dL", ref: "6,4–8,3 g/dL", alt: false },
      { test: "Albumina sérica", val: "2,8 g/dL", ref: "3,5–5,0 g/dL", alt: true },
      { test: "Creatinina", val: "0,9 mg/dL", ref: "0,7–1,2 mg/dL", alt: false },
      { test: "LÍQUIDO PLEURAL — Proteínas", val: "4,8 g/dL", ref: "—", alt: true },
      { test: "LÍQUIDO PLEURAL — DHL", val: "520 UI/L", ref: "—", alt: true },
      { test: "LÍQUIDO PLEURAL — Glicose", val: "62 mg/dL", ref: "—", alt: false },
      { test: "LÍQUIDO PLEURAL — pH", val: "7,32", ref: "—", alt: false },
      { test: "LÍQUIDO PLEURAL — Leucócitos", val: "1.200/mm³ (70% linfócitos)", ref: "—", alt: true },
      { test: "LÍQUIDO PLEURAL — Coloração", val: "Amarelo citrino", ref: "—", alt: false },
      { test: "LÍQUIDO PLEURAL — ADA", val: "14 U/L", ref: "< 40 U/L", alt: false },
      { test: "LÍQUIDO PLEURAL — Citologia oncótica", val: "Células atípicas com padrão sugestivo de adenocarcinoma", ref: "—", alt: true }
    ],
    image: "RADIOGRAFIA DE TÓRAX PA: Velamento do seio costofrênico esquerdo com nível superior côncavo, compatível com derrame pleural de pequeno a moderado volume à esquerda (estimado em 400–500 mL). Sem desvio mediastinal. Imagem nodular de contornos irregulares no lobo superior esquerdo, medindo aproximadamente 2,8 cm, com espiculação periférica — achado suspeito para neoplasia primária. | TOMOGRAFIA DE TÓRAX COM CONTRASTE: Nódulo espiculado de 2,8 cm no segmento apicoposterior do lobo superior esquerdo, com contornos irregulares e espiculação pleural. Derrame pleural esquerdo de moderado volume. Linfonodos mediastinais aumentados (estação 4L e 7), o maior medindo 1,4 cm. Sem metástases a distância identificadas neste exame.",
    note: "Estação sem ator. Entregar impresso com dados clínicos, sinais vitais e exame físico ao início. Entregar resultados de sangue quando solicitados. Entregar resultado do líquido pleural somente após o candidato indicar e justificar a toracocentese. Entregar laudos de imagem quando solicitados.",
    patientProfile: "L.F., 65 anos, feminino. Aposentada (ex-professora). Ex-tabagista (30 anos-maço, cessou há 8 anos). Viúva, mora com filha. Relata perda de peso de 8 kg nos últimos 2 meses. Sem uso regular de medicamentos.",
    script: ["Paciente masculino, 58 anos, contador, tabagista, com história de DRGE há cerca de 12 anos. Refere pirose e regurgitação ácida frequentes, principalmente após refeições volumosas e ao deitar, com piora noturna. Relata uso irregular de omeprazol, tomando apenas quando apresenta sintomas, sem adesão contínua ao tratamento prescrito. Há aproximadamente 6 semanas iniciou disfagia para alimentos sólidos, inicialmente intermitente, atualmente mais frequente, sem disfagia para líquidos. Nega odinofagia. Refere sensação de alimento parado em região retroesternal distal. Nega hematêmese e melena. Refere discreta perda ponderal não intencional nos últimos meses e redução da ingesta por medo da disfagia. História de tabagismo de longa data (quantificar anos-maço) e etilismo social/leve. Nega história familiar conhecida de câncer esofágico ou gástrico. Sem cirurgias prévias relevantes. Sem alergias medicamentosas conhecidas."],
    hiddenInfo: "Perda de peso de 8 kg em 2 meses — dado crítico para suspeita de neoplasia; deve ser investigado ativamente. | Ex-tabagismo pesado (30 anos-maço) — mesmo cessando há 8 anos, permanece como fator de risco relevante para câncer de pulmão.",
    actorBehavior: "Estação sem ator — não há paciente simulado. O candidato deve raciocinar com base nos dados clínicos, exame físico e exames complementares fornecidos nos impressos."
  },
  instC: {
    diagnosis: "Derrame pleural exsudativo linfocítico à esquerda de etiologia neoplásica — adenocarcinoma de pulmão provável (nódulo espiculado 2,8 cm no LSE com linfonodomegalia mediastinal e citologia oncótica positiva).",
    differentials: [
      "Derrame pleural tuberculoso — excluído pela ADA negativa (< 40 U/L) e pela citologia oncótica positiva; permanece diferencial em contexto epidemiológico brasileiro até confirmação histológica",
      "Derrame parapneumônico — excluído pela ausência de febre, leucocitose significativa e pelo padrão linfocítico do líquido",
      "Derrame por linfoma — incluído como diferencial em exsudato linfocítico com linfonodomegalia mediastinal; exige imunofenotipagem do líquido ou biópsia linfonodal",
      "Mesotelioma pleural — diferencial em ex-tabagistas com derrame pleural recidivante; menos provável pela presença de nódulo pulmonar primário identificável"
    ],
    context: "Paciente feminina, 65 anos, ex-tabagista pesada, com derrame pleural exsudativo linfocítico à esquerda associado a nódulo pulmonar espiculado e linfonodomegalia mediastinal. Citologia oncótica positiva para adenocarcinoma. Quadro consistente com câncer de pulmão estágio IIIA ou superior.",
    justify: "Critérios de Light positivos (proteínas líquido/soro = 0,74 e DHL líquido/soro = 1,08), confirmando exsudato. Padrão linfocítico com ADA negativa afasta tuberculose como causa principal. Citologia oncótica positiva para adenocarcinoma fecha o diagnóstico de derrame neoplásico. A TC demonstra nódulo espiculado primário com linfonodomegalia mediastinal, compatível com adenocarcinoma de pulmão com comprometimento N2.",
    expectedAnamnesis: "Caracterizar tosse: duração, caráter (seca, produtiva), hemoptise | Caracterizar dispneia: progressão, esforço desencadeante | Perda de peso: quantificar e período | Tabagismo: carga, tempo de cessação | Dor torácica: localização, caráter | Sintomas constitucionais: sudorese noturna, febre | Histórico de exposição a amianto ou outros carcinógenos ocupacionais | Histórico familiar de neoplasia | Histórico pessoal de neoplasia prévia | Investigar rouquidão, disfagia (invasão mediastinal)",
    expectedPhysical: "Sinais vitais: avaliar saturação, taquicardia, emagrecimento | Inspeção: avaliar fácies caquética, dedos em baqueta de tambor, síndrome de Horner | Palpação: frêmito diminuído no hemitórax esquerdo inferior; pesquisar linfonodos cervicais e supraclaviculares | Percussão: submaciez no hemitórax esquerdo inferior | Ausculta: murmúrio vesicular reduzido; egofonia na borda superior do derrame | Abdome: hepatomegalia (metástases)",
    expectedExams: [
      { exam: "Radiografia de tórax PA", justify: "Primeiro exame para confirmar e localizar o derrame e identificar lesões pulmonares associadas", expected: "Velamento do seio costofrênico com nódulo associado suspeito" },
      { exam: "TC de tórax com contraste", justify: "Melhor avaliação do parênquima, mediastino e pleura; estadiamento local", expected: "Nódulo espiculado, linfonodomegalia mediastinal, derrame pleural" },
      { exam: "Toracocentese diagnóstica com análise completa do líquido", justify: "Classificar derrame e obter material para citologia oncótica e ADA", expected: "Exsudato linfocítico, citologia positiva para adenocarcinoma, ADA negativa" },
      { exam: "ADA do líquido pleural", justify: "Excluir tuberculose — diagnóstico diferencial obrigatório no Brasil", expected: "ADA < 40 U/L — afasta tuberculose" },
      { exam: "Citologia oncótica do líquido pleural", justify: "Confirmar etiologia neoplásica e orientar subtipo histológico", expected: "Células atípicas compatíveis com adenocarcinoma" },
      { exam: "PET-CT ou TC de abdome e pelve", justify: "Estadiamento sistêmico — avaliar metástases a distância (M1)", expected: "Identificar ou excluir metástases hepáticas, adrenais, ósseas ou cerebrais" },
      { exam: "Broncoscopia com biópsia ou biópsia guiada por TC", justify: "Confirmação histológica e molecular do tumor primário — necessária para definir tratamento", expected: "Adenocarcinoma; solicitar EGFR, ALK, ROS1, PDL-1 para terapia-alvo" }
    ],
    expectedConduct: "Farmacológica: Não iniciar quimioterapia sem confirmação histológica e estadiamento completo; analgesia para dor pleurítica; suporte nutricional; tromboprofilaxia (paciente oncológica com alto risco de TEV — enoxaparina conforme peso, RENAME 2022) | Não farmacológica: Toracocentese terapêutica se derrame sintomático (> 500 mL com dispneia); considerar pleurodese química (talco) se derrame recidivante e confirmação de malignidade; oxigenoterapia se SpO₂ < 94% | Encaminhamento: Oncologia para estadiamento e planejamento terapêutico (quimioterapia, imunoterapia, terapia-alvo conforme perfil molecular); Cirurgia Torácica para avaliação de ressecabilidade; Cuidados Paliativos conforme estadiamento | Orientações ao paciente: Explicar achados de forma clara e empática; comunicar necessidade de investigação adicional antes de qualquer conclusão definitiva; abordar rede de apoio familiar; não omitir a suspeita de neoplasia, mas evitar prognóstico antes do estadiamento completo | Seguimento: Retorno em 7–10 dias com resultado de biópsias; articular com oncologista responsável; abordar vontades do paciente e diretivas antecipadas de vontade conforme evolução",
    expectedCommunication: "Apresentação: Identificar-se, demonstrar acolhimento diante de um diagnóstico potencialmente grave | Comunicação do diagnóstico: Informar que os exames identificaram uma alteração pulmonar importante que precisa ser investigada com mais detalhes antes de qualquer conclusão; usar linguagem acessível; não usar termos como 'tumor maligno' sem confirmação histológica | Escuta ativa: Perguntar se a paciente deseja que algum familiar esteja presente; dar espaço para perguntas; validar emoções; não apressar a consulta",
    criticalErrors: [
      "Não solicitar citologia oncótica do líquido pleural em exsudato linfocítico com nódulo pulmonar associado — omissão diagnóstica grave",
      "Classificar o derrame como transudato sem aplicar os critérios de Light — erro de raciocínio clínico que leva a investigação incorreta",
      "Não solicitar ADA do líquido pleural — omissão de tuberculose como diferencial obrigatório no contexto brasileiro",
      "Iniciar tratamento oncológico sem confirmação histológica e estadiamento completo",
      "Não encaminhar para Oncologia e Cirurgia Torácica após identificação de nódulo espiculado com citologia positiva",
      "Comunicar diagnóstico definitivo de câncer ao paciente sem confirmação histológica — quebra de conduta ética e técnica"
    ]
  },
  instD: {
    title: "CHECKLIST — DERRAME PLEURAL DE ETIOLOGIA NEOPLÁSICA",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Demonstrou abordagem empática ao comunicar achados potencialmente graves", score: 0.5, ref: "CFM Res. 2232/2019; CREMESP — Comunicação de más notícias, 2020" },
          { item: "Propôs envolver familiar ou pessoa de confiança na consulta ao abordar diagnóstico oncológico suspeito", score: 0.5, ref: "CFM — Bioética e comunicação em oncologia, 2020" }
        ]
      },
      {
        h: "ANAMNESE E HISTÓRICO CLÍNICO",
        items: [
          { item: "Identificou e quantificou o tabagismo (carga em anos-maço) como fator de risco primário", score: 1.0, ref: "INCA/MS — Tabagismo e neoplasia pulmonar, 2023" },
          { item: "Identificou a perda de peso de 8 kg em 2 meses como sinal de alarme para neoplasia", score: 1.0, ref: "SBPT — Diretrizes em Derrame Pleural, 2021; INCA, 2023" },
          { item: "Investigou hemoptise, rouquidão e disfagia como sintomas de extensão local da neoplasia", score: 0.5, ref: "SBPT — Diretrizes em Câncer de Pulmão, 2022" },
          { item: "Investigou exposição a carcinógenos ocupacionais (amianto, sílica)", score: 0.5, ref: "SBPT, 2022; MS — Doenças relacionadas ao trabalho" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Identificou frêmito toracovocal diminuído e submaciez no hemitórax esquerdo inferior como achados de derrame", score: 0.5, ref: "Semiologia Médica — Porto, 8ª ed., 2019" },
          { item: "Pesquisou linfonodos cervicais e supraclaviculares (rastreio de metástases ganglionares)", score: 1.0, ref: "SBPT — Diretrizes em Câncer de Pulmão, 2022" },
          { item: "Pesquisou dedos em baqueta de tambor e síndrome de Horner (manifestações paraneoplásicas)", score: 0.5, ref: "SBPT — Diretrizes em Câncer de Pulmão, 2022" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Aplicou os critérios de Light corretamente e classificou o derrame como exsudato", score: 1.0, ref: "Light RW. Pleural diseases, 2013 ⚠️; SBPT, 2021" },
          { item: "Indicou e justificou a toracocentese diagnóstica com solicitação de citologia oncótica", score: 1.0, ref: "SBPT — Diretrizes em Derrame Pleural, 2021" },
          { item: "Solicitou ADA do líquido pleural para excluir tuberculose", score: 0.5, ref: "SBPT — Diretrizes em Tuberculose, 2022; MS/SUS" },
          { item: "Indicou TC de tórax com contraste para estadiamento local da neoplasia", score: 0.5, ref: "SBPT — Diretrizes em Câncer de Pulmão, 2022" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO",
        items: [
          { item: "Não iniciou tratamento oncológico sem confirmação histológica — conduta correta", score: 0.5, ref: "SBPT — Diretrizes em Câncer de Pulmão, 2022; CFM" },
          { item: "Indicou encaminhamento para Oncologia e Cirurgia Torácica para estadiamento e definição terapêutica", score: 0.5, ref: "SBPT, 2022; MS — Linha de cuidado oncológico" },
          { item: "Indicou tromboprofilaxia com HBPM em paciente oncológica (alto risco de TEV)", score: 0.5, ref: "SBHH — Tromboprofilaxia em oncologia, 2022; RENAME 2022" }
        ]
      }
    ]
  }
},

{
  id: 3,
  title: "Febre vespertina, suor noturno e dor no peito há duas semanas",
  sub: "UBS — Atenção Primária à Saúde",
  tema: "Cirurgia",
  topic: "derrame pleural",
  level: "moderado",
  cardAccent: "#3B7DD8",
  instA: {
    scenario: "Unidade Básica de Saúde. Turno vespertino. Caso clínico escrito — sem ator.",
    patient: "R.S., 32 anos, masculino, auxiliar de pedreiro, não tabagista, sem comorbidades conhecidas.",
    complaint: "Febre no fim do dia, suor à noite e dor no lado direito do peito há cerca de 2 semanas.",
    tasks: [
      "Analise o quadro clínico apresentado e formule hipóteses diagnósticas justificadas.",
      "Interprete os achados do exame físico e identifique os sinais compatíveis com a hipótese principal.",
      "Solicite e interprete os exames complementares mais adequados, incluindo análise do líquido pleural.",
      "Aplique os critérios diagnósticos adequados ao líquido pleural e proponha diagnóstico etiológico.",
      "Proponha a conduta terapêutica e as medidas de vigilância epidemiológica obrigatórias."
    ]
  },
  instB: {
    vitals: {
      PA: "118/74 mmHg",
      FC: "96 bpm",
      FR: "22 irpm",
      Tax: "37,9°C",
      Peso: "62 kg",
      Altura: "1,70 m",
      IMC: "21,5 kg/m²"
    },
    physicalGeneral: "Paciente em regular estado geral, consciente, orientado, emagrecido, febril ao exame. Mucosas normocoradas, anictérico, acianótico. Saturação de O₂ de 95% em ar ambiente.",
    physicalSeg: "TÓRAX: Expansibilidade reduzida à direita. Frêmito toracovocal abolido no terço inferior do hemitórax direito. Percussão com macicez no terço inferior direito. Ausculta: murmúrio vesicular abolido no terço inferior direito; egofonia na borda superior do derrame. | CARDIOVASCULAR: Bulhas rítmicas normofonéticas, sem sopros. | ABDOME: Flácido, indolor à palpação, sem visceromegalias. | MMII: Sem edemas. | LINFONODOS: Cadeia cervical posterior com dois linfonodos palpáveis, móveis, indolores, medindo cerca de 1 cm.",
    labs: [
      { test: "Hemoglobina", val: "11,8 g/dL", ref: "13,5–17,5 g/dL", alt: true },
      { test: "Leucócitos", val: "10.200/mm³", ref: "4.000–11.000/mm³", alt: false },
      { test: "Linfócitos", val: "38%", ref: "20–40%", alt: false },
      { test: "VHS", val: "98 mm/h", ref: "< 15 mm/h", alt: true },
      { test: "PCR", val: "45 mg/L", ref: "< 5 mg/L", alt: true },
      { test: "DHL sérico", val: "390 UI/L", ref: "140–280 UI/L", alt: true },
      { test: "Proteínas totais séricas", val: "7,0 g/dL", ref: "6,4–8,3 g/dL", alt: false },
      { test: "Albumina sérica", val: "3,3 g/dL", ref: "3,5–5,0 g/dL", alt: true },
      { test: "Creatinina", val: "0,8 mg/dL", ref: "0,7–1,2 mg/dL", alt: false },
      { test: "HIV (ELISA)", val: "Não reagente", ref: "Não reagente", alt: false },
      { test: "LÍQUIDO PLEURAL — Proteínas", val: "4,6 g/dL", ref: "—", alt: true },
      { test: "LÍQUIDO PLEURAL — DHL", val: "480 UI/L", ref: "—", alt: true },
      { test: "LÍQUIDO PLEURAL — Glicose", val: "58 mg/dL", ref: "—", alt: false },
      { test: "LÍQUIDO PLEURAL — pH", val: "7,28", ref: "—", alt: false },
      { test: "LÍQUIDO PLEURAL — Leucócitos", val: "3.200/mm³ (85% linfócitos)", ref: "—", alt: true },
      { test: "LÍQUIDO PLEURAL — ADA", val: "68 U/L", ref: "< 40 U/L", alt: true },
      { test: "LÍQUIDO PLEURAL — Coloração", val: "Amarelo citrino claro", ref: "—", alt: false },
      { test: "LÍQUIDO PLEURAL — Citologia oncótica", val: "Negativa para células neoplásicas", ref: "—", alt: false },
      { test: "LÍQUIDO PLEURAL — Baciloscopia", val: "Negativa (BAAR ausente)", ref: "—", alt: false }
    ],
    image: "RADIOGRAFIA DE TÓRAX PA: Velamento do seio costofrênico direito com nível superior côncavo, compatível com derrame pleural de pequeno a moderado volume à direita (estimado em 300–400 mL). Sem desvio mediastinal. Parênquima pulmonar sem consolidações, cavitações ou infiltrados evidentes nos campos visíveis. Seio costofrênico esquerdo livre.",
    note: "Estação sem ator. Entregar impresso com dados clínicos, sinais vitais e exame físico ao início. Entregar resultados laboratoriais de sangue quando solicitados. Entregar resultado do líquido pleural somente após o candidato indicar e justificar a toracocentese. Entregar laudo da radiografia quando solicitado. Atentar se o candidato solicita sorologia HIV — fornecer o resultado como impresso adicional se solicitado.",
    patientProfile: "R.S., 32 anos, masculino. Auxiliar de pedreiro, solteiro, mora em habitação coletiva (cortiço) com outras 6 pessoas. Não tabagista. Refere perda de peso de 5 kg nos últimos 2 meses. Nega uso de drogas ilícitas. Nega contato conhecido com tuberculose, mas trabalha em ambiente fechado com muitas pessoas.",
    script: [],
    hiddenInfo: "Mora em cortiço com 6 pessoas em ambiente fechado — fator de risco para tuberculose; o candidato deve perguntar sobre condições de moradia. | Relata que um colega de trabalho foi diagnosticado com 'doença do pulmão' há 3 meses — contato provável com tuberculose; só revela se o candidato perguntar diretamente sobre contato com doentes respiratórios.",
    actorBehavior: "Estação sem ator — não há paciente simulado. O candidato deve raciocinar com base nos dados clínicos, exame físico e exames complementares fornecidos nos impressos."
  },
  instC: {
    diagnosis: "Pleurite tuberculosa (derrame pleural tuberculoso) — exsudato linfocítico com ADA > 40 U/L (68 U/L), baciloscopia negativa do líquido (esperada na maioria dos casos de pleurite TB), contexto epidemiológico compatível (moradia coletiva, contato provável, faixa etária, emagrecimento).",
    differentials: [
      "Derrame parapneumônico — excluído pelo padrão linfocítico do líquido, pH > 7,20, ausência de leucocitose neutrofílica significativa e ADA elevada",
      "Derrame pleural neoplásico — excluído pela citologia oncótica negativa, pela faixa etária e pela ADA fortemente positiva; porém ADA pode ser elevada em linfoma (considerar se não houver melhora com esquema TB)",
      "Derrame pleural por linfoma — diferencial em exsudato linfocítico com ADA elevada; menos provável pela ausência de linfadenopatia volumosa e pela epidemiologia de TB",
      "Derrame pleural viral (p. ex. pós-viral) — excluído pela elevação expressiva da ADA e pela duração e intensidade do quadro"
    ],
    context: "Paciente masculino jovem, 32 anos, morando em habitação coletiva, com quadro de febre vespertina, sudorese noturna, emagrecimento e derrame pleural exsudativo linfocítico à direita. ADA de 68 U/L confirma etiologia tuberculosa. Baciloscopia negativa do líquido é esperada na pleurite TB. HIV negativo.",
    justify: "Critérios de Light positivos confirmam exsudato. Padrão linfocítico com ADA > 40 U/L tem sensibilidade de 92% e especificidade de 90% para tuberculose pleural no contexto brasileiro (MS/SBPT). Baciloscopia negativa não exclui o diagnóstico — é negativa em 80–90% dos derrames tuberculosos. Quadro epidemiológico (moradia coletiva, contato provável, faixa etária 20–40 anos) reforça a hipótese. HIV negativo não exclui TB.",
    expectedAnamnesis: "Caracterizar febre: padrão vespertino, duração, termometria | Sudorese noturna: duração e intensidade | Tosse: duração, caráter, hemoptise | Perda de peso: quantificar | Condições de moradia: habitação coletiva, ventilação | Contato com tuberculose ou pessoa com tosse crônica | Histórico de TB prévia ou tratamento anterior | Sorologia HIV | Uso de imunossupressores | Vacinação BCG | Histórico familiar de TB",
    expectedPhysical: "Sinais vitais: febre vespertina, taquicardia, avaliar saturação | Inspeção: emagrecimento, expansibilidade assimétrica | Palpação: frêmito abolido no hemitórax direito inferior; pesquisar linfonodos cervicais e axilares | Percussão: macicez no hemitórax direito inferior | Ausculta: MV abolido + egofonia na borda do derrame | Pesquisar cicatriz de BCG",
    expectedExams: [
      { exam: "Toracocentese diagnóstica com análise completa", justify: "Essencial para classificar e elucidar etiologia do derrame", expected: "Exsudato linfocítico, ADA > 40 U/L, citologia negativa, baciloscopia geralmente negativa" },
      { exam: "ADA do líquido pleural", justify: "Principal marcador diagnóstico de tuberculose pleural — sensibilidade 92%, especificidade 90% no Brasil", expected: "ADA > 40 U/L confirma tuberculose pleural no contexto clínico adequado" },
      { exam: "Baciloscopia e cultura do líquido pleural para BAAR", justify: "Confirmação bacteriológica — cultura tem maior sensibilidade que baciloscopia", expected: "Baciloscopia geralmente negativa (80–90%); cultura positiva em 20–40% dos casos" },
      { exam: "Radiografia de tórax PA", justify: "Avaliar extensão do derrame e presença de lesões parenquimatosas associadas", expected: "Derrame pleural unilateral; parênquima pode ser normal na pleurite primária" },
      { exam: "Sorologia HIV", justify: "Comorbidade obrigatória a investigar em todo caso de tuberculose — impacta conduta", expected: "Não reagente neste caso" },
      { exam: "Teste tuberculínico (PPD) ou IGRA", justify: "Auxilia diagnóstico em contexto de incerteza, porém pode ser negativo na pleurite TB aguda", expected: "PPD ≥ 10 mm em imunocompetentes sugere infecção por M. tuberculosis" },
      { exam: "Escarro para baciloscopia e cultura (se tosse presente)", justify: "Investigar tuberculose pulmonar concomitante — importante para notificação e tratamento", expected: "Negativo na pleurite isolada; positivo em TB pulmonar associada" }
    ],
    expectedConduct: "Farmacológica: Esquema RHZE — Rifampicina 600 mg + Isoniazida 300 mg + Pirazinamida 2.000 mg + Etambutol 1.200 mg VO em jejum por 2 meses (fase intensiva), seguido de Rifampicina 600 mg + Isoniazida 300 mg por 4 meses (fase de manutenção) — total 6 meses; conforme Protocolo Nacional para o Controle da Tuberculose MS/SVS 2023; piridoxina 50 mg/dia junto com isoniazida para prevenção de neuropatia periférica; NÃO há indicação de drenagem torácica em pleurite TB simples sem empiema | Não farmacológica: Toracocentese terapêutica se dispneia importante (volume > 1 L); não realizar toracocentese de repetição em pleurite TB — o derrame resolve com o tratamento em 4–6 semanas; isolamento respiratório não é obrigatório na pleurite TB sem escarro positivo, mas deve ser avaliado | Encaminhamento: Notificação compulsória ao SINAN em até 24h — obrigatória por lei (Lei 6.259/1975 e Portaria MS 264/2020); Vigilância epidemiológica para investigação de contactantes; encaminhar ao serviço de referência em TB do município | Orientações ao paciente: Explicar a doença, o tratamento prolongado de 6 meses e a importância da adesão; orientar que interrupção gera resistência; orientar sobre efeitos adversos dos medicamentos (icterícia, alteração visual, formigamento); orientar sobre a necessidade de investigar os contactantes | Seguimento: Retorno em 30 dias para avaliação clínica e de efeitos adversos; acompanhamento mensal durante o tratamento; baciloscopia de controle conforme protocolo MS; alta por cura ao final de 6 meses com tratamento completo",
    expectedCommunication: "Apresentação: Identificar-se, criar vínculo e explicar os achados de forma clara | Comunicação do diagnóstico: Explicar em linguagem acessível que os exames indicam uma infecção no pulmão chamada tuberculose, que tem tratamento eficaz e gratuito pelo SUS; desmistificar o estigma | Escuta ativa: Perguntar sobre a situação de moradia e trabalho; envolver o paciente no plano terapêutico; reforçar que o tratamento é longo mas eficaz e que o paciente não estará sozinho",
    criticalErrors: [
      "Não solicitar ADA do líquido pleural — omissão do principal marcador diagnóstico de tuberculose pleural",
      "Não realizar notificação compulsória ao SINAN — obrigação legal em todo caso de tuberculose diagnosticado",
      "Iniciar esquema terapêutico incorreto ou incompleto (ex.: monoterapia, omitir etambutol na fase inicial) — risco de resistência",
      "Indicar drenagem torácica em pleurite TB sem critérios para empiema — procedimento desnecessário e com risco",
      "Não solicitar sorologia HIV em todo caso de tuberculose — omissão de comorbidade que altera conduta",
      "Não investigar ou notificar contactantes — falha de vigilância epidemiológica com risco de propagação"
    ]
  },
  instD: {
    title: "CHECKLIST — DERRAME PLEURAL TUBERCULOSO",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Abordou o paciente de forma acolhedora, sem estigmatizar o diagnóstico de tuberculose", score: 0.5, ref: "MS/SVS — Protocolo Nacional de Controle da Tuberculose, 2023" },
          { item: "Explicou o diagnóstico e o tratamento em linguagem acessível, sem jargões técnicos", score: 0.5, ref: "CFM Res. 2232/2019" }
        ]
      },
      {
        h: "ANAMNESE E HISTÓRICO CLÍNICO",
        items: [
          { item: "Identificou o padrão de febre vespertina e sudorese noturna como sintomas constitucionais clássicos de tuberculose", score: 1.0, ref: "MS/SVS — Protocolo Nacional de Controle da Tuberculose, 2023" },
          { item: "Investigou condições de moradia (habitação coletiva, ventilação inadequada) como fator de risco para TB", score: 0.5, ref: "MS/SVS — Protocolo Nacional de Controle da Tuberculose, 2023" },
          { item: "Investigou contato com pessoa com tuberculose ou tosse crônica", score: 1.0, ref: "MS/SVS, 2023; SBPT — Diretrizes em Tuberculose, 2022" },
          { item: "Solicitou ou investigou sorologia HIV em paciente com diagnóstico de tuberculose", score: 0.5, ref: "MS/SVS, 2023; SBPT, 2022" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Identificou frêmito toracovocal abolido e macicez no hemitórax direito inferior como achados de derrame", score: 0.5, ref: "Semiologia Médica — Porto, 8ª ed., 2019" },
          { item: "Pesquisou linfonodos cervicais e axilares (manifestação extrapulmonar da TB)", score: 0.5, ref: "SBPT — Diretrizes em Tuberculose, 2022" },
          { item: "Identificou e valorizou o emagrecimento (5 kg em 2 meses) como sinal constitucional relevante", score: 0.5, ref: "MS/SVS — Protocolo Nacional de Controle da Tuberculose, 2023" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Indicou toracocentese diagnóstica com solicitação específica de ADA do líquido pleural", score: 1.0, ref: "SBPT — Diretrizes em Tuberculose Pleural, 2022; MS/SVS, 2023" },
          { item: "Interpretou a ADA > 40 U/L como critério diagnóstico de tuberculose pleural no contexto clínico adequado", score: 1.0, ref: "SBPT, 2022; MS/SVS, 2023" },
          { item: "Aplicou os critérios de Light e classificou o derrame como exsudato linfocítico", score: 0.5, ref: "Light RW. Pleural diseases ⚠️; SBPT, 2021" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO",
        items: [
          { item: "Prescreveu esquema RHZE correto: Rifampicina + Isoniazida + Pirazinamida + Etambutol por 2 meses, seguido de RH por 4 meses", score: 1.0, ref: "MS/SVS — Protocolo Nacional de Controle da Tuberculose, 2023; RENAME 2022" },
          { item: "Realizou ou indicou notificação compulsória ao SINAN em até 24 horas", score: 1.0, ref: "Portaria MS 264/2020; Lei 6.259/1975" },
          { item: "Orientou sobre adesão ao tratamento de 6 meses e risco de resistência por abandono", score: 0.5, ref: "MS/SVS — Protocolo Nacional de Controle da Tuberculose, 2023" }
        ]
      }
    ]
  }
},

{
  id: 4,
  title: "Queimação no peito após as refeições há quatro meses",
  sub: "Ambulatório de Cirurgia Geral — Hospital Geral",
  tema: "Cirurgia",
  topic: "doença do refluxo gastroesofágico",
  level: "moderado",
  cardAccent: "#E07B39",
  instA: {
    scenario: "Ambulatório de Cirurgia Geral de hospital geral. Turno matutino. Caso clínico escrito — sem ator.",
    patient: "M.O., 45 anos, feminino, professora, obesa, sem diagnósticos prévios formais.",
    complaint: "Queimação no peito e gosto amargo na boca após as refeições, há cerca de 4 meses, piorando progressivamente.",
    tasks: [
      "Analise o quadro clínico e formule hipóteses diagnósticas justificadas.",
      "Interprete os achados clínicos e identifique os fatores de risco presentes.",
      "Solicite os exames complementares adequados para confirmação diagnóstica e rastreio de complicações.",
      "Proponha a conduta terapêutica farmacológica e não farmacológica baseada em diretrizes brasileiras.",
      "Identifique as indicações de encaminhamento e os sinais de alarme que exigem investigação endoscópica urgente."
    ]
  },
  instB: {
    vitals: {
      PA: "132/84 mmHg",
      FC: "80 bpm",
      FR: "16 irpm",
      Tax: "36,4°C",
      Peso: "88 kg",
      Altura: "1,62 m",
      IMC: "33,5 kg/m²"
    },
    physicalGeneral: "Paciente em bom estado geral, consciente, orientada, eupneica. Mucosas normocoradas, anictérica, acianótica. Obesa centralmente.",
    physicalSeg: "ABDOME: Obeso, flácido, ruídos hidroaéreos presentes e normais. Dor leve à palpação profunda no epigástrio. Sem massas palpáveis, sem hepatoesplenomegalia, sem defesa ou Blumberg. | TÓRAX: Expansibilidade normal e simétrica. Murmúrio vesicular presente bilateralmente, sem ruídos adventícios. | CARDIOVASCULAR: Bulhas rítmicas normofonéticas, sem sopros.",
    labs: [
      { test: "Hemograma completo", val: "Dentro dos limites normais", ref: "—", alt: false },
      { test: "Glicemia de jejum", val: "108 mg/dL", ref: "70–99 mg/dL", alt: true },
      { test: "TSH", val: "2,1 mUI/L", ref: "0,4–4,0 mUI/L", alt: false },
      { test: "H. pylori — Teste respiratório com ureia marcada", val: "Negativo", ref: "Negativo", alt: false }
    ],
    image: "ENDOSCOPIA DIGESTIVA ALTA (EDA): Esôfago com mucosa eritematosa no terço inferior, com erosões lineares coalescentes acima da junção esofagogástrica, comprometendo menos de 75% da circunferência — classificação de Los Angeles grau B. Junção esofagogástrica localizada a 40 cm dos incisivos. Sem Barrett identificado. Herniação de mucosa gástrica acima do diafragma de aproximadamente 2 cm (hérnia hiatal por deslizamento). Estômago e duodeno sem alterações.",
    note: "Estação sem ator. Entregar impresso com dados clínicos, sinais vitais e exame físico ao início. Entregar resultados laboratoriais quando solicitados. Entregar o laudo da EDA somente após o candidato solicitar o exame e justificar sua indicação. Se o candidato não solicitar EDA, chamar atenção para os sinais de alarme presentes no caso.",
    patientProfile: "M.O., 45 anos, feminino. Professora, casada, dois filhos. IMC 33,5 kg/m² (obesidade grau I). Refere alimentação hipercalórica, rica em frituras e café. Tabagismo social (2–3 cigarros/dia). Etilismo leve (vinho nos fins de semana). Sem medicamentos de uso contínuo. Refere usar 'antiácidos' de farmácia esporadicamente com alívio parcial.",
    script: [],
    hiddenInfo: "Uso regular de ibuprofeno 400 mg para cefaleia tensional, aproximadamente 3 vezes por semana — fator agravante da DRGE e risco de esofagite; só revela se o candidato perguntar sobre medicamentos de uso regular ou para dor. | Sintomas noturnos: acorda às vezes à noite com queimação e tosse — dado relevante para classificar DRGE como moderada/grave; só revela se perguntado sobre sintomas noturnos ou durante o sono.",
    actorBehavior: "Estação sem ator — não há paciente simulado. Raciocínio baseado nos dados clínicos e exames fornecidos nos impressos."
  },
  instC: {
    diagnosis: "Doença do Refluxo Gastroesofágico (DRGE) erosiva — esofagite grau B pela classificação de Los Angeles — associada a hérnia hiatal por deslizamento de 2 cm. Fatores contribuintes: obesidade (IMC 33,5), uso de AINEs, tabagismo, dieta inadequada.",
    differentials: [
      "Úlcera péptica gástrica ou duodenal — excluída pela EDA sem lesões ulceradas no estômago ou duodeno; H. pylori negativo",
      "Esofagite eosinofílica — excluída pela ausência de disfagia, pelo padrão endoscópico erosivo típico de DRGE e pela não realização de biópsia (diferencial a considerar se refratária ao IBP)",
      "Dispepsia funcional — excluída pela presença de esofagite erosiva objetiva na EDA",
      "Angina pectoris / doença coronariana — diferencial obrigatório em queimação retroesternal, excluído pela ausência de fatores de risco cardiovascular significativos, ausência de irradiação e relação clara com refeições"
    ],
    context: "Paciente feminina, 45 anos, obesa, com DRGE erosiva grau B (Los Angeles) e hérnia hiatal associada. Fatores de risco modificáveis identificáveis: obesidade, AINEs, tabagismo, dieta inadequada. Quadro com sintomas noturnos indica doença de impacto moderado a grave.",
    justify: "A queimação retroesternal pós-prandial com regurgitação ácida, aliviada por antiácidos, é apresentação clássica de DRGE. A EDA confirma esofagite erosiva grau B e hérnia hiatal. O uso de AINEs (ibuprofeno 3x/semana) é fator agravante identificado. Obesidade aumenta a pressão intraabdominal e favorece o refluxo. Sintomas noturnos indicam comprometimento funcional relevante.",
    expectedAnamnesis: "Caracterizar pirose: frequência, intensidade, relação com refeições, posição e horário (noturna?) | Regurgitação ácida: frequência e impacto | Disfagia ou odinofagia: sinal de alarme — investigar | Perda de peso não intencional: sinal de alarme | Tosse crônica, rouquidão, globus: manifestações extraesofágicas | Uso de AINEs, aspirina, corticoides, bisfosfonatos, bloqueadores de canal de cálcio | Tabagismo e etilismo | Hábitos alimentares: gorduras, café, chocolate, álcool, refeições noturnas | IMC e ganho de peso recente | Tempo de evolução e tentativas de tratamento prévias",
    expectedPhysical: "Sinais vitais: avaliar PA (associação HAS-obesidade), calcular IMC | Inspeção: obesidade central, avaliar fácies | Abdome: palpação epigástrica (dor sugere componente ulcerativo ou gastrite) | Ausculta pulmonar: investigar sibilos (manifestação extraesofágica) | Orofaringe: erosões dentárias, faringite posterior (DRGE extraesofágica)",
    expectedExams: [
      { exam: "Endoscopia digestiva alta (EDA)", justify: "Indicada para confirmar diagnóstico, classificar gravidade (Los Angeles), pesquisar Barrett e excluir úlcera — especialmente com sintomas há mais de 4 semanas em paciente > 45 anos", expected: "Esofagite grau A–D (Los Angeles), hérnia hiatal, ou esôfago normal (DRGE não erosiva)" },
      { exam: "Teste para H. pylori (respiratório ou sorológico)", justify: "Excluir H. pylori como fator contribuinte para dispepsia associada", expected: "Negativo neste caso" },
      { exam: "pHmetria esofágica de 24 horas", justify: "Padrão ouro para diagnóstico de DRGE em casos atípicos ou refratários — não necessária na apresentação típica com EDA confirmatória", expected: "pH < 4 por mais de 4% do tempo de registro confirma DRGE" },
      { exam: "Manometria esofágica", justify: "Indicada no pré-operatório de fundoplicatura ou quando há suspeita de distúrbio motor associado", expected: "Hipotonia do esfíncter esofágico inferior na DRGE" }
    ],
    expectedConduct: "Farmacológica: Inibidor de bomba de prótons (IBP) — Omeprazol 20 mg VO 30 min antes do café da manhã por 8 semanas (esofagite grau B); na ausência de melhora considerar dose dobrada (40 mg/dia) ou troca para Esomeprazol/Pantoprazol; RENAME 2022 inclui omeprazol e pantoprazol; suspender AINEs e substituir por paracetamol para analgesia | Não farmacológica: Perda de peso (redução do IMC é a medida mais eficaz); elevação da cabeceira da cama 15–20 cm; evitar refeições 2–3h antes de deitar; evitar alimentos gatilho (gorduras, café, chocolate, álcool, menta); fracionamento das refeições; cessação do tabagismo | Encaminhamento: Cirurgia para fundoplicatura laparoscópica se refratária a IBP em dose plena por 12 semanas, ou se paciente prefere não usar IBP indefinidamente, ou se hérnia hiatal volumosa sintomática | Orientações ao paciente: Explicar que DRGE é crônica mas controlável; enfatizar mudanças de estilo de vida como parte do tratamento; orientar retorno se surgir disfagia, perda de peso ou vômitos — sinais de alarme | Seguimento: Retorno em 8 semanas para reavaliação; EDA de controle se Barrett presente ou esofagite grau C/D; em grau B sem Barrett, repetir EDA em 1 ano se sintomático",
    expectedCommunication: "Apresentação: Identificar-se e explicar o objetivo da consulta | Comunicação do diagnóstico: Explicar que há uma inflamação no esôfago causada pelo retorno do ácido do estômago; usar termos acessíveis como 'queimação' e 'esôfago irritado' | Escuta ativa: Perguntar sobre impacto na qualidade de vida e sono; abordar as mudanças de hábito com empatia, sem julgamento sobre obesidade",
    criticalErrors: [
      "Não investigar uso de AINEs como fator agravante da DRGE e não orientar substituição",
      "Não identificar disfagia ou perda de peso como sinais de alarme que exigem EDA urgente",
      "Prescrever IBP sem associar às medidas não farmacológicas — conduta incompleta",
      "Não classificar a esofagite pela escala de Los Angeles após a EDA",
      "Manter uso de AINEs em paciente com esofagite erosiva confirmada sem proteção gástrica adequada"
    ]
  },
  instD: {
    title: "CHECKLIST — DOENÇA DO REFLUXO GASTROESOFÁGICO (DRGE)",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Abordou os hábitos de vida (obesidade, dieta) sem julgamento ou linguagem pejorativa", score: 0.5, ref: "CFM Res. 2232/2019; ABEM, 2022" },
          { item: "Explicou o diagnóstico e o plano terapêutico em linguagem acessível", score: 0.5, ref: "CFM Res. 2232/2019" }
        ]
      },
      {
        h: "ANAMNESE E HISTÓRICO CLÍNICO",
        items: [
          { item: "Caracterizou a pirose: frequência, relação com refeições e posição, horário noturno", score: 0.5, ref: "SBCP — Consenso Brasileiro em DRGE, 2022" },
          { item: "Investigou disfagia e perda de peso não intencional como sinais de alarme", score: 1.0, ref: "SBCP — Consenso Brasileiro em DRGE, 2022; CFM" },
          { item: "Identificou uso de AINEs (ibuprofeno) como fator agravante da esofagite", score: 1.0, ref: "SBCP, 2022; MS/RENAME 2022" },
          { item: "Investigou hábitos alimentares e fatores de risco modificáveis (obesidade, tabagismo, álcool, café)", score: 0.5, ref: "SBCP — Consenso Brasileiro em DRGE, 2022" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Calculou e valorizou o IMC (33,5 kg/m²) como fator de risco principal para DRGE", score: 0.5, ref: "SBCP, 2022; ABESO — Obesidade e comorbidades, 2022" },
          { item: "Realizou palpação epigástrica para avaliar componente dispéptico associado", score: 0.5, ref: "Semiologia Médica — Porto, 8ª ed., 2019" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Indicou EDA justificando a investigação por sintomas > 4 semanas em paciente > 45 anos", score: 1.0, ref: "SBCP — Consenso Brasileiro em DRGE, 2022; CFM" },
          { item: "Classificou a esofagite como grau B pela escala de Los Angeles após a EDA", score: 1.0, ref: "SBCP, 2022; Classificação de Los Angeles" },
          { item: "Identificou a hérnia hiatal por deslizamento como fator anatômico contribuinte", score: 0.5, ref: "SBCP, 2022" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO",
        items: [
          { item: "Prescreveu IBP (omeprazol ou pantoprazol) na dose e duração adequadas para esofagite grau B (8 semanas)", score: 1.0, ref: "SBCP — Consenso Brasileiro em DRGE, 2022; RENAME 2022" },
          { item: "Orientou sobre medidas não farmacológicas: elevação da cabeceira, fracionamento das refeições, evitar alimentos gatilho, perda de peso", score: 0.5, ref: "SBCP, 2022" },
          { item: "Orientou substituição do ibuprofeno por paracetamol e suspensão do AINE", score: 0.5, ref: "SBCP, 2022; MS/RENAME 2022" }
        ]
      }
    ]
  }
},

{
  id: 5,
  title: "Paciente com histórico de refluxo e pirose há anos retorna com queimação persistente",
  sub: "Ambulatório de Gastroenterologia — Hospital Geral",
  tema: "Cirurgia",
  topic: "esôfago de Barrett",
  level: "moderado",
  cardAccent: "#C0392B",
  instA: {
    scenario: "Ambulatório de Gastroenterologia de hospital geral. Turno matutino. Caso clínico escrito — sem ator.",
    patient: "P.A., 58 anos, masculino, contador, tabagista, com histórico de DRGE há 12 anos.",
    complaint: "Pirose persistente apesar do uso de omeprazol há 3 meses e dificuldade ocasional para engolir alimentos sólidos.",
    tasks: [
      "Analise o quadro clínico e identifique os sinais de alarme presentes.",
      "Solicite e interprete os exames complementares necessários para elucidação diagnóstica.",
      "Interprete o laudo endoscópico e histopatológico fornecidos e formule o diagnóstico.",
      "Classifique o achado endoscópico e proponha conduta baseada no estadiamento da lesão.",
      "Estabeleça o plano de vigilância endoscópica e oriente o paciente sobre o risco oncológico."
    ]
  },
  instB: {
    vitals: {
      PA: "136/86 mmHg",
      FC: "78 bpm",
      FR: "16 irpm",
      Tax: "36,5°C",
      Peso: "90 kg",
      Altura: "1,75 m",
      IMC: "29,4 kg/m²"
    },
    physicalGeneral: "Paciente em bom estado geral, consciente, orientado, eupneico. Mucosas normocoradas, anictérico, acianótico. Sobrepeso.",
    physicalSeg: "ABDOME: Obeso, flácido, ruídos hidroaéreos presentes e normais. Dor leve à palpação profunda no epigástrio. Sem massas, sem visceromegalias, sem sinais de peritonismo. | TÓRAX: Expansibilidade normal e simétrica, murmúrio vesicular presente bilateralmente. | CARDIOVASCULAR: Bulhas rítmicas normofonéticas, sem sopros. | OROFARINGE: Eritema posterior da faringe, sem exsudatos.",
    labs: [
      { test: "Hemoglobina", val: "12,8 g/dL", ref: "13,5–17,5 g/dL", alt: true },
      { test: "VCM", val: "78 fL", ref: "80–100 fL", alt: true },
      { test: "Leucócitos", val: "8.400/mm³", ref: "4.000–11.000/mm³", alt: false },
      { test: "Plaquetas", val: "280.000/mm³", ref: "150.000–400.000/mm³", alt: false },
      { test: "Ferro sérico", val: "42 µg/dL", ref: "60–170 µg/dL", alt: true },
      { test: "Ferritina", val: "8 ng/mL", ref: "12–300 ng/mL", alt: true },
      { test: "CEA", val: "3,2 ng/mL", ref: "< 5,0 ng/mL", alt: false },
      { test: "H. pylori — Teste respiratório", val: "Negativo", ref: "Negativo", alt: false }
    ],
    image: "ENDOSCOPIA DIGESTIVA ALTA (EDA) COM BIÓPSIA: Esôfago distal com segmento de mucosa de coloração avermelhada, de aspecto aveludado, com extensão de 4 cm acima da junção esofagogástrica, em toda a circunferência — padrão compatível com segmento longo de Esôfago de Barrett (> 3 cm). Classificação de Praga: C4M4. Sem lesões nodulares, ulceradas ou irregularidades focais suspeitas. Biópsia de 4 fragmentos do segmento. Hérnia hiatal por deslizamento de 3 cm. | HISTOPATOLÓGICO: Metaplasia intestinal especializada com células caliciformes. Displasia: AUSENTE. Sem atipias celulares. Laudo: Esôfago de Barrett sem displasia.",
    note: "Estação sem ator. Entregar dados clínicos, sinais vitais e exame físico ao início. Entregar resultados laboratoriais quando solicitados. Entregar laudo da EDA com histopatológico somente após o candidato indicar e justificar a solicitação do exame. Atentar se o candidato identifica a disfagia como sinal de alarme.",
    patientProfile: "P.A., 58 anos, masculino. Contador, casado, dois filhos. Tabagista (25 anos-maço). Etilismo moderado (2–3 doses/dia). IMC 29,4 kg/m² (sobrepeso). DRGE há 12 anos — usou omeprazol 20 mg/dia de forma intermitente (não contínua). Sem outros medicamentos.",
    script: [],
    hiddenInfo: "Uso irregular de omeprazol — tomava apenas quando os sintomas apareciam, sem uso contínuo como prescrito; só revela se o candidato perguntar sobre adesão ao tratamento ou modo de uso do IBP. | Disfagia para sólidos há 6 semanas — dado de alarme presente no briefing mas que deve ser explorado quanto à frequência, progressão e alimentos afetados.",
    actorBehavior: "Estação sem ator — não há paciente simulado. Raciocínio baseado nos dados clínicos e exames fornecidos nos impressos."
  },
  instC: {
    diagnosis: "Esôfago de Barrett — segmento longo (C4M4 pela classificação de Praga), sem displasia. Associado a DRGE crônica de longa data, tabagismo e sobrepeso. Anemia ferropriva leve associada — investigar sangramento oculto por esofagite erosiva ou úlcera de Barrett.",
    differentials: [
      "Esôfago de Barrett com displasia de baixo ou alto grau — excluído pelo histopatológico sem displasia; permanece como risco futuro exigindo vigilância endoscópica regular",
      "Adenocarcinoma de esôfago — excluído pela ausência de lesões nodulares ou ulceradas na EDA e pelo CEA normal; risco aumentado neste paciente exige vigilância",
      "Esofagite erosiva sem Barrett — excluída pelo histopatológico com metaplasia intestinal confirmada",
      "Carcinoma espinocelular de esôfago — menos provável pelo padrão de refluxo crônico e localização distal; associado a tabagismo e etilismo pesados — manter em vigilância"
    ],
    context: "Paciente masculino, 58 anos, com DRGE de 12 anos, tabagismo pesado e uso irregular de IBP. EDA confirma Esôfago de Barrett segmento longo (C4M4) sem displasia. A disfagia para sólidos e a anemia ferropriva exigem investigação adicional e acompanhamento rigoroso pelo risco de progressão para adenocarcinoma.",
    justify: "O Esôfago de Barrett resulta da metaplasia do epitélio escamoso esofágico por epitélio colunar intestinal em resposta ao refluxo ácido crônico. Segmento longo (> 3 cm) tem maior risco de progressão para adenocarcinoma esofágico (0,5–1% ao ano). A disfagia para sólidos, mesmo sem displasia confirmada na biópsia atual, exige atenção por risco de estenose ou lesão focal não amostrada. A anemia ferropriva pode indicar sangramento oculto da mucosa metaplásica.",
    expectedAnamnesis: "Caracterizar disfagia: para sólidos, líquidos ou ambos; progressão; intensidade | Odinofagia: sinal de alarme | Regurgitação e pirose: frequência, impacto noturno | Adesão ao omeprazol: uso contínuo ou intermitente | Perda de peso: quantificar | Tabagismo: carga (anos-maço) | Etilismo: quantidade diária | Histórico familiar de adenocarcinoma de esôfago ou câncer gástrico | Duração do histórico de DRGE",
    expectedPhysical: "Sinais vitais: PA, IMC | Inspeção: palidez (anemia), emagrecimento | Abdome: palpação epigástrica e de fígado (metástases) | Pesquisar linfonodos supraclaviculares (sinal de Virchow — metástases) | Orofaringe: eritema faríngeo posterior (DRGE extraesofágica)",
    expectedExams: [
      { exam: "EDA com biópsia em quatro quadrantes a cada 2 cm do segmento (protocolo de Seattle)", justify: "Diagnóstico e estadiamento do Barrett — identificar displasia ou adenocarcinoma precoce", expected: "Metaplasia intestinal com ou sem displasia; orientar conduta conforme grau" },
      { exam: "Histopatológico das biópsias", justify: "Confirmar metaplasia intestinal e classificar presença e grau de displasia", expected: "Metaplasia intestinal sem displasia neste caso" },
      { exam: "Hemograma e perfil de ferro", justify: "Investigar anemia ferropriva sugestiva de sangramento oculto da mucosa metaplásica", expected: "Anemia microcítica hipocrômica com ferritina baixa" },
      { exam: "Pesquisa de sangue oculto nas fezes", justify: "Complementar investigação de sangramento gastrointestinal oculto", expected: "Positivo se há sangramento ativo da mucosa esofágica ou gástrica" },
      { exam: "TC de tórax e abdome com contraste", justify: "Indicada se houver suspeita de progressão neoplásica (disfagia progressiva, perda de peso, lesão suspeita na EDA)", expected: "Avaliar extensão local e metástases" }
    ],
    expectedConduct: "Farmacológica: IBP em dose plena e contínua — Omeprazol 40 mg/dia VO ou Pantoprazol 40 mg/dia VO de forma contínua (não intermitente); a supressão ácida adequada reduz o risco de progressão displásica; reforçar adesão; suplementação de sulfato ferroso 300 mg VO 2x/dia para anemia ferropriva (RENAME 2022) | Não farmacológica: Cessação do tabagismo (reduz risco de progressão); redução do etilismo; perda de peso; medidas anti-refluxo (elevação de cabeceira, fracionamento alimentar, evitar alimentos gatilho); sem indicação de fundoplicatura isoladamente para tratar Barrett sem displasia | Encaminhamento: Gastroenterologia/Endoscopia para vigilância endoscópica — Barrett sem displasia: EDA a cada 3–5 anos conforme tamanho do segmento; Cirurgia Torácica se progressão para displasia de alto grau ou adenocarcinoma intramucoso; Oncologia se adenocarcinoma invasivo | Orientações ao paciente: Explicar o que é metaplasia intestinal e o risco oncológico de forma clara e sem alarmar excessivamente; enfatizar que sem displasia o risco imediato é baixo mas a vigilância é essencial; explicar a importância do IBP contínuo | Seguimento: EDA de vigilância em 3–5 anos (Barrett sem displasia, segmento longo — seguir protocolo da SOBED/FBG 2023); retorno clínico em 3 meses para reavaliação da anemia e adesão ao IBP",
    expectedCommunication: "Apresentação: Identificar-se, criar acolhimento | Comunicação do diagnóstico: Explicar que o revestimento do final do esôfago sofreu uma alteração chamada Barrett, causada pelo refluxo ácido crônico; esclarecer que a alteração não é câncer mas precisa de acompanhamento regular | Escuta ativa: Perguntar sobre preocupações e medos em relação ao diagnóstico; validar a ansiedade; reforçar que o acompanhamento adequado é protetor",
    criticalErrors: [
      "Não identificar a disfagia para sólidos como sinal de alarme exigindo investigação endoscópica prioritária",
      "Não indicar biópsia em quatro quadrantes a cada 2 cm do segmento de Barrett (protocolo de Seattle) — risco de subdiagnóstico de displasia",
      "Prescrever IBP de forma intermitente (apenas quando sintomático) em paciente com Barrett confirmado — conduta incorreta",
      "Não estabelecer protocolo de vigilância endoscópica após diagnóstico de Barrett",
      "Não investigar a anemia ferropriva — omissão de sangramento oculto como complicação"
    ]
  },
  instD: {
    title: "CHECKLIST — ESÔFAGO DE BARRETT",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Comunicou o diagnóstico de Barrett de forma clara, sem alarmismo excessivo, explicando a diferença entre metaplasia e câncer", score: 0.5, ref: "CFM Res. 2232/2019; SOBED, 2023" },
          { item: "Perguntou sobre dúvidas e preocupações do paciente em relação ao risco de câncer", score: 0.5, ref: "CFM Res. 2232/2019" }
        ]
      },
      {
        h: "ANAMNESE E HISTÓRICO CLÍNICO",
        items: [
          { item: "Identificou a disfagia para sólidos como sinal de alarme e a caracterizou (progressão, intensidade)", score: 1.0, ref: "SOBED/FBG — Consenso Brasileiro em Esôfago de Barrett, 2023" },
          { item: "Investigou a adesão ao IBP — identificou uso irregular como fator de progressão do Barrett", score: 1.0, ref: "SOBED/FBG, 2023; SBCP, 2022" },
          { item: "Quantificou tabagismo e etilismo como fatores de risco para progressão oncológica", score: 0.5, ref: "SOBED/FBG, 2023; INCA/MS, 2023" },
          { item: "Investigou histórico familiar de adenocarcinoma de esôfago ou câncer gástrico", score: 0.5, ref: "SOBED/FBG, 2023" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Identificou e valorizou sinais de anemia (palidez) associados à anemia ferropriva", score: 0.5, ref: "Semiologia Médica — Porto, 8ª ed., 2019" },
          { item: "Pesquisou linfonodos supraclaviculares (sinal de Virchow) para rastrear metástases", score: 0.5, ref: "SOBED/FBG, 2023; SBCP, 2022" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Indicou EDA com biópsia em quatro quadrantes a cada 2 cm do segmento (protocolo de Seattle)", score: 1.0, ref: "SOBED/FBG — Consenso Brasileiro em Esôfago de Barrett, 2023" },
          { item: "Classificou corretamente o Barrett como segmento longo (> 3 cm) pela classificação de Praga (C4M4)", score: 1.0, ref: "SOBED/FBG, 2023; Classificação de Praga" },
          { item: "Investigou anemia ferropriva com hemograma e perfil de ferro", score: 0.5, ref: "SOBED/FBG, 2023; Soc. Bras. de Hematologia, 2022" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO",
        items: [
          { item: "Prescreveu IBP em dose plena e de forma contínua (não intermitente) para Barrett confirmado", score: 1.0, ref: "SOBED/FBG, 2023; SBCP, 2022; RENAME 2022" },
          { item: "Estabeleceu protocolo de vigilância endoscópica: EDA a cada 3–5 anos para Barrett sem displasia", score: 1.0, ref: "SOBED/FBG — Consenso Brasileiro em Esôfago de Barrett, 2023" },
          { item: "Orientou cessação do tabagismo e redução do etilismo como medidas de redução de risco oncológico", score: 0.5, ref: "SOBED/FBG, 2023; INCA/MS, 2023" }
        ]
      }
    ]
  }
},

{
  id: 6,
  title: "Tosse com sangue e perda de peso em homem tabagista",
  sub: "PS — Pronto-Socorro",
  tema: "Cirurgia",
  topic: "câncer de pulmão",
  level: "moderado",
  cardAccent: "#7D3C98",
  instA: {
    scenario: "Pronto-Socorro de hospital geral. Turno diurno. Caso clínico escrito — sem ator.",
    patient: "C.R., 62 anos, masculino, aposentado (ex-metalúrgico), tabagista pesado, com tosse crônica há anos.",
    complaint: "Tosse com sangue há 10 dias, perda de peso e cansaço progressivo há 2 meses.",
    tasks: [
      "Analise o quadro clínico e formule hipóteses diagnósticas, incluindo diagnósticos diferenciais relevantes.",
      "Identifique os sinais de alarme presentes e justifique a investigação prioritária.",
      "Solicite e interprete os exames complementares necessários para elucidação diagnóstica e estadiamento.",
      "Proponha conduta inicial e encaminhamento adequado conforme o diagnóstico provável.",
      "Identifique manifestações paraneoplásicas ou síndromes associadas ao tipo histológico sugerido."
    ]
  },
  instB: {
    vitals: {
      PA: "140/90 mmHg",
      FC: "94 bpm",
      FR: "20 irpm",
      Tax: "37,2°C",
      Peso: "64 kg",
      Altura: "1,72 m",
      IMC: "21,6 kg/m²"
    },
    physicalGeneral: "Paciente em regular estado geral, consciente, orientado, emagrecido, com fácies de doença crônica. Mucosas hipocoradas 1+/4+, anictérico, acianótico. Saturação de O₂ de 93% em ar ambiente.",
    physicalSeg: "TÓRAX: Expansibilidade reduzida à direita. Frêmito toracovocal aumentado no hemitórax direito superior. Percussão com macicez no terço superior direito. Ausculta: sopro tubário e estertores crepitantes no hemitórax direito superior. | CARDIOVASCULAR: Bulhas rítmicas normofonéticas, sem sopros. | ABDOME: Flácido, indolor, fígado palpável a 3 cm do rebordo costal direito, de superfície irregular — hepatomegalia suspeita. | MMII: Sem edemas. | LINFONODOS: Linfonodo supraclavicular direito palpável, endurecido, indolor, medindo aproximadamente 1,5 cm (sinal de Virchow ipsilateral).",
    labs: [
      { test: "Hemoglobina", val: "10,2 g/dL", ref: "13,5–17,5 g/dL", alt: true },
      { test: "VCM", val: "88 fL", ref: "80–100 fL", alt: false },
      { test: "Leucócitos", val: "11.800/mm³", ref: "4.000–11.000/mm³", alt: true },
      { test: "Plaquetas", val: "480.000/mm³", ref: "150.000–400.000/mm³", alt: true },
      { test: "Cálcio sérico", val: "11,8 mg/dL", ref: "8,5–10,5 mg/dL", alt: true },
      { test: "Fosfatase alcalina", val: "310 UI/L", ref: "44–147 UI/L", alt: true },
      { test: "DHL", val: "620 UI/L", ref: "140–280 UI/L", alt: true },
      { test: "Albumina", val: "2,9 g/dL", ref: "3,5–5,0 g/dL", alt: true },
      { test: "Creatinina", val: "1,0 mg/dL", ref: "0,7–1,2 mg/dL", alt: false },
      { test: "Sódio", val: "132 mEq/L", ref: "135–145 mEq/L", alt: true },
      { test: "CEA", val: "18,4 ng/mL", ref: "< 5,0 ng/mL", alt: true },
      { test: "CYFRA 21-1", val: "28,6 ng/mL", ref: "< 3,3 ng/mL", alt: true }
    ],
    image: "RADIOGRAFIA DE TÓRAX PA: Massa hilar direita de contornos irregulares, medindo aproximadamente 5 cm, com atelectasia do lobo superior direito associada. Alargamento do mediastino à direita. Sem derrame pleural. | TOMOGRAFIA DE TÓRAX COM CONTRASTE: Massa central hilar direita de 5,2 x 4,8 cm, com obstrução do brônquio lobar superior direito e atelectasia do lobo superior direito. Linfonodomegalia mediastinal bilateral (estações 2R, 4R e 7), o maior medindo 2,2 cm. Lesões hepáticas hipodensas múltiplas compatíveis com metástases (a maior medindo 3,1 cm). Sem derrame pleural. | BRONCOSCOPIA COM BIÓPSIA: Massa endobrônquica obstruindo o brônquio do lobo superior direito. Biópsia: Carcinoma epidermoide moderadamente diferenciado.",
    note: "Estação sem ator. Entregar dados clínicos, sinais vitais e exame físico ao início. Entregar exames laboratoriais quando solicitados. Entregar laudos de imagem quando solicitados individualmente. Entregar resultado da broncoscopia somente se o candidato a indicar e justificar. Atentar se o candidato identifica a hipercalcemia como manifestação paraneoplásica.",
    patientProfile: "C.R., 62 anos, masculino. Ex-metalúrgico aposentado — exposição a fumaças metálicas por 30 anos. Tabagista (50 anos-maço — nunca tentou cessar). Etilismo leve. Casado, dois filhos. Perdeu 10 kg nos últimos 2 meses. Tosse crônica produtiva há 10 anos (diagnóstico prévio de DPOC em outra unidade, sem seguimento).",
    script: [],
    hiddenInfo: "Exposição ocupacional a fumaças metálicas por 30 anos como metalúrgico — fator de risco adicional para câncer de pulmão além do tabagismo; só menciona se o candidato perguntar sobre trabalho e exposição ocupacional. | Relata poliúria e polidipsia nas últimas semanas — pode indicar hipercalcemia sintomática; só menciona se o candidato perguntar sobre sintomas associados ou investigar manifestações paraneoplásicas.",
    actorBehavior: "Estação sem ator — não há paciente simulado. Raciocínio baseado nos dados clínicos e exames fornecidos nos impressos."
  },
  instC: {
    diagnosis: "Carcinoma epidermoide de pulmão, lobo superior direito, com obstrução brônquica e atelectasia. Estadiamento: T3N3M1b (metástases hepáticas múltiplas) — estágio IV. Síndrome paraneoplásica: hipercalcemia humoral (PTHrP) associada ao carcinoma epidermoide.",
    differentials: [
      "Tuberculose pulmonar com massa hilar — excluída pelo histopatológico de carcinoma epidermoide e pela ausência de ADA ou achados granulomatosos; tabagismo pesado e linfonodo supraclavicular endurecido apontam para neoplasia",
      "Adenocarcinoma de pulmão — excluído pelo histopatológico (epidermoide); adenocarcinoma é mais periférico e mais comum em não fumantes ou ex-fumantes; CYFRA 21-1 e CEA elevados são mais associados ao epidermoide e ao adenocarcinoma respectivamente",
      "Linfoma mediastinal — excluído pelo histopatológico; entra no diferencial pela linfonodomegalia mediastinal bilateral",
      "Metástase pulmonar de outro sítio primário — excluída pelo achado de massa pulmonar central primária com histologia confirmada"
    ],
    context: "Paciente masculino, 62 anos, tabagista pesado (50 anos-maço) com exposição ocupacional adicional. Carcinoma epidermoide central com obstrução brônquica, linfonodomegalia mediastinal bilateral e metástases hepáticas — estágio IV, doença avançada. Hipercalcemia paraneoplásica identificada (PTHrP secretado pelo epidermoide).",
    justify: "Hemoptise, perda de peso e tosse crônica em tabagista pesado são apresentação clássica de carcinoma epidermoide central. A massa hilar com atelectasia é padrão radiológico típico do epidermoide (tumor central obstrutivo). CYFRA 21-1 elevado é marcador tumoral associado ao epidermoide. Hipercalcemia sem metástases ósseas evidentes indica produção de PTHrP (síndrome paraneoplásica humoral). Linfonodo supraclavicular endurecido (sinal de Virchow) e metástases hepáticas confirmam estágio IV.",
    expectedAnamnesis: "Hemoptise: volume, frequência, duração | Tosse crônica: mudança de padrão recente | Perda de peso: quantificar em kg e período | Tabagismo: carga em anos-maço | Exposição ocupacional: metalurgia, amianto, sílica, radônio | Disfagia, rouquidão (invasão mediastinal) | Poliúria, polidipsia, confusão (hipercalcemia) | Dor óssea (metástases) | Histórico de DPOC ou outras doenças pulmonares | Histórico familiar de neoplasia | Uso de medicamentos",
    expectedPhysical: "Sinais vitais: taquicardia, queda de saturação, peso e IMC | Inspeção: emagrecimento, dedos em baqueta (hipóxia crônica) | Palpação: linfonodo supraclavicular (sinal de Virchow), hepatomegalia de superfície irregular | Tórax: frêmito aumentado e sopro tubário (consolidação/atelectasia), percussão com macicez | Ausculta: sopro tubário, estertores | Pesquisar síndrome de Pancoast (dor no ombro, Horner) se tumor apical",
    expectedExams: [
      { exam: "Radiografia de tórax PA", justify: "Primeiro exame — identificar massa, atelectasia, derrame, alargamento mediastinal", expected: "Massa hilar com atelectasia lobar" },
      { exam: "TC de tórax e abdome com contraste", justify: "Estadiamento local (T e N) e identificação de metástases abdominais", expected: "Massa central, linfonodomegalia mediastinal, lesões hepáticas" },
      { exam: "Broncoscopia com biópsia", justify: "Diagnóstico histológico de tumor central endobrônquico — necessário para confirmar tipo e guiar tratamento", expected: "Carcinoma epidermoide" },
      { exam: "PET-CT ou cintilografia óssea", justify: "Estadiamento completo para avaliar metástases a distância (osso, adrenal, cérebro)", expected: "Metástases hepáticas e potencialmente ósseas" },
      { exam: "TC de crânio com contraste", justify: "Avaliar metástases cerebrais — obrigatório no estadiamento de CPNPC", expected: "Sem ou com metástases cerebrais" },
      { exam: "Cálcio sérico e PTH/PTHrP", justify: "Investigar hipercalcemia paraneoplásica (PTHrP no carcinoma epidermoide)", expected: "Cálcio elevado, PTH suprimido, PTHrP elevado" },
      { exam: "Espirometria / provas de função pulmonar", justify: "Avaliar reserva pulmonar antes de qualquer intervenção cirúrgica ou radioterápica", expected: "Padrão obstrutivo (DPOC associada)" }
    ],
    expectedConduct: "Farmacológica: Estágio IV — não há indicação de ressecção cirúrgica; encaminhar para Oncologia para quimioterapia paliativa (carboplatina + paclitaxel ou carboplatina + gencitabina para epidermoide — verificar PDL-1 para imunoterapia); tratar hipercalcemia: hidratação venosa vigorosa + ácido zoledrônico 4 mg IV se Ca²⁺ > 12 mg/dL; suporte paliativo: analgesia, antitussígenos; corticoides se obstrução brônquica com colapso | Não farmacológica: Oxigenoterapia suplementar; suporte nutricional; fisioterapia respiratória; Cuidados Paliativos desde o diagnóstico de estágio IV | Encaminhamento: Oncologia clínica (tratamento sistêmico paliativo); Radioterapia (paliativa para sintomas — hemoptise, dor óssea); Cuidados Paliativos; Psicologia | Orientações ao paciente: Comunicar o diagnóstico de forma clara e empática, respeitando o ritmo do paciente; informar sobre a doença avançada e as opções de tratamento paliativo; abordar qualidade de vida e diretivas antecipadas de vontade | Seguimento: Articular com Oncologia para planejamento do tratamento sistêmico; retorno precoce (7–14 dias) para avaliação clínica e início do tratamento",
    expectedCommunication: "Apresentação: Identificar-se como médico responsável | Comunicação do diagnóstico: Usar protocolo SPIKES para comunicação de más notícias: preparar o ambiente, avaliar o que o paciente já sabe, informar gradualmente, acolher as emoções | Escuta ativa: Não apressar a consulta; dar espaço para silêncio; perguntar se o paciente quer a presença de familiar; não dar prognóstico numérico sem ser questionado",
    criticalErrors: [
      "Não identificar a hipercalcemia como síndrome paraneoplásica do carcinoma epidermoide — erro de raciocínio clínico",
      "Não realizar ou não indicar biópsia para confirmação histológica antes de definir o tratamento",
      "Indicar ressecção cirúrgica em doença estágio IV (M1) — contraindicada e clinicamente inadequada",
      "Não encaminhar para Cuidados Paliativos em doença estágio IV — omissão de componente essencial do cuidado",
      "Não investigar metástases cerebrais no estadiamento de carcinoma de pulmão não pequenas células",
      "Comunicar diagnóstico de câncer avançado sem técnica adequada — sem acolhimento, de forma abrupta ou em ambiente inadequado"
    ]
  },
  instD: {
    title: "CHECKLIST — CÂNCER DE PULMÃO: CARCINOMA EPIDERMOIDE ESTÁGIO IV",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Utilizou protocolo estruturado (ex.: SPIKES) para comunicação do diagnóstico oncológico grave", score: 0.5, ref: "CFM — Comunicação de más notícias; Baile et al., 2000 ⚠️ (protocolo internacionalmente adotado)" },
          { item: "Ofereceu a presença de familiar ou pessoa de confiança ao comunicar diagnóstico grave", score: 0.5, ref: "CFM Res. 2232/2019; CREMESP, 2020" }
        ]
      },
      {
        h: "ANAMNESE E HISTÓRICO CLÍNICO",
        items: [
          { item: "Identificou e quantificou o tabagismo pesado (50 anos-maço) como principal fator de risco", score: 0.5, ref: "INCA/MS — Tabagismo e câncer de pulmão, 2023; SBPT, 2022" },
          { item: "Investigou exposição ocupacional (metalurgia, amianto) como fator de risco adicional", score: 0.5, ref: "MS — Doenças relacionadas ao trabalho; SBPT, 2022" },
          { item: "Identificou hemoptise, perda de peso e mudança no padrão da tosse como sinais de alarme para neoplasia", score: 1.0, ref: "SBPT — Diretrizes em Câncer de Pulmão, 2022; INCA, 2023" },
          { item: "Investigou poliúria e polidipsia como possíveis manifestações de hipercalcemia paraneoplásica", score: 0.5, ref: "SBPT, 2022; Harrison — Medicina Interna ⚠️" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Identificou linfonodo supraclavicular endurecido (sinal de Virchow) como achado de metástase regional", score: 1.0, ref: "Semiologia Médica — Porto, 8ª ed., 2019; SBPT, 2022" },
          { item: "Identificou hepatomegalia de superfície irregular como achado suspeito de metástases hepáticas", score: 0.5, ref: "Semiologia Médica — Porto, 8ª ed., 2019" },
          { item: "Valorizou a hipoxemia (SatO₂ 93%) como indicador de comprometimento funcional pulmonar significativo", score: 0.5, ref: "SBPT — Diretrizes em Insuficiência Respiratória, 2020" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Indicou broncoscopia com biópsia para confirmação histológica do tumor central endobrônquico", score: 1.0, ref: "SBPT — Diretrizes em Câncer de Pulmão, 2022" },
          { item: "Identificou a hipercalcemia (Ca²⁺ 11,8 mg/dL) como síndrome paraneoplásica do carcinoma epidermoide (PTHrP)", score: 1.0, ref: "SBPT, 2022; Harrison ⚠️" },
          { item: "Solicitou TC de crânio para completar o estadiamento (rastrear metástases cerebrais)", score: 0.5, ref: "SBPT — Diretrizes em Câncer de Pulmão, 2022" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO",
        items: [
          { item: "Não indicou ressecção cirúrgica em doença estágio IV — conduta correta", score: 0.5, ref: "SBPT, 2022; INCA/MS" },
          { item: "Indicou encaminhamento para Oncologia (quimioterapia paliativa) e Cuidados Paliativos", score: 0.5, ref: "SBPT, 2022; MS — Linha de cuidado oncológico, 2023" },
          { item: "Indicou tratamento da hipercalcemia: hidratação venosa e bisfosfonato (ácido zoledrônico)", score: 0.5, ref: "SBPT, 2022; SBE — Distúrbios do cálcio, 2022; RENAME 2022" }
        ]
      }
    ]
  }
},

{
  id: 7,
  title: "Nódulo pulmonar descoberto em exame de rotina em paciente assintomática",
  sub: "Ambulatório de Pneumologia — Hospital Geral",
  tema: "Cirurgia",
  topic: "câncer de pulmão",
  level: "moderado",
  cardAccent: "#7D3C98",
  instA: {
    scenario: "Ambulatório de Pneumologia de hospital geral. Turno matutino. Caso clínico escrito — sem ator.",
    patient: "V.M., 55 anos, feminino, administradora, ex-tabagista (20 anos-maço, parou há 5 anos), sem sintomas respiratórios.",
    complaint: "Nódulo pulmonar de 1,8 cm identificado em tomografia de tórax solicitada como exame de rotina. Paciente assintomática.",
    tasks: [
      "Analise o quadro clínico e os achados de imagem e formule hipóteses diagnósticas para o nódulo pulmonar.",
      "Classifique o nódulo pulmonar conforme os critérios de risco estabelecidos pelas diretrizes (Fleischner/INCA).",
      "Solicite os exames complementares necessários para investigação e estadiamento.",
      "Proponha a conduta mais adequada: observação, biópsia ou ressecção, com justificativa.",
      "Estabeleça o protocolo de seguimento e oriente a paciente sobre o achado e o plano diagnóstico."
    ]
  },
  instB: {
    vitals: {
      PA: "128/82 mmHg",
      FC: "76 bpm",
      FR: "16 irpm",
      Tax: "36,4°C",
      Peso: "68 kg",
      Altura: "1,63 m",
      IMC: "25,6 kg/m²"
    },
    physicalGeneral: "Paciente em bom estado geral, consciente, orientada, eupneica. Mucosas normocoradas, anictérica, acianótica. Sem alterações aparentes ao exame geral.",
    physicalSeg: "TÓRAX: Expansibilidade normal e simétrica. Murmúrio vesicular presente e igual bilateralmente. Sem ruídos adventícios. | CARDIOVASCULAR: Bulhas rítmicas normofonéticas, sem sopros. | ABDOME: Flácido, indolor, sem organomegalias. | LINFONODOS: Cadeia cervical e axilar sem linfadenopatia palpável.",
    labs: [
      { test: "Hemograma completo", val: "Dentro dos limites normais", ref: "—", alt: false },
      { test: "CEA", val: "4,8 ng/mL", ref: "< 5,0 ng/mL", alt: false },
      { test: "CA 125", val: "18 U/mL", ref: "< 35 U/mL", alt: false },
      { test: "NSE", val: "9,2 ng/mL", ref: "< 12,5 ng/mL", alt: false },
      { test: "Função hepática (TGO, TGP, GGT, FA)", val: "Dentro dos limites normais", ref: "—", alt: false },
      { test: "Creatinina", val: "0,8 mg/dL", ref: "0,7–1,2 mg/dL", alt: false }
    ],
    image: "TC DE TÓRAX SEM CONTRASTE (exame inicial de rotina): Nódulo pulmonar sólido no segmento apical do lobo superior direito, medindo 1,8 cm em seu maior diâmetro, com contornos irregulares e espiculação periférica discreta. Sem calcificação. Sem adenopatia mediastinal ou hilar. Sem derrame pleural. Demais campos pulmonares sem alterações. | TC DE TÓRAX COM CONTRASTE (realizada para investigação): Nódulo sólido de 1,8 x 1,6 cm no segmento apical do lobo superior direito, com realce heterogêneo ao contraste, margens irregulares e espiculação pleural. Sem satélites. Sem linfonodomegalia mediastinal. Sem metástases identificadas neste exame. Achado classificado como Lung-RADS 4B (alta suspeição de malignidade).",
    note: "Estação sem ator. Entregar dados clínicos, sinais vitais e exame físico ao início junto com o laudo da TC sem contraste (exame que motivou o encaminhamento). Entregar os resultados laboratoriais quando solicitados. Entregar a TC com contraste quando o candidato a solicitar. Atentar se o candidato aplica critérios de risco (Fleischner ou Lung-RADS) ao nódulo.",
    patientProfile: "V.M., 55 anos, feminino. Administradora, casada. Ex-tabagista (20 anos-maço, cessou há 5 anos). Sem comorbidades. Sem histórico de neoplasia prévia. Mãe com diagnóstico de adenocarcinoma de pulmão aos 60 anos. Sem exposição ocupacional relevante. Sem medicamentos de uso contínuo.",
    script: [],
    hiddenInfo: "Histórico familiar de adenocarcinoma de pulmão na mãe — fator de risco adicional relevante para malignidade do nódulo; só menciona se o candidato perguntar sobre histórico familiar de neoplasia. | Ex-tabagismo de 20 anos-maço — confirmado apenas se o candidato perguntar sobre carga tabágica em anos-maço (e não apenas 'se fumou').",
    actorBehavior: "Estação sem ator — não há paciente simulado. Raciocínio baseado nos dados clínicos e exames fornecidos nos impressos."
  },
  instC: {
    diagnosis: "Nódulo pulmonar sólido de alta suspeição para malignidade (Lung-RADS 4B) — provável adenocarcinoma de pulmão em estágio precoce (cT1bN0M0, estágio IA2 provável). Indicação de biópsia percutânea guiada por TC ou ressecção cirúrgica diagnóstica e terapêutica.",
    differentials: [
      "Adenocarcinoma de pulmão — principal hipótese: nódulo sólido espiculado, 1,8 cm, ex-tabagista com carga de 20 anos-maço, histórico familiar positivo, Lung-RADS 4B",
      "Granuloma infeccioso (histoplasmose, paracoccidioidomicose, TB) — diferencial em nódulo sólido sem calcificação no Brasil; menos provável pela espiculação e pelo Lung-RADS 4B",
      "Carcinoide brônquico — diferencial em nódulo sólido bem delimitado; menos provável pela espiculação periférica e pelo perfil de risco",
      "Metástase pulmonar solitária — diferencial em nódulo único; excluído pela ausência de neoplasia primária conhecida"
    ],
    context: "Paciente feminina, 55 anos, ex-tabagista com carga de 20 anos-maço e histórico familiar de adenocarcinoma de pulmão. Nódulo sólido espiculado de 1,8 cm com Lung-RADS 4B — classificação de alta suspeição para malignidade. Doença aparentemente localizada (sem linfonodomegalia ou metástases na TC). Janela terapêutica favorável para ressecção com intenção curativa.",
    justify: "Nódulo sólido > 15 mm com espiculação e Lung-RADS 4B em ex-tabagista com histórico familiar positivo tem probabilidade de malignidade > 65% (modelos de predição como Mayo Clinic). As diretrizes Fleischner e INCA/SBPT indicam investigação tecidual imediata para nódulos sólidos > 8 mm com alta suspeição. O adenocarcinoma é o subtipo mais frequente em mulheres e ex-fumantes.",
    expectedAnamnesis: "Investigar se a paciente tem sintomas (tosse, hemoptise, dispneia, perda de peso) — identificar assintomáticos vs. sintomáticos | Tabagismo: carga em anos-maço, tempo de cessação | Exposição a carcinógenos: radônio, amianto, fumaça passiva | Histórico familiar de neoplasia (especialmente pulmão) | Histórico pessoal de neoplasia | Exposição a agentes infecciosos (áreas endêmicas de histoplasmose, paracoccidioidomicose) | Ocupação e exposições ambientais",
    expectedPhysical: "Sinais vitais: PA, peso, IMC | Inspeção: estado geral, presença de dedos em baqueta | Palpação: linfonodos cervicais, supraclaviculares e axilares | Tórax: ausculta completa (MV normal neste caso) | Abdome: fígado e baço (rastrear metástases) | Pesquisar síndrome de Horner se tumor apical",
    expectedExams: [
      { exam: "TC de tórax com contraste", justify: "Melhor caracterização do nódulo (margens, densidade, realce), avaliação mediastinal e hilar, rastreio de metástases pulmonares", expected: "Nódulo espiculado Lung-RADS 4B, sem adenopatia" },
      { exam: "PET-CT", justify: "Estadiamento metabólico do nódulo e rastreio de metástases a distância antes de definir conduta cirúrgica", expected: "Nódulo hipermetabólico (SUV > 2,5 sugere malignidade); excluir metástases" },
      { exam: "Biópsia percutânea guiada por TC", justify: "Confirmação histológica — indicada em Lung-RADS 4B > 8 mm antes de ressecção em pacientes com contraindicações ou preferência pela confirmação pré-operatória", expected: "Adenocarcinoma — verificar EGFR, ALK, ROS1, PDL-1 para terapia-alvo" },
      { exam: "TC de crânio com contraste", justify: "Estadiamento completo — rastrear metástases cerebrais obrigatório em CPNPC", expected: "Ausência de metástases cerebrais neste caso" },
      { exam: "Espirometria / provas de função pulmonar", justify: "Avaliar reserva pulmonar para elegibilidade cirúrgica (lobectomia)", expected: "Função pulmonar adequada para ressecção" },
      { exam: "EBUS (ultrassonografia endobrônquica)", justify: "Estadiamento mediastinal — avaliar linfonodos suspeitos antes da cirurgia se PET-CT mostrar captação mediastinal", expected: "Ausência de comprometimento linfonodal mediastinal" }
    ],
    expectedConduct: "Farmacológica: Não iniciar quimioterapia ou imunoterapia sem confirmação histológica e estadiamento completo; após confirmação de adenocarcinoma — solicitar painel molecular (EGFR, ALK, ROS1, KRAS, PDL-1) para guiar terapia-alvo em caso de doença avançada | Não farmacológica: Ressecção cirúrgica (lobectomia do lobo superior direito por videotoracoscopia — VATS) com linfadenectomia mediastinal é o tratamento de escolha para CPNPC estágio I ressecável; se confirmação histológica pré-operatória desejada: biópsia percutânea guiada por TC antes da cirurgia | Encaminhamento: Cirurgia Torácica (urgente — nódulo de alta suspeição); Oncologia para planejamento conjunto; Pneumologia para seguimento | Orientações ao paciente: Explicar de forma clara e empática que o nódulo tem características que precisam ser investigadas com biópsia ou cirurgia; não confirmar diagnóstico de câncer antes da histologia; reforçar que o diagnóstico precoce é favorável ao tratamento | Seguimento: Biópsia ou ressecção em até 4–6 semanas após o diagnóstico de Lung-RADS 4B; sem indicação de watchful waiting para nódulo sólido > 15 mm espiculado",
    expectedCommunication: "Apresentação: Identificar-se e acolher a paciente — diagnóstico incidental pode gerar ansiedade | Comunicação do diagnóstico: Explicar que foi encontrado um nódulo no pulmão com características que exigem investigação mais detalhada; não usar a palavra 'câncer' sem confirmação histológica | Escuta ativa: Perguntar o que a paciente já sabe e o que está sentindo; dar espaço para perguntas; incluir familiar na conversa se a paciente desejar",
    criticalErrors: [
      "Não aplicar critérios de classificação de risco (Fleischner ou Lung-RADS) ao nódulo de 1,8 cm espiculado — conduta sem base em diretriz",
      "Indicar apenas observação (watchful waiting) para nódulo Lung-RADS 4B > 15 mm — conduta contraindicada pela alta suspeição",
      "Confirmar diagnóstico de adenocarcinoma ao paciente sem confirmação histológica",
      "Não solicitar painel molecular (EGFR, ALK, ROS1, PDL-1) após confirmação de adenocarcinoma — omissão que compromete o planejamento terapêutico",
      "Não encaminhar para Cirurgia Torácica em nódulo de alta suspeição ressecável — atraso diagnóstico e terapêutico"
    ]
  },
  instD: {
    title: "CHECKLIST — NÓDULO PULMONAR DE ALTA SUSPEIÇÃO (ADENOCARCINOMA)",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Acolheu a paciente assintomática diante de um achado incidental potencialmente grave, sem gerar pânico desnecessário", score: 0.5, ref: "CFM Res. 2232/2019; SBPT, 2022" },
          { item: "Não confirmou diagnóstico de câncer sem confirmação histológica — comunicou como 'nódulo suspeito que precisa ser investigado'", score: 0.5, ref: "CFM — Bioética e comunicação em oncologia, 2020" }
        ]
      },
      {
        h: "ANAMNESE E HISTÓRICO CLÍNICO",
        items: [
          { item: "Quantificou o tabagismo em anos-maço (20 anos-maço, cessação há 5 anos) como fator de risco principal", score: 0.5, ref: "INCA/MS, 2023; SBPT, 2022" },
          { item: "Identificou histórico familiar de adenocarcinoma de pulmão na mãe como fator de risco adicional", score: 1.0, ref: "SBPT — Diretrizes em Câncer de Pulmão, 2022; INCA, 2023" },
          { item: "Investigou ausência de sintomas (tosse, hemoptise, perda de peso) confirmando apresentação assintomática", score: 0.5, ref: "SBPT, 2022" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Pesquisou linfonodos cervicais e supraclaviculares para rastreio de metástases ganglionares", score: 0.5, ref: "SBPT, 2022; Semiologia Médica — Porto, 8ª ed., 2019" },
          { item: "Realizou ausculta pulmonar completa e identificou ausência de achados adicionais", score: 0.5, ref: "Semiologia Médica — Porto, 8ª ed., 2019" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Aplicou critérios de classificação de risco (Fleischner Society ou Lung-RADS) ao nódulo de 1,8 cm espiculado e classificou como alta suspeição", score: 1.0, ref: "SBPT — Diretrizes em Nódulo Pulmonar, 2022; MacMahon et al., 2017 ⚠️" },
          { item: "Indicou investigação tecidual (biópsia guiada por TC ou ressecção) em nódulo Lung-RADS 4B > 8 mm — não indicou apenas observação", score: 1.0, ref: "SBPT, 2022; INCA/MS — Rastreamento câncer de pulmão, 2023" },
          { item: "Solicitou PET-CT para estadiamento metabólico antes de definir cirurgia", score: 0.5, ref: "SBPT, 2022" },
          { item: "Solicitou TC de crânio para rastreio de metástases cerebrais no estadiamento do CPNPC", score: 0.5, ref: "SBPT, 2022" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO",
        items: [
          { item: "Indicou encaminhamento urgente para Cirurgia Torácica para avaliação de ressecção ou biópsia", score: 1.0, ref: "SBPT, 2022; INCA/MS, 2023" },
          { item: "Orientou a paciente sobre a necessidade de investigação histológica antes de qualquer conclusão diagnóstica definitiva", score: 0.5, ref: "CFM — Bioética; SBPT, 2022" }
        ]
      }
    ]
  }
},

{
  id: 8,
  title: "Abaulamento na virilha ao esforço há seis meses",
  sub: "Ambulatório de Cirurgia Geral — Hospital Geral",
  tema: "Cirurgia",
  topic: "hérnia inguinal",
  level: "moderado",
  cardAccent: "#1E8449",
  instA: {
    scenario: "Ambulatório de Cirurgia Geral de hospital geral. Turno matutino. Caso clínico escrito — sem ator.",
    patient: "F.T., 34 anos, masculino, operário de construção civil, sem comorbidades.",
    complaint: "Abaulamento doloroso na virilha direita ao realizar esforço físico, que desaparece ao deitar, há cerca de 6 meses.",
    tasks: [
      "Analise o quadro clínico e formule o diagnóstico topográfico e etiológico da hérnia.",
      "Interprete os achados do exame físico e classifique a hérnia conforme os critérios clínicos.",
      "Solicite os exames complementares pertinentes e justifique sua indicação.",
      "Proponha a conduta cirúrgica indicada e explique as opções técnicas disponíveis.",
      "Oriente o paciente sobre o pré-operatório, o procedimento e os cuidados pós-operatórios."
    ]
  },
  instB: {
    vitals: {
      PA: "118/76 mmHg",
      FC: "72 bpm",
      FR: "16 irpm",
      Tax: "36,3°C",
      Peso: "78 kg",
      Altura: "1,74 m",
      IMC: "25,8 kg/m²"
    },
    physicalGeneral: "Paciente em bom estado geral, consciente, orientado, eupneico, afebril. Mucosas normocoradas, anictérico, acianótico.",
    physicalSeg: "ABDOME: Flácido, ruídos hidroaéreos presentes e normais. Sem visceromegalias. | REGIÃO INGUINAL DIREITA: Abaulamento visível e palpável na região inguinal direita ao realizar manobra de Valsalva. O abaulamento se projeta pelo orifício inguinal interno, acima do ligamento inguinal, e desce em direção ao escroto (não atingindo o testículo). Redutível à palpação com o paciente em decúbito dorsal. Anel inguinal externo alargado à palpação digital. Sinal do dedo positivo — percussão na ponta do dedo introduzido no canal inguinal detecta impulsão ao esforço. Ausência de sinais flogísticos locais. | GENITÁLIA: Testículos de aspecto e consistência normais, bilateralmente tópicos. | REGIÃO INGUINAL ESQUERDA: Sem abaulamentos ou alterações.",
    labs: [
      { test: "Hemograma completo", val: "Dentro dos limites normais", ref: "—", alt: false },
      { test: "Coagulograma (TP/TTPA)", val: "Dentro dos limites normais", ref: "—", alt: false },
      { test: "Glicemia de jejum", val: "92 mg/dL", ref: "70–99 mg/dL", alt: false },
      { test: "Creatinina", val: "0,9 mg/dL", ref: "0,7–1,2 mg/dL", alt: false }
    ],
    image: "ULTRASSONOGRAFIA DE PAREDE ABDOMINAL (REGIÃO INGUINAL DIREITA): Defeito herniário no canal inguinal direito medindo aproximadamente 1,8 cm, com herniação de alça intestinal durante a manobra de Valsalva. Conteúdo herniário redutível. Sem sinais de encarceramento ou estrangulamento. Canal inguinal esquerdo sem defeitos. Testículos com ecotextura homogênea e sem alterações.",
    note: "Estação sem ator. Entregar dados clínicos, sinais vitais e exame físico ao início. Entregar exames laboratoriais quando solicitados. Entregar laudo de ultrassonografia apenas se o candidato solicitar o exame com justificativa adequada. Atentar se o candidato diferencia clinicamente hérnia inguinal direta de indireta e se indica corretamente a cirurgia.",
    patientProfile: "F.T., 34 anos, masculino. Operário de construção civil — trabalho com esforço físico intenso e levantamento de peso diário. Solteiro. Nega comorbidades. Nega cirurgias prévias. Nega tabagismo. Etilismo social (finais de semana). Sem medicamentos de uso contínuo.",
    script: [],
    hiddenInfo: "O paciente relata que o abaulamento surgiu após levantar um objeto muito pesado na obra há 6 meses — correlação direta com o esforço físico; só menciona se o candidato perguntar sobre o início e o gatilho dos sintomas. | Refere dor testicular ipsilateral ocasional, especialmente após o dia de trabalho — pode indicar compressão do cordão espermático pelo saco herniário; só menciona se o candidato perguntar sobre sintomas genitais associados.",
    actorBehavior: "Estação sem ator — não há paciente simulado. Raciocínio baseado nos dados clínicos e exames fornecidos nos impressos."
  },
  instC: {
    diagnosis: "Hérnia inguinal indireta à direita, redutível, em adulto jovem. Conteúdo herniário: alça intestinal. Sem sinais de encarceramento ou estrangulamento.",
    differentials: [
      "Hérnia inguinal direta — excluída pelo sinal do dedo positivo na ponta (hérnia indireta percorre o canal inguinal completo) e pela projeção pelo orifício inguinal interno; na direta o abaulamento é medial ao ligamento de Hesselbach",
      "Hidrocele testicular — excluída pelo achado de conteúdo herniário intestinal na USG e pela redutibilidade ao decúbito; hidrocele não é redutível e transluze à transiluminação",
      "Lipoma do cordão espermático — diferencial de abaulamento inguinal; excluído pela USG com alça intestinal herniada",
      "Linfonodo inguinal aumentado — excluído pela localização, redutibilidade e conteúdo intestinal à USG"
    ],
    context: "Paciente masculino jovem, 34 anos, trabalhador braçal com hérnia inguinal indireta direita redutível. A apresentação é clássica — abaulamento ao esforço, redução ao decúbito, sinal do dedo positivo. Indicação cirúrgica formal pela presença de hérnia sintomática e pelo risco de encarceramento.",
    justify: "A hérnia inguinal indireta percorre o canal inguinal a partir do orifício inguinal interno e pode se estender ao escroto — apresentação clínica deste caso. O sinal do dedo positivo com impulsão na ponta do dedo confirma o trajeto indireto. A USG confirma o conteúdo intestinal e afasta complicações. Hernioplastia inguinal é indicada em hérnias sintomáticas — watchful waiting é uma opção apenas em hérnias assintomáticas em pacientes de alto risco cirúrgico.",
    expectedAnamnesis: "Caracterizar o abaulamento: localização, surgimento com esforço, redução ao decúbito | Dor local: intensidade, irradiação para testículo | Fator desencadeante: esforço físico, levantamento de peso | Sintomas de complicação: encarceramento (abaulamento fixo, dor intensa, sinais de obstrução), estrangulamento (dor intensa, sinais de isquemia, febre) | Esforço ocupacional habitual | Cirurgias prévias na região inguinal | Tabagismo (fator de risco para recidiva pós-hernioplastia) | Constipação crônica (esforço evacuatório) | Sintomas de prostatismo (esforço miccional)",
    expectedPhysical: "Inspeção: avaliar abaulamento em repouso e durante Valsalva | Palpação: redutibilidade manual, caracterizar o orifício inguinal | Sinal do dedo: introduzir dedo indicador pelo escroto até o canal inguinal e solicitar Valsalva — impulsão na ponta = indireta; impulsão lateral = direta | Diferenciação com escroto: verificar se o abaulamento desce ao escroto | Genitália: palpar testículos para excluir patologia testicular associada | Membros inferiores: avaliar circulação (esclarecer dúvida com lipoma ou adenopatia)",
    expectedExams: [
      { exam: "Ultrassonografia de parede abdominal — região inguinal", justify: "Confirmar defeito herniário, caracterizar conteúdo, excluir encarceramento e diagnósticos diferenciais (lipoma, adenopatia, hidrocele)", expected: "Defeito no canal inguinal com herniação intestinal redutível" },
      { exam: "Exames pré-operatórios: hemograma, coagulograma, glicemia, creatinina", justify: "Avaliação pré-anestésica obrigatória para cirurgia eletiva", expected: "Dentro dos limites normais neste caso" }
    ],
    expectedConduct: "Farmacológica: Analgesia pós-operatória: dipirona 1g VO a cada 6h e/ou ibuprofeno 400 mg VO a cada 8h por 5 dias; profilaxia antibiótica cirúrgica: cefazolina 2g IV 30–60 min antes da incisão (RENAME 2022; CCIH/MS) | Não farmacológica: Hernioplastia inguinal eletiva — técnica de escolha: reparo com tela (Lichtenstein) ou videocirurgia (TAPP ou TEP); ambas têm menor taxa de recidiva que técnicas sem tela (Bassini, Shouldice); orientar afastamento do trabalho braçal por 4–6 semanas; sem indicação de cinta ou redução manual para tratamento definitivo | Encaminhamento: Cirurgia Geral ou Cirurgia do Aparelho Digestivo para hernioplastia eletiva | Orientações ao paciente: Explicar o que é a hérnia e a necessidade de cirurgia eletiva; orientar sobre sinais de alarme de encarceramento (dor intensa, abaulamento irredutível) — se ocorrerem: ir ao pronto-socorro imediatamente; orientar sobre o pós-operatório e retorno ao trabalho | Seguimento: Retorno em 7–10 dias após a cirurgia para avaliação da ferida; liberação para esforço físico após 4–6 semanas",
    expectedCommunication: "Apresentação: Identificar-se como cirurgião responsável | Comunicação do diagnóstico: Explicar o que é a hérnia em linguagem acessível ('uma abertura na musculatura da virilha por onde parte do intestino escapa'); explicar que a cirurgia é necessária para evitar complicações | Escuta ativa: Perguntar sobre o impacto no trabalho e na vida cotidiana; discutir o planejamento cirúrgico de forma participativa",
    criticalErrors: [
      "Não indicar cirurgia em hérnia inguinal sintomática redutível — atraso no tratamento com risco de encarceramento",
      "Não reconhecer sinais de encarceramento ou estrangulamento como indicação de cirurgia de urgência",
      "Não realizar ou descrever o sinal do dedo para diferenciar hérnia inguinal direta de indireta",
      "Indicar apenas uso de cinta como tratamento definitivo da hérnia — conduta incorreta, não resolução do defeito",
      "Não orientar o paciente sobre sinais de alarme (abaulamento fixo e doloroso) que exigem atendimento de urgência"
    ]
  },
  instD: {
    title: "CHECKLIST — HÉRNIA INGUINAL INDIRETA: DIAGNÓSTICO E CONDUTA CIRÚRGICA",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Explicou o diagnóstico de hérnia em linguagem acessível, sem jargões técnicos", score: 0.5, ref: "CFM Res. 2232/2019" },
          { item: "Orientou o paciente sobre os sinais de alarme de encarceramento e a necessidade de ir ao PS imediatamente se ocorrerem", score: 0.5, ref: "CBC — Consenso Brasileiro em Hérnia Inguinal, 2021" }
        ]
      },
      {
        h: "ANAMNESE E HISTÓRICO CLÍNICO",
        items: [
          { item: "Caracterizou o abaulamento: surgimento ao esforço, redução ao decúbito, localização na virilha direita", score: 0.5, ref: "CBC — Consenso Brasileiro em Hérnia Inguinal, 2021" },
          { item: "Investigou sintomas de complicação: dor intensa súbita, abaulamento fixo, náuseas e vômitos (encarceramento/estrangulamento)", score: 1.0, ref: "CBC, 2021; Sabiston — Textbook of Surgery ⚠️" },
          { item: "Investigou fatores de risco: esforço físico ocupacional, constipação, prostatismo", score: 0.5, ref: "CBC, 2021" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Avaliou o abaulamento em repouso e durante a manobra de Valsalva (Valsalva positivo)", score: 0.5, ref: "CBC, 2021; Semiologia Médica — Porto, 8ª ed., 2019" },
          { item: "Realizou e interpretou corretamente o sinal do dedo: impulsão na ponta = indireta", score: 1.0, ref: "CBC — Consenso Brasileiro em Hérnia Inguinal, 2021" },
          { item: "Verificou a redutibilidade manual da hérnia com o paciente em decúbito", score: 0.5, ref: "CBC, 2021" },
          { item: "Avaliou genitália masculina para excluir hidrocele e patologia testicular", score: 0.5, ref: "CBC, 2021; Semiologia Médica — Porto, 8ª ed., 2019" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Distinguiu clinicamente a hérnia inguinal indireta da direta com base no trajeto e no sinal do dedo", score: 1.0, ref: "CBC — Consenso Brasileiro em Hérnia Inguinal, 2021" },
          { item: "Solicitou ultrassonografia inguinal para confirmar o conteúdo herniário e excluir diagnósticos diferenciais", score: 0.5, ref: "CBC, 2021" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO",
        items: [
          { item: "Indicou hernioplastia inguinal eletiva com tela (Lichtenstein ou videocirurgia) como tratamento de escolha", score: 1.0, ref: "CBC — Consenso Brasileiro em Hérnia Inguinal, 2021; RENAME 2022" },
          { item: "Não indicou cinta ou tratamento conservador como definitivo para hérnia inguinal sintomática", score: 0.5, ref: "CBC, 2021" },
          { item: "Orientou sobre afastamento do trabalho braçal por 4–6 semanas no pós-operatório", score: 0.5, ref: "CBC, 2021" }
        ]
      }
    ]
  }
},

{
  id: 9,
  title: "Abaulamento doloroso na cicatriz de cirurgia abdominal anterior",
  sub: "PS — Pronto-Socorro",
  tema: "Cirurgia",
  topic: "hérnia incisional",
  level: "moderado",
  cardAccent: "#1E8449",
  instA: {
    scenario: "Pronto-Socorro de hospital geral. Turno noturno. Caso clínico escrito — sem ator.",
    patient: "D.L., 52 anos, feminino, dona de casa, obesa, diabética, com cirurgia abdominal prévia há 3 anos.",
    complaint: "Abaulamento na barriga que ficou muito doloroso e duro desde ontem à tarde, com náuseas e parada de gases.",
    tasks: [
      "Analise o quadro clínico e identifique se há sinais de complicação da hérnia (encarceramento ou estrangulamento).",
      "Realize a interpretação dos achados do exame físico e classifique a gravidade da apresentação.",
      "Solicite e interprete os exames complementares necessários para guiar a conduta.",
      "Proponha a conduta adequada à urgência do quadro — conservadora ou cirúrgica emergencial.",
      "Identifique os fatores de risco para complicações e para recidiva herniária nesta paciente."
    ]
  },
  instB: {
    vitals: {
      PA: "148/94 mmHg",
      FC: "108 bpm",
      FR: "20 irpm",
      Tax: "38,1°C",
      Peso: "102 kg",
      Altura: "1,60 m",
      IMC: "39,8 kg/m²"
    },
    physicalGeneral: "Paciente em regular estado geral, consciente, orientada, ansiosa, com dor abdominal moderada a intensa (EVA 7/10). Mucosas levemente desidratadas (1+/4+), anictérica, afebril no momento da aferição anterior, febril agora (38,1°C).",
    physicalSeg: "ABDOME: Presença de cicatriz de laparotomia mediana infraumbilical. Abaulamento de aproximadamente 8 x 6 cm na cicatriz, endurecido, muito doloroso à palpação, irredutível ao decúbito dorsal. Pele sobrejacente com eritema e calor local. Ruídos hidroaéreos hipoativos. Timpanismo difuso. Ausência de peristaltismo audível nas alças adjacentes à hérnia. Sinal de Blumberg negativo nos quadrantes distantes. | CARDIOVASCULAR: Taquicárdica, bulhas rítmicas, sem sopros.",
    labs: [
      { test: "Hemoglobina", val: "12,4 g/dL", ref: "12,0–16,0 g/dL", alt: false },
      { test: "Leucócitos", val: "18.600/mm³", ref: "4.000–11.000/mm³", alt: true },
      { test: "Neutrófilos", val: "88% (com desvio à esquerda)", ref: "50–70%", alt: true },
      { test: "PCR", val: "186 mg/L", ref: "< 5 mg/L", alt: true },
      { test: "Lactato sérico", val: "3,8 mmol/L", ref: "0,5–2,0 mmol/L", alt: true },
      { test: "Glicemia", val: "238 mg/dL", ref: "70–99 mg/dL", alt: true },
      { test: "Creatinina", val: "1,4 mg/dL", ref: "0,7–1,2 mg/dL", alt: true },
      { test: "Sódio", val: "136 mEq/L", ref: "135–145 mEq/L", alt: false },
      { test: "Potássio", val: "3,3 mEq/L", ref: "3,5–5,0 mEq/L", alt: true },
      { test: "Coagulograma (TP)", val: "INR 1,2", ref: "0,8–1,2", alt: false }
    ],
    image: "TOMOGRAFIA DE ABDOME COM CONTRASTE: Hérnia incisional da parede abdominal anterior com colo de 4 cm e saco herniário contendo alças de intestino delgado. Alças herniadas com paredes espessadas, edema mesentérico e ausência de realce mural pelo contraste — achados sugestivos de isquemia intestinal por estrangulamento. Pneumatose intestinal focal nas alças herniadas. Sem pneumoperitônio. Sem líquido livre em quantidade significativa.",
    note: "Estação sem ator. Entregar dados clínicos, sinais vitais e exame físico ao início. Entregar exames laboratoriais quando solicitados. Entregar laudo da TC quando solicitado. Atentar se o candidato reconhece os sinais de estrangulamento (febre, irredutibilidade, lactato elevado, pneumatose) e indica cirurgia de urgência.",
    patientProfile: "D.L., 52 anos, feminino. Dona de casa. Diabética tipo 2 em uso de metformina 850 mg 2x/dia e glibenclamida 5 mg/dia. Hipertensa em uso de enalapril 10 mg/dia. Obesidade grau II (IMC 39,8). Cesariana há 15 anos e colecistectomia aberta há 3 anos (origem da hérnia incisional). Hérnia conhecida há 2 anos, sem seguimento regular.",
    script: [],
    hiddenInfo: "A hérnia era conhecida há 2 anos mas a paciente evitou a cirurgia por medo e pelo trabalho doméstico — fator de atraso no tratamento eletivo; só menciona se o candidato perguntar sobre o tempo de conhecimento da hérnia e por que não operou antes. | Parada de eliminação de gases e fezes desde a manhã — sinal de oclusão intestinal; só menciona se o candidato perguntar diretamente sobre eliminação de gases e fezes.",
    actorBehavior: "Estação sem ator — não há paciente simulado. Raciocínio baseado nos dados clínicos e exames fornecidos nos impressos."
  },
  instC: {
    diagnosis: "Hérnia incisional estrangulada com sinais de isquemia intestinal (pneumatose, ausência de realce mural, lactato elevado). Indicação de laparotomia exploradora de urgência.",
    differentials: [
      "Hérnia incisional encarcerada sem estrangulamento — excluída pelos achados de isquemia intestinal na TC (pneumatose, ausência de realce), febre, lactato elevado e leucocitose com desvio à esquerda",
      "Abscesso de parede abdominal na cicatriz — excluído pela presença de conteúdo intestinal na TC e pela ausência de coleção purulenta",
      "Oclusão intestinal por bridas — diferencial de obstrução; excluída pela TC que mostra hérnia como ponto de transição",
      "Celulite de parede abdominal — excluída pelo comprometimento intestinal sistêmico e pelos achados tomográficos de isquemia"
    ],
    context: "Paciente feminina, 52 anos, obesa, diabética, com hérnia incisional de longa data evoluindo com quadro de estrangulamento — isquemia intestinal confirmada pela TC. Lactato de 3,8 mmol/L e pneumatose intestinal indicam compromisso vascular grave. Cirurgia de urgência é a única conduta adequada.",
    justify: "Os critérios de estrangulamento estão presentes: irredutibilidade, dor intensa, febre, leucocitose com desvio à esquerda, lactato elevado (3,8 mmol/L) e achados tomográficos de isquemia (ausência de realce mural, pneumatose). A pneumatose intestinal indica necrose da parede do intestino — emergência cirúrgica. O atraso na cirurgia aumenta o risco de perfuração, peritonite e sepse com alta mortalidade.",
    expectedAnamnesis: "Caracterizar o abaulamento: tempo de surgimento da piora, mudança de características | Dor: início súbito, intensidade, piora progressiva | Parada de gases e fezes: tempo | Náuseas e vômitos: frequência, conteúdo | Histórico da hérnia: tempo de conhecimento, tentativas de redução | Cirurgias prévias no abdome | Diabetes: controle, medicamentos | Febre: início | Uso de anticoagulantes | Alergias medicamentosas",
    expectedPhysical: "Sinais vitais: febre, taquicardia (sinais de sepse) | Inspeção: abaulamento irredutível, eritema da pele sobrejacente | Palpação: endurecimento, dor intensa local, calor local | Ausculta: hipoatividade de ruídos hidroaéreos (ileo paralítico/obstrução) | Pesquisar Blumberg (perfuração/peritonite) | Avaliar sinais de desidratação | Avaliar MMII (edema, TVP em obesa acamada)",
    expectedExams: [
      { exam: "TC de abdome e pelve com contraste", justify: "Gold standard para avaliar conteúdo herniário, isquemia intestinal (realce mural, pneumatose) e complicações", expected: "Alças herniadas sem realce, pneumatose — sinais de estrangulamento" },
      { exam: "Lactato sérico", justify: "Marcador de hipoperfusão e isquemia tecidual — orienta gravidade", expected: "Elevado (> 2 mmol/L) indica comprometimento vascular/isquemia" },
      { exam: "Hemograma e PCR", justify: "Avaliar leucocitose e processo inflamatório/infeccioso sistêmico", expected: "Leucocitose com desvio à esquerda, PCR elevado" },
      { exam: "Glicemia", justify: "Paciente diabética — hiperglicemia de estresse frequente em quadros agudos", expected: "Hiperglicemia (238 mg/dL) — necessita controle perioperatório" },
      { exam: "Eletrólitos e função renal", justify: "Avaliar distúrbios hidroeletrolíticos por vômitos e desidratação", expected: "Hipocalemia, creatinina levemente elevada" },
      { exam: "Coagulograma", justify: "Avaliação pré-operatória de urgência", expected: "INR 1,2 — dentro do aceitável para cirurgia" }
    ],
    expectedConduct: "Farmacológica: Hidratação venosa vigorosa: SF 0,9% 1.000 mL IV em 1h + reposição de potássio (KCl 19,1% diluído em SF conforme déficit); insulina regular IV para controle da hiperglicemia no perioperatório (alvo glicemia 140–180 mg/dL); antibioticoterapia profilática/empírica pré-operatória: cefazolina 2g IV + metronidazol 500 mg IV (cobertura para gram-negativos e anaeróbios — CCIH/MS, RENAME 2022); suspender metformina e glibenclamida | Não farmacológica: Jejum imediato; SNG se vômitos persistentes; cateter vesical para controle da diurese; oximetria de pulso contínua; laparotomia exploradora de urgência — ressecção do segmento intestinal isquêmico com anastomose primária ou exteriorização (colostomia), seguida de herniorrafia com tela se campo limpo ou diferida se campo contaminado | Encaminhamento: Cirurgia de urgência — acionar equipe cirúrgica imediatamente; UTI pós-operatória provável dada a complexidade | Orientações ao paciente/familiar: Explicar a gravidade do quadro e a necessidade de cirurgia urgente; obter consentimento informado; orientar familiar | Seguimento: UTI pós-operatória; avaliação de ferida; otimizar controle do diabetes e obesidade no pós-operatório; herniorrafia definitiva eletiva após 3–6 meses se não realizada no ato",
    expectedCommunication: "Apresentação: Identificar-se rapidamente diante da urgência | Comunicação do diagnóstico: Explicar que a hérnia está complicada com risco de gangrena do intestino e que a cirurgia de urgência é necessária agora; usar linguagem clara | Escuta ativa: Acolher o medo da paciente e dos familiares; garantir que a equipe está mobilizada; não minimizar a gravidade",
    criticalErrors: [
      "Não reconhecer os sinais de estrangulamento (febre, irredutibilidade, lactato elevado, pneumatose) e não indicar cirurgia de urgência",
      "Tentar redução manual forçada de hérnia encarcerada/estrangulada — contraindicado pelo risco de perfuração intestinal",
      "Não solicitar TC de abdome em hérnia irredutível sintomática — atraso no diagnóstico de isquemia",
      "Não controlar a glicemia no perioperatório em paciente diabética — risco de complicações infecciosas e de cicatrização",
      "Não iniciar antibioticoterapia pré-operatória adequada — risco de sepse e infecção de sítio cirúrgico"
    ]
  },
  instD: {
    title: "CHECKLIST — HÉRNIA INCISIONAL ESTRANGULADA: URGÊNCIA CIRÚRGICA",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Comunicou a gravidade do quadro e a necessidade de cirurgia urgente de forma clara e empática à paciente e ao familiar", score: 0.5, ref: "CFM Res. 2232/2019" },
          { item: "Obteve consentimento informado para o procedimento cirúrgico de urgência", score: 0.5, ref: "CFM Res. 2232/2019; Código de Ética Médica" }
        ]
      },
      {
        h: "ANAMNESE E HISTÓRICO CLÍNICO",
        items: [
          { item: "Identificou a parada de eliminação de gases e fezes como sinal de oclusão intestinal associada à hérnia", score: 1.0, ref: "CBC — Consenso Brasileiro em Hérnia Incisional, 2021" },
          { item: "Identificou a irredutibilidade de início agudo associada a dor intensa como sinal de encarceramento/estrangulamento", score: 1.0, ref: "CBC, 2021" },
          { item: "Investigou histórico de diabetes e hipertensão como comorbidades que impactam o risco cirúrgico", score: 0.5, ref: "CBC, 2021; CFM" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Identificou abaulamento irredutível, endurecido, com eritema e calor local — sinais de estrangulamento", score: 1.0, ref: "CBC, 2021; Semiologia Médica — Porto, 8ª ed., 2019" },
          { item: "Avaliou ruídos hidroaéreos e identificou hipoatividade como sinal de íleo obstrutivo/paralítico", score: 0.5, ref: "CBC, 2021" },
          { item: "Identificou taquicardia e febre como sinais sistêmicos de sepse incipiente", score: 0.5, ref: "SSC — Surviving Sepsis Campaign ⚠️; CFM" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Solicitou TC de abdome com contraste e identificou sinais tomográficos de isquemia (pneumatose, ausência de realce mural)", score: 1.0, ref: "CBC, 2021; SBCBM" },
          { item: "Valorizou o lactato elevado (3,8 mmol/L) como marcador de isquemia e hipoperfusão tecidual", score: 0.5, ref: "SSC ⚠️; CBC, 2021" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO",
        items: [
          { item: "Indicou laparotomia exploradora de urgência — não tentou redução manual em hérnia com sinais de estrangulamento", score: 1.0, ref: "CBC — Consenso Brasileiro em Hérnia Incisional, 2021" },
          { item: "Iniciou antibioticoterapia empírica pré-operatória com cobertura para gram-negativos e anaeróbios", score: 0.5, ref: "CCIH/MS; RENAME 2022; CBC, 2021" },
          { item: "Iniciou hidratação venosa e controle da glicemia no perioperatório", score: 0.5, ref: "SBD — Diabetes e cirurgia, 2022; RENAME 2022" }
        ]
      }
    ]
  }
},

{
  id: 10,
  title: "Dor abdominal intensa em barra após refeição gordurosa",
  sub: "PS — Pronto-Socorro",
  tema: "Cirurgia",
  topic: "pancreatite aguda",
  level: "moderado",
  cardAccent: "#F39C12",
  instA: {
    scenario: "Pronto-Socorro de hospital geral. Turno noturno. Caso clínico escrito — sem ator.",
    patient: "G.B., 44 anos, masculino, comerciante, etilista crônico, sem comorbidades conhecidas.",
    complaint: "Dor abdominal intensa no alto do abdome, com irradiação para as costas, iniciada 4 horas após refeição gordurosa e uso de bebida alcoólica.",
    tasks: [
      "Analise o quadro clínico e formule hipóteses diagnósticas justificadas.",
      "Solicite e interprete os exames complementares necessários para confirmar o diagnóstico.",
      "Classifique a gravidade da pancreatite aguda utilizando os critérios validados (Ranson e/ou BISAP).",
      "Proponha a conduta terapêutica inicial baseada na classificação de gravidade.",
      "Identifique as complicações precoces e os critérios de internação em UTI."
    ]
  },
  instB: {
    vitals: {
      PA: "100/60 mmHg",
      FC: "118 bpm",
      FR: "22 irpm",
      Tax: "38,2°C",
      Peso: "82 kg",
      Altura: "1,70 m",
      IMC: "28,4 kg/m²"
    },
    physicalGeneral: "Paciente em regular a mau estado geral, consciente, orientado, sudoreico, com dor intensa (EVA 9/10). Mucosas secas (2+/4+), anictérico, ligeiramente pálido. Posição antálgica (genupeitoral).",
    physicalSeg: "ABDOME: Distendido. Dor intensa e difusa à palpação, com maior intensidade no epigástrio e mesogástrio. Defesa muscular leve no epigástrio. Sinal de Blumberg negativo. Ausência de sinal de Cullen (equimose periumbilical) e de Grey-Turner (equimose em flancos). Ruídos hidroaéreos hipoativos. | CARDIOVASCULAR: Taquicárdico, bulhas rítmicas, sem sopros. PA 100/60 mmHg — hipotensão. | TÓRAX: Discreto velamento à percussão na base esquerda (derrame pleural leve associado). Murmúrio vesicular reduzido na base esquerda.",
    labs: [
      { test: "Amilase sérica", val: "1.840 U/L", ref: "< 100 U/L", alt: true },
      { test: "Lipase sérica", val: "3.420 U/L", ref: "< 60 U/L", alt: true },
      { test: "Hemoglobina", val: "14,2 g/dL", ref: "13,5–17,5 g/dL", alt: false },
      { test: "Hematócrito", val: "48%", ref: "40–54%", alt: false },
      { test: "Leucócitos", val: "16.400/mm³", ref: "4.000–11.000/mm³", alt: true },
      { test: "Glicemia", val: "186 mg/dL", ref: "70–99 mg/dL", alt: true },
      { test: "Ureia", val: "68 mg/dL", ref: "15–45 mg/dL", alt: true },
      { test: "Creatinina", val: "1,8 mg/dL", ref: "0,7–1,2 mg/dL", alt: true },
      { test: "Cálcio sérico", val: "7,8 mg/dL", ref: "8,5–10,5 mg/dL", alt: true },
      { test: "DHL", val: "740 UI/L", ref: "140–280 UI/L", alt: true },
      { test: "AST (TGO)", val: "88 U/L", ref: "< 40 U/L", alt: true },
      { test: "ALT (TGP)", val: "72 U/L", ref: "< 41 U/L", alt: true },
      { test: "Bilirrubina total", val: "1,8 mg/dL", ref: "< 1,2 mg/dL", alt: true },
      { test: "Triglicérides", val: "320 mg/dL", ref: "< 150 mg/dL", alt: true },
      { test: "PCR (12h após início)", val: "210 mg/L", ref: "< 5 mg/L", alt: true },
      { test: "Gasometria arterial — pH", val: "7,32", ref: "7,35–7,45", alt: true },
      { test: "Gasometria arterial — pO₂", val: "68 mmHg", ref: "> 80 mmHg", alt: true },
      { test: "Gasometria arterial — HCO₃", val: "18 mEq/L", ref: "22–26 mEq/L", alt: true }
    ],
    image: "ULTRASSONOGRAFIA DE ABDOME TOTAL: Pâncreas com contornos irregulares e ecogenicidade heterogênea, aumentado de volume, sugestivo de pancreatite aguda. Vesícula biliar com múltiplos cálculos (o maior medindo 1,2 cm), paredes espessadas (5 mm). Líquido livre peripancreático em pequena quantidade. Sem dilatação das vias biliares intra ou extra-hepáticas. | TOMOGRAFIA DE ABDOME COM CONTRASTE (ÍNDICE DE BALTHAZAR): Pâncreas com necrose de aproximadamente 30% do parênquima pancreático (terço distal). Coleção peripancreática aguda no espaço pararrenal anterior esquerdo. Infiltração gordurosa peripancreática extensa. Derrame pleural esquerdo de pequeno volume. Balthazar D — escore CT de gravidade (CTSI) = 6 (moderadamente grave).",
    note: "Estação sem ator. Entregar dados clínicos, sinais vitais e exame físico ao início. Entregar exames laboratoriais quando solicitados. Entregar USG quando solicitada. Entregar TC somente se o candidato indicar e justificar (critérios de TC na pancreatite: < 48h sem melhora clínica ou dúvida diagnóstica). Atentar se o candidato aplica escores de gravidade (Ranson e/ou BISAP).",
    patientProfile: "G.B., 44 anos, masculino. Comerciante, casado. Etilismo crônico (8–10 doses de cachaça/dia há 15 anos). Tabagismo (15 anos-maço). Sem medicamentos de uso contínuo. Sem cirurgias prévias. Refere episódios anteriores de 'dor de estômago forte' após álcool, sem diagnóstico formal.",
    script: [],
    hiddenInfo: "Etilismo pesado diário (8–10 doses/dia há 15 anos) — principal fator etiológico; só quantifica se o candidato perguntar especificamente sobre a quantidade e frequência do consumo de álcool. | Episódios anteriores semelhantes de dor epigástrica intensa após álcool — sugere pancreatite alcoólica recorrente; só menciona se o candidato perguntar sobre histórico de episódios similares.",
    actorBehavior: "Estação sem ator — não há paciente simulado. Raciocínio baseado nos dados clínicos e exames fornecidos nos impressos."
  },
  instC: {
    diagnosis: "Pancreatite aguda moderadamente grave — etiologia alcoólica (etilismo crônico) com colelitíase associada. Escore de Balthazar D, CTSI 6. Ranson ≥ 3 (gravidade). Complicação: necrose pancreática (30%) com coleção peripancreática aguda e derrame pleural esquerdo.",
    differentials: [
      "Pancreatite biliar (litiásica) — diferencial principal: colelitíase presente na USG; porém o etilismo crônico pesado e a ausência de dilatação de via biliar tornam a etiologia alcoólica mais provável; pode coexistir",
      "Úlcera péptica perfurada — excluída pela ausência de pneumoperitônio e pelo padrão de amilase/lipase extremamente elevados",
      "Isquemia mesentérica — excluída pela ausência de achados vasculares na TC e pelo padrão enzimático típico de pancreatite",
      "Pancreatite por hipertrigliceridemia — diferencial relevante: triglicérides de 320 mg/dL (limítrofe para etiologia — geralmente > 1.000 mg/dL); menos provável como causa isolada neste caso"
    ],
    context: "Paciente masculino, 44 anos, etilista crônico pesado com pancreatite aguda moderadamente grave — necrose pancreática de 30%, coleção peripancreática e derrame pleural esquerdo. Hipotensão, taquicardia, hipoxemia e hiperglicemia na admissão. Internação em UTI indicada.",
    justify: "Diagnóstico de pancreatite aguda por dois dos três critérios de Atlanta: dor abdominal típica + amilase e lipase > 3x o limite superior. Critérios de Ranson na admissão: idade > 55 anos (não) + leucócitos > 16.000 (sim) + glicemia > 200 (não) + DHL > 350 (sim) + AST > 250 (não) = 2 critérios na admissão. TC Balthazar D + necrose 30% = CTSI 6 (moderadamente grave). Hipotensão, taquicardia e hipoxemia indicam disfunção orgânica = pancreatite moderadamente grave (Atlanta 2012).",
    expectedAnamnesis: "Caracterizar a dor: localização epigástrica, irradiação em faixa para as costas, relação com alimentação e álcool | Etilismo: frequência, quantidade, tipo de bebida, duração | Colelitíase prévia conhecida | Episódios anteriores de pancreatite | Uso de medicamentos (estatinas, diuréticos tiazídicos, azatioprina — podem causar pancreatite) | Triglicérides elevados prévios | Cirurgias biliares prévias | Histórico familiar de pancreatite",
    expectedPhysical: "Sinais vitais: hipotensão, taquicardia, febre, taquipneia — identificar sinais de gravidade | Posição antálgica (genupeitoral) | Abdome: distensão, dor epigástrica intensa, defesa, ausência de peristaltismo | Pesquisar Cullen e Grey-Turner (equimoses — necrose hemorrágica) | Tórax: avaliar derrame pleural (frequente na pancreatite grave) | Icterícia: pancreatite biliar com obstrução",
    expectedExams: [
      { exam: "Amilase e lipase sérica", justify: "Diagnóstico de pancreatite aguda — lipase tem maior sensibilidade e especificidade que amilase", expected: "Elevação > 3x o limite superior confirma diagnóstico" },
      { exam: "Hemograma, ureia, creatinina, glicemia, cálcio, DHL, AST", justify: "Calcular escore de Ranson na admissão e avaliar disfunção orgânica", expected: "Leucocitose, hiperglicemia, hipocalcemia, DHL elevado, TGO elevado" },
      { exam: "Gasometria arterial", justify: "Avaliar hipoxemia (síndrome do desconforto respiratório agudo — SARA) e acidose", expected: "Hipoxemia (pO₂ < 60 mmHg) e acidose metabólica em pancreatite grave" },
      { exam: "Ultrassonografia de abdome", justify: "Investigar etiologia biliar (colelitíase), dilatação de via biliar, visualizar pâncreas", expected: "Colelitíase, pâncreas edemaciado, líquido peripancreático" },
      { exam: "TC de abdome com contraste (protocolo pancreático)", justify: "Indicada em < 48–72h se dúvida diagnóstica, piora clínica ou para estadiamento de necrose (Balthazar)", expected: "Necrose, coleções, Balthazar C-E — orienta prognóstico e conduta" },
      { exam: "Triglicérides sérico", justify: "Excluir hipertrigliceridemia como etiologia — causa relevante de pancreatite aguda", expected: "320 mg/dL — limítrofe; pancreatite por TG geralmente exige > 1.000 mg/dL" }
    ],
    expectedConduct: "Farmacológica: Hidratação venosa agressiva precoce — SF 0,9% ou Ringer Lactato 250–500 mL/h nas primeiras 12–24h (Ringer Lactato é preferido por reduzir mortalidade — ⚠️ ACG 2013 endossado pela SBCP); analgesia: dipirona 1g IV a cada 6h + tramadol 100 mg IV se dor intensa (evitar morfina em excesso — espasmo do esfíncter de Oddi é controverso ⚠️); antiemético: metoclopramida 10 mg IV; insulina regular IV para controle glicêmico (alvo 140–180 mg/dL); NÃO usar antibiótico profilático em pancreatite sem infecção confirmada (SBCP/MS); NÃO usar inibidores de protease (somatostatina) de rotina | Não farmacológica: Jejum inicial (primeiras 24–48h) com progressão precoce para dieta por via enteral se tolerado (nutrição enteral precoce reduz complicações infecciosas — preferível à parenteral); cateter vesical para monitorar diurese (alvo > 0,5 mL/kg/h); oxigenoterapia para manter SpO₂ > 94%; monitorização contínua em UTI | Encaminhamento: UTI para pancreatite moderadamente grave/grave com disfunção orgânica; Cirurgia para complicações tardias (pseudocisto infectado, necrose infectada — debridamento cirúrgico ou drenagem percutânea); Gastroenterologia para colangiopancreatografia retrógrada endoscópica (CPRE) se pancreatite biliar com coledocolitíase | Orientações ao paciente/familiar: Explicar a gravidade do quadro e a necessidade de internação em UTI; abordar etilismo como fator causal; iniciar abordagem de dependência alcoólica após estabilização | Seguimento: Colecistectomia laparoscópica eletiva após resolução da pancreatite aguda biliar (4–6 semanas); acompanhamento ambulatorial para cessação do etilismo e rastreio de pancreatite crônica",
    expectedCommunication: "Apresentação: Identificar-se rapidamente diante da urgência | Comunicação do diagnóstico: Explicar que o pâncreas está inflamado de forma grave e que o paciente precisa de internação em UTI; abordar o álcool como causa sem julgamento | Escuta ativa: Envolver familiar; validar a dor e o sofrimento; não minimizar a gravidade nem alarmar de forma desproporcional",
    criticalErrors: [
      "Não iniciar hidratação venosa agressiva precoce em pancreatite aguda grave — principal medida terapêutica, sua omissão aumenta a mortalidade",
      "Prescrever antibiótico profilático sem infecção confirmada — conduta incorreta que favorece resistência bacteriana",
      "Não aplicar escore de gravidade (Ranson ou BISAP) para estratificar o risco e definir a necessidade de UTI",
      "Não indicar internação em UTI em pancreatite com disfunção orgânica (hipotensão, hipoxemia, oligúria)",
      "Não investigar etiologia biliar com USG de abdome — omissão que pode indicar necessidade de CPRE",
      "Não abordar o etilismo como fator causal e não encaminhar para tratamento de dependência"
    ]
  },
  instD: {
    title: "CHECKLIST — PANCREATITE AGUDA: DIAGNÓSTICO, GRAVIDADE E CONDUTA",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Abordou o etilismo como fator causal de forma empática e sem julgamento moral", score: 0.5, ref: "CFM Res. 2232/2019; MS — Política Nacional sobre Álcool, 2010" },
          { item: "Comunicou a gravidade do quadro e a necessidade de UTI ao paciente e/ou familiar de forma clara", score: 0.5, ref: "CFM Res. 2232/2019" }
        ]
      },
      {
        h: "ANAMNESE E HISTÓRICO CLÍNICO",
        items: [
          { item: "Identificou a dor epigástrica em faixa com irradiação para as costas como apresentação típica de pancreatite", score: 0.5, ref: "SBCP — Consenso em Pancreatite Aguda, 2022" },
          { item: "Quantificou o etilismo (8–10 doses/dia há 15 anos) como principal fator etiológico", score: 1.0, ref: "SBCP, 2022; MS — Política Nacional sobre Álcool" },
          { item: "Investigou episódios anteriores semelhantes para rastrear pancreatite recorrente ou crônica", score: 0.5, ref: "SBCP, 2022" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Identificou hipotensão e taquicardia como sinais de instabilidade hemodinâmica na admissão", score: 1.0, ref: "SBCP, 2022; SSC ⚠️" },
          { item: "Pesquisou sinais de Cullen e Grey-Turner (equimoses periumbilical e em flancos) — indicadores de necrose hemorrágica", score: 0.5, ref: "Semiologia Médica — Porto, 8ª ed., 2019; SBCP, 2022" },
          { item: "Identificou derrame pleural à esquerda (velamento à percussão na base esquerda) como complicação da pancreatite", score: 0.5, ref: "SBCP, 2022" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Confirmou o diagnóstico pelos critérios de Atlanta: dor típica + lipase/amilase > 3x o limite superior", score: 1.0, ref: "SBCP — Consenso em Pancreatite Aguda, 2022; Classificação de Atlanta 2012 ⚠️" },
          { item: "Aplicou escore de Ranson e/ou BISAP para estratificação de gravidade e indicação de UTI", score: 1.0, ref: "SBCP, 2022; Ranson JH ⚠️" },
          { item: "Indicou TC de abdome para estadiamento da necrose (Balthazar) em pancreatite grave", score: 0.5, ref: "SBCP, 2022" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO",
        items: [
          { item: "Iniciou hidratação venosa agressiva precoce (250–500 mL/h) como primeira medida terapêutica", score: 1.0, ref: "SBCP, 2022; ACG Guidelines 2013 ⚠️; RENAME 2022" },
          { item: "Não prescreveu antibiótico profilático sem infecção confirmada", score: 0.5, ref: "SBCP, 2022" },
          { item: "Indicou internação em UTI pela presença de disfunção orgânica (hipotensão, hipoxemia)", score: 0.5, ref: "SBCP, 2022; Classificação de Atlanta 2012 ⚠️" }
        ]
      }
    ]
  }
},

{
  id: 11,
  title: "Dor súbita no peito e falta de ar em jovem sem doenças pulmonares",
  sub: "PS — Pronto-Socorro",
  tema: "Cirurgia",
  topic: "pneumotórax",
  level: "moderado",
  cardAccent: "#2980B9",
  instA: {
    scenario: "Pronto-Socorro de hospital geral. Turno vespertino. Caso clínico escrito — sem ator.",
    patient: "B.S., 22 anos, masculino, estudante universitário, alto, magro, tabagista leve, sem doenças pulmonares conhecidas.",
    complaint: "Dor súbita em pontada no lado direito do peito e falta de ar iniciadas há 2 horas, em repouso.",
    tasks: [
      "Analise o quadro clínico e formule hipóteses diagnósticas para a dor torácica aguda.",
      "Interprete os achados do exame físico e identifique os sinais compatíveis com a hipótese principal.",
      "Solicite e interprete os exames complementares necessários para confirmar o diagnóstico.",
      "Classifique o pneumotórax quanto ao tamanho e à presença de comprometimento hemodinâmico.",
      "Proponha a conduta adequada conforme a classificação e as diretrizes brasileiras."
    ]
  },
  instB: {
    vitals: {
      PA: "124/80 mmHg",
      FC: "102 bpm",
      FR: "22 irpm",
      Tax: "36,5°C",
      Peso: "70 kg",
      Altura: "1,88 m",
      IMC: "19,8 kg/m²"
    },
    physicalGeneral: "Paciente em regular estado geral, consciente, orientado, ansioso, com discreta dispneia e dor ao inspirar. Mucosas normocoradas, anictérico, acianótico. Saturação de O₂ de 94% em ar ambiente. Biotipo longilíneo.",
    physicalSeg: "TÓRAX: Expansibilidade reduzida à direita. Frêmito toracovocal abolido no hemitórax direito. Percussão com timpanismo em todo o hemitórax direito. Ausculta: murmúrio vesicular abolido em todo o hemitórax direito. Traqueia e mediastino sem desvio ao exame clínico. | CARDIOVASCULAR: Taquicárdico, bulhas rítmicas normofonéticas, sem sopros. | ABDOME: Flácido, indolor, sem alterações.",
    labs: [
      { test: "Hemograma completo", val: "Dentro dos limites normais", ref: "—", alt: false },
      { test: "Gasometria arterial — pH", val: "7,42", ref: "7,35–7,45", alt: false },
      { test: "Gasometria arterial — pO₂", val: "78 mmHg", ref: "> 80 mmHg", alt: true },
      { test: "Gasometria arterial — pCO₂", val: "36 mmHg", ref: "35–45 mmHg", alt: false }
    ],
    image: "RADIOGRAFIA DE TÓRAX PA (inspiração): Linha pleural visível no hemitórax direito, paralela à parede torácica, com hipertransparência sem trama vascular entre a linha e a parede. Colapso pulmonar estimado em 40–50% do volume do hemitórax direito. Sem desvio mediastinal. Sem derrame pleural. Hemitórax esquerdo sem alterações.",
    note: "Estação sem ator. Entregar dados clínicos, sinais vitais e exame físico ao início. Entregar gasometria arterial quando solicitada. Entregar laudo da radiografia quando solicitado. Atentar se o candidato classifica o tamanho do pneumotórax (BTS: < 2 cm vs. ≥ 2 cm entre a parede e o pulmão) e escolhe a conduta adequada.",
    patientProfile: "B.S., 22 anos, masculino. Estudante de engenharia. Alto (1,88 m) e magro (IMC 19,8) — biotipo longilíneo de risco para pneumotórax espontâneo primário. Tabagista leve (5 cigarros/dia há 3 anos). Sem doenças pulmonares conhecidas. Sem cirurgias prévias. Nega trauma torácico.",
    script: [],
    hiddenInfo: "Episódio semelhante há 1 ano, que resolveu espontaneamente sem que o paciente procurou atendimento — segunda ocorrência de pneumotórax espontâneo; dado relevante pois segunda ocorrência é indicação de pleurodese; só menciona se o candidato perguntar sobre episódios anteriores semelhantes. | O início foi em repouso, assistindo TV — não houve esforço físico ou trauma; só menciona se o candidato perguntar sobre a circunstância do início dos sintomas.",
    actorBehavior: "Estação sem ator — não há paciente simulado. Raciocínio baseado nos dados clínicos e exames fornecidos nos impressos."
  },
  instC: {
    diagnosis: "Pneumotórax espontâneo primário à direita de grande volume (colapso 40–50%). Segunda ocorrência — indicação de pleurodese após resolução. Hemodinamicamente estável.",
    differentials: [
      "Pneumotórax traumático — excluído pela ausência de trauma e pelo contexto de início espontâneo em repouso",
      "Pneumotórax hipertensivo — excluído pela ausência de desvio mediastinal, hipotensão, distensão de jugulares e deterioração hemodinâmica rápida",
      "Tromboembolismo pulmonar — diferencial de dor torácica aguda e hipoxemia em jovem; excluído pelo timpanismo e abolição do MV (padrão de pneumotórax) e pela radiografia confirmatória",
      "Pleurite aguda viral — diferencial de dor pleurítica; excluída pelo timpanismo e pela radiografia com linha pleural visível"
    ],
    context: "Paciente masculino jovem, 22 anos, com biotipo longilíneo, tabagista leve e segunda ocorrência de pneumotórax espontâneo primário à direita, com colapso de 40–50%. Hemodinamicamente estável. A segunda ocorrência justifica drenagem e pleurodese após resolução.",
    justify: "O pneumotórax espontâneo primário ocorre em jovens longilíneos por ruptura de bolhas subpleurais (blebs), sem doença pulmonar subjacente. O tabagismo aumenta o risco em até 22 vezes. Timpanismo + abolição do MV + expansibilidade reduzida no hemitórax direito são a tríade clínica. A radiografia confirma. Pneumotórax > 20% do hemitórax (ou > 2 cm entre pulmão e parede — critério BTS) é considerado grande volume e exige drenagem torácica.",
    expectedAnamnesis: "Caracterizar a dor: início súbito, pleurítica, localização | Dispneia: início, progressão | Circunstância do início: repouso, esforço, trauma | Episódios anteriores semelhantes — segunda ocorrência muda a conduta | Tabagismo: carga | Doenças pulmonares prévias (DPOC, asma, fibrose) — diferenciaria primário de secundário | Biotipo: alto, magro | Uso de drogas inalatórias (crack, cocaína)",
    expectedPhysical: "Sinais vitais: taquicardia, queda de saturação, PA (excluir pneumotórax hipertensivo) | Inspeção: expansibilidade assimétrica, biotipo longilíneo | Palpação: frêmito abolido, traqueia central | Percussão: timpanismo no hemitórax afetado — diferencia de derrame (macicez) | Ausculta: MV abolido | Avaliação de jugulares (distensão = pneumotórax hipertensivo) | Avaliação do desvio mediastinal",
    expectedExams: [
      { exam: "Radiografia de tórax PA em inspiração máxima", justify: "Primeiro exame para confirmar pneumotórax, estimar volume e avaliar desvio mediastinal", expected: "Linha pleural com hipertransparência, sem trama vascular" },
      { exam: "Gasometria arterial", justify: "Avaliar grau de hipoxemia e necessidade de oxigenoterapia", expected: "Hipoxemia leve-moderada (pO₂ 78 mmHg)" },
      { exam: "Ultrassonografia de tórax à beira leito (FAST-extended)", justify: "Diagnóstico rápido de pneumotórax à beira leito — ausência do sinal do deslizamento pleural", expected: "Ausência do lung sliding no hemitórax direito" }
    ],
    expectedConduct: "Farmacológica: Oxigenoterapia com máscara facial a 10 L/min — acelera a reabsorção do pneumotórax (O₂ a 100% aumenta taxa de reabsorção de 1,25% para 6% ao dia); analgesia: dipirona 1g IV a cada 6h; ansiolítico se necessário | Não farmacológica: Drenagem torácica com dreno fino (14–16 Fr) em selo d'água no 2º espaço intercostal, linha hemiclavicular (ou 4º–5º EIC, linha axilar anterior) — indicada pelo grande volume (> 20%); aspiração manual com cateter de pequeno calibre (Heimlich) pode ser usada como alternativa em PS para pneumotórax grande em paciente estável; NÃO indicar watchful waiting em pneumotórax > 20% sintomático; segunda ocorrência — indicação formal de pleurodese (cirúrgica por VATS ou química) após resolução do episódio agudo | Encaminhamento: Internação para drenagem e monitorização; Cirurgia Torácica para avaliação de pleurodese (segunda ocorrência) | Orientações ao paciente: Explicar o que é o pneumotórax; orientar sobre o risco de recorrência (30% após primeiro episódio) e a necessidade de parar de fumar; orientar sobre restrição de viagens aéreas até resolução completa | Seguimento: Radiografia de controle após drenagem; radiografia na alta para confirmar resolução; pleurodese em 4–6 semanas se segunda ocorrência",
    expectedCommunication: "Apresentação: Identificar-se, acolher o paciente ansioso | Comunicação do diagnóstico: Explicar que o ar entrou entre o pulmão e a parede do tórax causando o colapso parcial do pulmão; explicar o procedimento de drenagem de forma clara | Escuta ativa: Validar a ansiedade do jovem; abordar o tabagismo como fator de risco sem julgamento; esclarecer dúvidas sobre retorno às atividades",
    criticalErrors: [
      "Não diagnosticar pneumotórax hipertensivo se houver desvio mediastinal, hipotensão e distensão jugular — emergência com descompressão imediata indicada",
      "Indicar watchful waiting em pneumotórax de grande volume (> 20%) sintomático — conduta inadequada que retarda a resolução",
      "Não investigar episódios anteriores — segunda ocorrência muda a conduta (indicação de pleurodese)",
      "Não orientar cessação do tabagismo — tabagismo aumenta o risco de recorrência em até 22 vezes",
      "Confundir o timpanismo do pneumotórax com a macicez do derrame pleural — erro de raciocínio semiológico"
    ]
  },
  instD: {
    title: "CHECKLIST — PNEUMOTÓRAX ESPONTÂNEO PRIMÁRIO",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Acolheu o paciente jovem ansioso e explicou o diagnóstico e o procedimento de forma clara", score: 0.5, ref: "CFM Res. 2232/2019" },
          { item: "Abordou o tabagismo como fator de risco para recorrência sem julgamento", score: 0.5, ref: "INCA/MS — Tabagismo, 2023; SBPT, 2021" }
        ]
      },
      {
        h: "ANAMNESE E HISTÓRICO CLÍNICO",
        items: [
          { item: "Identificou o início súbito em repouso como característico de pneumotórax espontâneo primário", score: 0.5, ref: "SBPT — Diretrizes em Pneumotórax, 2021" },
          { item: "Investigou episódios anteriores semelhantes e identificou tratar-se da segunda ocorrência — muda a conduta", score: 1.0, ref: "SBPT, 2021; BTS Guidelines ⚠️" },
          { item: "Identificou o biotipo longilíneo como fator de risco para pneumotórax espontâneo primário", score: 0.5, ref: "SBPT, 2021" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Identificou a tríade clássica: expansibilidade reduzida + frêmito abolido + timpanismo à percussão no hemitórax direito", score: 1.0, ref: "Semiologia Médica — Porto, 8ª ed., 2019; SBPT, 2021" },
          { item: "Avaliou presença de desvio traqueal e distensão jugular para excluir pneumotórax hipertensivo", score: 1.0, ref: "SBPT, 2021" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Solicitou radiografia de tórax PA em inspiração e identificou a linha pleural com hipertransparência sem trama", score: 0.5, ref: "SBPT, 2021" },
          { item: "Classificou o pneumotórax como grande volume (colapso > 20% / > 2 cm pela BTS) justificando a drenagem", score: 1.0, ref: "SBPT, 2021; BTS Guidelines ⚠️" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO",
        items: [
          { item: "Indicou drenagem torácica (dreno fino ou aspiração com cateter) para pneumotórax grande volume sintomático", score: 1.0, ref: "SBPT, 2021; BTS Guidelines ⚠️" },
          { item: "Indicou pleurodese (cirúrgica por VATS ou química) por tratar-se da segunda ocorrência", score: 1.0, ref: "SBPT, 2021" },
          { item: "Orientou cessação do tabagismo e restrição de viagens aéreas até resolução completa", score: 0.5, ref: "SBPT, 2021; INCA/MS, 2023" }
        ]
      }
    ]
  }
},

{
  id: 12,
  title: "Queda brusca da saturação e hipotensão em paciente ventilado após trauma",
  sub: "PS — Pronto-Socorro / Sala de Emergência",
  tema: "Cirurgia",
  topic: "pneumotórax hipertensivo",
  level: "moderado",
  cardAccent: "#2980B9",
  instA: {
    scenario: "Sala de emergência de hospital geral. Turno noturno. Caso clínico escrito — sem ator. Paciente chegou após acidente de motocicleta.",
    patient: "T.A., 28 anos, masculino, motociclista, sem comorbidades, vítima de trauma torácico fechado.",
    complaint: "Piora súbita da saturação (queda de 98% para 72%) e hipotensão após intubação orotraqueal no PS. Paciente sedado e em ventilação mecânica.",
    tasks: [
      "Analise o quadro clínico e identifique o diagnóstico de emergência.",
      "Interprete os achados clínicos e diferencie pneumotórax hipertensivo de outras causas de instabilidade hemodinâmica pós-intubação.",
      "Proponha a conduta imediata — sem aguardar confirmação radiológica.",
      "Realize a descompressão imediata e descreva a técnica correta.",
      "Identifique os critérios para drenagem torácica definitiva após a descompressão."
    ]
  },
  instB: {
    vitals: {
      PA: "70/40 mmHg",
      FC: "136 bpm",
      FR: "Ventilação mecânica — volume corrente 500 mL, FR 14 irpm",
      Tax: "36,8°C",
      Peso: "75 kg",
      Altura: "1,76 m",
      IMC: "24,2 kg/m²"
    },
    physicalGeneral: "Paciente sedado (midazolam + fentanil), intubado e em ventilação mecânica. Instabilidade hemodinâmica grave: PA 70/40 mmHg, FC 136 bpm. Saturação de O₂ caiu de 98% para 72% de forma súbita após intubação. Cianose perioral.",
    physicalSeg: "TÓRAX: Expansibilidade completamente ausente à direita. Frêmito toracovocal abolido à direita. Percussão com timpanismo em todo o hemitórax direito. Ausculta: murmúrio vesicular ausente à direita — presente apenas à esquerda. Desvio da traqueia para a esquerda (palpável). | CARDIOVASCULAR: Taquicardia sinusal grave (136 bpm). PA 70/40 mmHg — choque. Veias jugulares distendidas bilateralmente. | ABDOME: Flácido, sem alterações relevantes ao exame imediato.",
    labs: [
      { test: "Gasometria arterial — pH", val: "7,18", ref: "7,35–7,45", alt: true },
      { test: "Gasometria arterial — pO₂", val: "42 mmHg", ref: "> 80 mmHg", alt: true },
      { test: "Gasometria arterial — pCO₂", val: "58 mmHg", ref: "35–45 mmHg", alt: true },
      { test: "Lactato sérico", val: "6,2 mmol/L", ref: "0,5–2,0 mmol/L", alt: true }
    ],
    image: "NÃO REALIZAR RADIOGRAFIA — Pneumotórax hipertensivo é diagnóstico CLÍNICO. A radiografia deve ser realizada APÓS a descompressão de urgência, nunca antes. | APÓS DESCOMPRESSÃO — Radiografia de tórax AP (portátil): Hemitórax direito com colapso pulmonar total. Dreno torácico em posição, com reexpansão pulmonar parcial. Sem desvio mediastinal residual. Fratura de arcos costais direitos (4º, 5º e 6º arcos) compatível com trauma.",
    note: "Estação sem ator. Entregar dados clínicos, sinais vitais e exame físico ao início (paciente em ventilação mecânica com colapso hemodinâmico). Os resultados de gasometria devem ser entregues se solicitados, mas atentar que a conduta NÃO deve aguardar exames laboratoriais — é emergência clínica. Atentar se o candidato age imediatamente com a descompressão sem aguardar radiografia.",
    patientProfile: "T.A., 28 anos, masculino. Motociclista, solteiro. Sem comorbidades. Trauma torácico fechado após colisão em alta velocidade. Intubado na cena pelo SAMU. Sedado com midazolam e fentanil. Não há informantes disponíveis.",
    script: [],
    hiddenInfo: "A pressão nas vias aéreas no ventilador mecânico aumentou abruptamente após a intubação (pressão de pico subiu de 20 para 42 cmH₂O) — sinal de pneumotórax em ventilado; dado disponível no monitor do ventilador mecânico; só identificado se o candidato solicitar a avaliação dos parâmetros do ventilador.",
    actorBehavior: "Estação sem ator — não há paciente simulado. Raciocínio baseado nos dados clínicos e exames fornecidos nos impressos."
  },
  instC: {
    diagnosis: "Pneumotórax hipertensivo à direita em paciente traumatizado, ventilado mecanicamente. Emergência cirúrgica com indicação de descompressão imediata por agulha (2º EIC, linha hemiclavicular direita) seguida de drenagem torácica definitiva.",
    differentials: [
      "Tamponamento cardíaco — diferencial de choque com distensão jugular; excluído pelo timpanismo e pela abolição do MV unilateral; no tamponamento: bulhas abafadas, sem diferença na ausculta pulmonar",
      "Intubação seletiva do brônquio direito — causa de abolição do MV à esquerda; excluída pela abolição do MV à DIREITA e pelo timpanismo (intubação seletiva causaria ausência de MV no lado oposto, não timpanismo)",
      "Hemotórax maciço — diferencial de choque pós-trauma; excluído pelo timpanismo (hemotórax causa macicez) e pela distensão jugular (hemotórax causa veias colabadas)",
      "Embolia pulmonar maciça — diferencial de hipoxemia e choque; excluída pelo timpanismo unilateral e pelo desvio traqueal"
    ],
    context: "Paciente traumatizado em ventilação mecânica com tríade clássica de pneumotórax hipertensivo: timpanismo unilateral + desvio traqueal contralateral + choque (hipotensão + taquicardia + distensão jugular). Emergência cirúrgica — cada minuto sem descompressão aumenta a mortalidade.",
    justify: "O pneumotórax hipertensivo ocorre quando ar entra no espaço pleural sem saída — mecanismo valvular — causando colapso pulmonar, desvio do mediastino, compressão cardíaca e colapso do retorno venoso. A tríade (timpanismo + desvio traqueal + choque) é patognomônica. Em ventilado, o diagnóstico se impõe pela piora súbita após intubação com aumento da pressão de pico no ventilador. NÃO aguardar radiografia — tratar imediatamente.",
    expectedAnamnesis: "Mecanismo do trauma: tipo, velocidade, ponto de impacto | Tempo de intubação e piora após o procedimento | Parâmetros ventilatórios: aumento da pressão de pico é sinal de pneumotórax em ventilado | Alterações hemodinâmicas: quando iniciou a hipotensão | Histórico médico relevante: coagulopatia, uso de anticoagulantes (trauma) | Informações do SAMU sobre achados na cena",
    expectedPhysical: "Sinais vitais: choque (hipotensão + taquicardia) — avaliar imediatamente | Traqueia: desvio para o lado oposto ao pneumotórax — sinal fundamental | Jugulares: distensão (compressão do retorno venoso) | Tórax: timpanismo unilateral + ausência de MV — confirma pneumotórax hipertensivo | Ausculta cardíaca: bulhas presentes (diferencia de tamponamento) | Saturação: queda súbita após intubação",
    expectedExams: [
      { exam: "NÃO aguardar exames — descompressão imediata", justify: "Pneumotórax hipertensivo é diagnóstico CLÍNICO — o atraso para exames é fatal", expected: "Tratamento imediato sem confirmação radiológica" },
      { exam: "Radiografia de tórax AP portátil (APÓS descompressão)", justify: "Confirmar posição do dreno e reexpansão pulmonar após a descompressão", expected: "Reexpansão pulmonar, sem desvio mediastinal residual, fraturas costais" },
      { exam: "Gasometria arterial", justify: "Monitorizar oxigenação e ventilação após intervenção", expected: "Melhora progressiva após descompressão" },
      { exam: "FAST (ultrassonografia à beira leito)", justify: "Avaliar hemopericárdio, hemoperitônio e hemotórax associados ao trauma", expected: "Líquido peripancreático ou pericárdico em politrauma" }
    ],
    expectedConduct: "Farmacológica: Manter sedoanalgesia adequada; expansão volêmica: SF 0,9% 500 mL IV rápido; vasopressor se hipotensão refratária após descompressão (noradrenalina 0,1–0,3 mcg/kg/min); ajustar ventilador após drenagem: reduzir pressão de pico | Não farmacológica: DESCOMPRESSÃO IMEDIATA por agulha — toracocentese de alívio: cateter de grosso calibre (14G) no 2º espaço intercostal, linha hemiclavicular, na borda superior do arco costal (evitar feixe vasculonervoso); saída de ar confirma o diagnóstico; SEGUIDA de drenagem torácica definitiva: dreno torácico 28–32 Fr no 4º–5º EIC, linha axilar anterior, em selo d'água; monitorização contínua após a descompressão | Encaminhamento: Cirurgia torácica se pneumotórax persistente após drenagem ou hemotórax associado; UTI para monitorização pós-trauma | Orientações ao familiar: Informar sobre a gravidade do quadro e os procedimentos realizados | Seguimento: Radiografia de controle após drenagem; avaliação de lesões associadas (fraturas costais, contusão pulmonar, hemotórax)",
    expectedCommunication: "Apresentação: Identificar-se rapidamente à equipe e ao familiar | Comunicação do diagnóstico (ao familiar): Explicar que o pulmão direito colapsou após o acidente e que uma intervenção urgente foi necessária; evitar termos técnicos | Escuta ativa: Acolher o familiar em situação de crise; dar informações progressivas conforme a evolução",
    criticalErrors: [
      "Aguardar radiografia antes de descomprimir pneumotórax hipertensivo — atraso fatal em emergência clínica",
      "Não reconhecer a tríade clínica de pneumotórax hipertensivo: timpanismo + desvio traqueal + choque",
      "Realizar descompressão no lado errado (contralateral) — erro técnico grave que agrava o quadro",
      "Não realizar drenagem torácica definitiva após a descompressão com agulha — a agulha é medida temporária",
      "Aumentar o volume corrente do ventilador ao invés de descomprimir — piora o pneumotórax hipertensivo"
    ]
  },
  instD: {
    title: "CHECKLIST — PNEUMOTÓRAX HIPERTENSIVO: EMERGÊNCIA CIRÚRGICA",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Comunicou ao familiar a gravidade do quadro e os procedimentos realizados de forma clara e empática", score: 0.5, ref: "CFM Res. 2232/2019" },
          { item: "Coordenou a equipe de forma eficiente na emergência, comunicando o diagnóstico e o plano de ação", score: 0.5, ref: "ABEM — Competências em emergência, 2022" }
        ]
      },
      {
        h: "RECONHECIMENTO CLÍNICO",
        items: [
          { item: "Identificou a tríade clínica de pneumotórax hipertensivo: timpanismo unilateral + desvio traqueal contralateral + choque", score: 1.0, ref: "ATLS — Advanced Trauma Life Support ⚠️; SBCM, 2022" },
          { item: "Identificou a distensão jugular como sinal de compressão do retorno venoso pelo pneumotórax hipertensivo", score: 0.5, ref: "ATLS ⚠️; SBCM, 2022" },
          { item: "Diferenciou pneumotórax hipertensivo de tamponamento cardíaco (bulhas abafadas ausentes, timpanismo presente)", score: 1.0, ref: "ATLS ⚠️; SBCM, 2022" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Não aguardou radiografia — reconheceu que pneumotórax hipertensivo é diagnóstico clínico que exige ação imediata", score: 1.0, ref: "ATLS ⚠️; SBCM, 2022; SBPT, 2021" },
          { item: "Identificou o aumento da pressão de pico no ventilador como sinal de pneumotórax em paciente ventilado", score: 0.5, ref: "ATLS ⚠️; SBCM, 2022" }
        ]
      },
      {
        h: "CONDUTA E TÉCNICA",
        items: [
          { item: "Realizou descompressão imediata com agulha 14G no 2º EIC, linha hemiclavicular, borda superior do arco costal", score: 1.0, ref: "ATLS ⚠️; SBCM, 2022" },
          { item: "Realizou ou indicou drenagem torácica definitiva com dreno 28–32 Fr no 4º–5º EIC linha axilar anterior após a descompressão", score: 1.0, ref: "ATLS ⚠️; SBPT, 2021" },
          { item: "Não aumentou parâmetros do ventilador mecânico como resposta à queda da saturação — descomprimiu primeiro", score: 0.5, ref: "ATLS ⚠️; SBCM, 2022" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO",
        items: [
          { item: "Ajustou os parâmetros do ventilador após a descompressão para reduzir pressão de pico nas vias aéreas", score: 0.5, ref: "SBCM, 2022; AMIB — Ventilação mecânica, 2023" }
        ]
      }
    ]
  }
},

{
  id: 13,
  title: "Dor no lado esquerdo da barriga com febre há dois dias",
  sub: "PS — Pronto-Socorro",
  tema: "Cirurgia",
  topic: "diverticulite aguda",
  level: "moderado",
  cardAccent: "#8E44AD",
  instA: {
    scenario: "Pronto-Socorro de hospital geral. Turno diurno. Caso clínico escrito — sem ator.",
    patient: "N.C., 60 anos, feminino, aposentada, com constipação crônica e histórico de diverticulose conhecida.",
    complaint: "Dor contínua na fossa ilíaca esquerda com febre há 2 dias, acompanhada de náuseas e piora ao movimento.",
    tasks: [
      "Analise o quadro clínico e formule hipóteses diagnósticas para a dor em fossa ilíaca esquerda.",
      "Solicite e interprete os exames complementares necessários para confirmar o diagnóstico.",
      "Classifique a gravidade da diverticulite pela classificação de Hinchey (modificada).",
      "Proponha a conduta terapêutica adequada à classificação de gravidade.",
      "Identifique as complicações possíveis e os critérios para intervenção cirúrgica."
    ]
  },
  instB: {
    vitals: {
      PA: "130/82 mmHg",
      FC: "100 bpm",
      FR: "18 irpm",
      Tax: "38,4°C",
      Peso: "74 kg",
      Altura: "1,60 m",
      IMC: "28,9 kg/m²"
    },
    physicalGeneral: "Paciente em regular estado geral, consciente, orientada, com dor moderada (EVA 6/10). Mucosas normocoradas, anictérica, afebril na aferição anterior, febre agora (38,4°C). Fácies de dor.",
    physicalSeg: "ABDOME: Plano, com hipoatividade de ruídos hidroaéreos. Dor à palpação profunda na fossa ilíaca esquerda (FIE) com defesa muscular localizada. Sinal de Blumberg positivo localizado em FIE. Sem pneumoperitônio (sem rigidez em tábua, sem Blumberg difuso). Sem massas palpáveis. | TOQUE RETAL: Dor à palpação do fundo de saco posterior à esquerda. Sem massas palpáveis intrarretais. Fezes presentes, sem sangue. | CARDIOVASCULAR: Taquicardia leve, bulhas rítmicas, sem sopros.",
    labs: [
      { test: "Hemoglobina", val: "12,6 g/dL", ref: "12,0–16,0 g/dL", alt: false },
      { test: "Leucócitos", val: "17.800/mm³", ref: "4.000–11.000/mm³", alt: true },
      { test: "Neutrófilos", val: "86% (desvio à esquerda)", ref: "50–70%", alt: true },
      { test: "PCR", val: "164 mg/L", ref: "< 5 mg/L", alt: true },
      { test: "Ureia", val: "32 mg/dL", ref: "15–45 mg/dL", alt: false },
      { test: "Creatinina", val: "0,9 mg/dL", ref: "0,7–1,2 mg/dL", alt: false },
      { test: "Glicemia", val: "102 mg/dL", ref: "70–99 mg/dL", alt: false }
    ],
    image: "TOMOGRAFIA DE ABDOME E PELVE COM CONTRASTE: Espessamento parietal do sigmóide com múltiplos divertículos e inflamação da gordura pericólica adjacente (densificação da gordura pericólica). Pequena coleção pericólica de 2,5 cm sem comunicação aérea. Sem pneumoperitônio. Sem líquido livre intraperitoneal em quantidade significativa fora da região. Classificação de Hinchey modificada: Estágio Ib (abscesso pericólico < 4 cm).",
    note: "Estação sem ator. Entregar dados clínicos, sinais vitais e exame físico ao início. Entregar resultados laboratoriais quando solicitados. Entregar laudo da TC quando o candidato solicitar e justificar. Atentar se o candidato aplica a classificação de Hinchey e escolhe a conduta correta para o estágio identificado.",
    patientProfile: "N.C., 60 anos, feminino. Aposentada (ex-costureira). Constipação crônica há 20 anos — uso habitual de laxativos. Diagnóstico de diverticulose em colonoscopia há 5 anos. Sem outros antecedentes relevantes. HAS leve controlada com losartana 25 mg/dia. Nega alergias medicamentosas.",
    script: [],
    hiddenInfo: "Primeiro episódio de diverticulite — dado relevante pois o manejo do primeiro episódio não complicado pode ser ambulatorial, mas neste caso há abscesso pericólico que muda a conduta; só menciona se o candidato perguntar sobre episódios anteriores semelhantes. | Diminuição do calibre das fezes nas últimas semanas antes do episódio — pode indicar estenose por inflamação crônica do cólon; só menciona se o candidato perguntar sobre o hábito intestinal recente.",
    actorBehavior: "Estação sem ator — não há paciente simulado. Raciocínio baseado nos dados clínicos e exames fornecidos nos impressos."
  },
  instC: {
    diagnosis: "Diverticulite aguda do sigmóide, complicada com abscesso pericólico de 2,5 cm — Hinchey modificado Ib. Indicação de internação, antibioticoterapia parenteral e avaliação de drenagem percutânea.",
    differentials: [
      "Câncer colorretal do sigmóide — diferencial obrigatório na fossa ilíaca esquerda em paciente > 50 anos; a colonoscopia deve ser realizada 6–8 semanas após resolução do episódio agudo para excluir malignidade",
      "Doença inflamatória intestinal (DII) — colite ulcerativa ou Crohn do cólon descendente; excluída provisoriamente pela TC (divertículos sem espessamento transmural difuso); colonoscopia após o episódio agudo",
      "Apendicite do apêndice em posição pélvica — diferencial de dor em FIE; excluída pela TC (apêndice normal visualizado, diverticulite do sigmóide confirmada)",
      "Torção ovariana ou cisto ovariano roto — diferencial em mulher com dor em FIE; excluída pela TC (ovários sem alterações)"
    ],
    context: "Paciente feminina, 60 anos, com diverticulose conhecida evoluindo com diverticulite aguda complicada (Hinchey Ib) — abscesso pericólico de 2,5 cm. Leucocitose com desvio à esquerda e PCR elevado confirmam processo inflamatório/infeccioso ativo. Internação e antibioticoterapia parenteral são obrigatórias.",
    justify: "Dor em FIE + febre + leucocitose em paciente com diverticulose conhecida é altamente sugestivo de diverticulite. A TC confirma: espessamento parietal do sigmóide com divertículos + densificação da gordura pericólica + abscesso < 4 cm = Hinchey Ib. O abscesso pericólico < 4 cm pode ser manejado conservadoramente com antibioticoterapia (drenagem percutânea reservada para abscessos > 4 cm ou falha clínica em 48–72h).",
    expectedAnamnesis: "Localização e caracterização da dor: FIE, início, intensidade, irradiação | Febre: duração, padrão | Hábito intestinal: constipação crônica, episódios de diarreia, diminuição do calibre das fezes | Episódios anteriores de diverticulite | Diagnóstico de diverticulose prévio | Náuseas, vômitos, parada de gases | Sangramento retal | Medicamentos: AINEs, corticoides (pioram diverticulite) | Comorbidades",
    expectedPhysical: "Sinais vitais: febre, taquicardia, PA | Inspeção: abdome plano ou distendido | Palpação: dor em FIE com defesa muscular localizada — 'apendicite do lado esquerdo' | Sinal de Blumberg localizado em FIE | Avaliar Blumberg difuso (peritonite generalizada = Hinchey III/IV) | Toque retal: dor no fundo de saco posterior esquerdo, excluir massa intraretal (câncer)",
    expectedExams: [
      { exam: "TC de abdome e pelve com contraste", justify: "Exame de escolha para confirmar diverticulite, classificar (Hinchey), avaliar abscesso, excluir perfuração livre e diagnósticos diferenciais", expected: "Espessamento do sigmóide com divertículos, densificação pericólica, abscesso pericólico — Hinchey Ib" },
      { exam: "Hemograma e PCR", justify: "Avaliar leucocitose e resposta inflamatória; monitorar evolução", expected: "Leucocitose com desvio à esquerda, PCR elevado" },
      { exam: "Colonoscopia (eletiva, 6–8 semanas após resolução)", justify: "Excluir câncer colorretal como diagnóstico diferencial ou fator precipitante", expected: "Diverticulose; excluir neoplasia" }
    ],
    expectedConduct: "Farmacológica: Antibioticoterapia parenteral para Hinchey Ib — cobertura para gram-negativos e anaeróbios: ciprofloxacino 400 mg IV a cada 12h + metronidazol 500 mg IV a cada 8h (RENAME 2022) OU ampicilina-sulbactam 3g IV a cada 6h; analgesia: dipirona 1g IV a cada 6h + morfina se dor intensa; antieméticos se náuseas | Não farmacológica: Internação hospitalar (Hinchey Ib — abscesso pericólico); jejum inicial com hidratação venosa; drenagem percutânea guiada por TC se abscesso > 4 cm ou falha da antibioticoterapia em 48–72h; cirurgia (sigmoidectomia de Hartmann) reservada para Hinchey III/IV (peritonite generalizada com fecal ou pus livre) ou falha do tratamento conservador | Encaminhamento: Colonoscopia eletiva em 6–8 semanas para excluir câncer colorretal; Cirurgia para avaliação de colectomia eletiva após 2º episódio ou em pacientes jovens (< 50 anos) com doença complicada | Orientações ao paciente: Explicar o diagnóstico e o tratamento; orientar sobre dieta rica em fibras e ingestão hídrica adequada para prevenir novos episódios; alertar para sinais de alarme (piora da dor, febre alta, rigidez abdominal = emergência) | Seguimento: Reavaliação clínica em 48–72h; colonoscopia eletiva após 6–8 semanas",
    expectedCommunication: "Apresentação: Identificar-se e acolher a paciente | Comunicação do diagnóstico: Explicar que um dos pequeníssimos sacos (divertículos) do intestino grosso inflamou e formou uma pequena coleção de pus que será tratada com antibiótico | Escuta ativa: Validar a dor e a ansiedade; explicar a necessidade de internação; abordar mudanças de hábito alimentar de forma positiva",
    criticalErrors: [
      "Não solicitar TC de abdome — indicada na diverticulite para classificação e exclusão de perfuração livre",
      "Não aplicar a classificação de Hinchey — fundamental para definir conduta conservadora vs. cirúrgica",
      "Indicar cirurgia de urgência em Hinchey Ib sem falha do tratamento conservador — conduta excessiva",
      "Não orientar colonoscopia eletiva após resolução do episódio agudo — omissão de rastreio de câncer colorretal",
      "Não cobrir anaeróbios na antibioticoterapia da diverticulite — o cólon é rico em flora anaeróbia"
    ]
  },
  instD: {
    title: "CHECKLIST — DIVERTICULITE AGUDA DO SIGMÓIDE",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Explicou o diagnóstico de forma acessível e orientou mudanças de hábito alimentar preventivas sem julgamento", score: 0.5, ref: "CFM Res. 2232/2019; SBCP — Consenso em Doença Diverticular, 2022" },
          { item: "Explicou a necessidade de colonoscopia eletiva após a recuperação para excluir câncer de cólon", score: 0.5, ref: "SBCP, 2022; INCA/MS — Rastreamento câncer colorretal, 2022" }
        ]
      },
      {
        h: "ANAMNESE E HISTÓRICO CLÍNICO",
        items: [
          { item: "Identificou dor em FIE com febre e leucocitose como tríade clínica da diverticulite ('apendicite do lado esquerdo')", score: 0.5, ref: "SBCP — Consenso em Doença Diverticular, 2022" },
          { item: "Investigou episódios anteriores e confirmou primeiro episódio de diverticulite", score: 0.5, ref: "SBCP, 2022" },
          { item: "Investigou sangramento retal e diminuição do calibre das fezes como sinais de alarme para câncer colorretal", score: 1.0, ref: "SBCP, 2022; INCA/MS, 2022" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Identificou dor com defesa muscular localizada em FIE e Blumberg positivo localizado", score: 0.5, ref: "SBCP, 2022; Semiologia Médica — Porto, 8ª ed., 2019" },
          { item: "Realizou toque retal para excluir massa intraretal e avaliar fundo de saco", score: 1.0, ref: "SBCP, 2022; INCA/MS, 2022" },
          { item: "Avaliou rigidez abdominal difusa para excluir peritonite generalizada (Hinchey III/IV)", score: 0.5, ref: "SBCP, 2022" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Solicitou TC de abdome e pelve com contraste como exame de escolha para diagnóstico e classificação", score: 1.0, ref: "SBCP — Consenso em Doença Diverticular, 2022" },
          { item: "Classificou corretamente como Hinchey modificado Ib (abscesso pericólico < 4 cm) e escolheu conduta conservadora", score: 1.0, ref: "SBCP, 2022; Hinchey EJ, 1978 ⚠️" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO",
        items: [
          { item: "Prescreveu antibioticoterapia parenteral com cobertura para gram-negativos e anaeróbios", score: 1.0, ref: "SBCP, 2022; RENAME 2022" },
          { item: "Não indicou cirurgia de urgência em Hinchey Ib sem falha do tratamento conservador", score: 0.5, ref: "SBCP, 2022" },
          { item: "Indicou colonoscopia eletiva em 6–8 semanas após resolução do episódio agudo", score: 0.5, ref: "SBCP, 2022; INCA/MS, 2022" }
        ]
      }
    ]
  }
},

{
  id: 14,
  title: "Sangramento ao defecar e desconforto anal há três meses",
  sub: "Ambulatório de Cirurgia Geral — Hospital Geral",
  tema: "Cirurgia",
  topic: "doença hemorroidária",
  level: "moderado",
  cardAccent: "#C0392B",
  instA: {
    scenario: "Ambulatório de Cirurgia Geral de hospital geral. Turno matutino. Caso clínico escrito — sem ator.",
    patient: "K.O., 38 anos, feminino, advogada, sedentária, com constipação crônica.",
    complaint: "Sangramento retal vivo ao defecar, sem misturar com as fezes, e sensação de peso no ânus há 3 meses.",
    tasks: [
      "Analise o quadro clínico e formule hipóteses diagnósticas para o sangramento retal.",
      "Identifique os sinais de alarme que exigem investigação endoscópica.",
      "Realize a interpretação dos achados do exame físico anorretal e classifique a doença.",
      "Proponha a conduta terapêutica baseada na classificação e na gravidade dos sintomas.",
      "Oriente a paciente sobre mudanças de hábito e sinais de alarme para retorno."
    ]
  },
  instB: {
    vitals: {
      PA: "120/78 mmHg",
      FC: "74 bpm",
      FR: "16 irpm",
      Tax: "36,3°C",
      Peso: "72 kg",
      Altura: "1,65 m",
      IMC: "26,4 kg/m²"
    },
    physicalGeneral: "Paciente em bom estado geral, consciente, orientada, eupneica, afebril. Mucosas normocoradas, anictérica, acianótica. Sem alterações ao exame geral.",
    physicalSeg: "INSPEÇÃO ANAL: Às 7 horas (posição ginecológica), visualização de mamilos hemorroidários externos redundantes, sem sinais flogísticos. Às 11 horas, presença de mamilo hemorroidário interno prolapsado parcialmente visível. Sem fissuras anais. Sem fístulas ou abscessos perianais. | TOQUE RETAL: Sem massas intrarretais palpáveis. Tônus do esfíncter anal normal. Hemorroidas internas palpáveis (distendidas) no canal anal. Sem dor intensa ao toque (ausência de fissura aguda). | ANUSCOPIA (impresso entregue): Hemorroidas internas nas posições 3, 7 e 11 horas. Hemorroidas internas às 3 e 7h grau II (prolapsam ao esforço e reduzem espontaneamente). Hemorroida às 11h grau III (prolapsa ao esforço, necessita de redução manual). Mucosa anal íntegra. Sem sangramento ativo no momento.",
    labs: [
      { test: "Hemoglobina", val: "12,2 g/dL", ref: "12,0–16,0 g/dL", alt: false },
      { test: "VCM", val: "80 fL", ref: "80–100 fL", alt: false },
      { test: "Ferro sérico", val: "58 µg/dL", ref: "60–170 µg/dL", alt: true },
      { test: "Ferritina", val: "11 ng/mL", ref: "12–300 ng/mL", alt: true },
      { test: "Hemoglobina fecal (pesquisa de sangue oculto)", val: "Positiva", ref: "Negativa", alt: true }
    ],
    image: null,
    note: "Estação sem ator. Entregar dados clínicos, sinais vitais e exame físico ao início (incluindo achados da inspeção anal e toque retal). Entregar resultado da anuscopia quando o candidato solicitar o exame. Entregar resultados laboratoriais quando solicitados. Atentar se o candidato classifica corretamente as hemorroidas internas por grau.",
    patientProfile: "K.O., 38 anos, feminino. Advogada — trabalho predominantemente sentada (8–10h/dia). Sedentária. Constipação crônica há 10 anos (evacuações a cada 3–4 dias, fezes ressecadas). Dieta pobre em fibras. Dois partos normais. Sem medicamentos de uso contínuo. Nega sangramento em outros locais.",
    script: [],
    hiddenInfo: "Sangramento com volume maior nas últimas 2 semanas — piora recente que pode indicar trombose ou progressão do grau; só menciona se o candidato perguntar sobre a evolução do sangramento ou se houve piora recente. | Sensação de massa que sai pelo ânus ao defecar e precisa ser empurrada de volta com a mão — relato de prolapso grau III que já vinha ocorrendo; só menciona com detalhes se o candidato perguntar especificamente sobre prolapsamento e como a paciente o resolve.",
    actorBehavior: "Estação sem ator — não há paciente simulado. Raciocínio baseado nos dados clínicos e exames fornecidos nos impressos."
  },
  instC: {
    diagnosis: "Doença hemorroidária interna grau II (posições 3h e 7h) e grau III (posição 11h) com sangramento retal crônico. Anemia ferropriva leve associada. Hemorroidas externas redundantes sem complicação aguda.",
    differentials: [
      "Câncer colorretal — diferencial obrigatório de sangramento retal em qualquer faixa etária; 38 anos está na faixa de rastreio e o sangue retal vivo com posição ao defecar é mais típico de hemorroida, mas colonoscopia é necessária se sangramento persistir ou houver fatores de risco",
      "Fissura anal — diferencial de sangramento retal vivo + dor ao defecar; excluída pela ausência de dor intensa ao toque retal e pela anuscopia sem fissura",
      "Pólipo retal — diferencial de sangramento sem dor; excluído provisoriamente pela anuscopia (sem pólipos visíveis) — colonoscopia após 40 anos para rastreio",
      "Retite inflamatória (DII) — diferencial de sangramento com muco; excluído pela ausência de diarreia, muco nas fezes e pela anuscopia sem alterações da mucosa"
    ],
    context: "Paciente feminina, 38 anos, sedentária, com constipação crônica e dieta pobre em fibras. Doença hemorroidária interna grau II e III com sangramento crônico e anemia ferropriva leve associada. A hemorroida grau III é indicação de tratamento intervencionista (ligadura elástica ou cirurgia).",
    justify: "Sangramento vivo ao defecar, sem mistura com as fezes, associado a prolapso ao esforço com necessidade de redução manual caracteriza hemorroida interna grau III pela classificação de Goligher. A constipação crônica e o sedentarismo são fatores de risco modificáveis. A anemia ferropriva leve com ferritina baixa indica depleção dos estoques de ferro pelo sangramento crônico. Hemorroida grau III tem indicação de ligadura elástica ou hemorroidectomia.",
    expectedAnamnesis: "Caracterizar o sangramento: cor (vivo/escuro), relação com a evacuação (ao defecar ou independente), volume, duração | Prolapso: prolapsamento de massa pelo ânus, necessidade de redução manual | Dor anal: intensa ao defecar (fissura?) ou dor contínua (trombose?) | Prurido anal | Constipação: frequência evacuatória, consistência das fezes, esforço evacuatório | Hábitos alimentares: fibras, hidratação | Atividade física | Histórico obstétrico | Partos (fator de risco em mulheres) | Uso de laxativos | Sangramento em outros locais | Perda de peso (sinal de alarme)",
    expectedPhysical: "Inspeção anal: avaliar hemorroidas externas, fissuras, fístulas, abscessos | Pedir que a paciente faça esforço (Valsalva) para evidenciar prolapso | Toque retal: avaliar tônus, massas, dor | Anuscopia: exame essencial para classificar as hemorroidas internas por grau e localização | Pesquisar sinais de anemia (palidez de mucosas)",
    expectedExams: [
      { exam: "Anuscopia", justify: "Exame essencial para visualizar e classificar hemorroidas internas — não visíveis à inspeção simples", expected: "Hemorroidas grau II (3h e 7h) e grau III (11h)" },
      { exam: "Hemograma e perfil de ferro", justify: "Avaliar anemia ferropriva associada ao sangramento crônico", expected: "Hemoglobina levemente reduzida, ferro e ferritina baixos" },
      { exam: "Pesquisa de sangue oculto nas fezes", justify: "Rastreio de sangramento gastrointestinal mais proximal — complementar ao exame físico", expected: "Positivo — sangramento ativo, ainda que de origem anorretal" },
      { exam: "Colonoscopia (indicada em > 40 anos ou com fatores de risco, ou se sangramento persistir após tratamento)", justify: "Excluir pólipo, câncer colorretal ou DII — diferencial obrigatório mesmo com hemorroida confirmada", expected: "Sem lesões colorretais em paciente de 38 anos sem fatores de risco — avaliar custo-benefício" }
    ],
    expectedConduct: "Farmacológica: Fibras solúveis (psílio/plantago ovata) 5–10 g/dia VO com bastante água — principal medida conservadora (nível de evidência A); sulfato ferroso 300 mg VO 2x/dia para anemia ferropriva (RENAME 2022); flebotônicos (diosmina + hesperidina 900/100 mg) podem ser usados como adjuvantes para alívio sintomático — ANVISA aprovado; evitar uso de cremes anestésicos locais como tratamento principal | Não farmacológica: Dieta rica em fibras e hidratação adequada (1,5–2L/dia); cessação do sedentarismo; evitar esforço evacuatório prolongado; evitar papel higiênico com atrito excessivo; banhos de assento com água morna para alívio sintomático; LIGADURA ELÁSTICA — indicada para hemorroidas grau II e III sintomáticas refratárias ao tratamento conservador; HEMORROIDECTOMIA — indicada para grau IV ou grau III refratária à ligadura elástica | Encaminhamento: Proctologia/Cirurgia Geral para ligadura elástica — hemorroida grau III com sangramento persistente | Orientações ao paciente: Explicar o diagnóstico e os fatores de risco; enfatizar dieta e hidratação; orientar sobre os sinais de alarme (sangramento com muco, escuro, com febre, perda de peso) que exigem retorno imediato | Seguimento: Retorno em 30 dias para reavaliação; se sem melhora com conservador em 4–6 semanas — indicar ligadura elástica",
    expectedCommunication: "Apresentação: Identificar-se e criar um ambiente acolhedor — o tema causa constrangimento para muitos pacientes | Comunicação do diagnóstico: Explicar que as hemorroidas são veias dilatadas na região do ânus que estão causando o sangramento; usar linguagem clara e sem eufemismos excessivos | Escuta ativa: Perguntar sobre o impacto dos sintomas na qualidade de vida; abordar constrangimento e evitar julgamentos sobre hábitos de vida",
    criticalErrors: [
      "Não realizar ou não indicar anuscopia — exame essencial para classificar as hemorroidas internas",
      "Não investigar sangramento retal como possível sinal de câncer colorretal — mesmo com hemorroida confirmada, o diagnóstico diferencial é obrigatório",
      "Não identificar e tratar a anemia ferropriva associada ao sangramento crônico",
      "Indicar hemorroidectomia imediata sem tentativa prévia de tratamento conservador ou ligadura elástica para grau II/III",
      "Não orientar medidas de mudança de hábito (fibras, hidratação, atividade física) como parte do tratamento — são a base do tratamento conservador"
    ]
  },
  instD: {
    title: "CHECKLIST — DOENÇA HEMORROIDÁRIA: DIAGNÓSTICO E CONDUTA",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Criou ambiente acolhedor para abordar tema constrangedor (sangramento e região anorretal), sem julgamentos", score: 0.5, ref: "CFM Res. 2232/2019" },
          { item: "Orientou mudanças de hábito (fibras, hidratação, atividade física) de forma positiva e motivacional", score: 0.5, ref: "SBCP — Consenso em Doença Hemorroidária, 2022" }
        ]
      },
      {
        h: "ANAMNESE E HISTÓRICO CLÍNICO",
        items: [
          { item: "Caracterizou o sangramento retal: cor vivo, ao defecar, sem mistura com fezes — padrão de hemorroida interna", score: 0.5, ref: "SBCP, 2022; Semiologia Médica — Porto, 8ª ed., 2019" },
          { item: "Investigou prolapso: prolapsamento de massa pelo ânus e necessidade de redução manual — grau III", score: 1.0, ref: "SBCP — Consenso em Doença Hemorroidária, 2022" },
          { item: "Investigou sinais de alarme: sangramento com muco ou escuro, perda de peso, mudança do hábito intestinal", score: 1.0, ref: "SBCP, 2022; INCA/MS — Câncer colorretal, 2022" },
          { item: "Investigou constipação crônica e hábitos alimentares como fatores de risco modificáveis", score: 0.5, ref: "SBCP, 2022" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Realizou inspeção anal com avaliação de hemorroidas externas, fissuras e abscessos", score: 0.5, ref: "SBCP, 2022; Semiologia Médica — Porto, 8ª ed., 2019" },
          { item: "Realizou toque retal para avaliar massas intrarretais e tônus do esfíncter", score: 0.5, ref: "SBCP, 2022" },
          { item: "Solicitou e interpretou anuscopia para classificar as hemorroidas internas por grau (Goligher)", score: 1.0, ref: "SBCP — Consenso em Doença Hemorroidária, 2022" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Classificou corretamente as hemorroidas internas: grau II (3h e 7h) e grau III (11h) pela escala de Goligher", score: 0.5, ref: "SBCP, 2022; Goligher JC ⚠️" },
          { item: "Identificou anemia ferropriva leve (ferro e ferritina baixos) associada ao sangramento hemorroidário crônico", score: 0.5, ref: "SBCP, 2022; SBH — Anemia ferropriva, 2022" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO",
        items: [
          { item: "Prescreveu fibras solúveis (psílio) e orientou dieta rica em fibras como medida conservadora de primeira linha", score: 0.5, ref: "SBCP, 2022; RENAME 2022" },
          { item: "Prescreveu sulfato ferroso para tratamento da anemia ferropriva associada", score: 0.5, ref: "SBH, 2022; RENAME 2022" },
          { item: "Indicou ligadura elástica para hemorroida grau III sintomática (após falha do conservador)", score: 1.0, ref: "SBCP — Consenso em Doença Hemorroidária, 2022" }
        ]
      }
    ]
  }
},

{
  id: 15,
  title: "Dor abdominal após colisão de veículo em alta velocidade",
  sub: "PS — Pronto-Socorro / Sala de Emergência",
  tema: "Cirurgia",
  topic: "trauma abdominal fechado",
  level: "moderado",
  cardAccent: "#922B21",
  instA: {
    scenario: "Sala de emergência de hospital geral. Turno noturno. Paciente padronizado (ator).",
    patient: "R.M., 35 anos, masculino, motorista, sem comorbidades conhecidas.",
    complaint: "Dor abdominal intensa após colisão frontal de automóvel há 1 hora. Trazido pelo SAMU com colar cervical.",
    tasks: [
      "Realize a avaliação primária do paciente traumatizado seguindo o protocolo ABCDE.",
      "Identifique os achados do exame físico compatíveis com lesão abdominal.",
      "Solicite e interprete os exames complementares necessários para guiar a conduta.",
      "Proponha a conduta terapêutica inicial e identifique a necessidade de intervenção cirúrgica de urgência.",
      "Identifique os sinais de instabilidade hemodinâmica e seus critérios para laparotomia exploradora de emergência."
    ]
  },
  instB: {
    vitals: {
      PA: "90/60 mmHg",
      FC: "128 bpm",
      FR: "24 irpm",
      Tax: "36,2°C",
      Peso: "80 kg",
      Altura: "1,78 m",
      IMC: "25,2 kg/m²"
    },
    physicalGeneral: "Paciente em mau estado geral, consciente, orientado, ansioso e agitado, com dor abdominal intensa (EVA 9/10). Mucosas pálidas 2+/4+, diaforético, acianótico. Saturação de O₂ de 96% com máscara de O₂ a 10 L/min.",
    physicalSeg: "ABDOME: Distendido, rígido à palpação (defesa muscular difusa), com dor intensa em todos os quadrantes, maior em hipocôndrio esquerdo e epigástrio. Sinal de Blumberg positivo difuso. Ruídos hidroaéreos ausentes. Equimose em cinto de segurança visível (sinal do cinto). | TÓRAX: Expansibilidade simétrica. Murmúrio vesicular presente bilateralmente. Sem crepitações. | CARDIOVASCULAR: Taquicárdico, bulhas rítmicas, sem sopros. Pulsos periféricos finos e rápidos. | NEUROLÓGICO: Glasgow 15, pupilas isocóricas e fotorreativas. Colar cervical mantido. | PELVE: Estável à compressão. | MMII: Sem deformidades.",
    labs: [
      { test: "Hemoglobina", val: "8,4 g/dL", ref: "13,5–17,5 g/dL", alt: true },
      { test: "Hematócrito", val: "26%", ref: "40–54%", alt: true },
      { test: "Leucócitos", val: "14.200/mm³", ref: "4.000–11.000/mm³", alt: true },
      { test: "Plaquetas", val: "210.000/mm³", ref: "150.000–400.000/mm³", alt: false },
      { test: "TP (INR)", val: "1,3", ref: "0,8–1,2", alt: true },
      { test: "Lactato sérico", val: "5,8 mmol/L", ref: "0,5–2,0 mmol/L", alt: true },
      { test: "Amilase sérica", val: "420 U/L", ref: "< 100 U/L", alt: true },
      { test: "Creatinina", val: "1,2 mg/dL", ref: "0,7–1,2 mg/dL", alt: false },
      { test: "Tipagem sanguínea", val: "A positivo", ref: "—", alt: false }
    ],
    image: "FAST (Focused Assessment with Sonography for Trauma) À BEIRA LEITO: Líquido livre em espaço de Morrison (hepatorrenal) — quantidade moderada. Líquido livre perisplênico — quantidade importante. Janela pericárdica: sem derrame. Janela suprapúbica: líquido livre em fundo de saco de Douglas. | RADIOGRAFIA DE TÓRAX AP: Sem pneumotórax. Sem alargamento mediastinal. Arcos costais sem fraturas evidentes. | TOMOGRAFIA DE ABDOME COM CONTRASTE (realizada após estabilização hemodinâmica relativa): Laceração esplênica grau III (laceração > 3 cm de profundidade com envolvimento dos vasos hilares). Hemoperitônio moderado a volumoso. Fígado sem lacerações evidentes. Sem pneumoperitônio. Rins sem alterações.",
    note: "Caso com ator. O ator deve entrar deitado na maca com colar cervical, aparentando dor intensa e ansiedade. Imprimir e entregar ao candidato os dados dos sinais vitais ao início. Entregar resultados do FAST quando o candidato solicitar ou realizar. Entregar laboratório quando solicitado. Entregar TC somente se o candidato a solicitar após estabilização hemodinâmica relativa. Atentar se o candidato segue o protocolo ABCDE antes de focar no abdome.",
    patientProfile: "R.M., 35 anos, masculino. Motorista de aplicativo, solteiro. Sem comorbidades. Sem medicamentos. Nega alergias. Não usava cinto de segurança corretamente (cinto abdominal apenas). Colisão frontal em alta velocidade — airbag acionou.",
    script: [
      {
        trigger: "Queixa principal / ao entrar em contato",
        speech: "Doutor, minha barriga tá doendo muito, muito mesmo... eu tava dirigindo e bati o carro. O airbag abriu na minha cara e o cinto me cortou a barriga. Tô sentindo que tá piorando."
      },
      {
        trigger: "Sobre como aconteceu o acidente",
        speech: "Eu tava na avenida, aí um carro entrou de repente no meu caminho e eu bati de frente. Não deu tempo de frear. Deve ter sido uns 60 km/h pelo menos. O carro amassou bastante."
      },
      {
        trigger: "Sobre onde dói mais",
        speech: "Aqui do lado esquerdo, perto do estômago... mas tá doendo tudo, qualquer movimento que eu faço piora. Parece que tem alguma coisa errada lá dentro."
      },
      {
        trigger: "Sobre sintomas associados",
        speech: "Tô tonto, sinto que vou desmaiar... e tô suando muito sem precisar. Tô com muita sede também."
      },
      {
        trigger: "Sobre problemas de saúde anteriores",
        speech: "Não, nunca tive nada de saúde não. Nunca operei, nunca fiquei internado. Sou saudável."
      },
      {
        trigger: "Sobre medicamentos e alergias",
        speech: "Não tomo nenhum remédio. Alergia também não sei de nada não, nunca tive reação."
      },
      {
        trigger: "Sobre uso de álcool ou drogas antes do acidente",
        speech: "Não, eu não bebo não doutor, tava trabalhando. E não uso droga nenhuma."
      },
      {
        trigger: "Sobre dor no pescoço ou coluna",
        speech: "O pescoço ficou um pouco dolorido quando o carro bateu, mas não tô sentindo dormência nos braços nem nas pernas não."
      },
      {
        trigger: "Sobre dificuldade para respirar",
        speech: "Tô com um pouquinho de falta de ar sim, mas acho que é de dor mesmo, porque a barriga tá muito ruim."
      },
      {
        trigger: "Pergunta ativa — O que tô sofrendo doutor?",
        speech: "Doutor, é grave o que eu tenho? Vou precisar operar? Tô com muito medo..."
      },
      {
        trigger: "Pergunta ativa — Posso ligar pra minha família?",
        speech: "Doutor, posso ligar pra minha mãe? Ela não sabe que eu me acidentei."
      }
    ],
    hiddenInfo: "Nega uso do cinto de segurança corretamente — usava apenas o cinto abdominal sem o torácico, o que explica o padrão de lesão abdominal pela compressão do cinto. Só menciona se o candidato perguntar especificamente sobre o uso do cinto. | Fez uso de bebida energética antes de dirigir mas nega álcool ou drogas — dado irrelevante clinicamente mas revelado se o candidato perguntar sobre substâncias de forma aberta.",
    actorBehavior: "Paciente ansioso, com dor intensa e real (EVA 9). Deitado na maca, com colar cervical. Responde com dificuldade pela dor. Fica mais agitado se demorar muito para ser atendido. Colabora com o exame físico mas geme à palpação abdominal. Reage com medo quando se fala em cirurgia."
  },
  instC: {
    diagnosis: "Trauma abdominal fechado com laceração esplênica grau III e hemoperitônio volumoso. Choque hemorrágico classe III (FC > 120, PA < 90, lactato elevado, anemia aguda). Indicação de laparotomia exploradora de urgência.",
    differentials: [
      "Hemotórax — excluído pela radiografia de tórax sem velamento e pelo FAST com janela torácica negativa",
      "Tamponamento cardíaco — excluído pelo FAST com janela pericárdica negativa e pela ausência de distensão jugular e bulhas abafadas",
      "Lesão hepática isolada — diferencial de hemoperitônio em trauma; TC mostrou laceração esplênica como fonte principal",
      "Lesão de víscera oca (intestino, bexiga) — diferencial em trauma com cinto de segurança; amilase elevada sugere lesão pancreática ou intestinal associada — avaliar na exploração cirúrgica"
    ],
    context: "Paciente masculino, 35 anos, vítima de trauma fechado de alta energia com instabilidade hemodinâmica (choque hemorrágico classe III), FAST positivo e laceração esplênica grau III na TC. Laparotomia exploradora de urgência é a conduta mandatória.",
    justify: "FAST positivo (líquido em Morrison, perisplênico e Douglas) em paciente hemodinamicamente instável é indicação absoluta de laparotomia exploradora — sem necessidade de TC para definir a conduta cirúrgica. A TC foi realizada após estabilização relativa e confirmou laceração esplênica grau III. Choque hemorrágico classe III: PA < 90, FC > 120, lactato > 4, anemia aguda (Hb 8,4). Amilase elevada alerta para lesão pancreática ou intestinal associada.",
    expectedAnamnesis: "Mecanismo do trauma: tipo (fechado/penetrante), velocidade, cinto de segurança, airbag | Localização e intensidade da dor abdominal | Sintomas de choque: tontura, sudorese, sede intensa | Uso de álcool ou drogas | Comorbidades e medicamentos em uso | Alergias (especialmente a contraste) | Última refeição (anestesia) | Histórico de cirurgias abdominais",
    expectedPhysical: "ABCDE: Vias aéreas — perviedade + colar cervical; Respiração — MV bilateral; Circulação — PA, FC, pulsos, sangramento visível; Déficit neurológico — Glasgow; Exposição — desvestir e examinar | Abdome: distensão, rigidez, Blumberg, sinal do cinto, ruídos hidroaéreos | FAST à beira leito: janelas hepática, esplênica, pericárdica e pélvica | Pelve: estabilidade | Extremidades: fraturas, pulsos",
    expectedExams: [
      { exam: "FAST (ultrassonografia à beira leito)", justify: "Triagem rápida para líquido livre intraperitoneal e hemopericárdio em trauma instável", expected: "Líquido livre em Morrison, perisplênico e Douglas" },
      { exam: "Hemograma, coagulograma, tipagem sanguínea", justify: "Avaliar anemia hemorrágica, coagulopatia e preparar hemotransfusão", expected: "Anemia aguda, INR levemente alargado" },
      { exam: "Lactato sérico", justify: "Marcador de hipoperfusão tecidual e gravidade do choque", expected: "Elevado (5,8 mmol/L) — choque hemorrágico classe III" },
      { exam: "TC de abdome com contraste", justify: "Estadiamento das lesões em paciente hemodinamicamente estável ou estabilizado — NÃO realizar em instável", expected: "Laceração esplênica grau III, hemoperitônio" },
      { exam: "Amilase sérica", justify: "Rastrear lesão pancreática ou intestinal associada ao trauma", expected: "Elevada — alertar para lesão de víscera oca ou pâncreas" }
    ],
    expectedConduct: "Farmacológica: Controle do choque hemorrágico: 2 acessos venosos calibrosos (14G) + SF 0,9% ou Ringer Lactato 1.000 mL IV rápido; transfusão de concentrado de hemácias (CHM) 2 unidades IV urgente (protocolo de transfusão maciça se necessário: CHM:PFC:Plaquetas 1:1:1); ácido tranexâmico 1g IV em 10 min se < 3h do trauma (RENAME 2022); analgesia cuidadosa (morfina 2–4 mg IV titulado) após avaliação neurológica; manter colar cervical até liberação de coluna | Não farmacológica: Laparotomia exploradora de urgência indicada — FAST positivo + instabilidade hemodinâmica; splenorrafia ou esplenectomia conforme achado intraoperatório (grau III — tentar preservação esplênica; se falha, esplenectomia); cateter vesical para monitorar diurese; SNG; oxigenoterapia | Encaminhamento: Bloco cirúrgico imediatamente; UTI pós-operatória; vacinação pós-esplenectomia (pneumococo, meningococo, H. influenzae) se esplenectomia realizada | Orientações ao familiar: Comunicar gravidade, necessidade de cirurgia urgente e risco de vida | Seguimento: UTI pós-operatória; reavaliação de lesões associadas; vacinação em 2 semanas se esplenectomia",
    expectedCommunication: "Apresentação: Identificar-se rapidamente na emergência | Comunicação ao paciente: Explicar brevemente o que foi encontrado e a necessidade de cirurgia urgente; usar linguagem simples e tranquilizadora sem minimizar a gravidade | Comunicação ao familiar: Usar protocolo de comunicação de más notícias em urgência; atualizar progressivamente",
    criticalErrors: [
      "Realizar TC de abdome em paciente hemodinamicamente instável — atraso fatal; FAST positivo + instabilidade = laparotomia imediata",
      "Não reconhecer e tratar o choque hemorrágico (classe III) com hidratação e transfusão precoces",
      "Não realizar FAST à beira leito como triagem inicial no trauma abdominal",
      "Não solicitar tipagem sanguínea e reserva de hemácias em paciente com trauma grave e anemia aguda",
      "Omitir a avaliação da coluna cervical (manter colar até liberação radiológica) em politrauma",
      "Não administrar ácido tranexâmico nas primeiras 3 horas do trauma em paciente com hemorragia ativa"
    ]
  },
  instD: {
    title: "CHECKLIST — TRAUMA ABDOMINAL FECHADO COM INSTABILIDADE HEMODINÂMICA",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Identificou-se rapidamente ao paciente e ao familiar, mantendo comunicação clara durante a emergência", score: 0.5, ref: "CFM Res. 2232/2019; ABEM, 2022" },
          { item: "Orientou o familiar sobre a gravidade do quadro e a necessidade de cirurgia urgente de forma empática", score: 0.5, ref: "CFM Res. 2232/2019" }
        ]
      },
      {
        h: "AVALIAÇÃO PRIMÁRIA E ANAMNESE",
        items: [
          { item: "Realizou avaliação primária seguindo a sequência ABCDE antes de focar no abdome", score: 1.0, ref: "ATLS — Advanced Trauma Life Support ⚠️; SBCM, 2022" },
          { item: "Identificou o mecanismo de trauma (colisão frontal alta energia, uso inadequado do cinto) como dado relevante", score: 0.5, ref: "ATLS ⚠️; SBCM, 2022" },
          { item: "Identificou os sinais de choque hemorrágico: hipotensão, taquicardia, palidez, diaforese, lactato elevado", score: 1.0, ref: "ATLS ⚠️; SBCM, 2022" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Realizou FAST à beira leito e identificou líquido livre em Morrison, espaço perisplênico e Douglas", score: 1.0, ref: "ATLS ⚠️; SBCM, 2022" },
          { item: "Identificou abdome rígido com Blumberg difuso e sinal do cinto de segurança", score: 0.5, ref: "ATLS ⚠️; Semiologia Médica — Porto, 8ª ed., 2019" },
          { item: "Manteve o colar cervical durante toda a avaliação até liberação da coluna cervical", score: 0.5, ref: "ATLS ⚠️; SBCM, 2022" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Não indicou TC de abdome em paciente hemodinamicamente instável com FAST positivo", score: 1.0, ref: "ATLS ⚠️; SBCM, 2022" },
          { item: "Solicitou tipagem sanguínea e hemotransfusão de urgência para choque hemorrágico classe III", score: 0.5, ref: "ATLS ⚠️; SBHH, 2022" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO",
        items: [
          { item: "Indicou laparotomia exploradora de urgência — FAST positivo com instabilidade hemodinâmica", score: 1.0, ref: "ATLS ⚠️; SBCM, 2022; CBC, 2022" },
          { item: "Administrou ou indicou ácido tranexâmico 1g IV nas primeiras 3 horas do trauma", score: 0.5, ref: "CRASH-2 Trial ⚠️; RENAME 2022; MS/SVS" },
          { item: "Iniciou expansão volêmica com SF/Ringer Lactato e solicitou transfusão de concentrado de hemácias", score: 0.5, ref: "ATLS ⚠️; RENAME 2022" }
        ]
      }
    ]
  }
},

{
  id: 16,
  title: "Nódulo no pescoço descoberto em exame de rotina",
  sub: "Ambulatório de Cirurgia de Cabeça e Pescoço — Hospital Geral",
  tema: "Cirurgia",
  topic: "nódulo tireoidiano",
  level: "moderado",
  cardAccent: "#1A5276",
  instA: {
    scenario: "Ambulatório de Cirurgia de Cabeça e Pescoço de hospital geral. Turno matutino. Paciente padronizado (ator).",
    patient: "F.A., 42 anos, feminino, professora, sem comorbidades conhecidas.",
    complaint: "Nódulo na tireoide de 2,1 cm identificado em ultrassonografia cervical de rotina há 2 semanas. Assintomática.",
    tasks: [
      "Realize a anamnese dirigida ao nódulo tireoidiano e identifique os fatores de risco para malignidade.",
      "Realize o exame físico cervical pertinente e descreva os achados.",
      "Solicite os exames complementares necessários para investigação do nódulo.",
      "Classifique o nódulo conforme o sistema TI-RADS e proponha conduta baseada na classificação.",
      "Oriente a paciente sobre o diagnóstico, o plano investigativo e o prognóstico."
    ]
  },
  instB: {
    vitals: {
      PA: "118/76 mmHg",
      FC: "72 bpm",
      FR: "16 irpm",
      Tax: "36,4°C",
      Peso: "64 kg",
      Altura: "1,63 m",
      IMC: "24,1 kg/m²"
    },
    physicalGeneral: "Paciente em bom estado geral, consciente, orientada, eupneica, afebril. Mucosas normocoradas, anictérica. Sem alterações ao exame geral. Sem fácies de hiper ou hipotireoidismo.",
    physicalSeg: "PESCOÇO: Tireoide palpável, sem bócio difuso. Nódulo palpável no lobo direito da tireoide, de consistência firme, superfície lisa, contornos bem definidos, móvel à deglutição, não doloroso à palpação, medindo aproximadamente 2 cm. Sem nódulos contralaterais palpáveis. | LINFONODOS: Sem linfadenopatia cervical palpável. Cadeia jugular interna, submandibular e posterior do pescoço livres. | TÓRAX: Sem alterações. | CARDIOVASCULAR: Ritmo cardíaco regular, sem sopros.",
    labs: [
      { test: "TSH", val: "2,1 mUI/L", ref: "0,4–4,0 mUI/L", alt: false },
      { test: "T4 livre", val: "1,2 ng/dL", ref: "0,8–1,8 ng/dL", alt: false },
      { test: "T3 total", val: "1,1 ng/mL", ref: "0,8–2,0 ng/mL", alt: false },
      { test: "Calcitonina", val: "8 pg/mL", ref: "< 10 pg/mL", alt: false },
      { test: "CEA", val: "2,4 ng/mL", ref: "< 5,0 ng/mL", alt: false },
      { test: "Anticorpos anti-TPO", val: "12 UI/mL", ref: "< 35 UI/mL", alt: false }
    ],
    image: "ULTRASSONOGRAFIA CERVICAL (USG) — laudo do exame que motivou o encaminhamento: Lobo direito da tireoide com nódulo sólido, hipoecoico, de contornos irregulares com espiculação, medindo 2,1 x 1,8 x 1,6 cm. Presença de microcalcificações no interior. Sem halo periférico. Vascularização aumentada ao Doppler intranodular. Lobo esquerdo sem nódulos. Istmo normal. Ausência de linfonodomegalia cervical ao exame ultrassonográfico. Classificação ACR TI-RADS: TR5 (altamente suspeito).",
    note: "Caso com ator. O ator representa uma paciente calma mas ansiosa pelo achado incidental. Entregar laudo da ultrassonografia ao início da consulta (é o exame que motivou o encaminhamento). Entregar resultados laboratoriais quando solicitados pelo candidato. Atentar se o candidato aplica a classificação TI-RADS ao nódulo e indica a PAAF de forma adequada.",
    patientProfile: "F.A., 42 anos, feminino. Professora do ensino fundamental, casada, dois filhos. Sem comorbidades. Sem medicamentos de uso contínuo. Nega radioterapia prévia em cabeça e pescoço. Mãe com histórico de bócio multinodular benigno operada aos 55 anos. Pai com câncer de próstata. Sem história familiar de câncer de tireoide ou NEM (neoplasia endócrina múltipla).",
    script: [
      {
        trigger: "Queixa principal / motivo da consulta",
        speech: "Boa tarde, doutor. Eu vim porque fiz uma ultrassom do pescoço há duas semanas, de rotina mesmo, e apareceu um nódulo na tireoide. O médico me encaminhou aqui. Eu nem sentia nada, não sabia que tinha isso."
      },
      {
        trigger: "Sobre sintomas no pescoço",
        speech: "Não, não sinto dor no pescoço, não. Não fico rouca, não tenho dificuldade pra engolir nada. Só o nódulo que vocês estão sentindo aí, mas eu nunca tinha percebido."
      },
      {
        trigger: "Sobre sintomas de hipertireoidismo",
        speech: "Não, não fico nervosa demais não, não fico com coração acelerado. Não emagreci sem querer. Não estou com calor excessivo. Tô bem, normal."
      },
      {
        trigger: "Sobre sintomas de hipotireoidismo",
        speech: "Olha, às vezes fico um pouco cansada, mas é o trabalho mesmo, muito estresse. Não acho que engordei ultimamente. O cabelo não tá caindo mais que o normal."
      },
      {
        trigger: "Sobre histórico familiar de tireoide ou câncer",
        speech: "Minha mãe operou o papo, mas foi benigno, ela disse que era bócio. Pai teve câncer de próstata, mas tá bem. Não sei de mais ninguém da família com problema na tireoide, não."
      },
      {
        trigger: "Sobre radioterapia ou exposição à radiação",
        speech: "Não, nunca fiz radioterapia. Nunca tive exposição a radiação também que eu saiba. Trabalho em escola, não tenho exposição."
      },
      {
        trigger: "Sobre crescimento rápido do nódulo",
        speech: "Olha, eu não sei dizer se cresceu rápido porque eu não sabia que tinha. Descobri agora com o exame de rotina. Nunca tinha sentido nem percebido antes."
      },
      {
        trigger: "Sobre dificuldade para respirar ou engolir",
        speech: "Não, respiro normal, engulo normal. Não tenho nenhuma dificuldade nisso não."
      },
      {
        trigger: "Sobre uso de medicamentos",
        speech: "Não tomo nenhum remédio, nem hormônio da tireoide. Já fiz exame de sangue da tireoide há dois anos e estava normal."
      },
      {
        trigger: "Pergunta ativa — Pode ser câncer, doutor?",
        speech: "Doutor, eu fui pesquisar na internet e fiquei com medo de ser câncer. Pode ser? Eu preciso operar?"
      },
      {
        trigger: "Pergunta ativa — O que vai acontecer agora?",
        speech: "Quais são os próximos passos? Que exame eu preciso fazer? Demora muito pra saber o resultado?"
      }
    ],
    hiddenInfo: "Reside em região do interior de Minas Gerais historicamente com deficiência de iodo — fator de risco para bócio; só menciona se o candidato perguntar sobre local de residência e procedência. | Refere uso ocasional de suplemento de algas marinhas (kelp) com alto teor de iodo — pode interferir na função tireoidiana; só menciona se o candidato perguntar sobre suplementos ou vitaminas.",
    actorBehavior: "Paciente calma e educada, mas visivelmente ansiosa com o achado. Pesquisou na internet e está com medo de câncer. Coopera totalmente com o exame. Fica mais tranquila quando o médico explica de forma clara e sem alarmismo. Faz perguntas diretas sobre o diagnóstico e o prognóstico."
  },
  instC: {
    diagnosis: "Nódulo tireoidiano sólido hipoecoico de 2,1 cm com microcalcificações e contornos irregulares — ACR TI-RADS 5 (altamente suspeito). Indicação formal de punção aspirativa com agulha fina (PAAF) guiada por ultrassonografia.",
    differentials: [
      "Carcinoma papilífero de tireoide — principal hipótese: nódulo sólido hipoecoico com microcalcificações e contornos irregulares (TI-RADS 5); é o subtipo mais comum (80% dos cânceres de tireoide) e tem excelente prognóstico quando tratado precocemente",
      "Adenoma folicular — diferencial benigno: nódulo sólido com halo periférico e vascularização periférica; menos provável pelos achados ultrassonográficos de alta suspeição",
      "Carcinoma folicular — diferencial maligno: não distinguível do adenoma folicular pela citologia da PAAF — diagnóstico histológico pela invasão capsular ou vascular na peça cirúrgica",
      "Nódulo coloide benigno — muito comum; excluído pelos achados de alta suspeição (microcalcificações, contornos irregulares, hipoecoicidade) no TI-RADS 5"
    ],
    context: "Paciente feminina, 42 anos, assintomática, com nódulo tireoidiano TI-RADS 5 de 2,1 cm — achado incidental em ultrassonografia de rotina. TSH normal exclui nódulo hiperfuncionante autônomo. Sem linfadenopatia. PAAF guiada por USG é o próximo passo diagnóstico obrigatório.",
    justify: "Nódulo TI-RADS 5 (sólido hipoecoico + microcalcificações + contornos irregulares) tem probabilidade de malignidade > 20% pelas diretrizes da ACR. As diretrizes da SBE/SBMN indicam PAAF para nódulos TI-RADS 4 e 5 ≥ 1 cm e TI-RADS 3 ≥ 2,5 cm. TSH normal afasta hiperfunção — nódulo quente (hiperfuncionante) tem baixo risco de malignidade. Calcitonina normal afasta carcinoma medular.",
    expectedAnamnesis: "Sintomas compressivos: disfagia, disfonia, dispneia | Sintomas de hipo/hipertireoidismo | Crescimento rápido do nódulo | Exposição prévia à radiação ionizante em cabeça e pescoço (infância ou radioterapia) | Histórico familiar de câncer de tireoide, NEM tipo 2, síndrome de Cowden | Procedência de área de deficiência de iodo | Sexo masculino (fator de risco independente para malignidade) | Uso de amiodarona, lítio, interferon (afetam tireoide) | Diagnóstico prévio de doença tireoidiana",
    expectedPhysical: "Inspeção do pescoço: desvio traqueal, bócio visível | Palpação da tireoide: tamanho, consistência (firme = suspeita), mobilidade à deglutição, dor | Palpação de linfonodos: cadeia jugular, submandibular, supraclavicular, posterior | Sinais de hipotireoidismo: bradicardia, mixedema, reflexos lentos | Sinais de hipertireoidismo: tremor, taquicardia, exoftalmia | Presença de rouquidão (paralisia de corda vocal = comprometimento do nervo laríngeo recorrente por invasão)",
    expectedExams: [
      { exam: "TSH, T4 livre, T3", justify: "Avaliar função tireoidiana — nódulo hiperfuncionante (TSH suprimido) tem baixíssimo risco de malignidade e não precisa de PAAF", expected: "TSH normal — nódulo não hiperfuncionante, indicação de PAAF mantida" },
      { exam: "Calcitonina sérica", justify: "Rastrear carcinoma medular de tireoide — produzido pelas células parafoliculares C", expected: "Normal — afasta carcinoma medular" },
      { exam: "PAAF guiada por ultrassonografia", justify: "Exame citológico obrigatório para nódulos TI-RADS 4 e 5 ≥ 1 cm — define conduta cirúrgica", expected: "Bethesda I a VI — classificação citológica que orienta conduta" },
      { exam: "Cintilografia tireoidiana com Tc-99m", justify: "Indicada apenas se TSH suprimido (nódulo quente não precisa de PAAF); não indicada neste caso com TSH normal", expected: "Não indicada neste caso" }
    ],
    expectedConduct: "Farmacológica: Não há indicação de supressão com levotiroxina para nódulos tireoidianos sem hipotireoidismo — não é conduta recomendada (SBE/SBMN 2023); após confirmação de carcinoma papilífero pela PAAF — levotiroxina pós-tireoidectomia em dose supressiva conforme estadiamento | Não farmacológica: PAAF guiada por ultrassonografia — encaminhar para endocrinologia ou cirurgia de cabeça e pescoço com experiência no procedimento; se PAAF Bethesda V ou VI (maligno ou suspeito para malignidade) — tireoidectomia total; se Bethesda III ou IV — decisão individualizada (lobectomia diagnóstica ou repetição de PAAF); se Bethesda I ou II — vigilância com USG | Encaminhamento: Endocrinologia para interpretação da PAAF e planejamento; Cirurgia de Cabeça e Pescoço se indicação cirúrgica; Medicina Nuclear se radioiodoterapia após cirurgia | Orientações ao paciente: Explicar que o nódulo precisa de uma biópsia por agulha fina para saber a natureza; que a maioria dos nódulos é benigna; que mesmo se for câncer, o carcinoma papilífero tem excelente prognóstico | Seguimento: PAAF em até 4 semanas após indicação; resultado da PAAF em 10–14 dias; se benigno, USG de controle em 1 ano",
    expectedCommunication: "Apresentação: Identificar-se e criar vínculo — paciente ansiosa com pesquisa na internet | Comunicação do diagnóstico: Explicar que foi encontrado um nódulo com características que precisam ser investigadas com uma biópsia de agulha fina, que é um procedimento rápido e ambulatorial; não confirmar câncer antes da PAAF | Escuta ativa: Validar o medo da paciente; desmistificar as informações incorretas da internet; explicar que mesmo se for câncer de tireoide, a maioria tem excelente prognóstico",
    criticalErrors: [
      "Não indicar PAAF em nódulo TI-RADS 5 ≥ 1 cm — omissão diagnóstica grave",
      "Indicar cintilografia tireoidiana em paciente com TSH normal — não muda a conduta e atrasa o diagnóstico",
      "Confirmar diagnóstico de câncer ao paciente sem confirmação histológica/citológica",
      "Prescrever levotiroxina para 'reduzir o nódulo' — não há evidência e pode causar iatrogenia (hipertireoidismo exógeno)",
      "Não pesquisar linfonodos cervicais ao exame físico — metástase ganglionar muda o estadiamento e a conduta cirúrgica"
    ]
  },
  instD: {
    title: "CHECKLIST — NÓDULO TIREOIDIANO: INVESTIGAÇÃO E CONDUTA",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Acolheu a paciente ansiosa e desmistificou informações incorretas sobre câncer de tireoide obtidas na internet", score: 0.5, ref: "CFM Res. 2232/2019; SBE, 2023" },
          { item: "Não confirmou diagnóstico de câncer antes da PAAF — comunicou como 'nódulo suspeito que precisa de biópsia'", score: 0.5, ref: "CFM — Bioética; SBE/SBMN, 2023" }
        ]
      },
      {
        h: "ANAMNESE E HISTÓRICO CLÍNICO",
        items: [
          { item: "Investigou exposição prévia à radiação ionizante em cabeça e pescoço como principal fator de risco para carcinoma tireoidiano", score: 1.0, ref: "SBE/SBMN — Consenso Brasileiro em Nódulo Tireoidiano, 2023" },
          { item: "Investigou histórico familiar de câncer de tireoide, NEM tipo 2 e síndromes genéticas associadas", score: 0.5, ref: "SBE/SBMN, 2023" },
          { item: "Investigou sintomas compressivos (disfagia, disfonia, dispneia) e sintomas de disfunção tireoidiana", score: 0.5, ref: "SBE/SBMN, 2023" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Palpou a tireoide avaliando tamanho, consistência, mobilidade à deglutição e dor do nódulo", score: 0.5, ref: "SBE/SBMN, 2023; Semiologia Médica — Porto, 8ª ed., 2019" },
          { item: "Pesquisou linfadenopatia cervical (jugular, submandibular, supraclavicular) para rastreio de metástases", score: 1.0, ref: "SBE/SBMN, 2023" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Classificou o nódulo como TI-RADS 5 (alta suspeição) com base nos achados ultrassonográficos: hipoecoico + microcalcificações + contornos irregulares", score: 1.0, ref: "SBE/SBMN, 2023; ACR TI-RADS ⚠️" },
          { item: "Solicitou TSH para avaliar função tireoidiana e calcitonina para rastreio de carcinoma medular", score: 0.5, ref: "SBE/SBMN, 2023" },
          { item: "Indicou PAAF guiada por ultrassonografia como próximo passo obrigatório para nódulo TI-RADS 5 ≥ 1 cm", score: 1.0, ref: "SBE/SBMN — Consenso Brasileiro em Nódulo Tireoidiano, 2023" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO",
        items: [
          { item: "Não prescreveu levotiroxina supressiva para o nódulo sem hipotireoidismo confirmado", score: 0.5, ref: "SBE/SBMN, 2023" },
          { item: "Encaminhou para Endocrinologia e/ou Cirurgia de Cabeça e Pescoço para realização da PAAF e seguimento", score: 0.5, ref: "SBE/SBMN, 2023; CFM" },
          { item: "Orientou a paciente sobre o procedimento de PAAF, o prazo para resultado e as possibilidades diagnósticas com seus respectivos prognósticos", score: 0.5, ref: "SBE/SBMN, 2023; CFM Res. 2232/2019" }
        ]
      }
    ]
  }
},

{
  id: 17,
  title: "Dor intensa no peito e dificuldade para respirar após queda de motocicleta",
  sub: "PS — Pronto-Socorro",
  tema: "Cirurgia",
  topic: "trauma torácico fechado",
  level: "moderado",
  cardAccent: "#784212",
  instA: {
    scenario: "Pronto-Socorro de hospital geral. Turno noturno. Paciente padronizado (ator).",
    patient: "J.P., 40 anos, masculino, motociclista, sem comorbidades conhecidas.",
    complaint: "Dor intensa no lado direito do peito, piora com a respiração e tosse com sangue após queda de motocicleta há 30 minutos.",
    tasks: [
      "Realize a avaliação primária do paciente traumatizado seguindo o protocolo ABCDE.",
      "Identifique e interprete os achados do exame físico compatíveis com as lesões torácicas.",
      "Solicite e interprete os exames complementares prioritários para o trauma torácico.",
      "Identifique as lesões com risco de morte imediata e proponha a conduta de urgência adequada a cada uma.",
      "Diferencie as lesões que exigem intervenção imediata das que permitem investigação adicional."
    ]
  },
  instB: {
    vitals: {
      PA: "102/68 mmHg",
      FC: "114 bpm",
      FR: "28 irpm",
      Tax: "36,6°C",
      Peso: "78 kg",
      Altura: "1,74 m",
      IMC: "25,8 kg/m²"
    },
    physicalGeneral: "Paciente em regular a mau estado geral, consciente, orientado, agitado, com dor intensa ao respirar (EVA 8/10). Mucosas pálidas 1+/4+, diaforético, discreta cianose perioral. Saturação de O₂ de 89% em ar ambiente.",
    physicalSeg: "TÓRAX: Escoriações e equimoses na grade costal direita. Expansibilidade reduzida e assimétrica — paradoxal no segmento anterolateral direito (3 arcos costais em movimento paradoxal: 4º, 5º e 6º arcos costais direitos fraturados em dois pontos cada — tórax instável/flail chest). Crepitação à palpação dos arcos costais direitos. Frêmito toracovocal abolido no hemitórax direito inferior. Percussão com macicez no terço inferior direito e timpanismo no terço médio direito. Ausculta: murmúrio vesicular abolido no hemitórax direito. Ausência de desvio traqueal. Jugulares sem distensão. | CARDIOVASCULAR: Taquicárdico, bulhas rítmicas e normofonéticas, sem sopros. | ABDOME: Flácido, indolor, sem distensão. | NEUROLÓGICO: Glasgow 14 (desorientado no tempo). Pupilas isocóricas.",
    labs: [
      { test: "Hemoglobina", val: "9,8 g/dL", ref: "13,5–17,5 g/dL", alt: true },
      { test: "Hematócrito", val: "30%", ref: "40–54%", alt: true },
      { test: "Leucócitos", val: "13.400/mm³", ref: "4.000–11.000/mm³", alt: true },
      { test: "TP (INR)", val: "1,1", ref: "0,8–1,2", alt: false },
      { test: "Lactato sérico", val: "3,2 mmol/L", ref: "0,5–2,0 mmol/L", alt: true },
      { test: "Gasometria — pH", val: "7,30", ref: "7,35–7,45", alt: true },
      { test: "Gasometria — pO₂", val: "58 mmHg", ref: "> 80 mmHg", alt: true },
      { test: "Gasometria — pCO₂", val: "48 mmHg", ref: "35–45 mmHg", alt: true }
    ],
    image: "RADIOGRAFIA DE TÓRAX AP (portátil): Fraturas de arcos costais direitos (4º ao 6º) em dois pontos, com pneumotórax direito de pequeno volume (< 20%) e hemotórax direito de moderado volume (velamento do seio costofrênico até o terço médio). Contusão pulmonar direita (opacidade alveolar heterogênea no lobo inferior direito). Mediastino central, sem alargamento. Sem pneumoperitônio.",
    note: "Caso com ator. O ator deve estar deitado na maca, com dor intensa ao respirar, tosse ocasional com sangue. Entregar dados de sinais vitais ao início. Entregar gasometria e laboratório quando solicitados. Entregar laudo da radiografia quando solicitado. Atentar se o candidato reconhece o flail chest e a necessidade de analgesia adequada e ventilação de suporte.",
    patientProfile: "J.P., 40 anos, masculino. Motociclista — caiu da moto ao desviar de um buraco, impacto no gradil costal direito no asfalto. Velocidade baixa a moderada. Sem capacete (cabeça não atingida). Sem comorbidades. Sem medicamentos. Nega alergias.",
    script: [
      {
        trigger: "Queixa principal / ao iniciar o contato",
        speech: "Doutor, eu caí da moto... tô com uma dor absurda aqui no lado direito do peito. Toda vez que eu respiro fundo parece que me estouram. Tô com dificuldade pra respirar direito."
      },
      {
        trigger: "Sobre como foi o acidente",
        speech: "Eu tava na rua, desviei de um buraco e a moto tombou. Caí no chão com o lado direito do peito primeiro. Não bati a cabeça, não tava de capacete mas a cabeça não atingiu o chão."
      },
      {
        trigger: "Sobre tosse com sangue",
        speech: "É, tô tossindo e saindo um pouco de sangue. Não é muito, mas tá saindo. Isso me assustou muito."
      },
      {
        trigger: "Sobre a respiração",
        speech: "Tô com muita dificuldade, cada respiração é uma dor. Parece que alguma coisa tá grudando aqui dentro quando eu inspiro."
      },
      {
        trigger: "Sobre dor no pescoço ou costas",
        speech: "O pescoço não dói não. As costas também não. A dor é toda aqui na frente, do lado direito."
      },
      {
        trigger: "Sobre tonteira ou desmaio",
        speech: "Tô me sentindo meio tonto sim, parece que vou desmaiar. Tô suando muito sem calor."
      },
      {
        trigger: "Sobre problemas de saúde anteriores",
        speech: "Sou saudável, não tenho nada não. Não faço uso de nenhum remédio. Nunca operei."
      },
      {
        trigger: "Sobre alergias",
        speech: "Não tenho alergia a nada que eu saiba não, doutor."
      },
      {
        trigger: "Sobre o abdome",
        speech: "A barriga não tá doendo não, só o peito mesmo."
      },
      {
        trigger: "Pergunta ativa — Meu pulmão furou doutor?",
        speech: "Doutor, meu pulmão furou? Preciso de cirurgia? Tenho muito medo de operar."
      },
      {
        trigger: "Pergunta ativa — Quanto tempo eu fico internado?",
        speech: "Se eu precisar ficar internado, quanto tempo vai ser? Tenho família que precisa de mim."
      }
    ],
    hiddenInfo: "Nega uso de anticoagulantes — relevante para planejamento de drenagem torácica; só menciona se o candidato perguntar diretamente sobre uso de anticoagulantes ou aspirina. | Refere que caiu em velocidade baixa mas depois admite que estava a aproximadamente 50 km/h ao desviar do buraco — subestimou a velocidade inicialmente; dado que muda a avaliação de energia do trauma.",
    actorBehavior: "Paciente com dor real e intensa, visivelmente dispneico. Tossindo ocasionalmente durante a consulta (tosse leve, com sangue simulado). Agitado mas colaborativo. Responde com frases curtas por causa da dor e da dispneia. Fica mais ansioso quando se fala em cirurgia ou dreno."
  },
  instC: {
    diagnosis: "Trauma torácico fechado com: (1) Tórax instável (flail chest) — fraturas de 4º ao 6º arcos costais direitos em dois pontos com movimento paradoxal; (2) Hemopneumotórax direito — hemotórax moderado + pneumotórax pequeno; (3) Contusão pulmonar direita. Insuficiência respiratória aguda hipoxêmica e hipercápnica. Choque hemorrágico classe II.",
    differentials: [
      "Pneumotórax hipertensivo — excluído pela ausência de desvio traqueal, jugulares sem distensão e PA preservada (embora baixa)",
      "Tamponamento cardíaco — excluído pelo mediastino central na radiografia, bulhas normofonéticas e ausência de jugulares distendidas",
      "Ruptura de aorta — excluída pelo mediastino sem alargamento na radiografia AP; TC angiográfica indicada se mecanismo de alta velocidade",
      "Contusão miocárdica — diferencial em trauma torácico por impacto direto; investigar com ECG e troponina — pode causar arritmias"
    ],
    context: "Paciente masculino, 40 anos, com trauma torácico fechado grave: flail chest com insuficiência respiratória hipoxêmica, hemopneumotórax direito moderado e contusão pulmonar. Hipoxemia severa (pO₂ 58 mmHg) e movimento paradoxal indicam necessidade de suporte ventilatório e drenagem torácica urgente.",
    justify: "Flail chest = ≥ 3 arcos costais fraturados em ≥ 2 pontos com movimento paradoxal. A insuficiência respiratória no flail chest é causada pela contusão pulmonar subjacente (principal fator) e pelo movimento paradoxal. Hemotórax moderado (macicez + MV abolido + velamento na RX) com anemia aguda indica hemotórax com perda sanguínea significativa. Drenagem torácica com dreno grosso é mandatória.",
    expectedAnamnesis: "Mecanismo: queda, impacto direto no tórax, velocidade, proteções | Dor torácica: localização, piora com respiração (pleurítica) | Hemoptise: volume, frequência | Dispneia: progressão | Perda de consciência | Dor abdominal associada | Comorbidades, medicamentos, anticoagulantes | Alergias",
    expectedPhysical: "ABCDE: Vias aéreas — permeabilidade; Respiração — expansibilidade, simetria, MV, movimento paradoxal, SpO₂; Circulação — PA, FC, pulsos, sangramento; Déficit neurológico — Glasgow; Exposição — desvestir tórax completamente | Tórax: crepitação costal, equimoses, escoriações | Movimento paradoxal: inspiração = retração do segmento instável (confirmação visual) | Ausência de desvio traqueal (pneumotórax hipertensivo excluído) | Jugulares: sem distensão",
    expectedExams: [
      { exam: "Radiografia de tórax AP portátil", justify: "Primeiro exame em trauma torácico — fraturas costais, pneumotórax, hemotórax, mediastino", expected: "Fraturas costais múltiplas, hemopneumotórax, contusão pulmonar" },
      { exam: "Gasometria arterial", justify: "Avaliar gravidade da hipoxemia e hipercapnia — orienta necessidade de ventilação mecânica", expected: "Hipoxemia grave (pO₂ 58), hipercapnia, acidose respiratória" },
      { exam: "ECG e troponina", justify: "Rastrear contusão miocárdica — causa de arritmias em trauma torácico direto", expected: "Alterações de ST ou arritmias em contusão miocárdica" },
      { exam: "Hemograma e tipagem sanguínea", justify: "Avaliar anemia hemorrágica e reserva para hemotransfusão", expected: "Anemia aguda — Hb 9,8, Ht 30%" },
      { exam: "TC de tórax com contraste", justify: "Melhor avaliação de fraturas, contusão pulmonar, hemotórax e grandes vasos — após estabilização", expected: "Definir extensão das lesões e planejar conduta definitiva" }
    ],
    expectedConduct: "Farmacológica: Analgesia multimodal — PRIORIDADE no flail chest: dipirona 1g IV + cetamina em subdose (0,3 mg/kg IV) + bloqueio intercostal com bupivacaína 0,25% nos nervos dos arcos fraturados e dois adjacentes; evitar opioides em excesso (depressão respiratória); considerar analgesia peridural torácica se disponível — reduz necessidade de ventilação mecânica; hidratação criteriosa (contusão pulmonar — evitar excesso de fluido); hemotransfusão se Hb < 7 ou instabilidade | Não farmacológica: Oxigenoterapia com máscara de alto fluxo (10–15 L/min); se hipoxemia refratária (SpO₂ < 90% com O₂ máximo) → ventilação mecânica invasiva; drenagem torácica com dreno grosso (28–32 Fr) no 4º–5º EIC, linha axilar anterior direita para hemopneumotórax; NÃO realizar fixação externa do flail chest (obsoleto) — tratar a contusão pulmonar com analgesia e fisioterapia | Encaminhamento: UTI para monitorização e suporte ventilatório; Cirurgia Torácica se hemotórax coagulado ou persistente após drenagem | Orientações ao familiar: Comunicar gravidade, necessidade de internação em UTI e procedimentos",
    expectedCommunication: "Apresentação: Identificar-se rapidamente e transmitir segurança | Comunicação do diagnóstico: Explicar que várias costelas fraturadas estão causando dificuldade para respirar e que o sangue dentro do pulmão precisa ser drenado | Escuta ativa: Validar o medo do paciente; explicar cada procedimento antes de realizá-lo",
    criticalErrors: [
      "Não reconhecer o movimento paradoxal como flail chest e não priorizar a analgesia e o suporte ventilatório",
      "Não realizar drenagem torácica em hemopneumotórax confirmado — atraso causa hipoxemia progressiva e choque",
      "Hiperhidratar paciente com contusão pulmonar — agrava o edema pulmonar e a insuficiência respiratória",
      "Não solicitar ECG e troponina para rastrear contusão miocárdica em impacto torácico direto",
      "Não controlar a dor adequadamente no flail chest — a dor é o principal fator de restrição ventilatória e causa hipoventilação"
    ]
  },
  instD: {
    title: "CHECKLIST — TRAUMA TORÁCICO FECHADO: FLAIL CHEST E HEMOPNEUMOTÓRAX",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Comunicou ao paciente os procedimentos necessários (drenagem, oxigenoterapia) de forma clara antes de realizá-los", score: 0.5, ref: "CFM Res. 2232/2019" },
          { item: "Atualizou o familiar sobre a gravidade e os procedimentos de forma empática", score: 0.5, ref: "CFM Res. 2232/2019; ABEM, 2022" }
        ]
      },
      {
        h: "AVALIAÇÃO PRIMÁRIA E ANAMNESE",
        items: [
          { item: "Realizou avaliação primária seguindo ABCDE, identificando comprometimento respiratório como prioridade", score: 1.0, ref: "ATLS ⚠️; SBCM, 2022" },
          { item: "Identificou o mecanismo de impacto direto no tórax e a velocidade do trauma como dados de gravidade", score: 0.5, ref: "ATLS ⚠️" },
          { item: "Identificou hemoptise como sinal de lesão pulmonar ativa", score: 0.5, ref: "ATLS ⚠️; SBCM, 2022" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Identificou o movimento paradoxal do segmento torácico (flail chest) à inspeção durante a respiração", score: 1.0, ref: "ATLS ⚠️; SBCM, 2022" },
          { item: "Identificou macicez no hemitórax direito inferior (hemotórax) e timpanismo no médio (pneumotórax)", score: 1.0, ref: "ATLS ⚠️; Semiologia — Porto, 8ª ed., 2019" },
          { item: "Excluiu pneumotórax hipertensivo pela ausência de desvio traqueal e jugulares sem distensão", score: 0.5, ref: "ATLS ⚠️; SBCM, 2022" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Solicitou gasometria arterial e identificou hipoxemia grave com hipercapnia — indicação de suporte ventilatório", score: 0.5, ref: "SBCM, 2022; ATLS ⚠️" },
          { item: "Solicitou ECG e troponina para rastrear contusão miocárdica em impacto torácico direto", score: 0.5, ref: "ATLS ⚠️; SBC, 2022" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO",
        items: [
          { item: "Priorizou analgesia eficaz (multimodal, incluindo bloqueio intercostal) como principal medida no flail chest", score: 1.0, ref: "ATLS ⚠️; SBCM, 2022; SBAD — Analgesia em trauma, 2022" },
          { item: "Indicou drenagem torácica com dreno grosso no 4º–5º EIC linha axilar anterior para o hemopneumotórax", score: 1.0, ref: "ATLS ⚠️; SBCM, 2022" },
          { item: "Não realizou hiperhidratação no paciente com contusão pulmonar", score: 0.5, ref: "ATLS ⚠️; SBCM, 2022" }
        ]
      }
    ]
  }
},

{
  id: 18,
  title: "Dor abdominal intensa desproporcional ao exame em idoso cardiopata",
  sub: "PS — Pronto-Socorro",
  tema: "Cirurgia",
  topic: "isquemia mesentérica aguda",
  level: "moderado",
  cardAccent: "#6E2F2F",
  instA: {
    scenario: "Pronto-Socorro de hospital geral. Turno noturno. Paciente padronizado (ator).",
    patient: "A.C., 72 anos, masculino, aposentado, cardiopata, com fibrilação atrial crônica.",
    complaint: "Dor abdominal em cólica muito intensa, de início súbito há 3 horas, com náuseas e vômitos, em idoso com arritmia cardíaca conhecida.",
    tasks: [
      "Realize a anamnese dirigida ao quadro de dor abdominal aguda e identifique os sinais de alarme.",
      "Interprete os achados do exame físico e identifique a dissociação clínica característica desta condição.",
      "Solicite os exames complementares e identifique os achados laboratoriais e de imagem compatíveis.",
      "Formule o diagnóstico e os diagnósticos diferenciais com justificativa.",
      "Proponha a conduta terapêutica de urgência e identifique o momento cirúrgico."
    ]
  },
  instB: {
    vitals: {
      PA: "100/64 mmHg",
      FC: "118 bpm (irregular)",
      FR: "22 irpm",
      Tax: "37,8°C",
      Peso: "68 kg",
      Altura: "1,68 m",
      IMC: "24,1 kg/m²"
    },
    physicalGeneral: "Paciente em mau estado geral, consciente, orientado, com dor abdominal intensa (EVA 9/10), prostrado, sudoreico. Mucosas pálidas 1+/4+, levemente ictérico. Diaforético.",
    physicalSeg: "ABDOME: Plano, levemente distendido. Ruídos hidroaéreos hipoativos. Dor à palpação difusa, com INTENSIDADE DESPROPORCIONALMENTE MENOR que a relatada pelo paciente (abdome relativamente flácido apesar da dor intensa subjetiva — dissociação clínica característica). Sem defesa ou Blumberg no momento. Dor periumbilical à palpação profunda. Sem visceromegalias. | CARDIOVASCULAR: Arritmia irregular (FA), taquicárdico, bulhas hipofonéticas. Sem sopros audíveis. | NEUROLÓGICO: Orientado, Glasgow 15.",
    labs: [
      { test: "Hemoglobina", val: "13,2 g/dL", ref: "13,5–17,5 g/dL", alt: false },
      { test: "Leucócitos", val: "22.400/mm³", ref: "4.000–11.000/mm³", alt: true },
      { test: "Neutrófilos", val: "92%", ref: "50–70%", alt: true },
      { test: "PCR", val: "210 mg/L", ref: "< 5 mg/L", alt: true },
      { test: "Lactato sérico", val: "7,2 mmol/L", ref: "0,5–2,0 mmol/L", alt: true },
      { test: "Creatinina", val: "2,1 mg/dL", ref: "0,7–1,2 mg/dL", alt: true },
      { test: "Ureia", val: "88 mg/dL", ref: "15–45 mg/dL", alt: true },
      { test: "Amilase", val: "280 U/L", ref: "< 100 U/L", alt: true },
      { test: "DHL", val: "980 UI/L", ref: "140–280 UI/L", alt: true },
      { test: "TP (INR)", val: "2,8 (em uso de warfarina)", ref: "0,8–1,2", alt: true },
      { test: "Gasometria — pH", val: "7,22", ref: "7,35–7,45", alt: true },
      { test: "Gasometria — HCO₃", val: "14 mEq/L", ref: "22–26 mEq/L", alt: true },
      { test: "Gasometria — Lactato", val: "7,2 mmol/L", ref: "0,5–2,0 mmol/L", alt: true }
    ],
    image: "TOMOGRAFIA DE ABDOME COM CONTRASTE (angioTC): Tromboembolismo da artéria mesentérica superior (AMS) — falha de enchimento no tronco da AMS a 2 cm de sua origem, com extensão para os ramos jejunoileais. Pneumatose intestinal nas alças do jejuno médio e íleo proximal. Edema transmural e espessamento das alças acometidas. Líquido livre peritoneal em pequena quantidade. Sem pneumoperitônio franco.",
    note: "Caso com ator. O ator deve representar um idoso com dor intensa, prostrado. O dado-chave é a dissociação clínica: dor intensa subjetiva com abdome relativamente flácido ao exame no início. Entregar sinais vitais ao início. Entregar laboratório quando solicitado. Entregar AngioTC quando o candidato solicitar e justificar. Atentar se o candidato reconhece a dissociação clínica como sinal característico de isquemia mesentérica.",
    patientProfile: "A.C., 72 anos, masculino. Aposentado (ex-contador). Fibrilação atrial crônica em uso de warfarina 5 mg/dia. Hipertensão arterial em uso de enalapril 10 mg/dia e atenolol 25 mg/dia. Insuficiência cardíaca leve (NYHA II). Sem diabete. INR atual 2,8 (anticoagulação terapêutica, mas embolia ocorreu mesmo assim).",
    script: [
      {
        trigger: "Queixa principal / ao iniciar o contato",
        speech: "Doutor, eu tô com uma dor de barriga que nunca senti na minha vida. Começou do nada, de repente, há umas três horas. É uma dor horrível, em cólica, aqui no meio da barriga. Nunca doeu assim antes."
      },
      {
        trigger: "Sobre o início da dor",
        speech: "Foi de repente mesmo, sem aviso. Tava assistindo televisão, aí começou essa dor fortíssima. Fui pro banheiro achando que era intestino mas não ajudou nada. A dor não passa."
      },
      {
        trigger: "Sobre a localização e irradiação",
        speech: "É aqui no meio, ao redor do umbigo. Não vai pra nenhum lugar específico, é a barriga toda, mas principalmente aqui no centro. E vai e vem em cólica."
      },
      {
        trigger: "Sobre vômitos e náuseas",
        speech: "Tô com muito enjoo, já vomitei três vezes. Vomitei um líquido escuro, meio amarelado. Não tinha sangue."
      },
      {
        trigger: "Sobre o hábito intestinal",
        speech: "Ainda não fui ao banheiro hoje. Tô sem gases desde que a dor começou."
      },
      {
        trigger: "Sobre o problema do coração",
        speech: "Tenho fibrilação atrial faz uns 5 anos. Tomo varfarina pra não fazer coágulo. Também tenho pressão alta e problema no coração fraco."
      },
      {
        trigger: "Sobre os medicamentos",
        speech: "Tomo varfarina, enalapril e atenolol. Todo dia certinho. Faço controle do INR todo mês, mês passado tava no alvo certinho."
      },
      {
        trigger: "Sobre episódios anteriores semelhantes",
        speech: "Nunca tive essa dor antes, não. Tenho às vezes dor de estômago normal, mas nunca assim. Isso é diferente de qualquer coisa que já senti."
      },
      {
        trigger: "Sobre cirurgias anteriores no abdome",
        speech: "Nunca operei o abdome não. Só operei de catarata."
      },
      {
        trigger: "Pergunta ativa — O que tá acontecendo doutor?",
        speech: "Doutor, o que tá acontecendo comigo? É do coração? É o intestino? Eu tô com medo muito grande."
      },
      {
        trigger: "Pergunta ativa — Vou precisar operar?",
        speech: "Vou precisar de cirurgia? Tenho 72 anos, será que aguentaria uma cirurgia?"
      }
    ],
    hiddenInfo: "Diarreia sanguinolenta há 1 hora antes de chegar ao PS — sinal de isquemia intestinal avançada com necrose; só menciona se o candidato perguntar diretamente sobre sangue nas fezes ou evacuações recentes. | Refere que há 2 dias sentiu uma dor leve semelhante que passou — possível 'angina mesentérica' premonitória; só menciona se o candidato perguntar sobre episódios anteriores de dor abdominal.",
    actorBehavior: "Idoso prostrado, com dor intensa mas abdome surpreendentemente flácido ao exame. Fica agitado com a dor. Responde às perguntas mas está debilitado. Demonstra medo pela idade e pela cirurgia. Família (cônjuge) pode estar presente se o candidato solicitar."
  },
  instC: {
    diagnosis: "Isquemia mesentérica aguda por embolia da artéria mesentérica superior (AMS) — pneumatose intestinal e tromboembolismo confirmados pela angioTC. Fonte emboligênica: fibrilação atrial crônica com anticoagulação insuficiente. Acidose lática grave (lactato 7,2), choque séptico/distributivo incipiente. Cirurgia de urgência indicada.",
    differentials: [
      "Pancreatite aguda grave — excluída pelo padrão típico de isquemia mesentérica na angioTC, pela pneumatose intestinal e pela dissociação clínica",
      "Obstrução intestinal — diferencial de dor abdominal aguda com parada de gases; excluída pela angioTC (ausência de distensão de alças a montante de um ponto de transição claro) e pelo padrão de isquemia",
      "Trombose venosa mesentérica — diferencial de isquemia mesentérica; excluída pela angioTC que mostra oclusão arterial e não venosa",
      "Dissecção de aorta com comprometimento da AMS — diferencial de isquemia mesentérica aguda; excluída pela angioTC sem dissecção aórtica"
    ],
    context: "Idoso com FA crônica e início súbito de dor abdominal intensa com dissociação clínica (dor intensa + abdome flácido) — apresentação clássica de isquemia mesentérica aguda por embolia. Lactato de 7,2 e pneumatose confirmam isquemia com necrose intestinal. Mortalidade > 60% — emergência cirúrgica.",
    justify: "A tríade clássica da isquemia mesentérica aguda: dor abdominal súbita + dissociação clínica (dor desproporcional ao exame) + FA como fonte emboligênica. Lactato > 2 mmol/L indica hipoperfusão; lactato > 6 = isquemia grave com necrose. Pneumatose intestinal na angioTC confirma necrose da parede intestinal — cirurgia imediata. A dissociação clínica é o principal sinal que distingue isquemia das outras causas de abdome agudo.",
    expectedAnamnesis: "Início e caráter da dor: súbita, em cólica, periumbilical | Dissociação clínica: dor muito intensa com abdome relativamente flácido | Histórico de FA e anticoagulação | Outros fatores de risco para embolia: IAM recente, valvopatia, IC | Episódios anteriores de 'angina mesentérica' (dor pós-prandial crônica) | Vômitos: conteúdo, frequência | Hábito intestinal: parada de gases, diarreia sanguinolenta | Uso de anticoagulantes: adesão, última dose, INR atual",
    expectedPhysical: "Sinais vitais: taquicardia irregular (FA), hipotensão, febre | Abdome: dissociação — dor subjetiva intensa vs. abdome relativamente flácido ao toque | Ruídos hidroaéreos: hipoativos ou ausentes | Blumberg: pode estar presente tardiamente (peritonite por necrose) | Cardiovascular: FA ao ECG, avaliar sopros (valvopatia) | Avaliar sinais de choque",
    expectedExams: [
      { exam: "AngioTC de abdome com contraste", justify: "Exame de escolha para diagnóstico de isquemia mesentérica — visualiza a AMS e seus ramos, identifica pneumatose", expected: "Falha de enchimento na AMS, pneumatose intestinal, líquido livre" },
      { exam: "Lactato sérico", justify: "Marcador de isquemia tecidual e gravidade do quadro", expected: "Muito elevado (7,2 mmol/L) — isquemia grave com necrose" },
      { exam: "Hemograma, gasometria, eletrólitos", justify: "Avaliar leucocitose, acidose metabólica, hipóxia e distúrbios eletrolíticos", expected: "Leucocitose importante, acidose lática grave" },
      { exam: "ECG", justify: "Confirmar FA e avaliar cardiopatia isquêmica associada", expected: "FA com resposta ventricular elevada" },
      { exam: "INR", justify: "Avaliar nível de anticoagulação — pode orientar reversão se cirurgia urgente necessária", expected: "INR 2,8 — em anticoagulação mas embolia ocorreu mesmo assim" }
    ],
    expectedConduct: "Farmacológica: Ressuscitação hemodinâmica: Ringer Lactato 1.000 mL IV em 30 min; antibioticoterapia empírica imediata: piperacilina-tazobactam 4,5g IV a cada 6h (cobertura para gram-negativos e anaeróbios — translocação bacteriana por necrose intestinal; RENAME 2022); reversão do anticoagulante se cirurgia urgente: vitamina K 10 mg IV + plasma fresco congelado se INR > 2; heparina não fracionada IV pode ser mantida após tromboembolectomia para evitar retrombose | Não farmacológica: Laparotomia exploradora de urgência — tromboembolectomia da AMS + ressecção do intestino necrótico; 'second-look' em 24–48h para avaliar viabilidade das alças preservadas; cateter vesical; SNG | Encaminhamento: Bloco cirúrgico imediatamente; UTI pós-operatória; Cardiologia para otimização da anticoagulação da FA no pós-operatório | Orientações ao familiar: Comunicar a gravidade extrema do quadro e o risco de vida mesmo com cirurgia (mortalidade > 60%) | Seguimento: UTI; second-look; anticoagulação definitiva no pós-operatório",
    expectedCommunication: "Apresentação: Identificar-se rapidamente | Comunicação ao paciente e familiar: Explicar gravidade em linguagem acessível; comunicar necessidade de cirurgia imediata; não omitir o risco de vida | Escuta ativa: Validar o medo do idoso; envolver familiar nas decisões; respeitar diretivas antecipadas de vontade se existirem",
    criticalErrors: [
      "Não reconhecer a dissociação clínica (dor intensa + abdome flácido) como sinal patognomônico de isquemia mesentérica",
      "Não solicitar angioTC — exame de escolha e diagnóstico, não substituível por USG ou RX simples",
      "Não iniciar antibioticoterapia imediata — translocação bacteriana por necrose intestinal causa sepse rapidamente",
      "Atrasar a cirurgia aguardando exames adicionais — isquemia mesentérica com necrose exige laparotomia imediata",
      "Não reverter o anticoagulante adequadamente antes da cirurgia urgente — risco de sangramento intraoperatório grave"
    ]
  },
  instD: {
    title: "CHECKLIST — ISQUEMIA MESENTÉRICA AGUDA POR EMBOLIA",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Comunicou a gravidade extrema do quadro ao paciente e ao familiar, incluindo o risco de vida, de forma respeitosa e empática", score: 0.5, ref: "CFM Res. 2232/2019; CFM — Bioética em urgência, 2020" },
          { item: "Envolveu o familiar na tomada de decisão sobre a cirurgia de urgência, respeitando a autonomia do paciente idoso", score: 0.5, ref: "CFM Res. 2232/2019; Código de Ética Médica" }
        ]
      },
      {
        h: "ANAMNESE E HISTÓRICO CLÍNICO",
        items: [
          { item: "Identificou o início súbito da dor como característica essencial da isquemia mesentérica por embolia", score: 0.5, ref: "SBC/SBACV — Isquemia Mesentérica, 2022" },
          { item: "Identificou FA crônica e anticoagulação como contexto de risco emboligênico — principal etiologia da isquemia mesentérica aguda", score: 1.0, ref: "SBC/SBACV, 2022; AHA Guidelines ⚠️" },
          { item: "Investigou diarreia sanguinolenta como sinal de necrose intestinal avançada", score: 0.5, ref: "SBC/SBACV, 2022" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Identificou a dissociação clínica: dor subjetiva intensa desproporcional ao abdome relativamente flácido ao toque — sinal patognomônico de isquemia mesentérica", score: 1.0, ref: "SBC/SBACV, 2022; Sabiston ⚠️" },
          { item: "Confirmou FA pela irregularidade do pulso e pela ausculta cardíaca", score: 0.5, ref: "SBC, 2022; Semiologia Médica — Porto, 8ª ed., 2019" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Solicitou angioTC de abdome como exame de escolha para diagnóstico e localização da oclusão", score: 1.0, ref: "SBC/SBACV, 2022; SBCV — Isquemia Mesentérica, 2022" },
          { item: "Valorizou o lactato sérico muito elevado (7,2 mmol/L) como marcador de necrose intestinal e gravidade extrema", score: 1.0, ref: "SBC/SBACV, 2022" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO",
        items: [
          { item: "Iniciou ressuscitação hemodinâmica e antibioticoterapia empírica de amplo espectro imediatamente", score: 0.5, ref: "SBC/SBACV, 2022; RENAME 2022" },
          { item: "Indicou laparotomia exploradora de urgência sem aguardar melhora clínica", score: 1.0, ref: "SBC/SBACV, 2022; CBC, 2022" },
          { item: "Planejou reversão do anticoagulante (vitamina K + PFC) para cirurgia urgente com INR 2,8", score: 0.5, ref: "SBC, 2022; SBHH, 2022; RENAME 2022" }
        ]
      }
    ]
  }
},

{
  id: 19,
  title: "Dor intensa ao defecar e sangramento vivo há seis semanas",
  sub: "Ambulatório de Cirurgia Geral — Hospital Geral",
  tema: "Cirurgia",
  topic: "fissura anal",
  level: "moderado",
  cardAccent: "#6C3483",
  instA: {
    scenario: "Ambulatório de Cirurgia Geral de hospital geral. Turno matutino. Paciente padronizado (ator).",
    patient: "C.M., 28 anos, feminino, nutricionista, com constipação crônica e histórico de parto normal há 4 meses.",
    complaint: "Dor intensa ao defecar, como uma facada no ânus, com sangramento vivo e sensação de queimação que dura horas após a evacuação, há 6 semanas.",
    tasks: [
      "Realize a anamnese dirigida ao quadro de dor anal e sangramento e identifique o diagnóstico provável.",
      "Realize o exame físico anorretal pertinente e descreva os achados.",
      "Formule o diagnóstico, classifique a fissura e proponha diagnósticos diferenciais.",
      "Proponha a conduta terapêutica inicial baseada nas diretrizes e na classificação da fissura.",
      "Oriente a paciente sobre medidas de mudança de hábito e sinais de alarme para retorno."
    ]
  },
  instB: {
    vitals: {
      PA: "112/72 mmHg",
      FC: "76 bpm",
      FR: "16 irpm",
      Tax: "36,3°C",
      Peso: "62 kg",
      Altura: "1,65 m",
      IMC: "22,8 kg/m²"
    },
    physicalGeneral: "Paciente em bom estado geral, consciente, orientada, eupneica, afebril. Mucosas normocoradas. Sem alterações ao exame geral. Visivelmente constrangida e apreensiva com o exame.",
    physicalSeg: "INSPEÇÃO ANAL (com afastamento delicado das nádegas): Fissura linear em posição posterior (6 horas em posição ginecológica), de bordas endurecidas e edemaciadas, com fibras do esfíncter interno visíveis no leito da fissura — aspecto de fissura crônica. Sentinela hemorroidária (plicoma sentinela) visível na borda inferior da fissura. Sem abscessos ou fístulas perianais. Sem hemorroidas externas trombosadas. | TOQUE RETAL: NÃO REALIZADO — paciente apresentou espasmo esfincteriano intenso à tentativa, com dor insuportável referida (10/10). Avaliação interrompida. Ausência de massas palpadas antes da interrupção. | ANUSCOPIA: NÃO REALIZADA no momento — contraindicada pelo espasmo e dor intensos. Programada para retorno após início do tratamento.",
    labs: [
      { test: "Hemograma completo", val: "Dentro dos limites normais", ref: "—", alt: false },
      { test: "Pesquisa de sangue oculto nas fezes", val: "Positiva (fraca)", ref: "Negativa", alt: true }
    ],
    image: null,
    note: "Caso com ator. A atriz deve demonstrar constrangimento e dor ao relatar os sintomas. Durante o exame físico: ao iniciar a inspeção anal, a atriz geme de dor simulada e avisa que a região está muito sensível. NÃO realizar toque retal real — indicar a impossibilidade clínica. Entregar laboratório quando solicitado. Atentar se o candidato respeita a limitação do exame e programa anuscopia posterior ao início do tratamento.",
    patientProfile: "C.M., 28 anos, feminino. Nutricionista, casada, um filho de 4 meses (parto normal). Constipação crônica há anos — evacuações a cada 3–4 dias, com esforço e fezes ressecadas. Amamentação exclusiva — faz dieta restritiva por alergia à proteína do leite de vaca do bebê. Sem medicamentos de uso contínuo. Nega alergias. Sem doenças inflamatórias intestinais conhecidas.",
    script: [
      {
        trigger: "Queixa principal / ao iniciar o contato",
        speech: "Boa tarde, doutor. Eu tô com muita vergonha de falar isso mas... eu tô com uma dor horrível quando vou ao banheiro. Parece uma facada no ânus. Eu fico com medo de ir ao banheiro de tanta dor. E sangra também."
      },
      {
        trigger: "Sobre a dor",
        speech: "A dor começa exatamente quando as fezes passam pelo ânus. É uma dor cortante, fortíssima. E depois continua por horas, como uma queimação, uma cólica no ânus. Às vezes dura 3, 4 horas. É insuportável."
      },
      {
        trigger: "Sobre o sangramento",
        speech: "Tem sangue no papel higiênico, às vezes no vaso também. É vermelho vivo, bem vermelho. Não mistura com as fezes, fica por fora. Não é muito, mas assustou."
      },
      {
        trigger: "Sobre o medo de evacuar",
        speech: "Eu fico segurando o máximo que posso porque sei que vai doer muito. Aí as fezes ficam mais ressecadas ainda e quando sai piora a dor. É um ciclo ruim."
      },
      {
        trigger: "Sobre o hábito intestinal",
        speech: "Sou constipada há anos, vai no banheiro a cada 3 ou 4 dias. Mas piorou depois que comecei a fazer dieta sem leite por causa do bebê. Tô comendo menos fibra."
      },
      {
        trigger: "Sobre o parto",
        speech: "Fiz parto normal há 4 meses. Foi difícil, forçei muito. Não tive episiotomia mas forçei bastante. Será que foi isso que causou?"
      },
      {
        trigger: "Sobre sintomas associados febre ou corrimento",
        speech: "Não, não tenho febre não. Não sai nada além de sangue. Não sinto nada saindo pelo ânus entre as evacuações."
      },
      {
        trigger: "Sobre doenças intestinais",
        speech: "Nunca me disseram que tenho Crohn nem colite. Nunca tive diarreia por muito tempo, nunca tive muco nas fezes. Só esse problema que começou agora."
      },
      {
        trigger: "Sobre medicamentos",
        speech: "Não tomo nada. Só vitaminas e ferro porque tô amamentando. Evito laxante porque vi que pode passar pro bebê pelo leite."
      },
      {
        trigger: "Pergunta ativa — Por que aconteceu isso comigo doutor?",
        speech: "Por que aconteceu isso comigo? Tem alguma coisa mais grave? Pode ser câncer?"
      },
      {
        trigger: "Pergunta ativa — Tem como tratar sem cirurgia?",
        speech: "Tem algum remédio pra passar? Tem como tratar sem precisar operar? Tenho bebê pequeno em casa."
      }
    ],
    hiddenInfo: "Está evitando evacuar propositalmente, passando até 5 dias sem ir ao banheiro — piora o ciclo da fissura crônica; só menciona se o candidato perguntar sobre com que frequência vai ao banheiro atualmente. | Já tentou usar creme anestésico (lidocaína em gel) comprado sem receita mas sente que não está melhorando — dado relevante para avaliar resposta ao tratamento prévio; só menciona se o candidato perguntar sobre tentativas de tratamento anteriores.",
    actorBehavior: "Paciente constrangida e tensa. Fala com dificuldade sobre o assunto. Alivia quando percebe que o médico está acolhendo sem julgamento. Fica muito apreensiva ao ouvir que será examinada na região anal. Reage com dor real simulada ao toque. Fica tranquila quando o candidato respeita os limites do exame e explica a abordagem."
  },
  instC: {
    diagnosis: "Fissura anal crônica posterior (> 6 semanas) com plicoma sentinela e hipertonia do esfíncter interno. Fatores contribuintes: constipação crônica, parto normal recente (forço evacuatório intenso), dieta restritiva pós-parto com redução de fibras.",
    differentials: [
      "Hemorroida interna sangrante — excluída pela localização linear da lesão à inspeção (fissura) e pelo padrão de dor cortante ao defecar (hemorroida geralmente não causa essa dor intensa)",
      "Doença de Crohn anal — diferencial importante em fissura atípica (lateral, múltipla, profunda, de difícil cicatrização); excluída provisoriamente pela localização posterior clássica e ausência de história intestinal prévia; avaliar se refratária ao tratamento",
      "Abscesso perianal — excluído pela ausência de edema flutuante, eritema intenso e dor contínua sem relação com evacuação",
      "Carcinoma espinocelular anal — diferencial de ulceração anal em adulto; excluído pelo padrão clínico típico de fissura e pela ausência de massa; biópsia indicada em fissuras atípicas refratárias ao tratamento"
    ],
    context: "Paciente feminina jovem, 28 anos, pós-parto recente com constipação crônica agravada pela dieta restritiva. Fissura anal crônica posterior com plicoma sentinela — evolução > 6 semanas sem cicatrização espontânea. Espasmo esfincteriano intenso impede exame completo. Tratamento clínico de primeira linha indicado.",
    justify: "Fissura crônica: evolução > 6 semanas, bordas endurecidas, fibras do esfíncter interno expostas, plicoma sentinela. A dor em facada seguida de queimação por horas é patognomônica de fissura anal com hipertonia esfincteriana — o espasmo mantém a isquemia local impedindo a cicatrização. O ciclo constipação → fezes ressecadas → trauma do canal anal → dor → retenção fecal → piora da constipação é o mecanismo fisiopatológico central.",
    expectedAnamnesis: "Caracterizar a dor: início ao defecar, tipo cortante/facada, queimação prolongada pós-evacuação | Sangramento: cor, volume, relação com evacuação | Medo de evacuar e retenção fecal | Constipação: duração, frequência, consistência das fezes | Parto recente: esforço evacuatório intenso | Dieta atual (restrição de fibras) | Tentativas de tratamento prévio | DII prévia (Crohn — fissuras atípicas) | Imunocomprometimento (HIV — fissuras múltiplas ou atípicas) | Uso de medicamentos (opioides causam constipação)",
    expectedPhysical: "Inspeção anal com afastamento delicado das nádegas — visualização da fissura sem necessidade de toque | Localização: posterior (6h) é a mais comum; anterior (12h) mais comum em mulheres pós-parto | Plicoma sentinela: pele redundante na borda inferior da fissura crônica | Fibras do esfíncter interno visíveis no leito: fissura crônica | Toque retal: realizar com cuidado — se espasmo intenso, adiar para após início do tratamento | Anuscopia: contraindicada no momento — programar para retorno",
    expectedExams: [
      { exam: "Nenhum exame complementar é obrigatório para o diagnóstico de fissura anal típica — diagnóstico é clínico", justify: "Fissura típica (posterior, linear, com plicoma sentinela) é diagnóstico clínico pela inspeção", expected: "Hemograma normal; pesquisa de sangue oculto positiva fraca pelo sangramento da fissura" },
      { exam: "Anuscopia (programada para retorno)", justify: "Complementar para avaliar canal anal completo e excluir hemorroida interna ou lesão associada — realizar após início do tratamento quando o espasmo diminuir", expected: "Visualização da fissura e canal anal completo sem outras lesões" },
      { exam: "Colonoscopia (indicada se atipias: fissura lateral, múltipla, refratária)", justify: "Excluir DII (Crohn) em fissuras atípicas ou refratárias ao tratamento convencional", expected: "Não indicada neste caso típico — reservar para fissura refratária ou atípica" }
    ],
    expectedConduct: "Farmacológica: Primeira linha — nitroglicerina tópica 0,2–0,4% (pomada, 2x/dia por 6–8 semanas) — relaxante da musculatura lisa esfincteriana, aumenta perfusão local — ANVISA aprovada para esta indicação; OU diltiazem gel 2% tópico 2x/dia (melhor tolerância local que nitroglicerina) — ambos com eficácia semelhante; analgesia: dipirona 500 mg VO a cada 6h nas primeiras semanas; pomada anestésica local (lidocaína 2%) antes das evacuações para alívio | Não farmacológica: Amolecedores de fezes: lactulose 10 mL VO 1–2x/dia ou macrogol 4000 (seguro na amamentação — MS, 2022); dieta rica em fibras: acréscimo de 25–30g/dia (psílio, frutas, legumes); hidratação: 1,5–2L/dia; banho de assento morno 15 min após evacuação — relaxa o esfíncter e alivia a dor; NÃO forçar a evacuação — orientar a paciente; segunda linha se falha clínica em 8 semanas: toxina botulínica injetável no esfíncter interno | Encaminhamento: Proctologia para esfincterotomia lateral interna (ELI) cirúrgica se falha das medidas clínicas — taxa de cura de 95% mas risco de incontinência leve (< 5%) | Orientações ao paciente: Explicar o mecanismo da fissura e o ciclo constipação-dor-retenção; orientar que o tratamento clínico leva 6–8 semanas; orientar sobre segurança dos medicamentos na amamentação | Seguimento: Retorno em 4 semanas para reavaliação e realização de anuscopia se melhora do espasmo",
    expectedCommunication: "Apresentação: Identificar-se com acolhimento especial — tema constrangedor para muitos pacientes | Comunicação do diagnóstico: Explicar em linguagem clara e sem julgamento que a lesão é uma fissura, uma rachadura na entrada do ânus, causada pelo esforço evacuatório e fezes ressecadas; desmistificar o câncer como causa | Escuta ativa: Agradecer a confiança da paciente em falar sobre o assunto; validar a dor e o constrangimento; perguntar sobre o impacto na vida diária e na amamentação; discutir a segurança dos medicamentos para o bebê",
    criticalErrors: [
      "Não realizar inspeção anal por constrangimento ou omissão — o diagnóstico de fissura é feito pela inspeção",
      "Forçar o toque retal em presença de espasmo esfincteriano intenso com dor 10/10 — causa mais dor e trauma sem acréscimo diagnóstico",
      "Prescrever medicamentos contraindicados na amamentação sem verificar a segurança (ex.: certos relaxantes musculares sistêmicos)",
      "Não orientar amolecedores de fezes — o ciclo constipação-fissura não se rompe sem abordagem do hábito intestinal",
      "Não suspeitar de DII (Crohn) em fissura lateral ou múltipla — fissura atípica exige investigação adicional"
    ]
  },
  instD: {
    title: "CHECKLIST — FISSURA ANAL CRÔNICA: DIAGNÓSTICO E CONDUTA",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Criou ambiente acolhedor e sem julgamento para a paciente abordar queixa anal constrangedora", score: 0.5, ref: "CFM Res. 2232/2019; SBCP, 2022" },
          { item: "Verificou a segurança dos medicamentos prescritos na amamentação antes de prescrevê-los", score: 0.5, ref: "MS — Medicamentos e amamentação, 2022; RENAME 2022" }
        ]
      },
      {
        h: "ANAMNESE E HISTÓRICO CLÍNICO",
        items: [
          { item: "Identificou o padrão clínico típico: dor cortante ao defecar seguida de queimação prolongada pós-evacuação", score: 1.0, ref: "SBCP — Consenso em Fissura Anal, 2022" },
          { item: "Identificou constipação crônica e parto normal recente como fatores etiológicos da fissura", score: 0.5, ref: "SBCP, 2022" },
          { item: "Investigou medo de evacuar e retenção fecal voluntária como fatores de perpetuação do ciclo", score: 0.5, ref: "SBCP, 2022" },
          { item: "Investigou características atípicas (localização, multiplicidade) para excluir DII ou outros diagnósticos", score: 0.5, ref: "SBCP, 2022" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Realizou inspeção anal com afastamento delicado das nádegas e identificou a fissura posterior com plicoma sentinela", score: 1.0, ref: "SBCP, 2022; Semiologia Médica — Porto, 8ª ed., 2019" },
          { item: "Não forçou o toque retal em presença de espasmo esfincteriano intenso — interrompeu e programou para retorno", score: 1.0, ref: "SBCP, 2022" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Classificou corretamente como fissura crônica (> 6 semanas, bordas endurecidas, fibras do esfíncter visíveis, plicoma)", score: 0.5, ref: "SBCP, 2022" },
          { item: "Programou anuscopia para retorno após início do tratamento e melhora do espasmo", score: 0.5, ref: "SBCP, 2022" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO",
        items: [
          { item: "Prescreveu nitroglicerina tópica 0,2% ou diltiazem gel 2% como primeira linha para fissura crônica", score: 1.0, ref: "SBCP — Consenso em Fissura Anal, 2022; RENAME 2022" },
          { item: "Prescreveu amolecedor de fezes (lactulose ou macrogol) seguro para amamentação", score: 0.5, ref: "SBCP, 2022; MS — Medicamentos e amamentação, 2022; RENAME 2022" },
          { item: "Orientou banho de assento morno, dieta rica em fibras e hidratação adequada", score: 0.5, ref: "SBCP, 2022" }
        ]
      }
    ]
  }
},

{
  id: 20,
  title: "Pernas pesadas, varizes e ferida na perna que não cicatriza",
  sub: "Ambulatório de Cirurgia Vascular — Hospital Geral",
  tema: "Cirurgia",
  topic: "insuficiência venosa crônica",
  level: "moderado",
  cardAccent: "#1F618D",
  instA: {
    scenario: "Ambulatório de Cirurgia Vascular de hospital geral. Turno matutino. Paciente padronizado (ator).",
    patient: "M.S., 58 anos, feminino, caixa de supermercado, obesa, com varizes há 20 anos.",
    complaint: "Pernas pesadas, edema no fim do dia e úlcera na perna esquerda que não cicatriza há 3 meses.",
    tasks: [
      "Realize a anamnese dirigida ao quadro de insuficiência venosa crônica e identifique os fatores de risco.",
      "Realize o exame físico vascular dos membros inferiores e descreva os achados.",
      "Classifique a insuficiência venosa pela classificação CEAP.",
      "Proponha a conduta terapêutica clínica e cirúrgica baseada na classificação.",
      "Diferencie a úlcera venosa de outras etiologias (arterial, neuropática) e oriente a paciente sobre os cuidados."
    ]
  },
  instB: {
    vitals: {
      PA: "142/88 mmHg",
      FC: "78 bpm",
      FR: "16 irpm",
      Tax: "36,5°C",
      Peso: "96 kg",
      Altura: "1,62 m",
      IMC: "36,6 kg/m²"
    },
    physicalGeneral: "Paciente em bom estado geral, consciente, orientada, eupneica. Mucosas normocoradas, anictérica. Obesa. Sem alterações ao exame geral.",
    physicalSeg: "MMII: Varizes tronculares e reticulares bilaterais, predominando em MMII esquerdo. Edema mole 2+/4+ em tornozelos e 1/3 inferior das pernas bilateralmente, maior à esquerda. Hiperpigmentação cutânea em área maleolar medial esquerda (lipodermatosclerose). Úlcera ativa na face medial do 1/3 inferior da perna esquerda, medindo 4 x 3 cm, com bordas irregulares, fundo limpo com tecido de granulação, exsudato seroso moderado, sem necrose, sem sinais de infecção (sem eritema, calor, edema local excessivo ou odor). Ausência de úlcera contralateral. Pulsos pediosos e tibiais posteriores presentes e simétricos bilateralmente. ITB (índice tornozelo-braquial) calculado: 1,0 à esquerda. Ausência de dedos em garra ou amiotrofia. Sinal de Trendelenburg positivo à esquerda (avaliar insuficiência da veia safena magna). | CARDIOVASCULAR: Bulhas rítmicas, sem sopros.",
    labs: [
      { test: "Hemograma completo", val: "Dentro dos limites normais", ref: "—", alt: false },
      { test: "Glicemia de jejum", val: "94 mg/dL", ref: "70–99 mg/dL", alt: false },
      { test: "HbA1c", val: "5,6%", ref: "< 5,7%", alt: false },
      { test: "Albumina sérica", val: "3,6 g/dL", ref: "3,5–5,0 g/dL", alt: false },
      { test: "PCR", val: "18 mg/L", ref: "< 5 mg/L", alt: true },
      { test: "Swab da úlcera (cultura)", val: "Staphylococcus aureus sensível à oxacilina (OSSA) — colonização sem infecção ativa", ref: "—", alt: false }
    ],
    image: "DUPLEX SCAN DE MMII (ultrassonografia vascular com Doppler): Sistema venoso superficial: insuficiência da veia safena magna esquerda em toda a extensão, com refluxo ao Doppler (> 0,5 segundos) confirmado. Varizes colaterais tributárias extensas à esquerda. Sistema venoso profundo: veias femoral comum, femoral superficial, poplítea e tibiais permeáveis bilateralmente, sem sinais de trombose. Refluxo venoso profundo ausente.",
    note: "Caso com ator. A atriz deve mostrar a perna esquerda com maquiagem simulando a úlcera e varizes. Entregar os sinais vitais ao início. Entregar laboratório quando solicitado. Entregar resultado do duplex scan quando o candidato solicitar. Atentar se o candidato calcula o ITB para diferenciar úlcera venosa de arterial e se classifica pela CEAP.",
    patientProfile: "M.S., 58 anos, feminino. Caixa de supermercado — trabalha em pé 8 horas por dia há 25 anos. Dois partos normais. Obesidade grau II (IMC 36,6). Hipertensa em uso de losartana 50 mg/dia. Tabagismo leve (10 cigarros/dia há 20 anos). Varizes diagnosticadas há 20 anos, sem tratamento. Sem DM (glicemia e HbA1c normais).",
    script: [
      {
        trigger: "Queixa principal / ao iniciar o contato",
        speech: "Doutor, eu tô com essa ferida na perna há três meses e não cicatriza de jeito nenhum. Tô usando curativo em casa mas não tá melhorando. E as pernas ficam muito pesadas no fim do dia, incham bastante."
      },
      {
        trigger: "Sobre a úlcera",
        speech: "Começou com uma machucada pequena que eu nem lembro bem como foi. Aí foi crescendo, não fechou mais. Não tá infeccionando, não tem pus, mas o curativo fica molhado de um líquido amarelado claro. Não dói muito, só uma ardência às vezes."
      },
      {
        trigger: "Sobre a dor nas pernas",
        speech: "As pernas ficam pesadas, cansadas, doem um pouco no fim do dia. Melhora quando eu coloco os pés pra cima, quando fico deitada. Piora quando fico muito tempo em pé no serviço."
      },
      {
        trigger: "Sobre as varizes",
        speech: "Tenho varizes há muito tempo, desde que minha filha mais velha nasceu, há uns 20 anos. Fui numa consulta uma vez mas nunca fiz nada porque fiquei com medo e o dinheiro não dava."
      },
      {
        trigger: "Sobre o trabalho",
        speech: "Trabalho de caixa de supermercado, fico em pé o dia todo, umas 8 horas. Há 25 anos nisso. Acho que prejudicou muito as minhas pernas."
      },
      {
        trigger: "Sobre o inchaço",
        speech: "Incha bastante no fim do dia, principalmente aqui no tornozelo e na parte baixa da perna. De manhã quando acordo tá melhor. Uso meia calça de compressão às vezes mas é difícil de colocar por causa do peso."
      },
      {
        trigger: "Sobre doenças como diabetes",
        speech: "Não, não tenho diabetes não. Faço exame de sangue todo ano, o açúcar sempre normal. Tenho pressão alta, tomo losartana."
      },
      {
        trigger: "Sobre tabagismo",
        speech: "Fumo umas 10 cigarros por dia há uns 20 anos. Já tentei parar mas é difícil."
      },
      {
        trigger: "Sobre tratamentos anteriores",
        speech: "Só faço curativo em casa com gaze e pomada que comprei na farmácia. Nunca fui a um especialista de veias antes. Achei que ia cicatrizar sozinha mas não foi."
      },
      {
        trigger: "Pergunta ativa — Vai precisar amputar a perna doutor?",
        speech: "Doutor, isso pode virar uma coisa séria? Vai precisar amputar? Fiquei com medo por causa da ferida que não fecha."
      },
      {
        trigger: "Pergunta ativa — Tem cirurgia pra isso?",
        speech: "As varizes podem ser operadas? E essa ferida, tem como fechar mais rápido com algum tratamento?"
      }
    ],
    hiddenInfo: "Já usou meia de compressão por 2 semanas com melhora parcial da úlcera, mas parou de usar porque achava difícil de calçar pelo peso — dado relevante pois confirma o benefício e a indicação da meiaelástica; só menciona se o candidato perguntar sobre uso prévio de meia elástica. | Histórico de TVP no pós-parto do primeiro filho — trombose venosa profunda como fator contribuinte para a insuficiência venosa; só menciona se o candidato perguntar sobre trombose ou eventos vasculares anteriores.",
    actorBehavior: "Paciente simpática e extrovertida, mas claramente preocupada com a ferida e com o medo de amputação. Colaborativa no exame. Mostra a perna com naturalidade. Fica aliviada quando o médico explica que úlcera venosa não leva à amputação como a diabética. Interessada nas opções de tratamento."
  },
  instC: {
    diagnosis: "Insuficiência venosa crônica CEAP C6s (úlcera venosa ativa, sintomática) — insuficiência da veia safena magna esquerda confirmada pelo duplex scan. Úlcera venosa ativa de 4 x 3 cm na face medial do 1/3 inferior da perna esquerda, sem infecção ativa. Fatores contribuintes: obesidade, tabagismo, trabalho prolongado em ortostase, TVP prévia.",
    differentials: [
      "Úlcera arterial — excluída pelo ITB de 1,0 (normal), pela localização medial (arterial é geralmente lateral ou em ponta dos dedos), pela ausência de dor em repouso e pela presença de pulsos preservados",
      "Úlcera neuropática — excluída pela ausência de DM (glicemia e HbA1c normais) e pela preservação da sensibilidade",
      "Úlcera mista (venosa + arterial) — excluída pelo ITB normal; mas sempre avaliar em tabagistas",
      "Pioderma gangrenoso — diferencial de úlcera de difícil cicatrização; excluído pela ausência de bordas violáceas, dor intensa e doença inflamatória sistêmica subjacente"
    ],
    context: "Paciente feminina, 58 anos, com insuficiência venosa crônica avançada (CEAP C6s), úlcera ativa de 3 meses, obesa, tabagista, com insuficiência da safena magna esquerda confirmada por duplex scan. ITB normal exclui componente arterial. Tratamento multimodal: curativo compressivo + terapia compressiva + cirurgia das varizes após cicatrização.",
    justify: "Úlcera venosa: localização medial, bordas irregulares, fundo com granulação, exsudato seroso, edema associado, piora com ortostase, melhora com elevação — padrão clássico. ITB de 1,0 confirma circulação arterial preservada, permitindo a terapia compressiva (contraindicada se ITB < 0,6). CEAP C6 = úlcera ativa; 's' = sintomático. Duplex scan confirma insuficiência da safena magna — etiologia tratável cirurgicamente (ablação endovenosa ou stripping).",
    expectedAnamnesis: "Caracterizar a úlcera: localização, tamanho, início, evolução, dor, exsudato | Edema: horário (vespertino = venoso), localização, simetria | Varizes: tempo, extensão, tratamentos anteriores | Sensação de peso e alívio com elevação dos MMII | Trabalho em ortostase | Fatores de risco: obesidade, gravidez, tabagismo, TVP prévia | Comorbidades: DM (úlcera neuropática), DAP (úlcera arterial) | Tratamentos prévios: compressão, curativo, cirurgia de varizes",
    expectedPhysical: "Inspeção: varizes, hiperpigmentação, lipodermatosclerose, úlcera | Avaliação da úlcera: localização (medial = venosa), tamanho, fundo, bordas, exsudato, sinais de infecção | Palpação: edema (cacifo), temperatura, pulsos | ITB: obrigatório para diferenciar úlcera venosa de arterial antes de prescrever compressão | Sinal de Trendelenburg: insuficiência da safena magna | Doppler portátil: avaliar pulsos periféricos e refluxo venoso",
    expectedExams: [
      { exam: "ITB (índice tornozelo-braquial)", justify: "Obrigatório para excluir doença arterial periférica antes de prescrever terapia compressiva — compressão em DAP pode causar isquemia", expected: "ITB 1,0 = normal, terapia compressiva liberada" },
      { exam: "Duplex scan (ultrassonografia vascular com Doppler) de MMII", justify: "Avaliar sistema venoso superficial e profundo, localizar refluxo, excluir TVP — orienta o planejamento cirúrgico", expected: "Insuficiência da safena magna com refluxo, sistema profundo pérvio" },
      { exam: "Swab da úlcera para cultura", justify: "Identificar infecção bacteriana ativa — colonização não exige antibiótico sistêmico", expected: "S. aureus — colonização sem infecção ativa, antibiótico não indicado" },
      { exam: "Glicemia e HbA1c", justify: "Excluir DM como causa de úlcera neuropática associada", expected: "Normais — DM excluído" }
    ],
    expectedConduct: "Farmacológica: Diosmina + hesperidina 900/100 mg VO 1x/dia (flebotônico — adjuvante no tratamento da IVC e cicatrização da úlcera venosa — ANVISA aprovado); NÃO indicar antibiótico sistêmico em úlcera venosa colonizada sem infecção ativa (S. aureus = colonização); analgesia se dor: dipirona 500 mg VO a cada 6h | Não farmacológica: Curativo compressivo com bota de Unna (curativo de zinco com bandagem compressiva) OU curativo com espuma de poliuretano + bandagem de compressão de 4 camadas — cicatriza > 70% em 12 semanas; meia elástica de compressão classe II (20–30 mmHg) após cicatrização e definitivamente para prevenir recidiva; elevação dos MMII; redução de peso; cessação do tabagismo; cirurgia de varizes (ablação endovenosa da safena magna por laser ou radiofrequência, ou stripping) após cicatrização da úlcera — previne recidiva | Encaminhamento: Cirurgia Vascular para planejamento da ablação da safena magna após cicatrização | Orientações ao paciente: Explicar que a ferida é venosa (não é das artérias, não vai amputar); explicar o mecanismo; orientar sobre a compressão, o curativo e a cirurgia de varizes como prevenção de recidiva | Seguimento: Retorno em 2 semanas para avaliação da úlcera; meia elástica definitiva após cicatrização; cirurgia de varizes em 3–6 meses",
    expectedCommunication: "Apresentação: Identificar-se e tranquilizar a paciente sobre o medo de amputação | Comunicação do diagnóstico: Explicar que a ferida é causada pelo mau funcionamento das veias da perna, não das artérias, e que isso não leva à amputação; é tratável | Escuta ativa: Perguntar sobre o impacto no trabalho e na qualidade de vida; abordar tabagismo e peso sem julgamento",
    criticalErrors: [
      "Não calcular o ITB antes de prescrever terapia compressiva — compressão em DAP com ITB < 0,6 causa isquemia grave",
      "Prescrever antibiótico sistêmico em úlcera venosa com colonização sem sinais de infecção ativa — uso inapropriado de antibiótico",
      "Não indicar duplex scan para avaliar o sistema venoso e planejar a cirurgia de varizes",
      "Não orientar meia elástica de compressão como medida principal do tratamento conservador",
      "Confundir úlcera venosa com úlcera arterial sem realizar o ITB — condutas opostas"
    ]
  },
  instD: {
    title: "CHECKLIST — INSUFICIÊNCIA VENOSA CRÔNICA E ÚLCERA VENOSA",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Tranquilizou a paciente sobre o medo de amputação, explicando a diferença entre úlcera venosa e arterial", score: 0.5, ref: "CFM Res. 2232/2019; SBACV, 2022" },
          { item: "Abordou tabagismo e obesidade como fatores de risco sem julgamento moral", score: 0.5, ref: "CFM Res. 2232/2019; INCA/MS, 2023" }
        ]
      },
      {
        h: "ANAMNESE E HISTÓRICO CLÍNICO",
        items: [
          { item: "Caracterizou a úlcera: localização medial, exsudato seroso, fundo com granulação, piora com ortostase e melhora com elevação — padrão venoso", score: 1.0, ref: "SBACV — Consenso em IVC, 2022" },
          { item: "Investigou TVP prévia (pós-parto do primeiro filho) como fator etiológico para IVC pós-trombótica", score: 0.5, ref: "SBACV, 2022" },
          { item: "Investigou trabalho prolongado em ortostase (25 anos) como fator de risco primário para IVC", score: 0.5, ref: "SBACV, 2022" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Calculou o ITB (1,0) para excluir doença arterial periférica antes de prescrever terapia compressiva", score: 1.0, ref: "SBACV, 2022; ABI measurement guidelines ⚠️" },
          { item: "Identificou lipodermatosclerose, hiperpigmentação e varizes como achados de IVC avançada (CEAP C4–C6)", score: 0.5, ref: "SBACV, 2022" },
          { item: "Realizou ou indicou sinal de Trendelenburg para avaliar insuficiência da veia safena magna", score: 0.5, ref: "SBACV, 2022; Semiologia Médica — Porto, 8ª ed., 2019" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Classificou corretamente como CEAP C6s (úlcera venosa ativa sintomática)", score: 0.5, ref: "SBACV, 2022; Classificação CEAP ⚠️" },
          { item: "Solicitou duplex scan para confirmar insuficiência venosa e planejar intervenção cirúrgica", score: 1.0, ref: "SBACV, 2022" },
          { item: "Não indicou antibiótico sistêmico para colonização por S. aureus sem infecção ativa — conduta correta", score: 0.5, ref: "SBACV, 2022; CFM — Uso racional de antibióticos" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO",
        items: [
          { item: "Prescreveu curativo compressivo (bota de Unna ou 4 camadas) como principal medida para cicatrização da úlcera venosa", score: 1.0, ref: "SBACV — Consenso em IVC, 2022" },
          { item: "Orientou meia elástica de compressão classe II definitiva após cicatrização para prevenção de recidiva", score: 0.5, ref: "SBACV, 2022" },
          { item: "Indicou ablação endovenosa da safena magna após cicatrização para prevenção de recidiva", score: 0.5, ref: "SBACV, 2022" }
        ]
      }
    ]
  }
},

{
  id: 21,
  title: "Dor na panturrilha ao caminhar que melhora com o repouso",
  sub: "Ambulatório de Cirurgia Vascular — Hospital Geral",
  tema: "Cirurgia",
  topic: "doença arterial periférica",
  level: "moderado",
  cardAccent: "#B03A2E",
  instA: {
    scenario: "Ambulatório de Cirurgia Vascular de hospital geral. Turno matutino. Paciente padronizado (ator).",
    patient: "O.R., 66 anos, masculino, aposentado, tabagista, diabético e hipertenso.",
    complaint: "Dor nas panturrilhas ao caminhar cerca de 200 metros que alivia completamente com o repouso, há 8 meses, progressivamente piorando.",
    tasks: [
      "Realize a anamnese e caracterize a claudicação intermitente quanto à distância, progressão e impacto funcional.",
      "Realize o exame físico vascular dos membros inferiores e identifique os achados de isquemia periférica.",
      "Calcule ou solicite o índice tornozelo-braquial (ITB) e interprete o resultado.",
      "Classifique a gravidade da DAP pela classificação de Fontaine e proponha a conduta adequada.",
      "Identifique os fatores de risco cardiovascular modificáveis e proponha o tratamento clínico otimizado."
    ]
  },
  instB: {
    vitals: {
      PA: "158/96 mmHg",
      FC: "76 bpm",
      FR: "16 irpm",
      Tax: "36,4°C",
      Peso: "82 kg",
      Altura: "1,68 m",
      IMC: "29,0 kg/m²"
    },
    physicalGeneral: "Paciente em bom estado geral, consciente, orientado, eupneico, afebril. Mucosas normocoradas. Sem alterações ao exame geral. Fácies de preocupação.",
    physicalSeg: "MMII: Ausência de pelos no dorso dos pés bilateralmente (rarefação pilosa). Pele fria e seca nos 1/3 inferiores das pernas e pés bilateralmente. Palidez à elevação de 45° e rubor à dependência em MMII esquerdo (sinal de Buerger positivo à esquerda). Sem úlceras ou gangrena. Pulsos: femoral presente bilateralmente; poplíteo diminuído à esquerda e ausente à direita; tibial posterior ausente bilateralmente; pedioso ausente bilateralmente. ITB calculado: 0,52 à esquerda e 0,48 à direita. | CARDIOVASCULAR: Bulhas rítmicas, sopro sistólico audível em região ilíaca esquerda à ausculta abdominal. | ABDOME: Flácido, sem visceromegalias. Sopro sistólico em epigástrio e região ilíaca.",
    labs: [
      { test: "Hemoglobina", val: "13,8 g/dL", ref: "13,5–17,5 g/dL", alt: false },
      { test: "Leucócitos", val: "9.200/mm³", ref: "4.000–11.000/mm³", alt: false },
      { test: "Glicemia de jejum", val: "188 mg/dL", ref: "70–99 mg/dL", alt: true },
      { test: "HbA1c", val: "9,2%", ref: "< 7,0%", alt: true },
      { test: "LDL-colesterol", val: "142 mg/dL", ref: "< 70 mg/dL (alto risco CV)", alt: true },
      { test: "HDL-colesterol", val: "32 mg/dL", ref: "> 40 mg/dL", alt: true },
      { test: "Triglicérides", val: "268 mg/dL", ref: "< 150 mg/dL", alt: true },
      { test: "Creatinina", val: "1,3 mg/dL", ref: "0,7–1,2 mg/dL", alt: true },
      { test: "PCR de alta sensibilidade", val: "4,8 mg/L", ref: "< 1,0 mg/L (baixo risco CV)", alt: true }
    ],
    image: "ANGIOTOMOGRAFIA DE AORTA E MMII: Oclusão da artéria ilíaca externa direita em sua totalidade com circulação colateral desenvolvida. Estenose crítica (> 80%) da artéria ilíaca externa esquerda no terço médio. Artérias femorais comuns e superficiais com calcificações parietais difusas e irregulares, com estenoses segmentares de 40–60% em femoral superficial bilateral. Artérias poplíteas de calibre reduzido. Artérias tibiais e fibulares com calcificações difusas.",
    note: "Caso com ator. O ator deve demonstrar a limitação funcional pela claudicação ao relatar que para ao caminhar pela dor. Entregar sinais vitais ao início. Entregar laboratório quando solicitado. Entregar angioTC quando o candidato solicitar. Atentar se o candidato calcula o ITB corretamente e classifica pela Fontaine.",
    patientProfile: "O.R., 66 anos, masculino. Aposentado (ex-pedreiro). Tabagista ativo (40 anos-maço). Diabetes tipo 2 há 12 anos — uso de metformina 850 mg 2x/dia e glibenclamida 5 mg/dia, sem controle adequado (HbA1c 9,2%). HAS há 15 anos — uso de amlodipina 5 mg/dia e enalapril 10 mg/dia. Dislipidemia sem tratamento. Nega doença coronariana ou AVC prévios, mas refere 'angina estável' leve ao esforço moderado — não investigada.",
    script: [
      {
        trigger: "Queixa principal / ao iniciar o contato",
        speech: "Doutor, faz uns 8 meses que quando eu ando muito, a panturrilha doi. Começo a andar bem, mas depois de uns 200 metros começa uma dor forte na batata da perna. Aí tenho que parar. Quando paro, em uns 2 a 3 minutos a dor passa. Daí começo de novo."
      },
      {
        trigger: "Sobre a progressão",
        speech: "Tá piorando. Quando começou dava pra andar umas 4 quadras antes de doer. Hoje em dia não passo de 2 quadras. Às vezes menos. Tô tendo que parar cada vez mais."
      },
      {
        trigger: "Sobre dor em repouso",
        speech: "Em repouso não doi não. A dor passa quando paro de andar, umas 2 ou 3 minutinhos e some. Mas quando ando de novo, volta."
      },
      {
        trigger: "Sobre os pés",
        speech: "Os pés ficam frios, sabe? E às vezes ficam roxos quando eu fico muito tempo sentado, daí quando levanto ficam vermelhos por um tempo. Achei esquisito isso."
      },
      {
        trigger: "Sobre tabagismo",
        speech: "Fumo faz 40 anos. Umas 20 cigarras por dia. Já tentei parar mas não consegui. Sei que faz mal, mas é muito difícil."
      },
      {
        trigger: "Sobre o diabetes",
        speech: "Tenho diabetes há 12 anos. Tomo metformina e aquela pílula amarela... glibenclamida. Mas confesso que não me cuido muito na alimentação não. Sei que o açúcar tá alto."
      },
      {
        trigger: "Sobre o coração",
        speech: "O cardiologista falou que tenho um probleminha no coração, que fico com dor no peito quando ando muito rápido ou subo ladeira. Mas disse que era leve. Faz 2 anos que não vou lá."
      },
      {
        trigger: "Sobre problemas anteriores nas pernas",
        speech: "Nunca tive problema de veias, nunca tive TVP. Mas já senti dor nas pernas há muito tempo, sabe? Sempre achei que era cansaço do trabalho de pedreiro."
      },
      {
        trigger: "Sobre histórico familiar",
        speech: "Meu pai morreu de infarto com 62 anos. Meu irmão também teve infarto. Na família todo mundo tem pressão alta e diabetes."
      },
      {
        trigger: "Pergunta ativa — Vou precisar amputar doutor?",
        speech: "Doutor, tô com medo de perder a perna. Já vi muita gente diabética que amputou. Isso tá indo pra esse caminho?"
      },
      {
        trigger: "Pergunta ativa — Tem cirurgia pra melhorar?",
        speech: "Tem como operar pra melhorar? Ou só com remédio?"
      }
    ],
    hiddenInfo: "Relata que às vezes sente formigamento nos pés à noite mas atribui ao diabetes — neuropatia diabética associada pode mascarar a dor isquêmica; só menciona se o candidato perguntar sobre sintomas noturnos ou parestesias nos pés. | Etilismo moderado (4–5 doses diárias) que não menciona espontaneamente — fator de risco adicional para DAP e dificuldade no controle do DM; só menciona se o candidato perguntar diretamente sobre uso de álcool de forma aberta.",
    actorBehavior: "Paciente preocupado com a possibilidade de amputação. Relata a claudicação de forma clara. Demonstra dificuldade para aceitar a mudança de hábitos (tabagismo, alimentação). Fica aliviado quando o candidato explica que há tratamento. Tende a minimizar o uso de álcool."
  },
  instC: {
    diagnosis: "Doença arterial periférica bilateral — Fontaine IIb (claudicação limitante, < 200 metros). ITB 0,48–0,52 (isquemia moderada a grave). Estenose crítica ilíaca esquerda e oclusão ilíaca direita confirmadas pela angioTC. Fatores de risco múltiplos não controlados: DM descompensado (HbA1c 9,2%), tabagismo pesado, dislipidemia, HAS. Alto risco cardiovascular.",
    differentials: [
      "Estenose espinhal (claudicação neurogênica) — diferencial de dor em MMII ao caminhar; excluída pelo ITB baixo, pelos pulsos abolidos e pelo sinal de Buerger positivo — claudicação neurogênica melhora com flexão da coluna, não apenas com repouso",
      "Síndrome compartimental crônica — diferencial de dor em panturrilha ao esforço em jovens atletas; excluída pela faixa etária, pelos fatores de risco e pelo ITB baixo",
      "Tromboangeíte obliterante (doença de Buerger) — diferencial em tabagista jovem; menos provável pela idade (66 anos) e pela associação com DM e dislipidemia",
      "Insuficiência venosa crônica — diferencial de dor em MMII; excluída pela ausência de varizes, edema vespertino, úlcera medial e pela presença de pulsos abolidos"
    ],
    context: "Paciente idoso masculino com múltiplos fatores de risco cardiovascular não controlados (tabagismo, DM descompensado, dislipidemia, HAS) e DAP bilateral Fontaine IIb. ITB < 0,5 indica isquemia grave com risco de progressão para isquemia crítica. Tratamento clínico otimizado obrigatório; revascularização indicada se claudicação limitante.",
    justify: "ITB < 0,9 confirma DAP; ITB < 0,5 indica isquemia grave. Fontaine IIb = claudicação intermitente limitante (< 200 metros). Sinal de Buerger positivo (palidez à elevação + rubor à dependência) indica insuficiência arterial grave. Sopro ilíaco à ausculta sugere doença proximal — confirmada pela angioTC. DM + tabagismo + dislipidemia = maior risco de progressão para isquemia crítica e amputação.",
    expectedAnamnesis: "Caracterizar claudicação: distância de início, bilateralidade, evolução, alívio com repouso | Dor em repouso (Fontaine III) — noturna, aliviada com dependência | Úlceras ou gangrena (Fontaine IV) | Tabagismo: carga em anos-maço | DM: controle, complicações, HbA1c | Dislipidemia: colesterol e triglicérides | HAS: controle, medicamentos | Histórico de DAC, AVC, cirurgia vascular | Histórico familiar cardiovascular | Medicamentos: antiagregantes, estatinas",
    expectedPhysical: "Inspeção: rarefação pilosa, pele seca e fria, cianose, úlceras, gangrena | Sinal de Buerger: palidez à elevação de 45° + rubor postural à dependência | Palpação de pulsos: femoral, poplíteo, tibial posterior, pedioso — bilateral e comparativa | Ausculta: sopros em aorta abdominal e ilíacas | ITB: medir com Doppler portátil ou derivar | Temperatura dos pés: comparativa",
    expectedExams: [
      { exam: "ITB (índice tornozelo-braquial)", justify: "Confirmar e quantificar a DAP — exame não invasivo de triagem", expected: "< 0,5 em ambos os lados — isquemia grave" },
      { exam: "Angiotomografia de aorta e MMII", justify: "Anatomia das lesões arteriais para planejamento da revascularização", expected: "Oclusão ilíaca direita e estenose crítica ilíaca esquerda" },
      { exam: "ECG e avaliação cardíaca", justify: "Paciente com sintomas de angina estável — risco cardiovascular global elevado, cardiopatia isquêmica deve ser avaliada", expected: "Avaliar isquemia miocárdica associada" },
      { exam: "Perfil lipídico completo, glicemia e HbA1c", justify: "Avaliar e otimizar os fatores de risco modificáveis", expected: "LDL elevado, HbA1c 9,2% — DM descompensado" },
      { exam: "Doppler vascular de MMII (duplex scan)", justify: "Avaliação hemodinâmica e anatômica das estenoses; complementar à angioTC", expected: "Confirmar oclusões e estenoses identificadas" }
    ],
    expectedConduct: "Farmacológica: Antiagregação: AAS 100 mg/dia VO (RENAME 2022) — reduz eventos cardiovasculares em DAP; estatina de alta intensidade: atorvastatina 40–80 mg/dia VO (meta LDL < 70 mg/dL — alto risco CV; RENAME 2022); otimização do DM: ajuste da medicação hipoglicemiante (considerar inibidor de SGLT-2 ou GLP-1 agonista com benefício cardiovascular comprovado — SBD 2023; atenção à RENAME 2022 para disponibilidade no SUS); cilostazol 100 mg VO 2x/dia — melhora a distância de claudicação (ANVISA aprovado para claudicação — contraindicado em IC); anti-hipertensivo: manter e otimizar (meta < 130/80 mmHg no diabético — SBC/SBD 2023) | Não farmacológica: Cessação do tabagismo — intervenção mais eficaz para reduzir progressão da DAP (encaminhar para grupo de cessação + vareniclina/bupropiona conforme disponibilidade); programa de exercício supervisionado (caminhada até o limiar de dor, 30–60 min, 3x/semana) — aumenta a distância de claudicação em 50–150%; cuidado rigoroso dos pés (DM + DAP = alto risco de úlcera e amputação); controle dietético; revascularização: angioplastia transluminal percutânea (ATP) com stent para lesão ilíaca estenótica/oclusiva — primeira escolha para lesões ilíacas (menor morbidade que cirurgia); cirurgia de bypass aorto-bifemoral para lesões extensas | Encaminhamento: Cirurgia Vascular para planejamento de revascularização; Cardiologia para investigação de DAC (angina estável não investigada); Endocrinologia para otimização do DM | Orientações ao paciente: Explicar que as artérias das pernas estão estreitadas; enfatizar a urgência da cessação do tabagismo; ensinar o cuidado dos pés; informar sinais de isquemia crítica (dor em repouso, úlcera = urgência vascular) | Seguimento: Retorno em 4 semanas para reavaliação clínica e laboratorial; ITB de controle após 3 meses",
    expectedCommunication: "Apresentação: Identificar-se e acolher o medo de amputação | Comunicação do diagnóstico: Explicar que as artérias das pernas estão entupidas pela gordura e pelo cigarro; que a situação é séria mas tratável; que a cessação do tabagismo é a medida mais importante | Escuta ativa: Abordar o tabagismo com técnicas motivacionais; validar a dificuldade de parar; não julgar",
    criticalErrors: [
      "Não calcular ou não solicitar o ITB — exame essencial para confirmar e quantificar a DAP",
      "Não prescrever AAS e estatina de alta intensidade em paciente com DAP e alto risco cardiovascular — omissão de terapia modificadora de doença",
      "Não investigar a angina estável referida — paciente com DAP tem alta prevalência de DAC simultânea",
      "Não abordar a cessação do tabagismo — é a intervenção mais eficaz para reduzir a progressão da DAP",
      "Não orientar sobre sinais de isquemia crítica (dor em repouso, úlcera) que exigem atendimento de urgência"
    ]
  },
  instD: {
    title: "CHECKLIST — DOENÇA ARTERIAL PERIFÉRICA: DIAGNÓSTICO E CONDUTA",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Tranquilizou o paciente sobre o medo de amputação e explicou as opções de tratamento disponíveis", score: 0.5, ref: "CFM Res. 2232/2019; SBACV, 2022" },
          { item: "Abordou o tabagismo com técnica motivacional, sem julgamento, e ofereceu apoio para cessação", score: 0.5, ref: "INCA/MS — Tabagismo, 2023; SBACV, 2022" }
        ]
      },
      {
        h: "ANAMNESE E HISTÓRICO CLÍNICO",
        items: [
          { item: "Caracterizou a claudicação intermitente: distância de início (200m), alívio com repouso, bilateral, progressiva", score: 1.0, ref: "SBACV — Consenso em DAP, 2022" },
          { item: "Investigou dor em repouso e úlceras para excluir Fontaine III e IV (isquemia crítica)", score: 0.5, ref: "SBACV, 2022" },
          { item: "Identificou todos os fatores de risco cardiovascular: tabagismo pesado, DM descompensado, dislipidemia, HAS, histórico familiar", score: 1.0, ref: "SBACV, 2022; SBC — Risco cardiovascular, 2022" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Avaliou pulsos de forma comparativa e bilateral (femoral, poplíteo, tibial posterior, pedioso)", score: 0.5, ref: "SBACV, 2022; Semiologia Médica — Porto, 8ª ed., 2019" },
          { item: "Realizou sinal de Buerger (palidez à elevação + rubor à dependência) e identificou positividade à esquerda", score: 0.5, ref: "SBACV, 2022" },
          { item: "Calculou ou indicou o ITB e interpretou corretamente (< 0,5 = isquemia grave)", score: 1.0, ref: "SBACV, 2022; ABI measurement ⚠️" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Classificou a DAP como Fontaine IIb (claudicação limitante < 200m) e indicou conduta adequada ao estágio", score: 0.5, ref: "SBACV, 2022; Classificação de Fontaine ⚠️" },
          { item: "Solicitou angioTC de aorta e MMII para planejamento de revascularização", score: 0.5, ref: "SBACV, 2022" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO",
        items: [
          { item: "Prescreveu AAS 100 mg/dia e estatina de alta intensidade (atorvastatina 40–80 mg) — terapia antiaterosclerótica obrigatória na DAP", score: 1.0, ref: "SBACV, 2022; SBC, 2022; RENAME 2022" },
          { item: "Prescreveu cilostazol 100 mg 2x/dia para melhora da claudicação — contraindicações verificadas", score: 0.5, ref: "SBACV, 2022; RENAME 2022" },
          { item: "Indicou encaminhamento para Cirurgia Vascular (revascularização) e Cardiologia (angina não investigada)", score: 0.5, ref: "SBACV, 2022; SBC, 2022" }
        ]
      }
    ]
  }
},

{
  id: 22,
  title: "Dor que começou no umbigo e foi para o lado direito da barriga",
  sub: "PS — Pronto-Socorro",
  tema: "Cirurgia",
  topic: "apendicite aguda",
  level: "moderado",
  cardAccent: "#117A65",
  instA: {
    scenario: "Pronto-Socorro de hospital geral. Turno noturno. Paciente padronizado (ator).",
    patient: "L.S., 19 anos, masculino, estudante, sem comorbidades.",
    complaint: "Dor que começou no umbigo ontem à noite, foi para o lado direito da barriga ao longo do dia, com febre, náuseas e vômitos.",
    tasks: [
      "Realize a anamnese completa e caracterize a migração da dor como dado diagnóstico.",
      "Realize o exame físico abdominal pertinente e identifique os sinais clínicos de apendicite.",
      "Aplique um escore clínico validado (Alvarado ou AIR) e calcule o risco de apendicite.",
      "Solicite e interprete os exames complementares e proponha o diagnóstico.",
      "Proponha a conduta cirúrgica e explique o procedimento ao paciente."
    ]
  },
  instB: {
    vitals: {
      PA: "118/74 mmHg",
      FC: "98 bpm",
      FR: "18 irpm",
      Tax: "38,2°C",
      Peso: "72 kg",
      Altura: "1,76 m",
      IMC: "23,2 kg/m²"
    },
    physicalGeneral: "Paciente em regular estado geral, consciente, orientado, com dor abdominal moderada a intensa (EVA 7/10). Mucosas normocoradas, anictérico, levemente sudoreico. Posição antálgica com quadril direito semifletido.",
    physicalSeg: "ABDOME: Plano. Dor à palpação localizada em fossa ilíaca direita (FID), com ponto de McBurney positivo. Sinal de Blumberg positivo em FID (descompressão dolorosa localizada). Sinal de Rovsing positivo (palpação da FIE provoca dor na FID). Sinal do psoas positivo (extensão da coxa direita provoca dor). Ruídos hidroaéreos presentes e normais. Sem rigidez abdominal generalizada. Sem distensão. | TOQUE RETAL: Dor à palpação do fundo de saco de Douglas à direita (Douglas doloroso à direita). | CARDIOVASCULAR: Taquicárdico, bulhas rítmicas.",
    labs: [
      { test: "Hemoglobina", val: "14,8 g/dL", ref: "13,5–17,5 g/dL", alt: false },
      { test: "Leucócitos", val: "16.200/mm³", ref: "4.000–11.000/mm³", alt: true },
      { test: "Neutrófilos", val: "84% (com desvio à esquerda)", ref: "50–70%", alt: true },
      { test: "PCR", val: "88 mg/L", ref: "< 5 mg/L", alt: true },
      { test: "Ureia", val: "28 mg/dL", ref: "15–45 mg/dL", alt: false },
      { test: "Creatinina", val: "0,8 mg/dL", ref: "0,7–1,2 mg/dL", alt: false },
      { test: "Beta-hCG", val: "Não aplicável (masculino)", ref: "—", alt: false }
    ],
    image: "ULTRASSONOGRAFIA DE ABDOME (FID): Apêndice vermiforme visualizado na FID, com diâmetro de 11 mm (> 6 mm = anormal), paredes espessadas, incompressível, sem peristalse. Ausência de fecalito. Pequena quantidade de líquido livre peripendicular. Ausência de perfuração identificada. Achados compatíveis com apendicite aguda sem perfuração. | TOMOGRAFIA DE ABDOME COM CONTRASTE (solicitada pela US inconclusiva inicialmente): Apêndice vermiforme com 11 mm de diâmetro, paredes espessadas com realce pelo contraste, gordura pericecal com densificação inflamatória. Sem pneumoperitônio. Sem abscesso.",
    note: "Caso com ator. O ator deve entrar curvado, com dor em FID, posição antálgica com coxa direita semifletida. Entregar sinais vitais ao início. Entregar laboratório quando solicitado. Entregar USG quando solicitada. Entregar TC somente se o candidato solicitar após a USG. Atentar se o candidato aplica o escore de Alvarado e se indica a apendicectomia de forma adequada.",
    patientProfile: "L.S., 19 anos, masculino. Estudante universitário, solteiro. Sem comorbidades. Sem medicamentos. Nega alergias. Sem cirurgias prévias. Última refeição há 6 horas (jantar leve).",
    script: [
      {
        trigger: "Queixa principal / ao iniciar o contato",
        speech: "Doutor, eu tô com uma dor de barriga que começou ontem à noite. Começou aqui no umbigo, uma dor difusa. Aí fui dormir achando que passava, mas quando acordei hoje a dor tinha ido pra esse lado aqui, direito, e ficou muito mais intensa. Tô com febre e já vomitei duas vezes."
      },
      {
        trigger: "Sobre a migração da dor",
        speech: "É, começou de madrugada, aqui no meio, no umbigo. Achei que era cólica. Só que foi piorando e foi descendo pra esse lado direito, aqui embaixo. Agora tá bem localizada aqui. Qualquer movimento piora."
      },
      {
        trigger: "Sobre a intensidade e o que piora",
        speech: "Tô dando um 7 de 0 a 10. Piora muito quando me movo, quando respiro fundo, quando o carro passa num buraco. Minha mãe acelerou o carro pra ver se eu reagia e eu gritei de dor."
      },
      {
        trigger: "Sobre febre e outros sintomas",
        speech: "Medi em casa, 38 e pouco. Vomitei duas vezes desde hoje de manhã. Tô sem apetite, não consigo comer nada. Não tenho diarreia."
      },
      {
        trigger: "Sobre o hábito intestinal",
        speech: "Não fui ao banheiro desde ontem à tarde. Não soltei gases também desde que a dor piorou. Antes dessa dor estava normal."
      },
      {
        trigger: "Sobre doenças anteriores",
        speech: "Nunca tive nada de saúde. Nunca operei. Nunca fiquei internado. Sou saudável."
      },
      {
        trigger: "Sobre medicamentos e alergias",
        speech: "Não tomo nenhum remédio. Não tenho alergia nenhuma que eu saiba."
      },
      {
        trigger: "Sobre o apetite antes da dor começar",
        speech: "Jantei normal ontem à noite, antes de começar a dor. Comi arroz, feijão e frango. Mas agora não consigo pensar em comida de jeito nenhum."
      },
      {
        trigger: "Sobre tentativas de tratamento em casa",
        speech: "Tomei dipirona em casa, melhorou um pouco mas voltou. Não tomei nenhum outro remédio."
      },
      {
        trigger: "Pergunta ativa — É o apêndice doutor?",
        speech: "Doutor, é o apêndice? Minha mãe disse que parece o apêndice. Eu vou ter que operar?"
      },
      {
        trigger: "Pergunta ativa — A cirurgia é perigosa?",
        speech: "Essa cirurgia é perigosa? Demora muito? Vou ficar muito tempo internado?"
      }
    ],
    hiddenInfo: "A mãe acelerou o carro propositalmente ao passar num solavanco e o paciente gritou de dor — sinal de Dunphy positivo (piora com solavancos) — dado que sugere peritonização; só menciona se o candidato perguntar sobre fatores que pioram a dor durante o deslocamento. | Refere que 2 horas antes de procurar o PS a dor melhorou um pouco — pode indicar perfuração (melhora transitória seguida de piora) ou simplesmente flutuação; só menciona se o candidato perguntar sobre a evolução da dor nas últimas horas.",
    actorBehavior: "Jovem visivelmente com dor, inclinado para o lado direito, andando com dificuldade. Cooperativo mas expressa dor ao exame, especialmente à palpação da FID. Fica aliviado quando o candidato explica o diagnóstico com clareza. Preocupado com a cirurgia mas confiante no médico."
  },
  instC: {
    diagnosis: "Apendicite aguda não perfurada — escore de Alvarado 9/10 (migração da dor + anorexia + náuseas/vômitos + dor em FID + Blumberg em FID + febre + leucocitose + desvio à esquerda = 9 pontos). USG e TC confirmam apendicite sem perfuração. Indicação de apendicectomia laparoscópica de urgência.",
    differentials: [
      "Adenite mesentérica — diferencial em jovem com dor em FID e febre; excluída pela USG e TC com apêndice comprometido e pelo escore de Alvarado alto",
      "Hérnia inguinal encarcerada direita — diferencial de dor em FID; excluída pela USG e TC sem hérnia identificada",
      "Gastroenterite aguda — diferencial de dor abdominal e vômitos; excluída pela localização específica em FID, pela migração da dor e pelos sinais peritoneais",
      "Neoplasia cecal ou ileal (em adultos) — diferencial de obstrução ou massa em FID; menos provável na faixa etária e pelo quadro agudo típico; excluída pela TC"
    ],
    context: "Paciente masculino jovem, 19 anos, com apresentação típica de apendicite aguda: migração periumbilical para FID, anorexia, febre, leucocitose com desvio à esquerda e sinais peritoneais em FID. Escore de Alvarado 9 — alta probabilidade de apendicite. USG e TC confirmam. Apendicectomia laparoscópica de urgência.",
    justify: "Escore de Alvarado: migração da dor (1) + anorexia (1) + náusea/vômito (1) + dor em FID (2) + Blumberg em FID (1) + febre (1) + leucocitose (2) = 9 pontos. Escore ≥ 7: apendicite provável, indicação cirúrgica sem necessidade de TC adicional. A TC foi usada para confirmação pois a USG foi inicialmente inconclusiva. Apendicite não perfurada — cirurgia de urgência (<24h) com taxa de complicação baixa.",
    expectedAnamnesis: "Migração da dor: periumbilical → FID (dado mais específico de apendicite) | Anorexia: perda de apetite | Náuseas e vômitos: frequência, conteúdo | Febre: temperatura | Hábito intestinal: parada de gases e fezes | Última refeição (preparo para cirurgia) | Comorbidades, medicamentos, alergias | Cirurgias abdominais prévias | Episódios anteriores semelhantes (apendicite recorrente?)",
    expectedPhysical: "Posição antálgica: coxa direita semifletida | Inspeção: abdome plano sem distensão | Palpação: ponto de McBurney (2/3 da linha espinhoumbilical), Blumberg em FID, Rovsing (FIE → dor em FID), psoas (extensão da coxa direita), obturador (rotação interna do quadril direito) | Toque retal: Douglas doloroso à direita | Temperatura: febre",
    expectedExams: [
      { exam: "Escore de Alvarado", justify: "Escore clínico validado para triagem de apendicite — ≥ 7 indica alta probabilidade", expected: "9/10 — alta probabilidade de apendicite" },
      { exam: "Hemograma com diferencial", justify: "Leucocitose com desvio à esquerda é dado do escore de Alvarado e confirma processo inflamatório", expected: "Leucocitose 16.200, neutrófilos 84% com desvio" },
      { exam: "Ultrassonografia de abdome (FID)", justify: "Primeiro exame de imagem — sem radiação, identifica apêndice comprometido e diagnósticos diferenciais ginecológicos", expected: "Apêndice > 6 mm, incompressível, com líquido peripendicular" },
      { exam: "TC de abdome com contraste", justify: "Indicada quando USG inconclusiva — maior sensibilidade e especificidade que USG", expected: "Apêndice espessado com densificação pericecal — sem perfuração" }
    ],
    expectedConduct: "Farmacológica: Antibioticoterapia profilática/perioperatória: cefazolina 2g IV + metronidazol 500 mg IV 30–60 min antes da cirurgia (CCIH/MS; RENAME 2022); analgesia: dipirona 1g IV a cada 6h (NÃO contraindicada na suspeita de apendicite — a analgesia não mascara o quadro e é direito do paciente) | Não farmacológica: Jejum imediato; hidratação venosa: SF 0,9% 1.000 mL IV; apendicectomia laparoscópica de urgência — padrão ouro: menor taxa de infecção de sítio cirúrgico, menor dor pós-operatória, retorno mais rápido às atividades; via aberta (McBurney) se não disponível videolaparoscopia | Encaminhamento: Bloco cirúrgico de urgência | Orientações ao paciente: Explicar que o apêndice está inflamado e precisa ser retirado por cirurgia; que é uma cirurgia segura com boa recuperação; que o jejum é necessário para a anestesia | Seguimento: Alta em 24–48h em apendicite não perfurada; retorno em 7 dias para avaliação da ferida",
    expectedCommunication: "Apresentação: Identificar-se e tranquilizar o jovem | Comunicação do diagnóstico: Explicar que o apêndice está inflamado e que a cirurgia é necessária e segura; comparar o apêndice a um 'saco sem saída no intestino que entupiu e inflamou' | Escuta ativa: Responder às dúvidas sobre a cirurgia; incluir a mãe na conversa se o paciente desejar",
    criticalErrors: [
      "Contraindicar analgesia em suspeita de apendicite — conduta desatualizada e antiética; analgesia é direito do paciente e não mascara o diagnóstico cirúrgico",
      "Atrasar a cirurgia para 'observação' em escore de Alvarado ≥ 7 sem justificativa — aumenta o risco de perfuração",
      "Não aplicar escore de Alvarado — perda de ferramenta validada de triagem clínica",
      "Não realizar o toque retal — Douglas doloroso à direita é sinal clínico relevante de apendicite",
      "Não solicitar USG antes de TC — USG deve ser o primeiro exame de imagem (sem radiação) em jovem"
    ]
  },
  instD: {
    title: "CHECKLIST — APENDICITE AGUDA: DIAGNÓSTICO E CONDUTA CIRÚRGICA",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Explicou o diagnóstico e a cirurgia de forma clara e acessível ao jovem paciente", score: 0.5, ref: "CFM Res. 2232/2019" },
          { item: "Não negou analgesia ao paciente com dor — forneceu alívio adequado antes da cirurgia", score: 0.5, ref: "CFM — Direito à analgesia; SBCD, 2022" }
        ]
      },
      {
        h: "ANAMNESE E HISTÓRICO CLÍNICO",
        items: [
          { item: "Identificou e valorizou a migração da dor periumbilical para a FID como dado mais específico de apendicite", score: 1.0, ref: "CBC — Consenso Brasileiro em Apendicite, 2022" },
          { item: "Investigou anorexia, náuseas, vômitos e febre como critérios do escore de Alvarado", score: 0.5, ref: "CBC, 2022; Alvarado A, 1986 ⚠️" },
          { item: "Registrou a última refeição para preparo da anestesia", score: 0.5, ref: "CFM — Anestesia e jejum; SBCA, 2022" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Pesquisou e identificou os sinais clínicos: ponto de McBurney, Blumberg em FID, Rovsing e sinal do psoas", score: 1.0, ref: "CBC, 2022; Semiologia Médica — Porto, 8ª ed., 2019" },
          { item: "Realizou toque retal e identificou Douglas doloroso à direita", score: 0.5, ref: "CBC, 2022" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Aplicou e calculou o escore de Alvarado (9/10) e interpretou como alta probabilidade de apendicite", score: 1.0, ref: "CBC, 2022; Alvarado A, 1986 ⚠️" },
          { item: "Solicitou USG de abdome como primeiro exame de imagem antes da TC", score: 0.5, ref: "CBC, 2022" },
          { item: "Solicitou TC de abdome somente após USG inconclusiva — sequência correta de investigação", score: 0.5, ref: "CBC, 2022" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO",
        items: [
          { item: "Indicou apendicectomia laparoscópica de urgência com antibioticoterapia perioperatória adequada", score: 1.0, ref: "CBC, 2022; CCIH/MS; RENAME 2022" },
          { item: "Prescreveu jejum e hidratação venosa no pré-operatório", score: 0.5, ref: "CBC, 2022; SBCA, 2022" }
        ]
      }
    ]
  }
},

{
  id: 23,
  title: "Idosa com dor abdominal difusa, febre alta e confusão há dois dias",
  sub: "PS — Pronto-Socorro",
  tema: "Cirurgia",
  topic: "apendicite aguda perfurada",
  level: "moderado",
  cardAccent: "#117A65",
  instA: {
    scenario: "Pronto-Socorro de hospital geral. Turno diurno. Paciente padronizado (ator/familiar).",
    patient: "I.F., 78 anos, feminino, aposentada, diabética e hipertensa, trazida pelo filho.",
    complaint: "Dor abdominal difusa, febre alta e confusão mental há dois dias. Filho relata que a mãe 'não estava bem' desde 3 dias atrás.",
    tasks: [
      "Realize a anamnese com o familiar (filho) e obtenha os dados necessários para a hipótese diagnóstica.",
      "Realize o exame físico abdominal completo e identifique os sinais de peritonite.",
      "Solicite e interprete os exames complementares necessários para elucidação diagnóstica.",
      "Formule o diagnóstico de apendicite perfurada e diferencie de outras causas de abdome agudo na idosa.",
      "Proponha a conduta cirúrgica e informe o familiar sobre a gravidade e o risco cirúrgico."
    ]
  },
  instB: {
    vitals: {
      PA: "94/58 mmHg",
      FC: "118 bpm",
      FR: "22 irpm",
      Tax: "39,2°C",
      Peso: "58 kg",
      Altura: "1,55 m",
      IMC: "24,1 kg/m²"
    },
    physicalGeneral: "Paciente em mau estado geral, confusa, desorientada (desorientação no tempo e espaço — Glasgow 13: OA3 V4 M6). Mucosas desidratadas 2+/4+, ictérica leve, febril. Prostrada.",
    physicalSeg: "ABDOME: Distendido, com rigidez muscular difusa (abdome em tábua). Dor à palpação em todos os quadrantes, mais intensa em FID e fossa ilíaca direita. Sinal de Blumberg difuso positivo (peritonite generalizada). Ruídos hidroaéreos ausentes (ileo paralítico). Sem visceromegalias palpáveis pela rigidez. | CARDIOVASCULAR: Taquicárdica, bulhas hipofonéticas, sem sopros. Hipotensão: PA 94/58. | NEUROLÓGICO: Glasgow 13, confusa, responde perguntas simples com dificuldade. | TOQUE RETAL: Douglas doloroso difusamente. Sem massas palpáveis.",
    labs: [
      { test: "Hemoglobina", val: "10,4 g/dL", ref: "12,0–16,0 g/dL", alt: true },
      { test: "Leucócitos", val: "24.800/mm³", ref: "4.000–11.000/mm³", alt: true },
      { test: "Neutrófilos", val: "91% (com desvio à esquerda e metamielócitos)", ref: "50–70%", alt: true },
      { test: "PCR", val: "320 mg/L", ref: "< 5 mg/L", alt: true },
      { test: "Lactato sérico", val: "4,8 mmol/L", ref: "0,5–2,0 mmol/L", alt: true },
      { test: "Glicemia", val: "248 mg/dL", ref: "70–99 mg/dL", alt: true },
      { test: "Creatinina", val: "2,2 mg/dL", ref: "0,7–1,2 mg/dL", alt: true },
      { test: "Ureia", val: "96 mg/dL", ref: "15–45 mg/dL", alt: true },
      { test: "Bilirrubina total", val: "2,1 mg/dL", ref: "< 1,2 mg/dL", alt: true },
      { test: "Coagulograma (INR)", val: "1,6", ref: "0,8–1,2", alt: true }
    ],
    image: "TOMOGRAFIA DE ABDOME E PELVE COM CONTRASTE: Apêndice vermiforme com paredes espessadas, diâmetro de 14 mm, com fecalito central calcificado e descontinuidade da parede (perfuração). Abscesso periapendicular de 4,5 x 3,2 cm na FID com ar no interior. Pneumoperitônio discreto (bolhas de ar livres subdiafragmáticas e peritoneo). Peritonite difusa com líquido livre em todos os quadrantes. Densificação da gordura mesentérica generalizada.",
    note: "Caso com ator e familiar (filho). A idosa deve estar confusa, prostrada, com dor difusa. O filho é quem fornece a maior parte da história. Entregar sinais vitais ao início. Entregar laboratório quando solicitado. Entregar TC quando o candidato a solicitar. Atentar se o candidato identifica a gravidade (sepse + peritonite) e se comunica adequadamente com o familiar sobre o risco cirúrgico elevado na idosa.",
    patientProfile: "I.F., 78 anos, feminino. Aposentada, viúva, mora com o filho. Diabética tipo 2 há 20 anos — insulina NPH 20 UI 2x/dia. HAS há 25 anos — uso de enalapril 10 mg/dia e hidroclorotiazida 25 mg/dia. Hipotireoidismo em uso de levotiroxina 75 mcg/dia. Sem anticoagulantes. Alergia a penicilina (referida pelo filho — reação não documentada).",
    script: [
      {
        trigger: "Queixa principal (filho fala)",
        speech: "Doutor, minha mãe tá mal há uns 3 dias. Ela começou com uma dorzinha de barriga que foi piorando. Ontem ela ficou com febre alta, 39, 40 graus. Hoje de manhã ela tava confusa, não sabia nem onde estava. Eu fiquei muito preocupado e trouxe ela aqui."
      },
      {
        trigger: "Sobre o início da dor (filho fala)",
        speech: "Ela falou que doeu primeiro aqui no meio, no umbigo, há uns 3 dias. Mas ela não me falou logo. Só quando ficou muito ruim que me chamou. Aí eu vi que a dor tinha espalhado pra barriga toda."
      },
      {
        trigger: "Sobre febre (filho fala)",
        speech: "A febre alta começou ontem. Medimos em casa, 39 e pouco. E ela ficou com essa confusão só hoje, de manhã. Antes ela tava consciente mas sem força, sem apetite."
      },
      {
        trigger: "Sobre vômitos e hábito intestinal (filho fala)",
        speech: "Ela vomitou ontem duas vezes. Hoje não comeu nada. Não foi ao banheiro desde ontem cedo. Não soltou gases também."
      },
      {
        trigger: "Sobre as doenças e medicamentos (filho fala)",
        speech: "Ela tem diabetes, pressão alta e problema na tireoide. Toma insulina, enalapril, hidroclorotiazida e levotiroxina. E ela tem alergia a penicilina, me lembro que uma vez ela teve reação mas não sei exatamente como foi."
      },
      {
        trigger: "Paciente responde diretamente quando questionada sobre dor",
        speech: "Dói tudo... tudo tá doendo... (paciente geme ao toque no abdome)"
      },
      {
        trigger: "Sobre cirurgias anteriores (filho fala)",
        speech: "Ela nunca operou não. A única internação foi por conta do diabetes mesmo."
      },
      {
        trigger: "Sobre o estado cognitivo basal (filho fala)",
        speech: "Não, ela era lúcida, normal. Essa confusão de hoje é coisa nova. Nunca ficou assim."
      },
      {
        trigger: "Pergunta ativa do filho — Ela vai ficar bem doutor?",
        speech: "Doutor, ela vai ficar bem? É grave? Ela vai precisar operar com 78 anos? Ela vai aguentar a cirurgia?"
      },
      {
        trigger: "Pergunta ativa do filho — Por que ela demorou a procurar o médico?",
        speech: "Eu precisaria ter trazido antes? Ela falou que não queria incomodar, que ia passar sozinha..."
      }
    ],
    hiddenInfo: "A paciente ficou 3 dias em casa sem procurar atendimento porque 'não queria incomodar o filho' — atraso no diagnóstico que contribuiu para a perfuração; confirmado pelo filho se o candidato perguntar sobre por que demorou a procurar atendimento. | O filho relata que ela ficou levando dipirona em casa nas primeiras 48h sem melhora — uso de antipirético não tratou o processo cirúrgico; só menciona se perguntado sobre medicamentos usados em casa.",
    actorBehavior: "Idosa confusa, prostrada, geme à palpação do abdome. Responde apenas a perguntas simples com 'dói tudo'. O filho é colaborativo, ansioso e demonstra culpa por não ter trazido a mãe antes. O candidato deve conduzir a anamnese principalmente com o filho."
  },
  instC: {
    diagnosis: "Apendicite aguda perfurada com peritonite generalizada e abscesso periapendicular — sepse abdominal. Critérios de SOFA alterados: confusão (SNC), hipotensão, lactato > 2, creatinina elevada. Laparotomia exploradora de urgência.",
    differentials: [
      "Diverticulite perfurada do cólon sigmoide — diferencial de peritonite generalizada na idosa; excluída pela TC com foco apendicular e abscesso periapendicular na FID",
      "Colecistite aguda perfurada — diferencial de abdome agudo na idosa com febre; excluída pela TC sem alterações na vesícula biliar",
      "Isquemia mesentérica — diferencial de abdome agudo com leucocitose e lactato elevado; excluída pela TC sem oclusão arterial ou pneumatose intestinal de distribuição vascular",
      "Abscesso periapendicular sem perfuração franca — diagnóstico alternativo incluído pela TC; a perfuração com pneumoperitônio confirm a laparotomia sobre a drenagem percutânea isolada"
    ],
    context: "Idosa de 78 anos com apendicite perfurada e peritonite generalizada, apresentação atípica e tardia (3 dias). Sepse estabelecida: hipotensão, febre 39,2°C, lactato 4,8, confusão mental, leucocitose grave. Alto risco cirúrgico pela idade e comorbidades. Laparotomia de urgência é a única conduta definitiva.",
    justify: "Na idosa, a apendicite tem apresentação atípica: dor menos intensa, localização menos definida, ausência de migração clássica, diagnóstico tardio. A imunossupressão do DM atenua os sinais inflamatórios. Perfuração ocorre em > 50% dos idosos versus < 20% nos jovens. Pneumoperitônio + abscesso + peritonite generalizada na TC confirmam perfuração — laparotomia urgente.",
    expectedAnamnesis: "Colher com o familiar — início e evolução da dor (3 dias, atípica) | Febre: quando iniciou e intensidade | Confusão mental: início, caráter novo | Vômitos, parada de gases | Comorbidades: DM, HAS, hipotireoidismo | Medicamentos: insulina, anti-hipertensivos | Alergias: penicilina | Cirurgias prévias | Por que demorou a procurar atendimento",
    expectedPhysical: "Neurológico: Glasgow, orientação (sepse com acometimento do SNC) | Sinais vitais: febre alta, hipotensão, taquicardia — critérios de sepse (qSOFA) | Abdome: rigidez em tábua (peritonite generalizada), Blumberg difuso, ausência de ruídos hidroaéreos | Toque retal: Douglas doloroso | Hidratação: mucosas secas, avaliação de TEC",
    expectedExams: [
      { exam: "TC de abdome e pelve com contraste", justify: "Exame de escolha em idosa com abdome agudo — identifica causa, localiza perfuração e abscesso", expected: "Apendicite perfurada com abscesso e pneumoperitônio" },
      { exam: "Hemograma, PCR, lactato, creatinina, coagulograma", justify: "Estadiamento da sepse e avaliação de disfunção orgânica (SOFA)", expected: "Leucocitose grave, lactato elevado, IRA, coagulopatia" },
      { exam: "Glicemia e gasometria", justify: "Avaliar controle glicêmico na diabética séptica e acidose metabólica", expected: "Hiperglicemia 248, possível acidose metabólica" },
      { exam: "ECG e troponina", justify: "Avaliação cardíaca pré-operatória na idosa com hipotensão e taquicardia", expected: "Avaliar isquemia miocárdica de demanda associada à sepse" }
    ],
    expectedConduct: "Farmacológica: Ressuscitação hemodinâmica: Ringer Lactato 30 mL/kg IV em 1h (protocolo Surviving Sepsis Campaign ⚠️); noradrenalina 0,1–0,5 mcg/kg/min se hipotensão refratária após 1.000 mL; antibioticoterapia empírica de amplo espectro — alergia a penicilina: usar ciprofloxacino 400 mg IV a cada 12h + metronidazol 500 mg IV a cada 8h (RENAME 2022); controle glicêmico: insulina regular IV; suspender metformina (não faz uso) — atenção à insulina NPH; corrigir coagulopatia se INR > 1,5 antes da cirurgia | Não farmacológica: Laparotomia exploradora de urgência: apendicectomia + lavagem e drenagem do peritônio; UTI pós-operatória; cateter vesical; SNG; oxigenoterapia; monitorização contínua | Encaminhamento: Bloco cirúrgico urgente; UTI pós-operatória; comunicar Anestesiologia sobre o alto risco (ASA IV) | Orientações ao familiar: Comunicar a gravidade extrema, o alto risco cirúrgico na idosa com sepse, e a necessidade de cirurgia imediata; não omitir o risco de mortalidade | Seguimento: UTI pós-operatória; monitorar disfunção orgânica; Endocrinologia para controle do DM pós-operatório",
    expectedCommunication: "Apresentação: Identificar-se ao filho e à paciente (mesmo confusa) | Comunicação ao familiar: Usar protocolo de comunicação de más notícias; explicar que o apêndice perfurou e que há uma infecção generalizada grave; que a cirurgia é necessária mesmo com o alto risco; obter consentimento informado do filho | Escuta ativa: Acolher a culpa do filho; explicar que a demora não foi culpa dele e que o importante é o tratamento agora",
    criticalErrors: [
      "Não reconhecer os critérios de sepse (hipotensão + lactato elevado + confusão) e não iniciar ressuscitação hemodinâmica imediatamente",
      "Atrasar a cirurgia em peritonite generalizada por pneumoperitônio — indicação absoluta de laparotomia de urgência",
      "Prescrever antibiótico da classe das penicilinas (ampicilina-sulbactam) em paciente com alergia referida sem investigação adequada",
      "Não comunicar adequadamente ao familiar a gravidade e o risco de mortalidade — obrigação ética e legal",
      "Não controlar a glicemia no perioperatório da diabética séptica — hiperglicemia aumenta morbimortalidade cirúrgica"
    ]
  },
  instD: {
    title: "CHECKLIST — APENDICITE AGUDA PERFURADA COM PERITONITE: IDOSA DE ALTO RISCO",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Colheu a anamnese predominantemente com o familiar (filho) dado o rebaixamento do nível de consciência da idosa", score: 0.5, ref: "CFM Res. 2232/2019; Código de Ética Médica" },
          { item: "Comunicou ao filho a gravidade do quadro, o risco de mortalidade e a necessidade de cirurgia urgente de forma clara e empática", score: 0.5, ref: "CFM Res. 2232/2019; CREMESP — Comunicação em urgência, 2020" }
        ]
      },
      {
        h: "ANAMNESE E HISTÓRICO CLÍNICO",
        items: [
          { item: "Identificou a apresentação atípica em idosa (dor difusa, evolução arrastada de 3 dias, sem migração clássica)", score: 1.0, ref: "CBC — Consenso Brasileiro em Apendicite, 2022" },
          { item: "Investigou alergias medicamentosas (penicilina) antes de prescrever antibiótico — adequou o esquema", score: 1.0, ref: "CFM; RENAME 2022" },
          { item: "Identificou todas as comorbidades (DM, HAS, hipotireoidismo) e medicamentos relevantes para o perioperatório", score: 0.5, ref: "CBC, 2022; CFM — Avaliação pré-operatória" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Identificou peritonite generalizada: abdome em tábua, Blumberg difuso, ausência de ruídos hidroaéreos", score: 1.0, ref: "CBC, 2022; Semiologia Médica — Porto, 8ª ed., 2019" },
          { item: "Reconheceu os critérios de sepse: hipotensão + taquicardia + febre 39,2°C + confusão mental (qSOFA ≥ 2)", score: 0.5, ref: "SSC — Surviving Sepsis Campaign ⚠️; SBCM, 2022" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Solicitou TC de abdome para confirmar perfuração, abscesso e extensão da peritonite antes da cirurgia", score: 0.5, ref: "CBC, 2022" },
          { item: "Valorizou o lactato elevado (4,8 mmol/L) como marcador de gravidade da sepse e iniciou ressuscitação imediata", score: 0.5, ref: "SSC ⚠️; CBC, 2022" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO",
        items: [
          { item: "Iniciou ressuscitação hemodinâmica com Ringer Lactato 30 mL/kg em 1h — bundle de sepse", score: 1.0, ref: "SSC ⚠️; SBCM, 2022; RENAME 2022" },
          { item: "Prescreveu antibioticoterapia sem penicilina (ciprofloxacino + metronidazol) respeitando a alergia referida", score: 0.5, ref: "CBC, 2022; RENAME 2022" },
          { item: "Indicou laparotomia exploradora de urgência com lavagem peritoneal para peritonite generalizada confirmada", score: 1.0, ref: "CBC, 2022; SSC ⚠️" }
        ]
      }
    ]
  }
},

{
  id: 24,
  title: "Paciente obesa solicitando informações sobre cirurgia para emagrecer",
  sub: "Ambulatório de Cirurgia Bariátrica — Hospital Geral",
  tema: "Cirurgia",
  topic: "cirurgia bariátrica",
  level: "moderado",
  cardAccent: "#1D6A96",
  instA: {
    scenario: "Ambulatório de Cirurgia Bariátrica de hospital geral. Turno matutino. Paciente padronizado (ator).",
    patient: "P.O., 38 anos, feminino, professora, com obesidade grau III e comorbidades associadas.",
    complaint: "Paciente com IMC de 41 kg/m² busca avaliação para cirurgia bariátrica após falha do tratamento clínico por 2 anos.",
    tasks: [
      "Realize a anamnese para avaliação da indicação cirúrgica, investigando critérios do CFM e do Ministério da Saúde.",
      "Interprete os dados clínicos e laboratoriais e avalie as comorbidades associadas à obesidade.",
      "Determine se a paciente preenche os critérios de indicação e contraindica ou indica a cirurgia com justificativa.",
      "Explique as opções técnicas disponíveis com seus benefícios e riscos em linguagem acessível.",
      "Oriente sobre o processo de avaliação multidisciplinar obrigatório e os cuidados pós-operatórios."
    ]
  },
  instB: {
    vitals: {
      PA: "148/92 mmHg",
      FC: "82 bpm",
      FR: "16 irpm",
      Tax: "36,5°C",
      Peso: "108 kg",
      Altura: "1,62 m",
      IMC: "41,2 kg/m²"
    },
    physicalGeneral: "Paciente em bom estado geral, consciente, orientada, eupneica em repouso. Mucosas normocoradas, anictérica. Obesa centralmente, com distribuição adiposa centrípeta. Sem edema.",
    physicalSeg: "ABDOME: Obeso, globoso, flácido. Ruídos hidroaéreos normais. Sem massas, sem visceromegalias. Estrias violáceas no abdome inferior e flancos. | CARDIOVASCULAR: Bulhas rítmicas normofonéticas, sem sopros. PA 148/92 mmHg. | PESCOÇO: Acantose nigricans na nuca. | MMII: Sem edemas. | TÓRAX: MV presente bilateralmente, sem ruídos adventícios.",
    labs: [
      { test: "Glicemia de jejum", val: "128 mg/dL", ref: "70–99 mg/dL", alt: true },
      { test: "HbA1c", val: "7,4%", ref: "< 5,7%", alt: true },
      { test: "Insulina de jejum", val: "24 µUI/mL", ref: "2–25 µUI/mL", alt: false },
      { test: "HOMA-IR", val: "7,6", ref: "< 2,5", alt: true },
      { test: "LDL-colesterol", val: "138 mg/dL", ref: "< 100 mg/dL", alt: true },
      { test: "HDL-colesterol", val: "38 mg/dL", ref: "> 50 mg/dL (mulher)", alt: true },
      { test: "Triglicérides", val: "242 mg/dL", ref: "< 150 mg/dL", alt: true },
      { test: "TSH", val: "3,2 mUI/L", ref: "0,4–4,0 mUI/L", alt: false },
      { test: "PCR de alta sensibilidade", val: "6,8 mg/L", ref: "< 1,0 mg/L", alt: true },
      { test: "TGO (AST)", val: "52 U/L", ref: "< 40 U/L", alt: true },
      { test: "TGP (ALT)", val: "68 U/L", ref: "< 41 U/L", alt: true },
      { test: "USG de abdome (laudo)", val: "Esteatose hepática grau II. Vesícula biliar sem cálculos. Demais órgãos sem alterações.", ref: "—", alt: true },
      { test: "Polissonografia (laudo)", val: "IAH = 22 eventos/hora — SAHOS moderada confirmada.", ref: "IAH < 5 = normal", alt: true }
    ],
    image: null,
    note: "Caso com ator. A paciente deve ser representada como motivada, bem informada mas com dúvidas sobre os critérios e opções cirúrgicas. Entregar sinais vitais ao início. Entregar laudos laboratoriais e de polissonografia quando solicitados. Atentar se o candidato verifica todos os critérios do CFM/MS para indicação da cirurgia bariátrica e se orienta sobre a equipe multidisciplinar obrigatória.",
    patientProfile: "P.O., 38 anos, feminino. Professora do ensino médio, casada, uma filha. Obesidade desde a adolescência. DM tipo 2 há 2 anos — metformina 850 mg 2x/dia e liraglutida 1,2 mg SC 1x/dia. HAS há 3 anos — enalapril 10 mg/dia. SAHOS moderada — CPAP noturno em uso regular. Esteatose hepática grau II. Tentativas não cirúrgicas: acompanhamento nutricional por 2 anos + atividade física por 18 meses — perda total de 5 kg sem manutenção.",
    script: [
      {
        trigger: "Queixa principal / ao iniciar o contato",
        speech: "Doutora, estou aqui para saber se posso fazer a cirurgia bariátrica. Tenho tentado emagrecer há anos mas não consigo. Fiz dieta com nutricionista, fiz academia, tomei remédio... emagreci 5 kg mas voltei tudo. Preciso de uma solução definitiva."
      },
      {
        trigger: "Sobre o histórico de obesidade",
        speech: "Sou gorda desde criança, desde os 12 anos mais ou menos. Sempre fui a mais gordinha da turma. Já tentei de tudo: dieta da proteína, jejum intermitente, remédio de farmácia... nada funcionou de verdade. O meu máximo foi emagrecer uns 8 kg uma vez, mas logo voltou tudo."
      },
      {
        trigger: "Sobre as tentativas de tratamento clínico",
        speech: "Fiquei 2 anos com nutricionista e 18 meses fazendo academia 3 vezes por semana. Perdi 5 kg no total nesse período. O médico disse que não foi resultado suficiente para o tamanho do meu problema. Aí ele me encaminhou aqui."
      },
      {
        trigger: "Sobre as doenças associadas",
        speech: "Tenho diabetes há 2 anos, tomo metformina e aquela injeção semanal. Tenho pressão alta, tomo enalapril. E descobriram que eu paro de respirar durante o sono, uso o aparelho CPAP toda noite. O médico falou que tenho gordura no fígado também."
      },
      {
        trigger: "Sobre sintomas atuais",
        speech: "Me canso com facilidade. Subir uma escada já é difícil. Tenho dor no joelho por causa do peso. Fico com sono durante o dia mesmo usando o CPAP. E minha pressão tá difícil de controlar."
      },
      {
        trigger: "Sobre transtornos alimentares ou saúde mental",
        speech: "Não tenho bulimia nem anorexia, nunca tive. Mas confesso que como muito nos momentos de estresse. Compulsão alimentar, o psicólogo disse que é assim. Estou em acompanhamento psicológico há 4 meses."
      },
      {
        trigger: "Sobre uso de álcool e drogas",
        speech: "Não bebo álcool, nunca bebi. Não uso drogas. Não fumo."
      },
      {
        trigger: "Sobre o desejo de engravidar",
        speech: "Minha filha tem 8 anos. Não planejo engravidar novamente. O médico me disse que preciso esperar pelo menos 18 meses após a cirurgia antes de tentar caso eu mude de ideia."
      },
      {
        trigger: "Sobre as expectativas com a cirurgia",
        speech: "Quero emagrecer, mas quero mesmo é melhorar a saúde. Tô com medo de ter um derrame ou infarto por causa da pressão e do diabetes. Quero poder brincar com minha filha sem me cansar."
      },
      {
        trigger: "Pergunta ativa — Eu preencho os critérios doutor?",
        speech: "Eu tenho direito a fazer essa cirurgia? Meu IMC é suficiente? Tenho diabetes e pressão alta, isso ajuda na indicação?"
      },
      {
        trigger: "Pergunta ativa — Qual cirurgia é melhor pra mim?",
        speech: "Qual é a melhor cirurgia pra mim, doutora? O bypass ou a manga gástrica? Qual tem menos risco? Qual emagrece mais?"
      }
    ],
    hiddenInfo: "Relata episódios de compulsão alimentar — come grandes quantidades de forma incontrolável especialmente à noite, 2 a 3 vezes por semana; só detalha a frequência e o padrão se o candidato perguntar especificamente sobre compulsão ou transtorno alimentar compulsivo. | Relata medo de não ser capaz de seguir as orientações pós-operatórias a longo prazo — insegurança real que precisa ser acolhida e endereçada pela equipe multidisciplinar; só verbaliza se o candidato perguntar sobre medos em relação à cirurgia.",
    actorBehavior: "Paciente motivada, articulada, bem informada. Pesquisou sobre a cirurgia na internet. Faz perguntas diretas e pertinentes. Fica emocionada ao falar do impacto da obesidade na qualidade de vida. Demonstra ansiedade em relação ao procedimento mas também esperança. Cooperativa e aberta ao diálogo."
  },
  instC: {
    diagnosis: "Indicação formal de cirurgia bariátrica: IMC 41,2 kg/m² (obesidade grau III) + DM tipo 2 + HAS + SAHOS moderada + esteatose hepática grau II + falha do tratamento clínico por ≥ 2 anos. Critérios do CFM (Resolução CFM 2.131/2015) e do MS (Portaria MS 424/2013) preenchidos. Técnica sugerida: bypass gástrico em Y de Roux (BGYR) pelo DM tipo 2 — maior taxa de remissão.",
    differentials: [
      "Hipotireoidismo como causa secundária de obesidade — excluído pelo TSH normal (3,2 mUI/L) — hipotireoidismo raramente causa obesidade grau III isoladamente",
      "Síndrome de Cushing — diferencial em obesidade centrípeta com estrias violáceas e HAS; deve ser investigada com cortisol urinário de 24h ou teste de supressão com dexametasona se suspeita clínica forte — menos provável neste caso pelo quadro clínico global",
      "Contraindicações à cirurgia (a verificar): transtorno alimentar ativo não tratado, doença psiquiátrica grave não controlada, uso de substâncias psicoativas, gravidez — nenhuma identificada neste caso",
      "Indicação de tratamento apenas com liraglutida em dose máxima (3 mg/dia) — alternativa medicamentosa não cirúrgica — menos eficaz para IMC > 40 com comorbidades múltiplas"
    ],
    context: "Paciente feminina, 38 anos, com obesidade grau III (IMC 41,2), DM tipo 2 parcialmente controlado, HAS, SAHOS moderada e esteatose hepática. Falha documentada do tratamento clínico por 2 anos. Preenche todos os critérios do CFM e do MS para cirurgia bariátrica. Compulsão alimentar noturna — necessita avaliação psiquiátrica/psicológica pré-operatória rigorosa.",
    justify: "Critérios CFM Res. 2.131/2015: IMC ≥ 40 (com ou sem comorbidades) OU IMC 35–40 com comorbidades graves (DM tipo 2, HAS, SAHOS, esteatose hepática) + falha do tratamento clínico por ≥ 2 anos + idade entre 16 e 65 anos + ausência de contraindicações absolutas. Bypass gástrico em Y de Roux tem maior taxa de remissão do DM tipo 2 (70–80%) em relação ao sleeve (60%) — preferencial quando DM é comorbidade relevante.",
    expectedAnamnesis: "Verificar critérios de indicação: IMC atual, evolução histórica do peso | Tentativas de tratamento clínico: duração, tipo, resultados | Comorbidades: DM (tempo, tratamento, controle), HAS, SAHOS, dislipidemia, osteoartrose, esteatose | Saúde mental: transtorno alimentar, depressão, ansiedade, psicose — contraindica se ativo e descontrolado | Uso de álcool e drogas (contraindicação relativa/absoluta) | Tabagismo | Gravidez: planejamento reprodutivo | Suporte familiar e social | Expectativas realistas com a cirurgia",
    expectedPhysical: "IMC: calcular e classificar (≥ 40 = grau III) | PA: verificar controle da HAS | Distribuição da gordura: centrípeta (risco metabólico) | Acantose nigricans: resistência à insulina | Pesquisar hérnias abdominais (frequentes em obesos) | Varizes e insuficiência venosa | Articulações: artropatia por sobrepeso | Ausculta: sopros cardíacos",
    expectedExams: [
      { exam: "Glicemia, HbA1c, HOMA-IR", justify: "Avaliar controle do DM e resistência à insulina — comorbidade relevante para escolha da técnica", expected: "DM tipo 2 descompensado (HbA1c 7,4%)" },
      { exam: "Perfil lipídico completo", justify: "Avaliar dislipidemia como comorbidade e risco cardiovascular", expected: "LDL elevado, HDL baixo, triglicérides elevados" },
      { exam: "TSH", justify: "Excluir hipotireoidismo como causa secundária de obesidade", expected: "Normal — hipotireoidismo excluído" },
      { exam: "Enzimas hepáticas e USG de abdome", justify: "Avaliar esteatose hepática — comorbidade e fator de risco cirúrgico (fígado volumoso dificulta a laparoscopia)", expected: "Esteatose grau II, vesícula sem cálculos" },
      { exam: "Polissonografia", justify: "Diagnóstico e classificação da SAHOS — impacta o risco anestésico", expected: "SAHOS moderada (IAH 22) — exige CPAP perioperatório" },
      { exam: "Avaliação psiquiátrica e psicológica", justify: "Obrigatória pelo CFM — identificar contraindicações psiquiátricas, avaliar compulsão alimentar e expectativas", expected: "Compulsão alimentar noturna — necessita tratamento pré-operatório" },
      { exam: "Endoscopia digestiva alta", justify: "Obrigatória no pré-operatório de bariátrica — avaliar H. pylori, gastrite, úlcera, DRGE", expected: "Avaliar necessidade de tratamento pré-operatório" }
    ],
    expectedConduct: "Farmacológica: Manter metformina e liraglutida até a cirurgia; otimizar controle do DM (meta HbA1c < 7% no pré-operatório); otimizar HAS (meta PA < 130/80); profilaxia de TVP pós-operatória: enoxaparina 40 mg SC 1x/dia a partir de 6h após a cirurgia por 10 dias (RENAME 2022); suplementação vitamínica obrigatória no pós-operatório: polivitamínico + ferro elementar + vitamina B12 + cálcio + vitamina D (SBCBM 2023) | Não farmacológica: Avaliação multidisciplinar obrigatória pré-operatória: cirurgião bariátrico + nutricionista + psicólogo/psiquiatra + cardiologista + pneumologista (SAHOS) + endocrinologista; técnica cirúrgica indicada: bypass gástrico em Y de Roux (BGYR) laparoscópico — pelo DM tipo 2 (maior remissão) e pelo IMC 41; alternativa: sleeve gástrico (gastrectomia vertical) — menor risco técnico, sem déficit absortivo, mas menor remissão do DM; dieta pré-operatória: hipocalórica por 4–8 semanas para reduzir volume hepático; manutenção do CPAP no perioperatório | Encaminhamento: Equipe multidisciplinar de bariátrica; endoscopia digestiva alta pré-operatória; avaliação cardiológica | Orientações ao paciente: Explicar os critérios que ela preenche; apresentar as opções cirúrgicas com benefícios e riscos; esclarecer que a cirurgia não é o fim do tratamento mas o início; orientar sobre a suplementação vitalícia; contraindicar gravidez por 18 meses; orientar sobre expectativas realistas de perda de peso | Seguimento: Acompanhamento multidisciplinar pós-operatório em 1, 3, 6 e 12 meses; suplementação vitalícia; colonoscopia em 5 anos",
    expectedCommunication: "Apresentação: Identificar-se e criar vínculo — paciente carrega anos de frustração e estigma | Comunicação do diagnóstico: Confirmar a indicação cirúrgica de forma positiva; apresentar as opções com clareza; validar a trajetória difícil da paciente sem julgamento | Escuta ativa: Perguntar sobre medos e expectativas; abordar a compulsão alimentar com delicadeza; reforçar que a cirurgia é uma ferramenta, não uma cura mágica",
    criticalErrors: [
      "Não verificar todos os critérios do CFM (Res. 2.131/2015) antes de indicar ou contraindicar a cirurgia",
      "Não encaminhar para avaliação psicológica/psiquiátrica obrigatória — transtorno alimentar compulsivo não tratado compromete o resultado pós-operatório",
      "Não orientar sobre a suplementação vitamínica vitalícia obrigatória após a cirurgia",
      "Não contraindicar gravidez por pelo menos 18 meses após a cirurgia bariátrica",
      "Indicar sleeve gástrico sem mencionar que o bypass tem maior taxa de remissão do DM tipo 2 — omissão que prejudica a tomada de decisão informada"
    ]
  },
  instD: {
    title: "CHECKLIST — AVALIAÇÃO PRÉ-OPERATÓRIA DE CIRURGIA BARIÁTRICA",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Abordou a trajetória de obesidade da paciente sem julgamento, reconhecendo o esforço prévio com o tratamento clínico", score: 0.5, ref: "CFM Res. 2232/2019; ABESO — Obesidade e estigma, 2022" },
          { item: "Apresentou as opções cirúrgicas com linguagem acessível, benefícios, riscos e diferenças entre bypass e sleeve", score: 0.5, ref: "SBCBM — Consenso Brasileiro em Cirurgia Bariátrica, 2023; CFM Res. 2.131/2015" }
        ]
      },
      {
        h: "ANAMNESE E HISTÓRICO CLÍNICO",
        items: [
          { item: "Verificou os critérios de indicação do CFM: IMC ≥ 40 + comorbidades + falha do tratamento clínico ≥ 2 anos", score: 1.0, ref: "CFM Res. 2.131/2015; MS Portaria 424/2013" },
          { item: "Investigou transtornos alimentares (compulsão alimentar noturna identificada) e saúde mental como possíveis contraindica-ções", score: 1.0, ref: "SBCBM, 2023; CFM Res. 2.131/2015" },
          { item: "Investigou planejamento reprodutivo e orientou contraindicação de gravidez por 18 meses pós-operatório", score: 0.5, ref: "SBCBM, 2023; FEBRASGO, 2022" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Calculou e confirmou o IMC (41,2 kg/m²) e identificou distribuição centrípeta com acantose nigricans", score: 0.5, ref: "ABESO, 2022; SBCBM, 2023" },
          { item: "Aferiu e valorizou a PA elevada (148/92) como comorbidade relevante no contexto pré-bariátrico", score: 0.5, ref: "SBCBM, 2023; SBC, 2022" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Indicou avaliação multidisciplinar obrigatória pré-operatória: cirurgião + nutricionista + psicólogo + cardiologista + pneumologista", score: 1.0, ref: "CFM Res. 2.131/2015; SBCBM, 2023" },
          { item: "Indicou endoscopia digestiva alta obrigatória no pré-operatório de cirurgia bariátrica", score: 0.5, ref: "SBCBM, 2023" },
          { item: "Justificou a preferência pelo bypass gástrico pela maior taxa de remissão do DM tipo 2 em relação ao sleeve", score: 0.5, ref: "SBCBM, 2023; SBD, 2023" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO",
        items: [
          { item: "Orientou sobre a suplementação vitamínica vitalícia obrigatória após a cirurgia bariátrica", score: 1.0, ref: "SBCBM, 2023; RENAME 2022" },
          { item: "Orientou sobre a necessidade de manutenção do CPAP no perioperatório pela SAHOS moderada", score: 0.5, ref: "SBCBM, 2023; SBPT, 2022" }
        ]
      }
    ]
  }
},

{
  id: 25,
  title: "Suor excessivo nas mãos que atrapalha o trabalho e a vida social",
  sub: "Ambulatório de Cirurgia Torácica — Hospital Geral",
  tema: "Cirurgia",
  topic: "hiperidrose primária",
  level: "moderado",
  cardAccent: "#2E86C1",
  instA: {
    scenario: "Ambulatório de Cirurgia Torácica de hospital geral. Turno matutino. Paciente padronizado (ator).",
    patient: "T.N., 26 anos, masculino, analista de TI, sem comorbidades.",
    complaint: "Suor excessivo nas mãos desde a adolescência, que piora com nervosismo e calor, causando grande impacto social e profissional.",
    tasks: [
      "Realize a anamnese e caracterize a hiperidrose quanto à localização, intensidade e impacto funcional.",
      "Identifique se a hiperidrose é primária ou secundária e os critérios diagnósticos.",
      "Solicite os exames complementares pertinentes para excluir causas secundárias.",
      "Apresente as opções de tratamento clínico e cirúrgico em ordem de evidência.",
      "Informe o paciente sobre a simpaticotomia torácica videoscópica, seus benefícios e a compensação sudorípara."
    ]
  },
  instB: {
    vitals: {
      PA: "118/74 mmHg",
      FC: "74 bpm",
      FR: "16 irpm",
      Tax: "36,3°C",
      Peso: "74 kg",
      Altura: "1,78 m",
      IMC: "23,4 kg/m²"
    },
    physicalGeneral: "Paciente em bom estado geral, consciente, orientado, eupneico, afebril. Mucosas normocoradas. Mãos visivelmente úmidas ao aperto de mão. Sem alterações ao exame geral.",
    physicalSeg: "MÃOS: Palmas úmidas, com gotejamento visível de suor. Sem sinais de infecção fúngica ou bacteriana secundária. Sem eritema ou maceração entre os dedos. | AXILAS: Discreta umidade. Sem odor fétido intenso. | PÉS: Planta dos pés levemente úmida à inspeção. | TÓRAX: Expansibilidade normal e simétrica. MV presente bilateralmente. | CARDIOVASCULAR: Bulhas rítmicas, sem sopros. | TIREÓIDE: Não palpável, sem nódulos. | NEUROLÓGICO: Sem tremores, sem sinais de hiperatividade autonômica.",
    labs: [
      { test: "TSH", val: "1,8 mUI/L", ref: "0,4–4,0 mUI/L", alt: false },
      { test: "T4 livre", val: "1,1 ng/dL", ref: "0,8–1,8 ng/dL", alt: false },
      { test: "Glicemia de jejum", val: "88 mg/dL", ref: "70–99 mg/dL", alt: false },
      { test: "Hemograma completo", val: "Dentro dos limites normais", ref: "—", alt: false },
      { test: "Catecolaminas urinárias de 24h", val: "Dentro dos limites normais", ref: "—", alt: false }
    ],
    image: null,
    note: "Caso com ator. O ator deve demonstrar mãos visivelmente úmidas ao cumprimentar (simulado com glicerina no dorso das mãos). Demonstrar constrangimento ao falar sobre o problema. Entregar sinais vitais ao início. Entregar laboratório quando solicitado. Atentar se o candidato aborda a compensação sudorípara como principal efeito adverso da simpaticotomia.",
    patientProfile: "T.N., 26 anos, masculino. Analista de TI, solteiro. Hiperidrose palmar desde os 14 anos. Sem comorbidades. Sem medicamentos. Sem tabagismo, sem etilismo. Histórico familiar: mãe com hiperidrose palmar leve — provável componente genético. Escala HDSS (Hyperhidrosis Disease Severity Scale): grau 4 — o suor é intolerável e interfere sempre nas atividades diárias.",
    script: [
      {
        trigger: "Queixa principal / ao iniciar o contato",
        speech: "Doutor, desde os 14 anos eu sudo muito das mãos. É absurdo. Quando vou cumprimentar alguém, a mão fica completamente molhada. Fica constrangedor demais. No trabalho é péssimo, o teclado fica molhado, os documentos ficam úmidos. Já afetou relacionamentos também. Preciso muito de uma solução."
      },
      {
        trigger: "Sobre quando e como piora",
        speech: "Piora muito quando fico nervoso ou ansioso, em situações sociais, em reuniões de trabalho. Mas também suda muito mesmo quando estou em repouso, sem nervosismo. Calor piora também. Não tem dia que não acontece."
      },
      {
        trigger: "Sobre outros locais do corpo",
        speech: "Nas mãos é o pior. Mas também suo um pouco nas axilas e nas plantas dos pés. A face não. O corpo em geral não transpiração excessiva. É mais focado nas mãos mesmo."
      },
      {
        trigger: "Sobre o impacto na vida",
        speech: "É terrível. Já recusei trabalhos que exigiam apresentação presencial por causa disso. Evito apertar a mão de pessoas. Em relacionamentos é muito difícil, a pessoa pega minha mão e fica toda molhada. Eu me isolo por causa disso."
      },
      {
        trigger: "Sobre suor noturno",
        speech: "À noite não. Quando estou dormindo não suo das mãos. Isso é engraçado, só acontece quando estou acordado."
      },
      {
        trigger: "Sobre histórico familiar",
        speech: "Minha mãe também tem um pouco isso, mas não tão grave como eu. Ela sua um pouco das mãos mas não tanto. Parece que é hereditário."
      },
      {
        trigger: "Sobre tratamentos anteriores",
        speech: "Já tentei cloreto de alumínio em gel que comprei na farmácia, mas irritou muito a pele e não resolveu. Nunca fui a um especialista antes. Pesquisei sobre iontoforese e sobre a cirurgia na internet."
      },
      {
        trigger: "Sobre doenças ou medicamentos",
        speech: "Não tenho nada de saúde, nunca tive. Não tomo remédio nenhum. Nunca operei."
      },
      {
        trigger: "Sobre febre, perda de peso ou suores noturnos",
        speech: "Não, nunca tive febre sem motivo. Não perdi peso. Suor noturno também não. Só esse das mãos de dia."
      },
      {
        trigger: "Pergunta ativa — A cirurgia resolve de vez?",
        speech: "A cirurgia resolve de vez, doutor? Não tem chance de voltar? Tem algum risco de ficar pior em outro lugar?"
      },
      {
        trigger: "Pergunta ativa — O que é essa compensação que vi na internet?",
        speech: "Vi na internet que depois da cirurgia você passa a suar em outro lugar do corpo. Isso é verdade? É pior do que a hiperidrose das mãos?"
      }
    ],
    hiddenInfo: "Já tentou iontoforese caseira com aparelhos comprados pela internet por 3 meses mas abandonou pela dificuldade de manutenção e resultado parcial — relevante para sequência do tratamento; só menciona se o candidato perguntar sobre todas as tentativas de tratamento realizadas. | Refere que a hiperidrose melhorou muito durante uma cirurgia que fez no dente com anestesia local — nunca entendeu por quê; esse dado pode abrir discussão sobre o mecanismo simpático da hiperidrose; só menciona se o candidato perguntar sobre situações que melhoram o suor.",
    actorBehavior: "Paciente jovem, visivelmente constrangido ao falar do assunto. Demonstra alívio ao perceber que o médico trata com naturalidade. Muito motivado para a cirurgia. Faz perguntas inteligentes sobre a compensação sudorípara. Demonstra sofrimento real pelo impacto social."
  },
  instC: {
    diagnosis: "Hiperidrose primária palmoplantar e axilar — HDSS grau 4 (intolerável, interfere sempre nas atividades). Sem causa secundária identificada (TSH normal, glicemia normal, catecolaminas normais, sem febre, sem perda de peso). Indicação de tratamento cirúrgico: simpaticotomia torácica videoscópica (STV) no nível R3–R4 para hiperidrose palmar.",
    differentials: [
      "Hiperidrose secundária ao hipertireoidismo — excluída pelo TSH e T4 livre normais",
      "Hiperidrose secundária ao feocromocitoma — excluída pelas catecolaminas urinárias normais e pela ausência de HAS, cefaleia episódica e taquicardia paroxística",
      "Hiperidrose secundária a linfoma (sudorese noturna de B) — excluída pela ausência de suor noturno, febre e perda de peso e pelo hemograma normal",
      "Ansiedade generalizada com sudorese — diferencial; a hiperidrose primária ocorre mesmo em repouso e sem ansiedade — este dado diferencia clinicamente"
    ],
    context: "Paciente masculino jovem, 26 anos, com hiperidrose primária palmoplantar HDSS grau 4, impacto severo na qualidade de vida, componente familiar sugestivo. Causas secundárias excluídas laboratorialmente. Falha de tratamento clínico (cloreto de alumínio). Candidato a simpaticotomia torácica videoscópica.",
    justify: "Hiperidrose primária: início na adolescência, bilateral e simétrica, foco palmoplantar, ausência de suor noturno (suor noturno = causa secundária), histórico familiar, sem causa orgânica identificável. HDSS ≥ 3 = indicação de tratamento ativo. A simpaticotomia torácica videoscópica (STV) no nível R3 tem taxa de sucesso > 95% para hiperidrose palmar com compensação sudorípara em 30–80% dos casos.",
    expectedAnamnesis: "Localização: palmas, axilas, pés, face | Bilateralidade e simetria | Início: adolescência (hiperidrose primária) | Piora com emoções mas presente em repouso | Ausência de suor noturno (diferencia de causa secundária) | Histórico familiar | Impacto funcional: HDSS | Tentativas de tratamento prévias | Investigar causas secundárias: febre recorrente (linfoma), perda de peso, palpitações e HAS (feocromocitoma), tremor e taquicardia (hipertireoidismo) | Uso de medicamentos que causam hiperidrose (opioides, antidepressivos, insulina)",
    expectedPhysical: "Mãos: umidade visível e gotejamento | Axilas: umidade e odor | Pés: umidade plantar | Excluir hipertireoidismo: tremor, taquicardia, exoftalmia, bócio | Excluir feocromocitoma: HAS, taquicardia | Excluir linfoma: linfonodomegalia | Neurológico: sem neuropatia autonômica",
    expectedExams: [
      { exam: "TSH e T4 livre", justify: "Excluir hipertireoidismo como causa secundária de hiperidrose", expected: "Normais — hipertireoidismo excluído" },
      { exam: "Glicemia de jejum e hemograma", justify: "Excluir diabetes (neuropatia autonômica) e linfoma (sudorese B)", expected: "Normais" },
      { exam: "Catecolaminas urinárias de 24h ou metanefrinas urinárias", justify: "Excluir feocromocitoma — causa de hiperidrose paroxística com HAS", expected: "Normais — feocromocitoma excluído" }
    ],
    expectedConduct: "Farmacológica: Cloreto de alumínio hexahidratado 20% — primeira linha para formas leves a moderadas (HDSS 1–2); já falhou neste caso | Não farmacológica — linha progressiva: (1) Iontoforese: corrente elétrica de baixa intensidade aplicada às mãos — eficaz em 80% dos casos de hiperidrose palmar leve a moderada, necessita manutenção semanal; (2) Toxina botulínica tipo A (onabotulinumtoxinA): injeções intradérmicas nas palmas — altamente eficaz (90%), duração de 4–6 meses, procedimento doloroso, custo elevado, precisa repetição; (3) Simpaticotomia torácica videoscópica (STV) — tratamento definitivo, taxa de cura > 95% para hiperidrose palmar; nível de ablação: R3 para palmar (preserva R2 para reduzir compensação facial); efeito colateral principal: compensação sudorípara — sudorese aumentada no tronco, abdome e coxas em 30–80% dos casos; em graus graves de compensação pode ser pior que a hiperidrose original; informar antes da cirurgia | Encaminhamento: Cirurgia Torácica para STV por videolaparoscopia | Orientações ao paciente: Explicar a progressão do tratamento; explicar em detalhes a compensação sudorípara antes da cirurgia — é essencial que o paciente compreenda e aceite o risco; explicar que não há reversão da simpaticotomia | Seguimento: Avaliação pós-operatória em 30 dias; reavaliação da compensação",
    expectedCommunication: "Apresentação: Identificar-se e normalizar a queixa sem minimizá-la | Comunicação do diagnóstico: Explicar que é uma condição chamada hiperidrose primária, causada por hiperatividade dos nervos simpáticos que controlam o suor; que não é ansiedade nem falta de higiene | Escuta ativa: Validar o impacto severo na qualidade de vida; abordar a compensação sudorípara com clareza e sem minimizar — é o efeito adverso mais relevante da cirurgia",
    criticalErrors: [
      "Não investigar causas secundárias de hiperidrose antes de indicar tratamento cirúrgico",
      "Não informar o paciente sobre a compensação sudorípara antes da simpaticotomia — é o efeito adverso mais relevante e pode ser mais incapacitante que a hiperidrose original",
      "Indicar simpaticotomia como primeira linha sem tentativa prévia de tratamento clínico (iontoforese ou toxina botulínica)",
      "Não aplicar a escala HDSS para quantificar a gravidade e documentar a indicação cirúrgica",
      "Não esclarecer que a simpaticotomia é irreversível — consentimento informado inadequado"
    ]
  },
  instD: {
    title: "CHECKLIST — HIPERIDROSE PRIMÁRIA: DIAGNÓSTICO E INDICAÇÃO CIRÚRGICA",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Normalizou a queixa de hiperidrose sem minimizar o impacto severo na qualidade de vida do paciente", score: 0.5, ref: "CFM Res. 2232/2019; SBCT — Consenso em Hiperidrose, 2022" },
          { item: "Explicou a compensação sudorípara de forma clara e completa antes de qualquer indicação cirúrgica", score: 1.0, ref: "SBCT, 2022; CFM — Consentimento informado" }
        ]
      },
      {
        h: "ANAMNESE E HISTÓRICO CLÍNICO",
        items: [
          { item: "Caracterizou a hiperidrose como primária: início na adolescência, bilateral, sem suor noturno, com histórico familiar", score: 1.0, ref: "SBCT — Consenso em Hiperidrose, 2022" },
          { item: "Aplicou ou avaliou o HDSS (grau 4 — intolerável, sempre interfere nas atividades) para quantificar a gravidade", score: 0.5, ref: "SBCT, 2022; Hornberger et al. ⚠️" },
          { item: "Investigou sintomas de causas secundárias: febre, perda de peso, palpitações, tremor, HAS (feocromocitoma, linfoma, hipertireoidismo)", score: 0.5, ref: "SBCT, 2022" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Identificou mãos visivelmente úmidas como achado objetivo de hiperidrose palmar", score: 0.5, ref: "SBCT, 2022" },
          { item: "Excluiu sinais de hipertireoidismo (tremor, taquicardia, bócio) e feocromocitoma (HAS, taquicardia) ao exame", score: 0.5, ref: "SBE, 2022; SBCT, 2022" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Solicitou TSH, glicemia e catecolaminas urinárias para excluir causas secundárias antes de indicar cirurgia", score: 0.5, ref: "SBCT, 2022" },
          { item: "Apresentou a progressão correta do tratamento: cloreto de alumínio → iontoforese → toxina botulínica → simpaticotomia", score: 1.0, ref: "SBCT, 2022" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO",
        items: [
          { item: "Indicou simpaticotomia torácica videoscópica no nível R3 para hiperidrose palmar, justificando a escolha do nível de ablação", score: 1.0, ref: "SBCT — Consenso em Hiperidrose, 2022" },
          { item: "Esclareceu que a simpaticotomia é irreversível e que o paciente deve aceitar o risco de compensação sudorípara antes de operar", score: 0.5, ref: "SBCT, 2022; CFM — Consentimento informado" }
        ]
      }
    ]
  }
},

{
  id: 26,
  title: "Dor forte no lado direito da barriga com febre após refeição gordurosa",
  sub: "PS — Pronto-Socorro",
  tema: "Cirurgia",
  topic: "colecistite aguda",
  level: "moderado",
  cardAccent: "#D4AC0D",
  instA: {
    scenario: "Pronto-Socorro de hospital geral. Turno noturno. Paciente padronizado (ator).",
    patient: "A.R., 48 anos, feminino, contadora, obesa, com histórico de cólica biliar prévia.",
    complaint: "Dor intensa em hipocôndrio direito irradiando para o ombro direito, febre e vômitos há 10 horas, após jantar com churrasco.",
    tasks: [
      "Realize a anamnese dirigida ao quadro de dor em hipocôndrio direito e identifique o diagnóstico provável.",
      "Realize o exame físico abdominal pertinente e identifique os sinais clínicos de colecistite aguda.",
      "Solicite e interprete os exames complementares para confirmação diagnóstica e avaliação de complicações.",
      "Proponha a conduta terapêutica inicial e o momento adequado para a colecistectomia.",
      "Identifique os critérios de gravidade da colecistite (Tokyo Guidelines) e diferencie de colangite aguda."
    ]
  },
  instB: {
    vitals: {
      PA: "128/82 mmHg",
      FC: "104 bpm",
      FR: "18 irpm",
      Tax: "38,6°C",
      Peso: "86 kg",
      Altura: "1,60 m",
      IMC: "33,6 kg/m²"
    },
    physicalGeneral: "Paciente em regular estado geral, consciente, orientada, com dor moderada a intensa (EVA 7/10). Mucosas normocoradas, anictérica, diaforética. Agitada pela dor.",
    physicalSeg: "ABDOME: Flácido com exceção de discreta defesa em hipocôndrio direito. Dor intensa à palpação profunda em hipocôndrio direito com irradiação para região epigástrica. Sinal de Murphy positivo (interrupção da inspiração à palpação do ponto colecístico). Sem Blumberg difuso. Ruídos hidroaéreos presentes e normais. Sem icterícia ou colúria. | CARDIOVASCULAR: Taquicárdica, bulhas rítmicas, sem sopros. | TÓRAX: MV presente bilateralmente.",
    labs: [
      { test: "Hemoglobina", val: "13,4 g/dL", ref: "12,0–16,0 g/dL", alt: false },
      { test: "Leucócitos", val: "16.800/mm³", ref: "4.000–11.000/mm³", alt: true },
      { test: "Neutrófilos", val: "85% (desvio à esquerda)", ref: "50–70%", alt: true },
      { test: "PCR", val: "142 mg/L", ref: "< 5 mg/L", alt: true },
      { test: "Bilirrubina total", val: "1,0 mg/dL", ref: "< 1,2 mg/dL", alt: false },
      { test: "Bilirrubina direta", val: "0,3 mg/dL", ref: "< 0,4 mg/dL", alt: false },
      { test: "TGO (AST)", val: "48 U/L", ref: "< 40 U/L", alt: true },
      { test: "TGP (ALT)", val: "62 U/L", ref: "< 41 U/L", alt: true },
      { test: "GGT", val: "88 U/L", ref: "< 50 U/L", alt: true },
      { test: "Fosfatase alcalina", val: "110 U/L", ref: "44–147 U/L", alt: false },
      { test: "Amilase", val: "68 U/L", ref: "< 100 U/L", alt: false },
      { test: "Creatinina", val: "0,9 mg/dL", ref: "0,7–1,2 mg/dL", alt: false }
    ],
    image: "ULTRASSONOGRAFIA DE ABDOME TOTAL: Vesícula biliar distendida (10 x 4,5 cm), com paredes espessadas (6 mm — normal < 3 mm), edema perivesicular e líquido ao redor da vesícula. Múltiplos cálculos no interior, o maior medindo 1,8 cm, com sombra acústica posterior. Sinal ultrassonográfico de Murphy positivo (dor máxima com a sonda sobre a vesícula). Ducto biliar comum (colédoco) com calibre de 5 mm — dentro dos limites normais. Fígado com textura homogênea. Pâncreas sem alterações.",
    note: "Caso com ator. A atriz deve demonstrar dor ao movimento e especialmente ao inspirar fundo quando o candidato palpa o hipocôndrio direito (Murphy positivo). Entregar sinais vitais ao início. Entregar laboratório quando solicitado. Entregar USG quando solicitada. Atentar se o candidato aplica os critérios de Tokyo para classificar a gravidade da colecistite e indica o momento correto da colecistectomia.",
    patientProfile: "A.R., 48 anos, feminino. Contadora, casada, dois filhos. Obesidade grau I (IMC 33,6). Cólicas biliares episódicas há 2 anos — nunca tratadas. Sem medicamentos contínuos. Nega alergias. Diagnóstico de colelitíase há 1 ano em USG de rotina — sem seguimento.",
    script: [
      {
        trigger: "Queixa principal / ao iniciar o contato",
        speech: "Doutora, tô com uma dor horrível aqui do lado direito da barriga, logo embaixo das costelas. Começou depois do jantar de ontem, comemos churrasco e depois veio essa dor que não para. Estou com febre e vomitei umas três vezes."
      },
      {
        trigger: "Sobre o início e a evolução da dor",
        speech: "Começou umas 2 horas depois que jantei. No começo era uma cólica, ia e voltava. Mas depois foi ficando uma dor constante, que não alivia mais. Vai pro ombro direito também, essa irradiação."
      },
      {
        trigger: "Sobre episódios anteriores semelhantes",
        speech: "Sim, tive umas cólicas parecidas antes, mais fracas. Principalmente depois de comer gordura. Mas passava depois de algumas horas. Já me disseram que tenho pedra na vesícula há um ano, mas não fiz nada."
      },
      {
        trigger: "Sobre febre e vômitos",
        speech: "Tô com febre sim, medi em casa antes de vir, estava 38 e pouco. Vomitei três vezes, um líquido amarelado. Tô sem apetite."
      },
      {
        trigger: "Sobre icterícia ou urina escura",
        speech: "Não, minha pele não ficou amarela não. A urina tá normal também, não escureceu. Os olhos também não amarelaram."
      },
      {
        trigger: "Sobre doenças e medicamentos",
        speech: "Sou saudável, não tomo remédio nenhum. Só tenho esse excesso de peso mesmo. Não tenho diabetes nem pressão alta."
      },
      {
        trigger: "Sobre alergias",
        speech: "Não tenho alergia a nada que eu saiba."
      },
      {
        trigger: "Sobre o hábito intestinal",
        speech: "Normal. Fui ao banheiro hoje cedo, normal. Não tenho diarreia, não tenho prisão de ventre."
      },
      {
        trigger: "Sobre o que alivia a dor",
        speech: "Nada alivia muito. Já tomei dipirona em casa, melhorou um pouco mas voltou. Ficar deitada e não se mover ajuda um pouco. Respirar fundo piora muito."
      },
      {
        trigger: "Pergunta ativa — É a vesícula doutor?",
        speech: "É a vesícula, não é? Eu sabia que ia dar problema um dia. Vou ter que operar agora? Posso fazer a cirurgia?"
      },
      {
        trigger: "Pergunta ativa — Tenho medo de cirurgia, tem outro jeito?",
        speech: "Tem como tratar só com remédio e não operar? Tenho muito medo de cirurgia."
      }
    ],
    hiddenInfo: "Já teve um episódio mais intenso há 3 meses que passou espontaneamente após 6 horas — provavelmente colecistite aguda autolimitada; só menciona se o candidato perguntar sobre episódios anteriores mais intensos ou prolongados de cólica. | Refere que o marido também tem pedra na vesícula — dado epidemiológico sem impacto clínico imediato; menciona se a conversa fluir naturalmente.",
    actorBehavior: "Paciente em dor moderada, inquieta, incapaz de encontrar posição confortável. Demonstra Murphy positivo ao ser examinada. Teme a cirurgia mas está aberta à orientação. Fica aliviada quando o médico explica o diagnóstico com clareza e propõe um plano."
  },
  instC: {
    diagnosis: "Colecistite aguda calculosa grau II (moderada — Tokyo Guidelines 2018): leucocitose > 18.000 (não atingida, mas PCR > 96, febre, Murphy positivo, espessamento parietal > 4 mm). Sem icterícia, colúria ou colédoco dilatado — afasta coledocolitíase. Sem critérios de falência orgânica — afasta grau III.",
    differentials: [
      "Colangite aguda — excluída pela ausência da tríade de Charcot (febre + icterícia + dor em HCD): bilirrubinas normais, colédoco de calibre normal na USG",
      "Pancreatite aguda biliar — excluída pela amilase normal (68 U/L) e pela ausência de dor em faixa com irradiação dorsal",
      "Úlcera péptica em crise — diferencial de dor epigástrica e em HCD; excluída pela USG com colecistite e pelo sinal de Murphy positivo",
      "Pneumonia de lobo inferior direito — diferencial incomum de dor em HCD; excluída pela ausência de tosse, expectoração e alterações à ausculta pulmonar"
    ],
    context: "Paciente feminina, 48 anos, obesa, com colelitíase conhecida e colecistite aguda grau II (Tokyo). Sem icterícia nem coledocolitíase. Colecistectomia laparoscópica precoce (< 72h) é a conduta de escolha — reduz complicações e internação.",
    justify: "Critérios de Tokyo 2018 para colecistite aguda grau II: PCR > 96 mg/L + leucocitose > 18.000 OU parede > 4 mm + Murphy ultrassonográfico positivo — grau II (moderado). Colecistectomia laparoscópica precoce (< 72h) é superior à abordagem tardia (> 6 semanas) em termos de complicações, taxa de conversão e qualidade de vida. Colédoco normal e bilirrubinas normais afastam coledocolitíase.",
    expectedAnamnesis: "Caracterizar dor: localização HCD, irradiação para ombro direito (frénico), relação com alimentação gordurosa | Febre: início e intensidade | Vômitos: frequência e conteúdo | Icterícia, colúria, acolia — afastar coledocolitíase e colangite | Episódios anteriores de cólica biliar | Diagnóstico prévio de colelitíase | Comorbidades, medicamentos, alergias | Última refeição (pré-operatório)",
    expectedPhysical: "Sinais vitais: febre, taquicardia | Icterícia: avaliar esclera e pele | Abdome: dor em HCD, defesa localizada, Murphy positivo (dor à inspiração com palpação do ponto colecístico) | Avaliar Blumberg difuso (peritonite generalizada) | Avaliar massa palpável em HCD (plastrão ou abscesso pericistístico)",
    expectedExams: [
      { exam: "Ultrassonografia de abdome total", justify: "Exame de escolha para diagnóstico de colecistite aguda — visualiza cálculos, parede vesicular, líquido pericistístico, colédoco", expected: "Parede espessada > 3 mm, cálculos, líquido perivesicular, Murphy ultrassonográfico positivo" },
      { exam: "Hemograma e PCR", justify: "Leucocitose e PCR elevado confirmam processo inflamatório e compõem os critérios de Tokyo", expected: "Leucocitose 16.800, PCR 142 — grau II de Tokyo" },
      { exam: "Bilirrubinas, TGO, TGP, GGT, FA, amilase", justify: "Avaliação de coledocolitíase (bilirrubinas elevadas), hepatite (transaminases) e pancreatite biliar (amilase)", expected: "Bilirrubinas normais (afasta coledocolitíase); amilase normal (afasta pancreatite)" }
    ],
    expectedConduct: "Farmacológica: Jejum; hidratação venosa: SF 0,9% 1.000 mL IV; analgesia: dipirona 1g IV a cada 6h + cetoprofeno 100 mg IV a cada 8h; antieméticos: metoclopramida 10 mg IV a cada 8h; antibioticoterapia: ampicilina-sulbactam 3g IV a cada 6h OU cefazolina 2g IV + metronidazol 500 mg IV a cada 8h (CCIH/MS; RENAME 2022) | Não farmacológica: Colecistectomia laparoscópica precoce (< 72h) — padrão ouro para colecistite aguda grau I e II — reduz internação, complicações e custo; NÃO indicar colecistectomia tardia eletiva de rotina em grau II sem contraindicação cirúrgica | Encaminhamento: Bloco cirúrgico de urgência para colecistectomia laparoscópica precoce | Orientações à paciente: Explicar que a vesícula está inflamada com cálculo impactado e que a cirurgia é o tratamento definitivo e seguro; esclarecer que a cirurgia por vídeo é menos dolorosa e tem recuperação rápida | Seguimento: Alta em 24–48h após colecistectomia sem complicações",
    expectedCommunication: "Apresentação: Identificar-se e acolher a paciente com dor | Comunicação do diagnóstico: Explicar que a pedra está bloqueando a saída da vesícula causando inflamação; que a cirurgia por vídeo é segura e tem rápida recuperação | Escuta ativa: Acolher o medo da cirurgia; desmistificar a laparoscopia; esclarecer que sem cirurgia o risco de complicações graves aumenta",
    criticalErrors: [
      "Não aplicar os critérios de Tokyo para classificar a gravidade da colecistite — fundamental para decidir o momento cirúrgico",
      "Indicar colecistectomia tardia (em 6 semanas) em colecistite aguda grau II sem contraindicação cirúrgica — conduta ultrapassada com maior risco de complicações",
      "Não investigar coledocolitíase (bilirrubinas, colédoco na USG) — omissão que pode levar a colangite pós-operatória",
      "Não prescrever antibioticoterapia em colecistite aguda grau II — colecistite infectada exige cobertura antimicrobiana",
      "Confundir colecistite com colangite — a tríade de Charcot (febre + icterícia + dor) está ausente, mas deve ser ativamente pesquisada"
    ]
  },
  instD: {
    title: "CHECKLIST — COLECISTITE AGUDA: DIAGNÓSTICO E COLECISTECTOMIA PRECOCE",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Acolheu o medo da paciente em relação à cirurgia e desmistificou a colecistectomia laparoscópica de forma clara", score: 0.5, ref: "CFM Res. 2232/2019; SBAD, 2022" },
          { item: "Explicou o diagnóstico e o plano cirúrgico em linguagem acessível, sem jargões técnicos", score: 0.5, ref: "CFM Res. 2232/2019" }
        ]
      },
      {
        h: "ANAMNESE E HISTÓRICO CLÍNICO",
        items: [
          { item: "Caracterizou a dor em HCD com irradiação para ombro direito após refeição gordurosa como apresentação típica de colecistite", score: 0.5, ref: "SBAD — Consenso em Colecistite, 2022" },
          { item: "Investigou ativamente icterícia, colúria e acolia para excluir coledocolitíase e colangite", score: 1.0, ref: "SBAD, 2022; Tokyo Guidelines 2018 ⚠️" },
          { item: "Identificou histórico de colelitíase conhecida e cólicas biliares prévias sem tratamento como contexto clínico relevante", score: 0.5, ref: "SBAD, 2022" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Realizou e identificou o sinal de Murphy positivo (interrupção da inspiração à palpação do ponto colecístico) como sinal clínico de colecistite", score: 1.0, ref: "SBAD, 2022; Semiologia Médica — Porto, 8ª ed., 2019" },
          { item: "Avaliou icterícia escleral e cutânea para excluir comprometimento do colédoco", score: 0.5, ref: "SBAD, 2022" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Aplicou os critérios de Tokyo Guidelines 2018 e classificou a colecistite como grau II (moderada)", score: 1.0, ref: "Tokyo Guidelines 2018 ⚠️; SBAD, 2022" },
          { item: "Solicitou ultrassonografia de abdome como primeiro exame e interpretou: parede espessada, cálculos, líquido pericistístico, colédoco normal", score: 0.5, ref: "SBAD, 2022" },
          { item: "Solicitou amilase para excluir pancreatite biliar associada", score: 0.5, ref: "SBAD, 2022; SBCP, 2022" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO",
        items: [
          { item: "Indicou colecistectomia laparoscópica precoce (< 72h) como tratamento de escolha para colecistite grau II", score: 1.0, ref: "Tokyo Guidelines 2018 ⚠️; SBAD, 2022" },
          { item: "Prescreveu antibioticoterapia, analgesia e antieméticos no pré-operatório", score: 0.5, ref: "SBAD, 2022; RENAME 2022; CCIH/MS" }
        ]
      }
    ]
  }
},

{
  id: 27,
  title: "Febre, icterícia e dor no lado direito da barriga em paciente com cálculos biliares",
  sub: "PS — Pronto-Socorro",
  tema: "Cirurgia",
  topic: "coledocolitíase e colangite aguda",
  level: "moderado",
  cardAccent: "#D4AC0D",
  instA: {
    scenario: "Pronto-Socorro de hospital geral. Turno diurno. Paciente padronizado (ator).",
    patient: "S.B., 55 anos, feminino, secretária, com histórico de colelitíase, apresentando febre alta, olhos amarelos e dor no lado direito da barriga.",
    complaint: "Dor em hipocôndrio direito, febre de 39°C e icterícia há 2 dias, com piora progressiva e confusão mental nas últimas horas.",
    tasks: [
      "Realize a anamnese e identifique a tríade de Charcot e a pêntade de Reynolds.",
      "Realize o exame físico e classifique a gravidade da colangite pelos critérios de Tokyo.",
      "Solicite e interprete os exames complementares prioritários.",
      "Proponha a conduta de urgência incluindo drenagem biliar e antibioticoterapia.",
      "Diferencie colangite aguda de colecistite aguda e de outras causas de icterícia obstrutiva."
    ]
  },
  instB: {
    vitals: {
      PA: "88/56 mmHg",
      FC: "122 bpm",
      FR: "22 irpm",
      Tax: "39,4°C",
      Peso: "72 kg",
      Altura: "1,62 m",
      IMC: "27,4 kg/m²"
    },
    physicalGeneral: "Paciente em mau estado geral, confusa (desorientada no tempo e espaço), com dor em HCD (EVA 6/10). Mucosas ictéricas. Escleróticas ictéricas. Febril. Sudoreica. Hipotensa.",
    physicalSeg: "ABDOME: Flácido. Dor à palpação profunda em hipocôndrio direito e epigástrio. Murphy negativo (sem inflamação vesicular franca — colédoco obstruído sem colecistite). Fígado palpável a 2 cm do rebordo costal direito, de superfície lisa, doloroso à palpação (colestase). Ruídos hidroaéreos normais. | PELE E MUCOSAS: Icterícia 2+/4+ na pele e escleras. Urina visivelmente escura (colúria) relatada pelo familiar. | CARDIOVASCULAR: Taquicárdica, hipotensa, pulsos periféricos finos. | NEUROLÓGICO: Confusa, desorientada — Glasgow 13.",
    labs: [
      { test: "Hemoglobina", val: "11,8 g/dL", ref: "12,0–16,0 g/dL", alt: true },
      { test: "Leucócitos", val: "22.400/mm³", ref: "4.000–11.000/mm³", alt: true },
      { test: "Neutrófilos", val: "90% (desvio à esquerda)", ref: "50–70%", alt: true },
      { test: "PCR", val: "284 mg/L", ref: "< 5 mg/L", alt: true },
      { test: "Bilirrubina total", val: "8,4 mg/dL", ref: "< 1,2 mg/dL", alt: true },
      { test: "Bilirrubina direta", val: "7,1 mg/dL", ref: "< 0,4 mg/dL", alt: true },
      { test: "TGO (AST)", val: "188 U/L", ref: "< 40 U/L", alt: true },
      { test: "TGP (ALT)", val: "214 U/L", ref: "< 41 U/L", alt: true },
      { test: "GGT", val: "420 U/L", ref: "< 50 U/L", alt: true },
      { test: "Fosfatase alcalina", val: "380 U/L", ref: "44–147 U/L", alt: true },
      { test: "Amilase", val: "320 U/L", ref: "< 100 U/L", alt: true },
      { test: "Lactato sérico", val: "3,8 mmol/L", ref: "0,5–2,0 mmol/L", alt: true },
      { test: "Creatinina", val: "1,8 mg/dL", ref: "0,7–1,2 mg/dL", alt: true },
      { test: "TP (INR)", val: "1,8", ref: "0,8–1,2", alt: true }
    ],
    image: "ULTRASSONOGRAFIA DE ABDOME TOTAL: Vesícula biliar com múltiplos cálculos, paredes de espessura normal (2 mm). Ducto biliar comum (colédoco) dilatado — calibre de 13 mm (normal < 7 mm) — com imagem hiperecogênica de 1,2 cm no colédoco distal compatível com cálculo impactado, com sombra acústica. Via biliar intra-hepática com dilatação moderada. Fígado com textura preservada, sem abscesso identificado. | COLANGIOPANCREATOGRAFIA POR RESSONÂNCIA MAGNÉTICA (CPRM): Cálculo de 1,2 cm impactado no colédoco distal, a 1 cm da papila. Dilatação da via biliar principal (colédoco 14 mm) e das vias intra-hepáticas. Sem estenose. Sem massa pancreática ou periampular visível.",
    note: "Caso com ator. A atriz deve estar com icterícia simulada (maquiagem amarela nas escleras e pele). Confusa, prostrada. Familiar presente fornece parte da história. Entregar sinais vitais ao início. Entregar laboratório quando solicitado. Entregar USG quando solicitada. Entregar CPRM quando o candidato solicitar. Atentar se o candidato reconhece a pêntade de Reynolds e indica CPRE de urgência.",
    patientProfile: "S.B., 55 anos, feminino. Secretária, casada, dois filhos adultos. Colelitíase conhecida há 3 anos sem tratamento. Sem medicamentos contínuos. Nega alergias. DM tipo 2 leve em uso de metformina 500 mg 1x/dia — suspender antes de contraste iodado.",
    script: [
      {
        trigger: "Familiar fala pela paciente (confusa)",
        speech: "Doutor, minha mãe tá com dor na barriga, febre e os olhos amarelos há dois dias. Hoje ela ficou confusa, não tá respondendo direito. Ela tem pedra na vesícula há anos mas nunca quis operar."
      },
      {
        trigger: "Paciente responde diretamente quando perguntada sobre dor",
        speech: "Dói aqui... (aponta para HCD) ...tô com calor... (confusa, responde de forma fragmentada)"
      },
      {
        trigger: "Familiar sobre a evolução (quando perguntado)",
        speech: "Começou com dor no lado direito e febre há 2 dias. Aí ontem notamos que os olhos ficaram amarelos. A urina ficou bem escura também, marrom quase. Hoje de manhã ela ficou assim, confusa."
      },
      {
        trigger: "Familiar sobre doenças e medicamentos (quando perguntado)",
        speech: "Ela tem diabetes leve, toma metformina. Nunca teve problema de fígado. A única coisa era essa pedra na vesícula que ela sabia mas não queria operar."
      },
      {
        trigger: "Familiar sobre alergias (quando perguntado)",
        speech: "Não tem alergia nenhuma que eu saiba. Nunca teve reação a remédio."
      },
      {
        trigger: "Familiar sobre calafrios (quando perguntado)",
        speech: "Sim! Ficou com muito tremor ontem à noite, tipo um calafrio forte, ficou tremendo muito por uns 10 minutos. Depois passou, mas aí a febre subiu mais."
      },
      {
        trigger: "Familiar sobre fezes (quando perguntado)",
        speech: "Agora que você fala, as fezes dela ficaram bem claras, esbranquiçadas nos últimos 2 dias. Achamos estranho mas não ligamos. Isso é importante?"
      },
      {
        trigger: "Pergunta ativa do familiar — O que está acontecendo com ela doutor?",
        speech: "O que está acontecendo? É grave? Ela vai precisar operar?"
      },
      {
        trigger: "Pergunta ativa do familiar — Por que ela ficou confusa?",
        speech: "Por que ela ficou assim, confusa? Isso é do fígado? Do remédio? É perigoso?"
      }
    ],
    hiddenInfo: "Calafrios intensos na noite anterior — sinal de bacteremia por colangite grave; confirmado pelo familiar se o candidato perguntar sobre calafrios ou tremores. | Fezes acólicas (esbranquiçadas) confirmadas pelo familiar — sinal de colestase obstrutiva completa; só menciona se o candidato perguntar sobre a cor das fezes.",
    actorBehavior: "Paciente confusa, prostrada, responde apenas a perguntas simples. Familiar ansioso e assustado, colaborativo. Fornece todas as informações quando questionado adequadamente pelo candidato."
  },
  instC: {
    diagnosis: "Colangite aguda grave (grau III — Tokyo Guidelines 2018): pêntade de Reynolds completa — dor em HCD + febre + icterícia (tríade de Charcot) + hipotensão + confusão mental. Coledocolitíase confirmada pela USG e CPRM (cálculo 1,2 cm no colédoco distal). Sepse biliar com disfunção orgânica. CPRE de urgência (<24h) com papiloesfincterotomia e extração do cálculo.",
    differentials: [
      "Colecistite aguda — excluída pela presença de icterícia, colúria, colédoco dilatado e tríade de Charcot positiva; Murphy negativo reforça que a inflamação é no colédoco e não na vesícula",
      "Hepatite aguda viral — diferencial de icterícia com transaminases elevadas; excluída pelo colédoco dilatado com cálculo na USG/CPRM e pelo padrão colestático (FA e GGT muito elevadas)",
      "Neoplasia de cabeça de pâncreas ou periampular — diferencial de icterícia obstrutiva; excluída pela CPRM sem massa pancreática e pela presença de cálculo impactado como causa da obstrução",
      "Abscesso hepático — diferencial de febre e icterícia em paciente com sepse; excluído pela USG sem coleções hepáticas"
    ],
    context: "Paciente feminina, 55 anos, com coledocolitíase e colangite aguda grau III (Tokyo) — pêntade de Reynolds completa com sepse biliar e disfunção orgânica (hipotensão, confusão, IRA). CPRE de urgência é a única intervenção que resolve a obstrução e controla a sepse. Mortalidade da colangite grau III sem drenagem: > 50%.",
    justify: "Tokyo Guidelines grau III: disfunção orgânica em ≥ 1 órgão (cardiovascular: hipotensão; neurológico: confusão; renal: creatinina 1,8). Pêntade de Reynolds = tríade de Charcot + hipotensão + confusão — indica colangite supurativa grave. CPRE com papiloesfincterotomia e extração do cálculo é o tratamento de escolha — drenagem biliar urgente (<24h) resolve a obstrução e a sepse.",
    expectedAnamnesis: "Tríade de Charcot: febre + icterícia + dor em HCD — quando iniciou cada um | Pêntade de Reynolds: + hipotensão + confusão mental | Colúria e acolia (fezes esbranquiçadas) | Calafrios: bacteremia | Histórico de colelitíase e colecistites prévias | Diabetes: suspender metformina antes de contraste | Alergias a contraste iodado (CPRE) | Último episódio semelhante",
    expectedPhysical: "Sinais vitais: hipotensão + taquicardia + febre — sepse | Neurológico: Glasgow, confusão | Icterícia: pele e escleras | Abdome: Murphy negativo (diferencia de colecistite), hepatomegalia dolorosa | Colúria: observar cor da urina | Avaliar signs de peritonite",
    expectedExams: [
      { exam: "Ultrassonografia de abdome", justify: "Primeiro exame — confirmar coledocolitíase, avaliar calibre do colédoco e via biliar", expected: "Colédoco 13 mm com cálculo impactado" },
      { exam: "Bilirrubinas, enzimas colestáticas (FA, GGT), transaminases", justify: "Confirmar padrão colestático e disfunção hepática", expected: "Bilirrubina total 8,4, padrão colestático dominante" },
      { exam: "Lactato, creatinina, coagulograma", justify: "Avaliar gravidade da sepse e disfunção orgânica", expected: "Lactato 3,8, creatinina 1,8, INR 1,8 — disfunção orgânica múltipla" },
      { exam: "CPRM (colangiopancreatografia por ressonância)", justify: "Confirmar localização do cálculo e excluir neoplasia antes da CPRE", expected: "Cálculo 1,2 cm no colédoco distal, sem massa" },
      { exam: "CPRE (colangiopancreatografia retrógrada endoscópica) — TERAPÊUTICA", justify: "Drenagem biliar urgente — papiloesfincterotomia e extração do cálculo", expected: "Resolução da obstrução biliar e controle da sepse" }
    ],
    expectedConduct: "Farmacológica: Ressuscitação hemodinâmica: Ringer Lactato 30 mL/kg em 1h (bundle de sepse — SSC); noradrenalina se hipotensão refratária; antibioticoterapia empírica de amplo espectro: piperacilina-tazobactam 4,5g IV a cada 6h OU imipeném-cilastatina 500 mg IV a cada 6h (RENAME 2022 — colangite grave com sepse) — cobertura para Enterococcus, gram-negativos entéricos e anaeróbios; suspender metformina imediatamente (contraste iodado na CPRE); vitamina K 10 mg IV + plasma fresco se INR > 1,5 antes da CPRE | Não farmacológica: CPRE urgente (< 24h) com papiloesfincterotomia e extração do cálculo — única intervenção que resolve a obstrução; colecistectomia laparoscópica eletiva 4–6 semanas após resolução da colangite; cateter vesical; SNG se vômitos; UTI após CPRE | Encaminhamento: Endoscopia de urgência para CPRE; UTI pós-procedimento; Gastroenterologia/Cirurgia para colecistectomia eletiva posterior | Orientações ao familiar: Comunicar gravidade, risco de vida, necessidade de procedimento urgente | Seguimento: UTI; colecistectomia eletiva em 4–6 semanas",
    expectedCommunication: "Apresentação: Identificar-se rapidamente ao familiar | Comunicação ao familiar: Explicar que a pedra está bloqueando a saída da bile causando infecção grave no fígado e nas vias biliares; que um procedimento urgente pela boca (endoscopia) é necessário para retirar a pedra | Escuta ativa: Acolher o medo do familiar; comunicar a gravidade sem omitir o risco de vida",
    criticalErrors: [
      "Não reconhecer a pêntade de Reynolds — não identificar a colangite grau III e não indicar CPRE de urgência",
      "Indicar colecistectomia de urgência sem drenagem biliar prévia pela CPRE — a cirurgia sem drenagem não resolve a obstrução e aumenta a mortalidade",
      "Não iniciar ressuscitação hemodinâmica imediata em paciente com sepse biliar e choque",
      "Não suspender metformina antes de contraste iodado (CPRE) — risco de acidose lática",
      "Confundir colangite com colecistite aguda — condutas e urgências diferentes; erro pode atrasar a CPRE"
    ]
  },
  instD: {
    title: "CHECKLIST — COLANGITE AGUDA GRAVE: PÊNTADE DE REYNOLDS E CPRE URGENTE",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Colheu a anamnese com o familiar dado o rebaixamento do nível de consciência da paciente", score: 0.5, ref: "CFM Res. 2232/2019; Código de Ética Médica" },
          { item: "Comunicou ao familiar a gravidade do quadro e a necessidade de procedimento urgente (CPRE) de forma clara e empática", score: 0.5, ref: "CFM Res. 2232/2019" }
        ]
      },
      {
        h: "ANAMNESE E HISTÓRICO CLÍNICO",
        items: [
          { item: "Identificou a tríade de Charcot completa: febre + icterícia + dor em HCD", score: 1.0, ref: "SBAD — Consenso em Colangite, 2022; Tokyo Guidelines 2018 ⚠️" },
          { item: "Identificou a pêntade de Reynolds: tríade de Charcot + hipotensão + confusão mental — colangite grau III", score: 1.0, ref: "Tokyo Guidelines 2018 ⚠️; SBAD, 2022" },
          { item: "Investigou colúria, acolia e calafrios como dados diagnósticos de obstrução biliar e bacteremia", score: 0.5, ref: "SBAD, 2022" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Identificou icterícia escleral e cutânea e colédoco dilatado como achados de obstrução biliar", score: 0.5, ref: "SBAD, 2022; Semiologia Médica — Porto, 8ª ed., 2019" },
          { item: "Diferenciou Murphy negativo (colangite) de Murphy positivo (colecistite) — distinção diagnóstica fundamental", score: 1.0, ref: "SBAD, 2022; Tokyo Guidelines 2018 ⚠️" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Classificou a colangite como grau III (Tokyo) pela presença de disfunção orgânica — cardiovascular + neurológico + renal", score: 0.5, ref: "Tokyo Guidelines 2018 ⚠️; SBAD, 2022" },
          { item: "Indicou CPRE urgente (< 24h) como procedimento de drenagem biliar de escolha na colangite grau III", score: 1.0, ref: "Tokyo Guidelines 2018 ⚠️; SBAD, 2022" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO",
        items: [
          { item: "Iniciou ressuscitação hemodinâmica (30 mL/kg de Ringer Lactato) e antibioticoterapia de amplo espectro imediatamente", score: 0.5, ref: "SSC ⚠️; SBAD, 2022; RENAME 2022" },
          { item: "Suspendeu a metformina antes do contraste iodado da CPRE para prevenir acidose lática", score: 0.5, ref: "SBD, 2022; SBAD, 2022; bula metformina" }
        ]
      }
    ]
  }
},

{
  id: 28,
  title: "Pedra na vesícula descoberta em exame de rotina — paciente sem sintomas",
  sub: "Ambulatório de Cirurgia Geral — Hospital Geral",
  tema: "Cirurgia",
  topic: "colelitíase e cólica biliar",
  level: "moderado",
  cardAccent: "#D4AC0D",
  instA: {
    scenario: "Ambulatório de Cirurgia Geral de hospital geral. Turno matutino. Paciente padronizado (ator).",
    patient: "E.V., 45 anos, feminino, enfermeira, com colelitíase descoberta em exame de rotina há 1 mês.",
    complaint: "Pedra na vesícula descoberta em ultrassonografia de rotina. Paciente refere episódios ocasionais de desconforto após refeições gordurosas, mas sem crise de dor intensa.",
    tasks: [
      "Realize a anamnese e classifique a colelitíase como sintomática ou assintomática com base nos critérios clínicos.",
      "Realize o exame físico pertinente e interprete os achados laboratoriais e de imagem.",
      "Determine se há indicação de colecistectomia profilática ou apenas vigilância, com justificativa baseada em diretrizes.",
      "Oriente a paciente sobre os riscos e benefícios da colecistectomia laparoscópica versus conduta expectante.",
      "Identifique as situações em que a colecistectomia profilática é indicada mesmo em pacientes assintomáticos."
    ]
  },
  instB: {
    vitals: {
      PA: "122/78 mmHg",
      FC: "72 bpm",
      FR: "16 irpm",
      Tax: "36,4°C",
      Peso: "74 kg",
      Altura: "1,64 m",
      IMC: "27,5 kg/m²"
    },
    physicalGeneral: "Paciente em bom estado geral, consciente, orientada, eupneica, afebril. Mucosas normocoradas, anictérica, acianótica. Sobrepeso leve.",
    physicalSeg: "ABDOME: Flácido, ruídos hidroaéreos presentes e normais. Dor leve à palpação profunda em hipocôndrio direito. Murphy negativo. Sem massas, sem visceromegalias. Sem icterícia. | CARDIOVASCULAR: Bulhas rítmicas normofonéticas, sem sopros. | TÓRAX: MV presente bilateralmente, sem ruídos adventícios.",
    labs: [
      { test: "Hemograma completo", val: "Dentro dos limites normais", ref: "—", alt: false },
      { test: "Bilirrubina total", val: "0,8 mg/dL", ref: "< 1,2 mg/dL", alt: false },
      { test: "TGO (AST)", val: "28 U/L", ref: "< 40 U/L", alt: false },
      { test: "TGP (ALT)", val: "32 U/L", ref: "< 41 U/L", alt: false },
      { test: "GGT", val: "38 U/L", ref: "< 50 U/L", alt: false },
      { test: "Fosfatase alcalina", val: "82 U/L", ref: "44–147 U/L", alt: false },
      { test: "Amilase", val: "52 U/L", ref: "< 100 U/L", alt: false },
      { test: "Glicemia de jejum", val: "96 mg/dL", ref: "70–99 mg/dL", alt: false }
    ],
    image: "ULTRASSONOGRAFIA DE ABDOME TOTAL (exame de rotina há 1 mês): Vesícula biliar de dimensões normais, com paredes finas (2 mm). Presença de um cálculo único medindo 1,4 cm, com sombra acústica posterior. Ausência de espessamento parietal, líquido pericistístico ou sinais inflamatórios. Ducto biliar comum (colédoco) com calibre normal (5 mm). Fígado, pâncreas e rins sem alterações.",
    note: "Caso com ator. A paciente deve ser representada como calma, bem informada (enfermeira) e com dúvidas específicas sobre a indicação cirúrgica. Entregar sinais vitais e laudo da USG ao início (é o exame que motivou o encaminhamento). Entregar laboratório quando solicitado. Atentar se o candidato distingue colelitíase sintomática de assintomática e se indica ou não a cirurgia com base em critérios.",
    patientProfile: "E.V., 45 anos, feminino. Enfermeira de UTI, casada, dois filhos. Sobrepeso (IMC 27,5). Sem comorbidades relevantes. Sem medicamentos contínuos. Sem tabagismo. Etilismo social leve. Sem histórico familiar de câncer de vesícula. Sem anemia hemolítica. Sem imunossupressão. Dieta com refeições gordurosas frequentes pelo trabalho noturno.",
    script: [
      {
        trigger: "Queixa principal / ao iniciar o contato",
        speech: "Doutor, descobri uma pedra na vesícula há um mês, num exame de rotina. Não tive nenhuma crise daquelas horríveis que as pacientes da UTI relatam. Mas às vezes, depois de comer gordura, sinto um desconforto aqui do lado direito, não é dor forte, passa em menos de uma hora. Vim saber se preciso operar."
      },
      {
        trigger: "Sobre o desconforto pós-prandial",
        speech: "É uma pressão, um incômodo, às vezes uma leve cólica aqui embaixo das costelas direitas. Acontece depois de refeições mais pesadas, churrasco, feijoada. Passa sozinho, em menos de uma hora. Nunca precisei de remédio por causa disso."
      },
      {
        trigger: "Sobre crise de dor intensa",
        speech: "Não, nunca tive aquela crise que fala em cólica biliar intensa, que vai para o ombro, com vômito, que dura horas. Isso nunca aconteceu. É só esse desconfortinho mesmo."
      },
      {
        trigger: "Sobre icterícia ou urina escura",
        speech: "Nunca fiquei amarela, nunca a urina ficou escura. Os exames do fígado vieram todos normais."
      },
      {
        trigger: "Sobre histórico familiar",
        speech: "Minha mãe também tem pedra na vesícula, mas vive bem, nunca operou. Não tem caso de câncer na família. Meu pai morreu de infarto, mas não tinha problema de vesícula."
      },
      {
        trigger: "Sobre diabetes ou outras doenças",
        speech: "Não tenho diabetes, não tenho anemia. Nunca tive problema de saúde sério. Só esse sobrepeso que tô tentando controlar."
      },
      {
        trigger: "Sobre viagens ou trabalho",
        speech: "Trabalho muito, planto noturno na UTI. Viajo às vezes, já fui pra lugares com atendimento médico limitado. Isso influencia na decisão de operar?"
      },
      {
        trigger: "Sobre o medo da cirurgia",
        speech: "Trabalho em UTI, sou enfermeira. Já vi muita cirurgia, sei que a laparoscópica é mais tranquila. Mas mesmo assim tenho aquela resistência de passar pela mesa. Prefiro evitar se puder."
      },
      {
        trigger: "Sobre expectativa com a consulta",
        speech: "Quero saber se preciso operar agora, se posso esperar, ou se nunca vou precisar. Como enfermeira, entendo que tem paciente que tem pedra na vesícula a vida toda sem sintoma. Mas quero a orientação do especialista."
      },
      {
        trigger: "Pergunta ativa — Vou ter complicação se não operar?",
        speech: "Se eu decidir não operar agora, qual a chance de ter uma complicação grave tipo colecistite ou icterícia? Isso é previsível?"
      },
      {
        trigger: "Pergunta ativa — O desconforto que sinto é da pedra?",
        speech: "Esse incômodo que sinto depois de comer gordura é da pedra? Isso conta como sintoma para indicar a cirurgia?"
      }
    ],
    hiddenInfo: "Viaja frequentemente para regiões do interior com acesso limitado a serviços de saúde de urgência — fator que pode inclinar para cirurgia profilática pelo risco de complicação sem atendimento adequado; só menciona se o candidato perguntar sobre estilo de vida, trabalho ou viagens. | Planeja uma viagem longa de 3 meses para zona rural em 6 meses — dado que reforça a discussão sobre cirurgia profilática antes de áreas remotas; só menciona se o candidato perguntar sobre planos futuros.",
    actorBehavior: "Paciente articulada, calma, bem informada pela profissão. Faz perguntas técnicas pertinentes. Demonstra resistência natural à cirurgia mas está aberta à orientação especializada. Fica satisfeita com explicações baseadas em evidências."
  },
  instC: {
    diagnosis: "Colelitíase sintomática leve (cólica biliar atípica — desconforto pós-prandial < 1h sem crise típica). Cálculo único de 1,4 cm. Sem complicações (sem colecistite, coledocolitíase ou colangite). Indicação relativa de colecistectomia laparoscópica eletiva pela sintomatologia — discutir risco-benefício com a paciente.",
    differentials: [
      "Colelitíase assintomática — diferencial: o desconforto pós-prandial relatado pode ser inespecífico (dispepsia funcional) ou representar cólica biliar atípica; a distinção impacta a indicação cirúrgica",
      "Dispepsia funcional — diferencial de desconforto epigástrico e em HCD pós-prandial; pode coexistir com colelitíase; H. pylori deve ser investigado",
      "DRGE — diferencial de desconforto pós-prandial; excluído pela localização em HCD e pela ausência de pirose típica",
      "Colelitíase assintomática com indicação profilática por risco específico — considerar: viagem a zona rural, profissão de risco (impossibilidade de acesso a cuidados de urgência)"
    ],
    context: "Paciente feminina, 45 anos, com colelitíase sintomática leve (cólica biliar atípica). Sem complicações. Cálculo único 1,4 cm. Sem fatores de risco para câncer de vesícula. Indicação cirúrgica relativa — decisão compartilhada com a paciente. Viagem a zona rural em 6 meses pode ser fator favorável à cirurgia eletiva preventiva.",
    justify: "Diretrizes SBAD/CBC 2022: colelitíase sintomática (cólica biliar típica ou atípica) = indicação de colecistectomia eletiva. Colelitíase assintomática em paciente sem fatores de risco específicos = conduta expectante (15–25% evoluem com complicação em 20 anos). Indicações profiláticas em assintomáticos: cálculo > 3 cm, vesícula em porcelana, anomalia de junção bilioptancreática, anemia hemolítica, imunossuprimidos, transplantados, viajantes a zonas remotas. Neste caso: sintomática leve + viagem a zona rural = indicação relativa com decisão compartilhada.",
    expectedAnamnesis: "Caracterizar os sintomas: cólica biliar típica (dor em HCD > 30 min, irradiação para ombro, vômitos) vs. atípica (desconforto < 1h pós-prandial) | Episódios anteriores de complicação: colecistite, icterícia, pancreatite | Fatores de risco para câncer de vesícula: cálculo > 3 cm, vesícula em porcelana, índio americano (étnico) | Anemia hemolítica, imunossupressão, transplante | Viagens a regiões remotas | Histórico familiar de câncer de vesícula | Gravidez atual ou planejada (colelitíase piora na gravidez)",
    expectedPhysical: "Murphy negativo (sem colecistite) | Palpação de HCD: sensibilidade leve | Icterícia: ausente | Avaliação do peso e IMC | Sem sinais de complicação",
    expectedExams: [
      { exam: "Ultrassonografia de abdome (já disponível)", justify: "Caracterizar o cálculo: tamanho, número, parede vesicular, colédoco", expected: "Cálculo único 1,4 cm, parede normal, colédoco normal" },
      { exam: "Bilirrubinas e enzimas hepáticas", justify: "Excluir coledocolitíase silenciosa e disfunção hepática", expected: "Normais — sem obstrução biliar" },
      { exam: "Pesquisa de H. pylori (se dispepsia associada)", justify: "Excluir dispepsia por H. pylori como causa do desconforto pós-prandial", expected: "Avaliar e tratar se positivo" }
    ],
    expectedConduct: "Farmacológica: Não há dissolução química eficaz para cálculos de colesterol em vesícula biliar funcionante — ácido ursodesoxicólico tem indicação limitada e taxa de recidiva alta após suspensão; não indicar como tratamento definitivo; analgesia durante cólicas: dipirona 1g VO a cada 6h + buscapina 10 mg VO se necessário | Não farmacológica: Colecistectomia laparoscópica eletiva — indicada pela sintomatologia (cólica atípica); taxa de sucesso > 95% em laparoscopia eletiva; mortalidade < 0,1% em elétiva; discutir os riscos reais (lesão de via biliar 0,2–0,5%, conversão para laparotomia) | Conduta expectante — alternativa em colelitíase verdadeiramente assintomática; orientar sinais de alarme para retorno imediato: dor intensa > 30 min em HCD + febre + icterícia = ir ao PS | Encaminhamento: Cirurgia Geral/Digestiva para colecistectomia laparoscópica eletiva | Orientações à paciente: Explicar a diferença entre assintomática e sintomática leve; apresentar risco-benefício da cirurgia eletiva versus expectante; discutir o contexto da viagem a zona rural como fator favorável à cirurgia preventiva; orientar sinais de alarme | Seguimento: Se optar por expectante: USG em 1 ano; orientar retorno imediato se cólica intensa, febre ou icterícia",
    expectedCommunication: "Apresentação: Identificar-se e reconhecer o conhecimento técnico da paciente como profissional de saúde | Comunicação do diagnóstico: Explicar a diferença entre colelitíase assintomática e sintomática; apresentar dados de risco-benefício de forma clara e baseada em evidências | Escuta ativa: Perguntar sobre expectativas, medos e planos futuros (viagem); tomar decisão compartilhada respeitando a autonomia da paciente",
    criticalErrors: [
      "Indicar colecistectomia de urgência em colelitíase sintomática leve sem complicação — conduta excessiva; cirurgia eletiva é adequada",
      "Não orientar sobre os sinais de alarme que exigem ida ao PS (cólica intensa + febre + icterícia) — omissão de informação crítica de segurança",
      "Indicar ácido ursodesoxicólico como tratamento definitivo para colelitíase — sem eficácia a longo prazo, alta taxa de recidiva",
      "Não considerar o contexto da viagem a zona rural como fator favorável à colecistectomia profilática eletiva",
      "Não discutir a decisão com a paciente de forma compartilhada — colelitíase sintomática leve é uma indicação relativa que admite decisão conjunta"
    ]
  },
  instD: {
    title: "CHECKLIST — COLELITÍASE: AVALIAÇÃO E INDICAÇÃO CIRÚRGICA",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Reconheceu o conhecimento técnico da paciente (enfermeira) e utilizou linguagem adequada ao nível de compreensão dela", score: 0.5, ref: "CFM Res. 2232/2019; ABEM, 2022" },
          { item: "Tomou decisão compartilhada sobre cirurgia eletiva versus expectante, respeitando a autonomia da paciente", score: 0.5, ref: "CFM Res. 2232/2019; Código de Ética Médica — autonomia" }
        ]
      },
      {
        h: "ANAMNESE E HISTÓRICO CLÍNICO",
        items: [
          { item: "Classificou corretamente como colelitíase sintomática leve (cólica atípica: desconforto < 1h pós-prandial) e não como assintomática", score: 1.0, ref: "SBAD — Consenso em Colelitíase, 2022; CBC, 2022" },
          { item: "Investigou indicações profiláticas de cirurgia em assintomáticos: cálculo > 3 cm, vesícula em porcelana, anemia hemolítica, imunossupressão", score: 0.5, ref: "SBAD, 2022" },
          { item: "Identificou a viagem planejada a zona rural como fator favorável à colecistectomia eletiva preventiva", score: 0.5, ref: "SBAD, 2022; CBM — Cirurgia em viajantes" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Identificou Murphy negativo, confirmando ausência de colecistite aguda no momento", score: 0.5, ref: "SBAD, 2022; Semiologia Médica — Porto, 8ª ed., 2019" },
          { item: "Avaliou icterícia e confirmou ausência de obstrução biliar ao exame clínico", score: 0.5, ref: "SBAD, 2022" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Interpretou a USG: cálculo único 1,4 cm, parede normal, colédoco normal — sem complicações", score: 0.5, ref: "SBAD, 2022" },
          { item: "Não indicou ácido ursodesoxicólico como tratamento definitivo — reconheceu a ineficácia a longo prazo", score: 0.5, ref: "SBAD, 2022" },
          { item: "Indicou colecistectomia laparoscópica eletiva com base na sintomatologia, discutindo o risco-benefício", score: 1.0, ref: "SBAD, 2022; CBC, 2022" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO",
        items: [
          { item: "Orientou os sinais de alarme que exigem ida imediata ao PS: cólica intensa + febre + icterícia", score: 1.0, ref: "SBAD, 2022; CFM — Segurança do paciente" },
          { item: "Orientou sobre o contexto da viagem a zona rural como fator favorável à cirurgia eletiva preventiva antes da viagem", score: 0.5, ref: "SBAD, 2022" }
        ]
      }
    ]
  }
},

]

export default ctoracica;
