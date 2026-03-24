import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from '@/lib/constants'
import CartProvider from '@/components/CartProvider'
import { LanguageProvider } from '@/context/LanguageContext'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/cart/CartDrawer'
import AffiliateTracker from '@/components/layout/AffiliateTracker'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | 細胞レベルに着目した引き算のスキンケア`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  keywords: [
    'アキノリオ', 'AKINORIO', '引き算のスキンケア', 'ミトコンドリア美容液',
    'ケイ素 スキンケア', 'シリカ 化粧品', 'ミトコンドリアのちから',
    'ミニマルスキンケア', '肌断捨離', '引き算美容', '細胞美容液',
    '敏感肌 化粧品', 'パラベンフリー', 'ファンデーション不要',
    'MINAKO', '引き算の美学',
  ],
  authors: [{ name: 'MINAKO', url: SITE_URL }],
  creator: 'AKINORIO',
  publisher: 'AKINORIO',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | 細胞レベルに着目した引き算のスキンケア`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'AKINORIO | 引き算のスキンケア — ミトコンドリア×ケイ素',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | 引き算のスキンケア`,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/images/og-image.png`],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_ID',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'BeautySalon'],
  '@id': `${SITE_URL}/#localbusiness`,
  name: 'AKINORIO（アキノリオ）',
  alternateName: ['アキノリオ', 'アキノリオ公式', 'AKINORIO official'],
  url: SITE_URL,
  logo: `${SITE_URL}/images/og-image.png`,
  image: `${SITE_URL}/images/og-image.png`,
  description: 'AKINORIOは「引き算のスキンケア」をコンセプトとする日本のスキンケアブランドです。ミトコンドリア活性化技術とケイ素（シリカ）を組み合わせた独自処方で、肌本来の力を引き出します。',
  priceRange: '¥¥¥',
  currenciesAccepted: 'JPY',
  paymentAccepted: 'Credit Card',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '銀座一丁目22番11号 銀座大竹ビジデンス2階',
    addressLocality: '中央区',
    addressRegion: '東京都',
    postalCode: '104-0061',
    addressCountry: 'JP',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 35.6726,
    longitude: 139.7672,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    url: `${SITE_URL}/contact`,
    availableLanguage: 'Japanese',
  },
  sameAs: ['https://lin.ee/9kGSzcS'],
  founder: {
    '@type': 'Person',
    name: 'MINAKO',
    jobTitle: '創業者・代表',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Cinzel:wght@400;600&family=Noto+Sans+JP:wght@300;400;500;700&family=Noto+Serif+JP:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="bg-white min-h-screen flex flex-col">
        <LanguageProvider>
          <CartProvider>
            <AffiliateTracker />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <CartDrawer />
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
