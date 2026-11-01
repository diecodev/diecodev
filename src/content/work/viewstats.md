---
order: 3
name: Viewstats
summary: Design system and build tooling
tagline: A shared component layer and faster builds for Viewstats’ web and mobile apps.
highlight: 15 → 8 min builds
company: Viewstats
period: 2024–2025
role: Software Engineer. I led the design system with two engineers and a designer, and worked on the paid web app and the mobile app.
problem: The web app had grown on global SCSS, so every button, input and dropdown came in slightly different versions and each new feature meant fighting style specificity. Builds took about 15 minutes per commit, and the mobile app froze on chart-heavy screens.
decisions:
  - title: One component layer
    choice: Built the design system from reusable, polymorphic React and TypeScript components documented in Storybook.
    alternatives: An existing component library. I proposed one, but the team didn’t want more dependencies in an already heavy app.
    tradeoff: More components built from scratch, with a designer keeping them grounded in real screens.
  - title: Webpack to Turbopack
    choice: Moved the Next.js build to Turbopack, replaced incompatible plugins such as SVGR and the SCSS setup, and removed dead routes.
    alternatives: Staying on webpack, with builds of more than 15 minutes for every branch and commit on Vercel.
    tradeoff: Several days of side-by-side testing until every page behaved exactly as in production.
  - title: Bridgeless React Native
    choice: Moved the Expo app to React Native’s new, bridgeless architecture and rebuilt the charts with Victory Native and Reanimated, so they animate on the UI thread instead of blocking JavaScript.
    alternatives: Keeping the bridge and the charts drawn with basic React Native views, which froze the app on analytics screens.
    tradeoff: Breaking changes across several packages; some had to be replaced rather than upgraded.
results:
  - value: −40%
    label: feature development time, measured by the team and the board
  - value: 15 → 8 min
    label: build time per commit on Vercel, about 45% less
  - value: 20×
    label: faster app loading, measured on iPhone 13, 16 Pro and 16 Pro Max devices
outcome: Features shipped 40% faster on the design system, builds went from about 15 minutes to 7–9, and the app loaded 20× faster.
stack: [React, TypeScript, Storybook, Next.js, Turbopack, Expo]
links:
  - label: viewstats.com
    href: https://www.viewstats.com
tone: mint
cover: ../../assets/work/viewstats.jpg
coverAlt: The public Viewstats website, introducing tools to create video ideas, titles and thumbnails.
coverCaption: viewstats.com, the public site. The app and its design system sit behind a paid plan.
gallery:
  - image: ../../assets/work/viewstats-channel.jpg
    alt: A public Viewstats channel page with subscriber and view totals, 28-day views, subscribers and revenue, a views chart and the long versus Shorts split.
    caption: A public channel page on viewstats.com.
previewLabel: Design system · Build tooling
---

Viewstats is a YouTube analytics product. I worked on the paid web app and the mobile app, and the design system was internal, so beyond the public pages shown here, this case focuses on the decisions and their results.

Before the design system, a typical feature took about three days. Afterwards, many shipped within hours or a day.

I also built internal tools with URL-persisted state and TanStack Query caching, and set up automated testing, CI/CD, linting, private-package releases and production monitoring.
