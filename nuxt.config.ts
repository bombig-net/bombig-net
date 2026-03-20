import stylex from '@stylexjs/unplugin'
import { LOCALE_DEFINITIONS, DEFAULT_LOCALE } from './shared/contracts/locales'
import { getPrerenderRoutes } from './shared/contracts/prerender'
import { SITE_PROFILE } from './shared/contracts/site'

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
    'reka-ui/nuxt',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      titleTemplate: '%s - Bombig',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@300..800&family=Space+Grotesk:wght@300..700&display=swap',
        },
      ],
      meta: [
        { name: 'description', content: 'Bombig is a digital agency crafting bold, conversion-ready brand experiences.' },
        { name: 'theme-color', content: '#0d1016' },
      ],
    },
    pageTransition: {
      name: 'page-sweep',
      mode: 'out-in',
    },
  },
  site: {
    name: SITE_PROFILE.name,
    url: SITE_PROFILE.siteUrl,
    description: 'A modern digital agency for high-impact, design-driven websites.',
  },
  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY ?? '',
    contactToEmail: process.env.CONTACT_TO_EMAIL ?? '',
    contactFromEmail: process.env.CONTACT_FROM_EMAIL ?? '',
    public: {
      siteUrl: SITE_PROFILE.siteUrl,
    },
  },
  image: {
    domains: ['images.unsplash.com'],
  },
  i18n: {
    strategy: 'prefix',
    defaultLocale: DEFAULT_LOCALE,
    langDir: 'locales',
    baseUrl: SITE_PROFILE.siteUrl,
    locales: [...LOCALE_DEFINITIONS],
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
  linkChecker: {
    excludeLinks: ['/projektwebseiten/**', 'https://bombig.net/projektwebseiten/**'],
  },
  nitro: {
    prerender: {
      routes: getPrerenderRoutes(),
    },
  },
  css: ['./app/assets/stylex.css'],
  vite: {
    plugins: [
      stylex.vite({
        dev: process.env.NODE_ENV === 'development',
        treeshakeCompensation: true,
        unstable_moduleResolution: {
          type: 'commonJS',
          rootDir: process.cwd(),
        },
      }),
    ],
  },
})
