import { motion } from 'framer-motion'

function Biography() {
  return (
    <section id="biography" className="py-20 bg-sagaalgan-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl sm:text-4xl text-tengri-blue font-bold text-center mb-12"
        >
          Биография
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Portrait placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-steppe-sand to-sky-blue/30 flex items-center justify-center"
          >
            <span className="text-tengri-blue/40 font-serif text-xl">Фото художника</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-gray-700 leading-relaxed">
              Нима Пурбуевич Пурбуев — забайкальский художник, чьё творчество неразрывно
              связано с культурой и природой Бурятии. Его картины отражают глубокую связь
              с родной землёй, передавая дух степных просторов, величие гор и тепло
              человеческих отношений.
            </p>
            <p className="text-gray-700 leading-relaxed">
              В своих работах художник сочетает традиционные мотивы бурятской культуры
              с современными художественными приёмами, создавая уникальный стиль,
              который можно назвать «этническим романтизмом».
            </p>
            <p className="text-gray-700 leading-relaxed">
              Творчество Нимы Пурбуева — это мост между прошлым и настоящим,
              между традицией и современностью, между человеком и природой.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Biography
