import { Databuddy } from "@databuddy/sdk";
import { Analytics } from "@vercel/analytics/react";
import { isbot } from "isbot";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Diecodev - Home",
	description:
		"Full Stack Web Developer with +5 years of experience in JavaScript/TypeScript. Specializing in user-centric web applications, I'm currently open to new opportunities. Let's build something great together!",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const _ = await headers();
	const ua = _.get("user-agent") || _.get("User-Agent") || "unknown";

	console.log("isBot: ", isbot(ua));
	console.log("UA: ", ua);

	return (
		<html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
			<body className="antialiased min-h-svh">
				{children}
				<div className="w-full h-full bg-size-[200px] bg-repeat bg-[url(/bg-noise.png)] opacity-[0.05] rounded-none fixed inset-0 z-[-1]" />
				<Analytics />
				<Databuddy
					clientId="tZhMcXkjewbyniYKtIVBv"
					trackHashChanges={true}
					trackAttributes={true}
					trackOutgoingLinks={true}
					trackInteractions={true}
					trackEngagement={true}
					trackScrollDepth={true}
					trackExitIntent={true}
					trackBounceRate={true}
					trackWebVitals={true}
					trackErrors={true}
					enableBatching={true}
				/>
			</body>
		</html>
	);
}
