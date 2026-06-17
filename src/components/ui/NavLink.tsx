import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '../../lib/cn'

type NavLinkVariant = 'desktop' | 'mobile' | 'footer'

const variantClasses: Record<NavLinkVariant, string> = {
  desktop: 'text-gray-800 font-medium text-lg',
  mobile: 'text-xl text-gray-800 py-2',
  footer: 'text-gray-400 text-sm',
}

type NavLinkProps = ComponentPropsWithoutRef<'a'> & {
  variant?: NavLinkVariant
}

export function NavLink({ variant = 'desktop', className, ...props }: NavLinkProps) {
  return (
    <a
      className={cn('hover:text-sup-blue transition-colors', variantClasses[variant], className)}
      {...props}
    />
  )
}
