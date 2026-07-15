export const siteConfig = {
  name: "Ezekiel Eyitayo Feranmi",
  shortName: "Eyitayo",
  title: "Ezekiel Eyitayo Feranmi | Backend Software Engineer",
  description:
    "Backend software engineer specializing in building scalable APIs, payment integrations, and reliable systems. Building with Django, FastAPI, and Next.js.",
  url: "https://eyitayo.online",
  email: "ezekieleyitayo2020@gmail.com",
  socials: {
    github: "https://github.com/Dev-Eyitayo",
    linkedin: "https://www.linkedin.com/in/eyitayo-ezekiel",
    twitter: "https://x.com/dev_eyitayo",
  },
  keywords: [
    "Ezekiel Eyitayo Feranmi",
    "Eyitayo",
    "Software Engineer",
    "Backend Developer",
    "Full Stack Developer",
    "Django Developer",
    "FastAPI Developer",
    "Next.js Developer",
  ],
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const skills = {
  backend: [
    "Django REST Framework",
    "FastAPI",
    "Python",
    "Node.js",
    "PostgreSQL",
    "SQL",
    "Firebase",
    "REST API Design",
  ],
  frontend: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
  practices: [
    "System Architecture",
    "Payment Integration",
    "Code Review",
    "Agile Collaboration",
    "Database Design",
  ],
};

export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  summary: string;
  highlights: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Backend Developer",
    company: "The Insight Technologies",
    period: "May 2026 — Present",
    current: true,
    summary:
      "Working on Sync360, a comprehensive inventory and e-commerce management platform designed to streamline inventory operations, sales workflows, and business management processes.",
    highlights: [
      "Architect and maintain backend APIs powering core platform functionality and business workflows.",
      "Led the end-to-end integration of Buy-Now-Pay-Later (BNPL) services, designing secure payment flows, handling transactional states, and ensuring reliable payment processing.",
      "Collaborate with product and engineering teams during standups and technical planning sessions to define requirements, design database schemas, and align on implementation strategies.",
      "Develop scalable backend services and integrations that support inventory management, order processing, and platform growth.",
      "Contribute to system architecture discussions, code reviews, and technical decision-making to improve maintainability and performance.",
    ],
  },
  {
    role: "Intern Technologist",
    company: "Blueapril Technologies",
    period: "January 2026 — April 2026",
    summary:
      "Contributed to software development initiatives while gaining hands-on experience with agile engineering practices, project planning, and collaborative software delivery.",
    highlights: [
      "Participated in sprint planning, task estimation, and execution activities to ensure timely project delivery.",
      "Conducted peer code reviews, helping maintain code quality, security standards, and development best practices.",
      "Developed administrative dashboards and internal tooling to improve operational workflows.",
      "Collaborated with team members on architectural planning and requirement analysis for a proposed multi-tenant cooperative management platform.",
      "Worked closely with developers and stakeholders to translate business requirements into actionable technical solutions.",
    ],
  },
  {
    role: "Backend Developer",
    company: "Toltim (Healthcare Startup)",
    period: "August 2025 — April 2026",
    summary:
      "Managed and enhanced backend infrastructure supporting a healthcare platform, focusing on reliability, scalability, and secure user experiences.",
    highlights: [
      "Maintained and improved backend services critical to the platform's daily operations.",
      "Designed and implemented RESTful APIs supporting core healthcare workflows and platform functionality.",
      "Optimized backend processes to improve system stability, response times, and overall platform performance.",
      "Collaborated with cross-functional teams to support feature delivery and ensure system reliability.",
    ],
  },
];



export type Project = {
  title: string;
  description: string;
  tech: string[];
  code?: string;
  live?: string;
  featured?: boolean;
};


export const projects: Project[] = [
  {
    title: "Bluegate Initiative Website",
    description:
      "A responsive and informative NGO website designed to showcase the mission, programs, and impact of the Bluegate Initiative, with clear calls-to-action and optimized content delivery.",
    tech: ["React", "Tailwind CSS", "FastAPI", "SEO Optimization"],
    // code: "https://github.com/Dev-Eyitayo/bluegate",
    live: "https://bluegateinitiative.org",
    featured: true,
  },
  {
    title: "MindBridge",
    description:
      "An AI-powered mental health and journaling application featuring automated mood tracking and a chatbot.",
    tech: ["Next.js", "Tailwind CSS", "Groq Integration",],
    featured: true,
    code: "https://github.com/Dev-Eyitayo/mindbridge",
    live: "https://mindbridge.pxxl.run/"
  },
  {
    title: "Trybemarket",
    description:
      "A web application that connects students to enhance buying and selling from the comfort of their devices.",
    tech: ["Next Js", "Firebase", "Cloud Firestore", "Cloudinary"],
    live: "https://trybemarket.online",
    featured: true,
  },
  {
    title: "Sheltly",
    description:
      "Backend server for an AI-driven semantic search marketplace for housing solutions, integrating Explainable AI (XAI) frameworks like SHAP and LIME to provide highly relevant and transparent search results.",
    tech: ["Python", "FastAPI", "Explainable AI (XAI)",],
    featured: true,
    code: "https://github.com/Dev-Eyitayo/semantic-search",
    live: "https://sheltly-api.onrender.com/"
  },
  {
    title: "Transport Booking Web App",
    description:
      "A seamless bus ride booking system displaying seat availability, departure times, and generating digital tickets.",
    tech: ["Django REST Framework", "React", "PostgreSQL", "Tailwind CSS"],
    code: "https://github.com/Dev-Eyitayo/Flexiryde",
    live: "https://flexiryde.vercel.app",
    featured: true,
  },
  {
    title: "Scheduling Software",
    description:
      "An intelligent scheduling system for institutions, managing classrooms, lecturers, and courses efficiently.",
    tech: ["Django", "Algorithm Optimization", "PostgreSQL"],
    code: "https://github.com/Dev-Eyitayo/UniSchedul",
    // live: "https://unischedul.vercel.app/",
    featured: false,
  },
  {
    title: "Curapets",
    description:
      "A pet doctor appointment booking API with appointment scheduling, real-time notifications, and reminders.",
    tech: ["Django", "WebSockets", "Cloudinary", "Swagger Docs"],
    code: "https://github.com/Dev-Eyitayo/Pet-treatment",
    live: "https://curapet.onrender.com",
    featured: true,
  },
  {
    title: "Car Selling Web Application",
    description:
      "A Django-based web app where users view and buy cars as uploaded by an admin, with payment integration.",
    tech: ["Django", "JavaScript", "External API Integration", "Bootstrap"],
    code: "https://github.com/Dev-Eyitayo/Car-Selling-Web-App",
    featured: false,
  },
];


export const about = {
  paragraphs: [
    "I'm someone who enjoys figuring things out - not just in code, but in how things connect, break, and improve over time.",
    "I like clarity, simplicity, and structure, and I tend to naturally question how things can be done better or more efficiently. I'm also very reflective in how I work. I prefer to understand deeply rather than rush through outcomes.",
    "Outside of work, I'm interested in ideas, communication, and how people build communities and shared meaning around what they do.",
  ],
};
