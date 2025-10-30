<script setup lang="ts">
const title = 'CRM Analytics Academy — Salesforce Einstein / CRM Analytics'
const description = 'Learn Salesforce CRM Analytics (Einstein Analytics) in 8 weeks with a structured curriculum, Nuxt UI docs, and real Salesforce-style dashboards.'

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-neutral-950">
    <!-- HERO -->
    <section class="bg-gradient-to-b from-white to-slate-50 dark:from-neutral-950 dark:to-neutral-900 py-14 md:py-20">
      <UContainer>
        <div class="grid gap-10 md:grid-cols-2 items-center">
          <div class="space-y-5">
            <p class="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
              CRM Analytics Academy
            </p>
            <h1 class="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
              Learn Salesforce CRM Analytics like it’s a video script.
            </h1>
            <p class="text-slate-600 dark:text-slate-300 text-base md:text-lg max-w-xl">
              Einstein / CRM Analytics, dataflows, dashboards, app templates, and embedding — but explained like a creator,
              not a release note.
            </p>
            <div class="flex flex-wrap gap-4">
              <!-- ✅ this is your existing folder -->
              <UButton to="/1-getting-started" size="lg" icon="i-lucide-arrow-right" trailing>
                Start learning
              </UButton>

              <!-- ✅ external, so no 404 -->
              <UButton
                to="https://youtube.com/@imswarnil"
                target="_blank"
                variant="outline"
                size="lg"
                icon="i-simple-icons-youtube"
              >
                Watch on YouTube
              </UButton>
            </div>
          </div>

          <!-- Right: dummy dashboard placeholder -->
          <div class="rounded-xl border border-slate-200/70 dark:border-slate-800/70 bg-white/80 dark:bg-neutral-900/50 backdrop-blur p-4 md:p-5 shadow-sm">
            <div class="flex gap-1 mb-4">
              <span class="h-2.5 w-2.5 rounded-full bg-red-400/90" />
              <span class="h-2.5 w-2.5 rounded-full bg-yellow-400/90" />
              <span class="h-2.5 w-2.5 rounded-full bg-green-400/90" />
            </div>
            <p class="text-[10px] uppercase tracking-wide text-slate-400 dark:text-slate-200 mb-1">
              CRM Analytics — sample view
            </p>
            <p class="text-sm font-semibold text-slate-900 dark:text-white mb-4">
              AE Pipeline — Org Pricing
            </p>
            <div class="h-28 rounded-md bg-gradient-to-tr from-sky-500/70 to-sky-300/30 relative overflow-hidden">
              <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.25)_1px,transparent_1px)] bg-[length:20px_100%]" />
            </div>
            <p class="text-[10px] text-slate-400 dark:text-slate-500 mt-3">
              * dummy placeholder — later embed real Einstein / CRM Analytics dashboard
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- CURRICULUM -->
    <section class="py-12 md:py-16">
      <UContainer class="space-y-8">
        <div>
          <p class="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
            Curriculum
          </p>
          <h2 class="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white mt-2">
            3 phases to go from “what is this” to “I can show my manager”
          </h2>
          <p class="text-slate-600 dark:text-slate-300 max-w-2xl mt-2">
            Same structure you can map to Supabase lessons, Ghost posts, or YouTube playlists.
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-3">
          <!-- Phase 1 -->
          <UCard>
            <div class="flex items-start gap-3 mb-4">
              <UIcon name="i-lucide-sparkles" class="h-6 w-6 text-sky-500" />
              <div>
                <h3 class="font-semibold text-base">Phase 1 · Foundations</h3>
                <p class="text-sm text-slate-500 dark:text-slate-300">
                  Week 0–2 — what CRM Analytics is, datasets, lenses.
                </p>
              </div>
            </div>
            <ul class="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li>• Intro to CRM / Einstein Analytics</li>
              <li>• Datasets, recipes, security idea</li>
              <li>• Lenses, dashboards, chart types</li>
            </ul>
          </UCard>

          <!-- Phase 2 -->
          <UCard>
            <div class="flex items-start gap-3 mb-4">
              <UIcon name="i-lucide-layout-dashboard" class="h-6 w-6 text-sky-500" />
              <div>
                <h3 class="font-semibold text-base">Phase 2 · App Builder</h3>
                <p class="text-sm text-slate-500 dark:text-slate-300">
                  Week 3–5 — build event monitoring / sales analytics style apps.
                </p>
              </div>
            </div>
            <ul class="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li>• Dataflows & scheduling</li>
              <li>• Templates & cloning</li>
              <li>• Embedding in Lightning</li>
            </ul>
          </UCard>

          <!-- Phase 3 -->
          <UCard>
            <div class="flex items-start gap-3 mb-4">
              <UIcon name="i-lucide-bot" class="h-6 w-6 text-sky-500" />
              <div>
                <h3 class="font-semibold text-base">Phase 3 · Advanced / Twilio-ish</h3>
                <p class="text-sm text-slate-500 dark:text-slate-300">
                  Week 6–8 — bindings, RLS, production dashboards.
                </p>
              </div>
            </div>
            <ul class="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li>• Case / quote history dashboards</li>
              <li>• Row-level security (user/role/account)</li>
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
              { week: 'Week 4', title: 'Apps', desc: 'Event Monitoring-style.' },
              { week: 'Week 5', title: 'Embedding', desc: 'LWC, Lightning pages, URL filters.' },
              { week: 'Week 6', title: 'Advanced', desc: 'Bindings, SAQL, compare tables.' },
              { week: 'Week 7–8', title: 'Capstone', desc: 'Build AE / Org pricing dashboard.' }
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

    <!-- CONTENT FROM /1-getting-started -->
    <section class="pb-20">
      <UContainer class="space-y-6">
        <div class="flex items-center justify-between gap-4">
          <div>
            <p class="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
              From your docs
            </p>
            <h2 class="text-lg md:text-xl font-semibold text-slate-900 dark:text-white mt-1">
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

        <!-- ✅ safest Nuxt Content usage -->
        <ContentList path="/1-getting-started" v-slot="{ list }">
          <div v-if="list && list.length" class="grid gap-4 md:grid-cols-2">
            <UCard
              v-for="doc in list"
              :key="doc._path"
              :to="doc._path"
              class="hover:border-sky-400 transition"
            >
              <h3 class="font-semibold text-slate-900 dark:text-white">
                {{ doc.title || 'Untitled' }}
              </h3>
              <p v-if="doc.description" class="text-sm text-slate-500 dark:text-slate-300 mt-1">
                {{ doc.description }}
              </p>
              <p class="text-xs text-slate-400 mt-2">
                {{ doc._path }}
              </p>
            </UCard>
          </div>

          <div v-else class="text-sm text-slate-500 dark:text-slate-300">
            No docs found in <code>/1-getting-started</code>. Check the folder name.
          </div>
        </ContentList>
      </UContainer>
    </section>
  </div>
</template>
