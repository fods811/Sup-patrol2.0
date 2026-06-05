import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Keyboard } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useTours } from '../hooks/useTours'
import type { Tour } from '../data/tours'

function TourCard({ tour, onDetails }: { tour: Tour; onDetails: (tour: Tour) => void }) {
  const shortAddress = tour.address.length > 50 ? tour.address.substring(0, 50) + '...' : tour.address
  const simpleMapUrl = `https://yandex.ru/map-widget/v1/?ll=30.331851%2C59.942458&z=15&pt=30.331851%2C59.942458%2Cpmrdl`

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row h-[660px] md:h-[720px]">
      <div className="md:w-1/2 h-[300px] md:h-full">
        <img 
          src={tour.img} 
          alt={tour.title} 
          className="w-full h-full object-cover" 
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x600?text=SUP'
          }}
        />
      </div>
      
      <div className="md:w-1/2 p-6 md:p-8 flex flex-col h-full overflow-y-auto">
        <div className="h-[70px] md:h-[80px]">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-sup-red line-clamp-2 leading-tight">
            {tour.title}
          </h3>
        </div>
        
        <div className="space-y-0.5 text-sm md:text-base text-gray-700 h-[260px] md:h-[280px] overflow-y-auto">
          <p><strong>🕐 Время старта:</strong> {tour.time}</p>
          <p><strong>📍 Место сбора:</strong> {shortAddress}</p>
          <p><strong>⏱ Длительность:</strong> {tour.duration}</p>
          {tour.distance && <p><strong>📏 Расстояние:</strong> {tour.distance}</p>}
          <p><strong>⭐️ Уровень:</strong> {tour.level}</p>
          <p className="text-xl md:text-2xl font-bold mt-2">
            <strong>💰 Цена:</strong> <span className="text-sup-red">{tour.price} руб.</span>{' '}
            <span className="text-sm">с человека</span>
          </p>
          {tour.discount && (
            <p className="text-green-600 text-sm font-semibold mt-1">🎉 {tour.discount}</p>
          )}
        </div>
        
        <div className="h-[300px] mt-1">
          <iframe
            title={`Карта ${tour.title}`}
            src={simpleMapUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            className="rounded-xl shadow-md"
            allowFullScreen
          />
        </div>
        
        {/* Кнопка ПОДРОБНЕЕ вместо ЗАКАЗАТЬ */}
        <button
          onClick={() => onDetails(tour)}
          className="w-full bg-sup-red text-white py-2.5 md:py-3 rounded-full font-bold text-base md:text-lg hover:bg-burgundy-light transition-all hover:scale-105 mt-2"
        >
          Подробнее
        </button>
      </div>
    </div>
  )
}

export function ToursCarousel({ onDetails }: { onDetails: (tour: Tour) => void }) {
  const { data: tours, isLoading, error } = useTours()

  if (isLoading) {
    return (
      <section id="tours" className="py-12 md:py-20 px-4 bg-gray-100">
        <div className="container mx-auto text-center">
          <div className="inline-block w-12 h-12 border-4 border-sup-red border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600">Загрузка туров...</p>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="tours" className="py-12 md:py-20 px-4 bg-gray-100">
        <div className="container mx-auto text-center">
          <p className="text-red-600">Ошибка загрузки туров</p>
        </div>
      </section>
    )
  }

  if (!tours || tours.length === 0) return null

  return (
    <section id="tours" className="py-12 md:py-20 px-4 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center mb-4 text-gray-800 font-bold">
          Наши SUP туры
        </h2>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          Выберите идеальное приключение на воде
        </p>

        <Swiper
          modules={[Navigation, Pagination, Keyboard]}
          navigation
          pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          className="pb-12"
        >
          {tours.map((tour) => (
            <SwiperSlide key={tour.id}>
              <TourCard tour={tour} onDetails={onDetails} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}