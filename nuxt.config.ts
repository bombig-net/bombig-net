import tailwindcss from '@tailwindcss/vite'

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
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  typescript: {
    strict: true,
    typeCheck: false,
  },
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
})