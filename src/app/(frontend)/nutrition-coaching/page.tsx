import React from 'react'

import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { WellnessServiceDetailPage } from '@/components/WellnessServiceDetailPage'
import { getNutritionPageData, getSiteSettings } from '@/lib/site-content'

export const dynamic = 'force-dynamic'

export default async function NutritionCoachingPage() {
  const [siteSettings, nutritionPage] = await Promise.all([
    getSiteSettings(),
    getNutritionPageData(),
  ])

  return (
    <div className="overflow-x-hidden bg-brand-cream font-sans text-brand-sage selection:bg-brand-rose selection:text-white">
      <SiteHeader siteSettings={siteSettings} />
      <WellnessServiceDetailPage content={nutritionPage} />
      <SiteFooter siteSettings={siteSettings} />
    </div>
  )
}
