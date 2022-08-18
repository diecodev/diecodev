import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class' disableTransitionOnChange={false} >
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <div className='bg-white dark:bg-black transition-colors duration-300 grid w-full grid-cols-[1fr,min(640px,100%),1fr] text-black'>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
