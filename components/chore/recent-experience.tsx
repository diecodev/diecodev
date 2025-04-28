import * as m from "motion/react-client";
import Link from "next/link";
import { cn } from "~/lib/utils";
import Cloudflare from "~/svg/cloudflare.svg";
import Deno from "~/svg/deno.svg";
import Expo from "~/svg/expo.svg";
import External from "~/svg/external.svg";
import Firebase from "~/svg/firebase.svg";
import Fresh from "~/svg/fresh.svg";
import Next from "~/svg/nextjs.svg";
import Pw from "~/svg/playwright.svg";
import Sass from "~/svg/sass.svg";
import Storybook from "~/svg/storybook.svg";
import Strapi from "~/svg/strapi.svg";
import Tailwind from "~/svg/tailwindcss.svg";
import Turbopack from "~/svg/turbopack.svg";

const recentExperience = [
	{
		id: "viewstats",
		workTitle: "Software Engineer",
		company: "Viewstats By Mr. Beast",
		startYear: 2024,
		endYear: "Present",
		url: "https://www.viewstats.com",
		seeMore: "/viewstats",
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
		],
	},
	{
		id: "energias_naturales",
		workTitle: "Full Stack Developer",
		company: "Energías Naturales SpA",
		startYear: 2023,
		endYear: 2024,
		url: "https://www.energiasnaturales.cl",
		seeMore: "/energiasnaturales",
		description:
			"Developed a robust public website and an internal platform for data management, featuring advanced session and permission controls. Engineered a high-performance serverless API using Oak on Deno. Built a comprehensive solar calculator with complex project-specific calculations and successfully designed and implemented a custom payment gateway from scratch integrating three payment methods. Achieved significant SEO improvements and boosted page performance scores from 67 to 97 through semantic HTML and image optimization.",
		thecnologies: [
			{ label: "deno", icon: Deno },
			{ label: "tailwindcss", icon: Tailwind },
			{ label: "fresh", icon: Fresh },
			{ label: "turbopack", icon: Turbopack },
			{ label: "cloudflare", icon: Cloudflare },
			{ label: "nextjs", icon: Next },
			{ label: "strapi", icon: Strapi },
		],
	},
] as const;

export const RecentExperience = () => {
	return (
		<m.section
			className="container max-w-4xl mx-auto mt-4 pb-8"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
		>
			<h2 className="text-xl font-semibold text-white mb-4">
				Recent Experience
			</h2>

			<div>
				{recentExperience.map((experience, index) => (
					<m.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.5,
							ease: [0.4, 0, 0.2, 1],
							delay: index * 0.2,
						}}
						key={experience.id}
						className={cn(
							"relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[1px]  before:bg-muted",
							{
								"pb-8": index !== recentExperience.length - 1,
								"before:bg-gradient-to-t before:from-transparent before:to-muted":
									index === recentExperience.length - 1,
							},
						)}
					>
						{/* Timeline dot */}
						<div className="absolute left-[-4px] top-1.5 w-2.5 h-2.5 rounded-full bg-muted-foreground" />

						{/* Year range */}
						<div className="text-xs text-muted-foreground font-mono">
							{experience.startYear} - {experience.endYear}
						</div>

						{/* Job title and company */}
						<h3 className="text-lg font-medium text-white leading-tight mt-3">
							{experience.workTitle}
						</h3>
						<Link
							href={experience.url}
							target="_blank"
							className="text-sm text-muted-foreground mb-3 flex items-center gap-1 hover:text-foreground transition-colors group"
						>
							{experience.company}
							<External className="size-3 transition-all duration-300 group-hover:translate-x-0.5 group-hover:translate-y-[-0.5px] group-hover:text-foreground" />
						</Link>

						{/* Job description */}
						<p className="text-gray-300 mb-4 text-sm">
							{experience.description}
						</p>

						{/* Technologies */}
						<div className="flex flex-wrap gap-2 mt-4">
							{experience.thecnologies.map((tech) => (
								<div
									key={tech.label}
									className="flex items-center gap-1.5 bg-muted rounded-md px-2 py-1"
								>
									<tech.icon className="w-4 h-4" />
									<span className="text-xs text-gray-300">{tech.label}</span>
								</div>
							))}
						</div>

						{/* See more link */}
						<Link
							href={experience.seeMore}
							className="inline-block mt-3 text-sm text-blue-400 hover:underline"
						>
							See project details →
						</Link>
					</m.div>
				))}
			</div>
		</m.section>
	);
};
