const mentors = [
    {
      name: "Dr. Birmohan Singh",
      title: "Professor",
      qualification: "Ph.D., M.E.",
      phone: "+91-1672-253208",
      email: "birmohansingh@sliet.ac.in, birmohans@gmail.com",
      specialization: "Medical Image Processing , Signal Processing, Machine Learning",
      image: "../images/teacher images/1.jpg",
      timeSlot: ["a", "b", "c"]
    },
    {
      name: "Dr. Damanpreet Singh",
      title: "Associate Professor",
      qualification: "Ph.D., M.Tech, B.Tech.",
      phone: "+91-1672-253210",
      email: "damanpreets@sliet.ac.in",
      specialization: "Machine Learning, Wireless Sensor Networks, Optimization Techniques, Cloud Computing",
      image: "../images/teacher images/2.jpg",
      timeSlot: ["b", "c", "d"]
    },
    {
      name: "Dr. Major Singh Goraya",
      title: "Professor",
      qualification: "Ph.D., M.Tech., B.Tech.",
      phone: "01672-253212",
      email: "mjrsingh@yahoo.com",
      specialization: "Green Computing, Cloud computing, Distributed Systems, IOT and Machine Learning",
      image: "../images/teacher images/3.jpg",
      timeSlot: ["c", "d", "e"]
    },
    {
      name: "Dr. Manoj Sachan",
      title: "Professor",
      qualification: "B.Tech, M.E, Ph.D.",
      phone: "+91-1672-253214",
      email: "manojsachan@sliet.ac.in, manojsachan@gmail.com",
      specialization: "Data Mining, Machine Learning",
      image: "../images/teacher images/4.jpg",
      timeSlot: ["d", "e", "f"]
    },
    {
      name: "Dr. Gurjinder Kaur",
      title: "Associate Professor",
      qualification: "B.E., M.S., Ph.D.",
      phone: "+91-1672-253326",
      email: "gurjinder13@yahoo.com",
      specialization: "Data Mining, Machine Learning",
      image: "../images/teacher images/5.jpg",
      timeSlot: ["a", "b", "d"]
    },
    {
      name: "Dr. Amar Nath",
      title: "Associate Professor",
      qualification: "Ph.D. in CSE from IIT Roorkee",
      phone: "01672-253610",
      email: "amarnath@sliet.ac.in",
      specialization: "Artificial Intelligence, Distributed Algorithms,  Internet of Robotics Things (IoRT),  Formal Verification, Multi-UAVs, Precision Agriculture",
      image: "../images/teacher images/6.jpg",
      timeSlot: ["b", "c", "f"]
    },
    {
      name: "Dr. Jagdeep Singh",
      title: "Assistant Professor",
      qualification: "Ph.D., M.Tech, B.Tech",
      phone: "01672-253320",
      email: "jagdeep@sliet.ac.in; jagdeepknit@gmail.com",
      specialization: "Artificial Intelligence, Cyber Security, Wireless Networks, Internet of Things",
      image: "../images/teacher images/7.jpg",
      timeSlot: ["a", "c", "e"]
    },
    {
      name: "Dr. Manminder Singh",
      title: "Associate Professor",
      qualification: "B.Tech, M.Tech, Ph.D.",
      phone: "+91-01672-253328",
      email: "manminderldh@gmail.com, manmindersingh@sliet.ac.in",
      specialization: "Digital Image Processing, Pattern Recognition, Biometrics, Artificial Intelligence , Machine Learning",
      image: "../images/teacher images/8.jpg",
      timeSlot: ["b", "d", "e"]
    },
    {
      name: "Dr. Preetpal Kaur Buttar",
      title: "Assistant Professor",
      qualification: "Ph.D. (CSE)",
      phone: "01672-253614",
      email: "preetpal@sliet.ac.in",
      specialization: "Image Processing, Remote Sensing, Pattern Recognition, Deep Learning, Natural Language Processing",
      image: "../images/teacher images/9.jpg",
      timeSlot: ["c", "e", "f"]
    },
    {
      name: "Dr. Tajinder Singh",
      title: "Assistant Professor",
      qualification: "Ph.D. in Machine Learning",
      phone: "91-6283963279",
      email: "tajindersingh@sliet.ac.in",
      specialization: "Artificial Intelligence, Machine Learning, Text Analytics,  Online Social Text Stream Analysis , E-Commerce",
      image: "../images/teacher images/9.jpg",
      timeSlot: ["a", "b", "c"]
    },
    {
      name: "Dr. Utkarsh",
      title: "Assistant Professor",
      qualification: "Ph.D. in CSE",
      phone: "+91-1672-253218",
      email: "vinod5881@gmail.com",
      specialization: "Data Mining, Machine Learning",
      image: "../images/teacher images/10.jpg",
      timeSlot: ["d", "e", "f"]
    },
    {
      name: "Dr. VINOD KUMAR VERMA",
      title: "Assistant Professor",
      qualification: "Ph.D. (CSE)",
      phone: "+91-1672-253218",
      email: "vinod5881@gmail.com",
      specialization: "Internet of Things,  Trust and Reputation Systems, Wireless Sensor Networks, Artificial Intelligence, Smart Cities, Digital Transparency and Open Data, Machine Learning, Cloud Computing, Software Systems, Image Processing",
      image: "http://sliet.ac.in/wp-content/uploads/avatars/17/28b95ba0ed455dca378c1ada58307bf6-bpfull.jpg",
      timeSlot: ["a", "d", "f"]
    },
    {
      name: "Jaspal Singh",
      title: "Assistant Professor",
      qualification: "M.E., Ph.D. (Pursuing)",
      phone: "01672-253327",
      email: "safrisoft@yahoo.com, jaspalsingh@sliet.ac.in",
      specialization: "Computer Networks , Web Engineering",
      image: "http://sliet.ac.in/wp-content/uploads/avatars/36/e0a878e8162fd75cb5eb6929d98df5c1-bpfull.jpg",
      timeSlot: ["b", "c", "e"]
    },
    {
      name: "Rahul Gautam",
      title: "Assistant Professor",
      qualification: "Ph.D. pursuing, M.Tech",
      phone: "+91-1672-253612",
      email: "rahulgautam@sliet.ac.in",
      specialization: "Image Processing, Computer Vision Machine Learning, Deep Learning",
      image: "http://sliet.ac.in/wp-content/uploads/avatars/350/666bf221c60a0-bpfull.jpg",
      timeSlot: ["c", "e", "f"]
    },
    {
      name: "Dr. Jatinder Pal Singh",
      title: "Assistant Professor",
      qualification: "B.Tech, M.Tech, Ph.D.",
      phone: "01672-253614",
      email: "sachdeva.jp@gmail.com, jatinderpalsingh@sliet.ac.in",
      specialization: "Wireless Sensor Networks and Computer Network Security",
      image: "http://sliet.ac.in/wp-content/uploads/avatars/344/64edd5a68d11b-bpfull.jpg",
      timeSlot: ["a", "b", "f"]
    },
    {
      name: "Sukhpreet Singh",
      title: "Assistant Professor",
      qualification: "B.Tech, M.Tech, Ph.D. (Pursuing)",
      email: "sukhpreet.manshahia@gmail.com",
      specialization: "Data Mining, Machine Learning",
      image: "http://sliet.ac.in/wp-content/uploads/avatars/353/60544f9339252-bpfull.jpg",
      timeSlot: ["a", "d", "e"]
    },
    {
      name: "Sunita Rani",
      title: "Guest/Part-Time Teachers",
      qualification: "Ph.D. (Pursuing), M.Tech, B.Tech",
      phone: "8196013222",
      email: "sunitarani@sliet.ac.in",
      specialization: "Deep Learning, Image Processing, Image Retrieval",
      image: "http://sliet.ac.in/wp-content/uploads/avatars/516/64ed97380a462-bpfull.jpg",
      timeSlot: ["b", "c", "d"]
    },
    {
      name: "Dr. Vikash Kumar Garg",
      title: "Guest/Part-Time Teachers",
      qualification: "Ph.D (Big Data, Hadoop, MongoDB), M.Tech, B.Tech",
      phone: "9988610629",
      email: "contactvikashgarg@gmail.com",
      specialization: "Big Data, Hadoop, Hive, Pig, MongoDB",
      image: "http://sliet.ac.in/wp-content/uploads/avatars/457/605b0275612df-bpfull.jpg",
      timeSlot: ["d", "e", "f"]
    }
  ];