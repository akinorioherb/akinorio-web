import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import ProductShowcase from '@/components/home/ProductShowcase'
import BrandStory from '@/components/home/BrandStory'
import Testimonials from '@/components/home/Testimonials'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { LINE_URL, SITE_NAME, SITE_URL, SITE_DESCRIPTION } from '@/lib/constants'

export const metadata: Metadata = {
  title: `${SITE_NAME} | 細胞レベルに着目した引き算のスキンケア`,
  description: SITE_DESCRIPTION,
}

function SampleCTA() {
  return (
    <section className="py-20 md:py-28 bg-marble relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 via-primary-700/70 to-primary-800/90" />
      <Container className="relative z-10">
        <div className="text-center max-w-xl mx-auto">
          <p className="font-heading-en text-xs tracking-[0.3em] text-gold-400 uppercase mb-3">
            Free Sample
          </p>
          <h2 className="text-h2 font-heading-ja font-light text-white mb-6">
            14日間無料サンプルで
            <br />
            実感してください
          </h2>
          <p className="text-white/70 leading-relaxed mb-10 font-ui text-sm">
            まずは14日間、アキノリオの引き算スキンケアを
            お試しください。送料も無料です。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/sample" variant="gold" size="lg">
              無料サンプルを申し込む
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

function LineCTA() {
  return (
    <section className="py-16 md:py-20 bg-bg-warm">
      <Container size="sm">
        <div className="text-center">
          <h2 className="text-h3 font-heading-ja font-light text-neutral-800 mb-4">
            LINE友だち追加で
            <br className="md:hidden" />
            お得な情報をお届け
          </h2>
          <p className="font-ui text-sm text-neutral-500 mb-8">
            新商品情報やお手入れのコツ、会員限定のお得な情報をお届けします。
          </p>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#06C755] text-white px-8 py-4 rounded-sm font-ui text-base font-medium hover:opacity-90 transition-opacity"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.271.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
            </svg>
            LINE友だち追加
          </a>
        </div>
      </Container>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductShowcase />
      <BrandStory />
      <Testimonials />
      <SampleCTA />
      <LineCTA />

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
