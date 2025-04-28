import * as m from "motion/react-client";
import Github from "~/svg/github.svg";
import Linkedin from "~/svg/linkedin.svg";
import X from "~/svg/x.svg";
import { Button } from "../ui/button";

const links = [
	{
		label: "Diecodev github",
		href: "https://github.com/diecodev",
		icon: Github,
	},
	{
		label: "Diecodev linkedin",
		href: "https://linkedin.com/in/diecodev",
		icon: Linkedin,
	},
	{
		label: "Diecodev x",
		href: "https://x.com/diecodev",
		icon: X,
	},
];

export const Header = () => {
	return (
		<m.header
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				duration: 0.5,
				ease: [0.4, 0, 0.2, 1],
			}}
			className="flex justify-center rounded-xl overflow-clip z-10 my-3 mx-auto fixed top-2 left-1/2 -translate-x-1/2"
		>
			<nav className="flex items-center justify-between px-4 backdrop-blur-sm">
				<ul className="flex items-center gap-2">
					{links.map((link, i) => (
						<m.li
							key={link.label}
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.4,
								ease: [0.4, 0, 0.2, 1],
								delay: 0.15 + i * 0.05, // Stagger children animations
							}}
						>
							<Button variant="ghost" asChild className="has-[>svg]:p-0 size-8">
								<a
									href={link.href}
									className="text-sm text-neutral-300 hover:text-white transition-colors"
								>
									<link.icon className="size-5" />
								</a>
							</Button>
						</m.li>
					))}
				</ul>
			</nav>
		</m.header>
	);
};
