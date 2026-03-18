'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useCart } from '@/lib/cart'
import Container from '@/components/ui/Container'
import MobileMenu from './MobileMenu'

const NAV_ITEMS = [
  { label: '商品一覧', href: '/products' },
  { label: 'ブランドストーリー', href: '/about' },
  { label: '無料サンプル', href: '/sample' },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { totalItems } = useCart()

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-100">
        <Container>
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-neutral-700"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="メニューを開く"
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

            {/* Cart */}
            <Link
              href="/cart"
              className="relative p-2 text-neutral-700 hover:text-primary-700 transition-colors"
              aria-label="カート"
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
            </Link>
          </div>
        </Container>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Spacer */}
      <div className="h-16 md:h-20" />
    </>
  )
}
