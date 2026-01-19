type FooterLink = {
  href?: string
  label: string
}

export const FOOTER_LINKS: readonly FooterLink[] = [
  { href: '/catalog', label: 'Каталог' },
  { href: '/news', label: 'Новости' },
  { href: '/contests', label: 'Конкурсы' },
  { href: '/blogs', label: 'Блоги' },
] as const

export const FOOTER_META_LINKS: readonly FooterLink[] = [
  { href: '/', label: 'Политика конфиденциальности' },
  { href: '/', label: 'Договор оферты' },
  { href: '/', label: 'Все права защищены' },
] as const
