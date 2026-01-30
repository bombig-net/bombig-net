<template>
  <div class="space-y-24 pb-24">
    <section class="relative -mt-24 overflow-hidden pt-24">
      <div class="hero-canvas absolute inset-0" aria-hidden="true" />
      <div class="hero-ecg" aria-hidden="true">
        <svg viewBox="0 0 1570 575" preserveAspectRatio="xMidYMid meet" role="presentation">
          <defs>
            <linearGradient id="ecg-stroke" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="rgba(160, 243, 206, 0.2)" />
              <stop offset="22%" stop-color="rgba(160, 243, 206, 0.65)" />
              <stop offset="45%" stop-color="#E2FBDD" />
              <stop offset="62%" stop-color="rgba(160, 243, 206, 0.8)" />
              <stop offset="100%" stop-color="rgba(160, 243, 206, 0.18)" />
            </linearGradient>
          </defs>
          <path
            d="M52.817 352.744 L519.882 352.744 L551.986 259.538 L611.016 522.585 L740.469 51.378 L844.031 471.84 L902.026 355.851 L1520.291 352.744"
            fill="none"
            stroke="url(#ecg-stroke)"
            stroke-width="16"
            stroke-linecap="round"
            stroke-linejoin="round"
            pathLength="1000"
            class="ecg-line"
          />
          <path
            d="M52.817 352.744 L519.882 352.744 L551.986 259.538 L611.016 522.585 L740.469 51.378 L844.031 471.84 L902.026 355.851 L1520.291 352.744"
            fill="none"
            stroke="rgba(160, 247, 213, 0.75)"
            stroke-width="24"
            stroke-linecap="round"
            stroke-linejoin="round"
            pathLength="1000"
            class="ecg-glow"
          />
        </svg>
      </div>
      <div class="section-shell relative flex min-h-[calc(100svh-6rem)] flex-col justify-end pb-16 pt-12">
        <div class="max-w-3xl space-y-6">
          <h1 class="hero-title text-4xl sm:text-5xl md:text-7xl">{{ t('home.hero.title') }}</h1>
          <div class="flex flex-wrap gap-4">
          <NuxtLink :to="localePath('/services')" class="hero-cta">{{ t('home.hero.primaryCta') }}</NuxtLink>
            <NuxtLink :to="localePath('/about')" class="ghost-button">{{ t('home.hero.secondaryCta') }}</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="section-shell atmosphere-a grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
      <SectionHeading
        :eyebrow="t('home.responsibility.eyebrow')"
        :title="t('home.responsibility.title')"
        :description="t('home.responsibility.description')"
      />
      <div class="grid gap-4">
        <div class="glass-panel raised p-6">
          <div class="flex items-center gap-3">
            <span class="icon-orb" aria-hidden="true"><IconCompass class="h-5 w-5" /></span>
            <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('home.responsibility.points.first.label') }}</p>
          </div>
          <p class="mt-3 text-sm text-slate-200">{{ t('home.responsibility.points.first.text') }}</p>
        </div>
        <div class="glass-panel raised p-6">
          <div class="flex items-center gap-3">
            <span class="icon-orb" aria-hidden="true"><IconShield class="h-5 w-5" /></span>
            <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('home.responsibility.points.second.label') }}</p>
          </div>
          <p class="mt-3 text-sm text-slate-200">{{ t('home.responsibility.points.second.text') }}</p>
        </div>
        <div class="glass-panel raised p-6">
          <div class="flex items-center gap-3">
            <span class="icon-orb" aria-hidden="true"><IconCare class="h-5 w-5" /></span>
            <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('home.responsibility.points.third.label') }}</p>
          </div>
          <p class="mt-3 text-sm text-slate-200">{{ t('home.responsibility.points.third.text') }}</p>
        </div>
      </div>
    </section>

    <section class="section-shell atmosphere-b grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
      <SectionHeading
        :eyebrow="t('home.founders.eyebrow')"
        :title="t('home.founders.title')"
        :description="t('home.founders.description')"
      />
      <div class="grid gap-4 sm:grid-cols-2">
        <div class="glass-panel raised p-6">
          <p class="text-lg font-semibold">{{ t('home.founders.people.deniz.name') }}</p>
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('home.founders.people.deniz.role') }}</p>
          <p class="mt-3 text-sm text-slate-200">{{ t('home.founders.people.deniz.focus') }}</p>
        </div>
        <div class="glass-panel raised p-6">
          <p class="text-lg font-semibold">{{ t('home.founders.people.jannis.name') }}</p>
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('home.founders.people.jannis.role') }}</p>
          <p class="mt-3 text-sm text-slate-200">{{ t('home.founders.people.jannis.focus') }}</p>
        </div>
      </div>
    </section>

    <FeatureBillboard
      :eyebrow="billboards.first.eyebrow"
      :title="billboards.first.title"
      :description="billboards.first.description"
      :bullets="billboards.first.bullets"
      :cta-label="billboards.first.ctaLabel"
      :cta-to="billboards.first.ctaTo"
      :secondary-label="billboards.first.secondaryLabel"
      :secondary-to="billboards.first.secondaryTo"
      :panel-label="billboards.first.panelLabel"
      :panel-text="billboards.first.panelText"
    />

    <section class="section-shell atmosphere-c space-y-10">
      <SectionHeading
        :eyebrow="t('home.proof.eyebrow')"
        :title="t('home.proof.title')"
        :description="t('home.proof.description')"
      />
      <div class="grid gap-6 md:grid-cols-3">
        <CaseCard v-for="item in caseStudies" :key="item.id" :item="item" />
      </div>
      <LogoMarquee :label="t('home.proof.logosLabel')" :items="proofLogos" />
    </section>

    <FeatureBillboard
      align="right"
      :eyebrow="billboards.second.eyebrow"
      :title="billboards.second.title"
      :description="billboards.second.description"
      :bullets="billboards.second.bullets"
      :cta-label="billboards.second.ctaLabel"
      :cta-to="billboards.second.ctaTo"
      :secondary-label="billboards.second.secondaryLabel"
      :secondary-to="billboards.second.secondaryTo"
      :panel-label="billboards.second.panelLabel"
      :panel-text="billboards.second.panelText"
    />

    <section class="section-shell atmosphere-a grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
      <SectionHeading
        :eyebrow="t('home.approach.eyebrow')"
        :title="t('home.approach.title')"
        :description="t('home.approach.description')"
      />
      <div class="grid gap-4">
        <div class="glass-panel raised p-6">
          <div class="flex items-center gap-3">
            <span class="icon-orb" aria-hidden="true"><IconFlow class="h-5 w-5" /></span>
            <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('home.approach.steps.first.label') }}</p>
          </div>
          <p class="mt-3 text-sm text-slate-200">{{ t('home.approach.steps.first.text') }}</p>
        </div>
        <div class="glass-panel raised p-6">
          <div class="flex items-center gap-3">
            <span class="icon-orb" aria-hidden="true"><IconLayers class="h-5 w-5" /></span>
            <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('home.approach.steps.second.label') }}</p>
          </div>
          <p class="mt-3 text-sm text-slate-200">{{ t('home.approach.steps.second.text') }}</p>
        </div>
        <div class="glass-panel raised p-6">
          <div class="flex items-center gap-3">
            <span class="icon-orb" aria-hidden="true"><IconOrbit class="h-5 w-5" /></span>
            <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('home.approach.steps.third.label') }}</p>
          </div>
          <p class="mt-3 text-sm text-slate-200">{{ t('home.approach.steps.third.text') }}</p>
        </div>
      </div>
    </section>

    <section class="section-shell atmosphere-b space-y-10">
      <SectionHeading
        :eyebrow="t('home.services.eyebrow')"
        :title="t('home.services.title')"
        :description="t('home.services.description')"
      />
      <ShowcaseRail :items="showcaseItems" />
    </section>
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()

const { data: caseStudies } = await useAsyncData(
  'home-case-studies',
  () =>
    queryCollection('content')
      .where('path', 'LIKE', `/${locale.value}/case-studies/%`)
      .select('id', 'title', 'description', 'path', 'meta')
      .order('path', 'DESC')
      .limit(3)
      .all(),
  { watch: [locale] },
)

const proofLogos = computed(() => [
  t('home.proof.logos.first'),
  t('home.proof.logos.second'),
  t('home.proof.logos.third'),
  t('home.proof.logos.fourth'),
])

const showcaseItems = computed(() => [
  {
    key: 'educationResearch',
    to: '/services/education-research',
    eyebrow: t('home.services.items.educationResearch.eyebrow'),
    title: t('home.services.items.educationResearch.title'),
    description: t('home.services.items.educationResearch.description'),
    cta: t('home.services.items.educationResearch.cta'),
  },
  {
    key: 'agencyPartner',
    to: '/services/agency-partner',
    eyebrow: t('home.services.items.agencyPartner.eyebrow'),
    title: t('home.services.items.agencyPartner.title'),
    description: t('home.services.items.agencyPartner.description'),
    cta: t('home.services.items.agencyPartner.cta'),
  },
  {
    key: 'smbFlatFee',
    to: '/services/smb-flat-fee',
    eyebrow: t('home.services.items.smbFlatFee.eyebrow'),
    title: t('home.services.items.smbFlatFee.title'),
    description: t('home.services.items.smbFlatFee.description'),
    cta: t('home.services.items.smbFlatFee.cta'),
  },
])

const billboards = computed(() => ({
  first: {
    eyebrow: t('home.billboards.first.eyebrow'),
    title: t('home.billboards.first.title'),
    description: t('home.billboards.first.description'),
    bullets: [
      t('home.billboards.first.bullets.first'),
      t('home.billboards.first.bullets.second'),
      t('home.billboards.first.bullets.third'),
    ],
    ctaLabel: t('home.billboards.first.cta'),
    ctaTo: '/contact',
    secondaryLabel: t('home.billboards.first.secondary'),
    secondaryTo: '/case-studies',
    panelLabel: t('home.billboards.first.panel.label'),
    panelText: t('home.billboards.first.panel.text'),
  },
  second: {
    eyebrow: t('home.billboards.second.eyebrow'),
    title: t('home.billboards.second.title'),
    description: t('home.billboards.second.description'),
    bullets: [
      t('home.billboards.second.bullets.first'),
      t('home.billboards.second.bullets.second'),
      t('home.billboards.second.bullets.third'),
    ],
    ctaLabel: t('home.billboards.second.cta'),
    ctaTo: '/services',
    secondaryLabel: t('home.billboards.second.secondary'),
    secondaryTo: '/contact',
    panelLabel: t('home.billboards.second.panel.label'),
    panelText: t('home.billboards.second.panel.text'),
  },
}))

const metaTitle = computed(() => t('home.meta.title'))
const metaDescription = computed(() => t('home.meta.description'))

useSeoMeta({
  title: metaTitle,
  description: metaDescription,
})
</script>
