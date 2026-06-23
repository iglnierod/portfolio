# Portfolio

Portfolio web full stack creado con Next.js, React, TypeScript y Tailwind CSS.

## Desarrollo

```bash
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000). La app redirige al idioma preferido del navegador o a `/es` por defecto.

## i18n

Idiomas soportados:

- Español: `/es`
- English: `/en`

La configuración de idiomas está en `i18n/config.ts` y los textos traducidos en `i18n/dictionaries.ts`.

Para añadir contenido nuevo, agrega las claves en ambos diccionarios y consume los textos desde las páginas bajo `app/[locale]/`.

## Scripts

```bash
pnpm lint
pnpm build
```
