'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
function useCountUp(end: number, duration = 1400, start = 0, trigger = false) {
  const [value, setValue] = useState(start);
  useEffect(() => {
    if (!trigger) return;
    let frame = 0;
    const totalFrames = Math.max(1, Math.round(duration / 16));
    const diff = end - start;
    const id = window.setInterval(() => {
      frame += 1;
      const progress = frame / totalFrames;
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(start + diff * eased));
      if (frame >= totalFrames) {
        setValue(end);
        window.clearInterval(id);
      }
    }, 16);
    return () => window.clearInterval(id);
  }, [duration, end, start, trigger]);
  return value;
}
export default function CTASection() {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const particles = useMemo(
    () =>
      Array.from({ length: 32 }, (_, i) => ({
        id: i,
        left: `${(i * 9.7) % 100}%`,
        top: `${(i * 15.3) % 100}%`,
        size: 4 + ((i * 3) % 10),
        duration: 8 + (i % 7),
        delay: (i % 9) * 0.45,
      })),
    []
  );
  const count1 = useCountUp(14, 1200, 0, visible);
  const count2 = useCountUp(3, 1000, 0, visible);
  const count3 = useCountUp(100, 1400, 0, visible);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.25 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);
  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-[#17090d] px-6 py-24 text-white md:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(196,2,52,.30),transparent_26%),radial-gradient(circle_at_80%_30%,rgba(212,175,55,.22),transparent_28%),linear-gradient(180deg,#16090d_0%,#0f0a0c_100%)]" />
      {particles.map((p) => (
        <span
          key={p.id}
          className="pointer-events-none absolute rounded-full bg-[#d4af37]/40 blur-[1px]"
          style={{
            left: p.left, top: p.top,
            width: `${p.size}px`, height: `${p.size}px`,
            animation: `ctaParticle ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
      <div className="relative mx-auto max-w-6xl rounded-[2.25rem] border border-white/10 bg-white/[0.05] p-8 shadow-[0_30px_120px_rgba(0,0,0,.28)] backdrop-blur-xl md:p-12">
        <div className="absolute inset-0 rounded-[2.25rem] ring-1 ring-[#d4af37]/20" />
        <div className="pointer-events-none absolute inset-0 rounded-[2.25rem]">
          <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c40234]/20 blur-3xl animate-pulse" />
          <div className="absolute left-[62%] top-[42%] h-44 w-44 rounded-full bg-[#d4af37]/20 blur-3xl animate-pulse" />
        </div>
        <div className="relative z-10">
          <p
            className={`text-center text-xs uppercase tracking-[0.38em] text-[#d4af37] transition-all duration-700 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            14 Days Program
          </p>
          <h2
            className={`mx-auto mt-5 max-w-4xl text-center text-4xl leading-tight md:text-6xl transition-all duration-700 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{ transitionDelay: '140ms', fontFamily: '"Noto Serif JP", Cinzel, serif' }}
          >
            まずは、14日間。
            <br />
            肌と感覚の余白を取り戻す体験へ。
          </h2>
          <p
            className={`mx-auto mt-6 max-w-2xl text-center text-sm leading-8 text-white/72 md:text-base transition-all duration-700 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{ transitionDelay: '280ms' }}
          >
            引き算のスキンケアを、あなたの肌で体験してください。
            覚悟のある方だけに、この先を。
          </p>
          <div
            className={`mt-10 grid gap-4 md:grid-cols-3 transition-all duration-700 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{ transitionDelay: '420ms' }}
          >
            <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5 text-center">
              <p className="text-xs uppercase tracking-[0.28em] text-white/45">Days</p>
              <p className="mt-3 text-4xl font-semibold text-[#d4af37]">{count1}</p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5 text-center">
              <p className="text-xs uppercase tracking-[0.28em] text-white/45">Steps</p>
              <p className="mt-3 text-4xl font-semibold text-[#d4af37]">{count2}</p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5 text-center">
              <p className="text-xs uppercase tracking-[0.28em] text-white/45">Clarity</p>
              <p className="mt-3 text-4xl font-semibold text-[#d4af37]">{count3}%</p>
            </div>
          </div>
          <div
            className={`mt-10 flex justify-center transition-all duration-700 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{ transitionDelay: '560ms' }}
          >
            <a
              href="https://lin.ee/qF2bQ2v"
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-[#d4af37] bg-[#d4af37] px-8 py-4 font-sans text-sm font-medium text-black shadow-[0_0_0_0_rgba(212,175,55,.45)] transition hover:scale-[1.03] hover:shadow-[0_0_36px_6px_rgba(212,175,55,.22)]"
            >
              <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,.4)_50%,transparent_100%)] opacity-0 transition duration-700 group-hover:translate-x-full group-hover:opacity-100" />
              <span className="relative z-10">14日間の引き算プログラムを始める</span>
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes ctaParticle {
          0% { transform: translate3d(0, 0, 0) scale(0.9); opacity: 0; }
          20% { opacity: 0.7; }
          50% { transform: translate3d(18px, -28px, 0) scale(1.15); opacity: 1; }
          100% { transform: translate3d(-10px, -56px, 0) scale(0.8); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
