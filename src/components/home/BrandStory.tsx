'use client';
import { motion } from 'framer-motion';

export default function BrandStory() {
  return (
    <section 
      id="story" 
      className="relative w-full min-h-screen text-white z-10 bg-[#7C0114]"
      style={{ 
        fontFamily: '"Noto Serif JP", "Hiragino Mincho ProN", serif',
        clipPath: 'inset(0 0 0 0)' 
      }}
    >
      
      {/* 
        Background Layer: Fixed Crimson Gradient
      */}
      <style dangerouslySetInnerHTML={{__html: `
        .brand-story-bg::before {
          content: "";
          position: fixed;
          top: 0; left: 0;
          width: 100vw; height: 100vh;
          z-index: 0;
          background-image: linear-gradient(135deg, rgba(165,29,48,0.85) 0%, rgba(124,1,20,0.95) 100%);
          will-change: transform;
        }
      `}} />
      <div className="brand-story-bg" />

      {/* CEO Photo Layer: Fixed Background */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden opacity-60 md:opacity-90 md:left-auto md:w-[55%]">
        <div className="absolute inset-0 h-full w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/images/minakoceo.png" 
            alt="Founder Minako" 
            className="w-full h-full object-cover object-[center_top] md:object-[right_top]"
          />
        </div>
        {/* Mobile: Full-screen semi-transparent overlay for readability. Desktop: L-to-R gradient. */}
        <div className="absolute inset-0 bg-[#7C0114]/60 md:hidden" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#7C0114] via-[#7C0114]/40 to-transparent hidden md:block" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start relative">
        
        {/* Sticky Title Column */}
        <div className="w-full md:w-[45%] md:sticky md:top-[15vh] h-auto md:h-screen flex flex-col justify-start pt-24 md:pt-[10vh] z-20 pb-16 md:pb-0">
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

          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 1, delay: 0.1 }}
            className="w-full max-w-[480px] drop-shadow-2xl relative"
          >
            <svg 
              width="100%" 
              viewBox="0 0 480 320" 
              preserveAspectRatio="xMinYMin meet"
              className="overflow-visible"
            >
              <text x="0" y="48" fill="#fdfbf7" fontWeight="bold" fontFamily='"Noto Serif JP", serif' letterSpacing="0.05em" fontSize="48">病気になっても、</text>
              <text x="0" y="128" fill="#fdfbf7" fontWeight="bold" fontFamily='"Noto Serif JP", serif' letterSpacing="0.05em" fontSize="48">いくつになっても、</text>
              <text x="0" y="208" fill="#fdfbf7" fontWeight="bold" fontFamily='"Noto Serif JP", serif' letterSpacing="0.05em" fontSize="48">美しさを諦める</text>
              <text x="0" y="288" fill="#fdfbf7" fontWeight="bold" fontFamily='"Noto Serif JP", serif' letterSpacing="0.05em" fontSize="48">必要はない。</text>
            </svg>
          </motion.div>
        </div>

        {/* Scrolling Text Column */}
        <div className="w-full md:w-[55%] flex flex-col z-20 pt-12 md:pt-[45vh] pb-[30vh]">
          <div className="flex flex-col space-y-20 md:space-y-32 max-w-[600px] bg-black/20 md:bg-gradient-to-r md:from-transparent md:via-black/20 md:to-black/60 p-6 md:p-12 rounded-xl backdrop-blur-sm md:backdrop-blur-[2px] border border-white/5">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2 }}
            >
              <div className="space-y-6 text-sm md:text-base leading-[2.4] tracking-[0.1em] text-white font-medium text-justify drop-shadow-md">
                <p>初めまして。アキノリオ代表の MINAKO です。<br/>私自身、40代前半にバセドー病と橋本病を繰り返した影響で肌荒れに悩まされ、長年スキンケアジプシーを続けていました。</p>
                <p>「美肌の基本はしっかりと汚れを落とすこと」<br/>その言葉を信じ、毎日クレンジングの後、ぬるま湯で念入りに泡洗顔。肌を清潔に保つために、大切な皮脂や常在菌まですっかり洗い流してしまっていました。</p>
                <p>そして洗顔後には、1本15,000円の化粧水を美顔器で導入し、さらに1万円の化粧水を手で7、8回しっかり馴染ませる。そこへシートマスクを重ね、サランラップでパック。これだけ完璧に保湿をした上で、12,000円の美容液を2種類重ねて、最後に保湿クリームで蓋をする。</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2 }}
            >
              <div className="space-y-6 text-sm md:text-base leading-[2.4] tracking-[0.1em] text-white font-medium text-justify drop-shadow-md">
                <p>ここまで徹底的にやって、翌朝ようやく乾燥を感じないのがやっと。「今日の商談にシワ顔で挑まなくて済んだ」と安心する毎日。しかし、一向に変わらない自分の肌に深く悲観していました。</p>
                <p>「自分と同じように悩む人のために、本当に肌を変えるものを作りたい。」<br/>その切実な想いから生化学者とタッグを組み、たどり着いたのは、これまでの常識を覆す<br/>「引き算スキンケア」でした。</p>
                <p>信じられないかもしれませんが、今の私のスキンケアは、朝は顔を洗わない。化粧水もつけない。<br/>夜は「ミトコンドリアのちから」と「ハーブのちから」を手の平で混ぜて塗るだけ。お手入れにかかる時間はたったの15秒です。</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2 }}
            >
              <div className="space-y-6 text-sm md:text-base leading-[2.4] tracking-[0.1em] text-white font-medium text-justify drop-shadow-md">
                <p>過剰な「与えすぎ」に終止符を打ち、肌本来の力を呼び覚ます。<br/>この40代からの本当に正しい引き算スキンケアを実践して13年。今では、実年齢よりマイナス27歳肌に生まれ変わりました。</p>
                <p>急に「引き算」を始めることに怖さを覚えるかもしれません。痛いほどお気持ちはわかります。かつての私がそうだったからです。</p>
                <p>しかし、足し算のケアを手放した先にこそ、あなたが再び輝くための最短の答えがあると確信しています。<br/>まずは、あなたの肌と出会い直す1ヶ月の旅を始めてみませんか。</p>
              </div>
            </motion.div>
            
            {/* Signature Area */}
            <div className="pt-12 border-t border-white/20 flex flex-col items-start overflow-hidden">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-[10px] tracking-[0.2em] text-white/60 uppercase font-sans font-bold mb-4"
              >
                Founder & CEO
              </motion.span>
              
              {/* Static text, no write-in animation */}
              <span 
                className="text-3xl md:text-5xl font-light tracking-[0.2em] text-[#fdfbf7] inline-block pb-4 pr-12 drop-shadow-md" 
                style={{ fontFamily: '"Noto Serif JP", serif' }}
              >
                Minako
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
