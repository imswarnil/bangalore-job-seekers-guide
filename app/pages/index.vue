<script setup lang="ts">
const { data: page } = await useAsyncData('index', async () => {
  // try to fetch root content: /content/index.md or /content/landing.md etc.
  const doc = await queryContent('/').findOne()
  return doc || null
})

const hasPage = computed(() => !!page.value)

const title = computed(
  () =>
    page.value?.seo?.title ||
    page.value?.title ||
    'Bangalore Job Seekers Guide'
)

const description = computed(
  () =>
    page.value?.seo?.description ||
    page.value?.description ||
    'Everything you need to move to Bangalore, hunt tech jobs, and not go broke doing it.'
)

useSeoMeta({
  title: title.value,
  ogTitle: title.value,
  description: description.value,
  ogDescription: description.value,
  ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/docs-light.png',
  twitterImage: 'https://ui.nuxt.com/assets/templates/nuxt/docs-light.png'
})
</script>

<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-950">
    <!-- 1) If content exists, render it -->
    <ContentRenderer
      v-if="hasPage"
      :value="page"
      :prose="false"
      class="min-h-screen"
    />

    <!-- 2) Fallback UI when no content file exists -->
    <div v-else class="max-w-5xl mx-auto px-4 py-16">
      <!-- Hero -->
      <section
        class="bg-white/70 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800 rounded-3xl p-10 mb-10 shadow-sm"
      >
        <p
          class="inline-flex items-center gap-2 rounded-full bg-slate-100 dark:bg-slate-800/60 px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-200 mb-4"
        >
          <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
          Made for job seekers, not for HR lectures
        </p>
        <h1
          class="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4"
        >
          Bangalore Job Seeker’s Guide
        </h1>
        <p class="text-slate-600 dark:text-slate-300 max-w-2xl mb-6">
          How to move to Bangalore, survive the rent, hunt walk-ins, and land
          your first dev role — without selling your kidney or your dignity.
        </p>
        <div class="flex flex-wrap gap-3">
          <NuxtLink
            to="/getting-started"
            class="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-slate-800 transition"
          >
            Start reading
            <span aria-hidden="true">→</span>
          </NuxtLink>
          <NuxtLink
            to="/essentials/markdown-syntax"
            class="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100/70 dark:hover:bg-slate-800/40 transition"
          >
            View docs
          </NuxtLink>
        </div>
      </section>

      <!-- 3 cards -->
      <section class="grid gap-6 md:grid-cols-3 mb-12">
        <article
          class="rounded-2xl bg-white dark:bg-slate-900/30 border border-slate-200/60 dark:border-slate-800 p-6"
        >
          <h2 class="text-base font-semibold mb-2 text-slate-900 dark:text-white">
            1. Before You Come
          </h2>
          <p class="text-sm text-slate-600 dark:text-slate-300 mb-3">
            What to pack, where to stay first week, budget for PG, and how not
            to get scammed.
          </p>
          <NuxtLink to="/getting-started" class="text-sm text-slate-900 dark:text-slate-100 font-medium">
            Read →
          </NuxtLink>
        </article>

        <article
          class="rounded-2xl bg-white dark:bg-slate-900/30 border border-slate-200/60 dark:border-slate-800 p-6"
        >
          <h2 class="text-base font-semibold mb-2 text-slate-900 dark:text-white">
            2. Job Hunt System
          </h2>
          <p class="text-sm text-slate-600 dark:text-slate-300 mb-3">
            Walk-ins, HR calls, LinkedIn DM script, and where fresher hiring
            actually happens now.
          </p>
          <NuxtLink to="/getting-started/usage" class="text-sm text-slate-900 dark:text-slate-100 font-medium">
            Read →
          </NuxtLink>
        </article>

        <article
          class="rounded-2xl bg-white dark:bg-slate-900/30 border border-slate-200/60 dark:border-slate-800 p-6"
        >
          <h2 class="text-base font-semibold mb-2 text-slate-900 dark:text-white">
            3. Bangalore Life
          </h2>
          <p class="text-sm text-slate-600 dark:text-slate-300 mb-3">
            Areas to live, Metro vs Rapido, cafes to sit and apply, where
            creators hangout.
          </p>
          <NuxtLink to="/essentials/images-embeds" class="text-sm text-slate-900 dark:text-slate-100 font-medium">
            Read →
          </NuxtLink>
        </article>
      </section>

      <!-- CTA -->
      <section
        class="rounded-2xl bg-slate-900 text-white p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
      >
        <div>
          <h2 class="text-xl font-semibold mb-2">
            Want this as YouTube series?
          </h2>
          <p class="text-sm text-slate-200 max-w-xl">
            I’m Swarnil. I did this journey, failed, tried again. Subscribe and
            I’ll drop full cinematic breakdown + templates.
          </p>
        </div>
        <NuxtLink
          to="/login"
          class="inline-flex items-center gap-2 bg-white text-slate-900 px-4 py-2.5 rounded-xl text-sm font-medium"
        >
          Login / Join
          <span aria-hidden="true">→</span>
        </NuxtLink>
      </section>
    </div>
  </div>
</template>
