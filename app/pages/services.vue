<template>
  <div class="space-y-20 pb-24">
    <section class="section-shell grid gap-12 pt-16 md:grid-cols-[1.1fr_0.9fr]">
      <div class="space-y-6">
        <p class="eyebrow">{{ t('services.hero.eyebrow') }}</p>
        <h1 class="text-4xl font-semibold md:text-5xl">{{ t('services.hero.title') }}</h1>
        <p class="text-sm text-slate-300">{{ t('services.hero.description') }}</p>
      </div>
      <div class="glass-panel p-8">
        <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('services.timeline.label') }}</p>
        <div class="mt-6 space-y-4 text-sm text-slate-200">
          <div class="flex items-center justify-between">
            <span>{{ t('services.timeline.items.discovery') }}</span>
            <span>{{ t('services.timeline.items.discoveryTime') }}</span>
          </div>
          <div class="flex items-center justify-between">
            <span>{{ t('services.timeline.items.design') }}</span>
            <span>{{ t('services.timeline.items.designTime') }}</span>
          </div>
          <div class="flex items-center justify-between">
            <span>{{ t('services.timeline.items.build') }}</span>
            <span>{{ t('services.timeline.items.buildTime') }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section-shell grid gap-6 md:grid-cols-2">
      <div class="glass-panel p-8">
        <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('services.cards.strategy.label') }}</p>
        <h2 class="mt-4 text-2xl font-semibold">{{ t('services.cards.strategy.title') }}</h2>
        <p class="mt-3 text-sm text-slate-300">{{ t('services.cards.strategy.description') }}</p>
      </div>
      <div class="glass-panel p-8">
        <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('services.cards.design.label') }}</p>
        <h2 class="mt-4 text-2xl font-semibold">{{ t('services.cards.design.title') }}</h2>
        <p class="mt-3 text-sm text-slate-300">{{ t('services.cards.design.description') }}</p>
      </div>
      <div class="glass-panel p-8">
        <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('services.cards.build.label') }}</p>
        <h2 class="mt-4 text-2xl font-semibold">{{ t('services.cards.build.title') }}</h2>
        <p class="mt-3 text-sm text-slate-300">{{ t('services.cards.build.description') }}</p>
      </div>
      <div class="glass-panel p-8">
        <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('services.cards.growth.label') }}</p>
        <h2 class="mt-4 text-2xl font-semibold">{{ t('services.cards.growth.title') }}</h2>
        <p class="mt-3 text-sm text-slate-300">{{ t('services.cards.growth.description') }}</p>
      </div>
    </section>

    <CalloutPanel />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const metaTitle = computed(() => t('services.meta.title'))
const metaDescription = computed(() => t('services.meta.description'))

useSeoMeta({
  title: metaTitle,
  description: metaDescription,
})
</script>
