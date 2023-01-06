import { Github, Linkedin, Instagram, Plane } from './icons'
import Link from 'next/link'

export const Hero = () => {
  return (
    <main className='flex gap-20 justify-center items-center'>
      <ul className='hidden lg:flex flex-col gap-5'>
        <li className='text-lg'><Github /></li>
        <li className='text-lg'><Instagram /></li>
        <li className='text-lg'><Linkedin /></li>
      </ul>
      <section className='flex flex-col gap-3 py-16'>
        <p className='text-lg text-zinc-600 font-medium'>Hi, my name is</p>
        <h2 className='text-5xl md:text-8xl font-bold'>Diego Díaz.</h2>
        <p className='text-3xl font-semibold md:text-7xl text-zinc-600 mt-3'>I build apps for the web.</p>
        <p className='w-full md:w-2/3 text-zinc-600 mt-3'>+2 years experience as Web Developer. Passionate for minimal design, development, customization and web techs.</p>
        <Link href='/#contact' className='gap-3 bg-indigo-500 rounded inline-flex max-w-[150px] px-3 py-2 items-center justify-center mt-3' >
          <span className='text-white'>Say Hello</span>
          <span className='text-white'><Plane /></span>
        </Link>
      </section>
    </main>
  )
}