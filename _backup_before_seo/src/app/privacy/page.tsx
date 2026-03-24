import type { Metadata } from 'next'
import Container from '@/components/ui/Container'

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: 'AKINORIOのプライバシーポリシー（個人情報保護方針）です。',
}

export default function PrivacyPage() {
  return (
    <section className="py-12 md:py-20">
      <Container size="sm">
        <h1 className="text-h2 font-heading-ja font-light text-neutral-800 text-center mb-12">
          プライバシーポリシー
        </h1>

        <div className="prose-sm max-w-none space-y-8">
          <div>
            <h2 className="font-heading-ja text-lg text-neutral-800 mb-3">
              1. 個人情報の収集について
            </h2>
            <p className="font-ui text-sm text-neutral-600 leading-[1.9]">
              当社は、サービスの提供にあたり、以下の個人情報を収集することがあります。
              氏名、住所、電話番号、メールアドレス、生年月日、お肌のお悩みに関する情報、
              LINE表示名、購入履歴、その他サービス提供に必要な情報。
            </p>
          </div>

          <div>
            <h2 className="font-heading-ja text-lg text-neutral-800 mb-3">
              2. 個人情報の利用目的
            </h2>
            <ul className="font-ui text-sm text-neutral-600 leading-[1.9] space-y-1 list-disc list-inside">
              <li>商品の発送および関連するご連絡</li>
              <li>ご注文内容の確認およびお問い合わせへの対応</li>
              <li>サンプル請求の処理および発送</li>
              <li>LINE公式アカウントを通じた情報提供</li>
              <li>新商品やキャンペーンに関するご案内</li>
              <li>サービスの改善および新サービスの開発</li>
              <li>その他、お客様の同意を得た目的</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading-ja text-lg text-neutral-800 mb-3">
              3. 個人情報の第三者提供
            </h2>
            <p className="font-ui text-sm text-neutral-600 leading-[1.9]">
              当社は、以下の場合を除き、お客様の個人情報を第三者に提供いたしません。
              お客様の同意がある場合、法令に基づく場合、
              配送業者等の業務委託先に業務遂行上必要な範囲で提供する場合。
            </p>
          </div>

          <div>
            <h2 className="font-heading-ja text-lg text-neutral-800 mb-3">
              4. 個人情報の管理
            </h2>
            <p className="font-ui text-sm text-neutral-600 leading-[1.9]">
              当社は、個人情報の正確性を保ち、不正アクセス、紛失、破壊、改ざんおよび漏洩等を防止するため、
              適切なセキュリティ対策を講じます。
            </p>
          </div>

          <div>
            <h2 className="font-heading-ja text-lg text-neutral-800 mb-3">
              5. 個人情報の開示・訂正・削除
            </h2>
            <p className="font-ui text-sm text-neutral-600 leading-[1.9]">
              お客様ご自身の個人情報の開示、訂正、削除をご希望の場合は、
              当社までお問い合わせください。本人確認の上、対応いたします。
            </p>
          </div>

          <div>
            <h2 className="font-heading-ja text-lg text-neutral-800 mb-3">
              6. Cookieの使用について
            </h2>
            <p className="font-ui text-sm text-neutral-600 leading-[1.9]">
              当サイトでは、サービスの利便性向上のためCookieを使用しています。
              ブラウザの設定によりCookieを無効にすることが可能ですが、
              一部のサービスが利用できなくなる場合があります。
            </p>
          </div>

          <div>
            <h2 className="font-heading-ja text-lg text-neutral-800 mb-3">
              7. プライバシーポリシーの変更
            </h2>
            <p className="font-ui text-sm text-neutral-600 leading-[1.9]">
              当社は、法令の変更やサービスの変更に伴い、
              本プライバシーポリシーを予告なく変更することがあります。
              変更後のプライバシーポリシーは、本ページに掲載した時点で効力を生じるものとします。
            </p>
          </div>

          <div>
            <h2 className="font-heading-ja text-lg text-neutral-800 mb-3">
              8. お問い合わせ先
            </h2>
            <p className="font-ui text-sm text-neutral-600 leading-[1.9]">
              個人情報の取扱いに関するお問い合わせは、下記までご連絡ください。
              <br />
              メール: info@akinorio.com
            </p>
          </div>

          <div className="pt-4 border-t border-neutral-200">
            <p className="font-ui text-xs text-neutral-400">
              制定日: 2026年3月18日
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
