<template>
  <footer v-bind="sx(globalStyles.siteFooter)">
    <div v-bind="sx(globalStyles.container, styles.grid)">
      <div v-bind="sx(styles.column)">
        <p v-bind="sx(globalStyles.sectionTitle, styles.tagline)">{{ t('footer.tagline') }}</p>
        <p v-bind="sx(globalStyles.body)">{{ t('footer.blurb') }}</p>
        <div v-bind="sx(styles.metaRow, globalStyles.meta)">
          <span>{{ SITE_PROFILE.location }}</span>
          <span>{{ SITE_PROFILE.phone }}</span>
          <span>{{ SITE_PROFILE.email }}</span>
        </div>
      </div>
      <div v-bind="sx(styles.column)">
        <p v-bind="sx(globalStyles.eyebrow)">{{ t('footer.explore') }}</p>
        <NuxtLink v-for="item in footerItems" :key="item.id" :to="localePath(item.path)" v-bind="sx(styles.link)">
          {{ t(item.navKey) }}
        </NuxtLink>
      </div>
      <div v-bind="sx(styles.column)">
        <p v-bind="sx(globalStyles.eyebrow)">{{ t('footer.elsewhere') }}</p>
        <NuxtLink v-for="item in SITE_PROFILE.socials" :key="item.href" :to="item.href" external v-bind="sx(styles.link)">
          {{ item.label }}
        </NuxtLink>
        <span v-bind="sx(globalStyles.meta)">{{ t('footer.copyright') }}</span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { FOOTER_NAVIGATION, getRoutePath } from '~~/shared/contracts/routes'
import { SITE_PROFILE } from '~~/shared/contracts/site'
import { globalStyles } from '../styles/system'
import { siteFooterStyles as styles } from '../styles/view-styles'
import { sx } from '../utils/stylex'

const { t } = useI18n()
const localePath = useLocalePath()

const footerItems = FOOTER_NAVIGATION.map((routeId) => ({
  id: routeId,
  path: getRoutePath(routeId) || '/',
  navKey: routeId === 'caseStudies' ? 'nav.caseStudies' : `nav.${routeId}`,
}))

</script>
