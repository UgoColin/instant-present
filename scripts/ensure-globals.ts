import 'dotenv/config'

import { getPayload } from 'payload'

import config from '@/payload.config'

const globalSlugs = [
  ['site-settings', 'Paramètres du site'],
  ['home-page', "Page d'accueil"],
  ['wellness-page', 'Page soins bien-être'],
  ['rituals-page', 'Page rituels spécifiques'],
  ['head-spa-page', 'Page Head Spa'],
  ['maternity-page', 'Page maternité'],
  ['nutrition-page', 'Page nutrition'],
  ['booking-page', 'Page contact et réservation'],
  ['signature-ritual-page', 'Page soin signature'],
] as const

const run = async () => {
  const payload = await getPayload({ config: await config })

  for (const [slug, label] of globalSlugs) {
    await payload.updateGlobal({
      slug,
      data: {},
    })

    console.log(`[ensure-globals] Ensured: ${label} (${slug})`)
  }
}

run()
  .then(() => {
    process.exit(0)
  })
  .catch((error) => {
    console.error('[ensure-globals] Failed to ensure globals')
    console.error(error)
    process.exit(1)
  })
