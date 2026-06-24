import type { Locale } from "./config";

const dictionaries = {
  es: {
    metadata: {
      title: "Portfolio Full Stack",
      description:
        "Portfolio profesional de perfil full stack, proyectos, experiencia y tecnologías.",
    },
    navigation: {
      languageLabel: "Cambiar idioma",
      links: {
        home: "Inicio",
        experience: "Experiencia",
        projects: "Proyectos",
        contact: "Contacto",
      },
      resume: "Currículum",
    },
    hero: {
      eyebrow: "Portfolio full stack",
      title:
        "Construyo productos web completos, del frontend a la infraestructura.",
      description:
        "Este proyecto ya está preparado para crecer con contenido localizado en español e inglés.",
      primaryCta: "Ver proyectos",
      secondaryCta: "Contactar",
    },
    sections: {
      stackTitle: "Stack principal",
      stackDescription:
        "Next.js, React, TypeScript, APIs, bases de datos y despliegues modernos.",
      workTitle: "Qué incluir aquí",
      workDescription:
        "Casos de estudio, experiencia profesional, proyectos destacados y enlaces de contacto.",
    },
  },
  en: {
    metadata: {
      title: "Full Stack Portfolio",
      description:
        "Professional full stack portfolio covering projects, experience, and technologies.",
    },
    navigation: {
      languageLabel: "Change language",
      links: {
        home: "Home",
        experience: "Experience",
        projects: "Projects",
        contact: "Contact",
      },
      resume: "Resume",
    },
    hero: {
      eyebrow: "Full stack portfolio",
      title: "I build complete web products, from frontend to infrastructure.",
      description:
        "This project is now ready to grow with localized content in Spanish and English.",
      primaryCta: "View projects",
      secondaryCta: "Contact",
    },
    sections: {
      stackTitle: "Core stack",
      stackDescription:
        "Next.js, React, TypeScript, APIs, databases, and modern deployments.",
      workTitle: "What to include here",
      workDescription:
        "Case studies, professional experience, featured projects, and contact links.",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
