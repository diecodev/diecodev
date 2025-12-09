import * as m from "motion/react-client";
import Github from "~/svg/github.svg";
import Linkedin from "~/svg/linkedin.svg";
import X from "~/svg/x.svg";
import { Button } from "../ui/button";

export const links = [
  {
    label: "Diecodev github",
    href: "https://github.com/diecodev",
    icon: Github,
  },
  {
    label: "Diecodev linkedin",
    href: "https://linkedin.com/in/diecodev",
    icon: Linkedin,
  },
  {
    label: "Diecodev x",
    href: "https://x.com/diecodev",
    icon: X,
  },
];

export const Header = () => {
  return (
    <m.header
      animate={{ opacity: 1, y: 0 }}
      className="-translate-x-1/2 fixed top-2 left-1/2 z-10 mx-auto my-3 flex justify-center overflow-clip rounded-xl"
      initial={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      <nav className="flex items-center justify-between px-4 backdrop-blur-sm">
        <ul className="flex items-center gap-2">
          {links.map((link, i) => (
            <m.li
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -10 }}
              key={link.label}
              transition={{
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1],
                delay: 0.15 + i * 0.05, // Stagger children animations
              }}
            >
              <Button asChild className="size-8 has-[>svg]:p-0" variant="ghost">
                <a
                  className="text-neutral-300 text-sm transition-colors hover:text-white"
                  href={link.href}
                >
                  <link.icon className="size-5" />
                </a>
              </Button>
            </m.li>
          ))}
        </ul>
      </nav>
    </m.header>
  );
};
