

filename: analytics.sql
---
```sql [analytics.sql]
SELECT user_id, MIN(created_at) AS first_seen, COUNT(CASE WHEN event = 'purchase' THEN 1 END) AS purchases, SUM(revenue) AS total_revenue
FROM events
WHERE created_at >= DATE_TRUNC('month', CURRENT_DATE) - INTERVAL '6 months'
GROUP BY 1
ORDER BY total_revenue DESC;
```
:::
::


::u-page-section{class="dark:bg-neutral-950"}
#title
Why CRM Analytics Academy


#features
:::u-page-feature
---
icon: i-lucide-layers
---
#title
Role-Focused Tracks


#description
Tailored paths for CRM Analyst, Marketing Analyst, Revenue Ops, and Product Growth—build skills that match the job descriptions.
:::


:::u-page-feature
---
icon: i-lucide-database
---
#title
Real Datasets, Real Scenarios


#description
Work with sales, marketing, and lifecycle tables. Solve problems companies actually have.
:::


:::u-page-feature
---
icon: i-lucide-bar-chart-3
---
#title
Dashboards That Convert


#description
Design KPI dashboards in Nuxt UI, Power BI, and Tableau. Tell the story behind the numbers and get buy-in.
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
variant: subtle
icon: i-lucide-book-open
title: Ready to level up your CRM analytics?
description: Learn the metrics that move the business. Build a portfolio that gets interviews. Ship dashboards teams actually use.
class: dark:bg-neutral-950
---


:stars-bg
:::
::