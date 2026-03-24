'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import type { Product } from '@/types'
import { useCart } from '@/lib/cart'
import { motion } from 'framer-motion'

interface Props { product: Product }

type PurchaseType = 'sub3month' | 'sub1month' | 'normal'

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
  const [selected, setSelected] = useState<PurchaseType>(
    product.sub3MonthPrice ? 'sub3month' : 'normal'
  )
  const [isAdded, setIsAdded] = useState(false)
  const { addItem } = useCart()

  const productImage = product.hikImage || product.image

  const sub3price   = product.sub3MonthPrice ?? 0
  const sub1price   = product.sub1MonthPrice ?? 0
  const normalPrice = product.price

  const selectedPrice =
    selected === 'sub3month' ? sub3price :
    selected === 'sub1month' ? sub1price : normalPrice

  const handleBuy = () => {
    addItem(product, 1)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  if (product.price === 0) {
    return (
      <a href="/sample" className="block w-full py-5 text-center rounded-sm font-ui font-bold tracking-widest text-[#120002]"
        style={{ background: 'linear-gradient(135deg,#b8873a,#d4af61,#f0dc98,#cfaa70,#9e7030)', boxShadow: '0 4px 24px rgba(207,170,112,0.4)' }}>
        21日間の引き算プログラムを始める
      </a>
    )
  }

  const plans: Array<{ key: PurchaseType; label: string; badge: string; priceFirst: number; priceSub: string; desc: string; available: boolean }> = [
    {
      key: 'sub3month',
      label: '定期 3ヶ月コース',
      badge: '初回 20%OFF',
      priceFirst: sub3price,
      priceSub: `3ヶ月目以降も ${sub3price.toLocaleString()}円（20%OFF）`,
      desc: '3ヶ月ごとにお届け。変更・解約はいつでもOK。',
      available: sub3price > 0,
    },
    {
      key: 'sub1month',
      label: '定期 1ヶ月コース',
      badge: '初回 10%OFF',
      priceFirst: sub1price,
      priceSub: `2回目以降も ${sub1price.toLocaleString()}円（10%OFF）`,
      desc: '毎月お届け。変更・解約はいつでもOK。',
      available: sub1price > 0,
    },
    {
      key: 'normal',
      label: '通常購入',
      badge: '',
      priceFirst: normalPrice,
      priceSub: '送料：550円（税込）',
      desc: '1回のみのご購入。',
      available: true,
    },
  ]

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
              alt={product.name}
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
              alt={product.name}
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
          <ProductNameSvg name={product.name} />

          <p className="font-ui text-sm text-white/50 tracking-widest mb-3">{product.subtitle}</p>
          {product.volume && (
            <p className="font-ui text-sm text-white/40">容量：{product.volume}</p>
          )}
          <div className="w-12 h-px bg-[#cfaa70]/50 my-6" />
          <p className="font-ui text-sm text-white/60 leading-loose whitespace-pre-line max-w-md mb-10">
            {product.description.split('\n')[0]}
          </p>

          {/* ── 購入プラン ── */}
          <div className="space-y-3 mb-6">
            {plans.filter(p => p.available).map(plan => (
              <button
                key={plan.key}
                onClick={() => setSelected(plan.key)}
                className="w-full text-left rounded-sm transition-all duration-300 overflow-hidden"
                style={{
                  border: selected === plan.key ? '1px solid rgba(207,170,112,0.7)' : '1px solid rgba(207,170,112,0.2)',
                  background: selected === plan.key ? 'rgba(207,170,112,0.08)' : 'rgba(207,170,112,0.02)',
                }}
              >
                <div className="flex items-center justify-between px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full border flex-shrink-0 flex items-center justify-center"
                      style={{ borderColor: selected === plan.key ? '#D4AF37' : 'rgba(207,170,112,0.3)' }}>
                      {selected === plan.key && (
                        <div className="w-2 h-2 rounded-full" style={{ background: '#D4AF37' }} />
                      )}
                    </div>
                    <div>
                      <p className="font-ui text-sm font-medium text-white/90">{plan.label}</p>
                      {plan.badge && (
                        <span className="inline-block mt-0.5 text-[10px] tracking-widest font-ui px-2 py-0.5 rounded-sm"
                          style={{ background: 'rgba(212,175,55,0.15)', color: '#D4AF37' }}>
                          {plan.badge}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-heading-en text-xl font-light text-white">
                      ¥{plan.priceFirst.toLocaleString()}
                    </p>
                    <p className="font-ui text-[10px] text-white/40 mt-0.5">税込・送料無料</p>
                  </div>
                </div>
                <div className="px-5 pb-3 border-t border-[#cfaa70]/10">
                  <p className="font-ui text-xs text-white/40 mt-2 leading-relaxed">{plan.priceSub}</p>
                  <p className="font-ui text-xs text-white/30 mt-1">{plan.desc}</p>
                </div>
              </button>
            ))}
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
              {isAdded ? 'カートに追加しました ✓' : `この一本を選ぶ — ¥${selectedPrice.toLocaleString()}`}
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

          {product.howToUse && (
            <div>
              <p className="font-heading-en text-[10px] tracking-[0.4em] text-[#cfaa70]/60 uppercase mb-3">How to Use</p>
              <p className="font-ui text-sm text-white/60 leading-loose">{product.howToUse}</p>
            </div>
          )}

          {product.features.length > 0 && (
            <div>
              <p className="font-heading-en text-[10px] tracking-[0.4em] text-[#cfaa70]/60 uppercase mb-3">Features</p>
              <ul className="space-y-2">
                {product.features.map((f, i) => (
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
                全成分を表示する
                <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="font-ui text-xs text-white/35 mt-4 leading-relaxed">{product.ingredients}</p>
            </details>
          )}

          <div className="border-t border-[#cfaa70]/15 pt-6">
            <p className="font-ui text-xs font-bold text-white/60 mb-2">ご使用上の注意：</p>
            <p className="font-ui text-xs text-white/35 leading-relaxed">
              お肌に異常が生じていないかよく注意して使用してください。お肌に合わないときは、使用を中止し皮膚科専門医にご相談ください。目に入った場合は、すぐに水または温水で十分に洗い流してください。
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
