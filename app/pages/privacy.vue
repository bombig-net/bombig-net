<template>
  <div v-bind="sx(globalStyles.pageStack)">
    <section v-bind="sx(globalStyles.container, globalStyles.heroSection, globalStyles.sectionSurface)">
      <p v-bind="sx(globalStyles.eyebrow)">{{ t('privacy.eyebrow') }}</p>
      <h1 v-bind="sx(globalStyles.title)">{{ t('privacy.title') }}</h1>
      <p v-bind="sx(globalStyles.body, styles.copy)">{{ t('privacy.description') }}</p>
    </section>

    <section v-bind="sx(globalStyles.container)">
      <div v-bind="sx(globalStyles.panel, styles.article)">
        <div v-for="section in sections" :key="section.title" v-bind="sx(styles.section)">
          <h2 v-bind="sx(globalStyles.sectionTitle, styles.sectionTitle)">{{ section.title }}</h2>
          <p v-bind="sx(globalStyles.body)">{{ section.body }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { globalStyles } from '../styles/system'
import { privacyPageStyles as styles } from '../styles/view-styles'
import { sx } from '../utils/stylex'

const { t } = useI18n()

const sections = computed(() => [
  { title: t('privacy.sections.collect.title'), body: t('privacy.sections.collect.body') },
  { title: t('privacy.sections.use.title'), body: t('privacy.sections.use.body') },
  { title: t('privacy.sections.choices.title'), body: t('privacy.sections.choices.body') },
])

useSeoMeta({
  title: computed(() => t('privacy.meta.title')),
  description: computed(() => t('privacy.meta.description')),
})

</script>
