import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/constants'
import ProductShowcase from '@/components/home/ProductShowcase'

export const metadata: Metadata = {
  title: `スキンケア商品一覧 | ミトコンドリア×ケイ素の引き算処方`,
  description: 'AKINORIOのスキンケア全商品。細胞美容液「ミトコンドリアのちから」をはじめ、ハーブエッセンス・クレンジング・バームなど。パラベンフリー・アルコールフリーで敏感肌にも安心。引き算のスキンケアで肌本来の力を取り戻す。',
  keywords: [
    'アキノリオ 商品一覧', 'ミトコンドリア 美容液', 'ケイ素 スキンケア',
    '引き算スキンケア 購入', '細胞美容液', 'シリカ 化粧品',
    'ミトコンドリアのちから', '輝く魔女セット', '敏感肌 スキンケア',
    'パラベンフリー 美容液', 'AKINORIO 購入',
  ],
  alternates: {
    canonical: `${SITE_URL}/products`,
  },
  openGraph: {
    title: `スキンケア商品一覧 | ${SITE_NAME}`,
    description: 'ミトコンドリア×ケイ素の引き算処方。AKINORIOの全スキンケアラインナップ。',
    url: `${SITE_URL}/products`,
    images: [
      {
        url: `${SITE_URL}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'AKINORIO スキンケア商品一覧',
      },
    ],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'トップ', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: '商品一覧', item: `${SITE_URL}/products` },
  ],
}

export default function ProductsPage() {
  return (
    <>
      <div className="bg-[#7C0114] min-h-screen">
        <ProductShowcase />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
