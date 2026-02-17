import { motion } from 'framer-motion'

const events = [
  {
    year: '1959',
    title: 'Рождение',
    description: '24 мая — родился в селе Кулусутай Ононского района Читинской области (ныне Забайкальский край).',
  },
  {
    year: '1974–1978',
    title: 'Художественное училище',
    description: 'Обучение в Улан-Удэнском художественном училище. Первый педагог — А. С. Гармаев, привил дисциплину рисунка и понимание композиции.',
  },
  {
    year: '1978–1984',
    title: 'Педагогическая практика',
    description: 'Работа учителем рисования в средних школах Бурятии и Читинской области. Глубокое изучение типажей и быта бурятского народа.',
  },
  {
    year: '1984–1989',
    title: 'Ленинградская школа',
    description: 'Обучение в ЛВХПУ им. В. И. Мухиной (ныне Академия Штиглица), мастерская монументальной живописи О. И. Кузнецова.',
  },
  {
    year: '1989–2003',
    title: 'Творческий расцвет',
    description: 'Работа в мастерских Союза художников Бурятии, художник-постановщик Бурятского драматического театра им. Х. Намсараева.',
  },
  {
    year: '1996–2001',
    title: 'Выставки в Европе',
    description: 'Персональные и групповые выставки в Италии — Парма, Неаполь, Турин. Международное признание бурятского искусства.',
  },
  {
    year: '2002–2010',
    title: 'Профессиональное признание',
    description: 'Вступление в Творческий союз художников России (2002) и Союз художников России (2010). Диплом Российской академии художеств, золотая медаль «За вклад в отечественную культуру».',
  },
  {
    year: '2016',
    title: 'Память',
    description: '13 января — ушёл из жизни в родном селе Кулусутай. Работы хранятся в музеях Читы и Улан-Удэ, в частных коллекциях России, Европы, Бразилии и Китая.',
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
