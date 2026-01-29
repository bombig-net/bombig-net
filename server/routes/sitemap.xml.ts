import { existsSync } from 'node:fs'
import { readdir, stat } from 'node:fs/promises'
import { join } from 'node:path'

const locales = ['en', 'de']
const staticRoutes = ['/', '/about', '/services', '/contact', '/case-studies', '/blog', '/privacy']

const readSlugs = async (dir: string) => {
  if (!existsSync(dir)) {
    return []
  }
  const entries = await readdir(dir)
  return entries.filter((name) => name.endsWith('.md')).map((name) => name.replace(/\.md$/, ''))
}

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

  for (const locale of locales) {
    for (const route of staticRoutes) {
      const path = route === '/' ? `/${locale}` : `/${locale}${route}`
      urls.push({ loc: new URL(path, siteUrl).toString() })
    }

    const blogDir = join(contentRoot, locale, 'blog')
    const caseDir = join(contentRoot, locale, 'case-studies')

    const blogSlugs = await readSlugs(blogDir)
    const caseSlugs = await readSlugs(caseDir)

    for (const slug of blogSlugs) {
      urls.push({
        loc: new URL(`/${locale}/blog/${slug}`, siteUrl).toString(),
        lastmod: await getLastMod(join(blogDir, `${slug}.md`)),
      })
    }

    for (const slug of caseSlugs) {
      urls.push({
        loc: new URL(`/${locale}/case-studies/${slug}`, siteUrl).toString(),
        lastmod: await getLastMod(join(caseDir, `${slug}.md`)),
      })
    }
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
