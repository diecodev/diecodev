import Image from 'next/image'
import source from '../../public/me.png'
import { ListItem } from './icons'

const firstColumnSkills = ['TypeScript', 'React', 'Node.js', 'Supabase']
const secondColumnSkills = ['Next.js', 'Deno', 'Tailwindcss', 'PostgreSQL']

export const About = () => {
  return (
    <div className='flex w-full flex-wrap md:flex-nowrap lg:w-[65%] lg:mx-auto xl:max-w-screen-lg mt-20 gap-10 justify-center' id='about'>
      <section>
        <div className='mb-8'>
          <h3 className='text-2xl font-semibold tracking-wide text-center leading-5'>About Me</h3>
          <p className='text-sm text-zinc-600 text-center leading-5'>My introduction</p>
        </div>
        <p className='mb-4 text-zinc-600'>
          Hello, my name is Diego and I enjoy creating things for the web. My passion for web development started back in 2016 when I was in high school.
        </p>
        <p className='mb-4 text-zinc-600'>
          Fast forward to today, and I&#39;ve had the honor of working at a B2B-focused shipping service company, an academic consulting agency, and (unsurprisingly) on personal projects.
        </p>
        <p className='mb-4 text-zinc-600'>
          I love front end, so here are a few technologies I’ve been working with recently.
        </p>
        <ul className='flex flex-wrap md:gap-x-20 gap-10 text-zinc-600'>
          <div className='px-3'>
            {firstColumnSkills.map((skill, index)=>(
              <li key={index} className='flex gap-2 items-center'>
              <span className='text-[.6rem]'><ListItem /></span>
              <span>{skill}</span>
            </li>
            ))}
          </div>
          <div className='px-3'>
            {secondColumnSkills.map((skill, index)=>(
              <li key={index} className='flex gap-2 items-center'>
              <span className='text-[.6rem]'><ListItem /></span>
              <span>{skill}</span>
            </li>
            ))}
          </div>
        </ul>
      </section>
      <Image src={source} alt='diego diaz picture developer' priority className='animate-borders object-contain h-60 w-60 md:w-64 md:h-64 ease-in-out drop-shadow-custom' />
    </div>
  )
}