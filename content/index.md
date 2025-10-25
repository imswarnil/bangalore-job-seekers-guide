---
title: CRM Analytics Academy
description: Learn Salesforce CRM Analytics — practical, fast, and portfolio-ready.
navigation:
  icon: i-lucide-house
seo:
  title: CRM Analytics Academy by ImSwarnil
  description: Build dashboards, lenses, and stories your team will actually show off.
---

::u-page-hero{class="bg-gradient-to-b from-white to-slate-50 dark:from-neutral-900 dark:to-neutral-950"}
---
orientation: horizontal
---
#top
:hero-background

#title
Learn Salesforce **CRM Analytics** with confidence.

#description
Short, structured lessons. Real-world dashboards. Bengaluru-ready job prep.

#links
  :::u-button
  ---
  to: /getting-started
  size: lg
  trailing-icon: i-lucide-arrow-right
  ---
  Start Learning
  :::

  :::u-button
  ---
  icon: i-simple-icons-github
  color: neutral
  variant: outline
  size: lg
  to: https://github.com/imswarnil
  target: _blank
  ---
  View on GitHub
  :::
::

::u-page-section{class="dark:bg-neutral-950"}
#title
What you’ll master

#features
  :::u-page-feature
  ---
  icon: i-lucide-rocket
  ---
  #title
  Portfolio Dashboards
  #description
  Build case-study dashboards recruiters understand in 10 seconds.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-database
  ---
  #title
  Data Modeling
  #description
  Recipes, SAQL, and guardrails that won’t melt in prod.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-palette
  ---
  #title
  Clean Design
  #description
  Readable typography, disciplined spacing, interview-friendly.
  :::
::

<script setup lang="ts">
import type { TimelineItem } from '@nuxt/ui'

const items: TimelineItem[] = [
  { date: 'Week 1', title: 'Foundations', description: 'Datasets, lenses, security model.', icon: 'i-lucide-books' },
  { date: 'Week 2', title: 'Design & UX', description: 'Layout systems, KPIs, visual patterns.', icon: 'i-lucide-palette' },
  { date: 'Week 3', title: 'Modeling & SAQL', description: 'Transformations, queries, performance.', icon: 'i-lucide-database' },
  { date: 'Week 4', title: 'Portfolio & Prep', description: 'Ship a dashboard, mock interview tasks.', icon: 'i-lucide-briefcase' }
]
</script>

::u-page-section
#title
Your learning path

#default
<div class="not-prose py-4">
  <UTimeline size="sm" :items="items" class="max-w-3xl w-full mx-auto" />
</div>
::

::u-page-section{class="dark:bg-gradient-to-b from-neutral-950 to-neutral-900"}
  :::u-page-c-t-a
  ---
  title: Build a portfolio that gets callbacks
  description: Learn the patterns, ship a dashboard, add it to LinkedIn—this week.
  links:
    - label: Start now
      to: '/getting-started'
      trailingIcon: i-lucide-arrow-right
    - label: Explore modules
      to: '/essentials'
      variant: subtle
      color: neutral
  class: dark:bg-neutral-950
  ---
  :::
::
