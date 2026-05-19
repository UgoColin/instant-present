import React from 'react'

import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { WellnessPageContent } from '@/components/WellnessPageContent'
import { getSiteSettings, getWellnessPageData } from '@/lib/site-content'

export const dynamic = 'force-dynamic'

export default async function WellnessPage() {
  const [siteSettings, wellnessPage] = await Promise.all([
    getSiteSettings(),
    getWellnessPageData(),
  ])

  return (
    <div className="overflow-x-hidden bg-brand-cream font-sans text-brand-sage selection:bg-brand-rose selection:text-white">
      <SiteHeader siteSettings={siteSettings} />
      <WellnessPageContent content={wellnessPage} />
      <SiteFooter siteSettings={siteSettings} />
    </div>
  )
}
