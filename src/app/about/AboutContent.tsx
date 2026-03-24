'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { LINE_URL } from '@/lib/constants';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/i18n';

export default function AboutContent() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const { lang } = useLanguage();
  const t = translations[lang].about;
  const isEn = lang === 'en';
  const bodyFont = isEn ? 'var(--font-luxury-en)' : '"Noto Serif JP", serif';

  const renderTitle = (text: string, fontSize = "95") => {
    if (isEn) {
      const fs = parseInt(fontSize);
      const scale = fs / 95;
      return (
        <p className="drop-shadow-2xl text-[#fdfbf7] text-center" style={{
          fontFamily: 'var(--font-luxury-en)',
          fontSize: `clamp(${Math.max(1.4, 2 * scale)}rem, ${4 * scale}vw, ${4 * scale}rem)`,
          fontWeight: 300,
          letterSpacing: '0.03em',
          lineHeight: 1.25,
          whiteSpace: 'pre-line',
        }}>{text}</p>
      );
    }
    const textLength = text.length;
    const width = Math.max(textLength * parseInt(fontSize) * 1.1, 400);
    return (
      <svg
        width="100%"
        viewBox={`0 0 ${width} 120`}
        preserveAspectRatio="xMidYMid meet"
        className="drop-shadow-2xl overflow-visible mx-auto"
      >
        <text
          x="50%" y="50%"
          textAnchor="middle" dominantBaseline="central"
          fill="#fdfbf7" fontWeight="bold"
          fontFamily='"Noto Serif JP", serif'
          letterSpacing="0.05em" fontSize={fontSize}
        >
          {text}
        </text>
      </svg>
    );
  };

  return (
    <main className="relative w-full min-h-screen bg-[#1A0005] overflow-hidden text-white">

      {/* Fixed Background with Parallax */}
      <motion.div
        className="fixed inset-0 w-full h-full z-0 pointer-events-none"
        style={{ y: yBg }}
      >
        <Image
          src="/images/products-bg-hik/allseries_fine.png"
          alt="AKINORIO 全シリーズ — 引き算のスキンケア"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A0005]/80 via-[#3D010A]/60 to-[#1A0005]/95 z-10" />
      </motion.div>

      <div className="relative z-10 flex flex-col w-full">

        {/* --- Hero Section --- */}
        <section className="relative w-full h-[80vh] flex flex-col items-center justify-center px-6 md:px-12 pt-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full max-w-5xl"
          >
            <p className="font-sans text-[10px] md:text-xs tracking-[0.5em] text-[#E31633] uppercase mb-8 font-bold">
              {t.heroLabel}
            </p>
            <h1 className="sr-only">{t.heroTitle} — AKINORIO Brand Story</h1>
            <div className="w-full relative px-4 md:px-0" aria-hidden="true">
              {renderTitle(t.heroTitle, "95")}
            </div>
          </motion.div>
        </section>

        {/* --- Founder Story --- */}
        <section className="relative w-full py-24 md:py-32 border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="mx-auto max-w-4xl px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2 }}
              className="text-center mb-16"
            >
              <p className="font-sans text-[10px] md:text-xs tracking-[0.5em] text-[#E31633] uppercase mb-6 font-bold">
                {t.founderLabel}
              </p>
              <div aria-hidden="true">{renderTitle(t.founderTitle, "80")}</div>
              <h2 className="sr-only">{t.founderTitle}</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="space-y-10 text-sm md:text-base leading-[2.5] text-white/80 text-justify"
              style={{ fontFamily: bodyFont, letterSpacing: isEn ? '0.02em' : '0.1em' }}
            >
              {t.founderParagraphs.slice(0, 4).map((p, i) => <p key={i}>{p}</p>)}
              <p className="text-[#fdfbf7] font-bold text-lg text-center mt-12 block">
                {t.founderParagraphs[4]}
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- Philosophy --- */}
        <section className="relative w-full py-24 md:py-32 border-t border-white/10 bg-[#7C0114]/10">
          <div className="mx-auto max-w-4xl px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2 }}
              className="text-center mb-16"
            >
              <p className="font-sans text-[10px] md:text-xs tracking-[0.5em] text-[#E31633] uppercase mb-6 font-bold">
                {t.philosophyLabel}
              </p>
              <div aria-hidden="true">{renderTitle(t.philosophyTitle, "70")}</div>
              <h2 className="sr-only">{t.philosophyTitle}</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="space-y-10 text-sm md:text-base leading-[2.5] text-white/80 text-justify"
              style={{ fontFamily: bodyFont, letterSpacing: isEn ? '0.02em' : '0.1em' }}
            >
              {t.philosophyParagraphs.slice(0, 3).map((p, i) => <p key={i}>{p}</p>)}
              <p className="text-[#fdfbf7] font-bold">{t.philosophyParagraphs[3]}</p>
            </motion.div>
          </div>
        </section>

        {/* --- Our Way --- */}
        <section className="relative w-full py-24 md:py-32 border-t border-white/10 bg-black/40 backdrop-blur-md">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2 }}
              className="text-center mb-16"
            >
              <p className="font-sans text-[10px] md:text-xs tracking-[0.5em] text-[#E31633] uppercase mb-6 font-bold">
                {t.ourWayLabel}
              </p>
              <div aria-hidden="true">{renderTitle(t.ourWayTitle, "90")}</div>
              <h2 className="sr-only">{t.ourWayTitle}</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.1 }}
              className="max-w-3xl mx-auto space-y-8 text-sm md:text-base leading-[2.2] text-white/80 text-center mb-24"
              style={{ fontFamily: bodyFont, letterSpacing: isEn ? '0.02em' : '0.1em' }}
            >
              {t.ourWayParagraphs.map((p, i) => <p key={i}>{p}</p>)}
            </motion.div>

            {/* Key points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
              {t.features.map((point, idx) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: idx * 0.15 }}
                  className="bg-[#1A0005]/60 border border-white/5 p-8 md:p-12 hover:border-[#E31633]/30 transition-colors duration-500"
                >
                  <h3 className="text-xl md:text-2xl text-[#fdfbf7] mb-4 font-bold tracking-widest"
                    style={{ fontFamily: bodyFont, fontWeight: isEn ? 300 : 700, letterSpacing: isEn ? '0.04em' : undefined }}>
                    {point.title}
                  </h3>
                  <div className="w-8 h-[1px] bg-[#E31633] mb-6" />
                  <p className="text-sm leading-relaxed text-white/70 text-justify"
                    style={{ fontFamily: bodyFont, letterSpacing: isEn ? '0.02em' : '0.05em' }}>
                    {point.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CTA --- */}
        <section className="relative w-full py-32 border-t border-white/20 bg-[#3D010A]/80 backdrop-blur-sm">
          <div className="mx-auto max-w-4xl px-6 md:px-12 text-center flex flex-col items-center">

            <div className="w-full max-w-3xl mb-12">
              <div aria-hidden="true">
                {renderTitle(t.ctaSvg1, "80")}
                <div className="h-4" />
                {renderTitle(t.ctaSvg2, "80")}
              </div>
              <h2 className="sr-only">{t.ctaSvg1}{t.ctaSvg2}</h2>
            </div>

            {t.ctaSubline && (
              <p className="text-base tracking-[0.3em] text-white/60 mb-16 capitalize" style={{ fontFamily: 'Neue Haas Grotesk, sans-serif' }}>
                {t.ctaSubline}
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-2xl px-4">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden flex-1 flex items-center justify-center bg-[#E31633] text-white py-5 px-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(227,22,51,0.5)]"
              >
                <span className="text-sm font-bold tracking-[0.2em] relative z-10"
                  style={{ fontFamily: isEn ? 'var(--font-luxury-en)' : '"Noto Serif JP", sans-serif' }}>
                  {t.ctaBtn1}
                </span>
                <div className="absolute inset-0 bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0" />
                <span className="absolute inset-0 flex items-center justify-center text-[#1A0005] py-5 px-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 delay-100">
                  <span className="text-sm font-bold tracking-[0.2em]"
                    style={{ fontFamily: isEn ? 'var(--font-luxury-en)' : '"Noto Serif JP", sans-serif' }}>
                    {t.ctaBtn1}
                  </span>
                </span>
              </a>

              <a
                href="/products"
                className="group flex-1 flex items-center justify-center bg-transparent border border-white/30 text-white py-5 px-8 hover:bg-white hover:text-[#1A0005] transition-all duration-300"
              >
                <span className="text-sm font-bold tracking-[0.2em]"
                  style={{ fontFamily: isEn ? 'var(--font-luxury-en)' : '"Noto Serif JP", sans-serif' }}>
                  {t.ctaBtn2}
                </span>
              </a>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
