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
Build Beautiful [Salesforce Dashboards]{.text-primary}.

#description
Create stunning, data-driven experiences with **Salesforce CRM Analytics (Einstein Analytics / Tableau CRM)**. Learn how to build dashboards, write SAQL queries, and automate your analytics using dataflows and recipes — all inside Salesforce.

#links
  :::u-button
  ---
  to: /getting-started
  size: xl
  trailing-icon: i-lucide-arrow-right
  ---
  Get Started
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
  Design visually appealing dashboards using Salesforce datasets, SAQL, and bindings to bring your CRM data to life.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-bolt
  ---
  #title
  SAQL Query Power

  #description
  Master **Salesforce Analytics Query Language (SAQL)** for advanced aggregations, dynamic filters, and custom measures.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-database
  ---
  #title
  Dataflows and Recipes

  #description
  Automate your ETL process with **Dataflows** and **Recipes**. Clean, transform, and schedule data seamlessly within Salesforce.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-link
  ---
  #title
  Dynamic Bindings

  #description
  Make your dashboards interactive and smart with **bindings** that adapt to user selections in real time.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-shield-check
  ---
  #title
  Secure Access Control

  #description
  Implement **Row-Level Security** and predicates to control who sees what, directly aligned with Salesforce permissions.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-moon
  ---
  #title
  Dark Mode Ready

  #description
  Professional dark mode support for analytics dashboards that look great any time of day.
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
  Learn on Trailhead
  :::

#features
  :::u-page-feature
  ---
  icon: i-lucide-funnel
  ---
  #title
  Sales Analytics Dashboards

  #description
  Build **Pipeline, Forecast**, and **Quota Attainment** dashboards that visualize opportunities and team performance.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-life-buoy
  ---
  #title
  Service Cloud Insights

  #description
  Track **SLA compliance**, case backlog, and agent productivity using CRM Analytics dashboards and SAQL filters.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-target
  ---
  #title
  Marketing & Attribution

  #description
  Connect to **Marketing Cloud** and **Data Cloud** to analyze leads, campaign ROI, and conversion performance.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-file-code
  ---
  #title
  SAQL Examples

  #description
  Access real-world **SAQL code snippets** and dashboard patterns used in enterprise-grade Salesforce projects.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-git-branch
  ---
  #title
  Version-Controlled Dashboards

  #description
  Store and manage your dashboard JSON and Dataflow files in GitHub for better collaboration and change tracking.
  :::
::

::u-page-section{class="dark:bg-gradient-to-b from-neutral-950 to-neutral-900"}
  :::u-page-c-t-a
  ---
  links:
    - label: Start Learning
      to: '/getting-started'
      trailingIcon: i-lucide-arrow-right
    - label: View Curriculum
      to: '/curriculum'
      target: _blank
      variant: subtle
      icon: i-lucide-book-open
  title: Ready to Become a CRM Analytics Expert?
  description: Learn how to transform Salesforce data into actionable insights using dashboards, SAQL, Dataflows, and Recipes.
  class: dark:bg-neutral-950
  ---

  :stars-bg
  :::
::
