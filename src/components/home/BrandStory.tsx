'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const SplitText = ({ text }: { text: string }) => {
  return (
    <span className="inline-block">
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, filter: 'blur(10px)', y: 15 },
            visible: { opacity: 1, filter: 'blur(0px)', y: 0, transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] } }
          }}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

export default function BrandStory() {
  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Dramatic Parallax for the CEO image
  const yImg = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  const fadeIn = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1.5 } }
  };

  return (
    <section id="story" ref={containerRef} className="relative w-full overflow-hidden bg-[#0a0507] text-white py-32 md:py-48">
      {/* Immersive Dark Background with faint glowing spheres like liquid/cells */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none mix-blend-screen">
        <div className="absolute left-[-10%] top-[20%] h-[600px] w-[600px] rounded-full bg-[#d4af37]/5 blur-[120px]" />
        <div className="absolute right-[-20%] bottom-[10%] h-[800px] w-[800px] rounded-full bg-[#c40234]/5 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12 flex flex-col items-center">
        
        {/* Cinematic Title Reveal */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
          className="text-center mb-32 md:mb-48"
        >
          <p className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-[#d4af37] mb-8 font-sans">
            Founder's Philosophy
          </p>
          <h2 className="text-3xl leading-[1.8] md:text-5xl md:leading-[1.6] font-light tracking-wider" style={{ fontFamily: '"Noto Serif JP", Cinzel, serif' }}>
            <SplitText text="「増やすことじゃなかった」" />
          </h2>
        </motion.div>

        {/* Parallax Image & Text Interplay */}
        <div className="grid w-full gap-24 lg:grid-cols-2 lg:gap-32 lg:items-center relative">
          
          <motion.div 
            initial={{ opacity: 0, filter: 'blur(20px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="relative h-[65vh] w-full lg:h-[80vh] overflow-hidden"
          >
            <motion.div style={{ y: yImg, height: '120%', width: '100%', top: '-10%' }} className="absolute">
              <Image
                src="/images/minakoceo.png"
                alt="CEO Minako"
                fill
                className="object-cover object-top opacity-70 sepia-[0.2] contrast-125"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Fade out edges for seamless blending into the dark background */}
              <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(10,5,7,1)]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0507] via-transparent to-transparent" />
            </motion.div>
          </motion.div>

          <div className="flex flex-col justify-center max-w-lg space-y-24">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }}
              variants={fadeIn}
              className="space-y-6"
            >
              <h3 className="text-2xl md:text-3xl text-white/90 font-light leading-relaxed tracking-wide" style={{ fontFamily: '"Noto Serif JP", serif' }}>
                過剰さが奪う、本来の美しさ。
              </h3>
              <p className="text-xs md:text-sm leading-[2.4] text-white/60 font-light tracking-widest text-justify">
                初めまして。アキノリオ代表の Minako です。<br/><br/>
                世の中には無数のスキンケアが溢れ、次から次へと新しい成分が提案されます。しかし、肌の不調の多くが、実はそうした「与えすぎ」によって起こっています。良かれと思って美容液を重ね、高いクリームを塗り込むこと… そのこれまでの努力の方向性が、本来の肌が求めることとは『真逆』だったとしたらどうでしょうか。
              </p>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }}
              variants={fadeIn}
              className="space-y-6"
            >
              <h3 className="text-2xl md:text-3xl text-white/90 font-light leading-relaxed tracking-wide" style={{ fontFamily: '"Noto Serif JP", serif' }}>
                絶対に売り込まない。<br/>それが私たちの誓い。
              </h3>
              <p className="text-xs md:text-sm leading-[2.4] text-white/60 font-light tracking-widest text-justify">
                私たちアキノリオは、「無理に商品を売り込むことは絶対にしない」と誓っています。一人ひとりのお客様の声を直接聞き続け、改良を重ねてきたからこそ、今の納得のいくプロダクトが誕生しました。<br/><br/>
                過剰なケアを一度に手放す恐怖も、私はよく分かっています。だからこそ、無理をせず、まずはご自身の肌の感覚を信じることから始めていただきたいのです。どんな些細なご不安も、私、創業者のMINAKOが直接LINEで対応させていただきます。
              </p>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }}
              variants={fadeIn}
              className="pt-10 flex flex-col gap-3"
            >
              <span className="text-[9px] tracking-[0.4em] text-[#d4af37] uppercase font-sans">AKINORIO 代表</span>
              <span className="text-4xl text-white/90 font-light" style={{ fontFamily: 'Cinzel, serif' }}>MINAKO</span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
