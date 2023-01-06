'use client'

import { Link } from 'react-scroll'
import { HeaderLinks } from './headerLinks'
import { MobileNav } from './mobileNav'

export const Header = () => {
  return (
    <header className='flex justify-between px-5 md:px-10 py-3 w-full flex-wrap bg-white lg:bg-white/40 lg:backdrop-blur lg:backdrop-saturate-50 sticky top-0 left-0 border-b border-b-zinc-200 z-10'>
      <Link to='index' className='cursor-pointer' smooth={false}>
        <h1 className='text-lg font-semibold '>Diecodev</h1>
      </Link>
      <ul className='gap-4 flex-wrap hidden lg:flex'>
        <HeaderLinks />
      </ul>
      <MobileNav />
    </header>
  )
}