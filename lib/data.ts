import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Engineer - Final Year Project",
    location: "BNA - Banque Nationale Agricole, Tunis",
    description: 
      "Developed a complete legal case management platform serving 50+ users with Spring Boot (Java 17) and Angular 19. Implemented 9 critical business modules including real-time tracking, guarantees, pledges, surety bonds, assets, service providers, missions and automatic assignments. Features REST API with Swagger documentation, JWT authentication, and MySQL database.",
    icon: React.createElement(CgWorkAlt),
    date: "February 2025 - August 2025",
  },
  {
    title: "Full Stack Developer Intern",
    location: "SNDP, AGIL Energy - Tunis",
    description:
      "Developed a lubricant distributor management web application with Spring Boot and Angular, improving operational efficiency by 35%. Implemented secure JWT authentication with refresh tokens and role-based access control.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2024 - September 2024",
  },
  {
    title: "Full Stack Web Developer Intern",
    location: "ESPRIT - Remote",
    description:
      "Developed an international mobility platform with Spring Boot and Angular for 200+ users (students and administrators). Integrated JWT for secure authentication with granular access control and implemented complex business logic for student mobility management.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2024 - August 2024",
  },
  {
    title: "Engineering Degree in Computer Science",
    location: "ESPRIT, El Ghazala, Ariana",
    description:
      "Pursuing Engineering degree in Software Development at ESPRIT. Specialized in Full Stack Development, Spring Boot, Angular, and DevOps practices. Expected graduation: December 2025.",
    icon: React.createElement(LuGraduationCap),
    date: "September 2022 - December 2025",
  },
] as const;

export const projectsData = [
  {
    title: "Job-Agent SaaS Platform",
    description: 
      "🚀 Production-grade multi-tenant SaaS for automated job applications. Features: NextAuth authentication, Stripe subscription management, AI-powered job scraping & matching, plan-based feature gating (free tier: 10/month), Redis caching, email notifications. Monorepo with Express API & Next.js frontend.",
    tags: ["Next.js", "Express", "Prisma", "PostgreSQL", "Stripe", "Redis", "Monorepo"],
    imageUrl: corpcommentImg,
    github: "https://github.com/haythambrahem/Job-Agent",
    category: "SaaS",
  },
  {
    title: "Legal Case Management Platform",
    description: 
      "🏛️ Enterprise platform for BNA bank with 9 business modules: Cases, tracking, guarantees, pledges, surety bonds, assets, providers, missions & auto-assignments. Features: REST API with Swagger, JWT auth, real-time sync, audit logging. Serves 50+ concurrent users.",
    tags: ["Spring Boot", "Angular 19", "Java 17", "MySQL", "JWT", "Spring Security", "Swagger"],
    imageUrl: rmtdevImg,
    github: "",
    category: "Enterprise",
  },
  {
    title: "E-Commerce Web Platform",
    description:
      "🛒 Full-stack e-commerce with Angular frontend & Spring Boot backend. Features: User authentication, advanced product filtering, shopping cart, checkout workflow, order tracking, comprehensive admin panel, payment gateway integration & inventory management.",
    tags: ["Angular", "Spring Boot", "TypeScript", "MySQL", "JWT", "Bootstrap"],
    imageUrl: wordanalyticsImg,
    github: "https://github.com/haythambrahem/E-commerce-web",
    category: "E-Commerce",
  },
  {
    title: "AngularQuest - Gamified Learning",
    description:
      "🎮 Interactive gamified learning platform for Angular mastery. Features: Monaco Editor for live coding, real-time feedback, progress tracking with Chart.js, Spring Boot backend, JWT auth, PostgreSQL, Docker containerization. Learn Angular like Duolingo!",
    tags: ["Angular 18+", "Spring Boot 3.2+", "PostgreSQL", "TypeScript", "Docker", "Monaco Editor"],
    imageUrl: corpcommentImg,
    github: "https://github.com/haythambrahem/AngularQuest",
    category: "Learning",
  },
  {
    title: "ERP Resource Management Solution",
    description:
      "⚙️ Complete ERP with microservices architecture (8 services). Modules: HR Management, Accounting, Inventory, CRM. Features: Angular Material UI, real-time sync, JWT auth, Docker containerization, Eureka service discovery, SOLID principles & clean architecture.",
    tags: ["Spring Boot", "Angular", "TypeScript", "MySQL", "Docker", "Microservices", "Eureka"],
    imageUrl: rmtdevImg,
    github: "",
    category: "ERP",
  },
  {
    title: "TunEvent - Event Management",
    description:
      "🎭 Event platform with online booking, Stripe payments, QR code tickets, ratings & analytics. Developed in Java (JavaFX) then migrated to Symfony. Features: real-time notifications via WebSockets, responsive mobile-first design, comprehensive search.",
    tags: ["Java", "PHP", "Symfony", "MySQL", "Stripe", "WebSockets"],
    imageUrl: wordanalyticsImg,
    github: "",
    category: "Events",
  },
] as const;

export const skillsData = [
  // Programming Languages
  "Java",
  "TypeScript",
  "JavaScript",
  "PHP",
  "Python",
  
  // Backend Frameworks
  "Spring Boot",
  "Spring Security",
  "Spring Data JPA",
  "Hibernate",
  "Symfony",
  "Express.js",
  
  // Frontend Frameworks
  "Angular",
  "React",
  "Next.js",
  "RxJS",
  "NgRx",
  
  // Web Technologies
  "HTML5",
  "CSS3",
  "SASS",
  "Bootstrap",
  "Tailwind CSS",
  
  // Databases
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  
  // APIs & Integration
  "RESTful APIs",
  "GraphQL",
  "Swagger",
  "Postman",
  "JWT",
  "Stripe",
  
  // DevOps & CI/CD
  "Docker",
  "Kubernetes",
  "Git",
  "GitHub",
  "Jenkins",
  "Maven",
  "SonarQube",
  
  // Cloud Platforms
  "AWS",
  "Azure",
  "Google Cloud",
  
  // Testing
  "JUnit",
  "Mockito",
  "Jasmine",
  "Karma",
  
  // Methodologies
  "Agile",
  "Scrum",
  "TDD",
] as const;