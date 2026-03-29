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
            { label: '会社名', value: 'AKINORIO' },
            { label: '事業者の名称', value: '執行未奈子' },
            { label: '事業者の所在地', value: '〒104-0061 東京都中央区銀座一丁目22番11号 銀座大竹ビジデンス2階' },
            { label: '事業者の連絡先', value: '080-3290-4118' },
            { label: '営業時間', value: '12:00〜18:00　定休日：土日祝' },
            { label: 'メールアドレス', value: 'info@akinorio.com' },
            { label: 'URL', value: 'https://akinorio.com' },
            {
              label: '販売価格',
              value: '販売価格は、表示された金額（消費税別）と致します。',
            },
            {
              label: '代金の支払方法・時期',
              value: '支払方法：クレジットカードによる決済がご利用頂けます。支払時期：商品注文確定時でお支払いが確定致します。',
            },
            {
              label: '商品のお届け時期',
              value: '配送のご依頼を受けてから5日以内に発送いたします。（定休日除く）\n【重要】商品受け取りが出来なかった場合は運送業者不在票がポスト等に投函されております。保管期限を過ぎ弊社へ荷物が返送された場合、再配達手数料として全国一律5,500円（キャンセルの場合も同様）頂いております事、事前にご了承くださいませ。',
            },
            {
              label: '返品について',
              value: '商品に欠陥がある場合を除き、基本的には返品には応じません。\n未使用のもので商品到着後7日以内にご連絡をいただいた場合に限り、商品の不具合による交換を承ります。',
            },
            {
              label: '商品代金以外の必要料金',
              value: '送料：全国一律600円（税込）※商品代金10,000円（税込）以上で送料無料',
            },
          ].map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-1 md:grid-cols-3 border-b border-neutral-200 py-5"
            >
              <div className="font-ui text-sm font-medium text-neutral-700 mb-1 md:mb-0">
                {row.label}
              </div>
              <div className="font-ui text-sm text-neutral-600 md:col-span-2 leading-relaxed whitespace-pre-line">
                {row.value}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
