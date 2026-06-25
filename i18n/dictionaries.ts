import type { Locale } from "./config";

const dictionaries = {
  es: {
    metadata: {
      title: "Portfolio Full-Stack",
      description:
        "Portfolio profesional full-stack con proyectos, experiencia y tecnologías.",
    },
    navigation: {
      languageLabel: "Cambiar idioma",
      languageTitle: "Cambiar idioma",
      links: {
        home: "Inicio",
        about: "Sobre mí",
        experience: "Experiencia",
        projects: "Proyectos",
        contact: "Contacto",
      },
      resume: "Currículum",
    },
    hero: {
      quote: "Código con propósito. Interfaces con intención.",
      intro: "Hola, soy",
      name: "Rodrigo Iglesias",
      role: "Desarrollador web full-stack",
      description:
        "Construyo aplicaciones web prácticas y orientadas a los datos, de frontend a backend: interfaces limpias, APIs REST, paneles, mapas interactivos, autenticación, modelos de bases de datos y productos full-stack listos para desplegar.",
      primaryCta: "Ver proyectos",
      secondaryCta: "Conóceme",
    },
  },
  en: {
    metadata: {
      title: "Full-Stack Portfolio",
      description:
        "Professional full-stack portfolio covering projects, experience, and technologies.",
    },
    navigation: {
      languageLabel: "Change language",
      languageTitle: "Change language",
      links: {
        home: "Home",
        about: "About me",
        experience: "Experience",
        projects: "Projects",
        contact: "Contact",
      },
      resume: "Resume",
    },
    hero: {
      quote: "Code with purpose. Interfaces with intent.",
      intro: "Hi, I'm",
      name: "Rodrigo Iglesias",
      role: "Full-Stack Web Developer",
      description:
        "I build practical, data-driven web applications from frontend to backend: clean interfaces, REST APIs, dashboards, interactive maps, authentication, database models, and deployable full-stack products.",
      primaryCta: "View projects",
      secondaryCta: "Get to know me",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
