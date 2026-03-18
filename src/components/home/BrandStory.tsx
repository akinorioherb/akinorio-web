import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-bg-warm">
      <Container size="md">
        <div className="text-center">
          {/* Section header */}
          <p className="font-heading-en text-xs tracking-[0.3em] text-gold-500 uppercase mb-3">
            Philosophy
          </p>
          <h2 className="text-h2 font-heading-ja font-light text-neutral-800 mb-8">
            何をつけるかより、何をやめるか。
          </h2>
          <div className="gold-divider w-16 mx-auto mb-12" />

          {/* Content */}
          <div className="max-w-2xl mx-auto space-y-6 text-neutral-600 leading-[2]">
            <p>
              もしあなたが「これさえ塗れば翌朝シワが全部消える」ような
              魔法を求めているなら、どうぞこのページを閉じてください。
            </p>
            <p>
              私たちが提案するのは、魔法ではなく「引き算」です。
            </p>
            <p>
              創業者みなこは、20歳の時からこの構想を温めていました。
              何十社もの工場に断られ、それでも諦めなかった。
              「ファンデーションも化粧水もいらない。最終的にこれ1本で済む素肌に導く」
              ——その信念だけを武器に。
            </p>
            <p>
              現代の化粧品が「アプリの追加」だとすれば、
              アキノリオは「OSの再インストール」。
              余計な成分を引き算し、ミトコンドリアとケイ素の力だけで
              肌本来の力を呼び覚ます。それがアキノリオの哲学です。
            </p>
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
