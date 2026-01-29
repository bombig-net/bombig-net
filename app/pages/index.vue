<template>
  <div class="space-y-24 pb-24">
    <section class="relative overflow-hidden">
      <div class="absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
      <div class="absolute right-0 top-24 h-80 w-80 rounded-full bg-indigo-400/20 blur-3xl" />
      <div class="section-shell relative grid gap-14 pb-20 pt-28 md:grid-cols-[1.1fr_0.9fr]">
        <div class="space-y-8">
          <p class="eyebrow">{{ t('home.hero.eyebrow') }}</p>
          <h1 class="hero-title">
            {{ t('home.hero.title') }}
          </h1>
          <p class="max-w-xl text-base text-slate-300">
            {{ t('home.hero.description') }}
          </p>
          <div class="flex flex-wrap gap-4">
            <NuxtLink :to="localePath('/contact')" class="cta-button">{{ t('home.hero.primaryCta') }}</NuxtLink>
            <NuxtLink :to="localePath('/case-studies')" class="ghost-button">{{ t('home.hero.secondaryCta') }}</NuxtLink>
          </div>
          <div class="grid gap-6 pt-8 sm:grid-cols-3">
            <div class="space-y-2">
              <p class="text-2xl font-semibold">12+</p>
              <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('home.hero.stat1Label') }}</p>
            </div>
            <div class="space-y-2">
              <p class="text-2xl font-semibold">4.9/5</p>
              <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('home.hero.stat2Label') }}</p>
            </div>
            <div class="space-y-2">
              <p class="text-2xl font-semibold">28%</p>
              <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('home.hero.stat3Label') }}</p>
            </div>
          </div>
        </div>
        <div class="glass-panel relative flex flex-col justify-between gap-6 p-8">
          <div class="space-y-4">
            <p class="chip">{{ t('home.panel.chip') }}</p>
            <h2 class="text-2xl font-semibold">{{ t('home.panel.title') }}</h2>
            <p class="text-sm text-slate-300">{{ t('home.panel.description') }}</p>
          </div>
          <NuxtImg
            src="https://images.unsplash.com/photo-1487014679447-9f8336841d58"
            :alt="t('home.panel.imageAlt')"
            width="640"
            height="420"
            class="h-44 w-full rounded-2xl object-cover"
          />
          <div class="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6">
            <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('home.panel.signatureLabel') }}</p>
            <p class="mt-3 text-lg font-semibold">{{ t('home.panel.signatureText') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-shell grid gap-8 md:grid-cols-2">
      <SectionHeading
        :eyebrow="t('home.whatWeDo.eyebrow')"
        :title="t('home.whatWeDo.title')"
        :description="t('home.whatWeDo.description')"
      />
      <div class="grid gap-6">
        <div class="glass-panel p-6">
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('home.whatWeDo.cards.positioning.label') }}</p>
          <p class="mt-3 text-lg font-semibold">{{ t('home.whatWeDo.cards.positioning.text') }}</p>
        </div>
        <div class="glass-panel p-6">
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('home.whatWeDo.cards.experience.label') }}</p>
          <p class="mt-3 text-lg font-semibold">{{ t('home.whatWeDo.cards.experience.text') }}</p>
        </div>
        <div class="glass-panel p-6">
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('home.whatWeDo.cards.growth.label') }}</p>
          <p class="mt-3 text-lg font-semibold">{{ t('home.whatWeDo.cards.growth.text') }}</p>
        </div>
      </div>
    </section>

    <section class="section-shell space-y-10">
      <SectionHeading
        :eyebrow="t('home.featured.eyebrow')"
        :title="t('home.featured.title')"
        :description="t('home.featured.description')"
      />
      <div class="grid gap-6 md:grid-cols-3">
        <CaseCard v-for="item in caseStudies" :key="item.id" :item="item" />
      </div>
    </section>

    <section class="section-shell grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
      <div class="space-y-6">
        <SectionHeading
          :eyebrow="t('home.process.eyebrow')"
          :title="t('home.process.title')"
          :description="t('home.process.description')"
        />
        <div class="grid gap-4">
          <div class="glass-panel flex items-center justify-between px-6 py-5">
            <p class="text-sm uppercase tracking-[0.2em] text-slate-400">{{ t('home.process.steps.strategy.label') }}</p>
            <p class="text-sm text-slate-200">{{ t('home.process.steps.strategy.text') }}</p>
          </div>
          <div class="glass-panel flex items-center justify-between px-6 py-5">
            <p class="text-sm uppercase tracking-[0.2em] text-slate-400">{{ t('home.process.steps.design.label') }}</p>
            <p class="text-sm text-slate-200">{{ t('home.process.steps.design.text') }}</p>
          </div>
          <div class="glass-panel flex items-center justify-between px-6 py-5">
            <p class="text-sm uppercase tracking-[0.2em] text-slate-400">{{ t('home.process.steps.build.label') }}</p>
            <p class="text-sm text-slate-200">{{ t('home.process.steps.build.text') }}</p>
          </div>
          <div class="glass-panel flex items-center justify-between px-6 py-5">
            <p class="text-sm uppercase tracking-[0.2em] text-slate-400">{{ t('home.process.steps.launch.label') }}</p>
            <p class="text-sm text-slate-200">{{ t('home.process.steps.launch.text') }}</p>
          </div>
        </div>
      </div>
      <div class="glass-panel relative overflow-hidden p-8">
        <div class="absolute -right-12 bottom-0 h-40 w-40 rounded-full bg-emerald-300/20 blur-3xl" />
        <div class="space-y-6">
          <p class="chip">{{ t('home.client.chip') }}</p>
          <p class="text-xl font-semibold">{{ t('home.client.quote') }}</p>
          <p class="text-sm text-slate-300">{{ t('home.client.description') }}</p>
          <div class="text-sm uppercase tracking-[0.2em] text-slate-400">{{ t('home.client.attribution') }}</div>
        </div>
      </div>
    </section>

    <section class="section-shell space-y-10">
      <SectionHeading
        :eyebrow="t('home.fieldNotes.eyebrow')"
        :title="t('home.fieldNotes.title')"
        :description="t('home.fieldNotes.description')"
      />
      <div class="grid gap-6 md:grid-cols-3">
        <PostCard v-for="item in posts" :key="item.id" :item="item" />
      </div>
    </section>

    <CalloutPanel />
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

const { data: posts } = await useAsyncData(
  'home-posts',
  () =>
    queryCollection('content')
      .where('path', 'LIKE', `/${locale.value}/blog/%`)
      .select('id', 'title', 'description', 'path', 'meta')
      .order('path', 'DESC')
      .limit(3)
      .all(),
  { watch: [locale] },
)

const metaTitle = computed(() => t('home.meta.title'))
const metaDescription = computed(() => t('home.meta.description'))

useSeoMeta({
  title: metaTitle,
  description: metaDescription,
})
</script>
