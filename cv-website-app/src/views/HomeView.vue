<template>
  <div class="home">
    <section id="home" class="hero-section">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1>{{ $t('header.name') }}</h1>
            <h2>{{ $t('header.title') }}</h2>
            <p>{{ $t('header.intro') }}</p>
            <div class="hero-buttons">
              <a href="#contact" class="btn">{{ $t('nav.contact') }}</a>
              <a href="#projects" class="btn btn-secondary">{{ $t('nav.projects') }}</a>
            </div>
          </div>
          <div class="hero-image">
            <div class="profile-placeholder">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="section">
      <div class="container">
        <h2 class="section-title">{{ $t('about.title') }}</h2>
        <div class="about-content">
          <p>{{ $t('about.content') }}</p>
        </div>
      </div>
    </section>

    <section id="experience" class="section">
      <div class="container">
        <h2 class="section-title">{{ $t('experience.title') }}</h2>
        <div class="experience-list">
          <div v-for="(job, index) in jobs" :key="index" class="card experience-item">
            <div class="experience-header">
              <h3>{{ job.title }}</h3>
              <span class="experience-period">{{ job.period }}</span>
            </div>
            <div class="experience-company">{{ job.company }}</div>
            <p>{{ job.description }}</p>
            <div class="experience-tech">
              <strong>{{ job.technologies }}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="education" class="section">
      <div class="container">
        <h2 class="section-title">{{ $t('education.title') }}</h2>
        <div class="education-list">
          <div v-for="(degree, index) in degrees" :key="index" class="card education-item">
            <div class="education-header">
              <h3>{{ degree.degree }}</h3>
              <span class="education-period">{{ degree.period }}</span>
            </div>
            <div class="education-institution">{{ degree.institution }}</div>
            <p>{{ degree.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="skills" class="section">
      <div class="container">
        <h2 class="section-title">{{ $t('skills.title') }}</h2>
        <div class="skills-container">
          <div class="card skills-technical">
            <h3>{{ $t('skills.technical.title') }}</h3>
            <ul class="skills-list">
              <li v-for="(skill, index) in technicalSkills" :key="index">
                {{ skill }}
              </li>
            </ul>
          </div>

          <div class="card skills-languages">
            <h3>{{ $t('skills.languages.title') }}</h3>
            <ul class="skills-list">
              <li v-for="(lang, index) in languages" :key="index">
                <strong>{{ lang.name }}</strong
                >: {{ lang.level }}
              </li>
            </ul>
          </div>

          <div class="card skills-soft">
            <h3>{{ $t('skills.soft.title') }}</h3>
            <ul class="skills-list">
              <li v-for="(skill, index) in softSkills" :key="index">
                {{ skill }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" class="section">
      <div class="container">
        <h2 class="section-title">{{ $t('projects.title') }}</h2>
        <div class="projects-list">
          <div v-for="(project, index) in projects" :key="index" class="card project-item">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="project-tech">
              <strong>{{ project.technologies }}</strong>
            </div>
            <a :href="project.link" class="project-link" target="_blank">View Project</a>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="section">
      <div class="container">
        <h2 class="section-title">{{ $t('contact.title') }}</h2>
        <div class="contact-container">
          <div class="contact-info card">
            <h3>{{ $t('contact.info.name') }}</h3>
            <p>{{ $t('contact.info.email') }}</p>
          </div>

          <div class="contact-form card">
            <form @submit.prevent="submitContactForm">
              <div class="form-group">
                <label for="name" class="form-label">{{ $t('contact.name') }}</label>
                <input
                  type="text"
                  id="name"
                  v-model="contactStore.name"
                  class="form-input"
                  required
                />
              </div>

              <div class="form-group">
                <label for="email" class="form-label">{{ $t('contact.email') }}</label>
                <input
                  type="email"
                  id="email"
                  v-model="contactStore.email"
                  class="form-input"
                  required
                />
              </div>

              <div class="form-group">
                <label for="message" class="form-label">{{ $t('contact.message') }}</label>
                <textarea
                  id="message"
                  v-model="contactStore.message"
                  class="form-input form-textarea"
                  required
                ></textarea>
              </div>

              <button type="submit" class="btn" :disabled="contactStore.isSubmitting">
                {{ $t('contact.send') }}
              </button>

              <div v-if="contactStore.isSuccess" class="form-success">
                {{ $t('contact.success') }}
              </div>

              <div v-if="contactStore.isError" class="form-error">
                {{ $t('contact.error') }}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useContactStore } from '../stores/contact'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const contactStore = useContactStore()
const { t } = useI18n()

// Fix TypeScript errors by properly typing the translated content
interface Job {
  title: string
  company: string
  period: string
  description: string
  technologies: string
}

interface Degree {
  degree: string
  institution: string
  period: string
  description: string
}

interface Language {
  name: string
  level: string
}

interface Project {
  title: string
  description: string
  technologies: string
  link: string
}

const jobs = computed<Job[]>(() => {
  return t('experience.jobs') as unknown as Job[]
})

const degrees = computed<Degree[]>(() => {
  return t('education.degrees') as unknown as Degree[]
})

const technicalSkills = computed<string[]>(() => {
  return t('skills.technical.items') as unknown as string[]
})

const languages = computed<Language[]>(() => {
  return t('skills.languages.items') as unknown as Language[]
})

const softSkills = computed<string[]>(() => {
  return t('skills.soft.items') as unknown as string[]
})

const projects = computed<Project[]>(() => {
  return t('projects.items') as unknown as Project[]
})

function submitContactForm() {
  contactStore.submitForm()
}
</script>

<style scoped>
.hero-section {
  padding: 80px 0;
  background-color: var(--color-header-bg);
  transition: background-color var(--transition-speed);
}

.hero-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.hero-text {
  flex: 1;
}

.hero-text h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.hero-text h2 {
  font-size: 1.5rem;
  color: var(--color-primary);
  margin-bottom: 20px;
}

.hero-buttons {
  margin-top: 30px;
}

.hero-buttons .btn {
  margin-right: 15px;
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-placeholder {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: var(--color-card-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow);
}

.experience-list,
.education-list,
.projects-list {
  display: grid;
  gap: 20px;
}

.experience-header,
.education-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.experience-period,
.education-period {
  color: var(--color-text-light);
  font-size: 0.9rem;
}

.experience-company,
.education-institution {
  font-weight: 500;
  margin-bottom: 10px;
}

.experience-tech,
.project-tech {
  margin-top: 15px;
  font-size: 0.9rem;
}

.skills-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.skills-list {
  padding-left: 20px;
}

.skills-list li {
  margin-bottom: 8px;
}

.project-link {
  display: inline-block;
  margin-top: 15px;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
}

.form-success {
  margin-top: 15px;
  padding: 10px;
  background-color: rgba(46, 204, 113, 0.1);
  border-left: 3px solid var(--color-secondary);
  border-radius: 4px;
}

.form-error {
  margin-top: 15px;
  padding: 10px;
  background-color: rgba(231, 76, 60, 0.1);
  border-left: 3px solid var(--color-accent);
  border-radius: 4px;
}

@media (max-width: 768px) {
  .hero-content {
    flex-direction: column;
    text-align: center;
  }

  .hero-text {
    margin-bottom: 40px;
  }

  .hero-text h1 {
    font-size: 2rem;
  }

  .contact-container {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero-buttons .btn {
    display: block;
    margin: 10px 0;
  }

  .skills-container {
    grid-template-columns: 1fr;
  }
}
</style>
