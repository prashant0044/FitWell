document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const showPasswordButton = document.getElementById('show-password');
    
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        validateForm();
    });

    showPasswordButton.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            showPasswordButton.textContent = 'Hide';
        } else {
            passwordInput.type = 'password';
            showPasswordButton.textContent = 'Show';
        }
    });

    function validateForm() {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === '') {
            alert('Username is required');
            return false;
        }

        if (password === '') {
            alert('Password is required');
            return false;
        }
        if (username=='prashant'){
            alert('Welcome to FitWell');
        }
        if(password=='123456'){
            alert ('Welcome to FitWell');
        }
        // Add further validation as needed
        // For example, you can check the length of the password
        if (password.length < 6) {
            alert('Password must be at least 6 characters long');
            return false;
        }
        else{
            alert('Wrong Username/ Password');
        }

        // If validation passes, you can submit the form
        loginForm.submit();
    }
});
