
// Logout functionality
const logoutButton = document.getElementById('logoutButton');
if (logoutButton) {
    logoutButton.addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.removeItem('authHeader');
        window.location.href = 'login.html';
    });
}

// Booking page functionality
const timeSlots = document.querySelectorAll('.time-slot');
if (timeSlots.length > 0) {
    timeSlots.forEach(slot => {
        slot.addEventListener('click', function() {
            if (!this.classList.contains('booked')) {
                timeSlots.forEach(s => s.classList.remove('selected'));
                this.classList.add('selected');
            }
        });
    });

    const bookingForm = document.getElementById('bookingForm');
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const selectedSlot = document.querySelector('.time-slot.selected');
        if (!selectedSlot) {
            alert('Please select a time slot.');
            return;
        }
        // Here you would typically send the booking information to your server
        console.log('Booking submitted for slot:', selectedSlot.textContent);
        alert('Booking submitted successfully!');
    });
}

// Check authentication on page load
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage !== 'login.html') {
        // checkAuthentication();
    }
});



