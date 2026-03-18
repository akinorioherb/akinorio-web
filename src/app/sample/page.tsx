'use client'

import { useState } from 'react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { PREFECTURES, LINE_URL } from '@/lib/constants'
import type { SkinConcern } from '@/types'

const SKIN_CONCERNS: SkinConcern[] = [
  '乾燥',
  '毛穴',
  'シミ・くすみ',
  'ハリ・たるみ',
  '敏感肌',
  'その他',
]

export default function SamplePage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    try {
      const res = await fetch('/api/sample-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lastName: formData.get('lastName'),
          firstName: formData.get('firstName'),
          lastNameKana: formData.get('lastNameKana'),
          firstNameKana: formData.get('firstNameKana'),
          postalCode: formData.get('postalCode'),
          prefecture: formData.get('prefecture'),
          city: formData.get('city'),
          addressLine1: formData.get('addressLine1'),
          addressLine2: formData.get('addressLine2'),
          phone: formData.get('phone'),
          email: formData.get('email'),
          lineDisplayName: formData.get('lineDisplayName'),
          skinConcerns: formData.getAll('skinConcerns'),
          birthDate: formData.get('birthDate'),
        }),
      })

      if (res.ok) {
        setIsSubmitted(true)
      }
    } catch {
      alert('送信に失敗しました。もう一度お試しください。')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section className="py-12 md:py-20">
        <Container size="sm">
          <div className="text-center py-16">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-success-light flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-success)" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h1 className="text-h2 font-heading-ja font-light text-neutral-800 mb-4">
              サンプルのお申し込み
              <br />
              ありがとうございます
            </h1>
            <div className="max-w-md mx-auto space-y-4 text-neutral-600 leading-[1.9] font-ui text-sm">
              <p>3営業日以内に発送いたします。</p>
              <p>
                届きましたら、LINEで一言メッセージいただけると嬉しいです。
              </p>
              <p>
                到着までの間に、アキノリオの「引き算のスキンケア」について
                少しだけお伝えしていきますね。
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#06C755] text-white px-6 py-3 rounded-sm font-ui text-sm font-medium"
              >
                LINEで受け取る
              </a>
              <Button href="/about" variant="secondary">
                ブランドストーリーを読む
              </Button>
            </div>
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section className="py-12 md:py-20">
      <Container size="sm">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-heading-en text-xs tracking-[0.3em] text-gold-500 uppercase mb-3">
            Free Sample
          </p>
          <h1 className="text-h1 font-heading-ja font-light text-neutral-800 mb-4">
            14日間無料サンプル請求
          </h1>
          <p className="font-ui text-sm text-neutral-500">
            美容液・クレンジング・ソープの3点セットを無料でお届けします。
            <br />
            送料も無料です。
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-ui text-sm text-neutral-700 mb-1">
                お名前（姓） <span className="text-error">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                required
                className="w-full px-4 py-3 border border-neutral-200 rounded-sm font-ui text-sm focus:outline-none focus:border-gold-400 transition-colors"
                placeholder="秋野"
              />
            </div>
            <div>
              <label className="block font-ui text-sm text-neutral-700 mb-1">
                お名前（名） <span className="text-error">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                required
                className="w-full px-4 py-3 border border-neutral-200 rounded-sm font-ui text-sm focus:outline-none focus:border-gold-400 transition-colors"
                placeholder="理央"
              />
            </div>
          </div>

          {/* Kana */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-ui text-sm text-neutral-700 mb-1">
                フリガナ（セイ） <span className="text-error">*</span>
              </label>
              <input
                type="text"
                name="lastNameKana"
                required
                className="w-full px-4 py-3 border border-neutral-200 rounded-sm font-ui text-sm focus:outline-none focus:border-gold-400 transition-colors"
                placeholder="アキノ"
              />
            </div>
            <div>
              <label className="block font-ui text-sm text-neutral-700 mb-1">
                フリガナ（メイ） <span className="text-error">*</span>
              </label>
              <input
                type="text"
                name="firstNameKana"
                required
                className="w-full px-4 py-3 border border-neutral-200 rounded-sm font-ui text-sm focus:outline-none focus:border-gold-400 transition-colors"
                placeholder="リオ"
              />
            </div>
          </div>

          {/* Postal code */}
          <div>
            <label className="block font-ui text-sm text-neutral-700 mb-1">
              郵便番号 <span className="text-error">*</span>
            </label>
            <input
              type="text"
              name="postalCode"
              required
              maxLength={8}
              className="w-full max-w-xs px-4 py-3 border border-neutral-200 rounded-sm font-ui text-sm focus:outline-none focus:border-gold-400 transition-colors"
              placeholder="123-4567"
            />
          </div>

          {/* Prefecture */}
          <div>
            <label className="block font-ui text-sm text-neutral-700 mb-1">
              都道府県 <span className="text-error">*</span>
            </label>
            <select
              name="prefecture"
              required
              className="w-full max-w-xs px-4 py-3 border border-neutral-200 rounded-sm font-ui text-sm focus:outline-none focus:border-gold-400 transition-colors bg-white"
            >
              <option value="">選択してください</option>
              {PREFECTURES.map((pref) => (
                <option key={pref} value={pref}>
                  {pref}
                </option>
              ))}
            </select>
          </div>

          {/* City + Address */}
          <div>
            <label className="block font-ui text-sm text-neutral-700 mb-1">
              市区町村・番地 <span className="text-error">*</span>
            </label>
            <input
              type="text"
              name="city"
              required
              className="w-full px-4 py-3 border border-neutral-200 rounded-sm font-ui text-sm focus:outline-none focus:border-gold-400 transition-colors"
              placeholder="渋谷区神宮前1-2-3"
            />
          </div>
          <div>
            <label className="block font-ui text-sm text-neutral-700 mb-1">
              市区町村・番地（続き）
            </label>
            <input
              type="text"
              name="addressLine1"
              className="w-full px-4 py-3 border border-neutral-200 rounded-sm font-ui text-sm focus:outline-none focus:border-gold-400 transition-colors"
            />
          </div>

          {/* Building */}
          <div>
            <label className="block font-ui text-sm text-neutral-700 mb-1">
              建物名・部屋番号
            </label>
            <input
              type="text"
              name="addressLine2"
              className="w-full px-4 py-3 border border-neutral-200 rounded-sm font-ui text-sm focus:outline-none focus:border-gold-400 transition-colors"
              placeholder="ABCマンション 101号室"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block font-ui text-sm text-neutral-700 mb-1">
              電話番号 <span className="text-error">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full max-w-xs px-4 py-3 border border-neutral-200 rounded-sm font-ui text-sm focus:outline-none focus:border-gold-400 transition-colors"
              placeholder="090-1234-5678"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-ui text-sm text-neutral-700 mb-1">
              メールアドレス <span className="text-error">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-neutral-200 rounded-sm font-ui text-sm focus:outline-none focus:border-gold-400 transition-colors"
              placeholder="email@example.com"
            />
          </div>

          {/* LINE */}
          <div>
            <label className="block font-ui text-sm text-neutral-700 mb-1">
              LINE表示名
            </label>
            <input
              type="text"
              name="lineDisplayName"
              className="w-full px-4 py-3 border border-neutral-200 rounded-sm font-ui text-sm focus:outline-none focus:border-gold-400 transition-colors"
              placeholder="LINE表示名（任意）"
            />
            <p className="font-ui text-xs text-neutral-400 mt-1">
              LINEステップ配信との紐付けに使用します
            </p>
          </div>

          {/* Birth date */}
          <div>
            <label className="block font-ui text-sm text-neutral-700 mb-1">
              生年月日 <span className="text-error">*</span>
            </label>
            <input
              type="date"
              name="birthDate"
              required
              className="w-full max-w-xs px-4 py-3 border border-neutral-200 rounded-sm font-ui text-sm focus:outline-none focus:border-gold-400 transition-colors"
            />
          </div>

          {/* Skin concerns */}
          <div>
            <label className="block font-ui text-sm text-neutral-700 mb-2">
              お肌のお悩み（複数選択可）
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {SKIN_CONCERNS.map((concern) => (
                <label
                  key={concern}
                  className="flex items-center gap-2 font-ui text-sm text-neutral-600 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    name="skinConcerns"
                    value={concern}
                    className="w-4 h-4 accent-gold-500"
                  />
                  {concern}
                </label>
              ))}
            </div>
          </div>

          {/* LINE CTA */}
          <div className="bg-[#06C755]/10 p-5 rounded-sm">
            <p className="font-ui text-sm text-neutral-700 mb-2">
              LINE友だち追加もお忘れなく
            </p>
            <p className="font-ui text-xs text-neutral-500 mb-3">
              サンプルの使い方やお手入れのコツをLINEでお届けします。
            </p>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#06C755] font-ui text-sm font-medium hover:underline"
            >
              LINE友だち追加はこちら &rarr;
            </a>
          </div>

          {/* Submit */}
          <div className="pt-4">
            <Button
              type="submit"
              variant="gold"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? '送信中...' : '無料サンプルを申し込む'}
            </Button>
            <p className="font-ui text-xs text-neutral-400 text-center mt-3">
              ※ お一人様1回限りとさせていただきます
            </p>
          </div>
        </form>
      </Container>
    </section>
  )
}
