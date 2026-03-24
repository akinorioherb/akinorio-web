'use client'

import Image from 'next/image'
import type { CartItem as CartItemType } from '@/types'
import { formatPrice } from '@/lib/utils'
import { useCart } from '@/lib/cart'

interface CartItemProps {
  item: CartItemType
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart()
  const { product, quantity } = item
  const displayImage = product.hikImage ?? product.image

  return (
    <div className="flex gap-4 py-6 border-b border-neutral-100">
      {/* 商品画像 */}
      <div className="w-20 h-20 flex-shrink-0 rounded-sm overflow-hidden bg-[#1a0005] relative">
        <Image
          src={displayImage}
          alt={product.name}
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h3 className="font-heading-ja text-sm text-neutral-800 truncate">
          {product.name}
        </h3>
        <p className="font-ui text-xs text-neutral-400 mt-0.5">
          {product.subtitle}
        </p>
        <p className="font-price text-sm text-primary-700 mt-2">
          {formatPrice(product.price)}
        </p>

        <div className="flex items-center justify-between mt-3">
          {/* Quantity */}
          <div className="flex items-center border border-neutral-200 rounded-sm">
            <button
              onClick={() => updateQuantity(product.id, quantity - 1)}
              className="w-8 h-8 flex items-center justify-center text-neutral-500 hover:text-neutral-800 text-sm"
              aria-label="数量を減らす"
            >
              -
            </button>
            <span className="w-8 h-8 flex items-center justify-center font-ui text-xs border-x border-neutral-200">
              {quantity}
            </span>
            <button
              onClick={() => updateQuantity(product.id, quantity + 1)}
              className="w-8 h-8 flex items-center justify-center text-neutral-500 hover:text-neutral-800 text-sm"
              aria-label="数量を増やす"
            >
              +
            </button>
          </div>

          {/* Subtotal + Remove */}
          <div className="text-right">
            <p className="font-price text-sm text-neutral-800">
              {formatPrice(product.price * quantity)}
            </p>
            <button
              onClick={() => removeItem(product.id)}
              className="font-ui text-xs text-neutral-400 hover:text-error mt-1"
            >
              削除
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
