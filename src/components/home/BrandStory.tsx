'use client'

import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { useScrollAnimation } from '@/lib/useScrollAnimation'

export default function BrandStory() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section className="py-24 md:py-32 bg-bg-warm" ref={ref}>
      <Container size="md">
        <div className="text-center">
          {/* Section header */}
          <div className={`scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
            <p className="font-heading-en text-xs tracking-[0.3em] text-gold-500 uppercase mb-3">
              Philosophy
            </p>
            <h2 className="text-h2 font-heading-ja font-light text-neutral-800 mb-8">
              何をつけるかより、何をやめるか。
            </h2>
            {/* Animated gold line */}
            <div
              className="h-px mx-auto mb-12 bg-gradient-to-r from-transparent via-gold-400 to-transparent"
              style={{
                width: isVisible ? '60px' : '0px',
                transition: 'width 1s cubic-bezier(0.22, 1, 0.36, 1) 0.3s',
              }}
            />
          </div>

          {/* Content */}
          <div className="max-w-2xl mx-auto space-y-6 text-neutral-600 leading-[2]">
            {[
              'もしあなたが「これさえ塗れば翌朝シワが全部消える」ような魔法を求めているなら、どうぞこのページを閉じてください。',
              '私たちが提案するのは、魔法ではなく「引き算」です。',
              '創業者みなこは、20歳の時からこの構想を温めていました。何十社もの工場に断られ、それでも諦めなかった。「ファンデーションも化粧水もいらない。最終的にこれ1本で済む素肌に導く」——その信念だけを武器に。',
              '現代の化粧品が「アプリの追加」だとすれば、アキノリオは「OSの再インストール」。余計な成分を引き算し、ミトコンドリアとケイ素の力だけで肌本来の力を呼び覚ます。それがアキノリオの哲学です。',
            ].map((text, index) => (
              <p
                key={index}
                className={`scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
                style={{ transitionDelay: isVisible ? `${0.3 + index * 0.15}s` : '0s' }}
              >
                {text}
              </p>
            ))}
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
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
                className={`text-center scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
                style={{ transitionDelay: isVisible ? `${0.6 + index * 0.15}s` : '0s' }}
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-gold-50 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-400 to-gold-500" />
                </div>
                <h3 className="text-h4 font-heading-ja text-neutral-800 mb-3">
                  {feature.title}
                </h3>
                <p className="font-ui text-sm text-neutral-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className={`mt-14 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`} style={{ transitionDelay: isVisible ? '1s' : '0s' }}>
            <Button href="/about" variant="secondary">
              ブランドストーリーを読む
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
