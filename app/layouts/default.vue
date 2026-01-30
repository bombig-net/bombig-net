<template>
  <div class="min-h-screen text-white">
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-900"
    >
      {{ t('a11y.skipToContent') }}
    </a>
    <SiteHeader />
    <main id="main-content" class="pt-24">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const route = useRoute()
const localeHead = useLocaleHead({ seo: true })
const runtimeConfig = useRuntimeConfig()

const siteUrl = computed(() => runtimeConfig.public.siteUrl || 'https://bombig.net')
const canonicalUrl = computed(() => new URL(route.path || '/', siteUrl.value).toString())

useHead(() => ({
  htmlAttrs: localeHead.value.htmlAttrs,
  link: [
    ...(localeHead.value.link || []),
    {
      rel: 'canonical',
      href: canonicalUrl.value,
    },
  ],
  meta: [
    ...(localeHead.value.meta || []),
    { property: 'og:site_name', content: 'bombig.net' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
}))
</script>
