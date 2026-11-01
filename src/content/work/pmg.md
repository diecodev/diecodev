---
order: 2
name: PMG
summary: Brand campaign on pmg.com in 17 days
tagline: Engineered for Impact, the pages behind PMG’s 2026 brand campaign, and ongoing platform work on pmg.com.
highlight: 17 days to production
company: Sancrisoft
period: 2025–2026
role: Full-stack developer on the two-person Sancrisoft team that builds and maintains pmg.com, with about 30 pull requests on the campaign.
problem: PMG needed Engineered for Impact, the home of its 2026 brand campaign, live on pmg.com the morning its full-page ad ran in The Wall Street Journal, three weeks after work started. The code had to reach production days earlier, so editors could assemble the pages themselves in Contentful.
decisions:
  - title: Stable references across CMS environments
    choice: Campaign entries are fetched by a stable customId field instead of Contentful entry IDs.
    alternatives: Contentful entry IDs, which differ between the test and production environments.
    tradeoff: One more field for editors to fill in on each entry, in exchange for the same code working against both environments.
  - title: Print traffic you can measure
    choice: Vanity URLs and QR codes for each print placement redirect to the campaign with UTM tags per placement and per type, starting with The Wall Street Journal.
    alternatives: One generic URL in every ad, with no way to tell placements or QR scans apart.
    tradeoff: The redirects live in the Vercel config, so a new placement needs a deploy.
  - title: Previews that never leak drafts
    choice: A token-protected preview link per entry, scoped to that request with AsyncLocalStorage, with Vercel’s ISR cache bypassed so drafts never reach the public cache.
    alternatives: The old setup, a deployment-wide preview switch with no secret and no per-entry path, which had stopped working.
    tradeoff: Each Contentful environment maps to its own deployment, and redirecting links to the right one caused a www redirect loop that needed a hotfix.
  - title: One URL per article
    choice: Articles in several campaign themes take their URL from the first theme; other theme URLs return 404 and “Keep reading” lists each article once.
    alternatives: One URL per theme, which publishes the same article several times.
    tradeoff: The order of themes in the CMS decides the URL, so editors have to choose it on purpose.
results:
  - value: 17 days
    label: from the first commit to production, four days before the WSJ ad ran
  - value: ~30
    label: pull requests on the campaign
  - value: 1 MB → 98 KB
    label: campaign background pattern, served as WebP with no visible loss
outcome: The campaign reached production 17 days after the first commit and launched four days later, the morning its full-page ad ran in The Wall Street Journal.
stack: [Astro, TypeScript, Contentful, GraphQL, Vercel, HubSpot]
links:
  - label: Engineered for Impact
    href: https://www.pmg.com/engineered-for-impact
tone: rose
cover: ../../assets/work/pmg.jpg
coverAlt: The Engineered for Impact campaign on pmg.com, opening with “Intelligence isn’t the advantage. What you do with it is.”
coverCaption: The campaign, live at pmg.com.
video:
  src: /work/pmg.mp4
  poster: /work/pmg-poster.jpg
  width: 1200
  height: 750
  alt: A scroll through the Engineered for Impact campaign, from its opening statement down to its three questions.
  caption: The campaign, live at pmg.com.
gallery:
  - image: ../../assets/work/pmg-questions.jpg
    alt: The campaign’s question blocks, “How should we operate now?” and two more, next to the “Operate smarter. Decide faster. Grow.” mark.
    caption: Campaign content blocks on pmg.com.
previewLabel: Brand campaign · Headless CMS
---

For Engineered for Impact, the section of pmg.com behind PMG’s 2026 brand campaign, I built the CMS-driven header and footer, the campaign’s content blocks, the subscribe modal and contact forms, routing for articles in several themes, and the print vanity and QR-code redirects with UTM tracking. Before launch I also helped build the campaign’s pages in Contentful with PMG’s team. It went live the morning its full-page ad ran in The Wall Street Journal.

On pmg.com I also set up safe content previews, added structured sitemaps and about 110 legacy redirects for the March 2026 relaunch, fixed duplicate content between English locales with canonical URLs, and added EMEA-only content through Vercel geolocation. Day to day, we build the features PMG’s campaigns need, fix bugs and answer the team’s questions about the site and the CMS. We also maintain PMG’s internal hubs, which sit behind sign-in and aren’t covered here.
