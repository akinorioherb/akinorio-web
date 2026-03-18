import Link from 'next/link'
import type { Product } from '@/types'
import { formatPrice } from '@/lib/utils'
import Badge from '@/components/ui/Badge'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block bg-white rounded-sm border border-neutral-100 overflow-hidden hover:shadow-[var(--shadow-elevated)] transition-shadow duration-300"
    >
      {/* Image placeholder */}
      <div className="relative aspect-square bg-gradient-to-br from-bg-cream to-neutral-50 flex items-center justify-center overflow-hidden">
        <div className="w-2/3 h-2/3 rounded-full bg-gradient-to-br from-gold-100 to-gold-50 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
          <span className="font-heading-ja text-sm text-gold-700 text-center px-4">
            {product.subtitle}
          </span>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {product.price === 0 && (
            <Badge variant="free">14日間体験</Badge>
          )}
          {product.subscriptionDiscountPct > 0 && (
            <Badge variant="gold">
              定期コース
            </Badge>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="font-heading-ja text-base text-neutral-800 mb-1">
          {product.name}
        </h3>
        <p className="font-ui text-xs text-neutral-400 mb-3">
          {product.subtitle}
          {product.volume && ` / ${product.volume}`}
        </p>
        <p className="font-price text-lg text-primary-700">
          {product.price === 0 ? '' : formatPrice(product.price)}
          <span className="font-ui text-xs text-neutral-400 ml-1">
            {product.price > 0 && '（税込）'}
          </span>
        </p>
        {product.subscriptionPrice > 0 && product.subscriptionPrice < product.price && (
          <p className="font-ui text-xs text-gold-700 mt-1">
            定期購入なら {formatPrice(product.subscriptionPrice)}
          </p>
        )}
        {product.usageDuration && (
          <p className="font-ui text-xs text-neutral-400 mt-1">
            使用目安: {product.usageDuration}
          </p>
        )}
      </div>
    </Link>
  )
}
