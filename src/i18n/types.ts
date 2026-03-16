/**
 * i18n/types.ts
 *
 * Shared translation shape. Both en.ts and es.ts must conform to this interface.
 */
export interface Translations {
  nav: {
    home: string;
    experience: string;
    skills: string;
    education: string;
    contact: string;
    contactMe: string;
  };

  hero: {
    available: string;
    tagline: (years: number) => string;
    downloadCv: string;
    getInTouch: string;
  };

  about: {
    label: string;
    title: string;
  };

  experience: {
    label: string;
    title: string;
  };

  skills: {
    label: string;
    title: string;
  };

  certifications: {
    label: string;
    title: string;
  };

  education: {
    label: string;
    title: string;
    educationHeading: string;
    languagesHeading: string;
  };

  otherSkills: {
    label: string;
    title: string;
    corporateStandards: string;
  };

  contact: {
    label: string;
    title: string;
    detailsHeading: string;
    detailsIntro: string;
    socialHeading: string;
    form: {
      fullName: string;
      emailAddress: string;
      phoneNumber: string;
      subject: string;
      message: string;
      placeholderName: string;
      placeholderEmail: string;
      placeholderPhone: string;
      placeholderSubject: string;
      placeholderMessage: string;
      send: string;
      sending: string;
    };
    success: {
      title: string;
      text: string;
      another: string;
    };
    errors: {
      nameRequired: string;
      emailRequired: string;
      emailInvalid: string;
      phoneRequired: string;
      phoneInvalid: string;
      subjectRequired: string;
      messageRequired: string;
      captchaRequired: string;
      generic: string;
    };
  };

  footer: {
    copyright: (year: number, name: string) => string;
    privacy: string;
    terms: string;
  };
}
