export function initInteractions() {
  // Localiza o botão do cartão técnico e a mensagem de retorno para a pessoa usuária.
  const copyButton = document.querySelector(".copy-button");
  const toast = document.querySelector(".toast");
  let timeout;

  // Copia o link do LinkedIn e exibe uma confirmação temporária.
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(copyButton.dataset.copy);
      toast.textContent = "Link do LinkedIn copiado!";
    } catch {
      toast.textContent = "LinkedIn: Amanda Kelly";
    }
    // Exibe a mensagem e reinicia o temporizador caso o botão seja clicado novamente.
    toast.classList.add("is-visible");
    clearTimeout(timeout);
    timeout = setTimeout(() => toast.classList.remove("is-visible"), 2500);
  });
}
