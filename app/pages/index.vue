<template>
  <main class="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50">
    <!-- HERO -->
    <section class="w-full border-b border-slate-200/70 dark:border-slate-800/70 py-14 md:py-20">
      <div class="mx-auto max-w-6xl px-4 md:px-6">
        <p class="mb-4 inline-block rounded-full bg-slate-100 dark:bg-slate-900/40 px-4 py-1 text-xs font-semibold tracking-wide uppercase">
          CRM Analytics Academy · by Swarnil
        </p>
        <h1 class="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Learn Salesforce CRM Analytics, fast.
        </h1>
        <p class="max-w-2xl text-base md:text-lg text-slate-600 dark:text-slate-200 mb-6">
          Structured, bingeable lessons, dashboards, real-world flows — the same stuff you build for clients, but without guessing.
        </p>
        <div class="flex flex-wrap gap-3">
          <a href="/getting-started" class="inline-flex items-center justify-center rounded-md bg-black text-white dark:bg-white dark:text-slate-900 px-5 py-2.5 text-sm font-medium">
            Start learning
          </a>
          <a href="/docs" class="inline-flex items-center justify-center rounded-md border border-slate-200 dark:border-slate-700 px-5 py-2.5 text-sm font-medium">
            View documentation
          </a>
        </div>
        <p class="mt-6 text-xs text-slate-500 dark:text-slate-400">
          No fluff. No random React TODO app. Salesforce-first content.
        </p>
      </div>
    </section>

    <!-- STATS -->
    <section class="py-10 md:py-14">
      <div class="mx-auto max-w-6xl px-4 md:px-6 grid gap-6 md:grid-cols-3">
        <div class="rounded-xl border border-slate-200 dark:border-slate-800 p-5">
          <p class="text-3xl font-bold">10+</p>
          <p class="text-sm text-slate-500 dark:text-slate-400">Modules planned</p>
        </div>
        <div class="rounded-xl border border-slate-200 dark:border-slate-800 p-5">
          <p class="text-3xl font-bold">Real CRM-A</p>
          <p class="text-sm text-slate-500 dark:text-slate-400">Dashboards, datasets, flows</p>
        </div>
        <div class="rounded-xl border border-slate-200 dark:border-slate-800 p-5">
          <p class="text-3xl font-bold">Nuxt + Supabase</p>
          <p class="text-sm text-slate-500 dark:text-slate-400">Modern stack you actually use</p>
        </div>
      </div>
    </section>

    <!-- WHO IT'S FOR -->
    <section class="py-10 md:py-14 border-y border-slate-100 dark:border-slate-900">
      <div class="mx-auto max-w-6xl px-4 md:px-6">
        <h2 class="text-2xl font-semibold mb-6">Who is this for?</h2>
        <div class="grid gap-5 md:grid-cols-3">
          <div class="rounded-xl bg-slate-50 dark:bg-slate-900/50 p-5">
            <h3 class="font-semibold mb-2">Bangalore job seekers</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">You want an actual project to show, not 200 LeetCode screenshots.</p>
          </div>
          <div class="rounded-xl bg-slate-50 dark:bg-slate-900/50 p-5">
            <h3 class="font-semibold mb-2">Salesforce folks</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">You already know CRM, now you want Analytics & Data stories.</p>
          </div>
          <div class="rounded-xl bg-slate-50 dark:bg-slate-900/50 p-5">
            <h3 class="font-semibold mb-2">Content creators</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">You want to productize knowledge like Swarnil does.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CURRICULUM -->
    <section class="py-10 md:py-14">
      <div class="mx-auto max-w-6xl px-4 md:px-6">
        <h2 class="text-2xl font-semibold mb-2">Curriculum preview</h2>
        <p class="text-sm text-slate-500 dark:text-slate-400 mb-6">These can map to your <code class="bg-slate-100 dark:bg-slate-900/40 px-1 rounded">content/1-getting-started</code> style folders.</p>
        <div class="grid gap-5 md:grid-cols-2">
          <div class="rounded-lg border border-slate-200 dark:border-slate-800 p-5">
            <p class="text-xs uppercase text-slate-400 mb-2">Module 1</p>
            <h3 class="font-semibold mb-1">Getting Started with CRM Analytics</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Setup, org access, navigation, where data lives.</p>
          </div>
          <div class="rounded-lg border border-slate-200 dark:border-slate-800 p-5">
            <p class="text-xs uppercase text-slate-400 mb-2">Module 2</p>
            <h3 class="font-semibold mb-1">Datasets & Recipes</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Bring data in, clean it, make it dashboard-friendly.</p>
          </div>
          <div class="rounded-lg border border-slate-200 dark:border-slate-800 p-5">
            <p class="text-xs uppercase text-slate-400 mb-2">Module 3</p>
            <h3 class="font-semibold mb-1">Dashboards people actually use</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">AE dashboards, case history, .Org pricing style analytics.</p>
          </div>
          <div class="rounded-lg border border-slate-200 dark:border-slate-800 p-5">
            <p class="text-xs uppercase text-slate-400 mb-2">Module 4</p>
            <h3 class="font-semibold mb-1">Shipping on Nuxt + Supabase</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">How to host this learning experience on Vercel like you’re doing now.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURED LESSONS -->
    <section class="py-10 md:py-14 border-y border-slate-100 dark:border-slate-900">
      <div class="mx-auto max-w-6xl px-4 md:px-6">
        <h2 class="text-2xl font-semibold mb-6">Featured lessons</h2>
        <div class="grid gap-5 md:grid-cols-3">
          <article class="rounded-lg border border-slate-200 dark:border-slate-800 p-5 flex flex-col gap-3">
            <p class="text-xs text-slate-400">Video • 12 min</p>
            <h3 class="font-semibold">Intro to Salesforce CRM Analytics</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">What it is, what it’s not, why it’s not just dashboards.</p>
            <a href="/getting-started" class="text-sm font-medium text-slate-900 dark:text-white">Watch →</a>
          </article>
          <article class="rounded-lg border border-slate-200 dark:border-slate-800 p-5 flex flex-col gap-3">
            <p class="text-xs text-slate-400">Article • 8 min</p>
            <h3 class="font-semibold">Building your first dataset</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Taken from your Nuxt Content structure.</p>
            <a href="/getting-started" class="text-sm font-medium text-slate-900 dark:text-white">Read →</a>
          </article>
          <article class="rounded-lg border border-slate-200 dark:border-slate-800 p-5 flex flex-col gap-3">
            <p class="text-xs text-slate-400">Project</p>
            <h3 class="font-semibold">Bangalore Job Seeker Dashboard</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Document your job hunt like a pro.</p>
            <a href="/getting-started" class="text-sm font-medium text-slate-900 dark:text-white">Open →</a>
          </article>
        </div>
      </div>
    </section>

    <!-- ABOUT CREATOR -->
    <section class="py-10 md:py-14">
      <div class="mx-auto max-w-6xl px-4 md:px-6 grid gap-6 md:grid-cols-2 items-center">
        <div>
          <h2 class="text-2xl font-semibold mb-3">Built by Swarnil</h2>
          <p class="text-sm text-slate-600 dark:text-slate-300 mb-4">
            You saw the 17k YouTube run. Now it’s structured. Same humor, less chaos, more outcomes.
          </p>
          <p class="text-sm text-slate-500 dark:text-slate-400">
            Everything here is designed to become a video, a blog post, or a product later.
          </p>
        </div>
        <div class="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 bg-slate-50/50 dark:bg-slate-900/30">
          <p class="text-sm mb-4">“If you can’t show your work, it didn’t happen.”</p>
          <p class="text-xs text-slate-500 dark:text-slate-400">— Swarnil, the Deadpool of Salesforce content</p>
        </div>
      </div>
    </section>

    <!-- PRICING PLACEHOLDER -->
    <section class="py-10 md:py-14 border-y border-slate-100 dark:border-slate-900">
      <div class="mx-auto max-w-6xl px-4 md:px-6 text-center">
        <h2 class="text-2xl font-semibold mb-2">Free now, premium later</h2>
        <p class="text-sm text-slate-500 dark:text-slate-400 mb-6">
          You can later connect this to Supabase auth + Stripe/Razorpay.
        </p>
        <div class="mx-auto max-w-3xl grid gap-5 md:grid-cols-3">
          <div class="rounded-xl border border-slate-200 dark:border-slate-800 p-5">
            <p class="text-sm font-semibold mb-1">Free</p>
            <p class="text-2xl font-bold mb-2">₹0</p>
            <p class="text-xs text-slate-500 dark:text-slate-400 mb-3">Intro lessons</p>
          </div>
          <div class="rounded-xl border border-slate-900 dark:border-slate-50 p-5 bg-slate-900 text-white dark:bg-white dark:text-slate-900">
            <p class="text-sm font-semibold mb-1">Creator</p>
            <p class="text-2xl font-bold mb-2">₹499</p>
            <p class="text-xs mb-3">All modules, future updates</p>
          </div>
          <div class="rounded-xl border border-slate-200 dark:border-slate-800 p-5">
            <p class="text-sm font-semibold mb-1">Team / Org</p>
            <p class="text-2xl font-bold mb-2">Custom</p>
            <p class="text-xs text-slate-500 dark:text-slate-400 mb-3">Add your own datasets</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-10 md:py-14">
      <div class="mx-auto max-w-6xl px-4 md:px-6">
        <h2 class="text-2xl font-semibold mb-6">FAQ</h2>
        <div class="space-y-4">
          <div class="rounded-lg border border-slate-200 dark:border-slate-800 p-4">
            <p class="font-medium mb-1">Is this Nuxt Content-based?</p>
            <p class="text-sm text-slate-600 dark:text-slate-300">Yes. Matches your existing folder like <code>content/1-getting-started</code>.</p>
          </div>
          <div class="rounded-lg border border-slate-200 dark:border-slate-800 p-4">
            <p class="font-medium mb-1">Will this break SSR?</p>
            <p class="text-sm text-slate-600 dark:text-slate-300">No. It’s static HTML + Tailwind. No async fetch.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-10 md:py-14 border-t border-slate-100 dark:border-slate-900">
      <div class="mx-auto max-w-6xl px-4 md:px-6 text-center">
        <h2 class="text-2xl font-semibold mb-3">Start with “Getting Started” →</h2>
        <p class="text-sm text-slate-500 dark:text-slate-400 mb-6">Then add more content sections inside <code>content/</code>.</p>
        <a href="/getting-started" class="inline-flex items-center justify-center rounded-md bg-black text-white dark:bg-white dark:text-slate-900 px-5 py-2.5 text-sm font-medium">
          Go to docs
        </a>
      </div>
    </section>
  </main>
</template>
