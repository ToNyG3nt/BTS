document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Form validation for contact.html
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;

            if (name === '' || email === '') {
                alert('Please fill in both Name and Email fields.');
            } else {
                alert('Form submitted successfully!');
                // Here you would typically send the form data to a server
                // For this example, we just show an alert
                contactForm.reset(); // Clear the form
            }
        });
    }
});
