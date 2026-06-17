import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '../../lib/cn'

export type ButtonVariant = 'primary' | 'form' | 'close'
export type ButtonSize = 'sm' | 'md' | 'lg'

const baseClasses =
  'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sup-blue/50 focus-visible:ring-offset-2 disabled:pointer-events-none motion-reduce:transition-none motion-reduce:hover:scale-100'

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'group relative overflow-hidden rounded-full bg-gradient-to-r from-sup-blue to-sup-blue-dark text-white shadow-lg shadow-sup-blue/20 hover:scale-[1.04] hover:shadow-xl hover:shadow-sup-blue/35 active:scale-[0.98]',
  form: 'w-full rounded-xl bg-gradient-to-r from-sup-blue to-sup-blue-dark text-white shadow-md shadow-sup-blue/15 hover:shadow-lg hover:shadow-sup-blue/30 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-md',
  close:
    'rounded-full bg-gray-100 text-gray-500 hover:bg-sup-blue/10 hover:text-sup-blue hover:scale-110 hover:shadow-md active:scale-95',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-6 py-2.5 text-sm',
  md: 'px-8 py-3 text-base',
  lg: 'px-8 md:px-12 py-3 md:py-4 text-base md:text-lg font-bold',
}

type BaseProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  className?: string
  children: ReactNode
}

type ButtonAsButton = BaseProps &
  Omit<ComponentPropsWithoutRef<'button'>, keyof BaseProps> & { href?: undefined }

type ButtonAsLink = BaseProps &
  Omit<ComponentPropsWithoutRef<'a'>, keyof BaseProps> & { href: string }

export type ButtonProps = ButtonAsButton | ButtonAsLink

function ButtonShine() {
  return (
    <span
      className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full motion-reduce:transition-none"
      aria-hidden
    />
  )
}

export function Button({
  variant = 'primary',
  size = 'lg',
  fullWidth,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    baseClasses,
    variantClasses[variant],
    variant === 'form' && 'py-3 text-sm',
    variant === 'close' && 'h-8 w-8 text-xl',
    variant === 'primary' && sizeClasses[size],
    fullWidth && variant !== 'form' && 'w-full',
    className,
  )

  const content =
    variant === 'primary' ? (
      <>
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
        <ButtonShine />
      </>
    ) : (
      children
    )

  if ('href' in props && props.href) {
    const { href, ...rest } = props
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    )
  }

  const { type = 'button', ...rest } = props as ButtonAsButton
  return (
    <button type={type} className={classes} {...rest}>
      {content}
    </button>
  )
}
