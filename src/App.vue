<template>
  <div :class="{ 'dark-theme': themeStore.isDark }">
    <header class="header">
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <h1>{{ $t('header.name') }}</h1>
            <p>{{ $t('header.title') }}</p>
          </div>
          <nav class="nav">
            <ul class="nav-list">
              <li v-for="item in navItems" :key="item">
                <a href="#" @click.prevent="scrollToSection(item)">{{ $t(`nav.${item}`) }}</a>
              </li>
            </ul>
          </nav>
          <div class="header-controls">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
          <button class="mobile-menu-toggle" @click="toggleMobileMenu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>

    <div class="mobile-menu" :class="{ 'is-active': isMobileMenuOpen }">
      <div class="mobile-menu-header">
        <button class="mobile-menu-close" @click="toggleMobileMenu">×</button>
      </div>
      <nav class="mobile-nav">
        <ul class="mobile-nav-list">
          <li v-for="item in navItems" :key="item">
            <a href="#" @click.prevent="scrollToSectionAndCloseMenu(item)">{{ $t(`nav.${item}`) }}</a>
          </li>
        </ul>
      </nav>
      <div class="mobile-menu-footer">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </div>

    <main>
      <RouterView />
    </main>

    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-info">
            <p>{{ $t('contact.info.name') }}</p>
            <p>{{ $t('contact.info.email') }}</p>
          </div>
          <div class="footer-links">
            <a href="https://github.com/" target="_blank">GitHub</a>
            <a href="https://linkedin.com/" target="_blank">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import * as vue from 'vue'
import { RouterView } from 'vue-router'
import { useThemeStore } from './stores/theme'
import LanguageSwitcher from './components/LanguageSwitcher.vue'
import ThemeToggle from './components/ThemeToggle.vue'

const themeStore = useThemeStore()
const isMobileMenuOpen = vue.ref(false)

const navItems = ['home', 'about', 'experience', 'education', 'skills', 'projects', 'contact']

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

function scrollToSection(section: string) {
  const element = document.getElementById(section)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

function scrollToSectionAndCloseMenu(section: string) {
  scrollToSection(section)
  toggleMobileMenu()
}
</script>

<style scoped>
.header {
  background-color: var(--color-header-bg);
  padding: 20px 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: background-color var(--transition-speed);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo h1 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
}

.logo p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--color-text-light);
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-list li {
  margin-left: 20px;
}

.nav-list a {
  color: var(--color-text);
  font-weight: 500;
  transition: color var(--transition-speed);
}

.nav-list a:hover {
  color: var(--color-primary);
  text-decoration: none;
}

.header-controls {
  display: flex;
  align-items: center;
}

.mobile-menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
}

.mobile-menu-toggle span {
  display: block;
  width: 25px;
  height: 3px;
  background-color: var(--color-text);
  margin: 5px 0;
  transition: transform 0.3s, opacity 0.3s;
}

.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 80%;
  max-width: 300px;
  height: 100vh;
  background-color: var(--color-background);
  z-index: 200;
  transition: right 0.3s ease;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

.mobile-menu.is-active {
  right: 0;
}

.mobile-menu-header {
  padding: 20px;
  display: flex;
  justify-content: flex-end;
}

.mobile-menu-close {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: var(--color-text);
}

.mobile-nav {
  flex: 1;
  padding: 0 20px;
}

.mobile-nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mobile-nav-list li {
  margin-bottom: 15px;
}

.mobile-nav-list a {
  color: var(--color-text);
  font-size: 18px;
  font-weight: 500;
  display: block;
  padding: 10px 0;
}

.mobile-menu-footer {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--color-border);
}

.footer {
  background-color: var(--color-footer-bg);
  padding: 30px 0;
  margin-top: 60px;
  transition: background-color var(--transition-speed);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-info p {
  margin: 5px 0;
}

.footer-links a {
  margin-left: 15px;
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }

  .header-controls {
    display: none;
  }

  .mobile-menu-toggle {
    display: block;
  }

  .footer-content {
    flex-direction: column;
    text-align: center;
  }

  .footer-links {
    margin-top: 15px;
  }

  .footer-links a {
    margin: 0 10px;
  }
}
</style>
