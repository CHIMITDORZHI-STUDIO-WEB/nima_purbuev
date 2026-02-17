import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'

function Quotes() {
  const { t } = useLanguage()
  const items = t('quotes.items')

  return (
    <section id="quotes" className="py-20 bg-white dark:bg-[#0d1b2e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl sm:text-4xl text-tengri-blue dark:text-sagaalgan-white font-bold text-center mb-4"
        >
          {t('quotes.title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-500 dark:text-gray-400 text-center mb-12 max-w-xl mx-auto"
        >
          {t('quotes.subtitle')}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative bg-sagaalgan-white dark:bg-[#132744] rounded-2xl p-8 shadow-sm"
            >
              <Quote
                className="text-sky-blue/30 dark:text-steppe-sand/30 mb-4"
                size={36}
              />
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic mb-6">
                &laquo;{item.text}&raquo;
              </p>
              <footer className="border-t border-gray-200 dark:border-gray-600 pt-4">
                <cite className="not-italic">
                  <div className="font-semibold text-tengri-blue dark:text-sagaalgan-white text-sm">
                    {item.source}
                  </div>
                  <div className="text-gray-400 dark:text-gray-500 text-xs mt-1">
                    {item.context}
                  </div>
                </cite>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Quotes
