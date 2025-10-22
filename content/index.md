---
seo:
  title: CRM Analytics Academy – Learn Salesforce Einstein Analytics, Tableau CRM, SAQL & Dashboards
  description: Master Salesforce CRM Analytics (Einstein Analytics / Tableau CRM). Learn dashboards, SAQL, dataflows, and recipes with real Salesforce use cases.
---

::u-page-hero{class="dark:bg-gradient-to-b from-neutral-900 to-neutral-950"}
---
orientation: horizontal
---
#top
:hero-background

#title
Ship Beautiful [Analytics Dashboards]{.text-primary}.

#description
Build data-driven stories with **Salesforce CRM Analytics (Einstein Analytics / Tableau CRM)** — the platform powering insights across Sales, Service & Marketing Cloud. Learn **SAQL**, dataflows, recipes, and dashboard design that actually drives business results.

#links
  :::u-button
  ---
  to: /getting-started
  size: xl
  trailing-icon: i-lucide-arrow-right
  ---
  Get Started with CRM Analytics
  :::

  :::u-button
  ---
  icon: i-simple-icons-github
  color: neutral
  variant: outline
  size: xl
  to: https://github.com/imswarnil/crm-analytics-academy
  target: _blank
  ---
  View on GitHub
  :::

#default
  :::prose-pre
  ---
  code: |
    export default defineNuxtConfig({
      modules: [
        '@nuxt/ui',
        '@nuxt/content',
        'nuxt-og-image',
        'nuxt-llms'
      ],
      css: ['~/assets/css/main.css']
    })
  filename: nuxt.config.ts
  ---

  ```ts [nuxt.config.ts]
  export default defineNuxtConfig({
    modules: [
      '@nuxt/ui',
      '@nuxt/content',
      'nuxt-og-image',
      'nuxt-llms'
    ],
    css: ['~/assets/css/main.css']
  })
  ```
  :::
::

::u-page-section{class="dark:bg-neutral-950"}
#title
Powered by Salesforce CRM Analytics

#links
  :::u-button
  ---
  color: neutral
  size: lg
  target: _blank
  to: https://help.salesforce.com/s/articleView?id=sf.bi_analytics_overview.htm&type=5
  trailingIcon: i-lucide-arrow-right
  variant: subtle
  ---
  Explore CRM Analytics
  :::

#features
  :::u-page-feature
  ---
  icon: i-lucide-layout-dashboard
  ---
  #title
  Interactive Dashboards

  #description
  Build rich, dynamic dashboards that visualize your Sales and Service Cloud data using **SAQL**, bindings, and selectors.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-bolt
  ---
  #title
  SAQL – The Analytics Engine

  #description
  Learn **Salesforce Analytics Query Language (SAQL)** to perform advanced aggregations, comparisons, and visual transformations.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-database
  ---
  #title
  Dataflows & Recipes

  #description
  Prepare data from Salesforce, Data Cloud, or external sources with **dataflows** and low-code **recipes** for reusable datasets.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-link
  ---
  #title
  Dynamic Bindings

  #description
  Make dashboards respond to user filters, selections, and steps with real-time **bindings** and context-aware queries.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-shield-check
  ---
  #title
  Row-Level Security

  #description
  Apply **security predicates** to ensure users see only their data — respecting Salesforce sharing and territory models.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-moon
  ---
  #title
  Dark Mode Ready

  #description
  Seamless dark mode support for all dashboards and UI components. Look professional even when burning midnight oil.
  :::
::

::u-page-section{class="dark:bg-neutral-950"}
#title
Enhanced with Real Salesforce Use Cases

#links
  :::u-button
  ---
  color: neutral
  size: lg
  target: _blank
  to: https://trailhead.salesforce.com/
  trailingIcon: i-lucide-arrow-right
  variant: subtle
  ---
  Explore on Trailhead
  :::

#features
  :::u-page-feature
  ---
  icon: i-lucide-funnel
  ---
  #title
  Sales Cloud Insights

  #description
  Build **Pipeline**, **Quota**, and **Forecast** dashboards powered by SAQL. Track deals, stage velocity, and conversion performance.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-life-buoy
  ---
  #title
  Service Cloud Analytics

  #description
  Measure **SLA compliance**, case backlog, first contact resolution, and agent performance — all within CRM Analytics.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-target
  ---
  #title
  Marketing Cloud Integration

  #description
  Analyze campaigns, leads, and attribution by connecting CRM Analytics with **Marketing Cloud** and **Data Cloud**.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-file-code
  ---
  #title
  SAQL Recipes

  #description
  Combine data from multiple objects, apply calculations, and generate trend visualizations in minutes with easy SAQL snippets.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-git-branch
  ---
  #title
  Version Control Friendly

  #description
  Manage dashboards, dataflows, and templates directly from your GitHub repo — ideal for teams and CI/CD environments.
  :::
::

::u-page-section{class="dark:bg-gradient-to-b from-neutral-950 to-neutral-900"}
  :::u-page-c-t-a
  ---
  links:
    - label: Start Learning Now
      to: '/getting-started'
      trailingIcon: i-lucide-arrow-right
    - label: View Curriculum
      to: '/curriculum'
      target: _blank
      variant: subtle
      icon: i-lucide-book-open
  title: Ready to Master Salesforce CRM Analytics?
  description: Learn how to build dashboards, datasets, recipes, and dataflows that turn your Salesforce data into actionable business intelligence.
  class: dark:bg-neutral-950
  ---

  :stars-bg
  :::
::
