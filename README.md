# Portfólio — Amanda Kelly

Portfólio pessoal estático construído exclusivamente com HTML5, CSS3 e JavaScript puro (ES Modules).

## Estrutura

```text
index.html
css/
  reset.css       # normalização inicial
  styles.css      # entrada dos estilos globais
  components.css  # componentes reutilizáveis
  variables.css, base.css, layout.css, sections.css, responsive.css
js/
  main.js     # inicialização da aplicação
  data/       # dados do portfólio centralizados
  modules/    # navegação, renderização e interações
assets/
  images/     # imagens locais do site
  icons/      # ícones locais do site
```

## Rodando localmente

Como o projeto utiliza módulos ES, abra-o com um servidor local:

```bash
npx serve .
```
