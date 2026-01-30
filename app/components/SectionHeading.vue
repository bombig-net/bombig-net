<template>
  <div :class="['section-heading space-y-4', alignClass, props.align === 'center' ? 'section-heading-center' : '']">
    <div v-if="eyebrow" class="section-heading-kicker">
      <span class="section-heading-rule" aria-hidden="true" />
      <p class="eyebrow">{{ eyebrow }}</p>
    </div>
    <h2 class="section-title text-3xl tracking-tight text-white md:text-4xl">
      {{ title }}
    </h2>
    <p v-if="description" class="max-w-2xl text-sm text-slate-200">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}>()

const alignClass = computed(() => (props.align === 'center' ? 'text-center mx-auto' : 'text-left'))
</script>
