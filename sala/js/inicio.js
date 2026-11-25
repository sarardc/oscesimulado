// Sala de Simulação · Inicialização: voz, microfone e IA disponíveis; abre o lobby.
// Script comum (não é módulo): compartilha o escopo global com os outros arquivos da sala,
// carregados em ordem pelo sala/index.html.
"use strict";
CAP.tts = browserTTS(); CAP.dict = browserDictation(); wireDictation(CAP.dict);
CAP.sample = webSample(IA_API_URL);

(async () => {
  if (!window.claude?.use) return;
  const [sm, tt, dc] = await Promise.all(["sample","tts","dictation"].map(n => window.claude.use(n).catch(()=>null)));
  if (sm) CAP.sample = sm;
  if (tt){ CAP.tts?.stop?.(); CAP.tts = tt; }
  if (dc){ CAP.dict = dc; wireDictation(dc); }
  refreshCapsUI();
})();

renderLobby();
loadRepoCases();
