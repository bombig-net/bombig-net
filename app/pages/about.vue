<template>
  <div class="space-y-20 pb-24">
    <section class="about-hero relative -mt-24 overflow-hidden pt-24">
      <div class="hero-canvas absolute inset-0" aria-hidden="true" />
      <div class="hero-heart" aria-hidden="true">
        <div class="heart-wrapper">
          <img :src="heartSvgPath" alt="" class="heart-image heart-base" />
          <img :src="heartSvgPath" alt="" class="heart-image heart-glow" />
        </div>
      </div>
      <div class="about-hero-shell mx-auto w-full max-w-6xl px-6 relative flex min-h-[calc(100svh-6rem)] flex-col justify-end pb-16 pt-12">
        <div class="max-w-3xl space-y-6">
          <p class="eyebrow">{{ t('about.hero.eyebrow') }}</p>
          <h1 class="headline-effect text-4xl font-semibold tracking-tight md:text-5xl">{{ t('about.hero.title') }}</h1>
          <p class="text-sm body-copy max-w-2xl">{{ t('about.hero.description') }}</p>
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('about.hero.subline') }}</p>
        </div>
      </div>
    </section>

    <section class="section-atmosphere atmosphere-hero atmo-about-decision-system">
      <div class="mx-auto w-full max-w-6xl px-6 decision-system-section">
        <div class="decision-system-header">
          <p class="eyebrow">{{ t('about.systemVisual.eyebrow') }}</p>
          <h2 class="decision-system-headline headline-effect">{{ t('about.systemVisual.headline') }}</h2>
          <p class="decision-system-intro body-copy">{{ t('about.systemVisual.intro') }}</p>
        </div>
        <DecisionSystemVisual :labels="systemLabels" />
        <p class="decision-system-thesis">{{ t('about.systemVisual.thesis') }}</p>
      </div>
    </section>

    <section class="mx-auto w-full max-w-6xl px-6 space-y-10">
      <SectionHeading
        :eyebrow="t('about.mechanics.eyebrow')"
        :title="t('about.mechanics.title')"
        :description="t('about.mechanics.description')"
      />
      <div class="about-mechanics-grid">
        <div class="glass-panel raised info-card p-6 about-mechanics-card">
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('about.mechanics.items.first.label') }}</p>
          <p class="mt-3 text-sm body-copy">{{ t('about.mechanics.items.first.text') }}</p>
        </div>
        <div class="glass-panel raised info-card p-6 about-mechanics-card">
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('about.mechanics.items.second.label') }}</p>
          <p class="mt-3 text-sm body-copy">{{ t('about.mechanics.items.second.text') }}</p>
        </div>
        <div class="glass-panel raised info-card p-6 about-mechanics-card">
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('about.mechanics.items.third.label') }}</p>
          <p class="mt-3 text-sm body-copy">{{ t('about.mechanics.items.third.text') }}</p>
        </div>
        <div class="glass-panel raised info-card p-6 about-mechanics-card">
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('about.mechanics.items.fourth.label') }}</p>
          <p class="mt-3 text-sm body-copy">{{ t('about.mechanics.items.fourth.text') }}</p>
        </div>
      </div>
    </section>

    <section class="section-atmosphere atmosphere-hero atmo-about-responsibility">
      <div class="mx-auto w-full max-w-6xl px-6 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <SectionHeading
          :eyebrow="t('about.responsibility.eyebrow')"
          :title="t('about.responsibility.title')"
          :description="t('about.responsibility.description')"
        />
        <div class="about-responsibility-grid">
          <div class="glass-panel raised p-6 about-responsibility-item">
            <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('about.responsibility.items.first.label') }}</p>
            <p class="mt-3 text-sm body-copy">{{ t('about.responsibility.items.first.text') }}</p>
          </div>
          <div class="glass-panel raised p-6 about-responsibility-item">
            <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('about.responsibility.items.second.label') }}</p>
            <p class="mt-3 text-sm body-copy">{{ t('about.responsibility.items.second.text') }}</p>
          </div>
          <div class="glass-panel raised p-6 about-responsibility-item">
            <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('about.responsibility.items.third.label') }}</p>
            <p class="mt-3 text-sm body-copy">{{ t('about.responsibility.items.third.text') }}</p>
          </div>
          <div class="glass-panel raised p-6 about-responsibility-item">
            <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('about.responsibility.items.fourth.label') }}</p>
            <p class="mt-3 text-sm body-copy">{{ t('about.responsibility.items.fourth.text') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="mx-auto w-full max-w-6xl px-6 space-y-10">
      <SectionHeading
        :eyebrow="t('about.structure.eyebrow')"
        :title="t('about.structure.title')"
        :description="t('about.structure.description')"
      />
      <div class="about-structure-grid">
        <article class="glass-panel raised p-6 about-structure-card">
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('about.structure.items.first.label') }}</p>
          <p class="mt-3 text-lg font-semibold">{{ t('about.structure.items.first.title') }}</p>
          <p class="mt-3 text-sm body-copy">{{ t('about.structure.items.first.text') }}</p>
        </article>
        <article class="glass-panel raised p-6 about-structure-card">
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('about.structure.items.second.label') }}</p>
          <p class="mt-3 text-lg font-semibold">{{ t('about.structure.items.second.title') }}</p>
          <p class="mt-3 text-sm body-copy">{{ t('about.structure.items.second.text') }}</p>
        </article>
        <article class="glass-panel raised p-6 about-structure-card">
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('about.structure.items.third.label') }}</p>
          <p class="mt-3 text-lg font-semibold">{{ t('about.structure.items.third.title') }}</p>
          <p class="mt-3 text-sm body-copy">{{ t('about.structure.items.third.text') }}</p>
        </article>
      </div>
    </section>

    <section class="section-atmosphere atmosphere-hero atmo-about-founders">
      <div class="mx-auto w-full max-w-6xl px-6 space-y-10">
        <SectionHeading
          :eyebrow="t('about.founders.eyebrow')"
          :title="t('about.founders.title')"
          :description="t('about.founders.description')"
        />
        <div class="about-founder-grid">
          <article class="glass-panel raised p-6 about-founder-card">
            <p class="text-lg font-semibold">{{ t('about.founders.items.first.name') }}</p>
            <p class="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('about.founders.items.first.role') }}</p>
            <p class="mt-4 text-sm body-copy">{{ t('about.founders.items.first.ownership') }}</p>
            <p class="mt-4 text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('about.founders.items.first.proofLabel') }}</p>
            <p class="mt-2 text-sm body-copy">{{ t('about.founders.items.first.proof') }}</p>
          </article>
          <article class="glass-panel raised p-6 about-founder-card">
            <p class="text-lg font-semibold">{{ t('about.founders.items.second.name') }}</p>
            <p class="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('about.founders.items.second.role') }}</p>
            <p class="mt-4 text-sm body-copy">{{ t('about.founders.items.second.ownership') }}</p>
            <p class="mt-4 text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('about.founders.items.second.proofLabel') }}</p>
            <p class="mt-2 text-sm body-copy">{{ t('about.founders.items.second.proof') }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section-atmosphere atmosphere-hero atmo-about-guard">
      <div class="mx-auto w-full max-w-6xl px-6 space-y-10">
        <SectionHeading
          :eyebrow="t('about.guardrails.eyebrow')"
          :title="t('about.guardrails.title')"
          :description="t('about.guardrails.description')"
        />
        <ul class="about-guard-list text-sm body-copy">
          <li class="about-guard-item">{{ t('about.guardrails.items.first') }}</li>
          <li class="about-guard-item">{{ t('about.guardrails.items.second') }}</li>
          <li class="about-guard-item">{{ t('about.guardrails.items.third') }}</li>
          <li class="about-guard-item">{{ t('about.guardrails.items.fourth') }}</li>
          <li class="about-guard-item">{{ t('about.guardrails.items.fifth') }}</li>
        </ul>
      </div>
    </section>

    <section class="mx-auto w-full max-w-6xl px-6">
      <p class="about-cta text-sm body-copy">
        {{ t('about.closing.text') }}
        <NuxtLink :to="localePath('/contact')" class="about-cta-link">
          {{ t('about.closing.linkLabel') }}
        </NuxtLink>
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

import heartSvgPath from '~/assets/svg/heart.svg'

const systemLabels = computed(() => [
  t('about.systemVisual.nodes.positioning'),
  t('about.systemVisual.nodes.quality'),
  t('about.systemVisual.nodes.constraints'),
  t('about.systemVisual.nodes.continuity'),
  t('about.systemVisual.nodes.accountability'),
  t('about.systemVisual.nodes.delivery'),
])

const metaTitle = computed(() => t('about.meta.title'))
const metaDescription = computed(() => t('about.meta.description'))

useSeoMeta({
  title: metaTitle,
  description: metaDescription,
})
</script>
