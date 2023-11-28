'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.querySelector('#logOut');

    function logout() {
        try {
            console.log('Logout performed');

            // Clear session storage
            sessionStorage.clear();

            // Perform additional logout logic here, if needed

            // Redirect to the login page or any other desired action
            window.location.replace('../index.html');

        } catch (error) {
            console.error('Error during logout:', error);
        }
    }

    logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        logout();
    });

    function preventBack() {
        window.history.forward();
    }

    setTimeout(preventBack, 0);
});

window.addEventListener('beforeunload', function (e) {
    // Perform additional cleanup or confirmation if needed
    // e.returnValue = ''; // Uncomment this line if you want a confirmation message
});