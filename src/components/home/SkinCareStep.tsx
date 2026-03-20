'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    num: "01",
    name: "クレンジング",
    title: "一日の負担を、優しく解き放つ。",
    desc: "メイクや皮脂汚れだけを的確に浮き上がらせ、肌のうるおい被膜を壊すことなくオフ。洗い流した瞬間から、肌が深呼吸を始めるような軽さを実感できます。"
  },
  {
    num: "02",
    name: "ソープ",
    title: "まっさらな状態へ、肌を整える。",
    desc: "古い角質や毛穴の奥の微弱なノイズも、きめ細かく弾力のある泡が吸着。余分なものを完璧に「引き算」した無垢な土台が、次に届く恵みを受け入れる準備を整えます。"
  },
  {
    num: "03",
    name: "セラム",
    title: "必要なものだけを、極限まで。",
    desc: "化粧水も乳液も要らない。整った土台に、極限までピュアな状態で抽出された成分がまっすぐに届きます。（角質層まで）水のように軽く、かつてないハリと弾力へ。"
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
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12 flex flex-col md:flex-row gap-16 md:gap-24 items-start">
        
        {/* Vertical Title Indicator */}
        <motion.div style={{ y: headerY }} className="hidden md:flex flex-col items-center sticky top-32">
          <h2 
            className="text-3xl md:text-4xl lg:text-4xl font-black tracking-[0.4em] text-[#E31633] opacity-80" 
            style={{ writingMode: 'vertical-rl', fontFamily: '"Noto Serif JP", serif' }}
          >
            スキンケアステップ
          </h2>
        </motion.div>

        {/* Content Area */}
        <div className="flex-1 w-full flex flex-col items-start text-left">
          
          <div className="mb-24 w-full">
            <p className="text-[10px] md:text-xs tracking-[0.5em] text-[#E31633] mb-4 font-bold md:hidden" style={{ fontFamily: '"Noto Serif JP", serif' }}>
              スキンケアステップ
            </p>
            <h3 className="text-3xl md:text-5xl font-bold tracking-wider leading-[1.6] mb-8" style={{ fontFamily: '"Noto Serif JP", sans-serif' }}>
              なぜ、この順番なのか。
            </h3>
            <p className="text-sm md:text-base text-white/80 leading-loose tracking-wide md:max-w-2xl text-justify md:text-left">
              肌本来の力を呼び覚ますための、究極の3ステップ。それぞれが明確な理由を持ち、完璧な連携で肌環境を整え、ミトコンドリアのちからを最大限に引き出します。
            </p>
          </div>

          <div className="w-full flex flex-col md:flex-row gap-12 md:gap-8">
            {steps.map((step, idx) => (
              <motion.div 
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, delay: idx * 0.2, ease: "easeOut" }}
                className="flex-1 flex flex-col border border-white/10 bg-[#1A0005]/50 p-8 md:p-12 hover:border-[#E31633]/30 transition-colors duration-500"
              >
                <div className="flex items-end gap-4 mb-8 pb-8 border-b border-[#E31633]/30">
                  <span className="text-5xl md:text-6xl font-black text-[#E31633]/80" style={{ fontFamily: 'Neue Haas Grotesk, sans-serif' }}>{step.num}</span>
                  <span className="text-xl md:text-2xl font-bold tracking-widest text-white mb-1" style={{ fontFamily: '"Noto Serif JP", serif' }}>{step.name}</span>
                </div>
                <h4 className="text-lg md:text-xl font-bold tracking-wide text-white mb-6" style={{ fontFamily: '"Noto Serif JP", serif' }}>
                  {step.title}
                </h4>
                <p className="text-sm leading-[2.2] tracking-wide text-white/70 font-light text-justify">
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
