export const personalData = {
  name: "Prashant Kumar Singh",
  title: "Full-Stack Engineer & MERN Specialist",
  tagline: "Building High-Performance Web & Mobile Solutions",
  bio: "Full-Stack Developer with hands-on experience in architecting and delivering scalable, secure web and mobile applications. Proficient in the MERN stack (MongoDB, Express.js, React.js, Node.js) and React Native with deep expertise in RESTful API engineering, JWT/OTP authentication, AWS S3 cloud workflows, and Razorpay payment integrations.",
  location: "Amethi, Lucknow Uttar Pradesh, India",
  email: "prashantsingh2640@gmail.com",
  phones: ["+91 9506536127", "+91 9616964306"],
  whatsapp: "919506536127",
  linkedin: "https://www.linkedin.com/in/prashant-singh-436972240",
  github: "https://github.com/Prashant950?tab=repositories",
  experienceYears: "2+",
  openToWork: true,
  status: "Available for Full-Time Roles & High-Impact Projects",
  metrics: [
    { label: "Years of Experience", value: "2+", icon: "Briefcase" },
    { label: "Production & Client Projects", value: "8+", icon: "FolderGit2" },
    { label: "GitHub Repositories", value: "15+", icon: "GitBranch" },
    { label: "API & Uptime Reliability", value: "99.9%", icon: "Zap" },
  ]
};

export const workExperience = [
  {
    id: "aiviqone",
    role: "Full Stack Engineer",
    company: "AIVIQONE Technologies Pvt. Ltd.",
    location: "Delhi, India (Remote)",
    period: "Aug 2026 – Present",
    type: "Full-time • Remote",
    isCurrent: true,
    accent: "from-cyan-500 to-blue-600",
    description: "Leading cloud-native full-stack architecture and real-time microservices for high-throughput distributed platforms in a remote engineering environment.",
    highlights: [
      "Architected scalable React.js & Node.js web applications with sub-100ms API response times.",
      "Engineered real-time data streaming layers, WebSocket notifications, and role-based access control (RBAC).",
      "Integrated AWS S3 secure presigned uploads and automated CI/CD pipelines ensuring 99.9% uptime."
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "AWS S3", "WebSockets", "Docker", "Git"]
  },
  {
    id: "snow-fountain",
    role: "MERN Stack Developer",
    company: "Snow Fountain Consultants Pvt. Ltd.",
    location: "Lucknow (U.P) • On-site",
    period: "Sep 2025 – Sep 2026",
    type: "Full-time • On-site",
    isCurrent: false,
    accent: "from-blue-600 to-cyan-500",
    description: "Built high-performance enterprise web systems, scalable REST APIs, and dynamic dashboard interfaces for production client platforms.",
    highlights: [
      "Engineered modular MERN microservices and optimized indexed MongoDB database queries.",
      "Integrated Razorpay payment gateway API with automated webhooks and invoice generation.",
      "Implemented JWT & OTP authentication workflows, reducing client-side render overhead by 35%."
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Razorpay API", "JWT Auth", "Postman", "Git"]
  },
  {
    id: "pin-point",
    role: "Full Stack Developer",
    company: "Pin Point Engineers",
    location: "India • On-site",
    period: "Jan 2024 – Aug 2025",
    type: "Full-time • On-site",
    isCurrent: false,
    accent: "from-indigo-600 to-blue-500",
    description: "Developed enterprise client portals, real-time management dashboards, and responsive frontends with streamlined backend endpoints.",
    highlights: [
      "Built multi-tenant CRUD web applications with secure backend routes and data integrity.",
      "Optimized database queries and API response times by 35% across high-traffic routes.",
      "Developed reusable React UI component libraries to standardize cross-platform UX."
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "REST APIs", "Git"]
  },
  {
    id: "techpath",
    role: "Full Stack Developer Intern",
    company: "TechPath Research & Development Pvt. Ltd.",
    location: "Varanasi (U.P) • On-site",
    period: "July 2023 – January 2024",
    type: "Internship • On-site",
    isCurrent: false,
    accent: "from-sky-500 to-cyan-600",
    description: "Crafted interactive, pixel-perfect user interfaces and integrated dynamic backend endpoints during intensive on-site development.",
    highlights: [
      "Developed responsive web interfaces with HTML5, CSS3, JavaScript, and Bootstrap 5.",
      "Tested and debugged REST API endpoints using Postman for dynamic JSON feeds.",
      "Maintained version control workflows on GitHub and participated in agile sprint cycles."
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "REST APIs", "GitHub"]
  }
];

export const projects = [
  {
    id: "aiviqone-crm",
    title: "AIVIQONE Sales CRM & Intelligence",
    subtitle: "Modern AI-Driven Lead & Pipeline Command Center",
    category: "Full Stack",
    badge: "Enterprise SaaS",
    featured: true,
    image: "/projects/aiviqone.png",
    description: "An AI-powered omnichannel sales CRM unifying leads, WhatsApp chats, pipeline stages, automated follow-ups, and real-time deal analytics.",
    features: [
      "Unified multichannel lead capture and real-time WhatsApp sync.",
      "AI Copilot for automated lead qualification and smart follow-up suggestions.",
      "Real-time deal pipeline with Kanban drag-and-drop workflow.",
      "Enterprise SOC-2 compliant security and role-based access control (RBAC)."
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "AI Copilot", "WhatsApp API", "WebSockets"],
    githubUrl: "https://github.com/Prashant950?tab=repositories",
    liveUrl: "https://aiviqone.com/",
    stats: { pipeline: "Omnichannel CRM", sync: "WhatsApp Live", security: "RBAC & SOC-2" }
  },
  {
    id: "godrive-self-drive",
    title: "GoDrive Self Drive Car Rental",
    subtitle: "Premium Luxury SUVs & Sedans on Demand",
    category: "Full Stack",
    badge: "Fintech & Mobility",
    featured: true,
    image: "/projects/godrive.png",
    description: "Modern self-drive car reservation platform facilitating bookings in 60 seconds with ₹500 advance token, doorstep delivery, and 24x7 roadside assistance.",
    features: [
      "Instant vehicle reservation with ₹500 advance token integration.",
      "Dynamic fleet catalog featuring luxury SUVs, 7-seaters, and sedans.",
      "Automated document KYC verification (Driving License & Aadhaar).",
      "24x7 roadside assistance tracking and doorstep delivery scheduler."
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Razorpay Payment", "Tailwind CSS"],
    githubUrl: "https://github.com/Prashant950?tab=repositories",
    liveUrl: "https://www.godriveselfdrive.com/",
    stats: { booking: "60-Sec Reserve", token: "₹500 Advance", delivery: "Free Doorstep" }
  },
  {
    id: "sathi-meet-app",
    title: "Sathi Meet Dating & Companion Hub",
    subtitle: "100% ID-Verified Social & Dating Platform",
    category: "Full Stack",
    badge: "Social & Dating",
    featured: true,
    image: "/projects/sathimeet.png",
    description: "India's premier verified social dating platform with 100% selfie verification, safe public meetups, instant matching algorithms, and real-time chat.",
    features: [
      "100% ID & selfie verification workflow to eliminate fake profiles.",
      "Smart compatibility matching based on interests, music, and lifestyle.",
      "Interactive chat system and instant companion meetup scheduling.",
      "Privacy-first architecture with end-to-end user consent protections."
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT & OTP", "Socket.io", "Cloudinary"],
    githubUrl: "https://github.com/Prashant950?tab=repositories",
    liveUrl: "https://sathimeet.com/",
    stats: { verification: "100% ID Verified", matching: "Smart Algorithm", safety: "Consent-First" }
  },
  {
    id: "lovely-gas-service",
    title: "Lovely Gas & Appliance Service Portal",
    subtitle: "AC Installation, Repair & Home Service Platform",
    category: "Web Apps",
    badge: "Featured Service App",
    featured: true,
    image: "/projects/lovely-gas.png",
    description: "Complete home appliance repair and AC servicing platform providing direct technician bookings, spare parts catalog, and instant WhatsApp inquiry.",
    features: [
      "Service booking engine with instant technician dispatch in Greater Noida West.",
      "Real-time WhatsApp support widget and transparent price estimation.",
      "Dynamic multi-category service directory for AC, Gas, and Home Appliances.",
      "Mobile-first responsive interface with lightning fast load performance."
    ],
    techStack: ["React.js", "Node.js", "Tailwind CSS", "Express.js", "MongoDB", "WhatsApp API"],
    githubUrl: "https://github.com/Prashant950?tab=repositories",
    liveUrl: "https://lovely-gas-company.vercel.app/",
    stats: { service: "Same-Day Dispatch", support: "WhatsApp Live", performance: "Fast Response" }
  },
  {
    id: "fittrack-smartwatch",
    title: "FitTrack Smartwatch & Fitness Portal",
    subtitle: "Smart Fitness & Wearable Device Showcase",
    category: "Web Apps",
    badge: "E-Commerce & IoT",
    featured: true,
    image: "/projects/fittrack.png",
    description: "Modern interactive landing and product showcase platform for FitTrack Smartwatch with real-time workout tracking, metrics display, and dynamic checkout.",
    features: [
      "Interactive 3D layer visualization and hardware feature showcase.",
      "Real-time workout, heart rate, sleep, and GPS tracking dashboard previews.",
      "Seamless product checkout workflow and interactive feature comparison.",
      "Modern dark-mode aesthetic with fluid micro-interactions and animations."
    ],
    techStack: ["React.js", "Tailwind CSS", "Framer Motion", "JavaScript (ES6+)", "Vercel Deploy"],
    githubUrl: "https://github.com/Prashant950?tab=repositories",
    liveUrl: "https://fittrack-ten-snowy.vercel.app/",
    stats: { tracking: "Real-time Metrics", performance: "60 FPS UI", responsiveness: "100% Mobile Ready" }
  }
];

export const skillsData = {
  frontend: [
    { name: "React.js", level: 92, icon: "Code2", tag: "Advanced" },
    { name: "React Native (Expo)", level: 85, icon: "Smartphone", tag: "Mobile" },
    { name: "JavaScript (ES6+)", level: 90, icon: "FileCode", tag: "Core" },
    { name: "HTML5 / CSS3", level: 95, icon: "Layout", tag: "Core" },
    { name: "Bootstrap 5 / Tailwind", level: 90, icon: "Palette", tag: "Styling" },
    { name: "jQuery / DOM Manipulation", level: 82, icon: "Cpu", tag: "Libraries" },
  ],
  backend: [
    { name: "Node.js", level: 88, icon: "Server", tag: "Runtime" },
    { name: "Express.js", level: 90, icon: "Layers", tag: "Framework" },
    { name: "RESTful API Architecture", level: 92, icon: "Network", tag: "Architecture" },
    { name: "JWT & OTP Authentication", level: 90, icon: "ShieldCheck", tag: "Security" },
    { name: "Python / Flask", level: 75, icon: "Terminal", tag: "Backend" },
  ],
  databases: [
    { name: "MongoDB & Mongoose", level: 88, icon: "Database", tag: "NoSQL" },
    { name: "PostgreSQL", level: 78, icon: "HardDrive", tag: "SQL" },
    { name: "Database Indexing & Queries", level: 82, icon: "Search", tag: "Optimization" },
  ],
  cloudAndTools: [
    { name: "AWS S3 Cloud Storage", level: 85, icon: "Cloud", tag: "Cloud" },
    { name: "Razorpay Payment Gateway", level: 88, icon: "CreditCard", tag: "Fintech" },
    { name: "Git & GitHub", level: 92, icon: "GitBranch", tag: "VCS" },
    { name: "Postman API Testing", level: 90, icon: "Send", tag: "Testing" },
    { name: "Agile & CI/CD Workflows", level: 84, icon: "RefreshCw", tag: "Process" },
  ],
  softSkills: [
    "Problem-Solving & Logical Reasoning",
    "Rapid Debugging & Troubleshooting",
    "Agile Adaptability & Continuous Learning",
    "Time Management & Milestone Delivery",
    "Cross-Functional Team Collaboration"
  ]
};

export const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
    institution: "Rameshwaram Institute of Technology and Management",
    location: "Lucknow, Uttar Pradesh",
    period: "July 2019 – July 2023",
    score: "CGPA: 7.1",
    scoreType: "CGPA",
    badge: "Graduated with Distinction",
    description: "Core coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, Software Engineering, Web Technologies."
  },
  {
    degree: "Intermediate (Class XII - Science Stream)",
    institution: "S.P.N. Inter College",
    location: "Tiloi, Amethi, Uttar Pradesh",
    period: "2018 – 2019",
    score: "Percentage: 61%",
    scoreType: "Intermediate",
    description: "Physics, Chemistry, Mathematics, English, Hindi."
  },
  {
    degree: "High School (Class X)",
    institution: "S.P.N. Inter College",
    location: "Tiloi, Amethi, Uttar Pradesh",
    period: "2017 – 2018",
    score: "CGPA: 7.2",
    scoreType: "High School",
    description: "Mathematics, Science, Social Sciences, Computer Basics, English, Hindi."
  }
];

export const certificationsData = [
  {
    id: "edureka-web-dev",
    title: "Certified Web Developer",
    issuer: "Edureka",
    date: "Issued & Verified",
    badge: "Verified Credential",
    status: "completed",
    credentialUrl: "https://www.edureka.co/certificates/mycertificate/b6ada4f1c40ac99859cd1cb6a0a406a1",
    highlights: [
      "Mastered full-stack web development across HTML5, CSS3, modern JavaScript (ES6+), React.js, and backend integration.",
      "Gained hands-on practical experience in deploying and managing data using Amazon Simple Storage Service (AWS S3) for high scalability and secure cloud storage."
    ],
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "AWS S3 Cloud", "REST APIs"]
  },
  {
    id: "aws-udemy",
    title: "AWS Cloud Practitioner & Solutions Architecture",
    issuer: "Udemy",
    date: "Pursuing • Currently Ongoing",
    badge: "In Progress",
    status: "ongoing",
    credentialUrl: null,
    highlights: [
      "Actively mastering AWS Core Cloud Infrastructure (EC2 Instances, S3 Buckets, IAM Policies, VPC Networking, RDS Databases, Lambda Serverless).",
      "Designing highly scalable, fault-tolerant, and secure cloud microservices architectures with automated deployment pipelines."
    ],
    skills: ["AWS EC2", "AWS S3", "IAM Security", "AWS Lambda", "VPC Networking", "Cloud Architecture"]
  }
];

