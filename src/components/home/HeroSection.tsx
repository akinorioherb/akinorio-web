'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { LINE_URL } from '@/lib/constants'

export default function HeroSection() {
  const [stage, setStage] = useState(0)

  useEffect(() => {
    // Staggered reveal sequence matching LP timing
    const timers = [
      setTimeout(() => setStage(1), 300),   // brand logo
      setTimeout(() => setStage(2), 800),   // tagline
      setTimeout(() => setStage(3), 1200),  // gold line
      setTimeout(() => setStage(4), 1800),  // ALL SERIES label
      setTimeout(() => setStage(5), 2000),  // product image
      setTimeout(() => setStage(6), 3000),  // catch copy
      setTimeout(() => setStage(7), 3800),  // CTA
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center overflow-hidden bg-[#1a0006]">
      {/* Background image with overlay */}
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        priority
        className="object-cover opacity-40"
        sizes="100vw"
      />

      {/* Deep red-to-black gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0006]/90 via-[#2a0008]/70 to-[#0a0003]/95 z-[1]" />

      {/* === SVG Animation Background (LP-level) === */}
      <svg
        className="absolute inset-0 w-full h-full z-[2] pointer-events-none"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="heroGlow1" cx="50%" cy="45%" r="50%">
            <stop offset="0%" stopColor="#d4af37" stopOpacity="0.15">
              <animate attributeName="stop-opacity" values="0.06;0.22;0.06" dur="6s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="heroGlow2" cx="25%" cy="70%" r="40%">
            <stop offset="0%" stopColor="#c40234" stopOpacity="0.08">
              <animate attributeName="stop-opacity" values="0.03;0.12;0.03" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#c40234" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="heroGlow3" cx="75%" cy="30%" r="35%">
            <stop offset="0%" stopColor="#d4af37" stopOpacity="0.06">
              <animate attributeName="stop-opacity" values="0.03;0.10;0.03" dur="10s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
          </radialGradient>

          <filter id="heroBlur"><feGaussianBlur stdDeviation="3" /></filter>
          <filter id="heroBlur2"><feGaussianBlur stdDeviation="4" /></filter>

          <radialGradient id="particleGlowEC" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d4af37" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="shimmerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d4af37" stopOpacity="0" />
            <stop offset="40%" stopColor="#d4af37" stopOpacity="0.04" />
            <stop offset="50%" stopColor="#d4af37" stopOpacity="0.08" />
            <stop offset="60%" stopColor="#d4af37" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Breathing radial glows */}
        <circle cx="720" cy="400" r="300" fill="url(#heroGlow1)" opacity="0.7">
          <animate attributeName="r" values="260;380;260" dur="8s" repeatCount="indefinite" />
        </circle>
        <circle cx="350" cy="630" r="250" fill="url(#heroGlow2)" opacity="0.5">
          <animate attributeName="r" values="200;300;200" dur="10s" repeatCount="indefinite" />
        </circle>
        <circle cx="1080" cy="270" r="220" fill="url(#heroGlow3)" opacity="0.4">
          <animate attributeName="r" values="180;280;180" dur="12s" repeatCount="indefinite" />
        </circle>

        {/* Expanding wave rings from center */}
        <g transform="translate(720, 420)">
          <circle cx="0" cy="0" r="80" fill="none" stroke="#d4af37" strokeWidth="0.5" opacity="0">
            <animate attributeName="r" values="60;500" dur="10s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.12;0" dur="10s" repeatCount="indefinite" />
          </circle>
          <circle cx="0" cy="0" r="80" fill="none" stroke="#d4af37" strokeWidth="0.4" opacity="0">
            <animate attributeName="r" values="60;500" dur="10s" begin="3.3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.08;0" dur="10s" begin="3.3s" repeatCount="indefinite" />
          </circle>
          <circle cx="0" cy="0" r="80" fill="none" stroke="#d4af37" strokeWidth="0.3" opacity="0">
            <animate attributeName="r" values="60;500" dur="10s" begin="6.6s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.06;0" dur="10s" begin="6.6s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Floating gold particles (15+) */}
        <g filter="url(#heroBlur)">
          <circle cx="120" cy="180" r="2.0" fill="#d4af37" opacity="0">
            <animate attributeName="opacity" values="0;0.7;0" dur="5s" begin="0s" repeatCount="indefinite" />
            <animate attributeName="cy" values="180;100" dur="5s" begin="0s" repeatCount="indefinite" />
          </circle>
          <circle cx="380" cy="720" r="2.5" fill="#d4af37" opacity="0">
            <animate attributeName="opacity" values="0;0.5;0" dur="4.2s" begin="1.2s" repeatCount="indefinite" />
            <animate attributeName="cy" values="720;620" dur="4.2s" begin="1.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="760" cy="220" r="1.8" fill="#d4af37" opacity="0">
            <animate attributeName="opacity" values="0;0.6;0" dur="4.5s" begin="0.6s" repeatCount="indefinite" />
            <animate attributeName="cy" values="220;140" dur="4.5s" begin="0.6s" repeatCount="indefinite" />
          </circle>
          <circle cx="1100" cy="480" r="1.5" fill="#d4af37" opacity="0">
            <animate attributeName="opacity" values="0;0.45;0" dur="5.5s" begin="2s" repeatCount="indefinite" />
            <animate attributeName="cy" values="480;380" dur="5.5s" begin="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="950" cy="130" r="1.4" fill="#d4af37" opacity="0">
            <animate attributeName="opacity" values="0;0.55;0" dur="4.8s" begin="1.8s" repeatCount="indefinite" />
            <animate attributeName="cy" values="130;50" dur="4.8s" begin="1.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="580" cy="850" r="2.8" fill="#d4af37" opacity="0">
            <animate attributeName="opacity" values="0;0.35;0" dur="5.2s" begin="0.5s" repeatCount="indefinite" />
            <animate attributeName="cy" values="850;750" dur="5.2s" begin="0.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="1300" cy="360" r="1.6" fill="#d4af37" opacity="0">
            <animate attributeName="opacity" values="0;0.5;0" dur="4.6s" begin="2.5s" repeatCount="indefinite" />
            <animate attributeName="cy" values="360;270" dur="4.6s" begin="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="200" cy="500" r="1.0" fill="#d4af37" opacity="0">
            <animate attributeName="opacity" values="0;0.5;0" dur="3.5s" begin="2.5s" repeatCount="indefinite" />
            <animate attributeName="cy" values="500;430" dur="3.5s" begin="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="1350" cy="700" r="1.8" fill="#d4af37" opacity="0">
            <animate attributeName="opacity" values="0;0.35;0" dur="5.8s" begin="1.8s" repeatCount="indefinite" />
            <animate attributeName="cy" values="700;600" dur="5.8s" begin="1.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="500" cy="100" r="2.0" fill="#d4af37" opacity="0">
            <animate attributeName="opacity" values="0;0.4;0" dur="4.2s" begin="0.7s" repeatCount="indefinite" />
            <animate attributeName="cy" values="100;30" dur="4.2s" begin="0.7s" repeatCount="indefinite" />
          </circle>
          <circle cx="850" cy="750" r="1.2" fill="#d4af37" opacity="0">
            <animate attributeName="opacity" values="0;0.35;0" dur="6s" begin="2s" repeatCount="indefinite" />
            <animate attributeName="cy" values="750;650" dur="6s" begin="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="300" cy="350" r="1.5" fill="#d4af37" opacity="0">
            <animate attributeName="opacity" values="0;0.3;0" dur="5s" begin="1.5s" repeatCount="indefinite" />
            <animate attributeName="cy" values="350;270" dur="5s" begin="1.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="1050" cy="600" r="2.2" fill="#d4af37" opacity="0">
            <animate attributeName="opacity" values="0;0.4;0" dur="4.8s" begin="0.9s" repeatCount="indefinite" />
            <animate attributeName="cy" values="600;510" dur="4.8s" begin="0.9s" repeatCount="indefinite" />
          </circle>
          <circle cx="650" cy="450" r="1.3" fill="#d4af37" opacity="0">
            <animate attributeName="opacity" values="0;0.45;0" dur="5.5s" begin="3s" repeatCount="indefinite" />
            <animate attributeName="cy" values="450;370" dur="5.5s" begin="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="1250" cy="150" r="1.7" fill="#d4af37" opacity="0">
            <animate attributeName="opacity" values="0;0.5;0" dur="4s" begin="0.3s" repeatCount="indefinite" />
            <animate attributeName="cy" values="150;70" dur="4s" begin="0.3s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Wavy organic lines */}
        <path d="M0,450 Q360,420 720,440 T1440,430" fill="none" stroke="#d4af37" strokeWidth="0.3" opacity="0.06">
          <animate attributeName="d" values="M0,450 Q360,420 720,440 T1440,430;M0,440 Q360,460 720,430 T1440,450;M0,450 Q360,420 720,440 T1440,430" dur="12s" repeatCount="indefinite" />
        </path>
        <path d="M0,460 Q360,440 720,470 T1440,445" fill="none" stroke="#d4af37" strokeWidth="0.2" opacity="0.04">
          <animate attributeName="d" values="M0,460 Q360,440 720,470 T1440,445;M0,470 Q360,480 720,450 T1440,460;M0,460 Q360,440 720,470 T1440,445" dur="15s" repeatCount="indefinite" />
        </path>
        <path d="M0,470 Q360,490 720,460 T1440,475" fill="none" stroke="#d4af37" strokeWidth="0.2" opacity="0.03">
          <animate attributeName="d" values="M0,470 Q360,490 720,460 T1440,475;M0,465 Q360,450 720,480 T1440,465;M0,470 Q360,490 720,460 T1440,475" dur="18s" repeatCount="indefinite" />
        </path>

        {/* Diamond sparkles */}
        <g>
          {[
            { x: 250, y: 200, delay: '0s', dur: '3s' },
            { x: 680, y: 150, delay: '1s', dur: '3.5s' },
            { x: 1100, y: 350, delay: '0.5s', dur: '4s' },
            { x: 450, y: 650, delay: '2s', dur: '3.2s' },
            { x: 1300, y: 550, delay: '1.5s', dur: '3.8s' },
          ].map((s, i) => (
            <g key={i} transform={`translate(${s.x}, ${s.y})`}>
              <path d="M0,-4 L1.5,0 L0,4 L-1.5,0 Z" fill="#d4af37" opacity="0">
                <animate attributeName="opacity" values="0;0.8;0" dur={s.dur} begin={s.delay} repeatCount="indefinite" />
                <animate attributeName="transform" values="scale(0.5);scale(1.2);scale(0.5)" dur={s.dur} begin={s.delay} repeatCount="indefinite" type="transform" />
              </path>
            </g>
          ))}
        </g>

        {/* Shimmer band */}
        <rect x="-500" y="0" width="300" height="900" fill="url(#shimmerGrad)" opacity="0.6">
          <animate attributeName="x" values="-500;1900" dur="7s" begin="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.6;0" dur="7s" begin="2s" repeatCount="indefinite" />
        </rect>

        {/* Soft glowing orbs (LP-faithful) */}
        <circle cx="720" cy="450" r="120" fill="url(#particleGlowEC)" opacity="0" filter="url(#heroBlur2)">
          <animate attributeName="opacity" values="0;0.15;0.08;0.15;0" dur="8s" begin="1s" repeatCount="indefinite" />
          <animate attributeName="r" values="120;160;120" dur="8s" begin="1s" repeatCount="indefinite" />
        </circle>
        <circle cx="400" cy="350" r="80" fill="url(#particleGlowEC)" opacity="0" filter="url(#heroBlur2)">
          <animate attributeName="opacity" values="0;0.08;0" dur="6s" begin="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="1050" cy="500" r="90" fill="url(#particleGlowEC)" opacity="0" filter="url(#heroBlur2)">
          <animate attributeName="opacity" values="0;0.1;0" dur="7s" begin="1.5s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* Gold orb glow (breathing) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[600px] h-[600px] md:w-[800px] md:h-[800px] z-[3] pointer-events-none animate-[heroOrbBreathe_6s_ease-in-out_infinite]"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.08) 0%, rgba(196,2,52,0.03) 40%, transparent 70%)',
        }}
      />

      {/* Content - centered, LP-faithful layout */}
      <div className="relative z-10 w-full flex flex-col items-center text-center px-5">
        {/* Brand logo */}
        <p
          className="font-heading-en text-sm md:text-base tracking-[0.5em] text-[#d4af37] transition-all duration-[1.5s] ease-out"
          style={{
            opacity: stage >= 1 ? 1 : 0,
            transform: stage >= 1 ? 'translateY(0)' : 'translateY(10px)',
          }}
        >
          AKINORIO
        </p>

        {/* Tagline SVG */}
        <div
          className="mt-5 md:mt-6 transition-all duration-[1.5s] ease-out"
          style={{
            opacity: stage >= 2 ? 1 : 0,
            transform: stage >= 2 ? 'translateY(0)' : 'translateY(10px)',
          }}
        >
          <svg
            className="w-[260px] md:w-[360px] h-auto"
            viewBox="0 0 400 40"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <text
              x="200"
              y="28"
              textAnchor="middle"
              fontFamily="'Noto Serif JP', serif"
              fontSize="18"
              fill="#d1baa0"
              fontWeight="300"
              letterSpacing="3"
            >
              引き算という、美しさの答え。
            </text>
          </svg>
        </div>

        {/* Gold vertical line */}
        <div
          className="mt-6 w-px bg-gradient-to-b from-transparent via-[#d4af37] to-transparent transition-all duration-[1s] ease-out"
          style={{
            height: stage >= 3 ? '56px' : '0px',
            opacity: stage >= 3 ? 0.6 : 0,
          }}
        />

        {/* ALL SERIES label */}
        <p
          className="mt-5 font-heading-en text-[10px] md:text-xs tracking-[0.4em] text-[#d4af37]/60 uppercase transition-all duration-[1s] ease-out"
          style={{
            opacity: stage >= 4 ? 1 : 0,
          }}
        >
          All Series
        </p>

        {/* Product image - hero centerpiece */}
        <div
          className="mt-4 relative transition-all duration-[1.5s] ease-out"
          style={{
            opacity: stage >= 5 ? 1 : 0,
            transform: stage >= 5 ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
          }}
        >
          <div className="relative w-[280px] h-[200px] md:w-[420px] md:h-[280px] lg:w-[500px] lg:h-[320px]">
            <Image
              src="/images/products/allseries.png"
              alt="AKINORIO 全商品ラインナップ"
              fill
              priority
              className="object-contain drop-shadow-[0_20px_60px_rgba(212,175,55,0.15)]"
              sizes="(max-width: 768px) 280px, (max-width: 1024px) 420px, 500px"
            />
          </div>
          {/* Shimmer overlay on product */}
          <div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ opacity: stage >= 5 ? 1 : 0 }}
          >
            <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent skew-x-[-20deg] animate-[heroShimmer_4s_ease-in-out_2.5s_infinite]" />
          </div>
        </div>

        {/* Catch copy */}
        <div
          className="mt-8 md:mt-10 transition-all duration-[1.5s] ease-out"
          style={{
            opacity: stage >= 6 ? 1 : 0,
            transform: stage >= 6 ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <h1 className="font-heading-ja font-light text-white text-lg md:text-xl lg:text-2xl leading-[2.4] md:leading-[2.4]">
            あなたの肌に必要だったのは、
            <br />
            <span className="font-normal text-gold-gradient">
              「何かを足す」ことではなく、
              <br />
              「やめる」ことでした。
            </span>
          </h1>
        </div>

        {/* CTA button */}
        <div
          className="mt-8 md:mt-10 flex flex-col items-center transition-all duration-[1.2s] ease-out"
          style={{
            opacity: stage >= 7 ? 1 : 0,
            transform: stage >= 7 ? 'translateY(0)' : 'translateY(15px)',
          }}
        >
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#d4af37] text-white px-10 py-4 rounded-sm font-heading-ja text-sm md:text-base font-normal tracking-wider hover:bg-[#bfa045] transition-all duration-300 animate-[heroPulseGlow_3s_ease-in-out_infinite]"
          >
            14日間の引き算プログラムを始める
          </a>
          <p className="mt-4 font-ui text-[11px] md:text-xs text-white/40 tracking-wider">
            LINEで30秒。あなたの肌と、出会い直す旅へ。
          </p>
        </div>
      </div>

      {/* Bottom gradient to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#faf8f5] to-transparent z-[5]" />
    </section>
  )
}
