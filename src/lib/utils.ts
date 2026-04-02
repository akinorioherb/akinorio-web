/**
 * 価格を日本円フォーマットで表示
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('ja-JP', {
    style: 'currency',
    currency: 'JPY',
    minimumFractionDigits: 0,
  }).format(price)
}

/**
 * 税込価格の表示
 */
export function formatPriceWithTax(price: number): string {
  return `${formatPrice(price)}（税込）`
}

/**
 * 送料計算（全国一律600円）
 */
export function calculateShippingFee(_subtotal: number): number {
  return 600
}

/**
 * classNameを結合するユーティリティ
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

/**
 * 割引率の表示
 */
export function formatDiscount(pct: number): string {
  return `${pct}%OFF`
}
