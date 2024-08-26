
document.addEventListener('DOMContentLoaded', function() {
    // Signup
    document.getElementById('signup').addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;

        fetch('/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        })
        .then(response => response.json())
        .then(data => console.log('Signup successful:', data))
        .catch(error => console.error('Error:', error));
    });

    // Login
    document.getElementById('login').addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        })
        .then(response => response.json())
        .then(data => console.log('Login successful:', data))
        .catch(error => console.error('Error:', error));
    });

    // Forgot Password
    document.getElementById('forgot-password').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('forgot-email').value;

        fetch('/api/forgot-password', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        })
        .then(response => response.json())
        .then(data => console.log('Forgot password request sent:', data))
        .catch(error => console.error('Error:', error));
    });

    // Reset Password
    document.getElementById('reset-password').addEventListener('submit', function(e) {
        e.preventDefault();
        const newPassword = document.getElementById('reset-password-new').value;
        const confirmPassword = document.getElementById('reset-password-confirm').value;

        if (newPassword !== confirmPassword) {
            console.error('Passwords do not match');
            return;
        }

        fetch('/api/reset-password', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ newPassword })
        })
        .then(response => response.json())
        .then(data => console.log('Password reset successful:', data))
        .catch(error => console.error('Error:', error));
    });
});
