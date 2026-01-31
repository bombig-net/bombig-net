<template>
  <div class="showcase-rail">
    <div v-for="(item, index) in items" :key="item.key" class="showcase-rail-item">
      <NuxtLink :to="localePath(item.to)" class="showcase-rail-card glass-panel raised">
        <div class="showcase-rail-media" aria-hidden="true">
          <span class="showcase-rail-index">0{{ index + 1 }}</span>
          <div class="showcase-rail-glow" />
        </div>
        <div class="space-y-2">
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ item.eyebrow }}</p>
          <h3 class="text-xl font-semibold text-white">{{ item.title }}</h3>
          <p class="text-sm body-copy">{{ item.description }}</p>
        </div>
        <span class="ghost-button w-fit">{{ item.cta }}</span>
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
