'use strict'

const myInput = document.querySelector("#pwd");
const letter = document.querySelector("#letter");
const capital = document.querySelector("#capital");
const number = document.querySelector("#number");
const length = document.querySelector("#length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.querySelector("#message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.querySelector("#message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  let lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  let upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  let numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
  
  //inputForm.style.height = (message.clientHeight + 'px');
};
document.querySelector('#signupForm').addEventListener('submit', async function (event) {
  event.preventDefault(); // Prevent form submission by default

  const pwd = this.pwd.value;
  const pwd_2 = this.pwd_2.value;

  // If password not entered
  if (pwd === '')
    alert("Please enter Password");

  // If confirm password not entered
  else if (pwd_2 === '')
    alert("Please enter confirm password");

  // If Not same return False.
  else if (pwd !== pwd_2) {
    alert("\nPassword did not match: Please try again...")
    // Add your additional alert here if needed
  } else {
    // If same, proceed with form submission
    const email = this.email.value;
    const password = this.pwd.value;

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

      window.location.href = 'home.html';
    } catch (error) {
      console.error('Error sending data:', error);

      // Log a message before the redirection
      console.log('Redirecting to signup.html...');

      // Redirect to signup.html if there's an error (passwords don't match)
      window.location.href = 'signup.html';

      // Log a message after the redirection
      console.log('Redirection complete.');
    }
  }
});