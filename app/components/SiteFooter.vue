<template>
  <footer class="footer-surface mt-24 border-t">
    <div class="mx-auto w-full max-w-6xl px-6 grid gap-10 py-16 md:grid-cols-[2fr_1fr_1fr]">
      <div class="space-y-4">
        <p class="text-2xl font-semibold text-white">{{ t('footer.tagline') }}</p>
        <p class="text-sm text-slate-200">{{ t('footer.blurb') }}</p>
        <div class="flex flex-wrap gap-3 text-sm text-slate-200">
          <span>{{ config.site?.location }}</span>
          <span class="text-slate-500">|</span>
          <span>{{ config.site?.phone }}</span>
          <span class="text-slate-500">|</span>
          <span>{{ config.site?.email }}</span>
        </div>
      </div>
      <div class="space-y-3 text-sm">
        <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('footer.explore') }}</p>
        <NuxtLink
          v-for="item in footerNav"
          :key="item.to"
          :to="localePath(item.to)"
          class="block text-slate-200 transition hover:text-white"
        >
          {{ t(item.key) }}
        </NuxtLink>
      </div>
      <div class="space-y-3 text-sm">
        <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('footer.elsewhere') }}</p>
        <NuxtLink
          v-for="item in socials"
          :key="item.href"
          :to="item.href"
          external
          class="block text-slate-200 transition hover:text-white"
        >
          {{ item.label }}
        </NuxtLink>
        <div class="pt-4 text-xs uppercase tracking-[0.2em] text-slate-500">{{ t('footer.copyright') }}</div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const config = useAppConfig()
const { t } = useI18n()
const localePath = useLocalePath()
const footerNav = computed(() => config.navigation?.footer ?? [])
const socials = computed(() => config.socials ?? [])
</script>
