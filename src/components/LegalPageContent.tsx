import type { ReactNode } from 'react'

import type { SiteSettingsData } from '@/lib/site-model'

type LegalFact = {
  label: string
  value: string
}

type LegalSection = {
  content?: ReactNode
  paragraphs?: string[]
  title: string
}

type LegalPageContentProps = {
  intro: string[]
  quickFacts: LegalFact[]
  scriptTitle: string
  sections: LegalSection[]
  siteSettings: SiteSettingsData
  title: string
}

function DetailCard(props: { children: ReactNode; title: string }) {
  const { children, title } = props

  return (
    <div className="rounded-[2rem] border border-brand-rose/20 bg-white/85 p-6 shadow-[0_24px_80px_rgba(21,87,77,0.08)] backdrop-blur-sm">
      <h2 className="mb-4 font-subtitle text-2xl text-brand-forest">{title}</h2>
      {children}
    </div>
  )
}

export function LegalPageContent(props: LegalPageContentProps) {
  const { intro, quickFacts, scriptTitle, sections, siteSettings, title } = props

  return (
    <div className="relative overflow-hidden bg-brand-cream">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top_left,rgba(204,135,135,0.18),transparent_42%),radial-gradient(circle_at_top_right,rgba(21,87,77,0.12),transparent_36%),linear-gradient(180deg,#fff8f3_0%,#faf1e8_72%)]"
      />
      <div
        aria-hidden="true"
        className="absolute left-[-7rem] top-36 h-44 w-44 rounded-full bg-brand-rose/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute right-[-6rem] top-28 h-60 w-60 rounded-full bg-brand-forest/10 blur-3xl"
      />

      <section className="relative border-b border-brand-rose/10 px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-20 lg:pt-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 font-script text-4xl text-brand-rose md:text-5xl">{scriptTitle}</p>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_20rem] lg:items-end">
            <div>
              <h1 className="max-w-3xl font-subtitle text-4xl leading-tight text-brand-forest md:text-6xl">
                {title}
              </h1>
              <div className="mt-8 max-w-3xl space-y-4 text-base leading-8 text-brand-sage md:text-lg">
                {intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-brand-forest/10 bg-white/80 p-6 shadow-[0_24px_80px_rgba(21,87,77,0.08)] backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-rose">
                Repères
              </p>
              <dl className="mt-5 space-y-4">
                {quickFacts.map((fact) => (
                  <div
                    className="border-b border-brand-sage/10 pb-4 last:border-b-0 last:pb-0"
                    key={fact.label}
                  >
                    <dt className="text-xs uppercase tracking-[0.22em] text-brand-sage/70">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium leading-6 text-brand-forest">
                      {fact.value}
                    </dd>
                  </div>
                ))}
                <div className="rounded-2xl bg-brand-forest px-4 py-3 text-sm leading-6 text-brand-cream">
                  Contact principal : {siteSettings.contact.email}
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[20rem_minmax(0,1fr)] lg:items-start">
          <div className="space-y-6 lg:sticky lg:top-28">
            <DetailCard title="Cadre du site">
              <p className="text-sm leading-7 text-brand-sage">
                Les textes ci-dessous sont rédigés pour une activité de bien-être sur rendez-vous,
                avec prestations non médicales et relation directe avec la clientèle.
              </p>
            </DetailCard>
          </div>

          <div className="space-y-6">
            {sections.map((section, index) => (
              <article
                className="rounded-[2rem] border border-brand-forest/10 bg-white/90 p-7 shadow-[0_28px_90px_rgba(21,87,77,0.06)] backdrop-blur-sm md:p-9"
                key={`${section.title}-${index}`}
              >
                <div className="mb-5 flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-rose/12 font-subtitle text-lg text-brand-rose">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className="font-subtitle text-2xl text-brand-forest md:text-3xl">
                    {section.title}
                  </h2>
                </div>

                {section.content ? <div>{section.content}</div> : null}

                {section.paragraphs?.length ? (
                  <div className="space-y-4 text-sm leading-7 text-brand-sage md:text-base">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
