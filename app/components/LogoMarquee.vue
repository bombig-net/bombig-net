<template>
  <div class="logo-marquee" role="list" :aria-label="label">
    <div class="logo-marquee-track">
      <div
        v-for="(item, index) in trackItems"
        :key="`${item}-${index}`"
        class="logo-marquee-item"
        role="listitem"
        :aria-hidden="index >= items.length"
      >
        <img
          class="logo-image"
          :src="logoUrl(index)"
          :alt="item"
          loading="lazy"
        >
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

const logoCount = 16
const logoUrl = (index: number) => {
  const logoIndex = (index % logoCount) + 1
  return `https://logoipsum.com/logo/logo-${logoIndex}.svg`
}
</script>
