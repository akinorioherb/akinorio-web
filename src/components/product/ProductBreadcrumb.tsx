'use client'

import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/i18n'

interface Props {
  productSlug: string
}

export default function ProductBreadcrumb({ productSlug }: Props) {
  const { lang } = useLanguage()
  const pc = translations[lang].productContent[productSlug]
  const isEn = lang === 'en'

  return (
    <nav aria-label={isEn ? 'Breadcrumb' : 'パンくずリスト'} className="font-ui text-xs text-white/30">
      <a href="/" className="hover:text-white/60 transition-colors">{isEn ? 'Home' : 'トップ'}</a>
      <span className="mx-2">/</span>
      <a href="/products" className="hover:text-white/60 transition-colors">{isEn ? 'Products' : '商品一覧'}</a>
      {pc?.name && (
        <>
          <span className="mx-2">/</span>
          <span className="text-white/50">{pc.name}</span>
        </>
      )}
    </nav>
  )
}
