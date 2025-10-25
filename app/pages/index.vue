<script setup lang="ts">
import { ref } from 'vue'
import type { TimelineItem } from '@nuxt/ui'

/* ----------------------------------------------------------
   Load page metadata from Nuxt Content collection “landing”
   ---------------------------------------------------------- */
const { data: page } = await useAsyncData('index', () =>
  queryCollection('landing').path('/').first()
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

/* SEO metadata */
const title = page.value.seo?.title || page.value.title || 'CRM Analytics Academy'
const description =
  page.value.seo?.description ||
  page.value.description ||
  'Learn Salesforce CRM Analytics with structured, modern Nuxt UI docs.'

useSeoMeta({
  titleTemplate: '%s',
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: '/img/og-image.png',
  twitterImage: '/img/og-image.png'
})

/* ----------------------------------------------------------
   Timeline demo items
   ---------------------------------------------------------- */
const items = ref<TimelineItem[]>([
  {
    date: 'Mar 15 2025',
    title: 'Project Kickoff',
    description:
      'Kicked off the academy build with clear milestones and a caffeine overdose.',
    icon: 'i-lucide-rocket'
  },
  {
    date: 'Mar 22 2025',
    title: 'Design Phase',
    description:
      'Refined the interface and created component blueprints using Nuxt UI.',
    icon: 'i-lucide-palette'
  },
  {
    date: 'Mar 29 2025',
    title: 'Development Sprint',
    description:
      'Integrated Supabase, course modules, and dynamic Markdown rendering.',
    icon: 'i-lucide-code'
  },
  {
    date: 'Apr 5 2025',
    title: 'Launch Day',
    description:
      'Deployed live on Vercel 🚀 — analytics dashboards included.',
    icon: 'i-lucide-check-circle'
  }
])
</script>

<template>
  <!-- ------------------- HERO ------------------- -->
  <UPageHero
    class="dark:bg-gradient-to-b from-neutral-900 to-neutral-950"
    orientation="horizontal"
  >
    <template #top>
      :hero-background
    </template>

    <template #title>
      Learn Salesforce <span class="text-primary">CRM Analytics</span>.
    </template>

    <template #description>
      Build dashboards your manager will actually brag about.<br />
      Learn CRM Analytics — but cinematic.
    </template>

    <template #links>
      <div class="flex flex-wrap gap-3">
        <UButton
          to="/getting-started"
          size="lg"
          trailing-icon="i-lucide-arrow-right"
        >
          Start Learning
        </UButton>
        <UButton
          to="https://github.com/imswarnil"
          target="_blank"
          size="lg"
          color="neutral"
          variant="outline"
          icon="i-simple-icons-github"
        >
          View on GitHub
        </UButton>
      </div>
    </template>
  </UPageHero>

  <!-- ------------------- TIMELINE ------------------- -->
  <UPageSection class="dark:bg-neutral-950">
    <template #title>Your Learning Journey</template>

    <div class="not-prose py-6 flex justify-center">
      <UTimeline size="sm" :items="items" class="max-w-2xl w-full" />
    </div>
  </UPageSection>

  <!-- ------------------- CTA ------------------- -->
  <UPageSection class="dark:bg-gradient-to-b from-neutral-950 to-neutral-900">
    <UCard class="text-center py-10">
      <h2 class="text-2xl font-semibold mb-2">
        Ready to make your portfolio shine?
      </h2>
      <p class="text-neutral-600 dark:text-neutral-300 mb-6">
        Learn CRM Analytics today — and tell data stories that get you hired.
      </p>
      <div class="flex justify-center gap-3">
        <UButton
          to="/getting-started"
          size="lg"
          trailing-icon="i-lucide-arrow-right"
        >
          Start Now
        </UButton>
        <UButton
          to="/essentials"
          size="lg"
          variant="subtle"
          color="neutral"
        >
          Explore Modules
        </UButton>
      </div>
    </UCard>
  </UPageSection>
</template>
