'use client'

import Container from '@/components/ui/Container'
import CartItemComponent from '@/components/cart/CartItem'
import CartSummary from '@/components/cart/CartSummary'
import Button from '@/components/ui/Button'
import { useCart } from '@/lib/cart'

export default function CartPage() {
  const { items } = useCart()

  return (
    <section className="py-12 md:py-20">
      <Container>
        {/* Header */}
        <div className="text-center mb-10">
          <p className="font-heading-en text-xs tracking-[0.3em] text-gold-500 uppercase mb-3">
            Cart
          </p>
          <h1 className="text-h1 font-heading-ja font-light text-neutral-800">
            カート
          </h1>
        </div>

        {items.length === 0 ? (
          /* Empty cart */
          <div className="text-center py-20">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-neutral-50 flex items-center justify-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--color-neutral-300)"
                strokeWidth="1.5"
              >
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
            </div>
            <p className="font-ui text-neutral-500 mb-6">
              カートに商品がありません
            </p>
            <Button href="/products" variant="secondary">
              商品一覧を見る
            </Button>
          </div>
        ) : (
          /* Cart contents */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              {items.map((item) => (
                <CartItemComponent key={item.product.id} item={item} />
              ))}
              <div className="mt-6">
                <Button href="/products" variant="ghost" size="sm">
                  &larr; 買い物を続ける
                </Button>
              </div>
            </div>
            <div className="lg:col-span-1">
              <CartSummary />
            </div>
          </div>
        )}
      </Container>
    </section>
  )
}
