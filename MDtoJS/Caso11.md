## CASO OSCE 11

### BLOCO 1 — METADADOS

- **id:** 11
- **title:** "Bebê de 12 dias — resultado alterado no teste do pezinho"
- **sub:** "UBS — Atenção Primária"
- **tema:** "Pediatria"
- **topic:** "Triagem Neonatal / Hipotireoidismo Congênito"
- **level:** "moderado"
- **cardAccent:** "#4f9cf9"
- **Time:** 8 min
- **Type:** Paciente padronizado (ator ou professor)
- **Comp:** anamnese, raciocínio clínico, interpretação de exames, conduta, comunicação

---

### BLOCO 2 — BRIEFING (instA)

- **scenario:** "Atenção Primária à Saúde — UBS. Consultório de puericultura, turno diurno."
- **patient:** "B.S., 12 dias de vida, feminino. Mãe: 26 anos, auxiliar administrativa, sem comorbidades conhecidas. Parto vaginal a termo, sem intercorrências referidas."
- **complaint:** "Mãe comparece à primeira consulta de puericultura e menciona que 'fizeram uns testes no hospital antes de sair, mas não me explicaram direito o que eram'. Traz a caderneta da criança."
- **tasks:**
  1. Apresente-se à mãe e estabeleça vínculo antes de iniciar o atendimento
  2. Verifique na caderneta de saúde quais triagens neonatais foram realizadas e identifique pendências ou alterações
  3. Explique à mãe o que é cada triagem neonatal, para que serve e o que ocorre se não for realizada
  4. Solicite o exame físico pertinente e interprete os achados encontrados
  5. Defina a conduta adequada diante dos resultados e dos achados clínicos
  6. Oriente a mãe sobre o seguimento e os próximos passos

---

### BLOCO 3 — PACIENTE SIMULADO + IMPRESSOS (instB)

> ℹ️ Este bloco é confidencial do avaliador. O estudante recebe apenas os impressos quando solicitados verbalmente.

#### Sinais Vitais (vitals)

| Parâmetro | Valor |
|---|---|
| PA | Não aferida (RN) |
| FC | 134 bpm |
| FR | 42 irpm |
| Tax | 36,8°C |
| Peso | 3.600 g |
| Altura | 50 cm |
| IMC | — (não calculado nessa faixa) |

#### Exame Físico Geral (physicalGeneral)

Regular estado geral para a situação. Ativa ao estímulo, porém com resposta diminuída. Rósea, hidratada, anictérica ao exame inicial. Choro fraco.

#### Exame Segmentar (physicalSeg)

- **NEUROLÓGICO:** Hipotonia leve; reflexos primitivos (Moro, preensão palmar, sucção) presentes, porém com intensidade levemente diminuída
- **FACE:** Fácies mixedematosa leve; macroglossia discreta; choro rouco
- **FONTANELAS:** Bregmática abaulada (+); lambdoide normal
- **CARDIOVASCULAR:** RCR 2T, bulhas normofonéticas, sem sopros; FC 134 bpm
- **RESPIRATÓRIO:** MV presente bilateralmente, sem ruídos adventícios; FR 42 irpm
- **ABDOME:** Hérnia umbilical (+); fígado e baço não palpáveis
- **PELE:** Ressecada, com leve mottling; lanugo em dorso

#### Exames Laboratoriais (labs)

| Exame (test) | Resultado (val) | Referência (ref) | Alterado? (alt) |
|---|---|---|---|
| TSH (papel-filtro — teste do pezinho) | Elevado — encaminhado para confirmação | < 10 mUI/L | Sim |
| TSH sérico | 98 mUI/L | 0,5–5,0 mUI/L | Sim |
| T4 livre sérico | 0,4 ng/dL | 0,8–2,0 ng/dL | Sim |

#### Exame de Imagem (image)

`image: null`

#### Nota ao Avaliador (note)

Entregar a caderneta de saúde (impresso com triagens neonatais) ao início da estação. Entregar o impresso de exame físico somente se o candidato solicitar verbalmente o exame físico. Entregar os resultados laboratoriais de TSH e T4 livre séricos somente se o candidato solicitá-los especificamente (não entregar apenas pela solicitação do "teste do pezinho" — o papel-filtro já consta na caderneta).

#### Perfil do Paciente Simulado (patientProfile)

Beatriz S., 12 dias de vida, feminino. Mãe: Camila S., 26 anos, auxiliar administrativa, casada. Parto vaginal a termo (39 semanas), sem intercorrências. Aleitamento materno exclusivo em curso, porém com dificuldade — bebê mama pouco e dorme muito.

#### Script do Paciente (script)

| Gatilho (trigger) | Fala do paciente (speech) |
|---|---|
| Abertura / queixa principal | "Boa tarde, doutor(a). Vim fazer a consultinha da Beatriz. Ela nasceu bem, mas lá no hospital fizeram uns testes e um deles deu alguma coisa errada. Ninguém me explicou direito. Fiquei preocupada." |
| Sobre o teste do pezinho | "Falaram que o resultado de um dos testes deu alterado, que era no sangue do calcanhar. Deram um papel para eu vir cá, mas não me disseram o que era." |
| Sobre amamentação | "Eu tô amamentando, mas ela mama pouco. Fica dormindo na hora de mamar, tenho que ficar acordando ela. Às vezes fico preocupada que ela não tá comendo o suficiente." |
| Sobre o choro da bebê | "O choro dela é meio fraquinho, né? Diferente do que eu esperava. Às vezes parece rouco." |
| Sobre o umbigo | "Ah, o umbigo dela é estufado assim desde que nasceu. É normal?" |
| Sobre a linguinha | "Ah, esse teste da linguinha… eles falaram que iam fazer antes de eu sair, mas não fizeram não. Ficou pra fazer aqui." |
| Pergunta ativa — diagnóstico | "O que é isso que deu errado no teste, doutor(a)? É grave?" |
| Pergunta ativa — tratamento | "Ela vai precisar tomar remédio para sempre? Tem cura?" |
| Pergunta ativa — amamentação | "Posso continuar amamentando mesmo com o remédio?" |
| Pergunta ativa — desenvolvimento | "Isso vai afetar o desenvolvimento dela? Ela vai ser normal?" |

#### Informações Escondidas (hiddenInfo)

- A mãe não sabe informar se fez todas as sorologias do pré-natal — só revela se o candidato perguntar especificamente sobre exames do pré-natal: "Fiz o pré-natal, mas não lembro de todos os exames. Acho que fiz tudo que mandaram."
- A bebê ainda não realizou o teste da linguinha — só revela se o candidato perguntar especificamente sobre esse teste: "Eles falaram que iam fazer, mas quando fui embora do hospital não tinham feito."

#### Comportamento do Ator (actorBehavior)

Mãe ansiosa e amorosa, visivelmente preocupada com o resultado alterado do teste. Colaborativa e receptiva às explicações. Demonstra insegurança sobre a amamentação. Responde prontamente às perguntas, mas não oferece informações espontaneamente além das mencionadas na abertura. Reage com alívio visível quando o médico explica com clareza. Se o candidato não se apresentar ou não explicar o que vai fazer, permanece tensa e quieta.

---

### BLOCO 4 — GABARITO TÉCNICO (instC)

> ℹ️ Uso exclusivo do avaliador.

**Diagnóstico Principal (diagnosis):**
Hipotireoidismo congênito primário detectado pelo Programa Nacional de Triagem Neonatal (PNTN). Teste do pezinho com TSH elevado confirmado por TSH sérico 98 mUI/L e T4 livre baixo (0,4 ng/dL). Achados clínicos compatíveis: macroglossia, hipotonia, fontanela abaulada, hérnia umbilical, choro rouco, sonolência excessiva.

**Diagnósticos Diferenciais (differentials):**

1. Hipotireoidismo transitório neonatal — TSH elevado transitório, mais comum em prematuros ou após exposição a iodo; excluído pela clínica sugestiva e pela confirmação sérica com T4 baixo
2. Síndrome de Down — hipotonia, macroglossia e fontanelas abauladas podem mimetizar; excluído pela ausência de dismorfias típicas e confirmado pelo perfil tireoidiano
3. Infecção congênita (TORSCH) — pode causar hipotonia e alterações sistêmicas; excluído pela ausência de petéquias, hepatoesplenomegalia e sorologias negativas no pré-natal

**Síntese do Caso (context):**
Lactente feminina de 12 dias com hipotireoidismo congênito detectado pelo teste do pezinho, confirmado laboratorialmente. Apresenta achados clínicos clássicos da doença. O diagnóstico e o tratamento precoces são essenciais para prevenir déficit intelectual irreversível.

**Justificativa Diagnóstica (justify):**
TSH sérico 98 mUI/L (VR < 5,0 mUI/L) com T4 livre 0,4 ng/dL (VR 0,8–2,0 ng/dL) confirmam hipotireoidismo congênito primário. A clínica reforça: macroglossia, hipotonia, fontanela bregmática abaulada, hérnia umbilical, choro rouco e sonolência excessiva são sinais clássicos. O teste do pezinho com TSH elevado no papel-filtro foi a triagem positiva que motivou a consulta.

**Anamnese Esperada (expectedAnamnesis):**

- Identificar qual teste do pezinho alterou e verificar na caderneta todos os 5 testes do PNTN
- Investigar se o teste da linguinha foi realizado (pendente)
- Perguntar sobre amamentação: frequência, duração, ganho de peso
- Investigar comportamento da bebê: sonolência, choro, atividade
- Perguntar sobre pré-natal: sorologias, intercorrências, uso de medicamentos pela mãe (amiodarona, propiltiouracil)
- Investigar histórico familiar de doença tireoidiana
- Perguntar sobre icterícia prolongada (dado relevante mesmo que não presente)

**Exame Físico Esperado (expectedPhysical):**

- Sinais vitais: aferir FC (taquicardia ou bradicardia), Tax, peso e comparar com peso ao nascer
- Inspeção: fácies (mixedematosa), coloração (palidez, icterícia), edema, choro (rouco?)
- Palpação: fontanelas (abaulamento), abdome (hérnia umbilical, visceromegalias), tônus muscular
- Neurológico: reflexos primitivos, tônus, nível de alerta
- Tireóide: palpação do pescoço (bócio — ausente nesse caso)
- Manobra específica: avaliação do reflexo de sucção e preensão palmar (diminuídos)

**Exames Complementares Esperados (expectedExams):**

| Exame (exam) | Justificativa (justify) | Resultado Esperado (expected) |
|---|---|---|
| TSH sérico | Confirmar resultado do papel-filtro | Elevado: 98 mUI/L |
| T4 livre sérico | Confirmar hipofunção tireoidiana | Baixo: 0,4 ng/dL |
| Hemograma | Investigar anemia associada | Pode mostrar anemia leve |
| Ultrassom de tireoide | Identificar agenesia, hipoplasia ou ectopia — realizado pelo especialista | Solicitado pelo endocrinologista pediátrico |

**Conduta Esperada (expectedConduct):**

- **Farmacológica:** Levotiroxina sódica 10–15 mcg/kg/dia VO, dose única diária em jejum — iniciar imediatamente após confirmação laboratorial (idealmente até o 14º dia de vida). Dose calculada para 3,6 kg: 36–54 mcg/dia → iniciar com 37,5 mcg/dia (comprimido fracionado). Ajuste conforme TSH e T4L de controle. (Referência: MS/PNTN 2023; SBP 2021)
- **Não farmacológica:** Manter aleitamento materno exclusivo; orientar administração do medicamento 30 minutos antes da mamada; não administrar junto com fórmulas de soja (reduzem absorção)
- **Encaminhamento:** Endocrinologia pediátrica com urgência (dentro de 7 dias)
- **Orientações ao paciente:** Explicar à mãe que o hipotireoidismo congênito é tratável; que o remédio precisará ser usado por toda a vida (na maioria dos casos); que o tratamento precoce previne atraso no desenvolvimento; que o leite materno pode e deve ser mantido; administrar o remédio diluído em pequena quantidade de água ou leite materno (não diluir em mamadeira cheia)
- **Seguimento:** TSH e T4 livre séricos a cada 2 semanas no primeiro mês; retorno em 15 dias; encaminhamento ao endocrinologista pediátrico com urgência. Agendar avaliação do teste da linguinha (frenilho lingual)

**Comunicação Esperada (expectedCommunication):**

- **Apresentação:** Apresentar-se pelo nome, cargo, cumprimentar a mãe e a bebê, criar vínculo antes de iniciar perguntas
- **Comunicação do diagnóstico:** Explicar em linguagem acessível que o teste detectou que a glândula tireoide da bebê não está funcionando bem; que isso é tratável com um remédio simples; que quanto mais cedo tratar, melhor para o desenvolvimento da criança
- **Escuta ativa:** Validar a preocupação da mãe; responder com clareza às perguntas sobre tratamento, amamentação e desenvolvimento; evitar termos técnicos sem explicação; perguntar se a mãe ficou com alguma dúvida ao final

**Erros Críticos (criticalErrors):**

- ❌ Não reconhecer o TSH alterado no papel-filtro como urgência diagnóstica que exige confirmação Imediata
- ❌ Não solicitar confirmação laboratorial (TSH e T4 livre séricos) antes de iniciar o tratamento
- ❌ Tranquilizar a mãe sem investigar os achados clínicos sugestivos (macroglossia, hipotonia, fontanela abaulada)
- ❌ Não indicar levotiroxina mesmo com TSH sérico e T4 livre confirmando hipotireoidismo
- ❌ Não encaminhar para endocrinologia pediátrica com urgência
- ❌ Orientar suspensão do aleitamento materno (conduta incorreta — manter AME)

---

### BLOCO 5 — CHECKLIST AVALIATIVO (instD)

**Título (title):** "CHECKLIST — TRIAGEM NEONATAL E HIPOTIREOIDISMO CONGÊNITO"

---

#### BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE

| Item (item) | Pontos (score) | Referência (ref) |
|---|---|---|
| Apresentou-se pelo nome e função à mãe antes de iniciar o atendimento | 0.5 | CFM 2232/2019; MS — Humanização no SUS |
| Explicou à mãe o que iria fazer durante a consulta antes de iniciar | 0.5 | MS — Política Nacional de Humanização, 2013 |
| Perguntou à mãe como ela estava se sentindo e como estava sendo cuidar da bebê | 0.5 | SBP — Puericultura, 2022 |

#### BLOCO 2 — ANAMNESE

| Item (item) | Pontos (score) | Referência (ref) |
|---|---|---|
| Verificou na caderneta quais triagens neonatais foram realizadas e identificou o TSH alterado | 1.0 | MS — PNTN, 2023 |
| Identificou que o teste da linguinha não foi realizado (pendente) | 0.5 | MS — PNTN, 2023 |
| Perguntou sobre amamentação: frequência, duração, comportamento da bebê ao mamar | 0.5 | SBP — Aleitamento Materno, 2021 |
| Investigou comportamento da bebê: sonolência, choro, atividade | 0.5 | SBP — Triagem Neonatal, 2021 |
| Perguntou sobre histórico familiar de doença tireoidiana | 0.3 | SBP — Triagem Neonatal, 2021 |

#### BLOCO 3 — EXAME FÍSICO

| Item (item) | Pontos (score) | Referência (ref) |
|---|---|---|
| Solicitou o exame físico verbalmente e avaliou peso com comparação ao nascimento | 0.5 | SBP — Puericultura, 2022 |
| Identificou pelo menos dois achados sugestivos de hipotireoidismo congênito (macroglossia, hipotonia, fontanela abaulada, hérnia umbilical, choro rouco) | 1.0 | SBP — Triagem Neonatal, 2021; MS — PNTN, 2023 |
| Avaliou reflexos primitivos e tônus muscular | 0.5 | SBP — Neurologia Pediátrica, 2021 |

#### BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO

| Item (item) | Pontos (score) | Referência (ref) |
|---|---|---|
| Formulou hipótese de hipotireoidismo congênito com base no TSH alterado e nos achados clínicos | 1.0 | MS — PNTN, 2023 |
| Solicitou TSH sérico e T4 livre para confirmação diagnóstica | 1.0 | MS — PNTN, 2023; SBP, 2021 |
| Explicou os 5 testes do PNTN à mãe em linguagem acessível (pezinho, orelhinha, olhinho, coraçãozinho, linguinha) | 0.5 | MS — PNTN, 2023 |

#### BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE

| Item (item) | Pontos (score) | Referência (ref) |
|---|---|---|
| Indicou levotiroxina na dose correta (10–15 mcg/kg/dia VO) e orientou administração antes da mamada | 1.0 | MS — PNTN, 2023; SBP — Endocrinologia Pediátrica, 2022 |
| Encaminhou para endocrinologia pediátrica com urgência | 0.5 | MS — PNTN, 2023 |
| Orientou manutenção do aleitamento materno exclusivo | 0.3 | SBP — Aleitamento Materno, 2021 |
| Agendou retorno em 15 dias com pedido de TSH e T4 livre de controle | 0.3 | MS — PNTN, 2023 |
| Perguntou à mãe se ficou com dúvidas e verificou compreensão das orientações | 0.3 | MS — Política Nacional de Humanização, 2013 |

**TOTAL: _____ / 10 pontos**
