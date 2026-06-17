export interface Tour {
  id: number
  title: string
  img: string
  time: string
  address: string
  duration: string
  level: string
  price: string
  discount: string | null
  link: string
  description: string
  mapEmbedSrc: string
}

export const toursData: Tour[] = [
  {
    id: 1,
    title: 'Сап тур Рассвет «Спас на крови»',
    img: '/tours/spas.JPG',
    time: '6:00',
    address: 'Набережная Лебяжьей канавки (Дворцовая наб. д.2)',
    duration: '1,5-2 часа',
    level: 'Средне-легкий',
    price: '2490',
    discount: 'скидка 50% каждому второму (1250 руб.)',
    link: '/sap-tur-utro.html',
    mapEmbedSrc:
      'https://yandex.ru/map-widget/v1/?ll=30.331851%2C59.942458&mode=usermaps&source=constructorLink&um=constructor%3A515e70d289d3f4a2175a9162890b7edca94528bd02e4e75a001caef7da7adf64&z=14',
    description: `Сап прогулки Рассвет "Исторический центр", с нами вы проплывете вдоль "Спаса на крови", "Казанского собора", "Летнего Сада", "Михайловского замка", "Зимняя канавка", "Эрмитаж" и так же мы выйдем в открытую Неву и проплывем вдоль Стрелки Васильевского острова и Петропавловской крепости.`,
  },
  {
    id: 2,
    title: 'Сап тур «Новая Голландия»',
    img: '/tours/goland.jpg',
    time: '6:00',
    address: 'Санкт-Петербург, набережная Крюкова канала д.20-22',
    duration: '1,5-2 часа',
    level: 'Средне-легкий',
    price: '2490',
    discount: null,
    link: '/sap-tur-novaya-gollandia.html',
    mapEmbedSrc:
      'https://yandex.ru/map-widget/v1/?ll=30.299012%2C59.925043&mode=usermaps&source=constructorLink&um=constructor%3Ad2e52a04623548b43b743f67c10fcf227a91024d0af61132ad4c0618fa467916&z=13',
    description: `Отправляемся в живописную часть Петербурга, пройдем на САП досках мимо «Новой Голландии» и углубимся в центральную часть острова.
Проплывем под мостиками Крюкова канала и реки Мойки, сделаем красивые Фото на всем маршруте.
Вся прогулка проходит в сопровождение Инструктора/Гида/Спасателя`,
  },
  {
    id: 3,
    title: 'Сап прогулка «Рассвет Авроры»',
    img: '/tours/avrora.jpg',
    time: '6:00',
    address: 'Санкт-Петербург, Петровская набережная',
    duration: '1,5-2 часа',
    level: 'Легкий',
    price: '2490',
    discount: null,
    link: '/sap-tur-rassvet-avrori.html',
    mapEmbedSrc:
      'https://yandex.ru/map-widget/v1/?ll=30.333942%2C59.954222&mode=usermaps&source=constructorLink&um=constructor%3Ae998691a79c8808351f90b1328079657fda449a0102a260be7cba6dccadf0b59&z=15.5',
    description: `Отправляемся в центральную часть Петербурга, пройдем на САП досках вдоль Петровской набережной до Великого Военного Корабля-музея «Аврора»
Проплывем под Троицким мостом и полюбуемся на центральную акваторию СПБ с воды, сделаем красивые Фото на всем маршруте.
Вся прогулка проходит в сопровождение Инструктора/Гида/Спасателя`,
  },
  {
    id: 4,
    title: 'Каналы Каменного острова',
    img: '/tours/kamen.jpg',
    time: '15:00',
    address: 'Санкт-Петербург, Каменный остров',
    duration: '1,5-2 часа',
    level: 'Средне-легкий',
    price: '1990',
    discount: 'скидка 50% каждому второму (1000 руб.)',
    link: '/sap-tur-den.html',
    mapEmbedSrc:
      'https://yandex.ru/map-widget/v1/?ll=30.280030%2C59.978230&mode=usermaps&source=constructorLink&um=constructor%3Ad5c8d146319da397f29da1b969a7a340dbdb7d0e077c0f7ad03215fb56cda9e6&z=14',
    description: `Сап прогулка «Парковые острова» – «Каналы каменного острова»,
Мы пройдем по Большому и Малому каналу Каменного острова на сап досках , с выходом в реку Крестовка и в Большую Невку, на всем пути нам будут встречаться живописные участки, которые можно разглядеть только с воды, мы покатаемся на легких волнах от проплывающих катеров, и сделаем множество крутых фото для вас.`,
  },
  {
    id: 5,
    title: 'Закат на Лахте',
    img: '/tours/lahta.jpg',
    time: '~19:00',
    address: 'Санкт-Петербург, Богатырский пр. 66 к.1',
    duration: '1,5-2 часа',
    level: 'Легкий',
    price: '1990',
    discount: 'скидка 50% каждому второму (1000 руб.)',
    link: '/sap-tur-zakat.html',
    mapEmbedSrc:
      'https://yandex.ru/map-widget/v1/?ll=30.186350%2C60.002955&mode=usermaps&source=constructorLink&um=constructor%3A3fa2632a86b984847e713b43edd125db2ff0d25ded489a2517caf2247cd120e1&z=13',
    description: `Один из самых популярных маршрутов. Ежедневно в теплую погоду, сюда приходят посмотреть на закат тысячи не равнодушных. Прогулка проходит в спокойном темпе по периметру оз. разлив Лахтинский.
На всем пути делаем профессиональные фото.`,
  },
  {
    id: 6,
    title: 'Закат у парка 300 летия',
    img: '/tours/300.JPG',
    time: '~19:00',
    address: 'Санкт-Петербург, Ломанная аллея',
    duration: '2-2,5 часа',
    level: 'Легкий',
    price: '2800',
    discount: null,
    link: '/sap-tur-300.html',
    mapEmbedSrc:
      'https://yandex.ru/map-widget/v1/?ll=30.259261%2C59.981266&mode=usermaps&source=constructorLink&um=constructor%3Aca5586ae41e1aed6a2c8a988999cac361e9927b8045427be159f20542a733bf7&z=13',
    description: `Самый продолжительный и уникальный маршрут. Наша Сап прогулка начинается с берегов Каменного острова, далее мы движемся вдоль Елагина острова в сторону Парка 300 лет. На маршруте нас ждут Новый Яхтенный мост, мост ЗСД, вид на Елагин остров, Стадион Зенит арена, и кульминацией всего этого, нас ждет вид на закат с видом на Лахта центр.
Обратно плыть против течения не нужно, нас доставит до точки старта комфортабельное такси.
На всем маршруте делаем профессиональные фото.`,
  },
  {
    id: 7,
    title: 'Самостоятельная сап прогулка',
    img: '/tours/arenda.jpg',
    time: 'Выбираете самостоятельно!',
    address: 'Санкт-Петербург, уточняйте при бронировании',
    duration: 'сутки',
    level: 'на ваше усмотрение!',
    price: 'от 700',
    discount: null,
    link: '/arenda.html',
    mapEmbedSrc: `https://yandex.ru/map-widget/v1/?ll=30.321364%2C59.932327&mode=usermaps&source=constructorLink&um=constructor%3Af8c53a1683bc9aadc30818a5d981231ac7b283901e495cba738e1d5d9dfa71fa&z=13`,
    description: `У нас появилась дополнительная услуга аренда сап досок
В нашем прокате вы можете самостоятельно арендовать сап серф на любое время
В стоимость входит весло, сап, лишь, рюкзак и насос.
Дополнительно можно взять чехол для телефона, спасательный жилет и гермомешок.
За взятый на прокат саб в спб нужно оставить залог`,
  },
]
