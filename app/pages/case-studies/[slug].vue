<template>
  <article v-if="caseStudy" class="space-y-12 pb-24">
    <section class="section-shell space-y-6 pt-16">
      <p class="eyebrow">{{ t('caseStudies.detail.eyebrow') }}</p>
      <h1 class="text-4xl font-semibold md:text-5xl">{{ caseStudy.title }}</h1>
      <p class="max-w-2xl text-sm text-slate-300">{{ caseStudy.description }}</p>
      <div class="flex flex-wrap gap-4 text-xs uppercase tracking-[0.2em] text-slate-400">
        <span>{{ caseStudy.meta?.client || t('caseStudies.detail.fallbackClient') }}</span>
        <span>/</span>
        <span>{{ caseStudy.meta?.year || t('caseStudies.detail.fallbackYear') }}</span>
        <span>/</span>
        <span>{{ caseStudy.meta?.scope || t('caseStudies.detail.fallbackScope') }}</span>
      </div>
    </section>

    <section class="section-shell grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
      <div class="prose max-w-none">
        <ContentRenderer :value="caseStudy" />
      </div>
      <div class="glass-panel space-y-6 p-8">
        <div>
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('caseStudies.detail.servicesLabel') }}</p>
          <p class="mt-3 text-sm text-slate-200">
            {{ caseStudy.meta?.services || t('caseStudies.detail.fallbackServices') }}
          </p>
        </div>
        <div>
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('caseStudies.detail.outcomesLabel') }}</p>
          <ul class="mt-3 space-y-2 text-sm text-slate-200">
            <li>{{ t('caseStudies.detail.outcomes.first') }}</li>
            <li>{{ t('caseStudies.detail.outcomes.second') }}</li>
            <li>{{ t('caseStudies.detail.outcomes.third') }}</li>
          </ul>
        </div>
        <NuxtLink :to="localePath('/contact')" class="cta-button justify-center">{{ t('caseStudies.detail.cta') }}</NuxtLink>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = String(route.params.slug)
const { t, locale } = useI18n()
const localePath = useLocalePath()

const { data: caseStudy } = await useAsyncData(
  `case-study-${slug}`,
  () =>
    queryCollection('content')
      .path(`/${locale.value}/case-studies/${slug}`)
      .first(),
  { watch: [locale] },
)

const metaTitle = computed(() => caseStudy.value?.title || t('caseStudies.meta.title'))
const metaDescription = computed(() => caseStudy.value?.description || t('caseStudies.meta.description'))

if (!caseStudy.value) {
  throw createError({ statusCode: 404, statusMessage: 'Case study not found' })
}

useSeoMeta({
  title: metaTitle,
  description: metaDescription,
})
</script>
