export interface Tour {
    id: number
    title: string
    img: string
    time: string
    address: string
    duration: string
    distance: string | null
    level: string
    price: string
    discount: string | null
    link: string
    description: string   // новое поле
}

export const toursData: Tour[] = [
    {
        id: 1,
        title: "Сап тур Рассвет «Спас на крови»",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
        time: "6:00",
        address: "Санкт-Петербург, набережная Лебяжьей канавки (Дворцовая наб. д.2)",
        duration: "1,5-2 часа",
        distance: "3-4 км",
        level: "Средне-легкий",
        price: "2490",
        discount: "скидка 50% каждому второму (1250 руб.)",
        link: "/sap-tur-utro.html",
        description: `
        <b>Подготовка:</b><br/>
        - Выдаем необходимый инвентарь: Сап, весло, спасательный жилет, шлем.<br/>
        - Проводим полный инструктаж от инструктора.<br/>
        - Выдаем водонепроницаемый чехол.<br/>
        - На протяжении всего маршрута делаем фото и видео всех участников!<br/><br/>
        
        <b>План маршрута:</b><br/>
        Утренний сап тур это всегда возможность увидеть удивительные красоты в центре Питера!<br/>
        Посмотреть на самый красивый город с воды! И найти новые ракурсы нашего города!<br/>
        Вы насладитесь необычными видами Северной Венеции!<br/><br/>
        
        Сап прогулки Рассвет "Исторический центр", с нами вы проплывете вдоль "Спаса на крови", "Казанского собора",<br/>
        "Летнего Сада", "Михайловского замка", "Зимняя канавка", "Эрмитаж" и так же мы выйдем в открытую Неву<br/>
        и проплывем вдоль Стрелки Васильевского острова и Петропавловской крепости.
      `
    },
    // {
    //     id: 2,
    //     title: "Сап тур «Новая Голландия»",
    //     img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
    //     time: "6:00",
    //     address: "Санкт-Петербург, набережная Крюкова канала д.20-22",
    //     duration: "1,5-2 часа",
    //     distance: "3-4 км",
    //     level: "Средне-легкий",
    //     price: "2490",
    //     discount: null,
    //     link: "/sap-tur-novaya-gollandia.html"
    // },
    // {
    //     id: 3,
    //     title: "Сап прогулка «Рассвет Авроры»",
    //     img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
    //     time: "6:00",
    //     address: "Санкт-Петербург, Петровская набережная",
    //     duration: "1,5-2 часа",
    //     distance: "3-4 км",
    //     level: "Легкий",
    //     price: "2490",
    //     discount: null,
    //     link: "/sap-tur-rassvet-avrori.html"
    // },
    // {
    //     id: 4,
    //     title: "Каналы Каменного острова",
    //     img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
    //     time: "15:00",
    //     address: "Санкт-Петербург, Каменный остров",
    //     duration: "1,5-2 часа",
    //     distance: "3-4 км",
    //     level: "Средне-легкий",
    //     price: "1990",
    //     discount: "скидка 50% каждому второму (1000 руб.)",
    //     link: "/sap-tur-den.html"
    // },
    // {
    //     id: 5,
    //     title: "Закат на Лахте",
    //     img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
    //     time: "~19:00",
    //     address: "Санкт-Петербург, Богатырский пр. 66 к.1",
    //     duration: "1,5-2 часа",
    //     distance: "3-4 км",
    //     level: "Легкий",
    //     price: "1990",
    //     discount: "скидка 50% каждому второму (1000 руб.)",
    //     link: "/sap-tur-zakat.html"
    // },
    // {
    //     id: 6,
    //     title: "Закат у парка 300 летия",
    //     img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
    //     time: "~19:00",
    //     address: "Санкт-Петербург, Ломанная аллея",
    //     duration: "2-2,5 часа",
    //     distance: "3-4 км",
    //     level: "Легкий",
    //     price: "2800",
    //     discount: null,
    //     link: "/sap-tur-300.html"
    // },
    // {
    //     id: 7,
    //     title: "Самостоятельная сап прогулка",
    //     img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
    //     time: "Выбираете самостоятельно!",
    //     address: "Санкт-Петербург, уточняйте при бронировании",
    //     duration: "сутки",
    //     distance: null,
    //     level: "на ваше усмотрение!",
    //     price: "от 700",
    //     discount: null,
    //     link: "/arenda.html"
    // }
]