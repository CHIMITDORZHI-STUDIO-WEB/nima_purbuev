import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Languages } from 'lucide-react'
import { useTheme } from '../../contexts/ThemeContext'
import { useLanguage } from '../../contexts/LanguageContext'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()
  const { lang, toggleLang, t } = useLanguage()

  const navLinks = [
    { label: t('nav.home'), href: '#hero' },
    { label: t('nav.biography'), href: '#biography' },
    { label: t('nav.gallery'), href: '#gallery' },
    { label: t('nav.timeline'), href: '#timeline' },
    { label: t('nav.sources'), href: '#sources' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-tengri-blue/95 dark:bg-[#060f1c]/95 backdrop-blur-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="font-serif text-xl text-sagaalgan-white font-bold">
            {lang === 'ru' ? 'Нима Пурбуев' : 'Nima Purbuev'}
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sagaalgan-white/80 hover:text-sagaalgan-white transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}

            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 text-sagaalgan-white/70 hover:text-sagaalgan-white transition-colors text-sm font-medium px-2 py-1 rounded border border-sagaalgan-white/20 hover:border-sagaalgan-white/40"
              title={lang === 'ru' ? 'Switch to English' : 'Переключить на русский'}
            >
              <Languages size={14} />
              {lang === 'ru' ? 'EN' : 'RU'}
            </button>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="text-sagaalgan-white/70 hover:text-sagaalgan-white transition-colors p-1.5 rounded border border-sagaalgan-white/20 hover:border-sagaalgan-white/40"
              title={isDark ? t('theme.light') : t('theme.dark')}
              aria-label={isDark ? t('theme.light') : t('theme.dark')}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleLang}
              className="text-sagaalgan-white/70 hover:text-sagaalgan-white text-xs font-medium px-2 py-1 rounded border border-sagaalgan-white/20"
            >
              {lang === 'ru' ? 'EN' : 'RU'}
            </button>
            <button
              onClick={toggleTheme}
              className="text-sagaalgan-white/70 hover:text-sagaalgan-white p-1 rounded border border-sagaalgan-white/20"
              aria-label={isDark ? t('theme.light') : t('theme.dark')}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              className="text-sagaalgan-white"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-tengri-blue dark:bg-[#060f1c] border-t border-sagaalgan-white/10"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sagaalgan-white/80 hover:text-sagaalgan-white transition-colors text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
