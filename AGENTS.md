# AGENTS.md

This file is the operating guide for AI agents working in this repository. It explains the current project, architecture, design rules, key behavior, important functions, and available agent skills from `.agents/skills`.

Use this as context before editing, but always inspect the source files you touch. The code is the final authority.

## Project Summary

This is a personal full-stack portfolio for Rodrigo Iglesias. It is built with Next.js App Router, React, TypeScript, and Tailwind CSS v4. The app is localized in Spanish and English, supports light and dark mode, and uses a refined developer-portfolio visual language: subtle, modern, technical, and polished.

Current site areas:

- Localized home page at `/es` and `/en`.
- Root and proxy redirects for locale selection.
- Floating glass navbar with localized links, resume link, language switch, and theme toggle.
- Hero section with dot matrix background, localized copy, and shimmer on the name only.
- About Me section in active development.
- Empty placeholders for future Experience, Studies, Projects, and Footer sections.

## Tech Stack

- Next.js `16.2.9`.
- React `19.2.4`.
- TypeScript with `strict` mode.
- Tailwind CSS v4 with CSS-first theme tokens.
- `lucide-react` for icons.
- `@teispace/next-themes` for no-flash class-based theme initialization and theme switching.
- Geist and Geist Mono through `next/font/google`.
- Prettier with `prettier-plugin-tailwindcss`.
- `pnpm` is the expected package manager.

## Commands

- `pnpm dev`: Start the local dev server.
- `pnpm lint`: Run ESLint.
- `pnpm build`: Build the app.
- `pnpm format`: Format the repository.
- `pnpm exec prettier --check AGENTS.md`: Check this guide only.

Run targeted checks after changes. For code edits, prefer at least `pnpm lint`. Run `pnpm build` when changing routing, layouts, metadata, client/server boundaries, Next config, or global styling.

## Repository Map

- `app/[locale]/layout.tsx`: Localized layout, metadata, font setup, `ThemeProvider`, locale validation.
- `app/[locale]/page.tsx`: Main localized home page composition.
- `app/(redirect)/page.tsx`: Redirects `/` to the default locale.
- `app/(redirect)/layout.tsx`: Minimal layout for the root redirect route group.
- `app/globals.css`: Tailwind import, dark variant, CSS theme variables, body dot background, shimmer CSS.
- `components/sections/navbar.tsx`: Floating navbar, localized nav, resume CTA, theme toggle, flag locale switch.
- `components/sections/hero.tsx`: Localized hero, hero CTAs, shimmer name.
- `components/sections/about-me.tsx`: About Me section currently being built.
- `components/sections/container.tsx`: Shared `max-w-6xl` content wrapper.
- `components/sections/experience.tsx`: Empty future section file.
- `components/sections/studies.tsx`: Empty future section file.
- `components/sections/projects.tsx`: Empty future section file.
- `components/sections/footer.tsx`: Empty future section file.
- `components/theme-provider.tsx`: `@teispace/next-themes` provider for pre-hydration theme initialization.
- `components/theme-toggle.tsx`: Client dark/light toggle.
- `components/shimmer-text.tsx`: Reusable shimmer text component.
- `i18n/config.ts`: Locale list, default locale, locale names, type guard.
- `i18n/dictionaries.ts`: Localized metadata, navigation, hero, and section text.
- `proxy.ts`: Next.js proxy for locale negotiation and redirects.
- `public/`: Resume PDFs and flag SVGs.
- `.agents/skills/`: Skill instructions that agents can load when relevant.

## Routing And i18n

The site is locale-prefixed. Supported locales live in `i18n/config.ts`:

- `es`: Spanish, default locale.
- `en`: English.

Root `/` redirects to `/${defaultLocale}` through `app/(redirect)/page.tsx`. `proxy.ts` also redirects paths without a locale prefix. Locale selection priority in `proxy.ts` is:

- Valid `NEXT_LOCALE` cookie.
- Matching `accept-language` header.
- `defaultLocale` fallback.

Locale route params use the async Next.js 15+ and 16 pattern:

```tsx
type HomeProps = {
  params: Promise<{
    locale: string;
  }>;
};
```

Always validate route params with `isLocale(locale)` before using dictionary data. Use `notFound()` for invalid locale segments in localized routes.

Visible copy should come from `i18n/dictionaries.ts`. When adding text, add keys to both dictionaries. Components should receive only the dictionary slice they need:

```tsx
<NavBar content={dictionary.navigation} locale={locale} />
<Hero content={dictionary.hero} />
<AboutMe content={dictionary.aboutMe} />
```

Use the exported `Dictionary` type for props:

```tsx
type Props = {
  content: Dictionary["aboutMe"];
};
```

## Theme System

The app uses class-based dark mode:

- `.dark` is applied to `<html>` by `@teispace/next-themes` through `attribute="class"`.
- Light variables are defined in `:root` in `app/globals.css`.
- Dark variables are defined under `.dark`.
- Tailwind v4 theme tokens are exposed with `@theme inline`.
- The dark variant is configured with `@variant dark (&:where(.dark, .dark *));`.
- `app/[locale]/layout.tsx` keeps `suppressHydrationWarning` on `<html>` because the theme provider mutates the root class before hydration.

Important theme tokens:

- `--background`
- `--foreground`
- `--card`
- `--card-foreground`
- `--muted`
- `--muted-foreground`
- `--border`
- `--accent`
- `--accent-foreground`
- `--shimmer-accent`
- `--dot`
- `--dot-secondary`

Design color rules:

- Light mode should be near-white, not yellow and not pure white.
- Dark mode should be charcoal, not pure black.
- Text should be off-black or off-white, not pure black or pure white unless needed for contrast.
- Prefer zinc neutrals and project variables over saturated colors.
- Prefer light-first Tailwind classes with `dark:` overrides.

Theme loading must not flash on first paint. The project uses `@teispace/next-themes` instead of a manual `useLayoutEffect`, custom event, or inline `next/script` bootstrap. Do not reintroduce `components/theme-init.tsx` or a manual script in the layout for theme loading.

Use `@teispace/next-themes`, not upstream `next-themes`. Upstream `next-themes@0.4.6` emits a React/Next.js 16 warning during client navigation because it renders a script tag inside a React component. The `@teispace/next-themes` fork fixes this by using server-inserted HTML for the anti-FOUC script.

`components/theme-provider.tsx` wraps localized page content with `ThemeProvider` from `@teispace/next-themes`. Current provider settings are `attribute="class"`, `defaultTheme="system"`, `enableSystem`, `enableColorScheme`, and `storage="hybrid"`.

`components/theme-toggle.tsx` uses `useTheme` from `@teispace/next-themes` to read `resolvedTheme` and call `setTheme`. It uses `useSyncExternalStore` for a hydration-safe mounted check because this repo's React lint rules reject synchronous `setState` inside an effect for mount flags.

## Design Guide

The visual direction is refined, technical, minimal, and intentional. Avoid generic AI landing-page patterns.

Core principles:

- Use subtle depth, fine borders, glass surfaces, neutral palettes, mono details, and restrained motion.
- Preserve the dot matrix background unless the user explicitly asks otherwise.
- Do not add a hero image background. One was tested and rejected.
- Avoid purple gradient cliches, heavy blobs, excessive shadows, and random decorative noise.
- Keep hover effects calm. Color changes are preferred over movement.
- Respect reduced motion for custom animations.

Layout width rules:

- Navbar uses `max-w-5xl`.
- Main content uses `max-w-6xl` through `Container`.
- Use `Container` for page sections unless a full-bleed layout is intentional.

Navbar rules:

- The navbar is fixed, centered, floating, and glass-like.
- It should remain slightly narrower than page content.
- Do not add shimmer to the logo.
- Do not use translate hover effects in navbar items.
- Locale switch should use `/es.svg` and `/gb.svg` via `next/image`.
- Flag image corners should remain squared-ish, currently `rounded-[3px]`.
- Resume opens in a new tab with `target="_blank"` and `rel="noreferrer"`.

Resume paths:

- Spanish: `/CV_Full-Stack_Rodrigo_Iglesias_Nieto.pdf`.
- English: `/EN_CV_Full-Stack_Rodrigo_Iglesias_Nieto.pdf`.

Hero rules:

- Use `min-h-[80svh]`, not full viewport height.
- Keep the dot matrix background visible.
- Use shimmer only on the hero name.
- Use localized hero copy from the dictionary.
- Keep CTAs simple and aligned with the design system.

About Me rules:

- The section is in progress and currently uses a title plus underline.
- Use a `group` parent when a child should react to hovering the whole section or container.
- Use `group-hover:w-*` for underline expansion.
- An empty `span` used as a line must be `block` or `inline-block`.
- Current underline pattern uses `w-16` by default and `group-hover:w-24` on hover.

Example pattern:

```tsx
<Container className="group flex flex-col gap-6 py-18">
  <div>
    <h3 className="text-4xl font-bold">{content.title}</h3>
    <span className="mt-3 block h-0.5 w-16 rounded-full bg-zinc-800 transition-all duration-300 ease-out group-hover:w-24 dark:bg-zinc-50" />
  </div>
</Container>
```

If the hover target must be the entire section, put `group` on `<section>` instead of `Container`.

## Tailwind And Formatting Rules

- Tailwind v4 is configured through CSS, not a traditional Tailwind config file.
- Let `prettier-plugin-tailwindcss` sort class names.
- Long class strings are acceptable. The user no longer wants helper abstractions only to wrap class names.
- Do not add a `cn()` helper unless there is a real composition need.
- Use responsive classes mobile-first.
- Prefer semantic project variables in CSS and zinc utilities in components.
- Keep comments rare and useful.

## Component And React Rules

- Default to Server Components unless browser APIs, state, effects, or event handlers are required.
- Use `"use client"` only at the smallest boundary needed.
- Keep components simple and explicit.
- Prefer direct props over global state.
- Use dictionary slices for localized components.
- Avoid boolean-prop proliferation as components grow. Prefer composition or explicit variants.
- Do not add manual `useMemo` or `useCallback` by default. Use them only for demonstrated need or existing project style.
- This project uses React 19. Prefer current React patterns when relevant.

## Key Functions And Files

`isLocale(locale: string): locale is Locale`

- File: `i18n/config.ts`.
- Guards arbitrary strings before treating them as supported locales.
- Use before dictionary lookup from route params or cookies.

`getDictionary(locale: Locale): Dictionary`

- File: `i18n/dictionaries.ts`.
- Returns the localized dictionary object.
- Requires a validated `Locale`.

`generateStaticParams()`

- File: `app/[locale]/layout.tsx`.
- Generates static locale params from `locales`.

`generateMetadata({ params })`

- File: `app/[locale]/layout.tsx`.
- Uses localized metadata from the dictionary.
- Defines alternate language URLs.

`LocaleLayout`

- File: `app/[locale]/layout.tsx`.
- Validates locale, sets `lang`, loads fonts, applies `suppressHydrationWarning`, and renders `ThemeProvider` around children.

`RootPage`

- File: `app/(redirect)/page.tsx`.
- Redirects `/` to the default locale.

`getPreferredLocale(request)`

- File: `proxy.ts`.
- Reads locale from cookie or request headers.
- Falls back to `defaultLocale`.

`proxy(request)`

- File: `proxy.ts`.
- Skips paths that already include a locale.
- Redirects other app paths to a localized path.
- Matcher excludes API, Next internals, favicon, and files with extensions.

`Container`

- File: `components/sections/container.tsx`.
- Shared content width: `mx-auto w-full max-w-6xl px-6`.
- Accepts optional `className`.

`NavBar`

- File: `components/sections/navbar.tsx`.
- Computes the alternate locale, flag source, resume href, and nav link list.
- Renders fixed glass navigation.

`Hero`

- File: `components/sections/hero.tsx`.
- Renders localized hero copy and uses `ShimmerText` for the name.

`AboutMe`

- File: `components/sections/about-me.tsx`.
- Renders the localized section title and hover-expanding underline.
- Uses a local `OPEN_TO_WORK` constant to choose the localized work-status badge copy.

`ThemeProvider`

- File: `components/theme-provider.tsx`.
- Wraps children with `@teispace/next-themes` using class-based theme initialization.
- Prevents first-load theme flash by letting `@teispace/next-themes` apply the stored or system theme before hydration.

`ThemeToggle`

- File: `components/theme-toggle.tsx`.
- Uses `useTheme` from `@teispace/next-themes` to toggle between light and dark.
- Renders Sun or Moon after mount to avoid hydration mismatch.
- Has an accessible name for the icon-only button.

`ShimmerText`

- File: `components/shimmer-text.tsx`.
- Accepts `text`, optional class name, duration, colors, band size, and `hoverOnly`.
- Uses CSS custom properties consumed by `.t-shimmer`.

## Public Assets

- `/es.svg`: Spanish flag for locale switch.
- `/gb.svg`: British flag for locale switch.
- `/CV_Full-Stack_Rodrigo_Iglesias_Nieto.pdf`: Spanish resume.
- `/EN_CV_Full-Stack_Rodrigo_Iglesias_Nieto.pdf`: English resume.

Reference public files with root-relative paths, for example `/es.svg`.

## Known Current State And Cautions

- `components/sections/experience.tsx`, `studies.tsx`, `projects.tsx`, and `footer.tsx` are empty placeholders.
- `components/sections/about-me.tsx` is actively being edited.
- Hero secondary CTA currently points to `/cv-rodrigo-iglesias-nieto.pdf`, which does not match the existing public PDF filenames. If editing hero CTAs, resolve this intentionally.
- Navbar nav link hrefs are currently placeholders (`#`) for sections not fully implemented.
- The old hero image background idea was rejected. Keep the dot matrix background.
- Shimmer was removed from the navbar logo because the user disliked it.

## Accessibility Baseline

- Use semantic landmarks: `header`, `nav`, `main`, `section`, `footer`.
- Icon-only buttons need accessible names.
- Decorative images should use empty `alt`.
- Locale flag images are decorative inside a link with an accessible label.
- Keep color contrast strong in both themes.
- Ensure keyboard focus states are visible when adding interactive elements.
- Respect `prefers-reduced-motion` for nonessential motion.

## SEO Baseline

- Localized metadata comes from `generateMetadata` in `app/[locale]/layout.tsx`.
- Keep title and description localized.
- Keep `alternates.languages` updated when adding locales.
- Add structured data only when there is real content to describe.
- Future project sections should use meaningful headings and link text.

## Available Agent Skills

The repository includes local skills under `.agents/skills`. Load the relevant skill before doing specialized work.

### `accessibility`

Use for accessibility audits or improvements, WCAG 2.2 compliance, screen reader support, keyboard navigation, focus management, alt text, semantic HTML, and contrast work.

### `frontend-design`

Use for building or improving UI, pages, sections, components, and visual design. It emphasizes distinctive, production-grade design and avoiding generic AI aesthetics. This is especially relevant for hero, About Me, projects, cards, and page polish.

### `next-best-practices`

Use for Next.js App Router work, file conventions, route params, metadata, RSC/client boundaries, route handlers, async APIs, image/font optimization, and framework-specific patterns.

### `next-cache-components`

Use only when working with Next.js 16 Cache Components, `use cache`, `cacheLife`, `cacheTag`, `updateTag`, or Partial Prerendering. This project does not currently enable Cache Components.

### `next-upgrade`

Use when upgrading Next.js or React dependencies. Follow official migration guides and codemods before manual changes.

### `seo`

Use for metadata, structured data, robots, sitemap, search optimization, canonical URLs, and technical SEO work.

### `tailwind-css-patterns`

Use when styling components, building responsive layouts, adding dark mode classes, refining utility composition, or creating design-system-like patterns with Tailwind CSS.

### `typescript-advanced-types`

Use when adding complex generic types, conditional types, mapped types, template literal types, type-safe configuration, or reusable type utilities. Most current portfolio work does not need advanced types.

### `vercel-composition-patterns`

Stored at `.agents/skills/composition-patterns`. Use when refactoring component APIs, avoiding boolean prop proliferation, designing compound components, or building reusable component architecture.

### `vercel-react-best-practices`

Stored at `.agents/skills/react-best-practices`. Use when writing, reviewing, or refactoring React and Next.js code with performance concerns, RSC serialization, bundle size, waterfalls, re-render behavior, or React 19 APIs.

### `nodejs-backend-patterns`

Use when adding backend services, REST APIs, GraphQL, authentication, middleware, database integration, background jobs, or WebSocket services. The current repo is mostly frontend portfolio work, so this is not usually needed.

### `nodejs-best-practices`

Use for Node.js architecture decisions, framework selection, async patterns, security, deployment, and backend decision-making. Ask for user preferences when the context is unclear.

## Working Style For Future Agents

- Inspect the codebase before making assumptions.
- Keep changes minimal and correct.
- Preserve user-made changes in a dirty worktree.
- Do not revert files unless explicitly asked.
- Prefer editing existing patterns over introducing new abstractions.
- Ask one short question when a real product decision is ambiguous.
- Implement end-to-end when the user asks for a change: edit, verify, and summarize.
- For reviews, prioritize bugs, regressions, risks, and missing tests.

## Before Adding A New Section

When implementing Experience, Studies, Projects, Contact, or Footer:

- Add localized dictionary keys first.
- Use `Container` for alignment.
- Keep section headings visually related to About Me.
- Add real `id` attributes that match navbar anchors.
- Use subtle interaction states.
- Make the section responsive from mobile upward.
- Check accessibility and keyboard behavior for interactive cards or links.
- Run lint and build when routes, metadata, or client boundaries change.

## Current User Preferences Captured From Conversation

- Keep the dot background.
- Do not use a hero image background.
- Keep hero height around `80svh`, not full screen.
- Keep shimmer only on the hero name.
- Do not shimmer the navbar logo.
- Keep navbar hover effects subtle and color-based.
- Navbar should be centered, floating, glass-like, and `max-w-5xl`.
- Main content should be slightly wider than the navbar, `max-w-6xl`.
- Light mode should be near-white, not yellow and not pure white.
- Text should avoid pure black and pure white.
- Locale switch should use SVG flags with squared-ish rounded corners.
- Long Tailwind class strings are acceptable.
