<template>
  <div v-bind="sx(globalStyles.pageStack)">
    <section v-bind="sx(globalStyles.container, globalStyles.heroSection, globalStyles.gridTwo)">
      <div v-bind="sx(globalStyles.sectionSurface)">
        <p v-bind="sx(globalStyles.eyebrow)">{{ t('servicePages.educationResearch.hero.eyebrow') }}</p>
        <h1 v-bind="sx(globalStyles.title)">{{ t('servicePages.educationResearch.hero.title') }}</h1>
        <p v-bind="sx(globalStyles.body)">{{ t('servicePages.educationResearch.hero.description') }}</p>
        <p v-bind="sx(globalStyles.meta)">{{ t('servicePages.educationResearch.hero.subline') }}</p>
        <div v-bind="sx(globalStyles.buttonRow)">
          <NuxtLink :to="educationData.calendlyUrl" external target="_blank" v-bind="sx(globalStyles.buttonBase, globalStyles.buttonPrimary)">
            {{ t('servicePages.educationResearch.hero.primaryCta') }}
          </NuxtLink>
          <a href="#projects" v-bind="sx(globalStyles.buttonBase, globalStyles.buttonSecondary)">
            {{ t('servicePages.educationResearch.hero.secondaryCta') }}
          </a>
        </div>
      </div>
      <div v-bind="sx(globalStyles.panel, globalStyles.panelStrong, styles.heroPanel)">
        <p v-bind="sx(globalStyles.badge)">{{ t('servicePages.educationResearch.hero.priceLabel') }}</p>
        <h2 v-bind="sx(globalStyles.sectionTitle)">{{ t('servicePages.educationResearch.hero.priceValue') }}</h2>
        <p v-bind="sx(globalStyles.body)">{{ t('servicePages.educationResearch.hero.priceNote') }}</p>
        <div v-bind="sx(globalStyles.panelInset, styles.pointCard)">
          <p v-bind="sx(globalStyles.meta)">{{ t('servicePages.educationResearch.hero.promiseLabel') }}</p>
          <p v-bind="sx(globalStyles.body)">{{ t('servicePages.educationResearch.hero.promiseText') }}</p>
        </div>
      </div>
    </section>

    <section v-bind="sx(globalStyles.container)">
      <div v-bind="sx(globalStyles.gridCards)">
        <div v-for="image in heroImages" :key="image.src" v-bind="sx(globalStyles.panel, styles.imageCard)">
          <img :src="image.src" :alt="image.alt" v-bind="sx(styles.imageTall)">
        </div>
      </div>
    </section>

    <section v-bind="sx(globalStyles.container, globalStyles.section)">
      <p v-bind="sx(globalStyles.eyebrow)">{{ t('servicePages.educationResearch.logos.label') }}</p>
      <div v-bind="sx(globalStyles.gridCards)">
        <div v-for="logo in trustLogos" :key="logo.src" v-bind="sx(globalStyles.panel, styles.logoCard)">
          <img :src="logo.src" :alt="logo.alt" v-bind="sx(styles.logoImage)">
        </div>
      </div>
    </section>

    <section v-bind="sx(globalStyles.container, globalStyles.gridTwo)">
      <SectionHeading
        :eyebrow="t('servicePages.educationResearch.problem.eyebrow')"
        :title="t('servicePages.educationResearch.problem.title')"
        :description="t('servicePages.educationResearch.problem.description')"
      />
      <div v-bind="sx(styles.stack)">
        <div v-for="item in problemPoints" :key="item.title" v-bind="sx(globalStyles.panel, styles.simpleCard)">
          <h2 v-bind="sx(globalStyles.cardTitle)">{{ item.title }}</h2>
          <p v-bind="sx(globalStyles.body)">{{ item.text }}</p>
        </div>
      </div>
    </section>

    <section v-bind="sx(globalStyles.container, globalStyles.section)">
      <SectionHeading
        :eyebrow="t('servicePages.educationResearch.offer.eyebrow')"
        :title="t('servicePages.educationResearch.offer.title')"
        :description="t('servicePages.educationResearch.offer.description')"
      />
      <div v-bind="sx(globalStyles.gridTwo)">
        <div v-bind="sx(globalStyles.gridCards)">
          <div v-for="item in offerItems" :key="item.title" v-bind="sx(globalStyles.panel, styles.simpleCard)">
            <p v-bind="sx(globalStyles.meta)">{{ item.label }}</p>
            <h2 v-bind="sx(globalStyles.cardTitle)">{{ item.title }}</h2>
            <p v-bind="sx(globalStyles.body)">{{ item.text }}</p>
          </div>
        </div>
        <div v-bind="sx(styles.stack)">
          <div v-bind="sx(globalStyles.panel, globalStyles.panelStrong, styles.heroPanel)">
            <p v-bind="sx(globalStyles.meta)">{{ t('servicePages.educationResearch.offer.priceLabel') }}</p>
            <h2 v-bind="sx(globalStyles.sectionTitle)">{{ t('servicePages.educationResearch.offer.priceValue') }}</h2>
            <NuxtLink :to="educationData.calendlyUrl" external target="_blank" v-bind="sx(globalStyles.buttonBase, globalStyles.buttonSecondary, styles.inlineButton)">
              {{ t('servicePages.educationResearch.offer.cta') }}
            </NuxtLink>
          </div>
          <div v-bind="sx(globalStyles.gridCards)">
            <div v-for="image in offerImages" :key="image.src" v-bind="sx(globalStyles.panel, styles.imageCard)">
              <img :src="image.src" :alt="image.alt" v-bind="sx(styles.imageShort)">
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-bind="sx(globalStyles.container, globalStyles.section)">
      <div v-bind="sx(globalStyles.gridTwo)">
        <SectionHeading
          :eyebrow="t('servicePages.educationResearch.archive.eyebrow')"
          :title="t('servicePages.educationResearch.archive.title')"
          :description="t('servicePages.educationResearch.archive.description')"
        />
        <div v-bind="sx(styles.stack)">
          <div v-bind="sx(globalStyles.panel, globalStyles.panelStrong, styles.heroPanel)">
            <p v-bind="sx(globalStyles.meta)">{{ t('servicePages.educationResearch.archive.priceLabel') }}</p>
            <h2 v-bind="sx(globalStyles.sectionTitle)">{{ t('servicePages.educationResearch.archive.priceValue') }}</h2>
            <NuxtLink :to="educationData.calendlyUrl" external target="_blank" v-bind="sx(globalStyles.buttonBase, globalStyles.buttonSecondary, styles.inlineButton)">
              {{ t('servicePages.educationResearch.archive.cta') }}
            </NuxtLink>
          </div>
          <div v-bind="sx(globalStyles.gridCards)">
            <div v-for="image in archiveImages" :key="image.src" v-bind="sx(globalStyles.panel, styles.imageCard)">
              <img :src="image.src" :alt="image.alt" v-bind="sx(styles.imageShort)">
            </div>
          </div>
        </div>
      </div>
      <div v-bind="sx(globalStyles.gridCards)">
        <div v-for="item in archiveItems" :key="item.title" v-bind="sx(globalStyles.panel, styles.simpleCard)">
          <h2 v-bind="sx(globalStyles.cardTitle)">{{ item.title }}</h2>
          <p v-bind="sx(globalStyles.body)">{{ item.text }}</p>
        </div>
      </div>
    </section>

    <section v-bind="sx(globalStyles.container, globalStyles.section)">
      <SectionHeading
        :eyebrow="t('servicePages.educationResearch.testimonials.eyebrow')"
        :title="t('servicePages.educationResearch.testimonials.title')"
        :description="t('servicePages.educationResearch.testimonials.description')"
      />
      <div v-bind="sx(globalStyles.gridCards)">
        <figure v-for="item in testimonials" :key="item.name" v-bind="sx(globalStyles.panel, styles.testimonialCard)">
          <div v-bind="sx(styles.testimonialHeader)">
            <img :src="item.image" :alt="item.alt" v-bind="sx(styles.avatar)">
            <div v-bind="sx(styles.stackTight)">
              <strong>{{ item.name }}</strong>
              <span v-bind="sx(globalStyles.meta)">{{ item.role }}</span>
              <span v-if="item.org" v-bind="sx(globalStyles.body)">{{ item.org }}</span>
            </div>
          </div>
          <blockquote v-bind="sx(globalStyles.body)">{{ item.quote }}</blockquote>
        </figure>
      </div>
    </section>

    <section v-bind="sx(globalStyles.container, globalStyles.section)">
      <SectionHeading
        :eyebrow="t('servicePages.educationResearch.addons.eyebrow')"
        :title="t('servicePages.educationResearch.addons.title')"
        :description="t('servicePages.educationResearch.addons.description')"
      />
      <div v-bind="sx(styles.stack)">
        <div v-for="addon in addons" :key="addon.title" v-bind="sx(globalStyles.panel, styles.addonCard)">
          <div v-bind="sx(styles.stack)">
            <p v-bind="sx(globalStyles.meta)">{{ addon.label }}</p>
            <h2 v-bind="sx(globalStyles.cardTitle)">{{ addon.title }}</h2>
            <p v-bind="sx(globalStyles.body)">{{ addon.text }}</p>
            <p v-bind="sx(globalStyles.body)">{{ addon.price }}</p>
            <NuxtLink :to="educationData.calendlyUrl" external target="_blank" v-bind="sx(globalStyles.buttonBase, globalStyles.buttonSecondary, styles.inlineButton)">
              {{ t('servicePages.educationResearch.addons.cta') }}
            </NuxtLink>
          </div>
          <div v-bind="sx(globalStyles.gridCards)">
            <div v-for="image in addon.images" :key="image.src" v-bind="sx(globalStyles.panel, styles.imageCard)">
              <img :src="image.src" :alt="image.alt" v-bind="sx(styles.imageShort)">
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" v-bind="sx(globalStyles.container, globalStyles.section)">
      <SectionHeading
        :eyebrow="t('servicePages.educationResearch.projects.eyebrow')"
        :title="t('servicePages.educationResearch.projects.title')"
        :description="t('servicePages.educationResearch.projects.description')"
      />
      <div v-bind="sx(globalStyles.gridCards)">
        <article v-for="project in projects" :key="project.title" v-bind="sx(globalStyles.panel, styles.projectCard)">
          <img :src="project.image" :alt="project.alt" v-bind="sx(styles.imageTall)">
          <div v-bind="sx(styles.stack)">
            <p v-bind="sx(globalStyles.meta)">{{ project.type }}</p>
            <NuxtLink :to="project.url" external target="_blank" v-bind="sx(globalStyles.anchorReset, styles.projectLink)">
              {{ project.title }}
            </NuxtLink>
            <p v-bind="sx(globalStyles.body)">{{ project.description }}</p>
            <div v-bind="sx(styles.logoRow)">
              <img v-for="logo in project.logos" :key="logo.src" :src="logo.src" :alt="logo.alt" v-bind="sx(styles.projectLogo)">
            </div>
          </div>
        </article>
      </div>
    </section>

    <section v-bind="sx(globalStyles.container)">
      <div v-bind="sx(globalStyles.panel, globalStyles.panelStrong, styles.finalCta)">
        <div v-bind="sx(styles.stackTight)">
          <p v-bind="sx(globalStyles.eyebrow)">{{ t('servicePages.educationResearch.finalCta.eyebrow') }}</p>
          <h2 v-bind="sx(globalStyles.sectionTitle)">{{ t('servicePages.educationResearch.finalCta.title') }}</h2>
          <p v-bind="sx(globalStyles.body)">{{ t('servicePages.educationResearch.finalCta.description') }}</p>
        </div>
        <NuxtLink :to="educationData.calendlyUrl" external target="_blank" v-bind="sx(globalStyles.buttonBase, globalStyles.buttonPrimary)">
          {{ t('servicePages.educationResearch.finalCta.cta') }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { EDUCATION_RESEARCH_DATA as educationData } from '~~/shared/domain/education-research'
import { globalStyles } from '../../styles/system'
import { educationResearchPageStyles as styles } from '../../styles/view-styles'
import { sx } from '../../utils/stylex'

const { t } = useI18n()

const heroImages = computed(() => educationData.heroImages.map((image) => ({ ...image, alt: t(image.altKey) })))
const trustLogos = computed(() => educationData.trustLogos.map((logo) => ({ ...logo, alt: t(logo.altKey) })))
const offerImages = computed(() => educationData.offerImages.map((image) => ({ ...image, alt: t(image.altKey) })))
const archiveImages = computed(() => educationData.archiveImages.map((image) => ({ ...image, alt: t(image.altKey) })))

const problemPoints = computed(() => ['first', 'second', 'third', 'fourth'].map((key) => ({
  title: t(`servicePages.educationResearch.problem.points.${key}.title`),
  text: t(`servicePages.educationResearch.problem.points.${key}.text`),
})))

const offerItems = computed(() => ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth'].map((key) => ({
  label: t(`servicePages.educationResearch.offer.items.${key}.label`),
  title: t(`servicePages.educationResearch.offer.items.${key}.title`),
  text: t(`servicePages.educationResearch.offer.items.${key}.text`),
})))

const archiveItems = computed(() => ['first', 'second', 'third', 'fourth'].map((key) => ({
  title: t(`servicePages.educationResearch.archive.items.${key}.title`),
  text: t(`servicePages.educationResearch.archive.items.${key}.text`),
})))

const testimonials = computed(() => educationData.testimonials.map((item) => ({
  image: item.image,
  name: t(`servicePages.educationResearch.testimonials.items.${item.key}.name`),
  role: t(`servicePages.educationResearch.testimonials.items.${item.key}.role`),
  org: t(`servicePages.educationResearch.testimonials.items.${item.key}.org`),
  quote: t(`servicePages.educationResearch.testimonials.items.${item.key}.quote`),
  alt: t(`servicePages.educationResearch.testimonials.items.${item.key}.alt`),
})))

const addons = computed(() => educationData.addons.map((addon) => ({
  label: t(`servicePages.educationResearch.addons.items.${addon.key}.label`),
  title: t(`servicePages.educationResearch.addons.items.${addon.key}.title`),
  text: t(`servicePages.educationResearch.addons.items.${addon.key}.text`),
  price: t(`servicePages.educationResearch.addons.items.${addon.key}.price`),
  images: addon.images.map((image) => ({ ...image, alt: t(image.altKey) })),
})))

const projects = computed(() => educationData.projects.map((project) => ({
  url: project.url,
  image: project.image,
  type: t(`servicePages.educationResearch.projects.items.${project.key}.type`),
  title: t(`servicePages.educationResearch.projects.items.${project.key}.title`),
  description: t(`servicePages.educationResearch.projects.items.${project.key}.description`),
  alt: t(`servicePages.educationResearch.projects.items.${project.key}.alt`),
  logos: project.logos.map((logo) => ({ ...logo, alt: t(logo.altKey) })),
})))

useSeoMeta({
  title: computed(() => t('servicePages.educationResearch.meta.title')),
  description: computed(() => t('servicePages.educationResearch.meta.description')),
})

</script>
