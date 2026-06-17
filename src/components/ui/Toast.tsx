import { cn } from '../../lib/cn'

interface ToastProps {
  message: string
  variant?: 'success' | 'error'
}

export function Toast({ message, variant = 'success' }: ToastProps) {
  return (
    <div
      role="status"
      className={cn(
        'fixed top-20 left-1/2 -translate-x-1/2 z-[1100] px-6 py-3 rounded-full shadow-lg animate-fadeIn text-white',
        variant === 'success' ? 'bg-green-500' : 'bg-red-500',
      )}
    >
      {message}
    </div>
  )
}
