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

import { FadeInSection } from './FadeInSection'

const benefitIcons = {
  balance: Compass,
  calm: Brain,
  energy: Sparkles,
  release: HandHeart,
  relax: Leaf,
} as const

type SignatureBenefitIcon = keyof typeof benefitIcons

export function SignatureRitualPage() {
  const profileItems = [
    'Vous ressentez un déséquilibre intérieur.',
    'Vous êtes fatigué(e), tendu(e) ou submergé(e).',
    "Vous avez besoin de vous recentrer et de retrouver de l'harmonie.",
    'Vous souhaitez vivre un soin profond, à la fois physique et émotionnel.',
  ]

  const benefitItems = [
    {
      description:
        'Le soin aide à délier ce qui se fige dans le corps et ce qui pèse émotionnellement.',
      icon: 'release' as SignatureBenefitIcon,
      title: 'Libération des tensions physiques et émotionnelles',
    },
    {
      description:
        'Le rythme lent du rituel invite au calme, au relâchement et à une respiration plus ample.',
      icon: 'calm' as SignatureBenefitIcon,
      title: 'Apaisement profond du mental',
    },
    {
      description:
        'Le soin accompagne une circulation plus fluide de l’énergie pour retrouver une sensation d’élan.',
      icon: 'energy' as SignatureBenefitIcon,
      title: 'Rééquilibrage énergétique',
    },
    {
      description:
        'Vous retrouvez davantage de clarté intérieure, de stabilité et une sensation de recentrage.',
      icon: 'balance' as SignatureBenefitIcon,
      title: "Sensation d'alignement et de recentrage",
    },
    {
      description:
        'Les effets du soin se prolongent au-delà de la séance dans une détente plus installée.',
      icon: 'relax' as SignatureBenefitIcon,
      title: 'Détente durable',
    },
  ]

  return (
    <div className="overflow-x-hidden bg-brand-cream">
      <section className="relative flex min-h-[460px] items-center justify-center overflow-hidden md:min-h-[62vh]">
        <div className="absolute inset-0 z-0">
          <img
            alt="Soin signature Rituel Esprit"
            className="h-full w-full object-cover object-center brightness-[0.82]"
            src="/site-images/home-hero-massage.jpg"
          />
          <div className="absolute inset-0 bg-brand-forest/35" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <FadeInSection>
            <p className="mb-4 font-script text-4xl text-brand-rose md:text-5xl">Soin signature</p>
            <h1 className="font-subtitle text-4xl leading-tight text-brand-cream md:text-6xl">
              Mon soin signature
              <br />
              <span className="text-brand-cream/90">Rituel Esprit</span>
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-xl font-light leading-relaxed text-white/90 md:text-2xl">
              « Un soin où le corps se relâche… et où l’énergie retrouve son équilibre »
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
                Durée
              </p>
              <p className="font-subtitle text-xl text-brand-forest">1h30</p>
            </div>
          </div>

          <div className="hidden h-12 w-px bg-brand-cream md:block" />

          <div className="flex items-center">
            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-cream text-brand-rose">
              <CreditCard className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-sage">
                Tarif
              </p>
              <p className="font-subtitle text-xl text-brand-forest">90€</p>
            </div>
          </div>

          <div>
            <a
              className="inline-block bg-brand-forest px-8 py-3 text-sm uppercase tracking-widest !text-white transition-colors duration-300 hover:bg-brand-rose hover:!text-white"
              href="/contact"
              style={{ color: '#ffffff' }}
            >
              Réserver ce soin
            </a>
          </div>
        </div>
      </div>

      <section className="relative overflow-hidden bg-brand-cream py-24">
        <img
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-[-3rem] top-1/2 z-0 w-[19rem] -translate-y-1/2 opacity-[0.12] md:right-[-2rem] md:w-[24rem] lg:right-0 lg:w-[27rem]"
          src="/illustrations/illu-flyer.svg"
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-16 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <FadeInSection>
                <h3 className="mb-2 font-script text-4xl text-brand-rose">Une escale holistique</h3>
                <h2 className="mb-8 font-subtitle text-4xl text-brand-forest md:text-5xl">
                  Harmoniser le corps, apaiser l’esprit et rééquilibrer l’énergie
                </h2>
                <div className="space-y-6 text-lg font-light leading-relaxed text-brand-sage">
                  <p>
                    Ce soin signature est une véritable invitation à ralentir, à vous déposer et à
                    vous reconnecter profondément à vous-même.
                  </p>
                  <p>
                    À travers un toucher conscient, des gestes fluides et une présence attentive, ce
                    rituel agit à la fois sur le corps, le mental et l’énergie.
                  </p>
                  <p>Un moment hors du temps, pour vous reconnecter à vous-même en profondeur.</p>
                </div>
              </FadeInSection>
            </div>

            <div className="w-full lg:w-1/2">
              <FadeInSection delay={200}>
                <div className="overflow-hidden rounded-t-full border-8 border-white shadow-xl">
                  <img
                    alt="Ambiance du Rituel Esprit"
                    className="h-[500px] w-full object-cover"
                    src="/site-images/wellness-oils.jpg"
                  />
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
          className="pointer-events-none absolute left-[-3rem] top-24 z-0 w-[18rem] opacity-[0.12] md:left-[-2rem] md:w-[22rem] lg:left-0 lg:w-[26rem]"
          src="/illustrations/illu-logo.svg"
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <FadeInSection>
              <div className="rounded-[2rem] bg-brand-cream p-8 md:p-10">
                <h2 className="mb-8 font-subtitle text-3xl text-brand-forest md:text-4xl">
                  Pour vous si…
                </h2>
                <div className="space-y-5">
                  {profileItems.map((item) => (
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
                  <h2 className="font-subtitle text-3xl text-brand-forest md:text-4xl">Le soin</h2>
                </div>
                <div className="space-y-5 text-lg font-light leading-relaxed text-brand-sage">
                  <p>
                    Ce Rituel associe des manœuvres enveloppantes, fluides et profondes, réalisées
                    avec lenteur et intention.
                  </p>
                  <p>
                    Le travail ne se limite pas au relâchement musculaire : il permet également de
                    relancer la circulation de l’énergie dans le corps, favorisant une sensation
                    d’harmonie globale.
                  </p>
                  <p>
                    Chaque soin est unique, guidé par l’écoute de votre corps et de vos ressentis,
                    pour vous accompagner là où vous en avez le plus besoin.
                  </p>
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
              <p className="mb-2 font-script text-4xl text-brand-rose">Les bienfaits</p>
              <h2 className="font-subtitle text-4xl md:text-5xl">
                Une sensation d’équilibre retrouvée
              </h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
            {benefitItems.map((item, index) => {
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
            Vous offrir un vrai temps de recentrage
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg font-light text-brand-sage">
            Le Rituel Esprit s’adresse à celles et ceux qui ont besoin de souffler, de relâcher les
            tensions accumulées et de retrouver une harmonie plus profonde entre corps, émotions et
            énergie.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              className="flex items-center bg-brand-rose px-8 py-4 text-sm font-semibold uppercase tracking-wider !text-white transition-colors hover:bg-brand-forest hover:!text-white"
              href="/contact"
              style={{ color: '#ffffff' }}
            >
              Réserver le Rituel Esprit
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              className="border-b border-brand-forest pb-1 text-sm uppercase tracking-widest text-brand-forest transition-all hover:border-brand-rose hover:text-brand-rose"
              href="/"
            >
              Revenir à l’accueil
            </a>
          </div>
        </FadeInSection>
      </section>
    </div>
  )
}
