'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  title: string;
  body: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'M.K',
    role: '50代 / 愛用歴 4ヶ月',
    title: '「やめる」ことへの恐怖が、14日で確信に変わりました',
    body: '美容液の重ね塗りや高額なクリームをやめるのは最初とても勇気がいりました。でも、この14日間プログラムで肌の変化を感じていくうちに、「あ、今まで甘やかしすぎていたんだな」と気づくことができました。朝、自分の肌に触れるのが今一番の楽しみです。',
  },
  {
    id: 2,
    name: 'Y.S',
    role: '40代 / 愛用歴 14ヶ月',
    title: '年間平均36万円のスキンケア代が嘘みたい',
    body: '今まで色々な広告に踊らされて、色々なものを買っては後悔していました。アキノリオは「売り込まない」という姿勢に惹かれてサンプルを申し込みましたが、本当にその通りでした。シンプルな引き算ケアだけで、ここまで肌の調子が整ってくれるなんて正直驚きです。',
  },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={containerRef} className="relative w-full overflow-hidden bg-[#0a0507] text-white py-32 md:py-48">
      {/* Background glow coming from the previous section */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0 opacity-30 pointer-events-none mix-blend-screen">
        <div className="absolute left-1/2 top-0 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-[#d4af37]/5 blur-[150px]" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[1000px] px-6 md:px-12 flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5 }}
          className="text-center mb-24 md:mb-40"
        >
          <p className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-[#d4af37] mb-8 font-sans">
            Real Voice
          </p>
          <h2 className="text-3xl md:text-5xl font-light tracking-wider text-white" style={{ fontFamily: '"Noto Serif JP", Cinzel, serif' }}>
            引き算を選んだ方の声。
          </h2>
        </motion.div>

        <div className="flex flex-col gap-32 md:gap-48 w-full">
          {testimonials.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 1.5, delay: 0.2 }}
                className={`flex flex-col relative ${isEven ? 'items-start text-left' : 'items-end text-right'}`}
              >
                <div className="text-8xl md:text-[10rem] leading-none text-[#d4af37]/20 font-serif absolute top-[-40px] md:top-[-80px] select-none" style={{ [isEven ? 'left' : 'right']: '-20px' }}>
                  &ldquo;
                </div>
                
                <h3 className="text-2xl md:text-3xl font-light tracking-wide text-white/90 mb-8 max-w-2xl leading-relaxed" style={{ fontFamily: '"Noto Serif JP", serif' }}>
                  {item.title}
                </h3>
                
                <p className="text-sm md:text-base leading-[2.4] text-white/60 font-light tracking-widest max-w-2xl mb-10 text-justify">
                  {item.body}
                </p>
                
                <div className="flex flex-col gap-2">
                  <span className="text-lg md:text-xl text-white/90 tracking-widest" style={{ fontFamily: 'Cinzel, serif' }}>{item.name}</span>
                  <span className="text-[10px] tracking-[0.2em] text-[#d4af37] uppercase">{item.role}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
