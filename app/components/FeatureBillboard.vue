<template>
  <section :class="['section-atmosphere', sectionClass]">
    <div class="section-shell">
      <div class="billboard p-8 md:p-12">
        <div class="billboard-orb a" aria-hidden="true" />
        <div class="billboard-orb b" aria-hidden="true" />
        <div
          :class="[
            'relative grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center',
            align === 'right' ? 'md:grid-cols-[0.95fr_1.05fr]' : '',
          ]"
        >
          <div :class="align === 'right' ? 'md:order-2' : ''" class="space-y-6">
            <p v-if="eyebrow" class="eyebrow text-slate-200/80">{{ eyebrow }}</p>
            <h3 class="section-title text-3xl text-white md:text-4xl">{{ title }}</h3>
            <p v-if="description" class="text-sm text-slate-200">{{ description }}</p>
            <div v-if="bullets?.length" class="space-y-3">
              <div v-for="(bullet, index) in bullets" :key="`${bullet}-${index}`" class="flex gap-3 text-sm text-slate-200">
                <span class="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-200/80" aria-hidden="true" />
                <span>{{ bullet }}</span>
              </div>
            </div>
            <div class="flex flex-wrap gap-4">
              <NuxtLink :to="localePath(ctaTo)" class="cta-button emerald">
                {{ ctaLabel }}
              </NuxtLink>
              <NuxtLink v-if="secondaryLabel && secondaryTo" :to="localePath(secondaryTo)" class="ghost-button glow">
                {{ secondaryLabel }}
              </NuxtLink>
            </div>
          </div>
          <div :class="align === 'right' ? 'md:order-1' : ''" class="billboard-media min-h-[260px] md:min-h-[320px]">
            <div class="billboard-media-grid" aria-hidden="true" />
            <div class="billboard-sheen" aria-hidden="true" />
            <div class="billboard-badges" aria-hidden="true">
              <span class="billboard-badge" />
              <span class="billboard-badge" />
              <span class="billboard-badge" />
            </div>
            <div class="billboard-media-stack" aria-hidden="true">
              <div class="billboard-card">
                <div class="billboard-card-line" />
                <div class="billboard-card-line short" />
                <div class="billboard-card-dot" />
              </div>
              <div class="billboard-card offset">
                <div class="billboard-card-line" />
                <div class="billboard-card-line short" />
                <div class="billboard-card-dot" />
              </div>
            </div>
            <div class="absolute inset-0 flex items-end justify-start p-6">
              <div class="glass-panel raised max-w-xs p-4">
                <p class="text-xs uppercase tracking-[0.2em] text-slate-300">{{ panelLabel }}</p>
                <p class="mt-2 text-sm text-slate-200">{{ panelText }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  eyebrow?: string
  title: string
  description?: string
  bullets?: string[]
  ctaLabel: string
  ctaTo: string
  secondaryLabel?: string
  secondaryTo?: string
  align?: 'left' | 'right'
  panelLabel: string
  panelText: string
  sectionClass?: string
}>()

const localePath = useLocalePath()
const align = computed(() => props.align ?? 'left')
const sectionClass = computed(() => props.sectionClass ?? '')
</script>
