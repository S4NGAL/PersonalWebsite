# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repo contains **three related web projects** that share a single design system:

1. **yunus.dev** — Personal portfolio (job applications, highest priority)
2. **yunusSoft** — Freelance agency site (client acquisition)
3. **DesignPilot** — AI design critique tool (MVP → SaaS product)

Owner: Yunus Mümin Aydınoğlu, Computer Engineering senior at Eastern Mediterranean University (TRNC).

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + `tokens.css` (shared across all three sites) |
| Animation | Framer Motion |
| Blog/Content | MDX |
| Fonts | Instrument Serif (display) · DM Sans (body) · Geist Mono (code) |
| Forms | Formspree or custom API endpoint |
| Deploy | Self-hosted VPS |

**DesignPilot additional stack:** FastAPI (Python) backend, Anthropic API (`claude-sonnet-4`, vision), Cloudflare R2, PostgreSQL.

## Repository Structure (target)

```
src/
  styles/
    tokens.css          ← shared CSS variables, light + dark mode
  lib/
    fonts.ts            ← Next.js font optimization config
  app/
    layout.tsx          ← Root layout with meta tags
```

Each site lives in its own Next.js project but imports the shared `tokens.css` and `tailwind.config.ts`.

## Design System — Critical Rules

**Philosophy:** "Editorial Minimalism" — inspired by Linear.app / Vercel but warmer. Heavy whitespace, typography-first.

### Font weights — NEVER use DM Sans 300 or 400
DM Sans at weight 400 or below disappears on the warm parchment background. Always use:
- Body text: DM Sans **500**
- UI elements: DM Sans **500**
- Badges / small labels: DM Sans **600**
- Headings (h1–h6): Instrument Serif 400 (naturally heavy)

### Color tokens (light mode)
```css
--bg-base: #FAF7F2;         /* warm parchment */
--bg-surface: #F4EFE6;
--text-primary: #1A1510;
--text-secondary: #2E2820;
--text-muted: #6B5C48;
--accent: #4E7068;          /* dark sage */
--accent-hover: #3D5A53;
```

Dark mode auto-follows `prefers-color-scheme`. See `PROJE_BRIEF.md` §6 for full token list.

### Typography scale
```
Hero:  Instrument Serif, clamp(36px, 6vw, 60px), italic accent = accent color
H1: 48px · H2: 36px · H3: 30px · H4: 24px
Body: 16px, line-height 1.65
Badge/label: 11px, weight 600
```

### Border radii
```
Badge: 4px · Button/input: 8px · Card: 14–16px · Hero card: 24px · Pill: 9999px
```

### Component behavior
- Card hover: `border-color → accent`, `translateY(-2px)`
- Input focus: `border-color → accent`, `box-shadow: 0 0 0 3px rgba(78,112,104,.12)`
- Navbar: sticky, 60px height, `border-bottom: 0.5px`
- Logo: `"ya."` in Instrument Serif italic

## yunus.dev — Page Structure

```
/                 Hero + stats + featured projects
/about            Bio, timeline, CV download
/projects         All projects, filterable (AI / Mobile / Game / All)
/projects/[slug]  Individual project page
/blog             Post list with category + language filter
/blog/[slug]      MDX case study or technical post
/playground       Browser-based Python demos via Pyodide
/uses             Tools & setup
```

**Project → Blog link rule:** ADPilot and DataHarvest have no live demo. Their project cards link directly to their blog case study. Chip Head links to https://kerembakim.itch.io/chip-head. DesignPilot shows "Coming soon →" (disabled link).

## yunusSoft — Key Requirements

- WhatsApp direct link button is mandatory (primary contact method in TRNC)
- "Free discovery call" CTA on every service page
- Both TR and EN language support (EN critical for foreign clients)

## Internationalization

- Default locale: **Turkish (`tr`)**
- Parallel locale: English (`en`)
- Language switcher: pill switcher fixed in navbar (right side)
- Blog posts are written in both TR and EN; language filter controls visibility

## SEO & Accessibility

Every page must have proper `<meta>` tags, Open Graph tags, and a canonical URL. Use semantic HTML, alt text on all images, and visible focus states.

## Build / Dev Commands

> Commands will be added once the Next.js projects are initialized. Standard Next.js workflow: `npm run dev`, `npm run build`, `npm run lint`.

## Cross-Site Linking

```
yunus.dev   → links to DesignPilot in projects section
yunusSoft   → features DesignPilot as "AI Solutions" service
DesignPilot → footer: "Built by yunusSoft" + link back
```

All three sites must feel visually consistent — same tokens, same fonts, same component behavior.
