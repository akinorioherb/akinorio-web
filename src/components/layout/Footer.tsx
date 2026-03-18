import Link from 'next/link'
import Container from '@/components/ui/Container'
import { LINE_URL } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-primary-800 text-white">
      {/* Gold divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

      <Container>
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <Link href="/" className="font-heading-en text-2xl tracking-[0.2em] text-gold-400">
                AKINORIO
              </Link>
              <p className="mt-4 font-ui text-sm text-primary-200 leading-relaxed">
                細胞レベルに着目した<br />
                引き算のスキンケア
              </p>
            </div>

            {/* Products */}
            <div>
              <h3 className="font-ui text-xs tracking-widest text-gold-400 uppercase mb-4">
                Products
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/products/serum" className="font-ui text-sm text-primary-200 hover:text-white transition-colors">
                    ミトコンドリアのちから 美容液
                  </Link>
                </li>
                <li>
                  <Link href="/products/cleansing" className="font-ui text-sm text-primary-200 hover:text-white transition-colors">
                    ミトコンドリアのちから クレンジング
                  </Link>
                </li>
                <li>
                  <Link href="/products/soap" className="font-ui text-sm text-primary-200 hover:text-white transition-colors">
                    ミトコンドリアのちから ソープ
                  </Link>
                </li>
                <li>
                  <Link href="/sample" className="font-ui text-sm text-gold-300 hover:text-gold-200 transition-colors">
                    14日間無料サンプル
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-ui text-xs tracking-widest text-gold-400 uppercase mb-4">
                Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="font-ui text-sm text-primary-200 hover:text-white transition-colors">
                    ブランドストーリー
                  </Link>
                </li>
                <li>
                  <Link href="/tokushoho" className="font-ui text-sm text-primary-200 hover:text-white transition-colors">
                    特定商取引法に基づく表記
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="font-ui text-sm text-primary-200 hover:text-white transition-colors">
                    プライバシーポリシー
                  </Link>
                </li>
              </ul>
            </div>

            {/* SNS & LINE */}
            <div>
              <h3 className="font-ui text-xs tracking-widest text-gold-400 uppercase mb-4">
                Connect
              </h3>
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#06C755] text-white px-5 py-2.5 rounded-sm font-ui text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.271.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
                LINE友だち追加
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-16 pt-8 border-t border-primary-600">
            <p className="font-ui text-xs text-primary-300 text-center tracking-wide">
              &copy; {new Date().getFullYear()} AKINORIO. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
