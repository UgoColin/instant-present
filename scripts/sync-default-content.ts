import 'dotenv/config'

import { getPayload } from 'payload'

import config from '@/payload.config'
import {
  defaultAyurvedicMassagePage,
  defaultBabyMassagePage,
  defaultBackMassagePage,
  defaultBookingPage,
  defaultCandleMassagePage,
  defaultCranialMassagePage,
  defaultEmotionalReleasePage,
  defaultFaceRelaxationPage,
  defaultHeadSpaChildPage,
  defaultHeadSpaClassicPage,
  defaultHeadSpaExpertPage,
  defaultHeadSpaPage,
  defaultHomePage,
  defaultIntuitiveMassagePage,
  defaultLymphaticDrainagePage,
  defaultLomiLomiMassagePage,
  defaultMaderotherapyPage,
  defaultMaternityPage,
  defaultNutritionPage,
  defaultPlantarMassagePage,
  defaultPrenatalMassagePage,
  defaultRitualsPage,
  defaultSignatureRitualPage,
  defaultSiteSettings,
  defaultWellnessPage,
} from '@/lib/default-content'
import type {
  BookingPageData,
  HomePageData,
  SignatureRitualPageData,
  SiteSettingsData,
  WellnessPageData,
  WellnessServiceDetailPageData,
} from '@/lib/site-model'

const toTextItems = (items: string[]) => items.map((text) => ({ text }))

const mapSiteSettings = (data: SiteSettingsData) => ({
  bookingCta: data.bookingCta,
  contact: data.contact,
  footerDescription: data.footerDescription,
  legalLinks: data.legalLinks,
  navigation: data.navigation.map((item) => ({
    href: item.href,
    submenu: item.submenu?.map((subItem) => ({
      href: subItem.href,
      title: subItem.title,
    })),
    title: item.title,
  })),
  shortSiteName: data.shortSiteName,
  siteName: data.siteName,
  socials: data.socials,
  tagline: data.tagline,
})

const mapHomePage = (data: HomePageData) => ({
  about: {
    imageAlt: data.about.imageAlt,
    paragraphs: toTextItems(data.about.paragraphs),
    scriptTitle: data.about.scriptTitle,
    title: data.about.title,
  },
  approach: data.approach,
  audience: {
    highlightedText: data.audience.highlightedText,
    imageAlt: data.audience.imageAlt,
    paragraphs: toTextItems(data.audience.paragraphs),
    title: data.audience.title,
  },
  contactBanner: data.contactBanner,
  hero: {
    accentTitle: data.hero.accentTitle,
    backgroundImageAlt: data.hero.backgroundImageAlt,
    ctaHref: data.hero.ctaHref,
    ctaLabel: data.hero.ctaLabel,
    scriptTitle: data.hero.scriptTitle,
    subtitle: data.hero.subtitle,
    title: data.hero.title,
  },
  services: {
    ctaHref: data.services.ctaHref,
    ctaLabel: data.services.ctaLabel,
    itemCtaLabel: data.services.itemCtaLabel,
    items: data.services.items.map((item) => ({
      description: item.description,
      href: item.href,
      imageAlt: item.imageAlt,
      title: item.title,
    })),
    scriptTitle: data.services.scriptTitle,
    title: data.services.title,
  },
  signatureFeature: {
    description: data.signatureFeature.description,
    duration: data.signatureFeature.duration,
    imageAlt: data.signatureFeature.imageAlt,
    primaryCtaHref: data.signatureFeature.primaryCtaHref,
    primaryCtaLabel: data.signatureFeature.primaryCtaLabel,
    price: data.signatureFeature.price,
    scriptTitle: data.signatureFeature.scriptTitle,
    secondaryCtaHref: data.signatureFeature.secondaryCtaHref,
    secondaryCtaLabel: data.signatureFeature.secondaryCtaLabel,
    subtitle: data.signatureFeature.subtitle,
    title: data.signatureFeature.title,
  },
  testimonials: {
    items: data.testimonials.items.map((item) => ({
      author: item.author,
      quote: item.quote,
    })),
    scriptTitle: data.testimonials.scriptTitle,
    title: data.testimonials.title,
  },
})

const mapWellnessPage = (data: WellnessPageData) => ({
  benefits: {
    items: data.benefits.items.map((item) => ({
      description: item.description,
      icon: item.icon,
      title: item.title,
    })),
    title: data.benefits.title,
  },
  cta: {
    buttonHref: data.cta.buttonHref,
    buttonLabel: data.cta.buttonLabel,
    text: data.cta.text,
    title: data.cta.title,
  },
  hero: {
    backgroundImageAlt: data.hero.backgroundImageAlt,
    subtitle: data.hero.subtitle,
    title: data.hero.title,
  },
  intro: {
    paragraphs: toTextItems(data.intro.paragraphs),
    title: data.intro.title,
  },
  services: {
    itemCtaLabel: data.services.itemCtaLabel,
    items: data.services.items.map((item) => ({
      description: item.description,
      duration: item.duration,
      href: item.href,
      imageAlt: item.imageAlt,
      price: item.price,
      title: item.title,
    })),
  },
})

const mapBookingPage = (data: BookingPageData) => ({
  access: data.access,
  contactMethods: data.contactMethods,
  faq: {
    acceptanceText: data.faq.acceptanceText,
    introText: data.faq.introText,
    items: data.faq.items.map((item) => ({
      description: item.description,
      icon: item.icon,
      title: item.title,
    })),
    title: data.faq.title,
  },
  form: {
    description: data.form.description,
    emailLabel: data.form.emailLabel,
    messageLabel: data.form.messageLabel,
    messagePlaceholder: data.form.messagePlaceholder,
    nameLabel: data.form.nameLabel,
    phoneLabel: data.form.phoneLabel,
    serviceLabel: data.form.serviceLabel,
    serviceOptions: data.form.serviceOptions.map((value) => ({ value })),
    servicePlaceholder: data.form.servicePlaceholder,
    submitLabel: data.form.submitLabel,
    title: data.form.title,
  },
  giftCard: data.giftCard,
  hero: {
    backgroundImageAlt: data.hero.backgroundImageAlt,
    quote: data.hero.quote,
    title: data.hero.title,
  },
  importantInfo: {
    items: toTextItems(data.importantInfo.items),
    title: data.importantInfo.title,
  },
  intro: {
    paragraphs: toTextItems(data.intro.paragraphs),
    title: data.intro.title,
  },
  reservation: data.reservation,
})

const mapSignatureRitualPage = (data: SignatureRitualPageData) => ({
  benefits: {
    items: data.benefits.items.map((item) => ({
      description: item.description,
      icon: item.icon,
      title: item.title,
    })),
    scriptTitle: data.benefits.scriptTitle,
    title: data.benefits.title,
  },
  closingCta: data.closingCta,
  hero: {
    backgroundImageAlt: data.hero.backgroundImageAlt,
    quote: data.hero.quote,
    scriptTitle: data.hero.scriptTitle,
    title: data.hero.title,
  },
  overview: {
    imageAlt: data.overview.imageAlt,
    paragraphs: toTextItems(data.overview.paragraphs),
    scriptTitle: data.overview.scriptTitle,
    title: data.overview.title,
  },
  practicalInfo: data.practicalInfo,
  profile: {
    items: toTextItems(data.profile.items),
    title: data.profile.title,
  },
  treatment: {
    paragraphs: toTextItems(data.treatment.paragraphs),
    title: data.treatment.title,
  },
})

const mapDetailPage = (data: WellnessServiceDetailPageData) => ({
  audience: {
    items: toTextItems(data.audience.items),
    title: data.audience.title,
  },
  benefits: {
    items: data.benefits.items.map((item) => ({
      description: item.description,
      icon: item.icon,
      title: item.title,
    })),
    scriptTitle: data.benefits.scriptTitle,
    title: data.benefits.title,
  },
  cta: data.cta,
  hero: {
    backgroundImageAlt: data.hero.backgroundImageAlt,
    subtitle: data.hero.subtitle,
    title: data.hero.title,
  },
  overview: {
    imageAlt: data.overview.imageAlt,
    paragraphs: toTextItems(data.overview.paragraphs),
    scriptTitle: data.overview.scriptTitle,
    title: data.overview.title,
  },
  practicalInfo: data.practicalInfo,
  slug: data.slug,
  title: data.title,
})

const wellnessServiceDefaults = [
  defaultAyurvedicMassagePage,
  defaultIntuitiveMassagePage,
  defaultLomiLomiMassagePage,
  defaultBackMassagePage,
  defaultFaceRelaxationPage,
  defaultCranialMassagePage,
  defaultPlantarMassagePage,
] as const

const ritualServiceDefaults = [
  defaultEmotionalReleasePage,
  defaultMaderotherapyPage,
  defaultLymphaticDrainagePage,
  defaultCandleMassagePage,
] as const

const headSpaServiceDefaults = [
  defaultHeadSpaClassicPage,
  defaultHeadSpaExpertPage,
  defaultHeadSpaChildPage,
] as const

const maternityServiceDefaults = [defaultPrenatalMassagePage, defaultBabyMassagePage] as const

const run = async () => {
  const payload = await getPayload({ config: await config })

  await payload.updateGlobal({
    slug: 'site-settings',
    data: mapSiteSettings(defaultSiteSettings),
  })

  await payload.updateGlobal({
    slug: 'home-page',
    data: mapHomePage(defaultHomePage),
  })

  await payload.updateGlobal({
    slug: 'wellness-page',
    data: mapWellnessPage(defaultWellnessPage),
  })

  await payload.updateGlobal({
    slug: 'rituals-page',
    data: mapWellnessPage(defaultRitualsPage),
  })

  await payload.updateGlobal({
    slug: 'head-spa-page',
    data: mapWellnessPage(defaultHeadSpaPage),
  })

  await payload.updateGlobal({
    slug: 'maternity-page',
    data: mapWellnessPage(defaultMaternityPage),
  })

  await payload.updateGlobal({
    slug: 'booking-page',
    data: mapBookingPage(defaultBookingPage),
  })

  await payload.updateGlobal({
    slug: 'signature-ritual-page',
    data: mapSignatureRitualPage(defaultSignatureRitualPage),
  })

  await payload.updateGlobal({
    slug: 'nutrition-page',
    data: mapDetailPage(defaultNutritionPage),
  })

  const upsertBySlug = async (
    collection:
      | 'wellness-service-pages'
      | 'ritual-service-pages'
      | 'head-spa-service-pages'
      | 'maternity-service-pages',
    defaults: readonly WellnessServiceDetailPageData[],
  ) => {
    for (const item of defaults) {
      const existing = await payload.find({
        collection,
        depth: 0,
        limit: 1,
        pagination: false,
        where: {
          slug: {
            equals: item.slug,
          },
        },
      })

      const data = mapDetailPage(item)

      if (existing.docs[0]) {
        await payload.update({
          collection,
          id: existing.docs[0].id,
          data,
        })
        console.log(`[sync-default-content] Updated ${collection}:${item.slug}`)
      } else {
        await payload.create({
          collection,
          data,
        })
        console.log(`[sync-default-content] Created ${collection}:${item.slug}`)
      }
    }
  }

  await upsertBySlug('wellness-service-pages', wellnessServiceDefaults)
  await upsertBySlug('ritual-service-pages', ritualServiceDefaults)
  await upsertBySlug('head-spa-service-pages', headSpaServiceDefaults)
  await upsertBySlug('maternity-service-pages', maternityServiceDefaults)
}

run()
  .then(() => {
    process.exit(0)
  })
  .catch((error) => {
    console.error('[sync-default-content] Failed')
    console.error(error)
    process.exit(1)
  })
