'use client'

import Link from 'next/link'
import Container from '@/components/ui/Container'
import { LINE_URL } from '@/lib/constants'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/i18n'

export default function ContactContent() {
  const { lang } = useLanguage()
  const t = translations[lang].contact

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
          <div className="w-12 h-px bg-[#D4AF37] mx-auto mb-8" />
          <p className="text-sm text-neutral-500 leading-[2] max-w-md mx-auto" style={{ fontFamily: '"Noto Serif JP", serif' }}>
            {t.description}
          </p>
        </div>

        {/* Contact methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {/* Email */}
          <div className="border border-neutral-200 bg-white p-8 flex flex-col items-center text-center">
            <div className="w-12 h-12 border border-neutral-200 flex items-center justify-center mb-5">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="text-neutral-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-[10px] tracking-[0.4em] text-neutral-400 uppercase font-bold mb-2" style={{ fontFamily: 'Neue Haas Grotesk, sans-serif' }}>
              Email
            </span>
            <p className="text-sm text-neutral-600 mb-5 leading-relaxed" style={{ fontFamily: '"Noto Serif JP", serif' }}>
              {t.emailDesc}
            </p>
            <a
              href="mailto:info@akinorio.com"
              className="inline-flex items-center justify-center border border-[#1A0005] text-[#1A0005] px-8 py-3 text-xs tracking-[0.2em] font-bold hover:bg-[#1A0005] hover:text-white transition-colors w-full"
            >
              info@akinorio.com
            </a>
          </div>

          {/* LINE */}
          <div className="border border-neutral-200 bg-white p-8 flex flex-col items-center text-center">
            <div className="w-12 h-12 border border-neutral-200 flex items-center justify-center mb-5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-[#06C755]">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.271.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
            </div>
            <span className="text-[10px] tracking-[0.4em] text-neutral-400 uppercase font-bold mb-2" style={{ fontFamily: 'Neue Haas Grotesk, sans-serif' }}>
              LINE
            </span>
            <p className="text-sm text-neutral-600 mb-5 leading-relaxed" style={{ fontFamily: '"Noto Serif JP", serif' }}>
              {t.lineDesc}
            </p>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#06C755] text-white px-8 py-3 text-xs tracking-[0.2em] font-bold hover:opacity-90 transition-opacity w-full"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.271.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              {t.lineButton}
            </a>
          </div>
        </div>

        {/* Address info */}
        <div className="border-t border-neutral-200 pt-10 text-center">
          <p className="text-[10px] tracking-[0.4em] text-neutral-400 uppercase font-bold mb-4" style={{ fontFamily: 'Neue Haas Grotesk, sans-serif' }}>
            {t.officeLabel}
          </p>
          <p className="text-sm text-neutral-600 leading-[2]" style={{ fontFamily: '"Noto Serif JP", serif' }}>
            株式会社アキノリオ<br />
            〒104-0061<br />
            東京都中央区銀座一丁目22番11号<br />
            銀座大竹ビジデンス2階
          </p>
          <div className="mt-6">
            <Link href="/company" className="text-xs text-neutral-400 hover:text-neutral-600 tracking-widest underline underline-offset-4">
              {t.companyLink}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
