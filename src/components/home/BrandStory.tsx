'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const headline = '引き算という、美しさの答え。';

export default function BrandStory() {
  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section id="story" ref={containerRef} className="relative overflow-hidden bg-[#f7f3ee] px-6 py-32 text-[#21181b] md:px-10">
      <motion.div style={{ y: yBg }} className="absolute inset-0 opacity-60 pointer-events-none">
        <div className="absolute left-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-[#d4af37]/10 blur-[100px]" />
        <div className="absolute bottom-[10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-[#c40234]/5 blur-[100px]" />
      </motion.div>

      <div className="relative mx-auto max-w-4xl">
        <div className="text-center mb-24">
          <p className="text-xs uppercase tracking-[0.35em] text-[#c40234] mb-6" style={{ fontFamily: 'Cinzel, serif' }}>
            Brand Story
          </p>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              visible: { transition: { staggerChildren: 0.08 } },
              hidden: {},
            }}
            className="text-3xl leading-tight md:text-5xl"
            style={{ fontFamily: '"Noto Serif JP", Cinzel, serif' }}
          >
            {headline.split('').map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, filter: 'blur(12px)', y: 30 },
                  visible: {
                    opacity: 1,
                    filter: 'blur(0px)',
                    y: 0,
                    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>
        </div>

        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <motion.div
            style={{ y: yImg }}
            className="relative h-[60vh] w-full max-h-[600px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/minakoceo.png"
              alt="CEO Minako"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 border border-[#d4af37]/30 rounded-2xl pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6 text-[#3a2d31]"
            style={{ fontFamily: '"Noto Serif JP", serif' }}
          >
            <h3 className="text-2xl leading-relaxed text-[#c40234]">
              創業者MINAKOからの<br />ご提案と私たちのお約束
            </h3>
            
            <div className="space-y-5 text-sm md:text-base leading-loose">
              <p>
                初めまして。アキノリオ代表の Minako です。<br /><br />
                私たちアキノリオは、<span className="text-[#c40234] font-bold">「無理に商品を売り込むことは絶対にしない」</span>と誓っています。これは私たちの存在意義であり、決して曲げることのない約束です。
              </p>
              
              <p>
                世の中には無数のスキンケアが溢れ、次から次へと新しい成分が提案されます。肌の不調の多くが、実はそうした「与えすぎ」によって起こっています。
              </p>
              
              <p>
                良かれと思って美容液を重ね、高いクリームを塗り込むこと… そのこれまでの努力の方向性が、本来の肌が求めることとは<strong className="text-[#d4af37] font-bold">『真逆』だった</strong>としたらどうでしょうか。
              </p>
              
              <p>
                しかし、その過剰なケアを一度に手放す恐怖も、私はよく分かっています。だからこそ、無理をせず、まずは自分の肌の感覚を信じることから始めていただきたいのです。
              </p>

              <div className="mt-8 p-6 rounded-xl bg-black/5 border-l-4 border-[#d4af37]">
                <p className="text-sm leading-relaxed">
                  また、LINEでのご相談は、<strong className="text-[#d4af37]">社員やAIでもなく</strong><br />
                  <strong className="text-[#d4af37] text-lg">私、創業者のMINAKOが直接対応させていただきます。</strong><br /><br />
                  一人ひとりのお客様の声を直接聞き続け、改良を重ねてきたからこそ、<strong className="text-[#d4af37]">絶対に売り込まない、今の納得のいくアキノリオ</strong>が生まれ、今も進化し続けています。どんな些細なご不安も、どうぞお気軽にご相談ください。
                </p>
              </div>

              <div className="mt-10 text-right flex flex-col items-end gap-1">
                <span className="text-xs tracking-widest text-[#8a7f83]">AKINORIO 代表</span>
                <span className="text-2xl" style={{ fontFamily: 'Cinzel, serif' }}>MINAKO</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
