import type { Metadata } from 'next'
import { Inter, Open_Sans, Roboto } from 'next/font/google'
import './globals.css'
import Header from './Components/Header'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
const openSans = Open_Sans({
  weight: '500',
  subsets: ['latin']
})
export const metadata: Metadata = {
  title: 'Thickness',
  description: 'Generated by create next app',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <div>
          <Header />
        </div>
        <div className='pt-20'>
          {children}
        </div>
      </body>
    </html>
  )
}
