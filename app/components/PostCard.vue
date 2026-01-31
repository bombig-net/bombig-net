<template>
  <NuxtLink :to="item.path" class="group section-card justify-between">
    <div class="section-card-media" aria-hidden="true" />
    <div class="space-y-4">
      <div class="text-xs uppercase tracking-[0.2em] text-slate-400">
        {{ item.meta?.category || t('blog.card.fallbackCategory') }}
      </div>
      <div class="space-y-3">
        <h3 class="text-xl font-semibold text-white">{{ item.title }}</h3>
        <p class="text-sm body-copy">{{ item.description }}</p>
      </div>
    </div>
    <div class="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
      <span>{{ item.meta?.read || t('blog.card.fallbackRead') }}</span>
      <span>{{ item.meta?.date || t('blog.card.fallbackDate') }}</span>
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

const { t } = useI18n()
defineProps<{ item: ContentItem }>()
</script>
