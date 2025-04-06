// script.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', function(event) {
            let isValid = true;
            const name = form.name.value.trim();
            const email = form.email.value.trim();
            const message = form.message.value.trim();

            if (!name) {
                document.getElementById('nameError').textContent = 'Name is required.';
                isValid = false;
            } else {
                document.getElementById('nameError').textContent = '';
            }

            if (!email) {
                document.getElementById('emailError').textContent = 'Email is required.';
                isValid = false;
            } else if (!/\S+@\S+\.\S+/.test(email)) {
                document.getElementById('emailError').textContent = 'Invalid email format.';
                isValid = false;
            } else {
                document.getElementById('emailError').textContent = '';
            }

            if (!message) {
                document.getElementById('messageError').textContent = 'Message is required.';
                isValid = false;
            } else {
                document.getElementById('messageError').textContent = '';
            }

            if (!isValid) {
                event.preventDefault();
            }
        });
    }
});