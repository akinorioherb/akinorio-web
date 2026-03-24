import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import MediaFeature from '@/components/home/MediaFeature'
import BrandStory from '@/components/home/BrandStory'
import AkinorioSecret from '@/components/home/AkinorioSecret'
import Testimonials from '@/components/home/Testimonials'
import CTASection from '@/components/home/CTASection'
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from '@/lib/constants'

export const metadata: Metadata = {
  title: `${SITE_NAME} | 引き算という、美しさの答え。`,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: `${SITE_NAME} | 引き算という、美しさの答え。`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'AKINORIO | 引き算という、美しさの答え。',
      },
    ],
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  founder: {
    '@type': 'Person',
    name: 'MINAKO',
  },
  brand: {
    '@type': 'Brand',
    name: SITE_NAME,
    slogan: '何をつけるかより、何をやめるか。',
  },
  sameAs: [],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  inLanguage: 'ja',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/products?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'アキノリオ（AKINORIO）とはどんなスキンケアブランドですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AKINORIOは「引き算のスキンケア」をコンセプトとする日本のスキンケアブランドです。創業者MINAKOが20歳から構想し、ミトコンドリア活性化技術とケイ素（シリカ）を組み合わせた独自の処方で、肌本来の力を引き出します。化粧水・美容液・クリームを重ねる「足し算」をやめ、必要最小限のケアで最大の効果を目指します。',
      },
    },
    {
      '@type': 'Question',
      name: 'ミトコンドリアのちから（細胞美容液）はどんな商品ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '「ミトコンドリアのちから」は、原料メーカーが「これだけの配合量は美容液と呼んでください」と言った細胞美容液です。ミトコンドリア活性成分とケイ素（シリカ）を高配合し、ファンデーションも化粧水も不要な素肌へ導きます。パラベンフリー・アルコールフリーで敏感肌の方にも安心してご使用いただけます。価格は13,200円（50g/約3ヶ月分）。',
      },
    },
    {
      '@type': 'Question',
      name: '引き算のスキンケアとは何ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '引き算のスキンケアとは、重ねるほど肌に負担をかける「足し算スキンケア」を見直し、本当に必要なものだけを使うアプローチです。AKINORIOでは最終的に「1本で済む素肌」を目指します。余分な成分・ステップ・コストを削ぎ落とすことで、肌が本来持つ自己再生力を呼び覚まします。',
      },
    },
    {
      '@type': 'Question',
      name: 'ケイ素（シリカ）はスキンケアにどんな効果がありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ケイ素（シリカ）は「美のミネラル」とも呼ばれ、コラーゲン・エラスチンの生成をサポートし、肌のハリや弾力の維持に役立ちます。AKINORIOではシリカ水を基材として使用し、細胞レベルでの肌環境の底上げを目指しています。',
      },
    },
    {
      '@type': 'Question',
      name: 'AKINORIOは敏感肌でも使えますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、AKINORIOはパラベンフリー・アルコールフリーで処方されており、敏感肌・アトピー体質の方にもご使用いただける設計です。薬剤アレルギーの肌が再生した実績もあります。ただし個人差がありますので、初めての方は少量からお試しください。',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'トップ',
      item: SITE_URL,
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandStory />
      <AkinorioSecret />
      <Testimonials />
      <CTASection />
      <MediaFeature />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
