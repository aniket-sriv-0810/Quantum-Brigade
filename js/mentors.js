




  // Function to render mentors dynamically
  function renderMentors() {
    const mentorGrid = document.getElementById('mentorGrid');
  
    mentors.forEach(mentor => {
      const mentorCard = document.createElement('div');
      mentorCard.classList.add('mentor-card');
  
      // Mentor Card content
      mentorCard.innerHTML = `
        <img src="${mentor.image}" alt="${mentor.name}">
        <h2>${mentor.name}</h2>
        <p>${mentor.title}</p>
        <p>${mentor.qualification}</p>
        <p> ${mentor.email}</p>
        <p>Specialization: ${mentor.specialization}
      `;
  
      mentorGrid.appendChild(mentorCard);
    });
  }
  
  // Call the render function when the page loads
  window.onload = renderMentors;
  