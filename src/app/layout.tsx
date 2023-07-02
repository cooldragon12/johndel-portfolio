import NavBar from '@/components/Navigation/NavBar'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['200','400', '700', '900'],
  subsets: ['latin'],
})

export const metadata = {
  title: "Johndel's Portfolio",
  description: 'A portfolio of Johndel Encabo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <nav className='lg:right-0 right-1/2 top-0 lg:top-1/2 fixed flex text-center lg:text-right justify-center items-center'>
          <NavBar/>
        </nav>
        {children}
      </body>
    </html>
  )
}
