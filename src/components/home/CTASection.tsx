'use client';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

function AnimatedCounter({ end, duration = 2, prefix = "", suffix = "" }: { end: number, duration?: number, prefix?: string, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (inView) {
      let startTime: number;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

export default function CTASection() {
  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  return (
    <section ref={containerRef} className="relative w-full overflow-hidden bg-[#050203] text-white py-32 md:py-48">
      {/* Deep Red/Gold Core Glow */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0 opacity-40 pointer-events-none mix-blend-screen flex items-center justify-center">
        <div className="absolute h-[600px] w-[600px] rounded-full bg-[#c40234]/10 blur-[150px]" />
        <div className="absolute h-[400px] w-[400px] rounded-full bg-[#d4af37]/15 blur-[120px]" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-12 flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-center"
        >
          <p className="text-[10px] md:text-xs uppercase tracking-[0.6em] text-[#d4af37] mb-8 font-sans">
            14 Days Program
          </p>
          <h2 className="text-4xl md:text-7xl font-light tracking-wide text-white leading-tight" style={{ fontFamily: '"Noto Serif JP", Cinzel, serif' }}>
            まずは、14日間。<br/>
            肌と感覚の余白を<br className="md:hidden" />取り戻す体験へ。
          </h2>
          <p className="mt-10 text-sm md:text-base leading-loose tracking-widest text-white/60 font-light">
            引き算のスキンケアを、あなたの肌で体験してください。<br/>
            覚悟のある方だけに、この先を。
          </p>
        </motion.div>

        {/* Counter Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mt-24 mb-24 w-full max-w-4xl"
        >
          <div className="flex flex-col items-center justify-center py-10 border-t border-b border-white/10 md:border-transparent md:border-t-0 md:border-b-0">
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-sans mb-4">Days</p>
            <p className="text-6xl md:text-7xl text-[#d4af37] font-light" style={{ fontFamily: 'Cinzel, serif' }}>
              <AnimatedCounter end={14} />
            </p>
          </div>
          <div className="flex flex-col items-center justify-center py-10 border-b border-white/10 md:border-transparent md:border-b-0 md:border-l md:border-r">
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-sans mb-4">Steps</p>
            <p className="text-6xl md:text-7xl text-[#d4af37] font-light" style={{ fontFamily: 'Cinzel, serif' }}>
              <AnimatedCounter end={3} />
            </p>
          </div>
          <div className="flex flex-col items-center justify-center py-10">
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-sans mb-4">Clarity</p>
            <p className="text-6xl md:text-7xl text-[#d4af37] font-light" style={{ fontFamily: 'Cinzel, serif' }}>
              <AnimatedCounter end={100} suffix="%" />
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
        >
          <a
            href="https://lin.ee/qF2bQ2v"
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-transparent via-[#d4af37]/10 to-transparent border border-[#d4af37]/50 px-10 py-5 transition-all hover:scale-[1.02] hover:border-[#d4af37] hover:bg-[#d4af37]/20 shadow-[0_0_40px_rgba(212,175,55,0.1)] hover:shadow-[0_0_60px_rgba(212,175,55,0.3)]"
          >
            <span className="relative z-10 text-sm font-light text-white tracking-[0.2em]">14日間の引き算プログラムを始める</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[150%]" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
