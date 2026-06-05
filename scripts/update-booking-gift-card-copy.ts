import 'dotenv/config'

import { getPayload } from 'payload'

import config from '@/payload.config'

const introParagraph =
  'Vous pouvez choisir un soin, un rituel ou le montant de votre choix.\n\nLes cartes cadeaux sont à récupérer directement sur place.'

const detailsParagraph =
  'Pour préparer votre carte cadeau, il suffit de me contacter avec :\nLe nom et prénom de la personne\nLe soin souhaité ou le montant à offrir\nLe prénom de la personne qui offre'

const run = async (): Promise<void> => {
  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'booking-page',
    data: {
      giftCard: {
        introParagraph,
        detailsParagraph,
        phoneLabel: 'Par téléphone',
      },
    },
  })

  console.log('[update-booking-gift-card-copy] booking-page gift card copy updated')
}

void run().catch((error) => {
  console.error('[update-booking-gift-card-copy] Failed to update booking-page gift card copy')
  console.error(error)
  process.exit(1)
})
