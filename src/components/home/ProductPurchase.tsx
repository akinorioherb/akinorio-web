'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProductPurchase() {
  return (
    <section id="purchase" className="w-full bg-[#1A0005] text-white py-24 md:py-32 border-b border-[#3D010A]">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-24">
        
        {/* Product Image */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full md:w-1/2 relative aspect-[3/4] max-w-[500px]"
        >
          <Image
            src="/images/serum_studio.png"
            alt="ミトコンドリアのちから"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </motion.div>

        {/* Product Details & Immediate Cart */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="w-full md:w-1/2 flex flex-col items-start"
        >
          <div className="flex flex-col mb-8">
            <span className="text-xs md:text-sm tracking-[0.3em] text-[#E31633] mb-4 font-bold">
              肌の可能性を引き出す導入美容液
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-wider text-white mb-6 leading-tight" style={{ fontFamily: '"Noto Serif JP", serif' }}>
              ミトコンドリアの<br className="max-md:hidden"/>ちから
            </h2>
            <p className="text-base md:text-lg text-white/80 leading-[2.2] tracking-wide text-justify mb-8" style={{ fontFamily: '"Noto Serif JP", serif' }}>
              糸を引く贅沢なテクスチャーが、肌を包み込みながら驚くほど馴染んでいく。過剰なスキンケアをお休みし、ご自身の肌環境をリセットするための特別な一滴です。
            </p>
          </div>

          <div className="w-full bg-[#3D010A] p-8 md:p-12 mb-8 border border-[#E31633]/20">
            <h3 className="text-xl md:text-2xl font-bold tracking-widest text-[#fdfbf7] mb-6 border-b border-white/10 pb-4" style={{ fontFamily: '"Noto Serif JP", serif' }}>
              14日間リセットプログラム
            </h3>
            <p className="text-sm md:text-base text-white/70 leading-[2.0] tracking-wide mb-8 text-justify">
              まずは14日間、余分なものを引き算する体験をご自身の肌でお確かめください。万が一、お肌に合わない場合は全額返金を保証いたします。
            </p>
            
            <div className="flex flex-col space-y-2 mb-8">
              <span className="text-sm tracking-widest text-white/70">初回特別価格（約54%OFF）</span>
              <div className="flex items-end gap-3">
                <span className="text-4xl md:text-5xl font-bold tracking-wider" style={{ fontFamily: 'Neue Haas Grotesk, sans-serif' }}>
                  ¥2,980
                </span>
                <span className="text-sm md:text-base text-white/60 mb-2 tracking-widest">
                  税込・送料無料
                </span>
              </div>
            </div>

            <button className="relative overflow-hidden w-full bg-[#fdfbf7] text-[#1A0005] py-5 px-8 flex items-center justify-between group transition-all duration-300">
              <span className="text-sm md:text-base font-bold tracking-[0.2em] relative z-10" style={{ fontFamily: '"Noto Serif JP", sans-serif' }}>
                14日間の引き算を始める
              </span>
              <svg className="w-5 h-5 relative z-10 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              <div className="absolute inset-0 bg-[#E31633] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0" />
              <span className="absolute inset-0 flex items-center justify-between py-5 px-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 delay-100 pointer-events-none">
                <span className="text-sm md:text-base font-bold tracking-[0.2em]" style={{ fontFamily: '"Noto Serif JP", sans-serif' }}>
                  14日間の引き算を始める
                </span>
                <svg className="w-5 h-5 transform translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
            <p className="text-[10px] text-white/40 mt-4 tracking-wider leading-relaxed text-justify">
              ※ 定期お申込み時の初回お受け取り分に限り適用させていただきます。※ 全額返金につきましては必ず事前にお問い合わせ窓口へご連絡をお願いいたします。
            </p>
          </div>

          <div className="w-full flex flex-col space-y-4">
            <a href="#" className="flex items-center justify-between border-b border-white/10 pb-4 group hover:border-[#E31633]/50 transition-colors duration-300">
              <span className="text-sm md:text-base tracking-widest text-[#fdfbf7] font-medium transition-colors" style={{ fontFamily: '"Noto Serif JP", serif' }}>
                定期3ヵ月コース（初回約54%OFF） <span className="ml-2 font-bold" style={{ fontFamily: 'Neue Haas Grotesk, sans-serif' }}>¥8,940</span>
              </span>
              <svg className="w-4 h-4 text-white/50 group-hover:text-[#E31633] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#" className="flex items-center justify-between border-b border-white/10 pb-4 group hover:border-[#E31633]/50 transition-colors duration-300">
              <span className="text-sm md:text-base tracking-widest text-[#fdfbf7] font-medium transition-colors" style={{ fontFamily: '"Noto Serif JP", serif' }}>
                通常購入 <span className="ml-2 font-bold" style={{ fontFamily: 'Neue Haas Grotesk, sans-serif' }}>¥6,600</span>
              </span>
              <svg className="w-4 h-4 text-white/50 group-hover:text-[#E31633] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
