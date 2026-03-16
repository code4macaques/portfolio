/**
 * i18n/en.ts
 *
 * English UI translations for all hardcoded strings in the portfolio.
 * CV content (experience, skills, etc.) lives in cvData and is separate.
 */
import type { Translations } from "./types";

const en: Translations = {
  // -- Navbar --
  nav: {
    home: "Home",
    experience: "Experience",
    skills: "Skills",
    education: "Education",
    contact: "Contact",
    contactMe: "Contact Me",
  },

  // -- Hero --
  hero: {
    available: "Available for new opportunities",
    tagline: (years: number) =>
      `Full Stack Software Engineer with ${years}+ years of experience specializing in building scalable web applications and enterprise cloud architecture.`,
    downloadCv: "Download CV",
    getInTouch: "Get In Touch",
  },

  // -- About --
  about: {
    label: "About Me",
    title: "Who I Am",
  },

  // -- Experience --
  experience: {
    label: "Professional Journey",
    title: "Work Experience",
  },

  // -- Skills --
  skills: {
    label: "Capabilities",
    title: "Technical Expertise",
  },

  // -- Certifications --
  certifications: {
    label: "Credentials",
    title: "Certifications & Diplomas",
  },

  // -- Education --
  education: {
    label: "Background",
    title: "Education & Languages",
    educationHeading: "Education",
    languagesHeading: "Languages",
  },

  // -- Other Skills --
  otherSkills: {
    label: "Soft Skills",
    title: "Governance & Compliance",
    corporateStandards: "Corporate Standards",
  },

  // -- Contact --
  contact: {
    label: "Contact",
    title: "Let's Work Together",
    detailsHeading: "Contact Details",
    detailsIntro:
      "Currently based in Mexico, working globally. Feel free to reach out for high-impact project collaborations or technical leadership roles.",
    socialHeading: "Social Profiles",
    form: {
      fullName: "Full Name",
      emailAddress: "Email Address",
      phoneNumber: "Phone Number",
      subject: "Subject",
      message: "Message",
      placeholderName: "John Doe",
      placeholderEmail: "john@example.com",
      placeholderPhone: "+52 664 764 4912",
      placeholderSubject: "Project Inquiry",
      placeholderMessage: "Tell me about your project...",
      send: "Send Message",
      sending: "Sending...",
    },
    success: {
      title: "Message Sent!",
      text: "Thank you for reaching out. I will get back to you as soon as possible.",
      another: "Send another message",
    },
    errors: {
      nameRequired: "Full name is required.",
      emailRequired: "Email is required.",
      emailInvalid: "Enter a valid email address.",
      phoneRequired: "Phone number is required.",
      phoneInvalid: "Enter a valid phone number (7-15 digits).",
      subjectRequired: "Subject is required.",
      messageRequired: "Message is required.",
      captchaRequired: "Please complete the reCAPTCHA.",
      generic: "Something went wrong. Please try again.",
    },
  },

  // -- Footer --
  footer: {
    copyright: (year: number, name: string) =>
      `\u00A9 ${year} ${name}. Built for performance and reliability.`,
    privacy: "Privacy Policy",
    terms: "Terms of Service",
  },
};

export default en;
