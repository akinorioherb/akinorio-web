'use client'

import { useState } from 'react'
import Container from '@/components/ui/Container'
import { PREFECTURES, LINE_URL } from '@/lib/constants'
// LINE_URL は完了画面のみで使用
import type { SkinConcern } from '@/types'

const SKIN_CONCERNS: SkinConcern[] = [
  '乾燥',
  '毛穴',
  'シミ・くすみ',
  'ハリ・たるみ',
  '敏感肌',
  'その他',
]

/* ===== 共通スタイル ===== */
const inputCls =
  'w-full px-4 py-3 bg-[#1a0008] border border-[#cfaa70]/30 text-white/90 font-ui text-sm rounded-sm placeholder:text-white/25 focus:outline-none focus:border-[#cfaa70]/70 focus:bg-[#200a0f] transition-colors'

const labelCls = 'block font-ui text-xs tracking-widest text-[#cfaa70]/80 mb-2 uppercase'

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
          lastName:        formData.get('lastName'),
          firstName:       formData.get('firstName'),
          lastNameKana:    formData.get('lastNameKana'),
          firstNameKana:   formData.get('firstNameKana'),
          postalCode:      formData.get('postalCode'),
          prefecture:      formData.get('prefecture'),
          city:            formData.get('city'),
          addressLine1:    formData.get('addressLine1'),
          addressLine2:    formData.get('addressLine2'),
          phone:           formData.get('phone'),
          email:           formData.get('email'),
          lineDisplayName: formData.get('lineDisplayName'),
          skinConcerns:    formData.getAll('skinConcerns'),
          birthDate:       formData.get('birthDate'),
        }),
      })
      if (res.ok) setIsSubmitted(true)
    } catch {
      alert('送信に失敗しました。もう一度お試しください。')
    } finally {
      setIsSubmitting(false)
    }
  }

  /* ===== 完了画面 ===== */
  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 py-24" style={{ background: 'radial-gradient(ellipse 120% 80% at 50% 20%, #9e1023 0%, #7a0818 40%, #4a0210 70%, #1a0005 100%)' }}>
        <div className="text-center max-w-md">
          {/* チェックアイコン */}
          <div className="w-20 h-20 mx-auto mb-8 rounded-full border border-[#cfaa70]/40 flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <p className="font-heading-en text-xs tracking-[0.4em] text-[#cfaa70]/70 uppercase mb-6">Thank You</p>
          <h1 className="font-heading-ja text-3xl font-light text-white mb-6 leading-relaxed">
            引き算の旅が、<br />始まります。
          </h1>
          <div className="space-y-3 text-white/60 font-ui text-sm leading-loose mb-10">
            <p>3営業日以内にお届けいたします。</p>
            <p>届きましたら、LINEで一言メッセージいただけると嬉しいです。</p>
            <p>お届けまでの間に、「引き算のスキンケア」という考え方について少しだけお伝えしていきますね。</p>
          </div>
          {/* 区切り線 */}
          <div className="w-16 h-px bg-[#cfaa70]/40 mx-auto mb-10" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#06C755] text-white px-6 py-3 rounded-sm font-ui text-sm font-medium tracking-wide"
            >
              LINEで受け取る
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center border border-[#cfaa70]/40 text-[#cfaa70] px-6 py-3 rounded-sm font-ui text-sm tracking-wide hover:bg-[#cfaa70]/10 transition-colors"
            >
              ブランドストーリーを読む
            </a>
          </div>
        </div>
      </div>
    )
  }

  /* ===== フォーム ===== */
  return (
    <div className="min-h-screen" style={{ background: 'radial-gradient(ellipse 120% 80% at 50% 20%, #9e1023 0%, #7a0818 40%, #4a0210 70%, #1a0005 100%)' }}>

      {/* ヒーローヘッダー */}
      <div className="relative w-full py-20 md:py-28 flex flex-col items-center text-center overflow-hidden">
        {/* 背景グロー */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#7a0818]/30 blur-[100px] rounded-full" />
        </div>
        <p className="relative font-heading-en text-[10px] md:text-xs tracking-[0.5em] text-[#cfaa70]/70 uppercase mb-5">
          14 Days Program
        </p>
        <h1
          className="relative font-heading-ja text-3xl md:text-5xl font-light text-white mb-5 leading-[1.5] tracking-wider"
        >
          21日間の引き算プログラム
        </h1>
        <div className="w-10 h-px bg-[#cfaa70]/50 mb-5" />
        <p className="relative font-ui text-sm text-white/50 leading-loose">
          あなたの肌と、出会い直す21日間。<br />
          ミトコンドリアのちから21日分をお届けします。
        </p>
      </div>

      {/* フォームエリア */}
      <Container size="sm">
        <form onSubmit={handleSubmit} className="pb-24 space-y-7">

          {/* ---- お名前 ---- */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>お名前（姓）<span className="text-[#E31633] ml-1">*</span></label>
              <input type="text" name="lastName" required className={inputCls} placeholder="秋野" />
            </div>
            <div>
              <label className={labelCls}>お名前（名）<span className="text-[#E31633] ml-1">*</span></label>
              <input type="text" name="firstName" required className={inputCls} placeholder="理央" />
            </div>
          </div>

          {/* ---- フリガナ ---- */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>フリガナ（セイ）<span className="text-[#E31633] ml-1">*</span></label>
              <input type="text" name="lastNameKana" required className={inputCls} placeholder="アキノ" />
            </div>
            <div>
              <label className={labelCls}>フリガナ（メイ）<span className="text-[#E31633] ml-1">*</span></label>
              <input type="text" name="firstNameKana" required className={inputCls} placeholder="リオ" />
            </div>
          </div>

          {/* ---- 郵便番号 ---- */}
          <div>
            <label className={labelCls}>郵便番号<span className="text-[#E31633] ml-1">*</span></label>
            <input type="text" name="postalCode" required maxLength={8} className={`${inputCls} max-w-xs`} placeholder="123-4567" />
          </div>

          {/* ---- 都道府県 ---- */}
          <div>
            <label className={labelCls}>都道府県<span className="text-[#E31633] ml-1">*</span></label>
            <select
              name="prefecture"
              required
              className={`${inputCls} max-w-xs bg-[#1a0008]`}
            >
              <option value="" className="bg-[#1a0008]">選択してください</option>
              {PREFECTURES.map((pref) => (
                <option key={pref} value={pref} className="bg-[#1a0008]">{pref}</option>
              ))}
            </select>
          </div>

          {/* ---- 住所 ---- */}
          <div>
            <label className={labelCls}>市区町村・番地<span className="text-[#E31633] ml-1">*</span></label>
            <input type="text" name="city" required className={inputCls} placeholder="渋谷区神宮前1-2-3" />
          </div>
          <div>
            <label className={labelCls}>市区町村・番地（続き）</label>
            <input type="text" name="addressLine1" className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>建物名・部屋番号</label>
            <input type="text" name="addressLine2" className={inputCls} placeholder="ABCマンション 101号室" />
          </div>

          {/* ---- 電話番号 ---- */}
          <div>
            <label className={labelCls}>電話番号<span className="text-[#E31633] ml-1">*</span></label>
            <input type="tel" name="phone" required className={`${inputCls} max-w-xs`} placeholder="090-1234-5678" />
          </div>

          {/* ---- メール ---- */}
          <div>
            <label className={labelCls}>メールアドレス<span className="text-[#E31633] ml-1">*</span></label>
            <input type="email" name="email" required className={inputCls} placeholder="email@example.com" />
          </div>

          {/* ---- LINE ---- */}
          <div>
            <label className={labelCls}>LINE表示名</label>
            <input type="text" name="lineDisplayName" className={inputCls} placeholder="LINE表示名（任意）" />
            <p className="font-ui text-xs text-white/30 mt-2">LINEステップ配信との紐付けに使用します</p>
          </div>

          {/* ---- 生年月日 ---- */}
          <div>
            <label className={labelCls}>生年月日<span className="text-[#E31633] ml-1">*</span></label>
            <input type="date" name="birthDate" required className={`${inputCls} max-w-xs`} />
          </div>

          {/* ---- お肌のお悩み ---- */}
          <div>
            <label className={labelCls}>お肌のお悩み（複数選択可）</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-1">
              {SKIN_CONCERNS.map((concern) => (
                <label
                  key={concern}
                  className="flex items-center gap-2 font-ui text-sm text-white/70 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    name="skinConcerns"
                    value={concern}
                    className="w-4 h-4 accent-[#cfaa70] bg-[#1a0008] border-[#cfaa70]/30 rounded-sm"
                  />
                  {concern}
                </label>
              ))}
            </div>
          </div>

          {/* ---- 送信ボタン ---- */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="relative overflow-hidden w-full py-5 px-8 flex items-center justify-center rounded-sm font-ui text-sm font-bold tracking-[0.2em] text-[#120002] disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: 'linear-gradient(135deg, #b8873a 0%, #d4af61 28%, #f0dc98 50%, #cfaa70 72%, #9e7030 100%)',
                boxShadow: '0 4px 24px rgba(207,170,112,0.4)',
              }}
            >
              {isSubmitting ? '送信中...' : '21日間の引き算プログラムを申し込む'}
            </button>
            <p className="font-ui text-xs text-white/30 text-center mt-3">
              ※ お一人様1回限りとさせていただきます
            </p>
          </div>

        </form>
      </Container>
    </div>
  )
}
