'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function AkinorioSecret() {
  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // HIK style subtle parallax for the abstract secret image
  const yImg = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 0.2, 0.8]);

  return (
    <section id="secret" ref={containerRef} className="relative w-full overflow-hidden bg-gradient-to-br from-[#7C0114] to-[#94081F] text-white py-32 md:py-48 z-10">
      
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12 flex flex-col items-center">
        
        {/* Massive Sticky/Parallax Immersive Image Focus */}
        <div className="relative w-full aspect-[21/9] md:aspect-[21/9] overflow-hidden mb-24 md:mb-32">
          <motion.div style={{ y: yImg, height: '116%', width: '100%', top: '-8%' }} className="absolute z-0">
            <Image
              src="/images/secret_studio.png"
              alt="AKINORIO Secret Visualization"
              fill
              className="object-cover object-center mix-blend-lighten"
              sizes="100vw"
              quality={100}
            />
          </motion.div>
          {/* Crimson gradient overlay to blend into the section */}
          <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0 bg-gradient-to-t from-[#7C0114] via-[#94081F]/30 to-[#94081F] opacity-60 z-10" />
        </div>

        {/* Text Area (Strict Left Aligned layout with Grid) */}
        <div className="w-full grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          <div className="lg:col-span-4 flex flex-col items-start">
            <h2 
              className="text-4xl md:text-5xl lg:text-7xl font-black tracking-widest text-[#E31633] leading-[1.2]" 
              style={{ fontFamily: '"Noto Serif JP", serif' }}
            >
              アキノリオの<br/>秘密
            </h2>
            <div className="w-full h-[1px] bg-[#E31633]/30 mt-12 hidden lg:block" />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="lg:col-span-8 flex flex-col space-y-12 md:space-y-16"
          >
            <h3 className="text-3xl md:text-5xl font-bold tracking-wider leading-[1.6] text-white" style={{ fontFamily: '"Noto Serif JP", sans-serif' }}>
              肌の「根本環境」に着目した<br className="hidden md:block"/>全く新しい解答。
            </h3>
            
            <div className="space-y-8 text-sm md:text-lg leading-[2.4] tracking-wide text-white/80 font-light text-justify max-w-2xl" style={{ fontFamily: '"Noto Serif JP", serif' }}>
              <p>
                角質層の根本環境が乱れていたら、どんな成分も浸透せずに流れてしまいます。<br/>
                何を使っても変わらない… だからこそ「肌の土台」に着目する必要があるのです。
              </p>
              <p>
                ファンデーションも、化粧水すらも不要になる<span className="text-[10px] align-top ml-1">※1</span>ような体験。<br/>
                リピート率は90％超え<span className="text-[10px] align-top ml-1">※2</span>。<br/>
                これまでに無い驚きが、貴方を待っています。
              </p>
              <p className="font-medium text-white">
                年齢を重ねても、環境の変化に戸惑っても、諦める必要なんてありません。<br/>
                アキノリオのスキンケアは、本質を見つめ直した引き算の極地です。
              </p>
            </div>

            <div className="flex flex-col gap-2 pt-8 border-t border-white/10">
              <span className="text-[10px] text-white/40 tracking-wider">※1 個人のスキンケアステップの簡略化における感想です</span>
              <span className="text-[10px] text-white/40 tracking-wider">※2 当社販売実績データに基づく（過去12ヶ月の定期購入継続率）</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
