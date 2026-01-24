export type HeaderLink = {
  href: string
  label: string
  devices: Array<'sm' | 'md' | 'lg'>
}

export const HEADER_LINKS: HeaderLink[] = [
  { href: '/catalog', label: 'Каталог', devices: ['sm', 'md', 'lg'] },
  { href: '/news', label: 'Новости', devices: ['sm', 'md', 'lg'] },
  { href: '/contests', label: 'Конкурсы', devices: ['sm', 'md', 'lg'] },
  { href: '/blogs', label: 'Блоги', devices: ['sm', 'md', 'lg'] },
  { href: '/order/create', label: 'Разместить заказ', devices: ['sm', 'md', 'lg'] },
  { href: '/auth/login', label: 'Личный кабинет', devices: ['sm', 'md'] },
  { href: '/contacts', label: 'Контакты', devices: ['sm', 'md'] },
]
