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
    name: "About",
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
    title: "Software Engineering Student",
    location: "ESPRIT, Tunisia",
    description:
      "I'm pursuing my Engineering degree in Computer Science, focusing on software development and DevOps practices.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2025",
  },
  {
    title: "Software Engineering Intern",
    location: "SNDP, AGIL Energy - Tunis",
    description:
      "Developed a web application for lubricant distributor management using Spring and Angular. Implemented JWT authentication and used MySQL with Swagger for API testing. Applied SCRUM methodology for efficient project delivery.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2024 - September 2024",
  },
  {
    title: "Web Development Intern",
    location: "Esprit University - Remote",
    description:
      "Developed an international mobility application using Spring and Angular. Implemented JWT authentication and optimized user management. Used MySQL, Postman, and Swagger for data management and API testing.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2024 - August 2024",
  },
] as const;

export const projectsData = [
  {
    title: "DevOps CI/CD Pipeline Automation",
    description:
      "Implemented a comprehensive DevOps solution using Docker, Kubernetes, Jenkins, and various tools for automated deployment and security scanning.",
    tags: ["Jenkins", "Docker", "Kubernetes", "SonarQube", "Trivy", "Nexus"],
    imageUrl: corpcommentImg,
  },
  {
    title: "ERP Resource Management Solution",
    description:
      "Designed and developed an enterprise resource planning solution using Spring Boot and Angular, implementing efficient resource management processes.",
    tags: ["Spring Boot", "Angular", "TypeScript", "Java", "GitHub"],
    imageUrl: rmtdevImg,
  },
  {
    title: "TunEvent - Event Management Platform",
    description:
      "Developed an event management application initially in Java, later converted to Symfony, featuring intuitive user interface and comprehensive event management capabilities.",
    tags: ["Java", "PHP", "Symfony", "SceneBuilder", "GitHub"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  // Programming Languages
  "Java",
  "PHP",
  "Python",
  "JavaScript",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  
  // Web Technologies
  "Spring Boot",
  "Angular",
  "React",
  "Next.js",
  "Node.js",
  "HTML5",
  "CSS3",
  
  // Databases
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  
  // Cloud & DevOps
  "AWS",
  "Azure",
  "Google Cloud",
  "Docker",
  "Kubernetes",
  "Jenkins",
  "Git",
  "GitHub",
  "Nexus",
  "Maven",
  "SonarQube",
  "Trivy",
  "GraphQL",
  "Express",
  "Python",
] as const;
