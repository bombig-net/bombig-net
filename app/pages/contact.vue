<template>
  <div v-bind="sx(globalStyles.pageStack)">
    <section v-bind="sx(globalStyles.container, globalStyles.heroSection, globalStyles.gridTwo)">
      <div v-bind="sx(globalStyles.sectionSurface)">
        <p v-bind="sx(globalStyles.eyebrow)">{{ t('contact.hero.eyebrow') }}</p>
        <h1 v-bind="sx(globalStyles.title)">{{ t('contact.hero.title') }}</h1>
        <p v-bind="sx(globalStyles.body)">{{ t('contact.hero.description') }}</p>
        <div v-bind="sx(styles.contactMeta)">
          <span>{{ SITE_PROFILE.email }}</span>
          <span>{{ SITE_PROFILE.phone }}</span>
          <span>{{ SITE_PROFILE.location }}</span>
        </div>
      </div>

      <form v-bind="sx(globalStyles.panel, globalStyles.panelStrong, styles.form)" @submit.prevent="onSubmit">
        <div v-bind="sx(styles.hiddenField)" aria-hidden="true">
          <label for="company">Company</label>
          <input id="company" v-model="form.company" name="company" tabindex="-1" autocomplete="off" type="text">
        </div>
        <label for="name" v-bind="sx(globalStyles.meta)">{{ t('contact.form.name') }}</label>
        <input id="name" v-model="form.name" name="name" type="text" autocomplete="name" required v-bind="sx(globalStyles.field)" :placeholder="t('contact.form.namePlaceholder')">
        <label for="email" v-bind="sx(globalStyles.meta)">{{ t('contact.form.email') }}</label>
        <input id="email" v-model="form.email" name="email" type="email" autocomplete="email" required v-bind="sx(globalStyles.field)" :placeholder="t('contact.form.emailPlaceholder')">
        <label for="project" v-bind="sx(globalStyles.meta)">{{ t('contact.form.project') }}</label>
        <textarea id="project" v-model="form.project" name="project" rows="6" required v-bind="sx(globalStyles.field, styles.textarea)" :placeholder="t('contact.form.projectPlaceholder')" />
        <button type="submit" :disabled="state.kind === 'sending'" v-bind="sx(globalStyles.buttonBase, globalStyles.buttonPrimary, styles.submit)">
          {{ state.kind === 'sending' ? t('contact.form.sending') : t('contact.form.submit') }}
        </button>
        <p v-bind="sx(globalStyles.body, styles.note)">{{ t('contact.form.note') }}</p>
        <p v-if="state.kind === 'success'" role="status" v-bind="sx(styles.success)">{{ t('contact.form.success') }}</p>
        <p v-if="state.kind === 'error'" role="alert" v-bind="sx(styles.error)">{{ state.message || t('contact.form.error') }}</p>
      </form>
    </section>
  </div>
</template>

<script setup lang="ts">
import { contactRequestSchema, contactSuccessSchema, type ContactRequest } from '~~/shared/contracts/contact'
import { SITE_PROFILE } from '~~/shared/contracts/site'
import { globalStyles } from '../styles/system'
import { contactPageStyles as styles } from '../styles/view-styles'
import { sx } from '../utils/stylex'

const { t, locale } = useI18n()

const form = reactive<ContactRequest>({
  name: '',
  email: '',
  project: '',
  company: '',
  locale: locale.value === 'en' ? 'en' : 'de',
})

type SubmitState =
  | { kind: 'idle' }
  | { kind: 'sending' }
  | { kind: 'success' }
  | { kind: 'error'; message: string }

const state = ref<SubmitState>({ kind: 'idle' })

watch(locale, (value) => {
  form.locale = value === 'en' ? 'en' : 'de'
})

const onSubmit = async () => {
  if (state.value.kind === 'sending') {
    return
  }

  state.value = { kind: 'sending' }

  try {
    const payload = contactRequestSchema.parse(form)
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: payload,
    })

    contactSuccessSchema.parse(response)
    state.value = { kind: 'success' }
    form.name = ''
    form.email = ''
    form.project = ''
    form.company = ''
  } catch (error) {
    const message = error instanceof Error ? error.message : ''
    state.value = { kind: 'error', message }
  }
}

useSeoMeta({
  title: computed(() => t('contact.meta.title')),
  description: computed(() => t('contact.meta.description')),
})

</script>
