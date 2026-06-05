import { useEffect, useRef } from 'react'

export function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center text-white text-center pt-16">
      <div
        ref={parallaxRef}
        className="absolute top-0 left-0 w-full h-[120%] bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=900&fit=crop")'
        }}
      />
      <div className="absolute inset-0 bg-sup-dark/60 z-10" />
      <div className="relative z-20 px-4">
        <div className="mb-6">
          <span className="text-sup-red text-3xl md:text-5xl font-black tracking-wider">SUP</span>
          <span className="text-white text-3xl md:text-5xl font-black"> PATROL</span>
          <p className="text-gray-300 text-sm tracking-wider mt-1">SNOW EXPRESS</p>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">
          Саптуры в<br />Санкт-Петербурге
        </h1>
        <p className="text-lg md:text-2xl lg:text-3xl mb-6 md:mb-8 drop-shadow-md text-sup-red font-semibold">
          по самой низкой цене
        </p>
        <a
          href="#zakaz"
          className="inline-block bg-sup-red text-white px-8 md:px-12 py-3 md:py-4 rounded-full text-base md:text-lg font-bold transition-all hover:bg-burgundy-light hover:scale-105 shadow-lg"
        >
          Заказать SUP тур
        </a>
      </div>
    </section>
  )
}