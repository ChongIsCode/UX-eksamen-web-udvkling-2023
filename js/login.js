'use strict'

const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#pwd')
const form = document.querySelector('form');
const submit = document.querySelector('#submitEmail');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log(form);
    
    const email = emailInput.value;
    const password = passwordInput.value;

    // Ensure the email is not empty before proceeding
    if (!email) {
        console.error('email cannot be empty');
        return;
    }

    // Update the sessionStorage
    sessionStorage.setItem('email', email);    

    try {
        const response = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Data sent successfully:', data);

        // Redirect to home.html after successful submission
        window.location.href = 'home.html';
    } catch (error) {
        console.error('Error sending data:', error);
    }
});