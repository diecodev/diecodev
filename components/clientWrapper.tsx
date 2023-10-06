"use client";

import { ComponentChildren } from "preact";

interface Props {
  name: string;
  children: ComponentChildren;
  className?: string;
}

export const ClientWrapper = ({ children, name, className = "" }: Props) => {
  return (
    <section id={name === "/" ? "" : name} class={className}>
      {children}
    </section>
  );
};

export const CustomLink = (
  { children, className = "", name, label }: Props & { label: string },
) => {
  return (
    <a
      href={name === "/" ? "/#" : `#${name}`}
      aria-label={label}
      class={`${className} cursor-pointer`}
    >
      {children}
    </a>
  );
};
