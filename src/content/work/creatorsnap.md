---
order: 4
name: CreatorSnap
summary: AI thumbnail editor, auth and billing
tagline: The thumbnail editor, authentication and billing for an AI thumbnail product.
highlight: Redesign shipped
company: CreatorSnap.ai · Contract
period: "2026"
role: Frontend Engineer on contract with a US team.
decisions:
  - title: Editing, not only generating
    choice: Conversational composition, reference uploads, reusable personas and a mask editor for targeted regeneration.
  - title: Sessions on the server
    choice: Server functions handle authentication with access and HttpOnly refresh cookies and session renewal.
  - title: Typed seams between services
    choice: Separate authentication, generation and payment services are integrated with typed validation.
results:
  - value: Stripe
    label: credit balances, live generation quotes, top-ups and subscriptions
  - value: "2"
    label: redesigns shipped, the website and the app
  - value: Editor
    label: masks and inpainting for targeted regeneration
outcome: Shipped credits, live quotes, Stripe top-ups and subscriptions, the website redesign and the app redesign.
stack: [React, TanStack Start, TypeScript, Stripe]
links:
  - label: creatorsnap.ai
    href: https://www.creatorsnap.ai
tone: peach
previewLabel: Thumbnail editor
---

I built the thumbnail-generation experience with React and TanStack Start, implemented authentication with server functions, and integrated the separate authentication, generation and payment services.

I delivered credit balances, live generation quotes, Stripe Checkout top-ups, subscription billing interfaces, onboarding and the product’s website redesign, then designed and shipped the app redesign that is now in production.
