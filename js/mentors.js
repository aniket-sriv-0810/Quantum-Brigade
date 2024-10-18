const mentors = [
    {
      name: "Dr. Birmohan Singh",
      title: "Professor",
      qualification: "Ph.D., M.E.",
      phone: "+91-1672-253208",
      email: "birmohansingh@sliet.ac.in, birmohans@gmail.com",
      specialization: "Medical Image Processing , Signal Processing, Machine Learning",
      image: "http://sliet.ac.in/wp-content/uploads/avatars/5/6fc17d6735998f4f22a0e91fbf43b75c-bpfull.jpg"
    },
    {
      name: "Dr. Damanpreet Singh",
      title: "Associate Professor",
      qualification: "Ph.D., M.Tech, B.Tech.",
      phone: "+91-1672-253210",
      email: "damanpreets@sliet.ac.in",
      specialization: "Machine Learning, Wireless Sensor Networks, Optimization Techniques, Cloud Computing",
      image: "http://sliet.ac.in/wp-content/uploads/avatars/4/65783e7db0473-bpfull.jpg"
    },
    {
      name: "Dr. Major Singh Goraya",
      title: "Professor",
      qualification: "Ph.D., M.Tech., B.Tech.",
      phone: "01672-253212",
      email: "mjrsingh@yahoo.com",
      specialization: "Green Computing, Cloud computing, Distributed Systems, IOT and Machine Learning",
      image: "http://sliet.ac.in/wp-content/uploads/avatars/35/5e69c6be20c7e-bpfull.jpg"
    },
    {
      name: "Dr. Manoj Sachan",
      title: "Professor",
      qualification: "B.Tech, M.E, Ph.D.",
      phone: "+91-1672-253214",
      email: "manojsachan@sliet.ac.in, manojsachan@gmail.com",
      specialization: "Data Mining, Machine Learning",
      image: "http://sliet.ac.in/wp-content/uploads/avatars/6/605c66bd3e3bc-bpfull.jpg"
    },
    {
      name: "Dr. Gurjinder Kaur",
      title: "Associate Professor",
      qualification: "B.E., M.S., Ph.D.",
      phone: "+91-1672-253326",
      email: "gurjinder13@yahoo.com",
      specialization: "Data Mining, Machine Learning",
      image: "http://sliet.ac.in/wp-content/uploads/avatars/14/5f2245e7a7f1bde5dee5bda48e09d411-bpfull.jpg"
    },
    {
      name: "Dr. Amar Nath",
      title: "Associate Professor",
      qualification: "Ph.D. in CSE from IIT Roorkee",
      phone: "01672-253610",
      email: "amarnath@sliet.ac.in",
      specialization: "Artificial Intelligence, Distributed Algorithms,  Internet of Robotics Things (IoRT),  Formal Verification, Multi-UAVs, Precision Agriculture",
      image: "http://sliet.ac.in/wp-content/uploads/avatars/467/66b8bb350cc46-bpfull.jpg"
    },
    {
      name: "Dr. Jagdeep Singh",
      title: "Assistant Professor",
      qualification: "Ph.D., M.Tech, B.Tech",
      phone: "01672-253320",
      email: "jagdeep@sliet.ac.in; jagdeepknit@gmail.com",
      specialization: "Artificial Intelligence, Cyber Security, Wireless Networks, Internet of Things",
      image: "http://sliet.ac.in/wp-content/uploads/avatars/466/66f81ca30f4ff-bpfull.jpg"
    },
    {
      name: "Dr. Manminder Singh",
      title: "Associate Professor",
      qualification: "B.Tech, M.Tech, Ph.D.",
      phone: "+91-01672-253328",
      email: "manminderldh@gmail.com, manmindersingh@sliet.ac.in",
      specialization: "Digital Image Processing, Pattern Recognition, Biometrics, Artificial Intelligence , Machine Learning",
      image: "http://sliet.ac.in/wp-content/uploads/avatars/16/66693282b6269-bpfull.jpg"
    },
    {
      name: "Dr. Preetpal Kaur Buttar",
      title: "Assistant Professor",
      qualification: "Ph.D. (CSE)",
      phone: "01672-253614",
      email: "preetpal@sliet.ac.in",
      specialization: "Image Processing, Remote Sensing, Pattern Recognition, Deep Learning, Natural Language Processing",
      image: "http://sliet.ac.in/wp-content/uploads/avatars/349/632d98c75d80f-bpfull.jpg"
    },
    {
      name: "Dr. Tajinder Singh",
      title: "Assistant Professor",
      qualification: "Ph.D. in Machine Learning",
      phone: "91-6283963279",
      email: "tajindersingh@sliet.ac.in",
      specialization: "Artificial Intelligence, Machine Learning, Text Analytics,  Online Social Text Stream Analysis , E-Commerce",
      image: "http://sliet.ac.in/wp-content/uploads/avatars/468/64e3532d30fac-bpfull.jpg"
    },
    {
      name: "Dr. Utkarsh",
      title: "Assistant Professor",
      qualification: "Ph.D. in CSE",
      phone: "+91-1672-253218",
      email: "vinod5881@gmail.com",
      specialization: "Data Mining, Machine Learning",
      image: "http://sliet.ac.in/wp-content/uploads/avatars/493/6165aace595a1-bpfull.jpg"
    },
    {
      name: "Dr. VINOD KUMAR VERMA",
      title: "Assistant Professor",
      qualification: "Ph.D. (CSE)",
      phone: "+91-1672-253218",
      email: "vinod5881@gmail.com",
      specialization: "Internet of Things,  Trust and Reputation Systems, Wireless Sensor Networks, Artificial Intelligence, Smart Cities, Digital Transparency and Open Data, Machine Learning, Cloud Computing, Software Systems, Image Processing",
      image: "http://sliet.ac.in/wp-content/uploads/avatars/17/28b95ba0ed455dca378c1ada58307bf6-bpfull.jpg"
    },
    {
      name: "Jaspal Singh",
      title: "Assistant Professor",
      qualification: "M.E., Ph.D. (Pursuing)",
      phone: "01672-253327",
      email: "safrisoft@yahoo.com, jaspalsingh@sliet.ac.in",
      specialization: "Computer Networks , Web Engineering",
      image: "http://sliet.ac.in/wp-content/uploads/avatars/36/e0a878e8162fd75cb5eb6929d98df5c1-bpfull.jpg"
    },
    {
      name: "Rahul Gautam",
      title: "Assistant Professor",
      qualification: "Ph.D. pursuing, M.Tech",
      phone: "+91-1672-253612",
      email: "rahulgautam@sliet.ac.in",
      specialization: "Image Processing, Computer Vision Machine Learning, Deep Learning",
      image: "http://sliet.ac.in/wp-content/uploads/avatars/350/666bf221c60a0-bpfull.jpg"
    },
    {
      name: "Dr. Jatinder Pal Singh",
      title: "Assistant Professor",
      qualification: "B.Tech, M.Tech, Ph.D.",
      phone: "01672-253614",
      email: "sachdeva.jp@gmail.com, jatinderpalsingh@sliet.ac.in",
      specialization: "Wireless Sensor Networks and Computer Network Security",
      image: "http://sliet.ac.in/wp-content/uploads/avatars/344/64edd5a68d11b-bpfull.jpg"
    },
    {
      name: "Sukhpreet Singh",
      title: "Assistant Professor",
      qualification: "B.Tech, M.Tech, Ph.D. (Pursuing)",
      email: "sukhpreet.manshahia@gmail.com",
      specialization: "Data Mining, Machine Learning",
      image: "http://sliet.ac.in/wp-content/uploads/avatars/353/60544f9339252-bpfull.jpg"
    },
    {
      name: "Sunita Rani",
      title: "Guest/Part-Time Teachers",
      qualification: "Ph.D. (Pursuing), M.Tech, B.Tech",
      phone: "8196013222",
      email: "sunitarani@sliet.ac.in",
      specialization: "Deep Learning,Image Processing,Image Retrieval",
      image: "http://sliet.ac.in/wp-content/uploads/avatars/516/64ed97380a462-bpfull.jpg"
    },
    {
    name: "Dr. Vikash Kumar Garg",
    title: "Guest/Part-Time Teachers",
    qualification: "Ph.D (Big Data, Hadoop, MongoDB), M.Tech, B.Tech",
    phone: "9988610629",
    email: "contactvikashgarg@gmail.com",
    specialization: "Big Data, Hadoop, Hive, Pig, MongoDB",
    image: "http://sliet.ac.in/wp-content/uploads/avatars/457/605b0275612df-bpfull.jpg"

    }
  ];
  
  
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
  