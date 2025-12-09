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
      <div className="relative flex aspect-square h-auto max-h-[35rem] w-full flex-col items-center justify-center">
        <m.div
          animate={{ opacity: 0.5, scale: 1 }}
          className="absolute top-0 bottom-0 w-full max-w-[35rem] overflow-clip opacity-50"
          initial={{ opacity: 0, scale: 0.97 }}
          transition={{
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1],
            delay: 0.4,
          }}
        >
          <div className="mask-[linear-gradient(180deg,rgba(0,0,0,0)_20%,rgba(0,0,0,0.28)_30%,rgba(0,0,0,1)_80%)] mask-add absolute inset-0">
            <div className="mask-[radial-gradient(50%_47%_at_50%_46.6%,rgba(0,0,0,0)_6.1039%,rgba(0,0,0,0.1)_22.7266%,rgba(0,0,0,1)_64.5358%,rgba(0,0,0,0)_100%)] mask-add absolute inset-0">
              <Scrible className="block h-full w-full object-cover object-center" />
            </div>
          </div>
        </m.div>
        <main className="relative z-[1] mx-auto flex max-w-lg flex-col items-center justify-center">
          <m.h1
            animate={{ opacity: 1, y: 0 }}
            className="font-semibold text-4xl leading-[1.2] md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            Diecodev
          </m.h1>
          <m.p
            animate={{ opacity: 1, y: 0 }}
            className="text-pretty text-center text-neutral-300 leading-relaxed md:text-balance"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            Full-stack developer crafting modern web experiences using
            TypeScript, React, and Node.js at{" "}
            <Link
              className="underline hover:text-white"
              href="https://www.sancrisoft.com/"
              rel="relnoopener noreferrer"
              target="_blank"
            >
              Sancrisoft
            </Link>
          </m.p>
          <m.div
            animate={{ opacity: 1, y: 0 }}
            className="relative mt-8 overflow-clip rounded-md border border-white/20 bg-white/10 text-sm text-white transition-colors"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
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
              className="flex items-center gap-2 px-4 py-2"
              href="/diecodev_resume.pdf"
              target="_blank"
            >
              <m.svg
                animate={{
                  y: [-1, 1, -1],
                  transition: {
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 1,
                    ease: "easeInOut",
                    repeatType: "reverse",
                  },
                }}
                className="h-4 w-4"
                color="currentColor"
                fill="none"
                role="graphics-symbol"
                strokeWidth="1.5"
                variants={{
                  idle: { y: 0 },
                  hover: { y: [-1, 1, -1] },
                }}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
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
