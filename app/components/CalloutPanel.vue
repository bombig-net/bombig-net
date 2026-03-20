<template>
  <section v-bind="sx(globalStyles.container)">
    <div v-bind="sx(globalStyles.panel, globalStyles.panelStrong, styles.root)">
      <div v-bind="sx(styles.copy)">
        <p v-bind="sx(globalStyles.eyebrow)">{{ t('callout.eyebrow') }}</p>
        <h2 v-bind="sx(globalStyles.sectionTitle)">{{ t('callout.title') }}</h2>
        <p v-bind="sx(globalStyles.body)">{{ t('callout.description') }}</p>
      </div>
      <div v-bind="sx(styles.actions)">
        <NuxtLink :to="localePath('/contact')" v-bind="sx(globalStyles.buttonBase, globalStyles.buttonPrimary)">
          {{ t('callout.primaryCta') }}
        </NuxtLink>
        <NuxtLink :to="localePath('/case-studies')" v-bind="sx(globalStyles.buttonBase, globalStyles.buttonSecondary)">
          {{ t('callout.secondaryCta') }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { globalStyles } from '../styles/system'
import { calloutPanelStyles as styles } from '../styles/view-styles'
import { sx } from '../utils/stylex'

const { t } = useI18n()
const localePath = useLocalePath()

</script>
