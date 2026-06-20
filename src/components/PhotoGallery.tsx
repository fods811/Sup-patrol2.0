import { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import { Navigation, Pagination, Keyboard } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { LazyImage } from './ui/LazyImage'

const PLACEHOLDER_PHOTOS = [
  '/gallery/1.jpg',
  '/gallery/2.jpg',
  '/gallery/3.jpg',
  '/gallery/4.jpg',
  '/gallery/5.JPG',
  '/gallery/6.JPG',
  '/gallery/7.JPG',
  '/gallery/8.JPG',
  '/gallery/9.jpg',
  '/gallery/10.jpg',
  '/gallery/11.jpg',
]

export function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)
  const swiperRef = useRef<SwiperType | null>(null)
  const hasInteractedRef = useRef(false)

  // Блокировка скролла при открытой модалке
  useEffect(() => {
    if (selectedPhoto) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedPhoto])

  useEffect(() => {
    if (!swiperRef.current) return

    let animationTimer: NodeJS.Timeout
    let returnTimer: NodeJS.Timeout

    const startAnimation = () => {
      if (hasInteractedRef.current || !swiperRef.current) return

      const swiper = swiperRef.current
      const startTranslate = swiper.translate

      // Делаем небольшой сдвиг влево
      swiper.translateTo(startTranslate - 50, 500)

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

  return (
    <section id="gallery" className="py-12 md:py-16 px-4 bg-sup-blue-light/30">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-sup-dark">
            Галерея
          </h2>
          <div className="w-16 h-0.5 bg-sup-blue mx-auto rounded-full" />
        </div>

        <Swiper
          modules={[Navigation, Pagination, Keyboard]}
          navigation
          pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
          slidesPerView={1}
          spaceBetween={12}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          className="photo-swiper pb-10"
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
          onTouchStart={handleInteraction}
          onClick={handleInteraction}
        >
          {PLACEHOLDER_PHOTOS.map((photo, index) => (
            <SwiperSlide key={index}>
              <button
                onClick={() => {
                  handleInteraction()
                  setSelectedPhoto(photo)
                }}
                className="group relative block w-full overflow-hidden rounded-lg border-2 border-transparent hover:border-sup-blue transition-all duration-300 hover:shadow-lg cursor-pointer"
                aria-label={`Открыть фото ${index + 1}`}
              >
                <LazyImage
                  src={photo}
                  alt={`Фото ${index + 1}`}
                  className="w-full h-64 md:h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                  <span className="text-white text-sm font-medium">Нажмите для просмотра</span>
                </div>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal for full-size image */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Просмотр фотографии"
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-sup-blue-light transition-colors z-10"
            onClick={() => setSelectedPhoto(null)}
            aria-label="Закрыть"
          >
            ×
          </button>
          <img
            src={selectedPhoto}
            alt="Полноразмерное фото"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
