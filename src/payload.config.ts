import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fr } from 'payload/i18n/fr'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Pages } from './collections/Pages'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { HeadSpaServicePages } from './collections/HeadSpaServicePages'
import { MaternityServicePages } from './collections/MaternityServicePages'
import { RitualServicePages } from './collections/RitualServicePages'
import { WellnessServicePages } from './collections/WellnessServicePages'
import { HeadSpaPage } from './globals/HeadSpaPage'
import { HomePage } from './globals/HomePage'
import { BookingPage } from './globals/BookingPage'
import { MaternityPage } from './globals/MaternityPage'
import { NutritionPage } from './globals/NutritionPage'
import { RitualsPage } from './globals/RitualsPage'
import { SignatureRitualPage } from './globals/SignatureRitualPage'
import { SiteSettings } from './globals/SiteSettings'
import { WellnessPage } from './globals/WellnessPage'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  i18n: {
    fallbackLanguage: 'fr',
    supportedLanguages: {
      fr,
    },
  },
  collections: [
    Users,
    Media,
    Pages,
    WellnessServicePages,
    RitualServicePages,
    HeadSpaServicePages,
    MaternityServicePages,
  ],
  editor: lexicalEditor(),
  globals: [
    SiteSettings,
    HomePage,
    WellnessPage,
    RitualsPage,
    HeadSpaPage,
    MaternityPage,
    NutritionPage,
    BookingPage,
    SignatureRitualPage,
  ],
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    allowIDOnCreate: true,
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins: [],
})
