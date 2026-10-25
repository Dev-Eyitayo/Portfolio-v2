export const siteConfig = {
  name: "Ezekiel Eyitayo Feranmi",
  shortName: "Eyitayo",
  title: "Ezekiel Eyitayo Feranmi — Full-Stack Developer",
  description:
    "Full-stack developer with a strong backend foundation. I build products that help businesses solve problems, serve their customers better and make money.",
  url: "https://eyitayo.online",
  ogVersion: "v3",
  email: "ezekieleyitayo2020@gmail.com",
  socials: {
    github: "https://github.com/Dev-Eyitayo",
    linkedin: "https://www.linkedin.com/in/eyitayo-ezekiel",
    twitter: "https://x.com/dev_eyitayo",
  },
  keywords: [
    "Ezekiel Eyitayo Feranmi",
    "Eyitayo",
    "Full Stack Developer",
    "Web Developer",
    "Backend Developer",
    "Software Engineer",
    "Next.js Developer",
    "Python Developer",
    "Node.js Developer",
    "FastAPI",
    "Django",
    "PostgreSQL",
  ],
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const skills = {
  frontend: [
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Responsive Web Design",
  ],
  backend: [
    "Python (FastAPI & Django)",
    "Node.js (Express Js & NestJS)",
    "REST API Architecture",
    "PostgreSQL & SQL",
    "Redis & Caching",
    "Database Optimization",
  ],
  integrations: [
    "Payment Gateways (Paystack, Monnify, Velvpay)",
    "Authentication & Security",
    "Webhooks & Third-Party APIs",
    "Docker & Linux Deployment",
    "Background Jobs & Queues",
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
    role: "Backend & Systems Developer",
    company: "The Insight Technologies",
    period: "May 2026 — Present",
    current: true,
    summary:
      "Working on Sync360, an all-in-one inventory and business management platform designed to help African businesses handle stock, sales, customer orders, and finances.",
    highlights: [
      "Built and maintained core backend APIs that power customer orders, inventory updates, and multi-store management.",
      "Led the end-to-end integration of Buy-Now-Pay-Later (BNPL) payment services, ensuring seamless checkouts and safe payment verification.",
      "Collaborated closely with designers and frontend developers to deliver smooth, responsive user experiences.",
      "Designed and optimized database schemas to keep query speeds fast as business data grows.",
    ],
  },
  {
    role: "Intern Technologist",
    company: "Blueapril Technologies",
    period: "January 2026 — April 2026",
    summary:
      "Contributed to client web development initiatives while practicing modern agile workflows, team code reviews, and software planning.",
    highlights: [
      "Built clean internal admin dashboards and web tooling to speed up day-to-day operations.",
      "Participated actively in daily sprint reviews, task estimations, and feature delivery.",
      "Contributed to architectural planning for a multi-tenant cooperative management platform.",
      "Reviewed code with senior engineers to ensure high standards of security and maintainability.",
    ],
  },
  {
    role: "Backend Developer",
    company: "Toltimedcare",
    period: "August 2025 — April 2026",
    summary:
      "Developed and managed backend services supporting a digital healthcare platform focused on patient care, appointment booking, and medical records.",
    highlights: [
      "Designed and implemented REST APIs for patient registration, doctor appointments, and medical result delivery.",
      "Integrated secure user verification and digital wallet functionality.",
      "Improved server stability and reduced API response times across core features.",
      "Worked across teams to ensure sensitive healthcare data remained safe and compliant.",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  code?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    title: "Kontributa",
    description:
      "A group contribution and dues platform for student associations, clubs, and organizations. Automates bank transfer reconciliation in real time, generates digital receipts, and provides clear, auditable financial records.",
    tech: ["FastAPI", "PostgreSQL", "Next.js", "TypeScript", "Monnify", "Paystack"],
    code: "https://github.com/Dev-Eyitayo/Kontributa",
  },
  {
    title: "Sync360",
    description:
      "A business management web platform featuring live inventory tracking, point-of-sale workflows, order routing, and customer loyalty rewards. Built to keep businesses running smoothly every day.",
    tech: ["NestJS", "TypeScript", "PostgreSQL", "Redis", "Docker", "Akawopay"],
    live: "https://sync360.africa",
  },
  {
    title: "Toltimed Care",
    description:
      "A digital healthcare portal that simplifies patient appointments, medical records management, and doctor schedules. Features identity verification, wallet integrations, and automated notifications.",
    tech: ["NestJS", "TypeScript", "PostgreSQL", "Redis", "Docker", "QoreID"],
    live: "https://toltimedcare.com.ng",
  },
  {
    title: "Kitsune",
    description:
      "A fast, standalone Linux desktop tool that turns any web app into an isolated desktop application with custom docks, dedicated profiles, and smart link handling.",
    tech: ["Python", "Linux Systems", "Wayland & X11", "Firefox Engine"],
    code: "https://github.com/Dev-Eyitayo/kitsune",
  },
  {
    title: "Trybemarket",
    description:
      "A campus marketplace web app where students can safely buy and sell textbooks, electronics, and school supplies directly from each other with fast search and instant messaging.",
    tech: ["Next.js", "Firebase", "Firestore", "Tailwind CSS"],
    live: "https://trybemarket.online",
  },
  {
    title: "Bluegate Initiative",
    description:
      "An official responsive website for a non-profit organization, built to communicate community impact, showcase active projects, and connect volunteers and donors worldwide.",
    tech: ["React", "FastAPI", "Tailwind CSS", "SEO"],
    live: "https://bluegateinitiative.org",
  },
  {
    title: "MindBridge",
    description:
      "A mental wellness and guided journaling application with mood tracking insights and an interactive AI conversation assistant to help people reflect and build daily habits.",
    tech: ["Next.js", "Tailwind CSS", "Groq AI"],
    code: "https://github.com/Dev-Eyitayo/mindbridge",
    live: "https://mindbridge.pxxl.run/",
  },
  {
    title: "Sheltly",
    description:
      "A modern housing search API powered by semantic search algorithms, helping people describe the kind of home they want in plain words and find the best matching rentals.",
    tech: ["Python", "FastAPI", "Semantic Search"],
    code: "https://github.com/Dev-Eyitayo/semantic-search",
    live: "https://sheltly-api.onrender.com/",
  },
  {
    title: "Flexiryde",
    description:
      "A bus ticket booking web application that makes long-distance travel easy with real-time seat availability, route schedules, and instant digital travel tickets.",
    tech: ["Django REST", "React", "PostgreSQL", "Tailwind CSS"],
    code: "https://github.com/Dev-Eyitayo/Flexiryde",
    live: "https://flexiryde.vercel.app",
  },
  {
    title: "Curapets",
    description:
      "A veterinary appointment scheduling API that helps pet owners book vet consultations, receive appointment reminders, and access their pets' medical history.",
    tech: ["Django", "WebSockets", "Cloudinary", "Swagger Docs"],
    code: "https://github.com/Dev-Eyitayo/Pet-treatment",
    live: "https://curapet.onrender.com",
  },
];

export const about = {
  paragraphs: [
    "I'm a full-stack developer who enjoys building complete web applications from start to finish. I like turning ideas into finished products that look clean on screen, feel fast to use, and run on reliable systems under the hood.",
    "My edge is being backend-heavy: while I write modern, accessible frontend code with Next.js, React, and Tailwind CSS, I take pride in building the databases, APIs, payment flows, and server logic that make businesses work. If you need a website that also handles payments, user accounts, and real-time data, I make sure everything connects smoothly.",
    "I value clear communication, honest estimates, and building things that last. When I'm not writing code, I enjoy exploring system architecture, learning about product strategy, and sharing ideas with fellow builders.",
  ],
};
