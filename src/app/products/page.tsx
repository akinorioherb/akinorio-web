import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import ProductCard from '@/components/product/ProductCard'
import Button from '@/components/ui/Button'
import { PRODUCTS, LINE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '商品一覧',
  description:
    'AKINORIOのスキンケア商品一覧。ミトコンドリアとケイ素の力で、細胞レベルからお肌を目覚めさせます。',
}

export default function ProductsPage() {
  const activeProducts = PRODUCTS.filter((p) => p.isActive && p.price > 0)
  const sampleProduct = PRODUCTS.find((p) => p.price === 0)

  return (
    <section className="py-12 md:py-20">
      <Container>
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-heading-en text-xs tracking-[0.3em] text-gold-500 uppercase mb-3">
            Products
          </p>
          <h1 className="text-h1 font-heading-ja font-light text-neutral-800">
            商品一覧
          </h1>
          <div className="gold-divider w-16 mx-auto mt-6" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* 14-day Program CTA */}
        {sampleProduct && (
          <div className="mt-16 bg-bg-warm p-8 md:p-12 rounded-sm text-center">
            <p className="font-heading-en text-xs tracking-[0.3em] text-gold-500 uppercase mb-3">
              14 Days Program
            </p>
            <h2 className="text-h3 font-heading-ja font-light text-neutral-800 mb-4">
              14日間の引き算プログラム
            </h2>
            <p className="font-ui text-sm text-neutral-500 mb-8 max-w-md mx-auto">
              あなたの肌と、出会い直す14日間。
              美容液・クレンジング・ソープの3点セットをお届けします。
            </p>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gold-500 text-white px-8 py-4 rounded-sm font-heading-ja text-base font-normal tracking-wider hover:bg-gold-600 transition-all duration-300"
            >
              引き算プログラムを始める
            </a>
          </div>
        )}
      </Container>
    </section>
  )
}
