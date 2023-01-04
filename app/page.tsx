import { Cursor, Arrow } from './components/icons'
import { Header } from './components/header'
import { Hero } from './components/hero'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Link href='/#about'>
        <div className='text-zinc-500 flex gap-2 lg:w-[70%] lg:mx-auto xl:max-w-screen-lg'>
          <Cursor className='w-6 h-auto' />
          <div className='flex gap-1 items-center'>
            <p>Scroll down</p>
            <span>
              <Arrow className='h-3 w-auto animate-bounce' />
            </span>
          </div>
        </div>
      </Link>
    </>
  )
}
