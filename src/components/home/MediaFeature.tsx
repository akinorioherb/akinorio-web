'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const MEDIA = [
  {
    src: '/images/media-bist.avif',
    alt: '美ST 2025年4月号本誌',
    label: '美ST 2025年4月号',
  },
  {
    src: '/images/media-crea.avif',
    alt: 'CREA 2025年春号',
    label: 'CREA 2025年春号',
  },
  {
    src: '/images/media-japanbusiness.avif',
    alt: '日本が誇るビジネス大賞2025',
    label: '日本が誇るビジネス大賞 2025',
  },
];

export default function MediaFeature() {
  return (
    <section className="relative w-full bg-[#0d0003] py-16 md:py-20 overflow-hidden">
      {/* 背景グロー */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-[#cfaa70]/5 blur-[80px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">

        {/* ヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 mb-10 md:mb-12"
        >
          {/* 左線 */}
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#cfaa70]/40" />
          <p
            className="text-[10px] md:text-xs tracking-[0.5em] text-[#cfaa70]/80 font-light uppercase whitespace-nowrap"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
          >
            As Featured In
          </p>
          {/* 右線 */}
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#cfaa70]/40" />
        </motion.div>

        {/* 雑誌カバー一覧 */}
        <div className="flex flex-row items-center justify-center gap-6 md:gap-10 lg:gap-16">
          {MEDIA.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex-shrink-0"
            >
              {/* ゴールドボーダーフレーム */}
              <div
                className="relative overflow-hidden rounded-sm transition-all duration-500 group-hover:shadow-[0_0_24px_4px_rgba(207,170,112,0.3)]"
                style={{
                  border: '1px solid rgba(207,170,112,0.25)',
                  width: 'clamp(160px, 28vw, 280px)',
                  aspectRatio: '2/3',
                }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 160px, 280px"
                />
                {/* ホバーオーバーレイ */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0003]/60 via-transparent to-transparent opacity-70 group-hover:opacity-30 transition-opacity duration-500" />
              </div>

              {/* メディア名ラベル */}
              <p
                className="mt-2 text-center text-[9px] md:text-[10px] tracking-[0.25em] text-[#cfaa70]/50 group-hover:text-[#cfaa70]/80 transition-colors duration-300 uppercase"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
              >
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
