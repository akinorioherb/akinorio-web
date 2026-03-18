'use client'

import { useState } from 'react'
import type { Product } from '@/types'
import { formatPrice, formatPriceWithTax } from '@/lib/utils'
import { useCart } from '@/lib/cart'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

interface ProductDetailProps {
  product: Product
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1)
  const [isAdded, setIsAdded] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem(product, quantity)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
      {/* Image */}
      <div className="aspect-square bg-gradient-to-br from-bg-cream to-neutral-50 rounded-sm flex items-center justify-center">
        <div className="w-2/3 h-2/3 rounded-full bg-gradient-to-br from-gold-100 to-gold-50 flex items-center justify-center">
          <span className="font-heading-ja text-lg text-gold-700 text-center px-8">
            {product.name}
            <br />
            {product.subtitle}
          </span>
        </div>
      </div>

      {/* Info */}
      <div>
        {/* Badges */}
        <div className="flex gap-2 mb-4">
          {product.subscriptionDiscountPct > 0 && (
            <Badge variant="gold">
              定期購入{product.subscriptionDiscountPct}%OFF
            </Badge>
          )}
          {product.price === 0 && <Badge variant="free">無料</Badge>}
        </div>

        {/* Title */}
        <h1 className="text-h2 font-heading-ja font-light text-neutral-800 mb-2">
          {product.name}
        </h1>
        <p className="font-ui text-sm text-neutral-500 mb-6">
          {product.subtitle}
          {product.volume && ` / ${product.volume}`}
          {product.usageDuration && ` / 使用目安: ${product.usageDuration}`}
        </p>

        {/* Price */}
        <div className="mb-8">
          <p className="font-price text-2xl text-primary-700">
            {product.price === 0 ? '無料' : formatPrice(product.price)}
            <span className="font-ui text-sm text-neutral-400 ml-2">
              {product.price > 0 && '（税込）'}
            </span>
          </p>
          {product.subscriptionPrice > 0 && product.subscriptionPrice < product.price && (
            <p className="font-ui text-sm text-gold-700 mt-2">
              定期購入なら {formatPriceWithTax(product.subscriptionPrice)}
            </p>
          )}
        </div>

        {/* Quantity + Add to Cart */}
        {product.price > 0 && (
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-4">
              <label className="font-ui text-sm text-neutral-600">数量</label>
              <div className="flex items-center border border-neutral-200 rounded-sm">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-neutral-500 hover:text-neutral-800 transition-colors"
                  aria-label="数量を減らす"
                >
                  -
                </button>
                <span className="w-12 h-10 flex items-center justify-center font-ui text-sm border-x border-neutral-200">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(Math.min(5, quantity + 1))}
                  className="w-10 h-10 flex items-center justify-center text-neutral-500 hover:text-neutral-800 transition-colors"
                  aria-label="数量を増やす"
                >
                  +
                </button>
              </div>
            </div>

            <Button
              variant="gold"
              size="lg"
              className="w-full"
              onClick={handleAddToCart}
            >
              {isAdded ? 'カートに追加しました' : 'カートに入れる'}
            </Button>
          </div>
        )}

        {product.price === 0 && (
          <Button href="/sample" variant="gold" size="lg" className="w-full mb-8">
            無料サンプルを申し込む
          </Button>
        )}

        {/* Description */}
        <div className="space-y-6">
          <div>
            <h2 className="font-heading-ja text-base text-neutral-800 mb-3">
              商品説明
            </h2>
            <p className="font-ui text-sm text-neutral-600 leading-[1.9]">
              {product.description}
            </p>
          </div>

          {/* Features */}
          {product.features.length > 0 && (
            <div>
              <h2 className="font-heading-ja text-base text-neutral-800 mb-3">
                特徴
              </h2>
              <ul className="space-y-2">
                {product.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 font-ui text-sm text-neutral-600"
                  >
                    <span className="text-gold-500 mt-0.5">&#10003;</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Ingredients */}
          {product.ingredients && (
            <details className="border-t border-neutral-100 pt-4">
              <summary className="font-heading-ja text-base text-neutral-800 cursor-pointer hover:text-primary-700">
                全成分表示
              </summary>
              <p className="font-ui text-xs text-neutral-500 mt-3 leading-relaxed">
                {product.ingredients}
              </p>
            </details>
          )}
        </div>
      </div>
    </div>
  )
}
