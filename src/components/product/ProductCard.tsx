'use client'

import Link from 'next/link'
import Image from 'next/image'
import type { Product } from '@/types'
import { formatPrice } from '@/lib/utils'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/i18n'


interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { lang } = useLanguage()
  const t = translations[lang].products
  const pc = translations[lang].productContent[product.slug]
  const displayName = pc?.name ?? product.name
  const displaySubtitle = pc?.subtitle ?? product.subtitle
  const displayImage = product.hikImage || product.image

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block relative overflow-hidden rounded-sm"
      style={{ border: '1px solid rgba(207,170,112,0.18)' }}
    >
      {/* 商品画像 — hik スタイルで全面表示 */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#0d0003]">
        <Image
          src={displayImage}
          alt={`${displayName} ${displaySubtitle}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* グラデーションオーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0003]/90 via-[#0d0003]/20 to-transparent" />

        {/* バッジ */}
        {product.price === 0 && (
          <div className="absolute top-3 left-3 z-10">
            <span
              className="font-ui text-[10px] tracking-widest px-2 py-1 rounded-sm"
              style={{ background: 'rgba(227,22,51,0.2)', color: '#E31633', border: '1px solid rgba(227,22,51,0.3)' }}
            >
              {t.trialBadge}
            </span>
          </div>
        )}

        {/* テキスト情報（画像下部にオーバーレイ） */}
        <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
          <p className="font-ui text-[10px] tracking-[0.3em] text-[#cfaa70]/60 uppercase mb-1">
            {displaySubtitle}
          </p>
          <h3 className="font-heading-ja text-base font-light text-white mb-2 leading-snug">
            {displayName}
          </h3>

          <div className="flex items-baseline gap-2">
            <p className="font-heading-en text-lg text-white">
              {product.price === 0 ? '' : formatPrice(product.price)}
            </p>
          </div>
        </div>

        {/* ホバー: ゴールドボーダー演出 */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ border: '1px solid rgba(207,170,112,0.5)' }}
        />
      </div>
    </Link>
  )
}
