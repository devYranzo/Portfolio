import { NavLink } from 'react-router-dom'
import logoImg from '../assets/LogoFull-White-128x75.webp'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSelector from './LanguageSelector'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const { t } = useTranslation('shared')

  const navItems = [
    { text: t('navbar.home'), url: '' },
    { text: t('navbar.projects'), url: 'projects' },
    { text: t('navbar.about'), url: 'aboutme' },
    { text: t('navbar.contact'), url: 'contact' },
  ]

  return (
    <header
      className={`${
        isOpen ? 'fixed top-0 bg-[#242424] z-50 isolate' : 'relative'
      } flex w-full h-28 justify-between items-center mb-4`}
    >
      <div className="flex w-full justify-between items-center">
        <img src={logoImg} alt="Logo Image" className="w-32 lg:ml-40 md:ml-20 sm:ml-10 ml-5" />
        <button
          className="md:hidden text-white text-5xl mr-10"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
      <nav
        className={`${
          isOpen ? 'absolute top-25 left-0 w-full bg-zinc-900 z-50 shadow-2xl' : 'hidden'
        } md:static md:block lg:mr-40 md:mr-20`}
      >
        <ul className="flex flex-col md:flex-row items-center gap-4 p-4 text-2xl font-Montserrat text-nowrap">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                key={index}
                to={item.url}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `relative px-2 py-1 text-white
                before:content-[''] before:absolute before:bottom-0 before:left-0
                before:h-[2px] before:w-full
                before:bg-emerald-400
                before:transform
                ${isActive ? 'before:scale-x-100' : 'before:scale-x-0'}
                before:origin-left
                before:transition-transform
                before:duration-300
                `
                }
              >
                {item.text}
              </NavLink>
            </li>
          ))}
          <li>
            <LanguageSelector />
          </li>
        </ul>
      </nav>
    </header>
  )
}
