<template>
  <div class="space-y-24 pb-24">
    <section class="relative overflow-hidden">
      <div class="absolute -left-20 top-16 h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl" />
      <div class="absolute right-0 top-32 h-72 w-72 rounded-full bg-rose-300/20 blur-3xl" />
      <div class="section-shell relative grid gap-12 pb-16 pt-28 md:grid-cols-[1.05fr_0.95fr]">
        <div class="space-y-8">
          <p class="eyebrow">{{ t('servicePages.agencyPartner.hero.eyebrow') }}</p>
          <h1 class="hero-title">{{ t('servicePages.agencyPartner.hero.title') }}</h1>
          <p class="max-w-xl text-base text-slate-300">{{ t('servicePages.agencyPartner.hero.description') }}</p>
          <div class="flex flex-wrap gap-4">
            <NuxtLink :to="localePath('/contact')" class="cta-button">{{ t('servicePages.agencyPartner.hero.primaryCta') }}</NuxtLink>
            <NuxtLink :to="localePath('/case-studies')" class="ghost-button">{{ t('servicePages.agencyPartner.hero.secondaryCta') }}</NuxtLink>
          </div>
        </div>
        <div class="glass-panel space-y-6 p-8">
          <p class="chip">{{ t('servicePages.agencyPartner.hero.panelLabel') }}</p>
          <p class="text-2xl font-semibold">{{ t('servicePages.agencyPartner.hero.panelTitle') }}</p>
          <div class="grid gap-4">
            <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('servicePages.agencyPartner.hero.panelPoints.first.label') }}</p>
              <p class="mt-2 text-sm text-slate-200">{{ t('servicePages.agencyPartner.hero.panelPoints.first.text') }}</p>
            </div>
            <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('servicePages.agencyPartner.hero.panelPoints.second.label') }}</p>
              <p class="mt-2 text-sm text-slate-200">{{ t('servicePages.agencyPartner.hero.panelPoints.second.text') }}</p>
            </div>
            <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('servicePages.agencyPartner.hero.panelPoints.third.label') }}</p>
              <p class="mt-2 text-sm text-slate-200">{{ t('servicePages.agencyPartner.hero.panelPoints.third.text') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-shell space-y-10">
      <SectionHeading
        :eyebrow="t('servicePages.agencyPartner.modes.eyebrow')"
        :title="t('servicePages.agencyPartner.modes.title')"
        :description="t('servicePages.agencyPartner.modes.description')"
      />
      <div class="grid gap-6 md:grid-cols-3">
        <div class="glass-panel p-6">
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('servicePages.agencyPartner.modes.items.first.label') }}</p>
          <h2 class="mt-3 text-xl font-semibold">{{ t('servicePages.agencyPartner.modes.items.first.title') }}</h2>
          <p class="mt-3 text-sm text-slate-300">{{ t('servicePages.agencyPartner.modes.items.first.text') }}</p>
        </div>
        <div class="glass-panel p-6">
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('servicePages.agencyPartner.modes.items.second.label') }}</p>
          <h2 class="mt-3 text-xl font-semibold">{{ t('servicePages.agencyPartner.modes.items.second.title') }}</h2>
          <p class="mt-3 text-sm text-slate-300">{{ t('servicePages.agencyPartner.modes.items.second.text') }}</p>
        </div>
        <div class="glass-panel p-6">
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('servicePages.agencyPartner.modes.items.third.label') }}</p>
          <h2 class="mt-3 text-xl font-semibold">{{ t('servicePages.agencyPartner.modes.items.third.title') }}</h2>
          <p class="mt-3 text-sm text-slate-300">{{ t('servicePages.agencyPartner.modes.items.third.text') }}</p>
        </div>
      </div>
    </section>

    <section class="section-shell grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
      <SectionHeading
        :eyebrow="t('servicePages.agencyPartner.why.eyebrow')"
        :title="t('servicePages.agencyPartner.why.title')"
        :description="t('servicePages.agencyPartner.why.description')"
      />
      <div class="grid gap-4">
        <div class="glass-panel p-6">
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('servicePages.agencyPartner.why.points.first.label') }}</p>
          <p class="mt-3 text-sm text-slate-200">{{ t('servicePages.agencyPartner.why.points.first.text') }}</p>
        </div>
        <div class="glass-panel p-6">
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('servicePages.agencyPartner.why.points.second.label') }}</p>
          <p class="mt-3 text-sm text-slate-200">{{ t('servicePages.agencyPartner.why.points.second.text') }}</p>
        </div>
        <div class="glass-panel p-6">
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('servicePages.agencyPartner.why.points.third.label') }}</p>
          <p class="mt-3 text-sm text-slate-200">{{ t('servicePages.agencyPartner.why.points.third.text') }}</p>
        </div>
      </div>
    </section>

    <section class="section-shell grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
      <div class="space-y-6">
        <SectionHeading
          :eyebrow="t('servicePages.agencyPartner.proof.eyebrow')"
          :title="t('servicePages.agencyPartner.proof.title')"
          :description="t('servicePages.agencyPartner.proof.description')"
        />
        <div class="glass-panel p-6">
          <p class="text-sm font-semibold">{{ t('servicePages.agencyPartner.proof.quote') }}</p>
          <p class="mt-4 text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('servicePages.agencyPartner.proof.attribution') }}</p>
        </div>
      </div>
      <div class="glass-panel p-6">
        <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('servicePages.agencyPartner.proof.logosLabel') }}</p>
        <div class="mt-6 grid gap-3 text-sm uppercase tracking-[0.2em] text-slate-300 sm:grid-cols-2">
          <span>{{ t('servicePages.agencyPartner.proof.logos.first') }}</span>
          <span>{{ t('servicePages.agencyPartner.proof.logos.second') }}</span>
          <span>{{ t('servicePages.agencyPartner.proof.logos.third') }}</span>
          <span>{{ t('servicePages.agencyPartner.proof.logos.fourth') }}</span>
        </div>
      </div>
    </section>

    <section class="section-shell grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
      <SectionHeading
        :eyebrow="t('servicePages.agencyPartner.process.eyebrow')"
        :title="t('servicePages.agencyPartner.process.title')"
        :description="t('servicePages.agencyPartner.process.description')"
      />
      <div class="grid gap-4">
        <div class="glass-panel flex items-center justify-between px-6 py-5">
          <p class="text-sm uppercase tracking-[0.2em] text-slate-400">{{ t('servicePages.agencyPartner.process.steps.first.label') }}</p>
          <p class="text-sm text-slate-200">{{ t('servicePages.agencyPartner.process.steps.first.text') }}</p>
        </div>
        <div class="glass-panel flex items-center justify-between px-6 py-5">
          <p class="text-sm uppercase tracking-[0.2em] text-slate-400">{{ t('servicePages.agencyPartner.process.steps.second.label') }}</p>
          <p class="text-sm text-slate-200">{{ t('servicePages.agencyPartner.process.steps.second.text') }}</p>
        </div>
        <div class="glass-panel flex items-center justify-between px-6 py-5">
          <p class="text-sm uppercase tracking-[0.2em] text-slate-400">{{ t('servicePages.agencyPartner.process.steps.third.label') }}</p>
          <p class="text-sm text-slate-200">{{ t('servicePages.agencyPartner.process.steps.third.text') }}</p>
        </div>
      </div>
    </section>

    <section class="section-shell grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
      <SectionHeading
        :eyebrow="t('servicePages.agencyPartner.faq.eyebrow')"
        :title="t('servicePages.agencyPartner.faq.title')"
        :description="t('servicePages.agencyPartner.faq.description')"
      />
      <div class="space-y-4">
        <details class="glass-panel p-6">
          <summary class="cursor-pointer text-sm font-semibold">{{ t('servicePages.agencyPartner.faq.items.first.question') }}</summary>
          <p class="mt-3 text-sm text-slate-300">{{ t('servicePages.agencyPartner.faq.items.first.answer') }}</p>
        </details>
        <details class="glass-panel p-6">
          <summary class="cursor-pointer text-sm font-semibold">{{ t('servicePages.agencyPartner.faq.items.second.question') }}</summary>
          <p class="mt-3 text-sm text-slate-300">{{ t('servicePages.agencyPartner.faq.items.second.answer') }}</p>
        </details>
        <details class="glass-panel p-6">
          <summary class="cursor-pointer text-sm font-semibold">{{ t('servicePages.agencyPartner.faq.items.third.question') }}</summary>
          <p class="mt-3 text-sm text-slate-300">{{ t('servicePages.agencyPartner.faq.items.third.answer') }}</p>
        </details>
      </div>
    </section>

    <section class="section-shell">
      <div class="glass-panel flex flex-col gap-6 p-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p class="eyebrow">{{ t('servicePages.agencyPartner.finalCta.eyebrow') }}</p>
          <p class="text-2xl font-semibold">{{ t('servicePages.agencyPartner.finalCta.title') }}</p>
          <p class="mt-3 text-sm text-slate-300">{{ t('servicePages.agencyPartner.finalCta.description') }}</p>
        </div>
        <NuxtLink :to="localePath('/contact')" class="cta-button">{{ t('servicePages.agencyPartner.finalCta.cta') }}</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const metaTitle = computed(() => t('servicePages.agencyPartner.meta.title'))
const metaDescription = computed(() => t('servicePages.agencyPartner.meta.description'))

useSeoMeta({
  title: metaTitle,
  description: metaDescription,
})
</script>
