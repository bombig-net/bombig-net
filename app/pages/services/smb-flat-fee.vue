<template>
  <div v-bind="sx(globalStyles.pageStack)">
    <section v-bind="sx(globalStyles.container, globalStyles.heroSection, globalStyles.gridTwo)">
      <div v-bind="sx(globalStyles.sectionSurface)">
        <p v-bind="sx(globalStyles.eyebrow)">{{ t('servicePages.smbFlatFee.hero.eyebrow') }}</p>
        <h1 v-bind="sx(globalStyles.title)">{{ t('servicePages.smbFlatFee.hero.title') }}</h1>
        <p v-bind="sx(globalStyles.body)">{{ t('servicePages.smbFlatFee.hero.description') }}</p>
        <div v-bind="sx(globalStyles.buttonRow)">
          <NuxtLink :to="localePath('/contact')" v-bind="sx(globalStyles.buttonBase, globalStyles.buttonPrimary)">
            {{ t('servicePages.smbFlatFee.hero.primaryCta') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/case-studies')" v-bind="sx(globalStyles.buttonBase, globalStyles.buttonSecondary)">
            {{ t('servicePages.smbFlatFee.hero.secondaryCta') }}
          </NuxtLink>
        </div>
      </div>
      <div v-bind="sx(globalStyles.panel, globalStyles.panelStrong, styles.heroPanel)">
        <p v-bind="sx(globalStyles.badge)">{{ t('servicePages.smbFlatFee.hero.priceLabel') }}</p>
        <h2 v-bind="sx(globalStyles.sectionTitle)">{{ t('servicePages.smbFlatFee.hero.priceValue') }}</h2>
        <p v-bind="sx(globalStyles.body)">{{ t('servicePages.smbFlatFee.hero.priceNote') }}</p>
        <div v-bind="sx(globalStyles.panelInset, styles.promiseCard)">
          <p v-bind="sx(globalStyles.meta)">{{ t('servicePages.smbFlatFee.hero.promiseLabel') }}</p>
          <p v-bind="sx(globalStyles.body)">{{ t('servicePages.smbFlatFee.hero.promiseText') }}</p>
        </div>
      </div>
    </section>

    <section v-bind="sx(globalStyles.container, globalStyles.section)">
      <SectionHeading
        :eyebrow="t('servicePages.smbFlatFee.included.eyebrow')"
        :title="t('servicePages.smbFlatFee.included.title')"
        :description="t('servicePages.smbFlatFee.included.description')"
      />
      <div v-bind="sx(globalStyles.gridThree)">
        <div v-for="item in includedItems" :key="item.title" v-bind="sx(globalStyles.panel, styles.simpleCard)">
          <p v-bind="sx(globalStyles.meta)">{{ item.label }}</p>
          <h2 v-bind="sx(globalStyles.cardTitle)">{{ item.title }}</h2>
          <p v-bind="sx(globalStyles.body)">{{ item.text }}</p>
        </div>
      </div>
    </section>

    <section v-bind="sx(globalStyles.container, globalStyles.gridTwo)">
      <SectionHeading
        :eyebrow="t('servicePages.smbFlatFee.boundaries.eyebrow')"
        :title="t('servicePages.smbFlatFee.boundaries.title')"
        :description="t('servicePages.smbFlatFee.boundaries.description')"
      />
      <div v-bind="sx(styles.stack)">
        <div v-for="item in boundaryItems" :key="item.label" v-bind="sx(globalStyles.panel, styles.simpleCard)">
          <p v-bind="sx(globalStyles.meta)">{{ item.label }}</p>
          <p v-bind="sx(globalStyles.body)">{{ item.text }}</p>
        </div>
      </div>
    </section>

    <section v-bind="sx(globalStyles.container, globalStyles.gridTwo)">
      <div v-bind="sx(styles.stack)">
        <SectionHeading
          :eyebrow="t('servicePages.smbFlatFee.proof.eyebrow')"
          :title="t('servicePages.smbFlatFee.proof.title')"
          :description="t('servicePages.smbFlatFee.proof.description')"
        />
        <div v-bind="sx(globalStyles.panel, styles.simpleCard)">
          <p v-bind="sx(globalStyles.body)">{{ t('servicePages.smbFlatFee.proof.quote') }}</p>
          <p v-bind="sx(globalStyles.meta)">{{ t('servicePages.smbFlatFee.proof.attribution') }}</p>
        </div>
      </div>
      <div v-bind="sx(globalStyles.panel, globalStyles.panelStrong, styles.logoPanel)">
        <p v-bind="sx(globalStyles.meta)">{{ t('servicePages.smbFlatFee.proof.logosLabel') }}</p>
        <div v-bind="sx(styles.logoGrid)">
          <span v-for="logo in proofLogos" :key="logo" v-bind="sx(globalStyles.badge)">{{ logo }}</span>
        </div>
      </div>
    </section>

    <section v-bind="sx(globalStyles.container, globalStyles.gridTwo)">
      <SectionHeading
        :eyebrow="t('servicePages.smbFlatFee.process.eyebrow')"
        :title="t('servicePages.smbFlatFee.process.title')"
        :description="t('servicePages.smbFlatFee.process.description')"
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
        :eyebrow="t('servicePages.smbFlatFee.faq.eyebrow')"
        :title="t('servicePages.smbFlatFee.faq.title')"
        :description="t('servicePages.smbFlatFee.faq.description')"
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
          <p v-bind="sx(globalStyles.eyebrow)">{{ t('servicePages.smbFlatFee.finalCta.eyebrow') }}</p>
          <h2 v-bind="sx(globalStyles.sectionTitle)">{{ t('servicePages.smbFlatFee.finalCta.title') }}</h2>
          <p v-bind="sx(globalStyles.body)">{{ t('servicePages.smbFlatFee.finalCta.description') }}</p>
        </div>
        <NuxtLink :to="localePath('/contact')" v-bind="sx(globalStyles.buttonBase, globalStyles.buttonPrimary)">
          {{ t('servicePages.smbFlatFee.finalCta.cta') }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { globalStyles } from '../../styles/system'
import { smbFlatFeePageStyles as styles } from '../../styles/view-styles'
import { sx } from '../../utils/stylex'

const { t } = useI18n()
const localePath = useLocalePath()

const includedItems = computed(() => [
  { label: t('servicePages.smbFlatFee.included.items.first.label'), title: t('servicePages.smbFlatFee.included.items.first.title'), text: t('servicePages.smbFlatFee.included.items.first.text') },
  { label: t('servicePages.smbFlatFee.included.items.second.label'), title: t('servicePages.smbFlatFee.included.items.second.title'), text: t('servicePages.smbFlatFee.included.items.second.text') },
  { label: t('servicePages.smbFlatFee.included.items.third.label'), title: t('servicePages.smbFlatFee.included.items.third.title'), text: t('servicePages.smbFlatFee.included.items.third.text') },
])

const boundaryItems = computed(() => [
  { label: t('servicePages.smbFlatFee.boundaries.points.first.label'), text: t('servicePages.smbFlatFee.boundaries.points.first.text') },
  { label: t('servicePages.smbFlatFee.boundaries.points.second.label'), text: t('servicePages.smbFlatFee.boundaries.points.second.text') },
  { label: t('servicePages.smbFlatFee.boundaries.points.third.label'), text: t('servicePages.smbFlatFee.boundaries.points.third.text') },
])

const proofLogos = computed(() => [
  t('servicePages.smbFlatFee.proof.logos.first'),
  t('servicePages.smbFlatFee.proof.logos.second'),
  t('servicePages.smbFlatFee.proof.logos.third'),
  t('servicePages.smbFlatFee.proof.logos.fourth'),
])

const processSteps = computed(() => [
  { label: t('servicePages.smbFlatFee.process.steps.first.label'), text: t('servicePages.smbFlatFee.process.steps.first.text') },
  { label: t('servicePages.smbFlatFee.process.steps.second.label'), text: t('servicePages.smbFlatFee.process.steps.second.text') },
  { label: t('servicePages.smbFlatFee.process.steps.third.label'), text: t('servicePages.smbFlatFee.process.steps.third.text') },
])

const faqs = computed(() => [
  { question: t('servicePages.smbFlatFee.faq.items.first.question'), answer: t('servicePages.smbFlatFee.faq.items.first.answer') },
  { question: t('servicePages.smbFlatFee.faq.items.second.question'), answer: t('servicePages.smbFlatFee.faq.items.second.answer') },
  { question: t('servicePages.smbFlatFee.faq.items.third.question'), answer: t('servicePages.smbFlatFee.faq.items.third.answer') },
])

useSeoMeta({
  title: computed(() => t('servicePages.smbFlatFee.meta.title')),
  description: computed(() => t('servicePages.smbFlatFee.meta.description')),
})

</script>
