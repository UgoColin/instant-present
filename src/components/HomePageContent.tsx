/* eslint-disable @next/next/no-img-element */
import { ChevronRight } from 'lucide-react'

import type { HomePageData } from '@/lib/site-model'

import { BackgroundIllustrations } from './BackgroundIllustrations'
import { FadeInSection } from './FadeInSection'
import { HeroSlideshow } from './HeroSlideshow'

type HomePageContentProps = {
  content: HomePageData
}

export function HomePageContent({ content }: HomePageContentProps) {
  const heroSlides = [
    {
      alt: content.hero.backgroundImageAlt,
      objectPosition: 'center 42%',
      src: content.hero.backgroundImageUrl,
    },
    {
      alt: 'Cabinet bien-être prêt à accueillir les clientes',
      objectPosition: 'center center',
      src: '/site-images/contact-cabinet-hero.jpg',
    },
    {
      alt: 'Ambiance apaisante du cabinet',
      objectPosition: 'center center',
      src: '/site-images/contact-cabinet.jpg',
    },
    {
      alt: 'Soin du dos dans une atmosphère chaleureuse',
      objectPosition: 'center center',
      src: '/site-images/wellness-massage-back.jpg',
    },
    {
      alt: 'Massage ayurvédique à l’huile chaude',
      objectPosition: 'center center',
      src: '/site-images/ayurveda-oil.jpg',
    },
  ]

  return (
    <div className="relative">
      <BackgroundIllustrations />
      <section className="relative flex h-[85vh] min-h-[600px] items-center justify-center overflow-hidden">
        <HeroSlideshow slides={heroSlides} />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <FadeInSection>
              <h2 className="mb-2 font-script text-4xl text-brand-rose md:text-5xl">
                {content.hero.scriptTitle}
              </h2>
            </FadeInSection>

            <FadeInSection delay={200}>
              <h1 className="mb-6 font-subtitle text-4xl leading-tight text-brand-forest md:text-6xl">
                {content.hero.title} <br />
                <span className="text-3xl italic text-brand-sage md:text-5xl">
                  {content.hero.accentTitle}
                </span>
              </h1>
            </FadeInSection>

            <FadeInSection delay={400}>
              <p className="mb-10 border-l-4 border-brand-rose pl-4 text-lg font-light tracking-wide text-brand-sage md:text-xl">
                {content.hero.subtitle}
              </p>
            </FadeInSection>

            <FadeInSection delay={600}>
              <a
                className="inline-block bg-brand-forest px-8 py-4 text-sm font-medium uppercase tracking-widest text-white [text-shadow:0_1px_1px_rgba(0,0,0,0.18)] transition-colors duration-300 hover:bg-brand-rose hover:text-white"
                href={content.hero.ctaHref}
                style={{ color: '#ffffff' }}
              >
                {content.hero.ctaLabel}
              </a>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section className="relative bg-[#fbf0ec] py-24" id="about">
        <img
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-[-3rem] top-1/2 z-0 w-[19rem] -translate-y-1/2 opacity-[0.14] md:right-[-2rem] md:w-[23rem] lg:right-0 lg:w-[27rem]"
          src="/illustrations/illu-flyer.svg"
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 flex flex-col items-center gap-16 lg:flex-row">
            <div className="relative w-full lg:w-1/2">
              <FadeInSection>
                <div className="relative z-10 overflow-hidden rounded-t-full border-8 border-brand-cream">
                  <img
                    alt={content.about.imageAlt}
                    className="h-[600px] w-full object-cover"
                    src={content.about.imageUrl}
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 z-0 h-32 w-32 rounded-full bg-brand-rose opacity-20" />
                <div className="absolute -left-8 -top-8 z-0 h-24 w-24 rounded-full bg-brand-forest opacity-10" />
              </FadeInSection>
            </div>

            <div className="w-full lg:w-1/2">
              <FadeInSection>
                <h3 className="mb-2 font-script text-4xl text-brand-rose">
                  {content.about.scriptTitle}
                </h3>
                <h2 className="mb-8 font-subtitle text-4xl text-brand-forest md:text-5xl">
                  {content.about.title}
                </h2>

                <div className="space-y-6 font-light leading-relaxed text-brand-sage">
                  {content.about.paragraphs.map((paragraph, index) => (
                    <p key={`${paragraph.slice(0, 24)}-${index}`}>
                      {index === 0 ? (
                        <>
                          <strong className="font-medium text-brand-forest">Je m’appelle Krystel</strong>
                          {paragraph.replace('Je m’appelle Krystel', '')}
                        </>
                      ) : (
                        paragraph
                      )}
                    </p>
                  ))}
                </div>

              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-cream py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <FadeInSection>
            <h2 className="mb-8 font-subtitle text-4xl text-brand-forest md:text-5xl">
              {content.approach.title}
            </h2>
          </FadeInSection>

          <FadeInSection delay={200}>
            <p className="mb-8 text-xl font-light leading-relaxed text-brand-sage">
              {content.approach.introText}
            </p>
            <p className="text-xl font-medium italic leading-relaxed text-brand-forest">
              {content.approach.highlightedQuote}
            </p>
          </FadeInSection>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f7ece6] py-24">
        <img
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-[-3rem] top-10 z-0 w-[18rem] opacity-[0.12] md:right-[-1rem] md:w-[22rem] lg:right-0 lg:w-[26rem]"
          src="/illustrations/illu-flyer.svg"
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
            <FadeInSection>
              <div className="overflow-hidden rounded-[2.2rem] border border-white/60 shadow-[0_30px_90px_rgba(21,87,77,0.08)]">
                <img
                  alt="Mon soin signature Rituel Esprit"
                  className="h-[500px] w-full object-cover"
                  src="/site-images/wellness-oils.jpg"
                />
              </div>
            </FadeInSection>

            <FadeInSection delay={180}>
              <p className="mb-2 font-script text-4xl text-brand-rose">Mon soin signature</p>
              <h2 className="max-w-3xl font-subtitle text-4xl leading-tight text-brand-forest md:text-5xl">
                Rituel Esprit
              </h2>
              <p className="mt-6 max-w-3xl text-xl font-light leading-relaxed text-brand-sage">
                Une escale holistique de 1h30 pour harmoniser le corps, apaiser l’esprit et
                rééquilibrer l’énergie.
              </p>
              <p className="mt-5 max-w-3xl text-lg font-light leading-relaxed text-brand-sage">
                Un soin profond et enveloppant pour ralentir, vous déposer et retrouver un
                équilibre plus juste entre le corps, le mental et les ressentis.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="rounded-full border border-brand-rose/20 bg-white/70 px-5 py-3 text-sm uppercase tracking-[0.18em] text-brand-forest">
                  1h30
                </div>
                <div className="rounded-full border border-brand-rose/20 bg-white/70 px-5 py-3 text-sm uppercase tracking-[0.18em] text-brand-forest">
                  90€
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  className="inline-flex items-center justify-center bg-brand-forest px-8 py-4 text-sm font-semibold uppercase tracking-widest !text-white transition-colors duration-300 hover:bg-brand-rose hover:!text-white"
                  href="/rituel-esprit"
                  style={{ color: '#ffffff' }}
                >
                  Découvrir ce soin
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  className="inline-flex items-center justify-center border border-brand-forest px-8 py-4 text-sm uppercase tracking-widest text-brand-forest transition-colors duration-300 hover:bg-brand-forest hover:!text-white"
                  href="/contact"
                >
                  Réserver
                </a>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section className="relative bg-white py-24" id="prestations">
        <img
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-[-3rem] top-1/2 z-0 w-[19rem] -translate-y-1/2 opacity-[0.14] md:left-[-2rem] md:w-[23rem] lg:left-0 lg:w-[27rem]"
          src="/illustrations/illu-logo.svg"
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInSection className="relative z-10">
            <div className="mb-16 text-center">
              <h3 className="mb-2 font-script text-4xl text-brand-rose">
                {content.services.scriptTitle}
              </h3>
              <h2 className="font-subtitle text-4xl text-brand-forest md:text-5xl">
                {content.services.title}
              </h2>
            </div>
          </FadeInSection>

          <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {content.services.items.map((item, index) => (
              <FadeInSection delay={100 + index * 200} key={`${item.title}-${index}`}>
                <div className="group cursor-pointer">
                  <div className="relative mb-6 h-80 overflow-hidden">
                    <img
                      alt={item.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      src={item.imageUrl}
                    />
                    <div className="absolute inset-0 bg-brand-forest/20 transition-colors duration-500 group-hover:bg-transparent" />
                  </div>
                  <h4 className="mb-2 font-subtitle text-2xl text-brand-forest">{item.title}</h4>
                  <p className="mb-4 line-clamp-2 font-light text-brand-sage">{item.description}</p>
                  <span className="flex items-center text-sm uppercase tracking-widest text-brand-rose transition-colors group-hover:text-brand-forest">
                    En savoir plus <ChevronRight className="ml-1 h-4 w-4" />
                  </span>
                </div>
              </FadeInSection>
            ))}
          </div>

          <div className="relative z-10 mt-12 text-center">
            <a
              className="inline-block border border-brand-forest px-8 py-3 text-sm uppercase tracking-widest text-brand-forest transition-colors duration-300 hover:bg-brand-forest hover:!text-white"
              href={content.services.ctaHref}
            >
              {content.services.ctaLabel}
            </a>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-forest py-24 text-brand-cream">
        <div className="absolute right-0 top-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-sage opacity-30 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-16 lg:flex-row-reverse">
            <div className="w-full lg:w-5/12">
              <FadeInSection>
                <img
                  alt={content.audience.imageAlt}
                  className="h-auto w-full border-4 border-brand-rose/30 shadow-2xl"
                  src={content.audience.imageUrl}
                />
              </FadeInSection>
            </div>

            <div className="w-full lg:w-7/12">
              <FadeInSection>
                <h2 className="mb-8 font-subtitle text-4xl text-white md:text-5xl">
                  {content.audience.title}
                </h2>

                <div className="space-y-6 text-lg font-light leading-relaxed text-white/80">
                  {content.audience.paragraphs.slice(0, 1).map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <p className="border-l-4 border-brand-rose bg-brand-rose/20 p-6">
                    {content.audience.highlightedText}
                  </p>
                  {content.audience.paragraphs.slice(1).map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-cream py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="mb-16 text-center">
              <h3 className="mb-2 font-script text-4xl text-brand-rose">
                {content.testimonials.scriptTitle}
              </h3>
              <h2 className="font-subtitle text-4xl text-brand-forest md:text-5xl">
                {content.testimonials.title}
              </h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {content.testimonials.items.map((item, index) => (
              <FadeInSection delay={index * 200} key={`${item.author}-${index}`}>
                <div className="border-t-4 border-brand-rose bg-white p-8 text-center shadow-sm">
                  <p className="mb-6 italic text-brand-sage">&quot;{item.quote}&quot;</p>
                  <h4 className="font-subtitle font-medium text-brand-forest">- {item.author}</h4>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-rose px-4 py-12 text-center text-white">
        <FadeInSection>
          <p className="font-subtitle text-xl md:text-2xl">{content.contactBanner.text}</p>
        </FadeInSection>
      </section>
    </div>
  )
}
