"use client";

import { ProjectCard } from "@/components/ui/project-card";
import type { Dictionary } from "@/i18n/dictionaries";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { CSSProperties } from "react";
import { useState } from "react";

const VISIBLE_PROJECTS = 3;

type Project = Dictionary["projects"]["items"][number];

type Props = {
  content: Dictionary["projects"];
};

export function ProjectsCarousel({ content }: Props) {
  const projects: readonly Project[] = content.items;
  const [trackIndex, setTrackIndex] = useState(VISIBLE_PROJECTS);
  const [isResetting, setIsResetting] = useState(false);

  if (projects.length === 0) {
    return null;
  }

  const hasControls = projects.length > VISIBLE_PROJECTS;

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
    ...projects.slice(-VISIBLE_PROJECTS),
    ...projects,
    ...projects.slice(0, VISIBLE_PROJECTS),
  ];

  function showPrevious() {
    setIsResetting(false);
    setTrackIndex((currentIndex) => currentIndex - 1);
  }

  function showNext() {
    setIsResetting(false);
    setTrackIndex((currentIndex) => currentIndex + 1);
  }

  function handleSlideEnd() {
    if (trackIndex >= projects.length + VISIBLE_PROJECTS) {
      setIsResetting(true);
      setTrackIndex(VISIBLE_PROJECTS);
      return;
    }

    if (trackIndex < VISIBLE_PROJECTS) {
      setIsResetting(true);
      setTrackIndex(projects.length + trackIndex);
    }
  }

  return (
    <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 md:gap-4">
      <button
        type="button"
        aria-label={content.previousProject}
        onClick={showPrevious}
        className="text-muted-foreground group/previous inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-zinc-200/80 bg-zinc-50/80 transition-colors duration-200 hover:cursor-pointer hover:border-zinc-400 hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:border-zinc-800/80 dark:bg-zinc-950/40 dark:hover:border-zinc-600 dark:hover:bg-zinc-900 dark:hover:text-zinc-50 dark:focus-visible:outline-zinc-50"
      >
        <ChevronLeft
          className="transition duration-300 ease-in-out group-hover/previous:-translate-x-0.5"
          aria-hidden="true"
          size={18}
        />
      </button>

      <div className="@container overflow-hidden">
        <div
          onTransitionEnd={handleSlideEnd}
          className={`grid auto-cols-[calc((100cqw-2rem)/3)] grid-flow-col gap-4 ${
            isResetting
              ? ""
              : "motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out"
          }`}
          style={
            {
              "--project-carousel-index": trackIndex,
              transform:
                "translateX(calc(var(--project-carousel-index) * (((100cqw - 2rem) / 3) + 1rem) * -1))",
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

      <button
        type="button"
        aria-label={content.nextProject}
        onClick={showNext}
        className="text-muted-foreground group/next inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-zinc-200/80 bg-zinc-50/80 transition-colors duration-200 hover:cursor-pointer hover:border-zinc-400 hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:border-zinc-800/80 dark:bg-zinc-950/40 dark:hover:border-zinc-600 dark:hover:bg-zinc-900 dark:hover:text-zinc-50 dark:focus-visible:outline-zinc-50"
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
