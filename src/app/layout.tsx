import './globals.css'
import { Poppins} from 'next/font/google'
import { SectionAnchorProvider } from '@/providers/SectionAnchor'
import { Analytics } from '@vercel/analytics/react';
const poppins = Poppins({
  weight: ['200','400', '700', '900'],
  subsets: ['latin-ext'],
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
        <Analytics/>
      </body>
    </html>
  )
}
