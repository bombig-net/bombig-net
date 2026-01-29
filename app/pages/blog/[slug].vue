<template>
  <article v-if="post" class="space-y-12 pb-24">
    <section class="section-shell space-y-6 pt-16">
      <p class="eyebrow">{{ t('blog.detail.eyebrow') }}</p>
      <h1 class="text-4xl font-semibold md:text-5xl">{{ post.title }}</h1>
      <p class="max-w-2xl text-sm text-slate-300">{{ post.description }}</p>
      <div class="flex flex-wrap gap-4 text-xs uppercase tracking-[0.2em] text-slate-400">
        <span>{{ post.meta?.category || t('blog.detail.fallbackCategory') }}</span>
        <span>/</span>
        <span>{{ post.meta?.date || t('blog.detail.fallbackDate') }}</span>
        <span>/</span>
        <span>{{ post.meta?.read || t('blog.detail.fallbackRead') }}</span>
      </div>
    </section>

    <section class="section-shell">
      <div class="prose max-w-none">
        <ContentRenderer :value="post" />
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = String(route.params.slug)
const { t, locale } = useI18n()

const { data: post } = await useAsyncData(
  `post-${slug}`,
  () =>
    queryCollection('content')
      .path(`/${locale.value}/blog/${slug}`)
      .first(),
  { watch: [locale] },
)

const metaTitle = computed(() => post.value?.title || t('blog.meta.title'))
const metaDescription = computed(() => post.value?.description || t('blog.meta.description'))

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found' })
}

useSeoMeta({
  title: metaTitle,
  description: metaDescription,
})
</script>
