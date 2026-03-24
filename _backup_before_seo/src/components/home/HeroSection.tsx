'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

// SSR hydration error prevention: pseudo-random generator
const pseudoRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

const GoldParticles = () => {
  const particles = Array.from({ length: 60 }).map((_, i) => {
    const startX = pseudoRandom(i) * 100;
    // 画面下部からスタート
    const startY = 110 + pseudoRandom(i + 100) * 20; 
    const endY = -20; 
    // Y軸の上昇（15秒〜35秒）
    const durationY = 15 + pseudoRandom(i + 200) * 20; 
    // ランダムなディレイ（プラス値にして安全にスタートをずらす）
    const delay = pseudoRandom(i + 300) * 15;
    
    // X軸の揺れ（3秒〜7秒）
    const swayWidth = 2 + pseudoRandom(i + 400) * 3; 
    const durationX = 3 + pseudoRandom(i + 500) * 4; 
    
    // 粒子のサイズ（0.5px〜3px）
    const size = 1 + pseudoRandom(i + 600) * 2.5; 
    const opacityMax = 0.4 + pseudoRandom(i + 700) * 0.6;

    return (
      <motion.div
        key={i}
        className="absolute rounded-full bg-[#cfaa70] shadow-[0_0_8px_2px_rgba(207,170,112,0.4)]"
        style={{
          width: size,
          height: size,
          left: `${startX}%`,
          top: 0,
        }}
        initial={{ y: `${startY}vh`, opacity: 0, x: '0%' }}
        animate={{
          y: [`${startY}vh`, `${endY}vh`],
          x: ['0%', `${swayWidth}%`, `-${swayWidth}%`, '0%'],
          opacity: [0, opacityMax, opacityMax, 0]
        }}
        transition={{
          y: { duration: durationY, repeat: Infinity, ease: 'linear', delay },
          x: { duration: durationX, repeat: Infinity, ease: 'easeInOut', delay, repeatType: 'mirror' },
          opacity: { duration: durationY, repeat: Infinity, ease: 'linear', delay }
        }}
      />
    );
  });

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-hidden mix-blend-screen">
      {/* Soft glowing ambient orbs */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] rounded-full bg-gradient-to-r from-[#cfaa70]/20 to-transparent blur-[60px]"
        animate={{ opacity: [0, 0.4, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/3 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[20vw] h-[20vw] rounded-full bg-[#cfaa70]/10 blur-[50px]"
        animate={{ opacity: [0, 0.3, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, delay: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {particles}
    </div>
  );
};

export default function HeroSection() {
  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Keep subtle parallax effect for the background without needing extra section height
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);

  return (
    <section ref={containerRef} className="relative w-full h-[100dvh] bg-[#1A0005] z-0 overflow-hidden">
      
      {/* Background Image Layer */}
      <motion.div 
        style={{ scale, opacity }}
        className="absolute inset-0 w-full h-full transform-gpu overflow-hidden"
      >
        {/* Base background color to safely blend with the faded edges */}
        <div className="absolute inset-0 bg-[#3D010A]" />

        <motion.div 
          className="absolute inset-0 w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          style={{ 
            transformOrigin: 'center center', 
            scale: 1.1,
            // Mask the hard edges into a smooth circle so corners never show
            maskImage: 'radial-gradient(circle at center, black 50%, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 50%, transparent 85%)'
          }}
        >
          <Image
            src="/images/hero_bg.png"
            alt="AKINORIO Signature Crimson"
            fill
            className="object-cover object-center"
            priority
            quality={100}
          />
        </motion.div>

        {/* Deep crimson gradient from left and bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#7C0114]/90 via-[#94081F]/40 to-transparent opacity-80 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#7C0114] via-transparent to-transparent opacity-90 pointer-events-none" />
      </motion.div>

      {/* Dancing Gold Particles */}
      <GoldParticles />

      {/* Hero Typography Layer */}
      <div className="relative z-20 w-full h-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-start justify-center pointer-events-none">
        
        <div className="max-w-4xl mt-[-5vh]">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-[5rem] font-bold tracking-widest text-white mb-8 md:mb-12 leading-[1.3] drop-shadow-2xl"
            style={{ fontFamily: '"Noto Serif JP", serif' }}
          >
            引き算の美学。<br/>本来の美しさ。
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
            className="text-xl md:text-3xl lg:text-4xl text-white font-medium tracking-widest leading-relaxed whitespace-nowrap drop-shadow-lg"
            style={{ fontFamily: '"Noto Serif JP", serif' }}
          >
            手放すほどに、<br className="md:hidden" />研ぎ澄まされる。
          </motion.h2>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
        className="absolute bottom-6 md:bottom-12 left-6 md:left-12 z-30 flex flex-col items-center gap-4"
      >
        <motion.div 
          animate={{ height: ['0%', '100%'], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-[1px] h-12 md:h-16 bg-white transform origin-top drop-shadow-lg opacity-60" 
        />
      </motion.div>

    </section>
  );
}
