import Button from '@/components/ui/Button'
import { LINE_URL } from '@/lib/constants'

export default function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center bg-marble overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 via-primary-700/60 to-primary-800/90" />

      {/* === LP-level SVG Animation Background === */}
      <svg
        className="absolute inset-0 w-full h-full z-[1] pointer-events-none"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* === Breathing radial glow x3 === */}
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

          {/* Blur filters for particles */}
          <filter id="heroBlur"><feGaussianBlur stdDeviation="3" /></filter>
          <filter id="heroBlurSoft"><feGaussianBlur stdDeviation="1.5" /></filter>
          <filter id="heroBlurFine"><feGaussianBlur stdDeviation="0.8" /></filter>

          {/* Shimmer gradient */}
          <linearGradient id="shimmerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d4af37" stopOpacity="0" />
            <stop offset="40%" stopColor="#d4af37" stopOpacity="0.04" />
            <stop offset="50%" stopColor="#d4af37" stopOpacity="0.08" />
            <stop offset="60%" stopColor="#d4af37" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
          </linearGradient>

          {/* Gold horizontal ray gradient */}
          <linearGradient id="goldRayGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d4af37" stopOpacity="0" />
            <stop offset="30%" stopColor="#d4af37" stopOpacity="0.06" />
            <stop offset="50%" stopColor="#d4af37" stopOpacity="0.10" />
            <stop offset="70%" stopColor="#d4af37" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* === Breathing radial glows === */}
        <circle cx="720" cy="400" r="300" fill="url(#heroGlow1)" opacity="0.7">
          <animate attributeName="r" values="260;380;260" dur="8s" repeatCount="indefinite" />
        </circle>
        <circle cx="350" cy="630" r="250" fill="url(#heroGlow2)" opacity="0.5">
          <animate attributeName="r" values="200;300;200" dur="10s" repeatCount="indefinite" />
        </circle>
        <circle cx="1080" cy="270" r="220" fill="url(#heroGlow3)" opacity="0.4">
          <animate attributeName="r" values="180;280;180" dur="12s" repeatCount="indefinite" />
        </circle>

        {/* === Expanding wave rings x3 (staggered) === */}
        <g transform="translate(720, 420)">
          <circle cx="0" cy="0" r="80" fill="none" stroke="#d4af37" strokeWidth="0.5" opacity="0">
            <animate attributeName="r" values="60;450" dur="9s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.15;0" dur="9s" repeatCount="indefinite" />
          </circle>
          <circle cx="0" cy="0" r="80" fill="none" stroke="#d4af37" strokeWidth="0.4" opacity="0">
            <animate attributeName="r" values="60;450" dur="9s" begin="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.10;0" dur="9s" begin="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="0" cy="0" r="80" fill="none" stroke="#d4af37" strokeWidth="0.3" opacity="0">
            <animate attributeName="r" values="60;450" dur="9s" begin="6s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.07;0" dur="9s" begin="6s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* === Floating gold particles (18 particles) === */}
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
          <circle cx="280" cy="830" r="2.2" fill="#d4af37" opacity="0">
            <animate attributeName="opacity" values="0;0.4;0" dur="6s" begin="3s" repeatCount="indefinite" />
            <animate attributeName="cy" values="830;730" dur="6s" begin="3s" repeatCount="indefinite" />
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
          <circle cx="80" cy="530" r="1.8" fill="#d4af37" opacity="0">
            <animate attributeName="opacity" values="0;0.5;0" dur="5.8s" begin="1s" repeatCount="indefinite" />
            <animate attributeName="cy" values="530;430" dur="5.8s" begin="1s" repeatCount="indefinite" />
          </circle>
          <circle cx="1380" cy="680" r="2.0" fill="#d4af37" opacity="0">
            <animate attributeName="opacity" values="0;0.35;0" dur="6.2s" begin="3.5s" repeatCount="indefinite" />
            <animate attributeName="cy" values="680;580" dur="6.2s" begin="3.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="520" cy="100" r="1.2" fill="#d4af37" opacity="0">
            <animate attributeName="opacity" values="0;0.6;0" dur="3.8s" begin="0.8s" repeatCount="indefinite" />
            <animate attributeName="cy" values="100;30" dur="3.8s" begin="0.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="880" cy="780" r="2.3" fill="#d4af37" opacity="0">
            <animate attributeName="opacity" values="0;0.3;0" dur="5s" begin="2.2s" repeatCount="indefinite" />
            <animate attributeName="cy" values="780;690" dur="5s" begin="2.2s" repeatCount="indefinite" />
          </circle>
          {/* Additional particles for density */}
          <circle cx="200" cy="400" r="1.0" fill="#d4af37" opacity="0">
            <animate attributeName="opacity" values="0;0.4;0" dur="4.3s" begin="1.5s" repeatCount="indefinite" />
            <animate attributeName="cy" values="400;320" dur="4.3s" begin="1.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="660" cy="600" r="1.6" fill="#d4af37" opacity="0">
            <animate attributeName="opacity" values="0;0.45;0" dur="5.6s" begin="0.3s" repeatCount="indefinite" />
            <animate attributeName="cy" values="600;510" dur="5.6s" begin="0.3s" repeatCount="indefinite" />
          </circle>
          <circle cx="1200" cy="150" r="1.3" fill="#d4af37" opacity="0">
            <animate attributeName="opacity" values="0;0.5;0" dur="4.0s" begin="2.8s" repeatCount="indefinite" />
            <animate attributeName="cy" values="150;70" dur="4.0s" begin="2.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="440" cy="300" r="1.1" fill="#d4af37" opacity="0">
            <animate attributeName="opacity" values="0;0.55;0" dur="3.5s" begin="4s" repeatCount="indefinite" />
            <animate attributeName="cy" values="300;230" dur="3.5s" begin="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="1050" cy="700" r="1.9" fill="#d4af37" opacity="0">
            <animate attributeName="opacity" values="0;0.3;0" dur="6.5s" begin="1.7s" repeatCount="indefinite" />
            <animate attributeName="cy" values="700;610" dur="6.5s" begin="1.7s" repeatCount="indefinite" />
          </circle>
          <circle cx="720" cy="50" r="1.4" fill="#d4af37" opacity="0">
            <animate attributeName="opacity" values="0;0.5;0" dur="4.1s" begin="3.2s" repeatCount="indefinite" />
            <animate attributeName="cy" values="50;0" dur="4.1s" begin="3.2s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* === Flowing wave lines (4 lines) === */}
        <g opacity="0.14">
          <path d="M0,420 Q360,360 720,420 T1440,420" fill="none" stroke="#d4af37" strokeWidth="0.6">
            <animate
              attributeName="d"
              values="M0,420 Q360,360 720,420 T1440,420;M0,420 Q360,490 720,420 T1440,420;M0,420 Q360,360 720,420 T1440,420"
              dur="10s"
              repeatCount="indefinite"
            />
          </path>
          <path d="M0,450 Q360,400 720,450 T1440,450" fill="none" stroke="#d4af37" strokeWidth="0.4">
            <animate
              attributeName="d"
              values="M0,450 Q360,400 720,450 T1440,450;M0,450 Q360,510 720,450 T1440,450;M0,450 Q360,400 720,450 T1440,450"
              dur="12s"
              repeatCount="indefinite"
            />
          </path>
          <path d="M0,480 Q300,440 600,480 T1200,480 T1440,480" fill="none" stroke="#d4af37" strokeWidth="0.35">
            <animate
              attributeName="d"
              values="M0,480 Q300,440 600,480 T1200,480 T1440,480;M0,480 Q300,530 600,480 T1200,480 T1440,480;M0,480 Q300,440 600,480 T1200,480 T1440,480"
              dur="14s"
              repeatCount="indefinite"
            />
          </path>
          <path d="M0,400 Q400,370 800,400 T1440,400" fill="none" stroke="#d4af37" strokeWidth="0.25">
            <animate
              attributeName="d"
              values="M0,400 Q400,370 800,400 T1440,400;M0,400 Q400,440 800,400 T1440,400;M0,400 Q400,370 800,400 T1440,400"
              dur="16s"
              repeatCount="indefinite"
            />
          </path>
        </g>

        {/* === Diamond sparkle accents (5 locations) === */}
        <g transform="translate(720, 180)" opacity="0">
          <animate attributeName="opacity" values="0;0.6;0" dur="5s" begin="1s" repeatCount="indefinite" />
          <line x1="-8" y1="0" x2="8" y2="0" stroke="#d4af37" strokeWidth="0.6" />
          <line x1="0" y1="-8" x2="0" y2="8" stroke="#d4af37" strokeWidth="0.6" />
          <line x1="-5" y1="-5" x2="5" y2="5" stroke="#d4af37" strokeWidth="0.3" />
          <line x1="5" y1="-5" x2="-5" y2="5" stroke="#d4af37" strokeWidth="0.3" />
        </g>
        <g transform="translate(200, 680)" opacity="0">
          <animate attributeName="opacity" values="0;0.4;0" dur="6s" begin="3s" repeatCount="indefinite" />
          <line x1="-6" y1="0" x2="6" y2="0" stroke="#d4af37" strokeWidth="0.5" />
          <line x1="0" y1="-6" x2="0" y2="6" stroke="#d4af37" strokeWidth="0.5" />
          <line x1="-4" y1="-4" x2="4" y2="4" stroke="#d4af37" strokeWidth="0.25" />
          <line x1="4" y1="-4" x2="-4" y2="4" stroke="#d4af37" strokeWidth="0.25" />
        </g>
        <g transform="translate(1250, 280)" opacity="0">
          <animate attributeName="opacity" values="0;0.35;0" dur="4.5s" begin="2s" repeatCount="indefinite" />
          <line x1="-5" y1="0" x2="5" y2="0" stroke="#d4af37" strokeWidth="0.5" />
          <line x1="0" y1="-5" x2="0" y2="5" stroke="#d4af37" strokeWidth="0.5" />
        </g>
        <g transform="translate(950, 800)" opacity="0">
          <animate attributeName="opacity" values="0;0.3;0" dur="5.5s" begin="4s" repeatCount="indefinite" />
          <line x1="-7" y1="0" x2="7" y2="0" stroke="#d4af37" strokeWidth="0.4" />
          <line x1="0" y1="-7" x2="0" y2="7" stroke="#d4af37" strokeWidth="0.4" />
          <line x1="-4" y1="-4" x2="4" y2="4" stroke="#d4af37" strokeWidth="0.25" />
          <line x1="4" y1="-4" x2="-4" y2="4" stroke="#d4af37" strokeWidth="0.25" />
        </g>
        <g transform="translate(400, 150)" opacity="0">
          <animate attributeName="opacity" values="0;0.45;0" dur="4s" begin="1.5s" repeatCount="indefinite" />
          <line x1="-4" y1="0" x2="4" y2="0" stroke="#d4af37" strokeWidth="0.5" />
          <line x1="0" y1="-4" x2="0" y2="4" stroke="#d4af37" strokeWidth="0.5" />
        </g>

        {/* === Shimmer band (light crossing) === */}
        <rect x="-500" y="0" width="300" height="900" fill="url(#shimmerGrad)" opacity="0.6">
          <animate attributeName="x" values="-500;1900" dur="7s" begin="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.6;0" dur="7s" begin="2s" repeatCount="indefinite" />
        </rect>

        {/* === Gold horizontal rays === */}
        <rect x="0" y="418" width="1440" height="1" fill="url(#goldRayGrad)" opacity="0">
          <animate attributeName="opacity" values="0;0.3;0" dur="6s" begin="1s" repeatCount="indefinite" />
        </rect>
        <rect x="0" y="440" width="1440" height="0.5" fill="url(#goldRayGrad)" opacity="0">
          <animate attributeName="opacity" values="0;0.2;0" dur="8s" begin="3s" repeatCount="indefinite" />
        </rect>
      </svg>

      {/* Decorative radial glow overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(ellipse,rgba(212,175,55,0.10)_0%,transparent_70%)] z-[1] opacity-0 animate-[glowIn_2s_ease-out_1s_forwards]" />

      {/* Content */}
      <div className="relative z-10 w-full px-5 md:px-8 max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto md:mx-0 text-center md:text-left">
          {/* Brand name */}
          <p className="font-heading-en text-sm md:text-base tracking-[0.4em] text-gold-400 mb-8 opacity-0 animate-[fadeInSimple_1.5s_ease-out_0.3s_forwards]">
            AKINORIO
          </p>

          {/* Tagline */}
          <h1 className="text-h1 md:text-display font-heading-ja font-light text-white mb-6 animate-fade-in-up" style={{ animationDelay: '0.6s', lineHeight: '2.2' }}>
            引き算という、
            <br />
            <span className="text-gold-gradient font-normal">
              美しさの答え。
            </span>
          </h1>

          {/* Sub copy */}
          <p className="text-base md:text-lg text-primary-100/80 leading-[2.2] mb-12 max-w-lg mx-auto md:mx-0 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            あなたの肌に必要だったのは、
            <br />
            「何かを足す」ことではなく、
            <br />
            「やめる」ことでした。
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gold-500 text-white px-8 py-4 rounded-sm font-heading-ja text-base font-normal tracking-wider hover:bg-gold-600 transition-all duration-300 shadow-[var(--shadow-gold)]"
            >
              14日間の引き算プログラムを始める
            </a>
          </div>

          {/* Sub text */}
          <p className="font-ui text-xs text-primary-200/50 mt-5 animate-fade-in-up" style={{ animationDelay: '1.8s' }}>
            LINEで30秒。あなたの肌と、出会い直す旅へ。
          </p>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-[2]" />
    </section>
  )
}
