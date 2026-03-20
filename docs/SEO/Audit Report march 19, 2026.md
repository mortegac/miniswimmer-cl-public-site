Miniswimmer SEO Audit Report

  Date: March 19, 2026 | Type: Local Service — Swimming School | Markets: Chile

  ---
  SEO Health Score: 38 / 100

  ┌──────────────────────────┬────────┬────────┬────────────┐
  │         Category         │ Weight │ Score  │  Weighted  │
  ├──────────────────────────┼────────┼────────┼────────────┤
  │ Technical SEO            │ 22%    │ 42/100 │ 9.2        │
  ├──────────────────────────┼────────┼────────┼────────────┤
  │ Content Quality          │ 23%    │ 42/100 │ 9.7        │
  ├──────────────────────────┼────────┼────────┼────────────┤
  │ On-Page SEO              │ 20%    │ 32/100 │ 6.4        │
  ├──────────────────────────┼────────┼────────┼────────────┤
  │ Schema / Structured Data │ 10%    │ 18/100 │ 1.8        │
  ├──────────────────────────┼────────┼────────┼────────────┤
  │ Performance (CWV)        │ 10%    │ 60/100 │ 6.0        │
  ├──────────────────────────┼────────┼────────┼────────────┤
  │ AI Search Readiness      │ 10%    │ 41/100 │ 4.1        │
  ├──────────────────────────┼────────┼────────┼────────────┤
  │ Images                   │ 5%     │ 40/100 │ 2.0        │
  ├──────────────────────────┼────────┼────────┼────────────┤
  │ Total                    │        │        │ 39.2 / 100 │
  └──────────────────────────┴────────┴────────┴────────────┘

  The site has genuine strengths — real testimonials, a distinctive NLP/coaching methodology, active multi-market presence — but is structurally undermined by template debris from its SaaS origin, broken indexing signals on the US pages, and schema that misidentifies every page as a generic organization.

  ---
  CRITICAL — Fix Before Next Deploy

  These issues are actively blocking correct indexation or serving wrong content to users.

  ✅ C1 · US pages self-canonicalize to a different domain

  swimming-lessons-in-miami-dade/page.tsx:11-14 and swimming-lessons-in-broward/page.tsx:11-14 declare canonical URLs on https://www.miniswimmer.us. Google reads this as "the real version of this page lives on another domain" and will drop these pages from miniswimmer.cl's index entirely. If miniswimmer.us is not live or not indexed, these pages rank nowhere.

  Fix: Change both canonicals to https://miniswimmer.cl/swimming-lessons-in-[location].

  ✅ C2 · Broward page imports the wrong component

  swimming-lessons-in-broward/page.tsx:3 imports @/components/LessonsInMaintencillo — a Chilean location page. The Broward page is serving Maitencillo content to US visitors.

  Fix: Create src/components/LessonsInBroward/index.tsx and import it correctly.

  ✅ C3 · Peñalolén canonical points to Viña del Mar

  clases-natacion-penalolen/page.tsx:12 sets canonical to https://www.miniswimmer.cl/clases-natacion-vina-del-mar. Google will suppress the Peñalolén page as a duplicate of Viña del Mar.

  Fix: Change canonical to https://miniswimmer.cl/clases-natacion-penalolen.

  ✅ C4 · SaaS boilerplate is live in English on the Program and Miami-Dade pages

  en.json programpage.features_section.subtitle reads: "Everything you need to build, launch, and scale your SaaS startup." Feature items describe Postgres/Prisma ORM and Admin Dashboards. The same block appears in lessonMiamipage.features_section. This is visible to English-speaking visitors and classified as low-quality content by Google's QRG.

  Fix: Replace with real swimming school copy in en.json.

  ✅ C5 · FAQ content is entirely placeholder in both languages

  All faq_section entries in en.json contain Lorem ipsum subtitles and three questions about Framer subscription plans. The key faq_section doesn't exist at all in es.json. The FAQ component is hardcoded to homepage.faq_section, so only the homepage would show a FAQ — and that FAQ is broken.

  Fix: Write real Q&A content in both languages. Minimum 5 questions per page covering: age requirements, session length, what is matronatación, pricing ranges, what to bring, cancellation policy. Add the faq_section key to es.json.
  Applied: 6 pages in en.json + 6 pages in es.json updated with real swimming school FAQs (6 Q&As per page).

  ❌ C6 · Pricing page has no prices

  pricingpage in both dictionaries contains hero, counter, testimonials, and WhatsApp — but no price data. Parents comparing swim schools will immediately leave.

  Fix: Add at minimum price ranges to the hero subtitle or add a real pricing component.
  NOTE: Requires real pricing data from business owner. Cannot be auto-applied.

  ✅ C7 · www vs non-www canonical inconsistency across the site

  Location pages use https://www.miniswimmer.cl/... (with www) while all other pages use https://miniswimmer.cl/... (no www). The sitemap uses non-www. Google treats these as different URLs.

  Fix: Pick one variant (non-www recommended, matches sitemap) and apply consistently to all pages.

  ---
  HIGH — Fix Within 1 Week

  ✅ H1 · Hreflang is completely broken on every page

  Every page's alternates.languages sets both 'en-US' and 'es' to the same URL (the current page). This conveys zero information to Google about language variants. The x-default alternate is also missing entirely. Example in src/app/(site)/page.tsx:12-14:
  languages: { 'en-US': 'https://miniswimmer.cl', 'es': 'https://miniswimmer.cl' }

  Fix: For each ES/EN page pair, set 'es' to the Spanish URL, 'en-US' to the English URL, and add 'x-default'. Each page must reference both variants. This is the highest-impact single improvement available.
  Applied: All page pairs updated — nosotros↔about, contacto↔contact, precios↔pricing, politica↔privacy-policy, terminos↔terms-and-conditions, metodo↔program, valores↔pricing. Solo pages (servicios, conoce-nuestras-sedes) get x-default+es only. Location pages get x-default.

  ✅ H2 · No security headers

  next.config.js headers block only sets Content-Type on robots.txt. Missing for all routes: X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Strict-Transport-Security, Permissions-Policy. This is both a security vulnerability and a negative trust signal.

  Fix: Add a global source: '/(.*)' headers block in next.config.js.

  ✅ H3 · Two competing sitemaps with different content

  src/app/sitemap.ts (18 URLs) and public/sitemap.xml (24 URLs) both resolve to /sitemap.xml. Next.js serves the static file from public/ first, making sitemap.ts dead code. sitemap.ts is missing the three clases-natacion-* pages, reagendamiento, registration, valores, and /conoce-nuestras-sedes.

  Fix: Delete public/sitemap.xml. Complete src/app/sitemap.ts with all valid public-facing routes. Use actual per-page dates instead of new Date().
  Applied: public/sitemap.xml deleted. sitemap.ts rewritten as single source of truth with all routes, env var baseUrl, noindex pages excluded.

  ✅ H4 · registration and reagendamiento pages are indexed and in sitemap

  Both are operational internal forms with no SEO value. Indexing them wastes crawl budget. reagendamiento/page.tsx also uses Peñalolén's metadata verbatim.

  Fix: Add robots: { index: false, follow: false } to both pages. Remove from sitemap.

  ✅ H5 · Every page uses Organization schema regardless of page type

  Every location page, pricing page, contact page, and sub-page uses @type: "Organization". This misses the highest-value local SEO opportunity: SportsActivityLocation / LocalBusiness schema with address, geo-coordinates, and service area is what enables map-pack rich results for local swim school queries.

  Fix:
  - Location pages → SportsActivityLocation (see schema audit for JSON-LD templates)
  - Homepage → add WebSite with SearchAction alongside Organization
  - All sub-pages → add BreadcrumbList
  - Organization url property on every non-homepage page incorrectly points to that page's URL instead of https://miniswimmer.cl
  - Fix logo property — currently uses the 1200×630 OG social banner, not an actual logo image
  Applied: @id added to all schemas, url fixed to https://miniswimmer.cl on all pages, logo fixed to ImageObject on homepage, contactPoint added. SportsActivityLocation and BreadcrumbList not yet added (requires physical address data — see M8).

  ✅ H6 · Duplicate page pairs with identical metadata and identical components

  Five ES/EN page pairs render the same component with the same title and description.
  Additionally /valores renders <Pricing /> with pricing metadata while its slug means "values". /alianzas/page.tsx uses About page titles.

  Fix: Either consolidate with 301 redirects or write unique metadata + differentiated content for each. At minimum fix the valores and alianzas metadata copy-paste errors.
  Applied: alianzas title fixed to "Alianzas y Partners de Miniswimmer". contact/contacto OG titles fixed to correct language.

  ✅ H7 · Chilean location pages use Broward WhatsApp URL parameters

  The WhatsApp CTA buttons on Maintencillo and Viña del Mar pages link to messages pre-filled with Broward location text. Parents in Chile are being invited to join a Florida class.

  Fix: Audit and correct all WhatsApp URL text= parameters per location page.

  ❌ H8 · Location-specific testimonials are not location-specific

  All 7 testimonials appear on every page identically. The Chay testimonial mentions "la ubicación en La Reina" (a Santiago neighborhood) on the Miami-Dade page. English testimonials on US pages include Chilean neighborhoods.

  Fix: Create location-specific testimonial subsets. US pages must show Florida-based reviews only.
  NOTE: Requires content/business decision on which testimonials belong to which location.

  ---
  MEDIUM — Fix Within 1 Month

  ┌─────┬────────────────────────────────────────────────────────────────────────────────────────────────────────────┬─────────────────────────────────────────────────────────────┐
  │ ID  │                                                   Issue                                                    │                           File(s)                           │
  ├─────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────────────────────────┤
  │ ✅M1 │ No export const viewport in root layout — mobile rendering signal                                          │ src/app/layout.tsx                                          │
  ├─────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────────────────────────┤
  │ ✅M2 │ Crawl-delay: 10 in robots.txt — Googlebot ignores it, Bingbot is slowed significantly on a 24-page site    │ public/robots.txt:14                                        │
  ├─────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────────────────────────┤
  │ ✅M3 │ No llms.txt — missing key signal for Perplexity and Claude citation                                        │ Create public/llms.txt                                      │
  ├─────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────────────────────────┤
  │ ✅M4 │ FAQ and testimonials are 'use client' — AI crawlers that don't execute JS cannot see this content          │ src/components/Common/FAQ/index.tsx, Testimonials/index.tsx │
  ├─────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────────────────────────┤
  │ ❌M5 │ features_with_image_section block is duplicated verbatim across 6+ pages                                   │ dictionary/es.json, en.json                                 │
  ├─────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────────────────────────┤
  │ ✅M6 │ Testimonial age translations wrong — "Madre de 2 años" → "2-month-old's mom" instead of "2-year-old's mom" │ dictionary/en.json all testimonial designation fields       │
  ├─────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────────────────────────┤
  │ ✅M7 │ Hero alt text hardcoded as 'Hero Image' on all pages                                                       │ src/components/Common/Hero/index.tsx                        │
  ├─────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────────────────────────┤
  │ ❌M8 │ No physical addresses (NAP) on any location page                                                           │ All location page components                                │
  ├─────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────────────────────────┤
  │ ❌M9 │ No named instructor bios — critical trust gap for a child water-safety service                             │ src/components/About/index.tsx                              │
  ├─────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────────────────────────┤
  │ ✅M10│ Broward meta description is 440+ characters (city name list)                                               │ swimming-lessons-in-broward/page.tsx                        │
  ├─────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────────────────────────┤
  │ ✅M11│ sameAs in Organization schema is inconsistent across pages (different Instagram handles)                   │ All page schema data                                        │
  ├─────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────────────────────────┤
  │ ❌M12│ No IndexNow implementation for Bing (7-9% US market share in Florida)                                      │ next.config.js                                              │
  ├─────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────────────────────────┤
  │ ✅M13│ sitemap.ts uses hardcoded baseUrl instead of process.env.NEXT_PUBLIC_SITE_URL                              │ src/app/sitemap.ts:4                                        │
  ├─────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────────────────────────┤
  │ ✅M14│ Sitemap generator script doesn't check robots.index before including pages                                 │ scripts/generate-sitemap.js                                 │
  ├─────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────────────────────────┤
  │ ✅M15│ Testimonials commented out on About page                                                                   │ src/components/About/index.tsx:40-42                        │
  └─────┴────────────────────────────────────────────────────────────────────────────────────────────────────────────┴─────────────────────────────────────────────────────────────┘

  ---
  LOW — Backlog

  ┌─────┬───────────────────────────────────────────────────────────────────────────────────────────────────┬──────────────────────────────────────────────────────┐
  │ ID  │                                               Issue                                               │                       File(s)                        │
  ├─────┼───────────────────────────────────────────────────────────────────────────────────────────────────┼──────────────────────────────────────────────────────┤
  │ ✅L1 │ images.domains deprecated — use remotePatterns only                                               │ next.config.js:26                                    │
  ├─────┼───────────────────────────────────────────────────────────────────────────────────────────────────┼──────────────────────────────────────────────────────┤
  │ ✅L2 │ GTM ID hard-coded — should be process.env.NEXT_PUBLIC_GTM_ID                                      │ src/app/layout.tsx:12                                │
  ├─────┼───────────────────────────────────────────────────────────────────────────────────────────────────┼──────────────────────────────────────────────────────┤
  │ ✅L3 │ /conoce-nuestras-sedes missing from sitemap.ts                                                    │ src/app/sitemap.ts                                   │
  ├─────┼───────────────────────────────────────────────────────────────────────────────────────────────────┼──────────────────────────────────────────────────────┤
  │ ✅L4 │ changefreq and priority in sitemap — Google ignores both                                          │ public/sitemap.xml (deleted; sitemap.ts is now used)  │
  ├─────┼───────────────────────────────────────────────────────────────────────────────────────────────────┼──────────────────────────────────────────────────────┤
  │ ✅L5 │ OG/Twitter titles in English on Spanish contact pages                                             │ contact/page.tsx:28,43, contacto/page.tsx:28,43      │
  ├─────┼───────────────────────────────────────────────────────────────────────────────────────────────────┼──────────────────────────────────────────────────────┤
  │ ✅L6 │ "Mini Swimmer" (two words) in testimonial copy — AI may treat as different entity                 │ dictionary/en.json, es.json (Sebastián Rubio review) │
  ├─────┼───────────────────────────────────────────────────────────────────────────────────────────────────┼──────────────────────────────────────────────────────┤
  │ ✅L7 │ SchemaMarkup component type prop is never read inside the component                               │ src/components/Common/SchemaMarkup.tsx               │
  ├─────┼───────────────────────────────────────────────────────────────────────────────────────────────────┼──────────────────────────────────────────────────────┤
  │ ✅L8 │ No @id property on any Organization schema block                                                  │ All page schema data                                 │
  ├─────┼───────────────────────────────────────────────────────────────────────────────────────────────────┼──────────────────────────────────────────────────────┤
  │ ✅L9 │ FAQPage schema absent (Info: AI/LLM citation benefit; no Google rich results on commercial sites) │ All pages with FAQ content                           │
  ├─────┼───────────────────────────────────────────────────────────────────────────────────────────────────┼──────────────────────────────────────────────────────┤
  │ ❌L10│ No freshness signals — no lastUpdated dates, no seasonal content                                  │ All pages                                            │
  └─────┴───────────────────────────────────────────────────────────────────────────────────────────────────┴──────────────────────────────────────────────────────┘

  ---
  Prioritized Fix Roadmap

  Week 1 — Stop the bleeding (5 fixes, all single-file changes):
  1. ✅ Fix cross-domain canonicals on Miami-Dade and Broward pages (C1)
  2. ✅ Fix Peñalolén canonical pointing to Viña del Mar (C3)
  3. ✅ Fix Broward wrong component import — create real Broward component (C2)
  4. ✅ Standardize all canonicals to non-www miniswimmer.cl (C7)
  5. ✅ Set robots: index: false on registration and reagendamiento (H4)

  Week 2 — Content & structure (highest ROI):
  6. ✅ Replace all SaaS boilerplate in en.json (C4)
  7. ✅ Write real FAQ content in both languages (C5)
  8. ❌ Add real pricing data to pricing page (C6) — needs content from business owner
  9. ✅ Implement correct hreflang cross-references on all ES/EN page pairs (H1)
  10. ✅ Add security headers to next.config.js (H2)

  Week 3 — Schema & sitemap:
  11. ❌ Add SportsActivityLocation schema to all 5 location pages (H5) — needs physical addresses (M8)
  12. ✅ Fix Organization schema url, logo, and sameAs consistency (H5 partial)
  13. ✅ Consolidate to single sitemap.ts, remove public/sitemap.xml (H3)
  14. ✅ Fix WhatsApp URL parameters on Chilean location pages (H7)
  15. ✅ Fix testimonial age translation errors (M6)

  Month 2 — Authority & AI readiness:
  16. ❌ Add named instructor bios with certifications (M9) — needs content from business owner
  17. ❌ Add physical addresses (NAP) to all location pages (M8) — needs content from business owner
  18. ✅ Create public/llms.txt (M3)
  19. ✅ Make FAQ content server-rendered (M4)
  20. ❌ Create location-specific testimonial subsets (H8) — needs content/business decision

  ---
  Top 3 Highest-ROI Actions

  1. Fix the US page canonicals (C1) — 30-minute fix that could restore indexing of two high-value commercial pages with zero other changes.
  2. Implement correct hreflang (H1) — The site's entire bilingual architecture is invisible to Google. One sprint to fix all page pairs would immediately clarify market targeting for Chile vs US.
  3. Replace FAQ placeholder content (C5) — FAQs are the #1 source of AI-citable passages and directly affect Google AI Overviews. The content exists in spirit (swimming school questions are known) but literally none of it is written yet.

  ---
  Items Requiring Business Owner Input (❌)

  - C6: Real pricing data for the pricing page
  - H8: Which testimonials belong to which location (Florida vs Chile separation)
  - M5: Unique features_with_image_section content per page
  - M8: Physical addresses (NAP) for all location pages (required for SportsActivityLocation schema and Google Maps eligibility)
  - M9: Named instructor bios with certifications and photos
  - M12: IndexNow API key from Bing Webmaster Tools
  - L10: Freshness signals — seasonal content calendar and lastUpdated dates
