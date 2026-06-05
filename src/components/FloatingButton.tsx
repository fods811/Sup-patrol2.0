import { useState, useEffect } from 'react'

export function FloatingButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  if (!isVisible) return null

  return (
    <a
      href="#zakaz"
      className="fixed bottom-6 right-6 z-50 bg-sup-red text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-burgundy-light transition-all hover:scale-110"
    >
      <span className="text-2xl">📝</span>
    </a>
  )
}