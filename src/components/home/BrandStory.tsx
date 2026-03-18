'use client'

import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { useScrollAnimation } from '@/lib/useScrollAnimation'

function PoetryLine({ text, delay }: { text: string; delay: number }) {
  const { ref, isVisible } = useScrollAnimation(0.2)
  return (
    <p
      ref={ref}
      className={`scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      style={{
        transitionDelay: isVisible ? `${delay}s` : '0s',
        transitionDuration: '1.2s',
      }}
    >
      {text}
    </p>
  )
}

export default function BrandStory() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.1)
  const { ref: quoteRef, isVisible: quoteVisible } = useScrollAnimation(0.15)
  const { ref: featRef, isVisible: featVisible } = useScrollAnimation(0.1)

  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a0008] via-[#1e0a0e] to-[#1a0006]" />

      {/* Subtle SVG ambient animation */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="storyGlow1" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#d4af37" stopOpacity="0.06">
              <animate attributeName="stop-opacity" values="0.03;0.08;0.03" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="storyGlow2" cx="30%" cy="70%" r="40%">
            <stop offset="0%" stopColor="#c40234" stopOpacity="0.04">
              <animate attributeName="stop-opacity" values="0.02;0.06;0.02" dur="10s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#c40234" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="720" cy="360" r="300" fill="url(#storyGlow1)">
          <animate attributeName="r" values="250;350;250" dur="10s" repeatCount="indefinite" />
        </circle>
        <circle cx="400" cy="630" r="200" fill="url(#storyGlow2)">
          <animate attributeName="r" values="160;240;160" dur="12s" repeatCount="indefinite" />
        </circle>
        {/* Floating particles */}
        <circle cx="300" cy="200" r="1" fill="#d4af37" opacity="0">
          <animate attributeName="opacity" values="0;0.3;0" dur="5s" begin="0s" repeatCount="indefinite" />
          <animate attributeName="cy" values="200;140" dur="5s" begin="0s" repeatCount="indefinite" />
        </circle>
        <circle cx="1100" cy="500" r="1.2" fill="#d4af37" opacity="0">
          <animate attributeName="opacity" values="0;0.25;0" dur="6s" begin="1s" repeatCount="indefinite" />
          <animate attributeName="cy" values="500;420" dur="6s" begin="1s" repeatCount="indefinite" />
        </circle>
        <circle cx="800" cy="700" r="0.8" fill="#d4af37" opacity="0">
          <animate attributeName="opacity" values="0;0.2;0" dur="4.5s" begin="2s" repeatCount="indefinite" />
          <animate attributeName="cy" values="700;640" dur="4.5s" begin="2s" repeatCount="indefinite" />
        </circle>
      </svg>

      <Container size="md" className="relative z-10">
        <div className="text-center">
          {/* Section header */}
          <div
            ref={headerRef}
            className={`scroll-hidden ${headerVisible ? 'scroll-visible' : ''}`}
          >
            <p className="font-heading-en text-xs tracking-[0.4em] text-[#d4af37]/70 uppercase mb-4">
              Philosophy
            </p>
            <h2 className="text-h2 md:text-h1 font-heading-ja font-light text-white/90 mb-6">
              何をつけるかより、
              <br className="md:hidden" />
              何をやめるか。
            </h2>
            <div
              className="h-px mx-auto mb-16 md:mb-20 bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent"
              style={{
                width: headerVisible ? '80px' : '0px',
                transition: 'width 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.3s',
              }}
            />
          </div>

          {/* Poetic content - generous breathing */}
          <div className="max-w-2xl mx-auto space-y-10 md:space-y-14 text-white/60 leading-[2.4] text-sm md:text-base">
            <PoetryLine
              text="もしあなたが「これさえ塗れば翌朝シワが全部消える」ような魔法を求めているなら、どうぞこのページを閉じてください。"
              delay={0.1}
            />
            <PoetryLine
              text="私たちが提案するのは、魔法ではなく「引き算」です。"
              delay={0.15}
            />
          </div>

          {/* Gold accent quote */}
          <div
            ref={quoteRef}
            className={`my-16 md:my-24 scroll-hidden ${quoteVisible ? 'scroll-visible' : ''}`}
            style={{ transitionDuration: '1.2s' }}
          >
            <div className="relative max-w-xl mx-auto py-10 md:py-14 px-8 md:px-14">
              {/* Decorative gold borders */}
              <div className="absolute top-0 left-0 w-12 h-px bg-gradient-to-r from-[#d4af37]/50 to-transparent" />
              <div className="absolute top-0 left-0 w-px h-12 bg-gradient-to-b from-[#d4af37]/50 to-transparent" />
              <div className="absolute bottom-0 right-0 w-12 h-px bg-gradient-to-l from-[#d4af37]/50 to-transparent" />
              <div className="absolute bottom-0 right-0 w-px h-12 bg-gradient-to-t from-[#d4af37]/50 to-transparent" />

              <p className="font-heading-ja text-base md:text-lg text-white/80 leading-[2.4] font-light">
                ファンデーションも化粧水もいらない。
                <br />
                最終的にこれ1本で済む素肌に導く。
                <br />
                <span className="text-[#d4af37]/80">
                  ——その信念だけを武器に。
                </span>
              </p>
            </div>
          </div>

          {/* Continued story */}
          <div className="max-w-2xl mx-auto space-y-10 md:space-y-14 text-white/60 leading-[2.4] text-sm md:text-base mb-20 md:mb-28">
            <PoetryLine
              text="創業者みなこは、20歳の時からこの構想を温めていました。何十社もの工場に断られ、それでも諦めなかった。"
              delay={0.1}
            />
            <PoetryLine
              text="現代の化粧品が「アプリの追加」だとすれば、アキノリオは「OSの再インストール」。余計な成分を引き算し、ミトコンドリアとケイ素の力だけで肌本来の力を呼び覚まします。"
              delay={0.15}
            />
          </div>

          {/* Features - with gold accents */}
          <div
            ref={featRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16"
          >
            {[
              {
                title: '引き算の哲学',
                description:
                  '足すのではなく、やめること。化粧水も、ファンデーションも、ダブル洗顔も。肌本来の力を信じ、余計を手放す覚悟。',
              },
              {
                title: 'ミトコンドリアの力',
                description:
                  '細胞のエネルギー工場に着目。肌の「OS」を初期化し、内側から目覚める肌へのアプローチ。',
              },
              {
                title: 'ノーファンデの素肌へ',
                description:
                  '最終的にこれ1本で済む素肌に導く。それがアキノリオの約束であり、ゴールです。',
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className={`text-center scroll-hidden ${featVisible ? 'scroll-visible' : ''}`}
                style={{ transitionDelay: featVisible ? `${0.2 + index * 0.2}s` : '0s' }}
              >
                <div className="w-px h-8 bg-gradient-to-b from-transparent via-[#d4af37]/40 to-transparent mx-auto mb-6" />
                <h3 className="font-heading-ja text-base text-white/80 mb-4 tracking-wider">
                  {feature.title}
                </h3>
                <p className="font-ui text-xs text-white/40 leading-[2]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div>
            <Button href="/about" variant="secondary">
              ブランドストーリーを読む
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
