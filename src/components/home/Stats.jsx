import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Palette, Globe, Building2, Clock } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'

function AnimatedNumber({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    const steps = 60
    const increment = target / steps
    const stepTime = duration / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepTime)
    return () => clearInterval(timer)
  }, [started, target, duration])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

function Stats() {
  const { t } = useLanguage()

  const stats = [
    { icon: Palette, value: 50, suffix: '+', label: t('stats.paintings') },
    { icon: Globe, value: 6, suffix: '', label: t('stats.countries') },
    { icon: Building2, value: 3, suffix: '', label: t('stats.museums') },
    { icon: Clock, value: 30, suffix: '+', label: t('stats.years') },
  ]

  return (
    <section className="py-16 bg-tengri-blue dark:bg-[#0a1628]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <stat.icon
                className="mx-auto mb-3 text-steppe-sand"
                size={32}
                strokeWidth={1.5}
              />
              <div className="font-serif text-4xl sm:text-5xl font-bold text-sagaalgan-white mb-2">
                <AnimatedNumber
                  target={stat.value}
                  suffix={stat.suffix}
                />
              </div>
              <div className="text-sagaalgan-white/70 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
