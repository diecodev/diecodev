import { Github, Linkedin, Instagram, Plane } from './icons'
import Link from 'next/link'

export const Hero = () => {
  return (
    <main className='flex gap-5 justify-center'>
      <ul>
        <li><Github /></li>
        <li><Instagram /></li>
        <li><Linkedin /></li>
      </ul>
      <section>
        <p>Hi, my name is</p>
        <h2>Diego Díaz.</h2>
        <p>I build apps for the web.</p>
        <p>+2 years experience as Web Developer. Passionate for minimal design, development, customization and web techs.</p>
        <Link href='/#contact' >
          <span>Say Hello</span>
          <span><Plane /></span>
        </Link>
      </section>
    </main>
  )
}