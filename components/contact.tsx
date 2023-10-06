import { ContactForm } from "./contactForm.tsx";
import { socialArray } from "../utils/index.ts";
import { ContactFormWrapper } from "../islands/contactForm.tsx";

export const Contact = (props: {
  TEMPLATE_ID: string;
  USER_ID: string;
  SERVICE_ID: string;
}) => {
  return (
    <div
      class="flex w-full flex-wrap md:flex-nowrap md:max-w-lg md:mx-auto pt-20 gap-10 justify-center"
      id="contact"
    >
      <section class="w-full">
        <div class="mb-8">
          <h3 class="text-2xl font-semibold tracking-wide text-center leading-5">
            Contact Me
          </h3>
          <p class="text-sm text-zinc-600 text-center leading-5">
            Get in touch
          </p>
        </div>
        <div class="flex flex-col lg:flex-row gap-10">
          <ContactFormWrapper {...props}>
            <ContactForm />
          </ContactFormWrapper>
          <ul class="flex lg:flex-col md:gap-5 justify-center gap-3 mt-10 lg:mt-0">
            {socialArray.map((social) => (
              <li key={social.id}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="rounded-lg border-2 border-zinc-200 px-2 py-4 text-center inline-block md:text-lg min-w-[7rem]"
                >
                  <social.icon class="mx-auto" />
                  <span class="text-xs">{social.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};
