import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/constants'
import ContactContent from './ContactContent'

export const metadata: Metadata = {
  title: `お問い合わせ | ${SITE_NAME}`,
  description: 'AKINORIOへのお問い合わせ。商品・お取り扱い・その他ご不明点はメールまたはLINEにてお気軽にご連絡ください。',
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
}

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: `お問い合わせ | ${SITE_NAME}`,
  url: `${SITE_URL}/contact`,
  description: 'AKINORIOへのお問い合わせページ。メールまたはLINE公式アカウントよりご連絡ください。',
  mainEntity: {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'AKINORIO',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      url: `${SITE_URL}/contact`,
      availableLanguage: 'Japanese',
    },
  },
}

export default function ContactPage() {
  return (
    <>
      <ContactContent />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
    </>
  )
}
