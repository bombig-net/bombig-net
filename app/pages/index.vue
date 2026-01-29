<template>
  <div class="space-y-24 pb-24">
    <section class="relative overflow-hidden">
      <div class="absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
      <div class="absolute right-0 top-24 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl" />
      <div class="section-shell relative grid gap-12 pb-20 pt-28 md:grid-cols-[1.1fr_0.9fr]">
        <div class="space-y-8">
          <p class="eyebrow">{{ t('home.hero.eyebrow') }}</p>
          <h1 class="hero-title">{{ t('home.hero.title') }}</h1>
          <p class="max-w-xl text-base text-slate-300">{{ t('home.hero.description') }}</p>
          <div class="flex flex-wrap gap-4">
            <NuxtLink :to="localePath('/services')" class="cta-button">{{ t('home.hero.primaryCta') }}</NuxtLink>
            <NuxtLink :to="localePath('/about')" class="ghost-button">{{ t('home.hero.secondaryCta') }}</NuxtLink>
          </div>
        </div>
        <div class="glass-panel relative space-y-6 p-8">
          <p class="chip">{{ t('home.hero.panel.label') }}</p>
          <h2 class="text-2xl font-semibold">{{ t('home.hero.panel.title') }}</h2>
          <p class="text-sm text-slate-300">{{ t('home.hero.panel.description') }}</p>
          <div class="grid gap-4">
            <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p class="text-xs uppercase tracking-[0.2em] text-slate-400">
                {{ t('home.hero.panel.points.first.label') }}
              </p>
              <p class="mt-2 text-sm text-slate-200">{{ t('home.hero.panel.points.first.text') }}</p>
            </div>
            <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p class="text-xs uppercase tracking-[0.2em] text-slate-400">
                {{ t('home.hero.panel.points.second.label') }}
              </p>
              <p class="mt-2 text-sm text-slate-200">{{ t('home.hero.panel.points.second.text') }}</p>
            </div>
            <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p class="text-xs uppercase tracking-[0.2em] text-slate-400">
                {{ t('home.hero.panel.points.third.label') }}
              </p>
              <p class="mt-2 text-sm text-slate-200">{{ t('home.hero.panel.points.third.text') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-shell grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
      <SectionHeading
        :eyebrow="t('home.responsibility.eyebrow')"
        :title="t('home.responsibility.title')"
        :description="t('home.responsibility.description')"
      />
      <div class="grid gap-4">
        <div class="glass-panel p-6">
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('home.responsibility.points.first.label') }}</p>
          <p class="mt-3 text-sm text-slate-200">{{ t('home.responsibility.points.first.text') }}</p>
        </div>
        <div class="glass-panel p-6">
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('home.responsibility.points.second.label') }}</p>
          <p class="mt-3 text-sm text-slate-200">{{ t('home.responsibility.points.second.text') }}</p>
        </div>
        <div class="glass-panel p-6">
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('home.responsibility.points.third.label') }}</p>
          <p class="mt-3 text-sm text-slate-200">{{ t('home.responsibility.points.third.text') }}</p>
        </div>
      </div>
    </section>

    <section class="section-shell grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
      <SectionHeading
        :eyebrow="t('home.founders.eyebrow')"
        :title="t('home.founders.title')"
        :description="t('home.founders.description')"
      />
      <div class="grid gap-4 sm:grid-cols-2">
        <div class="glass-panel p-6">
          <p class="text-lg font-semibold">{{ t('home.founders.people.deniz.name') }}</p>
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('home.founders.people.deniz.role') }}</p>
          <p class="mt-3 text-sm text-slate-300">{{ t('home.founders.people.deniz.focus') }}</p>
        </div>
        <div class="glass-panel p-6">
          <p class="text-lg font-semibold">{{ t('home.founders.people.jannis.name') }}</p>
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('home.founders.people.jannis.role') }}</p>
          <p class="mt-3 text-sm text-slate-300">{{ t('home.founders.people.jannis.focus') }}</p>
        </div>
      </div>
    </section>

    <section class="section-shell space-y-10">
      <SectionHeading
        :eyebrow="t('home.proof.eyebrow')"
        :title="t('home.proof.title')"
        :description="t('home.proof.description')"
      />
      <div class="grid gap-6 md:grid-cols-3">
        <CaseCard v-for="item in caseStudies" :key="item.id" :item="item" />
      </div>
      <div class="glass-panel p-6">
        <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('home.proof.logosLabel') }}</p>
        <div class="mt-6 grid gap-3 text-sm uppercase tracking-[0.2em] text-slate-300 sm:grid-cols-2 lg:grid-cols-4">
          <span v-for="logo in proofLogos" :key="logo">{{ logo }}</span>
        </div>
      </div>
    </section>

    <section class="section-shell grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
      <SectionHeading
        :eyebrow="t('home.approach.eyebrow')"
        :title="t('home.approach.title')"
        :description="t('home.approach.description')"
      />
      <div class="grid gap-4">
        <div class="glass-panel p-6">
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('home.approach.steps.first.label') }}</p>
          <p class="mt-3 text-sm text-slate-200">{{ t('home.approach.steps.first.text') }}</p>
        </div>
        <div class="glass-panel p-6">
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('home.approach.steps.second.label') }}</p>
          <p class="mt-3 text-sm text-slate-200">{{ t('home.approach.steps.second.text') }}</p>
        </div>
        <div class="glass-panel p-6">
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('home.approach.steps.third.label') }}</p>
          <p class="mt-3 text-sm text-slate-200">{{ t('home.approach.steps.third.text') }}</p>
        </div>
      </div>
    </section>

    <section class="section-shell space-y-10">
      <SectionHeading
        :eyebrow="t('home.services.eyebrow')"
        :title="t('home.services.title')"
        :description="t('home.services.description')"
      />
      <div class="grid gap-6 md:grid-cols-3">
        <div v-for="service in serviceCards" :key="service.key" class="glass-panel flex flex-col gap-4 p-6">
          <div class="space-y-2">
            <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t(`home.services.items.${service.key}.eyebrow`) }}</p>
            <h3 class="text-xl font-semibold">{{ t(`home.services.items.${service.key}.title`) }}</h3>
            <p class="text-sm text-slate-300">{{ t(`home.services.items.${service.key}.description`) }}</p>
          </div>
          <NuxtLink :to="localePath(service.to)" class="ghost-button">{{ t(`home.services.items.${service.key}.cta`) }}</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()

const { data: caseStudies } = await useAsyncData(
  'home-case-studies',
  () =>
    queryCollection('content')
      .where('path', 'LIKE', `/${locale.value}/case-studies/%`)
      .select('id', 'title', 'description', 'path', 'meta')
      .order('path', 'DESC')
      .limit(3)
      .all(),
  { watch: [locale] },
)

const proofLogos = computed(() => [
  t('home.proof.logos.first'),
  t('home.proof.logos.second'),
  t('home.proof.logos.third'),
  t('home.proof.logos.fourth'),
])

const serviceCards = computed(() => [
  { key: 'educationResearch', to: '/services/education-research' },
  { key: 'agencyPartner', to: '/services/agency-partner' },
  { key: 'smbFlatFee', to: '/services/smb-flat-fee' },
])

const metaTitle = computed(() => t('home.meta.title'))
const metaDescription = computed(() => t('home.meta.description'))

useSeoMeta({
  title: metaTitle,
  description: metaDescription,
})
</script>
