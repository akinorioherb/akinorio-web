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
    name: 'Serum',
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

function ProductGalleryItem({ product, index }: { product: Product; index: number }) {
  const itemRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"]
  });

  const isEven = index % 2 === 0;
  
  // Parallax values
  const yImage = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <div ref={itemRef} className="relative min-h-[90vh] flex items-center py-24 md:py-32 overflow-hidden">
      {/* Absolute Giant Background Number */}
      <motion.div 
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], ["50%", "-50%"]),
          fontFamily: 'Cinzel, serif', 
          color: product.accent 
        }}
        className={`absolute top-0 z-0 text-[35vw] md:text-[25rem] font-bold leading-none opacity-[0.03] select-none ${isEven ? 'right-[-5%]' : 'left-[-5%]'}`}
      >
        {product.numberStr}
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 md:px-12 grid gap-16 lg:grid-cols-2 items-center">
        
        {/* Product Image Side */}
        <motion.div 
          style={{ y: yImage }}
          className={`flex justify-center relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute inset-0 z-0 flex items-center justify-center">
            <div 
              className="h-[40vh] w-[40vh] rounded-full blur-[100px] opacity-20"
              style={{ backgroundColor: product.accent }}
            />
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(20px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-[80%] md:w-[65%] lg:w-[85%]"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6 + index, ease: "easeInOut", repeat: Infinity }}
            >
              <Image
                src={product.image}
                alt={product.name}
                width={800}
                height={800}
                className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,.6)]"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Text Side */}
        <motion.div 
          style={{ y: yText }}
          initial={{ opacity: 0, x: isEven ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className={`flex flex-col gap-8 ${isEven ? 'lg:order-2' : 'lg:order-1 lg:items-end lg:text-right'}`}
        >
          <div>
            <span className="text-xs uppercase tracking-[0.4em]" style={{ color: product.accent, fontFamily: 'Cinzel, serif' }}>
              Signature Line
            </span>
            <h3 className="mt-4 text-5xl md:text-7xl font-light tracking-wide text-white" style={{ fontFamily: 'Cinzel, "Noto Serif JP", serif' }}>
              {product.name}
            </h3>
            <p className="mt-4 text-xl md:text-2xl text-white/80 font-light" style={{ fontFamily: '"Noto Serif JP", serif' }}>
              {product.subtitle}
            </p>
          </div>
          
          <p className={`text-sm md:text-base leading-loose tracking-wide text-white/60 font-light max-w-md ${isEven ? '' : 'lg:text-right'}`}>
            {product.description}
          </p>

          <div className={`flex items-center gap-6 mt-4 ${isEven ? '' : 'justify-end'}`}>
            <span className="text-sm tracking-[0.2em] text-white/40">PRICE</span>
            <span className="text-xl tracking-widest text-white/90" style={{ fontFamily: 'Cinzel, serif' }}>{product.price}</span>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default function ProductShowcase() {
  return (
    <section id="products" className="relative w-full bg-[#0a0507] py-24 md:py-48 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 mb-32 md:mb-48">
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

      <div className="flex flex-col w-full">
        {products.map((product, index) => (
          <ProductGalleryItem key={product.id} product={product} index={index} />
        ))}
      </div>
    </section>
  );
}
