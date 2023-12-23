import '../styles/globals.css'
import { NextAuthProvider } from "@/lib/providers"
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

// Assuming these components are adjusted to accept `lang` as a prop
import Header from '@/app/components/Header'
import Footer from "@/app/components/Footer"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Website Title',
  description: 'Website Description',
  openGraph: {
    type: 'website',
    title: 'Website Title',
    description: 'Website Description',
    url: 'https://example.com',
    images: [],
    siteName: 'Website Name',
    locale: 'en',
    ttl: 30,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className={`${inter.className} h-full`}>
      <body className='flex min-h-full flex-col font-poppins'>
        <NextAuthProvider>
          <Header />
          <main className='flex-grow'>{children}</main>
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  )
}
