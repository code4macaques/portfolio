/**
 * cvData.ts
 *
 * Single source of truth for all portfolio content.
 * Every section component reads from this file rather than hardcoding text.
 * Content is keyed by locale ("en" | "es") for i18n support.
 */
import type { Locale } from "../i18n";

// --- Type Definitions ---

export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  items: string[];
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  technologies: string[];
}

export interface CertificationEntry {
  title: string;
  issuer: string;
  period: string;
}

export interface DiplomaEntry {
  title: string;
  issuer: string;
  year: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface LanguageLevel {
  language: string;
  reading: number;
  writing: number;
  speaking: number;
  cefrLevel: string;
}

export interface CVData {
  fullName: string;
  firstName: string;
  lastName: string;
  title: string;
  contact: ContactInfo;
  summary: string[];
  skills: SkillCategory[];
  experience: ExperienceEntry[];
  certifications: CertificationEntry[];
  diplomas: DiplomaEntry[];
  education: EducationEntry[];
  languages: LanguageLevel[];
  governanceNote: string;
}

// --- Data ---

const yearsExp = new Date().getFullYear() - 2016;

const cvDataMap: Record<Locale, CVData> = {
  en: {
    fullName: "Jesus Alejandro Tirado Sanchez",
    firstName: "Jesus Alejandro",
    lastName: "Tirado Sanchez",
    title: "Full Stack Software Engineer",

    contact: {
      phone: "6647644912",
      email: "alejandro.tirado.dev@gmail.com",
      location: "Tijuana, Mexico",
    },

    summary: [
      `Full Stack Software Engineer with over ${yearsExp} years of experience in web application development, modernization, and restructuring of enterprise systems under client governance frameworks.`,
      "Strong background in refactoring legacy platforms, improving architecture, performance, and maintainability of web portals in regulated environments.",
      "Experienced working under client-defined standards, processes, and quality controls.",
    ],

    skills: [
      {
        title: "Backend",
        icon: "database",
        items: ["Java (Spring Boot)", "REST APIs", "Node.js / Express", "Golang"],
      },
      {
        title: "Frontend",
        icon: "devices",
        items: ["Angular", "React", "Vue.js", "TypeScript"],
      },
      {
        title: "Cloud & Databases",
        icon: "cloud",
        items: ["AWS", "GCP", "PostgreSQL", "MariaDB"],
      },
      {
        title: "DevOps & Methods",
        icon: "terminal",
        items: ["Docker", "Jenkins / CI/CD", "SCRUM", "Waterfall"],
      },
    ],

    experience: [
      {
        company: "Global Hitss",
        role: "Software Engineer",
        period: "Jan 2024 — Present",
        bullets: [
          "Refactoring web applications using micro-frontend architecture with React 18",
          "Development of corporate portals following client standards and security policies",
          "Backend services using Spring Boot and Java 21",
          "Collaboration with cross-functional teams ensuring governance compliance",
        ],
        technologies: ["React", "Angular", "Spring Boot", "Docker"],
      },
      {
        company: "Unosquare",
        role: "Software Engineer",
        period: "Jun 2023 — Jan 2024",
        bullets: [
          "Maintenance, refactoring and enhancement of enterprise web applications",
          "Jira ticket resolution (bugs, restructuring, new features)",
          "CI/CD pipeline improvements",
          "Cloud deployments",
          "Compliance with client development standards",
        ],
        technologies: ["Vue.js", "Node.js", "Spring Boot", "AWS", "Jenkins"],
      },
      {
        company: "Global Hitss",
        role: "Full Stack Developer",
        period: "Apr 2016 — Jun 2023",
        bullets: [
          "Modernization of telecommunications platforms for Claro Chile and Claro Colombia",
          "Migration of legacy systems into modular web services",
          "Development of integrations and web services for a Data Lake prototype",
          "Implementation of new functionalities in commercial portals",
        ],
        technologies: ["Java", "Spring Boot", "Angular", "Node.js", "PostgreSQL", "AWS", "GCP"],
      },
    ],

    certifications: [
      {
        title: "Associate Cloud Engineer",
        issuer: "Cloudskills Boost",
        period: "2022 — 2028",
      },
      {
        title: "GitHub Copilot",
        issuer: "Microsoft",
        period: "2025 — 2027",
      },
    ],

    diplomas: [
      {
        title: "Financial Education",
        issuer: "Hacienda",
        year: "2025",
      },
    ],

    education: [
      {
        degree: "Software Development Engineering",
        institution: "UVEG",
        period: "2025 — Present",
        description: "Focus on software architecture and engineering principles.",
      },
      {
        degree: "Computer Systems Engineering",
        institution: "UGM Norte",
        period: "2010 — 2014",
        description: "Core foundations of computing and algorithms.",
      },
    ],

    languages: [
      {
        language: "English",
        reading: 80,
        writing: 80,
        speaking: 80,
        cefrLevel: "B2",
      },
    ],

    governanceNote:
      "Experience working under corporate development standards, security policies, and governance frameworks.",
  },

  es: {
    fullName: "Jesus Alejandro Tirado Sanchez",
    firstName: "Jesus Alejandro",
    lastName: "Tirado Sanchez",
    title: "Ingeniero de Software Full Stack",

    contact: {
      phone: "6647644912",
      email: "alejandro.tirado.dev@gmail.com",
      location: "Tijuana, Mexico",
    },

    summary: [
      `Ingeniero de Software Full Stack con mas de ${yearsExp} años de experiencia en desarrollo de aplicaciones web, modernización y reestructuración de sistemas empresariales bajo marcos de gobernanza de clientes.`,
      "Solida experiencia en refactorización de plataformas heredadas, mejora de arquitectura, rendimiento y mantenibilidad de portales web en entornos regulados.",
      "Experiencia trabajando bajo estandares, procesos y controles de calidad definidos por el cliente.",
    ],

    skills: [
      {
        title: "Backend",
        icon: "database",
        items: ["Java (Spring Boot)", "REST APIs", "Node.js / Express", "Golang"],
      },
      {
        title: "Frontend",
        icon: "devices",
        items: ["Angular", "React", "Vue.js", "TypeScript"],
      },
      {
        title: "Cloud y Bases de Datos",
        icon: "cloud",
        items: ["AWS", "GCP", "PostgreSQL", "MariaDB"],
      },
      {
        title: "DevOps y Metodologias",
        icon: "terminal",
        items: ["Docker", "Jenkins / CI/CD", "SCRUM", "Waterfall"],
      },
    ],

    experience: [
      {
        company: "Global Hitss",
        role: "Ingeniero de Software",
        period: "Ene 2024 — Presente",
        bullets: [
          "Refactorizacion de aplicaciones web usando arquitectura micro-frontend con React 18",
          "Desarrollo de portales corporativos siguiendo estandares del cliente y politicas de seguridad",
          "Servicios backend usando Spring Boot y Java 21",
          "Colaboracion con equipos multifuncionales asegurando cumplimiento de gobernanza",
        ],
        technologies: ["React", "Angular", "Spring Boot", "Docker"],
      },
      {
        company: "Unosquare",
        role: "Ingeniero de Software",
        period: "Jun 2023 — Ene 2024",
        bullets: [
          "Mantenimiento, refactorizacion y mejora de aplicaciones web empresariales",
          "Resolucion de tickets en Jira (bugs, reestructuracion, nuevas funcionalidades)",
          "Mejoras en pipelines de CI/CD",
          "Despliegues en la nube",
          "Cumplimiento con estandares de desarrollo del cliente",
        ],
        technologies: ["Vue.js", "Node.js", "Spring Boot", "AWS", "Jenkins"],
      },
      {
        company: "Global Hitss",
        role: "Desarrollador Full Stack",
        period: "Abr 2016 — Jun 2023",
        bullets: [
          "Modernizacion de plataformas de telecomunicaciones para Claro Chile y Claro Colombia",
          "Migracion de sistemas heredados a servicios web modulares",
          "Desarrollo de integraciones y servicios web para un prototipo de Data Lake",
          "Implementacion de nuevas funcionalidades en portales comerciales",
        ],
        technologies: ["Java", "Spring Boot", "Angular", "Node.js", "PostgreSQL", "AWS", "GCP"],
      },
    ],

    certifications: [
      {
        title: "Associate Cloud Engineer",
        issuer: "Cloudskills Boost",
        period: "2022 — 2028",
      },
      {
        title: "GitHub Copilot",
        issuer: "Microsoft",
        period: "2025 — 2027",
      },
    ],

    diplomas: [
      {
        title: "Educacion Financiera",
        issuer: "Hacienda",
        year: "2025",
      },
    ],

    education: [
      {
        degree: "Ingenieria en Desarrollo de Software",
        institution: "UVEG",
        period: "2025 — Presente",
        description: "Enfoque en arquitectura de software y principios de ingenieria.",
      },
      {
        degree: "Ingenieria en Sistemas Computacionales",
        institution: "UGM Norte",
        period: "2010 — 2014",
        description: "Fundamentos de computacion y algoritmos.",
      },
    ],

    languages: [
      {
        language: "Ingles",
        reading: 80,
        writing: 80,
        speaking: 80,
        cefrLevel: "B2",
      },
    ],

    governanceNote:
      "Experiencia trabajando bajo estandares corporativos de desarrollo, politicas de seguridad y marcos de gobernanza.",
  },
};

/** Get CV data for a specific locale. */
export function getCVData(locale: Locale): CVData {
  return cvDataMap[locale];
}

/** Default export for backward compatibility (English). */
export default cvDataMap.en;
