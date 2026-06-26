import type { Dictionary } from "@/i18n/dictionaries";
import { Container } from "./container";
import { TimelineCard } from "./timeline-card";

type Props = {
  content: Dictionary["studies"];
};

export function Studies({ content }: Props) {
  return (
    <section id="studies">
      <Container className="group flex flex-col gap-8 py-12">
        <div>
          <h3 className="text-4xl font-bold">{content.title}</h3>
          <span className="mt-3 block h-0.5 w-16 rounded-full bg-zinc-800 transition-all duration-300 ease-out group-hover:w-24 group-hover:bg-zinc-900 dark:bg-zinc-50 dark:group-hover:bg-zinc-100" />
        </div>

        <div className="flex flex-col gap-4">
          {content.items.map((study) => (
            <TimelineCard
              key={`${study.institution}-${study.title}`}
              title={study.title}
              badge={study.institution}
              detail={`${study.location} / ${study.type}`}
              dates={`${study.startDate} - ${study.endDate}`}
              body={study.body}
              skills={study.skills}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
