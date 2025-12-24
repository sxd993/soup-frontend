export const NAVIGATION_LINKS = [
  { href: '/', label: 'Каталог' },
  { href: '/news', label: 'Новости' },
  { href: '/', label: 'Конкурсы' },
  { href: '/', label: 'Блоги' },
  { href: '/', label: 'Разместить заказ' },
] as const

export const MOBILE_MENU_LINKS = [
  ...NAVIGATION_LINKS,
  { href: '/profile', label: 'Личный кабинет' },
  { href: '/contacts', label: 'Контакты' },
] as const
