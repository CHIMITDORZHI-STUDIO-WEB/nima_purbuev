import { motion } from 'framer-motion'
import artistPhoto from '../../assets/artist-photo.jpg'
import { useLanguage } from '../../contexts/LanguageContext'

function Biography() {
  const { t } = useLanguage()

  return (
    <section id="biography" className="py-20 bg-sagaalgan-white dark:bg-[#0a1628] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl sm:text-4xl text-tengri-blue dark:text-sagaalgan-white font-bold text-center mb-12"
        >
          {t('biography.title')}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src={artistPhoto}
              alt={t('biography.caption')}
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-tengri-blue/70 to-transparent p-6">
              <p className="text-sagaalgan-white font-serif text-lg">
                {t('biography.caption')}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p
              className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg"
              dangerouslySetInnerHTML={{ __html: t('biography.p1') }}
            />
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              {t('biography.p2')}
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              {t('biography.p3')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Biography
