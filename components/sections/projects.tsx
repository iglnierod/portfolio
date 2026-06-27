import { Dictionary } from "@/i18n/dictionaries";
import { Container } from "@/components/sections/container";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Props = {
  content: Dictionary["projects"];
};

export function Projects({ content }: Props) {
  return (
    <section id="projects">
      <Container className="group flex flex-col gap-8 py-12">
        <div>
          <h3 className="text-4xl font-bold">{content.title}</h3>
          <span className="mt-3 block h-0.5 w-16 rounded-full bg-zinc-800 transition-all duration-300 ease-out group-hover:w-24 group-hover:bg-zinc-900 dark:bg-zinc-50 dark:group-hover:bg-zinc-100" />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {content.items.map((project) => {
            const isOnline = Boolean(project.website);
            const statusBadge = (
              <span
                className={
                  isOnline
                    ? "inline-flex items-center gap-2 rounded border border-green-700/25 bg-green-700/8 px-2.5 py-1 text-[12px] font-medium text-green-700 transition-colors duration-200 hover:border-green-700/45 hover:bg-green-700/12 dark:border-green-400/25 dark:bg-green-400/10 dark:text-green-300 dark:hover:border-green-400/45"
                    : "text-muted-foreground inline-flex items-center gap-2 rounded border border-zinc-200/80 bg-zinc-50/80 px-2.5 py-1 text-[12px] font-medium dark:border-zinc-800/80 dark:bg-zinc-700/20"
                }
              >
                <span
                  className={
                    isOnline
                      ? "h-1.5 w-1.5 rounded-full bg-current"
                      : "h-1.5 w-1.5 rounded-full border border-current"
                  }
                />
                {isOnline ? content.online : content.offline}
              </span>
            );

            return (
              <article
                key={project.github}
                className="group/card flex min-h-[420px] flex-col rounded border border-zinc-200/80 bg-zinc-50/70 p-5 backdrop-blur transition-colors duration-300 hover:border-zinc-300 hover:bg-zinc-50/90 dark:border-zinc-800/80 dark:bg-zinc-950/20 dark:hover:border-zinc-700 dark:hover:bg-zinc-950/40"
              >
                <div className="flex min-h-16 items-start justify-between gap-4">
                  <h4 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                    {project.name}
                  </h4>

                  {isOnline ? (
                    <Link
                      href={project.website}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.name} ${content.online}`}
                    >
                      {statusBadge}
                    </Link>
                  ) : (
                    statusBadge
                  )}
                </div>

                <p className="text-body mt-5 min-h-28 text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>

                <ul className="mt-5 flex min-h-24 flex-wrap content-end items-end justify-start gap-1.5">
                  {project.stack.map((tech) => (
                    <li key={tech}>
                      <span className="text-muted-foreground inline-flex items-center rounded border border-zinc-200/80 bg-zinc-50/80 px-2 py-0.5 text-[11px] font-medium transition-colors duration-200 hover:border-zinc-400 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800/80 dark:bg-zinc-700/20 dark:hover:border-zinc-600 dark:hover:bg-zinc-800/60 dark:hover:text-zinc-100">
                        {tech}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 h-px w-full bg-zinc-200/80 dark:bg-zinc-800/80" />

                <div className="mt-auto flex items-center justify-between gap-4 pt-5">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.name} GitHub`}
                    className="inline-flex size-9 items-center justify-center text-zinc-950 transition-colors duration-200 hover:text-zinc-600 dark:text-zinc-50 dark:hover:text-zinc-300"
                  >
                    <span
                      aria-hidden="true"
                      className="size-6 bg-current"
                      style={{
                        maskImage: "url(/github.svg)",
                        maskPosition: "center",
                        maskRepeat: "no-repeat",
                        maskSize: "contain",
                        WebkitMaskImage: "url(/github.svg)",
                        WebkitMaskPosition: "center",
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskSize: "contain",
                      }}
                    />
                  </Link>

                  <Link
                    href="#"
                    className="group/link text-muted-foreground inline-flex items-center gap-1 border-b border-zinc-300 pb-0.5 text-sm font-medium transition-colors duration-200 hover:border-zinc-900 hover:text-zinc-900 dark:border-zinc-700 dark:hover:border-zinc-50 dark:hover:text-zinc-50"
                  >
                    {project.readMore}
                    <ArrowUpRight
                      aria-hidden="true"
                      size={14}
                      className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
