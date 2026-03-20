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

  // Full-page parallax effect
  const yImg = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  return (
    <section id="secret" ref={containerRef} className="relative w-full bg-[#1A0005] text-white z-10">
      
      {/* Massive Full-Page Image Area */}
      <div className="relative h-screen w-full overflow-hidden">
        
        <motion.div style={{ y: yImg, height: '130%', top: '-15%' }} className="absolute inset-0 z-0">
          <Image
            src="/images/asian_skin_40s.png"
            alt="アキノリオが導く、本来の素肌美"
            fill
            className="object-cover object-center"
            sizes="100vw"
            quality={100}
            priority
          />
          {/* Deep Crimson/Black gradient overlays to blend the natural setting into luxury HIK aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A0005] via-[#1A0005]/60 to-transparent z-10" />
          <div className="absolute inset-0 bg-[#3D010A]/20 mix-blend-multiply z-10" />
        </motion.div>

        {/* Text Area Floating over the full-page image (Strict Left Aligned layout) */}
        <div className="absolute bottom-0 left-0 w-full z-20 mx-auto px-6 md:px-12 pb-24 md:pb-32">
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-24 items-end">
            
            <div className="lg:col-span-5 flex flex-col items-start w-full">
              <span className="text-[10px] md:text-sm tracking-[0.4em] text-[#E31633] mb-6 font-bold" style={{ fontFamily: '"Noto Serif JP", serif' }}>
                素肌力の解放
              </span>
              <h2 
                className="text-4xl md:text-6xl lg:text-7xl font-black tracking-widest text-white leading-[1.2] drop-shadow-2xl" 
                style={{ fontFamily: '"Noto Serif JP", serif' }}
              >
                アキノリオの<br/>秘密
              </h2>
              <div className="w-full h-[1px] bg-[#E31633]/50 mt-8 hidden lg:block" />
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col space-y-8 md:space-y-12"
            >
              <h3 className="text-2xl md:text-4xl font-bold tracking-wider leading-[1.6] text-[#fdfbf7] drop-shadow-xl" style={{ fontFamily: '"Noto Serif JP", sans-serif' }}>
                肌の「根本環境」に着目した<br className="hidden md:block"/>全く新しい解答。
              </h3>
              
              <div className="space-y-6 text-sm md:text-base leading-[2.4] tracking-wide text-white/90 font-medium text-justify max-w-2xl" style={{ fontFamily: '"Noto Serif JP", serif' }}>
                <p>
                  角質層の根本環境が乱れていたら、どんな成分も浸透せずに流れてしまいます。<br/>
                  何を使っても変わらない… だからこそ「肌の土台」に着目する必要があるのです。
                </p>
                <p>
                  ファンデーションも、化粧水すらも不要になる<span className="text-[10px] align-top ml-1">※1</span>ような体験。<br/>
                  リピート率は90％超え<span className="text-[10px] align-top ml-1">※2</span>。<br/>
                  これまでに無い驚きが、貴方を待っています。
                </p>
                <p className="font-bold text-[#fdfbf7]">
                  年齢を重ねても、環境の変化に戸惑っても、諦める必要なんてありません。<br/>
                  アキノリオのスキンケアは、本質を見つめ直した引き算の極地です。
                </p>
              </div>

              <div className="flex flex-col gap-2 pt-6 border-t border-white/20">
                <span className="text-[9px] md:text-[10px] text-white/60 tracking-wider font-sans">※1 個人のスキンケアステップの簡略化における感想です</span>
                <span className="text-[9px] md:text-[10px] text-white/60 tracking-wider font-sans">※2 当社販売実績データに基づく（過去12ヶ月の定期購入継続率）</span>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
