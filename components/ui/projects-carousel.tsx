"use client";

import { ProjectCard } from "@/components/ui/project-card";
import type { Dictionary } from "@/i18n/dictionaries";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { CSSProperties } from "react";
import { useState } from "react";

const MAX_VISIBLE_PROJECTS = 3;

type Project = Dictionary["projects"]["items"][number];

type Props = {
  content: Dictionary["projects"];
};

export function ProjectsCarousel({ content }: Props) {
  const projects: readonly Project[] = content.items;
  const [trackIndex, setTrackIndex] = useState(MAX_VISIBLE_PROJECTS);
  const [isResetting, setIsResetting] = useState(false);

  if (projects.length === 0) {
    return null;
  }

  const hasControls = projects.length > MAX_VISIBLE_PROJECTS;

  if (!hasControls) {
    return (
      <div className="grid gap-4 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.github}
            project={project}
            content={content}
          />
        ))}
      </div>
    );
  }

  const loopedProjects = [
    ...projects.slice(-MAX_VISIBLE_PROJECTS),
    ...projects,
    ...projects.slice(0, MAX_VISIBLE_PROJECTS),
  ];
  const currentProjectIndex =
    (((trackIndex - MAX_VISIBLE_PROJECTS) % projects.length) +
      projects.length) %
    projects.length;
  const counter = (
    <span className="text-muted-foreground font-mono text-xs font-medium tabular-nums">
      {currentProjectIndex + 1} / {projects.length}
    </span>
  );

  function showPrevious() {
    setIsResetting(false);
    setTrackIndex((currentIndex) => currentIndex - 1);
  }

  function showNext() {
    setIsResetting(false);
    setTrackIndex((currentIndex) => currentIndex + 1);
  }

  function handleSlideEnd() {
    if (trackIndex >= projects.length + MAX_VISIBLE_PROJECTS) {
      setIsResetting(true);
      setTrackIndex(MAX_VISIBLE_PROJECTS);
      return;
    }

    if (trackIndex < MAX_VISIBLE_PROJECTS) {
      setIsResetting(true);
      setTrackIndex(projects.length + trackIndex);
    }
  }

  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 xl:grid-cols-[auto_minmax(0,1fr)_auto] xl:gap-4">
      <button
        type="button"
        aria-label={content.previousProject}
        onClick={showPrevious}
        className="text-muted-foreground group/previous order-2 inline-flex size-10 shrink-0 items-center justify-center justify-self-end rounded-full border border-zinc-200/80 bg-zinc-50/80 transition-colors duration-200 hover:cursor-pointer hover:border-zinc-400 hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 xl:order-1 dark:border-zinc-800/80 dark:bg-zinc-950/40 dark:hover:border-zinc-600 dark:hover:bg-zinc-900 dark:hover:text-zinc-50 dark:focus-visible:outline-zinc-50"
      >
        <ChevronLeft
          className="transition duration-300 ease-in-out group-hover/previous:-translate-x-0.5"
          aria-hidden="true"
          size={18}
        />
      </button>

      <div className="@container order-1 col-span-3 xl:order-2 xl:col-span-1">
        <div className="overflow-hidden">
          <div
            onTransitionEnd={handleSlideEnd}
            className={`grid auto-cols-(--project-card-width) grid-flow-col gap-4 [--project-card-width:100cqw] md:[--project-card-width:calc((100cqw-1rem)/2)] xl:[--project-card-width:calc((100cqw-2rem)/3)] ${
              isResetting
                ? ""
                : "motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out"
            }`}
            style={
              {
                "--project-carousel-index": trackIndex,
                transform:
                  "translateX(calc(var(--project-carousel-index) * (var(--project-card-width) + 1rem) * -1))",
              } as CSSProperties
            }
          >
            {loopedProjects.map((project, index) => (
              <ProjectCard
                key={`${project.github}-${index}`}
                project={project}
                content={content}
              />
            ))}
          </div>
        </div>

        <div className="mt-3 hidden justify-center xl:flex">{counter}</div>
      </div>

      <div className="order-3 justify-self-center xl:hidden">{counter}</div>

      <button
        type="button"
        aria-label={content.nextProject}
        onClick={showNext}
        className="text-muted-foreground group/next order-4 inline-flex size-10 shrink-0 items-center justify-center justify-self-start rounded-full border border-zinc-200/80 bg-zinc-50/80 transition-colors duration-200 hover:cursor-pointer hover:border-zinc-400 hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 xl:order-3 dark:border-zinc-800/80 dark:bg-zinc-950/40 dark:hover:border-zinc-600 dark:hover:bg-zinc-900 dark:hover:text-zinc-50 dark:focus-visible:outline-zinc-50"
      >
        <ChevronRight
          className="transition duration-300 ease-in-out group-hover/next:translate-x-0.5"
          aria-hidden="true"
          size={18}
        />
      </button>
    </div>
  );
}
