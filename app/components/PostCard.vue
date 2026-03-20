<template>
  <NuxtLink :to="item.path" v-bind="sx(styles.card)">
    <div v-bind="sx(styles.metaRow, globalStyles.meta)">
      <span>{{ item.meta.category }}</span>
      <span>{{ item.meta.read }}</span>
    </div>
    <div v-bind="sx(styles.body)">
      <h3 v-bind="sx(globalStyles.cardTitle)">{{ item.title }}</h3>
      <p v-bind="sx(globalStyles.body)">{{ item.description }}</p>
    </div>
    <span v-bind="sx(globalStyles.meta)">{{ item.meta.date }}</span>
  </NuxtLink>
</template>

<script setup lang="ts">
import { globalStyles } from '../styles/system'
import { postCardStyles as styles } from '../styles/view-styles'
import { sx } from '../utils/stylex'

defineProps<{
  item: {
    title: string
    description: string
    path: string
    meta: {
      date: string
      category: string
      read: string
    }
  }
}>()

</script>
