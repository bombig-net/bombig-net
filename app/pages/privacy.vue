<template>
  <div class="space-y-12 pb-24">
    <section class="section-shell pt-16">
      <div class="section-surface surface-grid space-y-6">
        <p class="eyebrow">{{ t('privacy.eyebrow') }}</p>
        <h1 class="text-4xl font-semibold tracking-tight text-white md:text-5xl">{{ t('privacy.title') }}</h1>
        <p class="max-w-2xl text-sm text-slate-200">{{ t('privacy.description') }}</p>
      </div>
    </section>

    <section class="section-shell">
      <div class="prose max-w-none">
        <h2>{{ t('privacy.sections.collect.title') }}</h2>
        <p>{{ t('privacy.sections.collect.body') }}</p>
        <h2>{{ t('privacy.sections.use.title') }}</h2>
        <p>{{ t('privacy.sections.use.body') }}</p>
        <h2>{{ t('privacy.sections.choices.title') }}</h2>
        <p>{{ t('privacy.sections.choices.body') }}</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const metaTitle = computed(() => t('privacy.meta.title'))
const metaDescription = computed(() => t('privacy.meta.description'))

useSeoMeta({
  title: metaTitle,
  description: metaDescription,
})
</script>
