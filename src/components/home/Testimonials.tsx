'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
type Testimonial = {
  id: number;
  name: string;
  role: string;
  body: string;
};
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Mika / 42',
    role: 'Customer',
    body: '派手ではないのに、使うたびに肌の調子が整っていく感覚があります。洗面台に置いた時の佇まいまで美しいです。',
  },
  {
    id: 2,
    name: 'Aya / 37',
    role: 'Customer',
    body: 'いろいろ足すより、これで十分だと思える安心感がありました。スキンケア時間が静かで上質なものに変わりました。',
  },
  {
    id: 3,
    name: 'Nozomi / 45',
    role: 'Customer',
    body: '香りも主張しすぎず、肌に触れた瞬間の感覚がとても上品。余分を削いだブランド哲学がそのまま伝わります。',
  },
  {
    id: 4,
    name: 'Emi / 39',
    role: 'Customer',
    body: '続けるほど印象が変わるタイプ。劇的というより、毎日少しずつ好きになるプロダクトだと感じました。',
  },
];
export default function Testimonials() {
  const ref = useRef<HTMLElement | null>(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const visibleCards = useMemo(() => testimonials.slice(0, visibleCount), [visibleCount]);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        let step = 0;
        const interval = window.setInterval(() => {
          step += 1;
          setVisibleCount((prev) => Math.max(prev, Math.min(step, testimonials.length)));
          if (step >= testimonials.length) window.clearInterval(interval);
        }, 180);
        io.disconnect();
      },
      { threshold: 0.25 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);
  return (
    <section ref={ref} className="relative overflow-hidden bg-[#120d10] px-6 py-24 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#d4af37]" style={{ fontFamily: 'Cinzel, serif' }}>
              Testimonials
            </p>
            <h2 className="mt-3 text-4xl md:text-6xl" style={{ fontFamily: '"Noto Serif JP", Cinzel, serif' }}>
              引き算を選んだ方の声。
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/65">
            感動は、静かに広がる。
            引き算のスキンケアを体験した方々の声をお届けします。
          </p>
        </div>
        <div className="relative mx-auto h-[540px] max-w-4xl">
          {testimonials.map((item, index) => {
            const isVisible = index < visibleCards.length;
            const collapsedOffset = index * 10;
            const expandedOffsetX = index % 2 === 0 ? -24 : 24;
            const expandedOffsetY = index * 42;
            return (
              <article
                key={item.id}
                className="absolute left-1/2 top-0 w-full max-w-3xl -translate-x-1/2 rounded-[2rem] border border-white/10 bg-white/[0.05] p-7 shadow-[0_25px_90px_rgba(0,0,0,.28)] backdrop-blur-xl md:p-9"
                style={{
                  transform: isVisible
                    ? `translateX(calc(-50% + ${expandedOffsetX}px)) translateY(${expandedOffsetY}px) rotate(${index % 2 === 0 ? '-3deg' : '3deg'})`
                    : `translateX(-50%) translateY(${collapsedOffset}px) rotate(${index % 2 === 0 ? '-1deg' : '1deg'}) scale(0.98)`,
                  opacity: isVisible ? 1 : 0.45,
                  zIndex: testimonials.length - index,
                  transition: 'transform 700ms cubic-bezier(.22,1,.36,1), opacity 500ms ease',
                }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.32em] text-[#d4af37]" style={{ fontFamily: 'Cinzel, serif' }}>
                      Real Voice
                    </p>
                    <h3 className="mt-2 text-xl text-white">{item.name}</h3>
                    <p className="mt-1 text-sm text-white/55">{item.role}</p>
                  </div>
                  <span className="text-5xl leading-none text-[#c40234]/80">&ldquo;</span>
                </div>
                <p className="mt-7 text-base leading-8 text-white/78 md:text-lg">{item.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
