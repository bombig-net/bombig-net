<template>
  <header v-bind="sx(globalStyles.siteHeader)">
    <div v-bind="sx(globalStyles.container, styles.row)">
      <NuxtLink :to="localePath('/')" v-bind="sx(styles.brand)">
        <span v-bind="sx(styles.brandMark)">B</span>
        <span>{{ SITE_PROFILE.shortName }}</span>
      </NuxtLink>

      <nav v-bind="sx(styles.nav)">
        <NuxtLink
          v-for="item in navItems"
          :key="item.id"
          :to="localePath(item.path)"
          v-bind="sx(styles.link, isActive(item.path) && styles.linkActive)"
        >
          {{ t(item.navKey) }}
        </NuxtLink>
      </nav>

      <div v-bind="sx(styles.actions)">
        <NuxtLink :to="localePath('/contact')" v-bind="sx(globalStyles.buttonBase, globalStyles.buttonPrimary)">
          {{ t('header.letsTalk') }}
        </NuxtLink>
        <NuxtLink :to="switchLocalePath(otherLocale)" v-bind="sx(globalStyles.buttonBase, globalStyles.buttonSecondary, styles.localeButton)">
          {{ otherLocale.toUpperCase() }}
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { PRIMARY_NAVIGATION, SERVICE_ROUTE_DEFINITIONS, getRoutePath } from '~~/shared/contracts/routes'
import { SITE_PROFILE } from '~~/shared/contracts/site'
import { globalStyles } from '../styles/system'
import { siteHeaderStyles as styles } from '../styles/view-styles'
import { sx } from '../utils/stylex'

const { t, locale } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const route = useRoute()

const navItems = PRIMARY_NAVIGATION.flatMap((item) => {
  const topLevel = {
    id: item.routeId,
    path: getRoutePath(item.routeId) || '/',
    navKey: item.routeId === 'caseStudies' ? 'nav.caseStudies' : `nav.${item.routeId}`,
  }

  if (!('children' in item)) {
    return [topLevel]
  }

  return [
    topLevel,
    ...SERVICE_ROUTE_DEFINITIONS.map((service) => ({
      id: service.id,
      path: service.path,
      navKey: service.navKey,
    })),
  ]
})

const otherLocale = computed(() => (locale.value === 'en' ? 'de' : 'en'))

function isActive(path: string) {
  return route.path === localePath(path) || route.path.startsWith(`${localePath(path)}/`)
}

</script>
