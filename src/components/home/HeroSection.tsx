'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // HIK-style smooth fading and scaling
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);
  
  // Parallax the text up at a different speed than the scroll
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '150%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[150vh] bg-[#94081F] z-0 truncate overflow-x-hidden">
      
      {/* Sticky Container - Stays pinned while scrolling through the 150vh height */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
        
        {/* Massive High-End Generated Image */}
        <motion.div 
          style={{ scale, opacity }}
          className="absolute inset-0 w-full h-full transform-gpu"
        >
          <Image
            src="/images/hero_bg.png"
            alt="AKINORIO Signature Crimson"
            fill
            className="object-cover object-center"
            priority
            quality={100}
          />
          {/* Deep crimson gradient from left and bottom for text readability and HIK contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#7C0114]/90 via-[#94081F]/40 to-transparent opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#7C0114] via-transparent to-transparent opacity-90" />
        </motion.div>

        {/* HIK style dramatic typography overlay: STRICT Left Alignment per Guidelines */}
        <motion.div 
          style={{ y: textY, opacity: textOpacity }}
          className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-start justify-center"
        >
          <div className="max-w-3xl mt-[-5%]">
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="text-6xl md:text-8xl lg:text-[8rem] font-black tracking-tighter text-white mb-8 uppercase leading-[0.9]"
              style={{ fontFamily: 'Neue Haas Grotesk, Helvetica Neue, sans-serif' }}
            >
              Subtract<br/>The<br/>Excess.
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
              className="text-2xl md:text-3xl lg:text-4xl text-white font-medium tracking-widest leading-relaxed whitespace-nowrap"
              style={{ fontFamily: '"Noto Serif JP", serif' }}
            >
              手放すほどに、<br className="md:hidden" />研ぎ澄まされる。
            </motion.h2>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="absolute bottom-12 left-6 md:left-12 z-20"
        >
          <div className="flex flex-col items-center gap-4">
            <span className="text-[10px] tracking-[0.4em] font-sans text-white/50 uppercase" style={{ writingMode: 'vertical-rl' }}>SCROLL</span>
            <motion.div 
              animate={{ height: ['0%', '100%'], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-[1px] h-16 bg-white transform origin-top" 
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
