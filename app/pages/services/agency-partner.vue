<template>
  <div v-bind="sx(globalStyles.pageStack)">
    <section v-bind="sx(globalStyles.container, globalStyles.heroSection, globalStyles.gridTwo)">
      <div v-bind="sx(globalStyles.sectionSurface)">
        <p v-bind="sx(globalStyles.eyebrow)">{{ t('servicePages.agencyPartner.hero.eyebrow') }}</p>
        <h1 v-bind="sx(globalStyles.title)">{{ t('servicePages.agencyPartner.hero.title') }}</h1>
        <p v-bind="sx(globalStyles.body)">{{ t('servicePages.agencyPartner.hero.description') }}</p>
        <div v-bind="sx(globalStyles.buttonRow)">
          <NuxtLink :to="localePath('/contact')" v-bind="sx(globalStyles.buttonBase, globalStyles.buttonPrimary)">
            {{ t('servicePages.agencyPartner.hero.primaryCta') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/case-studies')" v-bind="sx(globalStyles.buttonBase, globalStyles.buttonSecondary)">
            {{ t('servicePages.agencyPartner.hero.secondaryCta') }}
          </NuxtLink>
        </div>
      </div>
      <div v-bind="sx(globalStyles.panel, globalStyles.panelStrong, styles.heroPanel)">
        <p v-bind="sx(globalStyles.badge)">{{ t('servicePages.agencyPartner.hero.panelLabel') }}</p>
        <h2 v-bind="sx(globalStyles.sectionTitle)">{{ t('servicePages.agencyPartner.hero.panelTitle') }}</h2>
        <div v-bind="sx(styles.pointList)">
          <div v-for="point in heroPoints" :key="point.label" v-bind="sx(globalStyles.panelInset, styles.pointCard)">
            <p v-bind="sx(globalStyles.meta)">{{ point.label }}</p>
            <p v-bind="sx(globalStyles.body)">{{ point.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <section v-bind="sx(globalStyles.container, globalStyles.section)">
      <SectionHeading
        :eyebrow="t('servicePages.agencyPartner.modes.eyebrow')"
        :title="t('servicePages.agencyPartner.modes.title')"
        :description="t('servicePages.agencyPartner.modes.description')"
      />
      <div v-bind="sx(globalStyles.gridThree)">
        <div v-for="item in modeItems" :key="item.title" v-bind="sx(globalStyles.panel, styles.simpleCard)">
          <p v-bind="sx(globalStyles.meta)">{{ item.label }}</p>
          <h2 v-bind="sx(globalStyles.cardTitle)">{{ item.title }}</h2>
          <p v-bind="sx(globalStyles.body)">{{ item.text }}</p>
        </div>
      </div>
    </section>

    <section v-bind="sx(globalStyles.container, globalStyles.gridTwo)">
      <SectionHeading
        :eyebrow="t('servicePages.agencyPartner.why.eyebrow')"
        :title="t('servicePages.agencyPartner.why.title')"
        :description="t('servicePages.agencyPartner.why.description')"
      />
      <div v-bind="sx(styles.stack)">
        <div v-for="item in whyItems" :key="item.label" v-bind="sx(globalStyles.panel, styles.simpleCard)">
          <p v-bind="sx(globalStyles.meta)">{{ item.label }}</p>
          <p v-bind="sx(globalStyles.body)">{{ item.text }}</p>
        </div>
      </div>
    </section>

    <section v-bind="sx(globalStyles.container, globalStyles.gridTwo)">
      <div v-bind="sx(styles.stack)">
        <SectionHeading
          :eyebrow="t('servicePages.agencyPartner.proof.eyebrow')"
          :title="t('servicePages.agencyPartner.proof.title')"
          :description="t('servicePages.agencyPartner.proof.description')"
        />
        <div v-bind="sx(globalStyles.panel, styles.simpleCard)">
          <p v-bind="sx(globalStyles.body)">{{ t('servicePages.agencyPartner.proof.quote') }}</p>
          <p v-bind="sx(globalStyles.meta)">{{ t('servicePages.agencyPartner.proof.attribution') }}</p>
        </div>
      </div>
      <div v-bind="sx(globalStyles.panel, globalStyles.panelStrong, styles.logoPanel)">
        <p v-bind="sx(globalStyles.meta)">{{ t('servicePages.agencyPartner.proof.logosLabel') }}</p>
        <div v-bind="sx(styles.logoGrid)">
          <span v-for="logo in proofLogos" :key="logo" v-bind="sx(globalStyles.badge)">{{ logo }}</span>
        </div>
      </div>
    </section>

    <section v-bind="sx(globalStyles.container, globalStyles.gridTwo)">
      <SectionHeading
        :eyebrow="t('servicePages.agencyPartner.process.eyebrow')"
        :title="t('servicePages.agencyPartner.process.title')"
        :description="t('servicePages.agencyPartner.process.description')"
      />
      <div v-bind="sx(styles.stack)">
        <div v-for="step in processSteps" :key="step.label" v-bind="sx(globalStyles.panel, styles.processCard)">
          <span v-bind="sx(globalStyles.meta)">{{ step.label }}</span>
          <span v-bind="sx(globalStyles.body)">{{ step.text }}</span>
        </div>
      </div>
    </section>

    <section v-bind="sx(globalStyles.container, globalStyles.gridTwo)">
      <SectionHeading
        :eyebrow="t('servicePages.agencyPartner.faq.eyebrow')"
        :title="t('servicePages.agencyPartner.faq.title')"
        :description="t('servicePages.agencyPartner.faq.description')"
      />
      <div v-bind="sx(styles.stack)">
        <details v-for="faq in faqs" :key="faq.question" v-bind="sx(globalStyles.panel, styles.faqCard)">
          <summary v-bind="sx(globalStyles.cardTitle, styles.faqSummary)">{{ faq.question }}</summary>
          <p v-bind="sx(globalStyles.body)">{{ faq.answer }}</p>
        </details>
      </div>
    </section>

    <section v-bind="sx(globalStyles.container)">
      <div v-bind="sx(globalStyles.panel, globalStyles.panelStrong, styles.finalCta)">
        <div v-bind="sx(styles.stackTight)">
          <p v-bind="sx(globalStyles.eyebrow)">{{ t('servicePages.agencyPartner.finalCta.eyebrow') }}</p>
          <h2 v-bind="sx(globalStyles.sectionTitle)">{{ t('servicePages.agencyPartner.finalCta.title') }}</h2>
          <p v-bind="sx(globalStyles.body)">{{ t('servicePages.agencyPartner.finalCta.description') }}</p>
        </div>
        <NuxtLink :to="localePath('/contact')" v-bind="sx(globalStyles.buttonBase, globalStyles.buttonPrimary)">
          {{ t('servicePages.agencyPartner.finalCta.cta') }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { globalStyles } from '../../styles/system'
import { agencyPartnerPageStyles as styles } from '../../styles/view-styles'
import { sx } from '../../utils/stylex'

const { t } = useI18n()
const localePath = useLocalePath()

const heroPoints = computed(() => [
  { label: t('servicePages.agencyPartner.hero.panelPoints.first.label'), text: t('servicePages.agencyPartner.hero.panelPoints.first.text') },
  { label: t('servicePages.agencyPartner.hero.panelPoints.second.label'), text: t('servicePages.agencyPartner.hero.panelPoints.second.text') },
  { label: t('servicePages.agencyPartner.hero.panelPoints.third.label'), text: t('servicePages.agencyPartner.hero.panelPoints.third.text') },
])

const modeItems = computed(() => [
  { label: t('servicePages.agencyPartner.modes.items.first.label'), title: t('servicePages.agencyPartner.modes.items.first.title'), text: t('servicePages.agencyPartner.modes.items.first.text') },
  { label: t('servicePages.agencyPartner.modes.items.second.label'), title: t('servicePages.agencyPartner.modes.items.second.title'), text: t('servicePages.agencyPartner.modes.items.second.text') },
  { label: t('servicePages.agencyPartner.modes.items.third.label'), title: t('servicePages.agencyPartner.modes.items.third.title'), text: t('servicePages.agencyPartner.modes.items.third.text') },
])

const whyItems = computed(() => [
  { label: t('servicePages.agencyPartner.why.points.first.label'), text: t('servicePages.agencyPartner.why.points.first.text') },
  { label: t('servicePages.agencyPartner.why.points.second.label'), text: t('servicePages.agencyPartner.why.points.second.text') },
  { label: t('servicePages.agencyPartner.why.points.third.label'), text: t('servicePages.agencyPartner.why.points.third.text') },
])

const proofLogos = computed(() => [
  t('servicePages.agencyPartner.proof.logos.first'),
  t('servicePages.agencyPartner.proof.logos.second'),
  t('servicePages.agencyPartner.proof.logos.third'),
  t('servicePages.agencyPartner.proof.logos.fourth'),
])

const processSteps = computed(() => [
  { label: t('servicePages.agencyPartner.process.steps.first.label'), text: t('servicePages.agencyPartner.process.steps.first.text') },
  { label: t('servicePages.agencyPartner.process.steps.second.label'), text: t('servicePages.agencyPartner.process.steps.second.text') },
  { label: t('servicePages.agencyPartner.process.steps.third.label'), text: t('servicePages.agencyPartner.process.steps.third.text') },
])

const faqs = computed(() => [
  { question: t('servicePages.agencyPartner.faq.items.first.question'), answer: t('servicePages.agencyPartner.faq.items.first.answer') },
  { question: t('servicePages.agencyPartner.faq.items.second.question'), answer: t('servicePages.agencyPartner.faq.items.second.answer') },
  { question: t('servicePages.agencyPartner.faq.items.third.question'), answer: t('servicePages.agencyPartner.faq.items.third.answer') },
])

useSeoMeta({
  title: computed(() => t('servicePages.agencyPartner.meta.title')),
  description: computed(() => t('servicePages.agencyPartner.meta.description')),
})

</script>
