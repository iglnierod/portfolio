import { Dictionary } from "@/i18n/dictionaries";
import { Container } from "./container";
import type { ComponentType, ReactElement, SVGProps } from "react";
import {
  Android,
  Angular,
  Bootstrap,
  Cloudflare,
  CSS,
  Docker,
  Firebase,
  Git,
  GitHubDark,
  GitHubLight,
  GitLab,
  HTML5,
  Java,
  JavaScript,
  JWT,
  Kotlin,
  Linux,
  MicrosoftNET,
  MySQLDark,
  MySQLLight,
  Nextjs,
  Nginx,
  Obsidian,
  OllamaDark,
  OllamaLight,
  OpenAIDark,
  OpenAILight,
  OpenCodeDark,
  OpenCodeLight,
  PhpDark,
  PhpLight,
  PostgreSQL,
  Postman,
  PrismaDark,
  PrismaLight,
  RenderDark,
  RenderLight,
  Spring,
  Supabase,
  TailwindCSS,
  Trello,
  TypeScript,
  VercelDark,
  VercelLight,
} from "@ridemountainpig/svgl-react";
import {
  CloudUpload,
  CodeXml,
  DatabaseZap,
  Layers,
  ShieldCheck,
  TestTubeDiagonal,
} from "lucide-react";

type TechIcon = ComponentType<SVGProps<SVGSVGElement>>;
type StackCategoryKey = keyof Dictionary["stack"]["categories"];

type Tech = {
  name: string;
  icon?: TechIcon;
  darkIcon?: TechIcon;
};

type TechCategory = {
  titleKey: StackCategoryKey;
  icon: ReactElement;
  technologies: Tech[];
};

type Props = {
  content: Dictionary["stack"];
};

const techCategories: TechCategory[] = [
  {
    titleKey: "programmingLanguages",
    icon: <CodeXml />,
    technologies: [
      { name: "Java", icon: Java },
      { name: "TypeScript", icon: TypeScript },
      { name: "JavaScript", icon: JavaScript },
      { name: "Kotlin", icon: Kotlin },
      { name: "PHP", icon: PhpLight, darkIcon: PhpDark },
      { name: "ASP.NET", icon: MicrosoftNET },
      { name: "HTML5", icon: HTML5 },
      { name: "CSS", icon: CSS },
    ],
  },
  {
    titleKey: "frameworks",
    icon: <Layers />,
    technologies: [
      { name: "Spring Boot", icon: Spring },
      { name: "Next.js", icon: Nextjs },
      { name: "Angular", icon: Angular },
      { name: "Tailwind", icon: TailwindCSS },
      { name: "Bootstrap", icon: Bootstrap },
      { name: "Jetpack Compose", icon: Android },
    ],
  },
  {
    titleKey: "backendData",
    icon: <DatabaseZap />,
    technologies: [
      { name: "SQL", icon: MySQLLight, darkIcon: MySQLDark },
      { name: "PostgreSQL", icon: PostgreSQL },
      { name: "Supabase", icon: Supabase },
      { name: "Firebase", icon: Firebase },
      { name: "Prisma", icon: PrismaLight, darkIcon: PrismaDark },
      { name: "OracleDB" },
    ],
  },
  {
    titleKey: "securityWorkflowTesting",
    icon: <ShieldCheck />,
    technologies: [
      { name: "JWT", icon: JWT },
      { name: "Trello", icon: Trello },
      { name: "OAuth 2.0" },
      { name: "Agile / Scrum / Kanban" },
      { name: "JUnit" },
    ],
  },
  {
    titleKey: "infrastructureDeployment",
    icon: <CloudUpload />,
    technologies: [
      { name: "Docker", icon: Docker },
      { name: "Vercel", icon: VercelLight, darkIcon: VercelDark },
      { name: "Render", icon: RenderLight, darkIcon: RenderDark },
      { name: "Linux Server", icon: Linux },
      { name: "Cloudflare", icon: Cloudflare },
      { name: "Nginx", icon: Nginx },
    ],
  },
  {
    titleKey: "testingTools",
    icon: <TestTubeDiagonal />,
    technologies: [
      { name: "Git", icon: Git },
      { name: "GitHub", icon: GitHubLight, darkIcon: GitHubDark },
      { name: "Opencode", icon: OpenCodeDark, darkIcon: OpenCodeLight },
      { name: "AI Agents", icon: OpenAILight, darkIcon: OpenAIDark },
      { name: "Postman", icon: Postman },
      { name: "GitLab", icon: GitLab },
      { name: "LLMs", icon: OllamaLight, darkIcon: OllamaDark },
      { name: "Obsidian", icon: Obsidian },
    ],
  },
];

function TechIconMark({ icon: Icon, darkIcon: DarkIcon }: Tech) {
  if (Icon && DarkIcon) {
    return (
      <>
        <Icon aria-hidden="true" className="size-4 shrink-0 dark:hidden" />
        <DarkIcon
          aria-hidden="true"
          className="hidden size-4 shrink-0 dark:block"
        />
      </>
    );
  }

  if (Icon) {
    return <Icon aria-hidden="true" className="size-4 shrink-0" />;
  }

  return null;
}

function TechItem(tech: Tech) {
  return (
    <li>
      <span
        className="inline-flex items-center gap-2 rounded border border-zinc-200/80 bg-zinc-50/80 px-3 py-2 text-sm font-medium text-zinc-700 transition-colors duration-200 hover:border-zinc-400 hover:bg-zinc-100 dark:border-zinc-800/80 dark:bg-zinc-700/20 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-800/60"
        title={tech.name}
      >
        <TechIconMark {...tech} />
        {tech.name}
      </span>
    </li>
  );
}

export function TechSkills({ content }: Props) {
  return (
    <section id="stack">
      <Container className="group flex flex-col gap-8 py-12">
        <div>
          <h3 className="text-4xl font-bold">{content.title}</h3>
          <span className="mt-3 block h-0.5 w-16 rounded-full bg-zinc-800 transition-all duration-300 ease-out group-hover:w-24 group-hover:bg-zinc-900 dark:bg-zinc-50 dark:group-hover:bg-zinc-100" />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {techCategories.map((category) => (
            <article
              key={category.titleKey}
              className="min-h-48 rounded border border-zinc-200/80 bg-zinc-50/70 p-5 backdrop-blur transition-colors duration-300 hover:border-zinc-300 dark:border-zinc-800/80 dark:bg-zinc-950/20 dark:hover:border-zinc-700"
            >
              <div className="flex h-full flex-col gap-6">
                <div>
                  <h4 className="flex items-center gap-2 text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                    <span className="inline-flex size-5 shrink-0 items-center justify-center text-zinc-500 dark:text-zinc-400 [&>svg]:size-5">
                      {category.icon}
                    </span>
                    {content.categories[category.titleKey]}
                  </h4>
                  <span className="mt-2 block h-px w-16 bg-zinc-300 dark:bg-zinc-700" />
                </div>

                <ul className="flex flex-wrap gap-3">
                  {category.technologies.map((tech) => (
                    <TechItem
                      key={`${category.titleKey}-${tech.name}`}
                      {...tech}
                    />
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
