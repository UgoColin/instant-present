import type { Metadata } from 'next'

import { SignatureRitualPage } from '@/components/SignatureRitualPage'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { getSiteSettings } from '@/lib/site-content'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Rituel Esprit | Instant Present',
  description:
    'Mon soin signature Rituel Esprit, une escale holistique de 1h30 pour harmoniser le corps, apaiser l’esprit et rééquilibrer l’énergie.',
}

export default async function SignatureRitualRoute() {
  const siteSettings = await getSiteSettings()

  return (
    <div className="overflow-x-hidden bg-brand-cream font-sans text-brand-sage selection:bg-brand-rose selection:text-white">
      <SiteHeader siteSettings={siteSettings} />
      <SignatureRitualPage />
      <SiteFooter siteSettings={siteSettings} />
    </div>
  )
}
