<template>
  <NuxtLink :to="item.path" class="group section-card">
    <div class="section-card-media" aria-hidden="true" />
    <div class="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
      <span>{{ item.meta?.client || t('caseStudies.card.fallbackClient') }}</span>
      <span>{{ item.meta?.year || t('caseStudies.card.fallbackYear') }}</span>
    </div>
    <div class="space-y-3">
      <h3 class="text-xl font-semibold text-white">{{ item.title }}</h3>
      <p class="text-sm body-copy">{{ item.description }}</p>
    </div>
    <div class="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-slate-400">
      <span v-for="tag in tags" :key="tag" class="chip">{{ tag }}</span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
type ContentItem = {
  title?: string
  description?: string
  path?: string
  meta?: Record<string, unknown>
}

const props = defineProps<{ item: ContentItem }>()

const { t } = useI18n()

const tags = computed(() => {
  const metaTags = props.item.meta?.tags
  if (Array.isArray(metaTags)) {
    return metaTags.slice(0, 3) as string[]
  }
  return [
    t('caseStudies.card.defaultTags.first'),
    t('caseStudies.card.defaultTags.second'),
    t('caseStudies.card.defaultTags.third'),
  ]
})
</script>
