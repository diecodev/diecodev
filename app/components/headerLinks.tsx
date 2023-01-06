'use client'

import { Link } from 'react-scroll'

export const HeaderLinks = () => {
  return (
    <>
      <li className='flex items-center px-2' >
        <Link className='cursor-pointer' to='about' smooth={true} offset={-100} >About</Link>
      </li>
      <li className='flex items-center px-2' >
        <Link className='cursor-pointer' to='experience' smooth={true} offset={-100} >Experience</Link>
      </li>
      <li className='flex items-center px-2' >
        <Link className='cursor-pointer' to='contact' smooth={true} offset={-100} >Contact</Link>
      </li>
      <li className='flex items-center px-2 border-2 border-indigo-500 rounded text-indigo-500 hover:bg-indigo-500/20 transition ease-in-out duration-300' >
        <a href='/resume.pdf' target='_blank' rel='noopener noreferrer'>Resume</a>
      </li>
    </>
  )
}