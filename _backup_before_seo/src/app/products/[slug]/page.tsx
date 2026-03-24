import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Container from '@/components/ui/Container'
import ProductDetail from '@/components/product/ProductDetail'
import ProductCard from '@/components/product/ProductCard'
import { PRODUCTS, SITE_URL } from '@/lib/constants'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return PRODUCTS.filter((p) => p.isActive).map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const product = PRODUCTS.find((p) => p.slug === slug)
  if (!product) return { title: '商品が見つかりません' }

  return {
    title: `${product.name} ${product.subtitle}`,
    description: product.description.slice(0, 160),
    openGraph: {
      title: `${product.name} ${product.subtitle} | AKINORIO`,
      description: product.description.slice(0, 160),
      type: 'website',
      url: `${SITE_URL}/products/${product.slug}`,
    },
  }
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params
  const product = PRODUCTS.find((p) => p.slug === slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && p.isActive && p.price > 0
  ).slice(0, 3)

  return (
    <section className="py-12 md:py-20">
      <Container>
        {/* Breadcrumb */}
        <nav className="mb-8 font-ui text-xs text-neutral-400">
          <a href="/" className="hover:text-neutral-600">
            トップ
          </a>
          <span className="mx-2">/</span>
          <a href="/products" className="hover:text-neutral-600">
            商品一覧
          </a>
          <span className="mx-2">/</span>
          <span className="text-neutral-600">
            {product.name} {product.subtitle}
          </span>
        </nav>

        {/* Product detail */}
        <ProductDetail product={product} />

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <div className="text-center mb-10">
              <p className="font-heading-en text-xs tracking-[0.3em] text-gold-500 uppercase mb-3">
                Related
              </p>
              <h2 className="text-h3 font-heading-ja font-light text-neutral-800">
                関連商品
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

        {/* JSON-LD Product */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Product',
              name: `${product.name} ${product.subtitle}`,
              description: product.description,
              offers: {
                '@type': 'Offer',
                price: product.price,
                priceCurrency: 'JPY',
                availability: 'https://schema.org/InStock',
              },
            }),
          }}
        />
      </Container>
    </section>
  )
}
