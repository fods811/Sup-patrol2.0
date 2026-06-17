import { ADVANTAGES, STATS } from '../data/advantages'
import { OrderButton } from './OrderButton'

export function Advantages() {
  return (
    <section id="advantages" className="py-16 md:py-24 px-4 bg-sup-gray">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center mb-6 text-gray-800 font-bold">
          SUP Patrol — саптуры в Санкт-Петербурге
        </h2>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-gray-600 text-lg leading-relaxed">
            🏄 <strong>Сап бординг в Санкт-Петербурге</strong> — это уникальная возможность увидеть город с воды.
            Мы предлагаем <strong>сап туры утром, днём и на закате</strong> по самым живописным маршрутам:
            каналы, реки, Нева и Финский залив. <strong>Недорогие цены</strong>, опытные инструкторы и полное снаряжение.
          </p>
        </div>

        <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-gray-700">
          Почему выбирают SUP Patrol
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {ADVANTAGES.map((item) => (
            <article
              key={item.title}
              className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-all"
            >
              <div className="text-5xl mb-3" aria-hidden="true">{item.icon}</div>
              <h4 className="font-bold text-sup-blue mb-2">{item.title}</h4>
              <p className="text-sm text-gray-500">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="w-full  py-6 my-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-sup-blue">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <OrderButton>Записаться на SUP тур по самой низкой цене</OrderButton>
        </div>
      </div>
    </section>
  )
}
