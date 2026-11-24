// Lista de todos os arquivos de casos, na ordem em que aparecem no site.
// Um arquivo por especialidade, agrupados por área. O número de cada estação
// é a posição dela nesta lista (gerado no build).

// Clínica médica
import cardiologia from './clinica-medica/cardiologia.js';
import endocrinologia from './clinica-medica/endocrinologia.js';
import gastroenterologia from './clinica-medica/gastroenterologia.js';
import geriatria from './clinica-medica/geriatria.js';
import hematologia from './clinica-medica/hematologia.js';
import infectologia from './clinica-medica/infectologia.js';
import nefrologia from './clinica-medica/nefrologia.js';
import neurologia from './clinica-medica/neurologia.js';
import pneumologia from './clinica-medica/pneumologia.js';

// Urgência e terapia intensiva
import emergenciasNeurologicas from './urgencia-e-terapia-intensiva/emergencias-neurologicas.js';
import medicinaIntensiva from './urgencia-e-terapia-intensiva/medicina-intensiva.js';

// Cirurgia
import cirurgiaGeral from './cirurgia/cirurgia-geral.js';
import ortopedia from './cirurgia/ortopedia.js';
import urologia from './cirurgia/urologia.js';
import vascular from './cirurgia/vascular.js';

// Pediatria
import cirurgiaPediatrica from './pediatria/cirurgia-pediatrica.js';
import neonatologia from './pediatria/neonatologia.js';
import pediatriaGeral from './pediatria/pediatria-geral.js';
import puericultura from './pediatria/puericultura.js';

// Ginecologia e obstetrícia
import ginecologia from './ginecologia-obstetricia/ginecologia.js';
import obstetricia from './ginecologia-obstetricia/obstetricia.js';

// Especialidades
import dermatologia from './especialidades/dermatologia.js';
import medicinaLegal from './especialidades/medicina-legal.js';
import oftalmologia from './especialidades/oftalmologia.js';
import otorrinolaringologia from './especialidades/otorrinolaringologia.js';
import psiquiatria from './especialidades/psiquiatria.js';

export default [
  // Clínica médica
  ...cardiologia,
  ...endocrinologia,
  ...gastroenterologia,
  ...geriatria,
  ...hematologia,
  ...infectologia,
  ...nefrologia,
  ...neurologia,
  ...pneumologia,

  // Urgência e terapia intensiva
  ...emergenciasNeurologicas,
  ...medicinaIntensiva,

  // Cirurgia
  ...cirurgiaGeral,
  ...ortopedia,
  ...urologia,
  ...vascular,

  // Pediatria
  ...cirurgiaPediatrica,
  ...neonatologia,
  ...pediatriaGeral,
  ...puericultura,

  // Ginecologia e obstetrícia
  ...ginecologia,
  ...obstetricia,

  // Especialidades
  ...dermatologia,
  ...medicinaLegal,
  ...oftalmologia,
  ...otorrinolaringologia,
  ...psiquiatria,
];
