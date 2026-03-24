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

export default function CompanyPage() {
  return <CompanyContent />
}
