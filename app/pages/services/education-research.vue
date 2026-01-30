<template>
  <div class="space-y-24 pb-24">
    <section class="relative overflow-hidden">
      <div class="absolute -left-24 top-10 h-72 w-72 rounded-full bg-emerald-400/30 blur-3xl" />
      <div class="absolute right-0 top-24 h-80 w-80 rounded-full bg-sky-400/30 blur-3xl" />
      <div class="section-shell relative grid gap-12 pb-16 pt-28 md:grid-cols-[1.1fr_0.9fr]">
        <div class="section-surface surface-grid space-y-8">
          <p class="eyebrow">{{ t('servicePages.educationResearch.hero.eyebrow') }}</p>
          <h1 class="hero-title">{{ t('servicePages.educationResearch.hero.title') }}</h1>
          <p class="max-w-xl text-base text-slate-200">{{ t('servicePages.educationResearch.hero.description') }}</p>
          <div class="flex flex-wrap gap-4">
            <NuxtLink :to="localePath('/contact')" class="cta-button emerald">{{ t('servicePages.educationResearch.hero.primaryCta') }}</NuxtLink>
            <NuxtLink :to="localePath('/case-studies')" class="ghost-button glow">{{ t('servicePages.educationResearch.hero.secondaryCta') }}</NuxtLink>
          </div>
        </div>
        <div class="glass-panel highlight space-y-6 p-8">
          <p class="chip">{{ t('servicePages.educationResearch.hero.priceLabel') }}</p>
          <p class="text-3xl font-semibold">{{ t('servicePages.educationResearch.hero.priceValue') }}</p>
          <p class="text-sm text-slate-200">{{ t('servicePages.educationResearch.hero.priceNote') }}</p>
          <div class="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('servicePages.educationResearch.hero.promiseLabel') }}</p>
            <p class="mt-3 text-sm text-slate-200">{{ t('servicePages.educationResearch.hero.promiseText') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-shell grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
      <SectionHeading
        :eyebrow="t('servicePages.educationResearch.problem.eyebrow')"
        :title="t('servicePages.educationResearch.problem.title')"
        :description="t('servicePages.educationResearch.problem.description')"
      />
      <div class="grid gap-4">
        <div class="glass-panel raised p-6">
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('servicePages.educationResearch.problem.points.first.label') }}</p>
          <p class="mt-3 text-sm text-slate-200">{{ t('servicePages.educationResearch.problem.points.first.text') }}</p>
        </div>
        <div class="glass-panel raised p-6">
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('servicePages.educationResearch.problem.points.second.label') }}</p>
          <p class="mt-3 text-sm text-slate-200">{{ t('servicePages.educationResearch.problem.points.second.text') }}</p>
        </div>
        <div class="glass-panel raised p-6">
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('servicePages.educationResearch.problem.points.third.label') }}</p>
          <p class="mt-3 text-sm text-slate-200">{{ t('servicePages.educationResearch.problem.points.third.text') }}</p>
        </div>
      </div>
    </section>

    <section class="section-shell space-y-10">
      <SectionHeading
        :eyebrow="t('servicePages.educationResearch.offer.eyebrow')"
        :title="t('servicePages.educationResearch.offer.title')"
        :description="t('servicePages.educationResearch.offer.description')"
      />
      <div class="grid gap-6 md:grid-cols-3">
        <div class="glass-panel raised p-6">
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('servicePages.educationResearch.offer.items.first.label') }}</p>
          <p class="mt-3 text-lg font-semibold">{{ t('servicePages.educationResearch.offer.items.first.title') }}</p>
          <p class="mt-3 text-sm text-slate-200">{{ t('servicePages.educationResearch.offer.items.first.text') }}</p>
        </div>
        <div class="glass-panel raised p-6">
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('servicePages.educationResearch.offer.items.second.label') }}</p>
          <p class="mt-3 text-lg font-semibold">{{ t('servicePages.educationResearch.offer.items.second.title') }}</p>
          <p class="mt-3 text-sm text-slate-200">{{ t('servicePages.educationResearch.offer.items.second.text') }}</p>
        </div>
        <div class="glass-panel raised p-6">
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('servicePages.educationResearch.offer.items.third.label') }}</p>
          <p class="mt-3 text-lg font-semibold">{{ t('servicePages.educationResearch.offer.items.third.title') }}</p>
          <p class="mt-3 text-sm text-slate-200">{{ t('servicePages.educationResearch.offer.items.third.text') }}</p>
        </div>
      </div>
    </section>

    <section class="section-shell grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
      <div class="space-y-6">
        <SectionHeading
          :eyebrow="t('servicePages.educationResearch.proof.eyebrow')"
          :title="t('servicePages.educationResearch.proof.title')"
          :description="t('servicePages.educationResearch.proof.description')"
        />
        <div class="glass-panel raised p-6">
          <p class="text-sm font-semibold">{{ t('servicePages.educationResearch.proof.quote') }}</p>
          <p class="mt-4 text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('servicePages.educationResearch.proof.attribution') }}</p>
        </div>
      </div>
      <div class="glass-panel highlight p-6">
        <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('servicePages.educationResearch.proof.logosLabel') }}</p>
        <div class="mt-6 grid gap-3 text-sm uppercase tracking-[0.2em] text-slate-300 sm:grid-cols-2">
          <span>{{ t('servicePages.educationResearch.proof.logos.first') }}</span>
          <span>{{ t('servicePages.educationResearch.proof.logos.second') }}</span>
          <span>{{ t('servicePages.educationResearch.proof.logos.third') }}</span>
          <span>{{ t('servicePages.educationResearch.proof.logos.fourth') }}</span>
        </div>
      </div>
    </section>

    <section class="section-shell grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
      <SectionHeading
        :eyebrow="t('servicePages.educationResearch.process.eyebrow')"
        :title="t('servicePages.educationResearch.process.title')"
        :description="t('servicePages.educationResearch.process.description')"
      />
      <div class="grid gap-4">
        <div class="glass-panel raised flex items-center justify-between px-6 py-5">
          <p class="text-sm uppercase tracking-[0.2em] text-slate-400">{{ t('servicePages.educationResearch.process.steps.first.label') }}</p>
          <p class="text-sm text-slate-200">{{ t('servicePages.educationResearch.process.steps.first.text') }}</p>
        </div>
        <div class="glass-panel raised flex items-center justify-between px-6 py-5">
          <p class="text-sm uppercase tracking-[0.2em] text-slate-400">{{ t('servicePages.educationResearch.process.steps.second.label') }}</p>
          <p class="text-sm text-slate-200">{{ t('servicePages.educationResearch.process.steps.second.text') }}</p>
        </div>
        <div class="glass-panel raised flex items-center justify-between px-6 py-5">
          <p class="text-sm uppercase tracking-[0.2em] text-slate-400">{{ t('servicePages.educationResearch.process.steps.third.label') }}</p>
          <p class="text-sm text-slate-200">{{ t('servicePages.educationResearch.process.steps.third.text') }}</p>
        </div>
        <div class="glass-panel raised flex items-center justify-between px-6 py-5">
          <p class="text-sm uppercase tracking-[0.2em] text-slate-400">{{ t('servicePages.educationResearch.process.steps.fourth.label') }}</p>
          <p class="text-sm text-slate-200">{{ t('servicePages.educationResearch.process.steps.fourth.text') }}</p>
        </div>
      </div>
    </section>

    <section class="section-shell grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
      <SectionHeading
        :eyebrow="t('servicePages.educationResearch.faq.eyebrow')"
        :title="t('servicePages.educationResearch.faq.title')"
        :description="t('servicePages.educationResearch.faq.description')"
      />
      <div class="space-y-4">
        <details class="glass-panel raised p-6">
          <summary class="cursor-pointer text-sm font-semibold">{{ t('servicePages.educationResearch.faq.items.first.question') }}</summary>
          <p class="mt-3 text-sm text-slate-200">{{ t('servicePages.educationResearch.faq.items.first.answer') }}</p>
        </details>
        <details class="glass-panel raised p-6">
          <summary class="cursor-pointer text-sm font-semibold">{{ t('servicePages.educationResearch.faq.items.second.question') }}</summary>
          <p class="mt-3 text-sm text-slate-200">{{ t('servicePages.educationResearch.faq.items.second.answer') }}</p>
        </details>
        <details class="glass-panel raised p-6">
          <summary class="cursor-pointer text-sm font-semibold">{{ t('servicePages.educationResearch.faq.items.third.question') }}</summary>
          <p class="mt-3 text-sm text-slate-200">{{ t('servicePages.educationResearch.faq.items.third.answer') }}</p>
        </details>
      </div>
    </section>

    <section class="section-shell">
      <div class="glass-panel highlight flex flex-col gap-6 p-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p class="eyebrow">{{ t('servicePages.educationResearch.finalCta.eyebrow') }}</p>
          <p class="text-2xl font-semibold">{{ t('servicePages.educationResearch.finalCta.title') }}</p>
          <p class="mt-3 text-sm text-slate-200">{{ t('servicePages.educationResearch.finalCta.description') }}</p>
        </div>
        <NuxtLink :to="localePath('/contact')" class="cta-button emerald">{{ t('servicePages.educationResearch.finalCta.cta') }}</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const metaTitle = computed(() => t('servicePages.educationResearch.meta.title'))
const metaDescription = computed(() => t('servicePages.educationResearch.meta.description'))

useSeoMeta({
  title: metaTitle,
  description: metaDescription,
})
</script>
