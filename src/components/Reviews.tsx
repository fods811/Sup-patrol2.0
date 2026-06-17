import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { REVIEW_SCREENSHOTS, SOURCE_ICONS } from '../data/reviews'
import { OrderButton } from './OrderButton'
import { LazyImage } from './ui/LazyImage'

export function Reviews() {
  return (
    <section id="reviews" className="py-16 md:py-20 px-4 bg-gradient-to-br from-sup-dark via-[#0d3d5c] to-sup-blue-dark relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-sup-blue/20 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-sup-blue-light/10 rounded-full blur-3xl" aria-hidden="true" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Отзывы клиентов
          </h2>
          <div className="w-20 h-0.5 bg-sup-blue mx-auto rounded-full mb-3" />
          <p className="text-gray-300 text-base max-w-2xl mx-auto">
            Реальные скриншоты из социальных сетей
          </p>
        </div>

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
          className="reviews-swiper pb-10"
        >
          {REVIEW_SCREENSHOTS.map((screenshot) => (
            <SwiperSlide key={screenshot.id}>
              <a
                href={screenshot.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-sup-blue/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute top-2 right-2 z-10">
                  <div className="w-7 h-7 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-sm">
                    {SOURCE_ICONS[screenshot.source]}
                  </div>
                </div>

                <div className="relative overflow-hidden">
                  <LazyImage
                    src={screenshot.img}
                    alt={`Отзыв клиента SUP Patrol в ${screenshot.source}`}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-xs text-center">Посмотреть отзыв →</p>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-10">
          <OrderButton size="md">
            Записаться на SUP тур
            <span className="text-lg">→</span>
          </OrderButton>
          <p className="text-gray-400 text-xs mt-3">
            по самой низкой цене — от 1990 ₽
          </p>
        </div>
      </div>
    </section>
  )
}
