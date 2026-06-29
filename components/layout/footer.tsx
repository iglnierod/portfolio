import type { Dictionary } from "@/i18n/dictionaries";
import { Container } from "@/components/ui/container";
import Link from "next/link";

type FooterProps = {
  content: Dictionary["footer"];
};

function FooterIcon({ src }: { src: string }) {
  return (
    <span
      aria-hidden="true"
      className="size-5 shrink-0 bg-current"
      style={{
        mask: `url(${src}) center / contain no-repeat`,
        WebkitMask: `url(${src}) center / contain no-repeat`,
      }}
    />
  );
}

export function Footer({ content }: FooterProps) {
  const year = new Date().getFullYear();
  const links = [
    {
      href: "mailto:iglnierod@gmail.com",
      label: content.links.email,
      icon: "/envelope.svg",
    },
    {
      href: "https://github.com/iglnierod",
      label: content.links.github,
      icon: "/github.svg",
    },
    {
      href: "https://linkedin.com/in/rodrigo-iglesias-nieto",
      label: content.links.linkedin,
      icon: "/linkedin.svg",
    },
  ];

  return (
    <footer className="border-t border-zinc-200 bg-white/75 backdrop-blur-xl backdrop-saturate-150 dark:border-zinc-800 dark:bg-zinc-950/70">
      <Container className="flex min-h-48 flex-col justify-center gap-8 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
            Rodrigo Iglesias
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            © {year} Rodrigo Iglesias. {content.copyright}
          </p>
        </div>

        <nav aria-label={content.linksLabel} className="flex flex-wrap gap-4">
          {links.map((link) => {
            const isExternal = link.href.startsWith("https://");

            return (
              <Link
                key={link.href}
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                aria-label={link.label}
                className="inline-flex size-10 items-center justify-center rounded-full text-zinc-500 transition-colors duration-200 ease-out hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500 dark:text-zinc-400 dark:hover:text-zinc-50 dark:focus-visible:outline-zinc-400"
              >
                <FooterIcon src={link.icon} />
              </Link>
            );
          })}
        </nav>
      </Container>
    </footer>
  );
}
