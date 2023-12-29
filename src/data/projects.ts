interface iProject {
  title: string;
  description: string;
  type: "App" | "Library";
  url: string;
  gh: string;
  tags: string[];
}

export const PROJECTS: iProject[] = [
  {
    title: "moick",
    description:
      "🔔 A versatile multi-package library for Toast notifications.",
    type: "Library",
    url: "https://www.npmjs.com/package/@moick/qwik",
    gh: "https://github.com/diecodev/moick",
    tags: ["Typescript", "Vite", "Qwik", "GitHub Actions"],
  },
  {
    title: "portfolio",
    description: "👨‍💻 My personal website.",
    type: "App",
    url: "https://diecodev.deno.dev",
    gh: "https://github.com/diecodev/diecodev",
    tags: ["Astro", "Tailwind CSS", "Typescript"],
  },
];
