'use client'

import { useState } from 'react'
import Container from '@/components/ui/Container'
import { PREFECTURES, LINE_URL } from '@/lib/constants'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/i18n'

/* ===== 共通スタイル ===== */
const inputCls =
  'w-full px-4 py-3 bg-[#1a0008] border border-[#cfaa70]/30 text-white/90 font-ui text-sm rounded-sm placeholder:text-white/25 focus:outline-none focus:border-[#cfaa70]/70 focus:bg-[#200a0f] transition-colors'

const labelCls = 'block font-ui text-xs tracking-widest text-[#cfaa70]/80 mb-2 uppercase'

export default function SampleForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { lang } = useLanguage()
  const t = translations[lang].sample

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
      alert(lang === 'en' ? 'Submission failed. Please try again.' : '送信に失敗しました。もう一度お試しください。')
    } finally {
      setIsSubmitting(false)
    }
  }

  /* ===== 完了画面 ===== */
  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 py-24" style={{ background: 'radial-gradient(ellipse 120% 80% at 50% 20%, #9e1023 0%, #7a0818 40%, #4a0210 70%, #1a0005 100%)' }}>
        <div className="text-center max-w-md">
          <div className="w-20 h-20 mx-auto mb-8 rounded-full border border-[#cfaa70]/40 flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <p className="font-heading-en text-xs tracking-[0.4em] text-[#cfaa70]/70 uppercase mb-6">Thank You</p>
          <h1 className="font-heading-ja text-3xl font-light text-white mb-6 leading-relaxed" style={{ whiteSpace: 'pre-line' }}>
            {t.success.title}
          </h1>
          <div className="space-y-3 text-white/60 font-ui text-sm leading-loose mb-10">
            <p>{t.success.p1}</p>
            <p>{t.success.p2}</p>
            <p>{t.success.p3}</p>
          </div>
          <div className="w-16 h-px bg-[#cfaa70]/40 mx-auto mb-10" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#06C755] text-white px-6 py-3 rounded-sm font-ui text-sm font-medium tracking-wide"
            >
              {t.success.lineBtn}
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center border border-[#cfaa70]/40 text-[#cfaa70] px-6 py-3 rounded-sm font-ui text-sm tracking-wide hover:bg-[#cfaa70]/10 transition-colors"
            >
              {t.success.storyBtn}
            </a>
          </div>
        </div>
      </div>
    )
  }

  /* ===== フォーム ===== */
  return (
    <div className="min-h-screen" style={{ background: 'radial-gradient(ellipse 120% 80% at 50% 20%, #9e1023 0%, #7a0818 40%, #4a0210 70%, #1a0005 100%)' }}>

      <div className="relative w-full py-20 md:py-28 flex flex-col items-center text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#7a0818]/30 blur-[100px] rounded-full" />
        </div>
        <p className="relative font-heading-en text-[10px] md:text-xs tracking-[0.5em] text-[#cfaa70]/70 uppercase mb-5">
          {t.programLabel}
        </p>
        <h1 className="relative font-heading-ja text-3xl md:text-5xl font-light text-white mb-5 leading-[1.5] tracking-wider">
          {t.title}
        </h1>
        <div className="w-10 h-px bg-[#cfaa70]/50 mb-5" />
        <p className="relative font-ui text-sm text-white/50 leading-loose" style={{ whiteSpace: 'pre-line' }}>
          {t.description}
        </p>
      </div>

      <Container size="sm">
        <form onSubmit={handleSubmit} className="pb-24 space-y-7">

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>{t.fields.lastName}<span className="text-[#E31633] ml-1">*</span></label>
              <input type="text" name="lastName" required className={inputCls} placeholder={t.fields.lastNamePh} />
            </div>
            <div>
              <label className={labelCls}>{t.fields.firstName}<span className="text-[#E31633] ml-1">*</span></label>
              <input type="text" name="firstName" required className={inputCls} placeholder={t.fields.firstNamePh} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>{t.fields.lastNameKana}<span className="text-[#E31633] ml-1">*</span></label>
              <input type="text" name="lastNameKana" required className={inputCls} placeholder={t.fields.lastNameKanaPh} />
            </div>
            <div>
              <label className={labelCls}>{t.fields.firstNameKana}<span className="text-[#E31633] ml-1">*</span></label>
              <input type="text" name="firstNameKana" required className={inputCls} placeholder={t.fields.firstNameKanaPh} />
            </div>
          </div>

          <div>
            <label className={labelCls}>{t.fields.postalCode}<span className="text-[#E31633] ml-1">*</span></label>
            <input type="text" name="postalCode" required maxLength={8} className={`${inputCls} max-w-xs`} placeholder={t.fields.postalCodePh} />
          </div>

          <div>
            <label className={labelCls}>{t.fields.prefecture}<span className="text-[#E31633] ml-1">*</span></label>
            <select name="prefecture" required className={`${inputCls} max-w-xs bg-[#1a0008]`}>
              <option value="" className="bg-[#1a0008]">{t.fields.prefectureDefault}</option>
              {PREFECTURES.map((pref) => (
                <option key={pref} value={pref} className="bg-[#1a0008]">{pref}</option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelCls}>{t.fields.city}<span className="text-[#E31633] ml-1">*</span></label>
            <input type="text" name="city" required className={inputCls} placeholder={t.fields.cityPh} />
          </div>
          <div>
            <label className={labelCls}>{t.fields.addressLine1}</label>
            <input type="text" name="addressLine1" className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>{t.fields.addressLine2}</label>
            <input type="text" name="addressLine2" className={inputCls} placeholder={t.fields.addressLine2Ph} />
          </div>

          <div>
            <label className={labelCls}>{t.fields.phone}<span className="text-[#E31633] ml-1">*</span></label>
            <input type="tel" name="phone" required className={`${inputCls} max-w-xs`} placeholder={t.fields.phonePh} />
          </div>

          <div>
            <label className={labelCls}>{t.fields.email}<span className="text-[#E31633] ml-1">*</span></label>
            <input type="email" name="email" required className={inputCls} placeholder={t.fields.emailPh} />
          </div>

          <div>
            <label className={labelCls}>{t.fields.line}</label>
            <input type="text" name="lineDisplayName" className={inputCls} placeholder={t.fields.linePh} />
            <p className="font-ui text-xs text-white/30 mt-2">{t.fields.lineNote}</p>
          </div>

          <div>
            <label className={labelCls}>{t.fields.birthDate}<span className="text-[#E31633] ml-1">*</span></label>
            <input type="date" name="birthDate" required className={`${inputCls} max-w-xs`} />
          </div>

          <div>
            <label className={labelCls}>{t.fields.skinConcerns}</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-1">
              {t.fields.skinOptions.map((concern) => (
                <label key={concern} className="flex items-center gap-2 font-ui text-sm text-white/70 cursor-pointer group">
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
              {isSubmitting ? t.submitting : t.submit}
            </button>
            <p className="font-ui text-xs text-white/30 text-center mt-3">{t.submitNote}</p>
          </div>

        </form>
      </Container>
    </div>
  )
}
