import type { Metadata } from 'next'
import { inter } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'ACME Corp | Streamlined Project Management',
  description: 'Enterprise-grade project management for modern teams. Streamline workflows, boost productivity, and deliver projects on time.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-surface text-text antialiased">
        {children}
      </body>
    </html>
  )
}
