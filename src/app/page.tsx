import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import ProductPurchase from '@/components/home/ProductPurchase'
import BrandStory from '@/components/home/BrandStory'
import SkinCareStep from '@/components/home/SkinCareStep'
import AkinorioSecret from '@/components/home/AkinorioSecret'
import Testimonials from '@/components/home/Testimonials'
import CrossSell from '@/components/home/CrossSell'
import CTASection from '@/components/home/CTASection'
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from '@/lib/constants'

export const metadata: Metadata = {
  title: `${SITE_NAME} | 引き算という、美しさの答え。`,
  description: SITE_DESCRIPTION,
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductPurchase />
      <BrandStory />
      <SkinCareStep />
      <AkinorioSecret />
      <Testimonials />
      <CrossSell />
      <CTASection />

      {/* JSON-LD Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: SITE_NAME,
            url: SITE_URL,
            description: SITE_DESCRIPTION,
          }),
        }}
      />
    </>
  )
}
