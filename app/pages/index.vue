<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryCollection('landing').path('/').first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const title = page.value.seo?.title || page.value.title
const description = page.value.seo?.description || page.value.description

useSeoMeta({
  titleTemplate: '',
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/docs-light.png',
  twitterImage: 'https://ui.nuxt.com/assets/templates/nuxt/docs-light.png'
})
</script>

<template>
  <ContentRenderer
    v-if="page"
    :value="page"
    :prose="false"
  />
</template>
<template>
  <div class="beautiful-homepage">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-background">
        <div class="floating-shapes">
          <div class="shape shape-1"></div>
          <div class="shape shape-2"></div>
          <div class="shape shape-3"></div>
        </div>
      </div>
      
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">
            {{ page.hero?.title || page.title }}
          </h1>
          <p class="hero-description">
            {{ page.hero?.description || page.description }}
          </p>
          <div class="hero-actions">
            <button class="btn btn-primary">
              Get Started
              <i class="fas fa-arrow-right"></i>
            </button>
            <button class="btn btn-secondary">
              Learn More
            </button>
          </div>
        </div>
        
        <div class="hero-visual">
          <div class="code-window">
            <div class="window-header">
              <div class="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div class="code-content">
              <pre><code>// Your amazing Nuxt code here
export default {
  setup() {
    const message = ref('Hello World')
    return { message }
  }
}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section" v-if="page.features">
      <div class="container">
        <div class="section-header">
          <h2>Why Choose Us</h2>
          <p>Discover the features that make our platform exceptional</p>
        </div>
        
        <div class="features-grid">
          <div class="feature-card" v-for="(feature, index) in page.features" :key="index">
            <div class="feature-icon">
              <i :class="feature.icon || getDefaultIcon(index)"></i>
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Content Renderer for dynamic content -->
    <ContentRenderer
      v-if="page"
      :value="page"
      :prose="false"
      class="dynamic-content"
    />
  </div>
</template>

<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryCollection('landing').path('/').first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const title = page.value.seo?.title || page.value.title
const description = page.value.seo?.description || page.value.description

useSeoMeta({
  titleTemplate: '',
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/docs-light.png',
  twitterImage: 'https://ui.nuxt.com/assets/templates/nuxt/docs-light.png'
})

// Helper function for feature icons
const getDefaultIcon = (index: number) => {
  const icons = ['fas fa-rocket', 'fas fa-bolt', 'fas fa-shield-alt', 'fas fa-chart-line', 'fas fa-users', 'fas fa-cog']
  return icons[index % icons.length]
}
</script>

<style scoped>
.beautiful-homepage {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: #1a1a1a;
}

/* Hero Section */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.floating-shapes {
  position: relative;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: float 6s ease-in-out infinite;
}

.shape-1 {
  width: 80px;
  height: 80px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 120px;
  height: 120px;
  top: 60%;
  right: 10%;
  animation-delay: 2s;
}

.shape-3 {
  width: 60px;
  height: 60px;
  bottom: 20%;
  left: 20%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(10deg); }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-content {
  color: white;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, #fff, #e0e7ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  max-width: 90%;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.875rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-primary {
  background: linear-gradient(45deg, #00dc82, #00b369);
  color: white;
  box-shadow: 0 4px 15px rgba(0, 220, 130, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 220, 130, 0.4);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

/* Hero Visual */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.code-window {
  background: #1a1a1a;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  max-width: 500px;
  width: 100%;
}

.window-header {
  background: #2d2d2d;
  padding: 1rem;
  display: flex;
  align-items: center;
}

.window-dots {
  display: flex;
  gap: 0.5rem;
}

.window-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: block;
}

.window-dots span:nth-child(1) {
  background: #ff5f57;
}

.window-dots span:nth-child(2) {
  background: #ffbd2e;
}

.window-dots span:nth-child(3) {
  background: #28ca42;
}

.code-content {
  padding: 2rem;
}

.code-content pre {
  margin: 0;
  color: #f8f8f2;
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
}

/* Features Section */
.features-section {
  padding: 6rem 0;
  background: #f8fafc;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1a1a1a;
}

.section-header p {
  font-size: 1.125rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  width: 70px;
  height: 70px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
}

.feature-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1a1a1a;
}

.feature-card p {
  color: #64748b;
  line-height: 1.6;
}

.dynamic-content {
  padding: 2rem 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-description {
    max-width: 100%;
  }
  
  .hero-actions {
    justify-content: center;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>