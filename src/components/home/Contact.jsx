import { motion } from 'framer-motion'
import { Mail, MapPin } from 'lucide-react'

function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl sm:text-4xl text-tengri-blue font-bold mb-4"
        >
          Контакты
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-500 mb-12 max-w-xl mx-auto"
        >
          Свяжитесь с нами по вопросам сотрудничества, выставок или использования материалов
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center p-6 rounded-xl bg-sagaalgan-white"
          >
            <Mail className="text-sky-blue mb-3" size={28} />
            <h3 className="font-semibold text-tengri-blue mb-1">Email</h3>
            <p className="text-gray-500 text-sm">info@purbuev-art.ru</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center p-6 rounded-xl bg-sagaalgan-white"
          >
            <MapPin className="text-sky-blue mb-3" size={28} />
            <h3 className="font-semibold text-tengri-blue mb-1">Адрес</h3>
            <p className="text-gray-500 text-sm">Забайкальский край, Россия</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
