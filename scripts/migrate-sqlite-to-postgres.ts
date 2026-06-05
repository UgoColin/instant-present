import 'dotenv/config'

import fs from 'node:fs/promises'
import path from 'node:path'

const sqliteDatabaseUrl = process.env.SQLITE_DATABASE_URL
const postgresDatabaseUrl = process.env.POSTGRES_DATABASE_URL || process.env.DATABASE_URL
const outputPath = path.resolve(process.cwd(), '.cache/sqlite-to-postgres.load')

const resolveSQLitePath = (url: string): string => {
  if (url.startsWith('file:')) {
    const withoutPrefix = url.slice('file:'.length)

    if (!withoutPrefix) {
      throw new Error('Empty SQLite path in SQLITE_DATABASE_URL')
    }

    return path.resolve(process.cwd(), withoutPrefix)
  }

  return path.resolve(process.cwd(), url)
}

const ensureEnv = (name: string, value: string | undefined): string => {
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }

  return value
}

const run = async (): Promise<void> => {
  const sqliteUrl = ensureEnv('SQLITE_DATABASE_URL', sqliteDatabaseUrl)
  const postgresUrl = ensureEnv('POSTGRES_DATABASE_URL or DATABASE_URL', postgresDatabaseUrl)
  const sqlitePath = resolveSQLitePath(sqliteUrl)

  await fs.mkdir(path.dirname(outputPath), { recursive: true })

  const loadFile = `LOAD DATABASE
     FROM sqlite://${sqlitePath}
     INTO ${postgresUrl}

 WITH data only, create no tables, truncate, reset sequences, downcase identifiers

  SET work_mem to '16MB',
      maintenance_work_mem to '512MB';
`

  await fs.writeFile(outputPath, loadFile, 'utf8')

  console.log(`[migrate-sqlite-to-postgres] Generated pgloader load file:`)
  console.log(outputPath)
  console.log('')
  console.log('The PostgreSQL schema must already exist before running pgloader.')
  console.log('Recommended order:')
  console.log('1. Point DATABASE_URL to PostgreSQL')
  console.log('2. Run npm run ensure:globals once to let Payload create the schema')
  console.log(`3. Run pgloader ${outputPath}`)
  console.log('')
  console.log('Next step:')
  console.log(`pgloader ${outputPath}`)
}

void run().catch((error) => {
  console.error('[migrate-sqlite-to-postgres] Failed to generate pgloader load file')
  console.error(error)
  process.exit(1)
})
