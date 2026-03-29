'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useCart } from '@/lib/cart'
import Container from '@/components/ui/Container'
import MobileMenu from './MobileMenu'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/i18n'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { totalItems, openDrawer } = useCart()
  const { lang, toggle } = useLanguage()
  const t = translations[lang].nav

  const NAV_ITEMS = [
    { label: t.products, href: '/products' },
    { label: t.story, href: '/about' },
    { label: t.trial, href: '/coaching' },
    ...(lang === 'en' ? [{ label: '🌏 ' + t.global, href: '/global' }] : []),
  ]

  return (
    <>
      {/* Ships Worldwide banner — EN only */}
      {lang === 'en' && (
        <div className="fixed top-0 left-0 right-0 z-[60] bg-[#1A0005] text-[#D4AF37] text-center py-1.5 text-[10px] tracking-[0.35em] uppercase font-medium">
          Ships Worldwide · Alcohol-Free · Paraben-Free · Made in Japan
        </div>
      )}
      <header className={`fixed left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-100 ${lang === 'en' ? 'top-7' : 'top-0'}`}>
        <Container>
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-neutral-700"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label={t.openMenu}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>

            {/* Logo */}
            <Link href="/" className="font-heading-en text-xl md:text-2xl tracking-[0.2em] text-primary-700">
              AKINORIO
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-ui text-sm text-neutral-600 hover:text-primary-700 transition-colors tracking-wide"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right controls */}
            <div className="flex items-center gap-3">
              {/* Language Toggle */}
              <button
                onClick={toggle}
                className="hidden md:flex items-center gap-1 text-xs tracking-[0.15em] text-neutral-500 hover:text-primary-700 transition-colors select-none"
                aria-label="Switch language"
              >
                <span className={lang === 'ja' ? 'text-primary-700 font-medium' : 'opacity-40'}>JA</span>
                <span className="opacity-30 mx-0.5">|</span>
                <span className={lang === 'en' ? 'text-primary-700 font-medium' : 'opacity-40'}>EN</span>
              </button>

              {/* Cart */}
              <button
                onClick={openDrawer}
                className="relative p-2 text-neutral-700 hover:text-primary-700 transition-colors"
                aria-label={t.openCart}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 01-8 0" />
                </svg>
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-gold-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-ui font-medium">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </Container>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Spacer */}
      <div className={lang === 'en' ? 'h-[calc(1.75rem+4rem)] md:h-[calc(1.75rem+5rem)]' : 'h-16 md:h-20'} />
    </>
  )
}
