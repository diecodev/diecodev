import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class' disableTransitionOnChange={false} >
      <div className='bg-white dark:bg-black transition-colors duration-300'>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
