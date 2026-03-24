'use client'

import { useCart } from '@/lib/cart'
import { formatPrice } from '@/lib/utils'
import { FREE_SHIPPING_THRESHOLD } from '@/lib/constants'
import Button from '@/components/ui/Button'

export default function CartSummary() {
  const { subtotal, shippingFee, total } = useCart()

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
        onClick={() => alert('Phase 2でStripe決済を接続します')}
      >
        購入手続きへ
      </Button>

      <p className="font-ui text-xs text-neutral-400 text-center mt-3">
        ※ Phase 1のため決済機能は準備中です
      </p>
    </div>
  )
}
