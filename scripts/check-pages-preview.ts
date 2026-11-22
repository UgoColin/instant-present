import assert from 'node:assert/strict'
import { readFile, readdir, stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../.cache/pages-preview/out',
)
const basePath = (process.env.PAGES_BASE_PATH || '').replace(/\/$/, '')
const htmlFiles: string[] = []
const walk = async (directory: string) => {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const filename = path.join(directory, entry.name)
    if (entry.isDirectory()) await walk(filename)
    else if (entry.name.endsWith('.html')) htmlFiles.push(filename)
  }
}
await walk(root)
assert.equal(
  htmlFiles.filter(
    (file) =>
      path.basename(file) === 'index.html' &&
      !['404', '_not-found'].includes(path.relative(root, file).split(path.sep)[0]),
  ).length,
  27,
  'Les 11 pages principales et les 16 fiches doivent être exportées',
)
for (const forbidden of ['admin', 'api', 'my-route']) {
  await assert.rejects(stat(path.join(root, forbidden)), { code: 'ENOENT' })
}
let checkedUrls = 0
for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8')
  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const url = match[1].replaceAll('&amp;', '&')
    if (!url.startsWith('/') || url.startsWith('//')) continue
    assert.ok(
      !basePath || url === basePath || url.startsWith(basePath + '/'),
      `${path.relative(root, file)} : URL hors du préfixe Pages : ${url}`,
    )
    const pathname = decodeURIComponent(url.split(/[?#]/)[0].slice(basePath.length))
    const target = path.join(root, pathname)
    let exists = false
    for (const candidate of [target, path.join(target, 'index.html')]) {
      try {
        if ((await stat(candidate)).isFile()) {
          exists = true
          break
        }
      } catch {
        /* chemin alternatif */
      }
    }
    assert.ok(exists, `${path.relative(root, file)} : lien ou asset absent : ${url}`)
    checkedUrls++
  }
}
const contact = await readFile(path.join(root, 'contact/index.html'), 'utf8')
assert.ok(contact.includes('ce formulaire ne transmet aucune demande'))
const cssDirectory = path.join(root, '_next/static/css')
const css = (
  await Promise.all(
    (await readdir(cssDirectory))
      .filter((file) => file.endsWith('.css'))
      .map((file) => readFile(path.join(cssDirectory, file), 'utf8')),
  )
).join('\n')
assert.ok(
  css.includes('.bg-brand-cream'),
  'Les classes Tailwind des composants doivent être générées',
)
assert.ok(css.includes('.grid'), 'La grille Tailwind doit être générée')
console.log(
  `[pages-preview] ${htmlFiles.length} fichiers HTML, ${checkedUrls} liens/assets vérifiés ; styles et formulaire OK.`,
)
