'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useCart } from '@/lib/cart'
import { formatPrice } from '@/lib/utils'
import { SHOPIFY_DOMAIN } from '@/lib/shopify'
import { FREE_SHIPPING_THRESHOLD, SHIPPING_FEE } from '@/lib/constants'
import { getStoredAffiliateRef } from '@/hooks/useAffiliateTracking'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/i18n'

const AGENT_CODE_KEY = 'akinorio-agent-code'

function getStoredAgentCode(): string {
  if (typeof window === 'undefined') return ''
  return localStorage.getItem(AGENT_CODE_KEY) ?? ''
}

function saveAgentCode(code: string) {
  if (typeof window === 'undefined') return
  if (code) {
    localStorage.setItem(AGENT_CODE_KEY, code)
  } else {
    localStorage.removeItem(AGENT_CODE_KEY)
  }
}

export default function CartDrawer() {
  const { items, updateQuantity, removeItem, subtotal, total, shippingFee, isDrawerOpen, closeDrawer } = useCart()
  const [agentCode, setAgentCode] = useState('')
  const [agentCodeInput, setAgentCodeInput] = useState('')
  const [showAgentInput, setShowAgentInput] = useState(false)
  const { lang } = useLanguage()
  const t = translations[lang].cart
  const pc = translations[lang].productContent
  const isEn = lang === 'en'

  useEffect(() => {
    const stored = getStoredAgentCode()
    if (stored) {
      setAgentCode(stored)
      setAgentCodeInput(stored)
    }
  }, [])

  // ドロワーが開いたとき body スクロールをロック
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isDrawerOpen])

  const handleApplyAgentCode = () => {
    const trimmed = agentCodeInput.trim().toUpperCase()
    setAgentCode(trimmed)
    saveAgentCode(trimmed)
    setShowAgentInput(false)
  }

  const handleCheckout = () => {
    if (!SHOPIFY_DOMAIN) return
    const cartLine = items
      .filter(i => i.product.shopifyVariantId)
      .map(i => `${i.product.shopifyVariantId}:${i.quantity}`)
      .join(',')
    if (!cartLine) return

    let url = `https://${SHOPIFY_DOMAIN}/cart/${cartLine}`
    
    const affiliateId = getStoredAffiliateRef()
    
    if (affiliateId) {
      url += `?attributes[代理店コード]=${encodeURIComponent(affiliateId)}&discount=${encodeURIComponent(affiliateId)}`
    } else if (agentCode) {
      url += `?attributes[代理店コード]=${encodeURIComponent(agentCode)}&discount=${encodeURIComponent(agentCode)}`
    }
    
    window.location.href = url
  }

  const remaining = FREE_SHIPPING_THRESHOLD - subtotal

  return (
    <>
      {/* オーバーレイ */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={closeDrawer}
        />
      )}

      {/* ドロワー本体 */}
      <div
        className="fixed top-0 right-0 h-full w-full max-w-[420px] z-50 flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          background: 'linear-gradient(180deg, #1a0005 0%, #0d0003 100%)',
          borderLeft: '1px solid rgba(207,170,112,0.15)',
          transform: isDrawerOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        {/* ── ヘッダー ── */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#cfaa70]/15">
          <div>
            <p className="font-heading-en text-[10px] tracking-[0.4em] text-[#cfaa70]/60 uppercase mb-0.5">Cart</p>
            <h2 className="font-heading-ja text-base text-white font-light tracking-widest">
              {t.drawerTitle}
              {items.length > 0 && (
                <span className="ml-2 text-xs text-[#cfaa70]/70">
                  {isEn
                    ? `(${items.reduce((s, i) => s + i.quantity, 0)} items)`
                    : `（${items.reduce((s, i) => s + i.quantity, 0)}点）`}
                </span>
              )}
            </h2>
          </div>
          <button
            onClick={closeDrawer}
            className="w-9 h-9 flex items-center justify-center text-white/40 hover:text-white transition-colors"
            aria-label={isEn ? 'Close cart' : 'カートを閉じる'}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* ── 送料ゲージ ── */}
        {subtotal > 0 && (
          <div className="px-6 py-3 border-b border-[#cfaa70]/10">
            {shippingFee === 0 ? (
              <p className="font-ui text-xs text-[#cfaa70] tracking-wider">
                {t.freeShipping}
              </p>
            ) : (
              <>
                <div className="flex justify-between font-ui text-[10px] text-white/40 mb-1.5 tracking-wider">
                  <span>{t.freeShippingRemaining}</span>
                  <span>{formatPrice(remaining)}</span>
                </div>
                <div className="w-full h-0.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: `${Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100)}%`,
                      background: 'linear-gradient(90deg, #b8873a, #d4af61)',
                    }}
                  />
                </div>
              </>
            )}
          </div>
        )}

        {/* ── 商品リスト ── */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full py-20 text-center">
              <div className="w-16 h-16 rounded-full border border-[#cfaa70]/20 flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(207,170,112,0.4)" strokeWidth="1.5">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 01-8 0" />
                </svg>
              </div>
              <p className="font-ui text-sm text-white/30 tracking-wider">{t.empty}</p>
              <button
                onClick={closeDrawer}
                className="mt-6 font-ui text-xs text-[#cfaa70]/60 hover:text-[#cfaa70] transition-colors tracking-widest border-b border-[#cfaa70]/30 pb-0.5"
              >
                {t.drawerBrowse}
              </button>
            </div>
          ) : (
            items.map(item => {
              const img = item.product.hikImage || item.product.image
              const itemContent = pc[item.product.slug]
              const itemName = itemContent?.name ?? item.product.name
              const itemSubtitle = itemContent?.subtitle ?? item.product.subtitle
              return (
                <div key={item.product.id} className="flex gap-4 pb-5 border-b border-[#cfaa70]/10">
                  {/* 商品画像 */}
                  <div className="w-[72px] h-[72px] flex-shrink-0 relative rounded-sm overflow-hidden"
                    style={{ background: 'rgba(207,170,112,0.05)', border: '1px solid rgba(207,170,112,0.12)' }}>
                    <Image src={img} alt={itemName} fill className="object-cover" sizes="72px" />
                  </div>

                  {/* 情報 */}
                  <div className="flex-1 min-w-0">
                    <p className="font-heading-ja text-sm text-white font-light leading-snug">{itemName}</p>
                    <p className="font-ui text-[10px] text-white/40 mt-0.5 tracking-wider">{itemSubtitle}</p>
                    <p className="font-price text-sm text-[#cfaa70] mt-1.5">{formatPrice(item.product.price)}</p>

                    <div className="flex items-center justify-between mt-2.5">
                      {/* 数量 */}
                      <div className="flex items-center" style={{ border: '1px solid rgba(207,170,112,0.2)' }}>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-white/40 hover:text-white transition-colors text-sm"
                        >−</button>
                        <span className="w-7 h-7 flex items-center justify-center font-ui text-xs text-white border-x border-[#cfaa70]/20">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-white/40 hover:text-white transition-colors text-sm"
                        >+</button>
                      </div>

                      <div className="text-right">
                        <p className="font-price text-sm text-white/80">{formatPrice(item.product.price * item.quantity)}</p>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="font-ui text-[10px] text-white/25 hover:text-[#E31633] transition-colors mt-0.5"
                        >{t.remove}</button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          )}
        </div>

        {/* ── フッター（合計 + 代理店 + チェックアウト） ── */}
        {items.length > 0 && (
          <div className="border-t border-[#cfaa70]/15 px-6 py-5 space-y-4">

            {/* 合計 */}
            <div className="space-y-1.5">
              <div className="flex justify-between font-ui text-xs text-white/40 tracking-wider">
                <span>{t.subtotalLabel}</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between font-ui text-xs text-white/40 tracking-wider">
                <span>{t.shippingLabel}</span>
                <span>{shippingFee === 0 ? t.free : formatPrice(SHIPPING_FEE)}</span>
              </div>
              <div className="flex justify-between font-heading-ja text-base text-white pt-2 border-t border-[#cfaa70]/10">
                <span>{t.total}</span>
                <span className="font-price text-[#cfaa70]">{formatPrice(total)}</span>
              </div>
            </div>

            {/* 代理店コード */}
            <div>
              {agentCode ? (
                <div className="flex items-center justify-between px-3 py-2 rounded-sm"
                  style={{ background: 'rgba(207,170,112,0.08)', border: '1px solid rgba(207,170,112,0.25)' }}>
                  <div>
                    <p className="font-ui text-[10px] text-[#cfaa70]/60 tracking-widest">{t.agentApplied}</p>
                    <p className="font-heading-en text-sm text-[#cfaa70] tracking-widest">{agentCode}</p>
                  </div>
                  <button
                    onClick={() => { setAgentCode(''); setAgentCodeInput(''); saveAgentCode('') }}
                    className="font-ui text-[10px] text-white/30 hover:text-white/60 transition-colors"
                  >{t.agentRelease}</button>
                </div>
              ) : (
                <>
                  {!showAgentInput ? (
                    <button
                      onClick={() => setShowAgentInput(true)}
                      className="font-ui text-[10px] text-white/30 hover:text-[#cfaa70]/60 transition-colors tracking-widest"
                    >
                      {t.agentHint}
                    </button>
                  ) : (
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={agentCodeInput}
                        onChange={e => setAgentCodeInput(e.target.value.toUpperCase())}
                        placeholder={t.agentPlaceholder}
                        className="flex-1 px-3 py-2 font-ui text-xs text-white tracking-widest bg-transparent outline-none"
                        style={{ border: '1px solid rgba(207,170,112,0.3)' }}
                        onKeyDown={e => e.key === 'Enter' && handleApplyAgentCode()}
                      />
                      <button
                        onClick={handleApplyAgentCode}
                        className="px-3 py-2 font-ui text-xs text-[#120002] tracking-widest font-bold"
                        style={{ background: 'linear-gradient(135deg,#b8873a,#d4af61,#cfaa70)' }}
                      >{t.agentApply}</button>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* チェックアウトボタン */}
            <button
              onClick={handleCheckout}
              className="relative w-full py-4 font-ui text-sm font-bold tracking-[0.2em] text-[#120002] overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg,#b8873a 0%,#d4af61 28%,#f0dc98 50%,#cfaa70 72%,#9e7030 100%)',
                boxShadow: '0 4px 24px rgba(207,170,112,0.4)',
              }}
            >
              <span className="relative z-10">{t.drawerCheckout}</span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            {/* セキュリティバッジ */}
            <p className="font-ui text-[10px] text-white/25 text-center tracking-wider leading-relaxed">
              {t.drawerSecurity}
            </p>
          </div>
        )}
      </div>
    </>
  )
}
