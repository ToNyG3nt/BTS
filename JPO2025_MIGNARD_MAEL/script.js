document.addEventListener('DOMContentLoaded', () => {
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = document.getElementById('nom').value; // Corrected ID from 'name' to 'nom'
            const email = document.getElementById('email').value;

            if (name === '' || email === '') {
                alert('Remplissez tous les champs requis.');
            } else {
                alert('Formulaire soumis avec succès !');
                contactForm.reset();
            }
        });
    }

    // Image switching logic for dark mode
    const bannerImage = document.querySelector('.banner img');

    function updateBannerImage(isDarkMode) {
        if (!bannerImage) return;

        if (isDarkMode) {
            bannerImage.src = bannerImage.dataset.darkSrc || bannerImage.dataset.lightSrc; // Fallback to light if dark is not defined
        } else {
            bannerImage.src = bannerImage.dataset.lightSrc;
        }
    }

    // Existing Dark Mode Toggle Logic
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check for user's preferred theme in localStorage and system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        updateBannerImage(savedTheme === 'dark-mode');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add('dark-mode');
        updateBannerImage(true);
    } else {
        updateBannerImage(false); // Ensure light image is set if no dark mode preference
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const isDarkMode = body.classList.contains('dark-mode');

            // Save preference to localStorage
            if (isDarkMode) {
                localStorage.setItem('theme', 'dark-mode');
            } else {
                localStorage.removeItem('theme');
            }

            updateBannerImage(isDarkMode); // Update image immediately
        });
    }
});
