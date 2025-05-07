export const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="container max-w-4xl mx-auto py-8 border-t mt-4 border-border/50">
			<div className="flex items-center justify-between text-muted-foreground text-sm tracking-wide">
				<div className="flex items-center gap-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="opacity-75"
						role="graphics-symbol"
					>
						<polyline points="16 18 22 12 16 6" />
						<polyline points="8 6 2 12 8 18" />
					</svg>
					<p>Crafting digital experiences with purpose</p>
				</div>
				<p>Diego Díaz - {currentYear}</p>
			</div>
		</footer>
	);
};
