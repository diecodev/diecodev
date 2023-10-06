import { experienceArray } from "../utils/index.ts";
import { ListItem } from "./icons.tsx";

export const Experience = () => {
  return (
    <div
      class="flex w-full flex-wrap md:flex-nowrap md:max-w-screen-sm md:mx-auto pt-20 gap-10 justify-center"
      id="experience"
    >
      <section>
        <div class="mb-8">
          <h3 class="text-2xl font-semibold tracking-wide text-center leading-5">
            Experience
          </h3>
          <p class="text-sm text-zinc-600 text-center leading-5">
            Where I&#39;ve worked
          </p>
        </div>
        <ul class="[&>li:not(:first-child)]:border-t-2 [&>li:not(:first-child)]:border-t-zinc-300">
          {experienceArray.map((exp) => (
            <li
              key={exp.id}
              class="py-10 first-of-type:pt-0 last-of-type:pb-0"
            >
              <article class="text-zinc-600">
                <header class="mb-4">
                  <h3 class="font-semibold text-lg leading-tight">
                    {exp.position} {exp?.url
                      ? (
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          class="text-indigo-600"
                        >
                          @{exp.company}
                        </a>
                      )
                      : <span class="text-indigo-600">@{exp.company}</span>}
                  </h3>
                  <p class="text-sm">{exp.date}</p>
                </header>
                <ul>
                  {exp.requirements.map((req, index) => (
                    <li key={index} class="flex gap-2 items-start mt-4">
                      <span class="text-[.6rem] flex-none p-2">
                        <ListItem />
                      </span>
                      <p>{req}</p>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
