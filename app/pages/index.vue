<script setup lang="ts">
const { data: page } = await useAsyncData('index', () =>
  queryCollection('landing').path('/').first()
)
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
  <div>
    <!-- Hardcoded hero, full control -->
    <section class="px-6 py-16 lg:py-20 bg-gradient-to-b from-white to-slate-50 dark:from-neutral-950 dark:to-neutral-900">
      <div class="max-w-5xl mx-auto flex flex-col gap-6">
        <p class="text-sm uppercase tracking-[0.25em] opacity-60">Imswarnil · CRM Analytics Academy</p>
        <h1 class="text-4xl lg:text-5xl font-bold leading-tight">
          Learn Salesforce CRM Analytics like you're editing a short film.
        </h1>
        <p class="text-lg opacity-80 max-w-2xl">
          Docs + video + Nuxt UI + Deadpool-level narration. No boredom, only dashboards.
        </p>
        <div class="flex gap-4">
          <NuxtLink to="/getting-started" class="btn-primary">
            Start now
          </NuxtLink>
          <NuxtLink to="/courses" class="btn-secondary">
            View courses
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Then render content from /content/landing/index.md -->
    <ContentRenderer :value="page" :prose="false" />
  </div>
</template>
