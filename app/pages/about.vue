<template>
  <div class="space-y-20 pb-24">
    <section class="section-shell grid gap-12 pt-16 md:grid-cols-[1.1fr_0.9fr]">
      <div class="space-y-6">
        <p class="eyebrow">{{ t('about.hero.eyebrow') }}</p>
        <h1 class="text-4xl font-semibold md:text-5xl">{{ t('about.hero.title') }}</h1>
        <p class="text-sm text-slate-300">{{ t('about.hero.description') }}</p>
        <div class="flex flex-wrap gap-4">
          <NuxtLink :to="localePath('/contact')" class="cta-button">{{ t('about.hero.primaryCta') }}</NuxtLink>
          <NuxtLink :to="localePath('/case-studies')" class="ghost-button">{{ t('about.hero.secondaryCta') }}</NuxtLink>
        </div>
      </div>
      <div class="glass-panel p-8">
        <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('about.beliefs.label') }}</p>
        <ul class="mt-6 space-y-4 text-sm text-slate-200">
          <li>{{ t('about.beliefs.items.first') }}</li>
          <li>{{ t('about.beliefs.items.second') }}</li>
          <li>{{ t('about.beliefs.items.third') }}</li>
        </ul>
      </div>
    </section>

    <section class="section-shell grid gap-8 md:grid-cols-3">
      <div class="glass-panel p-6">
        <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('about.values.leadership.label') }}</p>
        <p class="mt-3 text-lg font-semibold">{{ t('about.values.leadership.title') }}</p>
        <p class="mt-3 text-sm text-slate-300">{{ t('about.values.leadership.description') }}</p>
      </div>
      <div class="glass-panel p-6">
        <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('about.values.method.label') }}</p>
        <p class="mt-3 text-lg font-semibold">{{ t('about.values.method.title') }}</p>
        <p class="mt-3 text-sm text-slate-300">{{ t('about.values.method.description') }}</p>
      </div>
      <div class="glass-panel p-6">
        <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('about.values.momentum.label') }}</p>
        <p class="mt-3 text-lg font-semibold">{{ t('about.values.momentum.title') }}</p>
        <p class="mt-3 text-sm text-slate-300">{{ t('about.values.momentum.description') }}</p>
      </div>
    </section>

    <section class="section-shell grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
      <div class="space-y-4">
        <SectionHeading
          :eyebrow="t('about.team.eyebrow')"
          :title="t('about.team.title')"
          :description="t('about.team.description')"
        />
        <div class="grid gap-4 sm:grid-cols-2">
          <div class="glass-panel p-5">
            <p class="text-sm font-semibold">Deniz Kaya</p>
            <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('about.team.roles.founder') }}</p>
          </div>
          <div class="glass-panel p-5">
            <p class="text-sm font-semibold">Lea Turner</p>
            <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('about.team.roles.creativeDirector') }}</p>
          </div>
          <div class="glass-panel p-5">
            <p class="text-sm font-semibold">Rami Delgado</p>
            <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('about.team.roles.productDesigner') }}</p>
          </div>
          <div class="glass-panel p-5">
            <p class="text-sm font-semibold">Ada Kim</p>
            <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('about.team.roles.engineeringLead') }}</p>
          </div>
        </div>
      </div>
      <div class="glass-panel p-8">
        <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('about.capabilities.label') }}</p>
        <ul class="mt-6 space-y-3 text-sm text-slate-200">
          <li>{{ t('about.capabilities.items.first') }}</li>
          <li>{{ t('about.capabilities.items.second') }}</li>
          <li>{{ t('about.capabilities.items.third') }}</li>
          <li>{{ t('about.capabilities.items.fourth') }}</li>
          <li>{{ t('about.capabilities.items.fifth') }}</li>
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
