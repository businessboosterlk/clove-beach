# Clove Beach Wadduwa — World-Class Rebuild

**Client:** Clove Beach, Wadduwa (clovehotels.com) — luxury beachfront villa retreat in Sri Lanka. Quiet-luxury sanctuary positioning. Ocean & Garden villas, spa, pool, dining, weddings, honeymoons, excursions.
**Type:** World-class concept rebuild (single-page immersive) to replace the generic WordPress site.
**Stack:** Single self-contained HTML (inline CSS+JS), no framework, GitHub Pages ready. Real Clove photography + logo pulled from clovehotels.com.
**Live URL:** not deployed yet.
**Contact:** +94 70 1 200 962, +94 70 2 880 880. Wadduwa, Sri Lanka. WhatsApp 94701200962.

## Design direction (bb-web-master + ui-ux-pro-max)
- **Palette:** deep ocean-teal (#0f3b36) dark sections, warm ivory/sand (#f8f3ea) light sections, brass/gold accent (#b0894e), ink text. (ui-ux-pro-max suggested navy+gold; translated to ocean-teal+brass for a beach sanctuary.)
- **Type:** Playfair Display (serif display) + Jost (clean sans body). Elegant, hospitality-grade.
- **Feel:** quiet luxury, generous whitespace, full-bleed photography, gold hairlines.
- **Motion (the brief):** every scroll movement premium — parallax hero, fade/slide reveals (gated, reduced-motion safe), image mask/scale-in, staggered items, count-ups, header refine-on-scroll, scroll progress. transform/opacity only, spring/ease-out.

## Smart features
1. Sticky **reservation bar** (check-in / check-out / guests / villa) → prefilled WhatsApp enquiry.
2. **"Design your escape" planner** — occasion + villa + dates → tailored package suggestion + enquire.
3. Villa showcase, gallery lightbox, experiences, weddings band, location.

## Assets (real, optimized)
aerial (hero), arrival (blue-hour), pool, villa-ocean, villa-garden, spa, spa-2, dining, dining-2, bar, logo.png, mark.png

## Build status
- [x] Built single-file index.html — hero (parallax aerial), sticky reservation bar, welcome, 3 villas (Ocean/Garden/Pool), facilities parallax band, dining, experiences, weddings, "Design your escape" planner, gallery + lightbox, location + map, reserve CTA, footer.
- [x] Premium motion: scroll progress, header refine-on-scroll, hero + band parallax, gated fade/slide reveals (reduced-motion safe), staggered delays, hover image zooms, button fill sweeps. Fonts Playfair Display + Jost. Palette deep teal + brass + ivory.
- [x] Smart features (all verified): reservation bar → prefilled WhatsApp availability enquiry; villa "reserve" → WhatsApp; "Design your escape" planner (occasion → auto villa + tailored 5-item package → WhatsApp); gallery lightbox (keyboard + swipe arrows).
- [x] Verified: console clean, desktop + mobile 390px, iOS off-screen audit 0 offenders (incl. mobile menu open). Fixed mobile top-bar/header overlap.
- [x] Deployed: https://businessboosterlk.github.io/clove-beach/ (repo businessboosterlk/clove-beach)
- [x] Learnings written back

## Serving locally
launch.json "clove-beach" (python http.server 4601)
