'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const steps = [
  {
    num: "01",
    name: "ハーブのちから",
    title: "土台を整え、潤いの道を拓く。",
    desc: "洗顔後のまっさらな肌へ。自然の生命力が宿るハーブの滴が、硬くなった角質をやさしく解きほぐし、次に届ける美容液の浸透（角質層まで）を劇的に高めます。",
    image: "/images/products/herb.png"
  },
  {
    num: "02",
    name: "ミトコンドリアのちから",
    title: "細胞の奥深くから、かつてないハリを。",
    desc: "整った土台に、極限までピュアな状態で抽出された成分がまっすぐに届きます。水のように軽く、かつてない肌の弾力と若々しい印象を呼び覚まします。",
    image: "/images/products/mitochondria.png"
  },
  {
    num: "03",
    name: "輝肌Kihada",
    title: "生まれたての輝きを、永遠に閉じ込める。",
    desc: "呼び覚ました肌本来のチカラを、極上のヴェールで優しく包み込みます。与えすぎない「引き算」が完成させる、圧倒的な艶と透明感をご体感ください。",
    image: "/images/products/kihada.png"
  }
];

export default function SkinCareStep() {
  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section id="skincare-step" ref={containerRef} className="relative w-full overflow-hidden bg-[#2A0005] text-white py-32 md:py-48 z-10 border-t border-[#3D010A]">
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12 flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
        
        {/* Title Area */}
        <div className="w-full lg:w-1/4 flex flex-col items-start lg:sticky lg:top-32 z-20">
          <h2 
            className="text-4xl md:text-5xl font-black tracking-widest text-[#E31633] lg:writing-vertical-rl pb-8 lg:pb-0" 
            style={{ fontFamily: '"Noto Serif JP", serif', writingMode: 'horizontal-tb' }}
          >
            輝魔女セットの奇跡
          </h2>
          <style dangerouslySetInnerHTML={{__html: `
            @media (min-width: 1024px) {
              h2.lg\\:writing-vertical-rl { writing-mode: vertical-rl; text-orientation: upright; height: 500px; }
            }
          `}} />
        </div>

        {/* Content Area */}
        <div className="flex-1 w-full flex flex-col items-start mt-8 lg:mt-0">
          
          <div className="mb-20 w-full text-left">
            <p className="text-[10px] md:text-xs tracking-[0.5em] text-[#E31633] mb-4 font-bold" style={{ fontFamily: '"Noto Serif JP", serif' }}>
              輝魔女セット - スキンケアステップ
            </p>
            <h3 className="text-3xl md:text-5xl font-bold tracking-wider leading-[1.6] mb-8" style={{ fontFamily: '"Noto Serif JP", sans-serif' }}>
              なぜ、この順番なのか。
            </h3>
            <p className="text-sm md:text-base text-white/80 leading-loose tracking-wide md:max-w-2xl text-justify md:text-left">
              圧倒的な素肌力を引き出すための、究極の3ステップ「輝魔女セット」。それぞれが明確な役割を持ち、完璧な連携で肌環境を整え、細胞からの自己再生を促します。
            </p>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {steps.map((step, idx) => (
              <motion.div 
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, delay: idx * 0.2, ease: "easeOut" }}
                className="flex flex-col border border-white/10 bg-[#1A0005]/50 p-6 hover:border-[#E31633]/30 transition-all duration-500 overflow-hidden relative group h-full"
              >
                {/* Product Image */}
                <div className="relative w-full aspect-[4/5] max-w-[200px] mx-auto mb-8 transform group-hover:scale-105 transition-transform duration-700 bg-white/5 rounded flex items-center justify-center p-4">
                  <Image src={step.image} alt={step.name} fill className="object-contain drop-shadow-xl" />
                </div>

                <div className="flex flex-col items-start mb-6 pb-6 border-b border-[#E31633]/30">
                  <span className="text-4xl md:text-5xl font-black text-[#E31633]/80 mb-2" style={{ fontFamily: 'Neue Haas Grotesk, sans-serif' }}>{step.num}</span>
                  <span className="text-lg md:text-xl font-bold tracking-widest text-[#fdfbf7] whitespace-nowrap" style={{ fontFamily: '"Noto Serif JP", serif' }}>{step.name}</span>
                </div>
                <h4 className="text-base md:text-lg font-bold tracking-wide text-white mb-4 leading-relaxed" style={{ fontFamily: '"Noto Serif JP", serif' }}>
                  {step.title}
                </h4>
                <p className="text-[13px] leading-[2.2] tracking-wide text-white/70 font-light text-justify mt-auto">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
