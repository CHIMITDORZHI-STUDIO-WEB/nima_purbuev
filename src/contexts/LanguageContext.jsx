import { createContext, useContext, useState } from 'react'
import { translations } from '../i18n/translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('lang') || 'ru'
    }
    return 'ru'
  })

  const toggleLang = () => {
    setLang((prev) => {
      const next = prev === 'ru' ? 'en' : 'ru'
      localStorage.setItem('lang', next)
      document.documentElement.lang = next
      return next
    })
  }

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[lang]
    for (const k of keys) {
      value = value?.[k]
    }
    return value ?? key
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context)
    throw new Error('useLanguage must be used within LanguageProvider')
  return context
}
