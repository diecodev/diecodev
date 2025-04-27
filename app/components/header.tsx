import * as m from "motion/react-client";
import Link from "next/link";

const links = [
	{ href: "#", label: "About" },
	{ href: "#", label: "Projects" },
	{ href: "#", label: "Blog" },
	{ href: "#", label: "Contact" },
];

export const Header = () => {
	return (
		<m.header
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				duration: 0.5,
				ease: [0.4, 0, 0.2, 1],
				delay: 0.4, // Starts after hero animation
			}}
			className="max-w-md flex justify-center rounded-xl overflow-clip z-10 h-14 mx-auto fixed top-4 left-1/2 -translate-x-1/2 w-full"
		>
			<nav className="flex items-center justify-between w-[calc(100%_-_2rem)] px-4 backdrop-blur-sm h-full">
				<m.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 0.3,
						ease: [0.4, 0, 0.2, 1],
						delay: 1.2, // Appears after links
					}}
				>
					<Link href="https://github.com/diecodev" target="_blank">
						<svg
							strokeWidth="1.5"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							color="currentColor"
							className="w-5 h-5 text-neutral-300 hover:text-white transition-colors"
						>
							<title>GitHub - diecodev</title>
							<path
								d="M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</Link>
				</m.div>
				<ul className="flex items-center gap-6">
					{links.map((link, i) => (
						<m.li
							key={link.label}
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.4,
								ease: [0.4, 0, 0.2, 1],
								delay: 0.6 + i * 0.1, // Stagger children animations
							}}
						>
							<a
								href={link.href}
								className="text-sm text-neutral-300 hover:text-white transition-colors"
							>
								{link.label}
							</a>
						</m.li>
					))}
				</ul>
				<m.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 0.3,
						ease: [0.4, 0, 0.2, 1],
						delay: 1.2, // Appears after links
					}}
				>
					<Link href="https://linkedin.com/in/diecodev" target="_blank">
						<svg
							strokeWidth="2"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							color="currentColor"
							className="w-5 h-5 text-neutral-300 hover:text-white transition-colors"
						>
							<title>LinkedIn - diecodev</title>
							<path
								d="M21 8v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5zM7 17v-7"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M11 17v-3.25M11 10v3.75m0 0c0-3.75 6-3.75 6 0V17M7 7.01l.01-.011"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</Link>
				</m.div>
			</nav>
		</m.header>
	);
};
