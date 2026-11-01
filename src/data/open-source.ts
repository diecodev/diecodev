export interface OpenSourceProject {
  description: string;
  href: string;
  meta: string;
  name: string;
}

export const openSource: OpenSourceProject[] = [
  {
    description: "Toast library for Qwik with styled and headless APIs.",
    href: "https://qwik-sonner.dieco.dev",
    meta: "~56K downloads in the last 12 months · 2.0 beta · creator and maintainer",
    name: "qwik-sonner",
  },
  {
    description:
      "Calendar for Qwik v2 with range selection, any locale and zero runtime dependencies.",
    href: "https://qwik-date.dieco.dev",
    meta: "2.0 beta · 117 tests on Chromium and WebKit",
    name: "qwik-date",
  },
  {
    description:
      "Merged fixes to the Vite optimizer’s library entry points and the Supabase auth helpers.",
    href: "https://github.com/QwikDev/qwik/pulls?q=is%3Apr+author%3Adiecodev+is%3Amerged",
    meta: "PRs #6178 · #4745",
    name: "QwikDev/qwik",
  },
];
