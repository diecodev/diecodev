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

export const CustomLink = ({ children, className = "", name }: Props) => {
  return (
    <a
      href={name === "/" ? "/#" : `#${name}`}
      aria-label={`go to ${name} section`}
      class={`${className} cursor-pointer`}
    >
      {children}
    </a>
  );
};
