<template>
  <header class="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[#0b0e13]/80 backdrop-blur-xl">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <NuxtLink :to="localePath('/')" class="flex items-center gap-3 text-lg font-semibold">
        <span class="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-slate-950">B</span>
        <span class="tracking-tight">Bombig</span>
      </NuxtLink>
      <nav class="hidden items-center gap-8 text-sm uppercase tracking-[0.2em] text-slate-200 md:flex">
        <NuxtLink
          v-for="item in primaryNav"
          :key="item.to"
          :to="localePath(item.to)"
          class="transition hover:text-white"
        >
          {{ t(item.key) }}
        </NuxtLink>
      </nav>
      <div class="flex items-center gap-3">
        <NuxtLink :to="localePath('/contact')" class="ghost-button hidden md:inline-flex">{{ t('header.startProject') }}</NuxtLink>
        <NuxtLink :to="localePath('/contact')" class="cta-button hidden sm:inline-flex">{{ t('header.letsTalk') }}</NuxtLink>
        <NuxtLink
          :to="switchLocalePath(otherLocale)"
          class="hidden rounded-full border border-white/20 px-3 py-2 text-xs uppercase tracking-[0.2em] text-white transition hover:border-white/40 sm:inline-flex"
          :aria-label="t('header.language')"
        >
          {{ otherLocale.toUpperCase() }}
        </NuxtLink>
        <details class="relative md:hidden">
          <summary class="cta-button cursor-pointer list-none">{{ t('header.menu') }}</summary>
          <div class="absolute right-0 mt-3 w-48 rounded-2xl border border-white/10 bg-[#0b0e13]/95 p-4 shadow-xl">
            <div class="flex flex-col gap-3 text-sm uppercase tracking-[0.2em] text-slate-200">
              <NuxtLink v-for="item in primaryNav" :key="item.to" :to="localePath(item.to)" class="transition hover:text-white">
                {{ t(item.key) }}
              </NuxtLink>
              <NuxtLink :to="localePath('/contact')" class="text-white">{{ t('header.letsTalk') }}</NuxtLink>
              <NuxtLink :to="switchLocalePath(otherLocale)" class="text-white">{{ otherLocale.toUpperCase() }}</NuxtLink>
            </div>
          </div>
        </details>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const config = useAppConfig()
const { t, locale } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const primaryNav = computed(() => config.navigation?.primary ?? [])
const otherLocale = computed(() => (locale.value === 'en' ? 'de' : 'en'))
</script>
