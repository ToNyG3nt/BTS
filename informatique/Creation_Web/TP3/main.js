// Menu mobile toggle
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#primary-menu');

if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    document.body.classList.toggle('nav-open');
  });
}

// Défilement fluide pour les liens internes
const internalLinks = document.querySelectorAll('a[href^="#"]');
internalLinks.forEach((a) => {
  a.addEventListener('click', (e) => {
    const targetId = a.getAttribute('href');
    const target = targetId ? document.querySelector(targetId) : null;
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Refermer le menu sur mobile
      document.body.classList.remove('nav-open');
      menuToggle?.setAttribute('aria-expanded', 'false');
    }
  });
});

// Mise en évidence de la section active (IntersectionObserver)
const sections = document.querySelectorAll('section, header#accueil, footer#contact');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = '#' + entry.target.id;
        navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === id));
      }
    });
  },
  { root: null, rootMargin: '0px 0px -60% 0px', threshold: 0.2 }
);

sections.forEach((s) => s.id && sectionObserver.observe(s));

// Bouton "Retour en haut"
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (!backToTop) return;
  const scrolled = window.scrollY || document.documentElement.scrollTop;
  backToTop.classList.toggle('show', scrolled > 400);
});
backToTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
