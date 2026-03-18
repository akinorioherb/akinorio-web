'use client';
import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';
type Product = {
  id: number;
  name: string;
  subtitle: string;
  price: string;
  image: string;
  accent: string;
};
const products: Product[] = [
  {
    id: 1,
    name: 'Serum',
    subtitle: '濃密な手応えを、静かに届ける美容液',
    price: '¥13,200',
    image: '/images/products/serum.png',
    accent: '#d4af37',
  },
  {
    id: 2,
    name: 'Cleansing',
    subtitle: '落としながら、うるおいの余韻を残す',
    price: '¥5,280',
    image: '/images/products/cleansing.png',
    accent: '#c40234',
  },
  {
    id: 3,
    name: 'Soap',
    subtitle: '余分を洗い流し、肌をまっすぐに整える',
    price: '¥3,960',
    image: '/images/products/soap.png',
    accent: '#b8942f',
  },
];
function TiltCard({ product, active }: { product: Product; active: boolean }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, glowX: 50, glowY: 50 });
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const node = cardRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * 16;
    const rotateX = (0.5 - py) * 16;
    setTilt({ x: rotateX, y: rotateY, glowX: px * 100, glowY: py * 100 });
  };
  const reset = () => setTilt({ x: 0, y: 0, glowX: 50, glowY: 50 });
  return (
    <div className="[perspective:1400px]">
      <div
        ref={cardRef}
        onMouseMove={onMove}
        onMouseLeave={reset}
        className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_80px_rgba(0,0,0,.25)] backdrop-blur-xl transition-all duration-700 md:p-8 ${
          active ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1,1,1)`,
          transformStyle: 'preserve-3d',
          transitionProperty: 'transform, opacity',
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{
            background: `radial-gradient(circle at ${tilt.glowX}% ${tilt.glowY}%, ${product.accent}33, transparent 34%)`,
          }}
        />
        <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="relative z-10" style={{ transform: 'translateZ(40px)' }}>
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/45" style={{ fontFamily: 'Cinzel, serif' }}>
                Signature
              </p>
              <h3 className="mt-2 text-3xl text-white md:text-4xl" style={{ fontFamily: 'Cinzel, "Noto Serif JP", serif' }}>
                {product.name}
              </h3>
            </div>
            <span className="rounded-full border px-4 py-1 text-xs tracking-[0.25em]" style={{ borderColor: `${product.accent}66`, color: product.accent }}>
              {product.price}
            </span>
          </div>
          <p className="max-w-sm text-sm leading-7 text-white/72">{product.subtitle}</p>
        </div>
        <div className="relative mt-8 flex min-h-[320px] items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
          <div className="absolute h-48 w-48 rounded-full blur-3xl" style={{ background: `${product.accent}2e`, transform: 'translateZ(20px)' }} />
          <Image
            src={product.image}
            alt={product.name}
            width={560}
            height={560}
            className="relative z-10 h-auto max-h-[360px] w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,.35)] transition duration-500 group-hover:scale-[1.04]"
            style={{ transform: 'translateZ(72px)' }}
          />
        </div>
      </div>
    </div>
  );
}
export default function ProductShowcase() {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const staggered = useMemo(() => products, []);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.18 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);
  return (
    <section id="products" ref={ref} className="relative overflow-hidden bg-[#0f0b0d] px-6 py-24 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#d4af37]" style={{ fontFamily: 'Cinzel, serif' }}>
              Product Showcase
            </p>
            <h2 className="mt-3 text-4xl md:text-6xl" style={{ fontFamily: '"Noto Serif JP", Cinzel, serif' }}>
              触れたくなる、静かな存在感。
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/65">
            引き算のスキンケアを構成する、3つのアイテム。
            あなたの肌に、本当に必要なものだけを届けます。
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {staggered.map((product, index) => (
            <div key={product.id} style={{ transitionDelay: `${index * 140}ms` }}>
              <TiltCard product={product} active={visible} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
