export const Header = () => {
  return (
    <header className='flex justify-between px-5 md:px-10 py-3 w-full flex-wrap'>
      <a href='/'>
        <h1 className='text-lg font-semibold '>Diecodev</h1>
      </a>
      <ul className='flex gap-4 flex-wrap'>
      <a href='#about'>
        <li className='flex items-center px-2' >About</li>
      </a>
      <a href='#experience'>
        <li className='flex items-center px-2' >Experience</li>
      </a>
      <a href='#contact'>
        <li className='flex items-center px-2' >Contact</li>
      </a>
      <a  href='/resume.pdf' target="_blank" rel="noopener noreferrer">
        <li className='flex items-center px-2 border-2 border-indigo-500 rounded text-indigo-500 hover:bg-indigo-500/20 transition ease-in-out duration-300' >Resume</li>
      </a>
      </ul>
    </header>
  )
}