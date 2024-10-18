document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get values from form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Save name and email to localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);

    // Redirect to home page
    window.location.href = '/pages/home.html';
});