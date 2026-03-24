import type { Metadata } from 'next'
import Container from '@/components/ui/Container'

export const metadata: Metadata = {
  title: '特定商取引法に基づく表記',
  description: 'AKINORIOの特定商取引法に基づく表記ページです。',
}

export default function TokushohoPage() {
  return (
    <section className="py-12 md:py-20">
      <Container size="sm">
        <h1 className="text-h2 font-heading-ja font-light text-neutral-800 text-center mb-12">
          特定商取引法に基づく表記
        </h1>

        <div className="space-y-0 border-t border-neutral-200">
          {[
            { label: '販売業者', value: '株式会社アキノリオ' },
            { label: '所在地', value: '〒104-0061 東京都中央区銀座一丁目22番11号 銀座大竹ビジデンス2階' },
            { label: '電話番号', value: '（準備中）' },
            { label: 'メールアドレス', value: 'info@akinorio.com' },
            { label: 'URL', value: 'https://akinorio.com' },
            {
              label: '商品代金以外の必要料金',
              value:
                '送料: 全国一律600円（税込）※商品代金10,000円（税込）以上で送料無料',
            },
            {
              label: 'お届け時期',
              value: 'ご注文確定後、3営業日以内に発送いたします。',
            },
            {
              label: 'お支払い方法',
              value: 'クレジットカード（VISA/Mastercard/JCB/AMEX）',
            },
            { label: 'お支払い時期', value: 'ご注文時にお支払い' },
            {
              label: '返品・交換について',
              value:
                '商品到着後7日以内にご連絡ください。未開封・未使用の場合のみ承ります。お客様都合による返品の場合、送料はお客様負担となります。不良品・誤品の場合は当社負担で交換いたします。',
            },
            {
              label: '定期購入について',
              value:
                '定期購入はいつでもマイページから変更・休止・解約が可能です。最低購入回数の縛りはございません。',
            },
          ].map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-1 md:grid-cols-3 border-b border-neutral-200 py-5"
            >
              <div className="font-ui text-sm font-medium text-neutral-700 mb-1 md:mb-0">
                {row.label}
              </div>
              <div className="font-ui text-sm text-neutral-600 md:col-span-2 leading-relaxed">
                {row.value}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
