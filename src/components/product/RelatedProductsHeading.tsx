'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function RelatedProductsHeading() {
  const { lang } = useLanguage()
  return (
    <>
      <p className="font-heading-en text-xs tracking-[0.4em] text-[#cfaa70]/60 uppercase mb-3">Related</p>
      <h2 className="font-heading-ja text-2xl font-light text-white">
        {lang === 'en' ? 'Related Products' : '関連商品'}
      </h2>
    </>
  )
}
