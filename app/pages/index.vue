<template>
  <main class="min-h-screen bg-white text-slate-900">
    <!-- 1. HERO -->
    <section class="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-white to-slate-50">
      <div class="mx-auto max-w-6xl px-4 py-16 lg:flex lg:items-center lg:gap-10">
        <div class="flex-1 space-y-6">
          <p class="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
            <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
            New: Bangalore Job Seekers Guide · LMS Style
          </p>
          <h1 class="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Learn. Build. Get Hired in Bangalore.
          </h1>
          <p class="max-w-2xl text-base text-slate-600 md:text-lg">
            This is your all-in-one playbook — getting started, portfolio, city hacks, interviews, even survival kit. No algos, just your story.
          </p>
          <div class="flex flex-wrap gap-4">
            <NuxtLink
              to="/getting-started"
              class="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
            >
              Start Learning
              <span aria-hidden="true">→</span>
            </NuxtLink>
            <NuxtLink
              to="/docs"
              class="inline-flex items-center gap-2 rounded-lg bg-slate-100 px-5 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-200"
            >
              Browse Docs
            </NuxtLink>
          </div>
          <div class="flex items-center gap-4 text-xs text-slate-500">
            <div class="flex -space-x-1">
              <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-xs font-semibold text-slate-700">S</span>
              <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-xs font-semibold text-slate-700">W</span>
              <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-xs font-semibold text-slate-700">G</span>
            </div>
            <p>Trusted by 1,000+ job seekers & makers</p>
          </div>
        </div>

        <div class="mt-10 flex-1 lg:mt-0">
          <div class="rounded-2xl border border-slate-200 bg-white/80 shadow-sm backdrop-blur">
            <div class="border-b border-slate-200 px-6 py-4">
              <p class="text-xs font-medium uppercase tracking-wide text-slate-500">Your Learning Dashboard</p>
            </div>
            <div class="space-y-4 p-6">
              <div class="flex items-center justify-between gap-4">
                <div>
                  <p class="text-sm font-semibold text-slate-700">1 — Getting Started</p>
                  <p class="text-xs text-slate-500">Nuxt content folder: <code>/content/1-getting-started</code></p>
                </div>
                <span class="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Ready
                </span>
              </div>
              <div class="flex items-center justify-between gap-4">
                <div>
                  <p class="text-sm font-semibold text-slate-700">2 — Move to Bangalore</p>
                  <p class="text-xs text-slate-500">Areas, PG, transport</p>
                </div>
                <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  Soon
                </span>
              </div>
              <div class="flex items-center justify-between gap-4">
                <div>
                  <p class="text-sm font-semibold text-slate-700">3 — Portfolio / GitHub</p>
                  <p class="text-xs text-slate-500">For Software + Content creator</p>
                </div>
                <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  Soon
                </span>
              </div>
              <NuxtLink
                to="/getting-started"
                class="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
              >
                Continue from “Getting Started”
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. STATS / SOCIAL PROOF -->
    <section class="bg-white py-10">
      <div class="mx-auto max-w-6xl px-4">
        <div class="grid gap-6 md:grid-cols-4">
          <div class="rounded-2xl border border-slate-200 bg-slate-50/50 p-5 text-center">
            <p class="text-3xl font-bold text-slate-900">10+</p>
            <p class="text-xs text-slate-500">Learning Tracks</p>
          </div>
          <div class="rounded-2xl border border-slate-200 bg-slate-50/50 p-5 text-center">
            <p class="text-3xl font-bold text-slate-900">Bangalore</p>
            <p class="text-xs text-slate-500">Local playbook</p>
          </div>
          <div class="rounded-2xl border border-slate-200 bg-slate-50/50 p-5 text-center">
            <p class="text-3xl font-bold text-slate-900">YouTube</p>
            <p class="text-xs text-slate-500">Docs + video friendly</p>
          </div>
          <div class="rounded-2xl border border-slate-200 bg-slate-50/50 p-5 text-center">
            <p class="text-3xl font-bold text-slate-900">Ghost</p>
            <p class="text-xs text-slate-500">Newsletter ready</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. FEATURED COURSES -->
    <section class="bg-slate-50 py-14">
      <div class="mx-auto max-w-6xl px-4">
        <div class="flex items-center justify-between gap-4">
          <div>
            <h2 class="text-2xl font-bold text-slate-900">Popular modules</h2>
            <p class="text-sm text-slate-500">Hardcoded so SSR never cries.</p>
          </div>
          <NuxtLink to="/getting-started" class="text-sm font-medium text-slate-900 hover:underline">
            View all →
          </NuxtLink>
        </div>
        <div class="mt-8 grid gap-6 md:grid-cols-3">
          <article class="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6">
            <div>
              <p class="text-xs font-medium uppercase tracking-wide text-slate-500">Module 1</p>
              <h3 class="mt-2 text-lg font-semibold text-slate-900">Getting Started</h3>
              <p class="mt-2 text-sm text-slate-500">
                Understand folder <code>/content/1-getting-started</code>, how docs auto-render, and how to extend it.
              </p>
            </div>
            <NuxtLink to="/getting-started" class="mt-4 text-sm font-medium text-slate-900 hover:underline">
              Start →
            </NuxtLink>
          </article>

          <article class="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6">
            <div>
              <p class="text-xs font-medium uppercase tracking-wide text-slate-500">Module 2</p>
              <h3 class="mt-2 text-lg font-semibold text-slate-900">Move to Bangalore</h3>
              <p class="mt-2 text-sm text-slate-500">
                Cost, areas, roommates, “I am from Mahroni can I survive?” syllabus.
              </p>
            </div>
            <button type="button" class="mt-4 text-sm font-medium text-slate-400" disabled>
              Coming soon
            </button>
          </article>

          <article class="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6">
            <div>
              <p class="text-xs font-medium uppercase tracking-wide text-slate-500">Module 3</p>
              <h3 class="mt-2 text-lg font-semibold text-slate-900">Content + Portfolio</h3>
              <p class="mt-2 text-sm text-slate-500">
                Blend YouTube + Docs + Nuxt UI like a civilized Deadpool.
              </p>
            </div>
            <button type="button" class="mt-4 text-sm font-medium text-slate-400" disabled>
              Coming soon
            </button>
          </article>
        </div>
      </div>
    </section>

    <!-- 4. LEARNING PATH -->
    <section class="bg-white py-14">
      <div class="mx-auto max-w-6xl px-4">
        <h2 class="text-2xl font-bold text-slate-900">Learning path</h2>
        <p class="text-sm text-slate-500">Follow in order, don’t improvise like Jack Sparrow in HR round.</p>
        <div class="mt-8 grid gap-4 md:grid-cols-5">
          <div class="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p class="text-xs font-semibold text-slate-500">Step 1</p>
            <p class="mt-1 text-sm font-semibold text-slate-900">Read “Getting Started”</p>
          </div>
          <div class="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p class="text-xs font-semibold text-slate-500">Step 2</p>
            <p class="mt-1 text-sm font-semibold text-slate-900">Setup local Nuxt</p>
          </div>
          <div class="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p class="text-xs font-semibold text-slate-500">Step 3</p>
            <p class="mt-1 text-sm font-semibold text-slate-900">Connect CMS (Ghost)</p>
          </div>
          <div class="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p class="text-xs font-semibold text-slate-500">Step 4</p>
            <p class="mt-1 text-sm font-semibold text-slate-900">Create course pages</p>
          </div>
          <div class="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p class="text-xs font-semibold text-slate-500">Step 5</p>
            <p class="mt-1 text-sm font-semibold text-slate-900">Publish & share</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. CATEGORIES -->
    <section class="bg-slate-50 py-14">
      <div class="mx-auto max-w-6xl px-4">
        <h2 class="text-2xl font-bold text-slate-900">Categories</h2>
        <p class="text-sm text-slate-500">Docs are grouped, you just hid them in <code>/content</code>.</p>
        <div class="mt-6 grid gap-4 md:grid-cols-4">
          <div class="rounded-xl border border-slate-200 bg-white p-4">
            <h3 class="font-semibold text-slate-900">Getting Started</h3>
            <p class="text-sm text-slate-500">Install, config, structure</p>
          </div>
          <div class="rounded-xl border border-slate-200 bg-white p-4">
            <h3 class="font-semibold text-slate-900">Essentials</h3>
            <p class="text-sm text-slate-500">Real life Bangalore setup</p>
          </div>
          <div class="rounded-xl border border-slate-200 bg-white p-4">
            <h3 class="font-semibold text-slate-900">Career & Content</h3>
            <p class="text-sm text-slate-500">YouTube + Docs + Job</p>
          </div>
          <div class="rounded-xl border border-slate-200 bg-white p-4">
            <h3 class="font-semibold text-slate-900">Tools</h3>
            <p class="text-sm text-slate-500">Nuxt UI, Tailwind, Ghost</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. TESTIMONIALS (STATIC) -->
    <section class="bg-white py-14">
      <div class="mx-auto max-w-6xl px-4">
        <h2 class="text-2xl font-bold text-slate-900">What learners say</h2>
        <div class="mt-6 grid gap-6 md:grid-cols-3">
          <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm text-slate-700">
              “Finally doc + content + Bangalore specific. No generic AI junk.”
            </p>
            <p class="mt-3 text-xs font-semibold text-slate-500">— A very real person</p>
          </div>
          <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm text-slate-700">
              “I shipped a Nuxt docs site and showed it in interview, got offer.”
            </p>
            <p class="mt-3 text-xs font-semibold text-slate-500">— Job Seeker</p>
          </div>
          <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm text-slate-700">
              “Swarnil explained like Deadpool, but cleaner.”
            </p>
            <p class="mt-3 text-xs font-semibold text-slate-500">— Viewer</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. FAQ -->
    <section class="bg-slate-50 py-14">
      <div class="mx-auto max-w-6xl px-4">
        <h2 class="text-2xl font-bold text-slate-900">FAQ</h2>
        <div class="mt-6 space-y-4">
          <details class="rounded-xl border border-slate-200 bg-white p-4">
            <summary class="cursor-pointer text-sm font-semibold text-slate-900">
              Why was Vercel giving 500?
            </summary>
            <p class="mt-2 text-sm text-slate-500">
              Because SSR tried to render something that depended on runtime/content query. This page is static, so it won’t.
            </p>
          </details>
          <details class="rounded-xl border border-slate-200 bg-white p-4">
            <summary class="cursor-pointer text-sm font-semibold text-slate-900">
              Can I fetch posts from Ghost / Supabase later?
            </summary>
            <p class="mt-2 text-sm text-slate-500">
              Yes. Add it in a client-only component or guard it with <code>process.client</code> later.
            </p>
          </details>
          <details class="rounded-xl border border-slate-200 bg-white p-4">
            <summary class="cursor-pointer text-sm font-semibold text-slate-900">
              Where are the original docs?
            </summary>
            <p class="mt-2 text-sm text-slate-500">
              In <code>/content/1-getting-started</code> and other folders you already showed.
            </p>
          </details>
        </div>
      </div>
    </section>

    <!-- 8. BLOG PREVIEW (STATIC) -->
    <section class="bg-white py-14">
      <div class="mx-auto max-w-6xl px-4">
        <h2 class="text-2xl font-bold text-slate-900">Latest from the blog</h2>
        <div class="mt-6 grid gap-6 md:grid-cols-3">
          <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-xs text-slate-500">Story</p>
            <h3 class="mt-2 text-lg font-semibold text-slate-900">How I moved from Mahroni to Bangalore</h3>
            <p class="mt-2 text-sm text-slate-500">And why documenting it matters.</p>
          </article>
          <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-xs text-slate-500">Docs</p>
            <h3 class="mt-2 text-lg font-semibold text-slate-900">Structuring your LMS with Nuxt Content</h3>
            <p class="mt-2 text-sm text-slate-500">Simple collections, no drama.</p>
          </article>
          <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-xs text-slate-500">YouTube</p>
            <h3 class="mt-2 text-lg font-semibold text-slate-900">Deadpool style hooks for dev audience</h3>
            <p class="mt-2 text-sm text-slate-500">10 lines, 10x watchtime.</p>
          </article>
        </div>
      </div>
    </section>

    <!-- 9. CTA -->
    <section class="bg-slate-900 py-16">
      <div class="mx-auto max-w-6xl px-4 text-center text-white">
        <h2 class="text-3xl font-bold">Ready to ship your docs?</h2>
        <p class="mt-3 text-sm text-slate-200">Start from the content you already have.</p>
        <NuxtLink
          to="/getting-started"
          class="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-slate-900 hover:bg-slate-100"
        >
          Go to Getting Started →
        </NuxtLink>
      </div>
    </section>

    <!-- 10. FOOTER -->
    <footer class="bg-white py-6">
      <div class="mx-auto max-w-6xl px-4 flex items-center justify-between">
        <p class="text-xs text-slate-500">© {{ new Date().getFullYear() }} Imswarnil · Bangalore Job Seekers Guide</p>
        <p class="text-xs text-slate-400">Built with Nuxt 4 · Tailwind · no crying SSR</p>
      </div>
    </footer>
  </main>
</template>
