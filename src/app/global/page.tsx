import type { Metadata } from 'next'
import GlobalContent from './GlobalContent'

export const metadata: Metadata = {
  title: 'Ships Worldwide | AKINORIO — Japanese Minimalist Skincare',
  description: 'AKINORIO ships worldwide. The Japanese Art of Subtraction — Alcohol-Free, Paraben-Free, Made in Japan. Experience Skinimalism from Tokyo.',
  alternates: {
    canonical: 'https://akinorio.com/global',
  },
  openGraph: {
    title: 'AKINORIO Ships Worldwide | Japanese Minimalist Skincare',
    description: 'Stop Adding. Start Subtracting. Authentic Japanese Skinimalism delivered from Tokyo to your door.',
    images: [{ url: 'https://akinorio.com/images/og-image.png', width: 1200, height: 630 }],
  },
}

export default function GlobalPage() {
  return <GlobalContent />
}
