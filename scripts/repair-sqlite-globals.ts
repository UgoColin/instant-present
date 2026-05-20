import 'dotenv/config'

import path from 'path'
import { DatabaseSync } from 'node:sqlite'

const databaseUrl = process.env.DATABASE_URL

if (!databaseUrl) {
  throw new Error('Missing DATABASE_URL')
}

const resolveSqlitePath = (url: string) => {
  if (!url.startsWith('file:')) {
    throw new Error(`Unsupported DATABASE_URL for SQLite repair: ${url}`)
  }

  const rawPath = url.slice('file:'.length)

  if (!rawPath) {
    throw new Error('Empty SQLite path in DATABASE_URL')
  }

  if (rawPath.startsWith('/')) {
    return rawPath
  }

  return path.resolve(process.cwd(), rawPath)
}

const dbPath = resolveSqlitePath(databaseUrl)
const db = new DatabaseSync(dbPath)

type ColumnSpec = {
  defaultValue?: string
  name: string
  type: 'INTEGER' | 'TEXT'
}

const tablePatches: Record<string, ColumnSpec[]> = {
  booking_page: [
    { defaultValue: 'Par téléphone', name: 'contact_methods_phone_title', type: 'TEXT' },
    { defaultValue: 'Par e-mail', name: 'contact_methods_email_title', type: 'TEXT' },
    { defaultValue: 'Via Facebook', name: 'contact_methods_facebook_title', type: 'TEXT' },
    { defaultValue: 'Offrir un moment', name: 'gift_card_script_title', type: 'TEXT' },
    { defaultValue: 'La carte cadeau', name: 'gift_card_title', type: 'TEXT' },
    { name: 'gift_card_intro_paragraph', type: 'TEXT' },
    { name: 'gift_card_details_paragraph', type: 'TEXT' },
    { defaultValue: 'Commander une carte cadeau', name: 'gift_card_order_title', type: 'TEXT' },
    { defaultValue: 'Par e-mail', name: 'gift_card_email_label', type: 'TEXT' },
    { defaultValue: 'Via Facebook', name: 'gift_card_facebook_label', type: 'TEXT' },
    {
      defaultValue: 'Ou directement via le formulaire de cette page.',
      name: 'gift_card_form_label',
      type: 'TEXT',
    },
    { name: 'gift_card_image_front_alt', type: 'TEXT' },
    { name: 'gift_card_image_back_alt', type: 'TEXT' },
  ],
  head_spa_page: [{ defaultValue: 'Découvrir ce soin', name: 'services_item_cta_label', type: 'TEXT' }],
  home_page: [
    { defaultValue: 'En savoir plus', name: 'services_item_cta_label', type: 'TEXT' },
    { defaultValue: 'Mon soin signature', name: 'signature_feature_script_title', type: 'TEXT' },
    { defaultValue: 'Rituel Esprit', name: 'signature_feature_title', type: 'TEXT' },
    { name: 'signature_feature_subtitle', type: 'TEXT' },
    { name: 'signature_feature_description', type: 'TEXT' },
    { defaultValue: '1h30', name: 'signature_feature_duration', type: 'TEXT' },
    { defaultValue: '90€', name: 'signature_feature_price', type: 'TEXT' },
    {
      defaultValue: 'Découvrir ce soin',
      name: 'signature_feature_primary_cta_label',
      type: 'TEXT',
    },
    { defaultValue: '/rituel-esprit', name: 'signature_feature_primary_cta_href', type: 'TEXT' },
    { defaultValue: 'Réserver', name: 'signature_feature_secondary_cta_label', type: 'TEXT' },
    { defaultValue: '/contact', name: 'signature_feature_secondary_cta_href', type: 'TEXT' },
    { name: 'signature_feature_image_id', type: 'INTEGER' },
    { name: 'signature_feature_image_alt', type: 'TEXT' },
  ],
  maternity_page: [{ defaultValue: 'Découvrir ce soin', name: 'services_item_cta_label', type: 'TEXT' }],
  rituals_page: [{ defaultValue: 'Découvrir ce soin', name: 'services_item_cta_label', type: 'TEXT' }],
  wellness_page: [{ defaultValue: 'Découvrir ce soin', name: 'services_item_cta_label', type: 'TEXT' }],
}

const tableExists = (tableName: string) =>
  Boolean(
    db
      .prepare(`SELECT name FROM sqlite_master WHERE type = 'table' AND name = ?`)
      .get(tableName),
  )

const getExistingColumns = (tableName: string) => {
  const rows = db.prepare(`PRAGMA table_info(${tableName})`).all() as Array<{ name: string }>
  return new Set(rows.map((row) => row.name))
}

const quote = (value: string) => `'${value.replaceAll("'", "''")}'`

const dropTableIndexes = (tableName: string) => {
  const indexes = db
    .prepare(`PRAGMA index_list(${tableName})`)
    .all() as Array<{ name: string; origin: string }>

  for (const index of indexes) {
    if (!index.name || index.origin === 'pk') {
      continue
    }

    db.exec(`DROP INDEX IF EXISTS ${index.name}`)
    console.log(`[repair-sqlite-globals] Dropped index ${index.name}`)
  }
}

for (const [tableName, patchColumns] of Object.entries(tablePatches)) {
  if (!tableExists(tableName)) {
    continue
  }

  const existingColumns = getExistingColumns(tableName)

  for (const column of patchColumns) {
    if (existingColumns.has(column.name)) {
      continue
    }

    const defaultClause =
      typeof column.defaultValue === 'string' ? ` DEFAULT ${quote(column.defaultValue)}` : ''

    db.exec(`ALTER TABLE ${tableName} ADD COLUMN ${column.name} ${column.type}${defaultClause}`)
    console.log(`[repair-sqlite-globals] Added ${tableName}.${column.name}`)
  }

  dropTableIndexes(tableName)
}

if (tableExists('__new_booking_page')) {
  db.exec('DROP TABLE __new_booking_page')
  console.log('[repair-sqlite-globals] Dropped leftover __new_booking_page')
}

db.close()
