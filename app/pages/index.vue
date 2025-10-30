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
    <!-- 1. HERO -->
    <section class="py-14 md:py-20 bg-gradient-to-b from-white to-slate-50 dark:from-neutral-950 dark:to-neutral-900">
      <UContainer>
        <div class="grid gap-10 md:grid-cols-2 items-center">
          <div class="space-y-5">
            <p class="text-[11px] uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300">
              CRM Analytics Academy
            </p>
            <h1 class="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              Salesforce CRM Analytics for builders, admins and creators.
            </h1>
            <p class="text-slate-600 dark:text-slate-300 text-base md:text-lg max-w-xl">
              Learn Einstein / CRM Analytics the way you actually work: datasets → dashboards → dataflows → embedding →
              Twilio-style internal apps.
            </p>
            <div class="flex flex-wrap gap-4">
              <UButton to="/" size="lg">Start here</UButton>
              <UButton
                to="https://youtube.com/@imswarnil"
                target="_blank"
                variant="outline"
                size="lg"
              >
                Watch on YouTube
              </UButton>
            </div>
            <p class="text-xs text-slate-400 dark:text-slate-500">
              No algorithm drama. Just structured learning. Add your ads later. 😌
            </p>
          </div>

          <!-- right block -->
          <div
            class="rounded-xl border border-slate-200/70 dark:border-slate-800/70 bg-white/80 dark:bg-neutral-900/40 backdrop-blur p-4 md:p-5 shadow-sm"
          >
            <p class="text-[10px] uppercase tracking-wide text-slate-400 dark:text-slate-200 mb-2">
              Sample dashboard
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
              * plug real Einstein / CRM Analytics embed here
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- 2. METRICS / WHY -->
    <section class="py-6">
      <UContainer>
        <div class="grid gap-4 md:grid-cols-4">
          <div class="p-4 rounded-lg bg-slate-50 dark:bg-neutral-900/50 border border-slate-100 dark:border-slate-800">
            <p class="text-3xl font-semibold text-slate-900 dark:text-white">8 weeks</p>
            <p class="text-xs text-slate-500 dark:text-slate-300 mt-1">structured progression</p>
          </div>
          <div class="p-4 rounded-lg bg-slate-50 dark:bg-neutral-900/50 border border-slate-100 dark:border-slate-800">
            <p class="text-3xl font-semibold text-slate-900 dark:text-white">3 tracks</p>
            <p class="text-xs text-slate-500 dark:text-slate-300 mt-1">foundations · builder · advanced</p>
          </div>
          <div class="p-4 rounded-lg bg-slate-50 dark:bg-neutral-900/50 border border-slate-100 dark:border-slate-800">
            <p class="text-3xl font-semibold text-slate-900 dark:text-white">SF context</p>
            <p class="text-xs text-slate-500 dark:text-slate-300 mt-1">Einstein / CRM Analytics specific</p>
          </div>
          <div class="p-4 rounded-lg bg-slate-50 dark:bg-neutral-900/50 border border-slate-100 dark:border-slate-800">
            <p class="text-3xl font-semibold text-slate-900 dark:text-white">Nuxt</p>
            <p class="text-xs text-slate-500 dark:text-slate-300 mt-1">docs-first, SEO-first</p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- 3. WHO IS THIS FOR -->
    <section class="py-10">
      <UContainer>
        <div class="grid gap-6 md:grid-cols-3">
          <UCard>
            <h3 class="text-base font-semibold text-slate-900 dark:text-white mb-2">Admins</h3>
            <p class="text-sm text-slate-500 dark:text-slate-300">
              Need to enable CRM Analytics in orgs, manage dataflows, and show value to business.
            </p>
          </UCard>
          <UCard>
            <h3 class="text-base font-semibold text-slate-900 dark:text-white mb-2">Builders / Devs</h3>
            <p class="text-sm text-slate-500 dark:text-slate-300">
              Want to embed dashboards in Lightning, LWC, or build Twilio-style internal analytics.
            </p>
          </UCard>
          <UCard>
            <h3 class="text-base font-semibold text-slate-900 dark:text-white mb-2">Creators / Trainers</h3>
            <p class="text-sm text-slate-500 dark:text-slate-300">
              Want to publish Salesforce analytics content with structure (YouTube, Ghost, LMS).
            </p>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- 4. 3-PHASE CURRICULUM -->
    <section class="py-12 md:py-16">
      <UContainer class="space-y-8">
        <div>
          <p class="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
            Curriculum
          </p>
          <h2 class="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white mt-2">
            3 phases → beginner to production
          </h2>
        </div>

        <div class="grid gap-6 md:grid-cols-3">
          <UCard>
            <h3 class="text-base font-semibold text-slate-900 dark:text-white mb-2">Phase 1 · Foundations</h3>
            <ul class="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li>• What is CRM / Einstein Analytics</li>
              <li>• Datasets & recipes</li>
              <li>• Lenses & dashboards</li>
            </ul>
          </UCard>
          <UCard>
            <h3 class="text-base font-semibold text-slate-900 dark:text-white mb-2">Phase 2 · App Builder</h3>
            <ul class="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li>• Dataflows & scheduling</li>
              <li>• Using Salesforce templates</li>
              <li>• Event monitoring / sales analytics style apps</li>
            </ul>
          </UCard>
          <UCard>
            <h3 class="text-base font-semibold text-slate-900 dark:text-white mb-2">Phase 3 · Advanced</h3>
            <ul class="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li>• Bindings, SAQL, compare tables</li>
              <li>• Row-level security</li>
              <li>• Packaging & handoff</li>
            </ul>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- 5. 8-WEEK TIMELINE -->
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
              { week: 'Week 4', title: 'Apps', desc: 'Event monitoring / sales analytics.' },
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

    <!-- 6. DELIVERY FORMATS -->
    <section class="py-12">
      <UContainer>
        <div class="grid gap-6 md:grid-cols-3">
          <UCard>
            <h3 class="font-semibold text-slate-900 dark:text-white mb-2">Docs-first</h3>
            <p class="text-sm text-slate-500 dark:text-slate-300">
              Nuxt Content pages for every topic. Good for SEO, good for your Ghost blog, good for students.
            </p>
          </UCard>
          <UCard>
            <h3 class="font-semibold text-slate-900 dark:text-white mb-2">Video-friendly</h3>
            <p class="text-sm text-slate-500 dark:text-slate-300">
              Each section can map to a YouTube episode. Use same outline for shorts/reels.
            </p>
          </UCard>
          <UCard>
            <h3 class="font-semibold text-slate-900 dark:text-white mb-2">Dashboard embeds</h3>
            <p class="text-sm text-slate-500 dark:text-slate-300">
              Reserve slots in the UI to drop CRM Analytics dashboard iframes.
            </p>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- 7. MODULES FROM CONTENT (this is safe: your template has `docs`) -->
    <section class="py-12 bg-slate-50 dark:bg-neutral-900/30">
      <UContainer class="space-y-6">
        <div class="flex items-center justify-between gap-4">
          <div>
            <p class="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
              Nuxt Content
            </p>
            <h2 class="text-lg md:text-xl font-semibold text-slate-900 dark:text-white mt-1">
              Latest docs
            </h2>
          </div>
          <UButton to="/getting-started">
            View docs
          </UButton>
        </div>

        <ContentList path="/docs" v-slot="{ list }">
          <div v-if="list && list.length" class="grid gap-4 md:grid-cols-2">
            <UCard
              v-for="doc in list"
              :key="doc._path"
              :to="doc._path"
              class="hover:border-slate-400 transition"
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
            No docs found in <code>/docs</code>.
          </div>
        </ContentList>
      </UContainer>
    </section>

    <!-- 8. TOOLS STACK -->
    <section class="py-12">
      <UContainer>
        <div class="grid gap-6 md:grid-cols-4">
          <UCard><p class="text-sm">Salesforce CRM Analytics</p></UCard>
          <UCard><p class="text-sm">Nuxt 4 + Nuxt Content</p></UCard>
          <UCard><p class="text-sm">Nuxt UI</p></UCard>
          <UCard><p class="text-sm">Your Ghost / YouTube</p></UCard>
        </div>
      </UContainer>
    </section>

    <!-- 9. FAQ -->
    <section class="py-12 bg-slate-50 dark:bg-neutral-900/30">
      <UContainer class="space-y-6">
        <h2 class="text-xl font-semibold text-slate-900 dark:text-white">FAQ</h2>
        <div class="grid gap-4 md:grid-cols-2">
          <UCard>
            <h3 class="font-medium mb-2">Do I need Salesforce org?</h3>
            <p class="text-sm text-slate-500 dark:text-slate-300">
              Yes, at least a dev org or sandbox where CRM Analytics is enabled.
            </p>
          </UCard>
          <UCard>
            <h3 class="font-medium mb-2">Can I add ads?</h3>
            <p class="text-sm text-slate-500 dark:text-slate-300">
              Yes, wrap sections in <code>&lt;ClientOnly&gt;</code> and drop your GoogleAd component (like you already did).
            </p>
          </UCard>
          <UCard>
            <h3 class="font-medium mb-2">Is this only for India?</h3>
            <p class="text-sm text-slate-500 dark:text-slate-300">
              No. Content is Salesforce-global. You can talk in Hinglish for YouTube, docs stay neutral.
            </p>
          </UCard>
          <UCard>
            <h3 class="font-medium mb-2">Can I make it paid later?</h3>
            <p class="text-sm text-slate-500 dark:text-slate-300">
              Yes, integrate Supabase / Stripe and show premium content cards in this same layout.
            </p>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- 10. CTA -->
    <section class="py-14">
      <UContainer>
        <div class="rounded-2xl bg-slate-900 text-white px-6 py-10 md:px-10 md:py-14 text-center space-y-4">
          <h2 class="text-2xl md:text-3xl font-semibold">Ready to teach CRM Analytics your way?</h2>
          <p class="text-sm md:text-base text-slate-200 max-w-3xl mx-auto">
            Keep this page as the public landing. Move deeper lessons to content folders, gate with Supabase later.
          </p>
          <UButton to="/" size="lg" color="white" variant="solid" class="text-slate-900">
            Start with the docs
          </UButton>
        </div>
      </UContainer>
    </section>

    <!-- 11. ORIGINAL CONTENT (from /content/landing/index.md) -->
    <UContainer class="pb-16">
      <ContentRenderer
        v-if="page"
        :value="page"
        :prose="false"
      />
    </UContainer>
  </div>
</template>
