'use client'

import Container from '@/components/ui/Container'
import ProductCard from '@/components/product/ProductCard'
import { PRODUCTS } from '@/lib/constants'
import Button from '@/components/ui/Button'
import { useScrollAnimation } from '@/lib/useScrollAnimation'

export default function ProductShowcase() {
  const displayProducts = PRODUCTS.filter(
    (p) => p.isActive && p.price > 0
  ).slice(0, 3)

  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section className="py-24 md:py-32" ref={ref}>
      <Container>
        {/* Section header */}
        <div className={`text-center mb-14 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          <p className="font-heading-en text-xs tracking-[0.3em] text-gold-500 uppercase mb-3">
            Products
          </p>
          <h2 className="text-h2 font-heading-ja font-light text-neutral-800">
            引き算のためのアイテム
          </h2>
          <div className="gold-divider w-16 mx-auto mt-6" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayProducts.map((product, index) => (
            <div
              key={product.id}
              className={`scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
              style={{ transitionDelay: isVisible ? `${0.2 + index * 0.15}s` : '0s' }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* View all */}
        <div className={`text-center mt-12 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`} style={{ transitionDelay: isVisible ? '0.7s' : '0s' }}>
          <Button href="/products" variant="secondary">
            すべての商品を見る
          </Button>
        </div>
      </Container>
    </section>
  )
}
