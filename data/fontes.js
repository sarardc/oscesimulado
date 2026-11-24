// Lista única dos arquivos de estações, na ordem do site.
// Usada por build.js (gera data/stations.json) e por scripts/validar-estacoes.ts.
// A ORDEM IMPORTA: o id numérico de cada estação no site ainda é a posição
// nesta lista. Arquivo novo entra sempre no FIM, até as estações terem slug.
import { urologyStations, endocrineStations } from './casos.js';
import endocrineStations1 from './endocrino_parsed.js';
import pediatriaStations from './pediatria_parsed.js';
import pediatria2 from './pediatria2.js';
import uro1stations from './uro1.js';
import psiq1stations from './psiq1.js';
import uro2stations from './uro2.js';
import nefro2 from './nefro2.js';
import neuro from './neuro.js';
import orl from './orl.js';
import ped3 from './ped3.js';
import oftalmo from './oftalmo.js';
import ctoracica from './cc/cirurgiatoracica.js';
import pneumoGastro from './pneumo_gastro.js';
import especialidades2 from './especialidades2.js';
import hematologia from './hematologia.js';
import cardiologia from './cardiologia.js';
import ortopedia from './ortopedia.js';
import emergNeuro from './emergNeuro.js';
import ginecologia from './ginecologia.js';
import obstetricia from './obstetricia.js';
import dermatologia2 from './dermatologia2.js';
import infectologia2 from './infectologia2.js';
import pneumologia2 from './pneumologia2.js';
import medicinaIntensiva from './medicinaintensiva.js';
import medicinaLegal from './medicinalegal.js';
import gastroenterologia2 from './gastroenterologia2.js';
import geriatria2 from './geriatria2.js';
import salaSimulacao from './salasimulacao.js';

export const fontes = [
  { arquivo: 'data/casos.js (urologyStations)', estacoes: urologyStations },
  { arquivo: 'data/casos.js (endocrineStations)', estacoes: endocrineStations },
  { arquivo: 'data/endocrino_parsed.js', estacoes: endocrineStations1 },
  { arquivo: 'data/pediatria_parsed.js', estacoes: pediatriaStations },
  { arquivo: 'data/pediatria2.js', estacoes: pediatria2 },
  { arquivo: 'data/uro1.js', estacoes: uro1stations },
  { arquivo: 'data/psiq1.js', estacoes: psiq1stations },
  { arquivo: 'data/uro2.js', estacoes: uro2stations },
  { arquivo: 'data/nefro2.js', estacoes: nefro2 },
  { arquivo: 'data/neuro.js', estacoes: neuro },
  { arquivo: 'data/orl.js', estacoes: orl },
  { arquivo: 'data/ped3.js', estacoes: ped3 },
  { arquivo: 'data/oftalmo.js', estacoes: oftalmo },
  { arquivo: 'data/cc/cirurgiatoracica.js', estacoes: ctoracica },
  { arquivo: 'data/pneumo_gastro.js', estacoes: pneumoGastro },
  { arquivo: 'data/especialidades2.js', estacoes: especialidades2 },
  { arquivo: 'data/hematologia.js', estacoes: hematologia },
  { arquivo: 'data/cardiologia.js', estacoes: cardiologia },
  { arquivo: 'data/ortopedia.js', estacoes: ortopedia },
  { arquivo: 'data/emergNeuro.js', estacoes: emergNeuro },
  { arquivo: 'data/ginecologia.js', estacoes: ginecologia },
  { arquivo: 'data/obstetricia.js', estacoes: obstetricia },
  { arquivo: 'data/dermatologia2.js', estacoes: dermatologia2 },
  { arquivo: 'data/infectologia2.js', estacoes: infectologia2 },
  { arquivo: 'data/pneumologia2.js', estacoes: pneumologia2 },
  { arquivo: 'data/medicinaintensiva.js', estacoes: medicinaIntensiva },
  { arquivo: 'data/medicinalegal.js', estacoes: medicinaLegal },
  { arquivo: 'data/gastroenterologia2.js', estacoes: gastroenterologia2 },
  { arquivo: 'data/geriatria2.js', estacoes: geriatria2 },
  { arquivo: 'data/salasimulacao.js', estacoes: salaSimulacao },
];
