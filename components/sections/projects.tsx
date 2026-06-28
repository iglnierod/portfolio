import type { Dictionary } from "@/i18n/dictionaries";
import { Container } from "@/components/sections/container";
import { ProjectsCarousel } from "@/components/ui/projects-carousel";

type Props = {
  content: Dictionary["projects"];
};

export function Projects({ content }: Props) {
  return (
    <section id="projects">
      <Container className="group flex flex-col gap-8 py-12">
        <div>
          <h3 className="text-4xl font-bold">{content.title}</h3>
          <span className="mt-3 block h-0.5 w-16 rounded-full bg-zinc-800 transition-all duration-300 ease-out group-hover:w-24 group-hover:bg-zinc-900 dark:bg-zinc-50 dark:group-hover:bg-zinc-100" />
        </div>

        <ProjectsCarousel content={content} />
      </Container>
    </section>
  );
}
