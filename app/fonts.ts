import { Inter } from 'next/font/google'

// Swiss/Minimalist typography - Inter is perfect for clean, professional aesthetics
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

// Export fonts for use in layout
export const displayFont = inter
export const headingFont = inter
export const bodyFont = inter
