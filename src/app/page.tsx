import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import ProductShowcase from '@/components/home/ProductShowcase'
import BrandStory from '@/components/home/BrandStory'
import Testimonials from '@/components/home/Testimonials'
import Container from '@/components/ui/Container'
import { LINE_URL, SITE_NAME, SITE_URL, SITE_DESCRIPTION } from '@/lib/constants'

export const metadata: Metadata = {
  title: `${SITE_NAME} | 引き算という、美しさの答え。`,
  description: SITE_DESCRIPTION,
}

function GoldDivider() {
  return (
    <div className="flex items-center justify-center py-2">
      <div className="w-px h-12 bg-gradient-to-b from-transparent via-gold-300/40 to-transparent" />
    </div>
  )
}

function ProgramCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Dark marble background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e0a0e] via-[#2a0008] to-[#1a0006]" />

      {/* SVG ambient animation (LP-level) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-50"
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="ctaGlow1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d4af37" stopOpacity="0.1">
              <animate attributeName="stop-opacity" values="0.04;0.12;0.04" dur="7s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="ctaGlow2" cx="70%" cy="40%" r="35%">
            <stop offset="0%" stopColor="#c40234" stopOpacity="0.06">
              <animate attributeName="stop-opacity" values="0.02;0.08;0.02" dur="9s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#c40234" stopOpacity="0" />
          </radialGradient>
          <filter id="ctaBlur"><feGaussianBlur stdDeviation="3" /></filter>
          <linearGradient id="ctaShimmer" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d4af37" stopOpacity="0" />
            <stop offset="50%" stopColor="#d4af37" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Breathing glows */}
        <circle cx="720" cy="300" r="250" fill="url(#ctaGlow1)">
          <animate attributeName="r" values="200;300;200" dur="8s" repeatCount="indefinite" />
        </circle>
        <circle cx="1000" cy="240" r="180" fill="url(#ctaGlow2)">
          <animate attributeName="r" values="150;220;150" dur="10s" repeatCount="indefinite" />
        </circle>

        {/* Wave ring */}
        <g transform="translate(720, 300)">
          <circle cx="0" cy="0" r="60" fill="none" stroke="#d4af37" strokeWidth="0.3" opacity="0">
            <animate attributeName="r" values="60;350" dur="8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.08;0" dur="8s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Gold particles */}
        <g filter="url(#ctaBlur)">
          <circle cx="200" cy="150" r="1.2" fill="#d4af37" opacity="0">
            <animate attributeName="opacity" values="0;0.4;0" dur="4s" begin="0.5s" repeatCount="indefinite" />
            <animate attributeName="cy" values="150;90" dur="4s" begin="0.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="600" cy="450" r="1.5" fill="#d4af37" opacity="0">
            <animate attributeName="opacity" values="0;0.3;0" dur="5s" begin="1s" repeatCount="indefinite" />
            <animate attributeName="cy" values="450;370" dur="5s" begin="1s" repeatCount="indefinite" />
          </circle>
          <circle cx="1100" cy="200" r="1" fill="#d4af37" opacity="0">
            <animate attributeName="opacity" values="0;0.35;0" dur="4.5s" begin="2s" repeatCount="indefinite" />
            <animate attributeName="cy" values="200;140" dur="4.5s" begin="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="400" cy="350" r="1.3" fill="#d4af37" opacity="0">
            <animate attributeName="opacity" values="0;0.3;0" dur="5.5s" begin="0.8s" repeatCount="indefinite" />
            <animate attributeName="cy" values="350;280" dur="5.5s" begin="0.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="1300" cy="400" r="1.8" fill="#d4af37" opacity="0">
            <animate attributeName="opacity" values="0;0.25;0" dur="6s" begin="1.5s" repeatCount="indefinite" />
            <animate attributeName="cy" values="400;320" dur="6s" begin="1.5s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Shimmer band */}
        <rect x="-400" y="0" width="250" height="600" fill="url(#ctaShimmer)" opacity="0.5">
          <animate attributeName="x" values="-400;1800" dur="8s" begin="1s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.5;0" dur="8s" begin="1s" repeatCount="indefinite" />
        </rect>
      </svg>

      <Container className="relative z-10">
        <div className="text-center max-w-xl mx-auto">
          <p className="font-heading-en text-xs tracking-[0.4em] text-[#d4af37]/70 uppercase mb-4">
            14 Days Program
          </p>
          <h2 className="text-h2 md:text-h1 font-heading-ja font-light text-white/90 mb-4">
            14日間の引き算プログラム
          </h2>
          <div className="w-px h-8 bg-gradient-to-b from-transparent via-[#d4af37]/40 to-transparent mx-auto mb-8" />
          <p className="text-white/50 leading-[2.2] mb-12 font-ui text-sm">
            あなたの肌と、出会い直す14日間。
            <br />
            余計なケアをやめたとき、肌は何を語り始めるのか。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#d4af37] text-white px-10 py-4 rounded-sm font-heading-ja text-sm md:text-base font-normal tracking-wider hover:bg-[#bfa045] transition-all duration-300 animate-[heroPulseGlow_3s_ease-in-out_infinite]"
            >
              14日間の引き算プログラムを始める
            </a>
          </div>
          <p className="mt-5 font-ui text-[11px] text-white/30 tracking-wider">
            LINEで30秒。あなたの肌と、出会い直す旅へ。
          </p>
        </div>
      </Container>
    </section>
  )
}

function LineCTA() {
  return (
    <section className="py-20 md:py-28 bg-[#faf8f5]">
      <Container size="sm">
        <div className="text-center">
          <h2 className="text-h3 font-heading-ja font-light text-neutral-800 mb-4">
            引き算の旅は、
            <br className="md:hidden" />
            ここから始まります
          </h2>
          <div className="w-px h-6 bg-gradient-to-b from-transparent via-gold-300/40 to-transparent mx-auto mb-6" />
          <p className="font-ui text-sm text-neutral-500 mb-10">
            引き算スキンケアの考え方や、お手入れのヒントをお届けします。
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
      <GoldDivider />
      <BrandStory />
      <GoldDivider />
      <Testimonials />
      <ProgramCTA />
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
