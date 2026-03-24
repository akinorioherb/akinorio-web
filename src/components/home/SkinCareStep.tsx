'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/i18n';

const STEP_IMAGES = [
  "/images/products/herb.png",
  "/images/products/mitochondria.png",
  "/images/products/kihada.png",
];

export default function SkinCareStep() {
  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });
  const headerY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const { lang } = useLanguage();
  const t = translations[lang].skinCareStep;
  const isEn = lang === 'en';
  const bodyFont = isEn ? 'var(--font-luxury-en)' : '"Noto Serif JP", serif';

  return (
    <section id="skincare-step" ref={containerRef} className="relative w-full overflow-hidden bg-[#2A0005] text-white py-32 md:py-48 z-10 border-t border-[#3D010A]">
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12 flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
        
        {/* Title Area */}
        <div className="w-full lg:w-1/4 flex flex-col items-start lg:sticky lg:top-32 z-20">
          <h2
            className="text-4xl md:text-5xl font-black tracking-widest text-[#E31633] lg:writing-vertical-rl pb-8 lg:pb-0"
            style={{ fontFamily: isEn ? 'var(--font-luxury-en)' : '"Noto Serif JP", serif', writingMode: 'horizontal-tb', fontWeight: isEn ? 300 : 900, fontSize: isEn ? 'clamp(1.5rem, 2.5vw, 2.2rem)' : undefined, letterSpacing: isEn ? '0.06em' : undefined, lineHeight: isEn ? 1.5 : undefined }}
          >
            {t.sectionTitle}
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
            <p className="text-[10px] md:text-xs tracking-[0.5em] text-[#E31633] mb-4 font-bold"
              style={{ fontFamily: isEn ? 'var(--font-luxury-en)' : '"Noto Serif JP", serif' }}>
              {t.label}
            </p>
            <h3 className="text-3xl md:text-5xl font-bold tracking-wider leading-[1.6] mb-8"
              style={{ fontFamily: bodyFont, fontWeight: isEn ? 300 : 700, letterSpacing: isEn ? '0.01em' : undefined }}>
              {t.headline}
            </h3>
            <p className="text-sm md:text-base text-white/80 leading-loose tracking-wide md:max-w-2xl text-justify md:text-left"
              style={{ fontFamily: bodyFont, letterSpacing: isEn ? '0.02em' : undefined }}>
              {t.body}
            </p>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {t.steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, delay: idx * 0.2, ease: "easeOut" }}
                className="flex flex-col border border-white/10 bg-[#1A0005]/50 p-6 hover:border-[#E31633]/30 transition-all duration-500 overflow-hidden relative group h-full"
              >
                {/* Product Image */}
                <div className="relative w-full aspect-[4/5] max-w-[200px] mx-auto mb-8 transform group-hover:scale-105 transition-transform duration-700 bg-white/5 rounded flex items-center justify-center p-4">
                  <Image src={STEP_IMAGES[idx]} alt={step.name} fill className="object-contain drop-shadow-xl" />
                </div>

                <div className="flex flex-col items-start mb-6 pb-6 border-b border-[#E31633]/30">
                  <span className="text-4xl md:text-5xl font-black text-[#E31633]/80 mb-2" style={{ fontFamily: 'Neue Haas Grotesk, sans-serif' }}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="text-lg md:text-xl font-bold tracking-widest text-[#fdfbf7]"
                    style={{ fontFamily: bodyFont, fontWeight: isEn ? 400 : 700, letterSpacing: isEn ? '0.03em' : undefined, whiteSpace: isEn ? 'normal' : 'nowrap' }}>
                    {step.name}
                  </span>
                </div>
                <h4 className="text-base md:text-lg font-bold tracking-wide text-white mb-4 leading-relaxed"
                  style={{ fontFamily: bodyFont, fontWeight: isEn ? 300 : 700, fontStyle: isEn ? 'italic' : 'normal' }}>
                  {step.title}
                </h4>
                <p className="text-[13px] leading-[2.2] tracking-wide text-white/70 font-light text-justify mt-auto"
                  style={{ fontFamily: bodyFont }}>
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
