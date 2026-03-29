import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/constants'
import SampleForm from './SampleForm'

export const metadata: Metadata = {
  title: `無料サンプル申し込み | ${SITE_NAME}`,
  description: 'AKINORIOの21日間引き算コーチングに無料でご参加いただけます。ミトコンドリアのちからをはじめ、引き算スキンケアをぜひお試しください。',
  alternates: {
    canonical: `${SITE_URL}/coaching`,
  },
}

export default function SamplePage() {
  return <SampleForm />
}
