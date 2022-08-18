import { useTheme } from 'next-themes';
import Link from 'next/link';
import { Moon, Sun } from './svg/icons';

export const NavBar = ()=>{
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div className='fixed bottom-4 grid w-full grid-cols-[1fr,min(640px,100%),1fr] px-4 z-10 transition-opacity duration-200 '>
      <header className='flex justify-between items-center px-4 py-4 bg-gray-400/30 dark:bg-gray-50/30 rounded-lg backdrop-blur-md col-start-2 shadow-glass dark:text-gray-200'>
        <Link href='/'>
          <a>
            <h1 className='text-xl font-bold'>Diecodev</h1>
          </a>
        </Link>
        <div className='flex gap-3 items-center text-gray-600 text-2xl dark:text-gray-200'>
          <Link href='/contact'>
            <a className='text-lg font-semibold dark:font-medium'>Contact</a>
          </Link>
          <Link href='/blog'>
            <a className='text-lg font-semibold dark:font-medium'>Blog</a>
          </Link>

          <button className='p-1 bg-gray-50/80 dark:bg-gray-400 rounded-md' onClick={() => setTheme(currentTheme === 'dark' ? 'ligth' : 'dark')}>
            {
              currentTheme === 'dark'
                ? <Sun />
                : <Moon />
            }
          </button>
        </div>
      </header>
    </div>
  );
};