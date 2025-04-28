import { ContentWrapper, Header } from "~/components/chore/blog";

export default function BlogLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="relative min-h-svh">
			<Header />
			<ContentWrapper>{children}</ContentWrapper>
		</div>
	);
}
