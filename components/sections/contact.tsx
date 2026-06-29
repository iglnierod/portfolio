import { Dictionary } from "@/i18n/dictionaries";
import { Container } from "../ui/container";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

type Props = {
  content: Dictionary["contact"];
};

export function Contact({ content }: Props) {
  return (
    <section
      id="contact"
      className="mt-20 border-t border-zinc-200 bg-white/75 backdrop-blur-xl backdrop-saturate-150 dark:border-zinc-800 dark:bg-zinc-950/70"
    >
      <Container className="flex min-h-96 flex-col items-center justify-center gap-8 py-20 text-center">
        <div className="mx-auto max-w-3xl space-y-5">
          <h2
            id="contact-title"
            className="text-4xl leading-tight font-bold tracking-tight text-balance text-zinc-950 sm:text-5xl md:text-6xl dark:text-zinc-50"
          >
            {content.title}
          </h2>
          <p className="mx-auto max-w-xl text-base leading-7 text-zinc-500 sm:text-lg dark:text-zinc-400">
            {content.description}
          </p>
        </div>

        <div className="flex flex-col items-center gap-5">
          <Link
            href="mailto:iglnierod@gmail.com"
            className="group/mail inline-flex items-center gap-3.5 rounded-full bg-zinc-950 px-8 py-4 text-lg font-semibold text-white shadow-sm transition duration-300 ease-out hover:bg-zinc-800 hover:shadow-lg hover:shadow-zinc-950/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500 motion-reduce:transition-none dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200 dark:hover:shadow-black/20 dark:focus-visible:outline-zinc-400"
          >
            {content.email}
            <ArrowRight
              size={20}
              aria-hidden="true"
              className="transition-transform duration-300 ease-out group-hover/mail:translate-x-1.5 motion-reduce:transition-none motion-reduce:group-hover/mail:translate-x-0"
            />
          </Link>
          <p className="text-zinc-500 dark:text-zinc-400">
            {content.linkedInPrefix}{" "}
            <Link
              href="https://linkedin.com/in/rodrigo-iglesias-nieto"
              target="_blank"
              rel="noreferrer"
              className="group/linkedin text-muted-foreground inline-flex items-center gap-1 border-b border-zinc-300 pb-0.5 text-sm font-medium transition-colors duration-200 hover:border-zinc-900 hover:text-zinc-900 dark:border-zinc-700 dark:hover:border-zinc-50 dark:hover:text-zinc-50"
            >
              {content.linkedInLabel}
              <ArrowUpRight
                aria-hidden="true"
                size={16}
                className="transition-transform duration-200 group-hover/linkedin:translate-x-0.5 group-hover/linkedin:-translate-y-0.5"
              />
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
