import React from 'react'

import { HomePageContent } from '@/components/HomePageContent'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { getHomePageData, getSiteSettings } from '@/lib/site-content'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const [siteSettings, homePage] = await Promise.all([getSiteSettings(), getHomePageData()])

  return (
    <div className="overflow-x-hidden bg-brand-cream font-sans text-brand-sage selection:bg-brand-rose selection:text-white">
      <SiteHeader siteSettings={siteSettings} />
      <HomePageContent content={homePage} />
      <SiteFooter siteSettings={siteSettings} />
    </div>
  )
}
