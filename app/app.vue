<template>
  <div v-bind="sx(globalStyles.appShell)">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { globalStyles } from './styles/system'
import { sx } from './utils/stylex'
</script>
