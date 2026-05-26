const urologyStations = [
  // ── ESTAÇÃO 1: ITU Simples (Mulher jovem, UBS) ──────────────────────
  {
    id: 1,
    title: "Ardência para urinar há 3 dias",
    sub: "UBS — Atenção Primária",
    tema: "nefrologia",
    topic: "itu",
    level: "simples",
    cardAccent: "#4f9cf9",

    instA: {
      scenario: "Unidade Básica de Saúde (UBS), atendimento de demanda espontânea. Turno da manhã.",
      patient: "J.S., 26 anos, feminino, professora, sem comorbidades conhecidas.",
      complaint: "Paciente refere ardência ao urinar e vontade frequente de ir ao banheiro há 3 dias. Nega febre.",
      tasks: [
        "Realizar anamnese completa e dirigida à queixa urinária",
        "Solicitar exame físico pertinente ao caso",
        "Formular hipóteses diagnósticas e diagnósticos diferenciais",
        "Solicitar exames complementares adequados e interpretar os resultados",
        "Estabelecer conduta terapêutica baseada em protocolos do MS/SUS",
        "Orientar a paciente sobre o diagnóstico, tratamento e prevenção",
        "Comunicar-se de forma empática e em linguagem acessível"
      ]
    },

    instB: {
      vitals: { PA:"112/72 mmHg", FC:"78 bpm", FR:"16 irpm", Tax:"36.8°C", Peso:"58 kg", Altura:"1.62 m", IMC:"22.1 kg/m²" },
      physicalGeneral: "Paciente em bom estado geral, corada, hidratada, anictérica, afebril ao toque.",
      physicalSeg: [
        "ABDOME: Plano, macio, sem visceromegalias. Dor leve à palpação profunda em hipogastro. Sem defesa. Punho-percussão lombar bilateral NEGATIVA.",
        "GENITÁLIA EXTERNA: Sem sinais de corrimento, eritema ou lesões visíveis. Meato uretral sem secreção.",
        "MAMAS: Simétricas, sem nódulos ou descarga papilar.",
        "MEMBROS: Sem edema."
      ],
      labs: [
        { test:"Urina tipo 1 — Leucocitúria", val:"++ (15-20 leucócitos/campo)", ref:"< 5/campo", alt: true },
        { test:"Urina tipo 1 — Nitrito", val:"POSITIVO", ref:"Negativo", alt: true },
        { test:"Urina tipo 1 — Hematúria", val:"+ (3-5 hemácias/campo)", ref:"< 2/campo", alt: true },
        { test:"Urina tipo 1 — Proteinúria", val:"Traços", ref:"Negativo", alt: false },
        { test:"Urina tipo 1 — pH", val:"6.0", ref:"4.5–8.0", alt: false },
        { test:"Urocultura (coleta na consulta)", val:"Aguardando resultado (48-72h)", ref:"< 10³ UFC/mL", alt: false },
        { test:"Beta-HCG urinário", val:"NEGATIVO", ref:"Negativo", alt: false },
        { test:"Hemograma — Leucócitos totais", val:"9.200/mm³", ref:"4.000–11.000/mm³", alt: false },
      ],
      image: null,
      note: "Urocultura: encaminhe resultado em 48-72h. Se o candidato não solicitar urocultura, ofereça apenas o EAS."
    },

    instC: {
      diagnosis: "Infecção do Trato Urinário Baixo Não Complicada (Cistite Aguda)",
      context: "Mulher jovem, imunocompetente, sem fatores de risco para complicação (sem gravidez, sem diabetes, sem anomalia urológica, sem cateterismo, sem internação recente). Apresentação clássica de cistite aguda com disúria, polaciúria e ausência de febre. EAS confirma infecção com leucocitúria, nitrito positivo e hematúria leve.",
      justify: "Critérios preenchidos: sintomas clássicos de ITU baixa (disúria + polaciúria) + EAS alterado (leucocitúria ++ e nitrito positivo) + ausência de sinais sistêmicos. Diagnóstico clínico-laboratorial.",
      script: [
        { trigger: "Queixa principal", speech: "Doutora(o), tô sentindo uma ardência muito chata pra urinar faz três dias. Fica aquela vontade o tempo todo, mas quando vou, sai pouco e ainda dói. Tá me atrapalhando até de trabalhar." },
        { trigger: "Sobre febre ou calafrios", speech: "Não, febre não tive não. Nem calafrio." },
        { trigger: "Sobre dor lombar ou nas costas", speech: "Não, nas costas não dói não. É mais aqui embaixo da barriga." },
        { trigger: "Sobre a cor da urina", speech: "Ontem notei que tava um pouquinho mais escura que o normal, mas hoje tá melhor." },
        { trigger: "Sobre náusea ou vômito", speech: "Não, tô bem nesse sentido." },
        { trigger: "Sobre corrimento vaginal", speech: "Não, tô normal nessa parte." },
        { trigger: "Sobre atividade sexual e preservativo", speech: "Tenho parceiro fixo. A gente usa camisinha às vezes, mas não sempre." },
        { trigger: "Sobre data da última menstruação", speech: "Foi há umas duas semanas, tô regular." },
        { trigger: "Sobre uso de anticoncepcional", speech: "Uso anticoncepcional oral, tomo direitinho." },
        { trigger: "Sobre episódios anteriores", speech: "Já tive isso umas duas vezes antes, no ano passado e no começo desse ano. Tomei um antibiótico e passou." },
        { trigger: "Sobre antecedentes médicos e cirúrgicos", speech: "Não tenho nenhuma doença, nunca operei nada." },
        { trigger: "Sobre alergias", speech: "Alergia a penicilina? Sim, tomei quando criança e fiquei toda manchada. O médico falou que era alergia." },
        { trigger: "Sobre hidratação e hábitos", speech: "Eu bebo pouca água, confesso. Fico o dia todo na sala de aula e às vezes seguro o xixi por horas." },
        { trigger: "Pergunta ativa — diagnóstico", speech: "O que eu tenho, doutora(o)? É grave?" },
        { trigger: "Pergunta ativa — tratamento", speech: "Vou precisar tomar antibiótico de novo? Tem algum jeito de não ficar repetindo tanto?" }
      ],
      pep: [
        { section: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE", items: [
          { item: "Apresenta-se pelo nome e função ao iniciar a consulta", score: 0.5 },
          { item: "Usa linguagem acessível, sem termos técnicos sem explicação", score: 0.5 },
          { item: "Demonstra empatia e escuta ativa (não interrompe, mantém contato visual)", score: 0.5 },
          { item: "Informa o diagnóstico e orienta a paciente de forma clara ao final", score: 0.5 }
        ]},
        { section: "ANAMNESE", items: [
          { item: "Investiga características da disúria e frequência (início, intensidade, polaciúria)", score: 0.5 },
          { item: "Pesquisa sintomas de ITU alta: febre, calafrios, dor lombar, náuseas/vômitos", score: 0.5 },
          { item: "Investiga hematúria, aspecto e odor da urina", score: 0.3 },
          { item: "Pergunta sobre antecedentes ginecológicos: DUM, corrimento, atividade sexual, preservativo, IST", score: 0.5 },
          { item: "Pesquisa fatores de risco: episódios anteriores, uso de antibióticos, alergias (inclui penicilina)", score: 0.5 },
          { item: "Investiga hábitos: ingesta hídrica, higiene, retenção urinária", score: 0.2 }
        ]},
        { section: "INVESTIGAÇÃO DIAGNÓSTICA", items: [
          { item: "Solicita exame físico com ênfase em abdome e punho-percussão lombar bilateral", score: 0.5 },
          { item: "Solicita EAS / Urina tipo 1", score: 0.5 },
          { item: "Solicita beta-HCG (para excluir gravidez em mulher em idade fértil)", score: 0.5 },
          { item: "Interpreta corretamente o EAS (leucocitúria + nitrito positivo = cistite)", score: 0.5 }
        ]},
        { section: "RACIOCÍNIO CLÍNICO", items: [
          { item: "Formula hipótese de ITU baixa / cistite aguda não complicada", score: 1.0 },
          { item: "Exclui ITU alta (pielonefrite) corretamente com base nos achados", score: 0.5 }
        ]},
        { section: "CONDUTA", items: [
          { item: "Prescreve antibiótico de primeira linha correto (evitando penicilina — reconhece a alergia relatada)", score: 0.5 },
          { item: "Orienta duração correta do antibiótico (3-7 dias)", score: 0.3 },
          { item: "Orienta medidas não farmacológicas: aumento de ingesta hídrica, higiene perineal, não reter urina, urinar após relação sexual", score: 0.5 },
          { item: "Solicita urocultura ou orienta sobre retorno com o resultado", score: 0.3 },
          { item: "Agenda retorno e orienta sinais de alarme para pielonefrite", score: 0.4 }
        ]}
      ],
      criticalErrors: [
        "Não investigar alergia a antibióticos e prescrever amoxicilina (penicilina) para paciente que relata alergia",
        "Tratar ITU alta suspeita (febre + dor lombar) com esquema oral curto de cistite",
        "Diagnosticar pielonefrite sem sinais sistêmicos presentes (febre, dor lombar, náuseas)",
        "Não solicitar beta-HCG em mulher em idade fértil antes de prescrever antibiótico",
        "Prescrever quinolona como primeira linha sem justificativa (fluoroquinolonas não são 1ª linha para cistite simples pelo MS)"
      ]
    },

    instD: {
      title: "ITU Não Complicada — Cistite Aguda",
      sections: [
        { h: "Definição e Epidemiologia", body: `<p>A infecção do trato urinário (ITU) é uma das infecções bacterianas mais frequentes na prática clínica, responsável por cerca de 25% das consultas de atenção primária em mulheres. Afeta predominantemente mulheres na proporção de 30:1 em relação a homens na faixa dos 20–50 anos. É classificada como <strong>não complicada</strong> quando ocorre em mulher adulta, não grávida, imunocompetente, sem anomalia urológica, sem cateter vesical e sem internação recente.</p>
        <p><strong>Agentes etiológicos mais frequentes (Brasil/SUS):</strong></p>
        <ul><li><em>Escherichia coli</em> (80–85% dos casos)</li><li><em>Staphylococcus saprophyticus</em> (5–15%, comum em mulheres jovens sexualmente ativas)</li><li><em>Klebsiella pneumoniae, Proteus mirabilis</em> (menos frequentes)</li></ul>` },
        { h: "Quadro Clínico", body: `<ul><li><strong>Disúria</strong>: ardência ou dor ao urinar (sintoma cardinal)</li><li><strong>Polaciúria</strong>: aumento da frequência urinária com pequenos volumes</li><li><strong>Urgência miccional</strong>: vontade imperiosa de urinar</li><li><strong>Hematúria macroscópica ou microscópica</strong>: presente em ~40% dos casos</li><li><strong>Ausência de febre e dor lombar</strong>: distingue de pielonefrite</li><li><strong>Desconforto suprapúbico</strong></li></ul>
        <p>⚠ <strong>Sinais de ALARME para ITU alta (pielonefrite):</strong> febre ≥38°C, calafrios, dor lombar/costovertebral, náuseas/vômitos, prostração. Nesses casos, NÃO tratar como cistite simples.</p>` },
        { h: "Diagnóstico", body: `<p><strong>Diagnóstico é CLÍNICO-LABORATORIAL.</strong> Em mulher jovem com sintomas típicos (≥2 sintomas clássicos), o VPP é >90% e pode-se iniciar tratamento sem exames.</p>
        <p><strong>EAS / Urina tipo 1:</strong></p>
        <ul><li>Leucocitúria ≥5 leucócitos/campo (sensibilidade 80–95%)</li><li>Nitrito positivo (bactérias gram-negativas; sensibilidade 50%, especificidade 95%)</li><li>Hematúria leve frequentemente associada</li></ul>
        <p><strong>Urocultura:</strong> indicada em ITU recorrente (≥3 episódios/ano), gravidez, ITU complicada, falha terapêutica, pielonefrite. <em>Não é obrigatória para cistite simples de primeiro episódio.</em></p>
        <p><strong>Beta-HCG:</strong> obrigatório em mulheres em idade fértil antes de prescrever antibiótico.</p>` },
        { h: "Tratamento — 1ª Linha (MS/SUS / RENAME)", body: `
        <div class="drug-box"><strong>Nitrofurantoína 100mg</strong> (macrocristais) — VO — 12/12h — 5 a 7 dias<br><em>1ª escolha pelo MS. Menor resistência. Não usar se TFG &lt; 30 mL/min.</em></div>
        <div class="drug-box"><strong>Fosfomicina trometamol 3g</strong> — VO — dose única<br><em>Alta adesão. Disponível em UBS. Excelente opção.</em></div>
        <div class="drug-box"><strong>Sulfametoxazol + Trimetoprim (SMX-TMP) 800/160mg</strong> — VO — 12/12h — 3 dias<br><em>Usar apenas se resistência local &lt;20%. No Brasil, resistência crescente da E. coli.</em></div>
        <p style="margin-top:12px"><strong>NÃO usar como 1ª linha:</strong> Fluoroquinolonas (ciprofloxacino), Amoxicilina isolada, Cefalexina. Reservar para casos específicos com urocultura.</p>
        <p><strong>Alergia a penicilina:</strong> uso de nitrofurantoína ou fosfomicina é seguro (sem cross-reatividade).</p>` },
        { h: "Medidas Não Farmacológicas", body: `<ul><li>Ingesta hídrica ≥2L/dia</li><li>Urinar após relação sexual</li><li>Higiene perineal correta (frente para trás)</li><li>Evitar retenção urinária prolongada</li><li>Evitar duchas vaginais</li><li>Trocar calcinha de algodão (evitar sintéticos)</li></ul>` },
        { h: "Critérios de Encaminhamento / Internação", body: `<ul><li>ITU complicada: gestante, imunocomprometida, anomalia urológica, cateter</li><li>Pielonefrite com critérios de internação (vômitos, febre alta, sepse)</li><li>ITU recorrente (≥3 episódios/ano): encaminhar para investigação urológica</li><li>Falha terapêutica após 48-72h: urocultura + ajuste por antibiograma</li></ul>` },
        { h: "Armadilhas Comuns no OSCE", body: `
        <div class="pitfall">Esquecer de investigar alergia medicamentosa ANTES de prescrever antibiótico.</div>
        <div class="pitfall">Não solicitar beta-HCG em mulher em idade fértil — gestação muda completamente a conduta.</div>
        <div class="pitfall">Diagnosticar pielonefrite sem febre ou dor lombar — confundir disúria + desconforto suprapúbico com dor lombar.</div>
        <div class="pitfall">Prescrever fluoroquinolona (ciprofloxacino) como 1ª linha — reservada para casos específicos, não para cistite simples.</div>
        <div class="pitfall">Não orientar medidas preventivas — ponto frequentemente cobrado em OSCE.</div>
        <div class="pitfall">Não investigar IST como diagnóstico diferencial em mulher sexualmente ativa (uretrite por Chlamydia pode mimetizar cistite).</div>` },
        { h: "Referências", body: `<ul class="ref-list"><li>Ministério da Saúde. Protocolo Clínico e Diretrizes Terapêuticas — Infecções do Trato Urinário. Brasília: MS, 2023.</li><li>Sociedade Brasileira de Infectologia (SBI). Diretrizes para ITU, 2022.</li><li>SBU — Sociedade Brasileira de Urologia. Urologia Brasil, 2022.</li><li>UpToDate: Acute simple cystitis in adult and adolescent females. 2024.</li><li>RENAME 2022 — Relação Nacional de Medicamentos Essenciais. Ministério da Saúde.</li></ul>` }
      ]
    }
  },

  // ── ESTAÇÃO 2: Pielonefrite (Mulher adulta, PS) ──────────────────────
  {
    id: 2,
    title: "Dor nas costas, febre e mal-estar há 2 dias",
    sub: "Pronto-Socorro — Urgência",
    tema: "nefrologia",
    topic: "itu",
    level: "moderado",
    cardAccent: "#4f9cf9",

    instA: {
      scenario: "Pronto-socorro de hospital de médio porte. Triagem de risco moderado (amarelo).",
      patient: "R.O., 34 anos, feminino, auxiliar de enfermagem, G1P1, sem comorbidades.",
      complaint: "Paciente refere febre alta, calafrios e dor intensa no lado direito das costas há 2 dias. Associa ardência ao urinar e náuseas. Nega gravidez.",
      tasks: [
        "Realizar anamnese completa e dirigida à queixa atual.",
        "Solicitar exame físico pertinente.",
        "Solicitar e interpretar exames laboratoriais e de imagem adequados.",
        "Formular hipótese diagnóstica e diagnósticos diferenciais.",
        "Definir conduta adequada.",
        "Orientar a paciente sobre o diagnóstico e seguimento."
      ]
    },

    instB: {
      vitals: { PA:"98/62 mmHg", FC:"112 bpm", FR:"22 irpm", Tax:"39.2°C", Peso:"62 kg", Altura:"1.65 m", IMC:"22.8 kg/m²" },
      physicalGeneral: "Paciente em estado geral regular, corada, hidratada, anictérica, febril, taquicárdica, com fácies de dor.",
      physicalSeg: [
        "ABDOME: Plano, doloroso à palpação profunda em flanco e fossa ilíaca direita. Sem defesa ou rigidez.",
        "PUNHO-PERCUSSÃO LOMBAR: POSITIVA à direita (dor intensa).",
        "GENITÁLIA EXTERNA: Sem alterações. Sem corrimento vaginal.",
        "MEMBROS: Sem edema. TEC < 3s.",
        "NEUROLÓGICO: Orientada, responsiva. SNC sem alterações focais."
      ],
      labs: [
        { test:"Hemograma — Leucócitos totais", val:"18.500/mm³", ref:"4.000–11.000", alt: true },
        { test:"Hemograma — Neutrófilos", val:"85% (desvio à esquerda)", ref:"55–65%", alt: true },
        { test:"PCR", val:"148 mg/L", ref:"< 5 mg/L", alt: true },
        { test:"Creatinina", val:"1.4 mg/dL", ref:"0.5–1.1 mg/dL", alt: true },
        { test:"Ureia", val:"42 mg/dL", ref:"17–42 mg/dL", alt: false },
        { test:"Sódio", val:"136 mEq/L", ref:"135–145", alt: false },
        { test:"Potássio", val:"4.1 mEq/L", ref:"3.5–5.0", alt: false },
        { test:"Lactato", val:"2.3 mmol/L", ref:"< 2.0 mmol/L", alt: true },
        { test:"Urina tipo 1 — Leucocitúria", val:"+++ (> 50/campo)", ref:"< 5/campo", alt: true },
        { test:"Urina tipo 1 — Nitrito", val:"POSITIVO", ref:"Negativo", alt: true },
        { test:"Urina tipo 1 — Cilindros leucocitários", val:"PRESENTES", ref:"Ausente", alt: true },
        { test:"Urocultura", val:"Coletada — resultado em 48-72h", ref:"< 10³ UFC/mL", alt: false },
        { test:"Hemocultura (2 amostras)", val:"Coletadas — resultado em 48-72h", ref:"Negativo", alt: false },
        { test:"Beta-HCG", val:"NEGATIVO", ref:"Negativo", alt: false },
      ],
      image: {
        title: "Ultrassonografia de Rins e Vias Urinárias",
        report: `LAUDO — ULTRASSONOGRAFIA DE RINS E VIAS URINÁRIAS
        
Rim direito: dimensões aumentadas (13,8 cm), com ecotextura heterogênea, edema difuso do parênquima. Sem dilatação pielocalicial. Sem cálculos identificados.
        
Rim esquerdo: dimensões normais (11,2 cm), ecotextura homogênea preservada.

Bexiga: paredes espessadas (>3mm), com conteúdo urinário normal.

CONCLUSÃO: Achados compatíveis com pielonefrite aguda à direita. Sem evidência de abscesso perirrenal ou hidronefrose. Sem litíase identificada.`
      }
    },

    instC: {
      diagnosis: "Pielonefrite Aguda com critérios de internação (sepse urinária incipiente)",
      context: "Mulher jovem com síndrome clínica de ITU alta: febre ≥38°C, calafrios, dor lombar com giordano positivo, associada a leucocitúria intensa, PCR elevado, leucocitose com desvio, e creatinina levemente elevada. PA baixa-normal, taquicardia e lactato discretamente elevado apontam para sepse urinária incipiente (qSOFA ≥2: FR≥22 + PA sistólica ≤100 + alteração de consciência ausente → qSOFA=2). Indicação de internação para antibiótico EV, hidratação e monitorização.",
      justify: "Pielonefrite aguda confirmada por: clínica típica + EAS com ++ leucocitúria + cilindros leucocitários + USG com alterações renais. Sepse urinária: FC>100, FR>22, PA<100, lactato >2.",
      script: [
        { trigger: "Queixa principal", speech: "Tô muito mal, doutor(a). Faz dois dias que tenho febre alta, calafrio, e essa dor nas costas do lado direito tá me matando. Fica pior quando me mexo." },
        { trigger: "Sobre ardência urinária", speech: "Sim, tô sentindo ardência pra urinar também, e vou ao banheiro mais vezes que o normal." },
        { trigger: "Sobre a intensidade da febre", speech: "Medi em casa, deu 39,4°C ontem à noite. Tomei dipirona e baixou um pouco, mas voltou." },
        { trigger: "Sobre náuseas e vômitos", speech: "Tô enjoada o tempo todo. Ontem vomitei duas vezes. Não consigo comer quase nada." },
        { trigger: "Sobre possível gravidez / DUM", speech: "Não, não estou grávida, fiz o teste agora há pouco. Menstruei há 3 semanas." },
        { trigger: "Sobre episódios anteriores de infecção urinária", speech: "Já tive cistite antes, umas 2 vezes, mas nunca assim, com febre e essa dor nas costas." },
        { trigger: "Sobre antecedentes médicos", speech: "Não tenho nenhuma doença crônica. Não operei nada. Não uso remédio regular. Não tenho alergia a remédio que eu saiba." },
        { trigger: "Sobre vida sexual e ISTs", speech: "Tenho parceiro fixo, a gente usa preservativo. Nunca tive DST." },
        { trigger: "Pergunta ativa — diagnóstico", speech: "O que eu tenho, doutor(a)? É sério? Vou precisar ficar internada?" },
        { trigger: "Pergunta ativa — se falarem em sepse", speech: "Meu Deus, sepse? Mas eu tava bem anteontem. Por que ficou tão grave?" }
      ],
      pep: [
        { section: "COMUNICAÇÃO", items: [
          { item: "Apresenta-se e acolhe a paciente em sofrimento com empatia", score: 0.5 },
          { item: "Explica o diagnóstico e a necessidade de internação de forma clara", score: 0.5 }
        ]},
        { section: "ANAMNESE", items: [
          { item: "Investiga características da febre (início, magnitude, padrão, calafrios)", score: 0.5 },
          { item: "Investiga dor lombar: lado, intensidade, irradiação, fatores de piora", score: 0.5 },
          { item: "Pesquisa sintomas de ITU baixa associados (disúria, polaciúria)", score: 0.3 },
          { item: "Investiga náuseas e vômitos (impede tratamento oral)", score: 0.3 },
          { item: "Pesquisa antecedentes: episódios anteriores, alergias, gestação", score: 0.4 }
        ]},
        { section: "AVALIAÇÃO DE SEPSE / EXAME FÍSICO", items: [
          { item: "Solicita exame físico completo com giordano e sinais vitais", score: 0.5 },
          { item: "Avalia critérios de sepse (qSOFA: FR, PA, Glasgow)", score: 0.5 },
          { item: "Interpreta corretamente a instabilidade hemodinâmica (taquicardia + PA bordeline)", score: 0.5 }
        ]},
        { section: "INVESTIGAÇÃO DIAGNÓSTICA", items: [
          { item: "Solicita EAS/urina tipo 1 e urocultura", score: 0.5 },
          { item: "Solicita hemograma, PCR, creatinina, eletrólitos, lactato", score: 0.5 },
          { item: "Solicita hemocultura (2 amostras antes de antibiótico)", score: 0.5 },
          { item: "Solicita USG de rins e vias urinárias", score: 0.3 },
          { item: "Formula hipótese de pielonefrite com sepse urinária", score: 1.0 }
        ]},
        { section: "CONDUTA", items: [
          { item: "Indica internação hospitalar (não trata ambulatorialmente)", score: 0.5 },
          { item: "Inicia antibiótico EV (ceftriaxona 1-2g/dia EV ou ciprofloxacino EV se beta-lactâmico contraindicado)", score: 0.5 },
          { item: "Prescreve hidratação venosa (SF 0,9% ou RL)", score: 0.4 },
          { item: "Prescreve analgesia/antipirético (dipirona ou paracetamol)", score: 0.3 },
          { item: "Programa transição para VO após afebril 24-48h e melhora clínica", score: 0.3 }
        ]}
      ],
      criticalErrors: [
        "Liberar a paciente com antibiótico oral sem reconhecer os critérios de internação (sepse urinária)",
        "Iniciar antibiótico EV antes de coletar hemocultura — perder janela de diagnóstico microbiológico",
        "Não investigar obstrução das vias urinárias (cálculo, tumor) que pode causar pielonefrite complicada",
        "Não dosar creatinina em paciente com suspeita de sepse (risco de IRA)",
        "Não calcular qSOFA / não reconhecer taquicardia e PA baixa como sinais de gravidade"
      ]
    },

    instD: {
      title: "Pielonefrite Aguda e Sepse Urinária",
      sections: [
        { h: "Definição e Classificação", body: `<p>Pielonefrite aguda (PNA) é a infecção bacteriana do parênquima e da pelve renal, configurando <strong>ITU alta</strong>. É considerada <strong>complicada</strong> quando associada a: gestação, diabetes, imunossupressão, anomalia urológica, obstrução, cateter, instrumentação recente ou sexo masculino.</p>
        <p><strong>Sepse urinária:</strong> resposta inflamatória sistêmica desencadeada por foco urinário. Diagnosticada pelo qSOFA (≥2): FR ≥22, PA sistólica ≤100, alteração do nível de consciência.</p>` },
        { h: "Quadro Clínico", body: `<ul><li><strong>Tríade clássica:</strong> febre ≥38°C + calafrios + dor lombar unilateral (ângulo costovertebral)</li><li>Giordano (punho-percussão lombar): positivo no lado afetado</li><li>Sintomas de cistite associados em ~50%: disúria, polaciúria</li><li>Náuseas e vômitos (impedem tratamento oral)</li><li>Prostração, mal-estar geral</li></ul>` },
        { h: "Diagnóstico e Exames", body: `<p><strong>Laboratoriais:</strong> EAS (leucocitúria intensa, cilindros leucocitários são patognomônicos), urocultura, hemocultura (2 amostras — 15–20% positivas), hemograma, PCR/VHS, creatinina, eletrólitos, lactato.</p>
        <p><strong>Imagem:</strong> USG de rins e vias urinárias para excluir obstrução/abscesso. TC preferível em falha terapêutica após 72h.</p>` },
        { h: "Tratamento", body: `<p><strong>Critérios de internação:</strong> vômitos (impossibilidade de VO), sepse/choque, gravidez, imunossupressão, falha ambulatorial, idoso, anomalia urológica.</p>
        <div class="drug-box"><strong>Ambulatorial (caso leve, sem vômitos):</strong><br>Ciprofloxacino 500mg VO 12/12h por 7-10 dias, OU<br>SMX-TMP 800/160mg VO 12/12h por 14 dias (se sensível)</div>
        <div class="drug-box"><strong>Hospitalar (EV — 1ª linha):</strong><br>Ceftriaxona 1-2g IV/IM 1x/dia por 10-14 dias<br>Ciprofloxacino 400mg EV 12/12h (se alergia a cefalosporina)<br>Transição para VO após 24-48h afebril e tolerância oral</div>
        <p><strong>Sempre:</strong> hidratação, analgesia, antitérmico. Ajustar antibiótico conforme antibiograma em 48-72h.</p>` },
        { h: "Armadilhas Comuns no OSCE", body: `
        <div class="pitfall">Tratar pielonefrite com nitrofurantoína — não atinge concentração adequada no parênquima renal. CONTRAINDICADA para PNA.</div>
        <div class="pitfall">Não coletar hemocultura antes do antibiótico — perda de informação microbiológica crucial.</div>
        <div class="pitfall">Liberar paciente com vômitos em tratamento oral — impossibilidade de absorção do antibiótico.</div>
        <div class="pitfall">Não aplicar qSOFA e não reconhecer sepse urinária — conduta inapropriada no PS.</div>
        <div class="pitfall">Confundir cilindros leucocitários com leucocitúria simples — cilindros são patognomônicos de infecção renal.</div>` },
        { h: "Referências", body: `<ul class="ref-list"><li>Ministério da Saúde. PCDT — Infecções do Trato Urinário. Brasília, 2023.</li><li>Surviving Sepsis Campaign Guidelines, 2021.</li><li>SBU — Diretrizes em Urologia, 2022.</li><li>UpToDate: Acute complicated urinary tract infections in adults. 2024.</li></ul>` }
      ]
    }
  },

  // ── ESTAÇÃO 3: Litíase Urinária — Cólica Renal (Mulher jovem, PS) ────
  // Baseado fielmente no caso do Revalida 2025.1 — Estação 7
  {
    id: 3,
    title: "Dor intensa no lado direito que irradia para a virilha",
    sub: "Pronto-Socorro — Urgência",
    tema: "nefrologia",
    topic: "litíase",
    level: "moderado",
    cardAccent: "#38d9a9",

    instA: {
      scenario: "Pronto-socorro de hospital geral. A paciente está visivelmente agitada e com fácies de dor, alternando entre sentar e deitar.",
      patient: "M.S., 24 anos, feminino, solteira, estudante universitária.",
      complaint: "Dor intensa no lado direito da barriga, de início súbito há cerca de 24 horas, que irradia para a virilha. Não consegue ficar parada.",
      tasks: [
        "Realizar anamnese completa e dirigida ao caso",
        "Solicitar e interpretar o exame físico",
        "Formular hipóteses diagnósticas e diferencias relevantes",
        "Solicitar exames laboratoriais pertinentes",
        "Solicitar exames de imagem adequados e interpretar resultados",
        "Definir hipótese diagnóstica final",
        "Indicar analgesia e conduta terapêutica",
        "Orientar a paciente para prevenção de novos episódios"
      ]
    },

    instB: {
      vitals: { PA:"124/80 mmHg", FC:"104 bpm", FR:"20 irpm", Tax:"37.1°C", Peso:"57 kg", Altura:"1.63 m", IMC:"21.4 kg/m²" },
      physicalGeneral: "Paciente em regular estado geral, agitada, em posição antálgica, com fácies de dor intensa. Afebril.",
      physicalSeg: [
        "ABDOME: Plano, tenso pela dor, doloroso à palpação profunda em flanco e fossa ilíaca direita. Sem defesa ou rigidez. Peristaltismo presente.",
        "PUNHO-PERCUSSÃO LOMBAR (GIORDANO): POSITIVO à direita. Negativo à esquerda.",
        "GENITÁLIA EXTERNA: Sem corrimento vaginal. Sem lesões.",
        "MEMBROS: Sem edema. Perfusão periférica preservada."
      ],
      labs: [
        { test:"Hemograma — Leucócitos", val:"11.200/mm³", ref:"4.000–11.000", alt: true },
        { test:"PCR", val:"18 mg/L", ref:"< 5 mg/L", alt: true },
        { test:"Creatinina", val:"0.9 mg/dL", ref:"0.5–1.1 mg/dL", alt: false },
        { test:"Sódio", val:"138 mEq/L", ref:"135–145", alt: false },
        { test:"Potássio", val:"3.8 mEq/L", ref:"3.5–5.0", alt: false },
        { test:"Urina tipo 1 — Hematúria", val:"+++ (> 50 hemácias/campo)", ref:"< 2/campo", alt: true },
        { test:"Urina tipo 1 — Leucocitúria", val:"Traços (2-3/campo)", ref:"< 5/campo", alt: false },
        { test:"Urina tipo 1 — Nitrito", val:"NEGATIVO", ref:"Negativo", alt: false },
        { test:"Beta-HCG urinário", val:"NEGATIVO", ref:"Negativo", alt: false },
      ],
      image: {
        title: "Exames de Imagem",
        report: `ULTRASSOM DE ABDOME TOTAL:
Hidronefrose à direita, sem evidência de fator obstrutivo identificável pelo método de imagem. Sem outros achados anormais.

─────────────────────────────────────────

TOMOGRAFIA COMPUTADORIZADA DE ABDOME SEM CONTRASTE:
Hidronefrose à direita, visualizando-se cálculo de 10 mm em junção ureterovesical.
Sem outros achados anormais.

CONCLUSÃO: Ureterolitíase à direita com cálculo de 10 mm em JUV — indicação de avaliação urológica urgente.`
      }
    },

    instC: {
      diagnosis: "Ureterolitíase / Litíase Urinária com cálculo de 10mm em junção ureterovesical direita",
      context: "Mulher jovem, sem comorbidades, com quadro clássico de cólica renal: dor em flanco de início súbito, cólica com irradiação para virilha, hematúria macroscópica e agitação psicomotora. Cálculo de 10mm em JUV: baixa probabilidade de eliminação espontânea (<10% para cálculos >8mm), indicando avaliação urológica urgente para terapia ativa.",
      justify: "Diagnóstico por: clínica típica de cólica renal + hematúria no EAS + hidronefrose ao USG + cálculo em JUV à TC sem contraste (padrão-ouro).",
      script: [
        { trigger: "Queixa principal", speech: "Doutor(a), tô sentindo uma dor horrível aqui no lado direito da barriga que começou do nada umas 24 horas atrás. Tá me matando. Fica como uma cólica que vai e vem, mas não passa. Irradia lá pra virilha e parte interna da coxa." },
        { trigger: "Sobre intensidade da dor", speech: "Nossa, é 9 de 10. Não consigo nem ficar parada. Fico tentando achar uma posição mas não tem jeito." },
        { trigger: "Sobre febre e calafrios", speech: "Não tenho febre não. Controlei em casa, tava normal." },
        { trigger: "Sobre disúria ou urgência urinária", speech: "Não, não sinto ardência pra urinar, nem urgência. Não tô indo mais que o normal ao banheiro." },
        { trigger: "Sobre a urina", speech: "Quando a dor começou eu percebi que a urina tava avermelhada, com sangue. Fiquei com muito medo." },
        { trigger: "Sobre náuseas", speech: "Sim, tô enjoada, mas não vomitei ainda." },
        { trigger: "Sobre episódio parecido anteriormente", speech: "Já tive uma dorzinha parecida uma vez, mas bem mais fraca. Passou sozinha. Nunca fiz exame pra isso." },
        { trigger: "Sobre corrimento vaginal ou dor pélvica", speech: "Não, tudo normal nessa parte. Sem corrimento, sem dor na relação." },
        { trigger: "Sobre data da última menstruação", speech: "Menstruei há 7 dias, normal." },
        { trigger: "Sobre antecedentes médicos", speech: "Não tenho doença nenhuma. Nunca operei. Não tomo nenhum remédio. Não tenho alergia que eu saiba." },
        { trigger: "Sobre histórico familiar de cálculo renal", speech: "Meu pai teve pedra no rim uma vez, mas nunca conversamos direito sobre isso." },
        { trigger: "Sobre hábitos", speech: "Bebo muito pouco líquido. Fico o dia todo estudando e às vezes esqueço de tomar água." },
        { trigger: "Pergunta ativa — diagnóstico", speech: "O que eu tenho, doutor(a)? É pedra no rim? Vai precisar operar?" },
        { trigger: "Pergunta ativa — prevenção", speech: "Como eu faço pra não ter isso de novo? É muito sofrido." }
      ],
      pep: [
        { section: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE", items: [
          { item: "Apresenta-se, acolhe a paciente em sofrimento com empatia", score: 0.5 },
          { item: "Informa o diagnóstico e orienta de forma clara", score: 0.5 }
        ]},
        { section: "ANAMNESE", items: [
          { item: "Investiga características da dor: local, tipo cólica, intensidade, irradiação, início súbito", score: 0.8 },
          { item: "Investiga manifestações associadas: náuseas/vômitos, febre, disúria, polaciúria, urgência miccional, hematúria", score: 0.8 },
          { item: "Investiga antecedentes ginecológicos: corrimento, DUM, atividade sexual, IST", score: 0.8 },
          { item: "Pesquisa antecedentes: episódios anteriores, história familiar, hábitos (ingesta hídrica)", score: 0.4 }
        ]},
        { section: "INVESTIGAÇÃO DIAGNÓSTICA", items: [
          { item: "Solicita e interpreta exame físico (giordano, abdome)", score: 0.5 },
          { item: "Solicita hemograma, PCR/VHS, creatinina/ureia, eletrólitos", score: 0.7 },
          { item: "Solicita EAS / urina tipo 1", score: 0.7 },
          { item: "Solicita beta-HCG (excluir gravidez ectópica)", score: 0.8 },
          { item: "Solicita TC de abdome sem contraste (padrão-ouro)", score: 1.0 },
          { item: "Solicita USG de abdome ou rins e vias urinárias", score: 0.5 }
        ]},
        { section: "RACIOCÍNIO CLÍNICO", items: [
          { item: "Define hipótese diagnóstica: ureterolitíase / litíase urinária / urolitíase / uropatia obstrutiva por cálculo", score: 2.0 }
        ]},
        { section: "CONDUTA", items: [
          { item: "Indica analgesia especificando a droga: AINE (cetoprofeno, ibuprofeno, diclofenaco) ou opioide (morfina, tramadol) ou dipirona EV", score: 1.0 },
          { item: "Encaminha para avaliação urológica urgente OU prescreve terapia expulsiva (tansulosina 0,4mg/dia)", score: 1.0 },
          { item: "Orienta prevenção de novos episódios: ↑ ingesta hídrica, ↓ sódio, ↓ oxalato, manter IMC normal", score: 0.5 }
        ]}
      ],
      criticalErrors: [
        "Não solicitar beta-HCG em mulher em idade fértil — gravidez ectópica pode mimetizar cólica renal com hematúria",
        "Usar apenas USG sem TC — USG não visualizou o cálculo neste caso; TC é padrão-ouro e imprescindível",
        "Prescrever antibiótico sem evidência de infecção — leucocitúria estava normal e nitrito negativo",
        "Liberar a paciente sem analgesia adequada — cólica renal é emergência analgésica",
        "Não encaminhar para urologia — cálculo de 10mm em JUV tem <10% de chance de eliminação espontânea e necessita de intervenção"
      ]
    },

    instD: {
      title: "Litíase Urinária — Ureterolitíase / Cólica Renal",
      sections: [
        { h: "Definição e Epidemiologia", body: `<p>A litíase urinária é a presença de cálculos em qualquer porção do trato urinário (rim, ureter, bexiga). Afeta 5–10% da população brasileira, com pico na 3ª–5ª décadas, e recorrência de ~50% em 10 anos. Predomina em homens (2:1), mas é frequente em mulheres jovens.</p>
        <p><strong>Composição dos cálculos:</strong> oxalato de cálcio (80%), ácido úrico (10%), estruvita (infecção – 5%), cistina (1–2%).</p>` },
        { h: "Quadro Clínico — Cólica Renal", body: `<ul><li><strong>Dor lombar ou flanco de início súbito</strong>, tipo cólica, intensa (9-10/10)</li><li><strong>Irradiação</strong> para fossa ilíaca, virilha, escroto/lábio maior, face interna da coxa</li><li><strong>Agitação psicomotora</strong>: paciente não encontra posição de alívio (diferente da peritonite)</li><li><strong>Hematúria</strong>: macro (20%) ou micro (90%)</li><li>Náuseas e vômitos frequentes</li><li><strong>Ausência de febre</strong> (febre = infecção associada = urgência cirúrgica)</li></ul>
        <p><strong>Localização e probabilidade de eliminação espontânea:</strong></p>
        <ul><li>&lt;4mm: ~80% de eliminação espontânea</li><li>4–6mm: ~60%</li><li>6–8mm: ~20–40%</li><li>&gt;8mm: &lt;10% — necessita intervenção</li></ul>` },
        { h: "Diagnóstico e Exames", body: `<p><strong>EAS/Urina tipo 1:</strong> hematúria micro ou macroscópica em ~90% dos casos. Nitrito negativo (diferencia de ITU).</p>
        <p><strong>Beta-HCG:</strong> OBRIGATÓRIO em mulheres em idade fértil — gravidez ectópica é o principal diagnóstico diferencial.</p>
        <p><strong>Hemograma, creatinina, eletrólitos, PCR:</strong> avaliar função renal e infecção.</p>
        <p><strong>Imagem:</strong></p>
        <ul><li><strong>TC de abdome sem contraste:</strong> PADRÃO-OURO. Sensibilidade 97%, especificidade 96%. Visualiza cálculos de qualquer composição.</li><li><strong>USG de rins e vias urinárias:</strong> 1ª opção na gestante e em crianças. Pode não visualizar cálculos pequenos no ureter (como neste caso).</li><li><strong>Radiografia simples de abdome:</strong> baixa sensibilidade (20-40%), só visualiza cálculos radiopacos.</li></ul>` },
        { h: "Tratamento — Analgesia", body: `
        <div class="drug-box"><strong>AINEs (1ª escolha):</strong><br>Cetoprofeno 100mg EV em 100mL SF 0,9% por 20min, ou<br>Ibuprofeno 600mg VO, ou Diclofenaco 75mg IM<br><em>Reduzem espasmo ureteral e inflamação. Excelente controle álgico.</em></div>
        <div class="drug-box"><strong>Opioides (dor refratária):</strong><br>Tramadol 100mg EV ou Morfina 2-4mg EV em bolus<br><em>Associar a AINE quando necessário.</em></div>
        <div class="drug-box"><strong>Dipirona:</strong><br>1-2g EV diluído — adjuvante analgésico eficaz</div>` },
        { h: "Terapia Expulsiva e Intervenção Urológica", body: `<p><strong>Terapia expulsiva (cálculos ≤6-8mm sem complicação):</strong><br>Tansulosina 0,4mg/dia VO (alfabloqueador) — relaxa musculatura ureteral, aumenta chance de eliminação espontânea. Manter por 4 semanas.</p>
        <p><strong>Indicações de intervenção urológica urgente:</strong></p>
        <ul><li>Cálculo &gt;8-10mm (baixa probabilidade de eliminação espontânea)</li><li>Febre associada (pielonefrite obstrutiva — emergência!)</li><li>Dor intratável</li><li>Anúria / insuficiência renal</li><li>Rim único obstruído</li></ul>
        <p><strong>Procedimentos disponíveis:</strong> Litotripsia extracorpórea por ondas de choque (LECO), Ureteroscopia com laser, Nefrolitotomia percutânea (cálculos grandes).</p>` },
        { h: "Prevenção de Novos Episódios", body: `<ul><li>↑ Ingesta hídrica: ≥2,5L/dia (diurese >2L/dia)</li><li>↓ Ingesta de sal (sódio &lt;2g/dia)</li><li>↓ Oxalato: evitar espinafre, acelga, chocolate, castanha em excesso</li><li>↓ Proteína animal</li><li>↑ Citrato: sucos cítricos (limão, laranja)</li><li>Manter IMC normal</li><li>Não restringir cálcio dietético (paradoxal: aumenta litíase)</li></ul>` },
        { h: "Armadilhas Comuns no OSCE", body: `
        <div class="pitfall">Não solicitar beta-HCG — a gravidez ectópica mata e mimetiza a cólica renal.</div>
        <div class="pitfall">Basear o diagnóstico apenas no USG — o USG pode não ver o cálculo no ureter; a TC é imprescindível.</div>
        <div class="pitfall">Tratar como ITU sem evidência de infecção — hematúria ≠ infecção; checar leucocitúria e nitrito.</div>
        <div class="pitfall">Esquecer de prescrever analgesia — cólica renal é emergência analgésica, não deixar o paciente com dor.</div>
        <div class="pitfall">Liberar cálculo de 10mm sem encaminhamento urológico — probabilidade de eliminação espontânea &lt;10%.</div>
        <div class="pitfall">Não orientar prevenção — causa recorrência de ~50% em 10 anos.</div>` },
        { h: "Referências", body: `<ul class="ref-list"><li>SBU — Sociedade Brasileira de Urologia. Urologia Brasil, 2022.</li><li>EAU Guidelines on Urolithiasis. European Association of Urology, 2024.</li><li>Ministério da Saúde / INEP. PEP Revalida 2025.1 — Estação 7 Cirurgia Geral.</li><li>UpToDate: Kidney stones in adults: Diagnosis and acute management. 2024.</li><li>UpToDate: Prevention of recurrent calcium stones in adults. 2024.</li></ul>` }
      ]
    }
  },

  // ── ESTAÇÃO 4: Litíase + ITU / Pielonefrite Obstrutiva (Homem, adulto) ─
  {
    id: 4,
    title: "Homem com dor lombar intensa, febre e cólica desde ontem",
    sub: "Pronto-Socorro — Alta complexidade",
    tema: "urologia",
    topic: "litíase",
    level: "complexo",
    cardAccent: "#38d9a9",

    instA: {
      scenario: "Pronto-socorro de hospital terciário. Paciente encaminhado pela UBS com queixa de dor intensa em flanco esquerdo há ~18 horas, associada a febre.",
      patient: "A.M., 48 anos, masculino, motorista de caminhão, hipertenso em uso de losartana.",
      complaint: "Dor em flanco esquerdo de início súbito há cerca de 18 horas, tipo cólica, com irradiação para a virilha. Desde a madrugada apresenta febre alta e calafrios. Nega ITU anterior.",
      tasks: [
        "Realizar anamnese completa e dirigida ao quadro atual.",
        "Solicitar exame físico pertinente.",
        "Solicitar exames laboratoriais e de imagem adequados.",
        "Formular hipótese diagnóstica e diagnósticos diferenciais.",
        "Definir a conduta adequada com justificativa clínica.",
        "Comunicar ao paciente o diagnóstico e a conduta de forma clara."
      ]
    },

    instB: {
      vitals: { PA:"88/56 mmHg", FC:"126 bpm", FR:"24 irpm", Tax:"39.8°C", Peso:"82 kg", Altura:"1.74 m", IMC:"27.1 kg/m²" },
      physicalGeneral: "Paciente em mau estado geral, pálido, diaforético, taquicárdico, febril, com fácies de dor e prostração. Fala entrecortada.",
      physicalSeg: [
        "ABDOME: Distendido levemente, doloroso em flanco esquerdo. Sem rigidez abdominal. RHA diminuídos.",
        "PUNHO-PERCUSSÃO LOMBAR: POSITIVO intensamente à esquerda. Negativo à direita.",
        "MEMBROS: TEC 4s (aumentado). Extremidades frias e pegajosas.",
        "NEUROLÓGICO: Sonolento, responsivo ao chamado. Glasgow 14 (desorientação temporal)."
      ],
      labs: [
        { test:"Leucócitos totais", val:"22.400/mm³ (desvio à esq., blastos)", ref:"4.000–11.000", alt: true },
        { test:"PCR", val:"312 mg/L", ref:"< 5 mg/L", alt: true },
        { test:"Creatinina", val:"3.2 mg/dL (BASAL: 0.9 conforme referido)", ref:"0.7–1.2 mg/dL", alt: true },
        { test:"Ureia", val:"88 mg/dL", ref:"17–42 mg/dL", alt: true },
        { test:"Sódio", val:"132 mEq/L", ref:"135–145", alt: true },
        { test:"Potássio", val:"5.6 mEq/L", ref:"3.5–5.0", alt: true },
        { test:"Lactato", val:"5.8 mmol/L", ref:"< 2.0 mmol/L", alt: true },
        { test:"EAS — Leucocitúria", val:"+++ (campo cheio)", ref:"< 5/campo", alt: true },
        { test:"EAS — Nitrito", val:"POSITIVO", ref:"Negativo", alt: true },
        { test:"EAS — Hematúria", val:"++ (20-30/campo)", ref:"< 2/campo", alt: true },
        { test:"Urocultura + Hemocultura", val:"Coletadas — resultado pendente", ref:"—", alt: false }
      ],
      image: {
        title: "TC de Abdome e Pelve sem Contraste — URGÊNCIA",
        report: `LAUDO — TOMOGRAFIA COMPUTADORIZADA DE ABDOME E PELVE SEM CONTRASTE

Rim esquerdo: HIDRONEFROSE GRAU III à esquerda. Cálculo de 8mm em ureter proximal esquerdo (U1), imediatamente abaixo da junção ureteropélvica. Espessamento da gordura perirrenal compatível com processo inflamatório/infeccioso periférico. Sem abscesso perirrenal identificado.

Rim direito: dimensões normais, ecotextura homogênea. Sem dilatação pielocalicial.

Bexiga: adequadamente repleta. Sem alterações endoluminais.

CONCLUSÃO:
— Ureterolitíase proximal esquerda (8mm em U1) com hidronefrose grau III
— Achados compatíveis com pielonefrite obstrutiva à esquerda
— EMERGÊNCIA UROLÓGICA: indicação de descompressão urgente da via urinária`
      }
    },

    instC: {
      diagnosis: "Pielonefrite Obstrutiva por Ureterolitíase — Choque Séptico de Foco Urinário",
      context: "Homem de meia-idade com cálculo ureteral proximal obstruindo o rim esquerdo e levando a infecção suprajacente (pielonefrite obstrutiva). Evolução para choque séptico: PA 88/56 + FC 126 + lactato 5.8 + Glasgow 14 + IRA (creatinina 3.2). Esta é uma EMERGÊNCIA CIRÚRGICA/UROLÓGICA: antibiótico EV + descompressão urgente da via urinária (cateter JJ duplo J ou nefrostomia percutânea) são obrigatórios. O cálculo em si NÃO deve ser retirado neste momento de instabilidade.",
      justify: "Choque séptico: hipotensão + lactato >2 + disfunção orgânica (IRA). Foco: obstrutivo urinário confirmado por TC. Emergência: rim obstruído + infectado = urgência urológica.",
      script: [
        { trigger: "Queixa principal", speech: "Doutor(a), tô muito mal. Essa dor começou ontem no lado esquerdo, tô com febre alta desde a madrugada e tô me sentindo cada vez pior. A dor foi acalmando um pouco, mas agora tô sem força nenhuma." },
        { trigger: "Sobre a melhora relativa da cólica", speech: "É... estranhamente a dor da cólica diminuiu um pouco, mas fiquei pior do resto. Tô aqui sem força, suando frio." },
        { trigger: "Sobre febre e calafrios", speech: "Sim, febre alta, medindo quase 40 em casa. E tô com muito calafrio, tremendo." },
        { trigger: "Sobre a urina", speech: "Ontem tava com sangue, mas agora tô urinando menos, quase nada." },
        { trigger: "Sobre antecedentes", speech: "Tenho pressão alta, tomo losartana 50mg por dia. Nunca tive problema no rim antes. Às vezes tenho dor nas costas, mas achava que era do trabalho de motorista." },
        { trigger: "Sobre uso de anti-inflamatório ou dipirona", speech: "Tomei ibuprofeno em casa ontem, mas não ajudou. Depois tomei dipirona mas também não melhorou." },
        { trigger: "Sobre histórico familiar de cálculo renal", speech: "Meu irmão teve pedra no rim, sim." },
        { trigger: "Pergunta ativa — gravidade", speech: "Doutor(a), tô com muito medo. Isso é grave? Vou ficar bom?" }
      ],
      pep: [
        { section: "COMUNICAÇÃO", items: [
          { item: "Reconhece urgência, é objetivo e tranquilizador sem minimizar a gravidade", score: 0.5 },
          { item: "Explica ao paciente o diagnóstico e a necessidade de intervenção urgente com empatia", score: 0.5 }
        ]},
        { section: "ANAMNESE", items: [
          { item: "Identifica dor cólica prévia com melhora relativa — sinal de alarme em infecção obstrutiva", score: 0.5 },
          { item: "Investiga febre, calafrios e prostração como sinal de complicação sistêmica", score: 0.5 },
          { item: "Pesquisa redução do débito urinário (oligúria)", score: 0.5 },
          { item: "Investiga antecedentes: HAS, medicamentos (losartana), histórico familiar de litíase", score: 0.4 }
        ]},
        { section: "RECONHECIMENTO DE GRAVIDADE / EXAME FÍSICO", items: [
          { item: "Solicita exame físico e identifica hipotensão + taquicardia + TEC aumentado = choque", score: 0.5 },
          { item: "Aplica critérios de sepse/choque séptico (qSOFA, SOFA, lactato)", score: 0.5 },
          { item: "Reconhece melhora da cólica + piora sistêmica como sinal de obstrução com infecção", score: 0.5 }
        ]},
        { section: "INVESTIGAÇÃO", items: [
          { item: "Solicita lactato, hemograma, PCR, creatinina, eletrólitos urgentes", score: 0.5 },
          { item: "Solicita urocultura e hemocultura (2 amostras) antes do antibiótico", score: 0.5 },
          { item: "Solicita TC de abdome sem contraste (confirma cálculo e hidronefrose)", score: 0.5 },
          { item: "Identifica corretamente: ureterolitíase com pielonefrite obstrutiva + choque séptico", score: 1.0 }
        ]},
        { section: "CONDUTA DE EMERGÊNCIA", items: [
          { item: "Inicia antibiótico EV imediatamente (ceftriaxona ou piperacilina-tazobactam em sepse grave)", score: 0.5 },
          { item: "Acessa venoso calibroso + ressuscitação volêmica (30mL/kg SF 0,9% ou RL na 1ª hora)", score: 0.5 },
          { item: "Aciona urologia de urgência para descompressão da via urinária (cateter duplo-J ou nefrostomia)", score: 1.0 },
          { item: "Orienta que o cálculo NÃO deve ser retirado agora (instabilidade hemodinâmica)", score: 0.5 },
          { item: "Monitora débito urinário e considera UTI", score: 0.4 }
        ]}
      ],
      criticalErrors: [
        "Não reconhecer o choque séptico — PA 88/56 + lactato 5.8 = emergência hemdinâmica imediata",
        "Não acionar urologia para descompressão — rim obstruído + infectado sem drenagem é fatal",
        "Iniciar antibiótico sem coletar hemocultura e urocultura — janela perdida irrecuperável",
        "Tentar remover o cálculo por litotripsia em paciente em choque — contraindicado na fase aguda",
        "Não monitorar débito urinário — oligúria + creatinina 3.2 = IRA estabelecida, risco de hipercalemia grave"
      ]
    },

    instD: {
      title: "Pielonefrite Obstrutiva — Emergência Urológica",
      sections: [
        { h: "Definição e Fisiopatologia", body: `<p>Pielonefrite obstrutiva ocorre quando um cálculo (ou outra causa) bloqueia o fluxo urinário e uma infecção se instala a montante da obstrução. A combinação é devastadora: o urosepse (sepse de foco urinário obstrutivo) tem mortalidade de até 30–50% se não tratada em horas.</p>
        <p><strong>Sinal clínico característico:</strong> melhora relativa da cólica seguida de piora sistêmica — a pressão do sistema infectado "para" a cólica por distensão máxima, mas o processo infeccioso avança rapidamente.</p>` },
        { h: "Diagnóstico de Choque Séptico", body: `<p><strong>Sepse 3.0 (SOFA-based):</strong> disfunção orgânica ameaçadora à vida desencadeada por infecção. <strong>Choque séptico:</strong> sepse + hipotensão refratária + lactato >2 mmol/L após ressuscitação.</p>
        <p><strong>Disfunções identificadas neste caso:</strong></p>
        <ul><li>Cardiovascular: PA 88/56, FC 126 (choque)</li><li>Renal: creatinina 3.2 (IRA)</li><li>Neurológico: Glasgow 14</li><li>Lactato 5.8 (hipoperfusão tecidual grave)</li></ul>` },
        { h: "Conduta — As 3 Prioridades Simultâneas", body: `
        <div class="drug-box"><strong>1. RESSUSCITAÇÃO HEMODINÂMICA (1ª hora):</strong><br>SF 0,9% ou Ringer Lactato 30mL/kg em bolus IV rápido<br>Noradrenalina se PA não responder (alvo PAM ≥65 mmHg)<br>Monitorização contínua + acesso venoso calibroso (jelco 14-16G)</div>
        <div class="drug-box"><strong>2. ANTIBIOTICOTERAPIA EV (dentro de 1h — após culturas):</strong><br>Piperacilina-tazobactam 4,5g EV 6/6h (cobertura ampla em choque)<br>OU Ceftriaxona 2g EV 1x/dia + Metronidazol se anaeróbio suspeito<br>Ajustar conforme antibiograma em 48-72h</div>
        <div class="drug-box"><strong>3. DESCOMPRESSÃO UROLÓGICA URGENTE:</strong><br>Cateter ureteral duplo-J (stent JJ) — preferido se possível<br>OU Nefrostomia percutânea — quando ureteroscopia impossível<br>NÃO remover o cálculo agora — instabilidade hemodinâmica é contraindicação absoluta</div>` },
        { h: "Após Estabilização", body: `<ul><li>Internação em UTI ou semi-intensiva com monitorização contínua</li><li>Controle de diurese horária (meta >0,5mL/kg/h)</li><li>Antibioticoterapia por 10-14 dias com ajuste por antibiograma</li><li>Retirada do cálculo eletiva após resolução da infecção (2-4 semanas): ureteroscopia com laser ou LECO</li><li>Investigação de litíase metabólica: urina de 24h, perfil metabólico</li></ul>` },
        { h: "Armadilhas Comuns no OSCE", body: `
        <div class="pitfall">Não reconhecer a melhora da cólica como sinal de alarme — pressão alta = infecção avançando.</div>
        <div class="pitfall">Tentar litotripsia ou ureteroscopia em paciente instável — aguardar estabilização hemodinâmica.</div>
        <div class="pitfall">Não considerar hipercalemia em paciente com IRA + oligúria (potássio 5.6 pode piorar).</div>
        <div class="pitfall">Não chamar urologia imediatamente — tempo é rim. Cada hora sem drenagem aumenta dano renal permanente.</div>` },
        { h: "Referências", body: `<ul class="ref-list"><li>EAU Guidelines on Urological Infections, 2024.</li><li>Singer M et al. The Third International Consensus Definitions for Sepsis. JAMA, 2016.</li><li>SBU — Sociedade Brasileira de Urologia. Diretrizes em Urologia, 2022.</li><li>UpToDate: Kidney stones in adults: Surgical management. 2024.</li><li>Surviving Sepsis Campaign: International Guidelines. Crit Care Med, 2021.</li></ul>` }
      ]
    }
  }
];

const endocrineStations = [
   // ── ESTAÇÃO 5: Hipotireoidismo Primário (Mulher, adulta) ─
  {
    id: 1,
    title: "Cansaço progressivo, ganho de peso e queda de cabelo",
    sub: "UBS · Clínica Médica",
    tema: "endocrinologia",
    topic: "tireoide",
    level: "moderado",
    cardAccent: "#4a6fa5",
    instA: {
      scenario: "Você está no ambulatório de clínica médica de uma UBS.",
      patient: "M.S.A., 52 anos, sexo feminino, comerciante.",
      complaint: "Paciente relata cansaço progressivo há 6 meses, ganho de peso de 8 kg e queda de cabelo.",
      tasks: [
        "Realizar anamnese direcionada",
        "Solicitar exame físico pertinente",
        "Formular hipóteses diagnósticas",
        "Solicitar exames complementares adequados",
        "Orientar a paciente sobre a conduta",
        "Prescrever tratamento inicial se indicado"
      ]
    },
    instB: {
      vitals: {
        PA: "130/85 mmHg",
        FC: "58 bpm",
        FR: "14 irpm",
        Tax: "35.8°C",
        Peso: "78 kg",
        Altura: "1.62 m",
        IMC: "29.7 kg/m²"
      },
      physicalGeneral: "Fácies com edema periorbitário discreto, expressão apática; pele seca, fria e descamativa; cabelos quebradiços e rarefação difusa; unhas quebradiças; mucosas coradas e hidratadas.",
      physicalSeg: [
        "Tireoide: volume normal, consistência fibroelástica, móvel à deglutição, sem nódulos palpáveis.",
        "Cardiovascular: RCR 2T, BNF, sem sopros; pulsos periféricos simétricos e de amplitude reduzida.",
        "Respiratório: MV presente bilateralmente, sem RA.",
        "Abdome: plano, flácido, RHA presentes, indolor à palpação, sem visceromegalias.",
        "Membros: edema 1+/4+ em membros inferiores até tornozelos; reflexo aquileu com fase de relaxamento lentificada bilateralmente."
      ],
      labs: [
        { test: "TSH", val: "18.5 μUI/mL", ref: "0.4 - 4.0", alt: true },
        { test: "T4 livre", val: "0.6 ng/dL", ref: "0.8 - 1.8", alt: true },
        { test: "Anti-TPO", val: "485 UI/mL", ref: "< 35", alt: true },
        { test: "Hemoglobina", val: "11.2 g/dL", ref: "12.0 - 16.0", alt: false },
        { test: "Colesterol total", val: "268 mg/dL", ref: "< 200", alt: true },
        { test: "LDL", val: "178 mg/dL", ref: "< 130", alt: true },
        { test: "Glicemia jejum", val: "92 mg/dL", ref: "70 - 100", alt: false },
        { test: "Creatinina", val: "1.1 mg/dL", ref: "0.6 - 1.2", alt: false }
      ]
    },
    instC: {
      diagnosis: "Hipotireoidismo primário (Tireoidite de Hashimoto)",
      context: "Mulher de 52 anos com sintomas clássicos de hipotireoidismo: astenia progressiva, ganho de peso, intolerância ao frio, alterações de pele e cabelo, bradicardia, edema e lentificação do reflexo aquileu. Exames confirmam TSH elevado, T4 livre baixo e anti-TPO positivo, compatíveis com tireoidite autoimune.",
      justify: "Critérios preenchidos: sintomatologia clínica típica de hipotireoidismo associada a exames laboratoriais de tireoidite de Hashimoto.",
      script: [
        { trigger: "Queixa principal", speech: "Doutora, estou muito cansada há uns 6 meses, não tenho vontade de fazer nada." },
        { trigger: "Quando perguntado sobre ganho de peso", speech: "Engordei 8 quilos nesse tempo, mesmo comendo igual." },
        { trigger: "Sobre temperatura", speech: "Sinto muito frio, preciso usar casaco quando todo mundo está de manga curta." },
        { trigger: "Sobre intestino", speech: "Estou muito presa, vou ao banheiro 2 vezes por semana só." },
        { trigger: "Sobre cabelo", speech: "Meu cabelo está caindo muito, está ralo e quebradiço." },
        { trigger: "Sobre pele", speech: "A pele ficou muito seca, principalmente nas pernas." },
        { trigger: "Sobre ciclo menstrual", speech: "Minha menstruação sempre foi desregulada, agora está vindo de 2 em 2 meses, mais forte." },
        { trigger: "Antecedentes", speech: "Tenho pressão alta controlada com losartana." },
        { trigger: "História familiar", speech: "Minha mãe teve problema na tireoide, tomava um remedinho." },
        { trigger: "Perguntas do paciente", speech: "O que eu tenho, doutora? É grave? Tem cura? Vou precisar tomar remédio sempre?" }
      ],
      pep: [
        { item: "Identificação e apresentação adequada", score: 0.5 },
        { item: "Investigou duração e evolução da astenia", score: 0.5 },
        { item: "Perguntou sobre ganho de peso", score: 0.5 },
        { item: "Investigou intolerância ao frio", score: 0.5 },
        { item: "Perguntou sobre alterações de pele e cabelo", score: 0.5 },
        { item: "Investigou função intestinal", score: 0.5 },
        { item: "Perguntou sobre ciclo menstrual", score: 0.5 },
        { item: "Investigou antecedentes pessoais e familiares", score: 0.5 },
        { item: "Solicitou exame físico completo incluindo tireoide", score: 1.0 },
        { item: "Pesquisou reflexo aquileu", score: 0.5 },
        { item: "Formulou hipótese de hipotireoidismo", score: 1.0 },
        { item: "Solicitou TSH e T4 livre", score: 1.0 },
        { item: "Solicitou anticorpos antitireoidianos (anti-TPO)", score: 0.5 },
        { item: "Explicou o diagnóstico em linguagem clara", score: 0.5 },
        { item: "Prescreveu levotiroxina na dose adequada", score: 1.0 },
        { item: "Orientou horário e forma de tomar a medicação", score: 0.5 }
      ],
      criticalErrors: [
        "Não solicitar TSH como exame inicial",
        "Iniciar tratamento sem confirmação laboratorial",
        "Prescrever dose inadequada de levotiroxina (< 1.6 mcg/kg ou > 100 mcg inicial)",
        "Não orientar sobre uso em jejum"
      ]
    },
    instD: {
      title: "Hipotireoidismo Primário",
      sections: [
        {
          h: "Definição e Etiologia",
          body: `<p>O hipotireoidismo primário é a síndrome clínica resultante da produção insuficiente de hormônios tireoidianos pela glândula tireoide. A causa mais comum em áreas suficientes em iodo é a tireoidite de Hashimoto (autoimune crônica).</p><p>Principais causas no Brasil:</p><ul><li>Tireoidite de Hashimoto (autoimune) — 80-90% dos casos</li><li>Iatrogênica: pós-radioiodo, pós-tireoidectomia</li><li>Induzida por medicamentos: amiodarona, lítio, interferon</li><li>Deficiência de iodo (rara no Brasil após fortificação do sal)</li></ul>`
        },
        {
          h: "Quadro Clínico",
          body: `<ul><li>Astenia e fadiga progressiva</li><li>Ganho de peso (5-10 kg) com apetite normal ou reduzido</li><li>Intolerância ao frio</li><li>Constipação intestinal</li><li>Pele seca, fria, áspera e descamativa</li><li>Cabelos e unhas quebradiços</li><li>Edema periorbitário e de membros</li><li>Rouquidão</li><li>Bradicardia</li><li>Hipertensão diastólica leve</li><li>Alterações menstruais: oligomenorreia, menorragia</li><li>Lentificação psicomotora e déficit de memória</li><li>Sinal clássico: lentificação da fase de relaxamento do reflexo aquileu.</li></ul>`
        },
        {
          h: "Diagnóstico Laboratorial",
          body: `<p>Padrão ouro: TSH elevado e T4 livre baixo.</p><table><tr><th>Exame</th><th>Hipotireoidismo manifesto</th><th>Hipotireoidismo subclínico</th></tr><tr><td>TSH</td><td>> 10 μUI/mL</td><td>4.0 - 10 μUI/mL</td></tr><tr><td>T4 livre</td><td>< 0.8 ng/dL</td><td>Normal (0.8 - 1.8)</td></tr></table><p>Anti-TPO positivo confirma etiologia autoimune (Hashimoto).</p><p>Outros achados: dislipidemia, anemia normo/normo ou macro/normo, CPK elevado, TGO/TGP levemente elevados, hiponatremia em casos graves.</p>`
        }
      ]
    }
  },
  // ── ESTAÇÃO 6: Síndrome dos Ovários Policísticos (Mulher, adulta) ─
  {
    id: 2,
    title: "Paciente refere ausência de menstruação há 5 meses e ganho de peso progressivo.",
    sub: "Ambulatório de Ginecologia — Hospital Secundário",
    tema: "endocrinologia",
    topic: "endocrinologia feminina",
    level: "moderado",
    cardAccent: "#d16d6f",
    instA: {
      scenario: "Você está no ambulatório de ginecologia de um hospital secundário.",
      patient: "J.C.S., 28 anos, sexo feminino, professora.",
      complaint: "Paciente refere ausência de menstruação há 5 meses e ganho de peso progressivo.",
      tasks: [
        "Realizar anamnese ginecológica completa",
        "Investigar sintomas associados",
        "Solicitar exame físico pertinente",
        "Formular principais hipóteses diagnósticas",
        "Solicitar exames complementares adequados",
        "Orientar a paciente sobre as possibilidades diagnósticas"
      ]
    },
    instB: {
      vitals: {
        PA: "125/80 mmHg",
        FC: "78 bpm",
        Peso: "82 kg",
        Altura: "1.58 m",
        IMC: "32.8 kg/m²"
      },
      physicalGeneral: "Acne facial e mandibular; hirsutismo com pelos grossos em mento, periareolar e linha alba; acantose nigricans cervical e axilar; obesidade centrípeta.",
      physicalSeg: [
        "Mamas simétricas, sem nódulos ou galactorreia.",
        "Abdome com discreto aumento de volume suprapúbico.",
        "Genitália externa sem alterações, pelos em padrão masculino."
      ],
      labs: [
        { test: "β-HCG sérico", val: "< 2 mUI/mL", ref: "< 5 não grávida", alt: false },
        { test: "TSH", val: "2.3 μUI/mL", ref: "0.4 - 4.0", alt: false },
        { test: "Prolactina", val: "18 ng/mL", ref: "< 25", alt: false },
        { test: "FSH", val: "4.2 mUI/mL", ref: "fase folicular: 3-10", alt: false },
        { test: "LH", val: "14.8 mUI/mL", ref: "fase folicular: 2-10", alt: true },
        { test: "Testosterona total", val: "82 ng/dL", ref: "14-76", alt: true },
        { test: "DHEA-S", val: "285 μg/dL", ref: "35-430", alt: false },
        { test: "Glicemia jejum", val: "108 mg/dL", ref: "70-100", alt: true },
        { test: "Insulina jejum", val: "28 μUI/mL", ref: "2-25", alt: true },
        { test: "HOMA-IR", val: "7.5", ref: "< 2.5", alt: true }
      ],
      image: {
        title: "Ultrassom Transvaginal",
        report: `Útero em anteversoflexão, volume 88 cm³, endométrio 14 mm homogêneo. Ovário direito com múltiplos folículos periféricos (12 folículos de 2-9 mm). Ovário esquerdo com múltiplos folículos periféricos (14 folículos de 2-9 mm). Conclusão: ovários aumentados com múltiplos microcistos periféricos, aspecto sugestivo de síndrome dos ovários policísticos.`
      }
    },
    instC: {
      diagnosis: "Síndrome dos Ovários Policísticos (SOP) com Síndrome Metabólica",
      context: "Paciente de 28 anos com amenorreia secundária, obesidade central, sinais de hiperandrogenismo, resistência insulínica e ultrassom compatível com ovários policísticos. Preenche critérios de Rotterdam e apresenta componentes metabólicos significativos.",
      justify: "Evidência clínica e laboratorial: amenorreia, hirsutismo, acantose nigricans, LH elevado, testosterona total elevada, HOMA-IR alterado e ultrassom policístico.",
      script: [
        { trigger: "Queixa principal", speech: "Doutora, minha menstruação não vem há 5 meses e estou engordando muito." },
        { trigger: "História menstrual", speech: "Minha menstruação sempre foi irregular desde a adolescência, vinha de 2 em 2 meses, às vezes 3." },
        { trigger: "Sobre peso", speech: "Engordei 12 quilos no último ano, principalmente na barriga." },
        { trigger: "Sobre pelos", speech: "Tenho muitos pelos no rosto, preciso depilar toda semana. Também nasceram pelos na barriga." },
        { trigger: "Sobre pele", speech: "Tenho muita espinha no rosto, piorou muito esse ano. Apareceram umas manchas escuras no pescoço e nas axilas." },
        { trigger: "Atividade sexual", speech: "Sim, tenho parceiro fixo, uso preservativo às vezes." },
        { trigger: "Desejo de gravidez", speech: "No momento não, mas tenho medo de não conseguir engravidar no futuro." },
        { trigger: "Antecedentes", speech: "Não tenho doenças, não tomo remédio nenhum." },
        { trigger: "História familiar", speech: "Minha mãe tem diabetes e pressão alta. Minha irmã também tem problema de menstruação irregular." },
        { trigger: "Perguntas do paciente", speech: "Por que minha menstruação parou? Isso tem a ver com esses pelos no rosto? Vou conseguir engravidar quando quiser? Preciso emagrecer?" }
      ],
      pep: [
        { item: "Identificação e apresentação adequada", score: 0.5 },
        { item: "Investigou história menstrual detalhada (idade da menarca, padrão)", score: 0.5 },
        { item: "Afastou gravidez (perguntou sobre atividade sexual)", score: 1.0 },
        { item: "Investigou sintomas de hiperandrogenismo (hirsutismo, acne)", score: 1.0 },
        { item: "Perguntou sobre ganho de peso e sua distribuição", score: 0.5 },
        { item: "Investigou alterações cutâneas (acantose)", score: 0.5 },
        { item: "Pesquisou história familiar de SOP ou diabetes", score: 0.5 },
        { item: "Solicitou exame físico incluindo IMC e pesquisa de hirsutismo", score: 0.5 },
        { item: "Pesquisou acantose nigricans", score: 0.5 },
        { item: "Solicitou β-HCG para descartar gravidez", score: 0.5 },
        { item: "Solicitou perfil hormonal (LH, FSH, testosterona)", score: 1.0 },
        { item: "Solicitou TSH e prolactina (diagnósticos diferenciais)", score: 0.5 },
        { item: "Solicitou ultrassom transvaginal", score: 0.5 },
        { item: "Solicitou glicemia e insulina (rastreio metabólico)", score: 0.5 },
        { item: "Formulou hipótese diagnóstica de SOP", score: 1.0 },
        { item: "Orientou sobre mudança de estilo de vida e perda de peso", score: 0.5 }
      ],
      criticalErrors: [
        "Não solicitar β-HCG para descartar gravidez",
        "Não solicitar ultrassom transvaginal",
        "Não reconhecer acantose nigricans como marcador de resistência insulínica",
        "Não rastrear síndrome metabólica (glicemia, lipidograma)"
      ]
    },
    instD: {
      title: "Síndrome dos Ovários Policísticos (SOP)",
      sections: [
        {
          h: "Definição",
          body: `<p>A SOP é a endocrinopatia mais comum em mulheres em idade reprodutiva (6-10% da população), caracterizada por disfunção ovulatória e hiperandrogenismo.</p><p>Critérios de Rotterdam: presença de 2 dos 3 critérios:</p><ul><li>Oligo ou anovulação</li><li>Sinais clínicos ou laboratoriais de hiperandrogenismo</li><li>Ovários policísticos ao ultrassom</li></ul><p>Importante excluir outras causas de hiperandrogenismo e anovulação.</p>`
        },
        {
          h: "Quadro Clínico",
          body: `<ul><li>Oligomenorreia ou amenorreia secundária</li><li>Hirsutismo, acne, alopecia androgenética</li><li>Acantose nigricans</li><li>Obesidade centrípeta</li><li>Resistência insulínica</li><li>Dislipidemia</li><li>Infertilidade anovulatória</li></ul>`
        },
        {
          h: "Investigação Laboratorial",
          body: `<p>Obrigatórios:</p><ul><li>β-HCG</li><li>TSH</li><li>Prolactina</li><li>Testosterona total</li><li>17-OH progesterona se suspeita de hiperplasia adrenal congênita</li></ul><p>Avaliação metabólica: glicemia de jejum, insulina de jejum, cálculo do HOMA-IR e perfil lipídico.</p><p>Padrão hormonal típico: LH elevado, FSH normal ou baixo, relação LH/FSH > 2:1 em 60% dos casos, testosterona total aumentada.</p>`
        },
        {
          h: "Tratamento",
          body: `<p>Abordagem por objetivos:</p><ul><li>Perda de peso e estilo de vida: dieta hipocalórica e exercício</li><li>Metformina 1500-2000 mg/dia em resistência insulínica</li><li>ACO combinado para mulheres que não desejam engravidar</li><li>Espironolactona 50-100 mg/dia para hirsutismo significativo</li><li>Clomifeno para indução de ovulação em desejo de gravidez</li></ul>`
        },
        {
          h: "Acompanhamento e Armadilhas",
          body: `<p>Armadilhas:</p><ul><li>Não descartar gravidez</li><li>Não reconhecer acantose nigricans</li><li>Prescrever ACO sem investigar contraindicações</li><li>Esquecer orientação sobre risco de câncer de endométrio</li></ul>`
        }
      ]
    }
  },
    // ── ESTAÇÃO 7: Diabetes Mellitus Tipo 2 (Homem, idoso) ─
  {
    id: 3,
    title: "Paciente traz exames realizados há 2 semanas e refere que o açúcar deu um pouco alto.",
    sub: "UBS · Clínica Médica",
    tema: "endocrinologia",
    topic: "endocrinologia",
    level: "moderado",
    cardAccent: "#4caf50",
    instA: {
      scenario: "Você está no ambulatório de clínica médica de uma UBS.",
      patient: "A.M.S., 68 anos, sexo masculino, aposentado.",
      complaint: "Paciente traz exames realizados há 2 semanas e refere que o açúcar deu um pouco alto.",
      tasks: [
        "Apresente-se e estabeleça vínculo com o paciente.",
        "Realize anamnese dirigida ao quadro atual.",
        "Solicite e interprete os dados do exame físico.",
        "Interprete os exames trazidos pelo paciente.",
        "Formule a hipótese diagnóstica.",
        "Defina a conduta e as orientações adequadas."
      ]
    },
    instB: {
      vitals: {
        PA: "145/92 mmHg",
        FC: "76 bpm",
        FR: "16 irpm",
        Peso: "94 kg",
        Altura: "1.72 m",
        IMC: "31.8 kg/m²",
        CA: "108 cm"
      },
      physicalGeneral: "Obesidade central, acantose nigricans discreta cervical posterior, estado geral bom.",
      physicalSeg: [
        "Cardiovascular: RCR 2T, BNF, sem sopros; pulsos periféricos palpáveis e simétricos.",
        "Respiratório: MV presente bilateralmente, sem RA.",
        "Abdome: globoso, flácido, RHA presentes, indolor, sem visceromegalias.",
        "Membros inferiores: pulsos pedioso e tibial posterior presentes, sem edema, sensibilidade tátil preservada ao monofilamento de 10 g, reflexos presentes e simétricos."
      ],
      labs: [
        { test: "Glicemia jejum", val: "138 mg/dL", ref: "< 100 normal", alt: true },
        { test: "Hemoglobina glicada (HbA1c)", val: "7.2%", ref: "< 5.7% normal", alt: true },
        { test: "Colesterol total", val: "248 mg/dL", ref: "< 200", alt: true },
        { test: "LDL", val: "165 mg/dL", ref: "< 130", alt: true },
        { test: "HDL", val: "38 mg/dL", ref: "> 40", alt: true },
        { test: "Triglicerídeos", val: "285 mg/dL", ref: "< 150", alt: true },
        { test: "Creatinina", val: "1.2 mg/dL", ref: "0.7-1.3", alt: false },
        { test: "TFG (CKD-EPI)", val: "68 mL/min/1.73m²", ref: "> 90", alt: true },
        { test: "EAS", val: "Normal", ref: "—", alt: false },
        { test: "Relação albumina/creatinina urinária", val: "18 mg/g", ref: "< 30", alt: false },
        { test: "TSH", val: "2.1 μUI/mL", ref: "0.4-4.0", alt: false }
      ]
    },
    instC: {
      diagnosis: "Diabetes Mellitus tipo 2 de novo + Dislipidemia + Hipertensão Arterial Sistêmica + Obesidade (Síndrome Metabólica)",
      context: "Homem de 68 anos com diagnóstico novo de DM2, múltiplos fatores de risco cardiovascular e síndrome metabólica. Exames confirmam diabetes por HbA1c 7.2% e glicemia jejum 138 mg/dL, dislipidemia mista, pressão arterial elevada e TFG levemente reduzida.",
      justify: "Diagnóstico baseado em critérios laboratoriais de DM2 e presença de fatores metabólicos de alto risco cardiovascular.",
      script: [
        { trigger: "Sobre os exames", speech: "Doutor, fiz esses exames há 2 semanas no posto. A moça falou que o açúcar estava alto, por isso vim consultar." },
        { trigger: "Sintomas", speech: "Não sinto nada de especial. Às vezes fico com sede, mas acho que é normal." },
        { trigger: "Urinar à noite", speech: "Estou urinando mais à noite, levanto 2 vezes para ir ao banheiro." },
        { trigger: "História pessoal", speech: "Tenho pressão alta há uns 10 anos, tomo losartana 50 mg de manhã." },
        { trigger: "Histórico de diabetes", speech: "Nunca tive diabetes antes, nunca me falaram nada." },
        { trigger: "Hábitos", speech: "Não faço exercício, sou sedentário desde que aposentei. Não fumo, bebo cerveja no fim de semana, umas 3-4 latas. Gosto muito de massa, arroz, pão. Como muita fritura também." },
        { trigger: "História familiar", speech: "Minha mãe tinha diabetes, tomava insulina. Meu pai morreu de infarto aos 65 anos. Tenho um irmão com diabetes também." },
        { trigger: "Medicações atuais", speech: "Só tomo a losartana mesmo, de manhã." },
        { trigger: "Perguntas do paciente", speech: "Estou com diabetes então? Vou precisar tomar insulina? O colesterol alto é grave? Posso continuar bebendo cerveja? Preciso mesmo fazer dieta?" }
      ],
      pep: [
        { item: "Identificação e apresentação adequada", score: 0.5 },
        { item: "Investigou sintomas clássicos de diabetes (poliúria, polidipsia)", score: 0.5 },
        { item: "Perguntou sobre antecedentes pessoais (HAS)", score: 0.5 },
        { item: "Investigou história familiar de diabetes e DCV", score: 0.5 },
        { item: "Avaliou hábitos de vida (dieta, exercício, álcool, tabagismo)", score: 0.5 },
        { item: "Perguntou sobre medicações em uso", score: 0.5 },
        { item: "Solicitou exame físico completo incluindo IMC e CA", score: 0.5 },
        { item: "Avaliou pulsos periféricos", score: 0.5 },
        { item: "Realizou teste de sensibilidade com monofilamento", score: 0.5 },
        { item: "Interpretou corretamente HbA1c 7.2% como diagnóstico de DM2", score: 1.0 },
        { item: "Identificou dislipidemia mista", score: 0.5 },
        { item: "Calculou risco cardiovascular (muito alto)", score: 0.5 },
        { item: "Orientou mudança de estilo de vida como pilar do tratamento", score: 1.0 },
        { item: "Prescreveu metformina como primeira escolha", score: 1.0 },
        { item: "Prescreveu estatina de alta potência (atorvastatina ou rosuvastatina)", score: 1.0 },
        { item: "Orientou metas glicêmicas (HbA1c < 7% ou individualizada)", score: 0.5 }
      ],
      criticalErrors: [
        "Não diagnosticar diabetes (HbA1c ≥ 6.5% é diagnóstico)",
        "Não prescrever estatina (obrigatória em DM com risco CV muito alto)",
        "Prescrever sulfonilureia como primeira linha (metformina é primeira escolha)",
        "Não orientar mudança de estilo de vida",
        "Não avaliar pés (exame obrigatório no diagnóstico)"
      ]
    },
    instD: {
      title: "Diabetes Mellitus Tipo 2 — Diagnóstico e Manejo Inicial",
      sections: [
        {
          h: "Critérios Diagnósticos",
          body: `<ul><li>HbA1c ≥ 6.5%</li><li>Glicemia jejum ≥ 126 mg/dL</li><li>Glicemia 2h pós-TOTG ≥ 200 mg/dL</li><li>Glicemia aleatória ≥ 200 mg/dL + sintomas clássicos</li></ul><p>Pré-diabetes: HbA1c 5.7-6.4%, glicemia jejum 100-125 mg/dL, TOTG 140-199 mg/dL.</p>`
        },
        {
          h: "Estratificação e Tratamento",
          body: `<p>O manejo inicial deve priorizar mudança de estilo de vida, controle de peso e prevenção cardiovascular.</p><ul><li>Metformina como primeira linha</li><li>Estatina de alta potência obrigatória em risco CV muito alto</li><li>Meta LDL < 50 mg/dL em risco muito alto</li><li>Meta HbA1c < 7% na maioria dos pacientes, individualizando conforme idade e comorbidades</li></ul>`
        },
        {
          h: "Avaliação Inicial do Paciente com DM2",
          body: `<p>Anamnese deve abordar sintomas clássicos, história familiar, hábitos e comorbidades. Exame físico inclui PA, IMC, circunferência abdominal, exame cardíaco e dos pés.</p><p>Exames iniciais: HbA1c, perfil lipídico, creatinina, TFG, relação albumina/creatinina, EAS e TSH se sugestivo.</p>`
        }
      ]
    }
  },
  // ── ESTAÇÃO 8: Hipertireoidismo (Mulher, adulta) ─
  {
    id: 4,
    title: "Palpitações, perda de peso e bócio difuso",
    sub: "Ambulatório de Endocrinologia — Hospital Secundário",
    tema: "endocrinologia",
    topic: "hipertireoidismo",
    level: "moderado",
    cardAccent: "#f39c12",
    instA: {
      scenario: "Você está no ambulatório de endocrinologia de um hospital secundário.",
      patient: "R.M.L., 45 anos, sexo feminino, secretária.",
      complaint: "Paciente relata nervosismo, palpitações e perda de peso de 7 kg em 3 meses, apesar de apetite aumentado.",
      tasks: [
        "Apresente-se e estabeleça vínculo com o paciente.",
        "Realize anamnese dirigida ao quadro atual.",
        "Solicite e interprete os dados do exame físico.",
        "Formule a hipótese diagnóstica.",
        "Solicite os exames complementares adequados.",
        "Defina a conduta inicial e oriente o paciente."
      ]
    },
    instB: {
      vitals: {
        PA: "140/75 mmHg",
        FC: "112 bpm",
        FR: "18 irpm",
        Tax: "37.8°C",
        Peso: "58 kg",
        Altura: "1.65 m",
        IMC: "21.3 kg/m²"
      },
      physicalGeneral: "Paciente ansiosa e hiperativa, pele quente e úmida, tremor fino de extremidades, exoftalmia bilateral leve.",
      physicalSeg: [
        "Tireoide: aumento difuso visível, consistência elástica, móvel, frêmito palpável, sopro à ausculta, sem nódulos.",
        "Cardiovascular: taquicardia, RCR 2T, sem sopros, pulsos amplos e saltitantes.",
        "Neurológico: reflexos hiperativos globalmente, tremor fino de extremidades."
      ],
      labs: [
        { test: "TSH", val: "< 0.01 μUI/mL", ref: "0.4 - 4.0", alt: true },
        { test: "T4 livre", val: "3.2 ng/dL", ref: "0.8 - 1.8", alt: true },
        { test: "T3 total", val: "285 ng/dL", ref: "80 - 200", alt: true },
        { test: "TRAb", val: "18.5 UI/L", ref: "< 1.75", alt: true },
        { test: "Anti-TPO", val: "125 UI/mL", ref: "< 35", alt: true },
        { test: "Hemograma", val: "Normal", ref: "—", alt: false }
      ],
      image: {
        title: "Ultrassom de Tireóide com Doppler",
        report: `Glândula aumentada difusamente (volume total 35 mL), ecotextura hipoecogênica, hipervascularização difusa compatível com 'inferno tireoidiano', sem nódulos. Conclusão: aspecto compatível com tireoidite difusa sugestiva de Doença de Graves.`
      }
    },
    instC: {
      diagnosis: "Doença de Graves (hipertireoidismo primário autoimune)",
      context: "Mulher de 45 anos com quadro de tireotoxicose: perda de peso paradoxal, palpitações, tremor, hiperatividade e insônia. Exame físico mostra bócio difuso, frêmito, sopro, exoftalmia leve e reflexos hiperativos. Laboratórios confirmam TSH suprimido, T4 livre e T3 elevados, e TRAb positivo.",
      justify: "Diagnóstico confirmado por achados clínicos típicos e TRAb positivo, patognomônico de Graves.",
      script: [
        { trigger: "Queixa principal", speech: "Doutora, estou muito nervosa, agitada, meu coração vive acelerado." },
        { trigger: "Sobre peso", speech: "Perdi 7 quilos nos últimos 3 meses, mas estou comendo muito mais que antes." },
        { trigger: "Sobre temperatura", speech: "Sinto muito calor, fico suando o tempo todo, mesmo quando está frio." },
        { trigger: "Sobre sono", speech: "Não consigo dormir, durmo 3-4 horas por noite só. Fico inquieta." },
        { trigger: "Sobre tremor", speech: "Minhas mãos tremem, está difícil escrever." },
        { trigger: "Sobre olhos", speech: "Sinto que meus olhos ficaram mais saltados, as pessoas comentam." },
        { trigger: "Sobre intestino", speech: "Meu intestino ficou solto, às vezes tenho diarreia." },
        { trigger: "Sobre menstruação", speech: "Minha menstruação ficou irregular, vem pouca, às vezes pula." },
        { trigger: "Antecedentes", speech: "Não tenho outras doenças." },
        { trigger: "História familiar", speech: "Minha tia teve problema de tireoide também." },
        { trigger: "Perguntas do paciente", speech: "O que eu tenho, doutora? Por que estou emagrecendo tanto? Tem tratamento? Vou precisar operar?" }
      ],
      pep: [
        { item: "Identificação e apresentação adequada", score: 0.5 },
        { item: "Investigou perda de peso paradoxal com apetite aumentado", score: 0.5 },
        { item: "Perguntou sobre palpitações e taquicardia", score: 0.5 },
        { item: "Investigou intolerância ao calor e sudorese", score: 0.5 },
        { item: "Perguntou sobre tremor e hiperatividade", score: 0.5 },
        { item: "Investigou alterações oculares (exoftalmia)", score: 0.5 },
        { item: "Perguntou sobre hábito intestinal", score: 0.5 },
        { item: "Investigou história familiar de doença tireoidiana", score: 0.5 },
        { item: "Solicitou exame físico completo da tireoide", score: 1.0 },
        { item: "Pesquisou tremor fino e reflexos", score: 0.5 },
        { item: "Formulou hipótese de hipertireoidismo", score: 1.0 },
        { item: "Solicitou TSH e T4 livre", score: 1.0 },
        { item: "Solicitou TRAb", score: 1.0 },
        { item: "Prescreveu tionamida (metimazol ou propiltiouracil)", score: 1.0 },
        { item: "Prescreveu betabloqueador para sintomas adrenérgicos", score: 0.5 },
        { item: "Orientou seguimento com TSH/T4L em 4-6 semanas", score: 0.5 }
      ],
      criticalErrors: [
        "Não solicitar TSH como exame inicial",
        "Não solicitar TRAb para diferenciar Graves de outras causas",
        "Prescrever apenas betabloqueador isolado",
        "Não alertar sobre sinais de crise tireotóxica"
      ]
    },
    instD: {
      title: "Doença de Graves (Hipertireoidismo Autoimune)",
      sections: [
        {
          h: "Definição",
          body: `<p>A Doença de Graves é a causa mais comum de hipertireoidismo, caracterizada por autoimunidade contra o receptor de TSH e produção excessiva de hormônios tireoidianos.</p>`
        },
        {
          h: "Fisiopatologia",
          body: `<p>Anticorpos TRAb estimulam continuamente a tireoide, aumentando T3 e T4 e suprimindo TSH hipofisário.</p>`
        },
        {
          h: "Diagnóstico Laboratorial",
          body: `<ul><li>TSH suprimido</li><li>T4 livre elevado</li><li>T3 total elevado</li><li>TRAb positivo é patognomônico</li></ul>`
        },
        {
          h: "Tratamento",
          body: `<ul><li>Tionamidas (metimazol como primeira escolha)</li><li>Betabloqueador para controle sintomático</li><li>Radioiodoterapia ou tireoidectomia em casos selecionados</li></ul>`
        }
      ]
    }
  },
    // ── ESTAÇÃO 9: Nódulo Tireoidiano Altamente Suspeito (Mulher, adulta) ─
  {
    id: 5,
    title: "Nódulo tireoidiano altamente suspeito",
    sub: "Ambulatório de Cabeça e Pescoço — Hospital Terciário",
    tema: "endocrinologia",
    topic: "tireoide",
    level: "complexo",
    cardAccent: "#7f8c8d",
    instA: {
      scenario: "Você está no ambulatório de cabeça e pescoço de um hospital terciário.",
      patient: "L.P.F., 58 anos, sexo feminino, comerciante.",
      complaint: "Paciente refere nódulo cervical anterior indolor há 6 meses, com crescimento progressivo.",
      tasks: [
        "Apresente-se e estabeleça vínculo com o paciente.",
        "Realize anamnese dirigida ao quadro atual.",
        "Solicite e interprete os dados do exame físico.",
        "Solicite os exames complementares adequados.",
        "Formule a hipótese diagnóstica.",
        "Defina a conduta e oriente o paciente."
      ]
    },
    instB: {
      vitals: {
        PA: "125/80 mmHg",
        FC: "72 bpm",
        FR: "16 irpm",
        Peso: "68 kg",
        Altura: "1.60 m",
        IMC: "26.6 kg/m²"
      },
      physicalGeneral: "Estado geral bom. Ausculta pulmonar e cardíaca normais.",
      physicalSeg: [
        "Tireoide com nódulo visível e palpável no lobo esquerdo, endurecido, fixo e indolor; mobilidade laríngea preservada.",
        "Sem adenopatia cervical palpável nos níveis I a VI.",
        "Laringoscopia indireta: mobilidade de cordas vocais preservada bilateralmente."
      ],
      labs: [
        { test: "TSH", val: "2.1 μUI/mL", ref: "0.4 - 4.0", alt: false },
        { test: "T4 livre", val: "1.1 ng/dL", ref: "0.8 - 1.8", alt: false },
        { test: "Calcitonina", val: "3.5 pg/mL", ref: "< 10", alt: false },
        { test: "Tireoglobulina", val: "45 ng/mL", ref: "variável", alt: false }
      ],
      image: {
        title: "Ultrassom de Tireóide com Doppler",
        report: `Lobo esquerdo com nódulo sólido 2.3 x 1.8 x 2.1 cm, hipoecogênico, margens irregulares e espiculadas, microcalcificações, vascularização central aumentada e maior diâmetro ântero-posterior do que transverso. Classificação ACR-TIRADS 5. Linfonodos cervicais sem alterações significativas.`
      },
      note: "PAAF realizada e citologia Bethesda V: suspeito de malignidade."
    },
    instC: {
      diagnosis: "Nódulo tireoidiano altamente suspeito de malignidade (provável carcinoma papilífero)",
      context: "Mulher de 58 anos com nódulo tireoidiano de 2.5 cm, endurecido e fixo. Ultrassom mostra características altamente suspeitas e PAAF Bethesda V. O caso indica cirurgia pelo alto risco de malignidade.",
      justify: "Classificação de risco ACR-TIRADS 5 e PAAF suspeita justificam indicação cirúrgica imediata.",
      script: [
        { trigger: "Queixa principal", speech: "Doutora, tenho esse caroço no pescoço há uns 6 meses e ele está crescendo." },
        { trigger: "Sobre sintomas", speech: "Não dói nada. Às vezes sinto um incômodo quando engulo." },
        { trigger: "Sobre voz", speech: "Não tenho rouquidão. Minha voz está normal." },
        { trigger: "História", speech: "Percebi o caroço por acaso, passando a mão no pescoço. Parece que está aumentando." },
        { trigger: "Fatores de risco", speech: "Nunca fiz radioterapia no pescoço ou cabeça quando criança. Ninguém na família teve câncer de tireoide." },
        { trigger: "Preocupações", speech: "Tenho medo de ser câncer. Vou precisar operar? Se for câncer, tem cura?" }
      ],
      pep: [
        { item: "Identificação e apresentação adequada", score: 0.5 },
        { item: "Investigou duração e crescimento do nódulo", score: 0.5 },
        { item: "Perguntou sobre sintomas compressivos", score: 0.5 },
        { item: "Investigou disfonia ou rouquidão", score: 0.5 },
        { item: "Perguntou sobre história de radiação cervical", score: 0.5 },
        { item: "Investigou história familiar de câncer de tireoide", score: 0.5 },
        { item: "Solicitou palpação detalhada da tireoide", score: 1.0 },
        { item: "Examinou linfonodos cervicais", score: 0.5 },
        { item: "Avaliou mobilidade de cordas vocais", score: 0.5 },
        { item: "Solicitou TSH", score: 0.5 },
        { item: "Solicitou ultrassom de tireoide com Doppler", score: 1.0 },
        { item: "Solicitou PAAF", score: 1.0 },
        { item: "Interpretou corretamente Bethesda V como suspeito", score: 1.0 },
        { item: "Indicou cirurgia (tireoidectomia)", score: 1.0 },
        { item: "Orientou sobre tireoidectomia total", score: 0.5 },
        { item: "Tranquilizou quanto ao bom prognóstico", score: 0.5 }
      ],
      criticalErrors: [
        "Não solicitar ultrassom",
        "Não fazer PAAF em nódulo TIRADS ≥4",
        "Indicar apenas seguimento em Bethesda V",
        "Não avaliar linfonodos cervicais",
        "Não avaliar mobilidade de cordas vocais"
      ]
    },
    instD: {
      title: "Nódulo Tireoidiano — Investigação e Conduta",
      sections: [
        {
          h: "Epidemiologia",
          body: `<p>Nódulos tireoidianos são comuns, presentes em 50-60% da população ao ultrassom. Apenas 5-15% são malignos.</p>`
        },
        {
          h: "Classificação e Exames",
          body: `<p>O primeiro exame é o TSH. Ultrassom com Doppler é obrigatório para estratificar risco. PAAF é indicada em nódulos suspeitos ou ≥ 1 cm em TIRADS 3-5.</p>`
        },
        {
          h: "PAAF e Bethesda",
          body: `<p>Bethesda V ou VI exigem cirurgia. Bethesda III-IV pode justificar lobectomia ou repetição da PAAF conforme risco.</p>`
        },
        {
          h: "Tratamento Cirúrgico",
          body: `<p>Tireoidectomia total é indicada em casos suspeitos ou malignos confirmados. Lobectomia pode ser considerada em lesões de risco intermediário.</p>`
        }
      ]
    }
  },

  // ── ESTAÇÃO 10: Hipoparatireoidismo Pós-Operatório (Homem, adulto) ─

  {
    id: 6,
    title: "Parestesias após tireoidectomia total",
    sub: "Ambulatório de Endocrinologia — Pós-operatório",
    tema: "endocrinologia",
    topic: "endocrinologia cirúrgica",
    level: "complexo",
    cardAccent: "#16a085",
    instA: {
      scenario: "Você está no ambulatório de endocrinologia, atendendo paciente em pós-operatório.",
      patient: "C.R.M., 42 anos, sexo masculino, engenheiro.",
      complaint: "Paciente retorna 7 dias após tireoidectomia total por carcinoma papilífero, referindo formigamento perioral e nas mãos.",
      tasks: [
        "Apresente-se e estabeleça vínculo com o paciente.",
        "Realize anamnese dirigida ao quadro pós-operatório.",
        "Solicite e interprete os dados do exame físico.",
        "Interprete os exames complementares disponíveis.",
        "Formule a hipótese diagnóstica.",
        "Defina a conduta e oriente o paciente sobre o seguimento."
      ]
    },
    instB: {
      vitals: {
        PA: "120/75 mmHg",
        FC: "78 bpm",
        FR: "16 irpm",
        Tax: "36.5°C"
      },
      physicalGeneral: "Cicatriz cervical limpa sem sinais flogísticos, sem hematoma ou seroma, mobilização cervical preservada.",
      physicalSeg: [
        "Pacientere refere parestesias periorais e em mãos.",
        "Sinal de Chvostek positivo, sinal de Trousseau negativo.",
        "Força muscular preservada e sem fasciculações.",
        "Laringoscopia: mobilidade de cordas vocais preservada bilateralmente."
      ],
      labs: [
        { test: "Cálcio total", val: "7.2 mg/dL", ref: "8.5 - 10.5", alt: true },
        { test: "Cálcio iônico", val: "0.95 mmol/L", ref: "1.15 - 1.35", alt: true },
        { test: "PTH", val: "8 pg/mL", ref: "15 - 65", alt: true },
        { test: "Fósforo", val: "5.8 mg/dL", ref: "2.5 - 4.5", alt: true },
        { test: "Magnésio", val: "1.8 mg/dL", ref: "1.7 - 2.4", alt: false },
        { test: "Albumina", val: "4.0 g/dL", ref: "3.5 - 5.0", alt: false },
        { test: "Creatinina", val: "1.0 mg/dL", ref: "0.7 - 1.3", alt: false }
      ],
      image: null,
      note: "Laudo anatomopatológico mostra carcinoma papilífero clássico 1.8 cm, margens livres, N0, M0, baixo risco."
    },
    instC: {
      diagnosis: "Hipoparatireoidismo pós-tireoidectomia associada a carcinoma papilífero de baixo risco (pT1bN0M0)",
      context: "Homem de 42 anos, D7 pós-tireoidectomia total, com formigamento perioral e nas mãos. Laboratórios mostram hipocalcemia com PTH suprimido e hiperfosfatemia. Anatomopatologia confirma carcinoma papilífero 1.8 cm sem invasão ou metástase.",
      justify: "Diagnóstico de hipoparatireoidismo pós-operatório baseado em padrão laboratorial e sintomas típicos. Baixo risco oncológico justifica rotina de seguimento e planejamento de radioiodoterapia em 4-6 semanas.",
      script: [
        { trigger: "Queixa principal", speech: "Doutor, desde ontem estou com formigamento na boca e nas mãos." },
        { trigger: "Sintomas", speech: "Começa ao redor da boca e vai para as pontas dos dedos. Às vezes sinto câimbras nas pernas também." },
        { trigger: "Sobre a cirurgia", speech: "Fiz a cirurgia há uma semana. A cicatriz está boa, não está doendo. Retiraram a tireoide toda porque tinha câncer." },
        { trigger: "Preocupações", speech: "Isso é normal depois da cirurgia? Vai passar? Vou precisar de mais tratamento para o câncer?" }
      ],
      pep: [
        { item: "Identificação e apresentação adequada", score: 0.5 },
        { item: "Investigou sintomas de hipocalcemia (parestesias, câimbras)", score: 1.0 },
        { item: "Revisou o laudo anatomopatológico", score: 0.5 },
        { item: "Pesquisou sinal de Chvostek", score: 0.5 },
        { item: "Pesquisou sinal de Trousseau", score: 0.5 },
        { item: "Solicitou dosagem de cálcio total e iônico", score: 1.0 },
        { item: "Solicitou dosagem de PTH", score: 0.5 },
        { item: "Diagnosticou hipoparatireoidismo pós-operatório", score: 1.0 },
        { item: "Prescreveu suplementação de cálcio oral", score: 1.0 },
        { item: "Prescreveu calcitriol", score: 1.0 },
        { item: "Orientou sobre levotiroxina em dose supressiva", score: 1.0 },
        { item: "Explicou que deve aguardar 4-6 semanas para radioiodo", score: 0.5 },
        { item: "Classificou como baixo risco de recidiva", score: 0.5 },
        { item: "Orientou sobre seguimento com tireoglobulina", score: 0.5 }
      ],
      criticalErrors: [
        "Não diagnosticar hipocalcemia/hipoparatireoidismo",
        "Não repor cálcio imediatamente",
        "Dar alta hospitalar sem calcitriol",
        "Indicar radioiodoterapia imediata",
        "Não prescrever levotiroxina em dose supressiva"
      ]
    },
    instD: {
      title: "Carcinoma de Tireoide — Pós-operatório e Seguimento",
      sections: [
        {
          h: "Complicações Pós-operatórias",
          body: `<p>Hipoparatireoidismo é a complicação mais comum após tireoidectomia total, resultando em hipocalcemia sintomática. Atinge até 50% dos pacientes no período imediato e 2-5% se permanente.</p>`
        },
        {
          h: "Diagnóstico e Tratamento",
          body: `<ul><li>Cálcio total baixo e PTH suprimido caracterizam hipoparatireoidismo.</li><li>Tratamento inicial: cálcio oral e calcitriol, com alvo de cálcio sérico entre 8.0-9.0 mg/dL.</li><li>Caso persistente >6 meses, tratamento indefinido.</li></ul>`
        },
        {
          h: "Seguimento Oncológico",
          body: `<p>Para carcinoma papilífero de baixo risco, levotiroxina supressiva e acompanhamento por tireoglobulina e ultrassom cervical são as bases do seguimento.</p>`
        }
      ]
    }
  },

    // ── ESTAÇÃO 11: Prolactinoma (Mulher, adulta) ─

  {
    id: 7,
    title: "Paciente refere ausência de menstruação há 8 meses",
    sub: "Ambulatório de Ginecologia — Hospital Secundário",
    tema: "endocrinologia",
    topic: "hipófise",
    level: "moderado",
    cardAccent: "#9b59b6",
    instA: {
      scenario: "Você está no ambulatório de ginecologia de um hospital secundário.",
      patient: "A.S.M., 34 anos, sexo feminino, publicitária.",
      complaint: "Paciente refere ausência de menstruação há 8 meses, galactorreia bilateral e cefaleia.",
      tasks: [
        "Apresente-se e estabeleça vínculo com o paciente.",
        "Realize anamnese dirigida ao quadro atual.",
        "Solicite e interprete os dados do exame físico.",
        "Formule a hipótese diagnóstica.",
        "Solicite os exames complementares adequados.",
        "Defina a conduta inicial e oriente o paciente."
      ]
    },
    instB: {
      vitals: {
        PA: "115/75 mmHg",
        FC: "72 bpm",
        Peso: "62 kg",
        Altura: "1.64 m",
        IMC: "23.0 kg/m²"
      },
      physicalGeneral: "Estado geral bom, sem hirsutismo ou acne, sem galactorreia espontânea.",
      physicalSeg: [
        "Mamas simétricas sem nódulos, galactorreia bilateral apenas à expressão.",
        "Genitália externa sem alterações.",
        "Neurológico sem déficit motor ou sensitivo, pupilas isocóricas e fotorreagentes, movimentos oculares normais, campimetria por confrontação sem alterações evidentes."
      ],
      labs: [
        { test: "β-HCG", val: "< 2 mUI/mL", ref: "< 5 não grávida", alt: false },
        { test: "Prolactina", val: "185 ng/mL", ref: "< 25", alt: true },
        { test: "Prolactina (repetida)", val: "192 ng/mL", ref: "< 25", alt: true },
        { test: "TSH", val: "2.8 μUI/mL", ref: "0.4 - 4.0", alt: false },
        { test: "T4 livre", val: "1.2 ng/dL", ref: "0.8 - 1.8", alt: false },
        { test: "LH", val: "2.1 mUI/mL", ref: "2 - 10", alt: false },
        { test: "FSH", val: "3.5 mUI/mL", ref: "3 - 10", alt: false },
        { test: "Estradiol", val: "28 pg/mL", ref: "30 - 400 fase folicular", alt: false },
        { test: "Creatinina", val: "0.9 mg/dL", ref: "0.6 - 1.2", alt: false }
      ],
      image: {
        title: "Ressonância Magnética de Sela Túrcica",
        report: `Lesão hipofisária de 8 mm na porção lateral esquerda, sem desvio do quiasma óptico e sem invasão de seio cavernoso. Conclusão: microadenoma hipofisário compatível com prolactinoma.`
      }
    },
    instC: {
      diagnosis: "Microprolactinoma (adenoma hipofisário produtor de prolactina)",
      context: "Mulher de 34 anos com amenorreia, galactorreia e cefaleia. Hiperprolactinemia confirmada em duas dosagens, TSH normal e β-HCG negativo. RNM revela microadenoma hipofisário de 8 mm sem compressão do quiasma óptico.",
      justify: "Diagnóstico de prolactinoma confirmado pela hiperprolactinemia persistente e imagem de sela túrcica compatível.",
      script: [
        { trigger: "Queixa principal", speech: "Doutora, minha menstruação não vem há 8 meses e está saindo leite do meu peito." },
        { trigger: "História menstrual", speech: "Sempre foi regular, vinha todo mês certinho. Parou de vir há uns 8 meses sem motivo." },
        { trigger: "Galactorreia", speech: "Percebi que quando aperto o bico do peito sai um líquido branco dos dois lados." },
        { trigger: "Cefaleia", speech: "Tenho dor de cabeça há alguns meses, é surda e na testa." },
        { trigger: "Visão", speech: "Não sinto que minha visão mudou. Não tenho visão dupla nem embaçada." },
        { trigger: "Libido", speech: "Meu interesse sexual diminuiu nos últimos meses." },
        { trigger: "Medicações", speech: "Não tomo nenhum remédio. Não uso anticoncepcional." },
        { trigger: "Desejo de gravidez", speech: "No momento não estou tentando engravidar, mas quero ter filhos no futuro." },
        { trigger: "Perguntas do paciente", speech: "Por que estou com leite no peito se não estou grávida? O que pode estar causando isso? Tenho algo no cérebro? Tem tratamento? Vou conseguir engravidar?" }
      ],
      pep: [
        { item: "Identificação e apresentação adequada", score: 0.5 },
        { item: "Investigou história menstrual detalhada", score: 0.5 },
        { item: "Afastou gravidez (β-HCG)", score: 1.0 },
        { item: "Caracterizou galactorreia", score: 0.5 },
        { item: "Investigou cefaleia", score: 0.5 },
        { item: "Perguntou sobre alterações visuais", score: 0.5 },
        { item: "Investigou uso de medicamentos hiperprolactinemiantes", score: 0.5 },
        { item: "Pesquisou redução de libido", score: 0.5 },
        { item: "Realizou exame das mamas", score: 0.5 },
        { item: "Solicitou β-HCG", score: 0.5 },
        { item: "Solicitou prolactina repetida", score: 1.0 },
        { item: "Solicitou TSH", score: 0.5 },
        { item: "Solicitou RNM de sela túrcica", score: 1.0 },
        { item: "Formulou diagnóstico de prolactinoma", score: 1.0 },
        { item: "Prescreveu cabergolina", score: 1.0 },
        { item: "Orientou controle de prolactina até normalizar", score: 0.5 }
      ],
      criticalErrors: [
        "Não solicitar prolactina",
        "Não repetir prolactina para confirmar",
        "Não solicitar RNM de sela túrcica",
        "Não descartar gravidez e hipotireoidismo",
        "Prescrever bromocriptina ao invés de cabergolina"
      ]
    },
    instD: {
      title: "Hiperprolactinemia e Prolactinoma",
      sections: [
        {
          h: "Definição",
          body: `<p>Hiperprolactinemia é prolactina sérica acima dos limites normais. Prolactinoma é adenoma hipofisário produtor de prolactina, micro se < 10 mm e macro se ≥ 10 mm.</p>`
        },
        {
          h: "Causas",
          body: `<ul><li>Fisiológicas: gravidez, amamentação, estresse.</li><li>Medicamentosas: antipsicóticos, metoclopramida, domperidona, opioides.</li><li>Patológicas: prolactinoma, lesão da haste hipofisária, hipotireoidismo.</li></ul>`
        },
        {
          h: "Diagnóstico",
          body: `<p>Confirmar prolactina elevada em duas dosagens e descartar gravidez e hipotireoidismo. RNM de sela túrcica é exame de escolha.</p>`
        },
        {
          h: "Tratamento",
          body: `<p>Cabergolina é primeira linha. Bromocriptina é alternativa. Ajustar dose lentamente e monitorar prolactina e imagem.</p>`
        }
      ]
    }
  },

// ── ESTAÇÃO 12: Fratura Vertebral por Fragilidade (Mulher, idosa) ─

  {
    id: 8,
    title: "Queda da própria altura há 2 semanas",
    sub: "Ambulatório de Ortopedia — Hospital Secundário",
    tema: "endocrinologia",
    topic: "metabolismo ósseo",
    level: "complexo",
    cardAccent: "#2980b9",
    instA: {
      scenario: "Você está no ambulatório de ortopedia de um hospital secundário.",
      patient: "M.L.S., 62 anos, sexo feminino, dona de casa.",
      complaint: "Paciente vem após fratura vertebral em L2 após queda da própria altura há 2 semanas e refere perda de altura nos últimos anos.",
      tasks: [
        "Realizar anamnese direcionada à fratura",
        "Investigar fatores de risco para osteoporose",
        "Solicitar exame físico pertinente",
        "Formular hipóteses diagnósticas",
        "Solicitar exames complementares adequados",
        "Definir conduta terapêutica e prevenção de novas fraturas"
      ]
    },
    instB: {
      vitals: {
        PA: "130/80 mmHg",
        FC: "72 bpm",
        Peso: "58 kg",
        Altura: "1.55 m",
        IMC: "24.1 kg/m²"
      },
      physicalGeneral: "Estado geral bom, hipercifose torácica acentuada e relato de perda de 4 cm de altura desde os 50 anos.",
      physicalSeg: [
        "Coluna: dor à palpação de L2, hipercifose torácica e mobilidade lombar reduzida por dor.",
        "Neurológico: força preservada, sensibilidade preservada, reflexos simétricos." 
      ],
      labs: [
        { test: "Cálcio total", val: "8.5 mg/dL", ref: "8.5 - 10.5", alt: false },
        { test: "Cálcio iônico", val: "1.18 mmol/L", ref: "1.15 - 1.35", alt: false },
        { test: "Fósforo", val: "3.2 mg/dL", ref: "2.5 - 4.5", alt: false },
        { test: "Fosfatase alcalina", val: "78 U/L", ref: "40 - 150", alt: false },
        { test: "PTH", val: "72 pg/mL", ref: "15 - 65", alt: true },
        { test: "25-OH vitamina D", val: "18 ng/mL", ref: "> 30 adequado", alt: true },
        { test: "TSH", val: "2.5 μUI/mL", ref: "0.4 - 4.0", alt: false },
        { test: "Creatinina", val: "1.0 mg/dL", ref: "0.6 - 1.2", alt: false },
        { test: "Hemograma", val: "Normal", ref: "—", alt: false },
        { test: "VHS", val: "22 mm/h", ref: "< 30", alt: false }
      ],
      image: {
        title: "Densitometria Óssea",
        report: `Coluna lombar L1-L4 T-score -3.2 e fêmur direito T-score -2.9, ambos compatíveis com osteoporose. Conclusão: osteoporose estabelecida com fratura vertebral por fragilidade.`
      }
    },
    instC: {
      diagnosis: "Osteoporose estabelecida com fratura vertebral por fragilidade e deficiência de vitamina D",
      context: "Mulher de 62 anos pós-menopausa com fratura vertebral após trauma mínimo. Densitometria confirma osteoporose grave e exames mostram deficiência de vitamina D e hiperparatireoidismo secundário discreto.",
      justify: "Fratura por fragilidade, T-score ≤ -2.5 e doença metabólica óssea confirmam osteoporose estabelecida, indicando tratamento medicamentoso e correção de vitamina D.",
      script: [
        { trigger: "Queixa principal", speech: "Doutora, caí em casa há 2 semanas e quebrei uma vértebra nas costas." },
        { trigger: "Sobre a queda", speech: "Foi uma queda boba, tropecei no tapete e caí sentada." },
        { trigger: "Sintomas atuais", speech: "A dor melhorou um pouco, mas ainda dói quando me movimento. Estou usando colete." },
        { trigger: "Perda de altura", speech: "Percebi que estou mais baixa. Tinha 1,59m, agora o médico mediu 1,55m." },
        { trigger: "Menopausa", speech: "Entrei na menopausa aos 52 anos. Nunca fiz reposição hormonal." },
        { trigger: "Hábitos", speech: "Sou sedentária, saio pouco de casa, não tomo muito sol e como pouco leite." },
        { trigger: "História familiar", speech: "Minha mãe teve osteoporose e quebrou o fêmur aos 75 anos." },
        { trigger: "Perguntas do paciente", speech: "Tenho osteoporose? Por que meus ossos estão fracos? Tem tratamento? Preciso tomar cálcio?" }
      ],
      pep: [
        { item: "Identificação e apresentação adequada", score: 0.5 },
        { item: "Caracterizou fratura por fragilidade", score: 0.5 },
        { item: "Investigou menopausa e uso de TRH", score: 0.5 },
        { item: "Perguntou sobre fraturas prévias", score: 0.5 },
        { item: "Investigou fatores de risco para osteoporose", score: 0.5 },
        { item: "Perguntou sobre exposição solar e vitamina D", score: 0.5 },
        { item: "Investigou história familiar de osteoporose", score: 0.5 },
        { item: "Perguntou sobre uso de corticoides ou outras medicações", score: 0.5 },
        { item: "Solicitou densitometria óssea", score: 1.0 },
        { item: "Solicitou cálcio, fósforo, vitamina D e PTH", score: 1.0 },
        { item: "Interpretou T-score ≤ -2.5 como osteoporose", score: 1.0 },
        { item: "Diagnosticou osteoporose estabelecida (osteoporose + fratura)", score: 0.5 },
        { item: "Prescreveu bisfosfonato", score: 1.0 },
        { item: "Prescreveu cálcio 1200 mg/dia", score: 0.5 },
        { item: "Prescreveu vitamina D adequada", score: 0.5 },
        { item: "Orientou prevenção de quedas", score: 0.5 }
      ],
      criticalErrors: [
        "Não solicitar densitometria óssea",
        "Não prescrever bisfosfonato em osteoporose estabelecida",
        "Prescrever apenas cálcio e vitamina D",
        "Não orientar prevenção de quedas",
        "Não dosar vitamina D"
      ]
    },
    instD: {
      title: "Osteoporose — Diagnóstico e Tratamento",
      sections: [
        {
          h: "Definição",
          body: `<p>Osteoporose é doença esquelética caracterizada por baixa massa óssea e deterioração da microarquitetura óssea, aumentando a fragilidade e risco de fraturas.</p>`
        },
        {
          h: "Diagnóstico",
          body: `<p>O padrão-ouro é a densitometria óssea (DXA). Osteoporose é T-score ≤ -2.5. Fratura por fragilidade confirma osteoporose estabelecida.</p>`
        },
        {
          h: "Tratamento",
          body: `<p>O tratamento inclui bisfosfonatos, cálcio, vitamina D, prevenção de quedas e mudança de estilo de vida.</p>`
        }
      ]
    }
  },

// ── ESTAÇÃO 13: Hipogonadismo Masculino (Homem, adulto) ─

  {
    id: 9,
    title: "Paciente refere fadiga crônica, redução da libido e dificuldade de ereção há 1 ano.",
    sub: "Ambulatório de Urologia — Hospital Secundário",
    tema: "endocrinologia",
    topic: "andrologia",
    level: "moderado",
    cardAccent: "#c0392b",
    instA: {
      scenario: "Você está no ambulatório de urologia de um hospital secundário.",
      patient: "R.F.A., 55 anos, sexo masculino, contador.",
      complaint: "Paciente refere fadiga crônica, redução da libido e dificuldade de ereção há 1 ano.",
      tasks: [
        "Realizar anamnese direcionada aos sintomas",
        "Investigar impacto na qualidade de vida",
        "Solicitar exame físico pertinente",
        "Formular hipóteses diagnósticas",
        "Solicitar exames complementares adequados",
        "Definir conduta terapêutica"
      ]
    },
    instB: {
      vitals: {
        PA: "135/85 mmHg",
        FC: "78 bpm",
        Peso: "96 kg",
        Altura: "1.75 m",
        IMC: "31.3 kg/m²"
      },
      physicalGeneral: "Obesidade centrípeta, ausência de ginecomastia, pelos corporais reduzidos.",
      physicalSeg: [
        "Genitais: pênis sem alterações; testículos volume 15 mL bilateral no limite inferior; epidídimos e cordões espermáticos sem alterações.",
        "Toque retal: próstata de volume normal, lisa, simétrica, fibroelástica, sem nódulos." 
      ],
      labs: [
        { test: "Testosterona total", val: "180 ng/dL", ref: "300 - 1000", alt: true },
        { test: "Testosterona total (repetida)", val: "195 ng/dL", ref: "300 - 1000", alt: true },
        { test: "Testosterona livre (calculada)", val: "3.2 ng/dL", ref: "5 - 21", alt: true },
        { test: "LH", val: "12 mUI/mL", ref: "1.5 - 9", alt: true },
        { test: "FSH", val: "15 mUI/mL", ref: "1.5 - 12", alt: true },
        { test: "Prolactina", val: "8 ng/mL", ref: "< 20", alt: false },
        { test: "TSH", val: "2.3 μUI/mL", ref: "0.4 - 4.0", alt: false },
        { test: "Glicemia jejum", val: "102 mg/dL", ref: "70 - 100", alt: true },
        { test: "HbA1c", val: "5.9%", ref: "< 5.7%", alt: true },
        { test: "Colesterol total", val: "235 mg/dL", ref: "< 200", alt: true },
        { test: "LDL", val: "158 mg/dL", ref: "< 130", alt: true },
        { test: "HDL", val: "35 mg/dL", ref: "> 40", alt: true },
        { test: "Triglicerídeos", val: "245 mg/dL", ref: "< 150", alt: true },
        { test: "PSA total", val: "1.2 ng/mL", ref: "< 4.0", alt: false },
        { test: "Hematócrito", val: "42%", ref: "40 - 54%", alt: false }
      ]
    },
    instC: {
      diagnosis: "Hipogonadismo primário (testicular) + síndrome metabólica + pré-diabetes",
      context: "Homem de 55 anos com sintomas de hipogonadismo e fatores metabólicos. Testosterona total baixa em duas dosagens com LH e FSH elevados caracterizam hipogonadismo primário. Prolactina e TSH normais descartam causas secundárias.",
      justify: "A combinação de testosterona baixa e gonadotrofinas elevadas confirma falência testicular, indicando reposição hormonal apropriada.",
      script: [
        { trigger: "Queixa principal", speech: "Doutor, estou sem energia, sem vontade de fazer nada há mais de 1 ano." },
        { trigger: "Sobre fadiga", speech: "Acordo cansado, não tenho disposição para trabalhar." },
        { trigger: "Sobre libido", speech: "Minha libido caiu muito. Não tenho mais vontade de ter relações como antes." },
        { trigger: "Sobre ereção", speech: "Tenho dificuldade de manter a ereção. Isso está afetando meu relacionamento." },
        { trigger: "Humor", speech: "Me sinto desanimado, às vezes irritado." },
        { trigger: "Sono", speech: "Durmo mal, acordo várias vezes à noite. Minha esposa diz que ronco muito." },
        { trigger: "Peso", speech: "Engordei uns 10 kg nos últimos anos, principalmente na barriga. Perdi massa muscular." },
        { trigger: "História", speech: "Não tenho doenças, não tomo remédio. Nunca tive problema nos testículos, não tive caxumba." },
        { trigger: "Hábitos", speech: "Sedentário, não faço exercício. Dieta ruim, como muito carboidrato. Não fumo, bebo socialmente." },
        { trigger: "Perguntas do paciente", speech: "É normal isso na minha idade? Tem tratamento? É hormônio?" }
      ],
      pep: [
        { item: "Identificação e apresentação adequada", score: 0.5 },
        { item: "Investigou fadiga, redução de energia e concentração", score: 0.5 },
        { item: "Perguntou sobre redução de libido", score: 0.5 },
        { item: "Investigou disfunção erétil", score: 0.5 },
        { item: "Perguntou sobre alterações de humor/irritabilidade", score: 0.5 },
        { item: "Investigou perda de massa muscular e ganho de gordura", score: 0.5 },
        { item: "Perguntou sobre qualidade do sono e apneia", score: 0.5 },
        { item: "Pesquisou antecedentes testiculares", score: 0.5 },
        { item: "Solicitou exame dos testículos", score: 0.5 },
        { item: "Solicitou testosterona total (2 dosagens)", score: 1.0 },
        { item: "Solicitou LH e FSH", score: 1.0 },
        { item: "Solicitou prolactina e TSH", score: 0.5 },
        { item: "Solicitou PSA e hematócrito", score: 0.5 },
        { item: "Diagnosticou hipogonadismo primário", score: 1.0 },
        { item: "Prescreveu reposição de testosterona", score: 1.0 },
        { item: "Orientou monitoramento", score: 0.5 }
      ],
      criticalErrors: [
        "Não dosar testosterona pela manhã",
        "Não repetir testosterona para confirmar",
        "Não dosar LH/FSH",
        "Não solicitar PSA antes de iniciar reposição",
        "Prescrever reposição sem confirmação laboratorial"
      ]
    },
    instD: {
      title: "Hipogonadismo Masculino",
      sections: [
        {
          h: "Classificação",
          body: `<p>Hipogonadismo primário é caracterizado por testosterona baixa com LH e FSH elevados; hipogonadismo secundário apresenta LH/FSH baixos ou normais.</p>`
        },
        {
          h: "Diagnóstico",
          body: `<p>Duas dosagens de testosterona total matinal confirmam o diagnóstico. LH e FSH diferenciam primário de secundário.</p>`
        },
        {
          h: "Tratamento",
          body: `<p>A terapia de reposição de testosterona é indicada após confirmação do diagnóstico e avaliação de contraindicações, com monitoramento de PSA e hematócrito.</p>`
        }
      ]
    }
  },

// ── ESTAÇÃO 14: Menopausa Sintomática (Mulher, adulta) ─

  {
    id: 10,
    title: "Fogachos intensos e sintomas climatéricos",
    sub: "Ambulatório de Ginecologia — Hospital Secundário",
    tema: "endocrinologia",
    topic: "climatério",
    level: "moderado",
    cardAccent: "#e67e22",
    instA: {
      scenario: "Você está no ambulatório de ginecologia de um hospital secundário.",
      patient: "S.M.P., 52 anos, sexo feminino, gerente comercial.",
      complaint: "Paciente refere fogachos intensos há 6 meses, 10-15 episódios por dia, acordando à noite, além de secura vaginal e dispareunia.",
      tasks: [
        "Apresente-se e estabeleça vínculo com o paciente.",
        "Realize anamnese dirigida ao quadro atual.",
        "Avalie o impacto dos sintomas na qualidade de vida.",
        "Solicite e interprete os dados do exame físico e exames complementares.",
        "Formule a hipótese diagnóstica.",
        "Defina a conduta e oriente o paciente sobre as opções terapêuticas."
      ]
    },
    instB: {
      vitals: {
        PA: "125/75 mmHg",
        FC: "72 bpm",
        Peso: "68 kg",
        Altura: "1.64 m",
        IMC: "25.3 kg/m²"
      },
      physicalGeneral: "Estado geral bom, sem sinais de hiperandrogenismo.",
      physicalSeg: [
        "Mamas simétricas sem nódulos, sem galactorreia ou retrações.",
        "Genitália externa com mucosa vaginal ressecada e petéquias leves.",
        "Toque vaginal: útero de volume normal, móvel e indolor; anexos não palpáveis."
      ],
      labs: [
        { test: "TSH", val: "2.8 μUI/mL", ref: "0.4 - 4.0", alt: false },
        { test: "Glicemia jejum", val: "92 mg/dL", ref: "70 - 100", alt: false },
        { test: "Colesterol total", val: "235 mg/dL", ref: "< 200", alt: true },
        { test: "LDL", val: "152 mg/dL", ref: "< 130", alt: true },
        { test: "HDL", val: "58 mg/dL", ref: "> 50", alt: false },
        { test: "Triglicerídeos", val: "125 mg/dL", ref: "< 150", alt: false },
        { test: "Creatinina", val: "0.9 mg/dL", ref: "0.6 - 1.2", alt: false },
        { test: "TGO", val: "28 U/L", ref: "< 40", alt: false },
        { test: "TGP", val: "32 U/L", ref: "< 40", alt: false }
      ],
      image: {
        title: "Mamografia e Ultrassom Transvaginal",
        report: `Mamografia recente BI-RADS 1 com parênquima heterogêneo e sem lesões suspeitas. Ultrassom transvaginal mostra útero e anexos de aspecto habitual e endométrio atrófico de 4 mm.`
      }
    },
    instC: {
      diagnosis: "Menopausa sintomática moderada a grave",
      context: "Mulher de 52 anos com amenorreia há 14 meses, fogachos intensos e sintoma geniturinário. Hemograma e exames metabólicos compatíveis com menopausa, sem contraindicações claras à terapia hormonal.",
      justify: "FSH elevado e estradiol baixo confirmam menopausa. Sintomas significativos com impacto na qualidade de vida justificam indicação de TRH.",
      script: [
        { trigger: "Queixa principal", speech: "Doutora, estou com fogachos terríveis, uns 10-15 por dia. Está insuportável." },
        { trigger: "Fogachos", speech: "De repente sinto uma onda de calor que sobe pelo corpo, fico toda vermelha, suando. Dura uns 2-3 minutos, mas é muito desconfortável." },
        { trigger: "Sono", speech: "Durmo muito mal por causa dos fogachos noturnos. Acordo cansada, irritada." },
        { trigger: "Genitourinário", speech: "Sinto muita secura vaginal. A relação sexual está dolorosa, queima." },
        { trigger: "História menstrual", speech: "Minha menstruação parou há mais de 1 ano. Antes era regular." },
        { trigger: "Antecedentes", speech: "Não tenho doenças. Não tomo nenhum remédio. Não fumo, nunca fumei. Não bebo." },
        { trigger: "História ginecológica", speech: "Nunca tive câncer de mama ou de útero. Ninguém na família teve câncer de mama. Fiz mamografia há 3 meses, estava normal." },
        { trigger: "Perguntas da paciente", speech: "Isso é menopausa? Vou ficar assim para sempre? Tem tratamento? Posso tomar hormônio? Hormônio não causa câncer?" }
      ],
      pep: [
        { item: "Identificação e apresentação adequada", score: 0.5 },
        { item: "Investigou detalhadamente os fogachos", score: 0.5 },
        { item: "Perguntou sobre sudorese noturna e impacto no sono", score: 0.5 },
        { item: "Investigou sintomas genitourinários", score: 0.5 },
        { item: "Avaliou impacto na qualidade de vida", score: 0.5 },
        { item: "Confirmou amenorreia > 12 meses", score: 0.5 },
        { item: "Investigou contraindicações à TRH", score: 1.0 },
        { item: "Revisou mamografia recente", score: 0.5 },
        { item: "Solicitou ultrassom transvaginal", score: 0.5 },
        { item: "Explicou risco-benefício da TRH", score: 1.0 },
        { item: "Prescreveu estrogênio + progestogênio", score: 1.0 },
        { item: "Escolheu via e dose adequadas", score: 1.0 },
        { item: "Orientou reavaliação anual", score: 0.5 },
        { item: "Discutiu alternativas não hormonais", score: 1.0 }
      ],
      criticalErrors: [
        "Prescrever estrogênio isolado em mulher com útero íntegro",
        "Não investigar contraindicações antes de prescrever TRH",
        "Prescrever TRH sem mamografia prévia",
        "Não orientar sobre risco-benefício da TRH",
        "Usar dose excessiva de estrogênio"
      ]
    },
    instD: {
      title: "Menopausa e Terapia de Reposição Hormonal",
      sections: [
        {
          h: "Definição",
          body: `<p>Menopausa é a cessação permanente da menstruação por 12 meses consecutivos. A síndrome climatérica inclui fogachos, sudorese e sintomas geniturinários.</p>`
        },
        {
          h: "Indicações",
          body: `<p>TRH é indicada para sintomas vasomotores moderados a graves e síndrome geniturinária quando não há contraindicações.</p>`
        },
        {
          h: "Esquemas",
          body: `<p>Mulher com útero íntegro deve receber estrogênio combinado com progestogênio. A via transdérmica é preferida quando possível.</p>`
        }
      ]
    }
  },
  {
    id: 11,
    title: "Paciente encaminhada para avaliação de cirurgia bariátrica. Refere dificuldade de perder peso apesar de múltiplas tentativas de dieta, com piora progressiva nos últimos 10 anos.",
    sub: "Ambulatório de cirurgia bariátrica (hospital terciário)",
    tema: "endocrinologia",
    topic: "obesidade",
    cardAccent: "#d1495b",

    instA: {
      scenario: "Você está no ambulatório de cirurgia bariátrica de um hospital terciário.",
      patient: "A.C.L., 38 anos, sexo feminino, auxiliar administrativa.",
      complaint: "Paciente encaminhada para avaliação de cirurgia bariátrica. Refere dificuldade de perder peso apesar de múltiplas tentativas de dieta, com piora progressiva nos últimos 10 anos.",
      tasks: [
        "Apresente-se e estabeleça vínculo com o paciente.",
        "Realize anamnese dirigida ao quadro atual e ao histórico de tentativas de tratamento.",
        "Solicite e interprete os dados do exame físico.",
        "Solicite os exames complementares adequados.",
        "Formule a hipótese diagnóstica.",
        "Defina a conduta e oriente o paciente sobre as opções terapêuticas."
      ]
    },

    instB: {
      vitals: {
        PA: "148/95 mmHg",
        FC: "82 bpm",
        FR: "18 irpm",
        Peso: "128 kg",
        Altura: "1.60 m",
        IMC: "50.0 kg/m²",
        CA: "125 cm"
      },
      physicalGeneral: "Obesidade grau III (mórbida), distribuição centrípeta, acantose nigricans cervical, axilas e virilha, estrias abdominais e paniculopatia edematofibroesclerótica em coxas.",
      physicalSeg: [
        "Exame cardiovascular: RCR 2T, BNF, sem sopros; pulsos periféricos presentes.",
        "Exame respiratório: MV presente bilateralmente, sem RA; expansibilidade reduzida.",
        "Membros inferiores: edema 1+/4+ em tornozelos bilateralmente; varizes em membros inferiores."
      ],
      labs: [
        { test: "Glicemia jejum", val: "115 mg/dL", ref: "70-100", alt: true },
        { test: "HbA1c", val: "6.3%", ref: "< 5.7%", alt: true },
        { test: "Insulina jejum", val: "32 μUI/mL", ref: "2-25", alt: true },
        { test: "HOMA-IR", val: "9.1", ref: "< 2.5", alt: true },
        { test: "Colesterol total", val: "248 mg/dL", ref: "< 200", alt: true },
        { test: "LDL", val: "168 mg/dL", ref: "< 130", alt: true },
        { test: "HDL", val: "38 mg/dL", ref: "> 50", alt: true },
        { test: "Triglicerídeos", val: "285 mg/dL", ref: "< 150", alt: true },
        { test: "TGO", val: "58 U/L", ref: "< 40", alt: true },
        { test: "TGP", val: "72 U/L", ref: "< 40", alt: true },
        { test: "GGT", val: "85 U/L", ref: "< 50", alt: true },
        { test: "Creatinina", val: "1.0 mg/dL", ref: "0.6-1.2", alt: false },
        { test: "TSH", val: "3.2 μUI/mL", ref: "0.4-4.0", alt: false },
        { test: "Ácido úrico", val: "7.2 mg/dL", ref: "2.5-6.0", alt: true }
      ],
      image: null,
      note: "Ultrassom de abdome total: fígado aumentado de volume, ecotextura grosseira e difusamente hiperecogênica (esteatose hepática grau II-III). Vesícula biliar sem cálculos. Polissonografia: IAH 32 eventos/hora, saturação mínima 82%, classificada como apneia obstrutiva do sono moderada."
    },

    instC: {
      diagnosis: "Obesidade grau III (mórbida) com pré-diabetes, dislipidemia, hipertensão arterial estágio 1, esteatose hepática, síndrome de apneia obstrutiva do sono moderada e resistência insulínica grave.",
      context: "Mulher de 38 anos com IMC 50.0 kg/m², CA 125 cm, história de obesidade de longa data e múltiplas comorbidades que preenchem critérios para cirurgia bariátrica. Exames confirmam pré-diabetes, dislipidemia, alterações hepáticas e SAOS moderada.",
      justify: "Paciente preenche indicação de cirurgia bariátrica segundo IMC ≥ 40 kg/m² com comorbidades. A presença de resistência insulínica grave, esteatose hepática e SAOS reforça a necessidade de avaliação multidisciplinar e preparo pré-operatório.",
      script: [
        { trigger: "Queixa principal", speech: "Doutora, estou com obesidade há muitos anos e não consigo emagrecer. Vim avaliar a cirurgia bariátrica." },
        { trigger: "História ponderal", speech: "Sempre fui gordinha desde criança. Piorou muito depois da gravidez, há 10 anos. Hoje peso 128 quilos, meu peso máximo." },
        { trigger: "Tentativas prévias", speech: "Já fiz várias dietas: nutricionista, dietas da moda, shakes. Perco um pouco de peso mas sempre volto. Já tentei academia mas é difícil, me canso muito. Nunca usei remédio para emagrecer." },
        { trigger: "Comorbidades", speech: "Tenho pressão alta, tomo losartana. Me disseram que tenho pré-diabetes. Meu colesterol é alto. Ronco muito à noite, meu marido reclama." },
        { trigger: "Sintomas de SAOS", speech: "Acordo cansada, com sono durante o dia. Tenho muita falta de ar aos esforços." },
        { trigger: "Impacto na vida", speech: "Não consigo fazer coisas simples, como subir escada. Me sinto mal com meu corpo, tenho vergonha. Dificuldade de encontrar roupas. Não consigo brincar direito com meu filho." },
        { trigger: "Motivação", speech: "Quero muito fazer a cirurgia. Tenho medo de ficar doente, minha mãe tem diabetes. Quero ter qualidade de vida, viver mais." },
        { trigger: "Pergunta sobre indicação", speech: "Eu tenho indicação para cirurgia?" },
        { trigger: "Pergunta sobre riscos", speech: "Como é a cirurgia? Vou precisar fazer tratamento antes? Quais são os riscos? Vou emagrecer quanto?" }
      ],
      pep: [
        {
          section: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
          items: [
            { item: "Apresentação adequada e identificação do paciente", score: 0.5 },
            { item: "Usa linguagem acessível e demonstra empatia", score: 0.5 },
            { item: "Explora motivação e expectativas realistas", score: 0.5 },
            { item: "Explica riscos e benefícios da cirurgia bariátrica", score: 1.0 }
          ]
        },
        {
          section: "ANAMNESE",
          items: [
            { item: "Investigou história ponderal e evolução do peso", score: 0.5 },
            { item: "Investigou tentativas prévias de tratamento", score: 0.5 },
            { item: "Investigou comorbidades associadas à obesidade", score: 1.0 },
            { item: "Avaliou sintomas de SAOS e impacto funcional", score: 0.5 },
            { item: "Investigou efeitos na qualidade de vida", score: 0.5 }
          ]
        },
        {
          section: "EXAMES E CONDUTA",
          items: [
            { item: "Calculou IMC corretamente e identificou obesidade grau III", score: 0.5 },
            { item: "Interpreta exames metabólicos e hepáticos relevantes", score: 0.5 },
            { item: "Reconhece indicação para avaliação multidisciplinar pré-operatória", score: 0.5 },
            { item: "Orientou sobre tratamento clínico e cirúrgico correlacionado às comorbidades", score: 0.5 },
            { item: "Abordou a cirurgia como ferramenta e não como solução mágica", score: 0.5 }
          ]
        }
      ],
      criticalErrors: [
        "Não calcular IMC (essencial para classificação)",
        "Não investigar comorbidades que determinam indicação para cirurgia",
        "Indicar cirurgia sem avaliação multidisciplinar prévia",
        "Não solicitar ou mencionar polissonografia em paciente com SAOS suspeita",
        "Prometer perda de peso específica ou tratar cirurgia como solução mágica"
      ]
    },

    instD: {
      title: "Obesidade Grau III e Cirurgia Bariátrica",
      sections: [
        {
          h: "Classificação da Obesidade (OMS — IMC)",
          body: `<table><tr><th>Classificação</th><th>IMC (kg/m²)</th></tr><tr><td>Baixo peso</td><td>< 18.5</td></tr><tr><td>Peso normal</td><td>18.5 - 24.9</td></tr><tr><td>Sobrepeso</td><td>25.0 - 29.9</td></tr><tr><td>Obesidade grau I</td><td>30.0 - 34.9</td></tr><tr><td>Obesidade grau II</td><td>35.0 - 39.9</td></tr><tr><td><strong>Obesidade grau III (mórbida)</strong></td><td><strong>≥ 40.0</strong></td></tr></table>`
        },
        {
          h: "Circunferência Abdominal (CA)",
          body: `<ul><li>Risco aumentado: > 94 cm (homens), > 80 cm (mulheres)</li><li>Risco muito aumentado: > 102 cm (homens), > 88 cm (mulheres)</li></ul>`
        },
        {
          h: "Comorbidades Associadas à Obesidade",
          body: `<p><strong>Metabólicas:</strong></p><ul><li>Diabetes mellitus tipo 2</li><li>Resistência insulínica e síndrome metabólica</li><li>Dislipidemia</li><li>Esteatose hepática não alcoólica</li><li>Hiperuricemia</li></ul><p><strong>Cardiovasculares:</strong></p><ul><li>Hipertensão arterial</li><li>Doença arterial coronariana</li><li>Insuficiência cardíaca</li></ul><p><strong>Respiratórias:</strong></p><ul><li>Síndrome da apneia obstrutiva do sono (SAOS)</li><li>Síndrome de hipoventilação da obesidade</li></ul>`
        },
        {
          h: "Critérios para Cirurgia Bariátrica",
          body: `<p><strong>Indicações:</strong></p><ol><li>IMC ≥ 40 kg/m²</li><li>IMC ≥ 35 kg/m² com pelo menos uma comorbidade relevante (diabetes tipo 2, hipertensão, SAOS, dislipidemia, esteatose hepática, doença articular degenerativa)</li></ol><p><strong>Critérios adicionais obrigatórios:</strong></p><ul><li>Idade 18-65 anos</li><li>Tempo de evolução da obesidade ≥ 2 anos</li><li>Falha de tratamento clínico prévio</li><li>Capacidade de compreender riscos e benefícios</li><li>Ausência de contraindicações</li></ul>`
        },
        {
          h: "Avaliação Pré-operatória Multidisciplinar",
          body: `<ul><li>Endocrinologia: otimizar comorbidades</li><li>Nutrição: avaliação nutricional e educação alimentar</li><li>Psicologia/Psiquiatria: motivação e expectativas</li><li>Cardiologia: ECG e ecocardiograma</li><li>Pneumologia: polissonografia obrigatória se houver suspeita de SAOS</li><li>Gastroenterologia: endoscopia digestiva alta</li><li>Cirurgia: técnicas, riscos e consentimento</li></ul>`
        },
        {
          h: "Técnicas Cirúrgicas Principais",
          body: `<p><strong>Bypass gástrico em Y-de-Roux</strong> — reservatório gástrico de cerca de 30 mL, mecanismo restritivo e disabsortivo, perda de peso esperada de 60-70% do excesso peso.</p><p><strong>Gastronomia vertical (Sleeve)</strong> — remoção de 70-80% do estômago, perda de peso esperada de 50-60% do excesso peso.</p>`
        },
        {
          h: "Cuidados e Seguimento Pós-operatório",
          body: `<p><strong>Suplementação obrigatória:</strong></p><ul><li>Multivitamínico diário</li><li>Vitamina B12 1000-2000 mcg/mês IM</li><li>Cálcio 1200-1500 mg + Vitamina D 3000 UI</li><li>Ferro se deficiência</li></ul><p><strong>Resultados esperados:</strong></p><ul><li>Remissão de diabetes tipo 2 em 60-80%</li><li>Melhora da hipertensão em 50-70%</li><li>Melhora da dislipidemia em 70-80%</li><li>Resolução de SAOS em 70-85%</li><li>Melhora da esteatose hepática em 90%</li></ul>`
        }
      ]
    }
  },
  {
    id: 12,
    title: "J.S.M., 54 anos, sexo masculino, motorista de ônibus.",
    sub: "Ambulatório de endocrinologia (hospital secundário)",
    tema: "endocrinologia",
    topic: "diabetes",
    cardAccent: "#e76f51",

    instA: {
      scenario: "Você está no ambulatório de endocrinologia de um hospital secundário.",
      patient: "J.S.M., 54 anos, sexo masculino, motorista de ônibus.",
      complaint: "Paciente com diabetes mellitus tipo 2 há 8 anos, em uso de metformina 2000 mg/dia, retorna para consulta de seguimento com controle glicêmico inadequado. Glicemias capilares domiciliares entre 180-280 mg/dL.",
      tasks: [
        "Apresente-se e estabeleça vínculo com o paciente.",
        "Realize anamnese dirigida ao quadro atual e à adesão ao tratamento.",
        "Solicite e interprete os dados do exame físico.",
        "Interprete os exames complementares disponíveis.",
        "Formule a hipótese diagnóstica e identifique eventuais complicações.",
        "Defina a conduta e oriente o paciente sobre o seguimento."
      ]
    },

    instB: {
      vitals: { PA:"142/88 mmHg", FC:"76 bpm", Peso:"88 kg", Altura:"1.72 m", IMC:"29.8 kg/m²", CA:"102 cm" },
      physicalGeneral: "Exame dos pés sem calosidades ou úlceras, pulsos pedioso e tibial posteriores presentes, sensibilidade ao monofilamento de 10g alterada em hálux e plantares, reflexo aquileu diminuído e deformidade em garra.",
      physicalSeg: [
        "Fundo de olho: microaneurismas e pequenas hemorragias retinianas bilaterais, sem exsudatos ou edema macular evidente, sugestivo de retinopatia diabética não proliferativa leve."
      ],
      labs: [
        { test: "Glicemia jejum", val: "198 mg/dL", ref: "70-100", alt: true },
        { test: "HbA1c", val: "9.8%", ref: "< 7.0% meta", alt: true },
        { test: "Colesterol total", val: "215 mg/dL", ref: "< 200", alt: true },
        { test: "LDL", val: "138 mg/dL", ref: "< 70 meta DM", alt: true },
        { test: "HDL", val: "42 mg/dL", ref: "> 40", alt: false },
        { test: "Triglicerídeos", val: "245 mg/dL", ref: "< 150", alt: true },
        { test: "Creatinina", val: "1.3 mg/dL", ref: "0.7-1.3", alt: false },
        { test: "TFG (CKD-EPI)", val: "62 mL/min/1.73m²", ref: "> 90", alt: true },
        { test: "Relação albumina/creatinina urinária", val: "85 mg/g", ref: "< 30 normal", alt: true },
        { test: "EAS", val: "Proteinúria +, sem cilindros", ref: "—", alt: true },
        { test: "TSH", val: "2.8 μUI/mL", ref: "0.4-4.0", alt: false }
      ],
      image: null,
      note: "Interpretação: diabetes descompensado, DRC G3a com albuminúria moderada e retinopatia leve."
    },

    instC: {
      diagnosis: "Diabetes mellitus tipo 2 descompensado com neuropatia periférica, nefropatia diabética, retinopatia diabética leve, dislipidemia e hipertensão.",
      context: "Homem de 54 anos com DM2 há 8 anos em metformina 2000 mg/dia, HbA1c 9.8% e glicemias domiciliares entre 180-280 mg/dL. Exames mostram neuropatia periférica, DRC G3a e retinopatia diabética não proliferativa leve.",
      justify: "Complicações microvasculares e controle glicêmico inadequado justificam intensificação terapêutica, com possibilidade de iSGLT2 ou agonista GLP-1, ou insulinização se necessário.",
      script: [
        { trigger: "Queixa principal", speech: "Doutor, meu açúcar não está controlando. Minhas glicemias estão sempre altas." },
        { trigger: "Controle domiciliar", speech: "Meço em casa, está entre 180 e 280 quase sempre. De manhã em jejum está 180-200. Depois das refeições sobe para 250-280." },
        { trigger: "Medicações", speech: "Tomo metformina 1000 mg de manhã e à noite. Tomo losartana para pressão. Às vezes esqueço de tomar, mas na maioria dos dias tomo certinho." },
        { trigger: "Alimentação", speech: "Tento fazer dieta, mas é difícil. Como bastante arroz, feijão, pão. Às vezes como doce, não resisto." },
        { trigger: "Exercício", speech: "Trabalho dirigindo ônibus, fico sentado o dia todo. Não faço exercício, não tenho tempo." },
        { trigger: "Sintomas", speech: "Sinto muita sede, bebo muita água. Urino muito, várias vezes à noite. Às vezes sinto formigamento nos pés à noite. Sinto que meus pés estão dormentes." },
        { trigger: "Visão", speech: "Visão está normal, enxergo bem. Nunca fui no oftalmologista." },
        { trigger: "Preocupações", speech: "Tenho medo de ter complicações. Meu pai teve diabetes, ficou cego e precisou amputar a perna. Vou precisar de insulina?" }
      ],
      pep: [
        {
          section: "ANAMNESE",
          items: [
            { item: "Investigou adesão ao tratamento e hábitos de vida", score: 0.5 },
            { item: "Revisou glicemias domiciliares e sintomas de hiperglicemia", score: 0.5 },
            { item: "Investigou neuropatia e cuidados com os pés", score: 0.5 }
          ]
        },
        {
          section: "EXAMES",
          items: [
            { item: "Interpretou HbA1c 9.8% como descompensação grave", score: 1.0 },
            { item: "Avaliou função renal e albuminúria", score: 0.5 },
            { item: "Reconheceu retinopatia e necessidade de oftalmologia", score: 0.5 }
          ]
        },
        {
          section: "CONDUTA",
          items: [
            { item: "Intensificou tratamento farmacológico ou considerou insulinização", score: 1.0 },
            { item: "Orientou metas glicêmicas e automonitoramento", score: 0.5 },
            { item: "Orientou mudanças de estilo de vida e prevenção de complicações", score: 0.5 }
          ]
        }
      ],
      criticalErrors: [
        "Não examinar os pés em paciente diabético",
        "Não intensificar tratamento com HbA1c 9.8%",
        "Não encaminhar para oftalmologia com retinopatia suspeita",
        "Não avaliar função renal em paciente com albuminúria"
      ]
    },

    instD: {
      title: "Diabetes Mellitus Tipo 2 — Manejo do Controle Inadequado",
      sections: [
        {
          h: "Avaliação do Controle",
          body: "<p><strong>HbA1c</strong>: alvo geral < 7.0%; individualizado 6.5-8.0%. Falha terapêutica quando > 9.0%. Intensificar tratamento após 3 meses acima da meta.</p>"
        },
        {
          h: "Escada Terapêutica",
          body: "<p>1ª linha: metformina + mudança de estilo de vida. 2ª linha: iSGLT2 ou agonista GLP-1 em alto risco cardiovascular; iSGLT2 em DRC/albuminúria; agonista GLP-1 em obesidade; sulfonilureia se custo limitado.</p>"
        },
        {
          h: "Insulinização",
          body: "<p>Indicações absolutas: HbA1c ≥ 10%, glicemia ≥ 300 mg/dL, sintomas graves ou cetoacidose. Relativas: HbA1c > 9% após otimização ou DRC avançada. Esquema inicial basal 0.2 UI/kg ao deitar.</p>"
        }
      ]
    }
  },
  {
    id: 13,
    title: "Amenorreia há 9 meses",
    sub: "Ambulatório de endocrinologia de um hospital terciário",
    tema: "endocrinologia",
    topic: "hiperandrogenismo",
    cardAccent: "#f4a261",

    instA: {
      scenario: "Você está no ambulatório de endocrinologia de um hospital terciário.",
      patient: "P.R.S., 26 anos, sexo feminino, estudante universitária.",
      complaint: "Paciente refere crescimento excessivo de pelos no rosto, tórax e abdome há 3 anos, com piora progressiva. Amenorreia há 8 meses.",
      tasks: [
        "Apresente-se e estabeleça vínculo com o paciente.",
        "Realize anamnese dirigida ao quadro atual.",
        "Solicite e interprete os dados do exame físico.",
        "Formule a hipótese diagnóstica.",
        "Solicite os exames complementares adequados.",
        "Defina a conduta e oriente o paciente."
      ]
    },

    instB: {
      vitals: { PA:"125/80 mmHg", FC:"78 bpm", Peso:"75 kg", Altura:"1.62 m", IMC:"28.6 kg/m²" },
      physicalGeneral: "Hirsutismo acentuado, acne severa, alopecia androgenética inicial, clitoromegalia discreta e voz levemente grave.",
      physicalSeg: [
        "Hirsutismo com Ferriman-Gallwey 22: pelos grossos em face, tórax, linha alba, região lombar e coxas.",
        "Acne severa em face, tórax e dorso.",
        "Alopecia androgenética com rarefação frontal e vértice."
      ],
      labs: [
        { test: "β-HCG", val: "< 2 mUI/mL", ref: "< 5", alt: false },
        { test: "TSH", val: "2.1 μUI/mL", ref: "0.4-4.0", alt: false },
        { test: "Prolactina", val: "15 ng/mL", ref: "< 25", alt: false },
        { test: "LH", val: "8.5 mUI/mL", ref: "2-10", alt: false },
        { test: "FSH", val: "4.8 mUI/mL", ref: "3-10", alt: false },
        { test: "Testosterona total", val: "285 ng/dL", ref: "14-76", alt: true },
        { test: "Testosterona livre", val: "28 pg/mL", ref: "< 2.2", alt: true },
        { test: "DHEA-S", val: "785 μg/dL", ref: "35-430", alt: true },
        { test: "17-OH progesterona basal", val: "12 ng/mL", ref: "< 2.0", alt: true },
        { test: "Androstenediona", val: "8.5 ng/mL", ref: "0.6-3.1", alt: true }
      ],
      image: null,
      note: "RNM adrenais normais. Teste ACTH com 17-OHP pós-ACTH 45 ng/mL, compatível com hiperplasia adrenal congênita não clássica."
    },

    instC: {
      diagnosis: "Hiperplasia adrenal congênita forma não clássica por deficiência parcial de 21-hidroxilase.",
      context: "Mulher de 26 anos com hirsutismo severo, acne grave, alopecia androgenética e amenorreia de 8 meses. Testosterone e DHEA-S elevadas, 17-OHP basal e pós-ACTH confirmam HAC não clássica. RNM descarta tumor adrenal.",
      justify: "Elevados andrógenos plasmáticos junto a resposta exagerada do teste ACTH e adrenais normais sustentam o diagnóstico de HAC não clássica, exigindo tratamento com glicocorticoide e avaliação de terapias adjuvantes.",
      script: [
        { trigger: "Queixa principal", speech: "Doutora, estou com muito pelo no rosto, parece barba de homem." },
        { trigger: "Hirsutismo", speech: "Começou há 3 anos, piorando progressivamente. Preciso depilar rosto toda semana. Pelos grossos no peito, barriga, costas." },
        { trigger: "Acne", speech: "Tenho muita espinha no rosto, peito e costas." },
        { trigger: "Alopecia", speech: "Meu cabelo está caindo, especialmente na frente." },
        { trigger: "Amenorreia", speech: "Minha menstruação parou há 8 meses." },
        { trigger: "História menstrual", speech: "Menstruação sempre foi irregular. Primeira menstruação aos 14 anos." },
        { trigger: "Impacto", speech: "Baixa autoestima, me sinto masculinizada. Dificuldade nos relacionamentos." },
        { trigger: "Perguntas", speech: "O que eu tenho? Por que estou assim? Tem tratamento? Os pelos vão diminuir?" }
      ],
      pep: [
        {
          section: "ANAMNESE",
          items: [
            { item: "Caracterizou hirsutismo e evolução dos sintomas", score: 0.5 },
            { item: "Investigou virilização: voz, clitoromegalia e alopecia", score: 1.0 },
            { item: "Perguntou sobre história menstrual e amenorreia", score: 0.5 }
          ]
        },
        {
          section: "EXAMES",
          items: [
            { item: "Afastou gravidez com β-HCG", score: 0.5 },
            { item: "Solicitou testosterona total e livre", score: 1.0 },
            { item: "Solicitou DHEA-S e 17-OH progesterona", score: 1.5 },
            { item: "Solicitou RNM adrenais para excluir tumor", score: 0.5 }
          ]
        },
        {
          section: "CONDUTA",
          items: [
            { item: "Diagnosticou HAC não clássica por deficiência de 21-hidroxilase", score: 1.0 },
            { item: "Prescreveu glicocorticoide e discutiu terapia adjuvante", score: 1.0 },
            { item: "Discutiu tratamento cosmético e impacto psicológico", score: 0.5 }
          ]
        }
      ],
      criticalErrors: [
        "Não solicitar 17-OH progesterona",
        "Não realizar teste ACTH",
        "Não descartar tumor adrenal com RNM",
        "Prescrever apenas anticoncepcional sem glicocorticoide"
      ]
    },

    instD: {
      title: "Hiperplasia Adrenal Congênita Não Clássica",
      sections: [
        {
          h: "Definição",
          body: "<p>Hiperandrogenismo pós-puberal causado por deficiência parcial de 21-hidroxilase, com virilização e amenorreia.</p>"
        },
        {
          h: "Diagnóstico",
          body: "<ul><li>17-OH progesterona basal > 2 ng/mL</li><li>Teste ACTH: 17-OHP pós-ACTH > 10 ng/mL</li><li>RNM adrenais para excluir tumor</li></ul>"
        },
        {
          h: "Tratamento",
          body: "<p>Glicocorticoide com hidrocortisona 10-15 mg/dia ou dexametasona 0.25-0.5 mg/dia. Antiandrogênicos e medidas cosméticas podem ser usados como adjuvantes.</p>"
        }
      ]
    }
  },
  {
    id: 14,
    title: "Paciente refere fadiga progressiva há 1 ano, cefaleia frontal recorrente, redução de libido e ganho de peso de 8 kg. Amigos comentaram que seu rosto está diferente.",
    sub: "Ambulatório de endocrinologia (hospital terciário)",
    tema: "endocrinologia",
    topic: "pituitario",
    cardAccent: "#577590",

    instA: {
      scenario: "Você está no ambulatório de endocrinologia de um hospital terciário.",
      patient: "M.A.F., 42 anos, sexo masculino, professor.",
      complaint: "Paciente refere fadiga progressiva há 1 ano, cefaleia frontal recorrente, redução de libido e ganho de peso de 8 kg. Amigos comentaram que seu rosto está diferente.",
      tasks: [
        "Apresente-se e estabeleça vínculo com o paciente.",
        "Realize anamnese dirigida ao quadro atual.",
        "Solicite e interprete os dados do exame físico.",
        "Formule a hipótese diagnóstica.",
        "Solicite os exames complementares adequados.",
        "Defina a conduta e os encaminhamentos necessários."
      ]
    },

    instB: {
      vitals: { PA:"110/70 mmHg", FC:"62 bpm", Peso:"82 kg", Altura:"1.75 m", IMC:"26.7 kg/m²" },
      physicalGeneral: "Fácies de rara dosagem de pelos faciais, pele pálida e fina, distribuição de gordura centrípeta, ginecomastia bilateral leve e pele seca.",
      physicalSeg: [
        "Campimetria por confrontação: hemianopsia bitemporal.",
        "Testículos de volume reduzido (8 mL bilateralmente) e pelos pubianos rarefados.",
        "Pupilas isocóricas e fotorreagentes, movimentos oculares preservados."
      ],
      labs: [
        { test: "Cortisol 8h", val: "3.2 μg/dL", ref: "6-23", alt: true },
        { test: "ACTH", val: "5 pg/mL", ref: "10-60", alt: true },
        { test: "TSH", val: "0.8 μUI/mL", ref: "0.4-4.0", alt: false },
        { test: "T4 livre", val: "0.6 ng/dL", ref: "0.8-1.8", alt: true },
        { test: "Testosterona total", val: "85 ng/dL", ref: "300-1000", alt: true },
        { test: "LH", val: "0.5 mUI/mL", ref: "1.5-9", alt: true },
        { test: "FSH", val: "0.8 mUI/mL", ref: "1.5-12", alt: true },
        { test: "Prolactina", val: "45 ng/mL", ref: "< 20", alt: true },
        { test: "IGF-1", val: "65 ng/mL", ref: "109-284", alt: true },
        { test: "Sódio", val: "132 mEq/L", ref: "136-145", alt: true }
      ],
      image: {
        title: "Ressonância Magnética de Sela Túrcica",
        report: `Macroadenoma hipofisário de 2.8 x 2.5 x 2.2 cm. Lesão expansiva centrada na sela túrcica com compressão do quiasma óptico e extensão suprasselar. Sem invasão de seio cavernoso.`
      },
      note: "Macroadenoma hipofisário não funcionante com compressão do quiasma óptico e quadro clínico de pan-hipopituitarismo."
    },

    instC: {
      diagnosis: "Hipopituitarismo por macroadenoma hipofisário com compressão de quiasma óptico.",
      context: "Homem de 42 anos com fadiga, cefaleia, redução de libido, ganho de peso, hemianopsia bitemporal e exames hormonais compatíveis com insuficiência adrenal central, hipotireoidismo central, hipogonadismo central e deficiência de GH.",
      justify: "Cortisol baixo com ACTH baixo, T4 livre baixo com TSH inadequadamente normal, testosterona baixa com LH/FSH baixos e IGF-1 baixo confirmam hipopituitarismo secundário. RNM mostra macroadenoma com compressão quiasmática, indicação cirúrgica urgente.",
      script: [
        { trigger: "Queixa principal", speech: "Doutor, estou muito cansado há 1 ano, piorando." },
        { trigger: "Fadiga", speech: "Acordo cansado, sem energia. Dificuldade de concentração no trabalho." },
        { trigger: "Cefaleia", speech: "Dor de cabeça constante, na testa. Piora ao longo do dia." },
        { trigger: "Visão", speech: "Às vezes tenho dificuldade de ver nas laterais. Tropeço em objetos dos lados." },
        { trigger: "Outros sintomas", speech: "Engordei 8 kg. Libido caiu muito. Menos pelo no rosto." },
        { trigger: "Perguntas", speech: "O que eu tenho? É tumor? Vou perder a visão? Preciso operar?" }
      ],
      pep: [
        {
          section: "ANAMNESE",
          items: [
            { item: "Investigou fadiga, cefaleia e alterações visuais", score: 1.0 },
            { item: "Avaliou redução de libido e mudança de pelos corporais", score: 0.5 }
          ]
        },
        {
          section: "EXAMES",
          items: [
            { item: "Solicitou cortisol, ACTH, TSH, T4 livre, testosterona e IGF-1", score: 1.0 },
            { item: "Solicitou campimetria e RNM sela túrcica", score: 1.0 }
          ]
        },
        {
          section: "CONDUTA",
          items: [
            { item: "Diagnosticou hipopituitarismo secundário com macroadenoma", score: 1.0 },
            { item: "Prescreveu hidrocortisona antes de levotiroxina", score: 1.0 },
            { item: "Encaminhou neurocirurgia urgente", score: 0.5 }
          ]
        }
      ],
      criticalErrors: [
        "Não avaliar campo visual",
        "Não solicitar RNM sela túrcica",
        "Iniciar levotiroxina antes de hidrocortisona",
        "Não reconhecer urgência cirúrgica"
      ]
    },

    instD: {
      title: "Hipopituitarismo e Adenomas Hipofisários",
      sections: [
        {
          h: "Definição",
          body: "<p>Hipopituitarismo é deficiência de um ou mais hormônios hipofisários, frequentemente por macroadenoma que comprime o quiasma óptico.</p>"
        },
        {
          h: "Diagnóstico",
          body: "<ul><li>Cortisol baixo com ACTH baixo = insuficiência adrenal central</li><li>T4 livre baixo com TSH inapropriadamente normal = hipotireoidismo central</li><li>Testosterona baixa com LH/FSH baixos = hipogonadismo central</li><li>IGF-1 baixo = déficit de GH</li></ul>"
        },
        {
          h: "Tratamento",
          body: "<p>Reposição hormonal urgente com hidrocortisona antes de levotiroxina. Cirurgia transesfenoidal indicada em macroadenoma com compressão quiasmática.</p>"
        }
      ]
    }
  },
  {
    id: 15,
    title: "Paciente trazido por amigos com náuseas, vômitos há 2 dias, dor abdominal, respiração rápida e alteração do nível de consciência. Refere emagrecimento de 12 kg em 2 meses.",
    sub: "Pronto-Socorro — hospital terciário",
    tema: "endocrinologia",
    topic: "diabetes",
    cardAccent: "#e63946",

    instA: {
      scenario: "Você está no pronto-socorro de um hospital terciário.",
      patient: "L.M.A., 19 anos, sexo masculino, estudante universitário.",
      complaint: "Paciente trazido por amigos com náuseas, vômitos há 2 dias, dor abdominal, respiração rápida e alteração do nível de consciência. Refere emagrecimento de 12 kg em 2 meses.",
      tasks: [
        "Realizar anamnese rápida direcionada",
        "Reconhecer sinais de cetoacidose diabética",
        "Solicitar exame físico e exames complementares urgentes",
        "Formular diagnóstico e classificar gravidade",
        "Iniciar tratamento de emergência",
        "Definir critérios de internação e seguimento"
      ]
    },

    instB: {
      vitals: { PA:"95/60 mmHg", FC:"118 bpm", FR:"32 irpm", Tax:"36.2°C", Peso:"58 kg" },
      physicalGeneral: "Paciente desidratado, com respiração de Kussmaul, hálito cetônico, mucosas secas e turgor diminuído. TEC > 3 segundos.",
      physicalSeg: [
        "Glasgow 13: confuso, mas responsivo.",
        "Respiração profunda e rápida, odor de cetona no hálito.",
        "Sinais de desidratação com pele seca e turgor diminuído."
      ],
      labs: [
        { test: "Glicemia", val: "485 mg/dL", ref: "70-100", alt: true },
        { test: "pH arterial", val: "7.15", ref: "7.35-7.45", alt: true },
        { test: "Bicarbonato", val: "9 mEq/L", ref: "22-28", alt: true },
        { test: "Cetonas séricas", val: "4+ (forte)", ref: "Negativo", alt: true },
        { test: "Sódio", val: "128 mEq/L", ref: "136-145", alt: true },
        { test: "Potássio", val: "5.2 mEq/L", ref: "3.5-5.0", alt: true },
        { test: "Ureia", val: "58 mg/dL", ref: "10-50", alt: true },
        { test: "Creatinina", val: "1.8 mg/dL", ref: "0.7-1.3", alt: true },
        { test: "EAS", val: "Glicosúria 4+, Cetonúria 4+", ref: "Negativo", alt: true }
      ],
      image: null,
      note: "Gasometria arterial mostra pH 7.15, pCO2 22 mmHg e HCO3 9 mEq/L. Exame confirma cetoacidose diabética grave em diabetes tipo 1 de início."
    },

    instC: {
      diagnosis: "Cetoacidose diabética grave em provável diabetes mellitus tipo 1 de novo.",
      context: "Jovem de 19 anos com quadro agudo de hiperglicemia, acidose metabólica e cetonemia, associado a desidratação, respiração de Kussmaul e confusão. Necessita tratamento emergencial com hidratação venosa, insulina regular EV e reposição de potássio conforme evolução.",
      justify: "Diagnóstico baseado na tríade de hiperglicemia, acidose metabólica e cetonemia. pH 7.15 e bicarbonato 9 definem CAD grave, exigindo internação e monitoramento intensivo.",
      script: [
        { trigger: "História inicial", speech: "Muita sede há semanas. Urino muito, várias vezes à noite. Perdi muito peso, 12 quilos." },
        { trigger: "Sintomas anteriores", speech: "Vomito muito há 2 dias. Minha barriga dói e estou confuso." },
        { trigger: "Sinais", speech: "A respiração está rápida e profunda. Está com cheiro de frutas?" },
        { trigger: "Amigos", speech: "Ele está passando mal há 2 dias. Vomitou muito e hoje ficou confuso." }
      ],
      pep: [
        {
          section: "AVALIAÇÃO",
          items: [
            { item: "Reconheceu CAD como emergência médica", score: 1.0 },
            { item: "Identificou Kussmaul e hálito cetônico", score: 1.0 },
            { item: "Avaliou desidratação e comprometimento mental", score: 0.5 }
          ]
        },
        {
          section: "EXAMES URGENTES",
          items: [
            { item: "Solicitou glicemia, gasometria e eletrólitos imediatamente", score: 1.0 },
            { item: "Diagnosticou CAD pela tríade clássica", score: 1.0 }
          ]
        },
        {
          section: "CONDUTA",
          items: [
            { item: "Iniciou hidratação com SF 0.9% na 1ª hora", score: 1.0 },
            { item: "Prescreveu insulina regular EV 0.1 UI/kg/h", score: 1.0 },
            { item: "Planejou reposição de potássio conforme valores", score: 1.0 },
            { item: "Indicou internação em UTI ou semi-intensiva", score: 0.5 }
          ]
        }
      ],
      criticalErrors: [
        "Não reconhecer CAD como emergência",
        "Insulina sem hidratação prévia adequada",
        "Repor potássio com K > 5.0 mEq/L",
        "Não monitorar eletrólitos e glicemia horária"
      ]
    },

    instD: {
      title: "Cetoacidose Diabética (CAD)",
      sections: [
        {
          h: "Definição",
          body: "<p>Emergência metabólica caracterizada por hiperglicemia, acidose metabólica e cetonemia.</p>"
        },
        {
          h: "Diagnóstico",
          body: "<ul><li>Glicemia > 250 mg/dL</li><li>pH < 7.3 e HCO3 < 18</li><li>Cetonas positivas</li></ul>"
        },
        {
          h: "Tratamento",
          body: "<p>Hidratação com SF 0.9%, insulina regular EV 0.1 UI/kg/h após a primeira hora, e reposição de potássio se K entre 3.3 e 5.3. Adicionar glicose quando glicemia cair para 200-250 mg/dL.</p>"
        }
      ]
    }
  },
  {
    id: 16,
    title: "Rotina",
    sub: "Ambulatório de clínica médica de uma UBS",
    tema: "endocrinologia",
    topic: "metabolica",
    cardAccent: "#2a9d8f",

    instA: {
      scenario: "Você está no ambulatório de clínica médica de uma UBS.",
      patient: "R.S.L., 48 anos, sexo masculino, gerente de vendas.",
      complaint: "Paciente vem para check-up. Traz exames recentes com alterações. Refere que 'está tudo alto: açúcar, pressão, colesterol'.",
      tasks: [
        "Realizar anamnese completa",
        "Investigar fatores de risco cardiovascular",
        "Solicitar exame físico pertinente",
        "Interpretar exames e identificar síndrome metabólica",
        "Estratificar risco cardiovascular",
        "Definir conduta terapêutica multifatorial"
      ]
    },

    instB: {
      vitals: { PA:"152/96 mmHg", FC:"82 bpm", Peso:"102 kg", Altura:"1.75 m", IMC:"33.3 kg/m²", CA:"112 cm" },
      physicalGeneral: "Obesidade centrípeta com acantose nigricans cervical e axilas.",
      physicalSeg: [
        "Gordura abdominal central acentuada.",
        "Acantose nigricans em região cervical e axilas."
      ],
      labs: [
        { test: "Glicemia jejum", val: "118 mg/dL", ref: "< 100", alt: true },
        { test: "HbA1c", val: "6.2%", ref: "< 5.7%", alt: true },
        { test: "HOMA-IR", val: "8.2", ref: "< 2.5", alt: true },
        { test: "Colesterol total", val: "252 mg/dL", ref: "< 200", alt: true },
        { test: "LDL", val: "158 mg/dL", ref: "< 130", alt: true },
        { test: "HDL", val: "32 mg/dL", ref: "> 40", alt: true },
        { test: "Triglicerídeos", val: "325 mg/dL", ref: "< 150", alt: true },
        { test: "Ácido úrico", val: "8.5 mg/dL", ref: "3.5-7.2", alt: true },
        { test: "TGO", val: "58 U/L", ref: "< 40", alt: true },
        { test: "TGP", val: "72 U/L", ref: "< 40", alt: true }
      ],
      image: null,
      note: "USG de abdome mostra esteatose hepática grau II. Paciente preenche critérios de síndrome metabólica com cinco componentes." 
    },

    instC: {
      diagnosis: "Síndrome metabólica associada a pré-diabetes, dislipidemia aterogênica e hipertensão arterial.",
      context: "Homem de 48 anos com obesidade central, CA 112 cm, HAS, pré-diabetes, HOMA-IR elevado, HDL baixo e triglicerídeos altos. Preenche todos os critérios de síndrome metabólica e apresenta risco cardiovascular elevado.",
      justify: "A combinação de obesidade abdominal, pressão alta, glicemia alterada, triglicerídeos altos e HDL baixo confirma síndrome metabólica e exige conduta multifatorial com mudança de estilo de vida e tratamento medicamentoso.",
      script: [
        { trigger: "Queixa principal", speech: "Doutor, vim fazer check-up, exames alterados." },
        { trigger: "Hábitos", speech: "Trabalho muito, estressante. Sem tempo para exercício, sedentário. Almoço fora, fast-food. Cerveja todo dia, 2-3 latas." },
        { trigger: "História familiar", speech: "Pai infarto aos 55 anos. Mãe diabetes." },
        { trigger: "Pergunta", speech: "Estou com diabetes? Qual meu risco de infarto?" }
      ],
      pep: [
        {
          section: "AVALIAÇÃO",
          items: [
            { item: "Investigou hábitos de vida e história familiar cardiovascular", score: 0.5 },
            { item: "Mediu circunferência abdominal", score: 0.5 },
            { item: "Calculou IMC e reconheceu obesidade central", score: 0.5 }
          ]
        },
        {
          section: "DIAGNÓSTICO",
          items: [
            { item: "Diagnosticou síndrome metabólica pelos critérios ATP III", score: 1.0 },
            { item: "Identificou pré-diabetes e risco cardiovascular alto", score: 1.0 }
          ]
        },
        {
          section: "CONDUTA",
          items: [
            { item: "Orientou mudança de estilo de vida como pilar", score: 1.0 },
            { item: "Prescreveu metformina e estatina", score: 1.0 },
            { item: "Prescreveu IECA/BRA para HAS e nefroproteção", score: 1.0 }
          ]
        }
      ],
      criticalErrors: [
        "Não medir circunferência abdominal",
        "Não diagnosticar síndrome metabólica",
        "Não prescrever estatina em alto risco",
        "Não orientar mudança de estilo de vida"
      ]
    },

    instD: {
      title: "Síndrome Metabólica",
      sections: [
        {
          h: "Definição",
          body: "<p>Conjunto de alterações metabolizadas associadas ao aumento do risco de diabetes tipo 2 e doença cardiovascular.</p>"
        },
        {
          h: "Critérios ATP III",
          body: "<ul><li>CA ≥ 102 cm em homens</li><li>TG ≥ 150 mg/dL</li><li>HDL < 40 mg/dL em homens</li><li>PA ≥ 130/85 mmHg</li><li>Glicemia jejum ≥ 100 mg/dL</li></ul>"
        },
        {
          h: "Tratamento",
          body: "<p>Perda de 7-10% do peso, exercício regular, dieta hipocalórica, metformina, estatina de alta potência e IECA/BRA.</p>"
        }
      ]
    }
  },
  {
    id: 17,
    title: "Hipoglicemias em idoso",
    sub: "Ambulatório de geriatria de uma UBS",
    tema: "endocrinologia",
    topic: "diabetes",
    cardAccent: "#457b9d",

    instA: {
      scenario: "Você está no ambulatório de geriatria de uma UBS.",
      patient: "M.J.S., 78 anos, sexo feminino, aposentada.",
      complaint: "Filha traz paciente referindo episódios recorrentes de confusão mental, sudorese e tremores, especialmente antes das refeições. Paciente tem DM2 há 15 anos, em uso de glibenclamida 10 mg 2x/dia.",
      tasks: [
        "Realizar anamnese direcionada a hipoglicemias",
        "Avaliar tratamento atual do diabetes",
        "Investigar fatores de risco para hipoglicemia",
        "Solicitar exames pertinentes",
        "Ajustar tratamento para prevenir hipoglicemias",
        "Orientar paciente e familiar"
      ]
    },

    instB: {
      vitals: { PA:"135/80 mmHg", FC:"72 bpm", Peso:"52 kg", Altura:"1.58 m", IMC:"20.8 kg/m²" },
      physicalGeneral: "Idosa lúcida no momento, sem alterações significativas no exame físico.",
      physicalSeg: [
        "Paciente frágil com IMC baixo e sem sinais de infecção ativa."
      ],
      labs: [
        { test: "HbA1c", val: "6.8%", ref: "< 7.0% idoso", alt: false },
        { test: "Glicemia jejum", val: "95 mg/dL", ref: "70-100", alt: false },
        { test: "Creatinina", val: "1.4 mg/dL", ref: "0.6-1.2", alt: true },
        { test: "TFG", val: "42 mL/min", ref: "> 60", alt: true }
      ],
      image: null,
      note: "Diário glicêmico domiciliar mostra valores de 55-70 mg/dL na madrugada e pré-refeições, compatível com hipoglicemias recorrentes em idosa com DRC e sulfonilureia."
    },

    instC: {
      diagnosis: "Hipoglicemias recorrentes iatrogênicas por sulfonilureia em idosa frágil com DRC.",
      context: "Idosa de 78 anos com DM2, terapia com glibenclamida e TFG 42 mL/min, relatando confusão, tremores e sudorese antes das refeições. HbA1c 6.8% mostra controle excessivo para a faixa etária.",
      justify: "Sulfonilureias são de risco em idosos com DRC. O objetivo é reduzir medicação, ajustar metas glicêmicas e priorizar segurança, evitando hipoglicemia grave.",
      script: [
        { trigger: "Relato da filha", speech: "Ela fica confusa antes das refeições, suaada e tremendo. Isso acontece várias vezes." },
        { trigger: "Uso de medicação", speech: "Ela toma glibenclamida 10 mg duas vezes ao dia." },
        { trigger: "Valores glicêmicos", speech: "Os exames mostram HbA1c 6.8, mas ela fica muito baixa de madrugada." },
        { trigger: "Função renal", speech: "Ela tem problemas nos rins e toma remédio para pressão." }
      ],
      pep: [
        {
          section: "DIAGNÓSTICO",
          items: [
            { item: "Identificou hipoglicemia recorrente em idosa", score: 1.0 },
            { item: "Reconheceu sulfonilureia como causa provável", score: 1.0 },
            { item: "Avaliou função renal e status frágil", score: 1.0 }
          ]
        },
        {
          section: "CONDUTA",
          items: [
            { item: "Suspendeu sulfonilureia", score: 1.5 },
            { item: "Propôs medicação segura como metformina ou iDPP4", score: 1.0 },
            { item: "Estabeleceu meta glicêmica individualizada 7-8%", score: 1.0 }
          ]
        }
      ],
      criticalErrors: [
        "Manter sulfonilureia em idosa com DRC",
        "Não avaliar função renal",
        "Buscar controle glicêmico rígido demais em idosa frágil",
        "Não orientar a família sobre sinais de hipoglicemia"
      ]
    },

    instD: {
      title: "Hipoglicemia em Idosos",
      sections: [
        {
          h: "Definição",
          body: "<p>Glicemia < 70 mg/dL em idoso, com maior risco de consequências graves e queda de performance funcional.</p>"
        },
        {
          h: "Fatores de risco",
          body: "<ul><li>Sulfonilureias</li><li>Insulina</li><li>DRC</li><li>Desnutrição</li><li>Idade avançada</li></ul>"
        },
        {
          h: "Tratamento",
          body: "<p>Suspender sulfonilureia, usar metformina ajustada ou iDPP4, alvos glicêmicos mais brandos (HbA1c 7-8%) e educar família sobre hipoglicemia.</p>"
        }
      ]
    }
  },
  {
    id: 18,
    title: "Amenorreia hipotalâmica (atleta)",
    sub: "Ambulatório de ginecologia esportiva",
    tema: "endocrinologia",
    topic: "reprodutivo",
    cardAccent: "#8e9aaf",

    instA: {
      scenario: "Você está no ambulatório de ginecologia esportiva.",
      patient: "C.M.R., 24 anos, sexo feminino, corredora profissional.",
      complaint: "Amenorreia há 10 meses. Treina 6x/semana (corrida longa distância). Refere que 'menstruação parou depois que intensificou treinos'.",
      tasks: [
        "Anamnese direcionada à amenorreia",
        "Investigar tríade da atleta",
        "Avaliar estado nutricional",
        "Solicitar exames complementares",
        "Diagnosticar amenorreia hipotalâmica",
        "Orientar sobre riscos e tratamento"
      ]
    },

    instB: {
      vitals: { PA:"105/65 mmHg", FC:"48 bpm", Peso:"52 kg", Altura:"1.66 m", IMC:"18.9 kg/m²", "% Gordura":"12%" },
      physicalGeneral: "Paciente com bradicardia atlética e índice de massa corporal baixo para atleta de endurance.",
      physicalSeg: [
        "Porcentagem de gordura corporal 12% e sinais de baixa disponibilidade energética.",
        "Sem alterações físicas graves além de bradicardia e IMC baixo." 
      ],
      labs: [
        { test: "β-HCG", val: "< 2", ref: "< 5", alt: false },
        { test: "FSH", val: "2.8 mUI/mL", ref: "3-10", alt: true },
        { test: "LH", val: "1.5 mUI/mL", ref: "2-10", alt: true },
        { test: "Estradiol", val: "15 pg/mL", ref: "30-400", alt: true },
        { test: "Prolactina", val: "12 ng/mL", ref: "< 25", alt: false },
        { test: "TSH", val: "2.5 μUI/mL", ref: "0.4-4.0", alt: false },
        { test: "Densitometria óssea", val: "T-score -1.8 (osteopenia)", ref: ">-1.0", alt: true }
      ],
      image: null,
      note: "Tríade da atleta: baixa disponibilidade energética levando a amenorreia e osteopenia, sem causa orgânica aparente."
    },

    instC: {
      diagnosis: "Amenorreia hipotalâmica funcional em atleta com baixa disponibilidade energética e osteopenia.",
      context: "Atleta de 24 anos com amenorreia de 10 meses, IMC 18.9, % gordura 12%, FSH e LH baixos e estradiol reduzido. Densitometria confirma osteopenia. Excluir gravidez e outras causas, tratar com aumento de calorias e redução de treino.",
      justify: "A redução de GnRH por baixa energia e exercícios intensos determina hipogonadismo hipotalâmico. A conduta é reversão do déficit energético, não uso primário de anticoncepcionais.",
      script: [
        { trigger: "História menstrual", speech: "Minha menstruação parou depois que intensifiquei os treinos." },
        { trigger: "Treino", speech: "Treino seis vezes por semana e corro longas distâncias." },
        { trigger: "Alimentação", speech: "Como pouco e me sinto cansada. Estou tentando manter o peso." },
        { trigger: "Exame ósseo", speech: "Disseram que minha densidade óssea está baixa." }
      ],
      pep: [
        {
          section: "AVALIAÇÃO",
          items: [
            { item: "Correlacionou amenorreia com exercícios e baixa ingestão energética", score: 1.0 },
            { item: "Afastou gravidez com β-HCG", score: 0.5 },
            { item: "Solicitou FSH, LH e estradiol", score: 1.0 }
          ]
        },
        {
          section: "CONDUTA",
          items: [
            { item: "Diagnosticou tríade da atleta e amenorreia hipotalâmica", score: 1.0 },
            { item: "Orientou aumento de ingestão calórica e redução de treino", score: 2.0 },
            { item: "Explicou risco de osteopenia e fratura", score: 1.0 }
          ]
        }
      ],
      criticalErrors: [
        "Prescrever ACO sem tratar a causa energética",
        "Não investigar densitometria óssea",
        "Não orientar aumento calórico e redução de treino"
      ]
    },

    instD: {
      title: "Tríade da Atleta",
      sections: [
        {
          h: "Componentes",
          body: "<ul><li>Baixa disponibilidade energética</li><li>Disfunção menstrual</li><li>Baixa densidade mineral óssea</li></ul>"
        },
        {
          h: "Fisiopatologia",
          body: "<p>Déficit energético leva a redução de GnRH, LH e FSH, resultando em estradiol baixo e amenorreia, com perda óssea subsequente.</p>"
        },
        {
          h: "Tratamento",
          body: "<p>Aumentar ingestão calórica, reduzir volume de treino em 10-20% e monitorar retorno menstrual. ACO pode mascarar o problema, não resolver a causa.</p>"
        }
      ]
    }
  },
  {
    id: 19,
    title: "Insuficiência adrenal primária (Addison)",
    sub: "Ambulatório de endocrinologia de um hospital secundário",
    tema: "endocrinologia",
    topic: "adrenal",
    cardAccent: "#d62828",

    instA: {
      scenario: "Você está no ambulatório de endocrinologia de um hospital secundário.",
      patient: "A.L.M., 35 anos, sexo feminino, nutricionista.",
      complaint: "Fadiga progressiva há 6 meses, perda de peso 8 kg, 'bronzeamento' sem exposição solar, tonturas ao levantar.",
      tasks: [
        "Anamnese direcionada",
        "Reconhecer sinais de insuficiência adrenal",
        "Exame físico incluindo PA e hiperpigmentação",
        "Exames complementares",
        "Diagnosticar Doença de Addison",
        "Iniciar reposição hormonal"
      ]
    },

    instB: {
      vitals: { "PA deitada":"95/60 mmHg", "PA em pé":"75/50 mmHg", FC:"92 bpm", Peso:"54 kg" },
      physicalGeneral: "Hiperpigmentação em palmas, pregas palmares, mucosa oral e região genital com sinais de vasculinização cutânea.",
      physicalSeg: [
        "Hipotensão ortostática com queda de PA ao ficar em pé.",
        "Perda de peso importante e sinais de bronzage sem exposição solar."
      ],
      labs: [
        { test: "Sódio", val: "128 mEq/L", ref: "136-145", alt: true },
        { test: "Potássio", val: "5.8 mEq/L", ref: "3.5-5.0", alt: true },
        { test: "Cortisol 8h", val: "2.5 μg/dL", ref: "6-23", alt: true },
        { test: "ACTH", val: "485 pg/mL", ref: "10-60", alt: true },
        { test: "Glicemia", val: "62 mg/dL", ref: "70-100", alt: true }
      ],
      image: null,
      note: "Teste ACTH com cortisol não eleva confirma insuficiência adrenal primária."
    },

    instC: {
      diagnosis: "Insuficiência adrenal primária (Doença de Addison).",
      context: "Mulher de 35 anos com fadiga, perda de peso, hiperpigmentação e hipotensão ortostática. Exames mostram hiponatremia, hipercalemia, cortisol baixo e ACTH muito alto. Diagnóstico confirmado por teste ACTH sem elevação do cortisol.",
      justify: "Cortisol baixo com ACTH elevado caracteriza Addison primário. O tratamento é reposição de glicocorticoide e mineralocorticoide para normalizar eletrólitos e hemodinâmica.",
      script: [
        { trigger: "Queixa principal", speech: "Estou muito cansada, perdi peso e fico tonta quando levanto." },
        { trigger: "Pigmentação", speech: "Minha pele ficou mais escura nas mãos e na boca, mas eu não tomo sol." },
        { trigger: "Sintomas", speech: "Tenho muita sede, mas mesmo assim me sinto fraca e às vezes tremo." }
      ],
      pep: [
        {
          section: "DIAGNÓSTICO",
          items: [
            { item: "Identificou hiperpigmentação e hipotensão ortostática", score: 1.5 },
            { item: "Solicitou cortisol 8h e ACTH", score: 1.0 },
            { item: "Reconheceu hiponatremia e hipercalemia características", score: 0.5 }
          ]
        },
        {
          section: "CONDUTA",
          items: [
            { item: "Prescreveu hidrocortisona 15-20 mg/dia", score: 1.5 },
            { item: "Prescreveu fludrocortisona 0.1 mg/dia", score: 1.5 },
            { item: "Orientou stress dose em intercorrências", score: 1.0 }
          ]
        }
      ],
      criticalErrors: [
        "Não reconhecer hiperpigmentação como sinal de Addison",
        "Esquecer mineralocorticoide na insuficiência adrenal primária",
        "Não orientar stress dose em infecção ou cirurgia"
      ]
    },

    instD: {
      title: "Doença de Addison",
      sections: [
        {
          h: "Definição",
          body: "<p>Insuficiência adrenal primária causada por destruição ou disfunção da córtex adrenal, com produção insuficiente de cortisol e aldosterona.</p>"
        },
        {
          h: "Diagnóstico",
          body: "<ul><li>Cortisol 8h baixo + ACTH alto</li><li>Hiponatremia, hipercalemia e hipoglicemia</li><li>Teste ACTH: cortisol não se eleva</li></ul>"
        },
        {
          h: "Tratamento",
          body: "<p>Hidrocortisona 15-20 mg/dia e fludrocortisona 0.05-0.2 mg/dia. Stress dose 100 mg IV 8/8h em intercorrências.</p>"
        }
      ]
    }
  },
  {
    id: 20,
    title: "Hiperaldosteronismo (Conn)",
    sub: "Ambulatório de endocrinologia",
    tema: "endocrinologia",
    topic: "adrenal",
    cardAccent: "#264653",

    instA: {
      scenario: "Você está no ambulatório de endocrinologia, referenciado por hipertensão refratária.",
      patient: "F.S.R., 52 anos, sexo masculino, advogado.",
      complaint: "HAS há 8 anos, controlada com 4 anti-hipertensivos. Múltiplos episódios de hipocalemia (K 2.8-3.2), cãimbras musculares frequentes.",
      tasks: [
        "Anamnese direcionada à HAS refratária",
        "Investigar causas secundárias",
        "Exame físico",
        "Exames para hiperaldosteronismo",
        "Interpretar relação aldosterona/renina",
        "Definir conduta"
      ]
    },

    instB: {
      vitals: { PA:"168/102 mmHg", FC:"76 bpm", IMC:"26.5 kg/m²" },
      physicalGeneral: "Paciente com hipertensão refratária apesar de quatro anti-hipertensivos e sem sinais de insuficiência cardíaca significativa.",
      physicalSeg: [
        "Sem alterações significativas no exame físico além de hipertensão persistente."
      ],
      labs: [
        { test: "Potássio", val: "2.9 mEq/L", ref: "3.5-5.0", alt: true },
        { test: "Sódio", val: "145 mEq/L", ref: "136-145", alt: false },
        { test: "Aldosterona", val: "28 ng/dL", ref: "< 15", alt: true },
        { test: "Renina", val: "0.8 ng/mL/h", ref: "0.5-4.0", alt: false },
        { test: "Relação Aldo/Renina", val: "35", ref: "< 20", alt: true }
      ],
      image: {
        title: "TC Adrenais",
        report: `Nódulo adrenal esquerdo de 1.8 cm, hipodenso e homogêneo, sugestivo de adenoma.`
      },
      note: "Hipocalemia recorrente com aldosterona alta, renina suprimida e relação Aldo/Renina de 35 confirma hiperaldosteronismo primário."
    },

    instC: {
      diagnosis: "Hiperaldosteronismo primário (Síndrome de Conn) por adenoma adrenal esquerdo.",
      context: "Homem de 52 anos com HAS refratária, hipocalemia persistente e relação Aldo/Renina > 20. TC revela adenoma adrenal esquerdo de 1.8 cm. Tratamento definitivo é adrenalectomia laparoscópica esquerda.",
      justify: "A produção autonôma de aldosterona com renina suprimida e adenoma à imagem define Conn. Cirurgia é a conduta de escolha em adenoma unilateral.",
      script: [
        { trigger: "Queixa principal", speech: "Tenho pressão alta há 8 anos e mesmo com quatro remédios ainda continuo com hipertensão." },
        { trigger: "Sintomas", speech: "Tenho câimbras musculares frequentes e já notei que o potássio fica baixo." },
        { trigger: "História", speech: "Já usei vários remédios e ainda assim a pressão não cai direito." }
      ],
      pep: [
        {
          section: "DIAGNÓSTICO",
          items: [
            { item: "Identificou HAS refratária com hipocalemia recorrente", score: 1.0 },
            { item: "Solicitou aldosterona e renina", score: 1.0 },
            { item: "Interpretou relação Aldo/Renina > 20", score: 1.5 }
          ]
        },
        {
          section: "IMAGEM",
          items: [
            { item: "Solicitou TC adrenais e identificou adenoma unilateral", score: 1.0 }
          ]
        },
        {
          section: "CONDUTA",
          items: [
            { item: "Indicou adrenalectomia laparoscópica esquerda em adenoma unilateral", score: 2.0 },
            { item: "Orientou uso de espironolactona enquanto aguarda cirurgia", score: 1.5 }
          ]
        }
      ],
      criticalErrors: [
        "Não investigar HAS refratária como causa secundária",
        "Não solicitar aldosterona/renina",
        "Tratar adenoma adrenal apenas com clínico quando cirurgia é curativa"
      ]
    },

    instD: {
      title: "Hiperaldosteronismo Primário (Conn)",
      sections: [
        {
          h: "Definição",
          body: "<p>Produção excessiva de aldosterona por adenoma ou hiperplasia adrenal, levando a hipertensão e hipocalemia.</p>"
        },
        {
          h: "Diagnóstico",
          body: "<ul><li>Aldosterona alta</li><li>Renina suprimida</li><li>Relação Aldo/Renina ≥ 20</li><li>TC adrenais para identificar adenoma</li></ul>"
        },
        {
          h: "Tratamento",
          body: "<p>Adrenalectomia em adenoma unilateral. Espironolactona ou eplerenona para controle clínico enquanto aguarda cirurgia.</p>"
        }
      ]
    }
  },
  {
    id: 21,
    title: "Homem jovem com comportamento estranho e isolamento",
    sub: "Pronto-Socorro / CAPS",
    tema: "psiquiatria",
    topic: "psicose",
    level: "moderado",
    cardAccent: "#8e44ad",

    instA: {
      scenario: "Nível de atenção: secundária. Urgência psiquiátrica em pronto-socorro de hospital geral com suporte do CAPS. A unidade possui consultórios, sala de observação, enfermaria, acesso a exames laboratoriais e tomografia.",
      patient: "R.M.S., 23 anos, sexo masculino, solteiro, estudante universitário (trancou matrícula há 8 meses).",
      complaint: "Familiar relata que o paciente está 'falando com vozes' há cerca de 6 meses, saiu da faculdade, trancou-se no quarto, parou de tomar banho e acredita que vizinhos estão conspirando contra ele.",
      tasks: [
        "Realizar anamnese direcionada ao paciente e ao familiar",
        "Avaliar a presença e o tipo de sintomas psicóticos (positivos e negativos)",
        "Rastrear risco de suicídio e heteroagressividade",
        "Solicitar exame do estado mental pertinente",
        "Formular hipóteses diagnósticas e diagnósticos diferenciais",
        "Propor conduta imediata e plano terapêutico",
        "Orientar o familiar sobre o diagnóstico e próximos passos"
      ]
    },

    instB: {
      vitals: { PA: "118/76 mmHg", FC: "88 bpm", FR: "16 irpm", Tax: "36.6°C", Peso: "62 kg", Altura: "1.75 m", IMC: "20.2 kg/m²", SatO2: "98% AA" },
      physicalGeneral: "Higiene precária, odor corporal presente. Roupa inadequada para o clima (casaco em dia quente). Contato inicial difícil, desconfiança marcante. Sem sinais de trauma ou lesões cutâneas.",
      physicalSeg: [
        "NEUROLÓGICO: Pupilas isocóricas e fotorreagentes. Sem déficits focais. Sem rigidez de nuca. Marcha sem alterações.",
        "EXAME DO ESTADO MENTAL: aparência descuidada, hipomímica, postura tensa; psicomotricidade lentificada com inquietação; humor disfórico e afeto embotado; fala de tom baixo, latência aumentada, conteúdo desorganizado; pensamento com desorganização formal, delírio persecutório e ideias de referência; percepção com alucinações auditivas imperativas; orientado em tempo e espaço; memória preservada; insight ausente; juízo crítico prejudicado; risco: nega ideação suicida ativa e plano heteroagressivo."
      ],
      labs: [
        { test: "Hemograma completo", val: "Normal", ref: "—", alt: false },
        { test: "Glicemia em jejum", val: "89 mg/dL", ref: "70–99", alt: false },
        { test: "TSH", val: "2.1 μUI/mL", ref: "0.4–4.0", alt: false },
        { test: "Creatinina", val: "0.9 mg/dL", ref: "0.7–1.2", alt: false },
        { test: "Sódio", val: "139 mEq/L", ref: "135–145", alt: false },
        { test: "VDRL", val: "Não reagente", ref: "—", alt: false },
        { test: "Anti-HIV", val: "Não reagente", ref: "—", alt: false },
        { test: "Urina I", val: "Sem alterações", ref: "—", alt: false },
        { test: "Toxicológico urinário", val: "Cannabis positivo", ref: "Negativo", alt: true }
      ],
      image: null,
      note: "Tomografia de crânio sem alterações agudas. Ventrículos laterais discretamente aumentados, achado inespecífico."
    },

    instC: {
      diagnosis: "Esquizofrenia — primeiro episódio psicótico (F20.0 / CID-11)",
      context: "Jovem de 23 anos com quadro insidioso de 6 meses caracterizado por sintomas positivos (delírio persecutório, alucinações auditivas em 3ª pessoa comentadoras), sintomas negativos (alogia, abulia, embotamento afetivo, isolamento social) e declínio funcional significativo. Uso de cannabis presente, mas quadro não se explica apenas por substância dada a extensão temporal e tipo de sintomas.",
      justify: "Quadro compatível com esquizofrenia: ao menos 1 mês de sintomas psicóticos com delírios, alucinações e discurso desorganizado, acompanhados de declínio funcional e ausência de explicação exclusivamente por substância ou transtorno afetivo.",
      script: [
        { trigger: "Abertura espontânea", speech: `Eu não precisava vir aqui. Minha mãe me trouxe à força. Não tem nada de errado comigo.` },
        { trigger: "Quando perguntado sobre as vozes", speech: `Eu ouço pessoas falando sobre mim. Elas ficam me comentando o que eu faço. Às vezes duas vozes falam entre si sobre mim.` },
        { trigger: "Quando perguntado sobre os vizinhos", speech: `Eles colocaram câmeras no meu quarto. Eu vi os fios. Eles estão me monitorando para me prejudicar.` },
        { trigger: "Quando perguntado sobre a faculdade", speech: `Eu tranquei porque não consigo me concentrar. Fica difícil. E os colegas também fazem parte disso.` },
        { trigger: "Quando perguntado sobre banho e autocuidado", speech: `Não tenho vontade de nada. Fico no quarto.` },
        { trigger: "Quando perguntado sobre uso de drogas", speech: `Às vezes fumo maconha. Mas isso não tem nada a ver.` },
        { trigger: "Quando perguntado sobre suicídio", speech: `Não quero me matar. Só quero que me deixem em paz.` },
        { trigger: "Quando perguntado sobre agressividade", speech: `Não vou machucar ninguém. Sou eu que estou sendo prejudicado.` }
      ],
      pep: [
        { section: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE", items: [
          { item: "Apresenta-se pelo nome e função ao iniciar a consulta", score: 0.5 },
          { item: "Usa linguagem acessível, sem termos técnicos sem explicação", score: 0.5 },
          { item: "Demonstra empatia e escuta ativa (não interrompe, mantém contato visual)", score: 0.5 },
          { item: "Informa o diagnóstico e orienta o familiar de forma clara", score: 0.5 }
        ]},
        { section: "ANAMNESE", items: [
          { item: "Investiga início, evolução e duração dos sintomas", score: 0.5 },
          { item: "Identifica sintomas positivos (delírio e alucinações)", score: 0.5 },
          { item: "Identifica sintomas negativos (abulia, alogia, embotamento)", score: 0.5 },
          { item: "Investiga declínio funcional (trabalho, estudo, social)", score: 0.5 },
          { item: "Avalia uso de substâncias e diferença entre consumo e quadro psicótico", score: 0.5 },
          { item: "Verifica risco de suicídio e heteroagressividade", score: 0.5 }
        ]},
        { section: "INVESTIGAÇÃO DIAGNÓSTICA", items: [
          { item: "Solicita exame do estado mental completo", score: 0.5 },
          { item: "Solicita exames para excluir causas orgânicas (labs + neuroimagem)", score: 0.5 },
          { item: "Interpreta o toxicológico e considera cannabis como fator agravante, não causa exclusiva", score: 0.5 }
        ]},
        { section: "RACIOCÍNIO CLÍNICO", items: [
          { item: "Formula hipótese de esquizofrenia de primeiro episódio", score: 1.0 },
          { item: "Diferencia quadro de psicose induzida por substância", score: 0.5 }
        ]},
        { section: "CONDUTA", items: [
          { item: "Indica antipsicótico adequado e dose inicial", score: 1.0 },
          { item: "Orientar familiar sobre diagnóstico, prognóstico e rede de apoio", score: 0.5 },
          { item: "Referência ao CAPS / psiquiatra para seguimento especializado", score: 0.5 }
        ]}
      ],
      criticalErrors: [
        "Não avaliar risco de suicídio — omissão grave em consulta psiquiátrica",
        "Atribuir todo o quadro ao cannabis sem excluir psicose primária de longa duração",
        "Prescrever benzodiazepínico como monoterapia para psicose",
        "Não envolver o familiar na orientação sobre diagnóstico e cuidados",
        "Não referenciar ao CAPS ou especialista em psiquiatria"
      ]
    },

    instD: {
      title: "Esquizofrenia — Revisão Clínica Completa",
      sections: [
        { h: "Definição e Epidemiologia", body: `<p>Transtorno psicótico crônico caracterizado por distorções do pensamento, percepção, emoções e comportamento. Prevalência aproximadamente 1% da população mundial. Pico de início: 18–25 anos em homens e 25–35 em mulheres. No Brasil, é responsável por cerca de 80% das internações psiquiátricas de longa duração.</p>` },
        { h: "Critérios Diagnósticos (DSM-5 / CID-11)", body: `<p>Presença de ≥2 dos seguintes sintomas por ≥1 mês (pelo menos 1 deve ser dos 3 primeiros):</p><ul><li>Delírios</li><li>Alucinações</li><li>Discurso desorganizado</li><li>Comportamento desorganizado ou catatônico</li><li>Sintomas negativos (embotamento afetivo, alogia, abulia, anedonia, associalidade)</li></ul><p>+ Disfunção social/ocupacional por ≥6 meses</p><p>+ Excluir transtorno esquizoafetivo, TDM/TAB com psicose, causa médica ou substância.</p>` },
        { h: "Sintomas Positivos vs. Negativos", body: `<table><tr><th>Positivos</th><th>Negativos</th></tr><tr><td>Alucinações (auditivas > visuais)</td><td>Embotamento afetivo</td></tr><tr><td>Delírios (persecutório > referência)</td><td>Alogia</td></tr><tr><td>Discurso desorganizado</td><td>Abulia / apatia</td></tr><tr><td>Comportamento bizarro</td><td>Anedonia</td></tr><tr><td>Catatonia</td><td>Associalidade</td></tr></table>` },
        { h: "Diagnósticos Diferenciais", body: `<ul><li>Transtorno esquizofreniforme (1–6 meses)</li><li>Psicose breve (< 1 mês)</li><li>Transtorno delirante</li><li>TAB com psicose</li><li>TDM com psicose</li><li>Psicose induzida por substância (cannabis, anfetaminas, cocaína)</li><li>Causas orgânicas: encefalite autoimune, epilepsia, tumor, sífilis, HIV</li></ul>` },
        { h: "Exames para Excluir Causas Orgânicas", body: `<ul><li>Hemograma, glicemia, eletrólitos, função renal e hepática, TSH</li><li>VDRL, anti-HIV</li><li>Toxicológico urinário</li><li>TC ou RMN de crânio (obrigatório no primeiro episódio)</li><li>EEG se suspeita de epilepsia</li></ul>` },
        { h: "Tratamento — Protocolos MS/SUS", body: `<p><strong>Antipsicóticos de 1ª linha:</strong></p><ul><li>Haloperidol 5–10 mg/dia VO (ou 5 mg IM na agitação aguda)</li><li>Risperidona 2–8 mg/dia VO</li><li>Olanzapina 10–20 mg/dia VO</li></ul><p>Considerar clozapina em caso refratário (≥2 antipsicóticos sem resposta). Para agitação aguda, esquema haloperidol 5 mg IM + prometazina 25–50 mg IM. Evitar contenção física sempre que possível.</p>` },
        { h: "Rede de Cuidado no SUS", body: `<ul><li>CAPS II / CAPS III — referência para acompanhamento</li><li>CAPS III — 24h e com leitos de repouso</li><li>Internação psiquiátrica somente para risco grave e após esgotar recursos ambulatoriais</li><li>Residência terapêutica e família acolhedora para reabilitação psicossocial</li></ul>` },
        { h: "Monitoramento", body: `<ul><li>Avaliação clínica e do estado mental a cada consulta</li><li>Peso, glicemia e perfil lipídico a cada 3 meses</li><li>Hemograma semanal nas primeiras 18 semanas se clozapina</li><li>AIMS anual para discinesia tardia</li></ul>` },
        { h: "Armadilhas Comuns no OSCE", body: `<ul><li>Esquecer de investigar alergia medicamentosa antes de prescrever</li><li>Não solicitar beta-HCG em mulher em idade fértil</li><li>Diagnosticar pielonefrite sem febre ou dor lombar</li><li>Prescrever fluoroquinolona como 1ª linha para cistite simples</li><li>Não orientar medidas preventivas</li><li>Não investigar IST como diagnóstico diferencial</li></ul>` },
        { h: "Referências", body: `<ul><li>American Psychiatric Association. DSM-5-TR, 2022.</li><li>Associação Brasileira de Psiquiatria (ABP). Diretrizes de Esquizofrenia, 2022.</li><li>Ministério da Saúde. PCDT Esquizofrenia Refratária, 2023.</li><li>RENAME 2022.</li><li>UpToDate 2024.</li></ul>` }
      ]
    }
  },

  {
    id: 22,
    title: "Mulher com 'euforia intensa' e sem necessidade de dormir",
    sub: "Pronto-Socorro",
    tema: "psiquiatria",
    topic: "bipolar",
    level: "moderado",
    cardAccent: "#d35400",

    instA: {
      scenario: "Nível de atenção: secundária. Urgência em pronto-socorro de hospital geral com consultórios de triagem, sala de observação, laboratório e acesso a psiquiatra de plantão.",
      patient: "C.F.O., 34 anos, sexo feminino, casada, professora de ensino fundamental.",
      complaint: "Marido traz a esposa ao PS relatando que ela está 'completamente diferente há 12 dias': dormindo apenas 2–3 horas por noite e se sentindo descansada, gastos excessivos no cartão, falando muito e rápido, iniciou projeto de 'abrir 3 empresas ao mesmo tempo' e teve comportamento sexual inusitado para o casal.",
      tasks: [
        "Realizar anamnese com a paciente e o acompanhante",
        "Avaliar o estado mental atual",
        "Investigar episódios anteriores, histórico familiar e uso de substâncias",
        "Rastrear risco de suicídio e de comportamentos de risco",
        "Formular hipóteses diagnósticas",
        "Propor conduta imediata e estabilização do episódio maníaco",
        "Orientar a paciente e o marido sobre diagnóstico e tratamento"
      ]
    },

    instB: {
      vitals: { PA: "132/84 mmHg", FC: "102 bpm", FR: "18 irpm", Tax: "36.8°C", Peso: "68 kg", Altura: "1.64 m", IMC: "25.3 kg/m²", SatO2: "99% AA" },
      physicalGeneral: "Apresentação exuberante, maquiagem intensa, roupas chamativas. Agitação psicomotora moderada, dificuldade em permanecer sentada. Sem sinais de trauma ou lesões. Pupilas isocóricas e fotorreagentes. Sem déficits neurológicos focais. Mucosas úmidas, sem tremores.",
      physicalSeg: [
        "EXAME DO ESTADO MENTAL: aparência cuidada em excesso, extravagante; psicomotricidade agitada, gesticulação exagerada; humor eufórico/expansivo, labilidade afetiva; fala taquifásica, logorreia, pressão de fala; pensamento com fuga de ideias, grandiosidade, sem delírios estruturados; percepção sem alucinações; orientada; memória preservada; insight ausente; juízo crítico gravemente prejudicado; risco: nega ideação suicida, comportamentos de risco presentes."
      ],
      labs: [
        { test: "Hemograma", val: "Normal", ref: "—", alt: false },
        { test: "TSH", val: "1.8 μUI/mL", ref: "0.4–4.0", alt: false },
        { test: "T4 livre", val: "1.2 ng/dL", ref: "0.8–1.8", alt: false },
        { test: "Glicemia", val: "94 mg/dL", ref: "70–99", alt: false },
        { test: "Sódio", val: "141 mEq/L", ref: "135–145", alt: false },
        { test: "Creatinina", val: "0.8 mg/dL", ref: "0.7–1.2", alt: false },
        { test: "β-HCG", val: "Negativo", ref: "—", alt: false },
        { test: "Toxicológico urinário", val: "Negativo", ref: "—", alt: false },
        { test: "Lítio sérico (uso prévio relatado)", val: "0.2 mEq/L", ref: "0.6–1.2 terapêutico", alt: true }
      ],
      image: null,
      note: "Lítio sérico subterapêutico, sugestivo de baixa adesão ao tratamento prévio."
    },

    instC: {
      diagnosis: "Transtorno Afetivo Bipolar tipo I — episódio maníaco sem psicose (F31.1)",
      context: "Mulher de 34 anos com episódio maníaco clássico de 12 dias: euforia, grandiosidade, diminuição do sono, taquifasia, fuga de ideias, comportamentos de risco e insight ausente. Histórico de uso de lítio com nível subterapêutico e exames orgânicos normais, excluindo causas médicas.",
      justify: "O diagnóstico é sustentado pela evolução de 12 dias com sintomas maníacos característicos, ausência de psicose estruturada e história de episódio depressivo/maníaco anterior. Nível de lítio baixo confirma má adesão ao tratamento prévio.",
      script: [
        { trigger: "Abertura espontânea", speech: `Eu não sei por que meu marido me trouxe aqui. Estou me sentindo a melhor da minha vida. Nunca fui tão criativa e produtiva!` },
        { trigger: "Quando perguntado sobre o sono", speech: `Durmo umas 2 ou 3 horas e fico ótima! Não preciso mais de 8 horas como antes, isso é um desperdício de tempo.` },
        { trigger: "Quando perguntado sobre os gastos", speech: `Foram investimentos! Preciso de roupas bonitas para quando abrir minhas empresas.` },
        { trigger: "Quando perguntado sobre episódios anteriores", speech: `Já tive uma fase parecida há 3 anos, mas depois fiquei muito triste por meses e fiquei na cama. Tomei um remedinho, o lítio, mas parei de tomar porque me sentia bem.` },
        { trigger: "Quando perguntado sobre o lítio", speech: `Parei há uns 3 meses. Não precisava mais, estava bem.` },
        { trigger: "Quando perguntado sobre suicídio", speech: `Suicídio? Pelo contrário! Estou cheia de planos!` }
      ],
      pep: [
        { section: "COMUNICAÇÃO", items: [
          { item: "Apresentação e abordagem empática sem confronto", score: 0.5 },
          { item: "Explica os riscos do episódio maníaco e a necessidade de tratamento", score: 0.5 }
        ]},
        { section: "ANAMNESE", items: [
          { item: "Investigou início e evolução do episódio atual", score: 0.5 },
          { item: "Identificou humor eufórico/expansivo", score: 0.5 },
          { item: "Identificou diminuição da necessidade de sono", score: 0.5 },
          { item: "Identificou fuga de ideias e taquifasia", score: 0.5 },
          { item: "Investigou comportamentos de risco financeiros e sexuais", score: 0.5 },
          { item: "Investigou episódios anteriores e adesão a medicação", score: 0.5 }
        ]},
        { section: "INVESTIGAÇÃO", items: [
          { item: "Solicitou β-HCG em mulher em idade fértil", score: 0.5 },
          { item: "Solicitou TSH e outros exames para excluir causas orgânicas", score: 0.5 },
          { item: "Solicitou nível sérico de lítio após relato de uso prévio", score: 0.5 }
        ]},
        { section: "RACIOCÍNIO CLÍNICO", items: [
          { item: "Formulou diagnóstico de TAB I — episódio maníaco", score: 1.0 },
          { item: "Diferenciou mania de hipomania e psiquose secundária", score: 0.5 }
        ]},
        { section: "CONDUTA", items: [
          { item: "Indica estabilizador de humor adequado", score: 1.0 },
          { item: "Orientou sobre internação se necessário", score: 0.5 },
          { item: "Referenciou ao psiquiatra / CAPS para seguimento especializado", score: 0.5 }
        ]}
      ],
      criticalErrors: [
        "Não solicitar β-HCG em mulher em idade fértil antes de escolher estabilizador de humor",
        "Prescrever antidepressivo isolado em episódio maníaco",
        "Não investigar episódios depressivos anteriores para confirmar bipolaridade",
        "Não checar nível sérico de lítio diante de relato de uso prévio",
        "Alta sem avaliação de risco em episódio maníaco com insight ausente"
      ]
    },

    instD: {
      title: "Transtorno Afetivo Bipolar — Revisão Clínica Completa",
      sections: [
        { h: "Definição", body: `<p>Transtorno do humor caracterizado por episódios de mania/hipomania alternados com episódios depressivos. Prevalência global de 2–4%. Início médio aos 25 anos. Uma das 10 maiores causas de incapacidade global.</p>` },
        { h: "Tipos de TAB", body: `<ul><li><strong>TAB I:</strong> episódio maníaco completo (≥7 dias ou hospitalização)</li><li><strong>TAB II:</strong> hipomania + episódio depressivo maior</li><li><strong>Ciclotimia:</strong> episódios subclínicos de hipomania e depressão por ≥2 anos</li></ul>` },
        { h: "Critérios para Episódio Maníaco (DSM-5)", body: `<p>Humor elevado/expansivo/irritável + aumento de energia por ≥7 dias (ou qualquer duração se hospitalização) + ≥3 dos seguintes:</p><ul><li>Grandiosidade / autoestima inflada</li><li>Diminuição da necessidade de sono</li><li>Taquifasia / pressão de fala</li><li>Fuga de ideias / pensamento acelerado</li><li>Distratibilidade</li><li>Aumento da atividade dirigida a objetivos</li><li>Comportamentos de risco</li></ul>` },
        { h: "Diagnósticos Diferenciais", body: `<ul><li>Psicose induzida por substâncias</li><li>Hipertireoidismo</li><li>Episódio misto</li><li>TDAH</li><li>Transtorno de personalidade borderline</li><li>Esquizofrenia</li></ul>` },
        { h: "Tratamento do Episódio Maníaco — MS/SUS", body: `<p><strong>Estabilizadores de humor 1ª linha:</strong></p><ul><li>Lítio 900–1800 mg/dia</li><li>Valproato de sódio 1000–3000 mg/dia (contraindicado na gravidez)</li><li>Carbamazepina</li></ul><p><strong>Antipsicóticos adjuvantes:</strong> Haloperidol, Risperidona, Olanzapina, Quetiapina.</p><p><strong>Benzodiazepínicos:</strong> Clonazepam ou Diazepam apenas a curto prazo para agitação.</p>` },
        { h: "Monitoramento do Lítio", body: `<ul><li>Lítio sérico 5–7 dias após início, depois a cada 3 meses</li><li>Creatinina, TSH, cálcio a cada 6 meses</li><li>Toxicidade: tremor, poliúria, ataxia, confusão</li></ul>` },
        { h: "Armadilhas Comuns no OSCE", body: `<ul><li>Não perguntar sobre episódios depressivos prévios</li><li>Prescrever antidepressivo isolado na mania</li><li>Não checar β-HCG antes de valproato</li><li>Não avaliar adesão ao lítio</li><li>Confundir TAB com esquizofrenia</li></ul>` },
        { h: "Referências", body: `<ul><li>ABP. Diretrizes Brasileiras para Tratamento do TAB, 2021.</li><li>DSM-5-TR, 2022.</li><li>RENAME 2022.</li><li>UpToDate 2024.</li></ul>` }
      ]
    }
  },

  {
    id: 23,
    title: "Mulher de meia-idade com 'tristeza que não passa'",
    sub: "UBS — Consulta agendada",
    tema: "psiquiatria",
    topic: "depressao",
    level: "moderado",
    cardAccent: "#c0392b",

    instA: {
      scenario: "Nível de atenção: primária. Consulta agendada em Unidade Básica de Saúde com consultório médico, acesso a exames laboratoriais básicos e referência para CAPS e psicólogo.",
      patient: "M.A.R., 47 anos, sexo feminino, divorciada, auxiliar administrativa, 2 filhos.",
      complaint: "Paciente relata 'tristeza que não passa' há aproximadamente 5 meses, com choro frequente, perda de interesse por atividades, cansaço intenso, insônia e pensamentos de que seria 'melhor não estar aqui'.",
      tasks: [
        "Realizar anamnese completa direcionada ao quadro depressivo",
        "Avaliar e quantificar o risco de suicídio (obrigatório)",
        "Rastrear sintomas depressivos com escala validada (PHQ-9)",
        "Solicitar exames para excluir causas orgânicas",
        "Formular diagnóstico e diagnósticos diferenciais",
        "Propor plano terapêutico completo (farmacológico e não farmacológico)",
        "Orientar a paciente e discutir o plano de segurança"
      ]
    },

    instB: {
      vitals: { PA: "124/80 mmHg", FC: "76 bpm", FR: "15 irpm", Tax: "36.4°C", Peso: "74 kg", Altura: "1.61 m", IMC: "28.6 kg/m²" },
      physicalGeneral: "Aparência descuidada em relação ao habitual. Fácies triste, contato visual reduzido, chora durante a consulta. Pele e mucosas sem alterações. Sem lesões de automutilação identificadas. Tireóide não palpável, sem nódulos. Exame físico geral sem outras alterações.",
      physicalSeg: [
        "PHQ-9 aplicado durante a consulta: total 20/27, Depressão grave." 
      ],
      labs: [
        { test: "Hemograma", val: "Normal", ref: "—", alt: false },
        { test: "TSH", val: "2.3 μUI/mL", ref: "0.4–4.0", alt: false },
        { test: "T4 livre", val: "1.1 ng/dL", ref: "0.8–1.8", alt: false },
        { test: "Glicemia", val: "98 mg/dL", ref: "70–99", alt: false },
        { test: "Vitamina B12", val: "210 pg/mL", ref: "200–900", alt: true },
        { test: "Vitamina D", val: "18 ng/mL", ref: ">30", alt: true },
        { test: "Ferritina", val: "14 ng/mL", ref: "12–150", alt: true }
      ],
      image: null,
      note: "PHQ-9 = 20 indica depressão grave. Vitamina D e B12 no limite inferior, fatores contribuintes a considerar."
    },

    instC: {
      diagnosis: "Transtorno depressivo maior — episódio grave sem psicose (F32.2)",
      context: "Mulher de 47 anos com quadro de 5 meses de humor deprimido, anedonia, insônia, fadiga, desesperança e ideação suicida passiva. PHQ-9 = 20. Exames orgânicos normais, com deficiência de vitamina D como possível fator contribuinte.",
      justify: "O diagnóstico é suportado pela duração >2 semanas, pelo menos 5 sintomas depressivos relevantes, comprometimento funcional e ideação suicida passiva. Excluir causas orgânicas e rastrear comorbidades.",
      script: [
        { trigger: "Abertura", speech: `Doutora, eu estou muito mal. Não consigo mais fazer nada. Fico chorando à toa.` },
        { trigger: "Quando perguntado sobre a tristeza", speech: `Faz uns 5 meses. Eu sei quando começou porque foi depois do divórcio ser finalizado. Mas já se passou tempo e não melhora.` },
        { trigger: "Quando perguntado sobre prazer e atividades", speech: `Eu adorava dançar e ver série. Agora não consigo nem ligar a televisão. Não tenho vontade de nada.` },
        { trigger: "Quando perguntado sobre o sono", speech: `Fico horas tentando dormir. Fico pensando em muita coisa. E quando durmo, acordo cedo e não consigo voltar.` },
        { trigger: "Quando perguntado sobre pensamentos ruins", speech: `Às vezes eu penso que seria melhor não estar aqui. Que os meus filhos estariam melhor sem mim.` },
        { trigger: "Quando perguntado sobre plano de suicídio", speech: `Não, eu não tenho coragem. Mas o pensamento vem.` }
      ],
      pep: [
        { section: "COMUNICAÇÃO", items: [
          { item: "Apresentação e acolhimento sem julgamento", score: 0.5 },
          { item: "Explora ideação suicida de forma direta e sensível", score: 1.0 }
        ]},
        { section: "ANAMNESE", items: [
          { item: "Investigou início e evolução do humor deprimido", score: 0.5 },
          { item: "Investigou anedonia e perda de prazer", score: 0.5 },
          { item: "Investigou alterações de sono, apetite e energia", score: 0.5 },
          { item: "Estratificou risco de suicídio", score: 1.0 }
        ]},
        { section: "AVALIAÇÃO", items: [
          { item: "Aplicou ou citou PHQ-9 como rastreio", score: 0.5 },
          { item: "Solicitou TSH para excluir hipotireoidismo", score: 0.5 },
          { item: "Identificou déficit de vitamina D como fator contribuinte", score: 0.3 }
        ]},
        { section: "RACIOCÍNIO CLÍNICO E CONDUTA", items: [
          { item: "Formulou diagnóstico de depressão maior grave", score: 0.5 },
          { item: "Prescreveu antidepressivo de primeira linha adequado", score: 1.0 },
          { item: "Orientou sobre latência de resposta do antidepressivo", score: 0.5 },
          { item: "Propôs psicoterapia e plano de segurança", score: 0.5 },
          { item: "Agendou retorno em 1–2 semanas", score: 0.5 }
        ]}
      ],
      criticalErrors: [
        "Não perguntar sobre ideação suicida",
        "Não estratificar o risco de suicídio",
        "Não excluir hipotireoidismo com TSH",
        "Prescrever benzodiazepínico como único tratamento",
        "Não orientar sobre latência do antidepressivo"
      ]
    },

    instD: {
      title: "Depressão Maior — Revisão Clínica Completa",
      sections: [
        { h: "Definição e Epidemiologia", body: `<p>Transtorno do humor mais prevalente do mundo. No Brasil, estima-se cerca de 12 milhões de pessoas (5,8% da população). Mais comum em mulheres (2:1). Principal causa de incapacidade laboral.</p>` },
        { h: "Critérios Diagnósticos (DSM-5)", body: `<p>≥5 dos 9 sintomas por ≥2 semanas, com comprometimento funcional. Obrigatório: humor deprimido OU anedonia.</p><p><strong>SIGECAPS + Humor:</strong></p><ul><li>Sleep</li><li>Interest</li><li>Guilt</li><li>Energy</li><li>Concentration</li><li>Appetite</li><li>Psychomotor</li><li>Suicide</li><li>Humor deprimido</li></ul>` },
        { h: "Classificação por Gravidade (PHQ-9)", body: `<table><tr><th>PHQ-9</th><th>Gravidade</th></tr><tr><td>5–9</td><td>Leve</td></tr><tr><td>10–14</td><td>Moderado</td></tr><tr><td>15–19</td><td>Moderado-grave</td></tr><tr><td>≥20</td><td>Grave</td></tr></table>` },
        { h: "Avaliação de Risco de Suicídio", body: `<p>Pergunte diretamente sobre pensamentos de morte ou autoagressão. Estratifique ideação, plano, meio, intenção, fatores protetores e tentativas anteriores. Plano de segurança: identificar sinais de alerta, contatos de suporte, remover meios letais e orientar CVV (188).</p>` },
        { h: "Diagnósticos Diferenciais", body: `<ul><li>Hipotireoidismo</li><li>TAB</li><li>Luto complicado</li><li>Distimia</li><li>Transtorno de ajustamento com humor deprimido</li><li>Anemia, deficiência de B12/D</li></ul>` },
        { h: "Tratamento — MS/SUS", body: `<p><strong>Antidepressivos de 1ª linha:</strong></p><ul><li>Sertralina 50–200 mg/dia</li><li>Fluoxetina 20–60 mg/dia</li><li>Escitalopram 10–20 mg/dia</li><li>Amitriptilina 25–150 mg/dia</li></ul><p>Não interromper sem orientação médica. Duração mínima de 6–12 meses após remissão no primeiro episódio.</p><p><strong>Não farmacológico:</strong> TCC, exercício físico regular, higiene do sono, suporte social.</p>` },
        { h: "Quando Encaminhar ao CAPS/Psiquiatra", body: `<ul><li>Depressão grave com risco de suicídio</li><li>Não resposta a 2 antidepressivos</li><li>Psicose associada</li><li>Suspeita de TAB</li></ul>` },
        { h: "Armadilhas Comuns no OSCE", body: `<ul><li>Não perguntar sobre suicídio por medo de 'dar ideia'</li><li>Não investigar episódio maníaco prévio</li><li>Não avisar sobre latência do medicamento</li><li>Prescrever benzodiazepínico como 1ª linha</li><li>Não agendar retorno precoce</li></ul>` },
        { h: "Referências", body: `<ul><li>MS/SUS. Linha de Cuidado para Atenção às Pessoas com Depressão, 2022.</li><li>ABP. Diretrizes para Tratamento da Depressão, 2021.</li><li>RENAME 2022.</li><li>PHQ-9 validado para português brasileiro.</li><li>UpToDate 2024.</li></ul>` }
      ]
    }
  },

  {
    id: 24,
    title: "Jovem com 'preocupação constante' e sintomas físicos",
    sub: "UBS — Demanda espontânea",
    tema: "psiquiatria",
    topic: "ansiedade",
    level: "simples",
    cardAccent: "#2980b9",

    instA: {
      scenario: "Nível de atenção: primária. Demanda espontânea na UBS com consultório médico e acesso a exames básicos.",
      patient: "L.G.P., 28 anos, sexo masculino, solteiro, analista de sistemas, trabalha em home office.",
      complaint: "Paciente refere preocupação constante há cerca de 8 meses, dificuldade para relaxar, tensão muscular no pescoço e ombros, insônia por pensamentos acelerados à noite, irritabilidade e dificuldade de concentração no trabalho. Já buscou cardiologista e gastroenterologista sem alterações orgânicas.",
      tasks: [
        "Realizar anamnese direcionada às queixas físicas e psíquicas",
        "Explorar o conteúdo e o padrão das preocupações",
        "Rastrear outros transtornos de ansiedade e depressão comórbida",
        "Avaliar risco de suicídio",
        "Solicitar exames pertinentes para exclusão de causa orgânica",
        "Formular diagnóstico e diagnósticos diferenciais",
        "Propor plano terapêutico e orientar o paciente"
      ]
    },

    instB: {
      vitals: { PA: "128/82 mmHg", FC: "92 bpm", FR: "18 irpm", Tax: "36.5°C", Peso: "76 kg", Altura: "1.78 m", IMC: "24.0 kg/m²", SatO2: "99% AA" },
      physicalGeneral: "Aparência ansiosa, inquieto durante a consulta. Tensão muscular visível em região cervical e trapézio. Tireóide sem alterações palpáveis. Cardiovascular sem alterações. Abdome sem alterações. Neurológico sem déficits focais.",
      physicalSeg: [
        "GAD-7 aplicado durante a consulta: total 16/21, Ansiedade grave."
      ],
      labs: [
        { test: "Hemograma", val: "Normal", ref: "—", alt: false },
        { test: "TSH", val: "1.6 μUI/mL", ref: "0.4–4.0", alt: false },
        { test: "Glicemia em jejum", val: "91 mg/dL", ref: "70–99", alt: false },
        { test: "ECG", val: "Ritmo sinusal, FC 90 bpm, sem alterações", ref: "—", alt: false },
        { test: "Consumo de cafeína", val: "5–6 xícaras de café/dia", ref: "—", alt: true }
      ],
      image: null,
      note: "Café em excesso é fator agravante para ansiedade."
    },

    instC: {
      diagnosis: "Transtorno de Ansiedade Generalizada — TAG (F41.1)",
      context: "Homem de 28 anos com preocupações excessivas e difíceis de controlar por ≥6 meses sobre múltiplas áreas da vida, acompanhadas de tensão muscular, insônia, irritabilidade e dificuldade de concentração. Exames orgânicos normais. Consumo elevado de cafeína como fator agravante.",
      justify: "O diagnóstico é baseado em ansiedade e preocupação excessivas por ≥6 meses, incapacidade de controlar as preocupações e sintomas físicos característicos de TAG, sem crise de pânico episódica ou causa orgânica identificada.",
      script: [
        { trigger: "Abertura", speech: `Doutor, eu sei que parece bobagem, mas eu fico preocupado o tempo todo. Com tudo. Com o trabalho, com minha saúde, com a família. Não consigo desligar.` },
        { trigger: "Quando perguntado sobre quais preocupações", speech: `Com o trabalho — se vou entregar no prazo, se vou ser demitido. Com minha saúde — qualquer dorzinha acho que é coisa grave. Com minha mãe que é diabética. Com dinheiro. Com tudo, basicamente.` },
        { trigger: "Quando perguntado sobre sintomas físicos", speech: `Tenho muita tensão no pescoço e ombro. Palpitações às vezes. Dor de estômago. Já fui no cardiologista e no gastro, não acharam nada.` },
        { trigger: "Quando perguntado sobre o sono", speech: `Fico na cama pensando. Os pensamentos não param. Demoro pra dormir toda noite.` },
        { trigger: "Quando perguntado sobre o início", speech: `Faz uns 8 meses, mais ou menos quando comecei a trabalhar em casa. Mas sempre fui ansioso, desde novo. Piorou muito esse ano.` },
        { trigger: "Quando perguntado sobre crises de pânico", speech: `Não tenho crise não. Não é aquela coisa de coração disparar de repente. É uma preocupação constante, o tempo todo.` },
        { trigger: "Quando perguntado sobre suicídio", speech: `Não, nada disso. Só estou muito cansado de me preocupar.` }
      ],
      pep: [
        { section: "COMUNICAÇÃO", items: [
          { item: "Apresentação e acolhimento empático", score: 0.5 },
          { item: "Explica a diferença entre preocupação patológica e preocupação normal", score: 0.5 }
        ]},
        { section: "ANAMNESE", items: [
          { item: "Investigou natureza e conteúdo das preocupações", score: 0.5 },
          { item: "Verificou que as preocupações são difíceis de controlar", score: 0.5 },
          { item: "Investigou duração ≥6 meses", score: 0.5 },
          { item: "Identificou sintomas físicos associados", score: 0.5 },
          { item: "Rastreou depressão comórbida", score: 0.5 },
          { item: "Rastreou transtorno do pânico como diferencial", score: 0.5 }
        ]},
        { section: "INVESTIGAÇÃO", items: [
          { item: "Avaliou risco de suicídio", score: 0.5 },
          { item: "Perguntou sobre cafeína, álcool e substâncias", score: 0.5 },
          { item: "Solicitou TSH e ECG para excluir causa orgânica", score: 0.5 },
          { item: "Aplicou ou citou GAD-7", score: 0.5 }
        ]},
        { section: "CONDUTA", items: [
          { item: "Formulou diagnóstico de TAG", score: 1.0 },
          { item: "Indicou antidepressivo ou ansiolítico de 1ª linha adequado", score: 1.0 },
          { item: "Orientou sobre psicoterapia (TCC)", score: 0.5 },
          { item: "Orientou sobre estilo de vida, incluindo redução de cafeína", score: 0.5 }
        ]}
      ],
      criticalErrors: [
        "Prescrever benzodiazepínico como 1ª linha e por longo prazo",
        "Não excluir hipertireoidismo com TSH",
        "Não rastrear depressão comórbida",
        "Não avaliar suicídio",
        "Não orientar sobre cafeína como fator agravante"
      ]
    },

    instD: {
      title: "Transtorno de Ansiedade Generalizada — Revisão Clínica Completa",
      sections: [
        { h: "Definição e Epidemiologia", body: `<p>Ansiedade e preocupação excessivas e difíceis de controlar envolvendo múltiplas esferas da vida, geralmente acompanhadas por sintomas físicos. Prevalência de 5–7% da população geral. Mais comum em mulheres. Início tipicamente na adolescência ou adulto jovem.</p>` },
        { h: "Critérios Diagnósticos (DSM-5)", body: `<ul><li>Ansiedade e preocupação excessivas por ≥6 meses</li><li>Dificuldade de controlar as preocupações</li><li>≥3 dos seguintes: inquietação, cansaço fácil, dificuldade de concentração, irritabilidade, tensão muscular, alteração do sono</li><li>Comprometimento funcional significativo</li><li>Não decorrente de substância ou condição médica</li></ul>` },
        { h: "Diagnósticos Diferenciais", body: `<ul><li>Hipertireoidismo</li><li>Transtorno do pânico</li><li>Transtorno depressivo maior com ansiedade</li><li>Transtorno de ansiedade social</li><li>Transtorno obsessivo-compulsivo</li></ul>` },
        { h: "Tratamento — MS/SUS", body: `<p><strong>Farmacoterapia 1ª linha:</strong></p><ul><li>Sertralina 50–200 mg/dia</li><li>Escitalopram 10–20 mg/dia</li><li>Duloxetina 60–120 mg/dia</li><li>Venlafaxina 75–225 mg/dia</li></ul><p><strong>Benzodiazepínicos:</strong> uso curto (máx 4 semanas), como clonazepam ou diazepam.</p><p><strong>Buspirona:</strong> 15–45 mg/dia, início lento.</p><p><strong>Psicoterapia:</strong> TCC é 1ª linha. Mindfulness e relaxamento também são úteis.</p>` },
        { h: "Estilo de Vida", body: `<ul><li>Reduzir cafeína para menos de 3 xícaras por dia</li><li>Exercício aeróbico regular</li><li>Higiene do sono</li><li>Técnicas de relaxamento respiratório</li></ul>` },
        { h: "GAD-7 — Pontuação e Conduta", body: `<table><tr><th>Pontuação</th><th>Gravidade</th><th>Conduta</th></tr><tr><td>5–9</td><td>Leve</td><td>Orientação e seguimento</td></tr><tr><td>10–14</td><td>Moderado</td><td>TCC + considerar farmacoterapia</td></tr><tr><td>≥15</td><td>Grave</td><td>Farmacoterapia + TCC</td></tr></table>` },
        { h: "Armadilhas Comuns no OSCE", body: `<ul><li>Não diferenciar TAG do transtorno do pânico</li><li>Prescrever benzo por longo prazo</li><li>Não rastrear depressão comórbida</li><li>Não mencionar TCC</li><li>Não checar TSH</li></ul>` },
        { h: "Referências", body: `<ul><li>ABP. Diretrizes para TAG, 2021.</li><li>NICE. Generalised anxiety disorder and panic disorder in adults, 2019 (atualizado 2024).</li><li>RENAME 2022.</li><li>UpToDate 2024.</li></ul>` }
      ]
    }
  },

  {
    id: 25,
    title: "Mulher com pesadelos e 'nunca mais foi a mesma' após assalto",
    sub: "UBS — Consulta agendada",
    tema: "psiquiatria",
    topic: "tept",
    level: "moderado",
    cardAccent: "#16a085",

    instA: {
      scenario: "Nível de atenção: primária. Consulta agendada em UBS após encaminhamento do NASF, com apoio matricial de psicologia e referência ao CAPS.",
      patient: "A.B.S., 38 anos, sexo feminino, casada, caixa de supermercado.",
      complaint: "Paciente refere pesadelos recorrentes, imagens intrusivas do assalto à mão armada sofrido há 4 meses, sobressaltos com barulhos súbitos, evitação de locais do ocorrido, entorpecimento emocional e afastamento do trabalho por licença médica.",
      tasks: [
        "Realizar anamnese detalhada explorando os 4 clusters de TEPT",
        "Investigar o evento traumático de forma sensível e sem revitimização",
        "Rastrear comorbidades (depressão, álcool, suicídio)",
        "Avaliar risco de suicídio",
        "Formular diagnóstico e diagnósticos diferenciais",
        "Propor plano terapêutico adequado",
        "Orientar a paciente com empatia e validação"
      ]
    },

    instB: {
      vitals: { PA: "136/88 mmHg", FC: "94 bpm", FR: "16 irpm", Tax: "36.6°C", Peso: "65 kg", Altura: "1.60 m", IMC: "25.4 kg/m²" },
      physicalGeneral: "Aparência de sofrimento psíquico e olhar distante. Sobressalta-se com barulho súbito. Tensão muscular generalizada. Mucosas íntegras. Sem lesões físicas residuais. Exame segmentar sem alterações agudas. Leve hipertensão de contexto.",
      physicalSeg: [
        "EXAME DO ESTADO MENTAL: aparência cuidada, alerta aumentado; psicomotricidade tensa, hipervigilância, sobressalto exagerado; humor disfórico e entorpecido; fala baixa com pausas ao relatar o trauma; pensamento sem desorganização formal, com ruminação sobre o evento; cognições negativas de culpa e insegurança; percepção com flashbacks em resposta a estímulos relacionados; orientada; memória com fragmentação do trauma; insight preservado; risco: ideação passiva de morte, nega plano ativo."
      ],
      labs: [
        { test: "Hemograma", val: "Normal", ref: "—", alt: false },
        { test: "TSH", val: "2.0 μUI/mL", ref: "0.4–4.0", alt: false },
        { test: "Glicemia", val: "96 mg/dL", ref: "70–99", alt: false },
        { test: "Toxicológico urinário", val: "Negativo", ref: "—", alt: false },
        { test: "CAGE", val: "1/4 (baixo risco)", ref: "0–1 baixo risco", alt: false }
      ],
      image: null,
      note: "LEVE hipertensão de contexto e sobressalto exacerbado durante a consulta."
    },

    instC: {
      diagnosis: "Transtorno de Estresse Pós-Traumático — TEPT (F43.1)",
      context: "Mulher de 38 anos com trauma de assalto à mão armada há 4 meses, apresentando todos os 4 clusters diagnósticos do TEPT: revivência, evitação, alterações cognitivas/humor e hiperexcitabilidade. Duração >1 mês e comprometimento funcional com afastamento do trabalho. Ideação passiva de morte presente.",
      justify: "O diagnóstico é justificado pela presença de flashbacks e pesadelos, evitação de estímulos relacionados ao trauma, cognições negativas e hipervigilância. Exclui-se causa orgânica e há comorbidade depressiva compatível com TEPT."
      ,
      script: [
        { trigger: "Abertura", speech: `Doutora, eu não sei bem como explicar. Desde aquele dia eu não sou mais a mesma pessoa.` },
        { trigger: "Quando perguntado sobre o evento", speech: `Fui assaltada no meu trabalho. Um homem entrou com uma arma, ficou apontando pra mim. Achei que ia morrer.` },
        { trigger: "Quando perguntado sobre os pesadelos", speech: `Todo noite eu sonho com isso. Acordo no meio da noite gritando, suada. Meu marido está preocupado.` },
        { trigger: "Quando perguntado sobre os flashbacks", speech: `Qualquer barulho de moto eu trava. É como se eu tivesse lá de novo, vivendo aquele momento.` },
        { trigger: "Quando perguntado sobre evitação", speech: `Não consigo mais ir trabalhar. Fico com medo de voltar lá. Evito até assistir notícia de crime.` },
        { trigger: "Quando perguntado sobre culpa", speech: `Fico pensando que poderia ter feito diferente. Que foi culpa minha por estar lá sozinha.` },
        { trigger: "Quando perguntado sobre suicídio", speech: `Às vezes penso que seria melhor não estar aqui. Mas não tenho coragem de fazer nada. Tenho filhos.` }
      ],
      pep: [
        { section: "COMUNICAÇÃO", items: [
          { item: "Apresenta acolhimento e validação do sofrimento", score: 0.5 },
          { item: "Evita revitimização ao investigar o trauma", score: 0.5 }
        ]},
        { section: "DIAGNÓSTICO", items: [
          { item: "Investigou o evento traumático como gatilho sem exigir detalhes desnecessários", score: 0.5 },
          { item: "Identificou revivência, evitação, alterações cognitivas/humor e hiperexcitabilidade", score: 1.0 },
          { item: "Verificou duração ≥1 mês", score: 0.5 }
        ]},
        { section: "RISCOS E COMORBIDADES", items: [
          { item: "Avaliou risco de suicídio e estratificou", score: 1.0 },
          { item: "Rastreou depressão comórbida", score: 0.5 },
          { item: "Rastreou uso de álcool/substâncias", score: 0.5 }
        ]},
        { section: "CONDUTA", items: [
          { item: "Indicou psicoterapia focada no trauma como 1ª linha", score: 0.5 },
          { item: "Indicou farmacoterapia adequada (ISRS) se necessário", score: 0.5 },
          { item: "Orientou a paciente com empatia e sem minimizar", score: 0.5 },
          { item: "Referenciou ao CAPS ou serviço de saúde mental especializado", score: 0.5 }
        ]}
      ],
      criticalErrors: [
        "Pedir detalhes do trauma sem necessidade clínica",
        "Não avaliar risco de suicídio",
        "Não identificar os 4 clusters do TEPT",
        "Prescrever benzodiazepínico para TEPT em longo prazo",
        "Minimizar o sofrimento do paciente"
      ]
    },

    instD: {
      title: "TEPT — Revisão Clínica Completa",
      sections: [
        { h: "Definição e Epidemiologia", body: `<p>Transtorno que se desenvolve após exposição a evento traumático com risco real ou percebido de morte, lesão grave ou violência sexual. Prevalência de 7–8% ao longo da vida. Mulheres têm risco duas vezes maior após trauma equivalente.</p>` },
        { h: "Tipos de Trauma", body: `<ul><li>Violência urbana (assalto, agressão)</li><li>Violência sexual</li><li>Acidentes graves</li><li>Desastres naturais</li><li>Combate / guerra</li><li>Abuso na infância</li><li>Testemunhar morte violenta</li></ul>` },
        { h: "Os 4 Clusters Diagnósticos", body: `<table><tr><th>Cluster</th><th>Sintomas</th></tr><tr><td>B — Revivência</td><td>Flashbacks, pesadelos, sofrimento em resposta a pistas</td></tr><tr><td>C — Evitação</td><td>Evitar pensamentos, sentimentos ou estímulos relacionados</td></tr><tr><td>D — Cognições/Humor</td><td>Culpa, entorpecimento, emoções positivas diminuídas</td></tr><tr><td>E — Hiperexcitabilidade</td><td>Hipervigilância, sobressalto exagerado, insônia</td></tr></table>` },
        { h: "Diagnósticos Diferenciais", body: `<ul><li>Transtorno de ajustamento</li><li>Estresse agudo</li><li>Depressão maior</li><li>TAG</li><li>Transtorno do pânico</li><li>Psicose</li></ul>` },
        { h: "Tratamento — Diretrizes ABP/MS", body: `<p><strong>Psicoterapia 1ª linha:</strong> TCC focada no trauma, EMDR, terapia de processamento cognitivo e exposição prolongada.</p><p><strong>Farmacoterapia adjuvante:</strong> Sertralina 50–200 mg/dia, Paroxetina 20–60 mg/dia, Venlafaxina ou Prazosina para pesadelos refratários.</p><p>Evitar benzodiazepínicos rotineiros.</p>` },
        { h: "Princípios da Abordagem", body: `<ul><li>Não revitimizar</li><li>Validar o sofrimento</li><li>Não minimizar</li><li>Priorizar segurança</li><li>Psicoeducação reduz culpa e estigma</li></ul>` },
        { h: "Rede de Cuidado no SUS", body: `<ul><li>CAPS II / CAPS ad</li><li>CRAS/CREAS para violência</li><li>Delegacia da Mulher em casos de violência de gênero</li><li>CVV (188) para crise suicida</li></ul>` },
        { h: "Rastreio de Comorbidades", body: `<ul><li>Depressão maior</li><li>Transtorno do pânico</li><li>Abuso de álcool/substâncias</li><li>Risco de suicídio</li></ul>` },
        { h: "Armadilhas Comuns no OSCE", body: `<ul><li>Pedir detalhes desnecessários do trauma</li><li>Não identificar os 4 clusters</li><li>Prescrever benzodiazepínico de longo prazo</li><li>Não mencionar psicoterapia focada no trauma</li><li>Confundir flashbacks com alucinações</li><li>Não avaliar suicídio</li></ul>` },
        { h: "Referências", body: `<ul><li>ABP. Diretrizes para TEPT, 2022.</li><li>DSM-5-TR, 2022.</li><li>NICE. PTSD, 2018 (revisado 2023).</li><li>RENAME 2022.</li><li>OMS mhGAP 2016.</li><li>UpToDate 2024.</li></ul>` }
      ]
    }
  }
];

export { urologyStations, endocrineStations };
