import type { Metadata } from 'next'

import { SignatureRitualPage } from '@/components/SignatureRitualPage'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { getSignatureRitualPageData, getSiteSettings } from '@/lib/site-content'

export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
  const content = await getSignatureRitualPageData()

  return {
    title: `${content.hero.title.replace('\n', ' ')} | Instant Present`,
    description: content.overview.paragraphs[0] || content.overview.title,
  }
}

export default async function SignatureRitualRoute() {
  const [siteSettings, content] = await Promise.all([
    getSiteSettings(),
    getSignatureRitualPageData(),
  ])

  return (
    <div className="overflow-x-hidden bg-brand-cream font-sans text-brand-sage selection:bg-brand-rose selection:text-white">
      <SiteHeader siteSettings={siteSettings} />
      <SignatureRitualPage content={content} />
      <SiteFooter siteSettings={siteSettings} />
    </div>
  )
}
