export const profile = {
  context:
    "Currently at Sancrisoft, working with US companies and clients. TypeScript, React, Next.js and Node.js. Based in Colombia, UTC−5.",
  cv: {
    filename: "Diego-Diaz-CV.pdf",
    href: "/diecodev_cv.pdf",
  },
  description:
    "Diego Díaz (diecodev) is a senior software engineer in Colombia who builds and maintains production web apps end to end with TypeScript, React, Next.js and Node.js.",
  email: "diegoddiaz05@gmail.com",
  freelance:
    "Email is the best way to reach me. I also take on freelance projects: the same full-stack TypeScript work.",
  handle: "diecodev",
  name: "Diego Díaz",
  recently:
    "shipped the CreatorSnap app redesign and the qwik-date and qwik-sonner 2.0 betas",
  role: "Senior Software Engineer",
  site: "https://dieco.dev",
  source: "https://github.com/diecodev/diecodev",
  statement:
    "I build and maintain production web apps, from the interface to the API, the database and the deploy.",
} as const;

export const socials = [
  {
    handle: "github.com/diecodev",
    href: "https://github.com/diecodev",
    label: "GitHub",
  },
  {
    handle: "linkedin.com/in/diecodev",
    href: "https://www.linkedin.com/in/diecodev",
    label: "LinkedIn",
  },
  { handle: "x.com/diecodev", href: "https://x.com/diecodev", label: "X" },
] as const;

// Profiles of the same person that the site doesn't list; search engines use them to
// tie the site to the name.
export const otherProfiles = ["https://www.chess.com/member/diecodev"] as const;
