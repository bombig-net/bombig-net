<template>
  <div :class="['space-y-4', alignClass]">
    <div
      v-if="eyebrow"
      :class="['section-heading-kicker flex items-center gap-3', props.align === 'center' ? 'justify-center' : '']"
    >
      <span class="section-heading-rule" aria-hidden="true" />
      <p class="eyebrow">{{ eyebrow }}</p>
    </div>
    <h2 class="section-title headline-effect text-3xl font-semibold tracking-tight md:text-4xl">
      {{ title }}
    </h2>
    <p v-if="description" :class="['max-w-2xl text-sm body-copy', props.align === 'center' ? 'mx-auto' : '']">
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
