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
    url: "https://www.npmjs.com/package/qwik-sonner",
    gh: "https://github.com/diecodev/qwik-sonner",
    tags: ["Typescript", "Vite", "Qwik", "GitHub Actions"],
  },
];
