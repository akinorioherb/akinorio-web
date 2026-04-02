'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { PRODUCTS } from '@/lib/constants';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/i18n';

// ec-site/products/*.png と各商品を紐付け
const BG_MAP: Record<string, string> = {
  'mitochondria': 'mitokondria.png',
  'herb': 'herb.png',
  'kihada': 'kihada.png',
  'balm': 'kinnoito.png',
  'serum': 'serum.png',
  'cleansing': 'cleansing.png',
  'uv': 'uv.png',
  'starter-set': 'starterset.png',
  'minus20-set': 'kimajyoset.png',
  'kagayaki-majo': 'allseries_fine.png',
  'premium': 'allseries_fine.png',
  'perfume': 'shampoo.png',
};

const OBJECT_POSITION_MAP: Record<string, string> = {
  'cleansing': '42% center', // ボトルが少し左に寄っているため右へ動かす(58 -> 42)
  'serum': 'center center',
  'herb': 'center center',
  'kihada': 'center center',
};

export default function ProductShowcase() {
  const { lang } = useLanguage();
  const t = translations[lang].products;
  const pc = translations[lang].productContent;
  const mitoProduct = PRODUCTS.find(p => p.slug === 'mitochondria');
  const herbProduct = PRODUCTS.find(p => p.slug === 'herb');
  const perfumeProduct = PRODUCTS.find(p => p.slug === 'perfume');

  const GALLERY_SLUGS = ['cleansing', 'kihada', 'serum', 'uv'];
  const galleryProducts = GALLERY_SLUGS.map(slug => PRODUCTS.find(p => p.slug === slug)).filter(Boolean) as typeof PRODUCTS;

  const balmProduct = PRODUCTS.find(p => p.slug === 'balm');
  
  const SET_SLUGS = ['starter-set', 'minus20-set'];
  const setProducts = SET_SLUGS.map(slug => PRODUCTS.find(p => p.slug === slug)).filter(Boolean) as typeof PRODUCTS;

  const renderSingleProduct = (product: typeof PRODUCTS[0], index: number) => {
    const bgFileName = BG_MAP[product.slug] || 'allseries_fine.png';
    const bgClass = 'bg-gradient-to-r from-transparent via-black/10 to-black/50';
    const isWhiteSubtitle = product.slug === 'minus20-set';
    const subtitleColor = isWhiteSubtitle ? 'text-[#fdfbf7]' : 'text-[#E31633]';
    const content = pc[product.slug];
    const displayName = content?.name ?? product.name;
    const displaySubtitle = content?.subtitle ?? product.subtitle;
    const displayDescription = content?.description ?? product.description;
    return (
      <section 
        key={product.id} 
        id={product.slug}
        className="w-full relative py-20 md:py-32 flex items-center justify-center min-h-[100dvh]"
      >
        <div className="absolute inset-0 z-0 bg-[#111111]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={`/images/products-bg-hik/${bgFileName}`} 
            alt={`${product.name} background`} 
            className="w-full h-full object-cover"
            style={{ 
              objectPosition: OBJECT_POSITION_MAP[product.slug] || 'center center'
            }}
          />
        </div>

        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 pointers-events-none">
          <div className="flex flex-col md:flex-row justify-end items-end w-full h-full min-h-[60vh] md:min-h-[70vh]">
             {/* Text Panel */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
               className={`w-full md:w-[60%] lg:w-[55%] xl:w-[50%] flex flex-col items-start text-left text-white p-8 md:p-12 lg:p-16 pointer-events-auto ${bgClass}`}
             >
                <span className={`text-[10px] md:text-xs uppercase tracking-[0.5em] mb-6 font-bold ${subtitleColor} drop-shadow-sm`} style={{ fontFamily: 'Neue Haas Grotesk, sans-serif' }}>
                  {displaySubtitle}
                </span>

                <h3
                  className="text-2xl md:text-[28px] lg:text-3xl font-bold tracking-[0.1em] mb-8 font-serif leading-[1.5] drop-shadow-md"
                  style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}
                >
                  {displayName}
                </h3>
                  
                <div className="w-full max-w-full overflow-hidden mb-6 hidden">
                  <svg 
                    width="100%" 
                    viewBox={`0 0 ${product.name.length * 110 + 20} 120`} 
                    preserveAspectRatio="xMinYMid meet"
                    className="drop-shadow-xl overflow-visible"
                  >
                    <text x="0" y="50%" dominantBaseline="central" fill="#fdfbf7" fontWeight="bold" fontFamily='"Noto Serif JP", serif' letterSpacing="0.05em" fontSize="95">
                      {product.name}
                    </text>
                  </svg>
                </div>

                <div className="flex flex-wrap items-center gap-3 mb-6 md:mb-8">
                  {product.usageDuration && product.usageDuration !== '—' && (
                    <span className="text-[10px] md:text-xs font-bold tracking-widest border border-white/30 px-3 py-1 bg-transparent drop-shadow-sm">
                      {t.duration}: {product.usageDuration}
                    </span>
                  )}
                  {product.volume && product.volume !== '—' && (
                    <span className="text-[10px] md:text-xs font-bold tracking-widest border border-white/30 px-3 py-1 bg-transparent drop-shadow-sm">
                      {t.volume}: {product.volume}
                    </span>
                  )}
                </div>
                
                <p className="text-sm md:text-base leading-[2.4] tracking-wide text-white mb-8 max-w-full text-justify font-medium whitespace-pre-line drop-shadow-md" style={{ fontFamily: '"Noto Serif JP", serif' }}>
                  {displayDescription}
                </p>

                <div className="w-full border-t border-white/20 pt-8 mt-auto flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 drop-shadow-md">
                  <div className="flex flex-col mb-8 sm:mb-0">
                    <span className="text-[10px] tracking-[0.4em] text-white/60 font-bold mb-2 uppercase drop-shadow-sm" style={{ fontFamily: 'Neue Haas Grotesk, sans-serif' }}>PRICE</span>
                    {product.compareAtPrice && (
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm text-white/40 line-through font-sans">¥{product.compareAtPrice.toLocaleString()}</span>
                        <span className="text-[10px] font-bold tracking-widest px-2 py-0.5 bg-[#E31633] text-white">10% OFF</span>
                      </div>
                    )}
                    <div className="flex items-baseline">
                      <span className="text-xl md:text-2xl text-white font-medium mr-1 font-sans drop-shadow-md">¥</span>
                      <span className="text-4xl md:text-5xl tracking-normal text-white font-medium drop-shadow-md" style={{ fontFamily: 'Neue Haas Grotesk, "Helvetica Neue", Arial, sans-serif' }}>
                        {product.price.toLocaleString()}
                      </span>
                      <span className="text-[10px] text-white/80 ml-3 tracking-widest font-normal drop-shadow-sm" style={{ fontFamily: '"Noto Serif JP", serif' }}>
                        {t.includingTax}
                      </span>
                    </div>
                  </div>
                  <a
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center justify-center bg-white text-black px-8 py-4 text-xs tracking-[0.2em] font-bold hover:bg-neutral-200 transition-colors w-full sm:w-auto mt-4 sm:mt-0 group"
                  >
                    {t.viewDetails}
                    <svg className="w-4 h-4 ml-3 flex-shrink-0 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
             </motion.div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div id="products" className="w-full bg-[#1A0005]">
      <div className="flex flex-col w-full">
        
        {/* === 1. Title Product: Mitochondria (100vh) === */}
        {mitoProduct && renderSingleProduct(mitoProduct, 0)}

        {/* === 2. Herb (100vh) === */}
        {herbProduct && renderSingleProduct(herbProduct, 1)}

        {/* === 3. Shampoo: Perfume (100vh) === */}
        {perfumeProduct && renderSingleProduct(perfumeProduct, 2)}

        {/* === 4. Gallery 4 Products (100vh total) === */}
        <section className="relative w-full h-[100dvh] grid grid-cols-2 lg:grid-cols-4 overflow-hidden bg-[#1A0005]">
          {galleryProducts.map((product) => {
            const bgFileName = BG_MAP[product.slug] || 'allseries_fine.png';
            const objectPos = OBJECT_POSITION_MAP[product.slug] || 'center center';
            const galleryContent = pc[product.slug];
            const galleryName = galleryContent?.name ?? product.name;
            return (
              <div key={product.id} className="relative w-full h-full border-b lg:border-b-0 border-r border-[#E31633]/20 overflow-hidden group">
                {/* Background Text Overlay to add depth */}
                <div className="absolute top-1/4 left-0 w-full flex justify-center -rotate-90 origin-center opacity-5 pointer-events-none z-0">
                  <span className="text-[100px] font-black text-white whitespace-nowrap tracking-widest uppercase">
                    {product.slug}
                  </span>
                </div>

                <Image
                   src={`/images/products-bg-hik/${bgFileName}`}
                   alt={galleryName}
                   fill
                   className="object-cover transform group-hover:scale-105 transition-transform duration-[2s] ease-out z-10"
                   style={{ objectPosition: objectPos }}
                   priority={false}
                   quality={100}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10 flex flex-col justify-end p-5 md:p-8 z-20">
                  <div className="w-full flex justify-between items-start mb-6">
                    <h3 className="text-xl md:text-2xl font-bold tracking-widest text-[#fdfbf7] leading-[1.4] drop-shadow-2xl" style={{ fontFamily: '"Noto Serif JP", serif', wordBreak: 'keep-all' }}>
                      {galleryName}
                    </h3>
                  </div>
                  
                  <div className="flex flex-row items-end justify-between w-full border-t border-white/20 pt-4 mt-auto">
                    <div className="flex flex-col">
                      <span className="text-[9px] tracking-[0.4em] text-white/50 font-bold mb-1 uppercase" style={{ fontFamily: 'Neue Haas Grotesk, sans-serif' }}>PRICE</span>
                      <div className="flex items-baseline">
                        <span className="text-sm md:text-base text-white/80 font-light mr-1 font-sans">¥</span>
                        <span className="text-xl md:text-2xl tracking-normal text-white font-light drop-shadow-md" style={{ fontFamily: 'Neue Haas Grotesk, "Helvetica Neue", Arial, sans-serif' }}>
                          {product.price.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    <a href={`/products/${product.slug}`} className="inline-flex items-center justify-center px-4 py-2 bg-white text-[#1A0005] hover:bg-[#E31633] hover:text-white transition-all duration-300 font-sans text-xs font-bold tracking-widest shadow-xl">
                      {t.view}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* === 5. Balm (100vh) === */}
        {balmProduct && renderSingleProduct(balmProduct, 3)}

        {/* === 6. Sets (100vh each) === */}
        {setProducts.map((product, index) => renderSingleProduct(product, index + 4))}
      </div>
    </div>
  );
}
