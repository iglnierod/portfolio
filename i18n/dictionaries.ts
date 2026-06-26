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
      menuLabel: "Navegación principal",
      openMenuLabel: "Abrir menú",
      closeMenuLabel: "Cerrar menú",
      links: {
        home: "Inicio",
        about: "Sobre mí",
        techSkills: "Stack",
        experience: "Experiencia",
        studies: "Estudios",
        projects: "Proyectos",
        contact: "Contacto",
      },
      resume: "Currículum",
      resumeShort: "CV",
    },
    hero: {
      quote: "Código con propósito. Interfaces con intención.",
      intro: "Hola, soy",
      name: "Rodrigo Iglesias",
      role: "Desarrollador web full-stack",
      description:
        "Construyo aplicaciones web prácticas y orientadas a los datos, de frontend a backend: interfaces limpias, APIs REST, paneles, mapas interactivos, autenticación, modelos de bases de datos y productos full-stack listos para desplegar.",
      primaryCta: "Ver proyectos",
      secondaryCta: "Contáctame",
    },
    aboutMe: {
      title: "Sobre mí",
      openToWork: "Disponible para trabajar",
      notOpenToWork: "No disponible actualmente",
      paragraphs: [
        "Soy Rodrigo Iglesias, desarrollador web full-stack enfocado en crear productos útiles, claros y preparados para crecer.",
        "Trabajo de extremo a extremo: desde interfaces limpias y accesibles hasta APIs REST, autenticación, modelos de datos y despliegues. Me interesa especialmente transformar necesidades reales en soluciones prácticas y mantenibles.",
        "Además del código, disfruto aprender nuevas tecnologías, entender el contexto del producto y colaborar con equipos que valoran la calidad, la comunicación y la mejora continua.",
      ],
      strengthsTitle: "Fortalezas clave",
      strengths: [
        "Full-stack",
        "APIs REST",
        "Interfaces limpias",
        "Datos",
        "Resolución de problemas",
        "Aprendizaje continuo",
      ],
      imageAlt: "Rodrigo junto a una tigresa",
    },
    stack: {
      title: "Skills Técnicas",
      categories: {
        programmingLanguages: "Lenguajes de programación",
        frameworks: "Frameworks",
        backendData: "Backend y datos",
        securityWorkflowTesting: "Seguridad, flujo de trabajo y testing",
        infrastructureDeployment: "Infraestructura y despliegue",
        testingTools: "Testing y herramientas",
      },
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
      menuLabel: "Primary navigation",
      openMenuLabel: "Open menu",
      closeMenuLabel: "Close menu",
      links: {
        home: "Home",
        about: "About",
        techSkills: "Stack",
        experience: "Experience",
        studies: "Studies",
        projects: "Projects",
        contact: "Contact",
      },
      resume: "Resume",
      resumeShort: "CV",
    },
    hero: {
      quote: "Code with purpose. Interfaces with intent.",
      intro: "Hi, I'm",
      name: "Rodrigo Iglesias",
      role: "Full-Stack Web Developer",
      description:
        "I build practical, data-driven web applications from frontend to backend: clean interfaces, REST APIs, dashboards, interactive maps, authentication, database models, and deployable full-stack products.",
      primaryCta: "View projects",
      secondaryCta: "Contact me",
    },
    aboutMe: {
      title: "About me",
      openToWork: "Open to work",
      notOpenToWork: "Not available right now",
      paragraphs: [
        "I'm Rodrigo Iglesias, a full-stack web developer focused on building useful, clear products that are ready to grow.",
        "I work end to end: from clean, accessible interfaces to REST APIs, authentication, data models, and deployments. I especially enjoy turning real needs into practical, maintainable solutions.",
        "Beyond code, I enjoy learning new technologies, understanding product context, and collaborating with teams that value quality, communication, and continuous improvement.",
      ],
      strengthsTitle: "Key strengths",
      strengths: [
        "Full-stack",
        "REST APIs",
        "Clean interfaces",
        "Data",
        "Problem solving",
        "Continuous learning",
      ],
      imageAlt: "Rodrigo next to a tigress",
    },
    stack: {
      title: "Technical Skills",
      categories: {
        programmingLanguages: "Programming languages",
        frameworks: "Frameworks",
        backendData: "Backend & Data",
        securityWorkflowTesting: "Security & Workflow & Testing",
        infrastructureDeployment: "Infrastructure & Deployment",
        testingTools: "Testing & Tools",
      },
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
