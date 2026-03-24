import Link from 'next/link'
import Image from 'next/image'
import type { Product } from '@/types'
import { formatPrice } from '@/lib/utils'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  // 商品一覧と同じ hikImage を使用。なければ旧 image にフォールバック
  const displayImage = product.hikImage || product.image

  // 定期3ヶ月コース（最安値）があれば表示
  const bestPrice = product.sub3MonthPrice ?? product.subscriptionPrice ?? product.price

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
          alt={`${product.name} ${product.subtitle}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* グラデーションオーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0003]/90 via-[#0d0003]/20 to-transparent" />

        {/* バッジ */}
        {product.sub3MonthPrice && (
          <div className="absolute top-3 left-3 z-10">
            <span
              className="font-ui text-[10px] tracking-widest px-2 py-1 rounded-sm"
              style={{ background: 'rgba(212,175,55,0.18)', color: '#D4AF37', border: '1px solid rgba(212,175,55,0.3)' }}
            >
              定期コース
            </span>
          </div>
        )}
        {product.price === 0 && (
          <div className="absolute top-3 left-3 z-10">
            <span
              className="font-ui text-[10px] tracking-widest px-2 py-1 rounded-sm"
              style={{ background: 'rgba(227,22,51,0.2)', color: '#E31633', border: '1px solid rgba(227,22,51,0.3)' }}
            >
              21日間体験
            </span>
          </div>
        )}

        {/* テキスト情報（画像下部にオーバーレイ） */}
        <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
          <p className="font-ui text-[10px] tracking-[0.3em] text-[#cfaa70]/60 uppercase mb-1">
            {product.subtitle}
          </p>
          <h3 className="font-heading-ja text-base font-light text-white mb-2 leading-snug">
            {product.name}
          </h3>

          <div className="flex items-baseline gap-2">
            <p className="font-heading-en text-lg text-white">
              {product.price === 0 ? '' : formatPrice(product.price)}
            </p>
            {bestPrice > 0 && bestPrice < product.price && (
              <p className="font-ui text-xs text-[#cfaa70]">
                定期 {formatPrice(bestPrice)}〜
              </p>
            )}
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
