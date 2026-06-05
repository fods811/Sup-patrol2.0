import { useState, useEffect } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <>
      <header className="bg-sup-dark shadow-lg px-4 md:px-8 py-3 fixed top-0 left-0 right-0 z-50">
        {/* ... остальное содержимое как было ... */}
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="flex items-center gap-2">
            <div className="text-white">
              <span className="text-2xl font-black tracking-wider">SUP</span>
              <span className="text-sup-red text-2xl font-black"> PATROL</span>
              <div className="text-[10px] text-gray-400 tracking-wider">SNOW EXPRESS</div>
            </div>
          </a>

          <nav className="hidden md:block">
            <ul className="flex gap-6 lg:gap-8">
              <li><a href="#tours" className="text-gray-300 hover:text-sup-red transition-colors">Саптуры</a></li>
              <li><a href="#advantages" className="text-gray-300 hover:text-sup-red transition-colors">О нас</a></li>
              <li><a href="#reviews" className="text-gray-300 hover:text-sup-red transition-colors">Отзывы</a></li>
              <li><a href="#footer" className="text-gray-300 hover:text-sup-red transition-colors">Контакты</a></li>
            </ul>
          </nav>

          <a href="#zakaz" className="hidden md:inline-block bg-sup-red text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-burgundy-light transition-colors">
            Заказать саптур
          </a>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden relative w-8 h-8 focus:outline-none z-50">
            <div className="absolute w-6 h-0.5 bg-white rounded transform transition-all duration-300 ease-in-out"
              style={{ top: '10px', transform: isMenuOpen ? 'rotate(45deg) translateY(8px)' : 'rotate(0)' }} />
            <div className="absolute w-6 h-0.5 bg-white rounded transition-all duration-300 ease-in-out"
              style={{ top: '15px', opacity: isMenuOpen ? 0 : 1 }} />
            <div className="absolute w-6 h-0.5 bg-white rounded transform transition-all duration-300 ease-in-out"
              style={{ top: '20px', transform: isMenuOpen ? 'rotate(-45deg) translateY(-8px)' : 'rotate(0)' }} />
          </button>
        </div>
      </header>

      {/* Оверлей для закрытия меню */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Мобильное меню */}
      <div className={`md:hidden fixed top-0 left-0 right-0 bottom-0 bg-sup-dark z-40 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} style={{ top: '60px' }}>
        <div className={`flex flex-col items-center justify-center h-full gap-6 transform transition-all duration-300 delay-100 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <a href="#tours" className="text-xl text-gray-300 hover:text-sup-red transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Саптуры</a>
          <a href="#advantages" className="text-xl text-gray-300 hover:text-sup-red transition-colors py-2" onClick={() => setIsMenuOpen(false)}>О нас</a>
          <a href="#reviews" className="text-xl text-gray-300 hover:text-sup-red transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Отзывы</a>
          <a href="#footer" className="text-xl text-gray-300 hover:text-sup-red transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Контакты</a>
          <a href="#zakaz" className="mt-4 bg-sup-red text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-burgundy-light transition-colors" onClick={() => setIsMenuOpen(false)}>Заказать саптур</a>
        </div>
      </div>
    </>
  )
}