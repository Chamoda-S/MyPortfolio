// Portfolio Configuration
// Edit this file to update your portfolio details throughout the site

export const portfolioConfig = {
  // Personal Info
  personal: {
    name: 'Chamoda Suraweera',
    logo: 'CS', // Replace with your initials or logo text
    tagline: 'Computer Science student passionate about design, technology, and crafting meaningful digital experiences.',
    description: 'I\'m a Computer Science undergraduate with a passion for blending design and technology.',
    bio: 'Currently working as an Intern Project Manager, I bring technical understanding combined with design sensibility. I believe great products are built at the intersection of technical excellence and thoughtful design.',
  },

  // Contact Information
  contact: {
    email: 'chamoda.suraweera@gmail.com',
    linkedin: 'https://www.linkedin.com/in/chamoda-suraweera/',
    github: 'https://github.com/Chamoda-S',
    medium: 'https://medium.com/@chamoda.suraweera',
    wikipedia: 'https://en.wikipedia.org/wiki/User:Chamoda_Suraweera',
  },

  // Projects - Easy to expand! Just add more objects to this array
  // When you add projects, don't forget to:
  // 1. Add a placeholder image to /public folder (e.g., /placeholder-project-5.jpg)
  // 2. Update the page.tsx file to include new project cards if you add more than 4
  projects: [
    {
      id: 1,
      title: 'Sherine Travels - Vehicle Management System',
      description: 'Cloud-hosted vehicle rental platform enabling seamless vehicle browsing and booking while providing administrators with efficient tools to manage inventory, reservations and customer records.',
      image: '/project1.png',
      skills: ['TypeScript', 'ASP.NET', 'Azure SQL Database'],
      githubUrl: 'https://github.com/Chamoda-S/Sherine_Travels_Vehicle_Rental_Management_System',
    },
    {
      id: 2,
      title: 'Apartment Management System',
      description: 'Smart apartment management web application enabling residents and administrators to manage services, communication and community interactions.',
      image: '/project2.png',
      skills: ['TypeScript', 'Java', 'PostgreSQL'],
      githubUrl: 'https://github.com/Chamoda-S/Apartment-Management-System',
    },
    {
      id: 3,
      title: 'SplendourLux - An E-Commerce Website',
      description: 'Developed a full-stack eCommerce platform with an interactive product catalog, shopping cart, wishlist, and secure checkout, alongside an administrative dashboard for managing products, inventory and order tracking.',
      image: '/project3.png',
      skills: ['ReactJs', 'Java', 'MySQL'],
      githubUrl: 'https://github.com/Chamoda-S/Ecommerce-Website-Front-End',
    },
    {
      id: 4,
      title: 'Numerical Integration Using Trapezoidal Rule',
      description: 'Implemented the Trapezoidal Rule in serial, OpenMP, MPI, and CUDA to demonstrate numerical integration accelerated across multicore CPUs, distributed systems, and GPUs, including performance analysis and code examples.',
      image: 'project4.png',
      skills: ['Python', 'OpenMP', 'MPI', 'CUDA'],
      githubUrl: 'https://github.com/Chamoda-S/Parallel-Numerical-Integration',
    },
    // TO ADD MORE PROJECTS:
    {
      id: 5,
      title: 'Christmas Forest - VR Scene',
      description: 'Developed an immersive virtual reality experience of a magical Christmas forest using Unity XR Toolkit, creating an interactive environment designed to explore festive landscapes in VR.',
      image: 'project5.png',
      skills: ['Unity 3D', 'VR', 'Unity XR Toolkit'],
      githubUrl: 'https://github.com/Chamoda-S/ChristmasForest-UnityProject',
    },
    {
      id: 6,
      title: 'Hybrid 2D/3D Office Layout Designer',
      description: 'Developed a hybrid 2D–3D OpenGL interactive office designer featuring custom line and circle rendering, enabling users to visually design and arrange office layouts within a dynamic graphical environment.',
      image: 'project6.png',
      skills: ['C++', 'OpenGL'],
      githubUrl: 'https://github.com/Chamoda-S/OpenGL-Office-Designer',
    },
    {
      id: 7,
      title: 'Smart Food Monitoring System',
      description: 'Developed an IoT-based system for monitoring food freshness and storage conditions, enabling real-time tracking of environmental factors to help ensure food quality and safety.',
      image: 'project7.png',
      skills: ['Arduino', 'HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/Chamoda-S/The-Smart-IoT-Food-Monitoring-System-master',
    },
    {
      id: 8,
      title: 'Optimization and Search',
      description: 'Implemented BFS, A, IDS, Simulated Annealing, heuristics, Linear Programming, and Dynamic Programming (Knapsack) to demonstrate pathfinding, optimization, and efficiency analysis with validated results.',
      image: 'project8.png',
      skills: ['Python', 'Simulated Annealing', 'Linear Programming', 'Dynamic Programming'],
      githubUrl: 'https://github.com/Chamoda-S/Optimization-and-Search',
    },
    // Uncomment and modify below, or duplicate the structure above:
    // {
    //   id: 5,
    //   title: 'Project Five',
    //   description: 'Your new project description here.',
    //   image: '/placeholder-project-5.jpg',
    //   skills: ['Skill 1', 'Skill 2'],
    //   githubUrl: '#',
    // },
  ],

  // Skills - Customize by category. Add or remove skills as needed.
  // The page displays these 3 columns. To add more categories, you'll need to 
  // update the Skills section in page.tsx to add a 4th column.
  skills: {
    frontend: ['React JS', 'HTML', 'TypeScript', 'CSS'],
    backend: ['Java', 'C', 'SpringBoot', 'Python'],
    design: ['UI/UX', 'Azure DevOps', 'Jira', 'Figma', 'MS Office'],
  },

  // Experience
  experience: [
    {
      title: 'Project Management Intern',
      company: 'Hayleys Business Solutions International',
      location: 'Colombo 10, Sri Lanka',
      period: 'Jan 2026 – Present',
      description: 'Leading project coordination and management initiatives. Bridging the gap between technical teams and stakeholders while ensuring timely delivery. This is my first professional role.',
    },
  ],
};
