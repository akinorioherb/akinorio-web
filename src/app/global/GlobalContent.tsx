'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

const MARKETS = [
  { flag: '🇺🇸', region: 'USA', cities: 'Los Angeles · New York', copy: '"The most efficient skincare routine on Earth."', days: '5–8 days' },
  { flag: '🇬🇧', region: 'United Kingdom', cities: 'London · Edinburgh', copy: '"The Art of Japanese Restraint."', days: '4–7 days' },
  { flag: '🇫🇷', region: 'France', cities: 'Paris · Lyon', copy: '"La Beauté Japonaise."', days: '5–8 days' },
  { flag: '🇦🇺', region: 'Australia', cities: 'Sydney · Melbourne', copy: '"Australian Sun. Japanese Science."', days: '4–7 days' },
  { flag: '🇸🇬', region: 'Singapore', cities: 'Singapore City', copy: '"Precision. Purity. Made in Japan."', days: '3–5 days' },
  { flag: '🇲🇾', region: 'Malaysia', cities: 'Kuala Lumpur · Penang', copy: '"Alcohol-Free. Paraben-Free. Halal Certification in Progress."', days: '4–6 days' },
]

const COPIES = [
  { en: 'Stop adding. Start subtracting.', ja: '足すのをやめたら、本当の美肌が始まった。' },
  { en: 'Japanese women use half the products. Have half the wrinkles.', ja: '日本人女性は半分しか使わない。シワも半分。' },
  { en: 'Your skin already knows how to be beautiful. Stop interfering.', ja: '肌はすでに、美しくなる方法を知っている。邪魔するのをやめるだけでいい。' },
]

const BADGES = [
  { label: 'Alcohol-Free', icon: '◎', desc: 'No ethanol. Safe for all skin types and values.' },
  { label: 'Paraben-Free', icon: '◎', desc: 'Clean formulation. No harsh preservatives.' },
  { label: 'Made in Japan', icon: '◎', desc: 'Crafted with precision in Tokyo, Japan.' },
  { label: '90% Repeat Rate', icon: '◎', desc: 'Our customers return — month after month.' },
]

const HALAL_POINTS = [
  {
    icon: '✓',
    en: 'Alcohol-Free',
    ja: 'アルコールフリー',
    descEn: 'Zero ethanol in all formulations. Compliant with halal skincare standards.',
    descJa: '全製品エタノール無配合。ハラル基準に準拠した処方です。',
  },
  {
    icon: '✓',
    en: 'Paraben-Free',
    ja: 'パラベンフリー',
    descEn: 'No parabens or harsh chemical preservatives. Clean & conscious formulation.',
    descJa: 'パラベン・石油系防腐剤不使用。クリーンな処方を追求しています。',
  },
  {
    icon: '◑',
    en: 'Halal Certification',
    ja: 'ハラル認証',
    descEn: 'Application in progress. Currently undergoing official halal certification review.',
    descJa: '申請手続き中。現在、正式なハラル認証の審査を進めています。',
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 1, ease: 'easeOut' },
} as const

export default function GlobalContent() {
  const { lang } = useLanguage()
  const isJa = lang === 'ja'

  return (
    <main className="bg-[#0a0005] text-white min-h-screen overflow-hidden">

      {/* ── Hero ── */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-6 text-center overflow-hidden"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 40%, #7C0114 0%, #3D010A 55%, #0a0005 100%)' }}>

        {/* Gold particles */}
        {[...Array(24)].map((_, i) => (
          <motion.div key={i}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 1.5 + (i % 3) * 0.8,
              height: 1.5 + (i % 3) * 0.8,
              left: `${(i * 37 + 11) % 100}%`,
              top: `${(i * 23 + 7) % 100}%`,
              background: 'rgba(212,175,55,0.7)',
              boxShadow: '0 0 6px 2px rgba(212,175,55,0.3)',
            }}
            animate={{ opacity: [0.2, 0.9, 0.2], y: [0, -18, 0] }}
            transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: (i * 0.4) % 8 }}
          />
        ))}

        <motion.div {...fadeUp} className="relative z-10 max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.5em] text-[#D4AF37] uppercase mb-6 font-medium">
            Ships Worldwide · 世界へ直送
          </p>

          <h1 className="font-heading-en text-5xl md:text-7xl lg:text-8xl font-light tracking-wide text-white mb-8 leading-[1.1]"
            style={{ letterSpacing: '0.04em' }}>
            {isJa ? '引き算の美学、世界へ。' : 'The Art of Subtraction. Delivered to the World.'}
          </h1>

          <div className="w-24 h-[0.5px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-8" />

          <p className="text-lg md:text-2xl text-white/70 font-light leading-relaxed max-w-2xl mx-auto mb-12"
            style={{ fontFamily: 'var(--font-luxury-en)', fontStyle: 'italic', letterSpacing: '0.03em' }}>
            {isJa
              ? 'アルコールフリー・パラベンフリー・Made in Japan。ミニマリストスキンケアの真髄を、日本からあなたの元へ。'
              : 'Alcohol-Free. Paraben-Free. Made in Japan.\nAuthentic Japanese Skinimalism, shipped from Tokyo to your door.'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products"
              className="group relative overflow-hidden bg-[#E31633] text-white py-4 px-10 text-sm tracking-[0.2em] font-medium hover:shadow-[0_0_30px_rgba(227,22,51,0.5)] transition-all duration-300">
              {isJa ? '商品を見る' : 'Shop Now — Ships Worldwide'}
            </Link>
            <Link href="/about"
              className="border border-white/30 text-white py-4 px-10 text-sm tracking-[0.2em] hover:bg-white hover:text-[#0a0005] transition-all duration-300">
              {isJa ? 'ブランドストーリー' : 'Our Story'}
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ── Skinimalism Philosophy ── */}
      <section className="py-24 md:py-32 border-t border-white/10 bg-[#0a0005]">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="text-center mb-20">
            <p className="text-xs tracking-[0.5em] text-[#E31633] uppercase mb-4 font-medium">
              Skinimalism
            </p>
            <h2 className="font-heading-en text-3xl md:text-5xl font-light text-white mb-6 leading-[1.2]"
              style={{ letterSpacing: '0.04em' }}>
              {isJa ? '世界が"引き算"を待っていた。' : 'The World Was Already Waiting for Less.'}
            </h2>
            <div className="w-16 h-[0.5px] bg-[#D4AF37] mx-auto mb-8" />
            <p className="text-base md:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'var(--font-luxury-en)', letterSpacing: '0.02em' }}>
              {isJa
                ? '10ステップのKビューティーに疲れた世界が、今「引き算」という答えに向かっている。ミニマリズム・クリーンビューティー・スキニマリズム——その思想の本源は、実はずっと日本にあった。'
                : 'After a decade of K-beauty\'s 10-step routines, the world is turning toward simplicity. Skinimalism. Clean beauty. Minimalist living. The philosophy was always here — in Japan, where restraint is considered the highest form of beauty.'}
            </p>
          </motion.div>

          {/* 3 core copies */}
          <div className="space-y-6">
            {COPIES.map((copy, i) => (
              <motion.div key={i} {...fadeUp}
                transition={{ duration: 1, delay: i * 0.15, ease: 'easeOut' }}
                className="border border-white/10 bg-white/[0.02] p-8 md:p-10 hover:border-[#D4AF37]/40 transition-colors duration-500">
                <p className="font-heading-en text-xl md:text-3xl font-light text-white/90 leading-relaxed"
                  style={{ letterSpacing: '0.03em' }}>
                  "{isJa ? copy.ja : copy.en}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Badges ── */}
      <section className="py-20 border-t border-white/10 bg-[#1A0005]/60">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <motion.div {...fadeUp}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {BADGES.map((badge, i) => (
                <motion.div key={badge.label} {...fadeUp}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: 'easeOut' }}
                  className="flex flex-col items-center text-center p-6 md:p-8 bg-[#0a0005] border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-colors duration-300">
                  <span className="text-[#D4AF37] text-2xl mb-3">{badge.icon}</span>
                  <h3 className="font-heading-en text-sm md:text-base font-medium tracking-[0.15em] text-white mb-2">
                    {badge.label}
                  </h3>
                  <p className="text-xs text-white/50 leading-relaxed">
                    {badge.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Halal Section ── */}
      <section className="py-24 md:py-32 border-t border-white/10 bg-[#0a0005]">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-xs tracking-[0.5em] text-[#D4AF37] uppercase mb-4 font-medium">
              {isJa ? 'ムスリムの方へ' : 'For Muslim Consumers'}
            </p>
            <h2 className="font-heading-en text-3xl md:text-5xl font-light text-white mb-6 leading-[1.2]"
              style={{ letterSpacing: '0.04em' }}>
              {isJa ? 'ハラル対応処方' : 'Halal-Conscious Formula'}
            </h2>
            <div className="w-16 h-[0.5px] bg-[#D4AF37] mx-auto mb-6" />
            <p className="text-sm text-white/50 max-w-2xl mx-auto leading-relaxed">
              {isJa
                ? 'AKINORIOは、全製品においてアルコール（エタノール）・パラベンを使用しておりません。現在、正式なハラル認証取得に向けた申請手続きを進めております。'
                : 'AKINORIO uses no ethanol or parabens across all products. We are currently in the official halal certification application process.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {HALAL_POINTS.map((point, i) => (
              <motion.div key={point.en} {...fadeUp}
                transition={{ duration: 0.8, delay: i * 0.12, ease: 'easeOut' }}
                className={`relative flex flex-col items-center text-center p-8 md:p-10 border transition-colors duration-300 ${
                  i === 2
                    ? 'border-[#D4AF37]/50 bg-[#D4AF37]/5'
                    : 'border-[#D4AF37]/20 bg-[#0a0005] hover:border-[#D4AF37]/50'
                }`}>
                {i === 2 && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-[#0a0005] text-[10px] tracking-[0.25em] uppercase font-bold px-3 py-1">
                    {isJa ? '申請手続き中' : 'In Progress'}
                  </span>
                )}
                <span className={`text-3xl mb-4 ${i === 2 ? 'text-[#D4AF37]' : 'text-[#D4AF37]'}`}>
                  {point.icon}
                </span>
                <h3 className="font-heading-en text-base md:text-lg font-medium tracking-[0.15em] text-white mb-3">
                  {isJa ? point.ja : point.en}
                </h3>
                <p className="text-xs text-white/50 leading-relaxed">
                  {isJa ? point.descJa : point.descEn}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="mt-10 text-center">
            <p className="text-xs text-white/30 leading-relaxed max-w-2xl mx-auto">
              {isJa
                ? '※ ハラル認証は現在申請中です。認証取得後は本ページにてお知らせいたします。成分・原材料の詳細はお問い合わせください。'
                : '* Official halal certification is currently under review. This page will be updated upon certification. For ingredient inquiries, please contact us.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Global Markets ── */}
      <section className="py-24 md:py-32 border-t border-white/10 bg-[#0a0005]">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-xs tracking-[0.5em] text-[#E31633] uppercase mb-4 font-medium">
              Global Shipping
            </p>
            <h2 className="font-heading-en text-3xl md:text-5xl font-light text-white leading-[1.2]"
              style={{ letterSpacing: '0.04em' }}>
              {isJa ? '届く国、届く想い。' : 'From Tokyo, To You.'}
            </h2>
            <div className="w-16 h-[0.5px] bg-[#D4AF37] mx-auto mt-6 mb-6" />
            <p className="text-white/50 max-w-xl mx-auto text-sm leading-relaxed">
              {isJa
                ? 'EMS・DHL等の国際配送サービスで、日本から世界へ直送。'
                : 'Shipped via EMS / DHL from Japan. Arrives as a personal import — the most direct path from Tokyo to your bathroom shelf.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {MARKETS.map((market, i) => (
              <motion.div key={market.region} {...fadeUp}
                transition={{ duration: 0.8, delay: i * 0.1, ease: 'easeOut' }}
                className="group bg-white/[0.02] border border-white/10 p-6 hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/5 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{market.flag}</span>
                  <div>
                    <p className="font-heading-en text-base font-medium tracking-[0.1em] text-white">{market.region}</p>
                    <p className="text-xs text-white/40">{market.cities}</p>
                  </div>
                </div>
                <p className="text-sm text-white/60 italic mb-4 leading-relaxed"
                  style={{ fontFamily: 'var(--font-luxury-en)' }}>
                  {market.copy}
                </p>
                <div className="flex items-center gap-2 mt-auto">
                  <span className="text-[#D4AF37] text-xs">✈</span>
                  <span className="text-xs text-white/40 tracking-wide">{market.days} via EMS</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How to Order ── */}
      <section className="py-24 border-t border-white/10 bg-[#1A0005]/40">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-xs tracking-[0.5em] text-[#E31633] uppercase mb-4 font-medium">
              How to Order
            </p>
            <h2 className="font-heading-en text-3xl md:text-4xl font-light text-white"
              style={{ letterSpacing: '0.04em' }}>
              {isJa ? '海外から注文する方法' : 'Ordering from Outside Japan'}
            </h2>
          </motion.div>

          <motion.div {...fadeUp} className="space-y-6">
            {[
              {
                step: '01',
                title: isJa ? '商品をカートに入れる' : 'Add to Cart',
                body: isJa ? '商品一覧から気になる商品を選んでカートに入れてください。' : 'Browse our products and add your chosen items to the cart.',
              },
              {
                step: '02',
                title: isJa ? 'お届け先に海外住所を入力' : 'Enter Your International Address',
                body: isJa ? 'チェックアウト時に海外の住所をご入力ください。クレジットカード・PayPalでお支払いいただけます。' : 'At checkout, enter your address. We accept international credit cards and PayPal.',
              },
              {
                step: '03',
                title: isJa ? '国際配送で自宅に届く' : 'Delivered to Your Door',
                body: isJa ? 'EMS（国際スピード郵便）またはDHLで発送。3〜8営業日でお届けします。' : 'Shipped via EMS or DHL from Tokyo. Arrives in 3–8 business days depending on your region.',
              },
            ].map((s, i) => (
              <div key={s.step} className="flex gap-6 items-start">
                <span className="font-heading-en text-4xl font-light text-[#D4AF37]/40 shrink-0 leading-none mt-1">
                  {s.step}
                </span>
                <div className="border-t border-white/10 pt-4 flex-1">
                  <h3 className="text-white font-medium tracking-wide mb-2">{s.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}

            <p className="text-xs text-white/30 leading-relaxed border-t border-white/5 pt-6 mt-8">
              {isJa
                ? '※ 海外へのご注文は個人輸入としての取り扱いとなります。各国の輸入規制・関税についてはお客様ご自身でご確認ください。'
                : '* International orders are processed as personal import. Customers are responsible for any applicable duties, taxes, and import regulations in their country. AKINORIO ships under Japanese cosmetics standards.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Featured Copy ── */}
      <section className="py-32 border-t border-white/10 overflow-hidden"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, #3D010A 0%, #0a0005 100%)' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <p className="font-heading-en text-[clamp(2rem,5vw,4rem)] font-light text-white leading-[1.25] mb-8"
              style={{ letterSpacing: '0.04em' }}>
              {isJa
                ? '「本当に必要なものは何か、肌が答えてくれます。」'
                : '"What remains will be what was always truly necessary."'}
            </p>
            <div className="w-16 h-[0.5px] bg-[#D4AF37] mx-auto mb-6" />
            <p className="text-sm tracking-[0.3em] text-white/40 uppercase mb-12">
              MINAKO · Founder, AKINORIO
            </p>
            <Link href="/products"
              className="inline-block bg-[#E31633] text-white py-4 px-12 text-sm tracking-[0.25em] hover:shadow-[0_0_40px_rgba(227,22,51,0.4)] transition-all duration-300">
              {isJa ? '引き算スキンケアを始める' : 'Begin the Subtraction'}
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  )
}
