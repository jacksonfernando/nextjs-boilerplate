import './globals.css'
import { Rubik } from 'next/font/google'


const roboto = Rubik({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})


export const metadata = {
  title: 'Specta',
  description: 'Eyewear',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
