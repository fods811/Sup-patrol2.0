import type { ReactNode } from 'react'
import { useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Navigation,
  Pagination,
  Keyboard,
  EffectCoverflow,
} from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useTours } from '../hooks/useTours'
import 'swiper/css/effect-coverflow'
import type { Tour } from '../data/tours'
import { Button } from './ui/Button'
import { LazyImage } from './ui/LazyImage'

function ToursSection({ children }: { children: ReactNode }) {
  return (
    <section id="tours" className="py-12 md:py-20 px-4 bg-sup-blue-light/40">
      <div className="max-w-[95%] mx-auto">{children}</div>
    </section>
  )
}

function TourCard({
  tour,
  onDetails,
}: {
  tour: Tour
  onDetails: (tour: Tour) => void
}) {
  const shortAddress =
    tour.address.length > 50
      ? tour.address.substring(0, 50) + '...'
      : tour.address

  return (
    <article className="bg-white rounded-2xl overflow-hidden flex flex-col md:flex-row md:h-[720px] h-auto">
      <div className="md:w-1/2 h-[300px] md:h-full">
        <LazyImage
          src={tour.img}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Правая колонка: убран overflow-y-auto, нет скролла */}
      <div className="md:w-1/2 p-6 md:p-8 flex flex-col h-full">
        <div className="h-[70px] md:h-[80px]">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-sup-blue line-clamp-2 leading-tight">
            {tour.title}
          </h3>
        </div>

        <div className="space-y-0.5 text-sm md:text-base text-gray-700">
          <p>
            <strong>🕐 Время старта:</strong> {tour.time}
          </p>
          <p>
            <strong>📍 Место сбора:</strong> {shortAddress}
          </p>
          <p>
            <strong>⏱ Длительность:</strong> {tour.duration}
          </p>
          <p>
            <strong>⭐️ Уровень:</strong> {tour.level}
          </p>
          <p className="text-xl md:text-2xl font-bold mt-2">
            <strong>💰 Цена:</strong>{' '}
            <span className="text-sup-blue">{tour.price} руб.</span>{' '}
            <span className="text-sm">с человека</span>
          </p>
          {tour.discount && (
            <p className="text-green-600 text-sm font-semibold mt-1">
              🎉 {tour.discount}
            </p>
          )}
        </div>

        <div className="h-[300px] mt-1">
          <iframe
            title={`Карта — ${tour.title}`}
            src={tour.mapEmbedSrc}
            width="100%"
            height="100%"
            frameBorder="0"
            className="rounded-xl shadow-md"
            allowFullScreen
            loading="lazy"
          />
        </div>

        <Button
          size="md"
          fullWidth
          className="relative z-20 mt-2 swiper-no-swiping"
          onClick={(e) => {
            e.stopPropagation()
            onDetails(tour)
          }}
        >
          Подробнее
        </Button>
      </div>
    </article>
  )
}

export function ToursCarousel({
  onDetails,
}: {
  onDetails: (tour: Tour) => void
}) {
  const { data: tours, isLoading, error } = useTours()
  const swiperRef = useRef<SwiperType | null>(null)
  const hasInteractedRef = useRef(false)

  // Анимация подсказки скролла
  useEffect(() => {
    if (!swiperRef.current) return

    let animationTimer: NodeJS.Timeout
    let returnTimer: NodeJS.Timeout

    const startAnimation = () => {
      if (hasInteractedRef.current || !swiperRef.current) return

      const swiper = swiperRef.current
      const startTranslate = swiper.translate

      // Делаем небольшой сдвиг влево
      swiper.translateTo(startTranslate - 80, 500)

      // Возвращаемся обратно через 600ms
      returnTimer = setTimeout(() => {
        if (swiperRef.current) {
          swiperRef.current.translateTo(startTranslate, 500)
        }
      }, 600)
    }

    // Запускаем первую анимацию через 2 секунды
    animationTimer = setTimeout(() => {
      startAnimation()

      // Повторяем каждые 5 секунд
      const repeatTimer = setInterval(() => {
        if (hasInteractedRef.current) {
          clearInterval(repeatTimer)
          return
        }
        startAnimation()
      }, 5000)

      return () => clearInterval(repeatTimer)
    }, 2000)

    return () => {
      clearTimeout(animationTimer)
      clearTimeout(returnTimer)
    }
  }, [])

  const handleInteraction = () => {
    hasInteractedRef.current = true
  }

  if (isLoading) {
    return (
      <ToursSection>
        <div className="text-center">
          <div className="inline-block w-12 h-12 border-4 border-sup-blue border-t-transparent rounded-full animate-spin" />
          <p className="mt-4 text-gray-600">Загрузка туров...</p>
        </div>
      </ToursSection>
    )
  }

  if (error) {
    return (
      <ToursSection>
        <p className="text-center text-red-600">Ошибка загрузки туров</p>
      </ToursSection>
    )
  }

  if (!tours || tours.length === 0) return null

  return (
    <ToursSection>
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-center mb-4 text-gray-800 font-bold">
        Наши SUP туры
      </h2>
      <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
        Выберите идеальное приключение на воде
      </p>

      <Swiper
        modules={[Navigation, Pagination, Keyboard, EffectCoverflow]}
        navigation
        pagination={false}
        keyboard={{ enabled: true }}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.1}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 20,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        rewind
        noSwipingClass="swiper-no-swiping"
        preventClicks={false}
        preventClicksPropagation={false}
        className="pb-12 tours-swiper"
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
        onTouchStart={handleInteraction}
      >
        {tours.map((tour) => (
          <SwiperSlide key={tour.id}>
            <TourCard tour={tour} onDetails={onDetails} />
          </SwiperSlide>
        ))}
      </Swiper>
    </ToursSection>
  )
}
