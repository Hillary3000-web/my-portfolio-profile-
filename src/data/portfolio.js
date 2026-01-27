// Portfolio Data - Hillary Chukwuma Prince

export const personalInfo = {
  name: "Hillary Chukwuma Prince",
  role: "Full Stack Developer",
  tagline: "Full Stack Developer",
  description: "Passionate about creating beautiful, functional web experiences with modern technologies. I specialize in both frontend and backend development, building complete web applications from start to finish.",
  email: "princehillary813@gmail.com",
  phone: "+234 912 416 8036",
  location: "Port Harcourt, Nigeria",
  github: "https://github.com/Hillary3000-web",
  linkedin: "https://www.linkedin.com/in/chukwuma-hillary-318b09337",
  twitter: "#",
};

export const aboutContent = {
  paragraphs: [
    "Hello! I'm a passionate full stack developer with a strong foundation in modern web technologies. My journey in web development began with curiosity about how websites work, and it has evolved into a dedicated pursuit of creating exceptional digital experiences.",
    "I specialize in building responsive, user-friendly interfaces using HTML, CSS, JavaScript, and React on the frontend, while also developing robust backend systems with Python and Django.",
    "I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends. When I'm not coding, you'll find me learning new technologies or working on personal projects that challenge me to grow as a developer."
  ],
  stats: [
    { number: "2+", label: "Years Learning" },
    { number: "5+", label: "Projects Built" },
    { number: "8+", label: "Technologies" },
    { number: "100%", label: "Dedication" }
  ]
};

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", level: 90, icon: "html5" },
      { name: "CSS3", level: 85, icon: "css3" },
      { name: "JavaScript", level: 85, icon: "javascript" },
      { name: "React", level: 80, icon: "react" },
      { name: "Next.js", level: 75, icon: "nextjs" }
    ]
  },
  {
    category: "Backend & Tools",
    items: [
      { name: "Python", level: 80, icon: "python" },
      { name: "Django", level: 75, icon: "django" },
      { name: "Git", level: 85, icon: "git" },
      { name: "GitHub", level: 85, icon: "github" }
    ]
  }
];

export const projects = [
  {
    id: 4,
    title: "Sudoku Solver",
    description: "An intelligent Sudoku puzzle solver that uses backtracking algorithms to solve any valid Sudoku puzzle instantly. Features a clean, interactive interface.",
    problem: "Sudoku puzzles can be challenging and time-consuming to solve manually.",
    solution: "Built an algorithmic solver with a user-friendly interface that solves puzzles in milliseconds using efficient backtracking.",
    techStack: ["JavaScript", "HTML5", "CSS3", "Algorithms"],
    liveUrl: "https://sudoku-solver-six-eta.vercel.app/",
    githubUrl: "https://github.com/Hillary3000-web",
    image: null,
    featured: true,
    isInternal: false,
    status: "development"
  },
  {
    id: 1,
    title: "TechFlow Landing Page",
    description: "A stunning, modern landing page showcasing premium UI design with animated sections, feature grids, stats counters, and call-to-action components.",
    problem: "Companies need high-converting landing pages that communicate value instantly.",
    solution: "Built a premium landing page with glassmorphism effects, smooth animations, and responsive design that converts visitors.",
    techStack: ["React", "Framer Motion", "CSS Modules", "Responsive Design"],
    liveUrl: "/projects/landing-page",
    githubUrl: "https://github.com/Hillary3000-web/my-portfolio-profile-",
    image: null,
    featured: true,
    isInternal: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity application for managing daily tasks with CRUD operations, filtering, local storage persistence, and an intuitive glass UI design.",
    problem: "Users needed a simple, beautiful way to organize and track daily tasks.",
    solution: "Created a fully functional task manager with add, complete, delete, and filter functionality with data persistence.",
    techStack: ["React", "LocalStorage", "Framer Motion", "CSS Modules"],
    liveUrl: "/projects/task-manager",
    githubUrl: "https://github.com/Hillary3000-web/task-manager-",
    image: null,
    featured: true,
    isInternal: true
  },
  {
    id: 3,
    title: "Interactive Calculator",
    description: "A feature-rich calculator with a sleek Apple-inspired design, supporting all basic operations, calculation history, and keyboard support.",
    problem: "Needed to demonstrate JavaScript proficiency with complex state management.",
    solution: "Built a fully functional calculator with history tracking, responsive design, and smooth animations.",
    techStack: ["React", "JavaScript", "CSS Modules", "State Management"],
    liveUrl: "/projects/calculator",
    githubUrl: "#",
    image: null,
    featured: true,
    isInternal: true
  }
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];
