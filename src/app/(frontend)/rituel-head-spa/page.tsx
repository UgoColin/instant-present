import React from 'react'

import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { WellnessPageContent } from '@/components/WellnessPageContent'
import { getHeadSpaPageData, getSiteSettings } from '@/lib/site-content'

export const dynamic = 'force-dynamic'

export default async function HeadSpaPage() {
  const [siteSettings, headSpaPage] = await Promise.all([
    getSiteSettings(),
    getHeadSpaPageData(),
  ])

  return (
    <div className="overflow-x-hidden bg-brand-cream font-sans text-brand-sage selection:bg-brand-rose selection:text-white">
      <SiteHeader siteSettings={siteSettings} />
      <WellnessPageContent content={headSpaPage} />
      <SiteFooter siteSettings={siteSettings} />
    </div>
  )
}
