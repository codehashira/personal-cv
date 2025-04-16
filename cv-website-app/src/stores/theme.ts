import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useStorage } from '@vueuse/core'

export const useThemeStore = defineStore('theme', () => {
  const isDark = useStorage('cv-theme-dark', false)
  
  function toggleTheme() {
    isDark.value = !isDark.value
  }
  
  return { isDark, toggleTheme }
})
