import type { Metadata } from 'next'
import { displayFont, headingFont, bodyFont } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'ACME Corp | Streamlined Project Management',
  description: 'Enterprise-grade project management that keeps your teams aligned, productive, and delivering on time.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${headingFont.variable} ${bodyFont.variable}`}
    >
      <body className="min-h-screen bg-surface text-text antialiased">
        {children}
      </body>
    </html>
  )
}
