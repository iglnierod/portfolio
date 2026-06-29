import { notFound } from "next/navigation";

import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/config";
import { Hero } from "@/components/sections/hero";
import { NavBar } from "@/components/layout/navbar";
import { AboutMe } from "@/components/sections/about-me";
import { TechSkills } from "@/components/sections/tech-skills";
import { Experience } from "@/components/sections/experience";
import { Studies } from "@/components/sections/studies";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";

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
      <TechSkills content={dictionary.stack} />
      <Projects content={dictionary.projects} />
      <Experience content={dictionary.experience} />
      <Studies content={dictionary.studies} />
      <Contact content={dictionary.contact} />
      <Footer content={dictionary.footer} />
    </main>
  );
}
