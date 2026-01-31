<template>
  <section class="mx-auto w-full max-w-6xl px-6">
    <div class="section-frame">
      <div class="glass-panel highlight callout-panel relative overflow-hidden px-8 py-12 md:px-12">
        <div class="callout-orb a" aria-hidden="true" />
        <div class="callout-orb b" aria-hidden="true" />
        <div class="callout-grid" aria-hidden="true" />
        <div class="relative grid gap-8 md:grid-cols-[2fr_1fr] md:items-center">
        <div class="space-y-4">
          <p class="eyebrow">{{ t('callout.eyebrow') }}</p>
          <h3 class="text-3xl font-semibold md:text-4xl">{{ t('callout.title') }}</h3>
          <p class="text-sm text-slate-200">{{ t('callout.description') }}</p>
        </div>
        <div class="flex flex-col gap-4">
          <NuxtLink :to="localePath('/contact')" class="cta-button emerald justify-center">
            {{ t('callout.primaryCta') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/case-studies')" class="ghost-button glow justify-center">
            {{ t('callout.secondaryCta') }}
          </NuxtLink>
        </div>
      </div>
        </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>
