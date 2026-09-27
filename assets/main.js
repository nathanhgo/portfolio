/* Melhoria progressiva. A página funciona inteira sem este arquivo.
   Único comportamento: copiar o e-mail para a área de transferência (o endereço também está
   escrito na página, então nada se perde sem JS). */
(() => {
  "use strict";
  const botao = document.querySelector("[data-copiar-email]");
  if (!botao || !navigator.clipboard) return;
  const aviso = document.querySelector("[data-copiar-aviso]");
  botao.hidden = false;
  botao.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(botao.dataset.copiarEmail);
      if (aviso) aviso.textContent = "E-mail copiado.";
    } catch {
      if (aviso) aviso.textContent = "Não foi possível copiar. O endereço está logo acima.";
    }
  });
})();
