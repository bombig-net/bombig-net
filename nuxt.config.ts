export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/fonts',
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
  image: {
    domains: ['images.unsplash.com'],
  },
  i18n: {
    strategy: 'prefix',
    defaultLocale: 'de',
    langDir: 'locales',
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
  css: ['./app/assets/css/main.css'],
})
