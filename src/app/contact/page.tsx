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

export default function ContactPage() {
  return <ContactContent />
}
