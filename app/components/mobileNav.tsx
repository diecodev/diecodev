'use client'

import { useEffect, useState } from 'react'
import { HeaderLinks } from './headerLinks'

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const hamburguer = isOpen ? 'translate-x-10' : 'trasnlate-x-0'
  const cross = isOpen ? 'translate-x-0' : '-translate-x-10'

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])
  

  return (
    <>
      <button className='relative group lg:hidden' onClick={() => setIsOpen(prev => !prev)}>
        <div className='relative flex overflow-hidden items-center justify-center transform transition-all duration-200'>
          <div className='flex flex-col justify-between w-5 h-5 transform transition-all duration-300 origin-center overflow-hidden'>
            <div className={`bg-black h-[2px] w-7 transform transition-all duration-300 origin-left ${hamburguer}`}></div>
            <div className={`bg-black h-[2px] w-7 rounded transform transition-all duration-300 delay-75 ${hamburguer}`}></div>
            <div className={`bg-black h-[2px] w-7 transform transition-all duration-300 origin-left delay-150 ${hamburguer}`}></div>

            <div className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 flex ${isOpen ? 'w-5' : 'w-0'} ${cross}`}>
              <div className={`absolute bg-black h-[2px] w-5 transform transition-all duration-500 delay-300 ${isOpen ? 'rotate-45 ' : 'rotate-0'}`}></div>
              <div className={`absolute bg-black h-[2px] w-5 transform transition-all duration-500 ${isOpen ? '-rotate-45' : 'rotate-0'} delay-300`}></div>
            </div>
          </div>
        </div>
      </button>
      {isOpen && (
        <nav className='absolute top-[53px] w-full h-custom left-0 bg-white/40 backdrop-blur backdrop-saturate-50 flex justify-center items-center'>
          <ul className='flex gap-6 flex-col items-center'>
            <HeaderLinks />
          </ul>
        </nav>
      )}
    </>
  )
}