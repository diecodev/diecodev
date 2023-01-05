import { Experience } from './components/experience'
import { Cursor, Arrow } from './components/icons'
import { Header } from './components/header'
import { About } from './components/about'
import { Hero } from './components/hero'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className='lg:w-[70%] lg:mx-auto xl:max-w-screen-lg'>
        <a href='/#about' >
          <div className='text-zinc-600 gap-2 inline-flex'>
            <Cursor className='w-6 h-auto' />
            <div className='flex gap-1 items-center'>
              <p>Scroll down</p>
              <span>
                <Arrow className='h-3 w-auto animate-bounce' />
              </span>
            </div>
          </div>
        </a>
      </div>
      <About />
      <Experience />
    </>
  )
}
