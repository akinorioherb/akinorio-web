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
    <section id="story" ref={containerRef} className="relative w-full overflow-hidden bg-gradient-to-b from-[#3D010A] to-[#1A0005] text-white py-32 md:py-48 z-10">
      
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
              className="relative w-full max-w-[320px] md:max-w-[440px] aspect-[3/4] overflow-hidden flex-shrink-0 bg-[#3D010A]"
            >
              {/* Soft, calming beige/champagne glow behind the image container to remove piercing white contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#c9bcae] to-[#e6dfd3] opacity-90 z-0" />
              
              <motion.div style={{ y: yImg, height: '110%', width: '100%', top: '-5%' }} className="absolute z-10 w-full">
                <Image
                  src="/images/minakoceo.png"
                  alt="CEO Minako"
                  fill
                  className="object-cover object-top opacity-100"
                  sizes="(max-width: 1024px) 100vw, 440px"
                  priority
                />
              </motion.div>
            </motion.div>

            {/* Left-Aligned, Crisp Text (Body) */}
            <div className="flex flex-col justify-start max-w-lg space-y-16 mt-12 md:mt-0">
              
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }}
                variants={fadeIn}
                className="space-y-8"
              >
                <h4 className="text-2xl md:text-3xl text-[#fdfbf7] font-bold leading-relaxed tracking-wide" style={{ fontFamily: '"Noto Serif JP", serif' }}>
                  病気になっても、<br className="md:hidden" />いくつになっても、<br/>美しさを諦める必要はない。
                </h4>
                
                <div className="space-y-6 text-sm md:text-base leading-[2.4] tracking-wide text-white/90 font-medium text-justify">
                  <p>
                    初めまして。アキノリオ代表の MINAKO です。<br/><br/>
                    私自身、40代前半にバセドー病と橋本病を繰り返した影響で、毛穴の広がりや吹き出物に幾度となく悩まされました。
                  </p>
                  <p>
                    世界中のコスメを買い漁り、長くステロイド生活を続ける日々。しかし、どれを使用しても若干の潤いが感じられれば良い方で、一向に変化の無い自分の肌に悲観する毎日でした。
                  </p>
                  <p>
                    「もう自分と同じように悩む人のために、本当に肌を変えるものを作りたい。」<br/>
                    その切実な想いから生化学者や化粧品研究者とタッグを組み、独自の年齢肌化粧品の開発に成功しました。
                  </p>
                  <p>
                    今では、「肌の印象が10年前に戻ったようだ」「ファンデーションカラーが2段階明るくなった」など、全国から毎日喜びの声をいただけるようになりました。どの年代の方々も、みるみる美しい素肌へと変わっていくご報告をいただくのが何よりの幸せです。
                  </p>
                  <p>
                    また、仕事をしながら2人の子供を育ててきた私自身の経験から、「ダブル洗顔不要のクレンジング」や、「毎回のスキンケアは15秒以内で終了」という、極限まで時短で結果を出すことにも徹底してこだわりました。
                  </p>
                  <p>
                    世の中には無数のスキンケアが溢れています。しかし、過剰な「与えすぎ」に終止符を打ち、肌本来の力を引き出す「引き算」の美容こそが、あなたが再び輝くための最短の答えだと確信しています。
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }}
                variants={fadeIn}
                className="pt-8 flex flex-col gap-2 border-t border-white/20"
              >
                <span className="text-[10px] tracking-[0.2em] text-[#FFFFFF]/70 uppercase font-sans font-bold">ブランド創業者</span>
                <span className="text-3xl text-white font-black" style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>MINAKO</span>
              </motion.div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
