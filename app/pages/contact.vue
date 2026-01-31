<template>
  <div class="space-y-16 pb-24">
    <section class="mx-auto w-full max-w-6xl px-6 grid gap-12 pt-16 md:grid-cols-[1.1fr_0.9fr]">
      <div class="section-surface surface-grid space-y-6">
        <p class="eyebrow">{{ t('contact.hero.eyebrow') }}</p>
        <h1 class="text-4xl font-semibold tracking-tight text-white md:text-5xl">{{ t('contact.hero.title') }}</h1>
        <p class="text-sm text-slate-200">{{ t('contact.hero.description') }}</p>
        <div class="space-y-2 text-sm text-slate-200">
          <p>{{ config.site?.email }}</p>
          <p>{{ config.site?.phone }}</p>
          <p>{{ config.site?.location }}</p>
        </div>
      </div>
      <form class="glass-panel highlight grid gap-4 p-8" @submit.prevent="onSubmit">
        <div class="sr-only" aria-hidden="true">
          <label for="company">Company</label>
          <input id="company" v-model="form.company" name="company" tabindex="-1" autocomplete="off" type="text">
        </div>
        <label class="text-xs uppercase tracking-[0.2em] text-slate-400" for="name">{{ t('contact.form.name') }}</label>
        <input
          id="name"
          v-model="form.name"
          name="name"
          type="text"
          autocomplete="name"
          required
          class="form-field"
          :placeholder="t('contact.form.namePlaceholder')"
        >
        <label class="text-xs uppercase tracking-[0.2em] text-slate-400" for="email">{{ t('contact.form.email') }}</label>
        <input
          id="email"
          v-model="form.email"
          name="email"
          type="email"
          autocomplete="email"
          required
          class="form-field"
          :placeholder="t('contact.form.emailPlaceholder')"
        >
        <label class="text-xs uppercase tracking-[0.2em] text-slate-400" for="project">{{ t('contact.form.project') }}</label>
        <textarea
          id="project"
          v-model="form.project"
          name="project"
          autocomplete="off"
          required
          rows="4"
          class="form-field"
          :placeholder="t('contact.form.projectPlaceholder')"
        />
        <button type="submit" class="cta-button emerald justify-center" :disabled="isSending">
          {{ isSending ? t('contact.form.sending') : t('contact.form.submit') }}
        </button>
        <p class="text-xs text-slate-400">{{ t('contact.form.note') }}</p>
        <p v-if="status === 'success'" class="text-xs text-emerald-300" role="status">
          {{ t('contact.form.success') }}
        </p>
        <p v-if="status === 'error'" class="text-xs text-rose-300" role="alert">
          {{ errorMessage || t('contact.form.error') }}
        </p>
      </form>
    </section>
  </div>
</template>

<script setup lang="ts">
const config = useAppConfig()
const { t, locale } = useI18n()
const metaTitle = computed(() => t('contact.meta.title'))
const metaDescription = computed(() => t('contact.meta.description'))

const form = reactive({
  name: '',
  email: '',
  project: '',
  company: '',
})

const status = ref<'idle' | 'sending' | 'success' | 'error'>('idle')
const errorMessage = ref('')
const isSending = computed(() => status.value === 'sending')

const onSubmit = async () => {
  if (isSending.value) {
    return
  }
  status.value = 'sending'
  errorMessage.value = ''
  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: form.name,
        email: form.email,
        project: form.project,
        company: form.company,
        locale: locale.value,
      },
    })
    status.value = 'success'
    form.name = ''
    form.email = ''
    form.project = ''
    form.company = ''
  } catch (error) {
    status.value = 'error'
    const message = error instanceof Error ? error.message : ''
    errorMessage.value = message
  }
}

useSeoMeta({
  title: metaTitle,
  description: metaDescription,
})
</script>
