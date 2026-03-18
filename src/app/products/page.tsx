import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import ProductCard from '@/components/product/ProductCard'
import { PRODUCTS } from '@/lib/constants'

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

        {/* Sample CTA */}
        {sampleProduct && (
          <div className="mt-16 bg-bg-warm p-8 md:p-12 rounded-sm text-center">
            <p className="font-heading-en text-xs tracking-[0.3em] text-gold-500 uppercase mb-3">
              Free Sample
            </p>
            <h2 className="text-h3 font-heading-ja font-light text-neutral-800 mb-4">
              まずは14日間、無料でお試し
            </h2>
            <p className="font-ui text-sm text-neutral-500 mb-8 max-w-md mx-auto">
              美容液・クレンジング・ソープの3点セットを14日間無料でお試しいただけます。送料も無料です。
            </p>
            <ProductCard product={sampleProduct} />
          </div>
        )}
      </Container>
    </section>
  )
}
