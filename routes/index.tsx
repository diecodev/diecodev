import { Header } from "../components/header.tsx";
import { ClientWrapper, CustomLink } from "../components/clientWrapper.tsx";
import { Hero } from "../components/hero.tsx";
import { Arrow, Cursor } from "../components/icons.tsx";
import { About } from "../components/about.tsx";
import { Experience } from "../components/experience.tsx";
import { Contact } from "../components/contact.tsx";
import { Footer } from "../components/footer.tsx";

const loader = () => {
  const SERVICE_ID = Deno.env.get("SERVICE_ID")!;
  const TEMPLATE_ID = Deno.env.get("TEMPLATE_ID")!;
  const USER_ID = Deno.env.get("USER_ID")!;

  return {
    SERVICE_ID,
    TEMPLATE_ID,
    USER_ID,
  };
};

export default function Home() {
  const envVars = loader();

  return (
    <>
      <Header />
      <ClientWrapper name="/" className="px-4 lg:px-0">
        <Hero />
        <div class="lg:w-[70%] lg:mx-auto xl:max-w-screen-lg">
          <CustomLink label="Scroll down" name="about">
            <div class="text-zinc-600 gap-2 inline-flex">
              <Cursor class="w-6 h-auto" />
              <div class="flex gap-1 items-center">
                <p>Scroll down</p>
                <span>
                  <Arrow class="h-3 w-auto animate-bounce" />
                </span>
              </div>
            </div>
          </CustomLink>
        </div>
        <ClientWrapper name="experience">
          <Experience />
        </ClientWrapper>
        <ClientWrapper name="about">
          <About />
        </ClientWrapper>
        <ClientWrapper name="contact">
          <Contact
            SERVICE_ID={envVars.SERVICE_ID}
            TEMPLATE_ID={envVars.TEMPLATE_ID}
            USER_ID={envVars.USER_ID}
          />
        </ClientWrapper>
      </ClientWrapper>
      <Footer />
    </>
  );
}
