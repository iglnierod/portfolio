import { Dictionary } from "@/i18n/dictionaries";

type HeroProps = {
  content: Dictionary["hero"];
};

export function Hero({ content }: HeroProps) {
  return (
    <section className="relative flex min-h-screen items-center justify-center">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <p className="text-muted-foreground mb-4 text-sm tracking-[0.2em] uppercase md:text-base">
          {content.eyebrow}
        </p>
        <h1 className="text-foreground mb-6 text-4xl leading-tight font-bold sm:text-5xl md:text-7xl">
          {content.title}
        </h1>
        <p className="text-muted-foreground mx-auto mb-10 max-w-2xl text-base md:text-lg">
          {content.description}
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="bg-foreground text-background hover:bg-foreground/90 inline-flex items-center justify-center rounded-full px-8 py-3 font-medium transition-colors"
          >
            {content.primaryCta}
          </a>
          <a
            href="#contact"
            className="border-border text-foreground hover:bg-accent inline-flex items-center justify-center rounded-full border px-8 py-3 font-medium transition-colors"
          >
            {content.secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}
