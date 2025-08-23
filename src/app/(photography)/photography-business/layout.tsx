import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import Nav from './_components/Nav'
import Footer from './_components/Footer'
import '../../../styles/photography.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Capture Life Photography - Professional Photography Services',
  description: 'Capturing life\'s precious moments with professional photography services. Weddings, portraits, events, and more in Central Pennsylvania.',
}

export default function PhotographyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="theme-photography">
        <div className="min-h-screen flex flex-col">
          <Nav />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
