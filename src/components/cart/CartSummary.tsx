'use client'

import { useCart } from '@/lib/cart'
import { formatPrice } from '@/lib/utils'
import { SHOPIFY_DOMAIN } from '@/lib/shopify'
import { FREE_SHIPPING_THRESHOLD } from '@/lib/constants'
import { getStoredAffiliateRef } from '@/hooks/useAffiliateTracking'
import Button from '@/components/ui/Button'

export default function CartSummary() {
  const { items, subtotal, shippingFee, total } = useCart()

  const handleCheckout = () => {
    if (!SHOPIFY_DOMAIN) {
      alert('Shopifyドメインが設定されていません（.env.local を確認してください）')
      return
    }
    const cartLine = items
      .filter(i => i.product.shopifyVariantId)
      .map(i => `${i.product.shopifyVariantId}:${i.quantity}`)
      .join(',')
    if (!cartLine) {
      alert('購入できる商品がカートにありません')
      return
    }
    
    let url = `https://${SHOPIFY_DOMAIN}/cart/${cartLine}`
    
    // アフィリエイト（代理店）IDをShopifyの属性と割引コードに付与
    const affiliateId = getStoredAffiliateRef()
    if (affiliateId) {
      url += `?attributes[代理店コード]=${encodeURIComponent(affiliateId)}&discount=${encodeURIComponent(affiliateId)}`
    }
    
    window.location.href = url
  }

  return (
    <div className="bg-bg-cream p-6 rounded-sm">
      <h2 className="font-heading-ja text-base text-neutral-800 mb-6">
        ご注文内容
      </h2>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between font-ui text-sm">
          <span className="text-neutral-500">商品小計</span>
          <span className="text-neutral-800">{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between font-ui text-sm">
          <span className="text-neutral-500">送料</span>
          <span className="text-neutral-800">
            {shippingFee === 0 ? '無料' : formatPrice(shippingFee)}
          </span>
        </div>
        {shippingFee > 0 && (
          <p className="font-ui text-xs text-gold-700">
            あと{formatPrice(FREE_SHIPPING_THRESHOLD - subtotal)}で送料無料
          </p>
        )}
        <div className="border-t border-neutral-200 pt-3">
          <div className="flex justify-between">
            <span className="font-heading-ja text-base text-neutral-800">
              合計（税込）
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
        購入手続きへ（Shopify）
      </Button>
    </div>
  )
}
