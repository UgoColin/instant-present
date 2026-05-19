import React from 'react'

import { BookingPageContent } from '@/components/BookingPageContent'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { getBookingPageData, getSiteSettings } from '@/lib/site-content'

export const dynamic = 'force-dynamic'

export default async function ContactPage() {
  const [siteSettings, bookingPage] = await Promise.all([
    getSiteSettings(),
    getBookingPageData(),
  ])

  return (
    <div className="overflow-x-hidden bg-brand-cream font-sans text-brand-sage selection:bg-brand-rose selection:text-white">
      <SiteHeader siteSettings={siteSettings} />
      <BookingPageContent content={bookingPage} siteSettings={siteSettings} />
      <SiteFooter siteSettings={siteSettings} />
    </div>
  )
}
