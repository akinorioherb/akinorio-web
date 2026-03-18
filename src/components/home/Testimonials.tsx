import Container from '@/components/ui/Container'
import { TESTIMONIALS } from '@/lib/constants'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="font-heading-en text-xs tracking-[0.3em] text-gold-500 uppercase mb-3">
            Voices
          </p>
          <h2 className="text-h2 font-heading-ja font-light text-neutral-800">
            お客様の声
          </h2>
          <div className="gold-divider w-16 mx-auto mt-6" />
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-bg-cream p-8 rounded-sm border border-neutral-100"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg
                    key={i}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="var(--color-gold-500)"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-neutral-600 leading-[1.9] mb-6 text-sm">
                {testimonial.content}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                  <span className="font-ui text-xs text-primary-600 font-medium">
                    {testimonial.name}
                  </span>
                </div>
                <div>
                  <p className="font-ui text-sm text-neutral-700">
                    {testimonial.name}様（{testimonial.age}歳）
                  </p>
                  <p className="font-ui text-xs text-neutral-400">
                    {testimonial.skinConcern}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
