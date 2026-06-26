import type { ReactNode } from "react";

import type { Dictionary } from "@/i18n/dictionaries";
import { Container } from "./container";
import Image from "next/image";
import Link from "next/link";

type Props = {
  content: Dictionary["aboutMe"];
};

type StrengthBadgeProps = {
  children: ReactNode;
};

type WorkStatusBadgeProps = {
  isOpen: boolean;
  label: string;
};

export function StrengthBadge({ children }: StrengthBadgeProps) {
  return (
    <span className="text-muted-foreground rounded-[5px] border border-zinc-300 bg-zinc-100 px-2.5 py-1 text-sm font-medium transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-zinc-500 hover:text-zinc-900 motion-reduce:hover:translate-y-0 dark:border-zinc-700 dark:bg-zinc-900/80 dark:hover:border-zinc-400 dark:hover:text-zinc-100">
      {children}
    </span>
  );
}

function WorkStatusBadge({ isOpen, label }: WorkStatusBadgeProps) {
  return (
    <Link
      href={"https://www.linkedin.com/in/rodrigo-iglesias-nieto/"}
      target="_blank"
      className={
        isOpen
          ? "flex w-fit items-center gap-2 rounded-[5px] border border-green-700/25 bg-green-700/8 px-2.5 py-1 text-sm font-medium text-green-700 transition-all duration-200 ease-out hover:-translate-y-0.5 dark:border-green-400/25 dark:bg-green-400/10 dark:text-green-300"
          : "text-muted-foreground flex w-fit items-center gap-2 rounded-[5px] border border-zinc-300 bg-zinc-100 px-2.5 py-1 text-sm font-medium transition-all duration-200 ease-out hover:-translate-y-0.5 dark:border-zinc-700 dark:bg-zinc-900/80"
      }
    >
      <span
        className={
          isOpen
            ? "h-1.5 w-1.5 rounded-full bg-current"
            : "h-1.5 w-1.5 rounded-full border border-current"
        }
      />
      <span>{label}</span>
    </Link>
  );
}

export function AboutMe({ content }: Props) {
  const OPEN_TO_WORK = true;
  const workStatusLabel = OPEN_TO_WORK
    ? content.openToWork
    : content.notOpenToWork;

  return (
    <section id="about">
      <Container className="group flex flex-col gap-8 py-12">
        <div>
          <h3 className="text-4xl font-bold">{content.title}</h3>
          <span className="mt-3 block h-0.5 w-16 rounded-full bg-zinc-800 transition-all duration-300 ease-out group-hover:w-24 group-hover:bg-zinc-900 dark:bg-zinc-50 dark:group-hover:bg-zinc-100" />
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-x-14 lg:gap-y-5">
          <div className="lg:col-start-1 lg:row-start-1">
            <WorkStatusBadge isOpen={OPEN_TO_WORK} label={workStatusLabel} />
          </div>

          <div className="flex flex-col gap-6 lg:col-start-1 lg:row-start-2">
            <div className="flex max-w-3xl flex-col gap-4 text-base leading-8 text-zinc-700 dark:text-zinc-300">
              {content.paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={
                    index === 0
                      ? "text-muted-foreground"
                      : "text-zinc-700 dark:text-zinc-300"
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="text-muted-foreground flex max-w-3xl flex-col gap-2.5">
              <h4 className="text-muted-foreground font-mono font-semibold uppercase">
                {content.strengthsTitle}
              </h4>
              <div className="flex flex-wrap gap-2">
                {content.strengths.map((strength) => (
                  <StrengthBadge key={strength}>{strength}</StrengthBadge>
                ))}
              </div>
            </div>
          </div>

          <div className="group/image border-border relative overflow-hidden rounded-md border shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-zinc-900/10 lg:col-start-2 lg:row-start-2 lg:self-center lg:justify-self-end dark:hover:shadow-black/30">
            <Image
              src={"/rodri_tiger_crop.webp"}
              alt={content.imageAlt}
              width={420}
              height={420}
              sizes="(min-width: 1024px) 360px, 100vw"
              className="aspect-square w-full object-cover grayscale-10 transition-transform duration-300 ease-out group-hover/image:scale-[1.018] motion-reduce:transition-none motion-reduce:group-hover/image:scale-100 lg:w-85"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
