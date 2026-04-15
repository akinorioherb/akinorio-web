'use client'

import Link from 'next/link'
import Container from '@/components/ui/Container'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/i18n'

const COMPANY_VALUES: Record<string, { value: string; href?: string }> = {
  name: { value: '株式会社アキノリオ' },
  address: { value: '〒104-0061\n東京都中央区銀座一丁目22番11号\n銀座大竹ビジデンス2階' },
  email: { value: 'info@akinorio.com', href: 'mailto:info@akinorio.com' },
  website: { value: 'https://akinorioweb.com', href: 'https://akinorioweb.com' },
  business: { value: '化粧品の企画・製造・販売\n引き算スキンケアブランド「AKINORIO」の運営' },
}

export default function CompanyContent() {
  const { lang } = useLanguage()
  const t = translations[lang].company

  return (
    <section className="py-12 md:py-20 min-h-screen bg-[#fdfbf7]">
      <Container size="sm">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[10px] tracking-[0.5em] text-[#E31633] font-bold uppercase block mb-4">
            {t.label}
          </span>
          <h1 className="text-2xl md:text-3xl font-bold tracking-[0.1em] text-neutral-800 mb-4" style={{ fontFamily: '"Noto Serif JP", serif' }}>
            {t.title}
          </h1>
          <div className="w-12 h-px bg-[#D4AF37] mx-auto" />
        </div>

        {/* Company info table */}
        <div className="border-t border-neutral-200">
          {t.fields.map((field) => {
            const data = COMPANY_VALUES[field.key]
            if (!data) return null
            return (
              <div key={field.key} className="grid grid-cols-1 md:grid-cols-3 border-b border-neutral-200 py-6">
                <div className="text-xs tracking-[0.2em] font-bold text-neutral-500 uppercase mb-2 md:mb-0 flex items-start pt-0.5" style={{ fontFamily: 'Neue Haas Grotesk, sans-serif' }}>
                  {field.label}
                </div>
                <div className="text-sm text-neutral-700 md:col-span-2 leading-relaxed whitespace-pre-line" style={{ fontFamily: '"Noto Serif JP", serif' }}>
                  {data.href ? (
                    <a href={data.href} className="hover:text-[#E31633] transition-colors underline underline-offset-4">
                      {data.value}
                    </a>
                  ) : (
                    data.value
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-14 text-center">
          <p className="text-sm text-neutral-500 mb-6" style={{ fontFamily: '"Noto Serif JP", serif' }}>
            {t.contactCta}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#1A0005] text-white px-10 py-4 text-xs tracking-[0.2em] font-bold hover:bg-[#E31633] transition-colors"
          >
            {t.contactBtn}
            <svg className="w-4 h-4 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  )
}
