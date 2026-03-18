'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
const headline = '引き算の美学';
const subcopy = '何をつけるかより、何をやめるか。';
function splitText(text: string) {
  return text.split('');
}
export default function BrandStory() {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const headlineChars = useMemo(() => splitText(headline), []);
  const subcopyChars = useMemo(() => splitText(subcopy), []);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);
  return (
    <section id="story" ref={ref} className="relative overflow-hidden bg-[#f7f3ee] px-6 py-28 text-[#21181b] md:px-10">
      <div className="absolute inset-0 opacity-60">
        <div className="absolute left-[-10%] top-[-8%] h-72 w-72 rounded-full bg-[#d4af37]/10 blur-3xl" />
        <div className="absolute bottom-[-8%] right-[-10%] h-80 w-80 rounded-full bg-[#c40234]/10 blur-3xl" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[#c40234]" style={{ fontFamily: 'Cinzel, serif' }}>
            Brand Story
          </p>
          <h2 className="mt-6 text-4xl leading-tight md:text-6xl" style={{ fontFamily: '"Noto Serif JP", Cinzel, serif' }}>
            {headlineChars.map((char, i) => (
              <span
                key={`${char}-${i}`}
                className="inline-block"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(32px)',
                  filter: visible ? 'blur(0px)' : 'blur(8px)',
                  transition: 'opacity 700ms ease, transform 700ms ease, filter 700ms ease',
                  transitionDelay: `${i * 90}ms`,
                }}
              >
                {char}
              </span>
            ))}
          </h2>
          <p className="mt-6 text-xl leading-9 text-[#3a2d31] md:text-2xl" style={{ fontFamily: '"Noto Serif JP", serif' }}>
            {subcopyChars.map((char, i) => (
              <span
                key={`${char}-${i}`}
                className="inline-block"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 600ms ease, transform 600ms ease',
                  transitionDelay: `${700 + i * 45}ms`,
                }}
              >
                {char}
              </span>
            ))}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { title: 'LESS FORMULA', body: '重ねる発想ではなく、肌の負担になりうる要素を削ぎ落とす。処方そのものに静けさを持たせる設計思想。' },
            { title: 'LESS NOISE', body: '過剰な演出、過剰な情報、過剰な約束をしない。余白があるからこそ、品質そのものが際立つ。' },
            { title: 'LESS STEPS', body: '複雑さを増やさず、日々のケアを洗練させる。続けやすいこともラグジュアリーの一部だと考える。' },
            { title: 'MORE CLARITY', body: '引き算の先に残るのは、肌と感覚の透明感。静かに整っていく体験を、長く愛される価値へ。' },
          ].map((item, i) => (
            <div
              key={item.title}
              className="rounded-[1.75rem] border border-[#21181b]/10 bg-white/70 p-7 shadow-[0_18px_60px_rgba(0,0,0,.06)] backdrop-blur-sm transition-all duration-700"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(28px)',
                transitionDelay: `${1000 + i * 130}ms`,
              }}
            >
              <p className="text-xs uppercase tracking-[0.32em] text-[#c40234]" style={{ fontFamily: 'Cinzel, serif' }}>
                {item.title}
              </p>
              <p className="mt-4 text-sm leading-7 text-[#4a3f43]">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
