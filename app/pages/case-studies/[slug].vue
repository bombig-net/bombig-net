<template>
  <article v-if="caseStudy" v-bind="sx(globalStyles.pageStack)">
    <section v-bind="sx(globalStyles.container, globalStyles.heroSection, globalStyles.sectionSurface)">
      <p v-bind="sx(globalStyles.eyebrow)">{{ t('caseStudies.detail.eyebrow') }}</p>
      <h1 v-bind="sx(globalStyles.title)">{{ caseStudy.title }}</h1>
      <p v-bind="sx(globalStyles.body, styles.copy)">{{ caseStudy.description }}</p>
      <div v-bind="sx(styles.metaRow, globalStyles.meta)">
        <span>{{ caseStudy.meta.client }}</span>
        <span>{{ caseStudy.meta.year }}</span>
        <span>{{ caseStudy.meta.scope }}</span>
      </div>
    </section>

    <section v-bind="sx(globalStyles.container, globalStyles.gridTwo)">
      <div v-bind="sx(globalStyles.panel, styles.proseWrap)">
        <div v-bind="sx(globalStyles.prose)">
          <ContentRenderer :value="caseStudy" />
        </div>
      </div>
      <div v-bind="sx(globalStyles.panel, globalStyles.panelStrong, styles.sidebar)">
        <div v-bind="sx(styles.sidebarGroup)">
          <p v-bind="sx(globalStyles.meta)">{{ t('caseStudies.detail.servicesLabel') }}</p>
          <p v-bind="sx(globalStyles.body)">{{ caseStudy.meta.services }}</p>
        </div>
        <div v-bind="sx(styles.sidebarGroup)">
          <p v-bind="sx(globalStyles.meta)">{{ t('caseStudies.detail.outcomesLabel') }}</p>
          <ul v-bind="sx(globalStyles.list, globalStyles.body)">
            <li>{{ t('caseStudies.detail.outcomes.first') }}</li>
            <li>{{ t('caseStudies.detail.outcomes.second') }}</li>
            <li>{{ t('caseStudies.detail.outcomes.third') }}</li>
          </ul>
        </div>
        <NuxtLink :to="localePath('/contact')" v-bind="sx(globalStyles.buttonBase, globalStyles.buttonPrimary, styles.cta)">
          {{ t('caseStudies.detail.cta') }}
        </NuxtLink>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
import { globalStyles } from '../../styles/system'
import { caseStudyDetailPageStyles as styles } from '../../styles/view-styles'
import { sx } from '../../utils/stylex'

const route = useRoute()
const { t, locale } = useI18n()
const localePath = useLocalePath()

if (typeof route.params.slug !== 'string') {
  throw createError({ statusCode: 404, statusMessage: 'Case study not found' })
}

const slug = route.params.slug
const { data: caseStudy } = await useAsyncData(
  () => `case-study-${locale.value}-${slug}`,
  () => queryCollection('casestudies').path(`/${locale.value}/case-studies/${slug}`).first(),
  { watch: [locale] },
)

if (!caseStudy.value) {
  throw createError({ statusCode: 404, statusMessage: 'Case study not found' })
}

useSeoMeta({
  title: computed(() => caseStudy.value?.title || t('caseStudies.meta.title')),
  description: computed(() => caseStudy.value?.description || t('caseStudies.meta.description')),
})

</script>
