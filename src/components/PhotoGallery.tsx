import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { LazyImage } from './ui/LazyImage'

const PLACEHOLDER_PHOTOS = [
  '/tours/spas.JPG',
  'https://placehold.co/800x600/015fa5/ffffff?text=Фото+2',
  'https://placehold.co/800x600/b5dff5/017ece?text=Фото+3',
  'https://placehold.co/800x600/1a1a1a/ffffff?text=Фото+4',
  'https://placehold.co/800x600/f5f5f5/017ece?text=Фото+5',
  'https://placehold.co/800x600/017ece/ffffff?text=Фото+6',
]

export function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)

  return (
    <section className="py-8 md:py-12 px-4 bg-sup-blue-light/30">
      <div className="container mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-sup-dark">
            Галерея
          </h2>
          <div className="w-16 h-0.5 bg-sup-blue mx-auto rounded-full" />
        </div>

        <Swiper
          modules={[Navigation, Pagination, Keyboard, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          slidesPerView={1}
          spaceBetween={12}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          className="photo-swiper pb-8"
        >
          {PLACEHOLDER_PHOTOS.map((photo, index) => (
            <SwiperSlide key={index}>
              <button
                onClick={() => setSelectedPhoto(photo)}
                className="group relative block w-full overflow-hidden rounded-lg border-2 border-transparent hover:border-sup-blue transition-all duration-300 hover:shadow-lg cursor-pointer"
                aria-label={`Открыть фото ${index + 1}`}
              >
                <LazyImage
                  src={photo}
                  alt={`Фото ${index + 1}`}
                  className="w-full h-48 md:h-56 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
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
