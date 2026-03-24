'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/i18n';

export default function AkinorioSecret() {
  const { lang } = useLanguage();
  const t = translations[lang].secret;
  const isEn = lang === 'en';
  const bodyFont = isEn ? 'var(--font-luxury-en)' : '"Noto Serif JP", serif';

  return (
    <section 
      id="secret" 
      className="relative w-full min-h-screen text-white z-10 bg-[#1A0005]"
      style={{ 
        clipPath: 'inset(0 0 0 0)' 
      }}
    >
      
      {/* 
        Background Layer with iOS Safe Parallax 
        Uses ::before pseudo-element with position: fixed to ensure robust scrolling parallax on iOS
      */}
      <style dangerouslySetInnerHTML={{__html: `
        .secret-bg::before {
          content: "";
          position: fixed;
          top: 0; left: 0;
          width: 100vw; height: 100vh;
          z-index: 0;
          /* ダークなグラデーションと指定のイメージ画像を適用 */
          background-image: linear-gradient(to top, rgba(26,0,5,0.95) 0%, rgba(26,0,5,0.2) 60%), url('/images/modelandproducts.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          will-change: transform;
        }
      `}} />

      <div className="secret-bg" />

      {/* Content Layer (Flowing Text) */}
      <div className="relative z-10 w-full min-h-screen py-[120px] px-6 md:px-12 flex flex-col justify-end max-w-[1400px] mx-auto overflow-hidden">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-end mt-auto">
          
          <div className="lg:col-span-5 flex flex-col items-start w-full">
            <span className="text-[10px] md:text-sm tracking-[0.4em] text-[#E31633] mb-6 font-bold" style={{ fontFamily: isEn ? 'var(--font-luxury-en)' : '"Noto Serif JP", serif', letterSpacing: isEn ? '0.25em' : '0.4em' }}>
              {t.label}
            </span>
            <div className="w-full max-w-[440px] mb-8">
              {isEn ? (
                <div className="flex flex-col gap-1" style={{ filter: 'drop-shadow(0px 8px 12px rgba(0,0,0,0.8))' }}>
                  <p style={{ fontFamily: 'var(--font-luxury-en)', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 300, color: 'white', letterSpacing: '0.02em', lineHeight: 1.2 }}>
                    {t.svgLines[0]}
                  </p>
                  <p style={{ fontFamily: 'var(--font-luxury-en)', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 700, color: 'white', letterSpacing: '0.02em', lineHeight: 1.2 }}>
                    {t.svgLines[1]}
                  </p>
                </div>
              ) : (
                <svg width="100%" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <text x="0" y="60" fill="white" fontWeight="900" fontSize="56" fontFamily='"Noto Serif JP", serif' letterSpacing="0.1em" style={{ filter: 'drop-shadow(0px 10px 15px rgba(0,0,0,0.8))' }}>
                    {t.svgLines[0]}
                  </text>
                  <text x="0" y="140" fill="white" fontWeight="900" fontSize="56" fontFamily='"Noto Serif JP", serif' letterSpacing="0.1em" style={{ filter: 'drop-shadow(0px 10px 15px rgba(0,0,0,0.8))' }}>
                    {t.svgLines[1]}
                  </text>
                </svg>
              )}
            </div>
            <div className="w-full h-[1px] bg-[#E31633]/50 hidden lg:block" />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col space-y-8 md:space-y-12 bg-gradient-to-r from-transparent via-black/20 to-black/60 p-6 md:p-12 rounded-xl"
          >
            <h3 className="text-2xl md:text-4xl font-bold tracking-wider leading-[1.6] text-[#fdfbf7] drop-shadow-md"
              style={{ fontFamily: bodyFont, fontWeight: isEn ? 300 : 700, fontSize: isEn ? 'clamp(1.5rem, 2.8vw, 2.8rem)' : undefined, letterSpacing: isEn ? '0.01em' : undefined, lineHeight: isEn ? 1.45 : 1.6, whiteSpace: 'pre-line' }}>
              {t.headline}
            </h3>

            <div className="space-y-6 text-sm md:text-base leading-[2.2] text-white font-medium text-justify max-w-2xl drop-shadow-md"
              style={{ fontFamily: bodyFont, letterSpacing: isEn ? '0.02em' : undefined }}>
              {t.paragraphs.map((para, i) => (
                <p key={i} className={i === 2 ? 'font-bold text-[#fdfbf7]' : ''} style={{ whiteSpace: 'pre-line' }}>{para}</p>
              ))}
            </div>

            <div className="flex flex-col gap-2 pt-6 border-t border-white/20">
              <span className="text-[9px] md:text-[10px] text-white/60 tracking-wider font-sans drop-shadow-sm">{t.note1}</span>
              <span className="text-[9px] md:text-[10px] text-white/60 tracking-wider font-sans drop-shadow-sm">{t.note2}</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
