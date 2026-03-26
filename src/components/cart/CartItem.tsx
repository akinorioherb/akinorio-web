'use client'

import Image from 'next/image'
import type { CartItem as CartItemType } from '@/types'
import { formatPrice } from '@/lib/utils'
import { useCart } from '@/lib/cart'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/i18n'

interface CartItemProps {
  item: CartItemType
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart()
  const { product, quantity } = item
  const displayImage = product.hikImage ?? product.image
  const { lang } = useLanguage()
  const t = translations[lang].cart
  const pc = translations[lang].productContent
  const itemContent = pc[product.slug]
  const displayName = itemContent?.name ?? product.name
  const displaySubtitle = itemContent?.subtitle ?? product.subtitle

  return (
    <div className="flex gap-4 py-6 border-b border-neutral-100">
      <div className="w-20 h-20 flex-shrink-0 rounded-sm overflow-hidden bg-[#1a0005] relative">
        <Image
          src={displayImage}
          alt={displayName}
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="font-heading-ja text-sm text-neutral-800 truncate">
          {displayName}
        </h3>
        <p className="font-ui text-xs text-neutral-400 mt-0.5">
          {displaySubtitle}
        </p>
        <p className="font-price text-sm text-primary-700 mt-2">
          {formatPrice(product.price)}
        </p>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center border border-neutral-200 rounded-sm">
            <button
              onClick={() => updateQuantity(product.id, quantity - 1)}
              className="w-8 h-8 flex items-center justify-center text-neutral-500 hover:text-neutral-800 text-sm"
              aria-label={t.decreaseQty}
            >
              -
            </button>
            <span className="w-8 h-8 flex items-center justify-center font-ui text-xs border-x border-neutral-200">
              {quantity}
            </span>
            <button
              onClick={() => updateQuantity(product.id, quantity + 1)}
              className="w-8 h-8 flex items-center justify-center text-neutral-500 hover:text-neutral-800 text-sm"
              aria-label={t.increaseQty}
            >
              +
            </button>
          </div>

          <div className="text-right">
            <p className="font-price text-sm text-neutral-800">
              {formatPrice(product.price * quantity)}
            </p>
            <button
              onClick={() => removeItem(product.id)}
              className="font-ui text-xs text-neutral-400 hover:text-error mt-1"
            >
              {t.remove}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
