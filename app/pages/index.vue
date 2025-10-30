<script setup lang="ts">
// 1) Try to load content from /1-getting-started
// 2) If not found, fallback to /getting-started
const { data: gettingStarted } = await useAsyncData('getting-started', async () => {
  // try numbered folder (like your current one)
  const numbered = await queryContent('/1-getting-started')
    .only(['_path', 'title', 'description', 'navigation', 'icon'])
    .sort({ _file: 1 })
    .find()

  if (numbered && numbered.length) {
    return numbered
  }

  // fallback if someone renames the folder to "getting-started"
  const plain = await queryContent('/getting-started')
    .only(['_path', 'title', 'description', 'navigation', 'icon'])
    .sort({ _file: 1 })
    .find()

  return plain ?? []
})

// basic SEO for home
const title = 'CRM Analytics Academy — Nuxt + Salesforce CRM Analytics'
const description = 'Learn Salesforce Einstein Analytics / CRM Analytics with structured 8-week curriculum, Nuxt UI docs, and real Salesforce-style examples.'

useSeoMeta({
  titleTemplate: '',
  title,
  ogTitle: title,
  description,
  ogDescription: description
})
</script>

<template>
  <UPage class="bg-white dark:bg-neutral-950">
    <!-- HERO -->
    <UPageHero
      class="dark:bg-gradient-to-b from-neutral-950 to-neutral-900"
      title="CRM Analytics Academy"
      description="Docs-style learning space to teach Salesforce Einstein / CRM Analytics, with real projects, Twilio-ish dashboards, and Indian context."
      orientation="horizontal"
      :ui="{ title: 'text-4xl sm:text-5xl font-bold tracking-tight', description: 'text-base sm:text-lg max-w-2xl' }"
    >
      <template #links>
        <!-- ✅ this exists in your template -->
        <UButton to="/1-getting-started" size="xl" icon="i-lucide-arrow-right" trailing>
          Start learning
        </UButton>

        <!-- ✅ external, no Nuxt route -->
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

      <!-- right column: dummy dashboard placeholder -->
      <template #right>
        <div class="academy-placeholder">
          <div class="academy-placeholder__header">
            <span class="dot bg-red-400" />
            <span class="dot bg-yellow-400" />
            <span class="dot bg-green-400" />
          </div>
          <div class="academy-placeholder__body">
            <p class="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-200 mb-1">
              CRM Analytics — sample view
            </p>
            <p class="text-sm font-semibold mb-4">
              AE Pipeline — Org Pricing
            </p>
            <div class="academy-placeholder__chart" />
            <p class="text-[10px] text-slate-400 mt-3">
              * dummy placeholder, swap with real dashboard embed later
            </p>
          </div>
        </div>
      </template>
    </UPageHero>

    <!-- ADS like you had -->
    <div class="hidden lg:block mt-6 px-4">
      <ClientOnly>
        <GoogleAd
          ad-slot="7663977887"
          ad-format="auto"
          :fullWidth="true"
          ins-style="display:block"
          :refreshKey="Date.now()"
        />
      </ClientOnly>
    </div>

    <!-- CURRICULUM BLOCK -->
    <UContainer class="py-12 space-y-10">
      <div class="flex flex-col gap-2">
        <p class="text-sm uppercase tracking-[0.25em] text-slate-500 dark:text-slate-300">
          Curriculum
        </p>
        <h2 class="text-2xl font-semibold tracking-tight">
          CRM Analytics in 3 phases
        </h2>
        <p class="text-slate-600 dark:text-slate-300 max-w-2xl">
          Foundations → App building → Production/Twilio-ish. Same structure you can show in videos, Ghost posts, or Supabase lessons.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-3">
        <!-- Phase 1 -->
        <UCard>
          <div class="flex items-start gap-3 mb-3">
            <UIcon name="i-lucide-sparkles" class="h-6 w-6" style="color: var(--ui-primary)" />
            <div>
              <h3 class="font-semibold text-base">Phase 1 · Foundations</h3>
              <p class="text-sm text-slate-500 dark:text-slate-300">
                Week 0–2 · “What is CRM Analytics” + datasets + lenses.
              </p>
            </div>
          </div>
          <UAccordion
            size="sm"
            :items="[
              { label: 'Intro to CRM Analytics', content: 'Positioning vs reports, Tableau, Data Cloud.' },
              { label: 'Data & Datasets', content: 'Load, transform, recipes, row-level idea.' },
              { label: 'Dashboards basics', content: 'Charts, pages, filters.' }
            ]"
          />
        </UCard>

        <!-- Phase 2 -->
        <UCard>
          <div class="flex items-start gap-3 mb-3">
            <UIcon name="i-lucide-layout-dashboard" class="h-6 w-6" style="color: var(--ui-primary)" />
            <div>
              <h3 class="font-semibold text-base">Phase 2 · App Builder</h3>
              <p class="text-sm text-slate-500 dark:text-slate-300">
                Week 3–5 · Build event monitoring / sales analytics style apps.
              </p>
            </div>
          </div>
          <UAccordion
            size="sm"
            :items="[
              { label: 'Dataflows & scheduling', content: 'Create, run, debug when app “not fetching”.' },
              { label: 'Templates & cloning', content: 'How Salesforce ships the apps you saw.' },
              { label: 'Lightning embedding', content: 'Dashboard component, filter from record page.' }
            ]"
          />
        </UCard>

        <!-- Phase 3 -->
        <UCard>
          <div class="flex items-start gap-3 mb-3">
            <UIcon name="i-lucide-bot" class="h-6 w-6" style="color: var(--ui-primary)" />
            <div>
              <h3 class="font-semibold text-base">Phase 3 · Advanced / Twilio-ish</h3>
              <p class="text-sm text-slate-500 dark:text-slate-300">
                Week 6–8 · Production dashboards, bindings, RLS, approvals.
              </p>
            </div>
          </div>
          <UAccordion
            size="sm"
            :items="[
              { label: 'Case/Quote history dashboards', content: 'Multi-dataset, compare tables.' },
              { label: 'Row-level security', content: 'User, role, account hierarchy.' },
              { label: 'Packaging & handoff', content: 'Move sandbox → prod, document in Ghost.' }
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
          8-week path to “I can demo this”
        </h2>
      </div>

      <div class="academy-timeline">
        <UCard
          v-for="item in [
            { week: 'Week 0', title: 'Setup', desc: 'Dev org, CRM Analytics enabled, sample data.' },
            { week: 'Week 1', title: 'Datasets', desc: 'Import, transform, recipes.' },
            { week: 'Week 2', title: 'Dashboards', desc: 'Charts, filters, compact tables.' },
            { week: 'Week 3', title: 'Dataflows', desc: 'Run & fix “not fetching” issues.' },
            { week: 'Week 4', title: 'Apps', desc: 'Event Monitoring / Sales Analytics pattern.' },
            { week: 'Week 5', title: 'Embedding', desc: 'LWC, Lightning pages, URL filters.' },
            { week: 'Week 6', title: 'Advanced', desc: 'Bindings, SAQL, compare tables.' },
            { week: 'Week 7–8', title: 'Capstone', desc: 'Build AE / .Org pricing dashboard.' }
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

    <!-- 🔽 CONTENT FROM YOUR ACTUAL FOLDERS -->
    <UContainer class="pb-20 space-y-6">
      <div class="flex items-center justify-between gap-4">
        <div>
          <p class="text-sm uppercase tracking-[0.25em] text-slate-500 dark:text-slate-300">
            From docs
          </p>
          <h2 class="text-lg font-semibold">
            Getting started content
          </h2>
          <p class="text-sm text-slate-500 dark:text-slate-300">
            Pulled from <code>/content/1-getting-started</code> (or <code>/content/getting-started</code>).
          </p>
        </div>
        <!-- we can keep this button purely cosmetic -->
        <UButton to="/1-getting-started" icon="i-lucide-arrow-right" trailing>
          View all
        </UButton>
      </div>

      <div class="grid gap-4 md:grid-cols-2">
        <UCard
          v-for="doc in gettingStarted || []"
          :key="doc._path"
          :to="doc._path"
          class="hover:border-[color:var(--ui-primary)] transition"
        >
          <div class="flex gap-3 items-start">
            <UIcon
              v-if="doc.navigation?.icon || doc.icon"
              :name="doc.navigation?.icon || doc.icon"
              class="h-6 w-6 mt-1"
            />
            <div>
              <h3 class="font-semibold">
                {{ doc.title || 'Untitled doc' }}
              </h3>
              <p class="text-sm text-slate-500 dark:text-slate-300" v-if="doc.description">
                {{ doc.description }}
              </p>
              <p class="text-xs text-slate-400 mt-2">
                {{ doc._path }}
              </p>
            </div>
          </div>
        </UCard>

        <!-- if empty, show message -->
        <UCard v-if="(gettingStarted && gettingStarted.length === 0)">
          <p class="text-sm text-slate-500 dark:text-slate-300">
            No docs found in <code>/1-getting-started</code>. Create <code>content/1-getting-started/index.md</code> or rename to <code>content/getting-started/</code>.
          </p>
        </UCard>
      </div>
    </UContainer>
  </UPage>
</template>
