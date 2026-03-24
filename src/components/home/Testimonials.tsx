'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/i18n';

export default function Testimonials() {
  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });
  const headerY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const { lang } = useLanguage();
  const t = translations[lang].testimonials;
  const isEn = lang === 'en';
  const bodyFont = isEn ? 'var(--font-luxury-en)' : '"Noto Serif JP", serif';

  return (
    <section id="reviews" ref={containerRef} className="relative w-full h-[100dvh] overflow-hidden bg-gradient-to-b from-[#1A0005] to-[#2A040B] text-white flex items-center z-10 border-t border-[#E31633]/20">

      <div className="relative z-10 w-full mx-auto max-w-[1400px] px-6 md:px-12 flex flex-col md:flex-row gap-12 lg:gap-24 h-full md:h-[80vh] items-center justify-center pt-24 pb-8 md:py-0">

        {/* Title Column */}
        <div className="w-full md:w-1/3 flex flex-col items-start text-left z-20">
          <p className="text-[10px] md:text-xs tracking-[0.5em] text-[#E31633] mb-4 font-bold"
            style={{ fontFamily: isEn ? 'var(--font-luxury-en)' : '"Noto Serif JP", serif' }}>
            {t.label}
          </p>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider leading-[1.6]"
            style={{ fontFamily: bodyFont, fontWeight: isEn ? 300 : 700, letterSpacing: isEn ? '0.02em' : undefined }}>
            {t.sectionTitle}
          </h3>
          <div className="w-12 h-[1px] bg-[#E31633]/50 mt-8 hidden md:block" />
        </div>

        {/* Scrollable Testimonials List Column */}
        <div
          className="w-full md:w-2/3 h-full max-h-[60vh] md:max-h-[80vh] flex flex-col space-y-6 overflow-y-auto pr-2 md:pr-6"
          style={{ scrollbarWidth: 'thin', scrollbarColor: '#E31633 transparent' }}
        >
          {t.items.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.0, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="w-full flex flex-col bg-white/[0.02] border border-white/5 p-8 hover:border-[#E31633]/30 hover:bg-[#1A0005]/80 transition-all duration-500 rounded-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4 border-b border-white/10 pb-4">
                <span className="text-xl md:text-2xl text-[#fdfbf7] font-bold tracking-widest"
                  style={{ fontFamily: isEn ? 'var(--font-luxury-en)' : '"Noto Serif JP", serif', fontStyle: isEn ? 'italic' : 'normal', fontWeight: isEn ? 400 : 700 }}>
                  {testimonial.name}
                </span>
                <div className="flex items-center gap-3 text-[10px] md:text-xs text-white/50 tracking-widest font-light uppercase">
                  <span>{isEn ? `Age ${testimonial.age}` : testimonial.age}</span>
                  <span className="w-[3px] h-[3px] bg-[#E31633] rounded-full" />
                  <span>{t.durationLabel} {testimonial.duration}</span>
                </div>
              </div>

              <div className="w-full flex flex-col space-y-4">
                <h4 className="text-lg md:text-xl text-[#fdfbf7] font-bold tracking-wide leading-relaxed"
                  style={{ fontFamily: bodyFont, fontWeight: isEn ? 400 : 700, fontStyle: isEn ? 'italic' : 'normal' }}>
                  &ldquo;{testimonial.title}&rdquo;
                </h4>
                <p className="text-sm leading-[2.2] text-white/70 font-light tracking-wide text-justify"
                  style={{ fontFamily: bodyFont, letterSpacing: isEn ? '0.02em' : undefined }}>
                  {testimonial.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
