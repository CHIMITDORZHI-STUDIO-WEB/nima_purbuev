import { motion } from 'framer-motion'
import artistPhoto from '../../assets/artist-photo.jpg'

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
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src={artistPhoto}
              alt="Нима Пурбуевич Пурбуев — забайкальский художник"
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-tengri-blue/70 to-transparent p-6">
              <p className="text-sagaalgan-white font-serif text-lg">
                Нима Пурбуевич Пурбуев (1959–2016)
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
            <p className="text-gray-700 leading-relaxed text-lg">
              <strong>Нима Пурбуевич Пурбуев</strong> (24 мая 1959 — 13 января 2016) — живописец,
              график, монументалист и педагог. Родился в селе Кулусутай Ононского района Читинской
              области (ныне Забайкальский край) — сакральном месте для бурятского народа, связанном
              с легендами о Чингисхане.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Окончил Улан-Удэнское художественное училище (1974–1978, педагог А. С. Гармаев),
              затем — ЛВХПУ им. В. И. Мухиной в Ленинграде (1984–1989), где учился монументальной
              живописи в мастерской О. И. Кузнецова. Работал художником-постановщиком в Бурятском
              государственном академическом театре драмы им. Х. Намсараева, преподавал в ВСГАКИ,
              ЗабГГПУ и ЗабГУ.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Член Творческого союза художников России (2002) и Союза художников России (2010).
              Награждён дипломом Российской академии художеств и золотой медалью «За вклад
              в отечественную культуру». Выставлялся в Италии, Китае и по всей России.
              Работы хранятся в музеях Читы и Улан-Удэ, а также в частных коллекциях
              Италии, Франции, Австрии, Бразилии и Китая.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Biography
