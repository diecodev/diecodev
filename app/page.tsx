import * as m from "motion/react-client";
import Link from "next/link";
import { Footer } from "~/components/chore/footer";
import { Projects } from "~/components/chore/projects";
import { RecentExperience } from "~/components/chore/recent-experience";
import { Spotlight } from "~/components/ui/spotlight";
import Scrible from "~/svg/scrible.svg";
import { Header } from "../components/chore/header";

export default function Home() {
	return (
		<div className="min-h-svh px-6">
			<Header />
			<div className="relative max-h-[35rem] aspect-square h-auto w-full flex flex-col items-center justify-center">
				<m.div
					className="absolute top-0 bottom-0 max-w-[35rem] w-full opacity-50 overflow-clip"
					initial={{ opacity: 0, scale: 0.97 }}
					animate={{ opacity: 0.5, scale: 1 }}
					transition={{
						duration: 0.8,
						ease: [0.4, 0, 0.2, 1],
						delay: 0.4,
					}}
				>
					<div className="absolute inset-0 mask-[linear-gradient(180deg,rgba(0,0,0,0)_20%,rgba(0,0,0,0.28)_30%,rgba(0,0,0,1)_80%)] mask-add">
						<div className="absolute inset-0 mask-[radial-gradient(50%_47%_at_50%_46.6%,rgba(0,0,0,0)_6.1039%,rgba(0,0,0,0.1)_22.7266%,rgba(0,0,0,1)_64.5358%,rgba(0,0,0,0)_100%)] mask-add">
							<Scrible className="w-full h-full object-cover object-center block" />
						</div>
					</div>
				</m.div>
				<main className="relative flex flex-col items-center justify-center max-w-lg mx-auto z-[1]">
					<m.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
						className=" text-4xl md:text-6xl font-semibold leading-[1.2]"
					>
						Diecodev
					</m.h1>
					<m.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
						className="text-center text-neutral-300 leading-relaxed md:text-balance text-pretty"
					>
						Full-stack developer crafting modern web experiences using
						TypeScript, React, and Node.js.
					</m.p>
					<m.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
						className="mt-8 relative overflow-clip rounded-md border border-white/20 text-white transition-colors bg-white/10 text-sm"
					>
						<Spotlight
							className="bg-white/40 blur-2xl"
							size={64}
							springOptions={{
								bounce: 0.3,
								duration: 0.1,
							}}
						/>
						<Link
							href="/diecodev_resume.pdf"
							target="_blank"
							className="flex items-center gap-2 px-4 py-2"
						>
							<m.svg
								strokeWidth="1.5"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								color="currentColor"
								role="graphics-symbol"
								animate={{
									y: [-1, 1, -1],
									transition: {
										repeat: Number.POSITIVE_INFINITY,
										duration: 1,
										ease: "easeInOut",
										repeatType: "reverse",
									},
								}}
								variants={{
									idle: { y: 0 },
									hover: { y: [-1, 1, -1] },
								}}
								className="w-4 h-4"
							>
								<path
									d="M6 20h12M12 4v12m0 0l3.5-3.5M12 16l-3.5-3.5"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</m.svg>
							Download CV
						</Link>
					</m.div>
				</main>
			</div>
			<RecentExperience />
			<Projects />
			<Footer />
		</div>
	);
}
