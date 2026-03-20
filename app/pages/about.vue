<template>
  <div v-bind="sx(globalStyles.pageStack)">
    <section v-bind="sx(globalStyles.container, globalStyles.heroSection, globalStyles.sectionSurface)">
      <p v-bind="sx(globalStyles.eyebrow)">{{ t('about.hero.eyebrow') }}</p>
      <h1 v-bind="sx(globalStyles.title)">{{ t('about.hero.title') }}</h1>
      <p v-bind="sx(globalStyles.body, styles.copy)">{{ t('about.hero.description') }}</p>
      <p v-bind="sx(globalStyles.meta)">{{ t('about.hero.subline') }}</p>
    </section>

    <section v-bind="sx(globalStyles.container, globalStyles.gridTwo)">
      <SectionHeading
        :eyebrow="t('about.systemVisual.eyebrow')"
        :title="t('about.systemVisual.headline')"
        :description="t('about.systemVisual.intro')"
      />
      <div v-bind="sx(globalStyles.panel, globalStyles.panelStrong, styles.systemPanel)">
        <div v-bind="sx(styles.systemGrid)">
          <div v-for="label in systemLabels" :key="label" v-bind="sx(globalStyles.panelInset, styles.systemNode)">
            <span v-bind="sx(globalStyles.meta)">{{ label }}</span>
          </div>
        </div>
        <p v-bind="sx(globalStyles.body)">{{ t('about.systemVisual.thesis') }}</p>
      </div>
    </section>

    <section v-bind="sx(globalStyles.container, globalStyles.section)">
      <SectionHeading
        :eyebrow="t('about.mechanics.eyebrow')"
        :title="t('about.mechanics.title')"
        :description="t('about.mechanics.description')"
      />
      <div v-bind="sx(globalStyles.gridCards)">
        <div v-for="item in mechanicsItems" :key="item.label" v-bind="sx(globalStyles.panel, styles.simpleCard)">
          <p v-bind="sx(globalStyles.meta)">{{ item.label }}</p>
          <p v-bind="sx(globalStyles.body)">{{ item.text }}</p>
        </div>
      </div>
    </section>

    <section v-bind="sx(globalStyles.container, globalStyles.gridTwo)">
      <SectionHeading
        :eyebrow="t('about.responsibility.eyebrow')"
        :title="t('about.responsibility.title')"
        :description="t('about.responsibility.description')"
      />
      <div v-bind="sx(styles.stack)">
        <div v-for="item in responsibilityItems" :key="item.label" v-bind="sx(globalStyles.panel, styles.simpleCard)">
          <p v-bind="sx(globalStyles.meta)">{{ item.label }}</p>
          <p v-bind="sx(globalStyles.body)">{{ item.text }}</p>
        </div>
      </div>
    </section>

    <section v-bind="sx(globalStyles.container, globalStyles.section)">
      <SectionHeading
        :eyebrow="t('about.structure.eyebrow')"
        :title="t('about.structure.title')"
        :description="t('about.structure.description')"
      />
      <div v-bind="sx(globalStyles.gridThree)">
        <div v-for="item in structureItems" :key="item.title" v-bind="sx(globalStyles.panel, styles.simpleCard)">
          <p v-bind="sx(globalStyles.meta)">{{ item.label }}</p>
          <h2 v-bind="sx(globalStyles.cardTitle)">{{ item.title }}</h2>
          <p v-bind="sx(globalStyles.body)">{{ item.text }}</p>
        </div>
      </div>
    </section>

    <section v-bind="sx(globalStyles.container, globalStyles.gridTwo)">
      <SectionHeading
        :eyebrow="t('about.founders.eyebrow')"
        :title="t('about.founders.title')"
        :description="t('about.founders.description')"
      />
      <div v-bind="sx(styles.stack)">
        <div v-for="founder in founders" :key="founder.name" v-bind="sx(globalStyles.panel, styles.simpleCard)">
          <h2 v-bind="sx(globalStyles.cardTitle)">{{ founder.name }}</h2>
          <p v-bind="sx(globalStyles.meta)">{{ founder.role }}</p>
          <p v-bind="sx(globalStyles.body)">{{ founder.ownership }}</p>
          <div v-bind="sx(styles.stackTight)">
            <span v-bind="sx(globalStyles.meta)">{{ founder.proofLabel }}</span>
            <p v-bind="sx(globalStyles.body)">{{ founder.proof }}</p>
          </div>
        </div>
      </div>
    </section>

    <section v-bind="sx(globalStyles.container, globalStyles.gridTwo)">
      <SectionHeading
        :eyebrow="t('about.guardrails.eyebrow')"
        :title="t('about.guardrails.title')"
        :description="t('about.guardrails.description')"
      />
      <ul v-bind="sx(globalStyles.panel, styles.guardrails)">
        <li v-for="item in guardrails" :key="item" v-bind="sx(globalStyles.body)">{{ item }}</li>
      </ul>
    </section>

    <section v-bind="sx(globalStyles.container)">
      <p v-bind="sx(globalStyles.body, styles.closing)">
        {{ t('about.closing.text') }}
        <NuxtLink :to="localePath('/contact')" v-bind="sx(globalStyles.anchorReset, styles.inlineLink)">
          {{ t('about.closing.linkLabel') }}
        </NuxtLink>
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { globalStyles } from '../styles/system'
import { aboutPageStyles as styles } from '../styles/view-styles'
import { sx } from '../utils/stylex'

const { t } = useI18n()
const localePath = useLocalePath()

const systemLabels = computed(() => [
  t('about.systemVisual.nodes.positioning'),
  t('about.systemVisual.nodes.quality'),
  t('about.systemVisual.nodes.constraints'),
  t('about.systemVisual.nodes.continuity'),
  t('about.systemVisual.nodes.accountability'),
  t('about.systemVisual.nodes.delivery'),
])

const mechanicsItems = computed(() => [
  { label: t('about.mechanics.items.first.label'), text: t('about.mechanics.items.first.text') },
  { label: t('about.mechanics.items.second.label'), text: t('about.mechanics.items.second.text') },
  { label: t('about.mechanics.items.third.label'), text: t('about.mechanics.items.third.text') },
  { label: t('about.mechanics.items.fourth.label'), text: t('about.mechanics.items.fourth.text') },
])

const responsibilityItems = computed(() => [
  { label: t('about.responsibility.items.first.label'), text: t('about.responsibility.items.first.text') },
  { label: t('about.responsibility.items.second.label'), text: t('about.responsibility.items.second.text') },
  { label: t('about.responsibility.items.third.label'), text: t('about.responsibility.items.third.text') },
  { label: t('about.responsibility.items.fourth.label'), text: t('about.responsibility.items.fourth.text') },
])

const structureItems = computed(() => [
  {
    label: t('about.structure.items.first.label'),
    title: t('about.structure.items.first.title'),
    text: t('about.structure.items.first.text'),
  },
  {
    label: t('about.structure.items.second.label'),
    title: t('about.structure.items.second.title'),
    text: t('about.structure.items.second.text'),
  },
  {
    label: t('about.structure.items.third.label'),
    title: t('about.structure.items.third.title'),
    text: t('about.structure.items.third.text'),
  },
])

const founders = computed(() => [
  {
    name: t('about.founders.items.first.name'),
    role: t('about.founders.items.first.role'),
    ownership: t('about.founders.items.first.ownership'),
    proofLabel: t('about.founders.items.first.proofLabel'),
    proof: t('about.founders.items.first.proof'),
  },
  {
    name: t('about.founders.items.second.name'),
    role: t('about.founders.items.second.role'),
    ownership: t('about.founders.items.second.ownership'),
    proofLabel: t('about.founders.items.second.proofLabel'),
    proof: t('about.founders.items.second.proof'),
  },
])

const guardrails = computed(() => [
  t('about.guardrails.items.first'),
  t('about.guardrails.items.second'),
  t('about.guardrails.items.third'),
  t('about.guardrails.items.fourth'),
  t('about.guardrails.items.fifth'),
])

useSeoMeta({
  title: computed(() => t('about.meta.title')),
  description: computed(() => t('about.meta.description')),
})

</script>
