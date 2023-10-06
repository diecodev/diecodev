import { ContactFormWrapper } from "../islands/contactForm.tsx";

export const ContactForm = () => {
  return (
    <>
      <input
        type="text"
        name="customerName"
        id="name"
        placeholder="John Doe"
        class="w-full px-3 py-1 rounded border border-zinc-300 text-zinc-600 placeholder:text-zinc-400 outline-none"
      />
      <input
        type="email"
        name="customerEmail"
        id="email"
        placeholder="johndoe@mail.com"
        class="w-full px-3 py-1 rounded border border-zinc-300 text-zinc-600 placeholder:text-zinc-400 outline-none"
      />
      <textarea
        name="customerMessage"
        id="message"
        rows={4}
        placeholder="Write your message"
        class="w-full px-3 py-1 rounded border border-zinc-300 text-zinc-600 placeholder:text-zinc-400 outline-none resize-none"
      />

      <input
        class="w-60 bg-indigo-600 rounded text-white font-semibold px-4 py-[5px] mx-auto mt-auto"
        type="submit"
        value={"Send Email"}
      />
    </>
  );
};
