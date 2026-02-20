import { Inter, Space_Grotesk } from 'next/font/google'

// Display font - Space Grotesk for bold headlines
// Swiss/Minimalist: geometric, precise, authoritative
export const displayFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

// Heading font - Space Grotesk for section headers
export const headingFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

// Body font - Inter for readable body text
export const bodyFont = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

// Legacy export for template compatibility
export const inter = bodyFont
