import { Footer,Navbar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Your All-in-One Destination for Automotive Enthusiasts and Services – Explore, Discover, and Connect!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
          {children}
        <Footer />
        </body>
    </html>
  )
}
