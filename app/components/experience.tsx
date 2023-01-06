import {experienceArray} from '../utils/index'
import { ListItem } from './icons'

export const Experience = () => {
  return (
    <div className='flex w-full flex-wrap md:flex-nowrap md:max-w-screen-sm md:mx-auto mt-20 gap-10 justify-center' id='experience'>
      <section>
        <div className='mb-8'>
          <h3 className='text-2xl font-semibold tracking-wide text-center leading-5'>Experience</h3>
          <p className='text-sm text-zinc-600 text-center leading-5'>Where I&#39;ve worked</p>
        </div>
        {
          experienceArray.map((exp)=>(
            <article key={exp.id} className={`text-zinc-600 first-of-type:pt-0 py-10 last-of-type:pb-0 ${exp.id !== '0' && 'border-t-2 border-t-zinc-300'}`}>
              <header className='mb-4'>
                <h3 className='font-semibold text-lg leading-tight'>{exp.position} <span className='text-indigo-600'>@{exp.company}</span></h3>
                <p className='text-sm'>{exp.date}</p>
              </header>
              <ul>
                {exp.requirements.map((req, index) => (
                  <li key={index} className='flex gap-2 items-start mt-4'>
                    <span className='text-[.6rem] flex-none p-2'><ListItem /></span>
                    <p>{req}</p>
                  </li>
                ))}
              </ul>
            </article>
          ))
        }
      </section>
    </div>
  )
}