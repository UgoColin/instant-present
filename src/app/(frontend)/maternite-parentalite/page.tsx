import React from 'react'

import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { WellnessPageContent } from '@/components/WellnessPageContent'
import { getMaternityPageData, getSiteSettings } from '@/lib/site-content'

export const dynamic = 'force-dynamic'

export default async function MaternityPage() {
  const [siteSettings, maternityPage] = await Promise.all([
    getSiteSettings(),
    getMaternityPageData(),
  ])

  return (
    <div className="overflow-x-hidden bg-brand-cream font-sans text-brand-sage selection:bg-brand-rose selection:text-white">
      <SiteHeader siteSettings={siteSettings} />
      <WellnessPageContent content={maternityPage} />
      <SiteFooter siteSettings={siteSettings} />
    </div>
  )
}
