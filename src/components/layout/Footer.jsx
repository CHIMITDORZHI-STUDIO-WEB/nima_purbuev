import { useLanguage } from '../../contexts/LanguageContext'

function Footer() {
  const { t, lang } = useLanguage()

  const navLinks = [
    { label: t('nav.home'), href: '#hero' },
    { label: t('nav.biography'), href: '#biography' },
    { label: t('nav.gallery'), href: '#gallery' },
    { label: t('nav.timeline'), href: '#timeline' },
    { label: t('nav.sources'), href: '#sources' },
  ]

  return (
    <footer className="bg-tengri-blue dark:bg-[#060f1c] text-sagaalgan-white py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">
              {lang === 'ru' ? 'Нима Пурбуев (1959–2016)' : 'Nima Purbuev (1959–2016)'}
            </h3>
            <p className="text-sagaalgan-white/70 text-sm leading-relaxed">
              {t('footer.about')}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('footer.navigation')}</h4>
            <ul className="space-y-2 text-sm text-sagaalgan-white/70">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-sagaalgan-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-sagaalgan-white/10 mt-8 pt-8 text-center text-sm text-sagaalgan-white/50">
          &copy; {new Date().getFullYear()} {t('footer.copyright')}
        </div>
      </div>
    </footer>
  )
}

export default Footer
