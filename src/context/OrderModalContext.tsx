import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import type { ReactNode } from 'react'
import type { Tour } from '../data/tours'
import { OrderModal } from '../components/OrderModal'
import { TourDetailsModal } from '#/components/ToursDetailsModal'

type ModalState =
  | { kind: 'closed' }
  | { kind: 'order' } // общая форма заказа
  | { kind: 'tour'; tour: Tour }

interface OrderModalContextValue {
  openOrderModal: (tour?: Tour) => void
  closeOrderModal: () => void
}

const OrderModalContext = createContext<OrderModalContextValue | null>(null)

export function OrderModalProvider({ children }: { children: ReactNode }) {
  const [modalState, setModalState] = useState<ModalState>({ kind: 'closed' })

  const openOrderModal = useCallback((tour?: Tour) => {
    if (tour) {
      setModalState({ kind: 'tour', tour })
    } else {
      setModalState({ kind: 'order' })
    }
  }, [])

  const closeOrderModal = useCallback(() => {
    setModalState({ kind: 'closed' })
  }, [])

  // Обработка хеша #zakaz
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#zakaz') {
        openOrderModal() // открываем общую форму
        const cleanUrl = window.location.pathname + window.location.search
        history.replaceState(null, '', cleanUrl)
      }
    }

    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [openOrderModal])

  const renderModal = () => {
    switch (modalState.kind) {
      case 'closed':
        return null
      case 'order':
        return <OrderModal isOpen={true} onClose={closeOrderModal} />
      case 'tour':
        return (
          <TourDetailsModal
            tour={modalState.tour}
            isOpen={true}
            onClose={closeOrderModal}
          />
        )
    }
  }

  return (
    <OrderModalContext.Provider value={{ openOrderModal, closeOrderModal }}>
      {children}
      {renderModal()}
    </OrderModalContext.Provider>
  )
}

export function useOrderModal() {
  const context = useContext(OrderModalContext)
  if (!context) {
    throw new Error('useOrderModal must be used within OrderModalProvider')
  }
  return context
}
