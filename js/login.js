// login funcion
document.getElementById('login-submit').addEventListener('click', function(){
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value ;
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // adding condition/check email and password
    if(userEmail == 'bank@gmail.com' && userPassword == 'amrbank123'){
        window.location.href = 'banking.html';
    }
})