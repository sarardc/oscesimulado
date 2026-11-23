# Imagens da Sala de Simulação: pedidos para o Gemini

São **17 personagens** (P1 a P17) e **33 imagens**. Cada personagem aparece em todos os casos em que o sexo, a faixa etária e a cor da pele batem com a descrição do caso. Quando o caso não diz a cor da pele, ela foi escolhida para dar diversidade ao conjunto (isso está marcado como "cor livre").

## Como usar

1. Anexe ao Gemini uma das imagens atuais do consultório (por exemplo `lucia.jpg`) como **referência de estilo**.
2. Para cada imagem, cole o **prompt-base** e, logo abaixo, o **prompt da imagem**.
3. Na segunda imagem de um mesmo personagem, anexe também a primeira imagem dele e escreva: "mesmo paciente da imagem anexada, mesmo rosto, cabelo e corpo".
4. Salve com o **nome de arquivo** indicado e me envie. Eu ligo cada imagem aos casos.

## Prompt-base (colar antes de cada pedido)

> Ilustração digital em estilo flat/cartoon semirrealista, traço limpo com contorno escuro fino, paleta suave em tons de azul-claro, cinza e bege, iluminação natural, igual à imagem de referência anexada. Formato horizontal 16:9 (1376 × 768 px). Composição fixa: o médico ou a equipe fica no terço ESQUERDO da imagem; o paciente fica no terço DIREITO, com o rosto bem visível e virado levemente para a esquerda. Nenhum texto legível na imagem: cartazes, placas, etiquetas e telas sem letras ou números (use só formas e ícones). Sem logotipos. Sem sangue explícito.

O paciente precisa ficar à direita porque, na sala, o painel lateral abre sobre o lado esquerdo da imagem.

## Cenários

| Código | Cenário | Descrição para o prompt |
|---|---|---|
| **CONS** | Consultório | Mesmo consultório da imagem de referência: parede azul-clara, janela grande com prédios e árvores, mesa de madeira com computador à esquerda, quadro anatômico na parede. Paciente sentado na poltrona de exame cinza; médico sentado num banquinho com prancheta. |
| **PS** | Pronto-socorro / sala de emergência | Sala de emergência hospitalar: maca com cabeceira elevada, monitor multiparamétrico na parede, suportes de soro, carrinho de emergência vermelho, luz fria. Médico de jaleco à esquerda; técnica de enfermagem ao fundo. |
| **TRAUMA** | Sala de trauma | Sala de trauma: maca de transporte, paciente em prancha rígida com colar cervical, foco cirúrgico no teto, equipe com luvas e avental. |
| **UTI** | Leito de UTI | Box de UTI: cama hospitalar elétrica, monitor multiparamétrico, bombas de infusão, ventilador mecânico quando indicado, cortina divisória azul. |
| **ENF** | Enfermaria | Quarto de enfermaria com dois leitos; ver a descrição da cena. |

## Personagens

| Personagem | Sexo | Faixa etária | Cor da pele | Aparência fixa | Casos |
|---|---|---|---|---|---|
| **P1** | M | 62–68 | Branca muito clara (fototipo II), olhos azuis | Calvo no topo, cabelo branco nas laterais, pele muito castigada pelo sol: rosto e couro cabeludo avermelhados, com manchas e rugas profundas. Camisa xadrez de manga curta. | 149, 151, 210, 293 |
| **P2** | M | 60–65 | Branca (fototipo III), olhos castanhos | Cabelo grisalho curto penteado para trás, bigode grisalho, óculos de armação fina. Camisa social clara. | 147, 305, 289, 292 |
| **P3** | M | 52–56 | Branca muito clara (fototipo II), olhos azuis, sardas | Atlético, cabelo castanho-claro curto com entradas, barba feita. Camiseta polo esportiva. | 146, 301 |
| **P4** | M | 64–71 | Parda (fototipo IV) | Cabelo grisalho curto e crespo, rosto marcado pelo trabalho no campo, mãos grossas. Camisa de botão de manga curta, simples. | 148, 233, 234, 302, 304, 290, 297, 300 |
| **P5** | F | 54–61 | Branca levemente morena (fototipo III) | Leve sobrepeso, cabelo castanho na altura do ombro com fios grisalhos, óculos pendurados no pescoço. Blusa estampada. | 150, 235, 237 |
| **P6** | F | 36–40 | Branca clara (fototipo II) | Sobrepeso, cabelo loiro-escuro preso em rabo de cavalo. Camiseta e calça jeans. | 277 |
| **P7** | M | 41–46 | Parda (fototipo IV) | Magro e forte, cabelo preto curto, bigode. Camiseta de trabalho. | 278, 309 |
| **P8** | M | 45–48 | Branca (cor livre) | Obesidade leve, cabelo castanho curto com entradas, barba por fazer. Camisa social de manga longa. | 238, 231, 296 |
| **P9** | M | 33–38 | Negra (cor livre) | Cabelo raspado, barba curta, porte atlético. Camiseta lisa. | 279, 236, 308, 207 |
| **P10** | M | 57–59 | Branca (cor livre) | Cabelo grisalho curto, sobrepeso, rosto arredondado. Camisa polo. | 229, sala vermelha (Seu Antônio), 291, 299 |
| **P11** | F | 72–76 | Negra (cor livre) | Cabelo branco curto e crespo, magra. Camisola hospitalar quando internada. | 230, 215, 306 |
| **P12** | F | 27–30 | Parda (cor livre) | Cabelo cacheado escuro na altura do ombro, magra. Blusa de trabalho (professora). | 232, 206 |
| **P13** | M | 24–29 | Parda (cor livre) | Magro, cabelo preto curto, rosto jovem sem barba. | 303, 307 |
| **P14** | F | 50–53 | Branca (cor livre) | Cabelo castanho-escuro liso na altura do queixo, magra, aparência de executiva. | 208 |
| **P15** | M | 20–23 | Branca (cor livre) | Muito alto e magro (longilíneo), cabelo castanho bagunçado, rosto juvenil. | 294 |
| **P16** | F | 18–20 | Negra (cor livre) | Cabelo crespo preso em coque alto, magra, roupa de estudante (moletom). Vem acompanhada da mãe (mulher negra de cerca de 45 anos). | 295 |
| **P17** | F | 42–46 | Negra (cor livre) | Cabelo em tranças até os ombros, óculos de armação redonda, cardigã. | 298 |

Os casos próprios da sala (Dona Lúcia, Rafael e Camila no consultório, e Seu Joaquim, que ainda não tem caso) já têm imagem e não precisam de nova.

---

## Prompts das imagens

### Consultório (CONS): paciente sentado na poltrona, consciente

**1. `cons-p1.jpg`** (casos 149, 151, 210)
> Cenário: consultório da referência. Paciente: homem de 65 anos, pele branca muito clara, olhos azuis, calvo no topo com cabelo branco nas laterais, rosto e couro cabeludo avermelhados e envelhecidos pelo sol, com manchas e rugas profundas; camisa xadrez de manga curta. Sentado na poltrona de exame, expressão tranquila e um pouco preocupada. Médica de jaleco à esquerda, com prancheta.

**2. `cons-p2.jpg`** (caso 147)
> Cenário: consultório da referência. Paciente: homem de 63 anos, pele branca, olhos castanhos, cabelo grisalho curto penteado para trás, bigode grisalho, óculos de armação fina, camisa social clara. Sentado na poltrona, mostrando com a mão a perna direita (calça dobrada até o joelho). Médico à esquerda, com prancheta.

**3. `cons-p3.jpg`** (caso 146)
> Cenário: consultório da referência. Paciente: homem de 54 anos, atlético, pele branca muito clara com sardas, olhos azuis, cabelo castanho-claro curto com entradas, camiseta polo esportiva. Sentado na poltrona, expressão preocupada, olhando para o médico. Médico à esquerda.

**4. `cons-p4.jpg`** (casos 148, 233, 234)
> Cenário: consultório da referência. Paciente: homem de 67 anos, pele parda, cabelo grisalho curto e crespo, rosto marcado pelo trabalho no campo, mãos grossas, camisa de botão simples de manga curta. Sentado na poltrona, postura humilde, mãos sobre os joelhos. Médica à esquerda.

**5. `cons-p5.jpg`** (casos 150, 235, 237)
> Cenário: consultório da referência. Paciente: mulher de 58 anos, pele branca levemente morena, leve sobrepeso, cabelo castanho na altura do ombro com fios grisalhos, óculos pendurados no pescoço, blusa estampada. Sentada na poltrona, expressão ansiosa. Médico à esquerda.

**6. `cons-p6.jpg`** (caso 277)
> Cenário: consultório da referência. Paciente: mulher de 38 anos, pele branca clara, sobrepeso, cabelo loiro-escuro preso em rabo de cavalo, camiseta e calça jeans. Sentada na poltrona, um pouco constrangida, braços cruzados levemente. Médica à esquerda.

**7. `cons-p7.jpg`** (caso 278)
> Cenário: consultório da referência. Paciente: homem de 45 anos, pele parda, magro e forte, cabelo preto curto, bigode, camiseta de trabalho. Sentado na poltrona, sério, com as mãos no colo. Médico à esquerda.

**8. `cons-p8.jpg`** (caso 238)
> Cenário: consultório da referência. Paciente: homem de 46 anos, pele branca, obesidade leve, cabelo castanho curto com entradas, barba por fazer, camisa social de manga longa. Sentado na poltrona, relaxado, segurando uma folha de exame. Médica à esquerda.

**9. `cons-p9.jpg`** (casos 279, 236)
> Cenário: consultório da referência. Paciente: homem negro de 36 anos, cabelo raspado, barba curta, porte atlético, camiseta lisa. Sentado na poltrona, coçando discretamente o antebraço, expressão de desconforto. Médico à esquerda.

### Pronto-socorro (PS): paciente na maca, cabeceira elevada

**10. `ps-p10.jpg`** (caso 229 e Seu Antônio, sala vermelha)
> Cenário: sala de emergência. Paciente: homem de 58 anos, pele branca, cabelo grisalho curto, sobrepeso, de camisola hospitalar, deitado na maca com a cabeceira elevada, pálido e suando, com o punho fechado sobre o centro do peito e expressão de dor. Eletrodos no tórax ligados ao monitor. Médico à esquerda; técnica de enfermagem ajustando o soro ao fundo.

**11. `ps-p11.jpg`** (caso 230)
> Cenário: sala de emergência. Paciente: mulher negra de 72 anos, cabelo branco curto e crespo, magra, sentada na maca com as pernas para fora, inclinada para a frente, com máscara de oxigênio, lábios levemente arroxeados, suando, com expressão de falta de ar intensa. Médica à esquerda; enfermeiro ao fundo.

**12. `ps-p8.jpg`** (caso 231)
> Cenário: sala de emergência. Paciente: homem de 47 anos, pele branca, obesidade leve, cabelo castanho curto com entradas, ainda de camisa social amarrotada, deitado na maca com a cabeceira elevada, pálido, suando, respirando rápido, com cateter nasal de oxigênio. Mala de viagem pequena no chão. Médico à esquerda.

**13. `ps-p12.jpg`** (caso 232)
> Cenário: sala de emergência de UPA. Paciente: mulher parda de 29 anos, cabelo cacheado escuro, magra, blusa de trabalho, sentada na maca com a mão sobre o peito, ansiosa, com eletrodos ligados ao monitor. Médica à esquerda.

**14. `ps-p9.jpg`** (caso 308)
> Cenário: sala de emergência. Paciente: homem negro de 38 anos, cabelo raspado, barba curta, de uniforme de trabalho, deitado de costas na maca, inconsciente, olhos fechados, lábios levemente arroxeados, com máscara de oxigênio com reservatório. Médico à esquerda segurando a seringa; enfermeira à direita, ao fundo, ajustando o monitor.

### Sala de trauma (TRAUMA)

**15. `trauma-p13.jpg`** (caso 303)
> Cenário: sala de trauma. Paciente: homem pardo de 29 anos, magro, cabelo preto curto, deitado em prancha rígida na maca, com colar cervical, escoriações leves no rosto e nos braços, jaqueta de motociclista aberta, pálido, confuso, segurando a barriga. Equipe de trauma à esquerda (médico e enfermeira de luvas).

**16. `trauma-p7.jpg`** (caso 309)
> Cenário: sala de trauma. Paciente: homem pardo de 41 anos, magro e forte, cabelo preto curto, bigode, roupa de obra empoeirada, deitado na maca com a cabeceira levemente elevada e colar cervical, com dificuldade para respirar, segurando o lado direito do tórax. Médico à esquerda, com estetoscópio no tórax do paciente.

### UTI (leito)

**17. `uti-p11-confusa.jpg`** (caso 215)
> Cenário: box de UTI. Paciente: mulher negra de 72 anos, cabelo branco curto e crespo, magra, camisola hospitalar, deitada com a cabeceira a 30°, confusa e sonolenta, com cateter nasal de oxigênio e acesso venoso no braço. Filha adulta preocupada ao pé da cama. Médica à esquerda.

**18. `uti-p11-agitada.jpg`** (caso 306)
> Cenário: box de UTI. Paciente: mulher negra de 76 anos, cabelo branco curto e crespo, magra, camisola hospitalar, intubada (tubo orotraqueal ligado ao ventilador), agitada, levantando a mão em direção ao tubo, olhos abertos e desorientados. Enfermeira segurando delicadamente a mão dela; médico à esquerda.

**19. `uti-p3.jpg`** (caso 301)
> Cenário: box de UTI. Paciente: homem de 54 anos, pele branca muito clara com sardas, cabelo castanho-claro curto, sedado, olhos fechados, intubado e ligado ao ventilador mecânico, deitado de costas com a cabeceira a 30°. Bombas de infusão ao lado. Médico à esquerda olhando o ventilador.

**20. `uti-p4.jpg`** (caso 302)
> Cenário: box de UTI. Paciente: homem pardo de 68 anos, cabelo grisalho curto e crespo, camisola hospitalar, deitado com a cabeceira elevada, sonolento, muito pálido, com cateter nasal de oxigênio e eletrodos no tórax. Mãos com tom acinzentado. Médica à esquerda.

**21. `uti-p2.jpg`** (caso 305)
> Cenário: box de UTI. Paciente: homem de 62 anos, pele branca, cabelo grisalho curto, bigode grisalho, sem óculos, camisola hospitalar, deitado com a cabeceira elevada, acordado e tranquilo, com curativo abdominal discreto sob o lençol, sonda vesical com bolsa coletora pendurada na cama. Médico à esquerda.

**22. `uti-p13.jpg`** (caso 307)
> Cenário: box de UTI. Paciente: homem pardo de 24 anos, magro, cabelo preto curto, camisola hospitalar, deitado com a cabeceira elevada, confuso e abatido, lábios ressecados, respirando fundo e rápido, com acesso venoso e soro correndo. Mãe ao fundo, preocupada. Médica à esquerda.

### Enfermaria (ENF)

**23. `enf-p4-pcr.jpg`** (caso 304)
> Cenário: quarto de enfermaria. Paciente: homem pardo de 71 anos, cabelo grisalho curto e crespo, camisola hospitalar, deitado de costas na cama, inconsciente, olhos fechados. Um profissional faz compressões torácicas com os braços estendidos; outro ventila com bolsa-válvula-máscara na cabeceira; carrinho de emergência com desfibrilador ao lado. Médico à esquerda coordenando. Cena séria, sem sangue.

### Pneumologia: novas cenas

**24. `cons-p12.jpg`** (caso 206)
> Cenário: consultório da referência. Paciente: mulher parda de 28 anos, cabelo cacheado escuro na altura do ombro, magra, blusa de trabalho, sentada na poltrona inclinada levemente para a frente, com as mãos apoiadas nos joelhos, respirando com esforço e expressão ansiosa. Uma bombinha de asma na mão. Médico à esquerda.

**25. `cons-p9-tb.jpg`** (caso 207)
> Cenário: consultório da referência. Paciente: homem negro de 34 anos, cabelo raspado, barba curta, bem mais magro e abatido, com olheiras, camiseta folgada, usando máscara cirúrgica descartável e segurando um lenço de papel. Sentado na poltrona, cansado. Médico à esquerda, também de máscara.

**26. `ps-p14.jpg`** (caso 208)
> Cenário: sala de emergência de UPA. Paciente: mulher branca de 52 anos, cabelo castanho-escuro liso na altura do queixo, magra, camisola hospitalar, sentada na maca com a cabeceira elevada, ansiosa, suando, com a mão no lado direito do peito e cateter nasal de oxigênio. Joelho direito com curativo cirúrgico e muleta encostada na maca. Médica à esquerda.

**27. `ps-p4.jpg`** (caso 290)
> Cenário: sala de emergência. Paciente: homem pardo de 68 anos, cabelo grisalho curto e crespo, tórax arredondado, camisola hospitalar, sentado na maca inclinado para a frente com as mãos apoiadas nos joelhos, respirando com os lábios semicerrados, músculos do pescoço tensos, com nebulização em máscara. Médico à esquerda.

**28. `ps-p10-pneumonia.jpg`** (caso 291)
> Cenário: sala de emergência. Paciente: homem branco de 57 anos, cabelo grisalho curto, sobrepeso, camisola hospitalar, deitado na maca com a cabeceira elevada, febril (rosto avermelhado e suado), tossindo na mão, com cobertor sobre as pernas e cateter nasal de oxigênio. Médica à esquerda.

**29. `ps-p10-hemoptise.jpg`** (caso 299)
> Cenário: sala de emergência. Paciente: homem branco de 59 anos, cabelo grisalho curto, sobrepeso, ainda de roupa comum (camisa polo), sentado na maca, assustado, segurando um lenço de papel com pequenas manchas vermelhas discretas junto à boca. Cuba-rim plástica no colo. Médico à esquerda.

**30. `ps-p1.jpg`** (caso 293)
> Cenário: sala de emergência. Paciente: homem de 66 anos, pele branca muito clara, olhos azuis, calvo no topo com cabelo branco nas laterais, rosto envelhecido pelo sol, mais magro e abatido, camisola hospitalar, deitado na maca com a cabeceira bem elevada, com falta de ar moderada e cateter nasal de oxigênio. Médica à esquerda.

**31. `ps-p15.jpg`** (caso 294)
> Cenário: sala de emergência. Paciente: homem branco de 22 anos, muito alto e magro, cabelo castanho bagunçado, camiseta de faculdade, sentado na maca com a mão espalmada no lado esquerdo do peito, careta de dor ao respirar fundo, mochila no chão. Médico à esquerda.

**32. `ps-p16.jpg`** (caso 295)
> Cenário: sala de emergência. Paciente: jovem negra de 19 anos, cabelo crespo preso em coque alto, magra, moletom, sentada na maca inclinada para a frente com as mãos apoiadas na borda (posição de tripé), em extrema falta de ar, boca aberta, músculos do pescoço salientes, com nebulização em máscara. A mãe (mulher negra de cerca de 45 anos) ao lado, segurando o ombro da filha, aflita. Médico à esquerda.

**33. `cons-p17.jpg`** (caso 298)
> Cenário: consultório da referência. Paciente: mulher negra de 44 anos, cabelo em tranças até os ombros, óculos de armação redonda, cardigã, sentada na poltrona segurando um potinho de coleta de escarro fechado, expressão cansada mas tranquila. Médica à esquerda.

---

## Resumo: imagem de cada caso

| Caso | Título | Imagem |
|---|---|---|
| 146 | Pinta nas costas que mudou de cor | `cons-p3.jpg` |
| 147 | Caroço escuro na perna que cresceu rápido | `cons-p2.jpg` |
| 148 | Mancha escura na sola do pé | `cons-p4.jpg` |
| 149 | Carocinho brilhante no nariz | `cons-p1.jpg` |
| 150 | Dezenas de manchas escuras no pescoço | `cons-p5.jpg` |
| 151 | Lesões ásperas na calva e no rosto | `cons-p1.jpg` |
| 210 | Ferida no nariz que não cicatriza | `cons-p1.jpg` |
| 277 | Placas avermelhadas nos joelhos (psoríase) | `cons-p6.jpg` |
| 278 | Manchas com perda de sensibilidade (hanseníase) | `cons-p7.jpg` |
| 279 | Coceira noturna na família (escabiose) | `cons-p9.jpg` |
| 229 | Dor no peito com irradiação (IAM anterior) | `ps-p10.jpg` |
| Sala vermelha | Seu Antônio (IAM inferior com VD) | `ps-p10.jpg` |
| 230 | Falta de ar que acordou à noite (EAP) | `ps-p11.jpg` |
| 231 | Dispneia e desmaio após viagem (TEP) | `ps-p8.jpg` |
| 232 | Palpitações súbitas (TSV) | `ps-p12.jpg` |
| 233 | Batimentos irregulares (FA) | `cons-p4.jpg` |
| 234 | Cansaço e pernas inchadas (IC crônica) | `cons-p4.jpg` |
| 235 | Dor no peito ao subir ladeira (angina) | `cons-p5.jpg` |
| 236 | Inchaço e falta de ar em jovem (miocardite) | `cons-p9.jpg` |
| 237 | Pressão sempre descontrolada | `cons-p5.jpg` |
| 238 | Colesterol muito alto | `cons-p8.jpg` |
| 215 | Piora da pressão e confusão (choque séptico) | `uti-p11-confusa.jpg` |
| 301 | Hipoxemia refratária (SDRA) | `uti-p3.jpg` |
| 302 | Hipotensão após infarto (choque cardiogênico) | `uti-p4.jpg` |
| 303 | Politraumatizado de moto | `trauma-p13.jpg` |
| 304 | Sem pulso na enfermaria (PCR) | `enf-p4-pcr.jpg` |
| 305 | Queda do débito urinário (LRA) | `uti-p2.jpg` |
| 306 | Agitação na UTI (delirium) | `uti-p11-agitada.jpg` |
| 307 | Hálito cetônico (cetoacidose) | `uti-p13.jpg` |
| 308 | Depressão respiratória (opioides) | `ps-p9.jpg` |
| 309 | Queda de altura (pneumotórax hipertensivo) | `trauma-p7.jpg` |
| 206 | Falta de ar e chiado há 2 dias (asma) | `cons-p12.jpg` |
| 207 | Tosse com sangue e perda de peso (tuberculose) | `cons-p9-tb.jpg` |
| 208 | Dor no peito após cirurgia (TEP) | `ps-p14.jpg` |
| 289 | Falta de ar progressiva em tabagista (DPOC) | `cons-p2.jpg` |
| 290 | Piora da falta de ar em DPOC (exacerbação) | `ps-p4.jpg` |
| 291 | Febre e dor pleurítica (pneumonia) | `ps-p10-pneumonia.jpg` |
| 292 | Nódulo pulmonar em exame de rotina | `cons-p2.jpg` |
| 293 | Derrame pleural | `ps-p1.jpg` |
| 294 | Dor torácica súbita em jovem longilíneo (pneumotórax) | `ps-p15.jpg` |
| 295 | Crise asmática grave | `ps-p16.jpg` |
| 296 | Sonolência e ronco (apneia do sono) | `cons-p8.jpg` |
| 297 | Tosse seca e falta de ar em idoso (fibrose) | `cons-p4.jpg` |
| 298 | Escarro diário abundante (bronquiectasias) | `cons-p17.jpg` |
| 299 | Escarro com sangue vivo (hemoptise) | `ps-p10-hemoptise.jpg` |
| 300 | Massa pulmonar em tabagista (câncer de pulmão) | `cons-p4.jpg` |
