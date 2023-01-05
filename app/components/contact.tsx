import { ContactForm } from "./contactForm"

export const Contact = () => {
  return (
    <div className='flex w-full flex-wrap md:flex-nowrap md:max-w-lg md:mx-auto mt-20 gap-10 justify-center' id='contact'>
      <section className="w-full">
        <div className='mb-8'>
          <h3 className='text-2xl font-semibold tracking-wide text-center leading-5'>Contact Me</h3>
          <p className='text-sm text-zinc-600 text-center leading-5'>Get in touch</p>
        </div>
        <div>
          <ContactForm />
        </div>
      </section>
    </div>
  )
}