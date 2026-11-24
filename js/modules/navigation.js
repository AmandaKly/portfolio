export function initNavigation() {
  // Seleciona os elementos necessários para controlar o menu responsivo.
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".nav-menu");
  const links = document.querySelectorAll(".nav-link");

  // Aplica o estado ativo ao link cuja âncora corresponde à seção visível.
  const setActiveLink = (sectionId) => {
    links.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${sectionId}`);
    });
  };

  // Abre ou fecha o menu mobile e mantém os atributos ARIA sincronizados.
  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    document.body.classList.toggle("menu-open", isOpen);
  });
  links.forEach((link) =>
    link.addEventListener("click", () => {
      // Destaca o link imediatamente, inclusive ao voltar para o hero (Início).
      setActiveLink(link.getAttribute("href").slice(1));
      // Fecha o menu depois que um destino é escolhido em telas pequenas.
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    }),
  );
  // Observa somente seções que possuem um link correspondente no menu.
  // O hero possui o id "inicio"; "trajetoria" não entra por não ser item de navegação.
  const sections = [...document.querySelectorAll("main section[id]")].filter((section) =>
    document.querySelector(`.nav-link[href="#${section.id}"]`),
  );
  // Atualiza o menu quando o centro da tela alcança uma seção observada.
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        setActiveLink(entry.target.id);
      });
    },
    { rootMargin: "-35% 0px -55% 0px" },
  );
  // Inicia a observação de cada destino de navegação.
  sections.forEach((section) => observer.observe(section));
}
