import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/constants'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: `ブランドストーリー | 引き算の美学`,
  description: '創業者MINAKOが20歳から抱いた構想。「ファンデーションも化粧水もいらない。これ1本で済む素肌に」——何十社もの壁を越えて生まれた、世界でオンリーワンのスキンケアブランドAKINORIOの物語。',
  keywords: [
    'アキノリオ ブランドストーリー', 'MINAKO 創業者', '引き算の美学',
    '引き算スキンケア 哲学', 'ミトコンドリア スキンケア 開発',
    'AKINORIO 会社概要',
  ],
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: `ブランドストーリー | 引き算の美学 | ${SITE_NAME}`,
    description: '創業者MINAKOが20歳から抱いた構想。何十社もの壁を越えて生まれた、世界でオンリーワンのスキンケア。',
    url: `${SITE_URL}/about`,
    images: [
      {
        url: `${SITE_URL}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'AKINORIO ブランドストーリー | MINAKO創業者',
      },
    ],
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'MINAKO',
  jobTitle: '創業者・代表',
  worksFor: {
    '@type': 'Organization',
    name: 'AKINORIO',
    url: SITE_URL,
  },
  description: '20歳でAKINORIOの構想を抱き、何十社もの工場に断られながらも諦めず、ミトコンドリアとケイ素を組み合わせた世界唯一の引き算スキンケアブランドを創業。',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'トップ', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'ブランドストーリー', item: `${SITE_URL}/about` },
  ],
}

export default function AboutPage() {
  return (
    <>
      <AboutContent />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
