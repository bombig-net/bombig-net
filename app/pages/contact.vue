<template>
  <div class="space-y-16 pb-24">
    <section class="section-shell grid gap-12 pt-16 md:grid-cols-[1.1fr_0.9fr]">
      <div class="space-y-6">
        <p class="eyebrow">{{ t('contact.hero.eyebrow') }}</p>
        <h1 class="text-4xl font-semibold md:text-5xl">{{ t('contact.hero.title') }}</h1>
        <p class="text-sm text-slate-300">{{ t('contact.hero.description') }}</p>
        <div class="space-y-2 text-sm text-slate-200">
          <p>{{ config.site?.email }}</p>
          <p>{{ config.site?.phone }}</p>
          <p>{{ config.site?.location }}</p>
        </div>
      </div>
      <form class="glass-panel grid gap-4 p-8">
        <label class="text-xs uppercase tracking-[0.2em] text-slate-400" for="name">{{ t('contact.form.name') }}</label>
        <input
          id="name"
          type="text"
          class="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
          :placeholder="t('contact.form.namePlaceholder')"
        >
        <label class="text-xs uppercase tracking-[0.2em] text-slate-400" for="email">{{ t('contact.form.email') }}</label>
        <input
          id="email"
          type="email"
          class="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
          :placeholder="t('contact.form.emailPlaceholder')"
        >
        <label class="text-xs uppercase tracking-[0.2em] text-slate-400" for="project">{{ t('contact.form.project') }}</label>
        <textarea
          id="project"
          rows="4"
          class="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
          :placeholder="t('contact.form.projectPlaceholder')"
        />
        <button type="submit" class="cta-button justify-center">{{ t('contact.form.submit') }}</button>
        <p class="text-xs text-slate-400">{{ t('contact.form.note') }}</p>
      </form>
    </section>
  </div>
</template>

<script setup lang="ts">
const config = useAppConfig()
const { t } = useI18n()
const metaTitle = computed(() => t('contact.meta.title'))
const metaDescription = computed(() => t('contact.meta.description'))

useSeoMeta({
  title: metaTitle,
  description: metaDescription,
})
</script>
