import { existsSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const contentRoot = join(process.cwd(), 'content')
const locales = ['en', 'de']
const staticRoutes = ['/', '/about', '/services', '/contact', '/case-studies', '/blog', '/privacy']

const readSlugs = (dir: string) => {
  if (!existsSync(dir)) {
    return []
  }
  return readdirSync(dir)
    .filter((name) => name.endsWith('.md'))
    .map((name) => name.replace(/\.md$/, ''))
}

const localizedStaticRoutes = locales.flatMap((locale) =>
  staticRoutes.map((route) => (route === '/' ? `/${locale}` : `/${locale}${route}`)),
)

const localizedContentRoutes = locales.flatMap((locale) => {
  const blogSlugs = readSlugs(join(contentRoot, locale, 'blog'))
  const caseSlugs = readSlugs(join(contentRoot, locale, 'case-studies'))
  return [
    ...blogSlugs.map((slug) => `/${locale}/blog/${slug}`),
    ...caseSlugs.map((slug) => `/${locale}/case-studies/${slug}`),
  ]
})

const prerenderRoutes = ['/', '/sitemap.xml', ...localizedStaticRoutes, ...localizedContentRoutes]

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxt/a11y',
    '@nuxt/hints',
    '@nuxt/scripts',
    '@nuxtjs/seo',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      titleTemplate: '%s - Bombig',
      meta: [
        { name: 'description', content: 'Bombig is a digital agency crafting bold, conversion-ready brand experiences.' },
        { name: 'theme-color', content: '#0d1016' },
      ],
    },
  },
  site: {
    name: 'Bombig',
    url: 'https://bombig.net',
    description: 'A modern digital agency for high-impact, design-driven websites.',
  },
  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY ?? '',
    contactToEmail: process.env.CONTACT_TO_EMAIL ?? '',
    contactFromEmail: process.env.CONTACT_FROM_EMAIL ?? '',
    public: {
      siteUrl: 'https://bombig.net',
    },
  },
  image: {
    domains: ['images.unsplash.com'],
  },
  i18n: {
    strategy: 'prefix',
    defaultLocale: 'de',
    langDir: 'locales',
    baseUrl: 'https://bombig.net',
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
      { code: 'de', iso: 'de-DE', file: 'de.json', name: 'Deutsch' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    vueI18n: './i18n.config.ts',
  },
  typescript: {
    strict: true,
    typeCheck: false,
  },
  sitemap: {
    zeroRuntime: true,
  },
  nitro: {
    prerender: {
      routes: prerenderRoutes,
    },
  },
  css: ['./app/assets/css/main.css'],
})
