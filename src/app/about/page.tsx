import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { LINE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'ブランドストーリー',
  description:
    '20歳の構想。何十社に断られた開発秘話。AKINORIOが追求する「引き算の美学」と、ノーファンデの素肌へ導く哲学。',
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

      {/* Founder Story */}
      <section className="py-20 md:py-28">
        <Container size="sm">
          <div className="text-center mb-14">
            <p className="font-heading-en text-xs tracking-[0.3em] text-gold-500 uppercase mb-3">
              Founder
            </p>
            <h2 className="text-h2 font-heading-ja font-light text-neutral-800">
              20歳の構想、何十社の壁
            </h2>
            <div className="gold-divider w-16 mx-auto mt-6" />
          </div>
          <div className="space-y-8 text-neutral-600 leading-[2]">
            <p>
              創業者みなこがこの構想を抱いたのは、20歳の時でした。
            </p>
            <p>
              「ファンデーションも化粧水もいらない。ダブル洗顔も不要。
              朝は水洗顔すら不要。最終的にこれ1本で済む素肌に導く」
              ——その信念を、何十社もの工場に伝え歩きました。
            </p>
            <p>
              返ってきたのは、断りの言葉ばかり。
              「そんなものは作れない」「需要がない」「前例がない」。
            </p>
            <p>
              それでもみなこは諦めなかった。
              そして、ようやく出会えた工場がこう言いました。
              「30年の歴史で、こんな形状を作ったのは初めてです」。
              原料メーカーは「これだけの配合量は、美容液と呼んでください」と。
            </p>
            <p>
              世界でオンリーワン。アキノリオは、そうして生まれました。
            </p>
          </div>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="py-20 md:py-28 bg-bg-warm">
        <Container size="sm">
          <div className="text-center mb-14">
            <p className="font-heading-en text-xs tracking-[0.3em] text-gold-500 uppercase mb-3">
              Philosophy
            </p>
            <h2 className="text-h2 font-heading-ja font-light text-neutral-800">
              何をつけるかより、何をやめるか
            </h2>
            <div className="gold-divider w-16 mx-auto mt-6" />
          </div>
          <div className="space-y-8 text-neutral-600 leading-[2]">
            <p>
              化粧品の世界では、常に「足し算」が行われてきました。
              新しい成分を加え、新しい効果を謳い、新しいステップを追加する。
            </p>
            <p>
              化粧品が「アプリの追加」だとすれば、
              アキノリオは「OSの再インストール」。
              余計なものを全て取り除き、肌という名のシステムを初期化する。
            </p>
            <p>
              もう、これ以上あなたの貴重なお金と時間を、
              一時の気休めのために使わないでください。
            </p>
            <p>
              答えは、細胞の中にありました。
              ミトコンドリアとケイ素の力で、肌が自ら美しくなる力を取り戻す。
              それが私たちの答えです。
            </p>
          </div>
        </Container>
      </section>

      {/* Spreading Philosophy */}
      <section className="py-20 md:py-28">
        <Container size="md">
          <div className="text-center mb-14">
            <p className="font-heading-en text-xs tracking-[0.3em] text-gold-500 uppercase mb-3">
              Our Way
            </p>
            <h2 className="text-h2 font-heading-ja font-light text-neutral-800">
              売らないで広がる
            </h2>
            <div className="gold-divider w-16 mx-auto mt-6" />
          </div>

          <div className="max-w-2xl mx-auto space-y-6 text-neutral-600 leading-[2]">
            <p>
              アキノリオの代理店理念は「売らないで広がる」こと。
              自然な口コミだけで連鎖する。売り込みは完全に禁止。
            </p>
            <p>
              オーナー自身が本当に惚れ込んだ場合のみ、取り扱いができます。
              感動を伝え、その感動が次の人に届く。
              それだけで広がっていく。
            </p>
          </div>

          {/* Key points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-3xl mx-auto">
            {[
              {
                title: 'ミトコンドリア活性',
                desc: '細胞のエネルギー工場を活性化。肌のOSを初期化し、内側から目覚めさせます。',
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
                desc: 'パラベンフリー・アルコールフリー。患者の薬剤アレルギーの肌が再生した実績。',
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
      <section className="py-20 md:py-28 bg-bg-warm">
        <Container size="sm">
          <div className="text-center">
            <h2 className="text-h3 font-heading-ja font-light text-neutral-800 mb-6">
              引き算の旅は、
              <br />
              ここから始まります
            </h2>
            <p className="font-ui text-sm text-neutral-500 mb-8">
              あなたの肌と、出会い直す14日間。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gold-500 text-white px-8 py-4 rounded-sm font-heading-ja text-base font-normal tracking-wider hover:bg-gold-600 transition-all duration-300"
              >
                14日間の引き算プログラムを始める
              </a>
              <Button href="/products" variant="secondary">
                商品一覧を見る
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
