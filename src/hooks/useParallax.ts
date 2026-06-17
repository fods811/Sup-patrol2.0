import { useEffect, useRef } from 'react'

export function useParallax(factor = 0.5) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let rafId = 0

    const update = () => {
      if (ref.current) {
        ref.current.style.transform = `translateY(${window.scrollY * factor}px)`
      }
    }

    const onScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', onScroll)
    }
  }, [factor])

  return ref
}
