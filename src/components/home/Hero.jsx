import { motion } from 'framer-motion'

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-tengri-blue via-sky-blue to-steppe-sand opacity-90" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl sm:text-5xl md:text-7xl text-sagaalgan-white font-bold leading-tight"
        >
          Нима Пурбуев
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-lg sm:text-xl text-sagaalgan-white/80 max-w-2xl mx-auto leading-relaxed"
        >
          Забайкальский художник, воспевающий красоту родного края
          через призму этнического романтизма
        </motion.p>

        <motion.a
          href="#biography"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="inline-block mt-10 px-8 py-3 bg-sagaalgan-white text-tengri-blue font-semibold rounded-lg hover:bg-steppe-sand transition-colors"
        >
          Узнать больше
        </motion.a>
      </div>
    </section>
  )
}

export default Hero
