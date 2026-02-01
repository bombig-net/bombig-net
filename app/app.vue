<template>
  <div class="app-shell" @click="captureClickOrigin">
    <NuxtRouteAnnouncer />
    <!-- Ripple expansion overlay -->
    <div
      v-if="isTransitioning"
      class="page-ripple-overlay"
      :style="rippleStyle"
      aria-hidden="true"
    />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const isTransitioning = ref(false)
const clickOrigin = ref({ x: 50, y: 50 }) // percentage values, default to center

// Capture click position when clicking on links
const captureClickOrigin = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  const link = target.closest('a')

  // Only capture if clicking a NuxtLink/router link
  if (link && (link.hasAttribute('href') || link.hasAttribute('to'))) {
    const x = (event.clientX / window.innerWidth) * 100
    const y = (event.clientY / window.innerHeight) * 100
    clickOrigin.value = { x, y }
  }
}

// Compute the ripple style with click origin
const rippleStyle = computed(() => ({
  '--ripple-x': `${clickOrigin.value.x}%`,
  '--ripple-y': `${clickOrigin.value.y}%`,
}))

const nuxtApp = useNuxtApp()

// Hook into page transitions
nuxtApp.hook('page:transition:finish', () => {
  isTransitioning.value = false
})

// Watch for route changes to trigger ripple
const route = useRoute()
watch(() => route.fullPath, (newPath, oldPath) => {
  if (newPath !== oldPath) {
    isTransitioning.value = true
  }
})
</script>

<style>
/* Page transition - quick fade */
.page-sweep-enter-active,
.page-sweep-leave-active {
  transition: opacity 250ms ease-out;
}

.page-sweep-enter-from,
.page-sweep-leave-to {
  opacity: 0;
}

/* Subtle ripple - nearly invisible, just a hint */
.page-ripple-overlay {
  position: fixed;
  inset: 0;
  z-index: 40; /* Below navigation (z-50) - feels more natural */
  pointer-events: none;

  /* Very faint glow from click point */
  background: radial-gradient(
    circle at var(--ripple-x, 50%) var(--ripple-y, 50%),
    rgba(160, 246, 212, 0.12) 0%,
    rgba(123, 215, 255, 0.06) 30%,
    transparent 60%
  );

  /* Clip-path circle that expands fast */
  clip-path: circle(0% at var(--ripple-x, 50%) var(--ripple-y, 50%));
  animation: ripple-expand 300ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes ripple-expand {
  0% {
    clip-path: circle(0% at var(--ripple-x, 50%) var(--ripple-y, 50%));
    opacity: 1;
  }
  100% {
    clip-path: circle(100% at var(--ripple-x, 50%) var(--ripple-y, 50%));
    opacity: 0;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .page-sweep-enter-active,
  .page-sweep-leave-active {
    transition: none;
  }

  .page-ripple-overlay {
    display: none;
  }
}
</style>
