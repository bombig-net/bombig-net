<template>
  <div class="space-y-16 pb-24">
    <section class="mx-auto w-full max-w-6xl px-6 pt-16">
      <div class="section-surface surface-grid space-y-6">
        <p class="eyebrow">{{ t('caseStudies.index.eyebrow') }}</p>
        <h1 class="headline-effect text-4xl font-semibold tracking-tight md:text-5xl">{{ t('caseStudies.index.title') }}</h1>
        <p class="max-w-2xl text-sm body-copy">{{ t('caseStudies.index.description') }}</p>
      </div>
    </section>

    <section class="mx-auto w-full max-w-6xl px-6 grid gap-6 md:grid-cols-3">
      <CaseCard v-for="item in caseStudies" :key="item.id" :item="item" />
    </section>

    <CalloutPanel />
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n()
const metaTitle = computed(() => t('caseStudies.meta.title'))
const metaDescription = computed(() => t('caseStudies.meta.description'))

const { data: caseStudies } = await useAsyncData(
  'case-studies-list',
  () =>
    queryCollection('content')
      .where('path', 'LIKE', `/${locale.value}/case-studies/%`)
      .select('id', 'title', 'description', 'path', 'meta')
      .order('path', 'DESC')
      .all(),
  { watch: [locale] },
)

useSeoMeta({
  title: metaTitle,
  description: metaDescription,
})
</script>
