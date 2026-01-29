<template>
  <NuxtLink :to="item.path" class="group flex h-full flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-white/30">
    <div class="space-y-4">
      <div class="text-xs uppercase tracking-[0.2em] text-slate-400">
        {{ item.meta?.category || t('blog.card.fallbackCategory') }}
      </div>
      <div class="space-y-3">
        <h3 class="text-xl font-semibold text-white group-hover:text-white">{{ item.title }}</h3>
        <p class="text-sm text-slate-300">{{ item.description }}</p>
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
