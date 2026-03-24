'use client'

import { createContext, useContext, useState, useEffect } from 'react'

export type Lang = 'ja' | 'en'

interface LanguageContextValue {
  lang: Lang
  toggle: () => void
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'ja',
  toggle: () => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('ja')

  useEffect(() => {
    const saved = localStorage.getItem('akinorio-lang') as Lang | null
    if (saved === 'en' || saved === 'ja') setLang(saved)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const toggle = () => {
    setLang(prev => {
      const next: Lang = prev === 'ja' ? 'en' : 'ja'
      localStorage.setItem('akinorio-lang', next)
      return next
    })
  }

  return (
    <LanguageContext value={{ lang, toggle }}>
      {children}
    </LanguageContext>
  )
}

export const useLanguage = () => useContext(LanguageContext)
