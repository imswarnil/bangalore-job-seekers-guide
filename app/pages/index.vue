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
      description="Learn Salesforce Einstein Analytics / CRM Analytics with real dashboards, dataflows and app templates — explained the Swarnil way."
      orientation="horizontal"
      :ui="{ title: 'text-4xl sm:text-5xl font-bold tracking-tight', description: 'text-base sm:text-lg max-w-2xl' }"
    >
      <template #links>
        <!-- ✅ this route exists in your content -->
        <UButton
          to="/getting-started"
          size="xl"
          icon="i-lucide-arrow-right"
          trailing
        >
          Start now
        </UButton>

        <!-- ✅ external link, no Nuxt route -->
        <UButton
          to="https://youtube.com/@imswarnil"
          target="_blank"
          variant="outline"
          size="xl"
          icon="i-simple-icons-youtube"
        >
          Watch on YouTube
        </UButton>
      </template>

      <template #right>
        <!-- Dummy dashboard/image placeholder -->
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
              * dummy chart – replace with real embed
            </p>
          </div>
        </div>
      </template>
    </UPageHero>

    <!-- ADS (you already had this pattern) -->
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
          3 tracks — beginner → app builder → production
        </h2>
        <p class="text-slate-600 dark:text-slate-300 max-w-2xl">
          Use this structure to create lessons in Content or Supabase later. Nuxt UI just makes it look official.
        </p>
      </div>

      <!-- simple grid (no UPageGrid, so no missing component errors) -->
      <div class="grid gap-6 md:grid-cols-3">
        <!-- Track 1 -->
        <UCard>
          <div class="flex items-start gap-3 mb-3">
            <UIcon name="i-lucide-sparkles" class="h-6 w-6" style="color: var(--ui-primary)" />
            <div>
              <h3 class="font-semibold text-base">Track 1 · Foundations</h3>
              <p class="text-sm text-slate-500 dark:text-slate-300">
                Week 0–2 · Basics + how CRM Analytics is different from normal reports.
              </p>
            </div>
          </div>
          <UAccordion
            size="sm"
            :items="[
              { label: 'Lesson 1: What is CRM Analytics?', content: 'Positioning, where it fits, why data platform.' },
              { label: 'Lesson 2: Datasets & Recipes', content: 'SAQL vs SOQL, joins, security concept.' },
              { label: 'Lesson 3: Lenses & Dashboards', content: 'Charts, pages, compact tables.' }
            ]"
          />
        </UCard>

        <!-- Track 2 -->
        <UCard>
          <div class="flex items-start gap-3 mb-3">
            <UIcon name="i-lucide-layers" class="h-6 w-6" style="color: var(--ui-primary)" />
            <div>
              <h3 class="font-semibold text-base">Track 2 · App Builder</h3>
              <p class="text-sm text-slate-500 dark:text-slate-300">
                Week 3–5 · Build event monitoring / sales analytics style apps.
              </p>
            </div>
          </div>
          <UAccordion
            size="sm"
            :items="[
              { label: 'Lesson 4: Dataflows & scheduling', content: 'Create, run, debug, monitor.' },
              { label: 'Lesson 5: Templates & cloning', content: 'How Salesforce ships prebuilt apps.' },
              { label: 'Lesson 6: Embedding in Lightning', content: 'Dashboard component, filters from LWC.' }
            ]"
          />
        </UCard>

        <!-- Track 3 -->
        <UCard>
          <div class="flex items-start gap-3 mb-3">
            <UIcon name="i-lucide-bot" class="h-6 w-6" style="color: var(--ui-primary)" />
            <div>
              <h3 class="font-semibold text-base">Track 3 · Advanced / Twilio-ish</h3>
              <p class="text-sm text-slate-500 dark:text-slate-300">
                Week 6–8 · Production dashboards, bindings, RLS, approvals.
              </p>
            </div>
          </div>
          <UAccordion
            size="sm"
            :items="[
              { label: 'Lesson 7: Case/Quote history dashboards', content: 'Multi-dataset, percent diff, filters.' },
              { label: 'Lesson 8: Row-level security (RLS)', content: 'User/role/account based access.' },
              { label: 'Lesson 9: Packaging & handoff', content: 'Move from sandbox → prod, documentation.' }
            ]"
          />
        </UCard>
      </div>
    </UContainer>

    <!-- TIMELINE -->
    <UContainer class="pb-16">
      <div class="flex flex-col gap-2 mb-6">
        <p class="text-sm uppercase tracking-[0.25em] text-slate-500 dark:text-slate-300">
          Learning timeline
        </p>
        <h2 class="text-2xl font-semibold tracking-tight">
          8 weeks from “what is Einstein Analytics?” to “manager, look at this”
        </h2>
      </div>

      <div class="academy-timeline">
        <UCard
          v-for="item in [
            { week: 'Week 0', title: 'Setup', desc: 'CRM Analytics enabled, sample app, basic dataset.' },
            { week: 'Week 1', title: 'Datasets', desc: 'Import, transform, recipes, RLS concept.' },
            { week: 'Week 2', title: 'Dashboards', desc: 'Charts, pages, compact tables, filters.' },
            { week: 'Week 3', title: 'Dataflows', desc: 'Run + fix “not fetching” issues 👀.' },
            { week: 'Week 4', title: 'Apps', desc: 'Event Monitoring style, extend templates.' },
            { week: 'Week 5', title: 'Embedding', desc: 'LWC, Lightning pages, URL filters.' },
            { week: 'Week 6', title: 'Advanced', desc: 'Bindings, SAQL, compare tables.' },
            { week: 'Week 7–8', title: 'Capstone', desc: 'Build Twilio-ish AE / .Org pricing dashboard.' }
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

    <!-- CONTENT FROM /content/landing/index.md -->
    <UContainer class="pb-16">
      <ContentRenderer
        v-if="page"
        :value="page"
        :prose="false"
      />
    </UContainer>
  </UPage>
</template>
