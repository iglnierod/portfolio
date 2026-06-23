import { notFound } from "next/navigation";

import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/config";

type HomeProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);

  return (
    <main className="flex flex-1 flex-col bg-zinc-50 px-6 pb-20 pt-10 text-zinc-950 dark:bg-black dark:text-zinc-50 sm:px-10">
      <section className="mx-auto grid w-full max-w-5xl flex-1 items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
              {dictionary.hero.eyebrow}
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
              {dictionary.hero.title}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
              {dictionary.hero.description}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="rounded-full bg-zinc-950 px-6 py-3 text-center font-medium text-white transition hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              {dictionary.hero.primaryCta}
            </a>
            <a
              href="mailto:hello@example.com"
              className="rounded-full border border-zinc-300 px-6 py-3 text-center font-medium transition hover:border-zinc-950 dark:border-zinc-700 dark:hover:border-zinc-50"
            >
              {dictionary.hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="grid gap-4" id="projects">
          <article className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="text-xl font-semibold">{dictionary.sections.stackTitle}</h2>
            <p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-300">
              {dictionary.sections.stackDescription}
            </p>
          </article>
          <article className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="text-xl font-semibold">{dictionary.sections.workTitle}</h2>
            <p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-300">
              {dictionary.sections.workDescription}
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
