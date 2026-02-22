// Portfolio Configuration
// Edit this file to update your portfolio details throughout the site

export const portfolioConfig = {
  // Personal Info
  personal: {
    name: 'Chamoda Suraweera',
    logo: 'LOGO', // Replace with your initials or logo text
    tagline: 'Computer Science student passionate about design, innovation, and crafting digital experiences that matter.',
    description: 'I\'m a Computer Science undergraduate with a passion for blending design and technology.',
    bio: 'Currently working as an Intern Project Manager, I bring technical understanding combined with design sensibility. I believe great products are built at the intersection of technical excellence and thoughtful design.',
  },

  // Contact Information
  contact: {
    email: 'your.email@example.com',
    linkedin: 'https://linkedin.com/in/chamoda-suraweera',
    github: 'https://github.com/yourusername',
    medium: '#',
    wikipedia: '#',
  },

  // Projects - Easy to expand! Just add more objects to this array
  // When you add projects, don't forget to:
  // 1. Add a placeholder image to /public folder (e.g., /placeholder-project-5.jpg)
  // 2. Update the page.tsx file to include new project cards if you add more than 4
  projects: [
    {
      id: 1,
      title: 'Project One',
      description: 'A detailed description of your first project, highlighting the technologies used and the impact it made.',
      image: '/placeholder-project-1.jpg',
      skills: ['React', 'TypeScript'],
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'Details about your second project, the challenges overcome, and the solutions implemented.',
      image: '/placeholder-project-2.jpg',
      skills: ['UI/UX Design', 'Next.js'],
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'Explore how this project solved specific problems and contributed to your professional growth.',
      image: '/placeholder-project-3.jpg',
      skills: ['Backend', 'Python'],
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Project Four',
      description: 'The latest addition to your portfolio showcasing recent work and emerging interests.',
      image: '/placeholder-project-4.jpg',
      skills: ['Product Design', 'Figma'],
      githubUrl: '#',
    },
    // TO ADD MORE PROJECTS:
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
    frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'JavaScript', 'HTML/CSS'],
    backend: ['Python', 'JavaScript', 'SQL', 'APIs', 'Node.js', 'Express'],
    design: ['UI/UX Design', 'Figma', 'Problem Solving', 'Innovation', 'Wireframing', 'Prototyping'],
  },

  // Experience
  experience: [
    {
      title: 'Project Manager Intern',
      company: 'Company Name',
      location: 'Location',
      period: 'Present',
      description: 'Leading project coordination and management initiatives. Bridging the gap between technical teams and stakeholders while ensuring timely delivery. This is my first professional role.',
    },
  ],
};
