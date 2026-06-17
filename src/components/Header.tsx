import { useState } from 'react'
import { NAV_ITEMS } from '../data/navigation'
import { useBodyScrollLock } from '../hooks/useBodyScrollLock'
import { HeaderWave } from './HeaderWave'
import { OrderButton } from './OrderButton'
import { NavLink } from './ui/NavLink'
import { LazyImage } from './ui/LazyImage'
import { Link } from '@tanstack/react-router'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useBodyScrollLock(isMenuOpen)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <header className="sticky top-0 bg-gradient-to-t from-sup-blue-light to-white backdrop-blur-md shadow-md px-4 md:px-8 py-3 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center shrink-0">
            <LazyImage
              src="/logo.png"
              alt="SUP Patrol — логотип"
              className="h-20 md:h-24 w-auto object-contain"
              loading="eager"
              decoding="async"
            />
          </Link>

          <nav className="hidden md:block" aria-label="Основная навигация">
            <ul className="flex gap-10 lg:gap-12">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <NavLink href={item.href}>{item.label}</NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <OrderButton size="sm" className="hidden md:inline-block">
            Заказать саптур
          </OrderButton>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-8 h-8 focus:outline-none z-50"
            aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={isMenuOpen}
          >
            <div
              className="absolute w-6 h-0.5 bg-gray-800 rounded transform transition-all duration-300 ease-in-out"
              style={{
                top: '10px',
                transform: isMenuOpen
                  ? 'rotate(45deg) translateY(8px)'
                  : 'rotate(0)',
              }}
            />
            <div
              className="absolute w-6 h-0.5 bg-gray-800 rounded transition-all duration-300 ease-in-out"
              style={{ top: '15px', opacity: isMenuOpen ? 0 : 1 }}
            />
            <div
              className="absolute w-6 h-0.5 bg-gray-800 rounded transform transition-all duration-300 ease-in-out"
              style={{
                top: '20px',
                transform: isMenuOpen
                  ? 'rotate(-45deg) translateY(-8px)'
                  : 'rotate(0)',
              }}
            />
          </button>
        </div>

        <HeaderWave />
      </header>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden backdrop-blur-sm"
          onClick={closeMenu}
        />
      )}

      <div
        className={`md:hidden fixed top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-sup-blue-light/95 to-white/95 backdrop-blur-md z-40 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        style={{ top: '68px' }}
      >
        <div
          className={`flex flex-col items-center justify-center h-full gap-6 transform transition-all duration-300 delay-100 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              variant="mobile"
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
          <OrderButton
            size="sm"
            className="mt-4 px-8 text-lg"
            onClick={closeMenu}
          >
            Заказать саптур
          </OrderButton>
        </div>
      </div>
    </>
  )
}
