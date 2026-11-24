// Lista de todos os arquivos de casos, na ordem em que entram no site.
//
// ATENÇÃO: a ordem define o número de cada estação (id = posição + 1), e o
// site usa esse número (js/ui.js trata id >= 30 de outro jeito). Arquivos
// novos entram sempre NO FIM da lista; não reordene nem remova linhas.
import { urologyStations, endocrineStations } from './mistos/casos-originais.js';
import endocrinologia from './clinica-medica/endocrinologia.js';
import pediatria1 from './pediatria/pediatria-1.js';
import pediatria2 from './pediatria/pediatria-2.js';
import urologia1 from './cirurgia/urologia-1.js';
import psiquiatria from './especialidades/psiquiatria.js';
import urologia2 from './cirurgia/urologia-2.js';
import nefrologia from './clinica-medica/nefrologia.js';
import neurologia from './clinica-medica/neurologia.js';
import otorrinoEDermato from './especialidades/otorrino-e-dermato.js';
import pediatria3 from './pediatria/pediatria-3.js';
import oftalmologia from './especialidades/oftalmologia.js';
import cirurgiaToracica from './cirurgia/cirurgia-toracica.js';
import pneumologiaGastro from './clinica-medica/pneumologia-gastro.js';
import especialidadesVariadas from './mistos/especialidades-variadas.js';
import hematologia from './clinica-medica/hematologia.js';
import cardiologia from './clinica-medica/cardiologia.js';
import ortopedia from './cirurgia/ortopedia.js';
import emergenciasNeurologicas from './clinica-medica/emergencias-neurologicas.js';
import ginecologia from './ginecologia-obstetricia/ginecologia.js';
import obstetricia from './ginecologia-obstetricia/obstetricia.js';
import dermatologia from './especialidades/dermatologia.js';
import infectologia from './clinica-medica/infectologia.js';
import pneumologia from './clinica-medica/pneumologia.js';
import medicinaIntensiva from './clinica-medica/medicina-intensiva.js';
import medicinaLegal from './especialidades/medicina-legal.js';
import gastroenterologia from './clinica-medica/gastroenterologia.js';
import geriatria from './clinica-medica/geriatria.js';
import salaSimulacao from './mistos/sala-simulacao.js';

export default [
  ...urologyStations,
  ...endocrineStations,
  ...endocrinologia,
  ...pediatria1,
  ...pediatria2,
  ...urologia1,
  ...psiquiatria,
  ...urologia2,
  ...nefrologia,
  ...neurologia,
  ...otorrinoEDermato,
  ...pediatria3,
  ...oftalmologia,
  ...cirurgiaToracica,
  ...pneumologiaGastro,
  ...especialidadesVariadas,
  ...hematologia,
  ...cardiologia,
  ...ortopedia,
  ...emergenciasNeurologicas,
  ...ginecologia,
  ...obstetricia,
  ...dermatologia,
  ...infectologia,
  ...pneumologia,
  ...medicinaIntensiva,
  ...medicinaLegal,
  ...gastroenterologia,
  ...geriatria,
  ...salaSimulacao,
  // novos arquivos de casos: adicionar aqui embaixo
];
