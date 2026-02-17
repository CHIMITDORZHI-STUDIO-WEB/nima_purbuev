import { motion } from 'framer-motion'

const events = [
  {
    year: 'Ранние годы',
    title: 'Детство в Забайкалье',
    description: 'Рождение и детские годы в Забайкальском крае, первое знакомство с искусством.',
  },
  {
    year: 'Обучение',
    title: 'Художественное образование',
    description: 'Годы обучения живописи, изучение классических и национальных традиций.',
  },
  {
    year: 'Становление',
    title: 'Формирование стиля',
    description: 'Разработка уникального стиля «этнического романтизма», первые значимые работы.',
  },
  {
    year: 'Признание',
    title: 'Выставки и награды',
    description: 'Участие в региональных и всероссийских выставках, признание критиков.',
  },
  {
    year: 'Наследие',
    title: 'Вклад в культуру',
    description: 'Сохранение и популяризация бурятской культуры через искусство.',
  },
]

function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-sagaalgan-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl sm:text-4xl text-tengri-blue font-bold text-center mb-12"
        >
          Хронология
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-sky-blue/30 -translate-x-1/2" />

          <div className="space-y-12">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-sky-blue rounded-full -translate-x-1/2 border-4 border-sagaalgan-white z-10" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                }`}>
                  <span className="text-sky-blue font-semibold text-sm uppercase tracking-wider">
                    {event.year}
                  </span>
                  <h3 className="font-serif text-xl text-tengri-blue font-bold mt-1">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
