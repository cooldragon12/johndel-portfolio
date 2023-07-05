import NavBar from '@/components/Navigation/NavBar'
import './globals.css'
import { Poppins } from 'next/font/google'
import { SectionAnchorProvider } from '@/providers/SectionAnchor'

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
        
        {/* <header>
          <ToggleTheme/>
        </header> */}
        <SectionAnchorProvider>
          {children}
        </SectionAnchorProvider>
      </body>
    </html>
  )
}
