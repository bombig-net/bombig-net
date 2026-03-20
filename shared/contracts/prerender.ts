import { existsSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { CONTENT_ROUTE_DEFINITIONS, getLocalizedStaticRoutes } from './routes'
import { LOCALES } from './locales'

function readSlugsForDirectory(directory: string) {
  if (!existsSync(directory)) {
    return []
  }

  return readdirSync(directory)
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''))
}

export function getLocalizedContentRoutes(contentRoot = join(process.cwd(), 'content')) {
  return LOCALES.flatMap((locale) =>
    CONTENT_ROUTE_DEFINITIONS.flatMap((definition) => {
      const slugs = readSlugsForDirectory(join(contentRoot, locale, definition.contentDirectory))
      return slugs.map((slug) => `/${locale}${definition.pathPrefix}/${slug}`)
    }),
  )
}

export function getPrerenderRoutes(contentRoot = join(process.cwd(), 'content')) {
  return ['/', '/sitemap.xml', ...getLocalizedStaticRoutes(), ...getLocalizedContentRoutes(contentRoot)]
}
