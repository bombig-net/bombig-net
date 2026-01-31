<template>
  <div class="space-y-20 pb-24">
    <section class="mx-auto w-full max-w-6xl px-6 grid gap-12 pt-16 md:grid-cols-[1.1fr_0.9fr]">
      <div class="section-surface surface-grid space-y-6">
        <p class="eyebrow">{{ t('about.hero.eyebrow') }}</p>
        <h1 class="text-4xl font-semibold tracking-tight text-white md:text-5xl">{{ t('about.hero.title') }}</h1>
        <p class="text-sm text-slate-200">{{ t('about.hero.description') }}</p>
        <div class="flex flex-wrap gap-4">
          <NuxtLink :to="localePath('/contact')" class="cta-button emerald">{{ t('about.hero.primaryCta') }}</NuxtLink>
          <NuxtLink :to="localePath('/case-studies')" class="ghost-button glow">{{ t('about.hero.secondaryCta') }}</NuxtLink>
        </div>
      </div>
      <div class="section-frame">
        <div class="glass-panel raised p-8">
          <div class="beliefs-visual" aria-hidden="true">
            <div class="beliefs-visual-core" />
          </div>
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('about.beliefs.label') }}</p>
          <ul class="mt-6 space-y-4 text-sm text-slate-200">
            <li>{{ t('about.beliefs.items.first') }}</li>
            <li>{{ t('about.beliefs.items.second') }}</li>
            <li>{{ t('about.beliefs.items.third') }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="mx-auto w-full max-w-6xl px-6 grid gap-8 md:grid-cols-3">
      <div class="glass-panel raised p-6 value-card">
        <div class="value-icon" aria-hidden="true" />
        <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('about.values.leadership.label') }}</p>
        <p class="mt-3 text-lg font-semibold">{{ t('about.values.leadership.title') }}</p>
        <p class="mt-3 text-sm text-slate-200">{{ t('about.values.leadership.description') }}</p>
      </div>
      <div class="glass-panel raised p-6 value-card">
        <div class="value-icon" aria-hidden="true" />
        <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('about.values.method.label') }}</p>
        <p class="mt-3 text-lg font-semibold">{{ t('about.values.method.title') }}</p>
        <p class="mt-3 text-sm text-slate-200">{{ t('about.values.method.description') }}</p>
      </div>
      <div class="glass-panel raised p-6 value-card">
        <div class="value-icon" aria-hidden="true" />
        <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('about.values.momentum.label') }}</p>
        <p class="mt-3 text-lg font-semibold">{{ t('about.values.momentum.title') }}</p>
        <p class="mt-3 text-sm text-slate-200">{{ t('about.values.momentum.description') }}</p>
      </div>
    </section>

    <section class="mx-auto w-full max-w-6xl px-6 grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
      <div class="space-y-4">
        <SectionHeading
          :eyebrow="t('about.team.eyebrow')"
          :title="t('about.team.title')"
          :description="t('about.team.description')"
        />
          <div class="grid gap-4 sm:grid-cols-2">
            <div class="glass-panel raised flex flex-col gap-3 p-5">
              <div class="team-portrait variant-a" aria-hidden="true" />
              <p class="text-sm font-semibold">Deniz Kaya</p>
              <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('about.team.roles.founder') }}</p>
            </div>
            <div class="glass-panel raised flex flex-col gap-3 p-5">
              <div class="team-portrait variant-b" aria-hidden="true" />
              <p class="text-sm font-semibold">Lea Turner</p>
              <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('about.team.roles.creativeDirector') }}</p>
            </div>
            <div class="glass-panel raised flex flex-col gap-3 p-5">
              <div class="team-portrait variant-c" aria-hidden="true" />
              <p class="text-sm font-semibold">Rami Delgado</p>
              <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('about.team.roles.productDesigner') }}</p>
            </div>
            <div class="glass-panel raised flex flex-col gap-3 p-5">
              <div class="team-portrait variant-d" aria-hidden="true" />
              <p class="text-sm font-semibold">Ada Kim</p>
              <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('about.team.roles.engineeringLead') }}</p>
            </div>
          </div>
      </div>
      <div class="glass-panel highlight p-8">
        <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('about.capabilities.label') }}</p>
        <ul class="capability-list mt-6 space-y-3 text-sm text-slate-200">
          <li class="capability-item">{{ t('about.capabilities.items.first') }}</li>
          <li class="capability-item">{{ t('about.capabilities.items.second') }}</li>
          <li class="capability-item">{{ t('about.capabilities.items.third') }}</li>
          <li class="capability-item">{{ t('about.capabilities.items.fourth') }}</li>
          <li class="capability-item">{{ t('about.capabilities.items.fifth') }}</li>
        </ul>
      </div>
    </section>

    <CalloutPanel />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const metaTitle = computed(() => t('about.meta.title'))
const metaDescription = computed(() => t('about.meta.description'))

useSeoMeta({
  title: metaTitle,
  description: metaDescription,
})
</script>
