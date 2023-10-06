import { ListItem } from "./icons.tsx";

const firstColumnSkills = [
  "TypeScript",
  "React",
  "Node.js",
  "Supabase",
  "Oak/Hono",
  "MongoDB",
];
const secondColumnSkills = [
  "Next.js",
  "Deno",
  "Tailwindcss",
  "PostgreSQL",
  "Fresh",
  "Astro",
];

export const About = () => {
  return (
    <div
      class="flex w-full flex-wrap md:flex-nowrap lg:w-[65%] lg:mx-auto xl:max-w-screen-lg pt-20 gap-10 justify-center"
      id="about"
    >
      <section>
        <div class="mb-8">
          <h3 class="text-2xl font-semibold tracking-wide text-center leading-5">
            About Me
          </h3>
          <p class="text-sm text-zinc-600 text-center leading-5">
            My introduction
          </p>
        </div>
        <p class="mb-4 text-zinc-600">
          Hello, my name is Diego and I enjoy creating things for the web. My
          passion for web development started back in 2016 when I was in high
          school.
        </p>
        <p class="mb-4 text-zinc-600">
          Fast forward to today, and I&#39;ve had the honor of working at a
          B2B-focused shipping service company, an academic consulting agency,
          and (unsurprisingly) on personal projects.
        </p>
        <p class="mb-4 text-zinc-600">
          I love front end, so here are a few technologies I’ve been working
          with recently.
        </p>
        <div class="flex flex-wrap md:gap-x-20 gap-10 text-zinc-600">
          <ul class="px-3">
            {firstColumnSkills.map((skill, index) => (
              <li key={index} class="flex gap-2 items-center">
                <span class="text-[.6rem]">
                  <ListItem />
                </span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
          <ul class="px-3">
            {secondColumnSkills.map((skill, index) => (
              <li key={index} class="flex gap-2 items-center">
                <span class="text-[.6rem]">
                  <ListItem />
                </span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <img
        src="/me.png"
        alt="diego diaz picture developer"
        decoding="async"
        height={350}
        width={350}
        class="animate-borders object-contain h-60 w-60 md:w-64 md:h-64 ease-in-out drop-shadow-custom"
      />
    </div>
  );
};
