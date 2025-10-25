// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    'nuxt-og-image',
    'nuxt-llms'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  /**
   * ✅ Content config
   * - Move MDC + TOC to the correct place (`content.markdown`)
   * - Keep TOC depth = 1 as you had (formerly `searchDepth` in older examples)
   */
  content: {
    markdown: {
      mdc: true,
      toc: { depth: 1 }
    }
  },

  /**
   * ✅ Auto-import components without folder prefixes
   * This lets you use `::HomeHero` instead of `::SectionsHomeHero`.
   */
  components: [
    { path: '~/components', pathPrefix: false }
  ],

  /**
   * (Optional but harmless) Basic image defaults so <NuxtImg> "just works"
   */
  image: {
    // default provider is 'ipx'; keep defaults for simplicity
    format: ['webp', 'avif', 'jpeg']
  },

  compatibilityDate: '2024-07-11',

  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true,
      autoSubfolderIndex: false
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  icon: {
    provider: 'iconify'
  },

  /**
   * (Optional) Sensible defaults for OG image generation
   * Keeps your existing module working without extra config.
   */
  ogImage: {
    // Leave empty to use module defaults; add presets later if needed
  },

  llms: {
    domain: 'https://docs-template.nuxt.dev/',
    title: 'Nuxt Docs Template',
    description: 'A template for building documentation with Nuxt UI and Nuxt Content.',
    full: {
      title: 'Nuxt Docs Template - Full Documentation',
      description: 'This is the full documentation for the Nuxt Docs Template.'
    },
    sections: [
      {
        title: 'Getting Started',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/getting-started%' }
        ]
      },
      {
        title: 'Essentials',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/essentials%' }
        ]
      }
    ]
  }
})
