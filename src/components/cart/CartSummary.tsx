'use client'

import { useCart } from '@/lib/cart'
import { formatPrice } from '@/lib/utils'
import { SHOPIFY_DOMAIN } from '@/lib/shopify'
import { getStoredAffiliateRef } from '@/hooks/useAffiliateTracking'
import Button from '@/components/ui/Button'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/i18n'

export default function CartSummary() {
  const { items, subtotal, shippingFee, total } = useCart()
  const { lang } = useLanguage()
  const t = translations[lang].cart
  const isEn = lang === 'en'
  const handleCheckout = () => {
    if (!SHOPIFY_DOMAIN) {
      alert(isEn ? 'Shopify domain is not configured.' : 'Shopifyドメインが設定されていません（.env.local を確認してください）')
      return
    }
    const cartLine = items
      .filter(i => i.product.shopifyVariantId)
      .map(i => `${i.product.shopifyVariantId}:${i.quantity}`)
      .join(',')
    if (!cartLine) {
      alert(isEn ? 'No purchasable items in cart.' : '購入できる商品がカートにありません')
      return
    }

    let url = `https://${SHOPIFY_DOMAIN}/cart/${cartLine}`

    const affiliateId = getStoredAffiliateRef()
    if (affiliateId) {
      url += `?attributes[代理店コード]=${encodeURIComponent(affiliateId)}&discount=${encodeURIComponent(affiliateId)}`
    }

    window.location.href = url
  }

  return (
    <div className="bg-bg-cream p-6 rounded-sm">
      <h2 className="font-heading-ja text-base text-neutral-800 mb-6">
        {t.orderSummary}
      </h2>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between font-ui text-sm">
          <span className="text-neutral-500">{t.subtotal}</span>
          <span className="text-neutral-800">{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between font-ui text-sm">
          <span className="text-neutral-500">{t.shipping}</span>
          <span className="text-neutral-800">
            {formatPrice(shippingFee)}
          </span>
        </div>
        <div className="border-t border-neutral-200 pt-3">
          <div className="flex justify-between">
            <span className="font-heading-ja text-base text-neutral-800">
              {t.total}
            </span>
            <span className="font-price text-xl text-primary-700">
              {formatPrice(total)}
            </span>
          </div>
        </div>
      </div>

      <Button
        variant="gold"
        size="lg"
        className="w-full"
        onClick={handleCheckout}
      >
        {t.checkout}
      </Button>
    </div>
  )
}
