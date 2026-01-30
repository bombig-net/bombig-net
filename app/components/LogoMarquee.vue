<template>
  <div class="glass-panel highlight p-6">
    <p v-if="label" class="text-xs uppercase tracking-[0.2em] text-slate-400">
      {{ label }}
    </p>
    <div class="logo-marquee mt-6" role="list" :aria-label="label">
      <div class="logo-marquee-track">
        <div
          v-for="(item, index) in trackItems"
          :key="`${item}-${index}`"
          class="logo-marquee-item"
          role="listitem"
          :aria-hidden="index >= items.length"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label?: string
  items: string[]
}>()

const trackItems = computed(() => [...props.items, ...props.items])
const items = computed(() => props.items)
</script>
