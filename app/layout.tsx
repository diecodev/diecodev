import './globals.css';
import { Poppins } from '@next/font/google'

interface Props {
  children: React.ReactNode
}

const poppins = Poppins({
  display: 'fallback',
  weight: ['300', '400', '600', '700'],
  preload: true,
  subsets: ['latin-ext'],
  variable: '--poppins'
})

export default function RootLayout({ children }: Props) {
  return (
    <html lang='es'  className={`${poppins.variable} scroll-smooth`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='overflow-x-hidden max-w-screen min-h-screem text-black' >{children}</body>
    </html>
  )
}
