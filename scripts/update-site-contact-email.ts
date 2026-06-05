import 'dotenv/config'

import { getPayload } from 'payload'

import config from '@/payload.config'

const email = 'krystel.linstantpresent@gmail.com'

const run = async (): Promise<void> => {
  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'site-settings',
    data: {
      contact: {
        email,
      },
    },
  })

  console.log('[update-site-contact-email] site-settings contact email updated')
}

void run().catch((error) => {
  console.error('[update-site-contact-email] Failed to update site-settings contact email')
  console.error(error)
  process.exit(1)
})
