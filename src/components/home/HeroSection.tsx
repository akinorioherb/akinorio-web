import Button from '@/components/ui/Button'

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-marble overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 via-primary-700/60 to-primary-800/90" />

      {/* Decorative gold accent */}
      <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-gradient-to-l from-gold-500/5 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full px-5 md:px-8 max-w-7xl mx-auto">
        <div className="max-w-2xl">
          {/* Overline */}
          <p className="font-heading-en text-xs tracking-[0.3em] text-gold-400 uppercase mb-6 animate-fade-in-up">
            Cellular Beauty Science
          </p>

          {/* Main heading */}
          <h1 className="text-display font-heading-ja font-light text-white mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            細胞が目覚める、
            <br />
            <span className="text-gold-gradient">引き算の美学。</span>
          </h1>

          {/* Sub copy */}
          <p className="text-lg md:text-xl text-primary-100 leading-relaxed mb-10 max-w-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            ミトコンドリアとケイ素の科学が、
            <br className="hidden md:block" />
            あなた本来の輝きを呼び覚ます。
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button href="/sample" variant="gold" size="lg">
              14日間無料サンプルを試す
            </Button>
            <Button href="/products" variant="outline" size="lg">
              商品を見る
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
