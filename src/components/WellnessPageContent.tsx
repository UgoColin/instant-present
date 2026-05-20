/* eslint-disable @next/next/no-img-element */
import {
  ArrowRight,
  Clock3,
  CreditCard,
  Heart,
  Sparkles,
  Wind,
} from 'lucide-react'

import type { WellnessPageData } from '@/lib/site-model'

import { FadeInSection } from './FadeInSection'

type WellnessPageContentProps = {
  content: WellnessPageData
}

const createAnchorId = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

const benefitIcons = {
  heart: Heart,
  sparkles: Sparkles,
  wind: Wind,
} as const

export function WellnessPageContent({ content }: WellnessPageContentProps) {
  return (
    <div className="overflow-x-hidden bg-brand-cream">
      <section className="relative flex min-h-[420px] items-center justify-center overflow-hidden md:min-h-[500px]">
        <div className="absolute inset-0 z-0">
          <img
            alt={content.hero.backgroundImageAlt}
            className="h-full w-full object-cover object-center"
            src={content.hero.backgroundImageUrl}
          />
          <div className="absolute inset-0 bg-brand-forest/45" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <FadeInSection>
            <h1 className="mb-5 font-script text-5xl text-brand-cream md:text-7xl">
              {content.hero.title}
            </h1>
            <h2 className="mx-auto max-w-4xl font-subtitle text-2xl font-light tracking-wide text-white md:text-4xl">
              {content.hero.subtitle}
            </h2>
          </FadeInSection>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20 md:py-24">
        <img
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-[-3rem] top-1/2 z-0 w-[19rem] -translate-y-1/2 opacity-[0.12] md:right-[-2rem] md:w-[24rem] lg:right-0 lg:w-[27rem]"
          src="/illustrations/illu-flyer.svg"
        />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <FadeInSection>
            <Sparkles className="mx-auto mb-6 h-8 w-8 text-brand-rose" />
            <h2 className="mb-8 font-subtitle text-3xl text-brand-forest md:text-4xl">
              {content.intro.title}
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed text-brand-sage">
              {content.intro.paragraphs.map((paragraph, index) => (
                <p key={`${paragraph.slice(0, 24)}-${index}`}>{paragraph}</p>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-cream py-20 md:py-24">
        <img
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-[-3rem] top-[12rem] z-0 w-[18rem] opacity-[0.14] md:left-[-2rem] md:w-[23rem] lg:left-0 lg:w-[26rem]"
          src="/illustrations/illu-logo.svg"
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {content.services.items.map((service, index) => {
              const anchorId = createAnchorId(service.title)

              return (
                <FadeInSection delay={index * 100} key={`${service.title}-${index}`}>
                  <article
                    className="flex h-full flex-col overflow-hidden rounded-t-[40px] rounded-br-[40px] border border-brand-rose/10 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                    id={anchorId}
                  >
                    <div className="group relative h-64 overflow-hidden">
                      <img
                        alt={service.imageAlt}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        src={service.imageUrl}
                      />
                      <div className="absolute inset-0 bg-brand-forest/10 transition-colors duration-500 group-hover:bg-transparent" />
                    </div>

                    <div className="flex flex-1 flex-col p-8">
                      <h3 className="mb-4 font-subtitle text-2xl text-brand-forest transition-colors duration-300 hover:text-brand-rose">
                        {service.title}
                      </h3>
                      <p className="mb-6 flex-grow text-sm font-light leading-relaxed text-brand-sage">
                        {service.description}
                      </p>

                      <div
                        className={[
                          'mb-6 flex items-center border-y border-brand-cream py-4 text-sm font-medium text-brand-forest',
                          service.price ? 'justify-between' : 'justify-start',
                        ].join(' ')}
                      >
                        <div className="flex items-center">
                          <Clock3 className="mr-2 h-4 w-4 text-brand-rose" />
                          {service.duration}
                        </div>
                        {service.price ? (
                          <div className="flex items-center text-right">
                            <CreditCard className="mr-2 h-4 w-4 text-brand-rose" />
                            {service.price}
                          </div>
                        ) : null}
                      </div>

                      <a
                        className="group inline-flex items-center justify-center text-xs font-semibold uppercase tracking-widest text-brand-rose transition-colors hover:text-brand-forest"
                        href={service.href}
                      >
                        {content.services.itemCtaLabel}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </article>
                </FadeInSection>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="mb-16 text-center">
              <h2 className="font-subtitle text-3xl text-brand-forest md:text-4xl">
                {content.benefits.title}
              </h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3">
            {content.benefits.items.map((item, index) => {
              const Icon = benefitIcons[item.icon]

              return (
                <FadeInSection delay={100 + index * 200} key={`${item.title}-${index}`}>
                  <div className="flex flex-col items-center">
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-brand-cream text-brand-rose">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="mb-3 font-subtitle text-xl text-brand-forest">{item.title}</h3>
                    <p className="max-w-sm text-sm font-light leading-relaxed text-brand-sage">
                      {item.description}
                    </p>
                  </div>
                </FadeInSection>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-brand-forest px-4 py-16 text-center text-white">
        <FadeInSection>
          <h2 className="mb-4 font-subtitle text-3xl">{content.cta.title}</h2>
          <p className="mx-auto mb-8 max-w-2xl font-light leading-relaxed text-white/80">
            {content.cta.text}
          </p>
          <a
            className="inline-block bg-brand-rose px-8 py-3 text-sm uppercase tracking-widest text-white transition-colors hover:bg-white hover:!text-brand-forest"
            href={content.cta.buttonHref}
          >
            {content.cta.buttonLabel}
          </a>
        </FadeInSection>
      </section>
    </div>
  )
}
