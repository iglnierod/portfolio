import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";

import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, localeNames, locales } from "@/i18n/config";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type LocaleParams = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const dictionary = getDictionary(locale);

  return {
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
    alternates: {
      languages: Object.fromEntries(locales.map((locale) => [locale, `/${locale}`])),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
}> &
  LocaleParams) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="mx-auto flex w-full max-w-5xl justify-end px-6 py-6 sm:px-10">
          <nav aria-label={getDictionary(locale).navigation.languageLabel} className="flex gap-2">
            {locales.map((availableLocale) => (
              <a
                key={availableLocale}
                href={`/${availableLocale}`}
                hrefLang={availableLocale}
                aria-current={availableLocale === locale ? "page" : undefined}
                className="rounded-full border border-zinc-200 px-3 py-1 text-sm font-medium text-zinc-700 transition hover:border-zinc-950 hover:text-zinc-950 aria-current:border-zinc-950 aria-current:bg-zinc-950 aria-current:text-white dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-50 dark:hover:text-zinc-50 dark:aria-current:border-zinc-50 dark:aria-current:bg-zinc-50 dark:aria-current:text-zinc-950"
              >
                {localeNames[availableLocale]}
              </a>
            ))}
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
