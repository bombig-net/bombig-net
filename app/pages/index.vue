<template>
  <div class="home-stack">
    <section class="home-hero relative -mt-24 overflow-hidden pt-24">
      <div class="hero-canvas absolute inset-0" aria-hidden="true" />
      <div class="hero-ecg" aria-hidden="true">
        <svg viewBox="-50 -50 1670 675" preserveAspectRatio="xMidYMid meet" role="presentation" style="overflow: visible;">
          <defs>
            <linearGradient id="ecg-stroke" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="rgba(160, 243, 206, 0.2)" />
              <stop offset="22%" stop-color="rgba(160, 243, 206, 0.65)" />
              <stop offset="45%" stop-color="#E2FBDD" />
              <stop offset="62%" stop-color="rgba(160, 243, 206, 0.8)" />
              <stop offset="100%" stop-color="rgba(160, 243, 206, 0.18)" />
            </linearGradient>
            <filter id="ecg-blur" x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" color-interpolation-filters="sRGB">
              <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur1" />
              <feGaussianBlur in="SourceGraphic" stdDeviation="28" result="blur2" />
              <feGaussianBlur in="SourceGraphic" stdDeviation="56" result="blur3" />
              <feMerge>
                <feMergeNode in="blur3" />
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g filter="url(#ecg-blur)">
            <path
              d="M52.817 352.744 L519.882 352.744 L551.986 259.538 L611.016 522.585 L740.469 51.378 L844.031 471.84 L902.026 355.851 L1520.291 352.744"
              fill="none"
              stroke="rgba(160, 247, 213, 0.4)"
              stroke-width="32"
              stroke-linecap="round"
              stroke-linejoin="round"
              pathLength="1000"
              class="ecg-glow"
            />
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
          </g>
        </svg>
      </div>
      <div class="home-hero-shell mx-auto w-full max-w-6xl px-6 relative flex min-h-[calc(100svh-6rem)] flex-col justify-end pb-16 pt-12">
        <div class="max-w-3xl space-y-6">
          <h1 class="hero-title headline-effect text-4xl sm:text-5xl md:text-7xl stagger-in stagger-1">{{ t('home.hero.title') }}</h1>
          <div class="flex flex-wrap gap-4 stagger-in stagger-2">
          <NuxtLink :to="localePath('/services')" class="cta-button">{{ t('home.hero.primaryCta') }}</NuxtLink>
            <NuxtLink :to="localePath('/about')" class="ghost-button">{{ t('home.hero.secondaryCta') }}</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="section-atmosphere atmosphere-hero atmo-services">
      <div class="mx-auto w-full max-w-6xl px-6 space-y-10">
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

    <section class="section-atmosphere atmosphere-hero atmo-logos">
      <div class="mx-auto w-full max-w-6xl px-6">
        <LogoMarquee class="py-4" :label="t('home.logos.label')" :items="proofLogos" />
      </div>
    </section>

    <section class="section-atmosphere atmosphere-hero atmo-founders">
      <div class="mx-auto w-full max-w-6xl px-6 founders-section grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div class="space-y-6 founders-copy">
          <SectionHeading
            class="founders-heading"
            :eyebrow="t('home.founders.eyebrow')"
            :title="t('home.founders.title')"
            :description="t('home.founders.description')"
          />
          <p class="founders-support text-sm body-copy">
            {{ t('home.founders.support') }}
          </p>
          <div class="flex flex-wrap gap-4">
            <NuxtLink :to="localePath('/about')" class="ghost-button">{{ t('home.founders.cta') }}</NuxtLink>
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

    <FeatureBillboard
      section-class="atmo-cta"
      :eyebrow="ctaBillboard.eyebrow"
      :title="ctaBillboard.title"
      :description="ctaBillboard.description"
      :cta-label="ctaBillboard.ctaLabel"
      :cta-to="ctaBillboard.ctaTo"
      :secondary-label="ctaBillboard.secondaryLabel"
      :secondary-to="ctaBillboard.secondaryTo"
      :panel-label="ctaBillboard.panelLabel"
      :panel-text="ctaBillboard.panelText"
    />

    <section class="section-atmosphere atmosphere-hero atmo-blog fade-to-footer">
      <div class="mx-auto w-full max-w-6xl px-6 space-y-10">
        <div class="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            :eyebrow="t('home.blog.eyebrow')"
            :title="t('home.blog.title')"
            :description="t('home.blog.description')"
          />
          <NuxtLink :to="localePath('/blog')" class="ghost-button">
            {{ t('home.blog.cta') }}
          </NuxtLink>
        </div>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <PostCard v-for="item in posts" :key="item.id" :item="item" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()

const resolvedLocale = computed(() => locale.value || 'de')
const postsKey = computed(() => `home-posts-${resolvedLocale.value}`)
const { data: posts } = await useAsyncData(
  postsKey,
  () =>
    queryCollection('content')
      .where('path', 'LIKE', `/${resolvedLocale.value}/blog/%`)
      .select('id', 'title', 'description', 'path', 'meta')
      .order('path', 'DESC')
      .limit(4)
      .all(),
  { watch: [resolvedLocale], default: () => [] },
)

const proofLogos = computed(() => [
  t('home.logos.items.first'),
  t('home.logos.items.second'),
  t('home.logos.items.third'),
  t('home.logos.items.fourth'),
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

const ctaBillboard = computed(() => ({
  eyebrow: t('home.cta.eyebrow'),
  title: t('home.cta.title'),
  description: t('home.cta.description'),
  ctaLabel: t('home.cta.primaryCta'),
  ctaTo: '/contact',
  secondaryLabel: t('home.cta.secondaryCta'),
  secondaryTo: '/services',
  panelLabel: t('home.cta.panel.label'),
  panelText: t('home.cta.panel.text'),
}))

const metaTitle = computed(() => t('home.meta.title'))
const metaDescription = computed(() => t('home.meta.description'))

useSeoMeta({
  title: metaTitle,
  description: metaDescription,
})
</script>
