import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import { ParticlesWrapper } from '../components/Particles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class' disableTransitionOnChange={false} >
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <div className='transition-colors duration-300 grid w-full grid-cols-[1fr,min(640px,100%),1fr] text-black'>
        <Component {...pageProps} />
        <ParticlesWrapper id='tsparticles' />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
