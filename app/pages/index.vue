<script setup lang="ts">
const { data: page } = await useAsyncData('index', () =>
  queryCollection('landing').path('/').first()
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const title = page.value.seo?.title || page.value.title
const description = page.value.seo?.description || page.value.description

useSeoMeta({
  titleTemplate: '',
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/docs-light.png',
  twitterImage: 'https://ui.nuxt.com/assets/templates/nuxt/docs-light.png'
})
</script>

<template>
  <UPage class="bg-white dark:bg-neutral-950">
    <!-- HERO -->
    <UPageHero
      class="dark:bg-gradient-to-b from-neutral-950 to-neutral-900"
      title="CRM Analytics Academy"
      description="Learn Salesforce Einstein Analytics / CRM Analytics with real Twilio-style dashboards, dataflows, and app builds. Film director energy, Salesforce depth."
      orientation="horizontal"
      :ui="{ title: 'text-4xl sm:text-5xl font-bold tracking-tight', description: 'text-base sm:text-lg max-w-2xl' }"
    >
      <template #links>
        <UButton
          to="/getting-started"
          size="xl"
          icon="i-lucide-arrow-right"
          trailing
        >
          Start now
        </UButton>
        <UButton
          to="/courses"
          size="xl"
          variant="outline"
          icon="i-simple-icons-youtube"
        >
          Watch lessons
        </UButton>
      </template>

      <template #right>
        <!-- Dummy image / preview placeholder -->
        <div class="academy-placeholder">
          <div class="academy-placeholder__header">
            <span class="dot bg-red-400" />
            <span class="dot bg-yellow-400" />
            <span class="dot bg-green-400" />
          </div>
          <div class="academy-placeholder__body">
            <p class="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-200 mb-1">
              Dashboard Preview
            </p>
            <p class="text-sm font-semibold mb-4">
              AE Pipeline — Org Pricing Overview
            </p>
            <div class="academy-placeholder__chart" />
            <p class="text-[10px] text-slate-400 mt-3">
              * dummy chart – replace with real analytics embed later
            </p>
          </div>
        </div>
      </template>
    </UPageHero>

    <!-- ADS (Yours) -->
    <div class="hidden lg:block mt-6 px-4">
      <ClientOnly>
        <GoogleAd
          ad-slot="7663977887"
          ad-format="auto"
          :fullWidth="true"
          ins-style="display:block"
          :refreshKey="page?.updatedAt || page?.path"
        />
      </ClientOnly>
    </div>

    <!-- CURRICULUM -->
    <UContainer class="py-12 space-y-10">
      <div class="flex flex-col gap-2">
        <p class="text-sm uppercase tracking-[0.25em] text-slate-500 dark:text-slate-300">
          Program Curriculum
        </p>
        <h2 class="text-2xl font-semibold tracking-tight">
          3 tracks — beginner to production
        </h2>
        <p class="text-slate-600 dark:text-slate-300 max-w-2xl">
          Use this as the master outline. You can later map it to Supabase, “lessons” table, or your Ghost blog.
        </p>
      </div>

      <UPageGrid>
        <!-- Track 1 -->
        <UCard>
          <div class="flex items-start gap-3">
            <UIcon name="i-lucide-sparkles" class="h-6 w-6 text-[color:var(--ui-primary)]" />
            <div>
              <h3 class="font-semibold text-base">Track 1 · Foundations</h3>
              <p class="text-sm text-slate-500 dark:text-slate-300 mb-3">
                Week 0–2 · For people who only know “Salesforce = CRM”.
              </p>
            </div>
          </div>
          <UAccordion :items="[
            { label: 'Lesson 1: What is CRM Analytics?', content: 'Positioning vs Reports & Dashboards, vs Tableau, vs Data Cloud.' },
            { label: 'Lesson 2: Datasets & Recipes', content: 'SAQL vs SOQL, joins, row-level security idea.' },
            { label: 'Lesson 3: Lenses & Dashboards', content: 'Chart types, compact vs grouped vs compare tables.' },
          ]" size="sm" />
        </UCard>

        <!-- Track 2 -->
        <UCard>
          <div class="flex items-start gap-3">
            <UIcon name="i-lucide-layers" class="h-6 w-6 text-[color:var(--ui-primary)]" />
            <div>
              <h3 class="font-semibold text-base">Track 2 · App Builder</h3>
              <p class="text-sm text-slate-500 dark:text-slate-300 mb-3">
                Week 3–5 · Build real apps like Event Monitoring / Sales Analytics.
              </p>
            </div>
          </div>
          <UAccordion :items="[
            { label: 'Lesson 4: Dataflows & scheduling', content: 'Create, run, fix broken nodes, monitor.' },
            { label: 'Lesson 5: Templates & App cloning', content: 'How Salesforce ships prebuilt apps and how to extend.' },
            { label: 'Lesson 6: Embedding in Lightning', content: 'Wave dashboard component, filters from LWC.' },
          ]" size="sm" />
        </UCard>

        <!-- Track 3 -->
        <UCard>
          <div class="flex items-start gap-3">
            <UIcon name="i-lucide-bot" class="h-6 w-6 text-[color:var(--ui-primary)]" />
            <div>
              <h3 class="font-semibold text-base">Track 3 · Advanced / Twilio-style</h3>
              <p class="text-sm text-slate-500 dark:text-slate-300 mb-3">
                Week 6–8 · Production dashboards for quoting, .Org pricing, PubSec-ish flows.
              </p>
            </div>
          </div>
          <UAccordion :items="[
            { label: 'Lesson 7: Case / Quote history dashboards', content: 'Multi-dataset, bindings, percent diff.' },
            { label: 'Lesson 8: Row-level security (RLS)', content: 'User-based, role-based, account hierarchy.' },
            { label: 'Lesson 9: Packaging & handoff', content: 'Move from sandbox → prod, document on Ghost.' },
          ]" size="sm" />
        </UCard>
      </UPageGrid>
    </UContainer>

    <!-- TIMELINE -->
    <UContainer class="pb-16">
      <div class="flex flex-col gap-2 mb-6">
        <p class="text-sm uppercase tracking-[0.25em] text-slate-500 dark:text-slate-300">
          Learning timeline
        </p>
        <h2 class="text-2xl font-semibold tracking-tight">
          8-week path to “I can demo this to my manager”
        </h2>
      </div>

      <div class="academy-timeline">
        <UCard v-for="item in [
          { week: 'Week 0', title: 'Setup', desc: 'Dev org, CRM Analytics enabled, sample data.' },
          { week: 'Week 1', title: 'Datasets', desc: 'Import, transform, recipes, RLS concept.' },
          { week: 'Week 2', title: 'Dashboards', desc: 'Charts, pages, compact tables, filters.' },
          { week: 'Week 3', title: 'Dataflows', desc: 'Build & schedule, fix the “not fetching” issue 😈.' },
          { week: 'Week 4', title: 'Apps', desc: 'Event Monitoring-style app, extend components.' },
          { week: 'Week 5', title: 'Embedding', desc: 'LWC, aura, page layouts, filters from URL.' },
          { week: 'Week 6', title: 'Advanced', desc: 'Bindings, SAQL, compare tables, KPIs.' },
          { week: 'Week 7–8', title: 'Capstone', desc: 'Build Twilio-ish AE dashboard and publish.' }
        ]"
        :key="item.week"
        class="academy-timeline__card"
        >
          <p class="text-xs font-medium text-slate-500 dark:text-slate-200">{{ item.week }}</p>
          <h3 class="text-sm font-semibold mb-1">{{ item.title }}</h3>
          <p class="text-xs text-slate-500 dark:text-slate-300">
            {{ item.desc }}
          </p>
        </UCard>
      </div>
    </UContainer>

    <!-- ORIGINAL CONTENT (your MDC) -->
    <UContainer class="pb-16">
      <ContentRenderer
        v-if="page"
        :value="page"
        :prose="false"
      />
    </UContainer>
  </UPage>
</template>
