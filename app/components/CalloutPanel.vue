<template>
  <section class="section-shell">
    <div class="glass-panel relative overflow-hidden px-8 py-12 md:px-12">
      <div class="absolute -right-20 -top-32 h-56 w-56 rounded-full bg-emerald-300/20 blur-3xl" />
      <div class="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl" />
      <div class="relative grid gap-8 md:grid-cols-[2fr_1fr] md:items-center">
        <div class="space-y-4">
          <p class="eyebrow">{{ t('callout.eyebrow') }}</p>
          <h3 class="text-3xl font-semibold md:text-4xl">{{ t('callout.title') }}</h3>
          <p class="text-sm text-slate-300">{{ t('callout.description') }}</p>
        </div>
        <div class="flex flex-col gap-4">
          <NuxtLink :to="localePath('/contact')" class="cta-button justify-center">{{ t('callout.primaryCta') }}</NuxtLink>
          <NuxtLink :to="localePath('/case-studies')" class="ghost-button justify-center">{{ t('callout.secondaryCta') }}</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>
