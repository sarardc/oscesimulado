/**
 * js/drawer.js
 * ─────────────────────────────────────────────────────────────────────────
 * Liga a UI do painel lateral (abrir/fechar, copiar/baixar o prompt) ao
 * PromptExport (js/promptExport.js). O projeto não se comunica com nenhuma
 * API de IA — só monta o prompt localmente. Extraído para arquivo externo
 * (antes era um <script> inline em index.html) para funcionar sob uma
 * Content-Security-Policy sem 'unsafe-inline' em script-src.
 */

document.addEventListener("DOMContentLoaded", () => {
    const btnAbrirIa = document.getElementById("btn-abrir-ia");
    const btnFecharIa = document.getElementById("btn-fechar-ia");
    const drawer = document.getElementById("ia-drawer");
    const overlay = document.getElementById("ia-overlay");
    const tituloDrawer = document.getElementById("titulo-ia-drawer");

    const btnExportarPrompt = document.getElementById("btn-exportar-prompt");
    const btnCopiarPrompt = document.getElementById("btn-copiar-prompt");

    function estacaoAtual() {
        return window.currentStation || null;
    }

    // Exportar prompt "para levar": monta o arquivo localmente a partir
    // dos dados da estação e dispara o download no navegador.
    function baixarArquivoTexto(nomeArquivo, conteudo) {
        // BOM UTF-8 no início: sem ele, alguns editores/uploads (comum no
        // Windows) adivinham a codificação errada e trocam os acentos por
        // caracteres estranhos ao abrir o arquivo.
        const blob = new Blob(["﻿" + conteudo], { type: "text/markdown;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = nomeArquivo;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }

    // Copia o texto do prompt para a área de transferência, com fallback
    // manual (textarea + execCommand) para navegadores/contextos onde a
    // Clipboard API não está disponível (ex.: página aberta sem HTTPS).
    async function copiarTexto(texto) {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(texto);
            return;
        }
        const area = document.createElement("textarea");
        area.value = texto;
        area.style.position = "fixed";
        area.style.opacity = "0";
        document.body.appendChild(area);
        area.focus();
        area.select();
        document.execCommand("copy");
        document.body.removeChild(area);
    }

    if (btnCopiarPrompt) {
        btnCopiarPrompt.addEventListener("click", async () => {
            const estacao = estacaoAtual();
            if (!estacao) return;
            const conteudo = PromptExport.gerarPromptOffline(estacao);
            const textoOriginal = btnCopiarPrompt.textContent;
            try {
                await copiarTexto(conteudo);
                btnCopiarPrompt.textContent = "✅ Copiado!";
            } catch (erro) {
                console.error("Erro ao copiar prompt:", erro);
                btnCopiarPrompt.textContent = "❌ Não foi possível copiar";
            } finally {
                setTimeout(() => { btnCopiarPrompt.textContent = textoOriginal; }, 2000);
            }
        });
    }

    if (btnExportarPrompt) {
        btnExportarPrompt.addEventListener("click", () => {
            const estacao = estacaoAtual();
            if (!estacao) return;
            const conteudo = PromptExport.gerarPromptOffline(estacao);
            baixarArquivoTexto(`estacao-${estacao.id}-prompt-ia.md`, conteudo);
        });
    }

    // Controle da aba lateral
    if (btnAbrirIa) {
        btnAbrirIa.addEventListener("click", () => {
            drawer.classList.add("aberto");
            overlay.classList.add("ativo");
            document.body.classList.add("ia-panel-aberto");
            const tituloCaso = document.getElementById("sv-title") ? document.getElementById("sv-title").innerText : "Caso Clínico";
            if (tituloDrawer) tituloDrawer.innerText = tituloCaso;
        });
    }

    function fecharPainel() {
        drawer.classList.remove("aberto");
        overlay.classList.remove("ativo");
        document.body.classList.remove("ia-panel-aberto");
    }
    if (btnFecharIa) btnFecharIa.addEventListener("click", fecharPainel);
    if (overlay) overlay.addEventListener("click", fecharPainel);
});
