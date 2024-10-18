const mentors = [
    {
        name: "Dr. John Doe",
        expertise: "Machine Learning, AI",
        availableSlots: [
            { time: "9:00 AM - 10:00 AM", isBooked: false },
            { time: "11:00 AM - 12:00 PM", isBooked: false }
        ]
    },
    {
        name: "Dr. Jane Smith",
        expertise: "Data Science, Big Data",
        availableSlots: [
            { time: "10:00 AM - 11:00 AM", isBooked: false },
            { time: "1:00 PM - 2:00 PM", isBooked: false }
        ]
    }
];
function renderMentorProfiles() {
    const mentorGrid = document.getElementById("mentor-grid");

    mentors.forEach(mentor => {
        const mentorCard = document.createElement("div");
        mentorCard.classList.add("mentor-card");

        mentorCard.innerHTML = `
            <img src="profile-placeholder.jpg" alt="${mentor.name}" class="mentor-img">
            <div class="mentor-info">
                <h3>${mentor.name}</h3>
                <p>Expertise: ${mentor.expertise}</p>
                <p>Available Slots:</p>
                <div class="slot-container">
                    ${mentor.availableSlots.map(slot => `
                        <button class="timeslot ${slot.isBooked ? 'booked-slot' : 'available-slot'}" 
                                ${slot.isBooked ? 'disabled' : ''} 
                                data-mentor="${mentor.name}" 
                                data-time="${slot.time}">
                            ${slot.time}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
        mentorGrid.appendChild(mentorCard);
    });
}

document.addEventListener("DOMContentLoaded", renderMentorProfiles);
function handleBooking(event) {
    const button = event.target;
    const mentorName = button.getAttribute("data-mentor");
    const timeSlot = button.getAttribute("data-time");

    mentors.forEach(mentor => {
        if (mentor.name === mentorName) {
            mentor.availableSlots.forEach(slot => {
                if (slot.time === timeSlot && !slot.isBooked) {
                    slot.isBooked = true;
                    button.classList.remove('available-slot');
                    button.classList.add('booked-slot');
                    button.disabled = true;

                    // Store updated data in local storage
                    localStorage.setItem("mentors", JSON.stringify(mentors));

                    // Show booking confirmation
                    alert(`You have successfully booked a session with ${mentorName} at ${timeSlot}.`);
                }
            });
        }
    });
}

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("available-slot")) {
        handleBooking(event);
    }
});

// Load data from local storage if it exists
window.onload = function() {
    const storedMentors = JSON.parse(localStorage.getItem("mentors"));
    if (storedMentors) {
        mentors.splice(0, mentors.length, ...storedMentors); // Replace with stored data
        renderMentorProfiles();
    }
};
function sendMessage() {
    const chatInput = document.getElementById("chat-input");
    const message = chatInput.value.trim();
    if (message === "") return;

    const chatBox = document.querySelector(".chat-box");
    const messageElement = document.createElement("div");
    messageElement.classList.add("chat-message", "student");

    const timestamp = new Date().toLocaleTimeString();
    messageElement.innerHTML = `
        <p>${message}</p>
        <span class="chat-time">${timestamp}</span>
    `;
    
    chatBox.appendChild(messageElement);
    chatInput.value = "";

    // Auto-scroll chat to bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}

document.getElementById("send-btn").addEventListener("click", sendMessage);
document.getElementById("chat-input").addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
});
function sendReminder() {
    mentors.forEach(mentor => {
        mentor.availableSlots.forEach(slot => {
            if (slot.isBooked) {
                // Send reminder
                alert(`Reminder: You have a session booked with ${mentor.name} at ${slot.time}.`);
            }
        });
    });
}

// Set an interval to send reminders every 10 seconds (for demo purposes)
setInterval(sendReminder, 10000);
