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
    title: "qwik-sonner",
    description: "🔔 An opinionated toast component for Qwik Framework.",
    type: "Library",
    url: "https://qwik-sonner.dieco.dev",
    gh: "https://github.com/diecodev/qwik-sonner",
    tags: ["Typescript", "Vite", "Qwik", "GitHub Actions"],
  },
  {
    title: "qwik-date",
    description:
      "📆 An opinionated date picker component for Qwik Framework. (Inline and Popup modes)",
    type: "Library",
    url: "https://qwik-date.dieco.dev",
    gh: "https://github.com/diecodev/qwik-date",
    tags: ["Typescript", "Vite", "Qwik", "GitHub Actions"],
  },
];
