import { forwardRef  } from 'react'
import type {InputHTMLAttributes} from 'react';
import { cn } from '../../lib/cn'

interface FormFieldProps {
  label: string
  error?: string | null
  children: React.ReactNode
  className?: string
}

export function FormField({ label, error, children, className }: FormFieldProps) {
  return (
    <div className={cn('space-y-1', className)}>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      {children}
      {error && <p className="text-red-500 text-xs" role="alert">{error}</p>}
    </div>
  )
}

const inputClassName =
  'w-full px-3 py-2 rounded-lg border text-sm outline-none transition-colors focus:border-sup-blue'

export const TextInput = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement> & { error?: boolean }
>(function TextInput({ error, className, ...props }, ref) {
  return (
    <input
      ref={ref}
      className={cn(inputClassName, error ? 'border-red-400' : 'border-gray-200', className)}
      {...props}
    />
  )
})
