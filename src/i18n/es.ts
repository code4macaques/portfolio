/**
 * i18n/es.ts
 *
 * Spanish UI translations for all hardcoded strings in the portfolio.
 */
import type { Translations } from "./types";

const es: Translations = {
  // -- Navbar --
  nav: {
    home: "Inicio",
    experience: "Experiencia",
    skills: "Habilidades",
    education: "Educacion",
    contact: "Contacto",
    contactMe: "Contactame",
  },

  // -- Hero --
  hero: {
    available: "Disponible para nuevas oportunidades",
    tagline: (years: number) =>
      `Ingeniero de Software Full Stack con ${years}+ años de experiencia especializandome en la construcción de aplicaciones web escalables y arquitectura empresarial en la nube.`,
    downloadCv: "Descargar CV",
    getInTouch: "Contactame",
  },

  // -- About --
  about: {
    label: "Sobre mi",
    title: "Quien soy",
  },

  // -- Experience --
  experience: {
    label: "Trayectoria Profesional",
    title: "Experiencia Laboral",
  },

  // -- Skills --
  skills: {
    label: "Capacidades",
    title: "Experiencia Tecnica",
  },

  // -- Certifications --
  certifications: {
    label: "Credenciales",
    title: "Certificaciones y Diplomas",
  },

  // -- Education --
  education: {
    label: "Formacion",
    title: "Educacion e Idiomas",
    educationHeading: "Educacion",
    languagesHeading: "Idiomas",
  },

  // -- Other Skills --
  otherSkills: {
    label: "Habilidades Blandas",
    title: "Gobernanza y Cumplimiento",
    corporateStandards: "Estandares Corporativos",
  },

  // -- Contact --
  contact: {
    label: "Contacto",
    title: "Trabajemos Juntos",
    detailsHeading: "Datos de Contacto",
    detailsIntro:
      "Actualmente en Mexico, trabajando globalmente. No dudes en contactarme para colaboraciones en proyectos de alto impacto o roles de liderazgo tecnico.",
    socialHeading: "Perfiles Sociales",
    form: {
      fullName: "Nombre Completo",
      emailAddress: "Correo Electronico",
      phoneNumber: "Numero de Telefono",
      subject: "Asunto",
      message: "Mensaje",
      placeholderName: "Juan Perez",
      placeholderEmail: "juan@ejemplo.com",
      placeholderPhone: "+52 664 764 4912",
      placeholderSubject: "Consulta de Proyecto",
      placeholderMessage: "Cuentame sobre tu proyecto...",
      send: "Enviar Mensaje",
      sending: "Enviando...",
    },
    success: {
      title: "Mensaje Enviado!",
      text: "Gracias por comunicarte. Te respondere lo antes posible.",
      another: "Enviar otro mensaje",
    },
    errors: {
      nameRequired: "El nombre completo es obligatorio.",
      emailRequired: "El correo electronico es obligatorio.",
      emailInvalid: "Ingresa un correo electronico valido.",
      phoneRequired: "El numero de telefono es obligatorio.",
      phoneInvalid: "Ingresa un numero de telefono valido (7-15 digitos).",
      subjectRequired: "El asunto es obligatorio.",
      messageRequired: "El mensaje es obligatorio.",
      captchaRequired: "Por favor completa el reCAPTCHA.",
      generic: "Algo salio mal. Por favor intenta de nuevo.",
    },
  },

  // -- Footer --
  footer: {
    copyright: (year: number, name: string) =>
      `\u00A9 ${year} ${name}. Construido para rendimiento y confiabilidad.`,
    privacy: "Politica de Privacidad",
    terms: "Terminos de Servicio",
  },
};

export default es;
