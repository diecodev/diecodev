import { useSignal } from "@preact/signals";
import { Handlers } from "$fresh/server.ts";
import { sendEmail } from "../utils/index.ts";
import { Header } from "../components/header.tsx";
import { ClientWrapper, CustomLink } from "../components/clientWrapper.tsx";
import { Hero } from "../components/hero.tsx";
import { Arrow, Cursor } from "../components/icons.tsx";
import { About } from "../components/about.tsx";
import { Experience } from "../components/experience.tsx";
import { Contact } from "../components/contact.tsx";
import { Footer } from "../components/footer.tsx";

export const handler: Handlers = {
  POST: async (req, ctx) => {
    const form = await req.formData();

    const name = form.get("customerName")?.toString();
    const email = form.get("customerEmail")?.toString();
    const message = form.get("customerMessage")?.toString();

    if (!name || !email || !message) {
      return ctx.render({
        ok: false,
        message: "Please fill all the fields.",
      });
    }

    const messageData = await sendEmail(name, email, message);
    return ctx.render({
      ok: false,
      message: messageData,
    });
  },
};

export default function Home() {
  const count = useSignal(3);
  return (
    <>
      <Header />
      <ClientWrapper name="/" className="px-4 lg:px-0">
        <Hero />
        <div class="lg:w-[70%] lg:mx-auto xl:max-w-screen-lg">
          <CustomLink name="about">
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
          <Contact />
        </ClientWrapper>
      </ClientWrapper>
      <Footer />
    </>
  );
}
