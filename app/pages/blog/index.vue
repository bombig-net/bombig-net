<template>
  <div class="space-y-16 pb-24">
    <section class="section-shell space-y-6 pt-16">
      <p class="eyebrow">{{ t('blog.index.eyebrow') }}</p>
      <h1 class="text-4xl font-semibold md:text-5xl">{{ t('blog.index.title') }}</h1>
      <p class="max-w-2xl text-sm text-slate-300">{{ t('blog.index.description') }}</p>
    </section>

    <section class="section-shell grid gap-6 md:grid-cols-3">
      <PostCard v-for="item in posts" :key="item.id" :item="item" />
    </section>

    <CalloutPanel />
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n()
const metaTitle = computed(() => t('blog.meta.title'))
const metaDescription = computed(() => t('blog.meta.description'))

const { data: posts } = await useAsyncData(
  'blog-list',
  () =>
    queryCollection('content')
      .where('path', 'LIKE', `/${locale.value}/blog/%`)
      .select('id', 'title', 'description', 'path', 'meta')
      .order('path', 'DESC')
      .all(),
  { watch: [locale] },
)

useSeoMeta({
  title: metaTitle,
  description: metaDescription,
})
</script>
