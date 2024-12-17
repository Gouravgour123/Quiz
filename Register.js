const form = document.getElementById('registerForm');
const passwordField = document.getElementById('password');
const confirmPasswordField = document.getElementById('confirmPassword');

form.addEventListener('submit', function (e) {
    
    e.preventDefault();

    
    const password = passwordField.value;
    const confirmPassword = confirmPasswordField.value;

    
    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }

    
    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return;
    }

   
    const formData = new FormData(form);  

    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    
    fetch('https://script.google.com/macros/s/AKfycbxdKnpsHrwglXNSrjIjF_rosCP5LZuxbwqU6GJxG5W9Gw8OSg_fLFO5NVXI8F3T1Q64bw/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(data)
    })
        .then(response => response.json()) 
        .then(responseData => {
            console.log(responseData); 
            alert('Form submitted successfully!');

            
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while submitting the form: ' + error.message);
        });
});
