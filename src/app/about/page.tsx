'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { LINE_URL } from '@/lib/constants';

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const renderSvgTitle = (text: string, fontSize = "95") => {
    // 文字の長さに応じて viewBox の横幅を計算
    const textLength = text.length;
    // 括弧や句読点がある場合は微調整（概算）
    const width = Math.max(textLength * parseInt(fontSize) * 1.1, 400);

    return (
      <svg 
        width="100%" 
        viewBox={`0 0 ${width} 120`} 
        preserveAspectRatio="xMidYMid meet"
        className="drop-shadow-2xl overflow-visible mx-auto"
      >
        <text 
          x="50%" 
          y="50%" 
          textAnchor="middle"
          dominantBaseline="central" 
          fill="#fdfbf7" 
          fontWeight="bold" 
          fontFamily='"Noto Serif JP", serif' 
          letterSpacing="0.05em" 
          fontSize={fontSize}
        >
          {text}
        </text>
      </svg>
    );
  };

  return (
    <main className="relative w-full min-h-screen bg-[#1A0005] overflow-hidden text-white">
      
      {/* Fixed Background with Parallax */}
      <motion.div 
        className="fixed inset-0 w-full h-full z-0 pointer-events-none"
        style={{ y: yBg }}
      >
        <Image 
          src="/images/products-bg-hik/allseries_fine.png"
          alt="All Products Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A0005]/80 via-[#3D010A]/60 to-[#1A0005]/95 z-10" />
      </motion.div>

      <div className="relative z-10 flex flex-col w-full">
        
        {/* --- Hero Section --- */}
        <section className="relative w-full h-[80vh] flex flex-col items-center justify-center px-6 md:px-12 pt-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full max-w-5xl"
          >
            <p className="font-sans text-[10px] md:text-xs tracking-[0.5em] text-[#E31633] uppercase mb-8 font-bold">
              Our Story
            </p>
            <div className="w-full relative px-4 md:px-0">
              {renderSvgTitle("引き算の美学", "95")}
            </div>
          </motion.div>
        </section>

        {/* --- Founder Story --- */}
        <section className="relative w-full py-24 md:py-32 border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="mx-auto max-w-4xl px-6 md:px-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2 }}
              className="text-center mb-16"
            >
              <p className="font-sans text-[10px] md:text-xs tracking-[0.5em] text-[#E31633] uppercase mb-6 font-bold">
                Founder
              </p>
              {renderSvgTitle("20歳の構想、何十社の壁", "80")}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="space-y-10 text-sm md:text-base leading-[2.5] tracking-[0.1em] text-white/80 text-justify"
              style={{ fontFamily: '"Noto Serif JP", serif' }}
            >
              <p>創業者MINAKOがこの構想を抱いたのは、20歳の時でした。</p>
              <p>「ファンデーションも化粧水もいらない。ダブル洗顔も不要。朝は水洗顔すら不要。最終的にこれ1本で済む素肌に導く」——その信念を、何十社もの工場に伝え歩きました。</p>
              <p>返ってきたのは、断りの言葉ばかり。「そんなものは作れない」「需要がない」「前例がない」。</p>
              <p>それでもMINAKOは諦めなかった。そして、ようやく出会えた工場がこう言いました。「30年の歴史で、こんな形状を作ったのは初めてです」。原料メーカーは「これだけの配合量は、美容液と呼んでください」と。</p>
              <p className="text-[#fdfbf7] font-bold text-lg text-center mt-12 block">
                世界でオンリーワン。アキノリオは、そうして生まれました。
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- Philosophy --- */}
        <section className="relative w-full py-24 md:py-32 border-t border-white/10 bg-[#7C0114]/10">
          <div className="mx-auto max-w-4xl px-6 md:px-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2 }}
              className="text-center mb-16"
            >
              <p className="font-sans text-[10px] md:text-xs tracking-[0.5em] text-[#E31633] uppercase mb-6 font-bold">
                Philosophy
              </p>
              {renderSvgTitle("何をつけるかより、何をやめるか", "70")}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="space-y-10 text-sm md:text-base leading-[2.5] tracking-[0.1em] text-white/80 text-justify"
              style={{ fontFamily: '"Noto Serif JP", serif' }}
            >
              <p>化粧品の世界では、常に「足し算」が行われてきました。新しい成分を加え、新しい効果を謳い、新しいステップを追加する。</p>
              <p>化粧品が「アプリの追加」だとすれば、アキノリオは「OSの再インストール」。余計なものを全て取り除き、肌という名のシステムを初期化する。</p>
              <p>もう、これ以上あなたの貴重なお金と時間を、一時の気休めのために使わないでください。</p>
              <p className="text-[#fdfbf7] font-bold">答えは、細胞の中にありました。ミトコンドリアとケイ素の力で、肌が自ら美しくなる力を取り戻す。それが私たちの答えです。</p>
            </motion.div>
          </div>
        </section>

        {/* --- Our Way --- */}
        <section className="relative w-full py-24 md:py-32 border-t border-white/10 bg-black/40 backdrop-blur-md">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2 }}
              className="text-center mb-16"
            >
              <p className="font-sans text-[10px] md:text-xs tracking-[0.5em] text-[#E31633] uppercase mb-6 font-bold">
                Our Way
              </p>
              {renderSvgTitle("売らないで広がる", "90")}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.1 }}
              className="max-w-3xl mx-auto space-y-8 text-sm md:text-base leading-[2.2] tracking-[0.1em] text-white/80 text-center mb-24"
              style={{ fontFamily: '"Noto Serif JP", serif' }}
            >
              <p>アキノリオの代理店理念は「売らないで広がる」こと。自然な口コミだけで連鎖する。売り込みは完全に禁止。</p>
              <p>オーナー自身が本当に惚れ込んだ場合のみ、取り扱いができます。感動を伝え、その感動が次の人に届く。それだけで広がっていく。</p>
            </motion.div>

            {/* Key points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
              {[
                { title: 'ミトコンドリア活性', desc: '細胞のエネルギー工場を活性化。肌のOSを初期化し、内側から目覚めさせます。' },
                { title: 'ケイ素（シリカ）の力', desc: '美のミネラルがコラーゲン・エラスチンの生成を極限までサポート。' },
                { title: '引き算の処方', desc: '余計な成分を一切排除。必要なものだけで構成された処方。' },
                { title: '敏感肌にも安心', desc: 'パラベンフリー・アルコールフリー。患者の薬剤アレルギーの肌が再生した実績。' },
              ].map((point, idx) => (
                <motion.div 
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: idx * 0.15 }}
                  className="bg-[#1A0005]/60 border border-white/5 p-8 md:p-12 hover:border-[#E31633]/30 transition-colors duration-500"
                >
                  <h3 className="text-xl md:text-2xl text-[#fdfbf7] mb-4 font-bold tracking-widest" style={{ fontFamily: '"Noto Serif JP", serif' }}>
                    {point.title}
                  </h3>
                  <div className="w-8 h-[1px] bg-[#E31633] mb-6" />
                  <p className="text-sm leading-relaxed tracking-wider text-white/70 text-justify">
                    {point.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CTA --- */}
        <section className="relative w-full py-32 border-t border-white/20 bg-[#3D010A]/80 backdrop-blur-sm">
          <div className="mx-auto max-w-4xl px-6 md:px-12 text-center flex flex-col items-center">
            
            <div className="w-full max-w-3xl mb-12">
              {renderSvgTitle("引き算の旅は、", "80")}
              <div className="h-4" />
              {renderSvgTitle("ここから始まります", "80")}
            </div>
            
            <p className="text-base tracking-[0.3em] text-white/60 mb-16 capitalize" style={{ fontFamily: 'Neue Haas Grotesk, sans-serif' }}>
              Your journey of subtraction begins here
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-2xl px-4">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden flex-1 flex items-center justify-center bg-[#E31633] text-white py-5 px-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(227,22,51,0.5)]"
              >
                <span className="text-sm font-bold tracking-[0.2em] relative z-10" style={{ fontFamily: '"Noto Serif JP", sans-serif' }}>
                  14日間体験を始める
                </span>
                <div className="absolute inset-0 bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0" />
                <span className="absolute inset-0 flex items-center justify-center text-[#1A0005] py-5 px-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 delay-100">
                  <span className="text-sm font-bold tracking-[0.2em]" style={{ fontFamily: '"Noto Serif JP", sans-serif' }}>
                    14日間体験を始める
                  </span>
                </span>
              </a>
              
              <a 
                href="/products" 
                className="group flex-1 flex items-center justify-center bg-transparent border border-white/30 text-white py-5 px-8 hover:bg-white hover:text-[#1A0005] transition-all duration-300"
              >
                <span className="text-sm font-bold tracking-[0.2em]" style={{ fontFamily: '"Noto Serif JP", sans-serif' }}>
                  商品一覧を見る
                </span>
              </a>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
