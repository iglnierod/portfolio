import type { Dictionary } from "@/i18n/dictionaries";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type Project = Dictionary["projects"]["items"][number];

type Props = {
  project: Project;
  content: Pick<Dictionary["projects"], "online" | "offline" | "moreStack">;
};

export function ProjectCard({ project, content }: Props) {
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
      <span className="inline-flex items-center gap-0.5">
        {isOnline ? content.online : content.offline}
        {isOnline ? (
          <ArrowUpRight
            aria-hidden="true"
            size={14}
            className="transition-transform duration-200 group-hover/status:translate-x-0.5 group-hover/status:-translate-y-0.5"
          />
        ) : null}
      </span>
    </span>
  );

  return (
    <article className="group/card flex min-h-87.5 flex-col rounded border border-zinc-200/80 bg-zinc-50/70 p-5 backdrop-blur transition-colors duration-300 hover:border-zinc-300 hover:bg-zinc-50/90 dark:border-zinc-800/80 dark:bg-zinc-950/20 dark:hover:border-zinc-700 dark:hover:bg-zinc-950/40">
      <div className="flex min-h-14 items-start justify-between gap-4">
        <h4 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          {project.name}
        </h4>

        {project.website ? (
          <Link
            href={project.website}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.name} ${content.online}`}
            className="group/status"
          >
            {statusBadge}
          </Link>
        ) : (
          statusBadge
        )}
      </div>

      <p className="text-body mt-4 min-h-24 text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>

      <ul className="mt-auto flex min-h-14 flex-wrap content-end items-end justify-start gap-1.5 overflow-hidden pt-4">
        {project.stack.slice(0, 6).map((tech) => (
          <li key={tech}>
            <span className="text-muted-foreground inline-flex shrink-0 items-center rounded border border-zinc-200/80 bg-zinc-50/80 px-2 py-0.5 text-[11px] font-medium whitespace-nowrap transition-colors duration-200 hover:border-zinc-400 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800/80 dark:bg-zinc-700/20 dark:hover:border-zinc-600 dark:hover:bg-zinc-800/60 dark:hover:text-zinc-100">
              {tech}
            </span>
          </li>
        ))}
        <li>
          <span className="inline-flex shrink-0 items-center rounded border border-zinc-300/80 bg-zinc-100/80 px-2 py-0.5 text-[11px] font-medium whitespace-nowrap text-zinc-700 transition-colors duration-200 hover:border-zinc-500 hover:bg-zinc-200/80 hover:text-zinc-950 dark:border-zinc-700/80 dark:bg-zinc-800/60 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50">
            {content.moreStack}
          </span>
        </li>
      </ul>

      <div className="mt-4 h-px w-full bg-zinc-200/80 dark:bg-zinc-800/80" />

      <div className="flex items-center justify-between gap-4 pt-4">
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
}
