<template>
  <div class="space-y-20 pb-24">
    <section class="section-shell grid gap-12 pt-16 md:grid-cols-[1.1fr_0.9fr]">
      <div class="section-surface surface-grid space-y-6">
        <p class="eyebrow">{{ t('servicesIndex.hero.eyebrow') }}</p>
        <h1 class="text-4xl font-semibold tracking-tight text-white md:text-5xl">{{ t('servicesIndex.hero.title') }}</h1>
        <p class="text-sm text-slate-200">{{ t('servicesIndex.hero.description') }}</p>
      </div>
      <div class="section-frame">
        <div class="glass-panel raised p-8">
        <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('servicesIndex.panel.label') }}</p>
        <p class="mt-4 text-lg font-semibold">{{ t('servicesIndex.panel.title') }}</p>
        <p class="mt-3 text-sm text-slate-200">{{ t('servicesIndex.panel.description') }}</p>
        <div class="mt-6 space-y-3 text-sm text-slate-200">
          <div class="flex items-center justify-between">
            <span>{{ t('servicesIndex.panel.items.first') }}</span>
            <span class="text-slate-400">{{ t('servicesIndex.panel.times.first') }}</span>
          </div>
          <div class="flex items-center justify-between">
            <span>{{ t('servicesIndex.panel.items.second') }}</span>
            <span class="text-slate-400">{{ t('servicesIndex.panel.times.second') }}</span>
          </div>
          <div class="flex items-center justify-between">
            <span>{{ t('servicesIndex.panel.items.third') }}</span>
            <span class="text-slate-400">{{ t('servicesIndex.panel.times.third') }}</span>
          </div>
        </div>
      </div>
      </div>
    </section>

    <section class="section-shell space-y-10">
      <SectionHeading
        :eyebrow="t('servicesIndex.directory.eyebrow')"
        :title="t('servicesIndex.directory.title')"
        :description="t('servicesIndex.directory.description')"
      />
      <div class="grid gap-6 md:grid-cols-3">
        <div v-for="service in serviceCards" :key="service.key" class="glass-panel raised flex flex-col gap-4 p-6">
          <div class="space-y-2">
            <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t(`servicesIndex.cards.${service.key}.eyebrow`) }}</p>
            <h2 class="text-2xl font-semibold">{{ t(`servicesIndex.cards.${service.key}.title`) }}</h2>
            <p class="text-sm text-slate-200">{{ t(`servicesIndex.cards.${service.key}.description`) }}</p>
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="chip">{{ t(`servicesIndex.cards.${service.key}.tagFirst`) }}</span>
            <span class="chip">{{ t(`servicesIndex.cards.${service.key}.tagSecond`) }}</span>
          </div>
          <NuxtLink :to="localePath(service.to)" class="cta-button emerald justify-center">
            {{ t(`servicesIndex.cards.${service.key}.cta`) }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="section-shell grid gap-8 md:grid-cols-2">
      <SectionHeading
        :eyebrow="t('servicesIndex.howToChoose.eyebrow')"
        :title="t('servicesIndex.howToChoose.title')"
        :description="t('servicesIndex.howToChoose.description')"
      />
      <div class="grid gap-4">
        <div class="glass-panel raised p-6">
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('servicesIndex.howToChoose.points.first.label') }}</p>
          <p class="mt-3 text-sm text-slate-200">{{ t('servicesIndex.howToChoose.points.first.text') }}</p>
        </div>
        <div class="glass-panel raised p-6">
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('servicesIndex.howToChoose.points.second.label') }}</p>
          <p class="mt-3 text-sm text-slate-200">{{ t('servicesIndex.howToChoose.points.second.text') }}</p>
        </div>
        <div class="glass-panel raised p-6">
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('servicesIndex.howToChoose.points.third.label') }}</p>
          <p class="mt-3 text-sm text-slate-200">{{ t('servicesIndex.howToChoose.points.third.text') }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const serviceCards = computed(() => [
  { key: 'educationResearch', to: '/services/education-research' },
  { key: 'agencyPartner', to: '/services/agency-partner' },
  { key: 'smbFlatFee', to: '/services/smb-flat-fee' },
])
const metaTitle = computed(() => t('servicesIndex.meta.title'))
const metaDescription = computed(() => t('servicesIndex.meta.description'))

useSeoMeta({
  title: metaTitle,
  description: metaDescription,
})
</script>
