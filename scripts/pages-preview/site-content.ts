// Lecteurs de prévisualisation : utilisés uniquement dans la copie de build GitHub Pages.
import * as defaults from '@/lib/default-content'
import type { WellnessServiceDetailPageData } from '@/lib/site-model'

export const getSiteSettings = async () => defaults.defaultSiteSettings
export const getHomePageData = async () => defaults.defaultHomePage
export const getBookingPageData = async () => defaults.defaultBookingPage
export const getWellnessPageData = async () => defaults.defaultWellnessPage
export const getRitualsPageData = async () => defaults.defaultRitualsPage
export const getHeadSpaPageData = async () => defaults.defaultHeadSpaPage
export const getMaternityPageData = async () => defaults.defaultMaternityPage
export const getNutritionPageData = async () => defaults.defaultNutritionPage
export const getSignatureRitualPageData = async () => defaults.defaultSignatureRitualPage

const bySlug = (pages: WellnessServiceDetailPageData[], slug: string) =>
  pages.find((page) => page.slug === slug) ?? null

export const getWellnessServicePageBySlug = async (slug: string) =>
  bySlug(
    [
      defaults.defaultAyurvedicMassagePage,
      defaults.defaultIntuitiveMassagePage,
      defaults.defaultLomiLomiMassagePage,
      defaults.defaultBackMassagePage,
      defaults.defaultFaceRelaxationPage,
      defaults.defaultCranialMassagePage,
      defaults.defaultPlantarMassagePage,
    ],
    slug,
  )
export const getRitualServicePageBySlug = async (slug: string) =>
  bySlug(
    [
      defaults.defaultEmotionalReleasePage,
      defaults.defaultMaderotherapyPage,
      defaults.defaultLymphaticDrainagePage,
      defaults.defaultCandleMassagePage,
    ],
    slug,
  )
export const getHeadSpaServicePageBySlug = async (slug: string) =>
  bySlug(
    [
      defaults.defaultHeadSpaClassicPage,
      defaults.defaultHeadSpaExpertPage,
      defaults.defaultHeadSpaChildPage,
    ],
    slug,
  )
export const getMaternityServicePageBySlug = async (slug: string) =>
  bySlug([defaults.defaultPrenatalMassagePage, defaults.defaultBabyMassagePage], slug)
