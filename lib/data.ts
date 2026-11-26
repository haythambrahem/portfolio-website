import React from "react";
import type { StaticImageData } from "next/image";
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
    title: "Freelance Full Stack Developer",
    location: "Solar (photovoltaic) installation company - Freelance",
    description:
      "Built a showcase website and back-office (Spring Boot, Angular, MySQL): product catalogue, online quote requests and installation project tracking. Ran the mission end to end on my own: requirements gathering, development, testing, production deployment and support.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2026 - July 2026",
  },
  {
    title: "Freelance Full Stack Developer - AI Job Agent",
    location: "Freelance",
    description:
      "Designed and built an AI agent that automates the job search (offer scraping, AI matching, email sending) with a multi-tenant architecture, a Next.js / React frontend with NextAuth authentication, Docker and Vercel deployment.",
    icon: React.createElement(CgWorkAlt),
    date: "December 2025 - April 2026",
  },
  {
    title: "Full Stack Engineer Intern - Final Year Project",
    location: "BNA - Banque Nationale Agricole, Tunis",
    description:
      "Built a legal case management platform for 50+ users with Spring Boot (Java 17) and Angular 19: 9 business modules (cases, guarantees, missions...) with role-based workflows, cutting processing time by 40%. 50+ documented REST endpoints (Swagger) secured with JWT / Spring Security, 85% test coverage, Apache Kafka integration, SQL query optimisation (-60% response time).",
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
    title: "Engineering Degree in Software Engineering",
    location: "ESPRIT, El Ghazala, Ariana",
    description:
      "Engineering degree in Computer Science, Software Engineering specialisation - graduated in 2025 with high honours (Mention Très Bien). Focus on full stack development, Spring Boot, Angular and DevOps practices.",
    icon: React.createElement(LuGraduationCap),
    date: "September 2022 - 2025",
  },
] as const;

type ProjectData = {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl?: StaticImageData;
  github?: string;
  demo?: string;
  category: string;
};

export const projectsData: readonly ProjectData[] = [
  {
    title: "Job-Agent SaaS Platform",
    description:
      "Multi-tenant SaaS that automates job applications: NextAuth authentication, Stripe subscriptions with plan-based feature gating, AI-powered job scraping & matching, Redis caching and email notifications. Monorepo with an Express API and a Next.js frontend.",
    tags: ["Next.js", "Express", "Prisma", "PostgreSQL", "Stripe", "Redis", "Monorepo"],
    github: "https://github.com/haythambrahem/Job-Agent",
    category: "SaaS",
  },
  {
    title: "Legal Case Management Platform",
    description:
      "Enterprise platform for BNA bank used by 50+ users: 9 business modules (cases, guarantees, pledges, surety bonds, assets, providers, missions, auto-assignments) with role-based workflows. Result: -40% processing time, -60% SQL response time, 85% test coverage.",
    tags: ["Spring Boot", "Angular 19", "Java 17", "JWT", "Spring Security", "Kafka", "Swagger"],
    category: "Enterprise",
  },
  {
    title: "DevOps CI/CD Pipeline",
    description:
      "Jenkins / GitFlow pipeline with SonarQube and Trivy scans, multi-stage Docker images (-60% size), Kubernetes deployment (HPA) and Prometheus / Grafana monitoring. -70% delivery time.",
    tags: ["Jenkins", "Docker", "Kubernetes", "SonarQube", "Trivy", "Prometheus", "Grafana"],
    imageUrl: corpcommentImg,
    category: "DevOps",
  },
  {
    title: "ERP Resource Management Solution",
    description:
      "Team academic project: ERP on 8 microservices (API Gateway, Eureka) covering HR, Accounting, Inventory and CRM. JWT auth, Docker, 80% test coverage (JUnit / Mockito).",
    tags: ["Spring Boot", "Angular", "TypeScript", "MySQL", "Docker", "Microservices", "Eureka"],
    imageUrl: rmtdevImg,
    category: "ERP",
  },
  {
    title: "E-Commerce Web Platform",
    description:
      "Full-stack e-commerce with an Angular frontend and a Spring Boot backend: user authentication, product filtering, shopping cart, checkout workflow, order tracking, admin panel and inventory management.",
    tags: ["Angular", "Spring Boot", "TypeScript", "MySQL", "JWT", "Bootstrap"],
    github: "https://github.com/haythambrahem/E-commerce-web",
    category: "E-Commerce",
  },
  {
    title: "AngularQuest - Gamified Learning",
    description:
      "Gamified learning platform for Angular: Monaco Editor for live coding, instant feedback, progress tracking with Chart.js, Spring Boot backend, JWT auth, PostgreSQL and Docker.",
    tags: ["Angular", "Spring Boot", "PostgreSQL", "TypeScript", "Docker", "Monaco Editor"],
    github: "https://github.com/haythambrahem/AngularQuest",
    category: "Learning",
  },
  {
    title: "TunEvent - Event Management",
    description:
      "Event platform with online booking, Stripe payments and QR code tickets. Built in JavaFX, then migrated to Symfony, with WebSocket notifications.",
    tags: ["Java", "JavaFX", "PHP", "Symfony", "MySQL", "Stripe", "WebSockets"],
    imageUrl: wordanalyticsImg,
    category: "Events",
  },
];

export const skillsData = [
  // Programming Languages
  "Java",
  "TypeScript",
  "JavaScript",
  "PHP",
  
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
  "Oracle SQL / PL-SQL",
  "PostgreSQL",
  "MongoDB",
  
  // APIs & Integration
  "RESTful APIs",
  "Apache Kafka",
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
  "Prometheus",
  "Grafana",
  
  // Cloud Platforms
  "Azure (AKS)",
  
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