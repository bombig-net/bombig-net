<template>
  <div v-bind="sx(globalStyles.pageStack)">
    <section v-bind="sx(globalStyles.container, globalStyles.heroSection, globalStyles.sectionSurface)">
      <p v-bind="sx(globalStyles.eyebrow)">{{ t('blog.index.eyebrow') }}</p>
      <h1 v-bind="sx(globalStyles.title)">{{ t('blog.index.title') }}</h1>
      <p v-bind="sx(globalStyles.body, styles.copy)">{{ t('blog.index.description') }}</p>
    </section>

    <section v-bind="sx(globalStyles.container)">
      <div v-bind="sx(globalStyles.gridCards)">
        <PostCard v-for="item in posts" :key="item.id" :item="item" />
      </div>
    </section>

    <CalloutPanel />
  </div>
</template>

<script setup lang="ts">
import { globalStyles } from '../../styles/system'
import { blogIndexPageStyles as styles } from '../../styles/view-styles'
import { sx } from '../../utils/stylex'

const { t, locale } = useI18n()

const { data: posts } = await useAsyncData(
  () => `blog-list-${locale.value}`,
  () =>
    queryCollection('blog')
      .where('path', 'LIKE', `/${locale.value}/blog/%`)
      .select('id', 'title', 'description', 'path', 'meta')
      .order('path', 'DESC')
      .all(),
  { watch: [locale], default: () => [] },
)

useSeoMeta({
  title: computed(() => t('blog.meta.title')),
  description: computed(() => t('blog.meta.description')),
})

</script>
