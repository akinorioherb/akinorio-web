'use client'

import Link from 'next/link'
import Container from '@/components/ui/Container'
import { LINE_URL, PRODUCTS } from '@/lib/constants'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/i18n'

export default function Footer() {
  const { lang } = useLanguage()
  const t = translations[lang].footer

  return (
    <footer className="bg-primary-800 text-white">
      {/* Gold divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

      <Container>
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <Link href="/" className="font-heading-en text-2xl tracking-[0.2em] text-gold-400">
                AKINORIO
              </Link>
              <p className="mt-4 font-ui text-sm text-primary-200 leading-relaxed whitespace-pre-line">
                {t.tagline}
              </p>
            </div>

            {/* Products */}
            <div>
              <h3 className="font-ui text-xs tracking-widest text-gold-400 uppercase mb-4">
                {t.productsTitle}
              </h3>
              <ul className="space-y-2">
                {[
                  'mitochondria',
                  'perfume',
                  'herb',
                  'cleansing',
                  'kihada',
                  'serum',
                  'balm',
                  'uv',
                  'minus20-set'
                ].map((slug) => {
                  const product = PRODUCTS.find((p) => p.slug === slug);
                  if (!product) return null;
                  return (
                    <li key={product.id}>
                      <Link href={`/products/${product.slug}`} className="font-ui text-sm text-primary-200 hover:text-white transition-colors block leading-relaxed" title={product.name}>
                        {product.name}
                      </Link>
                    </li>
                  );
                })}
                <li className="pt-3 mt-3 border-t border-primary-700/50">
                  <Link href="/sample" className="font-ui text-sm text-gold-300 hover:text-gold-200 transition-colors font-bold block">
                    {t.nav.trial}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-ui text-xs tracking-widest text-gold-400 uppercase mb-4">
                {t.companyTitle}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="font-ui text-sm text-primary-200 hover:text-white transition-colors">
                    {t.nav.story}
                  </Link>
                </li>
                <li>
                  <Link href="/company" className="font-ui text-sm text-primary-200 hover:text-white transition-colors">
                    {t.nav.company}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="font-ui text-sm text-primary-200 hover:text-white transition-colors">
                    {t.nav.contact}
                  </Link>
                </li>
                <li>
                  <Link href="/tokushoho" className="font-ui text-sm text-primary-200 hover:text-white transition-colors">
                    {t.nav.legal}
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="font-ui text-sm text-primary-200 hover:text-white transition-colors">
                    {t.nav.privacy}
                  </Link>
                </li>
              </ul>
            </div>

            {/* SNS & LINE */}
            <div>
              <h3 className="font-ui text-xs tracking-widest text-gold-400 uppercase mb-4">
                {t.connectTitle}
              </h3>
              <p className="font-ui text-xs text-primary-300 mb-3">
                {t.lineText}
              </p>
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#06C755] text-white px-5 py-2.5 rounded-sm font-ui text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.271.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
                {t.lineButton}
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-16 pt-8 border-t border-primary-600">
            <p className="font-ui text-xs text-primary-300 text-center tracking-wide">
              &copy; {new Date().getFullYear()} AKINORIO. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
