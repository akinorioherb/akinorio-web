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
          loop 
          muted 
          playsInline 
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,5,7,0.7)_100%)] mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#14070b]" />
      </motion.div>

      {/* 2. Overwhelming Typography & Floating Product */}
      <motion.div 
        style={{ y: textY, opacity: textOpacity }}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 md:px-10"
      >
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <motion.p 
              variants={{
                hidden: { opacity: 0, letterSpacing: '0.1em' },
                visible: { opacity: 1, letterSpacing: '0.4em', transition: { duration: 1.5, delay: 0.5, ease: "easeOut" } }
              }}
              className="mb-6 font-sans text-[10px] md:text-xs uppercase text-[#d4af37]"
            >
              AKINORIO / Luxury Minimal Skincare
            </motion.p>
            
            <h1 className="max-w-3xl flex flex-col gap-4">
              <span className="block font-serif text-3xl md:text-5xl leading-none tracking-[0.08em] font-light md:mb-2" style={{ fontFamily: '"Noto Serif JP", serif' }}>
                <SplitText text="美しさは、引き算から。" delayOffset={0.8} />
              </span>
              <span className="block font-serif text-3xl md:text-5xl tracking-wide leading-tight" style={{ fontFamily: '"Noto Serif JP", serif' }}>
                <SplitText text="纏うほど、研ぎ澄まされる。" delayOffset={1.4} />
              </span>
            </h1>

            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 1.2, delay: 2.8, ease: "easeOut" } }
              }}
              className="mt-8 max-w-xl text-sm leading-8 text-white/80 md:text-base tracking-[0.08em]"
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
              className="mt-12 flex flex-wrap gap-5"
            >
              <a href="https://lin.ee/qF2bQ2v" className="group relative overflow-hidden inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#d4af37] to-[#f3e5ab] px-8 py-4 font-sans text-sm font-medium text-black tracking-widest transition-all hover:scale-[1.03] shadow-[0_10px_40px_rgba(212,175,55,0.25)]">
                <span className="relative z-10 font-bold">14日間の引き算プログラムを始める</span>
                <div className="absolute inset-0 -translate-x-full bg-white/40 transition-transform duration-700 ease-out group-hover:translate-x-0" />
              </a>
            </motion.div>
          </div>

          {/* 3. Floating Product Image */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, filter: 'blur(20px)', scale: 0.9 },
              visible: { opacity: 1, filter: 'blur(0px)', scale: 1, transition: { duration: 2.5, ease: [0.22, 1, 0.36, 1], delay: 1.5 } }
            }}
            className="order-1 flex justify-center lg:order-2"
          >
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
              className="relative w-[85vw] max-w-[650px] mix-blend-lighten"
            >
              <div className="absolute inset-0 rounded-full bg-[#d4af37]/15 blur-[100px]" />
              <div className="relative">
                <Image
                  src="/images/products/allseries.png"
                  alt="AKINORIO all series"
                  width={1200}
                  height={1200}
                  priority
                  className="h-auto w-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,.6)]"
                />
              </div>
            </motion.div>
          </motion.div>
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
