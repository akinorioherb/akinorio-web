import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Container from '@/components/ui/Container'
import ProductDetail from '@/components/product/ProductDetail'
import ProductCard from '@/components/product/ProductCard'
import ProductBreadcrumb from '@/components/product/ProductBreadcrumb'
import RelatedProductsHeading from '@/components/product/RelatedProductsHeading'
import { PRODUCTS, SITE_URL, SITE_NAME } from '@/lib/constants'

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

  const description = product.description.replace(/\n/g, ' ').slice(0, 160)

  return {
    title: `${product.name} ${product.subtitle} | ${product.price.toLocaleString()}円`,
    description,
    keywords: [
      product.name, product.subtitle, 'AKINORIO', 'アキノリオ',
      '引き算スキンケア', 'ミトコンドリア', 'ケイ素',
      ...product.skinConcerns,
      ...product.features,
    ].filter(Boolean),
    alternates: {
      canonical: `${SITE_URL}/products/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} ${product.subtitle} | ${SITE_NAME}`,
      description,
      type: 'website',
      url: `${SITE_URL}/products/${product.slug}`,
      images: [
        {
          url: product.image.startsWith('/')
            ? `${SITE_URL}${product.image}`
            : `${SITE_URL}/${product.image}`,
          width: 800,
          height: 800,
          alt: `${product.name} ${product.subtitle} — AKINORIO`,
        },
      ],
    },
  }
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params
  const product = PRODUCTS.find((p) => p.slug === slug)

  if (!product) {
    notFound()
  }

  // 輝魔女セット構成商品: これらを見ているときは必ずセットを関連に入れる
  const KIMAJO_SET_MEMBERS = ['mitochondria', 'herb', 'kihada']
  const KIMAJO_SET_SLUG    = 'kagayaki-majo'

  const baseRelated = PRODUCTS.filter(
    (p) => p.id !== product.id && p.isActive && p.price > 0
  )

  let relatedProducts: typeof PRODUCTS
  if (KIMAJO_SET_MEMBERS.includes(product.slug)) {
    const kimajoSet = baseRelated.find(p => p.slug === KIMAJO_SET_SLUG)
    const others    = baseRelated.filter(p => p.slug !== KIMAJO_SET_SLUG)
    relatedProducts = kimajoSet
      ? [kimajoSet, ...others].slice(0, 3)
      : others.slice(0, 3)
  } else {
    relatedProducts = baseRelated.slice(0, 3)
  }

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${product.name} ${product.subtitle}`,
    description: product.description.replace(/\n/g, ' '),
    image: product.image.startsWith('/')
      ? `${SITE_URL}${product.image}`
      : `${SITE_URL}/${product.image}`,
    brand: {
      '@type': 'Brand',
      name: 'AKINORIO',
      url: SITE_URL,
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'AKINORIO',
    },
    category: product.category === 'set' ? 'スキンケアセット' : 'スキンケア',
    ...(product.volume ? { size: product.volume } : {}),
    ...(product.usageDuration ? { additionalProperty: { '@type': 'PropertyValue', name: '使用目安期間', value: product.usageDuration } } : {}),
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'JPY',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/products/${product.slug}`,
      seller: {
        '@type': 'Organization',
        name: 'AKINORIO',
      },
      ...(product.subscriptionPrice && product.subscriptionDiscountPct > 0 ? {
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: product.subscriptionPrice,
          priceCurrency: 'JPY',
          referenceQuantity: { '@type': 'QuantitativeValue', value: 1 },
          description: `定期購入 ${product.subscriptionDiscountPct}%OFF`,
        },
      } : {}),
    },
    ...(product.features.length > 0 ? {
      additionalProperty: product.features.map((f) => ({
        '@type': 'PropertyValue',
        name: '特徴',
        value: f,
      })),
    } : {}),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'トップ', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: '商品一覧', item: `${SITE_URL}/products` },
      { '@type': 'ListItem', position: 3, name: `${product.name} ${product.subtitle}`, item: `${SITE_URL}/products/${product.slug}` },
    ],
  }

  return (
    <div>
      {/* Breadcrumb — dark theme */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-4 pb-0">
        <ProductBreadcrumb productSlug={product.slug} />
      </div>

      {/* Product detail — full width, no container */}
      <ProductDetail product={product} />

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <div className="py-16 md:py-24" style={{ background: '#0d0003' }}>
          <Container>
            <div className="text-center mb-10">
              <RelatedProductsHeading />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </Container>
        </div>
      )}

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </div>
  )
}
