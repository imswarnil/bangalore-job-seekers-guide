<script setup lang="ts">
const title = 'CRM Analytics Academy — Salesforce Einstein / CRM Analytics'
const description = 'Learn Salesforce CRM Analytics (Einstein Analytics) in 8 weeks. Nuxt UI + Nuxt Content + real dashboards.'

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
      :ui="{
        title: 'text-4xl sm:text-5xl font-bold tracking-tight',
        description: 'text-base sm:text-lg max-w-2xl'
      }"
    >
      <template #links>
        <!-- ✅ this is the folder you said you have -->
        <UButton
          to="/1-getting-started"
          size="xl"
          icon="i-lucide-arrow-right"
          trailing
        >
          Start learning
        </UButton>

        <!-- ✅ external, can’t 404 -->
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

      <!-- right side: dummy dashboard placeholder -->
      <template #right>
        <div class="rounded-xl border border-white/10 bg-white/10 dark:bg-black/20 backdrop-blur p-3 w-72">
          <div class="flex gap-1 mb-3">
            <span class="h-2.5 w-2.5 rounded-full bg-red-400/90" />
            <span class="h-2.5 w-2.5 rounded-full bg-yellow-400/90" />
            <span class="h-2.5 w-2.5 rounded-full bg-green-400/90" />
          </div>
          <div class="rounded-lg border border-dashed border-white/10 bg-white/5 p-3">
            <p class="text-[10px] uppercase tracking-wide text-slate-200 mb-1">
              Dashboard preview
            </p>
            <p class="text-sm font-semibold text-white mb-3">
              AE Pipeline — Org Pricing
            </p>
            <div class="h-24 rounded-md bg-gradient-to-tr from-sky-500/80 to-sky-300/30 relative overflow-hidden">
              <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.25)_1px,transparent_1px)] bg-[length:18px_100%]" />
            </div>
            <p class="text-[10px] text-slate-300 mt-3">
              * replace with real CRM Analytics embed
            </p>
          </div>
        </div>
      </template>
    </UPageHero>

    <!-- ADS (yours) -->
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

    <!-- CURRICULUM (3 tracks) -->
    <UContainer class="py-12 space-y-10">
      <div>
        <p class="text-sm uppercase tracking-[0.25em] text-slate-500 dark:text-slate-300">
          Curriculum
        </p>
        <h2 class="text-2xl font-semibold tracking-tight mt-1">
          CRM Analytics in 3 phases
        </h2>
        <p class="text-slate-600 dark:text-slate-300 max-w-2xl mt-2">
          Foundations → app builder → production/Twilio-ish. Same story you can tell on YouTube, Ghost, or Supabase.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-3">
        <!-- Phase 1 -->
        <UCard>
          <div class="flex items-start gap-3 mb-3">
            <UIcon name="i-lucide-sparkles" class="h-6 w-6 text-sky-500" />
            <div>
              <h3 class="font-semibold text-base">Phase 1 · Foundations</h3>
              <p class="text-sm text-slate-500 dark:text-slate-300">
                Week 0–2 · what CRM Analytics is, datasets, lenses.
              </p>
            </div>
          </div>
          <UAccordion
            size="sm"
            :items="[
              { label: 'Intro to CRM Analytics', content: 'Positioning vs reports, Tableau, Data Cloud.' },
              { label: 'Datasets & recipes', content: 'Load, transform, joins, security idea.' },
              { label: 'Dashboards 101', content: 'Charts, pages, filters, compact tables.' }
            ]"
          />
        </UCard>

        <!-- Phase 2 -->
        <UCard>
          <div class="flex items-start gap-3 mb-3">
            <UIcon name="i-lucide-layout-dashboard" class="h-6 w-6 text-sky-500" />
            <div>
              <h3 class="font-semibold text-base">Phase 2 · App Builder</h3>
              <p class="text-sm text-slate-500 dark:text-slate-300">
                Week 3–5 · event monitoring / sales analytics style apps.
              </p>
            </div>
          </div>
          <UAccordion
            size="sm"
            :items="[
              { label: 'Dataflows & scheduling', content: 'Create, run, fix “not fetching” 🙃.' },
              { label: 'Templates & cloning', content: 'How Salesforce ships prebuilt apps.' },
              { label: 'Lightning embedding', content: 'Dashboard component, filters from record page.' }
            ]"
          />
        </UCard>

        <!-- Phase 3 -->
        <UCard>
          <div class="flex items-start gap-3 mb-3">
            <UIcon name="i-lucide-bot" class="h-6 w-6 text-sky-500" />
            <div>
              <h3 class="font-semibold text-base">Phase 3 · Advanced / Twilio-ish</h3>
              <p class="text-sm text-slate-500 dark:text-slate-300">
                Week 6–8 · production dashboards, bindings, RLS.
              </p>
            </div>
          </div>
          <UAccordion
            size="sm"
            :items="[
              { label: 'Case/Quote history dashboards', content: 'Multi-dataset, compare tables.' },
              { label: 'Row-level security', content: 'User, role, account hierarchy.' },
              { label: 'Packaging & handoff', content: 'Sandbox → prod, document in Ghost.' }
            ]"
          />
        </UCard>
      </div>
    </UContainer>

    <!-- TIMELINE -->
    <UContainer class="pb-16 space-y-6">
      <div>
        <p class="text-sm uppercase tracking-[0.25em] text-slate-500 dark:text-slate-300">
          Learning timeline
        </p>
        <h2 class="text-2xl font-semibold tracking-tight mt-1">
          8-week path to “I can demo this”
        </h2>
      </div>

      <div class="flex gap-4 overflow-x-auto pb-3">
        <UCard
          v-for="item in [
            { week: 'Week 0', title: 'Setup', desc: 'Dev org, CRM Analytics enabled.' },
            { week: 'Week 1', title: 'Datasets', desc: 'Import, transform, recipes.' },
            { week: 'Week 2', title: 'Dashboards', desc: 'Charts, filters, compact tables.' },
            { week: 'Week 3', title: 'Dataflows', desc: 'Run & fix “not fetching”.' },
            { week: 'Week 4', title: 'Apps', desc: 'Event Monitoring style.' },
            { week: 'Week 5', title: 'Embedding', desc: 'LWC, Lightning page, URL filters.' },
            { week: 'Week 6', title: 'Advanced', desc: 'Bindings, SAQL, compare tables.' },
            { week: 'Week 7–8', title: 'Capstone', desc: 'Build AE / Org pricing dashboard.' }
          ]"
          :key="item.week"
          class="min-w-[180px]"
        >
          <p class="text-xs font-medium text-slate-500 dark:text-slate-200">
            {{ item.week }}
          </p>
          <h3 class="text-sm font-semibold mb-1">
            {{ item.title }}
          </h3>
          <p class="text-xs text-slate-500 dark:text-slate-300">
            {{ item.desc }}
          </p>
        </UCard>
      </div>
    </UContainer>

    <!-- LIST CONTENT FROM /1-getting-started -->
    <UContainer class="pb-20 space-y-6">
      <div class="flex items-center justify-between gap-4">
        <div>
          <p class="text-sm uppercase tracking-[0.25em] text-slate-500 dark:text-slate-300">
            From your docs
          </p>
          <h2 class="text-lg font-semibold">
            Getting Started
          </h2>
          <p class="text-sm text-slate-500 dark:text-slate-300">
            Pulled from <code>/content/1-getting-started</code>
          </p>
        </div>
        <UButton to="/1-getting-started" icon="i-lucide-arrow-right" trailing>
          View all
        </UButton>
      </div>

      <!-- ✅ This is the safest way: ContentList -->
      <ContentList path="/1-getting-started" v-slot="{ list }">
        <div v-if="list && list.length" class="grid gap-4 md:grid-cols-2">
          <UCard
            v-for="doc in list"
            :key="doc._path"
            :to="doc._path"
            class="hover:border-sky-400 transition"
          >
            <div class="flex gap-3 items-start">
              <UIcon
                v-if="doc.navigation?.icon || doc.icon"
                :name="doc.navigation?.icon || doc.icon"
                class="h-6 w-6 mt-1"
              />
              <div>
                <h3 class="font-semibold">
                  {{ doc.title || 'Untitled' }}
                </h3>
                <p v-if="doc.description" class="text-sm text-slate-500 dark:text-slate-300 mt-1">
                  {{ doc.description }}
                </p>
                <p class="text-xs text-slate-400 mt-2">
                  {{ doc._path }}
                </p>
              </div>
            </div>
          </UCard>
        </div>

        <div v-else class="text-sm text-slate-500 dark:text-slate-300">
          No docs found in <code>/1-getting-started</code>. Make sure the folder name is correct.
        </div>
      </ContentList>
    </UContainer>
  </UPage>
</template>
