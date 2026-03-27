'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const crossSells = [
  {
    id: "01",
    title: "ミトコンドリアのちから",
    image: "/images/products/mitochondria.png",
    price: "¥22,000",
    desc: "極限までピュアな状態で抽出された美容液。水のように軽やかに肌の奥深くへ浸透し、かつてないハリと弾力を目覚めさせます。"
  },
  {
    id: "02",
    title: "ハーブのちから",
    image: "/images/products/herb.png",
    price: "¥18,000",
    desc: "自然の生命力が宿るハーブの滴。肌の土台を整え、硬くなった角質をやさしく解きほぐすことで、美容成分の浸透を劇的に高めます。"
  },
  {
    id: "03",
    title: "輝肌Kihada",
    image: "/images/products/kihada.png",
    price: "¥12,000",
    desc: "呼び覚ました肌本来のチカラを、極上のヴェールで閉じ込める。与えすぎない「引き算」が完成させる、圧倒的な艶と透明感。"
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
              単品ラインナップ
            </h3>
            <p className="text-sm md:text-base text-white/70 mt-4 tracking-wide" style={{ fontFamily: '"Noto Serif JP", serif' }}>
              輝く魔女セットに含まれる各アイテムは、単品でも追加・継続でご購入いただけます。
            </p>
          </div>

          <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 gap-8 md:gap-12">
            {crossSells.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, delay: idx * 0.2, ease: "easeOut" }}
                className="flex flex-col border border-white/10 bg-[#2A0005] group hover:border-[#E31633]/50 transition-colors duration-500 overflow-hidden"
              >
                <div className="relative w-full aspect-[4/5] bg-gradient-to-t from-[#1A0005] to-[#3D010A] p-8 overflow-visible flex items-center justify-center">
                  {/* Simulated Studio Spotlight */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#E31633] rounded-full blur-[80px] opacity-[0.15] z-0 transition-opacity duration-700 group-hover:opacity-30" />
                  
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain p-8 md:p-12 transform group-hover:scale-105 transition-transform duration-700 ease-out drop-shadow-[0_20px_20px_rgba(0,0,0,0.8)] z-10"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  
                  {/* Subtle ambient light overlay on product */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#3D010A]/20 via-transparent to-white/5 mix-blend-screen z-20 pointer-events-none" />

                  <div className="absolute top-6 left-6 text-2xl font-black text-white/10 z-30" style={{ fontFamily: 'Neue Haas Grotesk, sans-serif' }}>
                    {item.id}
                  </div>
                </div>
                
                <div className="flex flex-col flex-1 p-8 md:p-10 border-t border-white/10">
                  <h4 className="text-xl md:text-2xl font-bold tracking-widest text-[#fdfbf7] mb-6 min-h-[3rem]" style={{ fontFamily: '"Noto Serif JP", serif' }}>
                    {item.title}
                  </h4>
                  <p className="text-sm leading-[2.2] tracking-wide text-white/70 font-light mb-8 text-justify flex-1">
                    {item.desc}
                  </p>
                  
                  <div className="flex items-center justify-between w-full mt-auto">
                    <span className="text-xl md:text-2xl font-bold tracking-wider" style={{ fontFamily: 'Neue Haas Grotesk, sans-serif' }}>
                      {item.price}<span className="text-[10px] text-white/50 ml-1 font-normal tracking-wide">税込</span>
                    </span>
                    
                    <a href="#" className="flex items-center gap-3 group/btn">
                      <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] transform group-hover/btn:-translate-x-2 transition-transform duration-300">
                        詳細を見る
                      </span>
                      <div className="w-8 h-[1px] bg-[#E31633] relative overflow-hidden">
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
