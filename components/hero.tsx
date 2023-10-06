import { CustomLink } from "./clientWrapper.tsx";
import { Github, Instagram, Linkedin, Plane } from "./icons.tsx";

export const Hero = () => {
  return (
    <main class="flex gap-20 justify-center items-center">
      <ul class="hidden lg:flex flex-col gap-5">
        <li class="text-lg">
          <Github />
        </li>
        <li class="text-lg">
          <Instagram />
        </li>
        <li class="text-lg">
          <Linkedin />
        </li>
      </ul>
      <section class="flex flex-col gap-3 py-14">
        <p class="text-lg text-zinc-600 font-medium">Hi, my name is</p>
        <h2 class="text-5xl md:text-8xl font-bold">Diego Díaz.</h2>
        <p class="text-3xl font-semibold md:text-7xl text-zinc-600 mt-3">
          I build apps for the web.
        </p>
        <p class="w-full md:w-2/3 text-zinc-600 mt-3">
          +3 years experience as Web Developer. Passionate for minimal design,
          development, customization and web techs.
        </p>
        <CustomLink
          label="Say Hello"
          name="contact"
          className="gap-3 bg-indigo-600 rounded inline-flex max-w-[150px] px-3 py-2 items-center justify-center mt-3"
        >
          <span class="text-white">Say Hello</span>
          <span class="text-white">
            <Plane />
          </span>
        </CustomLink>
      </section>
    </main>
  );
};
