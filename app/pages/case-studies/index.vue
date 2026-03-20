<template>
  <div v-bind="sx(globalStyles.pageStack)">
    <section v-bind="sx(globalStyles.container, globalStyles.heroSection, globalStyles.sectionSurface)">
      <p v-bind="sx(globalStyles.eyebrow)">{{ t('caseStudies.index.eyebrow') }}</p>
      <h1 v-bind="sx(globalStyles.title)">{{ t('caseStudies.index.title') }}</h1>
      <p v-bind="sx(globalStyles.body, styles.copy)">{{ t('caseStudies.index.description') }}</p>
    </section>

    <section v-bind="sx(globalStyles.container)">
      <div v-bind="sx(globalStyles.gridCards)">
        <CaseCard v-for="item in caseStudies" :key="item.id" :item="item" />
      </div>
    </section>

    <CalloutPanel />
  </div>
</template>

<script setup lang="ts">
import { globalStyles } from '../../styles/system'
import { caseStudiesIndexPageStyles as styles } from '../../styles/view-styles'
import { sx } from '../../utils/stylex'

const { t, locale } = useI18n()

const { data: caseStudies } = await useAsyncData(
  () => `case-studies-list-${locale.value}`,
  () =>
    queryCollection('casestudies')
      .where('path', 'LIKE', `/${locale.value}/case-studies/%`)
      .select('id', 'title', 'description', 'path', 'meta')
      .order('path', 'DESC')
      .all(),
  { watch: [locale], default: () => [] },
)

useSeoMeta({
  title: computed(() => t('caseStudies.meta.title')),
  description: computed(() => t('caseStudies.meta.description')),
})

</script>
