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
    "Eyitayo Ezekiel",
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
  location?: string;
  summary: string;
  highlights: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Backend Engineer",
    company: "Sync360",
    period: "06/2026 – Present",
    current: true,
    location: "Remote",
    summary:
      "Working on Sync360, an all-in-one inventory and business management platform designed to help African businesses handle stock, sales, customer orders, and finances.",
    highlights: [
      "Rebuilt inventory management around batch-level tracking, ensuring stock valuation, cost of goods sold, and profit calculations reflected actual purchase costs across different batches. Reduced inventory-related complaints from 3+ per week to zero after release.",
      "Built a multi-tier customer loyalty system that lets businesses reward repeat purchases and improve customer retention.",
      "Integrated Akawopay's Buy Now, Pay Later (BNPL) service into checkout, implementing webhook processing, transactional state management, and retry handling to support reliable payment flows while enabling businesses to receive payment upfront on credit-approved sales.",
      "Improved storefront response times by diagnosing slow database queries, adding indexes, and implementing cache invalidation to keep product data consistent with database updates.",
      "Built automated asynchronous ETL reporting pipelines using Celery and openpyxl, pulling sales, expense, and inventory data into scheduled monthly Excel reports and eliminating 3+ hours of manual bookkeeping weekly.",
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
    role: "Backend Engineer",
    company: "Toltimedcare",
    period: "August 2025 — April 2026",
    summary:
      "Developed and managed backend services supporting a digital healthcare platform focused on patient care, appointment booking, and medical records.",
    highlights: [
      "Built backend services for a healthcare booking platform that matches patients with verified nurses and community health workers, using a modular API architecture that separates business logic, data access and external integrations.",
      "Implemented geolocation-based matching so patients are paired with workers within good proximity.",
      "Engineered the platform’s payment system, integrating Velvpay for wallet operations with response validation and failure handling, and QoreID for identity verification.",
      "Containerised services with Docker and moved background work to Celery and Redis, separating request handling from asynchronous workloads.",
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
