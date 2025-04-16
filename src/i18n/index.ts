import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import ru from './locales/ru.json'
import de from './locales/de.json'

export type MessageSchema = typeof en

const i18n = createI18n<[MessageSchema], 'en' | 'ru' | 'de'>({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    ru,
    de
  }
})

export default i18n
