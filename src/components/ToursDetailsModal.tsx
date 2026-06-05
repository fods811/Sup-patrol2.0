import { useEffect, useRef, useState } from 'react'
import type { Tour } from '../data/tours'

interface TourDetailsModalProps {
  tour: Tour | null
  isOpen: boolean
  onClose: () => void
  onOrder: (tour: Tour, comment: string) => void
}

export function TourDetailsModal({ tour, isOpen, onClose, onOrder }: TourDetailsModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const nameRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)
  const dateRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen || !tour) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const name = nameRef.current?.value || ''
    let phone = phoneRef.current?.value || ''
    const date = dateRef.current?.value || ''
    
    // Очистка телефона от нецифровых символов
    const cleanPhone = phone.replace(/\D/g, '')
    if (cleanPhone.length < 10) {
      alert('Введите корректный номер телефона (не менее 10 цифр)')
      return
    }
    
    setIsLoading(true)
    
    // Имитация отправки (задержка)
    await new Promise(resolve => setTimeout(resolve, 800))
    
    const message = `🛶 НОВАЯ ЗАЯВКА!\n\n🏄 Тур: ${tour.title}\n💰 Цена: ${tour.price} руб.\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n📅 Дата: ${date || 'не указана'}`
    const telegramLink = `https://t.me/snow_express?text=${encodeURIComponent(message)}`
    
    // Открываем Telegram в новом окне
    window.open(telegramLink, '_blank')
    
    setIsLoading(false)
    setShowNotification(true)
    
    // Закрываем окно через 1.5 секунды
    setTimeout(() => {
      setShowNotification(false)
      onClose()
    }, 1500)
  }

  // Маска для телефона
  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '')
    if (value.length > 11) value = value.slice(0, 11)
    let formatted = ''
    if (value.length > 0) formatted = '+7'
    if (value.length > 1) formatted += ` (${value.slice(1, 4)}`
    if (value.length > 4) formatted += `) ${value.slice(4, 7)}`
    if (value.length > 7) formatted += `-${value.slice(7, 9)}`
    if (value.length > 9) formatted += `-${value.slice(9, 11)}`
    e.target.value = formatted
  }

  return (
    <>
      {/* Уведомление об успешной отправке */}
      {showNotification && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[1100] bg-green-500 text-white px-6 py-3 rounded-full shadow-lg animate-fadeIn">
          ✅ Заявка отправлена! Мы свяжемся с вами в ближайшее время.
        </div>
      )}

      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[1000] flex items-center justify-center p-4 animate-fadeIn"
        onClick={onClose}
      >
        <div 
          className="bg-white rounded-2xl w-full max-w-4xl max-h-[85vh] relative animate-slideIn shadow-2xl flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Кнопка закрытия */}
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-sup-red transition-all flex items-center justify-center text-xl z-10"
          >
            ×
          </button>

          {/* Заголовок */}
          <div className="bg-gradient-to-r from-sup-dark to-sup-red/80 px-6 py-5 pr-12 rounded-t-2xl shrink-0">
            <h2 className="text-xl md:text-2xl font-bold text-white leading-tight">
              {tour.title}
            </h2>
            <div className="flex flex-wrap gap-3 mt-2 text-white/70 text-xs">
              <span>🕐 {tour.time}</span>
              <span>⏱ {tour.duration}</span>
              <span>⭐️ {tour.level}</span>
              <span>📍 {tour.address.length > 50 ? tour.address.substring(0, 50) + '...' : tour.address}</span>
            </div>
          </div>

          {/* Контент */}
          <div className="flex-1 overflow-hidden flex flex-col md:flex-row">
            {/* Левая колонка: Цена + Форма */}
            <div className="md:w-2/5 p-5 flex flex-col border-b md:border-b-0 md:border-r border-gray-100">
              {/* Цена и скидка */}
              <div className="text-center mb-5">
                <span className="text-gray-500 text-sm">Стоимость</span>
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  <p className="text-3xl font-bold text-sup-red">{tour.price} ₽</p>
                  <span className="text-gray-400 text-sm">с человека</span>
                </div>
                {tour.discount && (
                  <div className="bg-green-100 rounded-lg px-3 py-1 inline-block mt-2">
                    <p className="text-green-700 font-semibold text-sm">🎉 {tour.discount}</p>
                  </div>
                )}
              </div>

              {/* Форма заказа */}
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-800 mb-3 text-center text-base">
                  Заказать тур
                </h3>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input ref={nameRef} type="text" placeholder="Имя *" required className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-sup-red outline-none" />
                  <input 
                    ref={phoneRef} 
                    type="tel" 
                    placeholder="Телефон *" 
                    required 
                    onChange={handlePhoneInput}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-sup-red outline-none" 
                  />
                  <input ref={dateRef} type="date" placeholder="Дата" className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-sup-red outline-none" />
                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-sup-red text-white py-2 rounded-lg font-semibold text-sm hover:bg-burgundy-light transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Отправка...
                      </>
                    ) : (
                      'Отправить заявку'
                    )}
                  </button>
                  <p className="text-gray-400 text-[10px] text-center">Нажимая кнопку, вы соглашаетесь с обработкой данных</p>
                </form>
              </div>
            </div>

            {/* Правая колонка: Описание */}
            <div className="md:w-3/5 p-5 overflow-y-auto">
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2 text-base">
                  <span className="text-xl">📖</span> Описание тура
                </h3>
                <div 
                  className="prose prose-sm max-w-none text-gray-600 space-y-2 text-sm"
                  dangerouslySetInnerHTML={{ __html: tour.description }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}