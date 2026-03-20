'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const products = [
  {
    id: '01',
    name: 'ミトコンドリアのちから',
    subtitle: '濃密な手応えを、静かに届ける美容液',
    description: '肌が必要とする成分だけを、極限までピュアな状態で抽出。テクスチャーは水のように軽やかでありながら、肌の奥深く（角質層まで）で確かなハリと弾力を目覚めさせます。',
    price: '¥22,000',
    image: '/images/serum_studio.png',
  },
  {
    id: '02',
    name: 'CLEANSING',
    subtitle: '落としながら、うるおいの余韻を残す',
    description: '1日の終わりの肌を、優しく解放するクレンジング。メイクや汚れだけを的確に包み込み、引き算のあとにふっくらとした透明感と柔らかさを残します。',
    price: '¥18,000',
    image: '/images/cleansing_studio.png',
  },
  {
    id: '03',
    name: 'SOAP',
    subtitle: '余分を洗い流し、肌をまっすぐに整える',
    description: 'きめ細かく弾力のある泡が、古い角質や毛穴の奥のノイズを吸着。洗い上がりの無垢な肌は、次に届けるセラムを最高のかたちで迎え入れます。',
    price: '¥8,800',
    image: '/images/soap_studio.png',
  }
];

export default function ProductShowcase() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  // 3 panels = 300vw total width. To show the last panel, we move -200vw, which is -66.666%
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.666%"]);

  return (
    <section ref={targetRef} id="products" className="relative h-[300vh] bg-[#7C0114] z-10 text-white">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center bg-gradient-to-br from-[#94081F] to-[#7C0114]">
        
        {/* Background ambient light */}
        <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-30 z-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#E31633] rounded-full blur-[200px]" />
        </div>

        {/* Global Section Title (Left aligned, vertical-rl per guidelines) */}
        <div className="absolute top-[10%] md:top-24 left-6 md:left-12 z-20">
          <h2 
            className="text-3xl md:text-5xl lg:text-6xl font-black tracking-[0.3em] text-[#E31633] uppercase select-none opacity-80" 
            style={{ writingMode: 'vertical-rl', fontFamily: 'Neue Haas Grotesk, Helvetica Neue, sans-serif' }}
          >
            PRODUCTS
          </h2>
        </div>

        {/* Horizontal Scroll Track */}
        <motion.div style={{ x }} className="flex h-full w-[300vw] z-10">
          {products.map((product) => (
            <div key={product.id} className="relative h-full w-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-32 py-24 gap-8 md:gap-24">
              
              {/* Massive Number behind product */}
              <div 
                className="absolute top-1/2 md:top-[40%] left-1/2 md:left-[30%] -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[30rem] lg:text-[45rem] font-black text-white/5 select-none pointer-events-none"
                style={{ fontFamily: 'Neue Haas Grotesk, Helvetica Neue, sans-serif' }}
              >
                {product.id}
              </div>

              {/* Product Image Section */}
              <div className="relative z-10 w-full max-w-[280px] md:max-w-[400px] lg:max-w-[550px] aspect-[4/5] flex-shrink-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={100}
                />
              </div>

              {/* Product Text Section (STRICT Left Alignment) */}
              <div className="relative z-10 flex flex-col items-start w-full max-w-lg text-left mt-8 md:mt-0">
                <span className="text-[10px] md:text-xs uppercase tracking-[0.5em] mb-4 font-bold" style={{ color: '#E31633', fontFamily: 'Neue Haas Grotesk, sans-serif' }}>
                  Signature Line
                </span>
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-wider text-white mb-4 md:mb-6 whitespace-nowrap" style={{ fontFamily: '"Noto Serif JP", serif' }}>
                  {product.name}
                </h3>
                <p className="text-sm md:text-lg text-white/90 font-medium mb-6 md:mb-10 tracking-widest leading-relaxed" style={{ fontFamily: '"Noto Serif JP", serif' }}>
                  {product.subtitle}
                </p>
                <p className="text-xs md:text-base leading-[2.2] tracking-wide text-white/70 font-light mb-8 md:mb-12 text-justify">
                  {product.description}
                </p>
                <div className="flex items-center gap-6 mt-auto">
                  <span className="text-[10px] tracking-[0.3em] text-[#E31633] font-bold">PRICE</span>
                  <span className="text-xl md:text-3xl tracking-widest text-white font-medium" style={{ fontFamily: 'Neue Haas Grotesk, sans-serif' }}>{product.price}</span>
                </div>
              </div>
              
            </div>
          ))}
        </motion.div>

        {/* Horizontal Progress Bar */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[200px] h-[1px] bg-[#FFFFFF]/20 z-20 hidden md:block">
          <motion.div 
            className="h-full bg-[#FFFFFF] origin-left"
            style={{ scaleX: scrollYProgress }}
          />
        </div>

      </div>
    </section>
  );
}
