"use client";

import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

type NavBarProps = {
  content: Dictionary["navigation"];
  locale: Locale;
};

export function NavBar({ content, locale }: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const otherLocale = locale === "es" ? "en" : "es";
  const localeFlagSrc = otherLocale === "es" ? "/es.svg" : "/gb.svg";
  const resumeHref =
    locale === "es"
      ? "/CV_Full-Stack_Rodrigo_Iglesias_Nieto.pdf"
      : "/EN_CV_Full-Stack_Rodrigo_Iglesias_Nieto.pdf";
  const navLinks = [
    { href: "#about", label: content.links.about },
    { href: "#stack", label: content.links.techSkills },
    { href: "#experience", label: content.links.experience },
    { href: "#studies", label: content.links.studies },
    { href: "#projects", label: content.links.projects },
    { href: "#contact", label: content.links.contact },
  ];

  return (
    <header className="fixed top-4 left-1/2 z-50 w-[calc(100%-1rem)] max-w-5xl -translate-x-1/2 rounded-lg border border-zinc-200 bg-white/75 p-3 backdrop-blur-xl backdrop-saturate-150 sm:w-[calc(100%-2rem)] sm:px-4 dark:border-zinc-800 dark:bg-zinc-950/70">
      <div className="relative flex w-full items-center justify-between gap-3">
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            aria-label={
              isMenuOpen ? content.closeMenuLabel : content.openMenuLabel
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex size-9 items-center justify-center rounded-full text-zinc-500 transition-colors duration-200 ease-out hover:cursor-pointer hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500 lg:hidden dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100 dark:focus-visible:outline-zinc-400"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
          <Link
            href={`/${locale}`}
            className="font-semibold text-zinc-950 transition-colors duration-200 ease-out hover:text-zinc-700 dark:text-zinc-50 dark:hover:text-zinc-300"
          >
            Rodrigo Iglesias
          </Link>
        </div>
        <nav
          aria-label={content.menuLabel}
          className="hidden items-center gap-5 lg:flex"
        >
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
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          <Link
            href={resumeHref}
            target="_blank"
            rel="noreferrer"
            aria-label={content.resume}
            className="inline-flex items-center gap-0.5 rounded-full bg-zinc-950 px-2.5 py-1.5 text-sm font-medium text-white shadow-sm transition-colors duration-200 ease-out hover:bg-zinc-800 sm:px-4 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            <span className="sm:hidden">{content.resumeShort}</span>
            <span className="hidden sm:inline">{content.resume}</span>
            <ArrowUpRight size={16} />
          </Link>
          <div className="hidden h-5 w-px bg-zinc-300/80 sm:block dark:bg-zinc-700/80" />
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
        {isMenuOpen ? (
          <nav
            id="mobile-navigation"
            aria-label={content.menuLabel}
            className="absolute top-full left-0 mt-3 w-[calc(100vw-2rem)] max-w-80 overflow-hidden rounded-xl border border-zinc-200 bg-white/95 p-2 shadow-lg shadow-zinc-950/10 backdrop-blur-xl lg:hidden dark:border-zinc-800 dark:bg-zinc-950/95 dark:shadow-black/30"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition-colors duration-200 ease-out hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-zinc-50 dark:focus-visible:outline-zinc-400"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  );
}
