/* eslint-disable @next/next/no-img-element */
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  Clock3,
  Compass,
  CreditCard,
  HandHeart,
  Leaf,
  Sparkles,
} from 'lucide-react'
import Link from 'next/link'

import type { SignatureRitualPageData } from '@/lib/site-model'

import { FadeInSection } from './FadeInSection'

const benefitIcons = {
  balance: Compass,
  calm: Brain,
  energy: Sparkles,
  release: HandHeart,
  relax: Leaf,
} as const

type SignatureRitualPageProps = {
  content: SignatureRitualPageData
}

export function SignatureRitualPage({ content }: SignatureRitualPageProps) {
  const [heroTitleFirstLine, heroTitleSecondLine] = content.hero.title.split('\n')

  return (
    <div className="overflow-x-hidden bg-brand-cream">
      <section className="relative flex min-h-[460px] items-center justify-center overflow-hidden md:min-h-[62vh]">
        <div className="absolute inset-0 z-0">
          <img
            alt={content.hero.backgroundImageAlt}
            className="h-full w-full object-cover object-center brightness-[0.82]"
            src={content.hero.backgroundImageUrl}
          />
          <div className="absolute inset-0 bg-brand-forest/35" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <FadeInSection>
            <p className="mb-4 font-script text-4xl text-brand-rose md:text-5xl">
              {content.hero.scriptTitle}
            </p>
            <h1 className="font-subtitle text-4xl leading-tight text-brand-cream md:text-6xl">
              {heroTitleFirstLine}
              {heroTitleSecondLine ? (
                <>
                  <br />
                  <span className="text-brand-cream/90">{heroTitleSecondLine}</span>
                </>
              ) : null}
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-xl font-light leading-relaxed text-white/90 md:text-2xl">
              {content.hero.quote}
            </p>
          </FadeInSection>
        </div>
      </section>

      <div className="relative z-20 mx-auto -mt-12 max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-around gap-6 rounded-lg border border-brand-cream bg-white p-6 shadow-lg md:flex-row md:gap-8 md:p-8">
          <div className="flex items-center">
            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-cream text-brand-rose">
              <Clock3 className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-sage">
                {content.practicalInfo.durationLabel}
              </p>
              <p className="font-subtitle text-xl text-brand-forest">
                {content.practicalInfo.duration}
              </p>
            </div>
          </div>

          <div className="hidden h-12 w-px bg-brand-cream md:block" />

          <div className="flex items-center">
            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-cream text-brand-rose">
              <CreditCard className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-sage">
                {content.practicalInfo.priceLabel}
              </p>
              <p className="font-subtitle text-xl text-brand-forest">
                {content.practicalInfo.price}
              </p>
            </div>
          </div>

          <div>
            <Link
              className="inline-block bg-brand-forest px-8 py-3 text-sm uppercase tracking-widest !text-white transition-colors duration-300 hover:bg-brand-rose hover:!text-white"
              href={content.practicalInfo.ctaHref}
              style={{ color: '#ffffff' }}
            >
              {content.practicalInfo.ctaLabel}
            </Link>
          </div>
        </div>
      </div>

      <section className="relative overflow-hidden bg-brand-cream py-24">
        <img
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-[-3rem] top-1/2 z-0 w-[18rem] -translate-y-1/2 opacity-[0.1] md:right-[-1rem] md:w-[22rem] lg:right-0 lg:w-[25rem]"
          src="/illustrations/illu-flow.svg"
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-16 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <FadeInSection>
                <h3 className="mb-2 font-script text-4xl text-brand-rose">
                  {content.overview.scriptTitle}
                </h3>
                <h2 className="mb-8 font-subtitle text-4xl text-brand-forest md:text-5xl">
                  {content.overview.title}
                </h2>
                <div className="space-y-6 text-lg font-light leading-relaxed text-brand-sage">
                  {content.overview.paragraphs.map((paragraph, index) => (
                    <p key={`${paragraph.slice(0, 24)}-${index}`}>{paragraph}</p>
                  ))}
                </div>
              </FadeInSection>
            </div>

            <div className="w-full lg:w-1/2">
              <FadeInSection delay={200}>
                <div className="relative">
                  <div className="mx-auto max-w-[21rem] overflow-hidden rounded-t-full border-8 border-white shadow-xl md:max-w-[24rem] lg:mx-auto lg:max-w-[22rem] xl:max-w-[24rem]">
                    <img
                      alt={content.overview.imageAlt}
                      className="h-[390px] w-full object-cover md:h-[450px] lg:h-[420px] xl:h-[450px]"
                      src={content.overview.imageUrl}
                    />
                  </div>
                  <div className="absolute -bottom-8 right-4 z-0 h-32 w-32 rounded-full bg-brand-rose/20 md:h-40 md:w-40" />
                  <div className="absolute -left-3 top-8 z-0 h-20 w-20 rounded-full bg-brand-forest/10 md:h-24 md:w-24" />
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-24">
        <img
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-[-4rem] top-24 z-0 w-[17rem] opacity-[0.1] md:left-[-2rem] md:w-[21rem] lg:left-0 lg:w-[24rem]"
          src="/illustrations/illu-line-figure.svg"
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <FadeInSection>
              <div className="rounded-[2rem] bg-brand-cream p-8 md:p-10">
                <h2 className="mb-8 font-subtitle text-3xl text-brand-forest md:text-4xl">
                  {content.profile.title}
                </h2>
                <div className="space-y-5">
                  {content.profile.items.map((item) => (
                    <div className="flex items-start" key={item}>
                      <CheckCircle2 className="mr-4 mt-1 h-6 w-6 flex-shrink-0 text-brand-rose" />
                      <p className="font-medium leading-relaxed text-brand-sage">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={150}>
              <div className="rounded-[2rem] border border-brand-rose/15 bg-white p-8 shadow-sm md:p-10">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-cream text-brand-rose">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <h2 className="font-subtitle text-3xl text-brand-forest md:text-4xl">
                    {content.treatment.title}
                  </h2>
                </div>
                <div className="space-y-5 text-lg font-light leading-relaxed text-brand-sage">
                  {content.treatment.paragraphs.map((paragraph, index) => (
                    <p key={`${paragraph.slice(0, 24)}-${index}`}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section className="bg-brand-forest py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="mb-16 text-center">
              <p className="mb-2 font-script text-4xl text-brand-rose">
                {content.benefits.scriptTitle}
              </p>
              <h2 className="font-subtitle text-4xl md:text-5xl">{content.benefits.title}</h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
            {content.benefits.items.map((item, index) => {
              const Icon = benefitIcons[item.icon]

              return (
                <FadeInSection delay={100 + index * 120} key={item.title}>
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 text-brand-rose">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h4 className="mb-4 font-subtitle text-2xl">{item.title}</h4>
                    <p className="font-light leading-relaxed text-white/80">{item.description}</p>
                  </div>
                </FadeInSection>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-brand-cream px-4 py-20 text-center">
        <FadeInSection>
          <h2 className="mb-6 font-subtitle text-3xl text-brand-forest md:text-4xl">
            {content.closingCta.title}
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg font-light text-brand-sage">
            {content.closingCta.text}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              className="flex items-center bg-brand-rose px-8 py-4 text-sm font-semibold uppercase tracking-wider !text-white transition-colors hover:bg-brand-forest hover:!text-white"
              href={content.closingCta.primaryHref}
              style={{ color: '#ffffff' }}
            >
              {content.closingCta.primaryLabel}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              className="border-b border-brand-forest pb-1 text-sm uppercase tracking-widest text-brand-forest transition-all hover:border-brand-rose hover:text-brand-rose"
              href={content.closingCta.secondaryHref}
            >
              {content.closingCta.secondaryLabel}
            </Link>
          </div>
        </FadeInSection>
      </section>
    </div>
  )
}
