const projects = [
  {
    title: 'The Archive',
    description:
      'The Archive is a place for stories that deserve to be remembered - blog',
    image: './images/archive.png',
    live: 'https://missadelliah.github.io/Silje_Reppe_PE1_MAR25FT/',
    repo: 'https://github.com/MissAdelliah/Silje_Reppe_PE1_MAR25FT.git',
  },
  {
    title: 'GameHub',
    description: 'Online game store',
    image: './images/gamehub.png',
    live: 'https://missadelliah.github.io/silje_reppe_JS1_CA_MAR25FT/',
    repo: 'https://github.com/MissAdelliah/silje_reppe_JS1_CA_MAR25FT.git',
  },
  {
    title: 'Rainydays',
    description: 'E-commerce outwear clothing',
    image: './images/rainydays.png',
    live: 'https://missadelliah.github.io/html-css-js-siljereppe/',
    repo: 'https://github.com/MissAdelliah/html-css-js-siljereppe.git',
  },
];

const container = document.getElementById('projects');

container.innerHTML = projects
  .map(
    (p) => `
    <article class="project-card">
      <img src="${p.image}" alt="${p.title} preview" />
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <div class="buttons">
        <a class="btn" href="${p.live}" target="_blank" rel="noopener">Live Demo</a>
        <a class="btn" href="${p.repo}" target="_blank" rel="noopener">Repo</a>
      </div>
    </article>
  `,
  )
  .join('');
