import { spawn } from 'node:child_process'
import { cp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import ts from 'typescript'

import * as defaults from '../src/lib/default-content'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const previewRoot = path.join(root, '.cache/pages-preview')
const basePath = (process.env.PAGES_BASE_PATH || '').replace(/\/$/, '')

if (basePath && !/^\/[a-zA-Z0-9._-]+$/.test(basePath)) {
  throw new Error('PAGES_BASE_PATH doit être vide ou de la forme /nom-du-depot')
}

const families = [
  {
    route: 'soins-bien-etre',
    pages: [
      defaults.defaultAyurvedicMassagePage,
      defaults.defaultIntuitiveMassagePage,
      defaults.defaultLomiLomiMassagePage,
      defaults.defaultBackMassagePage,
      defaults.defaultFaceRelaxationPage,
      defaults.defaultCranialMassagePage,
      defaults.defaultPlantarMassagePage,
    ],
  },
  {
    route: 'rituels-specifiques',
    pages: [
      defaults.defaultEmotionalReleasePage,
      defaults.defaultMaderotherapyPage,
      defaults.defaultLymphaticDrainagePage,
      defaults.defaultCandleMassagePage,
    ],
  },
  {
    route: 'rituel-head-spa',
    pages: [
      defaults.defaultHeadSpaClassicPage,
      defaults.defaultHeadSpaExpertPage,
      defaults.defaultHeadSpaChildPage,
    ],
  },
  {
    route: 'maternite-parentalite',
    pages: [defaults.defaultPrenatalMassagePage, defaults.defaultBabyMassagePage],
  },
]

// Next Link applique déjà basePath. Les liens <a> et images natives doivent le faire aussi.
// Transformation limitée aux attributs JSX concernés, dans la copie temporaire uniquement.
const transformAssets = (filename: string, source: string) => {
  let changed = false
  const sourceFile = ts.createSourceFile(
    filename,
    source,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  )
  const result = ts.transform(sourceFile, [
    (context) => {
      const visit: ts.Visitor = (node) => {
        if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
          const tag = node.tagName.getText(sourceFile)
          const attributes = node.attributes.properties.map((attribute) => {
            if (!ts.isJsxAttribute(attribute) || !attribute.initializer) return attribute
            const name = attribute.name.getText(sourceFile)
            if (
              !(
                (name === 'href' && tag === 'a') ||
                (name === 'src' && ['img', 'Image'].includes(tag))
              )
            ) {
              return attribute
            }
            const value = ts.isStringLiteral(attribute.initializer)
              ? ts.factory.createStringLiteral(attribute.initializer.text)
              : ts.isJsxExpression(attribute.initializer)
                ? attribute.initializer.expression
                : undefined
            if (!value) return attribute
            changed = true
            return ts.factory.updateJsxAttribute(
              attribute,
              attribute.name,
              ts.factory.createJsxExpression(
                undefined,
                ts.factory.createCallExpression(
                  ts.factory.createIdentifier('withPreviewBasePath'),
                  undefined,
                  [value],
                ),
              ),
            )
          })
          const updatedAttributes = ts.factory.updateJsxAttributes(node.attributes, attributes)
          const updated = ts.isJsxOpeningElement(node)
            ? ts.factory.updateJsxOpeningElement(
                node,
                node.tagName,
                node.typeArguments,
                updatedAttributes,
              )
            : ts.factory.updateJsxSelfClosingElement(
                node,
                node.tagName,
                node.typeArguments,
                updatedAttributes,
              )
          return ts.visitEachChild(updated, visit, context)
        }
        return ts.visitEachChild(node, visit, context)
      }
      return (node) => ts.visitNode(node, visit) as ts.SourceFile
    },
  ])
  let output = ts.createPrinter().printFile(result.transformed[0])
  result.dispose()
  if (changed) {
    // Préserver la directive use client en première instruction.
    const directive = /^(['"]use client['"];?\s*)/.exec(output)
    const offset = directive?.[0].length || 0
    output =
      output.slice(0, offset) +
      '\nimport { withPreviewBasePath } from "@/lib/preview-path";\n' +
      output.slice(offset)
  }
  return output
}

await rm(previewRoot, { recursive: true, force: true })
await mkdir(path.join(previewRoot, 'src/lib'), { recursive: true })
await cp(path.join(root, 'src/app/(frontend)'), path.join(previewRoot, 'src/app/(frontend)'), {
  recursive: true,
})
await rm(path.join(previewRoot, 'src/app/(frontend)/[slug]'), { recursive: true })
await cp(path.join(root, 'src/components'), path.join(previewRoot, 'src/components'), {
  recursive: true,
  filter: (source) => path.basename(source) !== 'MarketingPage.tsx',
})
await cp(path.join(root, 'public'), path.join(previewRoot, 'public'), { recursive: true })
for (const file of ['default-content.ts', 'site-model.ts', 'contact-form.ts']) {
  await cp(path.join(root, 'src/lib', file), path.join(previewRoot, 'src/lib', file))
}
await cp(path.join(root, 'postcss.config.mjs'), path.join(previewRoot, 'postcss.config.mjs'))
await cp(
  path.join(root, 'scripts/pages-preview/site-content.ts'),
  path.join(previewRoot, 'src/lib/site-content.ts'),
)
await writeFile(
  path.join(previewRoot, 'src/lib/preview-path.ts'),
  `const basePath = ${JSON.stringify(basePath)}\nexport const withPreviewBasePath = (url: string) => url.startsWith('/') && !url.startsWith('//') ? basePath + url : url\n`,
)

const updateSources = async (directory: string) => {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const filename = path.join(directory, entry.name)
    if (entry.isDirectory()) {
      await updateSources(filename)
      continue
    }
    if (!entry.name.endsWith('.tsx')) continue
    let source = await readFile(filename, 'utf8')
    source = source.replace(
      "export const dynamic = 'force-dynamic'",
      "export const dynamic = 'force-static'",
    )
    await writeFile(filename, transformAssets(filename, source))
  }
}
const cssPath = path.join(previewRoot, 'src/app/(frontend)/styles.css')
await writeFile(
  cssPath,
  (await readFile(cssPath, 'utf8')) + '\n@source "../../components";\n@source ".";\n',
)
await updateSources(path.join(previewRoot, 'src'))
for (const family of families) {
  const filename = path.join(previewRoot, 'src/app/(frontend)', family.route, '[slug]/page.tsx')
  await writeFile(
    filename,
    (await readFile(filename, 'utf8')) +
      '\nexport const dynamicParams = false\nexport const generateStaticParams = () => ' +
      JSON.stringify(family.pages.map((page) => ({ slug: page.slug }))) +
      '\n',
  )
}

const tsconfig = JSON.parse(await readFile(path.join(root, 'tsconfig.json'), 'utf8'))
tsconfig.compilerOptions.paths = { '@/*': ['./src/*'] }
tsconfig.exclude = ['node_modules']
await writeFile(path.join(previewRoot, 'tsconfig.json'), JSON.stringify(tsconfig, null, 2))
await writeFile(
  path.join(previewRoot, 'package.json'),
  JSON.stringify({ name: 'instant-present-pages-preview', private: true, type: 'module' }),
)
await writeFile(
  path.join(previewRoot, 'next.config.mjs'),
  `export default {
  output: 'export',
  trailingSlash: true,
  basePath: ${JSON.stringify(basePath)},
  images: { unoptimized: true },
  experimental: { cpus: 2 },
}\n`,
)

console.log(
  '[pages-preview] Construction avec les contenus du code, sans Payload ni base de données.',
)
console.log('[pages-preview] Préfixe : ' + (basePath || '/'))
const exitCode = await new Promise<number>((resolve) => {
  const child = spawn(
    process.execPath,
    [path.join(root, 'node_modules/next/dist/bin/next'), 'build', '--webpack'],
    {
      cwd: previewRoot,
      stdio: 'inherit',
      env: { ...process.env, NEXT_PUBLIC_STATIC_PREVIEW: 'true', NEXT_TELEMETRY_DISABLED: '1' },
    },
  )
  child.on('error', (error) => {
    console.error(error)
    resolve(1)
  })
  child.on('exit', (code) => resolve(code ?? 1))
})
if (exitCode !== 0) process.exit(exitCode)
await writeFile(path.join(previewRoot, 'out/.nojekyll'), '')
console.log('[pages-preview] Export prêt : .cache/pages-preview/out')
