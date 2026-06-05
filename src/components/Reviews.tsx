import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Временные заглушки для скриншотов
const screenshots = [
    { id: 1, img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=300&h=400&fit=crop", source: "Instagram", link: "https://instagram.com" },
    { id: 2, img: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=300&h=400&fit=crop", source: "VK", link: "https://vk.com" },
    { id: 3, img: "https://images.unsplash.com/photo-1611162618070-bf9cec289fa4?w=300&h=400&fit=crop", source: "Telegram", link: "https://t.me" },
    { id: 4, img: "https://images.unsplash.com/photo-1611162617263-4ec3060e058e?w=300&h=400&fit=crop", source: "Instagram", link: "https://instagram.com" },
    { id: 5, img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=300&h=400&fit=crop", source: "VK", link: "https://vk.com" },
]

export function Reviews() {
    return (
        <section id="reviews" className="py-16 md:py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-sup-dark relative overflow-hidden">
            {/* Декоративные элементы */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-sup-red/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-sup-blue/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto relative z-10">
                {/* Заголовок */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        Отзывы клиентов
                    </h2>
                    <div className="w-20 h-0.5 bg-sup-red mx-auto rounded-full mb-3"></div>
                    <p className="text-gray-300 text-base max-w-2xl mx-auto">
                        Реальные скриншоты из социальных сетей
                    </p>
                </div>

                {/* Карусель скриншотов */}
                <Swiper
                    modules={[Navigation, Pagination, Keyboard, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    keyboard={{ enabled: true }}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    slidesPerView={1}
                    spaceBetween={20}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    loop={true}
                    className="pb-10"
                >
                    {screenshots.map((screenshot) => (
                        <SwiperSlide key={screenshot.id}>
                            <a
                                href={screenshot.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative block bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-sup-red/50 transition-all duration-300 hover:-translate-y-1"
                            >
                                {/* Иконка соцсети */}
                                <div className="absolute top-2 right-2 z-10">
                                    <div className="w-7 h-7 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-sm">
                                        {screenshot.source === 'Instagram' && '📸'}
                                        {screenshot.source === 'VK' && '📘'}
                                        {screenshot.source === 'Telegram' && '✈️'}
                                    </div>
                                </div>

                                {/* Скриншот */}
                                <div className="relative overflow-hidden">
                                    <img
                                        src={screenshot.img}
                                        alt={`Отзыв из ${screenshot.source}`}
                                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                {/* Подпись при наведении */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <p className="text-white text-xs text-center">Посмотреть отзыв →</p>
                                </div>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Кнопка заказа */}
                <div className="text-center mt-10">
                    <a
                        href="#zakaz"
                        className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-sup-red to-burgundy-light text-white px-8 py-3 rounded-full font-bold text-base hover:shadow-2xl hover:shadow-sup-red/25 transition-all duration-300 hover:scale-105 overflow-hidden"
                    >
                        <span className="relative z-10">Записаться на SUP тур</span>
                        <span className="relative z-10 text-lg">→</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                    </a>
                    <p className="text-gray-400 text-xs mt-3">
                        по самой низкой цене — от 1990 ₽
                    </p>
                </div>
            </div>

            {/* Кастомные стили для Swiper */}
            <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #cc3333;
          background: rgba(0,0,0,0.5);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          backdrop-filter: blur(4px);
          transition: all 0.3s;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: #cc3333;
          color: white;
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 14px;
          font-weight: bold;
        }
        .swiper-pagination-bullet {
          background: rgba(255,255,255,0.5);
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #cc3333;
          transform: scale(1.2);
        }
           .swiper-button-next,
  .swiper-button-prev {
    color: #cc3333;
    background: rgba(0,0,0,0.5);
    width: 36px;
    height: 36px;
    border-radius: 50%;
    backdrop-filter: blur(4px);
    transition: all 0.3s;
  }
  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    background: #cc3333;
    color: white;
  }
  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 14px;
    font-weight: bold;
  }
  .swiper-pagination-bullet {
    background: rgba(255,255,255,0.5);
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background: #cc3333;
    transform: scale(1.2);
  }
  
  /* Скрываем стрелки на мобильных */
  @media (max-width: 640px) {
    .swiper-button-next,
    .swiper-button-prev {
      display: none !important;
    }
  }
      `}</style>
        </section>
    )
}