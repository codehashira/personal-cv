import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLanguageStore = defineStore('language', () => {
  const currentLanguage = ref('en')
  
  const availableLanguages = [
    { code: 'en', name: 'English' },
    { code: 'ru', name: 'Русский' },
    { code: 'de', name: 'Deutsch' }
  ]
  
  function setLanguage(lang: string) {
    currentLanguage.value = lang
  }
  
  return { currentLanguage, availableLanguages, setLanguage }
})
