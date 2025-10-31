<template>
  <div class="beautiful-homepage">
    <!-- Navigation -->
    <header class="header">
      <div class="container">
        <nav class="nav">
          <div class="logo">
            <i class="fas fa-code"></i>
            <span>NuxtApp</span>
          </div>
          <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <button class="cta-button">
            Get Started
            <i class="fas fa-arrow-right"></i>
          </button>
        </nav>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">
            Build Amazing Web Experiences with <span>Nuxt.js</span>
          </h1>
          <p class="hero-description">
            Create modern, performant web applications with the intuitive Vue framework. 
            Get all the benefits of server-side rendering and static site generation.
          </p>
          <div class="hero-buttons">
            <button class="btn btn-primary">
              Start Building
              <i class="fas fa-rocket"></i>
            </button>
            <button class="btn btn-secondary">
              View Demo
              <i class="fas fa-play"></i>
            </button>
          </div>
          <div class="hero-stats">
            <div class="stat">
              <div class="stat-number">10k+</div>
              <div class="stat-label">Developers</div>
            </div>
            <div class="stat">
              <div class="stat-number">5k+</div>
              <div class="stat-label">Projects</div>
            </div>
            <div class="stat">
              <div class="stat-number">99%</div>
              <div class="stat-label">Satisfaction</div>
            </div>
          </div>
        </div>
        <div class="hero-visual">
          <div class="floating-card card-1">
            <i class="fas fa-bolt"></i>
            <div class="card-content">
              <h4>Lightning Fast</h4>
              <p>Optimized performance</p>
            </div>
          </div>
          <div class="floating-card card-2">
            <i class="fas fa-shield-alt"></i>
            <div class="card-content">
              <h4>Secure</h4>
              <p>Built-in protection</p>
            </div>
          </div>
          <div class="code-window">
            <div class="window-header">
              <div class="window-controls">
                <span class="control red"></span>
                <span class="control yellow"></span>
                <span class="control green"></span>
              </div>
              <span class="window-title">app.vue</span>
            </div>
            <div class="code-content">
              <pre><code>&lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt;Hello, Nuxt!&lt;/h1&gt;
    &lt;p&gt;{{ message }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
const message = ref('Welcome to Nuxt.js')
&lt;/script&gt;</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="container">
        <div class="section-header">
          <h2>Why Choose Nuxt.js</h2>
          <p>Powerful features that make development enjoyable and efficient</p>
        </div>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-server"></i>
            </div>
            <h3>Server-Side Rendering</h3>
            <p>Improve SEO and performance with automatic server-side rendering out of the box.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-file-code"></i>
            </div>
            <h3>Static Site Generation</h3>
            <p>Generate static websites with all the benefits of a dynamic application.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-plug"></i>
            </div>
            <h3>Auto Imports</h3>
            <p>Automatically import components and composables without manual imports.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-bolt"></i>
            </div>
            <h3>Lightning Fast</h3>
            <p>Optimized builds and smart code splitting for the best performance.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-puzzle-piece"></i>
            </div>
            <h3>Modular Architecture</h3>
            <p>Extend functionality with modules from the Nuxt ecosystem.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-magic"></i>
            </div>
            <h3>Developer Experience</h3>
            <p>Enjoy hot reloading, TypeScript support, and excellent dev tools.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Get Started?</h2>
          <p>Join thousands of developers building amazing web experiences with Nuxt.js</p>
          <button class="btn btn-primary btn-large">
            Start Your Project
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <div class="logo">
              <i class="fas fa-code"></i>
              <span>NuxtApp</span>
            </div>
            <p>Building the future of web development with Vue.js and Nuxt.js</p>
          </div>
          <div class="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Examples</a></li>
              <li><a href="#">Tutorials</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Community</h4>
            <ul>
              <li><a href="#">GitHub</a></li>
              <li><a href="#">Discord</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Stack Overflow</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 NuxtApp. All rights reserved.</p>
        </div>
      </div>
    </footer>

    <!-- Your existing ContentRenderer -->
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
</script>

<style scoped>
/* Base Styles */
.beautiful-homepage {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #1a202c;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Header */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #e2e8f0;
  z-index: 1000;
  padding: 1rem 0;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  font-size: 1.5rem;
  color: #00dc82;
}

.logo span {
  color: #1a202c;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-links a {
  text-decoration: none;
  color: #4a5568;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-links a:hover {
  color: #00dc82;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: #00dc82;
  transition: width 0.3s ease;
}

.nav-links a:hover::after {
  width: 100%;
}

.cta-button {
  background: #00dc82;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.cta-button:hover {
  background: #00b369;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 220, 130, 0.3);
}

/* Hero Section */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 8rem 0 4rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.hero .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-content {
  color: white;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.hero-title span {
  background: linear-gradient(45deg, #00dc82, #00b369);
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

.hero-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
}

.btn {
  padding: 1rem 2rem;
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

.btn-large {
  padding: 1.25rem 2.5rem;
  font-size: 1.125rem;
}

.hero-stats {
  display: flex;
  gap: 3rem;
}

.stat {
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.875rem;
  opacity: 0.8;
}

/* Hero Visual */
.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
}

.floating-card {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
  animation: float 6s ease-in-out infinite;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.card-1 {
  top: 10%;
  left: 0;
  animation-delay: 0s;
}

.card-2 {
  bottom: 20%;
  right: 0;
  animation-delay: 2s;
}

.floating-card i {
  font-size: 1.5rem;
  color: #00dc82;
}

.card-content h4 {
  margin: 0 0 0.25rem 0;
  font-size: 1rem;
}

.card-content p {
  margin: 0;
  font-size: 0.875rem;
  opacity: 0.8;
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
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
  justify-content: space-between;
}

.window-controls {
  display: flex;
  gap: 0.5rem;
}

.control {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: block;
}

.control.red { background: #ff5f57; }
.control.yellow { background: #ffbd2e; }
.control.green { background: #28ca42; }

.window-title {
  color: #888;
  font-size: 0.875rem;
  font-family: 'Fira Code', monospace;
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
.features {
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
  color: #1a202c;
}

.section-header p {
  font-size: 1.125rem;
  color: #4a5568;
  max-width: 600px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
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
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
}

.feature-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1a202c;
}

.feature-card p {
  color: #4a5568;
  line-height: 1.6;
}

/* CTA Section */
.cta {
  padding: 6rem 0;
  background: linear-gradient(135deg, #1a202c, #2d3748);
  color: white;
  text-align: center;
}

.cta-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* Footer */
.footer {
  background: #1a202c;
  color: white;
  padding: 4rem 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-section h4 {
  margin-bottom: 1rem;
  color: #00dc82;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: #a0aec0;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: #00dc82;
}

.footer-bottom {
  border-top: 1px solid #2d3748;
  padding-top: 2rem;
  text-align: center;
  color: #a0aec0;
}

.dynamic-content {
  padding: 2rem 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }

  .nav-links {
    display: none;
  }

  .hero .container {
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

  .hero-buttons {
    justify-content: center;
    flex-wrap: wrap;
  }

  .hero-stats {
    justify-content: center;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .floating-card {
    position: relative;
    margin: 1rem 0;
  }

  .card-1, .card-2 {
    position: relative;
    top: auto;
    bottom: auto;
    left: auto;
    right: auto;
  }
}
</style>