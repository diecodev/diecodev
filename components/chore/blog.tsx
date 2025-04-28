"use client";

import * as m from "motion/react-client";
import Link from "next/link";
import { useLayoutEffect } from "react";
import Back from "~/svg/back.svg";
import { links } from "./header";

export const Header = () => {
	return (
		<header className="py-4 px-6 sticky top-0 z-10 bg-background/10 backdrop-blur-sm container mx-auto max-w-3xl">
			<div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
				<Link
					href="/"
					className="text-sm text-muted-foreground flex items-center gap-1 hover:text-foreground transition-colors group"
				>
					<Back className="size-4 transition-all duration-300 translate-x-1 group-hover:translate-x-0 group-hover:text-foreground" />
					Go Home
				</Link>

				<nav className="w-full sm:w-auto">
					<ul className="flex items-center justify-center sm:justify-end gap-4">
						{links.map((link) => (
							<li key={link.label}>
								<Link
									href={link.href}
									className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors p-1"
									title={link.label}
								>
									<link.icon className="size-4" />
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<m.div
			className="container mx-auto max-w-3xl pb-8 px-6 flex flex-col"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
		>
			{children}
		</m.div>
	);
};
