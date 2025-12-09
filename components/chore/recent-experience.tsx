import * as m from "motion/react-client";
import Link from "next/link";
import { cn } from "~/lib/utils";
import Cloudflare from "~/svg/cloudflare.svg";
import Deno from "~/svg/deno.svg";
import Expo from "~/svg/expo.svg";
import External from "~/svg/external.svg";
import Firebase from "~/svg/firebase.svg";
import Fresh from "~/svg/fresh.svg";
import GH from "~/svg/gh-actions.svg";
import MongoDB from "~/svg/mongodb.svg";
import Next from "~/svg/nextjs.svg";
import Pw from "~/svg/playwright.svg";
import Sanity from "~/svg/sanity.svg";
import Sass from "~/svg/sass.svg";
import Storybook from "~/svg/storybook.svg";
import Strapi from "~/svg/strapi.svg";
import Tailwind from "~/svg/tailwindcss.svg";
import Turbopack from "~/svg/turbopack.svg";
import Turborepo from "~/svg/turborepo.svg";

const recentExperience = [
  {
    id: "viewstats",
    workTitle: "Software Engineer",
    company: "Viewstats By Mr. Beast",
    startYear: 2024,
    endYear: 2025,
    url: "https://www.viewstats.com",
    description:
      "Focused on improving development agility and code quality for public administration solutions, including robust mobile applications built with Expo and its comprehensive toolset. Key contributions included the creation of reusable TypeScript utility libraries shared across the organization, establishing robust documentation practices for maintainability, implementing modern development techniques and best practices, and strategically upgrading outdated projects to enhance system performance and ensure long-term maintainability.",
    thecnologies: [
      { label: "nextjs", icon: Next },
      { label: "firebase", icon: Firebase },
      { label: "tailwindcss", icon: Tailwind },
      { label: "storybook", icon: Storybook },
      { label: "sass", icon: Sass },
      { label: "expo", icon: Expo },
      { label: "turbopack", icon: Turbopack },
      { label: "playwright", icon: Pw },
      { label: "GitHub Actions", icon: GH },
    ],
  },
  {
    id: "energias_naturales",
    workTitle: "Full Stack Developer",
    company: "Energías Naturales SpA",
    startYear: 2023,
    endYear: 2024,
    url: "https://www.energiasnaturales.cl",
    description:
      "Developed a robust public website and an internal platform for data management, featuring advanced session and permission controls. Engineered a high-performance serverless API using Oak on Deno. Built a comprehensive solar calculator with complex project-specific calculations and successfully designed and implemented a custom payment gateway from scratch integrating three payment methods. Achieved significant SEO improvements and boosted page performance scores from 67 to 97 through semantic HTML and image optimization.",
    thecnologies: [
      { label: "deno", icon: Deno },
      { label: "tailwindcss", icon: Tailwind },
      { label: "fresh", icon: Fresh },
      { label: "cloudflare", icon: Cloudflare },
      { label: "nextjs", icon: Next },
      { label: "strapi", icon: Strapi },
      { label: "mongodb", icon: MongoDB },
      { label: "turborepo", icon: Turborepo },
      { label: "sanity", icon: Sanity },
    ],
  },
] as const;

export const RecentExperience = () => {
  return (
    <m.section
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto mt-4 max-w-4xl pb-8"
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.15 }}
    >
      <h2 className="mb-4 font-semibold text-white text-xl">
        Recent Experience
      </h2>

      <div>
        {recentExperience.map((experience, index) => (
          <div
            className={cn(
              "relative pl-6 before:absolute before:top-0 before:bottom-0 before:left-0 before:w-[1px] before:bg-muted",
              {
                "pb-8": index !== recentExperience.length - 1,
                "before:bg-gradient-to-t before:from-transparent before:to-muted":
                  index === recentExperience.length - 1,
              }
            )}
            key={experience.id}
          >
            {/* Timeline dot */}
            <div className="absolute top-1.5 left-[-4px] h-2.5 w-2.5 rounded-full bg-muted-foreground" />

            {/* Year range */}
            <div className="font-mono text-muted-foreground text-xs">
              {experience.startYear} - {experience.endYear}
            </div>

            {/* Job title and company */}
            <h3 className="mt-3 font-medium text-lg text-white leading-tight">
              {experience.workTitle}
            </h3>
            <Link
              className="group mb-3 flex items-center gap-1 text-muted-foreground text-sm transition-colors hover:text-foreground"
              href={experience.url}
              target="_blank"
            >
              {experience.company}
              <External className="size-3 transition-all duration-300 group-hover:translate-x-0.5 group-hover:translate-y-[-0.5px] group-hover:text-foreground" />
            </Link>

            {/* Job description */}
            <p className="mb-4 text-gray-300 text-sm">
              {experience.description}
            </p>

            {/* Technologies */}
            <div className="mt-4 flex flex-wrap gap-2">
              {experience.thecnologies.map((tech) => (
                <div
                  className="flex items-center gap-1.5 rounded-md bg-muted px-2 py-1"
                  key={tech.label}
                >
                  <tech.icon className="h-4 w-4" />
                  <span className="text-gray-300 text-xs">{tech.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </m.section>
  );
};
