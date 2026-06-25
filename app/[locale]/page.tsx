import { notFound } from "next/navigation";

import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/config";
import { Hero } from "@/components/sections/hero";
import { NavBar } from "@/components/sections/navbar";
import { AboutMe } from "@/components/sections/about-me";

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
    <main>
      <NavBar content={dictionary.navigation} locale={locale} />
      <Hero content={dictionary.hero} />
      <AboutMe content={dictionary.aboutMe} />
    </main>
  );
}
