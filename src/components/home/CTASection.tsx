'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

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
            style={{ writingMode: 'vertical-rl', fontFamily: '"Noto Serif JP", serif' }}
          >
            引き算の体験
          </h2>
        </motion.div>

        {/* Content Area */}
        <div className="flex-1 w-full flex flex-col items-start text-left">
          
          <div className="mb-16 md:mb-24 w-full">
            <p className="text-[10px] md:text-xs tracking-[0.5em] text-[#E31633] mb-6 font-bold md:hidden" style={{ fontFamily: '"Noto Serif JP", serif' }}>
              引き算の体験
            </p>
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter leading-[1.3] text-white" style={{ fontFamily: '"Noto Serif JP", serif' }}>
              あなたの<br/>
              肌の歴史を、<br/>
              <span className="font-bold">引き算</span>から<br className="md:hidden" />やり直す。
            </h3>
          </div>

          <div className="flex flex-col md:flex-row gap-16 md:gap-32 w-full lg:items-center">
            
            {/* Left: Metrics & Counter */}
            <div className="flex flex-col space-y-16 flex-shrink-0">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="flex flex-col"
              >
                <span className="text-xs uppercase tracking-[0.4em] text-white/50 mb-2 font-mono">Repeat Rate</span>
                <span className="text-5xl md:text-7xl font-black text-white" style={{ fontFamily: 'Neue Haas Grotesk, sans-serif' }}>
                  <AnimatedCounter end={90} />%<span className="text-3xl font-light ml-2">+</span>
                </span>
                <span className="text-[10px] text-white/30 mt-2 tracking-wider">※当社販売実績データ</span>
              </motion.div>
            </div>

            {/* Right: Action Box (Strict Rectangle, Left Align) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="w-full max-w-lg bg-[#3D010A] p-10 md:p-16 relative overflow-hidden group border border-[#E31633]/20 hover:border-[#E31633]/50 transition-colors duration-500"
            >
              {/* Subtle hover gleam */}
              <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg] group-hover:left-[200%] transition-all duration-1000 ease-in-out" />

              <h4 className="text-2xl md:text-3xl text-white font-bold tracking-widest mb-6" style={{ fontFamily: '"Noto Serif JP", serif' }}>
                14日間プログラム
              </h4>
              <p className="text-sm md:text-base text-white/80 leading-loose tracking-wider mb-12 text-justify md:text-left">
                まずは、過剰なスキンケアをお休みし、ご自身の肌環境をリセットする14日間をお試しください。本当に必要なものは何か、肌が答えてくれます。
              </p>

              <button className="relative overflow-hidden w-full bg-white text-[#120002] py-5 px-8 flex items-center justify-between group transition-all duration-300">
                <span className="text-sm md:text-base font-bold tracking-[0.2em] relative z-10" style={{ fontFamily: '"Noto Serif JP", sans-serif' }}>
                  14日間の引き算を始める
                </span>
                <svg className="w-5 h-5 relative z-10 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                {/* Button hover effect */}
                <div className="absolute inset-0 bg-[#E31633] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0" />
                <span className="absolute inset-0 flex items-center justify-between py-5 px-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 delay-100 pointer-events-none">
                  <span className="text-sm md:text-base font-bold tracking-[0.2em]" style={{ fontFamily: '"Noto Serif JP", sans-serif' }}>
                    14日間の引き算を始める
                  </span>
                  <svg className="w-5 h-5 transform translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
