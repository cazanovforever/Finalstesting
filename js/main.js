// js/main.js

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('#login-form');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;

        if (validateLogin(username, password)) {
            // Perform login action (e.g., redirect to homepage)
            window.location.href = 'index.html';
        } else {
            alert('Invalid username or password.');
        }
    });

    function validateLogin(username, password) {
        // Basic validation (for demonstration purposes)
        return username === 'admin' && password === 'password';
    }
});
