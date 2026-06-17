import type { ImgHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'
import { PLACEHOLDER_TOUR } from '../../constants/images'

type LazyImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  fallback?: string
}

export function LazyImage({
  className,
  fallback = PLACEHOLDER_TOUR,
  loading = 'lazy',
  decoding = 'async',
  onError,
  ...props
}: LazyImageProps) {
  return (
    <img
      loading={loading}
      decoding={decoding}
      className={cn(className)}
      onError={(e) => {
        const target = e.target as HTMLImageElement
        if (target.src !== fallback) {
          target.src = fallback
        }
        onError?.(e)
      }}
      {...props}
    />
  )
}
