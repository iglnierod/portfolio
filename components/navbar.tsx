import { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { ThemeToggle } from "./theme-toggle";

type NavBarProps = {
  content: Dictionary["navigation"];
  locale: Locale;
};

export function NavBar({ content, locale }: NavBarProps) {
  const otherLocale = locale === "es" ? "en" : "es";

  return (
    <header className="border-border bg-background/70 fixed top-4 left-1/2 z-50 flex w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 items-center justify-between rounded-lg border px-6 py-3 backdrop-blur-xl backdrop-saturate-150">
      <span className="text-foreground font-semibold">Rodrigo</span>
      <nav className="hidden items-center gap-6 sm:flex">
        <a
          href="#"
          className="text-muted-foreground hover:text-foreground text-sm transition-colors"
        >
          {content.links.home}
        </a>
        <a
          href="#"
          className="text-muted-foreground hover:text-foreground text-sm transition-colors"
        >
          {content.links.experience}
        </a>
        <a
          href="#"
          className="text-muted-foreground hover:text-foreground text-sm transition-colors"
        >
          {content.links.projects}
        </a>
        <a
          href="#"
          className="text-muted-foreground hover:text-foreground text-sm transition-colors"
        >
          {content.links.contact}
        </a>
      </nav>
      <div className="flex items-center gap-3">
        <a
          href="#"
          className="border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-full border px-4 py-1.5 text-sm transition-colors"
        >
          {content.resume}
        </a>
        <ThemeToggle />
        <a
          href={`/${otherLocale}`}
          className="bg-accent text-accent-foreground hover:bg-accent/80 rounded-full px-3 py-1.5 text-sm transition-colors"
          aria-label={content.languageLabel}
        >
          {otherLocale.toUpperCase()}
        </a>
      </div>
    </header>
  );
}
