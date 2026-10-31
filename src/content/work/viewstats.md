---
order: 3
name: Viewstats
summary: Design system and build tooling
tagline: A shared component layer and faster builds for Viewstats’ web and mobile apps.
highlight: −45% build time
company: Viewstats
period: 2024–2025
role: Software Engineer. I led the design system.
decisions:
  - title: One component layer
    choice: Built the design system from reusable, polymorphic React and TypeScript components documented in Storybook.
  - title: Webpack to Turbopack
    choice: Migrated the Next.js build to Turbopack and replaced the plugins that were incompatible with it.
  - title: Expo’s new architecture
    choice: Upgraded the React Native app to Expo’s new architecture and replaced outdated dependencies with native modules.
results:
  - value: −40%
    label: feature development time with the design system
  - value: −45%
    label: Next.js build time after moving to Turbopack
  - value: 20×
    label: faster app loading on the new architecture
outcome: Feature development time −40%, build time −45%, app loading 20× faster.
stack: [React, TypeScript, Storybook, Next.js, Turbopack, Expo]
links:
  - label: viewstats.com
    href: https://www.viewstats.com
tone: mint
previewLabel: Design system · Build tooling
---

The product is a paid app and the design system was internal, so this case focuses on the decisions and their results rather than screens.

I also built internal tools with URL-persisted state and TanStack Query caching, and set up automated testing, CI/CD, linting, private-package releases and production monitoring.
