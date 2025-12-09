"use client";

import * as m from "motion/react-client";
import Link from "next/link";
import { useLayoutEffect } from "react";
import Back from "~/svg/back.svg";
import { links } from "./header";

export const Header = () => (
  <header className="container sticky top-0 z-10 mx-auto max-w-3xl bg-background/10 px-6 py-4 backdrop-blur-sm">
    <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-3 sm:flex-row">
      <Link
        className="group flex items-center gap-1 text-muted-foreground text-sm transition-colors hover:text-foreground"
        href="/"
      >
        <Back className="size-4 translate-x-1 transition-all duration-300 group-hover:translate-x-0 group-hover:text-foreground" />
        Go Home
      </Link>

      <nav className="w-full sm:w-auto">
        <ul className="flex items-center justify-center gap-4 sm:justify-end">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                className="flex items-center gap-2 p-1 text-muted-foreground text-sm transition-colors hover:text-foreground"
                href={link.href}
                rel="noopener noreferrer"
                target="_blank"
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

export const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <m.div
      animate={{ opacity: 1, y: 0 }}
      className="typography container mx-auto flex max-w-3xl flex-col px-6 pb-8"
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.div>
  );
};
