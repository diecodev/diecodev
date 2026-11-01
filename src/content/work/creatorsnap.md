---
order: 4
name: CreatorSnap
summary: AI thumbnail editor, auth and billing
tagline: The thumbnail editor, authentication and billing for an AI thumbnail product.
highlight: App redesign in 3 weeks
company: CreatorSnap.ai · Contract
period: "2026"
role: Frontend engineer on contract, on a five-person US team with a backend engineer, a designer and a copywriter.
problem: CreatorSnap began as a proof of concept, an early backend for AI thumbnails and the client’s idea, with no product around it. It needed an app people could sign in to, generate and edit thumbnails in, and pay for.
decisions:
  - title: Editing, not only generating
    choice: Each prompt continues from the selected version, with reference images, reusable personas and a mask editor to change only part of a thumbnail.
    tradeoff: An edit costs the same credits as a new image, and the model redraws the whole picture using the mask as guidance, so the prompt asks it to keep everything else unchanged.
  - title: Refresh token out of reach
    choice: Sign-in and session renewal run in server functions against the backend’s auth service. The long-lived refresh token sits in an HttpOnly cookie, and parallel requests share one renewal.
    alternatives: Calling Supabase Auth from the browser with its SDK, the first version, which exposed the refresh token to page JavaScript.
    tradeoff: Sign-in and renewal take an extra hop through the server.
  - title: One typed client for three services
    choice: A single API client for the auth, generation and payment services, with types that mirror the backend’s OpenAPI specs, zod on inputs, and typed error codes such as CREDITS_INSUFFICIENT.
    tradeoff: The types are written by hand, so they have to be kept in step with the backend.
results:
  - value: 3 weeks
    label: to rebuild the whole app in the new design, shipped as 25 stacked pull requests
  - value: ~48
    label: pull requests across the app, the website and billing
  - value: Stripe
    label: credit top-ups and subscriptions, with upgrades charged the same day and downgrades at renewal
outcome: Built the frontend from scratch, then shipped the website redesign and rebuilt the app in the new design in three weeks.
stack: [React, TanStack Start, TypeScript, Stripe]
links:
  - label: creatorsnap.ai
    href: https://www.creatorsnap.ai
tone: peach
cover: ../../assets/work/creatorsnap.jpg
coverAlt: The CreatorSnap website, with the headline “Thumbnails people click, from a single sentence.”
coverCaption: creatorsnap.ai after the website redesign.
video:
  src: /work/creatorsnap.mp4
  poster: /work/creatorsnap-poster.jpg
  width: 1200
  height: 676
  alt: In the CreatorSnap app, a one-sentence idea is typed, the thumbnail is generated and the first version opens with its editing actions.
  caption: From one sentence to a thumbnail in the app.
gallery:
  - image: ../../assets/work/creatorsnap-editor.jpg
    alt: The CreatorSnap editor with a generated thumbnail and the feedback panel open, scoring it 8.6 out of 10 with face, text and focus ratings.
    caption: The editor with feedback on a first version.
previewLabel: Thumbnail editor
---

I built the frontend from scratch with React and TanStack Start, on top of the team’s services for authentication, generation and payments: sign-in and session renewal, the chat-style composer with reference images and personas, a mask editor for changing part of a thumbnail, credit balances, Stripe top-ups and subscriptions.

In October I shipped the redesigned public website, then rebuilt the whole app in the new design in three weeks, as 25 stacked pull requests.
