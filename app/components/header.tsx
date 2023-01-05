import Link from 'next/link'

export const Header = () => {
  return (
    <header className='flex justify-between px-5 md:px-10 py-3 w-full flex-wrap'>
      <Link href='/'>
        <h1 className='text-lg font-semibold '>Diecodev</h1>
      </Link>
      <ul className='flex gap-4 flex-wrap'>
      <Link href='/#about' scroll={false}>
        <li className='flex items-center px-2' >About</li>
      </Link>
      <Link href='/#experience' scroll={false}>
        <li className='flex items-center px-2' >Experience</li>
      </Link>
      <Link href='/#contact' scroll={false}>
        <li className='flex items-center px-2' >Contact</li>
      </Link>
      <Link href='/resume.pdf'>
        <li className='flex items-center px-2 border-2 border-indigo-500 rounded text-indigo-500 hover:bg-indigo-500/20 transition ease-in-out duration-300' >Resume</li>
      </Link>
      </ul>
    </header>
  )
}