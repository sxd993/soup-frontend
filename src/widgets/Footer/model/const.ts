type FooterLink = {
  href?: string
  label: string
}

export const FOOTER_LINKS: readonly FooterLink[] = [
  { href: '/', label: 'Каталог' },
  { href: '/news', label: 'Новости' },
  { href: '/', label: 'Конкурсы' },
  { href: '/', label: 'Блоги' },
  { href: '/', label: 'Разместить заказ' },
] as const

export const FOOTER_META_LINKS: readonly FooterLink[] = [
  { href: '/', label: 'Политика конфиденциальности' },
  { href: '/', label: 'Договор оферты' },
  { href: '/', label: 'Все права защищены' },
] as const
