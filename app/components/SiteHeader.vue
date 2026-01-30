<template>
  <header class="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[#0b0f0b]/70 backdrop-blur-xl">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <NuxtLink :to="localePath('/')" class="flex items-center gap-3 text-lg font-semibold">
        <span
          class="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-slate-100 shadow-lg shadow-emerald-500/10"
        >
          B
        </span>
        <span class="tracking-tight">Bombig</span>
      </NuxtLink>
      <nav class="hidden md:flex">
        <NavigationMenuRoot>
          <NavigationMenuList class="flex items-center gap-8 text-sm uppercase tracking-[0.2em] text-slate-200">
            <NavigationMenuItem v-for="item in primaryNav" :key="item.to" class="relative group">
              <template v-if="item.children">
                <NavigationMenuTrigger class="inline-flex items-center gap-2 uppercase transition hover:text-white">
                  {{ t(item.key) }}
                  <span class="text-xs text-slate-400 transition group-hover:text-white">▾</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent
                  class="absolute left-0 top-full z-50 mt-4 w-64 rounded-2xl border border-white/10 bg-[#0b0e13]/95 p-4 shadow-xl"
                >
                  <div class="flex flex-col gap-3 text-xs uppercase tracking-[0.2em] text-slate-200">
                    <NavigationMenuLink as-child>
                      <NuxtLink :to="localePath(item.to)" class="transition hover:text-white">
                        {{ t('navServices.overview') }}
                      </NuxtLink>
                    </NavigationMenuLink>
                    <NavigationMenuLink v-for="child in item.children" :key="child.to" as-child>
                      <NuxtLink :to="localePath(child.to)" class="transition hover:text-white">
                        {{ t(child.key) }}
                      </NuxtLink>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </template>
              <NavigationMenuLink v-else as-child>
                <NuxtLink :to="localePath(item.to)" class="transition hover:text-white">
                  {{ t(item.key) }}
                </NuxtLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenuRoot>
      </nav>
      <div class="flex items-center gap-3">
          <NuxtLink :to="localePath('/contact')" class="cta-button emerald hidden sm:inline-flex">
            {{ t('header.letsTalk') }}
          </NuxtLink>
          <NuxtLink
            :to="switchLocalePath(otherLocale)"
            class="hidden rounded-full border border-white/25 px-3 py-2 text-xs uppercase tracking-[0.2em] text-white/90 transition hover:border-white/50 sm:inline-flex"
            :aria-label="t('header.language')"
          >
            {{ otherLocale.toUpperCase() }}
          </NuxtLink>
        <DialogRoot v-model:open="mobileMenuOpen">
          <DialogTrigger as-child>
            <button type="button" class="cta-button emerald md:hidden">{{ t('header.menu') }}</button>
          </DialogTrigger>
          <DialogPortal>
            <DialogOverlay class="fixed inset-0 z-[60] bg-[#0b0e13]/70 backdrop-blur-sm" />
            <DialogContent
              class="fixed right-6 top-24 z-[70] w-56 rounded-2xl border border-white/10 bg-[#0b0e13]/95 p-4 shadow-xl"
            >
              <VisuallyHidden as-child>
                <DialogTitle>{{ t('header.menu') }}</DialogTitle>
              </VisuallyHidden>
              <div class="flex flex-col gap-4 text-sm uppercase tracking-[0.2em] text-slate-200">
                <div v-for="item in primaryNav" :key="item.to" class="space-y-2">
                  <NuxtLink
                    :to="localePath(item.to)"
                    class="block transition hover:text-white"
                    @click="mobileMenuOpen = false"
                  >
                    {{ t(item.key) }}
                  </NuxtLink>
                  <div v-if="item.children" class="flex flex-col gap-2 pl-3 text-xs text-slate-400">
                    <NuxtLink
                      v-for="child in item.children"
                      :key="child.to"
                      :to="localePath(child.to)"
                      class="transition hover:text-white"
                      @click="mobileMenuOpen = false"
                    >
                      {{ t(child.key) }}
                    </NuxtLink>
                  </div>
                </div>
                <NuxtLink :to="localePath('/contact')" class="text-white" @click="mobileMenuOpen = false">
                  {{ t('header.letsTalk') }}
                </NuxtLink>
                <NuxtLink :to="switchLocalePath(otherLocale)" class="text-white" @click="mobileMenuOpen = false">
                  {{ otherLocale.toUpperCase() }}
                </NuxtLink>
              </div>
            </DialogContent>
          </DialogPortal>
        </DialogRoot>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const config = useAppConfig()
const { t, locale } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const route = useRoute()
const mobileMenuOpen = ref(false)

watch(
  () => route.fullPath,
  () => {
    mobileMenuOpen.value = false
  },
)
const primaryNav = computed(() => config.navigation?.primary ?? [])
const otherLocale = computed(() => (locale.value === 'en' ? 'de' : 'en'))
</script>
