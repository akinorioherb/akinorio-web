'use client';
import { motion } from 'framer-motion';

export default function BrandStory() {
  return (
    <section 
      id="story" 
      className="relative w-full min-h-screen text-white z-10 bg-[#3D010A]"
      style={{ 
        fontFamily: '"Noto Serif JP", "Hiragino Mincho ProN", serif',
        clipPath: 'inset(0 0 0 0)' 
      }}
    >
      
      {/* 
        Background Layer with iOS Safe Parallax 
        Uses ::before pseudo-element with position: fixed to ensure robust scrolling parallax on iOS
      */}
      <style dangerouslySetInnerHTML={{__html: `
        .brand-story-bg::before {
          content: "";
          position: fixed;
          top: 0; left: 0;
          width: 100vw; height: 100vh;
          z-index: 0;
          /* 深紅のグラデーション × プロダクト/創業者のイメージ画像 */
          background-image: linear-gradient(135deg, rgba(61,1,10,0.85) 0%, rgba(124,1,20,0.95) 100%), url('/images/minakoceo.png');
          background-size: cover;
          background-position: center 20%;
          background-repeat: no-repeat;
          will-change: transform;
        }
      `}} />

      <div className="brand-story-bg" />

      {/* Content Layer (Flowing Text) */}
      <div className="relative z-10 w-full min-h-screen py-[120px] px-6 md:px-12 flex flex-col justify-center max-w-[900px] mx-auto overflow-hidden">
        
        {/* Section Title */}
        <motion.div
           initial={{ opacity: 0, y: 30 }} 
           whileInView={{ opacity: 1, y: 0 }} 
           viewport={{ once: true, margin: "-100px" }} 
           transition={{ duration: 1 }}
           className="mb-8"
        >
          <span className="text-[11px] font-bold tracking-[0.4em] text-[#E31633] uppercase font-sans">
            Brand Story
          </span>
        </motion.div>

        {/* Main Catchphrase */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 1, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold leading-[1.6] md:leading-[1.7] mb-16 md:mb-24 tracking-[0.1em] drop-shadow-2xl text-white"
        >
          病気になっても、<br/>
          いくつになっても、<br/>
          美しさを諦める必要はない。
        </motion.h2>

        {/* Text Blocks (Minimal Z-Layout, Left Aligned) */}
        <div className="flex flex-col space-y-12 md:space-y-16 max-w-[680px]">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="space-y-6 text-sm md:text-base leading-[2.2] tracking-[0.1em] text-white/95 text-justify drop-shadow-md">
              <p>初めまして。アキノリオ代表の MINAKO です。</p>
              <p>私自身、40代前半にバセドー病と橋本病を繰り返した影響で、毛穴の広がりや吹き出物に幾度となく悩まされました。</p>
              <p>世界中のコスメを買い漁り、長くステロイド生活を続ける日々。しかし、どれを使用しても若干の潤いが感じられれば良い方で、一向に変化の無い自分の肌に悲観する毎日でした。</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="space-y-6 text-sm md:text-base leading-[2.2] tracking-[0.1em] text-white/95 text-justify drop-shadow-md">
              <p>「もう自分と同じように悩む人のために、本当に肌を変えるものを作りたい。」</p>
              <p>その切実な想いから生化学者や化粧品研究者とタッグを組み、独自の年齢肌化粧品の開発に成功しました。</p>
              <p>今では、「肌の印象が10年前に戻ったようだ」「ファンデーションカラーが2段階明るくなった」など、全国から毎日喜びの声をいただけるようになりました。どの年代の方々も、みるみる美しい素肌へと変わっていくご報告をいただくのが何よりの幸せです。</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="space-y-6 text-sm md:text-base leading-[2.2] tracking-[0.1em] text-white/95 text-justify drop-shadow-md">
              <p>また、仕事をしながら2人の子供を育ててきた私自身の経験から、「毎回のスキンケアは15秒以内で終了」という、極限まで時短で結果を出すことにも徹底してこだわりました。</p>
              <p>世の中には無数のスキンケアが溢れています。しかし、過剰な「与えすぎ」に終止符を打ち、肌本来の力を引き出す「引き算」の美容こそが、あなたが再び輝くための最短の答えだと確信しています。</p>
            </div>
          </motion.div>
          
        </div>

        {/* Signature Area */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 1, delay: 0.4 }}
          className="mt-20 pt-8 border-t border-white/20 flex flex-col max-w-[680px]"
        >
          <span className="text-[10px] tracking-[0.2em] text-white/60 uppercase font-sans font-bold mb-2">Founder & CEO</span>
          <span className="text-3xl md:text-4xl text-white font-black tracking-widest" style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif' }}>MINAKO</span>
        </motion.div>

      </div>
    </section>
  );
}
