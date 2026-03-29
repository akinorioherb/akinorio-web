'use client'

import Link from 'next/link'
import { LINE_URL } from '@/lib/constants'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/i18n'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { lang, toggle } = useLanguage()
  const t = translations[lang]

  const MENU_ITEMS = [
    { label: t.nav.products, href: '/products' },
    { label: t.nav.story, href: '/about' },
    { label: t.nav.trial, href: '/coaching' },
    { label: t.nav.cart, href: '/cart' },
  ]

  const FOOTER_LINKS = [
    { label: t.mobile.footerLinks.company, href: '/company' },
    { label: t.mobile.footerLinks.contact, href: '/contact' },
    { label: t.mobile.footerLinks.legal, href: '/tokushoho' },
    { label: t.mobile.footerLinks.privacy, href: '/privacy' },
  ]

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Menu panel */}
      <div className="absolute top-0 left-0 w-4/5 max-w-sm h-full bg-white shadow-xl overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-neutral-100">
          <span className="font-heading-en text-lg tracking-[0.2em] text-primary-700">
            AKINORIO
          </span>
          <div className="flex items-center gap-3">
            {/* Language toggle (mobile) */}
            <button
              onClick={toggle}
              className="flex items-center gap-1 text-xs tracking-[0.12em] text-neutral-500"
              aria-label="Switch language"
            >
              <span className={lang === 'ja' ? 'text-primary-700 font-medium' : 'opacity-40'}>JA</span>
              <span className="opacity-30">|</span>
              <span className={lang === 'en' ? 'text-primary-700 font-medium' : 'opacity-40'}>EN</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-neutral-500"
              aria-label={t.nav.closeMenu}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-5">
          <ul className="space-y-1">
            {MENU_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-3 px-4 font-ui text-base text-neutral-700 hover:bg-bg-warm rounded-sm transition-colors"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* LINE CTA */}
          <div className="mt-8 p-5 bg-[#06C755]/10 rounded-sm">
            <p className="font-ui text-sm text-neutral-600 mb-3">
              {t.mobile.lineText}
            </p>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#06C755] text-white px-5 py-2.5 rounded-sm font-ui text-sm font-medium"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.271.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              {t.mobile.lineButton}
            </a>
          </div>

          {/* Footer links */}
          <div className="mt-8 pt-6 border-t border-neutral-100">
            <ul className="space-y-2">
              {FOOTER_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-ui text-xs text-neutral-400 hover:text-neutral-600"
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}
