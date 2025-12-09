import { Databuddy } from "@databuddy/sdk/react";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import { DatabuddyAnalytics } from "./analytics";
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
  const isDevelopment = process.env.NODE_ENV === "development";
  const isProduction = process.env.NODE_ENV === "production";

  return (
    <html className={`${geistSans.variable} ${geistMono.variable}`} lang="en">
      <body className="min-h-svh antialiased">
        <Databuddy
          clientId="tZhMcXkjewbyniYKtIVBv"
          disabled={isDevelopment}
          enableBatching={isProduction}
          trackAttributes={isProduction}
          // @ts-expect-error
          trackBounceRate={isProduction}
          trackEngagement={isProduction}
          trackErrors={isProduction}
          trackExitIntent={isProduction}
          trackHashChanges={isProduction}
          trackInteractions={isProduction}
          trackOutgoingLinks={isProduction}
          trackPerformance={isProduction}
          trackScreenViews={isProduction}
          trackScrollDepth={isProduction}
          trackWebVitals={isProduction}
        />
        {children}
        <div className="fixed inset-0 z-[-1] h-full w-full rounded-none bg-[url(/bg-noise.png)] bg-size-[200px] bg-repeat opacity-[0.05]" />
        <Analytics />
        <Suspense fallback={null}>
          <DatabuddyAnalytics />
        </Suspense>
      </body>
    </html>
  );
}
