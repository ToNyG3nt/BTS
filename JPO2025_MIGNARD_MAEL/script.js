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

    // Sticky Navigation Bar Logic
    const navbar = document.querySelector('nav');
    if (navbar) {
        // Use a small delay or check for layout complete to get accurate offsetTop
        // For simplicity, let's assume it's calculated correctly after DOMContentLoaded
        const sticky = navbar.offsetTop;

        function stickyNavbar() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky");
            } else {
                navbar.classList.remove("sticky");
            }
        }
        window.addEventListener('scroll', stickyNavbar); // Add event listener
        // Also call it once in case the page is loaded with scroll already
        stickyNavbar();
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

    // Apply theme on page load (default to light mode, ignore system preference initially)
    let isDarkMode = false;
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark-mode') {
        isDarkMode = true;
    } else if (savedTheme === 'light-mode') {
        isDarkMode = false;
    } else {
        // If no saved theme, default to light mode and save it
        localStorage.setItem('theme', 'light-mode');
        isDarkMode = false;
    }

    if (isDarkMode) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
    updateBannerImage(isDarkMode);

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            isDarkMode = body.classList.contains('dark-mode');

            // Save preference to localStorage
            if (isDarkMode) {
                localStorage.setItem('theme', 'dark-mode');
            } else {
                localStorage.setItem('theme', 'light-mode'); // Explicitly save light mode
            }

            updateBannerImage(isDarkMode); // Update image immediately
        });
    }
});
