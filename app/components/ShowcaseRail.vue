<template>
  <div class="showcase-rail">
    <div v-for="item in items" :key="item.key" class="showcase-rail-item">
      <NuxtLink :to="localePath(item.to)" class="glass-panel raised flex h-full flex-col gap-4 p-6">
        <div class="space-y-2">
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ item.eyebrow }}</p>
          <h3 class="text-xl font-semibold text-white">{{ item.title }}</h3>
          <p class="text-sm text-slate-200">{{ item.description }}</p>
        </div>
        <span class="ghost-button glow w-fit">{{ item.cta }}</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
type ShowcaseItem = {
  key: string
  eyebrow: string
  title: string
  description: string
  cta: string
  to: string
}

defineProps<{
  items: ShowcaseItem[]
}>()

const localePath = useLocalePath()
</script>
