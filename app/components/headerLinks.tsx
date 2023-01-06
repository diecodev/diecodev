import {CustomLink as Link} from './clientWrapper'

export const HeaderLinks = () => {
  return (
    <>
      <li className='flex items-center px-2' >
        <Link name='about'>About</Link>
      </li>
      <li className='flex items-center px-2' >
        <Link name='experience'>Experience</Link>
      </li>
      <li className='flex items-center px-2' >
        <Link name='contact'>Contact</Link>
      </li>
      <li className='flex items-center px-2 border-2 border-indigo-600 rounded text-indigo-600 hover:bg-indigo-600/20 transition ease-in-out duration-300' >
        <a href='/resume.pdf' target='_blank' rel='noopener noreferrer'>Resume</a>
      </li>
    </>
  )
}