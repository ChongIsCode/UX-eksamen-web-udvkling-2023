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

      window.location.href = 'home.htm';
    } catch (error) {
      console.error('Error sending data:', error);

      // Log a message before the redirection
      console.log('Redirecting to signup.htm...');

      // Redirect to signup.htm if there's an error (passwords don't match)
      window.location.href = 'signup.htm';

      // Log a message after the redirection
      console.log('Redirection complete.');
    }
  }
});






















// function validatePasswords() {
//     const passwordInput = document.querySelector('#pwd_1');
//     const confirmPasswordInput = document.querySelector('#pwd_2');
//     const validationResult = document.querySelector('#validationResult');
  
//     // Get the entered passwords
//     const password = passwordInput.value;
//     const confirmPassword = confirmPasswordInput.value;
  
//     // Check if passwords match
//     if (password === confirmPassword) {
//       validationResult.innerHTML = '&#10004; Passwords match';
//       validationResult.className = 'valid';
//     } else {
//       validationResult.innerHTML = 'Passwords do not match';
//       validationResult.className = 'invalid';

//     }
//   }
  
// document.querySelector('#signupForm').addEventListener('submit', function(e){
//    e.preventDefault();
   
//    validatePasswords();
// });


// const myInput = document.querySelector("pwd");
// const letter = document.querySelector("letter");
// const capital = document.querySelector("capital");
// const number = document.querySelector("number");
// const length = document.querySelector("length");

// // When the user clicks on the password field, show the message box
// myInput.onfocus = function() {
//   document.getElementById("message").style.display = "block";
// }

// // When the user clicks outside of the password field, hide the message box
// myInput.onblur = function() {
//   document.getElementById("message").style.display = "none";
// }

// // When the user starts to type something inside the password field
// myInput.onkeyup = function() {
//   // Validate lowercase letters
//   let lowerCaseLetters = /[a-z]/g;
//   if(myInput.value.match(lowerCaseLetters)) {
//     letter.classList.remove("invalid");
//     letter.classList.add("valid");
//   } else {
//     letter.classList.remove("valid");
//     letter.classList.add("invalid");
// }

//   // Validate capital letters
//   var upperCaseLetters = /[A-Z]/g;
//   if(myInput.value.match(upperCaseLetters)) {
//     capital.classList.remove("invalid");
//     capital.classList.add("valid");
//   } else {
//     capital.classList.remove("valid");
//     capital.classList.add("invalid");
//   }

//   // Validate numbers
//   var numbers = /[0-9]/g;
//   if(myInput.value.match(numbers)) {
//     number.classList.remove("invalid");
//     number.classList.add("valid");
//   } else {
//     number.classList.remove("valid");
//     number.classList.add("invalid");
//   }

//   // Validate length
//   if(myInput.value.length >= 8) {
//     length.classList.remove("invalid");
//     length.classList.add("valid");
//   } else {
//     length.classList.remove("valid");
//     length.classList.add("invalid");
//   }
// }




// function validatePassword(){
//     const pwd = document.querySelector('#pwd');
//     const validationResult = document.querySelector('#validationResult');

//     const password = pwd.input.value;
//     const result = validatePasswordRules(password);

//     validationResult.textContent = result;
// }

// function validatePasswordRules(password){
//         // Minimum length requirement
//         const minLength = 8;
      
//         // Regular expressions for additional requirements
//         const hasUppercase = /[A-Z]/.test(password);
//         const hasLowercase = /[a-z]/.test(password);
//         const hasDigit = /\d/.test(password);
//         const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);
      
//         // Check if the password meets the minimum length requirement
//         if (password.length < minLength) {
//           return 'Password must be at least ' + minLength + ' characters long.';
//         }
      
//         // Check for additional requirements
//         if (!(hasUppercase && hasLowercase && hasDigit && hasSpecialChar)) {
//           return 'Password must include at least one uppercase letter, one lowercase letter, one digit, and one special character.';
//         }
      
//         // If all requirements are met, the password is valid
//         return 'Password is valid';
//       }
