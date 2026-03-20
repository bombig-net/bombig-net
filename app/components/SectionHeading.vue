<template>
  <div v-bind="sx(styles.root, style)">
    <p v-if="eyebrow" v-bind="sx(globalStyles.eyebrow)">{{ eyebrow }}</p>
    <h2 v-bind="sx(globalStyles.sectionTitle)">{{ title }}</h2>
    <p v-if="description" v-bind="sx(globalStyles.body, styles.description)">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
import type { StyleXStyles } from '@stylexjs/stylex'
import { globalStyles } from '../styles/system'
import { sectionHeadingStyles as styles } from '../styles/view-styles'
import { sx } from '../utils/stylex'

defineProps<{
  eyebrow?: string
  title: string
  description?: string
  style?: StyleXStyles
}>()

</script>
