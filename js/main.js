import { portfolioData } from "./data/portfolioData.js";
import { renderPortfolioSections } from "./modules/renderSections.js";
import { initNavigation } from "./modules/navigation.js";
import { initInteractions } from "./modules/interactions.js";

// Preenche as listas e os cards com os dados centralizados do portfólio.
renderPortfolioSections(portfolioData);
// Ativa o menu mobile e acompanha a seção atual durante a rolagem.
initNavigation();
// Inicializa interações menores, como a cópia do link de contato.
initInteractions();
