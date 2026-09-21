# Shikshasarathi Foundation — website

React + TypeScript + Vite + Tailwind CSS. Four hash-routed pages (home, register, partner, sponsor) with a full-viewport hero over a capture-and-boomerang looping video background.

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-checks, then writes dist/
npm run preview  # serve the production build
```

`dist/` is a static folder — drop it on Netlify, Vercel, Cloudflare Pages, GitHub Pages or any web host. `vite.config.ts` sets `base: './'`, so it works from a subdirectory too.

## Pages

| Route | Page |
| --- | --- |
| `#/home` | Home — hero, founding story, the five services, mission, promise, FAQs |
| `#/scholarship` | All India Merit Scholarship 2026 — about, eligibility, process, documents, dates, FAQs |
| `#/education-counselling` | Education counselling |
| `#/career-counselling` | Career counselling |
| `#/exam-guidance` | Competitive exam counselling and guidance |
| `#/skill-courses` | Skill enhancement course counselling |
| `#/apply` | Scholarship application form |
| `#/request` | Counselling session request form |
| `#/partner` | Partner institutions |
| `#/sponsor` | Donate |

The four counselling pages are rendered by one component, `src/pages/ServicePage.tsx`, from the content in `src/data/services.ts`. To edit any of their copy — the problem statement, who it's for, what we cover, the steps, the FAQs — edit that data file, not the component. Adding a fifth counselling service means adding one entry there plus one route in `src/lib/useHashRoute.ts`.

## Things to change before launch

**0. The founding story** — `src/components/Story.tsx`

The "Why we started" narrative is written as the founders' own account, and the specifics in it are invented. Replace them with what actually happened before this goes public. There is a comment at the top of the file saying the same thing.

**1. The hero image — optional** — `src/config.ts` → `HERO_IMAGE_URL`

The hero currently uses a designed backdrop (`src/components/HeroBackdrop.tsx`): warm exercise-book paper, a marigold margin rule, and a soft sunrise glow rising behind the panel. It is pure CSS and inline SVG — no image requests, nothing to license, and it paints instantly. You can ship as-is.

To use a photograph instead, put the file in `public/` and set `HERO_IMAGE_URL` to its path (e.g. `'/hero.jpg'`). It renders full-bleed behind a cream scrim that keeps the headline readable. Landscape, 2000px+ wide, subject middle-left, compressed under ~400KB.

Use your own photographs — your scholars, your counselling sessions, your ceremony — and get written consent from anyone identifiable (from a parent, if they are a minor). A real photograph of a real student beats any stock graduation shot, and for a foundation asking for trust and money, someone else's students is a small dishonesty that visitors notice.

**2. The form endpoints** — `src/config.ts` → `FORM_ENDPOINTS`

All four forms are unwired: `apply`, `request`, `partner`, `sponsor`. Create four forms at [Formspree](https://formspree.io) (or Getform, Basin, a Google Apps Script, your own server — anything that accepts a JSON POST) and paste the endpoints in. Until you do, each page shows an amber setup notice and submissions are logged to the browser console instead of being delivered. The notice disappears on its own once an endpoint is filled in.

**3. The scholarship dates** — `src/config.ts` → `PROGRAMME`

`opens` and `closes` are `00/00/2026` placeholders and appear on the scholarship page, alongside an amber notice pointing here. The programme name and cycle are set in the same object and are used across the site, so renaming next year's programme is a one-line change.

**4. The payment details** — `src/pages/SponsorPage.tsx`, the block marked `PAYMENT DETAILS`

The UPI ID, account number, IFSC and bank name are placeholders. Replace them, swap the dashed QR block for your account's UPI QR image, and add the 80G registration number once it's granted.

`CONTACT_EMAIL` and `CONTACT_PHONE` in `src/config.ts` are used across the fraud warning, the FAQs, the forms and the footer — change them in one place. The phone number is currently `+91 00000 00000`.

## Layout

```
src/
  config.ts                  video URL, form endpoints, contact email
  App.tsx                    page composition + routing
  lib/useHashRoute.ts        #/page routing and cross-page anchors
  components/
    BoomerangVideoBg.tsx     frame capture → ping-pong canvas playback
    Logo.tsx                 the SVG mark (open book beneath a spark)
    Navbar.tsx               transparent over the hero, solid once scrolled
    Hero.tsx                 headline, CTA, bottom "What do we do?" panel
    Story.tsx … Footer.tsx   the home-page sections, in page order
    form.tsx                 field primitives, validation, submit handling
    ui.tsx                   Label, Section, H2, Button
    CopyButton.tsx           clipboard with an execCommand fallback
  pages/                     RegisterPage, PartnerPage, SponsorPage
```

## Notes

- **Palette and type** live in `tailwind.config.js`. Forest `#12403A` is the darkest ink on the site — there is no pure black anywhere. Marigold `#C8811A` is the only accent.
- **Accessibility** — every tap target is at least 44px, all inputs are 16px so iOS Safari doesn't zoom on focus, and `prefers-reduced-motion` disables both the transitions and the video frame capture.
- **The awards and sponsorship tables** are real `<table>` elements above 768px and collapse into labelled cards below it, driven by the `data-label` attributes and the `.eif-table` rules in `src/index.css`.
