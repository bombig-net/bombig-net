<template>
  <div class="space-y-24 pb-24">
    <section class="service-hero service-hero-education">
      <div class="service-hero-orb a" aria-hidden="true" />
      <div class="service-hero-orb b" aria-hidden="true" />
      <div class="mx-auto w-full max-w-6xl px-6 relative grid gap-12 pb-16 pt-28 md:grid-cols-[1.1fr_0.9fr]">
        <div class="section-surface surface-grid space-y-8">
          <p class="eyebrow">{{ t('servicePages.educationResearch.hero.eyebrow') }}</p>
          <h1 class="hero-title headline-effect">{{ t('servicePages.educationResearch.hero.title') }}</h1>
          <p class="max-w-xl text-base body-copy">{{ t('servicePages.educationResearch.hero.description') }}</p>
          <p class="max-w-xl text-sm text-slate-300">{{ t('servicePages.educationResearch.hero.subline') }}</p>
          <div class="flex flex-wrap gap-4">
            <a :href="calendlyUrl" class="cta-button" target="_blank" rel="noreferrer">
              {{ t('servicePages.educationResearch.hero.primaryCta') }}
            </a>
            <a href="#projects" class="ghost-button">{{ t('servicePages.educationResearch.hero.secondaryCta') }}</a>
          </div>
        </div>
        <div class="glass-panel highlight space-y-6 p-8">
          <p class="chip">{{ t('servicePages.educationResearch.hero.priceLabel') }}</p>
          <p class="text-3xl font-semibold">{{ t('servicePages.educationResearch.hero.priceValue') }}</p>
          <p class="text-sm body-copy">{{ t('servicePages.educationResearch.hero.priceNote') }}</p>
          <div class="panel-inset p-5">
            <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('servicePages.educationResearch.hero.promiseLabel') }}</p>
            <p class="mt-3 text-sm body-copy">{{ t('servicePages.educationResearch.hero.promiseText') }}</p>
          </div>
        </div>
      </div>
      <div class="mx-auto w-full max-w-6xl px-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="image in heroImages" :key="image.src" class="glass-panel raised overflow-hidden">
          <img
            :src="image.src"
            :alt="image.alt"
            class="h-56 w-full object-cover"
            loading="lazy"
            decoding="async"
          >
        </div>
      </div>
    </section>

    <section class="mx-auto w-full max-w-6xl px-6 space-y-6">
      <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('servicePages.educationResearch.logos.label') }}</p>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        <div v-for="logo in trustLogos" :key="logo.src" class="glass-panel raised flex items-center justify-center p-6">
          <img :src="logo.src" :alt="logo.alt" class="h-10 w-auto opacity-80" loading="lazy" decoding="async">
        </div>
      </div>
    </section>

    <section class="mx-auto w-full max-w-6xl px-6 grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
      <SectionHeading
        :eyebrow="t('servicePages.educationResearch.problem.eyebrow')"
        :title="t('servicePages.educationResearch.problem.title')"
        :description="t('servicePages.educationResearch.problem.description')"
      />
      <div class="grid gap-4">
        <div v-for="point in problemPoints" :key="point.title" class="glass-panel raised p-6">
          <p class="text-sm font-semibold">{{ point.title }}</p>
          <p class="mt-3 text-sm body-copy">{{ point.text }}</p>
        </div>
      </div>
    </section>

    <section class="mx-auto w-full max-w-6xl px-6 space-y-10">
      <SectionHeading
        :eyebrow="t('servicePages.educationResearch.offer.eyebrow')"
        :title="t('servicePages.educationResearch.offer.title')"
        :description="t('servicePages.educationResearch.offer.description')"
      />
      <div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div class="grid gap-4 sm:grid-cols-2">
          <div v-for="item in offerItems" :key="item.title" class="glass-panel raised p-6">
            <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ item.label }}</p>
            <p class="mt-3 text-lg font-semibold">{{ item.title }}</p>
            <p class="mt-3 text-sm body-copy">{{ item.text }}</p>
          </div>
        </div>
        <div class="space-y-4">
          <div class="glass-panel highlight space-y-4 p-6">
            <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('servicePages.educationResearch.offer.priceLabel') }}</p>
            <p class="text-2xl font-semibold">{{ t('servicePages.educationResearch.offer.priceValue') }}</p>
            <a :href="calendlyUrl" class="ghost-button" target="_blank" rel="noreferrer">
              {{ t('servicePages.educationResearch.offer.cta') }}
            </a>
          </div>
          <div class="grid gap-4 sm:grid-cols-2">
            <div v-for="image in offerImages" :key="image.src" class="glass-panel raised overflow-hidden">
              <img :src="image.src" :alt="image.alt" class="h-48 w-full object-cover" loading="lazy" decoding="async">
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mx-auto w-full max-w-6xl px-6 space-y-10">
      <div class="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <SectionHeading
          :eyebrow="t('servicePages.educationResearch.archive.eyebrow')"
          :title="t('servicePages.educationResearch.archive.title')"
          :description="t('servicePages.educationResearch.archive.description')"
        />
        <div class="space-y-4">
          <div class="glass-panel highlight space-y-4 p-6">
            <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('servicePages.educationResearch.archive.priceLabel') }}</p>
            <p class="text-2xl font-semibold">{{ t('servicePages.educationResearch.archive.priceValue') }}</p>
            <a :href="calendlyUrl" class="ghost-button" target="_blank" rel="noreferrer">
              {{ t('servicePages.educationResearch.archive.cta') }}
            </a>
          </div>
          <div class="grid gap-4 sm:grid-cols-2">
            <div v-for="image in archiveImages" :key="image.src" class="glass-panel raised overflow-hidden">
              <img :src="image.src" :alt="image.alt" class="h-44 w-full object-cover" loading="lazy" decoding="async">
            </div>
          </div>
        </div>
      </div>
      <div class="grid gap-4 md:grid-cols-2">
        <div v-for="item in archiveItems" :key="item.title" class="glass-panel raised p-6">
          <p class="text-sm font-semibold">{{ item.title }}</p>
          <p class="mt-3 text-sm body-copy">{{ item.text }}</p>
        </div>
      </div>
    </section>

    <section class="mx-auto w-full max-w-6xl px-6 space-y-10">
      <SectionHeading
        :eyebrow="t('servicePages.educationResearch.testimonials.eyebrow')"
        :title="t('servicePages.educationResearch.testimonials.title')"
        :description="t('servicePages.educationResearch.testimonials.description')"
      />
      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <figure v-for="testimonial in testimonials" :key="testimonial.name" class="glass-panel raised p-6">
          <div class="flex items-center gap-4">
            <img
              :src="testimonial.image"
              :alt="testimonial.alt"
              class="h-12 w-12 rounded-full object-cover"
              loading="lazy"
              decoding="async"
            >
            <div>
              <p class="text-sm font-semibold">{{ testimonial.name }}</p>
              <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ testimonial.role }}</p>
              <p v-if="testimonial.org" class="text-xs text-slate-300">{{ testimonial.org }}</p>
            </div>
          </div>
          <blockquote class="mt-4 text-sm body-copy">{{ testimonial.quote }}</blockquote>
        </figure>
      </div>
    </section>

    <section class="mx-auto w-full max-w-6xl px-6 space-y-10">
      <SectionHeading
        :eyebrow="t('servicePages.educationResearch.addons.eyebrow')"
        :title="t('servicePages.educationResearch.addons.title')"
        :description="t('servicePages.educationResearch.addons.description')"
      />
      <div class="grid gap-6">
        <div v-for="addon in addons" :key="addon.title" class="glass-panel raised p-6 lg:p-8">
          <div class="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div class="space-y-4">
              <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ addon.label }}</p>
              <h3 class="text-xl font-semibold">{{ addon.title }}</h3>
              <p class="text-sm body-copy">{{ addon.text }}</p>
              <p class="text-sm font-semibold">{{ addon.price }}</p>
              <a :href="calendlyUrl" class="ghost-button" target="_blank" rel="noreferrer">
                {{ t('servicePages.educationResearch.addons.cta') }}
              </a>
            </div>
            <div class="grid gap-4 sm:grid-cols-2">
              <div v-for="image in addon.images" :key="image.src" class="glass-panel highlight overflow-hidden">
                <img :src="image.src" :alt="image.alt" class="h-44 w-full object-cover" loading="lazy" decoding="async">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" class="mx-auto w-full max-w-6xl px-6 space-y-10">
      <SectionHeading
        :eyebrow="t('servicePages.educationResearch.projects.eyebrow')"
        :title="t('servicePages.educationResearch.projects.title')"
        :description="t('servicePages.educationResearch.projects.description')"
      />
      <div class="grid gap-6 lg:grid-cols-2">
        <article v-for="project in projects" :key="project.title" class="glass-panel raised overflow-hidden">
          <img :src="project.image" :alt="project.alt" class="h-56 w-full object-cover" loading="lazy" decoding="async">
          <div class="space-y-4 p-6">
            <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ project.type }}</p>
            <a
              :href="project.url"
              class="block text-xl font-semibold text-white transition hover:text-emerald-300"
              target="_blank"
              rel="noreferrer"
            >
              {{ project.title }}
            </a>
            <p class="text-sm body-copy">{{ project.description }}</p>
            <div class="flex flex-wrap items-center gap-4">
              <img
                v-for="logo in project.logos"
                :key="logo.src"
                :src="logo.src"
                :alt="logo.alt"
                class="h-8 w-auto opacity-80"
                loading="lazy"
                decoding="async"
              >
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="mx-auto w-full max-w-6xl px-6">
      <div class="glass-panel highlight flex flex-col gap-6 p-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p class="eyebrow">{{ t('servicePages.educationResearch.finalCta.eyebrow') }}</p>
          <p class="text-2xl font-semibold">{{ t('servicePages.educationResearch.finalCta.title') }}</p>
          <p class="mt-3 text-sm body-copy">{{ t('servicePages.educationResearch.finalCta.description') }}</p>
        </div>
        <a :href="calendlyUrl" class="cta-button" target="_blank" rel="noreferrer">
          {{ t('servicePages.educationResearch.finalCta.cta') }}
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const calendlyUrl = 'https://calendly.com/bombig-net/30min'

const heroImages = computed(() => [
  { src: '/media/education-research/mockup-hero-1.webp', alt: t('servicePages.educationResearch.hero.images.first') },
  { src: '/media/education-research/mockup-hero-2.webp', alt: t('servicePages.educationResearch.hero.images.second') },
  { src: '/media/education-research/mockup-hero-3.webp', alt: t('servicePages.educationResearch.hero.images.third') },
  { src: '/media/education-research/mockup-hero-4.webp', alt: t('servicePages.educationResearch.hero.images.fourth') },
])

const trustLogos = computed(() => [
  { src: '/media/education-research/logo-uni-hamburg.svg', alt: t('servicePages.educationResearch.logos.items.first') },
  { src: '/media/education-research/logo-rub.svg', alt: t('servicePages.educationResearch.logos.items.second') },
  { src: '/media/education-research/logo-uni-graz.svg', alt: t('servicePages.educationResearch.logos.items.third') },
  { src: '/media/education-research/logo-kulturhaus.svg', alt: t('servicePages.educationResearch.logos.items.fourth') },
  { src: '/media/education-research/logo-kulturpixel.svg', alt: t('servicePages.educationResearch.logos.items.fifth') },
])

const problemPoints = computed(() => [
  {
    title: t('servicePages.educationResearch.problem.points.first.title'),
    text: t('servicePages.educationResearch.problem.points.first.text'),
  },
  {
    title: t('servicePages.educationResearch.problem.points.second.title'),
    text: t('servicePages.educationResearch.problem.points.second.text'),
  },
  {
    title: t('servicePages.educationResearch.problem.points.third.title'),
    text: t('servicePages.educationResearch.problem.points.third.text'),
  },
  {
    title: t('servicePages.educationResearch.problem.points.fourth.title'),
    text: t('servicePages.educationResearch.problem.points.fourth.text'),
  },
])

const offerItems = computed(() => [
  {
    label: t('servicePages.educationResearch.offer.items.first.label'),
    title: t('servicePages.educationResearch.offer.items.first.title'),
    text: t('servicePages.educationResearch.offer.items.first.text'),
  },
  {
    label: t('servicePages.educationResearch.offer.items.second.label'),
    title: t('servicePages.educationResearch.offer.items.second.title'),
    text: t('servicePages.educationResearch.offer.items.second.text'),
  },
  {
    label: t('servicePages.educationResearch.offer.items.third.label'),
    title: t('servicePages.educationResearch.offer.items.third.title'),
    text: t('servicePages.educationResearch.offer.items.third.text'),
  },
  {
    label: t('servicePages.educationResearch.offer.items.fourth.label'),
    title: t('servicePages.educationResearch.offer.items.fourth.title'),
    text: t('servicePages.educationResearch.offer.items.fourth.text'),
  },
  {
    label: t('servicePages.educationResearch.offer.items.fifth.label'),
    title: t('servicePages.educationResearch.offer.items.fifth.title'),
    text: t('servicePages.educationResearch.offer.items.fifth.text'),
  },
  {
    label: t('servicePages.educationResearch.offer.items.sixth.label'),
    title: t('servicePages.educationResearch.offer.items.sixth.title'),
    text: t('servicePages.educationResearch.offer.items.sixth.text'),
  },
  {
    label: t('servicePages.educationResearch.offer.items.seventh.label'),
    title: t('servicePages.educationResearch.offer.items.seventh.title'),
    text: t('servicePages.educationResearch.offer.items.seventh.text'),
  },
  {
    label: t('servicePages.educationResearch.offer.items.eighth.label'),
    title: t('servicePages.educationResearch.offer.items.eighth.title'),
    text: t('servicePages.educationResearch.offer.items.eighth.text'),
  },
])

const offerImages = computed(() => [
  { src: '/media/education-research/mockup-hero-1.webp', alt: t('servicePages.educationResearch.offer.images.first') },
  { src: '/media/education-research/mockup-blog.webp', alt: t('servicePages.educationResearch.offer.images.second') },
])

const archiveImages = computed(() => [
  { src: '/media/education-research/mockup-archive-1.webp', alt: t('servicePages.educationResearch.archive.images.first') },
  { src: '/media/education-research/mockup-archive-2.webp', alt: t('servicePages.educationResearch.archive.images.second') },
])

const archiveItems = computed(() => [
  {
    title: t('servicePages.educationResearch.archive.items.first.title'),
    text: t('servicePages.educationResearch.archive.items.first.text'),
  },
  {
    title: t('servicePages.educationResearch.archive.items.second.title'),
    text: t('servicePages.educationResearch.archive.items.second.text'),
  },
  {
    title: t('servicePages.educationResearch.archive.items.third.title'),
    text: t('servicePages.educationResearch.archive.items.third.text'),
  },
  {
    title: t('servicePages.educationResearch.archive.items.fourth.title'),
    text: t('servicePages.educationResearch.archive.items.fourth.text'),
  },
])

const testimonials = computed(() => [
  {
    name: t('servicePages.educationResearch.testimonials.items.first.name'),
    role: t('servicePages.educationResearch.testimonials.items.first.role'),
    org: t('servicePages.educationResearch.testimonials.items.first.org'),
    quote: t('servicePages.educationResearch.testimonials.items.first.quote'),
    alt: t('servicePages.educationResearch.testimonials.items.first.alt'),
    image: '/media/education-research/testimonial-nils-steffen.webp',
  },
  {
    name: t('servicePages.educationResearch.testimonials.items.second.name'),
    role: t('servicePages.educationResearch.testimonials.items.second.role'),
    org: t('servicePages.educationResearch.testimonials.items.second.org'),
    quote: t('servicePages.educationResearch.testimonials.items.second.quote'),
    alt: t('servicePages.educationResearch.testimonials.items.second.alt'),
    image: '/media/education-research/testimonial-sophie-leukel.png',
  },
  {
    name: t('servicePages.educationResearch.testimonials.items.third.name'),
    role: t('servicePages.educationResearch.testimonials.items.third.role'),
    org: t('servicePages.educationResearch.testimonials.items.third.org'),
    quote: t('servicePages.educationResearch.testimonials.items.third.quote'),
    alt: t('servicePages.educationResearch.testimonials.items.third.alt'),
    image: '/media/education-research/testimonial-christian-bunnenberg.webp',
  },
  {
    name: t('servicePages.educationResearch.testimonials.items.fourth.name'),
    role: t('servicePages.educationResearch.testimonials.items.fourth.role'),
    org: t('servicePages.educationResearch.testimonials.items.fourth.org'),
    quote: t('servicePages.educationResearch.testimonials.items.fourth.quote'),
    alt: t('servicePages.educationResearch.testimonials.items.fourth.alt'),
    image: '/media/education-research/testimonial-marie-kalle.jpg',
  },
  {
    name: t('servicePages.educationResearch.testimonials.items.fifth.name'),
    role: t('servicePages.educationResearch.testimonials.items.fifth.role'),
    org: t('servicePages.educationResearch.testimonials.items.fifth.org'),
    quote: t('servicePages.educationResearch.testimonials.items.fifth.quote'),
    alt: t('servicePages.educationResearch.testimonials.items.fifth.alt'),
    image: '/media/education-research/testimonial-geschichtswerkstatt.svg',
  },
  {
    name: t('servicePages.educationResearch.testimonials.items.sixth.name'),
    role: t('servicePages.educationResearch.testimonials.items.sixth.role'),
    org: t('servicePages.educationResearch.testimonials.items.sixth.org'),
    quote: t('servicePages.educationResearch.testimonials.items.sixth.quote'),
    alt: t('servicePages.educationResearch.testimonials.items.sixth.alt'),
    image: '/media/education-research/testimonial-catharina-koehnke.jpg',
  },
  {
    name: t('servicePages.educationResearch.testimonials.items.seventh.name'),
    role: t('servicePages.educationResearch.testimonials.items.seventh.role'),
    org: t('servicePages.educationResearch.testimonials.items.seventh.org'),
    quote: t('servicePages.educationResearch.testimonials.items.seventh.quote'),
    alt: t('servicePages.educationResearch.testimonials.items.seventh.alt'),
    image: '/media/education-research/testimonial-janina-kriszio.jpeg',
  },
  {
    name: t('servicePages.educationResearch.testimonials.items.eighth.name'),
    role: t('servicePages.educationResearch.testimonials.items.eighth.role'),
    org: t('servicePages.educationResearch.testimonials.items.eighth.org'),
    quote: t('servicePages.educationResearch.testimonials.items.eighth.quote'),
    alt: t('servicePages.educationResearch.testimonials.items.eighth.alt'),
    image: '/media/education-research/testimonial-hannah-rentschler.jpg',
  },
  {
    name: t('servicePages.educationResearch.testimonials.items.ninth.name'),
    role: t('servicePages.educationResearch.testimonials.items.ninth.role'),
    org: t('servicePages.educationResearch.testimonials.items.ninth.org'),
    quote: t('servicePages.educationResearch.testimonials.items.ninth.quote'),
    alt: t('servicePages.educationResearch.testimonials.items.ninth.alt'),
    image: '/media/education-research/testimonial-jan-krawczyk.jpg',
  },
])

const addons = computed(() => [
  {
    label: t('servicePages.educationResearch.addons.items.first.label'),
    title: t('servicePages.educationResearch.addons.items.first.title'),
    text: t('servicePages.educationResearch.addons.items.first.text'),
    price: t('servicePages.educationResearch.addons.items.first.price'),
    images: [
      { src: '/media/education-research/mockup-map-1.webp', alt: t('servicePages.educationResearch.addons.items.first.images.first') },
      { src: '/media/education-research/mockup-map-2.webp', alt: t('servicePages.educationResearch.addons.items.first.images.second') },
    ],
  },
  {
    label: t('servicePages.educationResearch.addons.items.second.label'),
    title: t('servicePages.educationResearch.addons.items.second.title'),
    text: t('servicePages.educationResearch.addons.items.second.text'),
    price: t('servicePages.educationResearch.addons.items.second.price'),
    images: [
      { src: '/media/education-research/mockup-archive-1.webp', alt: t('servicePages.educationResearch.addons.items.second.images.first') },
      { src: '/media/education-research/mockup-archive-2.webp', alt: t('servicePages.educationResearch.addons.items.second.images.second') },
    ],
  },
  {
    label: t('servicePages.educationResearch.addons.items.third.label'),
    title: t('servicePages.educationResearch.addons.items.third.title'),
    text: t('servicePages.educationResearch.addons.items.third.text'),
    price: t('servicePages.educationResearch.addons.items.third.price'),
    images: [
      { src: '/media/education-research/mockup-podcast-1.webp', alt: t('servicePages.educationResearch.addons.items.third.images.first') },
      { src: '/media/education-research/mockup-podcast-2.webp', alt: t('servicePages.educationResearch.addons.items.third.images.second') },
    ],
  },
])

const projects = computed(() => [
  {
    type: t('servicePages.educationResearch.projects.items.first.type'),
    title: t('servicePages.educationResearch.projects.items.first.title'),
    description: t('servicePages.educationResearch.projects.items.first.description'),
    url: '/projektwebseiten/freiheitsarchiv',
    image: '/media/education-research/project-im-namen-der-freiheit.png',
    alt: t('servicePages.educationResearch.projects.items.first.alt'),
    logos: [
      { src: '/media/education-research/logo-bmbf.png', alt: t('servicePages.educationResearch.projects.items.first.logos.first') },
      { src: '/media/education-research/testimonial-sophie-leukel.png', alt: t('servicePages.educationResearch.projects.items.first.logos.second') },
    ],
  },
  {
    type: t('servicePages.educationResearch.projects.items.second.type'),
    title: t('servicePages.educationResearch.projects.items.second.title'),
    description: t('servicePages.educationResearch.projects.items.second.description'),
    url: '/projektwebseiten/coronarchiv',
    image: '/media/education-research/project-coronarchiv.jpg',
    alt: t('servicePages.educationResearch.projects.items.second.alt'),
    logos: [
      { src: '/media/education-research/logo-rub-alt.jpg', alt: t('servicePages.educationResearch.projects.items.second.logos.first') },
      { src: '/media/education-research/logo-bmbf.png', alt: t('servicePages.educationResearch.projects.items.second.logos.second') },
      { src: '/media/education-research/logo-uni-giessen.jpg', alt: t('servicePages.educationResearch.projects.items.second.logos.third') },
    ],
  },
  {
    type: t('servicePages.educationResearch.projects.items.third.type'),
    title: t('servicePages.educationResearch.projects.items.third.title'),
    description: t('servicePages.educationResearch.projects.items.third.description'),
    url: '/projektwebseiten/orte-der-unsichtbarkeit-3',
    image: '/media/education-research/project-orte-der-unsichtbarkeit.webp',
    alt: t('servicePages.educationResearch.projects.items.third.alt'),
    logos: [
      { src: '/media/education-research/logo-jugend-erinnert.jpg', alt: t('servicePages.educationResearch.projects.items.third.logos.first') },
      { src: '/media/education-research/logo-bmbf.png', alt: t('servicePages.educationResearch.projects.items.third.logos.second') },
      { src: '/media/education-research/logo-landeszentrale-hamburg.jpg', alt: t('servicePages.educationResearch.projects.items.third.logos.third') },
    ],
  },
  {
    type: t('servicePages.educationResearch.projects.items.fourth.type'),
    title: t('servicePages.educationResearch.projects.items.fourth.title'),
    description: t('servicePages.educationResearch.projects.items.fourth.description'),
    url: '/projektwebseiten/social-media-history',
    image: '/media/education-research/project-social-media-history.webp',
    alt: t('servicePages.educationResearch.projects.items.fourth.alt'),
    logos: [
      { src: '/media/education-research/logo-bmbf.png', alt: t('servicePages.educationResearch.projects.items.fourth.logos.first') },
      { src: '/media/education-research/logo-rub-alt.jpg', alt: t('servicePages.educationResearch.projects.items.fourth.logos.second') },
      { src: '/media/education-research/logo-kulturpixel-icon.jpg', alt: t('servicePages.educationResearch.projects.items.fourth.logos.third') },
    ],
  },
  {
    type: t('servicePages.educationResearch.projects.items.fifth.type'),
    title: t('servicePages.educationResearch.projects.items.fifth.title'),
    description: t('servicePages.educationResearch.projects.items.fifth.description'),
    url: '/projektwebseiten/uebergriff',
    image: '/media/education-research/project-uebergriff.jpg',
    alt: t('servicePages.educationResearch.projects.items.fifth.alt'),
    logos: [
      { src: '/media/education-research/logo-kulturpixel-icon.jpg', alt: t('servicePages.educationResearch.projects.items.fifth.logos.first') },
      { src: '/media/education-research/logo-lzpbniedersachsen.jpg', alt: t('servicePages.educationResearch.projects.items.fifth.logos.second') },
    ],
  },
  {
    type: t('servicePages.educationResearch.projects.items.sixth.type'),
    title: t('servicePages.educationResearch.projects.items.sixth.title'),
    description: t('servicePages.educationResearch.projects.items.sixth.description'),
    url: '/projektwebseiten/streetart-explorers',
    image: '/media/education-research/project-streetart-explorers.webp',
    alt: t('servicePages.educationResearch.projects.items.sixth.alt'),
    logos: [
      { src: '/media/education-research/logo-kulturpixel-icon.jpg', alt: t('servicePages.educationResearch.projects.items.sixth.logos.first') },
      { src: '/media/education-research/logo-bmbf.png', alt: t('servicePages.educationResearch.projects.items.sixth.logos.second') },
      { src: '/media/education-research/logo-landeszentrale-hamburg.jpg', alt: t('servicePages.educationResearch.projects.items.sixth.logos.third') },
    ],
  },
  {
    type: t('servicePages.educationResearch.projects.items.seventh.type'),
    title: t('servicePages.educationResearch.projects.items.seventh.title'),
    description: t('servicePages.educationResearch.projects.items.seventh.description'),
    url: '/projektwebseiten/ns-medizingeschichte',
    image: '/media/education-research/project-ns-medizinverbrechen.jpg',
    alt: t('servicePages.educationResearch.projects.items.seventh.alt'),
    logos: [
      { src: '/media/education-research/logo-fau.jpg', alt: t('servicePages.educationResearch.projects.items.seventh.logos.first') },
    ],
  },
  {
    type: t('servicePages.educationResearch.projects.items.eighth.type'),
    title: t('servicePages.educationResearch.projects.items.eighth.title'),
    description: t('servicePages.educationResearch.projects.items.eighth.description'),
    url: '/projektwebseiten/coronarchivare',
    image: '/media/education-research/project-coronarchivare.jpg',
    alt: t('servicePages.educationResearch.projects.items.eighth.alt'),
    logos: [
      { src: '/media/education-research/logo-bmbf.png', alt: t('servicePages.educationResearch.projects.items.eighth.logos.first') },
      { src: '/media/education-research/logo-rub-alt.jpg', alt: t('servicePages.educationResearch.projects.items.eighth.logos.second') },
      { src: '/media/education-research/logo-uni-giessen.jpg', alt: t('servicePages.educationResearch.projects.items.eighth.logos.third') },
      { src: '/media/education-research/logo-bpb.jpg', alt: t('servicePages.educationResearch.projects.items.eighth.logos.fourth') },
    ],
  },
  {
    type: t('servicePages.educationResearch.projects.items.ninth.type'),
    title: t('servicePages.educationResearch.projects.items.ninth.title'),
    description: t('servicePages.educationResearch.projects.items.ninth.description'),
    url: '/projektwebseiten/wieder-vereint-hamburg',
    image: '/media/education-research/project-wieder-vereint-hamburg.webp',
    alt: t('servicePages.educationResearch.projects.items.ninth.alt'),
    logos: [
      { src: '/media/education-research/logo-anders-und-wissen.jpg', alt: t('servicePages.educationResearch.projects.items.ninth.logos.first') },
      { src: '/media/education-research/logo-landeszentrale-hamburg.jpg', alt: t('servicePages.educationResearch.projects.items.ninth.logos.second') },
    ],
  },
  {
    type: t('servicePages.educationResearch.projects.items.tenth.type'),
    title: t('servicePages.educationResearch.projects.items.tenth.title'),
    description: t('servicePages.educationResearch.projects.items.tenth.description'),
    url: '/projektwebseiten/stadtrandgeschichten',
    image: '/media/education-research/project-stadtrandgeschichten.webp',
    alt: t('servicePages.educationResearch.projects.items.tenth.alt'),
    logos: [
      { src: '/media/education-research/logo-suederelbe.jpg', alt: t('servicePages.educationResearch.projects.items.tenth.logos.first') },
      { src: '/media/education-research/logo-bmbf.png', alt: t('servicePages.educationResearch.projects.items.tenth.logos.second') },
      { src: '/media/education-research/logo-geschichtswerkstatt.jpg', alt: t('servicePages.educationResearch.projects.items.tenth.logos.third') },
    ],
  },
])

const metaTitle = computed(() => t('servicePages.educationResearch.meta.title'))
const metaDescription = computed(() => t('servicePages.educationResearch.meta.description'))

useSeoMeta({
  title: metaTitle,
  description: metaDescription,
})
</script>
