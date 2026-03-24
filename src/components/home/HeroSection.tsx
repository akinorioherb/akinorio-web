'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/i18n';

const pseudoRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

/* ── アンビエント金の粉（収束のみ、少なめ） ── */
const GoldDust = () => {
  const particles = Array.from({ length: 60 }).map((_, i) => {
    const spreadTop = (pseudoRandom(i) - 0.5) * 2 * (200 + pseudoRandom(i + 50) * 280);
    const spreadBtm = (pseudoRandom(i + 200) - 0.5) * 2 * (160 + pseudoRandom(i + 250) * 200);
    const duration  = 8 + pseudoRandom(i + 300) * 10;
    const delay     = pseudoRandom(i + 400) * 20;
    const size      = 0.5 + pseudoRandom(i + 600) * 2.0;
    const bright    = Math.floor(pseudoRandom(i + 800) * 25);
    const opMax     = 0.30 + pseudoRandom(i + 700) * 0.35;
    return (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          width: size, height: size,
          left: '50%', top: 0,
          background: `rgba(${207 + bright},${170 + bright},${105 + bright},1)`,
          boxShadow: `0 0 ${3 + size * 2}px ${size}px rgba(212,175,55,0.5)`,
        }}
        animate={{
          y:       ['-2vh', '-2vh', '50vh', '105vh', '105vh'],
          x:       [spreadTop, spreadTop, 0, spreadBtm, spreadBtm],
          opacity: [0, opMax, opMax, opMax, 0],
        }}
        transition={{ duration, repeat: Infinity, delay, ease: 'easeInOut', times: [0, 0.04, 0.5, 0.96, 1] }}
      />
    );
  });
  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {particles}
    </div>
  );
};

/* ─────────────────────────────────────────────────────────
   DNA二重螺旋 — 収束点(y≈46vh)から下へ2本の鎖が螺旋降下
   ・Strand A: sin(θ)  Strand B: sin(θ + π) = -sin(θ)
   ・半径を20-45pxに絞り、明確な二重螺旋を描く
   ───────────────────────────────────────────────────────── */
const DnaStrand = () => {
  const STRAND_N    = 24;  // 1鎖あたりの粒子数
  const STEPS       = 14;  // 螺旋フェーズのキーフレーム数（多いほど滑らか）
  const Y_START     = 46;  // 収束完了Y (vh)
  const Y_END       = 100; // 降下終了Y (vh)
  const HELIX_R_MIN = 18;  // 螺旋半径 最小px
  const HELIX_R_MAX = 42;  // 螺旋半径 最大px（タイトに保つ）
  const REVOLUTIONS = 2.5; // 画面下端までの回転数

  const allParticles = Array.from({ length: STRAND_N * 2 }).map((_, i) => {
    const isB    = i >= STRAND_N;
    const phaseB = isB ? Math.PI : 0;   // B鎖は半周ずらして反対側
    const seed   = i + 7000;

    // 各粒子の初期位相をずらして「密」に埋める
    const phase     = (i % STRAND_N) / STRAND_N * Math.PI * 2;
    const helixR    = HELIX_R_MIN + pseudoRandom(seed + 1) * (HELIX_R_MAX - HELIX_R_MIN);
    const spreadTop = (pseudoRandom(seed + 2) - 0.5) * 600;
    const duration  = 11 + pseudoRandom(seed + 3) * 8;   // 11-19s
    const delay     = pseudoRandom(seed + 4) * 22;
    const size      = 1.2 + pseudoRandom(seed + 5) * 1.8;
    const opMax     = isB ? 0.50 + pseudoRandom(seed+6)*0.30   // B鎖: やや薄め
                          : 0.65 + pseudoRandom(seed+6)*0.30;  // A鎖: やや明るめ
    const bright    = Math.floor(pseudoRandom(seed + 7) * 20);
    const color     = isB
      ? `rgba(${190+bright},${155+bright},${90+bright},1)` // B鎖: やや落ち着いたゴールド
      : `rgba(${215+bright},${178+bright},${108+bright},1)`; // A鎖: 明るいゴールド

    const helixX: number[]  = [];
    const helixY: string[]  = [];
    const helixT: number[]  = [];
    const helixOp: number[] = [];

    for (let k = 0; k < STEPS; k++) {
      const prog  = k / (STEPS - 1);
      const angle = phase + phaseB + prog * Math.PI * 2 * REVOLUTIONS;
      helixX.push(helixR * Math.sin(angle));
      helixY.push(`${Y_START + prog * (Y_END - Y_START)}vh`);
      helixT.push(0.43 + prog * 0.53);  // 0.43 → 0.96
      // 下端20%でフェードアウト
      helixOp.push(prog > 0.80 ? opMax * Math.max(0, 1 - (prog - 0.80) / 0.20) : opMax);
    }

    const xKF  = [spreadTop, spreadTop, 0,              ...helixX];
    const yKF  = ['-3vh',    '-3vh',    `${Y_START}vh`, ...helixY];
    const opKF = [0,         opMax,     opMax,           ...helixOp];
    const tKF  = [0,         0.04,      0.43,            ...helixT];

    // 末尾フレーム
    xKF.push(helixX[helixX.length - 1]);
    yKF.push(`${Y_END + 3}vh`);
    opKF.push(0);
    tKF.push(1.0);

    return (
      <motion.div
        key={`dna-${i}`}
        className="absolute rounded-full pointer-events-none"
        style={{
          width: size, height: size,
          left: '50%', top: 0,
          background: color,
          boxShadow: `0 0 ${4 + size * 2}px ${size}px rgba(212,175,55,0.65)`,
        }}
        animate={{ y: yKF, x: xKF, opacity: opKF }}
        transition={{ duration, repeat: Infinity, delay, ease: 'linear', times: tKF }}
      />
    );
  });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 11 }}>
      {allParticles}
    </div>
  );
};

export default function HeroSection() {
  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);
  const { lang } = useLanguage();
  const t = translations[lang].hero;
  const isEn = lang === 'en';

  return (
    <section ref={containerRef} className="relative w-full h-[100dvh] z-0 overflow-hidden"
      style={{ background: '#4a0210' }}>

      {/* カルティエレッド ラジアルグラデーション */}
      <motion.div style={{ opacity: bgOpacity }} className="absolute inset-0">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 90% 70% at 50% 45%, #9e1023 0%, #7a0818 50%, #4a0210 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(50,0,8,0.55) 0%, transparent 60%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(30,0,5,0.7) 0%, transparent 40%)' }} />
      </motion.div>

      {/* 金の粉（アンビエント） */}
      <GoldDust />

      {/* DNA二重螺旋 */}
      <DnaStrand />

      {/* AKINORIO ゴールドロゴ */}
      <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-end pr-[6vw] md:pr-[10vw]">
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1], delay: 1.2 }}
          style={{ translateY: '-4vh' }}
        >
          <motion.div
            className="absolute inset-0 blur-[28px] rounded-full"
            style={{ background: 'rgba(212,175,55,0.18)' }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.p
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="relative font-heading-en tracking-[0.35em] md:tracking-[0.45em] select-none"
            style={{
              fontSize: 'clamp(1.4rem, 3.5vw, 3.2rem)',
              color: '#D4AF37', fontWeight: 300,
              filter: 'drop-shadow(0 0 18px rgba(212,175,55,0.55)) drop-shadow(0 2px 8px rgba(0,0,0,0.4))',
              letterSpacing: '0.42em',
            }}
          >
            AKINORIO
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 2.0 }}
            className="mt-3 mx-auto origin-center"
            style={{ height: '0.5px', background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.7), transparent)', width: '100%' }}
          />
        </motion.div>
      </div>

      {/* Hero Typography */}
      <div className="relative z-20 w-full h-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-start justify-center pointer-events-none">
        <div className="max-w-4xl mt-[-5vh]">
          {isEn ? (
            <>
              <motion.h1
                initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-[5rem] font-light tracking-wide text-white mb-8 md:mb-12 leading-[1.25] drop-shadow-2xl"
                style={{ fontFamily: 'var(--font-luxury-en)', letterSpacing: '0.02em', fontWeight: 300 }}
              >
                {t.line1}<br/>{t.line2}
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
                className="text-xl md:text-3xl lg:text-4xl text-white/85 font-light leading-relaxed drop-shadow-lg"
                style={{ fontFamily: 'var(--font-luxury-en)', letterSpacing: '0.04em', fontStyle: 'italic' }}
              >
                {t.line3}<br className="md:hidden" />{t.line4}
              </motion.h2>
            </>
          ) : (
            <>
              <motion.h1
                initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-[5rem] font-bold tracking-widest text-white mb-8 md:mb-12 leading-[1.3] drop-shadow-2xl"
                style={{ fontFamily: '"Noto Serif JP", serif' }}
              >
                {t.line1}<br/>{t.line2}
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
                className="text-xl md:text-3xl lg:text-4xl text-white font-medium tracking-widest leading-relaxed whitespace-nowrap drop-shadow-lg"
                style={{ fontFamily: '"Noto Serif JP", serif' }}
              >
                {t.line3}<br className="md:hidden" />{t.line4}
              </motion.h2>
            </>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
        className="absolute bottom-6 md:bottom-12 left-6 md:left-12 z-30 flex flex-col items-center gap-4"
      >
        <motion.div
          animate={{ height: ['0%', '100%'], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="w-[1px] h-12 md:h-16 bg-white transform origin-top opacity-60"
        />
      </motion.div>
    </section>
  );
}
