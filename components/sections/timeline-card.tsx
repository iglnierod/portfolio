type TimelineCardProps = {
  title: string;
  badge: string;
  detail: string;
  dates: string;
  body: readonly string[];
  skills?: readonly string[];
};

export function TimelineCard({
  title,
  badge,
  detail,
  dates,
  body,
  skills,
}: TimelineCardProps) {
  return (
    <article className="group/card rounded border border-zinc-200/80 bg-zinc-50/70 p-5 backdrop-blur transition-colors duration-300 hover:border-zinc-300 hover:bg-zinc-50/90 dark:border-zinc-800/80 dark:bg-zinc-950/20 dark:hover:border-zinc-700 dark:hover:bg-zinc-950/40">
      <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto]">
        <div className="order-2 flex min-w-0 items-center sm:order-1">
          <h4 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            {title}
          </h4>
        </div>

        <div className="order-1 flex items-center sm:order-2 sm:justify-self-end">
          <span className="text-body text-muted-foreground inline-flex items-center rounded border border-zinc-200/80 bg-zinc-50/80 px-3 py-2 font-medium transition-colors duration-200 hover:border-zinc-400 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800/80 dark:bg-zinc-700/20 dark:hover:border-zinc-600 dark:hover:bg-zinc-800/60 dark:hover:text-zinc-100">
            {badge}
          </span>
        </div>

        <p className="text-body order-3 flex min-w-0 items-center self-center text-zinc-600 dark:text-zinc-400">
          <span>{detail}</span>
        </p>

        <p className="text-body order-4 self-center text-zinc-600 sm:justify-self-end dark:text-zinc-400">
          {dates}
        </p>
      </div>

      <ul className="text-body mt-6 list-inside list-disc space-y-2 leading-6 text-zinc-800 marker:text-zinc-400 dark:text-zinc-200 dark:marker:text-zinc-600">
        {body.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {skills && skills.length > 0 ? (
        <ul className="mt-6 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li key={skill}>
              <span className="text-muted-foreground inline-flex items-center rounded border border-zinc-200/80 bg-zinc-50/80 px-2.5 py-1 text-[12px] font-medium transition-colors duration-200 hover:border-zinc-400 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800/80 dark:bg-zinc-700/20 dark:hover:border-zinc-600 dark:hover:bg-zinc-800/60 dark:hover:text-zinc-100">
                {skill}
              </span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
