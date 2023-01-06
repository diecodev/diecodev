import { ContactForm } from "./contactForm"
import { socialArray } from '../utils/index'

export const Contact = () => {
  return (
    <div className='flex w-full flex-wrap md:flex-nowrap md:max-w-lg md:mx-auto mt-20 gap-10 justify-center' id='contact'>
      <section className="w-full">
        <div className='mb-8'>
          <h3 className='text-2xl font-semibold tracking-wide text-center leading-5'>Contact Me</h3>
          <p className='text-sm text-zinc-600 text-center leading-5'>Get in touch</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-10">
          <ContactForm />
          <ul className='flex lg:flex-col md:gap-5 justify-center gap-3 mt-10 lg:mt-0'>
            {socialArray.map(social => (
              <li key={social.id}>
                <a href={social.url} target="_blank" rel="noopener noreferrer" className='rounded-lg border-2 border-zinc-200 px-2 py-4 text-center inline-block md:text-lg min-w-[7rem]'>
                  <social.icon className='mx-auto' />
                  <span className='text-xs'>{social.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}