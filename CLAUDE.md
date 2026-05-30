# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Associated Projects

| Role | Path |
|------|------|
| Web (this project) | `/Users/manu/_CODE/MINISWIMMER.us/_CODE/miniswimmer-cl-public-site` |
| Backend | `/Users/manu/_CODE/MINISWIMMER.us/_CODE/miniswimmercl-sdk-backend-v2` |

## Commands

```bash
# Development
yarn dev              # Start dev server
yarn build            # Build for production (also generates sitemap)
yarn start            # Start production server

# Code quality
yarn check-style      # Check formatting + lint
yarn fix-style        # Auto-fix formatting + lint
yarn fix-format       # Prettier write
yarn fix-lint         # ESLint fix

# Pre-deploy validation
yarn test-build       # check-style + build
```

> Install: `yarn install --legacy-peer-deps` (required due to React 19 peer dep conflicts)

## Architecture

**Next.js 15 App Router** with TypeScript, Tailwind CSS, and next-intl for i18n.

### Routing

- `src/app/layout.tsx` — root layout (GTM, metadata, i18n setup)
- `src/app/(site)/layout.tsx` — route group providing header/footer wrapper
- `src/app/(site)/[path]/page.tsx` — individual pages

### Internationalization

- Two locales: **Spanish (`es`)** (default) and English (`en`)
- Dictionary files: `dictionary/es.json` and `dictionary/en.json`
- Locale stored in cookies; deepmerge strategy (Spanish as base, English overrides)
- In components: `useTranslations()` hook from next-intl
- In pages: translations are fetched server-side and passed as `pageTraslation` prop to client components

### Component Structure

- `src/components/Common/` — reusable components (Header, Footer, Hero, FAQ, ContactForm, SchemaMarkup, etc.)
- `src/components/[PageName]/` — page-specific components
- `src/libs/utils.ts` — `cn()` utility (clsx + tailwind-merge)

### Forms

Forms use **React Hook Form** + **Yup** validation. Email submission via **EmailJS**. Toast feedback via React Hot Toast (global `ToastContext` in `src/context/ToastContext.tsx`).

### Feature Flags

`integrations.config.tsx` at root controls enabled integrations:

- Auth: enabled
- i18n: enabled
- Payments, Algolia, OpenAI, Mailchimp: disabled

### SEO

- JSON-LD structured data via `SchemaMarkup` component
- Per-page metadata with Open Graph/Twitter cards
- Sitemap auto-generated post-build via `scripts/generate-sitemap.js`

### Styling

- Tailwind CSS with dark mode via `class` strategy
- Custom screens: `xsm` (375px), `lsm` (425px), `3xl` (2000px)
- Custom fonts: Satoshi (primary), Inter
- Path alias: `@/*` → `src/*`

## Design System — DESIGN.md (MANDATORY)

**ALWAYS read [`DESIGN.md`](./DESIGN.md) before creating or modifying any UI component, page, or layout.**

`DESIGN.md` is the single source of truth for the Miniswimmer visual identity. It follows the [google-labs-code/design.md](https://github.com/google-labs-code/design.md) spec and contains:

- **Color tokens** — primary purple `#AE5EAB`, navy secondary, full dark/gray/semantic scale
- **Typography** — Satoshi for headings, Inter for body; heading scale `heading-1` through `heading-6`
- **Spacing** — extended Tailwind scale with half-step increments
- **Border radius** — `rounded-10` for cards, `rounded-full` for buttons
- **Shadows** — named by use case (`shadow-features`, `shadow-dropdown`, `shadow-testimonial`, etc.)
- **Component specs** — button-primary, button-outline, card, section-header, nav-link, dropdown
- **Do's and Don'ts** — rules for consistent token usage across light and dark modes

### Rules for UI work

1. Read `DESIGN.md` first — identify which color, typography, spacing, and component tokens apply to the task
2. Use only Tailwind utility classes that map to `DESIGN.md` tokens — never raw hex values in JSX/TSX
3. Always add `dark:` variants — the site supports dark mode via `darkMode: "class"`
4. Headings → `font-satoshi font-bold`; body/labels/UI text → `font-inter`
5. Primary CTAs → `rounded-full bg-primary text-white`; cards → `rounded-10 shadow-features`
6. Update `DESIGN.md` if a new token or component pattern is introduced and should become reusable
