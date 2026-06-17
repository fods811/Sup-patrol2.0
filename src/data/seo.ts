export const SITE_URL = 'https://sup-patrol.ru'
export const SITE_NAME = 'SUP Patrol'

export const SEO = {
  title: 'SUP Patrol — саптуры в Санкт-Петербурге | SUP туры по каналам и Неве',
  description:
    'Сап бординг в Санкт-Петербурге от SUP Patrol: утренние, дневные и закатные SUP туры по каналам, Неве и Финскому заливу. Опытные инструкторы, снаряжение включено, цены от 1990 ₽.',
  keywords:
    'саптуры санкт-петербург, sup тур спб, сап бординг петербург, sup patrol, прогулки на сапе, аренда сапа спб',
  ogImage: `${SITE_URL}/logo.png`,
} as const

export const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SportsActivityLocation',
  name: SITE_NAME,
  description: SEO.description,
  url: SITE_URL,
  telephone: ['+78129801370', '+79533701370'],
  email: 'info@sup-patrol.ru',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Пр. Энгельса д.111',
    addressLocality: 'Санкт-Петербург',
    addressCountry: 'RU',
  },
  priceRange: '₽₽',
  openingHours: 'Mo-Su 06:00-21:00',
  sameAs: [
    'https://t.me/snow_express',
    'https://vk.com/suppatrol',
    'https://instagram.com/suppatrol',
  ],
}
