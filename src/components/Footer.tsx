export function Footer() {
    return (
        <footer id="footer" className="bg-sup-dark text-white pt-16 pb-8 px-4">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                    {/* Колонка 1: Логотип и описание */}
                    <div>
                        <div className="mb-4">
                            <span className="text-2xl font-black text-white">SUP</span>
                            <span className="text-2xl font-black text-sup-red"> PATROL</span>
                            <p className="text-gray-400 text-xs tracking-wider mt-1">SNOW EXPRESS</p>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Саптуры утром, днем и на закате в Санкт-Петербурге.
                            Лучшие маршруты, опытные инструкторы и доступные цены.
                        </p>
                    </div>

                    {/* Колонка 2: Контакты */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4 border-l-3 border-sup-red pl-3">Контакты</h3>
                        <div className="space-y-3 text-sm">
                            <p>
                                <span className="text-gray-400">Телефон:</span><br />
                                <a href="tel:+78129801370" className="text-white hover:text-sup-red transition-colors">
                                    +7 (812) 980-13-70
                                </a><br />
                                <a href="tel:+79533701370" className="text-white hover:text-sup-red transition-colors">
                                    +7 (953) 370-13-70
                                </a>
                            </p>
                            <p>
                                <span className="text-gray-400">Адрес:</span><br />
                                <span className="text-white">г. Санкт-Петербург, Пр. Энгельса д.111</span>
                            </p>
                            <p>
                                <span className="text-gray-400">Email:</span><br />
                                <a href="mailto:info@sup-patrol.ru" className="text-white hover:text-sup-red transition-colors">
                                    info@sup-patrol.ru
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Колонка 3: Навигация */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4 border-l-3 border-sup-red pl-3">Навигация</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#tours" className="text-gray-400 hover:text-sup-red transition-colors">Саптуры</a></li>
                            <li><a href="#advantages" className="text-gray-400 hover:text-sup-red transition-colors">О нас</a></li>
                            <li><a href="#reviews" className="text-gray-400 hover:text-sup-red transition-colors">Отзывы</a></li>
                            <li><a href="/blog" className="text-gray-400 hover:text-sup-red transition-colors">Блог</a></li>
                        </ul>
                    </div>

                    {/* Колонка 4: Соцсети */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4 border-l-3 border-sup-red pl-3">Мы в соцсетях</h3>
                        <div className="flex gap-3 mb-6">
                            <a
                                href="https://t.me/snow_express"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-sup-red flex items-center justify-center text-xl transition-all hover:scale-110"
                            >
                                📱
                            </a>
                            <a
                                href="https://vk.com/suppatrol"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-sup-red flex items-center justify-center text-xl transition-all hover:scale-110"
                            >
                                📘
                            </a>
                            <a
                                href="https://instagram.com/suppatrol"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-sup-red flex items-center justify-center text-xl transition-all hover:scale-110"
                            >
                                📸
                            </a>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Подписывайтесь — там ещё больше фото и анонсы новых туров!
                        </p>
                    </div>
                </div>

                {/* Копирайт */}
                <div className="border-t border-gray-800 pt-6 text-center">
                    <p className="text-gray-500 text-xs">
                        © 2020-2025 sup-patrol.ru — SUP туры в Санкт-Петербурге. Все права защищены.
                    </p>
                </div>
            </div>
        </footer>
    )
}