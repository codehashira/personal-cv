import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useContactStore = defineStore('contact', () => {
  const name = ref('')
  const email = ref('')
  const message = ref('')
  const isSubmitting = ref(false)
  const isSuccess = ref(false)
  const isError = ref(false)
  
  function resetForm() {
    name.value = ''
    email.value = ''
    message.value = ''
    isSubmitting.value = false
    isSuccess.value = false
    isError.value = false
  }
  
  async function submitForm() {
    isSubmitting.value = true
    isSuccess.value = false
    isError.value = false
    
    try {
      // In a real application, this would send data to a server
      // For this template, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      isSuccess.value = true
      resetForm()
    } catch (error) {
      isError.value = true
    } finally {
      isSubmitting.value = false
    }
  }
  
  return { 
    name, 
    email, 
    message, 
    isSubmitting, 
    isSuccess, 
    isError, 
    resetForm, 
    submitForm 
  }
})
