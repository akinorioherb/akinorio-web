'use client';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/i18n';

export default function BrandStory() {
  const { lang } = useLanguage();
  const t = translations[lang].brandStory;
  const isEn = lang === 'en';
  const bodyFont = isEn ? 'var(--font-luxury-en)' : '"Noto Serif JP", serif';
  const bodyTracking = isEn ? '0.02em' : '0.1em';

  return (
    <section 
      id="story" 
      className="relative w-full min-h-screen text-white z-10 bg-[#7C0114]"
      style={{ 
        fontFamily: '"Noto Serif JP", "Hiragino Mincho ProN", serif',
        clipPath: 'inset(0 0 0 0)' 
      }}
    >
      
      {/* 
        Background Layer: Fixed Crimson Gradient
      */}
      <style dangerouslySetInnerHTML={{__html: `
        .brand-story-bg::before {
          content: "";
          position: fixed;
          top: 0; left: 0;
          width: 100vw; height: 100vh;
          z-index: 0;
          background-image: linear-gradient(135deg, rgba(165,29,48,0.85) 0%, rgba(124,1,20,0.95) 100%);
          will-change: transform;
        }
      `}} />
      <div className="brand-story-bg" />

      {/* CEO Photo Layer: Fixed Background */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden opacity-60 md:opacity-90 md:left-auto md:w-[55%]">
        <div className="absolute inset-0 h-full w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/images/minakoceo.png" 
            alt="Founder Minako" 
            className="w-full h-full object-cover object-[center_top] md:object-[right_top]"
          />
        </div>
        {/* Mobile: Full-screen semi-transparent overlay for readability. Desktop: L-to-R gradient. */}
        <div className="absolute inset-0 bg-[#7C0114]/60 md:hidden" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#7C0114] via-[#7C0114]/40 to-transparent hidden md:block" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start relative">
        
        {/* Sticky Title Column */}
        <div className="w-full md:w-[45%] md:sticky md:top-[15vh] h-auto md:h-screen flex flex-col justify-start pt-24 md:pt-[10vh] z-20 pb-16 md:pb-0">
          <motion.div
             initial={{ opacity: 0, y: 30 }} 
             whileInView={{ opacity: 1, y: 0 }} 
             viewport={{ once: true, margin: "-100px" }} 
             transition={{ duration: 1 }}
             className="mb-8"
          >
            <span className="text-[11px] font-bold tracking-[0.4em] text-[#E31633] uppercase font-sans">
              Brand Story
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.1 }}
            className="w-full max-w-[520px] drop-shadow-2xl relative"
          >
            {isEn ? (
              <div className="flex flex-col gap-2">
                {t.svgLines.map((line, i) => (
                  <p
                    key={i}
                    className="text-[#fdfbf7] leading-tight"
                    style={{
                      fontFamily: 'var(--font-luxury-en)',
                      fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                      fontWeight: i === t.svgLines.length - 1 ? 600 : 300,
                      fontStyle: i % 2 === 1 ? 'italic' : 'normal',
                      letterSpacing: '0.01em',
                      filter: 'drop-shadow(0px 4px 12px rgba(0,0,0,0.6))',
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            ) : (
              <svg
                width="100%"
                viewBox="0 0 480 320"
                preserveAspectRatio="xMinYMin meet"
                className="overflow-visible"
              >
                <text x="0" y="48" fill="#fdfbf7" fontWeight="bold" fontFamily='"Noto Serif JP", serif' letterSpacing="0.05em" fontSize="48">{t.svgLines[0]}</text>
                <text x="0" y="128" fill="#fdfbf7" fontWeight="bold" fontFamily='"Noto Serif JP", serif' letterSpacing="0.05em" fontSize="48">{t.svgLines[1]}</text>
                <text x="0" y="208" fill="#fdfbf7" fontWeight="bold" fontFamily='"Noto Serif JP", serif' letterSpacing="0.05em" fontSize="48">{t.svgLines[2]}</text>
                <text x="0" y="288" fill="#fdfbf7" fontWeight="bold" fontFamily='"Noto Serif JP", serif' letterSpacing="0.05em" fontSize="48">{t.svgLines[3]}</text>
              </svg>
            )}
          </motion.div>
        </div>

        {/* Scrolling Text Column */}
        <div className="w-full md:w-[55%] flex flex-col z-20 pt-12 md:pt-[45vh] pb-[30vh]">
          <div className="flex flex-col space-y-20 md:space-y-32 max-w-[600px] bg-black/20 md:bg-gradient-to-r md:from-transparent md:via-black/20 md:to-black/60 p-6 md:p-12 rounded-xl backdrop-blur-sm md:backdrop-blur-[2px] border border-white/5">
            
            {/* Paragraphs group 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2 }}
            >
              <div className="space-y-6 text-sm md:text-base leading-[2.4] text-white font-medium text-justify drop-shadow-md"
                style={{ fontFamily: bodyFont, letterSpacing: bodyTracking }}>
                {t.paragraphs.slice(0, 3).map((para, i) => (
                  <p key={i} style={{ whiteSpace: 'pre-line' }}>{para}</p>
                ))}
              </div>
            </motion.div>

            {/* Paragraphs group 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2 }}
            >
              <div className="space-y-6 text-sm md:text-base leading-[2.4] text-white font-medium text-justify drop-shadow-md"
                style={{ fontFamily: bodyFont, letterSpacing: bodyTracking }}>
                {t.paragraphs.slice(3, 6).map((para, i) => (
                  <p key={i} style={{ whiteSpace: 'pre-line' }}>{para}</p>
                ))}
              </div>
            </motion.div>

            {/* Paragraphs group 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2 }}
            >
              <div className="space-y-6 text-sm md:text-base leading-[2.4] text-white font-medium text-justify drop-shadow-md"
                style={{ fontFamily: bodyFont, letterSpacing: bodyTracking }}>
                {t.paragraphs.slice(6, 9).map((para, i) => (
                  <p key={i} style={{ whiteSpace: 'pre-line' }}>{para}</p>
                ))}
              </div>
            </motion.div>
            
            {/* Signature Area */}
            <div className="pt-12 border-t border-white/20 flex flex-col items-start overflow-hidden">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-[10px] tracking-[0.2em] text-white/60 uppercase font-sans font-bold mb-4"
              >
                {t.founderLabel}
              </motion.span>

              <span
                className="text-3xl md:text-5xl font-light tracking-[0.2em] text-[#fdfbf7] inline-block pb-4 pr-12 drop-shadow-md"
                style={{ fontFamily: isEn ? 'var(--font-luxury-en)' : '"Noto Serif JP", serif', fontStyle: isEn ? 'italic' : 'normal' }}
              >
                Minako
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
