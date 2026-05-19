import { notFound } from 'next/navigation'

import { MarketingPage } from '@/components/MarketingPage'
import { getPageBySlug, getSiteSettings } from '@/lib/site-content'

export const dynamic = 'force-dynamic'

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params
  const [siteSettings, page] = await Promise.all([getSiteSettings(), getPageBySlug(slug)])

  if (!page) {
    notFound()
  }

  return <MarketingPage page={page} siteSettings={siteSettings} />
}
