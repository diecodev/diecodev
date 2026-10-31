---
order: 2
name: PMG
summary: Campaign hub and a lighter content hub
tagline: The hub behind PMG’s 2026 brand campaign, and performance and platform work on PMG’s content hubs.
highlight: 327 → 165 kB
company: Sancrisoft
period: 2025–2026
role: Full-stack developer on the Sancrisoft team, with about 30 pull requests on the campaign hub.
decisions:
  - title: Keep the CMS SDK off the client
    choice: Removed the Contentful SDK from the browser bundle and a redundant API request on the Hub search page.
  - title: Preview without leaking drafts
    choice: Request-scoped preview with AsyncLocalStorage and a Vercel ISR cache bypass keeps unpublished content isolated.
  - title: One sign-in for both hubs
    choice: Moved the PMG and Momentum hubs from Google sign-in to Okta.
results:
  - value: 327 → 165 kB
    label: first-load JavaScript on the Hub search page
  - value: ~30
    label: pull requests on the campaign hub
  - value: "2"
    label: hubs moved from Google sign-in to Okta
outcome: Hub search-page first-load JavaScript went from 327 kB to 165 kB. The campaign hub was promoted by full-page ads in The Wall Street Journal.
stack: [Astro, Next.js, Contentful, GraphQL, Vercel, Okta]
links:
  - label: Engineered for Impact
    href: https://www.pmg.com/engineered-for-impact
tone: rose
previewLabel: Campaign hub · Hub performance
---

For Engineered for Impact, the hub behind PMG’s 2026 brand campaign, I built the CMS-driven header and footer, campaign content blocks, subscribe and contact flows, multi-theme article routing, and the print vanity and QR-code redirects with UTM tracking. The campaign was promoted with full-page ads in The Wall Street Journal.

On PMG Hub I built the recordings module with Contentful data, category navigation, detail pages, pagination and ISR, extracted reusable content-block rendering, and enabled editor-curated announcement ordering through GraphQL.

Across PMG’s sites I added EMEA content targeting through Vercel geolocation middleware, fixed localized canonical URLs and redirect loops, upgraded the Momentum hub to Next.js 15, and fixed session, hydration and form-routing issues.
