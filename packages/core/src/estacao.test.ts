import { describe, expect, it } from "vitest";
import { EstacaoSchema } from "./estacao.ts";
import { validarEstacoes } from "./validar.ts";

/** Estação mínima válida no formato completo. Cada teste altera só o que precisa. */
function estacaoBase(): Record<string, any> {
  return {
    title: "Dor no peito há 2 horas",
    sub: "Pronto-Socorro — Urgência",
    tema: "Cardiologia",
    topic: "Infarto agudo do miocárdio",
    level: "moderado",
    cardAccent: "#E53935",
    instA: {
      scenario: "PS, 22h.",
      patient: "João, 58 anos.",
      complaint: "Dor no peito há 2 horas.",
      tasks: ["Anamnese", "Exame físico", "Conduta"],
    },
    instB: {
      vitals: { PA: "150/90 mmHg", FC: "102 bpm", SatO2: "94%", IMC: null },
      physicalGeneral: "Sudoreico, ansioso.",
      physicalSeg: "ACV: RCR 2T | AR: MV+ sem RA",
      labs: [{ test: "Troponina", val: "2,1 ng/mL", ref: "< 0,04", alt: true }],
      image: "ECG com supra de ST em DII, DIII e aVF.",
      note: "Entregar o ECG quando pedido.",
      patientProfile: "Motorista, tabagista.",
      script: [{ trigger: "Queixa principal", speech: "Tá doendo muito aqui no peito, doutor." }],
      hiddenInfo: "Pai infartou aos 50 anos",
      actorBehavior: "Ansioso.",
    },
    instC: {
      diagnosis: "IAM com supra de ST de parede inferior.",
      context: "Contexto.",
      justify: "Dor típica + supra + troponina.",
      differentials: ["Dissecção de aorta", "TEP", "Pericardite"],
      expectedAnamnesis: "Caracterizar a dor | Fatores de risco",
      expectedPhysical: ["PA nos dois braços"],
      expectedExams: [{ exam: "ECG", justify: "Em até 10 min", expected: "Supra de ST" }],
      expectedConduct: "AAS 300 mg | Reperfusão",
      expectedCommunication: "Apresentar-se",
      criticalErrors: ["Não pedir ECG", "Atrasar reperfusão", "Dar alta"],
    },
    instD: {
      title: "IAM — Material de Estudo",
      sections: [
        { h: "Definição", body: "Necrose miocárdica por isquemia." },
        { h: "Checklist", items: [{ item: "Pediu ECG", score: 1, ref: "Diretriz SBC" }] },
      ],
    },
  };
}

function parse(e: Record<string, any>) {
  return EstacaoSchema.safeParse(e);
}

function mensagens(e: Record<string, any>): string[] {
  const r = parse(e);
  return r.success ? [] : r.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`);
}

describe("EstacaoSchema", () => {
  it("aceita uma estação completa e normaliza os campos", () => {
    const r = parse(estacaoBase());
    expect(r.success).toBe(true);
    if (!r.success) return;
    const e = r.data;
    expect(e.tema).toBe("cardiologia");
    expect(e.level).toBe("moderado");
    expect(e.instB.physicalSeg).toEqual(["ACV: RCR 2T", "AR: MV+ sem RA"]);
    expect(e.instB.hiddenInfo).toEqual(["Pai infartou aos 50 anos"]);
    expect(e.instC.expectedAnamnesis).toEqual(["Caracterizar a dor", "Fatores de risco"]);
    expect(e.instC.expectedConduct).toEqual(["AAS 300 mg", "Reperfusão"]);
  });

  it("padroniza sinais vitais: SatO2 vira SpO2 e valores nulos somem", () => {
    const r = parse(estacaoBase());
    expect(r.success && r.data.instB.vitals).toEqual({ PA: "150/90 mmHg", FC: "102 bpm", SpO2: "94%" });
  });

  it("converte a imagem em texto para {title, report}", () => {
    const r = parse(estacaoBase());
    expect(r.success && r.data.instB.image).toEqual({ title: null, report: "ECG com supra de ST em DII, DIII e aVF." });
  });

  it("aceita os sinônimos de nível e qualquer grafia do tema", () => {
    const e = { ...estacaoBase(), level: "complexo", tema: "emergencias neurologicas" };
    const r = parse(e);
    expect(r.success && [r.data.level, r.data.tema]).toEqual(["dificil", "emergencias-neurologicas"]);
    expect(parse({ ...estacaoBase(), level: "simples" }).success && "ok").toBe("ok");
  });

  it("recusa estação sem nível", () => {
    const e = estacaoBase();
    delete e.level;
    expect(mensagens(e)).toEqual(["level: nível de dificuldade ausente (use fácil, moderado ou difícil)"]);
  });

  it("recusa especialidade desconhecida", () => {
    expect(mensagens({ ...estacaoBase(), tema: "Cardio" })[0]).toMatch(/especialidade desconhecida: "Cardio"/);
  });

  it("recusa campos com nome errado (erro de digitação)", () => {
    const e = estacaoBase();
    e.instB.vitais = {};
    expect(mensagens(e)[0]).toMatch(/^instB: /);
  });

  it("exige diferenciais e conduta no formato completo", () => {
    const e = estacaoBase();
    delete e.instC.differentials;
    delete e.instC.expectedConduct;
    expect(mensagens(e)).toEqual([
      "instC.differentials: faltam os diagnósticos diferenciais",
      "instC.expectedConduct: falta a conduta esperada",
    ]);
  });

  it("não exige diferenciais no formato PEP", () => {
    const e = estacaoBase();
    delete e.instC.differentials;
    delete e.instC.expectedConduct;
    e.instC.pep = [{ section: "Anamnese", items: [{ item: "Caracteriza a dor", score: 1 }] }];
    expect(parse(e).success).toBe(true);
  });

  it("recusa foto fora de img/estacoes", () => {
    const e = estacaoBase();
    e.instB.photo = { src: "fotos/Lesao 1.png", title: "t", alt: "a", caption: "c", request: "r" };
    expect(mensagens(e)[0]).toMatch(/^instB\.photo\.src: caminho da foto/);
  });
});

describe("validarEstacoes", () => {
  it("aponta slug repetido como erro e título repetido como aviso", () => {
    const a = { ...estacaoBase(), slug: "cardio-iam" };
    const b = { ...estacaoBase(), slug: "cardio-iam" };
    const rel = validarEstacoes([{ arquivo: "teste.js", estacoes: [a, b] }]);
    const regras = rel.resultados[0].problemas.map((p) => `${p.nivel}:${p.regra}`);
    expect(regras).toContain("erro:slug-duplicado");
    expect(regras).toContain("aviso:titulo-duplicado");
    expect(rel.comErro).toBe(2);
    expect(rel.semSlug).toBe(0);
  });

  it("confere se a foto existe quando recebe a função de checagem", () => {
    const e = estacaoBase();
    e.instB.photo = { src: "img/estacoes/melanoma.webp", title: "t", alt: "a", caption: "c", request: "r" };
    const rel = validarEstacoes([{ arquivo: "teste.js", estacoes: [e] }], { arquivoExiste: () => false });
    expect(rel.resultados[0].problemas).toContainEqual({
      nivel: "erro",
      regra: "foto-inexistente",
      mensagem: "foto não encontrada: img/estacoes/melanoma.webp",
    });
  });

  it("numera as estações como o site (posição global)", () => {
    const rel = validarEstacoes([
      { arquivo: "a.js", estacoes: [estacaoBase()] },
      { arquivo: "b.js", estacoes: [estacaoBase(), { title: "quebrada" }] },
    ]);
    expect(rel.resultados.map((r) => [r.ref.arquivo, r.ref.posicao, r.ref.idSite])).toEqual([
      ["a.js", 1, 1],
      ["b.js", 1, 2],
      ["b.js", 2, 3],
    ]);
    expect(rel.resultados[2].estacao).toBeUndefined();
  });
});
