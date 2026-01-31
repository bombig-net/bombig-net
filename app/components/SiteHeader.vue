<template>
  <header class="fixed left-0 right-0 top-0 z-50 pt-6">
    <div class="mx-auto w-full max-w-6xl px-6">
      <div class="nav-bar">
        <div class="nav-inner relative flex items-center justify-between gap-4 rounded-full py-[0.45rem] pr-3 pl-4">
          <NuxtLink :to="localePath('/')" class="nav-logo" aria-label="bombig.net">
            <span class="nav-logo-mark" aria-hidden="true">
              <svg viewBox="0 0 24 24" class="nav-logo-icon" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2.5 12h4.2l2-4.8 3.2 9.6 2.2-5.1H21.5" />
              </svg>
            </span>
            <span>bombig.net</span>
          </NuxtLink>
          <nav class="hidden md:flex">
            <NavigationMenuRoot>
              <NavigationMenuList class="flex items-center gap-1">
                <NavigationMenuItem v-for="item in primaryNav" :key="item.to" class="relative">
                  <template v-if="item.children">
                    <NavigationMenuTrigger class="nav-pill">
                      {{ t(item.key) }}
                      <span class="text-[0.6rem] text-slate-400">▾</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent class="absolute left-0 top-full z-50 mt-4 w-72 p-4 nav-panel">
                      <div class="flex flex-col gap-3 text-xs uppercase tracking-[0.22em] text-slate-200">
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
                    <NuxtLink :to="localePath(item.to)" class="nav-pill" active-class="nav-pill-active">
                      {{ t(item.key) }}
                    </NuxtLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenuRoot>
          </nav>
          <div class="flex items-center gap-2">
            <NuxtLink :to="localePath('/contact')" class="nav-cta hidden sm:inline-flex">
              {{ t('header.letsTalk') }}
            </NuxtLink>
            <NuxtLink
              :to="switchLocalePath(otherLocale)"
              class="nav-pill hidden sm:inline-flex"
              :aria-label="t('header.language')"
            >
              {{ otherLocale.toUpperCase() }}
            </NuxtLink>
            <DialogRoot v-model:open="mobileMenuOpen">
              <DialogTrigger as-child>
                <button type="button" class="nav-pill md:hidden">{{ t('header.menu') }}</button>
              </DialogTrigger>
              <DialogPortal>
                <DialogOverlay class="nav-overlay fixed inset-0 z-[60] backdrop-blur" />
                <DialogContent class="nav-drawer z-[70]">
                  <VisuallyHidden as-child>
                    <DialogTitle>{{ t('header.menu') }}</DialogTitle>
                  </VisuallyHidden>
                  <div class="relative z-10 flex items-center justify-between">
                    <NuxtLink :to="localePath('/')" class="nav-logo" aria-label="bombig.net" @click="mobileMenuOpen = false">
                      <span class="nav-logo-mark" aria-hidden="true">
                        <svg viewBox="0 0 24 24" class="nav-logo-icon" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M2.5 12h4.2l2-4.8 3.2 9.6 2.2-5.1H21.5" />
                        </svg>
                      </span>
                      <span>bombig.net</span>
                    </NuxtLink>
                    <button type="button" class="nav-pill" @click="mobileMenuOpen = false">Close</button>
                  </div>
                  <div class="relative z-10 mt-12 flex flex-col gap-8">
                    <div class="flex flex-col gap-4 text-base uppercase tracking-[0.22em] text-white">
                      <div v-for="item in primaryNav" :key="item.to" class="space-y-3">
                        <NuxtLink
                          :to="localePath(item.to)"
                          class="block transition hover:text-emerald-50"
                          @click="mobileMenuOpen = false"
                        >
                          {{ t(item.key) }}
                        </NuxtLink>
                        <div v-if="item.children" class="flex flex-col gap-2 pl-3 text-xs text-slate-300">
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
                    </div>
                    <div class="flex flex-col gap-4">
                      <NuxtLink :to="localePath('/contact')" class="nav-cta w-fit" @click="mobileMenuOpen = false">
                        {{ t('header.letsTalk') }}
                      </NuxtLink>
                      <NuxtLink
                        :to="switchLocalePath(otherLocale)"
                        class="nav-pill w-fit"
                        @click="mobileMenuOpen = false"
                      >
                        {{ otherLocale.toUpperCase() }}
                      </NuxtLink>
                    </div>
                  </div>
                </DialogContent>
              </DialogPortal>
            </DialogRoot>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import {
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuRoot,
  NavigationMenuTrigger,
  VisuallyHidden,
} from 'reka-ui'

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
