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

  // Parallax for the CEO image
  const yImg = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2 } }
  };

  return (
    <section id="story" ref={containerRef} className="relative w-full overflow-hidden bg-gradient-to-br from-[#94081F] to-[#7C0114] text-white py-32 md:py-48 z-10">
      
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12 flex flex-col md:flex-row gap-16 md:gap-24 items-start">
        
        {/* Vertical Title (Guideline: H2 Vertical-RL) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5 }}
          className="hidden md:flex flex-col items-center"
        >
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-[0.2em] text-[#E31633] uppercase select-none opacity-80" 
            style={{ writingMode: 'vertical-rl', fontFamily: 'Neue Haas Grotesk, Helvetica Neue, sans-serif' }}
          >
            BRAND STORY
          </h2>
        </motion.div>

        {/* Content Wrapper */}
        <div className="flex-1 w-full flex flex-col items-start text-left">
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="mb-16 md:mb-24 w-full"
          >
            <p className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-[#FFFFFF]/70 mb-4 font-sans md:hidden">
              BRAND STORY
            </p>
            <h3 className="text-3xl md:text-5xl font-bold tracking-wider leading-[1.6]" style={{ fontFamily: '"Noto Serif JP", sans-serif' }}>
              「増やすことじゃなかった」
            </h3>
          </motion.div>

          <div className="grid w-full gap-16 lg:grid-cols-2 lg:items-start relative">
            
            {/* Bright, Trustworthy CEO Image without rounding or shadows */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative w-full max-w-[320px] md:max-w-[440px] aspect-[3/4] overflow-hidden flex-shrink-0 bg-white"
            >
              {/* Warm, inviting background glow behind the image container (not obscuring her) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#fdfbf7] to-[#ffffff] z-0" />
              
              <motion.div style={{ y: yImg, height: '110%', width: '100%', top: '-5%' }} className="absolute z-10 w-full">
                <Image
                  src="/images/minakoceo.png"
                  alt="CEO Minako"
                  fill
                  className="object-cover object-top opacity-100 mix-blend-multiply"
                  sizes="(max-width: 1024px) 100vw, 440px"
                  priority
                />
              </motion.div>
            </motion.div>

            {/* Left-Aligned, Crisp Text (Body) */}
            <div className="flex flex-col justify-start max-w-lg space-y-16">
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }}
                variants={fadeIn}
                className="space-y-6"
              >
                <h4 className="text-2xl md:text-3xl text-white font-bold leading-relaxed tracking-wide" style={{ fontFamily: '"Noto Serif JP", sans-serif' }}>
                  過剰さが奪う、本来の美しさ。
                </h4>
                <p className="text-sm md:text-base leading-[2.2] text-white/90 font-medium tracking-wide">
                  初めまして。アキノリオ代表の Minako です。<br/><br/>
                  世の中には無数のスキンケアが溢れ、次から次へと新しい成分が提案されます。しかし、肌の不調の多くが、実はそうした「与えすぎ」によって起こっています。良かれと思って美容液を重ね、高いクリームを塗り込むこと… そのこれまでの努力の方向性が、本来の肌が求めることとは『真逆』だったとしたらどうでしょうか。
                </p>
              </motion.div>

              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }}
                variants={fadeIn}
                className="space-y-6"
              >
                <h4 className="text-2xl md:text-3xl text-white font-bold leading-relaxed tracking-wide" style={{ fontFamily: '"Noto Serif JP", sans-serif' }}>
                  絶対に売り込まない。<br/>それが私たちの誓い。
                </h4>
                <p className="text-sm md:text-base leading-[2.2] text-white/90 font-medium tracking-wide">
                  私たちアキノリオは、「無理に商品を売り込むことは絶対にしない」と誓っています。一人ひとりのお客様の声を直接聞き続け、改良を重ねてきたからこそ、今の納得のいくプロダクトが誕生しました。<br/><br/>
                  過剰なケアを一度に手放す恐怖も、私はよく分かっています。だからこそ、無理をせず、まずはご自身の肌の感覚を信じることから始めていただきたいのです。どんな些細なご不安も、私、創業者のMINAKOが直接対応させていただきます。
                </p>
              </motion.div>

              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }}
                variants={fadeIn}
                className="pt-8 flex flex-col gap-2"
              >
                <span className="text-[10px] tracking-[0.2em] text-[#FFFFFF]/70 uppercase font-sans font-bold">AKINORIO 代表</span>
                <span className="text-3xl text-white font-black" style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>MINAKO</span>
              </motion.div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
