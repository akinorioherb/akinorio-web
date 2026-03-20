'use client';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

type Product = {
  id: number;
  numberStr: string;
  name: string;
  subtitle: string;
  description: string;
  price: string;
  image: string;
  accent: string;
};

const products: Product[] = [
  {
    id: 1,
    numberStr: '01',
    name: 'ミトコンドリアのちから',
    subtitle: '濃密な手応えを、静かに届ける美容液',
    description: '肌が必要とする成分だけを、極限までピュアな状態で抽出。テクスチャーは水のように軽やかでありながら、肌の奥深く（角質層まで）で確かなハリと弾力を目覚めさせます。',
    price: '¥13,200',
    image: '/images/products/serum.png',
    accent: '#d4af37',
  },
  {
    id: 2,
    numberStr: '02',
    name: 'Cleansing',
    subtitle: '落としながら、うるおいの余韻を残す',
    description: '1日の終わりの肌を、優しく解放するクレンジング。メイクや汚れだけを的確に包み込み、引き算のあとにふっくらとした透明感と柔らかさを残します。',
    price: '¥5,280',
    image: '/images/products/cleansing.png',
    accent: '#c40234',
  },
  {
    id: 3,
    numberStr: '03',
    name: 'Soap',
    subtitle: '余分を洗い流し、肌をまっすぐに整える',
    description: 'きめ細かく弾力のある泡が、古い角質や毛穴の奥のノイズを吸着。洗い上がりの無垢な肌は、次に届けるセラムを最高のかたちで迎え入れます。',
    price: '¥3,960',
    image: '/images/products/soap.png',
    accent: '#b8942f',
  },
];

export default function ProductShowcase() {
  return (
    <section id="products" className="relative w-full bg-[#0a0507] py-32 md:py-48 overflow-hidden z-10">
      
      {/* Title Section */}
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 mb-24 md:mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center"
        >
          <p className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-[#d4af37] mb-8 font-sans">
            Product Showcase
          </p>
          <h2 className="text-3xl md:text-5xl font-light tracking-wider text-white" style={{ fontFamily: '"Noto Serif JP", Cinzel, serif' }}>
            触れたくなる、静かな存在感。
          </h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            className="mt-12 mx-auto h-[1px] w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent origin-center"
          />
        </motion.div>
      </div>

      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-12">
        {/* 1 col on mobile, 3 cols on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.5, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col items-center text-center"
            >
              {/* Background Number */}
              <div 
                className="absolute top-10 left-1/2 -translate-x-1/2 text-[15rem] md:text-[8rem] lg:text-[12rem] xl:text-[15rem] leading-none font-bold opacity-[0.03] select-none pointer-events-none transition-opacity duration-700 group-hover:opacity-[0.06]"
                style={{ fontFamily: 'Cinzel, serif', color: product.accent }}
              >
                {product.numberStr}
              </div>

              {/* Product Image */}
              <div className="relative w-full aspect-[4/5] mb-12 flex items-center justify-center">
                {/* Subtle Ambient Glow */}
                <div 
                  className="absolute inset-0 z-0 rounded-full blur-[80px] opacity-10 transition-opacity duration-700 group-hover:opacity-30 scale-75"
                  style={{ backgroundColor: product.accent }}
                />
                
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6 + index, ease: "easeInOut", repeat: Infinity }}
                  className="relative z-10 w-[70%] h-[90%] md:w-[80%] md:h-[80%] lg:w-[70%] lg:h-[90%]"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,.5)] transition-transform duration-700 group-hover:scale-105"
                  />
                </motion.div>
              </div>

              {/* Text Info */}
              <div className="relative z-20 flex flex-col items-center px-4 w-full">
                <span className="text-[10px] uppercase tracking-[0.4em] mb-4" style={{ color: product.accent, fontFamily: 'Cinzel, serif' }}>
                  Signature Line
                </span>
                <h3 className="text-4xl lg:text-5xl font-light tracking-widest text-white mb-4" style={{ fontFamily: 'Cinzel, "Noto Serif JP", serif' }}>
                  {product.name}
                </h3>
                <p className="text-sm lg:text-base text-white/80 font-light mb-8 h-12 flex items-center justify-center" style={{ fontFamily: '"Noto Serif JP", serif' }}>
                  {product.subtitle}
                </p>
                <p className="text-xs lg:text-sm leading-loose tracking-wide text-white/50 font-light mb-10 h-auto md:h-56 lg:h-32 relative text-justify md:text-center text-justify-last-center">
                  {product.description}
                </p>
                <div className="flex items-center gap-4 mt-auto pt-8 border-t border-white/10 w-full justify-center">
                  <span className="text-[9px] tracking-[0.2em] text-white/30">PRICE</span>
                  <span className="text-lg lg:text-xl tracking-widest text-white/90" style={{ fontFamily: 'Cinzel, serif' }}>{product.price}</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
