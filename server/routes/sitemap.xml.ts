import { stat } from 'node:fs/promises'
import { join } from 'node:path'
import { CONTENT_ROUTE_DEFINITIONS, getLocalizedStaticRoutes } from '../../shared/contracts/routes'
import { getLocalizedContentRoutes } from '../../shared/contracts/prerender'

const getLastMod = async (filePath: string) => {
  try {
    const fileStat = await stat(filePath)
    return fileStat.mtime.toISOString()
  } catch {
    return undefined
  }
}

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig()
  const siteUrl = runtimeConfig.public.siteUrl || 'https://bombig.net'
  const contentRoot = join(process.cwd(), 'content')

  const urls: Array<{ loc: string; lastmod?: string }> = []

  for (const route of getLocalizedStaticRoutes()) {
    urls.push({ loc: new URL(route, siteUrl).toString() })
  }

  const localizedContentRoutes = getLocalizedContentRoutes(contentRoot)
  for (const route of localizedContentRoutes) {
    const [, locale, kind, slug] = route.split('/')
    if (!locale || !kind || !slug) {
      continue
    }
    const definition = CONTENT_ROUTE_DEFINITIONS.find((entry) => entry.pathPrefix === `/${kind}`)
    const filePath = definition ? join(contentRoot, locale, definition.contentDirectory, `${slug}.md`) : undefined
    urls.push({
      loc: new URL(route, siteUrl).toString(),
      lastmod: filePath ? await getLastMod(filePath) : undefined,
    })
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls
      .map((entry) => {
        const lastmod = entry.lastmod ? `<lastmod>${entry.lastmod}</lastmod>` : ''
        return `<url><loc>${entry.loc}</loc>${lastmod}</url>`
      })
      .join('\n') +
    `\n</urlset>`

  event.node.res.setHeader('Content-Type', 'application/xml')
  return xml
})
