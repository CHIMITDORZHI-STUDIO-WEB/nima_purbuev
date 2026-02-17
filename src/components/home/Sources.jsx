import { motion } from 'framer-motion'
import { ExternalLink, BookOpen } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'

function Sources() {
  const { t } = useLanguage()
  const links = t('sources.links')

  return (
    <section id="sources" className="py-20 bg-sagaalgan-white dark:bg-[#0a1628]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl sm:text-4xl text-tengri-blue dark:text-sagaalgan-white font-bold text-center mb-4"
        >
          {t('sources.title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-500 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          {t('sources.description')}
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-serif text-xl text-tengri-blue dark:text-steppe-sand font-semibold mb-6 flex items-center gap-2"
        >
          <BookOpen size={20} />
          {t('sources.linksTitle')}
        </motion.h3>

        <div className="space-y-4">
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group flex items-start gap-4 p-5 bg-white dark:bg-[#132744] rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-sky-blue/10 dark:bg-sky-blue/20 rounded-lg flex items-center justify-center group-hover:bg-sky-blue/20 dark:group-hover:bg-sky-blue/30 transition-colors">
                <ExternalLink className="text-sky-blue" size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-tengri-blue dark:text-sagaalgan-white group-hover:text-sky-blue transition-colors">
                  {link.title}
                </h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  {link.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sources
