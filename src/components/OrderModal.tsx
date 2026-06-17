import { useRef, useState } from 'react';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';
import { formatPhoneInput, validatePhone } from '../lib/phone';
import { openTelegramOrder } from '../lib/telegram';
import { Button } from './ui/Button';
import { FormField, TextInput } from './ui/FormField';
import { Toast } from './ui/Toast';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormErrors {
  name?: string;
  phone?: string;
}

export function OrderModal({ isOpen, onClose }: OrderModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isAgreed, setIsAgreed] = useState(false);
  const [agreeError, setAgreeError] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const detailsRef = useRef<HTMLTextAreaElement>(null);

  useBodyScrollLock(isOpen);

  if (!isOpen) return null;

  const resetForm = () => {
    if (nameRef.current) nameRef.current.value = '';
    if (phoneRef.current) phoneRef.current.value = '';
    if (detailsRef.current) detailsRef.current.value = '';
    setErrors({});
    setIsAgreed(false);
    setAgreeError(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const name = nameRef.current?.value.trim() ?? '';
    const phone = phoneRef.current?.value ?? '';
    const details = detailsRef.current?.value.trim() ?? '';

    const nextErrors: FormErrors = {};
    if (!name) nextErrors.name = 'Укажите ваше имя';
    const phoneError = validatePhone(phone);
    if (phoneError) nextErrors.phone = phoneError;

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    if (!isAgreed) {
      setAgreeError(true);
      return;
    }

    setErrors({});
    setAgreeError(false);
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 400));

    openTelegramOrder({ name, phone, details });

    setIsLoading(false);
    setToast('✅ Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    resetForm();

    setTimeout(() => {
      setToast(null);
      onClose();
    }, 1500);
  };

  return (
    <>
      {toast && <Toast message={toast} />}

      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[1000] flex items-center justify-center p-4 animate-fadeIn"
        onClick={onClose}
      >
        <div
          className="bg-white rounded-2xl w-full max-w-lg relative animate-slideIn shadow-2xl"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="order-modal-title"
        >
          <Button
            variant="close"
            onClick={onClose}
            className="absolute top-4 right-4 z-10"
            aria-label="Закрыть"
          >
            ✕
          </Button>

          <div className="bg-gradient-to-r from-sup-dark to-sup-blue/80 px-6 py-5 pr-12 rounded-t-2xl">
            <h2 id="order-modal-title" className="text-xl md:text-2xl font-bold text-white">
              Заказать SUP тур
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <FormField label="Имя *" error={errors.name}>
              <TextInput
                ref={nameRef}
                type="text"
                placeholder="Как к вам обращаться"
                required
                error={!!errors.name}
              />
            </FormField>

            <FormField label="Телефон *" error={errors.phone}>
              <TextInput
                ref={phoneRef}
                type="tel"
                placeholder="+7 (___) ___-__-__"
                required
                error={!!errors.phone}
                onChange={(e) => {
                  e.target.value = formatPhoneInput(e.target.value);
                  if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                }}
              />
            </FormField>

            <FormField label="Дополнительная информация">
              <textarea
                ref={detailsRef}
                rows={4}
                placeholder="Желаемая дата, количество участников, особые пожелания…"
                className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm outline-none transition-colors focus:border-sup-blue resize-y min-h-[100px]"
              />
            </FormField>

            {/* Чекбокс согласия вместо старого текста */}
            <div className="flex items-start gap-2 text-sm">
              <input
                type="checkbox"
                id="agree"
                checked={isAgreed}
                onChange={(e) => {
                  setIsAgreed(e.target.checked);
                  if (agreeError) setAgreeError(false);
                }}
                className="mt-0.5"
              />
              <label htmlFor="agree" className="text-gray-600 text-xs">
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
    </>
  );
}
