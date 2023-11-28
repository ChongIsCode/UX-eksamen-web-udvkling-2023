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

        // Redirect to home.htm after successful submission
        window.location.href = 'home.htm';
    } catch (error) {
        console.error('Error sending data:', error);
    }
});
// function checkPassword(form) {
//     password_1 = form.password_1.value;
//     password_2 = form.password_2.value;

//     // If password not entered
//     if (password_1 == ''){
//         alert("Please enter password")
//     } 
//     // If confirm password not entered
//     else if (password_2 == ''){
//         alert("Please enter confirm password")
//     }
//     // If Not same return false
//     else if(password_1 != password_2){
//         alert ("\nPassword did not match: Please try again...") 
//             return false;
//     }
//     // If same return True. 
//     else{ 
//         alert("Password Match: Welcome to ....") 
//         return true; 
//     } 
// }

// Function to check whether both passwords match or not.



// Other parts of your code
// const name = sessionStorage.getItem('name');
// const h1 = document.querySelector('#title');

// name ? (h1.textContent = `Welcome ${name}`) : (h1.textContent = 'So sad, nobody to welcome');




// window.addEventListener('popstate', function (event){
//     if(window.location.href ==='index.html'){
//         sessionStorage.removeItem('name');
//     }
// });
// const nameInput = document.querySelector('#name');
// // const pwdInput = document.querySelector('#pwd');
// const form = document.querySelector('form');
// const submit = document.querySelector('#submitName');
// // const remove = document.querySelector('#removeName');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//     sessionStorage.setItem('name', nameInput.value);
// //   sessionStorage.setItem('pwd', pwdInput.value);

// window.location.href = ("home.htm")
// });

// // remove.addEventListener('click', (e) =>{
// //   sessionStorage.removeItem('name', nameInput.value);
// //    sessionStorage.removeItem('pwd');
// // });

// const name = sessionStorage.getItem('name');

// fetch ('http://localhost:3000/users', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({name}),
// })
//     .then(respone => respone.json())
//     .then(data => {
//     })
//     .catch (error =>{
//         console.error('Error sending data:', error);
//     });





// const h1 = document.querySelector('#title');


// if(name) {
//     h1.textContent = `Welcome ${name}`;
// } else{
//     h1.textContent = `Try again`;
// };

// name ? h1.textContent = `Welcome ${name}` : h1.textContent = 'So sad nobody to welcome';

// name ? h1.textContent = `Welcome ${name}` : h1.textContent = 'So sad nobody to welcome';