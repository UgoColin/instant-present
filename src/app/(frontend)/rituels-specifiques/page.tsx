import React from 'react'

import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { WellnessPageContent } from '@/components/WellnessPageContent'
import { getRitualsPageData, getSiteSettings } from '@/lib/site-content'

export const dynamic = 'force-dynamic'

export default async function RitualsPage() {
  const [siteSettings, ritualsPage] = await Promise.all([
    getSiteSettings(),
    getRitualsPageData(),
  ])

  return (
    <div className="overflow-x-hidden bg-brand-cream font-sans text-brand-sage selection:bg-brand-rose selection:text-white">
      <SiteHeader siteSettings={siteSettings} />
      <WellnessPageContent content={ritualsPage} />
      <SiteFooter siteSettings={siteSettings} />
    </div>
  )
}
