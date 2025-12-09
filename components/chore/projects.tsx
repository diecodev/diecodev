import * as m from "motion/react-client";
import Link from "next/link";
import External from "~/svg/external.svg";
// Import SVG icons
import GithubActions from "~/svg/gh-actions.svg";
import Github from "~/svg/github.svg";
import Qwik from "~/svg/qwik.svg";
import Typescript from "~/svg/ts.svg";
import Vite from "~/svg/vite.svg";
import { Spotlight } from "../ui/spotlight";

const projects = [
  {
    title: "qwik-sonner",
    description: "🔔 An opinionated toast component for Qwik Framework.",
    type: "Library",
    url: "https://qwik-sonner.deno.dev",
    gh: "https://github.com/diecodev/qwik-sonner",
    tags: [
      { label: "Typescript", icon: Typescript },
      { label: "Vite", icon: Vite },
      { label: "Qwik", icon: Qwik },
      { label: "GitHub Actions", icon: GithubActions },
    ],
  },
  {
    title: "qwik-date",
    description: "📆 An opinionated date picker component for Qwik Framework",
    type: "Library",
    url: "https://qwik-date.deno.dev",
    gh: "https://github.com/diecodev/qwik-date",
    tags: [
      { label: "Typescript", icon: Typescript },
      { label: "Vite", icon: Vite },
      { label: "Qwik", icon: Qwik },
      { label: "GitHub Actions", icon: GithubActions },
    ],
  },
] as const;

export const Projects = () => (
  <m.section
    animate={{ opacity: 1, y: 0 }}
    className="container mx-auto mt-4 max-w-4xl pb-8"
    initial={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.15 }}
  >
    <h2 className="mb-4 font-semibold text-white text-xl">Personal Projects</h2>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {projects.map((project) => (
        <div
          className="relative h-fit overflow-hidden rounded-md bg-border/80 p-px"
          key={project.title}
        >
          <Spotlight
            className="from-foreground/50 via-foreground/50 to-foreground/50 blur-md"
            size={60}
            springOptions={{
              bounce: 0.3,
              duration: 0.1,
            }}
          />
          <div className="relative w-full rounded-md bg-neutral-900">
            <Spotlight
              className="bg-foreground/20 bg-none blur-3xl"
              size={100}
              springOptions={{
                bounce: 0.3,
                duration: 0.1,
              }}
            />
            <div className="flex h-full flex-col gap-2 p-2 px-3">
              <header className="flex items-center justify-between">
                <Link
                  className="group relative flex items-center gap-1 font-medium transition-colors hover:text-foreground"
                  href={project.url}
                  target="_blank"
                >
                  <span className="relative inline-block">
                    {project.title}
                    <span className="absolute bottom-0 left-0 h-[1px] w-full origin-left scale-x-0 bg-foreground transition-transform duration-300 group-hover:scale-x-100" />
                  </span>
                  <External className="size-3 transition-all duration-300 group-hover:translate-x-0.5 group-hover:translate-y-[-0.5px] group-hover:text-foreground" />
                </Link>
                <a
                  className="text-neutral-400 text-sm transition-colors hover:text-foreground"
                  href={project.gh}
                  rel="noreferrer"
                  target="_blank"
                  title="Go to GitHub repository"
                >
                  <Github className="size-4 transition-all duration-300 hover:text-foreground" />
                </a>
              </header>
              <p className="mt-1 text-neutral-300 text-sm">
                {project.description}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    className="flex items-center gap-1.5 rounded-md bg-muted px-2 py-1 text-gray-300 text-xs"
                    key={tag.label}
                  >
                    <tag.icon className="size-3.5" />
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </m.section>
);
