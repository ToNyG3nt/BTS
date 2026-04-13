const currentYearSpan = document.getElementById('current-year');
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', () => {

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = document.getElementById('nom').value;
            const email = document.getElementById('email').value;

            if (name === '' || email === '') {
                alert('Remplissez tous les champs requis.');
            } else {
                alert('Formulaire soumis avec succès !');
                contactForm.reset();
            }
        });
    }

    const navbar = document.querySelector('nav');
    if (navbar) {
        const sticky = navbar.offsetTop;
        function stickyNavbar() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky");
            } else {
                navbar.classList.remove("sticky");
            }
        }
        window.addEventListener('scroll', stickyNavbar);
        stickyNavbar();
    }

    const bannerImage = document.querySelector('.banner img');

    function updateBannerImage(isDarkMode) {
        if (!bannerImage) return;
        bannerImage.src = isDarkMode ? bannerImage.dataset.darkSrc : bannerImage.dataset.lightSrc;
    }

    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    const initialDarkMode = localStorage.getItem('theme') === 'dark-mode';
    body.classList.toggle('dark-mode', initialDarkMode);
    updateBannerImage(initialDarkMode);

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const isDarkModeActive = body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDarkModeActive ? 'dark-mode' : 'light-mode');
            updateBannerImage(isDarkModeActive);
        });
    }
});