'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const crossSells = [
  {
    id: "02",
    title: "クレンジング",
    image: "/images/products/cleansing.png",
    price: "¥18,000",
    desc: "一日の終わりに肌を解き放つ。汚れやメイクを的確に包み込み、透明感とうるおいの余韻だけを残すクレンジングゲル。"
  },
  {
    id: "03",
    title: "ソープ",
    image: "/images/products/soap.png",
    price: "¥8,800",
    desc: "次に届けるセラムのために、無垢な土台をつくる。弾力のあるきめ細かな泡で、古い角質や不要なノイズを完璧に洗い流す専用ソープ。"
  }
]

export default function CrossSell() {
  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section id="lineup" ref={containerRef} className="relative w-full overflow-hidden bg-[#1A0005] text-white py-32 md:py-48 z-10 border-t border-white/5">
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12 flex flex-col md:flex-row gap-16 md:gap-24 items-start">
        
        {/* Vertical Title Indicator */}
        <motion.div style={{ y: headerY }} className="hidden md:flex flex-col items-center sticky top-32">
          <h2 
            className="text-3xl md:text-4xl lg:text-4xl font-black tracking-[0.4em] text-[#E31633] opacity-80" 
            style={{ writingMode: 'vertical-rl', fontFamily: '"Noto Serif JP", serif' }}
          >
            商品一覧
          </h2>
        </motion.div>

        {/* Content Area */}
        <div className="flex-1 w-full flex flex-col items-start text-left">
          
          <div className="mb-24 w-full flex flex-col items-start border-b border-white/10 pb-8">
            <h3 className="text-3xl md:text-5xl font-bold tracking-wider leading-[1.6]" style={{ fontFamily: '"Noto Serif JP", sans-serif' }}>
              その他のラインナップ
            </h3>
          </div>

          <div className="w-full grid md:grid-cols-2 gap-12 md:gap-16">
            {crossSells.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, delay: idx * 0.2, ease: "easeOut" }}
                className="flex flex-col border border-white/10 bg-[#2A0005] group hover:border-[#E31633]/50 transition-colors duration-500 overflow-hidden"
              >
                <div className="relative w-full aspect-[4/5] bg-gradient-to-t from-[#1A0005] to-[#3D010A] p-12 overflow-visible flex items-center justify-center">
                  {/* Simulated Studio Spotlight */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#E31633] rounded-full blur-[80px] opacity-[0.15] z-0 transition-opacity duration-700 group-hover:opacity-30" />
                  
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain p-8 md:p-12 transform group-hover:scale-105 transition-transform duration-700 ease-out drop-shadow-[0_20px_20px_rgba(0,0,0,0.8)] z-10"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  
                  {/* Subtle ambient light overlay on product */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#3D010A]/20 via-transparent to-white/5 mix-blend-screen z-20 pointer-events-none" />

                  <div className="absolute top-6 left-6 text-2xl font-black text-white/10 z-30" style={{ fontFamily: 'Neue Haas Grotesk, sans-serif' }}>
                    {item.id}
                  </div>
                </div>
                
                <div className="flex flex-col p-10 md:p-12 border-t border-white/10">
                  <h4 className="text-2xl md:text-3xl font-bold tracking-widest text-white mb-6" style={{ fontFamily: '"Noto Serif JP", serif' }}>
                    {item.title}
                  </h4>
                  <p className="text-sm md:text-base leading-[2.2] tracking-wide text-white/70 font-light mb-8 text-justify">
                    {item.desc}
                  </p>
                  
                  <div className="flex items-center justify-between w-full mt-auto">
                    <span className="text-xl md:text-2xl font-bold tracking-wider" style={{ fontFamily: 'Neue Haas Grotesk, sans-serif' }}>
                      {item.price}<span className="text-xs text-white/50 ml-2 font-normal">税込</span>
                    </span>
                    
                    <a href="#" className="flex items-center gap-4 group/btn">
                      <span className="text-sm font-bold tracking-[0.2em] transform group-hover/btn:-translate-x-2 transition-transform duration-300">
                        詳細を見る
                      </span>
                      <div className="w-12 h-[1px] bg-[#E31633] relative overflow-hidden">
                        <div className="absolute inset-0 bg-white transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500" />
                      </div>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
