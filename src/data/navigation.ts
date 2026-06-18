export const NAV_ITEMS = [
  { href: '#tours', label: 'Саптуры' },
  { href: '#advantages', label: 'О нас' },
  { href: '#gallery', label: 'Галерея' },
  { href: '#footer', label: 'Контакты' },
] as const

export const FOOTER_NAV_ITEMS = NAV_ITEMS.filter((item) => item.href !== '#footer')
