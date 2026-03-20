'use client';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const SplitText = ({ text, delayOffset = 0 }: { text: string, delayOffset?: number }) => {
  return (
    <span className="inline-block">
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, filter: 'blur(12px)', y: 20 },
            visible: { 
              opacity: 1, 
              filter: 'blur(0px)', 
              y: 0, 
              transition: { 
                duration: 1.2, 
                ease: [0.22, 1, 0.36, 1],
                delay: delayOffset + i * 0.08
              } 
            }
          }}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

export default function HeroSection() {
  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  
  // Parallax effects tied to true scroll position
  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-[#0a0507] text-white">
      {/* 1. Immersive Video Background with Parallax */}
      <motion.div 
        style={{ y: videoY, scale: videoScale }} 
        className="absolute inset-0 z-0 h-[110%] w-[110%] -left-[5%] -top-[5%]"
      >
        <video 
          src="/videos/hero.mp4" 
          autoPlay 
          muted 
          playsInline 
          className="h-full w-full object-cover opacity-60"
          onEnded={(e) => {
            // Keep the video paused at the last frame
            e.currentTarget.pause();
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,5,7,0.7)_100%)] mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#14070b]" />
        
        {/* Soft Golden Particles (Fireflies) */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 24 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: `${Math.random() * 100}vw`, 
                y: `${Math.random() * 100 + 100}vh`,
                opacity: 0,
                scale: Math.random() * 0.5 + 0.5
              }}
              animate={{
                y: `-${Math.random() * 50 + 20}vh`,
                opacity: [0, Math.random() * 0.5 + 0.2, 0],
                x: `${Math.random() * 80 + 10}vw`
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                delay: Math.random() * 10,
                ease: "linear"
              }}
              className="absolute h-1.5 w-1.5 rounded-full bg-[#d4af37] blur-[2px]"
              style={{
                boxShadow: '0 0 15px 4px rgba(212,175,55,0.4)',
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* 2. Overwhelming Typography & Floating Product */}
      <motion.div 
        style={{ y: textY, opacity: textOpacity }}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 md:px-10"
      >
        <div className="flex w-full flex-col items-center justify-center text-center mt-[-5%]">
          <div className="flex flex-col items-center justify-center">
            <motion.p 
              variants={{
                hidden: { opacity: 0, letterSpacing: '0.1em' },
                visible: { opacity: 1, letterSpacing: '0.4em', transition: { duration: 1.5, delay: 0.5, ease: "easeOut" } }
              }}
              className="mb-8 font-sans text-[10px] md:text-xs uppercase text-[#d4af37]"
            >
              AKINORIO / Luxury Minimal Skincare
            </motion.p>
            
            <h1 className="flex flex-col gap-6 md:gap-8 items-center justify-center">
              <span className="block font-serif text-3xl md:text-5xl lg:text-6xl leading-normal tracking-[0.08em] font-light" style={{ fontFamily: '"Noto Serif JP", serif' }}>
                <SplitText text="美しさは、引き算から。" delayOffset={0.8} />
              </span>
              <span className="block font-serif text-3xl md:text-5xl lg:text-6xl tracking-[0.08em] leading-normal font-light" style={{ fontFamily: '"Noto Serif JP", serif' }}>
                <SplitText text="手放すほどに、研ぎ澄まされる。" delayOffset={1.4} />
              </span>
            </h1>

            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 1.2, delay: 2.8, ease: "easeOut" } }
              }}
              className="mt-12 max-w-2xl text-sm leading-10 text-white/80 md:text-base tracking-[0.1em]"
              style={{ fontFamily: '"Noto Serif JP", serif' }}
            >
              余計なものを重ねない。必要なものだけを、静かに深く届ける。<br />
              引き算という、美しさの答え。
            </motion.p>

            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 1.2, delay: 3.2, ease: "easeOut" } }
              }}
              className="mt-16 flex justify-center"
            >
              <a href="https://lin.ee/qF2bQ2v" className="group relative overflow-hidden inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#d4af37] to-[#f3e5ab] px-10 py-5 font-sans text-sm font-bold text-black tracking-widest transition-all hover:scale-[1.03] shadow-[0_10px_40px_rgba(212,175,55,0.25)]">
                <span className="relative z-10">14日間の引き算プログラムを始める</span>
                <div className="absolute inset-0 -translate-x-full bg-white/40 transition-transform duration-700 ease-out group-hover:translate-x-0" />
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* 4. Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5, duration: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
      >
        <span className="text-[9px] tracking-[0.4em] text-white/50 uppercase font-sans">Scroll</span>
        <div className="h-[60px] w-[1px] bg-white/10 relative overflow-hidden">
          <motion.div 
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d4af37] to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
