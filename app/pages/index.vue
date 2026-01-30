<template>
  <div class="home-stack pb-24">
    <section class="home-hero relative -mt-24 overflow-hidden pt-24">
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

    <section
      class="section-atmosphere atmosphere-hero"
      :style="{
        '--section-wash': sectionWash.founders,
        '--section-lighting': sectionLighting.founders,
        '--section-glow': sectionGlow.founders,
      }"
    >
      <div class="section-shell founders-section grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div class="space-y-6 founders-copy">
          <SectionHeading
            class="founders-heading"
            :eyebrow="t('home.founders.eyebrow')"
            :title="t('home.founders.title')"
            :description="t('home.founders.description')"
          />
          <p class="founders-support text-sm text-slate-300">
            {{ t('home.founders.support') }}
          </p>
          <div class="flex flex-wrap gap-4">
            <NuxtLink :to="localePath('/about')" class="ghost-button founders-cta">{{ t('home.founders.cta') }}</NuxtLink>
          </div>
        </div>
        <div class="founders-cards">
          <article class="founder-card founder-primary">
            <span class="founder-edge" aria-hidden="true" />
            <div class="founder-media">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
                :alt="t('home.founders.people.deniz.name')"
                class="founder-image"
                loading="lazy"
                decoding="async"
              >
            </div>
            <div class="founder-meta">
              <p class="founder-name">{{ t('home.founders.people.deniz.name') }}</p>
              <p class="founder-role">{{ t('home.founders.people.deniz.role') }}</p>
            </div>
          </article>
          <article class="founder-card founder-secondary">
            <span class="founder-edge" aria-hidden="true" />
            <div class="founder-media">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80"
                :alt="t('home.founders.people.jannis.name')"
                class="founder-image"
                loading="lazy"
                decoding="async"
              >
            </div>
            <div class="founder-meta">
              <p class="founder-name">{{ t('home.founders.people.jannis.name') }}</p>
              <p class="founder-role">{{ t('home.founders.people.jannis.role') }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section
      class="section-atmosphere atmosphere-hero"
      :style="{
        '--section-wash': sectionWash.responsibility,
        '--section-lighting': sectionLighting.responsibility,
        '--section-glow': sectionGlow.responsibility,
      }"
    >
      <div class="section-shell grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <SectionHeading
          :eyebrow="t('home.responsibility.eyebrow')"
          :title="t('home.responsibility.title')"
          :description="t('home.responsibility.description')"
        />
        <div class="responsibility-stack">
          <div class="grid gap-4">
            <div class="glass-panel raised p-6 info-card">
              <div class="flex items-center gap-3">
                <span class="icon-orb" aria-hidden="true"><IconCompass class="h-5 w-5" /></span>
                <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('home.responsibility.points.first.label') }}</p>
              </div>
              <p class="mt-3 text-sm text-slate-200">{{ t('home.responsibility.points.first.text') }}</p>
            </div>
            <div class="glass-panel raised p-6 info-card">
              <div class="flex items-center gap-3">
                <span class="icon-orb" aria-hidden="true"><IconShield class="h-5 w-5" /></span>
                <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('home.responsibility.points.second.label') }}</p>
              </div>
              <p class="mt-3 text-sm text-slate-200">{{ t('home.responsibility.points.second.text') }}</p>
            </div>
            <div class="glass-panel raised p-6 info-card">
              <div class="flex items-center gap-3">
                <span class="icon-orb" aria-hidden="true"><IconCare class="h-5 w-5" /></span>
                <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('home.responsibility.points.third.label') }}</p>
              </div>
              <p class="mt-3 text-sm text-slate-200">{{ t('home.responsibility.points.third.text') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <FeatureBillboard
      section-class="atmosphere-hero"
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

    <section
      class="section-atmosphere atmosphere-hero"
      :style="{
        '--section-wash': sectionWash.proof,
        '--section-lighting': sectionLighting.proof,
        '--section-glow': sectionGlow.proof,
      }"
    >
      <div class="section-shell space-y-10">
        <SectionHeading
          :eyebrow="t('home.proof.eyebrow')"
          :title="t('home.proof.title')"
          :description="t('home.proof.description')"
        />
        <div class="proof-grid">
          <div class="grid gap-6 md:grid-cols-3">
            <CaseCard v-for="item in caseStudies" :key="item.id" :item="item" />
          </div>
        </div>
        <div class="proof-marquee">
          <LogoMarquee :label="t('home.proof.logosLabel')" :items="proofLogos" />
        </div>
      </div>
    </section>

    <FeatureBillboard
      section-class="atmosphere-hero"
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

    <section
      class="section-atmosphere atmosphere-hero"
      :style="{
        '--section-wash': sectionWash.approach,
        '--section-lighting': sectionLighting.approach,
        '--section-glow': sectionGlow.approach,
      }"
    >
      <div class="section-shell grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <SectionHeading
          :eyebrow="t('home.approach.eyebrow')"
          :title="t('home.approach.title')"
          :description="t('home.approach.description')"
        />
        <div class="approach-stack">
          <div class="grid gap-4">
            <div class="glass-panel raised p-6 info-card">
              <div class="flex items-center gap-3">
                <span class="icon-orb" aria-hidden="true"><IconFlow class="h-5 w-5" /></span>
                <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('home.approach.steps.first.label') }}</p>
              </div>
              <p class="mt-3 text-sm text-slate-200">{{ t('home.approach.steps.first.text') }}</p>
            </div>
            <div class="glass-panel raised p-6 info-card">
              <div class="flex items-center gap-3">
                <span class="icon-orb" aria-hidden="true"><IconLayers class="h-5 w-5" /></span>
                <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('home.approach.steps.second.label') }}</p>
              </div>
              <p class="mt-3 text-sm text-slate-200">{{ t('home.approach.steps.second.text') }}</p>
            </div>
            <div class="glass-panel raised p-6 info-card">
              <div class="flex items-center gap-3">
                <span class="icon-orb" aria-hidden="true"><IconOrbit class="h-5 w-5" /></span>
                <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('home.approach.steps.third.label') }}</p>
              </div>
              <p class="mt-3 text-sm text-slate-200">{{ t('home.approach.steps.third.text') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="section-atmosphere atmosphere-hero fade-to-footer"
      :style="{
        '--section-wash': sectionWash.services,
        '--section-lighting': sectionLighting.services,
        '--section-glow': sectionGlow.services,
      }"
    >
      <div class="section-shell space-y-10">
        <SectionHeading
          :eyebrow="t('home.services.eyebrow')"
          :title="t('home.services.title')"
          :description="t('home.services.description')"
        />
        <div class="services-rail-wrap">
          <ShowcaseRail :items="showcaseItems" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import IconCare from '~/components/icons/IconCare.vue'
import IconCompass from '~/components/icons/IconCompass.vue'
import IconFlow from '~/components/icons/IconFlow.vue'
import IconLayers from '~/components/icons/IconLayers.vue'
import IconOrbit from '~/components/icons/IconOrbit.vue'
import IconShield from '~/components/icons/IconShield.vue'

const { t, locale } = useI18n()
const localePath = useLocalePath()

const resolvedLocale = computed(() => locale.value || 'de')
const caseStudiesKey = computed(() => `home-case-studies-${resolvedLocale.value}`)
const { data: caseStudies } = await useAsyncData(
  caseStudiesKey,
  () =>
    queryCollection('content')
      .where('path', 'LIKE', `/${resolvedLocale.value}/case-studies/%`)
      .select('id', 'title', 'description', 'path', 'meta')
      .order('path', 'DESC')
      .limit(3)
      .all(),
  { watch: [resolvedLocale], default: () => [] },
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

const sectionLighting = {
  founders:
    'radial-gradient(520px 380px at 24% 92%, rgba(120, 210, 175, 0.1), transparent 72%), radial-gradient(520px 380px at 76% 90%, rgba(90, 180, 140, 0.18), transparent 72%), radial-gradient(420px 320px at 50% 96%, rgba(70, 150, 110, 0.12), transparent 75%)',
  responsibility:
    'radial-gradient(480px 340px at 12% 18%, rgba(125, 205, 175, 0.16), transparent 70%), radial-gradient(520px 380px at 88% 28%, rgba(100, 185, 150, 0.14), transparent 72%), radial-gradient(420px 320px at 45% 92%, rgba(80, 155, 120, 0.12), transparent 74%)',
  proof:
    'radial-gradient(520px 380px at 82% 84%, rgba(120, 205, 175, 0.18), transparent 72%), radial-gradient(420px 320px at 24% 76%, rgba(100, 175, 145, 0.12), transparent 72%), radial-gradient(360px 260px at 50% 10%, rgba(85, 155, 120, 0.1), transparent 72%)',
  approach:
    'radial-gradient(560px 420px at 68% 16%, rgba(120, 210, 175, 0.2), transparent 70%), radial-gradient(520px 380px at 18% 70%, rgba(95, 175, 140, 0.14), transparent 72%), radial-gradient(420px 320px at 80% 88%, rgba(70, 145, 115, 0.12), transparent 75%)',
  services:
    'radial-gradient(520px 380px at 10% 82%, rgba(120, 210, 175, 0.18), transparent 72%), radial-gradient(460px 320px at 86% 12%, rgba(95, 170, 140, 0.12), transparent 70%), radial-gradient(360px 280px at 52% 96%, rgba(70, 145, 115, 0.12), transparent 75%)',
}

const sectionGlow = {
  founders: 'none',
  responsibility: 'none',
  proof: 'none',
  approach: 'none',
  services: 'none',
}

const sectionWash = {
  founders:
    'radial-gradient(in oklch circle at 0% 50%, rgba(140, 255, 200, 0.06) 0%, transparent 58%), radial-gradient(in oklch circle at 100% 50%, rgba(110, 200, 165, 0.06) 0%, transparent 58%)',
  responsibility:
    'radial-gradient(in oklch circle at 12% 18%, rgba(140, 255, 200, 0.05) 0%, transparent 58%), radial-gradient(in oklch circle at 95% 60%, rgba(110, 200, 165, 0.05) 0%, transparent 60%)',
  proof:
    'radial-gradient(in oklch circle at 85% 75%, rgba(140, 255, 200, 0.05) 0%, transparent 58%), radial-gradient(in oklch circle at 8% 55%, rgba(110, 200, 165, 0.05) 0%, transparent 60%)',
  approach:
    'radial-gradient(in oklch circle at 70% 20%, rgba(140, 255, 200, 0.05) 0%, transparent 58%), radial-gradient(in oklch circle at 0% 80%, rgba(110, 200, 165, 0.05) 0%, transparent 60%)',
  services:
    'radial-gradient(in oklch circle at 15% 85%, rgba(140, 255, 200, 0.05) 0%, transparent 58%), radial-gradient(in oklch circle at 92% 10%, rgba(110, 200, 165, 0.05) 0%, transparent 60%)',
}

const metaTitle = computed(() => t('home.meta.title'))
const metaDescription = computed(() => t('home.meta.description'))

useSeoMeta({
  title: metaTitle,
  description: metaDescription,
})
</script>
