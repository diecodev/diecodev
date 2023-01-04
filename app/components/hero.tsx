import { Github, Linkedin, Instagram, Plane } from './icons'
import Link from 'next/link'

export const Hero = () => {
  return (
    <main className='flex gap-10 justify-center items-center'>
      <ul className='hidden lg:flex flex-col gap-5'>
        <li className='text-lg'><Github /></li>
        <li className='text-lg'><Instagram /></li>
        <li className='text-lg'><Linkedin /></li>
      </ul>
      <section>
        <p className='text-lg leading-snug'>Hi, my name is</p>
        <h2 className='text-5xl md:text-8xl font-bold leading-snug'>Diego Díaz.</h2>
        <p className='text-3xl font-bold'>I build apps for the web.</p>
        <p>+2 years experience as Web Developer. Passionate for minimal design, development, customization and web techs.</p>
        <Link href='/#contact' >
          <span>Say Hello</span>
          <span><Plane /></span>
        </Link>
      </section>
    </main>
  )
}