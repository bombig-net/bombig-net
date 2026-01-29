# bombig-net

Bombig is the bilingual (DE/EN) marketing site for a modern digital agency. It is a Nuxt 4, content-driven frontend focused on SEO, accessibility, and a high-design presentation.

## Stack

- Nuxt 4 + Vue 3 (Composition API)
- TypeScript (strict)
- Tailwind CSS
- @nuxt/content for file-based content
- @nuxtjs/i18n for localization
- @nuxtjs/seo and a custom sitemap route

## Key Features

- Bilingual routing with locale prefixes (`/de`, `/en`)
- File-based content for blog and case studies
- Prerendered static routes for marketing pages
- Contact form backed by Resend API
- Custom sitemap at `/sitemap.xml`

## Local Development

1. Install dependencies

```bash
npm install
```

2. Configure environment variables

```bash
cp .env.example .env
```

3. Start the dev server

```bash
npm run dev
```

The site runs at `http://localhost:3000`.

## Environment Variables

The contact form posts to `server/api/contact.post.ts` and requires Resend:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`

If these are missing, the contact endpoint returns 500.

## Scripts

- `npm run dev` - start dev server
- `npm run build` - production build
- `npm run preview` - preview production build
- `npm run generate` - static generation
- `npm run lint` - lint
- `npm run typecheck` - TypeScript checks

## Content Authoring

Content lives under `content/`:

- `content/en/blog/*.md`
- `content/en/case-studies/*.md`
- `content/de/blog/*.md`
- `content/de/case-studies/*.md`

New markdown files are automatically picked up by Nuxt Content and included in the sitemap and prerender routes.

## Configuration Notes

- Update `nuxt.config.ts` when changing the production domain (`site.url` and `runtimeConfig.public.siteUrl`).
- i18n settings live in `nuxt.config.ts` and `i18n.config.ts`.

## Governance and Workflow

The project uses explicit governance rules for constraints, design, and product scope:

- `AGENTS.md` defines the agent workflow.
- `governance/CONSTRAINTS.md`, `governance/DESIGN.md`, `governance/PRODUCT.md` define non-negotiables.
- `opencode.json` ensures these rules are loaded automatically.

Follow these rules for any changes to the codebase.
