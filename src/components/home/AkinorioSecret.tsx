'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AkinorioSecret() {
  return (
    <section 
      id="secret" 
      className="relative w-full min-h-screen text-white z-10 bg-[#1A0005]"
      style={{ 
        clipPath: 'inset(0 0 0 0)' 
      }}
    >
      
      {/* 
        Background Layer with iOS Safe Parallax 
        Uses ::before pseudo-element with position: fixed to ensure robust scrolling parallax on iOS
      */}
      <style dangerouslySetInnerHTML={{__html: `
        .secret-bg::before {
          content: "";
          position: fixed;
          top: 0; left: 0;
          width: 100vw; height: 100vh;
          z-index: 0;
          /* ダークなグラデーションと指定のイメージ画像を適用 */
          background-image: linear-gradient(to top, rgba(26,0,5,0.95) 0%, rgba(26,0,5,0.2) 60%), url('/images/asian_skin_40s_new.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          will-change: transform;
        }
      `}} />

      <div className="secret-bg" />

      {/* Genuine Akinorio SVG Products placed floating/sitting in the background right */}
      {/* We keep these independent of the background and just fixed to the section to ensure they don't break parallax */}
      <div className="absolute right-[-5%] md:right-12 top-[40%] md:top-1/2 -translate-y-1/2 flex items-end gap-2 md:gap-4 z-[1] scale-[0.6] md:scale-90 origin-right opacity-90 drop-shadow-2xl pointer-events-none">
        <div className="relative w-[120px] md:w-[160px] aspect-[4/5] transform hover:scale-105 transition-transform duration-500">
          <Image src="/images/products/12.svg" alt="Akinorio Product 12" fill className="object-contain" />
        </div>
        <div className="relative w-[90px] md:w-[120px] aspect-[4/5] translate-y-6 transform hover:scale-105 transition-transform duration-500">
          <Image src="/images/products/5.svg" alt="Akinorio Product 5" fill className="object-contain" />
        </div>
        <div className="relative w-[130px] md:w-[180px] aspect-[4/5] transform hover:scale-105 transition-transform duration-500">
          <Image src="/images/products/2.svg" alt="Akinorio Product 2" fill className="object-contain" />
        </div>
      </div>

      {/* Content Layer (Flowing Text) */}
      <div className="relative z-10 w-full min-h-screen py-[120px] px-6 md:px-12 flex flex-col justify-end max-w-[1400px] mx-auto overflow-hidden">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-end mt-auto">
          
          <div className="lg:col-span-5 flex flex-col items-start w-full">
            <span className="text-[10px] md:text-sm tracking-[0.4em] text-[#E31633] mb-6 font-bold" style={{ fontFamily: '"Noto Serif JP", serif' }}>
              素肌力の解放
            </span>
            <div className="w-full max-w-[400px] mb-8">
              <svg width="100%" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text 
                  x="0" y="60" 
                  fill="white" 
                  fontWeight="900" 
                  fontSize="56"
                  fontFamily='"Noto Serif JP", serif'
                  letterSpacing="0.1em"
                  style={{ filter: "drop-shadow(0px 10px 15px rgba(0,0,0,0.8))" }}
                >
                  アキノリオの
                </text>
                <text 
                  x="0" y="140" 
                  fill="white" 
                  fontWeight="900" 
                  fontSize="56"
                  fontFamily='"Noto Serif JP", serif'
                  letterSpacing="0.1em"
                  style={{ filter: "drop-shadow(0px 10px 15px rgba(0,0,0,0.8))" }}
                >
                  秘密
                </text>
              </svg>
            </div>
            <div className="w-full h-[1px] bg-[#E31633]/50 hidden lg:block" />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col space-y-8 md:space-y-12"
          >
            <h3 className="text-2xl md:text-4xl font-bold tracking-wider leading-[1.6] text-[#fdfbf7] drop-shadow-2xl" style={{ fontFamily: '"Noto Serif JP", sans-serif' }}>
              肌の「根本環境」に着目した<br className="hidden md:block"/>全く新しい解答。
            </h3>
            
            <div className="space-y-6 text-sm md:text-base leading-[2.4] tracking-wide text-white/90 font-medium text-justify max-w-2xl drop-shadow-md" style={{ fontFamily: '"Noto Serif JP", serif' }}>
              <p>
                角質層の根本環境が乱れていたら、どんな成分も浸透せずに流れてしまいます。<br/>
                何を使っても変わらない… だからこそ「肌の土台」に着目する必要があるのです。
              </p>
              <p>
                ファンデーションも、化粧水すらも不要になる<span className="text-[10px] align-top ml-1">※1</span>ような体験。<br/>
                リピート率は90％超え<span className="text-[10px] align-top ml-1">※2</span>。<br/>
                これまでに無い驚きが、貴方を待っています。
              </p>
              <p className="font-bold text-[#fdfbf7]">
                年齢を重ねても、環境の変化に戸惑っても、諦める必要なんてありません。<br/>
                アキノリオのスキンケアは、本質を見つめ直した引き算の極地です。
              </p>
            </div>

            <div className="flex flex-col gap-2 pt-6 border-t border-white/20">
              <span className="text-[9px] md:text-[10px] text-white/60 tracking-wider font-sans drop-shadow-sm">※1 個人のスキンケアステップの簡略化における感想です</span>
              <span className="text-[9px] md:text-[10px] text-white/60 tracking-wider font-sans drop-shadow-sm">※2 当社販売実績データに基づく（過去12ヶ月の定期購入継続率）</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
