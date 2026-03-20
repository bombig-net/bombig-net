<template>
  <div v-bind="sx(globalStyles.pageStack)">
    <section v-bind="sx(globalStyles.container, globalStyles.heroSection, globalStyles.gridTwo)">
      <div v-bind="sx(globalStyles.sectionSurface)">
        <p v-bind="sx(globalStyles.eyebrow)">{{ t('home.hero.eyebrow') }}</p>
        <h1 v-bind="sx(globalStyles.title)">{{ t('home.hero.title') }}</h1>
        <p v-bind="sx(globalStyles.body, styles.heroCopy)">{{ t('home.hero.description') }}</p>
        <div v-bind="sx(globalStyles.buttonRow)">
          <NuxtLink :to="localePath('/services')" v-bind="sx(globalStyles.buttonBase, globalStyles.buttonPrimary)">
            {{ t('home.hero.primaryCta') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/about')" v-bind="sx(globalStyles.buttonBase, globalStyles.buttonSecondary)">
            {{ t('home.hero.secondaryCta') }}
          </NuxtLink>
        </div>
      </div>

      <div v-bind="sx(globalStyles.panel, globalStyles.panelStrong, styles.heroPanel)">
        <p v-bind="sx(globalStyles.eyebrow)">{{ t('home.cta.panel.label') }}</p>
        <p v-bind="sx(globalStyles.sectionTitle, styles.panelTitle)">{{ t('home.hero.panel.title') }}</p>
        <p v-bind="sx(globalStyles.body)">{{ t('home.hero.panel.description') }}</p>
        <div v-bind="sx(styles.pointList)">
          <div v-for="point in responsibilityPoints" :key="point.label" v-bind="sx(globalStyles.panelInset, styles.pointCard)">
            <p v-bind="sx(globalStyles.meta)">{{ point.label }}</p>
            <p v-bind="sx(globalStyles.body)">{{ point.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <section v-bind="sx(globalStyles.container, globalStyles.section)">
      <SectionHeading
        :eyebrow="t('home.services.eyebrow')"
        :title="t('home.services.title')"
        :description="t('home.services.description')"
      />
      <div v-bind="sx(globalStyles.gridThree)">
        <NuxtLink
          v-for="service in serviceCards"
          :key="service.id"
          :to="localePath(service.path)"
          v-bind="sx(globalStyles.panel, styles.serviceCard)"
        >
          <div v-bind="sx(styles.serviceCardBody)">
            <span v-bind="sx(globalStyles.badge)">{{ t(`${service.homeKey}.eyebrow`) }}</span>
            <h2 v-bind="sx(globalStyles.cardTitle)">{{ t(`${service.homeKey}.title`) }}</h2>
            <p v-bind="sx(globalStyles.body)">{{ t(`${service.homeKey}.description`) }}</p>
          </div>
          <span v-bind="sx(globalStyles.meta)">{{ t(`${service.homeKey}.cta`) }}</span>
        </NuxtLink>
      </div>
    </section>

    <section v-bind="sx(globalStyles.container, globalStyles.section, styles.logoSection)">
      <SectionHeading
        :eyebrow="t('home.logos.eyebrow')"
        :title="t('home.logos.title')"
        :description="t('home.logos.description')"
      />
      <div v-bind="sx(globalStyles.gridCards)">
        <div v-for="logo in proofLogos" :key="logo" v-bind="sx(globalStyles.panel, styles.logoCard)">
          <span v-bind="sx(globalStyles.meta)">{{ logo }}</span>
        </div>
      </div>
    </section>

    <section v-bind="sx(globalStyles.container, globalStyles.gridTwo)">
      <SectionHeading
        :eyebrow="t('home.founders.eyebrow')"
        :title="t('home.founders.title')"
        :description="t('home.founders.description')"
      />
      <div v-bind="sx(styles.foundersColumn)">
        <div v-for="founder in founders" :key="founder.name" v-bind="sx(globalStyles.panel, styles.founderCard)">
          <p v-bind="sx(globalStyles.cardTitle)">{{ founder.name }}</p>
          <p v-bind="sx(globalStyles.meta)">{{ founder.role }}</p>
          <p v-bind="sx(globalStyles.body)">{{ founder.focus }}</p>
        </div>
        <NuxtLink :to="localePath('/about')" v-bind="sx(globalStyles.buttonBase, globalStyles.buttonSecondary, styles.inlineButton)">
          {{ t('home.founders.cta') }}
        </NuxtLink>
      </div>
    </section>

    <section v-bind="sx(globalStyles.container, globalStyles.section)">
      <div v-bind="sx(styles.blogHeader)">
        <SectionHeading
          :eyebrow="t('home.blog.eyebrow')"
          :title="t('home.blog.title')"
          :description="t('home.blog.description')"
        />
        <NuxtLink :to="localePath('/blog')" v-bind="sx(globalStyles.buttonBase, globalStyles.buttonSecondary, styles.inlineButton)">
          {{ t('home.blog.cta') }}
        </NuxtLink>
      </div>
      <div v-bind="sx(globalStyles.gridCards)">
        <PostCard v-for="item in posts" :key="item.id" :item="item" />
      </div>
    </section>

    <CalloutPanel />
  </div>
</template>

<script setup lang="ts">
import { SERVICE_DEFINITIONS } from '~~/shared/contracts/services'
import { globalStyles } from '../styles/system'
import { homePageStyles as styles } from '../styles/view-styles'
import { sx } from '../utils/stylex'

const { t, locale } = useI18n()
const localePath = useLocalePath()

const resolvedLocale = computed(() => locale.value || 'de')
const postsKey = computed(() => `home-posts-${resolvedLocale.value}`)
const { data: posts } = await useAsyncData(
  postsKey,
  () =>
    queryCollection('blog')
      .where('path', 'LIKE', `/${resolvedLocale.value}/blog/%`)
      .select('id', 'title', 'description', 'path', 'meta')
      .order('path', 'DESC')
      .limit(4)
      .all(),
  { watch: [resolvedLocale], default: () => [] },
)

const responsibilityPoints = computed(() => [
  { label: t('home.hero.panel.points.first.label'), text: t('home.hero.panel.points.first.text') },
  { label: t('home.hero.panel.points.second.label'), text: t('home.hero.panel.points.second.text') },
  { label: t('home.hero.panel.points.third.label'), text: t('home.hero.panel.points.third.text') },
])

const serviceCards = SERVICE_DEFINITIONS.map((service) => ({
  id: service.id,
  path: service.routePath,
  homeKey: service.homeKey,
}))

const proofLogos = computed(() => [
  t('home.logos.items.first'),
  t('home.logos.items.second'),
  t('home.logos.items.third'),
  t('home.logos.items.fourth'),
])

const founders = computed(() => [
  {
    name: t('home.founders.people.deniz.name'),
    role: t('home.founders.people.deniz.role'),
    focus: t('home.founders.people.deniz.focus'),
  },
  {
    name: t('home.founders.people.jannis.name'),
    role: t('home.founders.people.jannis.role'),
    focus: t('home.founders.people.jannis.focus'),
  },
])

useSeoMeta({
  title: computed(() => t('home.meta.title')),
  description: computed(() => t('home.meta.description')),
})

</script>
