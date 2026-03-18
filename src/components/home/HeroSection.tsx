'use client';
import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';
export default function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [visible, setVisible] = useState(false);
  const floatingDots = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        size: 6 + ((i * 7) % 18),
        left: `${(i * 13) % 100}%`,
        top: `${(i * 17) % 100}%`,
        delay: `${(i % 6) * 0.6}s`,
        duration: `${6 + (i % 5)}s`,
      })),
    []
  );
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.25 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  const translateBack = scrollY * 0.12;
  const translateMid = scrollY * 0.2;
  const translateFront = scrollY * 0.32;
  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-screen overflow-hidden bg-[#14070b] text-white"
    >
      {/* Background layers */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${translateBack}px) scale(1.08)`,
          background:
            'radial-gradient(circle at 20% 20%, rgba(212,175,55,.22), transparent 32%), radial-gradient(circle at 80% 25%, rgba(196,2,52,.30), transparent 30%), radial-gradient(circle at 50% 75%, rgba(255,255,255,.08), transparent 28%), linear-gradient(180deg, #1b0b10 0%, #0e0b0d 48%, #14070b 100%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-70"
        style={{
          transform: `translateY(${translateMid}px)`,
          background:
            'linear-gradient(120deg, transparent 0%, rgba(255,255,255,.05) 20%, transparent 40%), linear-gradient(300deg, transparent 0%, rgba(212,175,55,.08) 25%, transparent 50%)',
        }}
      />
      {floatingDots.map((dot) => (
        <span
          key={dot.id}
          className="absolute rounded-full bg-[#d4af37]/25 blur-[1px]"
          style={{
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            left: dot.left,
            top: dot.top,
            animation: `heroFloat ${dot.duration} ease-in-out infinite`,
            animationDelay: dot.delay,
            transform: `translateY(${translateFront * 0.08}px)`,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_65%,rgba(0,0,0,.45)_100%)]" />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20 md:px-10">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="order-2 lg:order-1">
            <p
              className={`mb-4 font-sans text-xs uppercase tracking-[0.4em] text-[#d4af37] transition-all duration-700 ${
                visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              AKINORIO / Luxury Minimal Skincare
            </p>
            <h1 className="max-w-3xl">
              <span
                className={`block font-serif text-5xl leading-none tracking-[0.08em] text-white transition-all duration-700 md:text-7xl ${
                  visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{
                  transitionDelay: '260ms',
                  fontFamily: 'Cinzel, "Noto Serif JP", serif',
                }}
              >
                LESS,
              </span>
              <span
                className={`mt-2 block font-serif text-4xl leading-tight text-white transition-all duration-700 md:text-6xl ${
                  visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{
                  transitionDelay: '420ms',
                  fontFamily: '"Noto Serif JP", serif',
                }}
              >
                纏うほど、研ぎ澄まされる。
              </span>
            </h1>
            <p
              className={`mt-8 max-w-xl text-sm leading-8 text-white/78 md:text-base ${
                visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              } transition-all duration-700`}
              style={{ transitionDelay: '580ms' }}
            >
              余計なものを重ねない。必要なものだけを、静かに深く届ける。
              <br />
              引き算という、美しさの答え。
            </p>
            <div
              className={`mt-10 flex flex-wrap gap-4 transition-all duration-700 ${
                visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '740ms' }}
            >
              <a
                href="https://lin.ee/qF2bQ2v"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#d4af37] bg-[#d4af37] px-7 py-3 font-sans text-sm font-medium text-black transition hover:scale-[1.03] hover:bg-[#e0bd4e]"
              >
                14日間の引き算プログラムを始める
              </a>
              <a
                href="#story"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3 font-sans text-sm font-medium text-white backdrop-blur transition hover:border-white/35 hover:bg-white/10"
              >
                ブランド哲学
              </a>
            </div>
          </div>
          <div className="order-1 flex justify-center lg:order-2">
            <div
              className="relative w-[88vw] max-w-[720px]"
              style={{ transform: `translateY(${translateFront * -0.12}px)` }}
            >
              <div className="absolute inset-0 rounded-full bg-[#c40234]/20 blur-3xl" />
              <div className="absolute left-1/2 top-1/2 h-[68%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4af37]/20 blur-3xl" />
              <div
                className={`relative transition-all duration-1000 ${
                  visible
                    ? 'translate-y-0 scale-100 opacity-100'
                    : 'translate-y-10 scale-95 opacity-0'
                }`}
                style={{ transitionDelay: '420ms' }}
              >
                <Image
                  src="/images/products/allseries.png"
                  alt="AKINORIO all series"
                  width={1200}
                  height={1200}
                  priority
                  className="h-auto w-full object-contain drop-shadow-[0_30px_80px_rgba(0,0,0,.45)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes heroFloat {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.35;
          }
          50% {
            transform: translateY(-18px) scale(1.12);
            opacity: 0.9;
          }
        }
      `}</style>
    </section>
  );
}
