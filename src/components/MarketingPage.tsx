import Image from 'next/image'
import Link from 'next/link'

import type { Media, Page } from '@/payload-types'
import type { SiteSettingsData } from '@/lib/site-model'

type MarketingPageData = Pick<Page, 'content' | 'hero' | 'title'>

type MarketingPageProps = {
  isFallback?: boolean
  page: MarketingPageData
  siteSettings: SiteSettingsData
}

const isMedia = (value: MarketingPageData['hero']['image']): value is Media =>
  typeof value === 'object' && value !== null && 'url' in value

const getFallbackBody = (siteSettings: SiteSettingsData) =>
  [
    `${siteSettings.siteName} est prêt à être développé sur une base moderne et maintenable.`,
    'Depuis Payload, tu peux déjà gérer les pages, les textes principaux, les CTA et les images.',
    "Commence par créer une page avec le slug \"home\" pour remplacer ce contenu d'exemple.",
  ].join('\n\n')

export function MarketingPage({
  isFallback = false,
  page,
  siteSettings,
}: MarketingPageProps) {
  const heroImage = isMedia(page.hero?.image) ? page.hero.image : null
  const body = page.content || getFallbackBody(siteSettings)

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,_rgba(204,135,135,0.26),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(72,97,92,0.18),_transparent_32%),linear-gradient(180deg,_#faf1e8_0%,_#f4e3d9_52%,_#efe1d6_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-[linear-gradient(180deg,_rgba(0,67,58,0.06),_transparent)] blur-3xl" />

      <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-16 pt-8 sm:px-10 lg:px-12">
        <header className="flex flex-col gap-6 border-b border-brand-sage/20 pb-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-brand-sage">
              {siteSettings.siteName}
            </p>
            <h1 className="mt-4 max-w-3xl font-script text-6xl leading-[0.9] text-brand-forest sm:text-7xl lg:text-8xl">
              {page.hero?.headline || page.title}
            </h1>
            <p className="mt-5 max-w-2xl font-subtitle text-xl leading-8 text-brand-sage sm:text-2xl">
              {page.hero?.description || siteSettings.tagline}
            </p>
          </div>

          <div className="rounded-3xl border border-brand-sage/20 bg-brand-cream/70 p-5 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-sage">Accès rapide</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                className="rounded-full bg-brand-forest px-5 py-3 text-sm font-semibold text-brand-cream transition hover:bg-brand-sage"
                href="/admin"
              >
                Ouvrir le CMS
              </Link>
              <a
                className="rounded-full border border-brand-sage/30 px-5 py-3 text-sm font-semibold text-brand-forest transition hover:border-brand-forest/40 hover:bg-brand-rose/10"
                href="https://payloadcms.com/docs"
                rel="noreferrer"
                target="_blank"
              >
                Doc Payload
              </a>
            </div>
          </div>
        </header>

        <section className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-brand-rose">
              {page.hero?.eyebrow || 'Next.js + Payload + Tailwind'}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {page.hero?.primaryActionLabel && page.hero?.primaryActionHref ? (
                <Link
                  className="rounded-full bg-brand-rose px-6 py-3 text-sm font-semibold text-brand-cream transition hover:bg-brand-sage"
                  href={page.hero.primaryActionHref}
                >
                  {page.hero.primaryActionLabel}
                </Link>
              ) : null}

              {page.hero?.secondaryActionLabel && page.hero?.secondaryActionHref ? (
                <Link
                  className="rounded-full border border-brand-sage/30 px-6 py-3 text-sm font-semibold text-brand-forest transition hover:border-brand-forest/40 hover:bg-brand-forest/5"
                  href={page.hero.secondaryActionHref}
                >
                  {page.hero.secondaryActionLabel}
                </Link>
              ) : null}
            </div>

            {isFallback ? (
              <div className="mt-8 max-w-2xl rounded-3xl border border-brand-rose/30 bg-brand-rose/10 p-5 text-sm leading-6 text-brand-forest">
                Aucun contenu vitrine n&apos;existe encore dans le CMS. Crée une page avec le slug{' '}
                <code className="rounded bg-brand-forest/10 px-2 py-1">home</code> pour piloter cette
                page depuis Payload.
              </div>
            ) : null}

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                'Page modifiable avec slug',
                'Médiathèque intégrée',
                'Réglages du site centralisés',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-brand-sage/20 bg-brand-cream/60 px-4 py-4 text-sm text-brand-forest backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-brand-rose/30 via-brand-cream/20 to-brand-sage/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-brand-sage/20 bg-brand-forest shadow-2xl shadow-brand-forest/15">
              {heroImage?.url ? (
                <Image
                  alt={heroImage.alt}
                  className="aspect-[4/5] h-full w-full object-cover"
                  height={heroImage.height || 1200}
                  src={heroImage.url}
                  width={heroImage.width || 960}
                />
              ) : (
                <div className="aspect-[4/5] bg-[linear-gradient(145deg,_rgba(204,135,135,0.36),_rgba(250,241,232,0.18),_rgba(72,97,92,0.22))] p-8">
                  <div className="flex h-full flex-col justify-between rounded-[1.6rem] border border-brand-cream/20 bg-brand-forest/80 p-6 backdrop-blur">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-brand-cream/70">
                        Starter vitrine
                      </p>
                      <p className="mt-4 font-subtitle text-4xl leading-tight text-brand-cream">
                        Commence le design, pas l&apos;infrastructure.
                      </p>
                    </div>

                    <div className="space-y-3">
                      {['/admin', 'Pages', 'Media', 'Site settings'].map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-brand-cream/15 bg-brand-cream/10 px-4 py-3 text-sm text-brand-cream"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="grid gap-8 border-t border-brand-sage/20 pt-10 lg:grid-cols-[1fr_0.8fr]">
          <div className="max-w-3xl">
            <h2 className="font-subtitle text-3xl text-brand-forest sm:text-4xl">Contenu éditorial</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-brand-sage">
              {body.split('\n').filter(Boolean).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside className="rounded-[2rem] border border-brand-sage/20 bg-brand-cream/60 p-6 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-sage">Prochaine étape</p>
            <ol className="mt-5 space-y-4 text-sm leading-6 text-brand-forest">
              <li>1. Crée ton premier compte admin sur /admin.</li>
              <li>2. Ajoute une image dans la collection Media.</li>
              <li>3. Crée une page avec le slug home.</li>
              <li>4. Branche ensuite tes sections métier et ton design final.</li>
            </ol>
          </aside>
        </section>

        <footer className="mt-10 border-t border-brand-sage/20 pt-6 text-sm text-brand-sage">
          {siteSettings.footerDescription}
        </footer>
      </main>
    </div>
  )
}
