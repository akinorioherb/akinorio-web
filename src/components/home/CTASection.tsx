'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/i18n';

// Counter component for dramatic number reveal
const AnimatedCounter = ({ end, duration = 2 }: { end: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let startTimestamp: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      // easeOutQuart curve
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span ref={nodeRef}>{count}</span>;
};

export default function CTASection() {
  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });
  const headerY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const { lang } = useLanguage();
  const t = translations[lang].cta;
  const isEn = lang === 'en';
  const bodyFont = isEn ? 'var(--font-luxury-en)' : '"Noto Serif JP", serif';

  return (
    <section id="cta" ref={containerRef} className="relative w-full overflow-hidden bg-gradient-to-t from-[#120002] to-[#1A0005] text-white py-32 md:py-48 z-10">
      
      {/* Background visual element */}
      <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-20 z-0 select-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E31633] rounded-full blur-[250px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12 flex flex-col md:flex-row gap-16 md:gap-24 items-start">
        
        {/* Vertical Title Indicator */}
        <motion.div style={{ y: headerY }} className="hidden md:flex flex-col items-center sticky top-32 mt-12">
          <h2
            className="text-3xl md:text-4xl lg:text-4xl font-black tracking-[0.4em] text-[#E31633] opacity-80"
            style={{ writingMode: 'vertical-rl', fontFamily: bodyFont, fontWeight: isEn ? 300 : 900, letterSpacing: isEn ? '0.1em' : '0.4em' }}
          >
            {t.verticalLabel}
          </h2>
        </motion.div>

        {/* Content Area */}
        <div className="flex-1 w-full flex flex-col items-start text-left">

          <div className="mb-16 md:mb-24 w-full">
            <p className="text-[10px] md:text-xs tracking-[0.5em] text-[#E31633] mb-6 font-bold md:hidden"
              style={{ fontFamily: bodyFont }}>
              {t.mobileLabel}
            </p>
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter leading-[1.3] text-white"
              style={{ fontFamily: bodyFont, whiteSpace: 'pre-line', fontWeight: isEn ? 300 : 300, letterSpacing: isEn ? '0.01em' : undefined }}>
              {t.headline}
            </h3>
          </div>

          <div className="flex flex-col md:flex-row gap-16 md:gap-32 w-full lg:items-center">
            
            {/* Left: Metrics & Counter */}
            <div className="w-full md:w-auto flex flex-col flex-shrink-0">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="flex flex-row md:flex-col items-center md:items-start justify-between w-full"
              >
                <div className="flex flex-col text-left">
                  <span className="text-[11px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#E31633] md:text-white/50 mb-1 font-mono font-bold">
                    {t.repeatRateLabel}
                  </span>
                  <span className="text-[9px] text-white/40 tracking-wider hidden md:block mt-6">
                    {t.repeatNote}
                  </span>
                </div>
                
                <div className="flex flex-col items-end md:items-start">
                  <span className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter" style={{ fontFamily: 'Neue Haas Grotesk, sans-serif' }}>
                    <AnimatedCounter end={90} />%<span className="text-2xl md:text-3xl font-light ml-1">+</span>
                  </span>
                  <span className="text-[9px] text-white/40 tracking-wider md:hidden mt-2">
                    {t.repeatNote}
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Right: Action Box (Refined for Mobile) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="w-full max-w-lg mx-auto md:mx-0 bg-gradient-to-br from-[#2A0005] to-[#120002] p-8 md:p-12 relative overflow-hidden group border border-[#E31633]/30 hover:border-[#E31633]/60 transition-colors duration-500 rounded-2xl shadow-2xl"
            >
              {/* Subtle hover gleam */}
              <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg] group-hover:left-[200%] transition-all duration-1000 ease-in-out" />

              <h4 className="text-xl md:text-3xl text-white font-bold tracking-widest mb-6"
                style={{ fontFamily: bodyFont, fontWeight: isEn ? 300 : 700, letterSpacing: isEn ? '0.04em' : undefined }}>
                {t.program.title}
              </h4>
              <p className="text-[13px] md:text-[15px] text-white/90 leading-loose tracking-wider mb-10 text-left"
                style={{ fontFamily: bodyFont }}>
                <span className="font-bold text-[#fdfbf7] block mb-2 tracking-[0.1em]">{t.program.subhead}</span>
                <span style={{ whiteSpace: 'pre-line' }}>{t.program.body}</span>
              </p>

              {/* Gold CTA Button */}
              <div className="relative w-full group">
                {/* 背後のパルスグロー */}
                <motion.div
                  className="absolute inset-0 rounded-lg pointer-events-none"
                  animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.03, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ boxShadow: '0 0 32px 10px rgba(207,170,112,0.45)' }}
                />

                <motion.button
                  whileHover={{ filter: 'brightness(1.12)', boxShadow: '0 6px 36px rgba(212,175,55,0.75)' }}
                  whileTap={{ scale: 0.98 }}
                  className="relative overflow-hidden w-full py-5 md:py-5 px-6 md:px-8 flex items-center justify-between rounded-lg"
                  style={{
                    background: 'linear-gradient(135deg, #b8873a 0%, #d4af61 28%, #f0dc98 50%, #cfaa70 72%, #9e7030 100%)',
                    boxShadow: '0 4px 28px rgba(207,170,112,0.55), inset 0 1px 0 rgba(255,255,255,0.35)',
                  }}
                >
                  {/* シマー（光の筋が流れる） */}
                  <motion.div
                    className="absolute top-0 w-[45%] h-full pointer-events-none"
                    style={{
                      background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.45) 50%, transparent 100%)',
                      skewX: '-20deg',
                    }}
                    animate={{ left: ['-55%', '165%'] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.8 }}
                  />

                  <span
                    className="text-[14px] md:text-[15px] font-bold tracking-[0.18em] relative z-10 text-[#120002]"
                    style={{ fontFamily: isEn ? 'var(--font-luxury-en)' : '"Noto Serif JP", sans-serif', letterSpacing: isEn ? '0.12em' : '0.18em' }}
                  >
                    {t.program.button}
                  </span>

                  <motion.svg
                    className="w-5 h-5 md:w-6 md:h-6 relative z-10 text-[#120002]"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </motion.svg>
                </motion.button>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
