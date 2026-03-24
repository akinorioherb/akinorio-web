import type { Metadata } from 'next'
import ProductShowcase from '@/components/home/ProductShowcase'

export const metadata: Metadata = {
  title: '商品一覧',
  description:
    'AKINORIOのスキンケア商品一覧。ミトコンドリアとケイ素の力で、細胞レベルからお肌を目覚めさせます。',
}

export default function ProductsPage() {
  return (
    <div className="bg-[#7C0114] min-h-screen">
      <ProductShowcase />
    </div>
  )
}
