'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
  {
    id: 1,
    name: "M.K様",
    age: "57歳",
    duration: "4ヶ月",
    title: "ファンデーションを手放せた驚き",
    content: "これまで何十種類もの高級美容液やクリームを試してきました。それでも乾燥とくすみが改善せず、ファンデーションが手放せませんでした。アキノリオに出会い、「与えない」ケアに最初は不安でしたが、数ヶ月で見違えるように。今では日焼け止めだけで外出できるようになり、毎朝鏡を見るのが楽しみです。"
  },
  {
    id: 2,
    name: "Y.S様",
    age: "62歳",
    duration: "14ヶ月",
    title: "諦めていたハリが戻ってきた",
    content: "「年齢のせいだから仕方ない」と諦めていた肌のたるみ。けれど、アキノリオのシンプルなステップに変えてから、肌の奥から押し返すようなハリを感じるようになりました。余計なものを削ぎ落とすことで、肌自身が本来持っている力を取り戻したのだと実感しています。"
  },
  {
    id: 3,
    name: "A.T様",
    age: "49歳",
    duration: "8ヶ月",
    title: "スキンケアの概念が変わった",
    content: "化粧水、乳液、美容液、クリーム… 何種類も塗り重ねていた時間が嘘のようです。今は洗顔後、美容液をなじませるだけ。それなのに、過去最高に肌の調子が良いのです。成分を与えるのではなく、肌の細胞に働きかけるというアプローチがこれほど理にかなっているとは思いませんでした。"
  }
];

export default function Testimonials() {
  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section id="reviews" ref={containerRef} className="relative w-full overflow-hidden bg-gradient-to-b from-[#1A0005] to-[#2A040B] text-white py-32 md:py-48 z-10">
      
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12 flex flex-col md:flex-row gap-16 md:gap-24 items-start">
        
        {/* Vertical Title Indicator */}
        <motion.div style={{ y: headerY }} className="hidden md:flex flex-col items-center sticky top-32">
          <h2 
            className="text-4xl md:text-5xl lg:text-5xl font-black tracking-[0.2em] text-[#E31633] uppercase select-none opacity-80" 
            style={{ writingMode: 'vertical-rl', fontFamily: 'Neue Haas Grotesk, Helvetica Neue, sans-serif' }}
          >
            VOICE
          </h2>
        </motion.div>

        {/* Content Area */}
        <div className="flex-1 w-full flex flex-col items-start text-left">
          
          <div className="mb-24 w-full">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-[#E31633] mb-4 font-sans font-bold">
              Testimonials
            </p>
            <h3 className="text-3xl md:text-5xl font-bold tracking-wider leading-[1.6]" style={{ fontFamily: '"Noto Serif JP", sans-serif' }}>
              引き算を選んだ方の声
            </h3>
          </div>

          <div className="w-full flex flex-col space-y-12 md:space-y-24">
            {testimonials.map((testimonial, idx) => (
              <motion.div 
                key={testimonial.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="w-full flex flex-col md:flex-row items-start md:gap-16 border-t border-white/10 pt-12 md:pt-24 hover:bg-white/[0.02] transition-colors duration-500"
              >
                {/* Meta info column */}
                <div className="w-full md:w-1/4 flex flex-col space-y-2 mb-8 md:mb-0">
                  <span className="text-2xl md:text-3xl text-white font-bold tracking-widest" style={{ fontFamily: '"Noto Serif JP", serif' }}>
                    {testimonial.name}
                  </span>
                  <div className="flex items-center gap-4 text-xs md:text-sm text-white/50 tracking-wider font-light mt-4">
                    <span>{testimonial.age}</span>
                    <span className="w-1 h-1 bg-[#E31633] rounded-full" />
                    <span>ご愛用歴 {testimonial.duration}</span>
                  </div>
                </div>

                {/* Review content column (Strict Left Align) */}
                <div className="w-full md:w-3/4 flex flex-col space-y-6">
                  <h4 className="text-xl md:text-2xl text-white font-bold tracking-wide leading-relaxed" style={{ fontFamily: '"Noto Serif JP", serif' }}>
                    "{testimonial.title}"
                  </h4>
                  <p className="text-sm md:text-base leading-[2.4] text-white/70 font-light tracking-wide text-justify md:text-left">
                    {testimonial.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
