import { useRef, useState } from 'react'
import type { Tour } from '../data/tours'
import { useBodyScrollLock } from '../hooks/useBodyScrollLock'
import { formatPhoneInput, validatePhone } from '../lib/phone'
import { sanitizeHtml } from '../lib/sanitize'
import { submitTelegramOrder } from '../lib/telegram'
import { Button } from './ui/Button'
import { Toast } from './ui/Toast'

interface TourDetailsModalProps {
  tour: Tour | null
  isOpen: boolean
  onClose: () => void
}

export function TourDetailsModal({
  tour,
  isOpen,
  onClose,
}: TourDetailsModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [toast, setToast] = useState<string | null>(null)
  const [phoneError, setPhoneError] = useState<string | null>(null)
  const [isAgreed, setIsAgreed] = useState(false)
  const [agreeError, setAgreeError] = useState(false)

  const nameRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)
  const dateRef = useRef<HTMLInputElement>(null)

  useBodyScrollLock(isOpen)

  if (!isOpen || !tour) return null

  const sanitizedDescription = sanitizeHtml(tour.description)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const name = nameRef.current?.value.trim() ?? ''
    const phone = phoneRef.current?.value ?? ''
    const date = dateRef.current?.value ?? ''

    const error = validatePhone(phone)
    if (error) {
      setPhoneError(error)
      return
    }
    setPhoneError(null)

    if (!isAgreed) {
      setAgreeError(true)
      return
    }
    setAgreeError(false)

    setIsLoading(true)

    try {
      await submitTelegramOrder({
        name,
        phone,
        date: date || undefined,
        tourTitle: tour.title,
        tourPrice: tour.price,
      })
      setToast('✅ Заявка отправлена! Мы свяжемся с вами в ближайшее время.')

      setTimeout(() => {
        setToast(null)
        onClose()
      }, 1500)
    } catch {
      setToast('❌ Не удалось отправить заявку. Попробуйте позже или позвоните нам.')
      setTimeout(() => setToast(null), 3000)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {toast && <Toast message={toast} />}

      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[1000] flex items-center justify-center p-4 animate-fadeIn"
        onClick={onClose}
      >
        <div
          className="bg-white rounded-2xl w-full max-w-4xl max-h-[85vh] relative animate-slideIn shadow-2xl flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <Button
            variant="close"
            onClick={onClose}
            className="absolute top-4 right-4 z-10"
            aria-label="Закрыть"
          >
            ✕
          </Button>

          <div className="bg-gradient-to-r from-sup-dark to-sup-blue/80 px-6 py-5 pr-12 rounded-t-2xl shrink-0">
            <h2 className="text-xl md:text-2xl font-bold text-white leading-tight">
              {tour.title}
            </h2>
            <div className="flex flex-wrap gap-3 mt-2 text-white/70 text-xs">
              <span>🕐 {tour.time}</span>
              <span>⏱ {tour.duration}</span>
              <span>⭐️ {tour.level}</span>
              <span>
                📍{' '}
                {tour.address.length > 50
                  ? tour.address.substring(0, 50) + '...'
                  : tour.address}
              </span>
            </div>
          </div>

          <div className="flex-1 overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-2/5 p-5 flex flex-col border-b md:border-b-0 md:border-r border-gray-100">
              <div className="text-center mb-5">
                <span className="text-gray-500 text-sm">Стоимость</span>
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  <p className="text-3xl font-bold text-sup-blue">
                    {tour.price} ₽
                  </p>
                  <span className="text-gray-400 text-sm">с человека</span>
                </div>
                {tour.discount && (
                  <div className="bg-green-100 rounded-lg px-3 py-1 inline-block mt-2">
                    <p className="text-green-700 font-semibold text-sm">
                      🎉 {tour.discount}
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-800 mb-3 text-center text-base">
                  Заказать тур
                </h3>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    ref={nameRef}
                    type="text"
                    placeholder="Имя *"
                    required
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-sup-blue outline-none"
                  />
                  <div>
                    <input
                      ref={phoneRef}
                      type="tel"
                      placeholder="Телефон *"
                      required
                      onChange={(e) => {
                        e.target.value = formatPhoneInput(e.target.value)
                        if (phoneError) setPhoneError(null)
                      }}
                      className={`w-full px-3 py-2 rounded-lg border text-sm focus:border-sup-blue outline-none ${phoneError ? 'border-red-400' : 'border-gray-200'}`}
                    />
                    {phoneError && (
                      <p className="text-red-500 text-xs mt-1">{phoneError}</p>
                    )}
                  </div>
                  <input
                    ref={dateRef}
                    type="date"
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-sup-blue outline-none"
                  />

                  {/* Чекбокс согласия вместо старого текста */}
                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="agree-modal"
                      checked={isAgreed}
                      onChange={(e) => {
                        setIsAgreed(e.target.checked)
                        if (agreeError) setAgreeError(false)
                      }}
                      className="mt-0.5"
                    />
                    <label htmlFor="agree-modal" className="text-gray-600 text-xs">
                      Я ознакомлен и согласен с{' '}
                      <a
                        href="https://disk.yandex.ru/i/Pg2zsIhGvoeqVw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sup-blue underline"
                      >
                        Политикой обработки персональных данных
                      </a>{' '}
                      и{' '}
                      <a
                        href="https://disk.yandex.ru/i/ld9oIYa_uCrDhw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sup-blue underline"
                      >
                        Договором публичной оферты
                      </a>
                    </label>
                  </div>
                  {agreeError && (
                    <p className="text-red-500 text-xs">Необходимо согласие на обработку персональных данных</p>
                  )}

                  <Button type="submit" variant="form" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Отправка...
                      </>
                    ) : (
                      'Отправить заявку'
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Правая колонка — описание тура. Показывается только на десктопе (≥1024px) */}
            <div className="hidden md:block md:w-3/5 p-5 overflow-y-auto">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-start gap-3 mb-4">
                  <h3 className="font-bold text-gray-800 text-xl">Подробности тура</h3>
                </div>
                <div className="relative">
                  {sanitizedDescription ? (
                    <div
                      className="prose prose-base max-w-none text-gray-700 space-y-3 text-base leading-relaxed [&_strong]:text-sup-blue [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-1"
                      dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
                    />
                  ) : (
                    <p className="text-gray-400 text-sm text-center py-6 italic">
                      Подробное описание тура скоро появится
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}