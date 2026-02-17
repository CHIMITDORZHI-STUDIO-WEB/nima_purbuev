function Footer() {
  return (
    <footer className="bg-tengri-blue text-sagaalgan-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Нима Пурбуев (1959–2016)</h3>
            <p className="text-sagaalgan-white/70 text-sm leading-relaxed">
              Забайкальский живописец, график и монументалист. Член Союза художников России.
              Работы хранятся в музеях Читы и Улан-Удэ, в частных коллекциях России,
              Италии, Франции, Австрии, Бразилии и Китая.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm text-sagaalgan-white/70">
              <li><a href="#hero" className="hover:text-sagaalgan-white transition-colors">Главная</a></li>
              <li><a href="#biography" className="hover:text-sagaalgan-white transition-colors">Биография</a></li>
              <li><a href="#gallery" className="hover:text-sagaalgan-white transition-colors">Галерея</a></li>
              <li><a href="#timeline" className="hover:text-sagaalgan-white transition-colors">Хронология</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <p className="text-sagaalgan-white/70 text-sm">
              По вопросам сотрудничества и использования материалов обращайтесь по электронной почте.
            </p>
          </div>
        </div>

        <div className="border-t border-sagaalgan-white/10 mt-8 pt-8 text-center text-sm text-sagaalgan-white/50">
          &copy; {new Date().getFullYear()} Наследие Нимы Пурбуева. Все права защищены.
        </div>
      </div>
    </footer>
  )
}

export default Footer
