---
version: alpha
name: Miniswimmer
description: >
  Design system for Miniswimmer — a swim school platform targeting families in Chile.
  Purple-primary identity with Satoshi as display font and Inter for UI text.
  Supports light and dark modes via Tailwind's class strategy.

colors:
  primary: "#AE5EAB"
  on-primary: "#FFFFFF"
  primary-muted: "#AE5EAB1A"
  secondary: "#1C274C"
  on-secondary: "#FFFFFF"
  surface: "#FFFFFF"
  on-surface: "#0E172B"
  body: "#64748B"
  neutral: "#F3F5F6"
  neutral-1: "#F9FAFB"
  neutral-2: "#F3F4F6"
  neutral-3: "#E5E7EB"
  neutral-4: "#D1D5DB"
  neutral-5: "#9CA3AF"
  neutral-6: "#6B7280"
  neutral-7: "#374151"
  dark: "#1C274C"
  dark-2: "#495270"
  dark-3: "#606882"
  dark-4: "#8D93A5"
  dark-5: "#BBBEC9"
  gray-surface: "#272E40"
  stroke: "#E8E8E8"
  stroke-dark: "#394152"
  error: "#F23030"
  error-light: "#F56060"
  error-surface: "#FEEBEB"
  success: "#00BC55"
  black: "#0E172B"
  white: "#FFFFFF"

typography:
  headline-display:
    fontFamily: Satoshi, sans-serif
    fontSize: 60px
    fontWeight: 700
    lineHeight: 72px
    letterSpacing: -0.5px
  headline-lg:
    fontFamily: Satoshi, sans-serif
    fontSize: 48px
    fontWeight: 700
    lineHeight: 58px
    letterSpacing: -0.3px
  headline-md:
    fontFamily: Satoshi, sans-serif
    fontSize: 40px
    fontWeight: 700
    lineHeight: 48px
    letterSpacing: -0.2px
  headline-sm:
    fontFamily: Satoshi, sans-serif
    fontSize: 35px
    fontWeight: 700
    lineHeight: 45px
    letterSpacing: -0.2px
  heading-5:
    fontFamily: Satoshi, sans-serif
    fontSize: 28px
    fontWeight: 700
    lineHeight: 40px
  heading-6:
    fontFamily: Satoshi, sans-serif
    fontSize: 24px
    fontWeight: 700
    lineHeight: 30px
  custom-3xl:
    fontFamily: Satoshi, sans-serif
    fontSize: 32px
    fontWeight: 700
    lineHeight: 40px
  custom-2xl:
    fontFamily: Satoshi, sans-serif
    fontSize: 22px
    fontWeight: 600
    lineHeight: 30px
  body-lg:
    fontFamily: Inter, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: -0.16px
  body-md:
    fontFamily: Inter, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: -0.16px
  body-sm:
    fontFamily: Inter, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: -0.16px
  label-lg:
    fontFamily: Inter, sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
  label-md:
    fontFamily: Inter, sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
  label-sm:
    fontFamily: Inter, sans-serif
    fontSize: 12px
    fontWeight: 600
    lineHeight: 16px

rounded:
  none: 0
  sm: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  2xl: 1rem
  10: 10px
  full: 9999px

spacing:
  1: 0.25rem
  2: 0.5rem
  3: 0.75rem
  4: 1rem
  4.5: 1.125rem
  5: 1.25rem
  5.5: 1.375rem
  6: 1.5rem
  7: 1.75rem
  7.5: 1.875rem
  8: 2rem
  9: 2.25rem
  10: 2.5rem
  12: 3rem
  12.5: 3.125rem
  14: 3.5rem
  15: 3.75rem
  16: 4rem
  18: 4.5rem
  20: 5rem
  22.5: 5.625rem
  24: 6rem
  25: 6.25rem
  30: 7.5rem
  32: 8rem
  35: 8.75rem
  40: 10rem
  45: 11.25rem
  50: 12.5rem

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: 0.75rem 2rem
    height: 52px
  button-primary-hover:
    backgroundColor: "#9B4E98"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: 0.75rem 2rem
    height: 52px
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: 0.75rem 2rem
    height: 52px
  button-outline:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: 0.75rem 2rem
    height: 52px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.10}"
    padding: 2rem
  section-header:
    textColor: "{colors.secondary}"
    typography: "{typography.headline-md}"
  section-eyebrow:
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
  nav-link:
    textColor: "{colors.dark-3}"
    typography: "{typography.label-lg}"
  nav-link-active:
    backgroundColor: "{colors.primary-muted}"
    textColor: "{colors.primary}"
    typography: "{typography.label-lg}"
  dropdown:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: 0.625rem
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: 0.75rem 1rem
---

# Miniswimmer Design System

## Overview

Miniswimmer is a swim school platform for families in Chile. The visual identity is warm, trustworthy, and playful — anchored by a **purple primary** (`#AE5EAB`) that signals care and expertise, paired with a **deep navy secondary** (`#1C274C`) for authority and depth.

The design system runs on **Tailwind CSS** with a custom theme extension. It supports **light and dark modes** via `darkMode: "class"`. All token values map directly to Tailwind utility classes.

Key personality traits: trustworthy, family-friendly, professional, approachable.

## Colors

**Primary (`#AE5EAB`)** — The brand purple. Used for CTAs, active states, highlights, and accent text. A muted 10% alpha variant (`#AE5EAB1A`) is used for background tints on active nav items and feature badges.

**Secondary (`#1C274C`)** — Deep navy. Used for section headings, the footer background, and high-contrast text blocks. Paired with `on-secondary: white`.

**Surface / Neutral** — White surface with a gray scale from `#F9FAFB` (neutral-1) to `#374151` (neutral-7) for cards, inputs, and dividers.

**Dark scale** — `#1C274C` → `#BBBEC9` — a 5-step ramp used for headings, body text, captions, and disabled states.

**Body text** — `#64748B` — the default body color; maps to Tailwind's `text-body`.

**Semantic:** `#F23030` error, `#00BC55` success. Both have a light variant for backgrounds.

**Dark mode** — Surfaces invert: use `gray-surface` (`#272E40`) for dark card backgrounds, `stroke-dark` (`#394152`) for borders, and the dark scale inverted for text hierarchy.

## Typography

**Satoshi** is the primary display and heading font — self-hosted with WOFF2/WOFF/TTF at weights 300, 400, 500, 700, 900. It maps to Tailwind's `font-satoshi` and is the default `font-sans`.

**Inter** (Google Fonts, latin subset) is used for body text, labels, and UI copy. It maps to `font-inter`.

Heading scale uses Tailwind's custom `fontSize` utilities (`text-heading-1` through `text-heading-6`) with tightly controlled line-heights. Body copy defaults to `text-base` (16px) with `-tracking-[0.16px]` applied globally on `<body>`.

All headings use `font-satoshi font-bold`. All body copy uses `font-inter font-normal`.

### Article / Long-form Content Typography (`.article-content`)

All blog posts and long-form pages MUST use the `.article-content` CSS class on the container div. This class is defined in `src/styles/globals.css` and enforces the following rules:

| Element | Rule | Value |
|---------|------|-------|
| `p` | line-height | **2rem** (32px) |
| `li` (ul/ol) | line-height | **2rem** (32px) |
| `ol > li` | bottom margin | **1rem** — extra gap between numbered items |
| `h2` | line-height | 2.5rem; `font-satoshi font-bold text-2xl mt-10 mb-4` |
| `h3` | line-height | 2rem; `font-satoshi font-bold text-xl mt-8 mb-3` |
| `h4` | line-height | 2rem; `font-satoshi font-semibold text-lg mt-6 mb-2` |
| `a` | color | `text-primary`, `hover:underline` |
| `strong` | weight | `font-semibold text-dark` |
| `blockquote` | style | left border `border-primary`, bg `bg-primary/5`, italic |
| `code` | style | `bg-gray-2 rounded px-1.5 py-0.5 font-mono text-sm` |

**Table rules (enforced globally in `.article-content`):**

| Property | Value |
|----------|-------|
| Width | `100%` of available container |
| Border | 1px solid `#E8E8E8` (stroke) — subtle, not heavy |
| Header (`thead`) | Background `#F3F5F6` (neutral gray), `font-satoshi font-semibold` |
| Cell padding | `0.75rem 1rem` |
| Row striping | Even rows get `bg-gray-1` tint |
| Dark mode borders | `#394152` (stroke-dark) |
| Dark mode header | `bg-gray-dark` |

**Ordered list spacing rule:**

Every `<li>` inside `<ol>` receives `margin-bottom: 1rem` to create a clear visual separation between numbered steps. The last item has no bottom margin.

**Usage:**

```html
<div class="article-content" dangerouslySetInnerHTML={{ __html: content }} />
```

**Do NOT** use Tailwind's `prose` class — `@tailwindcss/typography` is not installed in this project.

## Layout

**Container:** centered, with `padding-x` of 1rem (mobile), 2rem (sm), 0 (xl and above). Max width follows Tailwind defaults.

**Responsive breakpoints:**
- `xsm`: 375px — small phones (iPhone SE)
- `lsm`: 425px — medium phones
- `sm` / `md` / `lg` / `xl` / `2xl`: Tailwind defaults
- `3xl`: 2000px — ultra-wide screens

**Spacing:** Extended Tailwind scale in 0.5-step increments up to `230` (57.5rem). Section vertical padding typically uses `py-15` to `py-25`. Content blocks use `gap-7.5` to `gap-10`.

**Dark mode toggling:** Applied via `class` strategy — add `dark` to `<html>`. The `next-themes` package manages the toggle.

## Elevation & Depth

Shadows are named by their use case:

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-1` | `0px 1px 2px rgba(84,87,118,0.10)` | Subtle card lift |
| `shadow-features` | `0px 8px 20px rgba(113,116,152,0.05)` | Feature cards |
| `shadow-dropdown` | `0px 4px 12px rgba(15,23,42,0.10)` | Menus, poppers |
| `shadow-testimonial` | `0px 8px 10px -6px rgba(15,23,42,0.06)` | Quote cards |
| `shadow-testimonial-2` | `0px 15px 50px -6px rgba(15,23,42,0.08)` | Featured testimonial |
| `shadow-error` | `0px 12px 34px rgba(13,10,44,0.05)` | Error states |
| `shadow-input` | `inset 0 0 0 2px #573CFF` | Focused inputs |
| `shadow-darkdropdown` | `0px 4px 12px rgba(255,255,255,0.05)` | Dark-mode menus |

Z-index helpers: `z-1`, `z-99`, `z-999`, `z-9999`, `z-99999`, `z-999999`.

## Shapes

**Border radius:**
- Default Tailwind scale: `rounded-sm` (2px), `rounded` (4px), `rounded-md` (6px), `rounded-lg` (8px), `rounded-xl` (12px), `rounded-2xl` (16px), `rounded-full` (9999px)
- Custom: `rounded-10` (10px) — used on cards and section containers

**Buttons** always use `rounded-full` for pill shape.

**Cards and form inputs** use `rounded-10` or `rounded-lg`.

**Badges and labels** use `rounded-full`.

## Components

### Button — Primary

Purple pill CTA. Used for the main action on each section.

```html
<button class="rounded-full bg-primary px-8 py-3 font-inter text-base font-medium text-white transition hover:bg-primary/90">
  Reserva tu clase
</button>
```

### Button — Outline

Used as secondary CTA alongside the primary button.

```html
<button class="rounded-full border border-primary px-8 py-3 font-inter text-base font-medium text-primary transition hover:bg-primary/5">
  Ver horarios
</button>
```

### Card

Rounded white surface with a subtle lift shadow.

```html
<div class="rounded-10 bg-white p-8 shadow-features dark:bg-gray-dark">
  <!-- content -->
</div>
```

### Section Header

Two-part pattern: small eyebrow label in primary purple above a bold Satoshi heading.

```html
<div class="text-center">
  <span class="mb-3 block font-inter text-sm font-semibold uppercase tracking-wider text-primary">
    Por qué elegirnos
  </span>
  <h2 class="font-satoshi text-heading-3 font-bold text-dark dark:text-white">
    La mejor escuela de natación
  </h2>
</div>
```

### Navigation Link

Default muted, active state uses primary color with a tinted background.

```html
<!-- Default -->
<a class="font-inter text-base font-medium text-dark-3 hover:text-primary">Inicio</a>

<!-- Active -->
<a class="rounded bg-primary/5 px-3 py-1 font-inter text-base font-medium text-primary dark:bg-white/5 dark:text-white">
  Inicio
</a>
```

### Dropdown

White card with soft shadow; dark mode inverts to `gray-dark`.

```html
<div class="rounded-lg bg-white p-2.5 shadow-dropdown dark:bg-gray-dark">
  <!-- items -->
</div>
```

## Do's and Don'ts

**Do:**
- Use `text-primary` for all interactive text links and accent labels
- Use `font-satoshi font-bold` for all headings
- Use `font-inter` for all body, label, and UI text
- Apply `dark:` variants alongside all color utilities — the site supports dark mode
- Use the extended spacing scale (4.5, 7.5, 12.5, 22.5, etc.) to match existing section rhythm
- Keep buttons `rounded-full` — pill shape is the brand's button signature
- Apply `shadow-features` to feature cards, `shadow-dropdown` to menus

**Don't:**
- Don't use raw hex colors in JSX/TSX — always use Tailwind utility classes that map to the token
- Don't mix Satoshi and Inter in the same heading — Satoshi for headings, Inter for body
- Don't use `font-normal` on headings — always `font-bold` or `font-semibold`
- Don't forget `dark:` equivalents when styling surfaces and text
- Don't use arbitrary border-radius values — use `rounded-10`, `rounded-lg`, `rounded-full`, or Tailwind defaults
- Don't apply elevation shadows in dark mode without using `shadow-darkdropdown` for menus
- Don't use `prose` or `prose-*` classes — `@tailwindcss/typography` is not installed; use `.article-content` instead
- Don't render article/blog content without wrapping it in `.article-content` — the class enforces `line-height: 2rem`, table styles, and list spacing
- Don't add inline `style` attributes for typography in article content — all rules are centralized in `.article-content` in `globals.css`
- Don't style `<table>` elements with custom classes inside article HTML — `.article-content table` handles width, borders, and header colors globally
