import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Talia Tamir - AI & Creative Portfolio',
  description: 'I built a system that needed to work. And I had to choose: let AI run it, or keep control. I chose control. But differently than I thought I would.',
  openGraph: {
    title: 'Talia Tamir - AI & Creative Portfolio',
    description: 'Portfolio exploring AI integration, systems thinking, and creative experiments.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-brand-off-white text-brand-charcoal">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
