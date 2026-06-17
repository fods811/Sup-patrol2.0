import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { ToursCarousel } from '../components/ToursCarousel'
import { Advantages } from '../components/Advantages'
import { Footer } from '../components/Footer'
import { PhotoGallery } from '../components/PhotoGallery'
import { TourDetailsModal } from '../components/ToursDetailsModal'
import { OrderModalProvider } from '../context/OrderModalContext'
import { fetchTours, TOURS_QUERY_KEY } from '../hooks/useTours'
import type { Tour } from '../data/tours'

export const Route = createFileRoute('/')({
  loader: ({ context }) =>
    context.queryClient.ensureQueryData({
      queryKey: TOURS_QUERY_KEY,
      queryFn: fetchTours,
    }),
  component: IndexComponent,
})

function IndexComponent() {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null)
  const [isTourModalOpen, setIsTourModalOpen] = useState(false)

  const handleDetails = (tour: Tour) => {
    setSelectedTour(tour)
    setIsTourModalOpen(true)
  }

  return (
    <OrderModalProvider>
      <div className="bg-sup-blue-light/30">
        <Header />
        <main>
          <Hero />
          <ToursCarousel onDetails={handleDetails} />
          <Advantages />
          <PhotoGallery />
        </main>
        <TourDetailsModal
          tour={selectedTour}
          isOpen={isTourModalOpen}
          onClose={() => setIsTourModalOpen(false)}
        />
        <Footer />
      </div>
    </OrderModalProvider>
  )
}
