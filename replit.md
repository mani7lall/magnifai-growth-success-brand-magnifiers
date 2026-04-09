# WeMagnifAI — AI Growth Agency Website

## Overview
A full-featured Next.js 16 (App Router) agency website for WeMagnifAI, "The AI Growth Engine." Dark-theme B2B site with a comprehensive content hub, service pages, tools, and blog.

## Tech Stack
- **Framework:** Next.js 16.1.1 App Router (Turbopack)
- **Language:** TypeScript
- **Styling:** CSS Modules + inline styles + global CSS variables
- **Package Manager:** npm
- **Port:** 5000 (`npm run dev -p 5000 -H 0.0.0.0`)
- **Fonts:** Manrope (body), Playfair Display (headings)

## Design System
- **Background:** `#050505` / `#0A0A0B` / `#121214`
- **Accent Primary:** `#8B5CF6` (violet)
- **Accent Indigo:** `#6366F1`
- **Accent Cyan:** `#22D3EE`
- **Accent Pink:** `#EC4899`
- **Text Muted:** `#94a3b8`
- **Glass Border:** `rgba(255,255,255,0.08)`
- **Gradient Hero:** `linear-gradient(135deg, #8B5CF6, #6366F1, #22D3EE)`

## Key Architecture Rules
- **Server Components by default.** NO `onMouseEnter`/`onMouseLeave` in Server Components.
- `'use client'` only when event handlers or state are needed.
- Service pages use `src/app/services/services.module.css` with `--accent-color` CSS variable per page.
- Prismic only initialises when `ENABLE_PRISMIC=true` AND `PRISMIC_ACCESS_TOKEN` are both set.

## Site Structure

### Pages (all return 200)
| Route | Type | Notes |
|-------|------|-------|
| `/` | Server | Homepage with hero, bento grid, metrics, services, 3 new sections |
| `/blog` | Server | Blog listing |
| `/blog/[slug]` | Server | 8 blog posts with full 800+ word content |
| `/case-studies` | Server | Listing with 6 case studies + stats bar |
| `/case-studies/[slug]` | Server | Individual case study with metrics, testimonial, deliverables |
| `/services/brand-strategy` | Server | Full page: hero, features, process, pricing, FAQ, CTA |
| `/services/development` | Server | Web development service page |
| `/services/ai-automation` | Server | AI automation service page |
| `/services/marketing` | Server | Digital marketing service page |
| `/services/creative` | Server | Creative design service page |
| `/services/seo` | Server | SEO & GEO service page |
| `/services/content` | Server | Content strategy service page |
| `/services/ecommerce` | Server | E-commerce growth service page |
| `/services/branding` | Server | Brand identity design service page |
| `/company/about` | Server | Team, mission, values, stats, story |
| `/company/careers` | Server | 4 open positions, benefits, culture |
| `/company/contact` | Server | Redirects to `/contact` |
| `/contact` | Client | Full contact form with fields + response time info |
| `/insights/zero-inbox` | Server | 1,800+ word insight article on AI email architecture |
| `/lead-magnets/website-audit-checklist` | Mixed | Lead magnet with email gate |
| `/tools/roi` | Client | ROI Calculator |
| `/tools/token` | Client | Token Estimator |
| `/submit` | Client | Submit a tool form with categories + guidelines |
| `/login` | Client | Sign in / Create Account with Google OAuth UI |
| `/resources` | Server | Resources hub |
| `/compare` | Server | Tool comparisons |
| `/playbooks` | Server | Playbook library |
| `/newsletter` | Server | Newsletter signup |
| `/glossary` | Server | AI/Growth glossary |
| `/directory` | Server | Tool directory |
| `/growth-stack` | Server | Growth stack listing |

### Dynamic Data Files
- `src/content/case-studies-data.ts` — 6 case study records
- `src/data/blogPosts.ts` — 8 blog posts (all with full article content)
- `src/data/footerPages.ts` — Company/legal page content (about, careers, contact, legal)

### Key Components
- `src/components/Header.tsx` — Stripe-style mega-menu (Solutions/Resources/Tools dropdowns, mobile accordion)
- `src/components/Footer.tsx` — Multi-column footer with all major links
- `src/components/Header.module.css` — Dropdown + mobile styles

## Environment Variables
- `ENABLE_PRISMIC` — Set to `"true"` to enable Prismic CMS integration
- `PRISMIC_ACCESS_TOKEN` — Required alongside ENABLE_PRISMIC
- `NEXT_PUBLIC_PRISMIC_ENVIRONMENT` — Prismic environment
- `PUCK_ADMIN_PASSWORD` — Admin UI password

## Missing (Stubs / Pre-wired)
- `/submit` and `/login` are UI-only (no auth backend wired)
- Blog post images use shared fallback images (card-strategy.png, card-react.png, card-viral.png)
