import { motion } from 'framer-motion'
import artistPhoto from '../../assets/artist-photo.jpg'

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={artistPhoto}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-tengri-blue/80 via-tengri-blue/50 to-tengri-blue/80" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-4"
        >
          <span className="inline-block text-steppe-sand font-serif text-lg sm:text-xl tracking-widest uppercase">
            Забайкальский художник · 1959–2016
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl sm:text-6xl md:text-8xl text-sagaalgan-white font-bold leading-tight"
        >
          Нима Пурбуев
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto mt-6 w-24 h-0.5 bg-steppe-sand"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 text-lg sm:text-xl text-sagaalgan-white/90 max-w-2xl mx-auto leading-relaxed"
        >
          Живописец, график, монументалист и педагог, воспевающий красоту
          родного края через призму этнического романтизма
        </motion.p>

        <motion.a
          href="#biography"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="inline-block mt-10 px-8 py-3 border-2 border-sagaalgan-white text-sagaalgan-white font-semibold rounded-lg hover:bg-sagaalgan-white hover:text-tengri-blue transition-colors duration-300"
        >
          Узнать больше
        </motion.a>
      </div>
    </section>
  )
}

export default Hero
