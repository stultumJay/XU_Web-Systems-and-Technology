document.addEventListener('DOMContentLoaded', () => {
    // Generic form validation
    const validateForm = (formId, checkPassword = false) => {
        const form = document.getElementById(formId);
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;
            const inputs = form.querySelectorAll('input[required]');

            // Reset previous error styles
            inputs.forEach(input => {
                input.style.borderColor = '#ddd';
            });

            // Check empty fields
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.style.borderColor = 'red';
                    isValid = false;
                }
            });

            // Password matching check
            if (checkPassword) {
                const password = form.querySelector('input[name="password"]');
                const confirmPassword = form.querySelector('input[name="confirm_password"]');
                
                if (password.value !== confirmPassword.value) {
                    password.style.borderColor = 'red';
                    confirmPassword.style.borderColor = 'red';
                    alert('Passwords do not match!');
                    isValid = false;
                }
            }

            if (isValid) {
                // Simulate successful submission
                alert(checkPassword ? 'Registration Successful!' : 'Update Successful!');
                form.reset();
            } else {
                alert('Please fill in all required fields!');
            }
        });
    };

    // Delete functionality
    const deleteForm = document.getElementById('deleteForm');
    if (deleteForm) {
        deleteForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const usernameInput = deleteForm.querySelector('input[name="username"]');
            // Simulate username check (replace with actual API call)
            const existingUsers = ['user1', 'user2']; // Mock existing users
            
            if (existingUsers.includes(usernameInput.value.trim())) {
                if (confirm('Are you sure you want to delete this user?')) {
                    alert('User deleted successfully!');
                    deleteForm.reset();
                }
            } else {
                usernameInput.style.borderColor = 'red';
                alert('Username not found!');
            }
        });
    }

    // Initialize validations
    validateForm('registerForm', true);
    validateForm('updateForm');
});