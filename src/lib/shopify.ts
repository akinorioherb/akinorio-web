/**
 * Shopify 連携設定
 *
 * 設定方法:
 *   .env.local に以下を追加してください
 *   NEXT_PUBLIC_SHOPIFY_DOMAIN=your-store.myshopify.com
 */

export const SHOPIFY_DOMAIN =
  process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN || ''

/**
 * Shopify カートURL（通常購入）
 * https://your-store.myshopify.com/cart/{variantId}:1
 */
export function shopifyCartUrl(variantId: string, quantity = 1): string {
  if (!SHOPIFY_DOMAIN || !variantId) return ''
  return `https://${SHOPIFY_DOMAIN}/cart/${variantId}:${quantity}`
}

/**
 * Shopify カートURL（定期購入 / Selling Plan）
 * selling_plan IDはShopify管理画面 → アプリ → サブスクリプション設定で取得
 */
export function shopifySubscriptionUrl(
  variantId: string,
  sellingPlanId: string,
  quantity = 1
): string {
  if (!SHOPIFY_DOMAIN || !variantId || !sellingPlanId) return ''
  return `https://${SHOPIFY_DOMAIN}/cart/${variantId}:${quantity}?selling_plan=${sellingPlanId}`
}

/** Variant IDが設定済みか確認 */
export function hasShopify(variantId?: string): boolean {
  return !!SHOPIFY_DOMAIN && !!variantId
}
