import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const paintings = [
  {
    id: 1,
    title: 'Боги на синих конях',
    description: 'Синий цвет как сакральный символ Неба (Тэнгри) и духовной чистоты в бурятской мифологии',
    gradient: 'from-blue-600 via-indigo-500 to-blue-900',
  },
  {
    id: 2,
    title: 'Белый месяц',
    description: 'Посвящение национальному празднику Сагаалган — символу обновления и гармонии человека с космосом',
    gradient: 'from-slate-100 via-blue-200 to-sky-300',
  },
  {
    id: 3,
    title: 'Тээли',
    description: 'Произведение, глубоко укоренённое в локальной топонимике и фольклоре забайкальской земли',
    gradient: 'from-amber-300 via-orange-400 to-yellow-600',
  },
  {
    id: 4,
    title: 'Пейзажи Забайкалья',
    description: 'Одухотворённая природа родного края с этнографической точностью и национальным колоритом',
    gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
  },
  {
    id: 5,
    title: 'Портреты',
    description: 'Образы современников и исторических деятелей — внутренняя сила и духовная преемственность поколений',
    gradient: 'from-red-400 via-orange-300 to-yellow-400',
  },
  {
    id: 6,
    title: 'Театральные эскизы',
    description: 'Работы для Бурятского академического театра драмы им. Х. Намсараева — сценография и драматизм',
    gradient: 'from-purple-400 via-pink-400 to-red-400',
  },
]

function Gallery() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl sm:text-4xl text-tengri-blue font-bold text-center mb-4"
        >
          Галерея работ
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-500 text-center mb-12 max-w-xl mx-auto"
        >
          Избранные произведения Нимы Пурбуева
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paintings.map((painting, index) => (
            <motion.div
              key={painting.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelected(painting)}
            >
              <div className={`aspect-[4/3] rounded-xl bg-gradient-to-br ${painting.gradient} flex items-center justify-center transition-transform group-hover:scale-[1.02]`}>
                <span className="text-white/60 font-serif text-lg">{painting.title}</span>
              </div>
              <h3 className="mt-3 font-serif text-lg text-tengri-blue font-semibold">
                {painting.title}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{painting.description}</p>
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
              className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`aspect-[4/3] bg-gradient-to-br ${selected.gradient} flex items-center justify-center`}>
                <span className="text-white/60 font-serif text-2xl">{selected.title}</span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl text-tengri-blue font-bold">{selected.title}</h3>
                <p className="text-gray-600 mt-2">{selected.description}</p>
              </div>
              <button
                className="absolute top-4 right-4 text-white bg-black/30 rounded-full p-2 hover:bg-black/50 transition-colors"
                onClick={() => setSelected(null)}
                aria-label="Закрыть"
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
