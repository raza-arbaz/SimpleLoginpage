document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const showSignup = document.getElementById('showSignup');
    const showLogin = document.getElementById('showLogin');

    const loginMessage = document.getElementById('loginMessage');
    const signupMessage = document.getElementById('signupMessage');

    // --- Switch Forms ---
    showSignup.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent page jump
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
        clearMessages(); // Clear any previous messages
    });

    showLogin.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent page jump
        signupForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
        clearMessages(); // Clear any previous messages
    });

    // --- Form Submission ---

    // Login Form Handler
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent actual form submission
        clearMessages();

        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value.trim();

        // Basic Validation
        if (!email || !password) {
            displayMessage(loginMessage, 'Please fill in all fields.', 'error');
            return;
        }

        // --- !!! IMPORTANT: Simulated Authentication !!! ---
        // In a real application, you would send these details to a server
        // for verification using fetch() or similar.
        // For this example, we'll just check for non-empty fields
        // and simulate success. You could add a dummy check like:
        // if (email === "user@example.com" && password === "password") {
        //     console.log('Login successful (simulated)');
        //     window.location.href = 'dashboard.html'; // Redirect on success
        // } else {
        //     displayMessage(loginMessage, 'Invalid email or password.', 'error');
        // }

        // Simplified simulation: If fields are filled, consider it successful
        console.log('Simulating login attempt...');
        if (email && password) {
            // Simulate a short delay like a network request
            displayMessage(loginMessage, 'Logging in...', 'success'); // Temporary message
            setTimeout(() => {
                console.log('Login successful (simulated)');
                window.location.href = 'dashboard.html'; // Redirect to dashboard
            }, 1000); // 1 second delay
        } else {
             // This case is already handled by the initial validation,
             // but kept for clarity if you add more complex checks.
             displayMessage(loginMessage, 'Invalid credentials (simulated).', 'error');
        }
    });

    // Signup Form Handler
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent actual form submission
        clearMessages();

        const username = document.getElementById('signupUsername').value.trim();
        const email = document.getElementById('signupEmail').value.trim();
        const password = document.getElementById('signupPassword').value.trim();
        const confirmPassword = document.getElementById('signupConfirmPassword').value.trim();

        // Basic Validation
        if (!username || !email || !password || !confirmPassword) {
            displayMessage(signupMessage, 'Please fill in all fields.', 'error');
            return;
        }

        if (password !== confirmPassword) {
            displayMessage(signupMessage, 'Passwords do not match.', 'error');
            return;
        }

        // Basic email format check (very simple)
        if (!email.includes('@') || !email.includes('.')) {
             displayMessage(signupMessage, 'Please enter a valid email address.', 'error');
            return;
        }

        // --- !!! IMPORTANT: Simulated Signup !!! ---
        // In a real application, you would send these details to a server
        // to create a new user account.
        // For this example, we just simulate success.
        console.log('Simulating signup attempt...');
        displayMessage(signupMessage, 'Signup successful! Please log in.', 'success');

        // Optional: Clear form fields after successful signup simulation
        // signupForm.reset();

        // Optional: Automatically switch to the login form after signup
        setTimeout(() => {
             signupForm.classList.add('hidden');
             loginForm.classList.remove('hidden');
             clearMessages();
             // Maybe pre-fill login email?
             // document.getElementById('loginEmail').value = email;
        }, 2000); // Wait 2 seconds before switching
    });


    // --- Helper Functions ---
    function displayMessage(element, message, type) {
        element.textContent = message;
        element.className = `message ${type}`; // Set class for styling (error or success)
    }

    function clearMessages() {
        loginMessage.textContent = '';
        loginMessage.className = 'message'; // Reset class
        signupMessage.textContent = '';
        signupMessage.className = 'message'; // Reset class
    }
});