<template>
  <article v-if="post" v-bind="sx(globalStyles.pageStack)">
    <section v-bind="sx(globalStyles.container, globalStyles.heroSection, globalStyles.sectionSurface)">
      <p v-bind="sx(globalStyles.eyebrow)">{{ t('blog.detail.eyebrow') }}</p>
      <h1 v-bind="sx(globalStyles.title)">{{ post.title }}</h1>
      <p v-bind="sx(globalStyles.body, styles.copy)">{{ post.description }}</p>
      <div v-bind="sx(styles.metaRow, globalStyles.meta)">
        <span>{{ post.meta.category }}</span>
        <span>{{ post.meta.date }}</span>
        <span>{{ post.meta.read }}</span>
      </div>
    </section>

    <section v-bind="sx(globalStyles.container)">
      <div v-bind="sx(globalStyles.panel, styles.proseWrap)">
        <div v-bind="sx(globalStyles.prose)">
          <ContentRenderer :value="post" />
        </div>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
import { globalStyles } from '../../styles/system'
import { blogDetailPageStyles as styles } from '../../styles/view-styles'
import { sx } from '../../utils/stylex'

const route = useRoute()
const { t, locale } = useI18n()

if (typeof route.params.slug !== 'string') {
  throw createError({ statusCode: 404, statusMessage: 'Post not found' })
}

const slug = route.params.slug
const { data: post } = await useAsyncData(
  () => `post-${locale.value}-${slug}`,
  () => queryCollection('blog').path(`/${locale.value}/blog/${slug}`).first(),
  { watch: [locale] },
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found' })
}

useSeoMeta({
  title: computed(() => post.value?.title || t('blog.meta.title')),
  description: computed(() => post.value?.description || t('blog.meta.description')),
})

</script>
