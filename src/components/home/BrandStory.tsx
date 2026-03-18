import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-bg-warm">
      <Container size="md">
        <div className="text-center">
          {/* Section header */}
          <p className="font-heading-en text-xs tracking-[0.3em] text-gold-500 uppercase mb-3">
            Our Philosophy
          </p>
          <h2 className="text-h2 font-heading-ja font-light text-neutral-800 mb-8">
            なぜ、ミトコンドリアなのか
          </h2>
          <div className="gold-divider w-16 mx-auto mb-12" />

          {/* Content */}
          <div className="max-w-2xl mx-auto space-y-6 text-neutral-600 leading-[2]">
            <p>
              私たちの肌には、自ら美しくなる力が備わっています。
            </p>
            <p>
              その鍵を握るのが、細胞のエネルギー工場「ミトコンドリア」。
              加齢とともに衰えるミトコンドリアの活性を取り戻すことで、
              肌は本来の輝きを取り戻します。
            </p>
            <p>
              アキノリオは「足す」のではなく「引く」スキンケア。
              余計な成分を排し、ミトコンドリアとケイ素の力だけで
              細胞レベルからお肌を目覚めさせます。
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: '引き算の哲学',
                description:
                  '余計な成分を加えない。肌本来の力を信じる、シンプルなアプローチ。',
              },
              {
                title: 'ミトコンドリア活性',
                description:
                  '細胞のエネルギー工場に直接アプローチ。内側から輝く肌へ。',
              },
              {
                title: 'ケイ素の力',
                description:
                  '美のミネラル「ケイ素」が、コラーゲンの生成をサポートします。',
              },
            ].map((feature) => (
              <div key={feature.title} className="text-center">
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
          <div className="mt-14">
            <Button href="/about" variant="secondary">
              ブランドストーリーを読む
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
