'use client'

import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import { PRODUCTS } from '@/lib/constants'
import { formatPrice } from '@/lib/utils'
import Button from '@/components/ui/Button'
import { useScrollAnimation } from '@/lib/useScrollAnimation'

function ProductFeature({
  product,
  index,
  reverse,
}: {
  product: (typeof PRODUCTS)[number]
  index: number
  reverse: boolean
}) {
  const { ref, isVisible } = useScrollAnimation(0.15)

  return (
    <div
      ref={ref}
      className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16 lg:gap-24`}
    >
      {/* Product image - large, immersive */}
      <div
        className={`flex-1 w-full max-w-lg scroll-hidden-scale ${isVisible ? 'scroll-visible-scale' : ''}`}
        style={{ transitionDelay: isVisible ? '0.2s' : '0s', transitionDuration: '1.2s' }}
      >
        <Link href={`/products/${product.slug}`} className="block group">
          <div className="relative aspect-[4/5] bg-gradient-to-br from-[#f5f1eb] to-[#ebe5db] rounded-sm overflow-hidden flex items-center justify-center">
            <div className="relative w-full h-full product-image p-8 md:p-12">
              <Image
                src={product.image}
                alt={`${product.name} ${product.subtitle}`}
                fill
                className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 90vw, 45vw"
              />
            </div>
            {/* Hover shimmer */}
            <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] group-hover:animate-[shimmerSlide_1s_ease-out_forwards]" />
            </div>
          </div>
        </Link>
      </div>

      {/* Product info */}
      <div
        className={`flex-1 text-center md:text-left scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
        style={{ transitionDelay: isVisible ? '0.5s' : '0s', transitionDuration: '1s' }}
      >
        <p className="font-heading-en text-[10px] tracking-[0.4em] text-gold-500 uppercase mb-4">
          Product {String(index + 1).padStart(2, '0')}
        </p>
        <h3 className="text-h3 md:text-h2 font-heading-ja font-light text-neutral-800 mb-2">
          {product.name}
        </h3>
        <p className="font-ui text-sm text-gold-600 mb-6 tracking-wider">
          {product.subtitle}
          {product.volume && ` / ${product.volume}`}
        </p>
        <div className="w-10 h-px bg-gradient-to-r from-gold-400 to-transparent mb-6 mx-auto md:mx-0" />
        <p className="font-body text-sm text-neutral-500 leading-[2.2] mb-8 max-w-md mx-auto md:mx-0">
          {product.description.slice(0, 120)}...
        </p>
        <div className="flex items-baseline gap-3 justify-center md:justify-start mb-8">
          <span className="font-price text-2xl text-primary-700">
            {formatPrice(product.price)}
          </span>
          <span className="font-ui text-xs text-neutral-400">（税込）</span>
        </div>
        <Link
          href={`/products/${product.slug}`}
          className="inline-flex items-center gap-2 font-heading-en text-xs tracking-[0.2em] text-gold-600 hover:text-gold-700 transition-colors duration-300 group/link"
        >
          VIEW DETAIL
          <span className="inline-block w-6 h-px bg-gold-400 transition-all duration-300 group-hover/link:w-10" />
        </Link>
      </div>
    </div>
  )
}

export default function ProductShowcase() {
  const displayProducts = PRODUCTS.filter(
    (p) => p.isActive && p.price > 0
  ).slice(0, 3)

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.1)

  return (
    <section className="py-28 md:py-40 bg-[#faf8f5]">
      <Container>
        {/* Section header */}
        <div
          ref={headerRef}
          className={`text-center mb-20 md:mb-28 scroll-hidden ${headerVisible ? 'scroll-visible' : ''}`}
        >
          <p className="font-heading-en text-xs tracking-[0.4em] text-gold-500 uppercase mb-4">
            Products
          </p>
          <h2 className="text-h2 md:text-h1 font-heading-ja font-light text-neutral-800">
            引き算のためのアイテム
          </h2>
          <div
            className="h-px mx-auto mt-8 bg-gradient-to-r from-transparent via-gold-400 to-transparent"
            style={{
              width: headerVisible ? '80px' : '0px',
              transition: 'width 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.4s',
            }}
          />
        </div>

        {/* Products - full width, alternating layout */}
        <div className="space-y-24 md:space-y-36">
          {displayProducts.map((product, index) => (
            <ProductFeature
              key={product.id}
              product={product}
              index={index}
              reverse={index % 2 === 1}
            />
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-20 md:mt-28">
          <Button href="/products" variant="secondary">
            すべての商品を見る
          </Button>
        </div>
      </Container>
    </section>
  )
}
