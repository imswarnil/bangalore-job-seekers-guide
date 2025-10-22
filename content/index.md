---
seo:
  title: Salesforce CRM Analytics (Einstein Analytics) Academy – Learn Tableau CRM, SAQL, Dataflows, Recipes & Dashboards
  description: Learn Salesforce CRM Analytics (formerly Einstein Analytics/Tableau CRM). Build dashboards, datasets, dataflows, and recipes. Write SAQL, bindings, and security predicates. Master Sales Cloud & Service Cloud analytics.
  focusKeyword: Salesforce CRM Analytics (Einstein Analytics)
  keywords:
    - Salesforce CRM Analytics
    - Einstein Analytics
    - Tableau CRM
    - Salesforce Analytics
    - SAQL
    - CRM Analytics dashboards
    - CRM Analytics dataflow
    - CRM Analytics recipe
    - CRM Analytics bindings
    - row-level security
    - security predicates
    - Sales Cloud analytics
    - Service Cloud analytics
---

::u-page-hero{class="dark:bg-gradient-to-b from-neutral-900 to-neutral-950"}
---
orientation: horizontal
---
#top
:hero-background

#title
Master **Salesforce CRM Analytics** (Einstein Analytics / Tableau CRM) — Dashboards, **SAQL**, Dataflows & Recipes.

#description
Build production-ready Analytics apps on Salesforce: **dashboards** with dynamic **bindings**, fast **SAQL** queries, governed **datasets**, automated **dataflows** & **recipes**, and secure row-level access. Transform Sales Cloud & Service Cloud data into insights the business actually uses.

#links
  :::u-button
  ---
  to: /getting-started
  size: xl
  trailing-icon: i-lucide-arrow-right
  ---
  Start Learning CRM Analytics
  :::

  :::u-button
  ---
  icon: i-lucide-book-open
  color: neutral
  variant: outline
  size: xl
  to: /curriculum
  ---
  View Curriculum
  :::

#default
  :::prose-pre
  ---
  code: |
    // SAQL: Top Opportunities by Amount (current quarter)
    q = load "oppty_dataset";
    q = filter q by date('CloseDate_Year','CloseDate_Month','CloseDate_Day') in
        [startOf('quarter', now()), endOf('quarter', now())];
    q = group q by 'Owner_Name';
    q = foreach q generate 'Owner_Name' as Owner, sum('Amount') as Pipeline;
    q = order q by Pipeline desc;
    q = limit q 10;
  filename: top_pipeline.saql
  ---
  ```saql [top_pipeline.saql]
  q = load "oppty_dataset";
  q = filter q by date('CloseDate_Year','CloseDate_Month','CloseDate_Day') in
      [startOf('quarter', now()), endOf('quarter', now())];
  q = group q by 'Owner_Name';
  q = foreach q generate 'Owner_Name' as Owner, sum('Amount') as Pipeline;
  q = order q by Pipeline desc;
  q = limit q 10;
  ```
  :::
::

::u-page-section{class="dark:bg-neutral-950"}
#title
Why learn **CRM Analytics** (Einstein Analytics / Tableau CRM)?

#features
  :::u-page-feature
  ---
  icon: i-lucide-layout-dashboard
  ---
  #title
  Production Dashboards on Salesforce

  #description
  Build interactive **CRM Analytics dashboards** your reps and agents actually use: funnels, pipeline health, case deflection, SLA & CSAT.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-bolt
  ---
  #title
  **SAQL** Superpowers

  #description
  Write efficient **SAQL** for groupings, window functions, time comparisons, compare-tables, and conditional calculations.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-database
  ---
  #title
  Datasets, **Dataflows** & **Recipes**

  #description
  Model your data layer with **dataflows** (JSON) and low-code **recipes**. Join Salesforce Objects, transform columns, schedule refreshes.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-link
  ---
  #title
  Dynamic **Bindings** & Selections

  #description
  Drive cross-filters and dynamic steps with **bindings**. Create truly **context-aware** dashboards without page reloads.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-shield-check
  ---
  #title
  **Row-Level Security** (RLS)

  #description
  Implement **security predicates** so each user sees only their data. Align with role hierarchy, territories, and sharing rules.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-plug-zap
  ---
  #title
  Connectors & External Data

  #description
  Blend Salesforce with **Marketing Cloud**, **Data Cloud**, CSV/S3, and external warehouses to power multi-touch insights.
  :::
::

::u-page-section{class="dark:bg-neutral-950"}
#title
What you’ll build — real Salesforce use cases

#features
  :::u-page-feature
  ---
  icon: i-lucide-funnel
  ---
  #title
  Sales Cloud: Pipeline & Forecast

  #description
  Weighted pipeline, stage velocity, forecast vs. target, and **quota attainment** dashboards with **SAQL** and bindings.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-life-buoy
  ---
  #title
  Service Cloud: SLA, Backlog & CSAT

  #description
  Case inflow/outflow, first-contact resolution, backlog aging, and **SLA breaches** with row-level security by queue/team.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-target
  ---
  #title
  Marketing & Attribution

  #description
  Campaign ROI, multi-touch attribution, lead-to-opportunity conversion, **influenced revenue** and payback.
  :::
::

::u-page-section{class="dark:bg-neutral-950"}
#title
Core Skills: **SAQL**, Dataflows, Recipes, Bindings

#default
  :::u-card
  ---
  class: "bg-default/50"
  ---
  ### **SAQL** Essentials
  - Group, filter, order, limit, window functions  
  - Time series (QoQ, YoY), compare tables, conditional metrics  
  - Performance tips: caching steps, avoiding over-grain datasets

  ### **Data Manager**
  - **Dataflows**: JSON nodes (extract, sfdcDigest, augment, computeExpression)  
  - **Recipes**: transforms, joins, aggregations, **schedule** & monitoring  
  - **Datasets**: fields, measures, date parts, **row-level security**

  ### **Dashboard Builder**
  - Widgets, steps, **bindings** (results/selection/link), selectors & toggles  
  - Interactions: cross-filters, faceting, & navigation with URL params  
  - Themes, layouts, and performance best practices

  ### Deliverables
  - 3 portfolio-ready dashboards (Sales, Service, Marketing)  
  - 1 production-grade dataflow + 1 scheduled recipe  
  - A SAQL “cookbook” with common patterns
  :::
::

::u-page-section{class="dark:bg-neutral-950"}
#title
Examples — Dataflow JSON & Recipe Steps

#default
  :::prose-pre
  ---
  code: |
    {
      "dataflow": {
        "extract_oppty": { "action": "sfdcDigest", "parameters": { "object": "Opportunity" } },
        "extract_user":  { "action": "sfdcDigest", "parameters": { "object": "User" } },
        "augment_owner": {
          "action": "augment",
          "parameters": {
            "left_key":   ["OwnerId"],
            "right_key":  ["Id"],
            "relationship": "OwnerRel",
            "left":  "extract_oppty",
            "right": "extract_user",
            "fields": [{ "name": "Name", "newName": "Owner_Name" }]
          }
        },
        "compute": {
          "action": "computeExpression",
          "parameters": {
            "source": "augment_owner",
            "computedFields": [{
              "name": "Is_Closed_Won",
              "type": "Boolean",
              "saqlExpression": "case when 'StageName' == \"Closed Won\" then true else false end"
            }]
          }
        }
      }
    }
  filename: dataflow.json
  ---
  ```json [dataflow.json]
  {
    "dataflow": {
      "extract_oppty": { "action": "sfdcDigest", "parameters": { "object": "Opportunity" } },
      "extract_user":  { "action": "sfdcDigest", "parameters": { "object": "User" } },
      "augment_owner": {
        "action": "augment",
        "parameters": {
          "left_key":   ["OwnerId"],
          "right_key":  ["Id"],
          "relationship": "OwnerRel",
          "left":  "extract_oppty",
          "right": "extract_user",
          "fields": [{ "name": "Name", "newName": "Owner_Name" }]
        }
      },
      "compute": {
        "action": "computeExpression",
        "parameters": {
          "source": "augment_owner",
          "computedFields": [{
            "name": "Is_Closed_Won",
            "type": "Boolean",
            "saqlExpression": "case when 'StageName' == \"Closed Won\" then true else false end"
          }]
        }
      }
    }
  }
  ```
  :::

  :::prose-pre
  ---
  code: |
    # Recipe outline
    - Input: Opportunity (fields: Amount, StageName, CloseDate, OwnerId)
    - Join: User (on Id -> OwnerId) to add Owner_Name
    - Compute: Quarter = toQuarter(CloseDate)
    - Aggregate: Pipeline by Owner_Name, Quarter
    - Output: Dataset "oppty_dataset"
  filename: recipe-steps.md
  ---
  ```md [recipe-steps.md]
  # Recipe outline
  - Input: Opportunity (fields: Amount, StageName, CloseDate, OwnerId)
  - Join: User (on Id -> OwnerId) to add Owner_Name
  - Compute: Quarter = toQuarter(CloseDate)
  - Aggregate: Pipeline by Owner_Name, Quarter
  - Output: Dataset "oppty_dataset"
  ```
  :::
::

::u-page-section{class="dark:bg-neutral-950"}
#title
SEO Q&A — common searches (Einstein Analytics / Tableau CRM)

#features
  :::u-page-feature
  ---
  icon: i-lucide-search
  ---
  #title
  What is **Salesforce CRM Analytics**?

  #description
  Formerly **Einstein Analytics** and **Tableau CRM**, it’s Salesforce’s native analytics platform for building datasets, dashboards, and apps with **SAQL**, **dataflows**, and **recipes**.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-code
  ---
  #title
  What is **SAQL** in CRM Analytics?

  #description
  **SAQL** (Salesforce Analytics Query Language) is the query language used in CRM Analytics to transform datasets, compute metrics, and power advanced dashboard steps.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-shuffle
  ---
  #title
  **Dataflow vs. Recipe** — when to use what?

  #description
  **Dataflows** are JSON pipelines ideal for scheduled, governed transformations. **Recipes** are low-code, visual transformations for faster iteration and team collaboration.
  :::
::

::u-page-section{class="dark:bg-gradient-to-b from-neutral-950 to-neutral-900"}
  :::u-page-c-t-a
  ---
  links:
    - label: Start Learning CRM Analytics
      to: '/getting-started'
      trailingIcon: i-lucide-arrow-right
    - label: View Curriculum
      to: '/curriculum'
      variant: subtle
      icon: i-lucide-book-open
  title: Become job-ready in Salesforce CRM Analytics.
  description: Build dashboards, datasets, dataflows, and recipes. Write SAQL. Implement bindings and row-level security. Ship the analytics apps your teams need.
  class: dark:bg-neutral-950
  ---

  :stars-bg
  :::
::
