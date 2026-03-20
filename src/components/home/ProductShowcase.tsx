'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

import { PRODUCTS } from '@/lib/constants';

export default function ProductShowcase() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  // 10 panels = 1000vw total width. To show the last panel, we move -900vw, which is -90%
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"]);

  return (
    <section ref={targetRef} id="products" className="relative h-[1000vh] bg-[#7C0114] z-10 text-white">
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
          <p className="hidden md:block text-xs text-white/70 mt-4 tracking-widest absolute top-1/2 left-20 whitespace-nowrap" style={{ writingMode: 'vertical-rl' }}>
            ※単品でもご購入いただけます
          </p>
        </div>

        {/* Horizontal Scroll Track */}
        <motion.div style={{ x }} className="flex h-full w-[1000vw] z-10">
          {PRODUCTS.map((product, index) => {
            const displayNum = String(index + 1).padStart(2, '0');
            return (
            <div key={product.id} className="relative h-full w-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-32 py-24 gap-8 md:gap-24">
              
              {/* Massive Number (SVG Format) */}
              <div 
                className="absolute top-1/2 md:top-[40%] left-1/2 md:left-[30%] -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vh] text-white/5 select-none pointer-events-none flex items-center justify-center"
              >
                <svg width="100%" height="100%" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet">
                  <text 
                    x="50%" y="54%" 
                    textAnchor="middle" 
                    dominantBaseline="middle" 
                    fill="currentColor" 
                    fontWeight="900" 
                    fontSize="300"
                    fontFamily="Neue Haas Grotesk, Helvetica Neue, sans-serif"
                    letterSpacing="-0.05em"
                  >
                    {displayNum}
                  </text>
                </svg>
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
                <p className="text-sm md:text-lg text-white/90 font-medium mb-6 md:mb-8 tracking-widest leading-relaxed" style={{ fontFamily: '"Noto Serif JP", serif' }}>
                  {product.subtitle}
                </p>
                <div className="flex flex-wrap items-center gap-3 md:gap-4 text-[#e31633] mb-6 md:mb-8">
                  {product.usageDuration && (
                    <span className="text-[10px] md:text-xs font-bold tracking-widest border border-[#e31633]/30 px-3 py-1 bg-black/20">
                      使用目安: {product.usageDuration}
                    </span>
                  )}
                  {product.volume && product.volume !== '—' && (
                    <span className="text-[10px] md:text-xs font-bold tracking-widest border border-[#e31633]/30 px-3 py-1 bg-black/20">
                      内容量: {product.volume}
                    </span>
                  )}
                </div>
                <p className="text-xs md:text-base leading-[2.2] tracking-wide text-white/70 font-light mb-8 md:mb-12 text-justify whitespace-pre-line">
                  {product.description}
                </p>
                <div className="flex flex-col gap-4 mt-auto w-full">
                  <div className="flex items-center gap-6">
                    <span className="text-[10px] tracking-[0.3em] text-[#E31633] font-bold">PRICE</span>
                    <span className="text-xl md:text-3xl tracking-widest text-white font-medium" style={{ fontFamily: 'Neue Haas Grotesk, sans-serif' }}>¥{product.price.toLocaleString()}</span>
                  </div>
                  <a href="#" className="inline-flex items-center gap-4 group/btn mt-4 self-start">
                    <span className="text-sm font-bold tracking-[0.2em] transform group-hover/btn:-translate-x-2 transition-transform duration-300">
                      詳細を見る
                    </span>
                    <div className="w-12 h-[1px] bg-[#E31633] relative overflow-hidden">
                      <div className="absolute inset-0 bg-white transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500" />
                    </div>
                  </a>
                </div>
              </div>
              
            </div>
            );
          })}
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
