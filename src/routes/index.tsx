import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { ToursCarousel } from '../components/ToursCarousel'
import { Advantages } from '../components/Advantages'
import { Footer } from '../components/Footer'
import { FloatingButton } from '#/components/FloatingButton'
import { Reviews } from '../components/Reviews'
import { TourDetailsModal } from '#/components/ToursDetailsModal'
import type { Tour } from '../data/tours'

export const Route = createFileRoute('/')({
  component: IndexComponent,
})

function IndexComponent() {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleDetails = (tour: Tour) => {
    setSelectedTour(tour)
    setIsModalOpen(true)
  }

  const handleOrder = (tour: Tour, comment: string) => {
    // Отправка заявки в Telegram
    const message = `НОВАЯ ЗАЯВКА!\nТур: ${tour.title}\nЦена: ${tour.price} руб.\nКомментарий: ${comment || 'нет'}`
    const telegramLink = `https://t.me/snow_express?text=${encodeURIComponent(message)}`
    window.open(telegramLink, '_blank')
  }

  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <ToursCarousel onDetails={handleDetails} />
      <Advantages />
      <Reviews />
      <TourDetailsModal
        tour={selectedTour}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onOrder={handleOrder}
      />
      <Footer />
      <FloatingButton />
    </div>
  )
}