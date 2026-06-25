import { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "../theme-toggle";
import { ArrowUpRight } from "lucide-react";

type NavBarProps = {
  content: Dictionary["navigation"];
  locale: Locale;
};

export function NavBar({ content, locale }: NavBarProps) {
  const otherLocale = locale === "es" ? "en" : "es";
  const localeFlagSrc = otherLocale === "es" ? "/es.svg" : "/gb.svg";
  const resumeHref =
    locale === "es"
      ? "/CV_Full-Stack_Rodrigo_Iglesias_Nieto.pdf"
      : "/EN_CV_Full-Stack_Rodrigo_Iglesias_Nieto.pdf";
  const navLinks = [
    { href: "#about", label: content.links.about },
    { href: "#", label: content.links.experience },
    { href: "#", label: content.links.projects },
    { href: "#", label: content.links.contact },
  ];

  return (
    <header className="fixed top-4 left-1/2 z-50 flex w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 items-center justify-between rounded-lg border border-zinc-200 bg-white/75 px-4 py-3 backdrop-blur-xl backdrop-saturate-150 sm:px-6 dark:border-zinc-800 dark:bg-zinc-950/70">
      <Link
        href="/"
        className="font-semibold text-zinc-950 transition-colors duration-200 ease-out hover:text-zinc-700 dark:text-zinc-50 dark:hover:text-zinc-300"
      >
        <span className="sm:hidden">Rodrigo</span>
        <span className="hidden sm:inline">Rodrigo Iglesias</span>
      </Link>
      <nav className="hidden items-center gap-6 sm:flex">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-sm text-zinc-500 transition-colors duration-200 ease-out hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-2 sm:gap-3">
        <Link
          href={resumeHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-0.5 rounded-full bg-zinc-950 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-colors duration-200 ease-out hover:bg-zinc-800 sm:px-4 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
        >
          {content.resume}
          <ArrowUpRight size={16} />
        </Link>
        <div className="h-5 w-px bg-zinc-300/80 dark:bg-zinc-700/80" />
        <ThemeToggle />
        <Link
          href={`/${otherLocale}`}
          className="rounded-md bg-zinc-100 p-1.5 transition-colors duration-200 ease-out hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800"
          aria-label={content.languageLabel}
          title={content.languageTitle}
        >
          <Image
            src={localeFlagSrc}
            alt=""
            width={22}
            height={22}
            className="h-5.5 w-5.5 rounded-[3px] object-cover"
          />
        </Link>
      </div>
    </header>
  );
}
