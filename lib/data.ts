import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name:  "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Engineer - Final Year Project",
    location: "BNA - Banque Nationale Agricole, Tunis",
    description: 
      "Developed a complete legal case management platform serving 50+ users with Spring Boot (Java 17) and Angular 19. Implemented 9 critical business modules including real-time tracking, guarantees, and intelligent mission assignment.  Built RBAC workflow system reducing processing time by 40%.  Integrated Spring Security with JWT authentication and achieved 85% code coverage.",
    icon: React.createElement(CgWorkAlt),
    date: "February 2025 - August 2025",
  },
  {
    title:  "Full Stack Developer Intern",
    location: "SNDP, AGIL Energy - Tunis",
    description:
      "Developed a lubricant distributor management web application with Spring Boot and Angular, improving operational efficiency by 35%. Implemented secure JWT authentication with refresh tokens and role-based access control. Designed and normalized MySQL database with 15+ optimized tables. Created 30+ RESTful API endpoints documented with Swagger. Applied SCRUM methodology with 2-week sprints.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2024 - September 2024",
  },
  {
    title: "Full Stack Web Developer Intern",
    location:  "ESPRIT - Remote",
    description:
      "Developed an international mobility platform with Spring Boot and Angular for 200+ users (students and administrators). Integrated JWT for secure authentication with granular access control.  Optimized SQL queries with pagination and lazy loading, reducing loading time by 50%. Implemented validation on both client (Angular Reactive Forms) and server (Spring Validation) sides.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2024 - August 2024",
  },
  {
    title: "Engineering Degree in Computer Science",
    location: "ESPRIT, El Ghazala, Ariana",
    description:
      "Pursuing Engineering degree in Software Development at ESPRIT.  Specialized in Full Stack Development, Spring Boot, Angular, and DevOps practices. Expected graduation: December 2025.",
    icon: React.createElement(LuGraduationCap),
    date: "September 2022 - December 2025",
  },
] as const;

export const projectsData = [
  {
    title: "Legal Case Management Platform",
    description: 
      "Full-stack platform for BNA with 9 business modules:  Cases, Real-time tracking, Guarantees, Pledges, Surety bonds, Assets, Service providers, Missions and Automatic assignments. Features RBAC workflow, dynamic analytics dashboard with real-time KPIs, and intelligent mission assignment based on availability and expertise.  RESTful API with 50+ endpoints and Swagger documentation.",
    tags: ["Spring Boot", "Angular 19", "Java 17", "MySQL", "JWT", "Spring Security", "Swagger"],
    imageUrl: corpcommentImg,
  },
  {
    title: "ERP Resource Management Solution",
    description:
      "Complete ERP solution with microservices architecture (8 independent services). Modules: HR Management (leave, absences), Accounting, Inventory, CRM with Angular Material and responsive design. RESTful APIs with Spring Boot, JWT security, API Gateway and Service Discovery (Eureka). Applied Agile methodology with Git (GitFlow). Integrated unit tests (JUnit 5, Mockito, Jasmine, Karma) with 80% code coverage.",
    tags: ["Spring Boot", "Angular", "TypeScript", "MySQL", "JWT", "Docker", "Microservices", "Eureka"],
    imageUrl: rmtdevImg,
  },
  {
    title: "TunEvent - Event Management Platform",
    description:
      "Event management platform initially developed in Java (JavaFX) then migrated to Symfony. Features: Online booking, Secure payment (Stripe), QR Code ticket management, and rating system. Real-time notifications (WebSockets), automated emails (Mailer) and SMS confirmations. Intuitive UI with SceneBuilder (desktop) and responsive Twig templates (web).",
    tags: ["Java", "PHP", "Symfony", "JavaFX", "MySQL", "Stripe", "WebSockets", "Twig"],
    imageUrl: wordanalyticsImg,
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