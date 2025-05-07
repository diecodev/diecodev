import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
			<body className="antialiased min-h-svh">
				{children}
				<div className="w-full h-full bg-size-[200px] bg-repeat bg-[url(/bg-noise.png)] opacity-[0.05] rounded-none fixed inset-0 z-[-1]" />
				<Analytics />
			</body>
		</html>
	);
}
