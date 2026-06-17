import { HERO_BG } from '../constants/images'
import { useParallax } from '../hooks/useParallax'
import { OrderButton } from './OrderButton'

export function Hero() {
  const parallaxRef = useParallax(0.5)

  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center text-white text-center pt-16">
      <div
        ref={parallaxRef}
        className="absolute top-0 left-0 w-full h-[120%] bg-cover bg-center z-0"
        style={{ backgroundImage: `url("${HERO_BG}")` }}
        role="img"
        aria-label="SUP туры в Санкт-Петербурге"
      />
      <div className="absolute inset-0 bg-sup-dark/50 z-10" />
      <div className="relative z-20 px-4">
        <p className="mb-6">
          <span className="text-sup-blue text-3xl md:text-5xl font-black tracking-wider">SUP</span>
          <span className="text-white text-3xl md:text-5xl font-black"> PATROL</span>
          <span className="block text-white/80 text-m tracking-wider mt-1 font-black">ОТ</span>
          <span className="block text-sup-blue/80 text-sm tracking-wider mt-1 font-black">SNOW EXPRESS</span>
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">
          Саптуры в<br />Санкт-Петербурге
        </h1>
        <p className="text-lg md:text-2xl lg:text-3xl mb-6 md:mb-8 drop-shadow-md text-sup-blue-light font-semibold">
          по самой низкой цене
        </p>
        <OrderButton>Заказать SUP тур</OrderButton>
      </div>
    </section>
  )
}
