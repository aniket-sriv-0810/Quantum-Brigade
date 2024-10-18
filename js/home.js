// Get name from localStorage
const Username = localStorage.getItem('name');

// Display welcome message
if (Username) {
    document.getElementById('welcomeMessage').textContent = `Hello, ${Username}!`;
} else {
    document.getElementById('welcomeMessage').textContent = 'Hello, Guest!';
}