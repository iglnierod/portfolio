import { notFound } from "next/navigation";

import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/config";
import { Hero } from "@/components/hero";
import { NavBar } from "@/components/navbar";

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
    </main>
  );
}
