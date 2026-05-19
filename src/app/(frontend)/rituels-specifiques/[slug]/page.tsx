import { notFound } from 'next/navigation'

import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { WellnessServiceDetailPage } from '@/components/WellnessServiceDetailPage'
import { getRitualServicePageBySlug, getSiteSettings } from '@/lib/site-content'

export const dynamic = 'force-dynamic'

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function RitualServicePage({ params }: PageProps) {
  const { slug } = await params
  const [siteSettings, servicePage] = await Promise.all([
    getSiteSettings(),
    getRitualServicePageBySlug(slug),
  ])

  if (!servicePage) {
    notFound()
  }

  return (
    <div className="overflow-x-hidden bg-brand-cream font-sans text-brand-sage selection:bg-brand-rose selection:text-white">
      <SiteHeader siteSettings={siteSettings} />
      <WellnessServiceDetailPage content={servicePage} />
      <SiteFooter siteSettings={siteSettings} />
    </div>
  )
}
