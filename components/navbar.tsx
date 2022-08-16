import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "./svg/icons";

export const NavBar = ({isVisible} : {isVisible: boolean})=>{
  const [mounted, setMounted] = useState(false);

  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;

  const handleClick = () => setTheme(currentTheme === 'dark' ? 'ligth' : 'dark');

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(isVisible);
    }, 210);
  
    return () => {
      clearTimeout(timer);
    };
  }, [isVisible]);
  

  if (!mounted && !isVisible) return null;

  return (
    <div className={`fixed bottom-4 grid w-full grid-cols-[1fr,min(640px,100%),1fr] px-4 z-10 transition-opacity duration-200 ${(isVisible && mounted) ? 'opacity-100': 'opacity-0'}`}>
      <header className="flex justify-between items-center px-4 py-4 bg-gray-400/20 rounded-md backdrop-blur-lg col-start-2 shadow-glass">
        <h1 className="text-xl font-bold">Diecodev</h1>
        <div className="flex gap-2">
          <button onClick={handleClick} className="text-2xl text-gray-400">
            {
              currentTheme === 'dark'
                ? <Sun />
                : <Moon />
            }
          </button>
          <nav>
          menu
          </nav>
        </div>
      </header>
    </div>
  );
};