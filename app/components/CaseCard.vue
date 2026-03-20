<template>
  <NuxtLink :to="item.path" v-bind="sx(styles.card)">
    <div v-bind="sx(styles.metaRow, globalStyles.meta)">
      <span>{{ item.meta.client }}</span>
      <span>{{ item.meta.year }}</span>
    </div>
    <div v-bind="sx(styles.body)">
      <h3 v-bind="sx(globalStyles.cardTitle)">{{ item.title }}</h3>
      <p v-bind="sx(globalStyles.body)">{{ item.description }}</p>
    </div>
    <div v-bind="sx(styles.tagRow)">
      <span v-for="tag in tags" :key="tag" v-bind="sx(globalStyles.badge)">
        {{ tag }}
      </span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { globalStyles } from '../styles/system'
import { caseCardStyles as styles } from '../styles/view-styles'
import { sx } from '../utils/stylex'

const props = defineProps<{
  item: {
    title: string
    description: string
    path: string
    meta: {
      client?: string
      year?: string
      tags?: string[]
    }
  }
}>()

const tags = computed(() => props.item.meta.tags?.slice(0, 3) ?? [])

</script>
