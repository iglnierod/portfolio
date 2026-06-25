import { Dictionary } from "@/i18n/dictionaries";
import { ShimmerText } from "./shimmer-text";

type HeroProps = {
  content: Dictionary["hero"];
};

export function Hero({ content }: HeroProps) {
  return (
    <>
      <section className="relative flex min-h-[80svh] items-center justify-center pt-24 pb-12">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-6 text-sm text-zinc-600 italic md:text-base dark:text-zinc-400">
            &quot;{content.quote}&quot;
          </p>

          <h1 className="mb-4 text-5xl font-bold tracking-tight text-zinc-950 md:text-7xl dark:text-zinc-50">
            {content.intro}{" "}
            <ShimmerText text={content.name} className="hero-name-shimmer" />
          </h1>

          <h2 className="mb-5 font-mono text-xl tracking-widest text-zinc-600 md:text-2xl dark:text-zinc-400">
            {content.role}
          </h2>

          <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-zinc-700 md:text-lg dark:text-zinc-400">
            {content.description}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#projects"
              className="rounded-sm bg-zinc-950 px-7 py-3 font-semibold text-white shadow-sm transition-colors duration-200 ease-out hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              {content.primaryCta}
            </a>

            <a
              href="/cv-rodrigo-iglesias-nieto.pdf"
              download
              className="rounded-sm border border-zinc-300 px-7 py-3 font-semibold text-zinc-800 transition-colors duration-200 ease-out hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900"
            >
              {content.secondaryCta}
            </a>
          </div>
        </div>
      </section>

      <div aria-hidden className="h-[24svh]" />
    </>
  );
}
