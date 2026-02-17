import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'

const gradients = [
  'from-blue-600 via-indigo-500 to-blue-900',
  'from-slate-100 via-blue-200 to-sky-300',
  'from-amber-300 via-orange-400 to-yellow-600',
  'from-emerald-400 via-teal-500 to-cyan-600',
  'from-red-400 via-orange-300 to-yellow-400',
  'from-purple-400 via-pink-400 to-red-400',
]

function Gallery() {
  const [selected, setSelected] = useState(null)
  const { t } = useLanguage()
  const paintings = t('gallery.paintings')

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-[#0d1b2e] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl sm:text-4xl text-tengri-blue dark:text-sagaalgan-white font-bold text-center mb-4"
        >
          {t('gallery.title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-500 dark:text-gray-400 text-center mb-12 max-w-xl mx-auto"
        >
          {t('gallery.subtitle')}
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paintings.map((painting, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelected({ ...painting, gradient: gradients[index] })}
            >
              <div className={`aspect-[4/3] rounded-xl bg-gradient-to-br ${gradients[index]} flex items-center justify-center transition-transform group-hover:scale-[1.02]`}>
                <span className="text-white/60 font-serif text-lg">{painting.title}</span>
              </div>
              <h3 className="mt-3 font-serif text-lg text-tengri-blue dark:text-sagaalgan-white font-semibold">
                {painting.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{painting.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-[#132744] rounded-2xl max-w-2xl w-full overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`aspect-[4/3] bg-gradient-to-br ${selected.gradient} flex items-center justify-center`}>
                <span className="text-white/60 font-serif text-2xl">{selected.title}</span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl text-tengri-blue dark:text-sagaalgan-white font-bold">{selected.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{selected.description}</p>
              </div>
              <button
                className="absolute top-4 right-4 text-white bg-black/30 rounded-full p-2 hover:bg-black/50 transition-colors"
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery
