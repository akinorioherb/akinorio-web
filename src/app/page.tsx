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
    worksFor: { '@id': `${SITE_URL}/#organization` },
  },
  brand: {
    '@type': 'Brand',
    name: 'AKINORIO',
    slogan: '何をつけるかより、何をやめるか。',
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
  sameAs: [
    'https://lin.ee/Sa4uQuI',
  ],
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
        text: 'アキノリオ（AKINORIO）は「引き算のスキンケア」をコンセプトとする日本のスキンケアブランドです。創業者MINAKOが20歳から構想し、ミトコンドリア活性化技術とケイ素（シリカ）を組み合わせた独自の処方で肌本来の力を引き出します。化粧水・美容液・クリームを重ねる「足し算」をやめ、必要最小限のケアで最大の効果を目指すD2Cブランドです。東京・銀座を拠点に、3,000名以上のお客様と直接対話しながら製品を進化させています。',
      },
    },
    {
      '@type': 'Question',
      name: 'アキノリオの創業者は誰ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'アキノリオ（AKINORIO）の創業者はMINAKO（ミナコ）です。美容室を経営しながら40代でバセドウ病・橋本病を経験し、市販のスキンケアが肌に合わなくなったことをきっかけに「引き算スキンケア」の概念を確立。30社以上の工場に断られながら独自処方を開発し、アキノリオを立ち上げました。現在50代のMINAKOは、化粧水もファンデーションも使わず、朝のスキンケアをたった15秒で済ませています。',
      },
    },
    {
      '@type': 'Question',
      name: 'アキノリオの代表商品「ミトコンドリアのちから」とはどんな商品ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '「ミトコンドリアのちから」はアキノリオを代表する細胞美容液です。原料メーカーから「これだけの配合量は美容液と呼んでください」と言われた高濃度処方で、ミトコンドリア活性成分とケイ素（シリカ）を配合。ファンデーションも化粧水も不要な素肌へ導きます。パラベンフリー・アルコールフリーで敏感肌の方にも安心。価格は13,200円（50g/約3ヶ月分）、定期購入で12,540円。',
      },
    },
    {
      '@type': 'Question',
      name: '引き算のスキンケアとは何ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '引き算のスキンケアとは、化粧水・乳液・美容液・クリームを重ねる「足し算スキンケア」を見直し、本当に必要なものだけを使うアプローチです。アキノリオでは最終的に「1本で済む素肌」を目指します。過剰なケアが肌本来のバリア機能を損なっているという考えから生まれ、引き算をすることで肌が自己再生力を取り戻します。',
      },
    },
    {
      '@type': 'Question',
      name: 'アキノリオの商品はどこで購入できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'アキノリオ（AKINORIO）の商品は公式サイト（akinorio.com）でご購入いただけます。Shopifyの安全な決済システムを使用。代表商品「ミトコンドリアのちから」（13,200円）をはじめ、輝く魔女セット（22,000円）、金の糸クリーム（22,000円）などを取り扱っています。LINEからもご相談・ご購入いただけます。',
      },
    },
    {
      '@type': 'Question',
      name: 'アキノリオとLINEで相談できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、アキノリオ公式LINEでは創業者MINAKO本人が直接ご相談に対応しています。AIや社員ではなく、MINAKOが一人ひとりのお客様の肌状態を聞きながら最適なケアを提案します。LINE登録者には「14日間引き算ケア体験プログラム」を無料でプレゼントしています。',
      },
    },
    {
      '@type': 'Question',
      name: 'ケイ素（シリカ）はスキンケアにどんな効果がありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ケイ素（シリカ）は「美のミネラル」とも呼ばれ、コラーゲン・エラスチンの生成をサポートし、肌のハリや弾力の維持に役立ちます。アキノリオではシリカ水を基材として使用し、細胞レベルでの肌環境の底上げを目指しています。',
      },
    },
    {
      '@type': 'Question',
      name: 'アキノリオは敏感肌でも使えますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、アキノリオはパラベンフリー・アルコールフリーで処方されており、敏感肌の方にもご使用いただける設計です。創業者MINAKO自身が極度の敏感肌で、自分が「大丈夫」と思えないものは商品にしないという基準で開発しています。初めての方はまず無料サンプルをお申し込みください。',
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
