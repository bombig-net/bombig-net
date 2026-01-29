<template>
  <header class="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[#0b0e13]/80 backdrop-blur-xl">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <NuxtLink :to="localePath('/')" class="flex items-center gap-3 text-lg font-semibold">
        <span class="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-slate-950">B</span>
        <span class="tracking-tight">Bombig</span>
      </NuxtLink>
      <nav class="hidden items-center gap-8 text-sm uppercase tracking-[0.2em] text-slate-200 md:flex">
        <div v-for="item in primaryNav" :key="item.to" class="relative">
          <details v-if="item.children" class="group">
            <summary class="inline-flex cursor-pointer list-none items-center gap-2 transition hover:text-white">
              {{ t(item.key) }}
              <span class="text-xs text-slate-400 transition group-open:text-white">▾</span>
            </summary>
            <div
              class="absolute left-0 top-full z-50 mt-4 w-64 rounded-2xl border border-white/10 bg-[#0b0e13]/95 p-4 shadow-xl"
            >
              <div class="flex flex-col gap-3 text-xs uppercase tracking-[0.2em] text-slate-200">
                <NuxtLink :to="localePath(item.to)" class="transition hover:text-white">
                  {{ t('navServices.overview') }}
                </NuxtLink>
                <NuxtLink
                  v-for="child in item.children"
                  :key="child.to"
                  :to="localePath(child.to)"
                  class="transition hover:text-white"
                >
                  {{ t(child.key) }}
                </NuxtLink>
              </div>
            </div>
          </details>
          <NuxtLink v-else :to="localePath(item.to)" class="transition hover:text-white">
            {{ t(item.key) }}
          </NuxtLink>
        </div>
      </nav>
      <div class="flex items-center gap-3">
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
          <div class="absolute right-0 mt-3 w-56 rounded-2xl border border-white/10 bg-[#0b0e13]/95 p-4 shadow-xl">
            <div class="flex flex-col gap-4 text-sm uppercase tracking-[0.2em] text-slate-200">
              <div v-for="item in primaryNav" :key="item.to" class="space-y-2">
                <NuxtLink :to="localePath(item.to)" class="block transition hover:text-white">
                  {{ t(item.key) }}
                </NuxtLink>
                <div v-if="item.children" class="flex flex-col gap-2 pl-3 text-xs text-slate-400">
                  <NuxtLink
                    v-for="child in item.children"
                    :key="child.to"
                    :to="localePath(child.to)"
                    class="transition hover:text-white"
                  >
                    {{ t(child.key) }}
                  </NuxtLink>
                </div>
              </div>
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
