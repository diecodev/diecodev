import './globals.css';
import { Poppins } from '@next/font/google'

interface Props {
  children: React.ReactNode
}

const poppins = Poppins({
  display: 'fallback',
  weight: ['400', '500', '600', '700', '800'],
  preload: true,
  subsets: ['latin-ext'],
  variable: '--poppins'
})

export default function RootLayout({ children }: Props) {
  return (
    <html lang='es'  className={poppins.variable}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='overflow-x-hidden max-w-screen min-h-screem px-4 lg:px-0 text-black' >{children}</body>
    </html>
  )
}
