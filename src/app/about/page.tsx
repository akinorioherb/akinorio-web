import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'ブランドストーリー',
  description:
    'AKINORIOが追求する「引き算のスキンケア」。ミトコンドリアとケイ素の科学で、あなた本来の輝きを呼び覚ます。',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-marble relative py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 via-primary-700/60 to-primary-800/90" />
        <Container className="relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-heading-en text-xs tracking-[0.3em] text-gold-400 uppercase mb-4">
              Our Story
            </p>
            <h1 className="text-h1 font-heading-ja font-light text-white mb-6">
              引き算の美学
            </h1>
            <div className="gold-divider w-16 mx-auto" />
          </div>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="py-20 md:py-28">
        <Container size="sm">
          <div className="space-y-8 text-neutral-600 leading-[2]">
            <p>
              化粧品の世界では、常に「足し算」が行われてきました。
              新しい成分を加え、新しい効果を謳い、新しいステップを追加する。
            </p>
            <p>
              しかし、私たちは問いました。
              「本当に必要なものは何か？」
            </p>
            <p>
              答えは、細胞の中にありました。
            </p>
          </div>
        </Container>
      </section>

      {/* Mitochondria section */}
      <section className="py-20 md:py-28 bg-bg-warm">
        <Container size="md">
          <div className="text-center mb-14">
            <p className="font-heading-en text-xs tracking-[0.3em] text-gold-500 uppercase mb-3">
              Science
            </p>
            <h2 className="text-h2 font-heading-ja font-light text-neutral-800">
              ミトコンドリアという答え
            </h2>
            <div className="gold-divider w-16 mx-auto mt-6" />
          </div>

          <div className="max-w-2xl mx-auto space-y-6 text-neutral-600 leading-[2]">
            <p>
              ミトコンドリアは、私たちの細胞一つひとつに存在するエネルギー工場です。
              ATP（アデノシン三リン酸）を生成し、細胞の活動を支えています。
            </p>
            <p>
              しかし加齢とともに、ミトコンドリアの機能は低下します。
              エネルギーが不足した細胞は、ターンオーバーが乱れ、
              コラーゲンの生成が衰え、シミ・くすみ・たるみが現れます。
            </p>
            <p>
              アキノリオは、このミトコンドリアの活性化に着目。
              ケイ素（シリカ）との組み合わせで、
              細胞が自ら美しくなる力を引き出します。
            </p>
          </div>

          {/* Key points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-3xl mx-auto">
            {[
              {
                title: 'ミトコンドリア活性',
                desc: '細胞のエネルギー工場を活性化。内側から肌を目覚めさせます。',
              },
              {
                title: 'ケイ素（シリカ）の力',
                desc: '美のミネラルがコラーゲン・エラスチンの生成をサポート。',
              },
              {
                title: '引き算の処方',
                desc: '余計な成分を一切排除。必要なものだけで構成された処方。',
              },
              {
                title: '敏感肌にも安心',
                desc: 'パラベンフリー・アルコールフリー。低刺激処方。',
              },
            ].map((point) => (
              <div key={point.title} className="bg-white p-6 rounded-sm border border-neutral-100">
                <h3 className="font-heading-ja text-base text-neutral-800 mb-2">
                  {point.title}
                </h3>
                <p className="font-ui text-sm text-neutral-500 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <Container size="sm">
          <div className="text-center">
            <h2 className="text-h3 font-heading-ja font-light text-neutral-800 mb-6">
              まずは14日間、
              <br />
              引き算のスキンケアを
              <br />
              体験してください
            </h2>
            <Button href="/sample" variant="gold" size="lg">
              無料サンプルを申し込む
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
