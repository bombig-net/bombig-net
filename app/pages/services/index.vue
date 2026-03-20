<template>
  <div v-bind="sx(globalStyles.pageStack)">
    <section v-bind="sx(globalStyles.container, globalStyles.heroSection, globalStyles.gridTwo)">
      <div v-bind="sx(globalStyles.sectionSurface)">
        <p v-bind="sx(globalStyles.eyebrow)">{{ t('servicesIndex.hero.eyebrow') }}</p>
        <h1 v-bind="sx(globalStyles.title)">{{ t('servicesIndex.hero.title') }}</h1>
        <p v-bind="sx(globalStyles.body)">{{ t('servicesIndex.hero.description') }}</p>
      </div>
      <div v-bind="sx(globalStyles.panel, globalStyles.panelStrong, styles.panel)">
        <p v-bind="sx(globalStyles.eyebrow)">{{ t('servicesIndex.panel.label') }}</p>
        <p v-bind="sx(globalStyles.sectionTitle, styles.panelTitle)">{{ t('servicesIndex.panel.title') }}</p>
        <p v-bind="sx(globalStyles.body)">{{ t('servicesIndex.panel.description') }}</p>
        <div v-bind="sx(styles.panelPoints)">
          <div v-for="point in panelPoints" :key="point.label" v-bind="sx(globalStyles.panelInset, styles.pointCard)">
            <span v-bind="sx(globalStyles.meta)">{{ point.label }}</span>
            <span v-bind="sx(globalStyles.body)">{{ point.time }}</span>
          </div>
        </div>
      </div>
    </section>

    <section v-bind="sx(globalStyles.container, globalStyles.section)">
      <SectionHeading
        :eyebrow="t('servicesIndex.directory.eyebrow')"
        :title="t('servicesIndex.directory.title')"
        :description="t('servicesIndex.directory.description')"
      />
      <div v-bind="sx(globalStyles.gridThree)">
        <NuxtLink
          v-for="service in serviceCards"
          :key="service.id"
          :to="localePath(service.path)"
          v-bind="sx(globalStyles.panel, styles.serviceCard)"
        >
          <div v-bind="sx(styles.serviceCardBody)">
            <span v-bind="sx(globalStyles.badge)">{{ t(`${service.indexCardKey}.eyebrow`) }}</span>
            <h2 v-bind="sx(globalStyles.cardTitle)">{{ t(`${service.indexCardKey}.title`) }}</h2>
            <p v-bind="sx(globalStyles.body)">{{ t(`${service.indexCardKey}.description`) }}</p>
          </div>
          <div v-bind="sx(styles.tagRow)">
            <span v-bind="sx(globalStyles.badge)">{{ t(`${service.indexCardKey}.tagFirst`) }}</span>
            <span v-bind="sx(globalStyles.badge)">{{ t(`${service.indexCardKey}.tagSecond`) }}</span>
          </div>
          <span v-bind="sx(globalStyles.meta)">{{ t(`${service.indexCardKey}.cta`) }}</span>
        </NuxtLink>
      </div>
    </section>

    <section v-bind="sx(globalStyles.container, globalStyles.gridTwo)">
      <SectionHeading
        :eyebrow="t('servicesIndex.howToChoose.eyebrow')"
        :title="t('servicesIndex.howToChoose.title')"
        :description="t('servicesIndex.howToChoose.description')"
      />
      <div v-bind="sx(styles.pointList)">
        <div v-for="point in howToChoosePoints" :key="point.label" v-bind="sx(globalStyles.panel, styles.pointCard)">
          <p v-bind="sx(globalStyles.meta)">{{ point.label }}</p>
          <p v-bind="sx(globalStyles.body)">{{ point.text }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { SERVICE_DEFINITIONS } from '~~/shared/contracts/services'
import { globalStyles } from '../../styles/system'
import { servicesIndexPageStyles as styles } from '../../styles/view-styles'
import { sx } from '../../utils/stylex'

const { t } = useI18n()
const localePath = useLocalePath()

const serviceCards = SERVICE_DEFINITIONS.map((service) => ({
  id: service.id,
  path: service.routePath,
  indexCardKey: service.indexCardKey,
}))

const panelPoints = computed(() => [
  { label: t('servicesIndex.panel.items.first'), time: t('servicesIndex.panel.times.first') },
  { label: t('servicesIndex.panel.items.second'), time: t('servicesIndex.panel.times.second') },
  { label: t('servicesIndex.panel.items.third'), time: t('servicesIndex.panel.times.third') },
])

const howToChoosePoints = computed(() => [
  { label: t('servicesIndex.howToChoose.points.first.label'), text: t('servicesIndex.howToChoose.points.first.text') },
  { label: t('servicesIndex.howToChoose.points.second.label'), text: t('servicesIndex.howToChoose.points.second.text') },
  { label: t('servicesIndex.howToChoose.points.third.label'), text: t('servicesIndex.howToChoose.points.third.text') },
])

useSeoMeta({
  title: computed(() => t('servicesIndex.meta.title')),
  description: computed(() => t('servicesIndex.meta.description')),
})

</script>
