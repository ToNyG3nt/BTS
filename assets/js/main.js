// Menu mobile
const menuToggle = document.querySelector('.menu-toggle');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    document.body.classList.toggle('nav-open');
  });
}

// Année dynamique footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Injection des projets
function renderProjects(containerId, max = Infinity) {
  const data = window.__PROJECTS__ || [];
  const container = document.getElementById(containerId);
  if (!container || !data.length) return;

  const slice = data.slice(0, max);
  container.innerHTML = slice.map((p) => `
    <article class="card">
      <a href="${p.link}" class="cover" style="background:url('${p.cover}') center/cover no-repeat" aria-label="${p.title}"></a>
      <div class="content">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        ${Array.isArray(p.tags) ? `<ul class="tags">${p.tags.map(t=>`<li>${t}</li>`).join('')}</ul>` : ''}
      </div>
    </article>
  `).join('');
}

// Page d'accueil: 3 derniers projets
if (document.getElementById('latest-projects')) {
  renderProjects('latest-projects', 3);
}
// Page projets: tous
if (document.getElementById('projects')) {
  renderProjects('projects');
}
