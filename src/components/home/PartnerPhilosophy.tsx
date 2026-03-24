'use client';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 28 } as const,
  whileInView:{ opacity: 1, y: 0  } as const,
  viewport:   { once: true as const, margin: '-80px' as const },
  transition: { duration: 1.1, ease: 'easeOut' as const, delay },
});

export default function PartnerPhilosophy() {
  return (
    <section
      id="partner"
      className="relative w-full z-10 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #0d0003 0%, #1a0005 60%, #0d0003 100%)' }}
    >
      {/* 背景: 中央ゴールドグロー */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[160px]"
          style={{ background: 'rgba(212,175,55,0.05)' }}
        />
      </div>

      <div className="relative z-10 max-w-[1000px] mx-auto px-6 md:px-16 py-24 md:py-36">

        {/* ── キャッチコピー ── */}
        <motion.div {...fadeUp(0)} className="mb-16 md:mb-20">
          {/* セクションラベル */}
          <p
            className="text-[10px] tracking-[0.55em] text-[#cfaa70]/60 uppercase mb-8"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Distribution Philosophy
          </p>

          {/* メインタイトル */}
          <h2
            className="font-heading-ja font-light text-white tracking-[0.06em] leading-[1.2]"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', whiteSpace: 'nowrap' }}
          >
            売らないで広がる
          </h2>

          {/* ゴールド下線 */}
          <motion.div
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
            viewport={{ once: true }} transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="mt-6 origin-left h-px"
            style={{ background: 'linear-gradient(90deg, rgba(212,175,55,0.7), transparent)' }}
          />
        </motion.div>

        {/* ── 本文 ── */}
        <div className="space-y-10 md:space-y-14">

          <motion.p
            {...fadeUp(0.10)}
            className="text-base md:text-lg leading-[2.4] tracking-[0.08em] text-white/80 text-justify"
            style={{ fontFamily: '"Noto Serif JP", serif' }}
          >
            アキノリオはお陰様で全国のパートナー代理店から<br className="hidden md:block" />
            直接ご購入いただけるようになっています。
          </motion.p>

          {/* 強調ブロック */}
          <motion.div
            {...fadeUp(0.18)}
            className="border-l-2 border-[#cfaa70]/50 pl-6 md:pl-8 py-1"
          >
            <p
              className="text-xl md:text-2xl font-light tracking-[0.12em] text-[#cfaa70]"
              style={{ fontFamily: '"Noto Serif JP", serif' }}
            >
              理念は「売らないで広がる」こと。
            </p>
          </motion.div>

          <motion.p
            {...fadeUp(0.26)}
            className="text-sm md:text-base leading-[2.6] tracking-[0.08em] text-white/65 text-justify"
            style={{ fontFamily: '"Noto Serif JP", serif' }}
          >
            自然な口コミだけで連鎖する。過度な売り込みは完全に禁止。<br className="hidden md:block" />
            パートナー代理店であるオーナー自身が本当に惚れ込んだ場合のみ<br className="hidden md:block" />
            お取り扱いいただいております。
          </motion.p>

          {/* 3つの要素 */}
          <motion.div {...fadeUp(0.34)} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pt-4">
            {[
              { num: '01', text: '感動を伝える' },
              { num: '02', text: 'その感動が次の人に届く' },
              { num: '03', text: 'それだけで広がっていく' },
            ].map(({ num, text }) => (
              <div key={num} className="flex flex-col gap-3 border-t border-[#cfaa70]/20 pt-5">
                <span
                  className="text-[10px] tracking-[0.4em] text-[#cfaa70]/50"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  {num}
                </span>
                <p
                  className="text-sm leading-relaxed tracking-[0.06em] text-white/75"
                  style={{ fontFamily: '"Noto Serif JP", serif' }}
                >
                  {text}
                </p>
              </div>
            ))}
          </motion.div>

          {/* 締めの言葉 */}
          <motion.p
            {...fadeUp(0.42)}
            className="text-sm md:text-base leading-[2.6] tracking-[0.1em] text-[#cfaa70]/80 text-center pt-6"
            style={{ fontFamily: '"Noto Serif JP", serif' }}
          >
            アキノリオの広がりは、感動の広がりである。
          </motion.p>

        </div>
      </div>
    </section>
  );
}

