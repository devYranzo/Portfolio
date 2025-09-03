import React, { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSelector = () => {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef()
  const { t } = useTranslation('shared')

  const baseLanguages = [
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' },
    { code: 'eu', label: 'EUS' },
  ]

  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language)

  useEffect(() => {
    setSelectedLanguage(i18n.language)
  }, [i18n.language])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const changeLanguage = (lang) => {
    if (lang !== i18n.language) {
      i18n.changeLanguage(lang)
      setSelectedLanguage(lang)
    }
    setOpen(false)
  }

  if (!i18n.language) return null

  return (
    <div ref={ref}>
      <select
        value={selectedLanguage}
        onChange={(e) => changeLanguage(e.target.value)}
        className="block sm:hidden bg-[#242424] w-30 h-10 text-white text-sm px-4 py-2 rounded cursor-pointer"
        aria-label={t('language')}
      >
        {baseLanguages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>

      <div className="hidden sm:inline-block relative">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex text-white text-sm px-4 py-2 rounded cursor-pointer"
          aria-label={t('language')}
        >
          <svg width="33" height="32" viewBox="0 0 33 32" xmlns="http://www.w3.org/2000/svg">
            <image
              width="33"
              height="32"
              preserveAspectRatio="none"
              href="data:image/png;base64,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"
            />
          </svg>
          {baseLanguages.find((l) => l.code === selectedLanguage)?.label}
        </button>

        {open && (
          <div className="absolute mt-2 left-1/2 -translate-x-1/2 z-10 bg-[#242424] border rounded-lg shadow-lg">
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#242424] border-l border-t rotate-45 z-0"></div>

            <div className="relative z-10 p-2 space-y-1">
              {baseLanguages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`block w-full text-left text-2xl px-4 py-1 cursor-pointer ${
                    selectedLanguage === lang.code ? 'font-bold text-emerald-400' : ''
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default LanguageSelector
