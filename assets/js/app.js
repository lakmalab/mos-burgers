console.log("hey burgers")
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const validUsername = 'admin';
    const validPassword = '1234';

    if (username === validUsername && password === validPassword) {
        //alert('Login successful!');
       window.location.href = 'assets/html/order.html';

    } else {
        alert('Invalid username or password');
    }
});