<script setup lang="ts">
const { data: page } = await useAsyncData('index', () =>
  queryCollection('landing').path('/').first()
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const title = page.value.seo?.title || page.value.title || 'CRM Analytics Academy'
const description =
  page.value.seo?.description ||
  page.value.description ||
  'Learn Salesforce CRM / Einstein Analytics with a structured curriculum.'

useSeoMeta({
  titleTemplate: '',
  title,
  ogTitle: title,
  description,
  ogDescription: description
})
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-neutral-950">
    <!-- TOP HERO (custom) -->
    <section class="py-14 md:py-20 bg-gradient-to-b from-white to-slate-50 dark:from-neutral-950 dark:to-neutral-900">
      <UContainer>
        <div class="grid gap-10 md:grid-cols-2 items-center">
          <div class="space-y-5">
            <p class="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
              CRM Analytics Academy
            </p>
            <h1 class="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
              Salesforce CRM Analytics, but creator-style.
            </h1>
            <p class="text-slate-600 dark:text-slate-300 text-base md:text-lg max-w-xl">
              Turn Salesforce data into dashboards, apps, and stories. Same flow you can teach on YouTube, Ghost, or inside Nuxt.
            </p>
            <div class="flex flex-wrap gap-4">
              <!-- ✅ THIS ROUTE EXISTS (landing page itself will give docs links) -->
              <UButton to="/" size="lg">
                Start here
              </UButton>

              <!-- ✅ external, won’t break prerender -->
              <UButton
                to="https://youtube.com/@imswarnil"
                target="_blank"
                variant="outline"
                size="lg"
              >
                Watch on YouTube
              </UButton>
            </div>
          </div>

          <!-- simple placeholder, no icons -->
          <div
            class="rounded-xl border border-slate-200/70 dark:border-slate-800/70 bg-white/80 dark:bg-neutral-900/40 backdrop-blur p-4 md:p-5 shadow-sm"
          >
            <p class="text-[10px] uppercase tracking-wide text-slate-400 dark:text-slate-200 mb-2">
              CRM Analytics — sample dashboard
            </p>
            <p class="text-sm font-semibold text-slate-900 dark:text-white mb-4">
              AE Pipeline — Org Pricing Overview
            </p>
            <div class="h-28 rounded-md bg-gradient-to-tr from-sky-500/60 to-sky-200/20 relative overflow-hidden">
              <div
                class="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] bg-[length:20px_100%]"
              />
            </div>
            <p class="text-[10px] text-slate-400 dark:text-slate-500 mt-3">
              * replace with real Einstein Analytics embed later
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- CURRICULUM (pure Nuxt UI + Tailwind) -->
    <section class="py-12 md:py-16">
      <UContainer class="space-y-8">
        <div>
          <p class="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
            Curriculum
          </p>
          <h2 class="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white mt-2">
            3 stages to go from “what is this” to “ship it”
          </h2>
          <p class="text-slate-600 dark:text-slate-300 max-w-2xl mt-2">
            Foundations → app builder → advanced (bindings, RLS, Twilio-ish dashboards).
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-3">
          <UCard>
            <h3 class="text-base font-semibold text-slate-900 dark:text-white mb-2">
              Phase 1 · Foundations
            </h3>
            <p class="text-sm text-slate-500 dark:text-slate-300 mb-4">
              Week 0–2 · What is CRM Analytics, datasets, lenses.
            </p>
            <ul class="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li>• Intro to CRM / Einstein Analytics</li>
              <li>• Datasets, recipes, joins</li>
              <li>• Dashboards basics, filters</li>
            </ul>
          </UCard>

          <UCard>
            <h3 class="text-base font-semibold text-slate-900 dark:text-white mb-2">
              Phase 2 · App Builder
            </h3>
            <p class="text-sm text-slate-500 dark:text-slate-300 mb-4">
              Week 3–5 · Event monitoring / sales analytics style apps.
            </p>
            <ul class="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li>• Dataflows & scheduling</li>
              <li>• Using Salesforce templates</li>
              <li>• Embedding in Lightning pages</li>
            </ul>
          </UCard>

          <UCard>
            <h3 class="text-base font-semibold text-slate-900 dark:text-white mb-2">
              Phase 3 · Advanced / Twilio-ish
            </h3>
            <p class="text-sm text-slate-500 dark:text-slate-300 mb-4">
              Week 6–8 · Production dashboards, bindings, RLS.
            </p>
            <ul class="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li>• Case / quote history dashboards</li>
              <li>• Row-level security (user / role)</li>
              <li>• Packaging & handoff</li>
            </ul>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- TIMELINE -->
    <section class="pb-14 md:pb-16">
      <UContainer class="space-y-6">
        <div>
          <p class="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
            Learning timeline
          </p>
          <h2 class="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white mt-2">
            8-week path
          </h2>
        </div>

        <div class="flex gap-4 overflow-x-auto pb-3">
          <UCard
            v-for="item in [
              { week: 'Week 0', title: 'Setup', desc: 'Dev org, CRM Analytics enabled.' },
              { week: 'Week 1', title: 'Datasets', desc: 'Import, transform, recipes.' },
              { week: 'Week 2', title: 'Dashboards', desc: 'Charts, filters, compact tables.' },
              { week: 'Week 3', title: 'Dataflows', desc: 'Run & fix “not fetching”.' },
              { week: 'Week 4', title: 'Apps', desc: 'Event monitoring / sales analytics style.' },
              { week: 'Week 5', title: 'Embedding', desc: 'LWC, Lightning, URL filters.' },
              { week: 'Week 6', title: 'Advanced', desc: 'Bindings, SAQL, compare tables.' },
              { week: 'Week 7–8', title: 'Capstone', desc: 'Build AE / .Org pricing dashboard.' }
            ]"
            :key="item.week"
            class="min-w-[180px]"
          >
            <p class="text-xs font-medium text-slate-500 dark:text-slate-200">
              {{ item.week }}
            </p>
            <h3 class="text-sm font-semibold mb-1 text-slate-900 dark:text-white">
              {{ item.title }}
            </h3>
            <p class="text-xs text-slate-500 dark:text-slate-300">
              {{ item.desc }}
            </p>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- 👇 IMPORTANT: render your original content/landing/index.md -->
    <UContainer class="pb-16">
      <ContentRenderer
        v-if="page"
        :value="page"
        :prose="false"
      />
    </UContainer>
  </div>
</template>
