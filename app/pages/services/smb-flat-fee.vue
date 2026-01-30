<template>
  <div class="space-y-24 pb-24">
    <section class="relative overflow-hidden">
      <div class="absolute -left-24 top-16 h-72 w-72 rounded-full bg-amber-300/30 blur-3xl" />
      <div class="absolute right-0 top-32 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl" />
      <div class="section-shell relative grid gap-12 pb-16 pt-28 md:grid-cols-[1.1fr_0.9fr]">
        <div class="section-surface surface-grid space-y-8">
          <p class="eyebrow">{{ t('servicePages.smbFlatFee.hero.eyebrow') }}</p>
          <h1 class="hero-title">{{ t('servicePages.smbFlatFee.hero.title') }}</h1>
          <p class="max-w-xl text-base text-slate-200">{{ t('servicePages.smbFlatFee.hero.description') }}</p>
          <div class="flex flex-wrap gap-4">
            <NuxtLink :to="localePath('/contact')" class="cta-button emerald">{{ t('servicePages.smbFlatFee.hero.primaryCta') }}</NuxtLink>
            <NuxtLink :to="localePath('/case-studies')" class="ghost-button glow">{{ t('servicePages.smbFlatFee.hero.secondaryCta') }}</NuxtLink>
          </div>
        </div>
        <div class="glass-panel highlight space-y-6 p-8">
          <p class="chip">{{ t('servicePages.smbFlatFee.hero.priceLabel') }}</p>
          <p class="text-3xl font-semibold">{{ t('servicePages.smbFlatFee.hero.priceValue') }}</p>
          <p class="text-sm text-slate-200">{{ t('servicePages.smbFlatFee.hero.priceNote') }}</p>
          <div class="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('servicePages.smbFlatFee.hero.promiseLabel') }}</p>
            <p class="mt-3 text-sm text-slate-200">{{ t('servicePages.smbFlatFee.hero.promiseText') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-shell space-y-10">
      <SectionHeading
        :eyebrow="t('servicePages.smbFlatFee.included.eyebrow')"
        :title="t('servicePages.smbFlatFee.included.title')"
        :description="t('servicePages.smbFlatFee.included.description')"
      />
      <div class="grid gap-6 md:grid-cols-3">
        <div class="glass-panel raised p-6">
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('servicePages.smbFlatFee.included.items.first.label') }}</p>
          <p class="mt-3 text-lg font-semibold">{{ t('servicePages.smbFlatFee.included.items.first.title') }}</p>
          <p class="mt-3 text-sm text-slate-200">{{ t('servicePages.smbFlatFee.included.items.first.text') }}</p>
        </div>
        <div class="glass-panel raised p-6">
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('servicePages.smbFlatFee.included.items.second.label') }}</p>
          <p class="mt-3 text-lg font-semibold">{{ t('servicePages.smbFlatFee.included.items.second.title') }}</p>
          <p class="mt-3 text-sm text-slate-200">{{ t('servicePages.smbFlatFee.included.items.second.text') }}</p>
        </div>
        <div class="glass-panel raised p-6">
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('servicePages.smbFlatFee.included.items.third.label') }}</p>
          <p class="mt-3 text-lg font-semibold">{{ t('servicePages.smbFlatFee.included.items.third.title') }}</p>
          <p class="mt-3 text-sm text-slate-200">{{ t('servicePages.smbFlatFee.included.items.third.text') }}</p>
        </div>
      </div>
    </section>

    <section class="section-shell grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
      <SectionHeading
        :eyebrow="t('servicePages.smbFlatFee.boundaries.eyebrow')"
        :title="t('servicePages.smbFlatFee.boundaries.title')"
        :description="t('servicePages.smbFlatFee.boundaries.description')"
      />
      <div class="grid gap-4">
        <div class="glass-panel raised p-6">
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('servicePages.smbFlatFee.boundaries.points.first.label') }}</p>
          <p class="mt-3 text-sm text-slate-200">{{ t('servicePages.smbFlatFee.boundaries.points.first.text') }}</p>
        </div>
        <div class="glass-panel raised p-6">
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('servicePages.smbFlatFee.boundaries.points.second.label') }}</p>
          <p class="mt-3 text-sm text-slate-200">{{ t('servicePages.smbFlatFee.boundaries.points.second.text') }}</p>
        </div>
        <div class="glass-panel raised p-6">
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('servicePages.smbFlatFee.boundaries.points.third.label') }}</p>
          <p class="mt-3 text-sm text-slate-200">{{ t('servicePages.smbFlatFee.boundaries.points.third.text') }}</p>
        </div>
      </div>
    </section>

    <section class="section-shell grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
      <div class="space-y-6">
        <SectionHeading
          :eyebrow="t('servicePages.smbFlatFee.proof.eyebrow')"
          :title="t('servicePages.smbFlatFee.proof.title')"
          :description="t('servicePages.smbFlatFee.proof.description')"
        />
        <div class="glass-panel raised p-6">
          <p class="text-sm font-semibold">{{ t('servicePages.smbFlatFee.proof.quote') }}</p>
          <p class="mt-4 text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('servicePages.smbFlatFee.proof.attribution') }}</p>
        </div>
      </div>
      <div class="glass-panel highlight p-6">
        <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('servicePages.smbFlatFee.proof.logosLabel') }}</p>
        <div class="mt-6 grid gap-3 text-sm uppercase tracking-[0.2em] text-slate-300 sm:grid-cols-2">
          <span>{{ t('servicePages.smbFlatFee.proof.logos.first') }}</span>
          <span>{{ t('servicePages.smbFlatFee.proof.logos.second') }}</span>
          <span>{{ t('servicePages.smbFlatFee.proof.logos.third') }}</span>
          <span>{{ t('servicePages.smbFlatFee.proof.logos.fourth') }}</span>
        </div>
      </div>
    </section>

    <section class="section-shell grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
      <SectionHeading
        :eyebrow="t('servicePages.smbFlatFee.process.eyebrow')"
        :title="t('servicePages.smbFlatFee.process.title')"
        :description="t('servicePages.smbFlatFee.process.description')"
      />
      <div class="grid gap-4">
        <div class="glass-panel raised flex items-center justify-between px-6 py-5">
          <p class="text-sm uppercase tracking-[0.2em] text-slate-400">{{ t('servicePages.smbFlatFee.process.steps.first.label') }}</p>
          <p class="text-sm text-slate-200">{{ t('servicePages.smbFlatFee.process.steps.first.text') }}</p>
        </div>
        <div class="glass-panel raised flex items-center justify-between px-6 py-5">
          <p class="text-sm uppercase tracking-[0.2em] text-slate-400">{{ t('servicePages.smbFlatFee.process.steps.second.label') }}</p>
          <p class="text-sm text-slate-200">{{ t('servicePages.smbFlatFee.process.steps.second.text') }}</p>
        </div>
        <div class="glass-panel raised flex items-center justify-between px-6 py-5">
          <p class="text-sm uppercase tracking-[0.2em] text-slate-400">{{ t('servicePages.smbFlatFee.process.steps.third.label') }}</p>
          <p class="text-sm text-slate-200">{{ t('servicePages.smbFlatFee.process.steps.third.text') }}</p>
        </div>
      </div>
    </section>

    <section class="section-shell grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
      <SectionHeading
        :eyebrow="t('servicePages.smbFlatFee.faq.eyebrow')"
        :title="t('servicePages.smbFlatFee.faq.title')"
        :description="t('servicePages.smbFlatFee.faq.description')"
      />
      <div class="space-y-4">
        <details class="glass-panel raised p-6">
          <summary class="cursor-pointer text-sm font-semibold">{{ t('servicePages.smbFlatFee.faq.items.first.question') }}</summary>
          <p class="mt-3 text-sm text-slate-200">{{ t('servicePages.smbFlatFee.faq.items.first.answer') }}</p>
        </details>
        <details class="glass-panel raised p-6">
          <summary class="cursor-pointer text-sm font-semibold">{{ t('servicePages.smbFlatFee.faq.items.second.question') }}</summary>
          <p class="mt-3 text-sm text-slate-200">{{ t('servicePages.smbFlatFee.faq.items.second.answer') }}</p>
        </details>
        <details class="glass-panel raised p-6">
          <summary class="cursor-pointer text-sm font-semibold">{{ t('servicePages.smbFlatFee.faq.items.third.question') }}</summary>
          <p class="mt-3 text-sm text-slate-200">{{ t('servicePages.smbFlatFee.faq.items.third.answer') }}</p>
        </details>
      </div>
    </section>

    <section class="section-shell">
      <div class="glass-panel highlight flex flex-col gap-6 p-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p class="eyebrow">{{ t('servicePages.smbFlatFee.finalCta.eyebrow') }}</p>
          <p class="text-2xl font-semibold">{{ t('servicePages.smbFlatFee.finalCta.title') }}</p>
          <p class="mt-3 text-sm text-slate-200">{{ t('servicePages.smbFlatFee.finalCta.description') }}</p>
        </div>
        <NuxtLink :to="localePath('/contact')" class="cta-button emerald">{{ t('servicePages.smbFlatFee.finalCta.cta') }}</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const metaTitle = computed(() => t('servicePages.smbFlatFee.meta.title'))
const metaDescription = computed(() => t('servicePages.smbFlatFee.meta.description'))

useSeoMeta({
  title: metaTitle,
  description: metaDescription,
})
</script>
