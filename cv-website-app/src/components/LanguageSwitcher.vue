<template>
  <div class="language-switcher">
    <div class="selected-language" @click="toggleDropdown">
      {{ currentLanguageDisplay }}
      <span class="dropdown-arrow">▼</span>
    </div>
    <div class="language-dropdown" v-if="isDropdownOpen">
      <div 
        v-for="lang in languageStore.availableLanguages" 
        :key="lang.code"
        class="language-option"
        :class="{ 'active': lang.code === languageStore.currentLanguage }"
        @click="selectLanguage(lang.code)"
      >
        {{ lang.name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLanguageStore } from '../stores/language'

const { locale } = useI18n()
const languageStore = useLanguageStore()
const isDropdownOpen = ref(false)

const currentLanguageDisplay = computed(() => {
  const current = languageStore.availableLanguages.find(
    lang => lang.code === languageStore.currentLanguage
  )
  return current ? current.name : 'English'
})

function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value
}

function selectLanguage(langCode: string) {
  languageStore.setLanguage(langCode)
  locale.value = langCode
  isDropdownOpen.value = false
}

// Close dropdown when clicking outside
function handleClickOutside(event: MouseEvent) {
  const target = event.target as HTMLElement
  if (!target.closest('.language-switcher')) {
    isDropdownOpen.value = false
  }
}

// Watch for language changes
watch(() => languageStore.currentLanguage, (newLang) => {
  locale.value = newLang
})

// Add event listener for outside clicks
window.addEventListener('click', handleClickOutside)
</script>

<style scoped>
.language-switcher {
  position: relative;
  margin-right: 15px;
}

.selected-language {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: var(--border-radius);
  background-color: var(--color-card-bg);
  transition: background-color var(--transition-speed);
}

.dropdown-arrow {
  font-size: 10px;
  margin-left: 5px;
}

.language-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 5px;
  background-color: var(--color-card-bg);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  z-index: 10;
  min-width: 120px;
}

.language-option {
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color var(--transition-speed);
}

.language-option:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.language-option.active {
  color: var(--color-primary);
  font-weight: 500;
}

@media (max-width: 768px) {
  .language-switcher {
    margin-right: 0;
  }
}
</style>
