import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // output: 'export', // Shopify用に静的出力を強制していましたが、Vercelでは不要なので外します
  // images: {
  //   unoptimized: true, // Vercelの画像最適化（次世代フォーマット自動変換等）を活かすため外します
  // },
}

export default nextConfig
