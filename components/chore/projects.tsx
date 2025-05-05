import * as m from "motion/react-client";
import Link from "next/link";
import External from "~/svg/external.svg";
import Github from "~/svg/github.svg";
import { Spotlight } from "../ui/spotlight";

// Import SVG icons
import GithubActions from "~/svg/gh-actions.svg";
import Qwik from "~/svg/qwik.svg";
import Typescript from "~/svg/ts.svg";
import Vite from "~/svg/vite.svg";

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

export const Projects = () => {
	return (
		<m.section
			className="container max-w-4xl mx-auto mt-4 pb-8"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.15 }}
		>
			<h2 className="text-xl font-semibold text-white mb-4">
				Personal Projects
			</h2>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				{projects.map((project) => (
					<div
						className="relative h-fit overflow-hidden rounded-md bg-border/80 p-px"
						key={project.title}
					>
						<Spotlight
							className="blur-md from-foreground/50 via-foreground/50 to-foreground/50"
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
							<div className="p-2 px-3 flex flex-col h-full gap-2">
								<header className="flex items-center justify-between">
									<Link
										href={project.url}
										target="_blank"
										className="font-medium flex items-center gap-1 hover:text-foreground transition-colors group relative"
									>
										<span className="relative inline-block">
											{project.title}
											<span className="absolute bottom-0 left-0 w-full h-[1px] bg-foreground scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
										</span>
										<External className="size-3 transition-all duration-300 group-hover:translate-x-0.5 group-hover:translate-y-[-0.5px] group-hover:text-foreground" />
									</Link>
									<a
										href={project.gh}
										target="_blank"
										className="text-sm text-neutral-400 hover:text-foreground transition-colors"
										rel="noreferrer"
										title="Go to GitHub repository"
									>
										<Github className="size-4 transition-all duration-300 hover:text-foreground" />
									</a>
								</header>
								<p className="text-sm text-neutral-300 mt-1">
									{project.description}
								</p>
								<div className="mt-2 flex flex-wrap gap-2">
									{project.tags.map((tag) => (
										<span
											key={tag.label}
											className="text-xs text-gray-300 flex items-center gap-1.5 bg-muted rounded-md px-2 py-1"
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
};
