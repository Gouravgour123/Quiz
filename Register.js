// Attach an event listener to validate the form before submission
const form = document.getElementById('registerForm');
const passwordField = document.getElementById('password');
const confirmPasswordField = document.getElementById('confirmPassword');

form.addEventListener('submit', function (e) {
    // Prevent form submission
    e.preventDefault();

    // Retrieve values
    const password = passwordField.value;
    const confirmPassword = confirmPasswordField.value;

    // Validate password length
    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }

    // Validate password confirmation
    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return;
    }

    // If validation passes, send data to Google Apps Script
    const formData = new FormData(form);  // Get form data

    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Send data to Google Apps Script via POST request
    fetch('https://script.google.com/macros/s/AKfycbxdKnpsHrwglXNSrjIjF_rosCP5LZuxbwqU6GJxG5W9Gw8OSg_fLFO5NVXI8F3T1Q64bw/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(data)
    })
        .then(response => response.json()) // Ensure the response is parsed as JSON
        .then(responseData => {
            console.log(responseData); // Log the response to check its structure
            alert('Form submitted successfully!');

            // if (responseData.result === 'success') {
            //     alert('Form submitted successfully!');
            // } else {
            //     alert('Error: ' + responseData.error); // Display the error message from Apps Script
            // }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while submitting the form: ' + error.message);
        });
});
