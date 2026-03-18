import Image from 'next/image'
import { LINE_URL } from '@/lib/constants'

export default function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/70 via-primary-800/50 to-primary-900/80 z-[1]" />

      {/* === LP-level SVG Animation Background === */}
      <svg
        className="absolute inset-0 w-full h-full z-[2] pointer-events-none"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="heroGlow1" cx="50%" cy="45%" r="50%">
            <stop offset="0%" stopColor="#d4af37" stopOpacity="0.15">
              <animate attributeName="stop-opacity" values="0.06;0.22;0.06" dur="6s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="heroGlow2" cx="25%" cy="70%" r="40%">
            <stop offset="0%" stopColor="#c40234" stopOpacity="0.08">
              <animate attributeName="stop-opacity" values="0.03;0.12;0.03" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#c40234" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="heroGlow3" cx="75%" cy="30%" r="35%">
            <stop offset="0%" stopColor="#d4af37" stopOpacity="0.06">
              <animate attributeName="stop-opacity" values="0.03;0.10;0.03" dur="10s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
          </radialGradient>

          <filter id="heroBlur"><feGaussianBlur stdDeviation="3" /></filter>

          <linearGradient id="shimmerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d4af37" stopOpacity="0" />
            <stop offset="40%" stopColor="#d4af37" stopOpacity="0.04" />
            <stop offset="50%" stopColor="#d4af37" stopOpacity="0.08" />
            <stop offset="60%" stopColor="#d4af37" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Breathing radial glows */}
        <circle cx="720" cy="400" r="300" fill="url(#heroGlow1)" opacity="0.7">
          <animate attributeName="r" values="260;380;260" dur="8s" repeatCount="indefinite" />
        </circle>
        <circle cx="350" cy="630" r="250" fill="url(#heroGlow2)" opacity="0.5">
          <animate attributeName="r" values="200;300;200" dur="10s" repeatCount="indefinite" />
        </circle>
        <circle cx="1080" cy="270" r="220" fill="url(#heroGlow3)" opacity="0.4">
          <animate attributeName="r" values="180;280;180" dur="12s" repeatCount="indefinite" />
        </circle>

        {/* Expanding wave rings */}
        <g transform="translate(720, 420)">
          <circle cx="0" cy="0" r="80" fill="none" stroke="#d4af37" strokeWidth="0.5" opacity="0">
            <animate attributeName="r" values="60;450" dur="9s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.15;0" dur="9s" repeatCount="indefinite" />
          </circle>
          <circle cx="0" cy="0" r="80" fill="none" stroke="#d4af37" strokeWidth="0.4" opacity="0">
            <animate attributeName="r" values="60;450" dur="9s" begin="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.10;0" dur="9s" begin="3s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Floating gold particles */}
        <g filter="url(#heroBlur)">
          <circle cx="120" cy="180" r="2.0" fill="#d4af37" opacity="0">
            <animate attributeName="opacity" values="0;0.7;0" dur="5s" begin="0s" repeatCount="indefinite" />
            <animate attributeName="cy" values="180;100" dur="5s" begin="0s" repeatCount="indefinite" />
          </circle>
          <circle cx="380" cy="720" r="2.5" fill="#d4af37" opacity="0">
            <animate attributeName="opacity" values="0;0.5;0" dur="4.2s" begin="1.2s" repeatCount="indefinite" />
            <animate attributeName="cy" values="720;620" dur="4.2s" begin="1.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="760" cy="220" r="1.8" fill="#d4af37" opacity="0">
            <animate attributeName="opacity" values="0;0.6;0" dur="4.5s" begin="0.6s" repeatCount="indefinite" />
            <animate attributeName="cy" values="220;140" dur="4.5s" begin="0.6s" repeatCount="indefinite" />
          </circle>
          <circle cx="1100" cy="480" r="1.5" fill="#d4af37" opacity="0">
            <animate attributeName="opacity" values="0;0.45;0" dur="5.5s" begin="2s" repeatCount="indefinite" />
            <animate attributeName="cy" values="480;380" dur="5.5s" begin="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="950" cy="130" r="1.4" fill="#d4af37" opacity="0">
            <animate attributeName="opacity" values="0;0.55;0" dur="4.8s" begin="1.8s" repeatCount="indefinite" />
            <animate attributeName="cy" values="130;50" dur="4.8s" begin="1.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="580" cy="850" r="2.8" fill="#d4af37" opacity="0">
            <animate attributeName="opacity" values="0;0.35;0" dur="5.2s" begin="0.5s" repeatCount="indefinite" />
            <animate attributeName="cy" values="850;750" dur="5.2s" begin="0.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="1300" cy="360" r="1.6" fill="#d4af37" opacity="0">
            <animate attributeName="opacity" values="0;0.5;0" dur="4.6s" begin="2.5s" repeatCount="indefinite" />
            <animate attributeName="cy" values="360;270" dur="4.6s" begin="2.5s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Shimmer band */}
        <rect x="-500" y="0" width="300" height="900" fill="url(#shimmerGrad)" opacity="0.6">
          <animate attributeName="x" values="-500;1900" dur="7s" begin="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.6;0" dur="7s" begin="2s" repeatCount="indefinite" />
        </rect>
      </svg>

      {/* Decorative radial glow overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(ellipse,rgba(212,175,55,0.10)_0%,transparent_70%)] z-[2] opacity-0 animate-[glowIn_2s_ease-out_1s_forwards]" />

      {/* Content */}
      <div className="relative z-10 w-full px-5 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Text content */}
          <div className="flex-1 max-w-2xl text-center md:text-left">
            {/* Brand name */}
            <p className="font-heading-en text-sm md:text-base tracking-[0.4em] text-gold-400 mb-8 opacity-0 animate-[fadeInSimple_1.5s_ease-out_0.3s_forwards]">
              AKINORIO
            </p>

            {/* Tagline */}
            <h1 className="text-h1 md:text-display font-heading-ja font-light text-white mb-6 animate-fade-in-up" style={{ animationDelay: '0.6s', lineHeight: '2.2' }}>
              引き算という、
              <br />
              <span className="text-gold-gradient font-normal">
                美しさの答え。
              </span>
            </h1>

            {/* Sub copy */}
            <p className="text-base md:text-lg text-primary-100/80 leading-[2.2] mb-12 max-w-lg mx-auto md:mx-0 animate-fade-in-up" style={{ animationDelay: '1s' }}>
              あなたの肌に必要だったのは、
              <br />
              「何かを足す」ことではなく、
              <br />
              「やめる」ことでした。
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gold-500 text-white px-8 py-4 rounded-sm font-heading-ja text-base font-normal tracking-wider hover:bg-gold-600 transition-all duration-300 shadow-[var(--shadow-gold)]"
              >
                14日間の引き算プログラムを始める
              </a>
            </div>

            {/* Sub text */}
            <p className="font-ui text-xs text-primary-200/50 mt-5 animate-fade-in-up" style={{ animationDelay: '1.8s' }}>
              LINEで30秒。あなたの肌と、出会い直す旅へ。
            </p>
          </div>

          {/* Hero product image */}
          <div className="flex-shrink-0 w-[280px] md:w-[380px] lg:w-[440px] opacity-0 animate-[scaleIn_1.2s_ease-out_0.8s_forwards]">
            <div className="animate-float">
              <Image
                src="/images/products/allseries.png"
                alt="AKINORIO 全商品ラインナップ"
                width={440}
                height={550}
                priority
                className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                sizes="(max-width: 768px) 280px, (max-width: 1024px) 380px, 440px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-[3]" />
    </section>
  )
}
