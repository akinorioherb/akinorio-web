import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/constants'
import CompanyContent from './CompanyContent'

export const metadata: Metadata = {
  title: `会社概要 | ${SITE_NAME}`,
  description: '株式会社アキノリオの会社概要。東京都中央区銀座一丁目22番11号 銀座大竹ビジデンス2階。ミトコンドリア×ケイ素の引き算スキンケアブランドAKINORIOを運営。',
  alternates: {
    canonical: `${SITE_URL}/company`,
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'AKINORIO',
  alternateName: ['アキノリオ', 'アキノリオ公式', 'AKINORIO official'],
  url: SITE_URL,
  logo: `${SITE_URL}/images/og-image.png`,
  description: 'AKINORIOは「引き算のスキンケア」をコンセプトとする日本のスキンケアブランドです。創業者MINAKOが構想した、ミトコンドリア活性化技術とケイ素（シリカ）を組み合わせた独自処方で、肌本来の力を引き出します。',
  founder: {
    '@type': 'Person',
    name: 'MINAKO',
    jobTitle: '創業者・代表',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '銀座一丁目22番11号 銀座大竹ビジデンス2階',
    addressLocality: '中央区',
    addressRegion: '東京都',
    postalCode: '104-0061',
    addressCountry: 'JP',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    url: `${SITE_URL}/contact`,
    availableLanguage: 'Japanese',
  },
  sameAs: ['https://lin.ee/Sa4uQuI'],
}

export default function CompanyPage() {
  return (
    <>
      <CompanyContent />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  )
}
