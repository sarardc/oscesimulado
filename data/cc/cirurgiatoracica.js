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
    script: [“Paciente masculino, 58 anos, contador, tabagista, com história de DRGE há cerca de 12 anos. Refere pirose e regurgitação ácida frequentes, principalmente após refeições volumosas e ao deitar, com piora noturna. Relata uso irregular de omeprazol, tomando apenas quando apresenta sintomas, sem adesão contínua ao tratamento prescrito.
Há aproximadamente 6 semanas iniciou disfagia para alimentos sólidos, inicialmente intermitente, atualmente mais frequente, sem disfagia para líquidos. Nega odinofagia. Refere sensação de alimento parado em região retroesternal distal.
Nega hematêmese e melena. Refere discreta perda ponderal não intencional nos últimos meses e redução da ingesta por medo da disfagia. História de tabagismo de longa data (quantificar anos-maço) e etilismo social/leve. Nega história familiar conhecida de câncer esofágico ou gástrico.
Sem cirurgias prévias relevantes. Sem alergias medicamentosas conhecidas.”
],
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
    script: [{
        trigger: "caso clinico"
        speech: "Paciente masculino, 58 anos, contador, tabagista, com história de DRGE há cerca de 12 anos. Refere pirose e regurgitação ácida frequentes, principalmente após refeições volumosas e ao deitar, com piora noturna. Relata uso irregular de omeprazol, tomando apenas quando apresenta sintomas, sem adesão contínua ao tratamento prescrito. Há aproximadamente 6 semanas iniciou disfagia para alimentos sólidos, inicialmente intermitente, atualmente mais frequente, sem disfagia para líquidos. Nega odinofagia. Refere sensação de alimento parado em região retroesternal distal. Nega hematêmese e melena. Refere discreta perda ponderal não intencional nos últimos meses e redução da ingesta por medo da disfagia. História de tabagismo de longa data (quantificar anos-maço) e etilismo social/leve. Nega história familiar conhecida de câncer esofágico ou gástrico. Sem cirurgias prévias relevantes. Sem alergias medicamentosas conhecidas.”},
            ],
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

]

export default ctoracica;
