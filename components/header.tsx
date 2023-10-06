import { CustomLink as Link } from "./clientWrapper.tsx";
import { HeaderLinks } from "./headerLinks.tsx";
import { MobileNavWrapper } from "../islands/mobileNav.tsx";

export const Header = () => {
  return (
    <header class="flex justify-between px-5 md:px-10 py-3 w-full flex-wrap bg-white lg:bg-white/40 lg:backdrop-blur lg:backdrop-saturate-50 sticky top-0 left-0 border-b border-b-zinc-200 z-10">
      <Link name="/">
        <h1 class="text-lg font-semibold ">Diecodev</h1>
      </Link>
      <ul class="gap-4 flex-wrap hidden lg:flex">
        <HeaderLinks />
      </ul>
      <MobileNavWrapper />
    </header>
  );
};
