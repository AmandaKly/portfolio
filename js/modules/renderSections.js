const createElement = (tag, className, text) => {
  // Cria elementos de forma reutilizável para as listas renderizadas abaixo.
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
};

export function renderPortfolioSections(data) {
  // Renderiza cada experiência da trajetória profissional na linha do tempo.
  const experienceList = document.querySelector("#experience-list");
  data.experiences.forEach((item) => {
    const li = createElement("li", "timeline__item");
    li.innerHTML = `<div class="timeline__top"><h3>${item.role}</h3><time class="timeline__date">${item.date}</time></div><p class="timeline__company">${item.company}</p><p class="timeline__tags">${item.tags}</p><p class="timeline__description">${item.description}</p>`;
    experienceList.append(li);
  });

  // Renderiza a formação e as certificações no painel lateral.
  const educationList = document.querySelector("#education-list");
  data.education.forEach((item) => {
    const article = createElement("article", "credential");
    article.innerHTML = `<h3>${item.title}</h3><p>${item.detail}</p>`;
    educationList.append(article);
  });

  // Renderiza a formação e as certificações no painel lateral.
  const courseList = document.querySelector("#course-list");
  data.course.forEach((item) => {
    const article = createElement("article", "credential");
    article.innerHTML = `<h3>${item.title}</h3><p>${item.detail}</p>`;
    courseList.append(article);
  });

  // Adiciona uma etiqueta para cada habilidade técnica.
  const skillsList = document.querySelector("#skills-list");
  data.skills.forEach((skill) =>
    skillsList.append(createElement("li", "", skill)),
  );

  // Exibe idioma e nível correspondente.
  const languagesList = document.querySelector("#languages-list");
  data.languages.forEach((language) => {
    const item = createElement("li");
    item.innerHTML = `${language.name}<span>${language.level}</span>`;
    languagesList.append(item);
  });

  // Monta os cards de projetos com tecnologias e link externo.
  const projectsList = document.querySelector("#projects-list");
  data.projects.forEach((project, index) => {
    const article = createElement("article", "project-card");
    const tags = project.tags.map((tag) => `<span>${tag}</span>`).join("");
    article.innerHTML = `<span class="project-card__number">0${index + 1} / projeto</span><h3>${project.title}</h3><p>${project.description}</p><div class="project-card__bottom"><div class="project-card__tags">${tags}</div><a class="project-card__link" href="${project.url}" target="_blank" rel="noopener noreferrer" aria-label="Abrir ${project.title}">↗</a></div>`;
    projectsList.append(article);
  });
}
