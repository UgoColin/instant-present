import type {
  BookingPage,
  HeadSpaPage,
  HeadSpaServicePage,
  HomePage,
  MaternityPage,
  MaternityServicePage,
  Media,
  NutritionPage,
  Page,
  RitualServicePage,
  RitualsPage,
  SignatureRitualPage,
  SiteSetting,
  WellnessPage,
  WellnessServicePage,
} from '@/payload-types'

import {
  defaultBackMassagePage,
  defaultBabyMassagePage,
  defaultBookingPage,
  defaultAyurvedicMassagePage,
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
import { getPayloadClient } from '@/lib/payload'
import type {
  BookingPageData,
  HomePageData,
  SignatureRitualPageData,
  SiteSettingsData,
  WellnessPageData,
  WellnessServiceDetailPageData,
} from '@/lib/site-model'

const isMedia = (value: unknown): value is Media =>
  typeof value === 'object' && value !== null && 'url' in value

const getMediaUrl = (value: unknown, fallback: string) =>
  isMedia(value) && value.url ? value.url : fallback

const createAnchorId = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

const getDefaultNavigationItem = (title: string) =>
  defaultSiteSettings.navigation.find((item) => item.title === title)

const getDefaultLegalLink = (label: string) =>
  defaultSiteSettings.legalLinks.find((item) => item.label === label)

const defaultWellnessServicePages = [
  defaultAyurvedicMassagePage,
  defaultIntuitiveMassagePage,
  defaultLomiLomiMassagePage,
  defaultBackMassagePage,
  defaultFaceRelaxationPage,
  defaultCranialMassagePage,
  defaultPlantarMassagePage,
] as const

const getDefaultWellnessServicePageBySlug = (slug: string) =>
  defaultWellnessServicePages.find((page) => page.slug === slug) ?? null

const defaultRitualServicePages = [
  defaultEmotionalReleasePage,
  defaultMaderotherapyPage,
  defaultLymphaticDrainagePage,
  defaultCandleMassagePage,
] as const

const getDefaultRitualServicePageBySlug = (slug: string) =>
  defaultRitualServicePages.find((page) => page.slug === slug) ?? null

const defaultHeadSpaServicePages = [
  defaultHeadSpaClassicPage,
  defaultHeadSpaExpertPage,
  defaultHeadSpaChildPage,
] as const

const getDefaultHeadSpaServicePageBySlug = (slug: string) =>
  defaultHeadSpaServicePages.find((page) => page.slug === slug) ?? null

const defaultMaternityServicePages = [defaultPrenatalMassagePage, defaultBabyMassagePage] as const

const getDefaultMaternityServicePageBySlug = (slug: string) =>
  defaultMaternityServicePages.find((page) => page.slug === slug) ?? null

const hasLegacyRitualSubmenu = (submenu?: SiteSetting['navigation']) =>
  Boolean(
    submenu?.some((subItem) =>
      ['Rituel évasion', 'Rituel signature Krystel', 'Soin détox'].includes(subItem.title),
    ),
  )

const hasLegacyHeadSpaSubmenu = (submenu?: SiteSetting['navigation']) =>
  Boolean(
    submenu?.some((subItem) =>
      ['Head Spa Japonais complet', 'Soin du cuir chevelu express'].includes(subItem.title),
    ),
  )

const hasLegacyMaternitySubmenu = (submenu?: SiteSetting['navigation']) =>
  Boolean(
    submenu?.some((subItem) =>
      ['Massage post-natal', 'Atelier massage bébé'].includes(subItem.title),
    ),
  )

const hasLegacyNutritionSubmenu = (submenu?: SiteSetting['navigation']) =>
  Boolean(
    submenu?.some((subItem) =>
      ['Bilan nutritionnel', 'Suivi personnalisé', 'Ateliers bien-être'].includes(subItem.title),
    ),
  )

const normalizeSiteSettings = (data?: SiteSetting | null): SiteSettingsData => ({
  bookingCta: {
    href:
      data?.bookingCta?.href && data.bookingCta.href !== '#contact'
        ? data.bookingCta.href
        : defaultSiteSettings.bookingCta.href,
    label: data?.bookingCta?.label || defaultSiteSettings.bookingCta.label,
  },
  contact: {
    address: data?.contact?.address || defaultSiteSettings.contact.address,
    email: data?.contact?.email || defaultSiteSettings.contact.email,
    phone: data?.contact?.phone || defaultSiteSettings.contact.phone,
  },
  footerDescription: data?.footerDescription || defaultSiteSettings.footerDescription,
  legalLinks:
    data?.legalLinks?.map((item) => ({
      href:
        item.href && item.href !== '#' ? item.href : getDefaultLegalLink(item.label)?.href || '#',
      label: item.label,
    })) || defaultSiteSettings.legalLinks,
  navigation:
    data?.navigation?.map((item) => ({
      href:
        item.title === 'Contact' || item.title === 'Contact / RDV'
          ? '/contact'
          : item.href && item.href !== '#'
            ? item.href
            : getDefaultNavigationItem(item.title)?.href || '#',
      submenu:
        (item.title === 'Rituels spécifiques' && hasLegacyRitualSubmenu(item.submenu)
          ? getDefaultNavigationItem(item.title)?.submenu
          : item.title === 'Rituel Head Spa' && hasLegacyHeadSpaSubmenu(item.submenu)
            ? getDefaultNavigationItem(item.title)?.submenu
            : item.title === 'Maternité & Parentalité' && hasLegacyMaternitySubmenu(item.submenu)
              ? getDefaultNavigationItem(item.title)?.submenu
              : item.title === 'Nutrition & Coaching' && hasLegacyNutritionSubmenu(item.submenu)
                ? getDefaultNavigationItem(item.title)?.submenu
                : item.submenu
        )?.map((subItem) => ({
          href:
            item.title === 'Soins bien-être' && subItem.title === 'Massage Ayurvédique'
              ? '/soins-bien-etre/massage-ayurvedique'
              : item.title === 'Soins bien-être' && subItem.title === 'Massage Intuitif'
                ? '/soins-bien-etre/massage-intuitif'
                : item.title === 'Soins bien-être' && subItem.title === 'Massage Lomi-Lomi'
                  ? '/soins-bien-etre/massage-lomi-lomi'
                  : item.title === 'Soins bien-être' && subItem.title === 'Massage du dos'
                    ? '/soins-bien-etre/massage-du-dos'
                    : item.title === 'Soins bien-être' && subItem.title === 'Relaxation du visage'
                      ? '/soins-bien-etre/relaxation-du-visage'
                      : item.title === 'Soins bien-être' && subItem.title === 'Massage crânien'
                        ? '/soins-bien-etre/massage-cranien'
                        : item.title === 'Soins bien-être' && subItem.title === 'Massage plantaire'
                          ? '/soins-bien-etre/massage-plantaire'
                          : item.title === 'Rituels spécifiques' &&
                              subItem.title === 'Libération émotionnelle DoTERRA'
                            ? '/rituels-specifiques/liberation-emotionnelle-doterra'
                            : item.title === 'Rituels spécifiques' &&
                                subItem.title === 'Madérothérapie'
                              ? '/rituels-specifiques/maderotherapie'
                              : item.title === 'Rituels spécifiques' &&
                                  subItem.title === 'Drainage lymphatique'
                                ? '/rituels-specifiques/drainage-lymphatique'
                                : item.title === 'Rituels spécifiques' &&
                                    subItem.title === 'Massage à la cire de bougie'
                                  ? '/rituels-specifiques/massage-cire-bougie'
                                  : item.title === 'Rituel Head Spa' &&
                                      subItem.title === 'Rituel Classique'
                                    ? '/rituel-head-spa/rituel-classique'
                                    : item.title === 'Rituel Head Spa' &&
                                        subItem.title === 'Rituel Expert'
                                      ? '/rituel-head-spa/rituel-expert'
                                      : item.title === 'Rituel Head Spa' &&
                                          subItem.title === 'Rituel Enfant'
                                        ? '/rituel-head-spa/rituel-enfant'
                                        : item.title === 'Maternité & Parentalité' &&
                                            subItem.title === 'Massage prénatal'
                                          ? '/maternite-parentalite/massage-prenatal'
                                          : item.title === 'Maternité & Parentalité' &&
                                              subItem.title === 'Massage bébé'
                                            ? '/maternite-parentalite/massage-bebe'
                                            : subItem.href && subItem.href !== '#'
                                              ? subItem.href
                                              : item.title === 'Soins bien-être'
                                                ? `/soins-bien-etre#${createAnchorId(subItem.title)}`
                                                : item.title === 'Rituels spécifiques'
                                                  ? `/rituels-specifiques#${createAnchorId(subItem.title)}`
                                                  : item.title === 'Rituel Head Spa'
                                                    ? `/rituel-head-spa#${createAnchorId(subItem.title)}`
                                                    : item.title === 'Maternité & Parentalité'
                                                      ? `/maternite-parentalite#${createAnchorId(subItem.title)}`
                                                      : getDefaultNavigationItem(
                                                          item.title,
                                                        )?.submenu?.find(
                                                          (defaultSubItem) =>
                                                            defaultSubItem.title === subItem.title,
                                                        )?.href || '#',
          title: subItem.title,
        })) || getDefaultNavigationItem(item.title)?.submenu,
      title: item.title === 'Contact / RDV' ? 'Contact' : item.title,
    })) || defaultSiteSettings.navigation,
  shortSiteName: data?.shortSiteName || defaultSiteSettings.shortSiteName,
  siteName: data?.siteName || defaultSiteSettings.siteName,
  socials: {
    facebookUrl: data?.socials?.facebookUrl || defaultSiteSettings.socials.facebookUrl,
    instagramUrl: data?.socials?.instagramUrl || defaultSiteSettings.socials.instagramUrl,
  },
  tagline: data?.tagline || defaultSiteSettings.tagline,
})

const normalizeHomePage = (data?: HomePage | null): HomePageData => ({
  about: {
    imageAlt: data?.about?.imageAlt || defaultHomePage.about.imageAlt,
    imageUrl: getMediaUrl(data?.about?.image, defaultHomePage.about.imageUrl),
    paragraphs:
      data?.about?.paragraphs?.map((item) => item.text).filter(Boolean) ||
      defaultHomePage.about.paragraphs,
    scriptTitle: data?.about?.scriptTitle || defaultHomePage.about.scriptTitle,
    title: data?.about?.title || defaultHomePage.about.title,
  },
  approach: {
    highlightedQuote: data?.approach?.highlightedQuote || defaultHomePage.approach.highlightedQuote,
    introText: data?.approach?.introText || defaultHomePage.approach.introText,
    title: data?.approach?.title || defaultHomePage.approach.title,
  },
  audience: {
    highlightedText: data?.audience?.highlightedText || defaultHomePage.audience.highlightedText,
    imageAlt: data?.audience?.imageAlt || defaultHomePage.audience.imageAlt,
    imageUrl: getMediaUrl(data?.audience?.image, defaultHomePage.audience.imageUrl),
    paragraphs:
      data?.audience?.paragraphs?.map((item) => item.text).filter(Boolean) ||
      defaultHomePage.audience.paragraphs,
    title: data?.audience?.title || defaultHomePage.audience.title,
  },
  contactBanner: {
    text: data?.contactBanner?.text || defaultHomePage.contactBanner.text,
  },
  hero: {
    accentTitle: data?.hero?.accentTitle || defaultHomePage.hero.accentTitle,
    backgroundImageAlt: data?.hero?.backgroundImageAlt || defaultHomePage.hero.backgroundImageAlt,
    backgroundImageUrl: getMediaUrl(
      data?.hero?.backgroundImage,
      defaultHomePage.hero.backgroundImageUrl,
    ),
    ctaHref: data?.hero?.ctaHref || defaultHomePage.hero.ctaHref,
    ctaLabel: data?.hero?.ctaLabel || defaultHomePage.hero.ctaLabel,
    scriptTitle: data?.hero?.scriptTitle || defaultHomePage.hero.scriptTitle,
    subtitle: data?.hero?.subtitle || defaultHomePage.hero.subtitle,
    title: data?.hero?.title || defaultHomePage.hero.title,
  },
  services: {
    ctaHref:
      data?.services?.ctaHref && data.services.ctaHref !== '#'
        ? data.services.ctaHref
        : defaultHomePage.services.ctaHref,
    ctaLabel: data?.services?.ctaLabel || defaultHomePage.services.ctaLabel,
    itemCtaLabel: data?.services?.itemCtaLabel || defaultHomePage.services.itemCtaLabel,
    items:
      data?.services?.items?.map((item, index) => ({
        description: item.description,
        href:
          item.href && item.href !== '#'
            ? item.href
            : defaultHomePage.services.items[index]?.href || defaultHomePage.services.items[0].href,
        imageAlt: item.imageAlt,
        imageUrl: getMediaUrl(
          item.image,
          defaultHomePage.services.items[index]?.imageUrl ||
            defaultHomePage.services.items[0].imageUrl,
        ),
        title: item.title,
      })) || defaultHomePage.services.items,
    scriptTitle: data?.services?.scriptTitle || defaultHomePage.services.scriptTitle,
    title: data?.services?.title || defaultHomePage.services.title,
  },
  signatureFeature: {
    description:
      data?.signatureFeature?.description || defaultHomePage.signatureFeature.description,
    duration: data?.signatureFeature?.duration || defaultHomePage.signatureFeature.duration,
    imageAlt: data?.signatureFeature?.imageAlt || defaultHomePage.signatureFeature.imageAlt,
    imageUrl: getMediaUrl(
      data?.signatureFeature?.image,
      defaultHomePage.signatureFeature.imageUrl,
    ),
    primaryCtaHref:
      data?.signatureFeature?.primaryCtaHref && data.signatureFeature.primaryCtaHref !== '#'
        ? data.signatureFeature.primaryCtaHref
        : defaultHomePage.signatureFeature.primaryCtaHref,
    primaryCtaLabel:
      data?.signatureFeature?.primaryCtaLabel || defaultHomePage.signatureFeature.primaryCtaLabel,
    price: data?.signatureFeature?.price || defaultHomePage.signatureFeature.price,
    scriptTitle:
      data?.signatureFeature?.scriptTitle || defaultHomePage.signatureFeature.scriptTitle,
    secondaryCtaHref:
      data?.signatureFeature?.secondaryCtaHref && data.signatureFeature.secondaryCtaHref !== '#'
        ? data.signatureFeature.secondaryCtaHref
        : defaultHomePage.signatureFeature.secondaryCtaHref,
    secondaryCtaLabel:
      data?.signatureFeature?.secondaryCtaLabel ||
      defaultHomePage.signatureFeature.secondaryCtaLabel,
    subtitle: data?.signatureFeature?.subtitle || defaultHomePage.signatureFeature.subtitle,
    title: data?.signatureFeature?.title || defaultHomePage.signatureFeature.title,
  },
  testimonials: {
    items:
      data?.testimonials?.items?.map((item) => ({
        author: item.author,
        quote: item.quote,
      })) || defaultHomePage.testimonials.items,
    scriptTitle: data?.testimonials?.scriptTitle || defaultHomePage.testimonials.scriptTitle,
    title: data?.testimonials?.title || defaultHomePage.testimonials.title,
  },
})

const normalizeBookingPage = (data?: BookingPage | null): BookingPageData => ({
  access: {
    location: data?.access?.location || defaultBookingPage.access.location,
    mapImageAlt:
      data?.access?.mapImageAlt && data.access.mapImageAlt !== 'Plan d’accès au cabinet'
        ? data.access.mapImageAlt
        : defaultBookingPage.access.mapImageAlt,
    mapImageUrl:
      data?.access?.mapImageUrl && !data.access.mapImageUrl.includes('images.unsplash.com')
        ? data.access.mapImageUrl
        : defaultBookingPage.access.mapImageUrl,
    mapLabel:
      data?.access?.mapLabel && data.access.mapLabel !== 'Plan d’accès'
        ? data.access.mapLabel
        : defaultBookingPage.access.mapLabel,
    note: data?.access?.note || defaultBookingPage.access.note,
    scriptTitle: data?.access?.scriptTitle || defaultBookingPage.access.scriptTitle,
    title: data?.access?.title || defaultBookingPage.access.title,
  },
  faq: {
    acceptanceText: data?.faq?.acceptanceText || defaultBookingPage.faq.acceptanceText,
    introText: data?.faq?.introText || defaultBookingPage.faq.introText,
    items:
      data?.faq?.items?.map((item, index) => ({
        description: item.description,
        icon:
          item.icon === 'alert-circle' ||
          item.icon === 'clock' ||
          item.icon === 'credit-card' ||
          item.icon === 'heart-handshake' ||
          item.icon === 'shield-check'
            ? item.icon
            : defaultBookingPage.faq.items[index]?.icon || defaultBookingPage.faq.items[0].icon,
        title: item.title,
      })) || defaultBookingPage.faq.items,
    title: data?.faq?.title || defaultBookingPage.faq.title,
  },
  form: {
    description: data?.form?.description || defaultBookingPage.form.description,
    emailLabel: data?.form?.emailLabel || defaultBookingPage.form.emailLabel,
    messageLabel: data?.form?.messageLabel || defaultBookingPage.form.messageLabel,
    messagePlaceholder:
      data?.form?.messagePlaceholder || defaultBookingPage.form.messagePlaceholder,
    nameLabel: data?.form?.nameLabel || defaultBookingPage.form.nameLabel,
    phoneLabel: data?.form?.phoneLabel || defaultBookingPage.form.phoneLabel,
    serviceLabel: data?.form?.serviceLabel || defaultBookingPage.form.serviceLabel,
    serviceOptions:
      data?.form?.serviceOptions?.map((item) => item.value).filter(Boolean) ||
      defaultBookingPage.form.serviceOptions,
    servicePlaceholder:
      data?.form?.servicePlaceholder || defaultBookingPage.form.servicePlaceholder,
    submitLabel: data?.form?.submitLabel || defaultBookingPage.form.submitLabel,
    title: data?.form?.title || defaultBookingPage.form.title,
  },
  giftCard: {
    detailsParagraph:
      data?.giftCard?.detailsParagraph || defaultBookingPage.giftCard.detailsParagraph,
    emailLabel: data?.giftCard?.emailLabel || defaultBookingPage.giftCard.emailLabel,
    facebookLabel: data?.giftCard?.facebookLabel || defaultBookingPage.giftCard.facebookLabel,
    formLabel: data?.giftCard?.formLabel || defaultBookingPage.giftCard.formLabel,
    imageBackAlt: data?.giftCard?.imageBackAlt || defaultBookingPage.giftCard.imageBackAlt,
    imageFrontAlt: data?.giftCard?.imageFrontAlt || defaultBookingPage.giftCard.imageFrontAlt,
    introParagraph: data?.giftCard?.introParagraph || defaultBookingPage.giftCard.introParagraph,
    orderTitle: data?.giftCard?.orderTitle || defaultBookingPage.giftCard.orderTitle,
    scriptTitle: data?.giftCard?.scriptTitle || defaultBookingPage.giftCard.scriptTitle,
    title: data?.giftCard?.title || defaultBookingPage.giftCard.title,
  },
  hero: {
    backgroundImageAlt:
      data?.hero?.backgroundImageAlt || defaultBookingPage.hero.backgroundImageAlt,
    backgroundImageUrl: getMediaUrl(
      data?.hero?.backgroundImage,
      defaultBookingPage.hero.backgroundImageUrl,
    ),
    quote: data?.hero?.quote || defaultBookingPage.hero.quote,
    title: data?.hero?.title || defaultBookingPage.hero.title,
  },
  importantInfo: {
    items:
      data?.importantInfo?.items?.map((item) => item.text).filter(Boolean) ||
      defaultBookingPage.importantInfo.items,
    title: data?.importantInfo?.title || defaultBookingPage.importantInfo.title,
  },
  intro: {
    paragraphs:
      data?.intro?.paragraphs?.map((item) => item.text).filter(Boolean) ||
      defaultBookingPage.intro.paragraphs,
    title: data?.intro?.title || defaultBookingPage.intro.title,
  },
  contactMethods: {
    emailTitle: data?.contactMethods?.emailTitle || defaultBookingPage.contactMethods.emailTitle,
    facebookTitle:
      data?.contactMethods?.facebookTitle || defaultBookingPage.contactMethods.facebookTitle,
    phoneTitle: data?.contactMethods?.phoneTitle || defaultBookingPage.contactMethods.phoneTitle,
  },
  reservation: {
    description: data?.reservation?.description || defaultBookingPage.reservation.description,
    facebookLabel: data?.reservation?.facebookLabel || defaultBookingPage.reservation.facebookLabel,
    facebookUrl: data?.reservation?.facebookUrl || defaultBookingPage.reservation.facebookUrl,
    scriptTitle: data?.reservation?.scriptTitle || defaultBookingPage.reservation.scriptTitle,
    title: data?.reservation?.title || defaultBookingPage.reservation.title,
  },
})

const normalizeWellnessPage = (data?: WellnessPage | null): WellnessPageData => ({
  benefits: {
    items:
      data?.benefits?.items?.map((item, index) => ({
        description: item.description,
        icon:
          item.icon === 'heart' || item.icon === 'sparkles' || item.icon === 'wind'
            ? item.icon
            : defaultWellnessPage.benefits.items[index]?.icon ||
              defaultWellnessPage.benefits.items[0].icon,
        title: item.title,
      })) || defaultWellnessPage.benefits.items,
    title: data?.benefits?.title || defaultWellnessPage.benefits.title,
  },
  cta: {
    buttonHref:
      data?.cta?.buttonHref && data.cta.buttonHref !== '#contact'
        ? data.cta.buttonHref
        : defaultWellnessPage.cta.buttonHref,
    buttonLabel: data?.cta?.buttonLabel || defaultWellnessPage.cta.buttonLabel,
    text: data?.cta?.text || defaultWellnessPage.cta.text,
    title: data?.cta?.title || defaultWellnessPage.cta.title,
  },
  hero: {
    backgroundImageAlt:
      data?.hero?.backgroundImageAlt || defaultWellnessPage.hero.backgroundImageAlt,
    backgroundImageUrl: getMediaUrl(
      data?.hero?.backgroundImage,
      defaultWellnessPage.hero.backgroundImageUrl,
    ),
    subtitle: data?.hero?.subtitle || defaultWellnessPage.hero.subtitle,
    title: data?.hero?.title || defaultWellnessPage.hero.title,
  },
  intro: {
    paragraphs:
      data?.intro?.paragraphs?.map((item) => item.text).filter(Boolean) ||
      defaultWellnessPage.intro.paragraphs,
    title: data?.intro?.title || defaultWellnessPage.intro.title,
  },
  services: {
    itemCtaLabel: data?.services?.itemCtaLabel || defaultWellnessPage.services.itemCtaLabel,
    items:
      data?.services?.items?.map((item, index) => ({
        description: item.description,
        duration: item.duration,
        href:
          item.title === 'Massage Ayurvédique'
            ? '/soins-bien-etre/massage-ayurvedique'
            : item.title === 'Massage Intuitif'
              ? '/soins-bien-etre/massage-intuitif'
              : item.title === 'Massage Lomi-Lomi'
                ? '/soins-bien-etre/massage-lomi-lomi'
                : item.title === 'Massage du Dos'
                  ? '/soins-bien-etre/massage-du-dos'
                  : item.title === 'Relaxation du visage'
                    ? '/soins-bien-etre/relaxation-du-visage'
                    : item.title === 'Massage Crânien'
                      ? '/soins-bien-etre/massage-cranien'
                      : item.title === 'Massage Plantaire'
                        ? '/soins-bien-etre/massage-plantaire'
                        : item.href,
        imageAlt: item.imageAlt,
        imageUrl: getMediaUrl(
          item.image,
          defaultWellnessPage.services.items[index]?.imageUrl ||
            defaultWellnessPage.services.items[0].imageUrl,
        ),
        price: item.price || '',
        title: item.title,
      })) || defaultWellnessPage.services.items,
  },
})

const normalizeSignatureRitualPage = (
  data?: SignatureRitualPage | null,
): SignatureRitualPageData => ({
  benefits: {
    items:
      data?.benefits?.items?.map((item, index) => ({
        description: item.description,
        icon:
          item.icon === 'balance' ||
          item.icon === 'calm' ||
          item.icon === 'energy' ||
          item.icon === 'release' ||
          item.icon === 'relax'
            ? item.icon
            : defaultSignatureRitualPage.benefits.items[index]?.icon ||
              defaultSignatureRitualPage.benefits.items[0].icon,
        title: item.title,
      })) || defaultSignatureRitualPage.benefits.items,
    scriptTitle:
      data?.benefits?.scriptTitle || defaultSignatureRitualPage.benefits.scriptTitle,
    title: data?.benefits?.title || defaultSignatureRitualPage.benefits.title,
  },
  closingCta: {
    primaryHref:
      data?.closingCta?.primaryHref && data.closingCta.primaryHref !== '#'
        ? data.closingCta.primaryHref
        : defaultSignatureRitualPage.closingCta.primaryHref,
    primaryLabel:
      data?.closingCta?.primaryLabel || defaultSignatureRitualPage.closingCta.primaryLabel,
    secondaryHref:
      data?.closingCta?.secondaryHref && data.closingCta.secondaryHref !== '#'
        ? data.closingCta.secondaryHref
        : defaultSignatureRitualPage.closingCta.secondaryHref,
    secondaryLabel:
      data?.closingCta?.secondaryLabel || defaultSignatureRitualPage.closingCta.secondaryLabel,
    text: data?.closingCta?.text || defaultSignatureRitualPage.closingCta.text,
    title: data?.closingCta?.title || defaultSignatureRitualPage.closingCta.title,
  },
  hero: {
    backgroundImageAlt:
      data?.hero?.backgroundImageAlt || defaultSignatureRitualPage.hero.backgroundImageAlt,
    backgroundImageUrl: getMediaUrl(
      data?.hero?.backgroundImage,
      defaultSignatureRitualPage.hero.backgroundImageUrl,
    ),
    quote: data?.hero?.quote || defaultSignatureRitualPage.hero.quote,
    scriptTitle: data?.hero?.scriptTitle || defaultSignatureRitualPage.hero.scriptTitle,
    title: data?.hero?.title || defaultSignatureRitualPage.hero.title,
  },
  overview: {
    imageAlt: data?.overview?.imageAlt || defaultSignatureRitualPage.overview.imageAlt,
    imageUrl: getMediaUrl(data?.overview?.image, defaultSignatureRitualPage.overview.imageUrl),
    paragraphs:
      data?.overview?.paragraphs?.map((item) => item.text).filter(Boolean) ||
      defaultSignatureRitualPage.overview.paragraphs,
    scriptTitle: data?.overview?.scriptTitle || defaultSignatureRitualPage.overview.scriptTitle,
    title: data?.overview?.title || defaultSignatureRitualPage.overview.title,
  },
  practicalInfo: {
    ctaHref:
      data?.practicalInfo?.ctaHref && data.practicalInfo.ctaHref !== '#'
        ? data.practicalInfo.ctaHref
        : defaultSignatureRitualPage.practicalInfo.ctaHref,
    ctaLabel:
      data?.practicalInfo?.ctaLabel || defaultSignatureRitualPage.practicalInfo.ctaLabel,
    duration: data?.practicalInfo?.duration || defaultSignatureRitualPage.practicalInfo.duration,
    durationLabel:
      data?.practicalInfo?.durationLabel ||
      defaultSignatureRitualPage.practicalInfo.durationLabel,
    price: data?.practicalInfo?.price || defaultSignatureRitualPage.practicalInfo.price,
    priceLabel:
      data?.practicalInfo?.priceLabel || defaultSignatureRitualPage.practicalInfo.priceLabel,
  },
  profile: {
    items:
      data?.profile?.items?.map((item) => item.text).filter(Boolean) ||
      defaultSignatureRitualPage.profile.items,
    title: data?.profile?.title || defaultSignatureRitualPage.profile.title,
  },
  treatment: {
    paragraphs:
      data?.treatment?.paragraphs?.map((item) => item.text).filter(Boolean) ||
      defaultSignatureRitualPage.treatment.paragraphs,
    title: data?.treatment?.title || defaultSignatureRitualPage.treatment.title,
  },
})

const normalizeRitualsPage = (data?: RitualsPage | null): WellnessPageData => ({
  benefits: {
    items:
      data?.benefits?.items?.map((item, index) => ({
        description: item.description,
        icon:
          item.icon === 'heart' || item.icon === 'sparkles' || item.icon === 'wind'
            ? item.icon
            : defaultRitualsPage.benefits.items[index]?.icon ||
              defaultRitualsPage.benefits.items[0].icon,
        title: item.title,
      })) || defaultRitualsPage.benefits.items,
    title: data?.benefits?.title || defaultRitualsPage.benefits.title,
  },
  cta: {
    buttonHref:
      data?.cta?.buttonHref && data.cta.buttonHref !== '#contact'
        ? data.cta.buttonHref
        : defaultRitualsPage.cta.buttonHref,
    buttonLabel: data?.cta?.buttonLabel || defaultRitualsPage.cta.buttonLabel,
    text: data?.cta?.text || defaultRitualsPage.cta.text,
    title: data?.cta?.title || defaultRitualsPage.cta.title,
  },
  hero: {
    backgroundImageAlt:
      data?.hero?.backgroundImageAlt || defaultRitualsPage.hero.backgroundImageAlt,
    backgroundImageUrl: getMediaUrl(
      data?.hero?.backgroundImage,
      defaultRitualsPage.hero.backgroundImageUrl,
    ),
    subtitle: data?.hero?.subtitle || defaultRitualsPage.hero.subtitle,
    title: data?.hero?.title || defaultRitualsPage.hero.title,
  },
  intro: {
    paragraphs:
      data?.intro?.paragraphs?.map((item) => item.text).filter(Boolean) ||
      defaultRitualsPage.intro.paragraphs,
    title: data?.intro?.title || defaultRitualsPage.intro.title,
  },
  services: {
    itemCtaLabel: data?.services?.itemCtaLabel || defaultRitualsPage.services.itemCtaLabel,
    items:
      data?.services?.items?.map((item, index) => ({
        description: item.description,
        duration: item.duration,
        href:
          item.title === 'Libération émotionnelle DoTERRA'
            ? '/rituels-specifiques/liberation-emotionnelle-doterra'
            : item.title === 'Madérothérapie'
              ? '/rituels-specifiques/maderotherapie'
              : item.title === 'Drainage lymphatique'
                ? '/rituels-specifiques/drainage-lymphatique'
                : item.title === 'Massage à la cire de bougie'
                  ? '/rituels-specifiques/massage-cire-bougie'
                  : item.href,
        imageAlt: item.imageAlt,
        imageUrl: getMediaUrl(
          item.image,
          defaultRitualsPage.services.items[index]?.imageUrl ||
            defaultRitualsPage.services.items[0].imageUrl,
        ),
        price: item.price || '',
        title: item.title,
      })) || defaultRitualsPage.services.items,
  },
})

const normalizeHeadSpaPage = (data?: HeadSpaPage | null): WellnessPageData => ({
  benefits: {
    items:
      data?.benefits?.items?.map((item, index) => ({
        description: item.description,
        icon:
          item.icon === 'heart' || item.icon === 'sparkles' || item.icon === 'wind'
            ? item.icon
            : defaultHeadSpaPage.benefits.items[index]?.icon ||
              defaultHeadSpaPage.benefits.items[0].icon,
        title: item.title,
      })) || defaultHeadSpaPage.benefits.items,
    title: data?.benefits?.title || defaultHeadSpaPage.benefits.title,
  },
  cta: {
    buttonHref:
      data?.cta?.buttonHref && data.cta.buttonHref !== '#contact'
        ? data.cta.buttonHref
        : defaultHeadSpaPage.cta.buttonHref,
    buttonLabel: data?.cta?.buttonLabel || defaultHeadSpaPage.cta.buttonLabel,
    text: data?.cta?.text || defaultHeadSpaPage.cta.text,
    title: data?.cta?.title || defaultHeadSpaPage.cta.title,
  },
  hero: {
    backgroundImageAlt:
      data?.hero?.backgroundImageAlt || defaultHeadSpaPage.hero.backgroundImageAlt,
    backgroundImageUrl: getMediaUrl(
      data?.hero?.backgroundImage,
      defaultHeadSpaPage.hero.backgroundImageUrl,
    ),
    subtitle: data?.hero?.subtitle || defaultHeadSpaPage.hero.subtitle,
    title: data?.hero?.title || defaultHeadSpaPage.hero.title,
  },
  intro: {
    paragraphs:
      data?.intro?.paragraphs?.map((item) => item.text).filter(Boolean) ||
      defaultHeadSpaPage.intro.paragraphs,
    title: data?.intro?.title || defaultHeadSpaPage.intro.title,
  },
  services: {
    itemCtaLabel: data?.services?.itemCtaLabel || defaultHeadSpaPage.services.itemCtaLabel,
    items:
      data?.services?.items?.map((item, index) => ({
        description: item.description,
        duration: item.duration,
        href:
          item.title === 'Rituel Classique'
            ? '/rituel-head-spa/rituel-classique'
            : item.title === 'Rituel Expert'
              ? '/rituel-head-spa/rituel-expert'
              : item.title === 'Rituel Enfant'
                ? '/rituel-head-spa/rituel-enfant'
                : item.href,
        imageAlt: item.imageAlt,
        imageUrl: getMediaUrl(
          item.image,
          defaultHeadSpaPage.services.items[index]?.imageUrl ||
            defaultHeadSpaPage.services.items[0].imageUrl,
        ),
        price: item.price || '',
        title: item.title,
      })) || defaultHeadSpaPage.services.items,
  },
})

const normalizeMaternityPage = (data?: MaternityPage | null): WellnessPageData => ({
  benefits: {
    items:
      data?.benefits?.items?.map((item, index) => ({
        description: item.description,
        icon:
          item.icon === 'heart' || item.icon === 'sparkles' || item.icon === 'wind'
            ? item.icon
            : defaultMaternityPage.benefits.items[index]?.icon ||
              defaultMaternityPage.benefits.items[0].icon,
        title: item.title,
      })) || defaultMaternityPage.benefits.items,
    title: data?.benefits?.title || defaultMaternityPage.benefits.title,
  },
  cta: {
    buttonHref:
      data?.cta?.buttonHref && data.cta.buttonHref !== '#contact'
        ? data.cta.buttonHref
        : defaultMaternityPage.cta.buttonHref,
    buttonLabel: data?.cta?.buttonLabel || defaultMaternityPage.cta.buttonLabel,
    text: data?.cta?.text || defaultMaternityPage.cta.text,
    title: data?.cta?.title || defaultMaternityPage.cta.title,
  },
  hero: {
    backgroundImageAlt:
      data?.hero?.backgroundImageAlt || defaultMaternityPage.hero.backgroundImageAlt,
    backgroundImageUrl: getMediaUrl(
      data?.hero?.backgroundImage,
      defaultMaternityPage.hero.backgroundImageUrl,
    ),
    subtitle: data?.hero?.subtitle || defaultMaternityPage.hero.subtitle,
    title: data?.hero?.title || defaultMaternityPage.hero.title,
  },
  intro: {
    paragraphs:
      data?.intro?.paragraphs?.map((item) => item.text).filter(Boolean) ||
      defaultMaternityPage.intro.paragraphs,
    title: data?.intro?.title || defaultMaternityPage.intro.title,
  },
  services: {
    itemCtaLabel: data?.services?.itemCtaLabel || defaultMaternityPage.services.itemCtaLabel,
    items:
      data?.services?.items?.map((item, index) => ({
        description: item.description,
        duration: item.duration,
        href:
          item.title === 'Massage prénatal'
            ? '/maternite-parentalite/massage-prenatal'
            : item.title === 'Massage bébé'
              ? '/maternite-parentalite/massage-bebe'
              : item.href,
        imageAlt: item.imageAlt,
        imageUrl: getMediaUrl(
          item.image,
          defaultMaternityPage.services.items[index]?.imageUrl ||
            defaultMaternityPage.services.items[0].imageUrl,
        ),
        price: item.price || '',
        title: item.title,
      })) || defaultMaternityPage.services.items,
  },
})

const normalizeNutritionPage = (data?: NutritionPage | null): WellnessServiceDetailPageData => ({
  audience: {
    items:
      data?.audience?.items?.map((item) => item.text).filter(Boolean) ||
      defaultNutritionPage.audience.items,
    title: data?.audience?.title || defaultNutritionPage.audience.title,
  },
  benefits: {
    items:
      data?.benefits?.items?.map((item, index) => ({
        description: item.description,
        icon:
          item.icon === 'droplets' || item.icon === 'leaf' || item.icon === 'wind'
            ? item.icon
            : defaultNutritionPage.benefits.items[index]?.icon ||
              defaultNutritionPage.benefits.items[0].icon,
        title: item.title,
      })) || defaultNutritionPage.benefits.items,
    scriptTitle: data?.benefits?.scriptTitle || defaultNutritionPage.benefits.scriptTitle,
    title: data?.benefits?.title || defaultNutritionPage.benefits.title,
  },
  cta: {
    primaryHref:
      data?.cta?.primaryHref && data.cta.primaryHref !== '#contact'
        ? data.cta.primaryHref
        : defaultNutritionPage.cta.primaryHref,
    primaryLabel: data?.cta?.primaryLabel || defaultNutritionPage.cta.primaryLabel,
    secondaryHref: data?.cta?.secondaryHref || defaultNutritionPage.cta.secondaryHref,
    secondaryLabel: data?.cta?.secondaryLabel || defaultNutritionPage.cta.secondaryLabel,
    text: data?.cta?.text || defaultNutritionPage.cta.text,
    title: data?.cta?.title || defaultNutritionPage.cta.title,
  },
  hero: {
    backgroundImageAlt:
      data?.hero?.backgroundImageAlt || defaultNutritionPage.hero.backgroundImageAlt,
    backgroundImageUrl: getMediaUrl(
      data?.hero?.backgroundImage,
      defaultNutritionPage.hero.backgroundImageUrl,
    ),
    subtitle: data?.hero?.subtitle || defaultNutritionPage.hero.subtitle,
    title: data?.hero?.title || defaultNutritionPage.hero.title,
  },
  overview: {
    imageAlt: data?.overview?.imageAlt || defaultNutritionPage.overview.imageAlt,
    imageUrl: getMediaUrl(data?.overview?.image, defaultNutritionPage.overview.imageUrl),
    paragraphs:
      data?.overview?.paragraphs?.map((item) => item.text).filter(Boolean) ||
      defaultNutritionPage.overview.paragraphs,
    scriptTitle: data?.overview?.scriptTitle || defaultNutritionPage.overview.scriptTitle,
    title: data?.overview?.title || defaultNutritionPage.overview.title,
  },
  practicalInfo: {
    ctaHref:
      data?.practicalInfo?.ctaHref && data.practicalInfo.ctaHref !== '#contact'
        ? data.practicalInfo.ctaHref
        : defaultNutritionPage.practicalInfo.ctaHref,
    ctaLabel: data?.practicalInfo?.ctaLabel || defaultNutritionPage.practicalInfo.ctaLabel,
    duration: data?.practicalInfo?.duration || defaultNutritionPage.practicalInfo.duration,
    price: data?.practicalInfo?.price || defaultNutritionPage.practicalInfo.price,
  },
  slug: data?.slug || defaultNutritionPage.slug,
  title: data?.title || defaultNutritionPage.title,
})

const normalizeWellnessServicePage = (
  data?: WellnessServicePage | null,
): WellnessServiceDetailPageData => {
  const fallbackPage =
    getDefaultWellnessServicePageBySlug(data?.slug || '') || defaultAyurvedicMassagePage

  return {
    audience: {
      items:
        data?.audience?.items?.map((item) => item.text).filter(Boolean) ||
        fallbackPage.audience.items,
      title: data?.audience?.title || fallbackPage.audience.title,
    },
    benefits: {
      items:
        data?.benefits?.items?.map((item, index) => ({
          description: item.description,
          icon:
            item.icon === 'droplets' || item.icon === 'leaf' || item.icon === 'wind'
              ? item.icon
              : fallbackPage.benefits.items[index]?.icon || fallbackPage.benefits.items[0].icon,
          title: item.title,
        })) || fallbackPage.benefits.items,
      scriptTitle: data?.benefits?.scriptTitle || fallbackPage.benefits.scriptTitle,
      title: data?.benefits?.title || fallbackPage.benefits.title,
    },
    cta: {
      primaryHref:
        data?.cta?.primaryHref && data.cta.primaryHref !== '#contact'
          ? data.cta.primaryHref
          : fallbackPage.cta.primaryHref,
      primaryLabel: data?.cta?.primaryLabel || fallbackPage.cta.primaryLabel,
      secondaryHref: data?.cta?.secondaryHref || fallbackPage.cta.secondaryHref,
      secondaryLabel: data?.cta?.secondaryLabel || fallbackPage.cta.secondaryLabel,
      text: data?.cta?.text || fallbackPage.cta.text,
      title: data?.cta?.title || fallbackPage.cta.title,
    },
    hero: {
      backgroundImageAlt: data?.hero?.backgroundImageAlt || fallbackPage.hero.backgroundImageAlt,
      backgroundImageUrl: getMediaUrl(
        data?.hero?.backgroundImage,
        fallbackPage.hero.backgroundImageUrl,
      ),
      subtitle: data?.hero?.subtitle || fallbackPage.hero.subtitle,
      title: data?.hero?.title || data?.title || fallbackPage.hero.title,
    },
    overview: {
      imageAlt: data?.overview?.imageAlt || fallbackPage.overview.imageAlt,
      imageUrl: getMediaUrl(data?.overview?.image, fallbackPage.overview.imageUrl),
      paragraphs:
        data?.overview?.paragraphs?.map((item) => item.text).filter(Boolean) ||
        fallbackPage.overview.paragraphs,
      scriptTitle: data?.overview?.scriptTitle || fallbackPage.overview.scriptTitle,
      title: data?.overview?.title || fallbackPage.overview.title,
    },
    practicalInfo: {
      ctaHref:
        data?.practicalInfo?.ctaHref && data.practicalInfo.ctaHref !== '#contact'
          ? data.practicalInfo.ctaHref
          : fallbackPage.practicalInfo.ctaHref,
      ctaLabel: data?.practicalInfo?.ctaLabel || fallbackPage.practicalInfo.ctaLabel,
      duration: data?.practicalInfo?.duration || fallbackPage.practicalInfo.duration,
      price: data?.practicalInfo?.price || fallbackPage.practicalInfo.price,
    },
    slug: data?.slug || fallbackPage.slug,
    title: data?.title || fallbackPage.title,
  }
}

const normalizeRitualServicePage = (
  data?: RitualServicePage | null,
): WellnessServiceDetailPageData => {
  const fallbackPage =
    getDefaultRitualServicePageBySlug(data?.slug || '') || defaultEmotionalReleasePage

  return {
    audience: {
      items:
        data?.audience?.items?.map((item) => item.text).filter(Boolean) ||
        fallbackPage.audience.items,
      title: data?.audience?.title || fallbackPage.audience.title,
    },
    benefits: {
      items:
        data?.benefits?.items?.map((item, index) => ({
          description: item.description,
          icon:
            item.icon === 'droplets' || item.icon === 'leaf' || item.icon === 'wind'
              ? item.icon
              : fallbackPage.benefits.items[index]?.icon || fallbackPage.benefits.items[0].icon,
          title: item.title,
        })) || fallbackPage.benefits.items,
      scriptTitle: data?.benefits?.scriptTitle || fallbackPage.benefits.scriptTitle,
      title: data?.benefits?.title || fallbackPage.benefits.title,
    },
    cta: {
      primaryHref:
        data?.cta?.primaryHref && data.cta.primaryHref !== '#contact'
          ? data.cta.primaryHref
          : fallbackPage.cta.primaryHref,
      primaryLabel: data?.cta?.primaryLabel || fallbackPage.cta.primaryLabel,
      secondaryHref: data?.cta?.secondaryHref || fallbackPage.cta.secondaryHref,
      secondaryLabel: data?.cta?.secondaryLabel || fallbackPage.cta.secondaryLabel,
      text: data?.cta?.text || fallbackPage.cta.text,
      title: data?.cta?.title || fallbackPage.cta.title,
    },
    hero: {
      backgroundImageAlt: data?.hero?.backgroundImageAlt || fallbackPage.hero.backgroundImageAlt,
      backgroundImageUrl: getMediaUrl(
        data?.hero?.backgroundImage,
        fallbackPage.hero.backgroundImageUrl,
      ),
      subtitle: data?.hero?.subtitle || fallbackPage.hero.subtitle,
      title: data?.hero?.title || data?.title || fallbackPage.hero.title,
    },
    overview: {
      imageAlt: data?.overview?.imageAlt || fallbackPage.overview.imageAlt,
      imageUrl: getMediaUrl(data?.overview?.image, fallbackPage.overview.imageUrl),
      paragraphs:
        data?.overview?.paragraphs?.map((item) => item.text).filter(Boolean) ||
        fallbackPage.overview.paragraphs,
      scriptTitle: data?.overview?.scriptTitle || fallbackPage.overview.scriptTitle,
      title: data?.overview?.title || fallbackPage.overview.title,
    },
    practicalInfo: {
      ctaHref:
        data?.practicalInfo?.ctaHref && data.practicalInfo.ctaHref !== '#contact'
          ? data.practicalInfo.ctaHref
          : fallbackPage.practicalInfo.ctaHref,
      ctaLabel: data?.practicalInfo?.ctaLabel || fallbackPage.practicalInfo.ctaLabel,
      duration: data?.practicalInfo?.duration || fallbackPage.practicalInfo.duration,
      price: data?.practicalInfo?.price || fallbackPage.practicalInfo.price,
    },
    slug: data?.slug || fallbackPage.slug,
    title: data?.title || fallbackPage.title,
  }
}

const normalizeHeadSpaServicePage = (
  data?: HeadSpaServicePage | null,
): WellnessServiceDetailPageData => {
  const fallbackPage =
    getDefaultHeadSpaServicePageBySlug(data?.slug || '') || defaultHeadSpaClassicPage

  return {
    audience: {
      items:
        data?.audience?.items?.map((item) => item.text).filter(Boolean) ||
        fallbackPage.audience.items,
      title: data?.audience?.title || fallbackPage.audience.title,
    },
    benefits: {
      items:
        data?.benefits?.items?.map((item, index) => ({
          description: item.description,
          icon:
            item.icon === 'droplets' || item.icon === 'leaf' || item.icon === 'wind'
              ? item.icon
              : fallbackPage.benefits.items[index]?.icon || fallbackPage.benefits.items[0].icon,
          title: item.title,
        })) || fallbackPage.benefits.items,
      scriptTitle: data?.benefits?.scriptTitle || fallbackPage.benefits.scriptTitle,
      title: data?.benefits?.title || fallbackPage.benefits.title,
    },
    cta: {
      primaryHref:
        data?.cta?.primaryHref && data.cta.primaryHref !== '#contact'
          ? data.cta.primaryHref
          : fallbackPage.cta.primaryHref,
      primaryLabel: data?.cta?.primaryLabel || fallbackPage.cta.primaryLabel,
      secondaryHref: data?.cta?.secondaryHref || fallbackPage.cta.secondaryHref,
      secondaryLabel: data?.cta?.secondaryLabel || fallbackPage.cta.secondaryLabel,
      text: data?.cta?.text || fallbackPage.cta.text,
      title: data?.cta?.title || fallbackPage.cta.title,
    },
    hero: {
      backgroundImageAlt: data?.hero?.backgroundImageAlt || fallbackPage.hero.backgroundImageAlt,
      backgroundImageUrl: getMediaUrl(
        data?.hero?.backgroundImage,
        fallbackPage.hero.backgroundImageUrl,
      ),
      subtitle: data?.hero?.subtitle || fallbackPage.hero.subtitle,
      title: data?.hero?.title || data?.title || fallbackPage.hero.title,
    },
    overview: {
      imageAlt: data?.overview?.imageAlt || fallbackPage.overview.imageAlt,
      imageUrl: getMediaUrl(data?.overview?.image, fallbackPage.overview.imageUrl),
      paragraphs:
        data?.overview?.paragraphs?.map((item) => item.text).filter(Boolean) ||
        fallbackPage.overview.paragraphs,
      scriptTitle: data?.overview?.scriptTitle || fallbackPage.overview.scriptTitle,
      title: data?.overview?.title || fallbackPage.overview.title,
    },
    practicalInfo: {
      ctaHref:
        data?.practicalInfo?.ctaHref && data.practicalInfo.ctaHref !== '#contact'
          ? data.practicalInfo.ctaHref
          : fallbackPage.practicalInfo.ctaHref,
      ctaLabel: data?.practicalInfo?.ctaLabel || fallbackPage.practicalInfo.ctaLabel,
      duration: data?.practicalInfo?.duration || fallbackPage.practicalInfo.duration,
      price: data?.practicalInfo?.price || fallbackPage.practicalInfo.price,
    },
    slug: data?.slug || fallbackPage.slug,
    title: data?.title || fallbackPage.title,
  }
}

const normalizeMaternityServicePage = (
  data?: MaternityServicePage | null,
): WellnessServiceDetailPageData => {
  const fallbackPage =
    getDefaultMaternityServicePageBySlug(data?.slug || '') || defaultPrenatalMassagePage

  return {
    audience: {
      items:
        data?.audience?.items?.map((item) => item.text).filter(Boolean) ||
        fallbackPage.audience.items,
      title: data?.audience?.title || fallbackPage.audience.title,
    },
    benefits: {
      items:
        data?.benefits?.items?.map((item, index) => ({
          description: item.description,
          icon:
            item.icon === 'droplets' || item.icon === 'leaf' || item.icon === 'wind'
              ? item.icon
              : fallbackPage.benefits.items[index]?.icon || fallbackPage.benefits.items[0].icon,
          title: item.title,
        })) || fallbackPage.benefits.items,
      scriptTitle: data?.benefits?.scriptTitle || fallbackPage.benefits.scriptTitle,
      title: data?.benefits?.title || fallbackPage.benefits.title,
    },
    cta: {
      primaryHref:
        data?.cta?.primaryHref && data.cta.primaryHref !== '#contact'
          ? data.cta.primaryHref
          : fallbackPage.cta.primaryHref,
      primaryLabel: data?.cta?.primaryLabel || fallbackPage.cta.primaryLabel,
      secondaryHref: data?.cta?.secondaryHref || fallbackPage.cta.secondaryHref,
      secondaryLabel: data?.cta?.secondaryLabel || fallbackPage.cta.secondaryLabel,
      text: data?.cta?.text || fallbackPage.cta.text,
      title: data?.cta?.title || fallbackPage.cta.title,
    },
    hero: {
      backgroundImageAlt: data?.hero?.backgroundImageAlt || fallbackPage.hero.backgroundImageAlt,
      backgroundImageUrl: getMediaUrl(
        data?.hero?.backgroundImage,
        fallbackPage.hero.backgroundImageUrl,
      ),
      subtitle: data?.hero?.subtitle || fallbackPage.hero.subtitle,
      title: data?.hero?.title || data?.title || fallbackPage.hero.title,
    },
    overview: {
      imageAlt: data?.overview?.imageAlt || fallbackPage.overview.imageAlt,
      imageUrl: getMediaUrl(data?.overview?.image, fallbackPage.overview.imageUrl),
      paragraphs:
        data?.overview?.paragraphs?.map((item) => item.text).filter(Boolean) ||
        fallbackPage.overview.paragraphs,
      scriptTitle: data?.overview?.scriptTitle || fallbackPage.overview.scriptTitle,
      title: data?.overview?.title || fallbackPage.overview.title,
    },
    practicalInfo: {
      ctaHref:
        data?.practicalInfo?.ctaHref && data.practicalInfo.ctaHref !== '#contact'
          ? data.practicalInfo.ctaHref
          : fallbackPage.practicalInfo.ctaHref,
      ctaLabel: data?.practicalInfo?.ctaLabel || fallbackPage.practicalInfo.ctaLabel,
      duration: data?.practicalInfo?.duration || fallbackPage.practicalInfo.duration,
      price: data?.practicalInfo?.price || fallbackPage.practicalInfo.price,
    },
    slug: data?.slug || fallbackPage.slug,
    title: data?.title || fallbackPage.title,
  }
}

export const getSiteSettings = async (): Promise<SiteSettingsData> => {
  try {
    const payload = await getPayloadClient()

    const data = await payload.findGlobal({
      slug: 'site-settings',
    })

    return normalizeSiteSettings(data)
  } catch {
    return defaultSiteSettings
  }
}

export const getHomePageData = async (): Promise<HomePageData> => {
  try {
    const payload = await getPayloadClient()
    const data = await payload.findGlobal({
      slug: 'home-page',
    })

    return normalizeHomePage(data)
  } catch {
    return defaultHomePage
  }
}

export const getBookingPageData = async (): Promise<BookingPageData> => {
  try {
    const payload = await getPayloadClient()
    const data = await payload.findGlobal({
      slug: 'booking-page',
    })

    return normalizeBookingPage(data)
  } catch {
    return defaultBookingPage
  }
}

export const getWellnessPageData = async (): Promise<WellnessPageData> => {
  try {
    const payload = await getPayloadClient()
    const data = await payload.findGlobal({
      slug: 'wellness-page',
    })

    return normalizeWellnessPage(data)
  } catch {
    return defaultWellnessPage
  }
}

export const getSignatureRitualPageData = async (): Promise<SignatureRitualPageData> => {
  try {
    const payload = await getPayloadClient()
    const data = await payload.findGlobal({
      slug: 'signature-ritual-page',
    })

    return normalizeSignatureRitualPage(data)
  } catch {
    return defaultSignatureRitualPage
  }
}

export const getRitualsPageData = async (): Promise<WellnessPageData> => {
  try {
    const payload = await getPayloadClient()
    const data = await payload.findGlobal({
      slug: 'rituals-page',
    })

    return normalizeRitualsPage(data)
  } catch {
    return defaultRitualsPage
  }
}

export const getHeadSpaPageData = async (): Promise<WellnessPageData> => {
  try {
    const payload = await getPayloadClient()
    const data = await payload.findGlobal({
      slug: 'head-spa-page',
    })

    return normalizeHeadSpaPage(data)
  } catch {
    return defaultHeadSpaPage
  }
}

export const getMaternityPageData = async (): Promise<WellnessPageData> => {
  try {
    const payload = await getPayloadClient()
    const data = await payload.findGlobal({
      slug: 'maternity-page',
    })

    return normalizeMaternityPage(data)
  } catch {
    return defaultMaternityPage
  }
}

export const getNutritionPageData = async (): Promise<WellnessServiceDetailPageData> => {
  try {
    const payload = await getPayloadClient()
    const data = await payload.findGlobal({
      slug: 'nutrition-page',
    })

    return normalizeNutritionPage(data)
  } catch {
    return defaultNutritionPage
  }
}

export const getWellnessServicePageBySlug = async (
  slug: string,
): Promise<WellnessServiceDetailPageData | null> => {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'wellness-service-pages',
      depth: 1,
      limit: 1,
      pagination: false,
      where: {
        slug: {
          equals: slug,
        },
      },
    })

    if (!result.docs[0]) {
      return getDefaultWellnessServicePageBySlug(slug)
    }

    return normalizeWellnessServicePage(result.docs[0])
  } catch {
    return getDefaultWellnessServicePageBySlug(slug)
  }
}

export const getRitualServicePageBySlug = async (
  slug: string,
): Promise<WellnessServiceDetailPageData | null> => {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'ritual-service-pages',
      depth: 1,
      limit: 1,
      pagination: false,
      where: {
        slug: {
          equals: slug,
        },
      },
    })

    if (!result.docs[0]) {
      return getDefaultRitualServicePageBySlug(slug)
    }

    return normalizeRitualServicePage(result.docs[0])
  } catch {
    return getDefaultRitualServicePageBySlug(slug)
  }
}

export const getHeadSpaServicePageBySlug = async (
  slug: string,
): Promise<WellnessServiceDetailPageData | null> => {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'head-spa-service-pages',
      depth: 1,
      limit: 1,
      pagination: false,
      where: {
        slug: {
          equals: slug,
        },
      },
    })

    if (!result.docs[0]) {
      return getDefaultHeadSpaServicePageBySlug(slug)
    }

    return normalizeHeadSpaServicePage(result.docs[0])
  } catch {
    return getDefaultHeadSpaServicePageBySlug(slug)
  }
}

export const getMaternityServicePageBySlug = async (
  slug: string,
): Promise<WellnessServiceDetailPageData | null> => {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'maternity-service-pages',
      depth: 1,
      limit: 1,
      pagination: false,
      where: {
        slug: {
          equals: slug,
        },
      },
    })

    if (!result.docs[0]) {
      return getDefaultMaternityServicePageBySlug(slug)
    }

    return normalizeMaternityServicePage(result.docs[0])
  } catch {
    return getDefaultMaternityServicePageBySlug(slug)
  }
}

export const getPageBySlug = async (slug: string): Promise<Page | null> => {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'pages',
      depth: 1,
      limit: 1,
      pagination: false,
      where: {
        slug: {
          equals: slug,
        },
      },
    })

    return result.docs[0] ?? null
  } catch {
    return null
  }
}
