'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import type { Product } from '@/types'
import { useCart } from '@/lib/cart'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/i18n'

interface Props { product: Product }

// 商品名SVG — フォントロード後にBBoxで実幅を計測してviewBoxを合わせる
function ProductNameSvg({ name }: { name: string }) {
  const textRef = useRef<SVGTextElement>(null)
  const [vbWidth, setVbWidth] = useState(0)

  useEffect(() => {
    const measure = () => {
      if (textRef.current) {
        const bbox = textRef.current.getBBox()
        setVbWidth(Math.ceil(bbox.width) + 2) // +2 px の余白
      }
    }
    if (typeof document !== 'undefined') {
      document.fonts.ready.then(measure)
    }
  }, [name])

  return (
    <svg
      viewBox={`0 0 ${vbWidth || 600} 68`}
      width="100%"
      aria-label={name}
      className="mb-4 block"
      style={{ opacity: vbWidth ? 1 : 0, transition: 'opacity 0.25s' }}
    >
      <text
        ref={textRef}
        x="0"
        y="54"
        fontSize="54"
        fontWeight="300"
        fontFamily="'Noto Serif JP', 'Yu Mincho', serif"
        fill="white"
      >
        {name}
      </text>
    </svg>
  )
}

export default function ProductDetail({ product }: Props) {
  const [isAdded, setIsAdded] = useState(false)
  const { addItem } = useCart()
  const { lang } = useLanguage()
  const t = translations[lang].productDetail
  const pc = translations[lang].productContent[product.slug]
  const displayName = pc?.name ?? product.name
  const displaySubtitle = pc?.subtitle ?? product.subtitle
  const displayDescription = pc?.description ?? product.description
  const displayHowToUse = pc?.howToUse ?? product.howToUse
  const displayFeatures = pc?.features ?? product.features

  const productImage = product.hikImage || product.image
  const selectedPrice = product.price

  const handleBuy = () => {
    addItem(product, 1)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  if (product.price === 0) {
    return (
      <a href="/coaching" className="block w-full py-5 text-center rounded-sm font-ui font-bold tracking-widest text-[#120002]"
        style={{ background: 'linear-gradient(135deg,#b8873a,#d4af61,#f0dc98,#cfaa70,#9e7030)', boxShadow: '0 4px 24px rgba(207,170,112,0.4)' }}>
        {t.startProgram}
      </a>
    )
  }

  return (
    <div style={{ background: 'radial-gradient(ellipse 140% 80% at 60% 0%, #9e1023 0%, #7a0818 35%, #4a0210 65%, #1a0005 100%)' }}>

      {/* ── メインレイアウト: 左コンテンツ / 右画像 ── */}
      <div className="relative w-full flex flex-col lg:flex-row">

        {/* ── 右: 商品画像 ── */}
        <div className="w-full lg:w-1/2 lg:order-2">
          {/* モバイル: アスペクト比固定で画像表示 */}
          <div className="relative w-full aspect-[4/3] lg:hidden">
            <Image
              src={productImage}
              alt={displayName}
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
          </div>
          {/* PC: sticky で画面高さいっぱい */}
          <div className="hidden lg:block sticky top-0 h-[100dvh] relative">
            <Image
              src={productImage}
              alt={displayName}
              fill
              className="object-cover object-center"
              sizes="50vw"
              priority
            />
          </div>
        </div>

        {/* ── 左: 商品情報 + 購入プラン ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full lg:w-1/2 lg:order-1
                     px-6 md:px-12 lg:px-16 pt-12 pb-20 lg:pt-24"
        >
          {/* 商品情報 */}
          <p className="font-heading-en text-[10px] tracking-[0.5em] text-[#cfaa70]/70 uppercase mb-4">
            {product.category === 'set' ? 'SET' : 'SINGLE'}
          </p>

          {/* 商品名 SVG — getBBox で実幅計測、自然な1行レンダリング */}
          <ProductNameSvg name={displayName} />

          <p className="font-ui text-sm text-white/50 tracking-widest mb-3">{displaySubtitle}</p>
          {product.volume && (
            <p className="font-ui text-sm text-white/40">{t.volume}：{product.volume}</p>
          )}
          <div className="w-12 h-px bg-[#cfaa70]/50 my-6" />
          <p className="font-ui text-sm text-white/60 leading-loose whitespace-pre-line max-w-md mb-10">
            {displayDescription.split('\n')[0]}
          </p>

          {/* ── 価格表示 ── */}
          <div className="mb-6 px-5 py-4 rounded-sm" style={{ border: '1px solid rgba(207,170,112,0.4)', background: 'rgba(207,170,112,0.05)' }}>
            <div className="flex items-baseline justify-between">
              <p className="font-ui text-sm font-medium text-white/90">{t.plans.normal.label}</p>
              <div className="text-right">
                <p className="font-heading-en text-xl font-light text-white">
                  ¥{selectedPrice.toLocaleString()}
                </p>
                <p className="font-ui text-[10px] text-white/40 mt-0.5">{t.includingTax}</p>
              </div>
            </div>
            <p className="font-ui text-xs text-white/40 mt-2">{t.plans.normal.subprice}</p>
          </div>

          {/* カートに追加ボタン — ホバーで輝度UP */}
          <motion.button
            whileHover={{ filter: 'brightness(1.12)', boxShadow: '0 6px 36px rgba(212,175,55,0.75)' }}
            whileTap={{ scale: 0.98 }}
            onClick={handleBuy}
            className="relative overflow-hidden w-full py-5 px-8 flex items-center justify-between rounded-sm font-ui text-sm font-bold tracking-[0.2em] text-[#120002]"
            style={{
              background: 'linear-gradient(135deg,#b8873a 0%,#d4af61 28%,#f0dc98 50%,#cfaa70 72%,#9e7030 100%)',
              boxShadow: '0 4px 28px rgba(207,170,112,0.5)',
            }}
          >
            <motion.div
              className="absolute top-0 w-[40%] h-full pointer-events-none"
              style={{ background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)', skewX: '-20deg' }}
              animate={{ left: ['-50%', '160%'] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', repeatDelay: 2 }}
            />
            <span className="relative z-10">
              {isAdded ? t.addedToCart : `${t.addToCart} — ¥${selectedPrice.toLocaleString()}`}
            </span>
            <svg className="relative z-10 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.button>
        </motion.div>

      </div>

      {/* ── 詳細情報（How to Use / Features / Ingredients） ── */}
      <div className="border-t border-[#cfaa70]/15" style={{ background: 'rgba(10,0,3,0.6)' }}>
        <div className="max-w-[900px] mx-auto px-6 md:px-12 py-16 space-y-10">

          {displayHowToUse && (
            <div>
              <p className="font-heading-en text-[10px] tracking-[0.4em] text-[#cfaa70]/60 uppercase mb-3">How to Use</p>
              <p className="font-ui text-sm text-white/60 leading-loose">{displayHowToUse}</p>
            </div>
          )}

          {displayFeatures.length > 0 && (
            <div>
              <p className="font-heading-en text-[10px] tracking-[0.4em] text-[#cfaa70]/60 uppercase mb-3">Features</p>
              <ul className="space-y-2">
                {displayFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 font-ui text-sm text-white/60">
                    <span className="text-[#cfaa70] mt-0.5 flex-shrink-0">✦</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {product.ingredients && (
            <details className="border-t border-[#cfaa70]/15 pt-4 group">
              <summary className="font-ui text-sm text-[#cfaa70]/60 cursor-pointer hover:text-[#cfaa70] transition-colors flex items-center gap-2 list-none">
                {t.ingredients}
                <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="font-ui text-xs text-white/35 mt-4 leading-relaxed">{product.ingredients}</p>
            </details>
          )}

          <div className="border-t border-[#cfaa70]/15 pt-6">
            <p className="font-ui text-xs font-bold text-white/60 mb-2">{t.usageWarningLabel}</p>
            <p className="font-ui text-xs text-white/35 leading-relaxed">
              {t.usageWarning}
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
