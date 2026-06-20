import { FOOTER_NAV_ITEMS } from '../data/navigation'
import { NavLink } from './ui/NavLink'

const SOCIAL_LINKS = [
  { href: 'https://t.me/snow_express', icon: '📱', label: 'Telegram' },
  { href: 'https://vk.com/snowexpress', icon: '📘', label: 'VK',  },
] as const

export function Footer() {
  return (
    <footer id="footer" className="bg-sup-dark text-white pt-16 pb-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <span className="text-2xl font-black text-white">SUP</span>
              <span className="text-2xl font-black text-sup-blue"> PATROL</span>
              <p className="text-gray-400 text-xs tracking-wider mt-1">
                SNOW EXPRESS
              </p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Саптуры утром, днем и на закате в Санкт-Петербурге. Лучшие
              маршруты, опытные инструкторы и доступные цены.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-l-3 border-sup-blue pl-3">
              Контакты
            </h3>
            <div className="space-y-3 text-sm">
              <p>
                <span className="text-gray-400">Телефон:</span>
                <br />
                <a
                  href="tel:+78129801370"
                  className="text-white hover:text-sup-blue transition-colors"
                >
                  +7 (812) 980-13-70
                </a>
                <br />
                <a
                  href="tel:+79533701370"
                  className="text-white hover:text-sup-blue transition-colors"
                >
                  +7 (953) 370-13-70
                </a>
              </p>
              <p>
                <span className="text-gray-400">Адрес:</span>
                <br />
                <span className="text-white">
                  г. Санкт-Петербург, Пр. Энгельса д.111
                </span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-l-3 border-sup-blue pl-3">
              Навигация
            </h3>
            <ul className="space-y-2 mb-2">
              {FOOTER_NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <NavLink href={item.href} variant="footer">
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <a
              href="https://disk.yandex.ru/i/Pg2zsIhGvoeqVw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400"
            >
              Политика обработки персональных данных
            </a>{' '}
            <a
              href="https://disk.yandex.ru/i/ld9oIYa_uCrDhw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400"
            >
              Договор публичной оферты
            </a>{' '}
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-l-3 border-sup-blue pl-3">
              Мы в соцсетях
            </h3>
            <div className="flex gap-3 mb-6">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-sup-blue flex items-center justify-center text-xl transition-all hover:scale-110"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              Подписывайтесь — там ещё больше фото и анонсы новых туров!
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500 text-xs">
            © 2020-2026 sup-patrol.ru — SUP туры в Санкт-Петербурге. Все права
            защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}
