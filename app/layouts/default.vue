<template>
  <div v-bind="sx(globalStyles.page)">
    <a href="#main-content" v-bind="sx(styles.skipLink)">
      {{ t('a11y.skipToContent') }}
    </a>
    <SiteHeader />
    <main id="main-content" v-bind="sx(styles.main)">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { globalStyles } from '../styles/system'
import { defaultLayoutStyles as styles } from '../styles/view-styles'
import { sx } from '../utils/stylex'
import { SITE_PROFILE } from '~~/shared/contracts/site'

const { t } = useI18n()
const route = useRoute()
const localeHead = useLocaleHead({ seo: true })
const runtimeConfig = useRuntimeConfig()

const siteUrl = computed(() => runtimeConfig.public.siteUrl || SITE_PROFILE.siteUrl)
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
    { property: 'og:site_name', content: SITE_PROFILE.shortName },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
}))

</script>
