import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import { SITE_NAME, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: `会社概要 | ${SITE_NAME}`,
  description: '株式会社アキノリオの会社概要。東京都中央区銀座一丁目22番11号 銀座大竹ビジデンス2階。ミトコンドリア×ケイ素の引き算スキンケアブランドAKINORIOを運営。',
  alternates: {
    canonical: `${SITE_URL}/company`,
  },
}

const COMPANY_INFO = [
  { label: '会社名', value: '株式会社アキノリオ' },
  { label: '所在地', value: '〒104-0061\n東京都中央区銀座一丁目22番11号\n銀座大竹ビジデンス2階' },
  { label: 'メールアドレス', value: 'info@akinorio.com', href: 'mailto:info@akinorio.com' },
  { label: 'ウェブサイト', value: 'https://akinorio.com', href: 'https://akinorio.com' },
  { label: '事業内容', value: '化粧品の企画・製造・販売\n引き算スキンケアブランド「AKINORIO」の運営' },
]

export default function CompanyPage() {
  return (
    <section className="py-12 md:py-20 min-h-screen bg-[#fdfbf7]">
      <Container size="sm">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[10px] tracking-[0.5em] text-[#E31633] font-bold uppercase block mb-4">
            Company
          </span>
          <h1 className="text-2xl md:text-3xl font-bold tracking-[0.1em] text-neutral-800 mb-4" style={{ fontFamily: '"Noto Serif JP", serif' }}>
            会社概要
          </h1>
          <div className="w-12 h-px bg-[#D4AF37] mx-auto" />
        </div>

        {/* Company info table */}
        <div className="border-t border-neutral-200">
          {COMPANY_INFO.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-1 md:grid-cols-3 border-b border-neutral-200 py-6"
            >
              <div className="text-xs tracking-[0.2em] font-bold text-neutral-500 uppercase mb-2 md:mb-0 flex items-start pt-0.5" style={{ fontFamily: 'Neue Haas Grotesk, sans-serif' }}>
                {row.label}
              </div>
              <div className="text-sm text-neutral-700 md:col-span-2 leading-relaxed whitespace-pre-line" style={{ fontFamily: '"Noto Serif JP", serif' }}>
                {row.href ? (
                  <a href={row.href} className="hover:text-[#E31633] transition-colors underline underline-offset-4">
                    {row.value}
                  </a>
                ) : (
                  row.value
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-14 text-center">
          <p className="text-sm text-neutral-500 mb-6" style={{ fontFamily: '"Noto Serif JP", serif' }}>
            ご不明点やお取り扱いに関するご相談は<br className="md:hidden" />お気軽にお問い合わせください。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#1A0005] text-white px-10 py-4 text-xs tracking-[0.2em] font-bold hover:bg-[#E31633] transition-colors"
          >
            お問い合わせはこちら
            <svg className="w-4 h-4 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  )
}
