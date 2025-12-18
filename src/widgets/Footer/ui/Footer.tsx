import Link from 'next/link'
import { MainIcon2 } from '@/shared/ui/icons'
import { FOOTER_LINKS, FOOTER_META_LINKS } from '../model/const'

export const Footer = () => {
  const [privacy, offer, rights] = FOOTER_META_LINKS

  return (
    <footer className="bg-secondary text-white mt-16">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-0 py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-12 lg:gap-20 text-left">
          <div className="flex flex-col gap-6 shrink-0 h-full">
            <MainIcon2 />
            {privacy ? (
              <span
                className="mt-70 text-sm text-[#EBE7DF]! font-normal leading-[120%]"
                style={{ fontFamily: 'Roboto Flex, var(--font-family-sans)' }}
              >
                {privacy.label}
              </span>
            ) : null}
          </div>

          <div className="flex flex-col gap-4 justify-start items-start h-full">
            <p
              className="text-[18px] font-medium leading-[130%]"
              style={{ fontFamily: 'Roboto Flex, var(--font-family-sans)' }}
            >
              Контакты
            </p>
            {offer ? (
              <span
                className="mt-auto text-sm text-[#EBE7DF]! font-normal leading-[120%]"
                style={{ fontFamily: 'Roboto Flex, var(--font-family-sans)' }}
              >
                {offer.label}
              </span>
            ) : null}
          </div>

          <div className="flex flex-col gap-6 md:gap-8 h-full">
            {FOOTER_LINKS.map((item) => (
              <div key={item.label}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-[18px] font-medium leading-[130%] transition-colors hover:text-primary"
                    style={{ fontFamily: 'Roboto Flex, var(--font-family-sans)' }}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className="text-[18px] font-medium leading-[130%]"
                    style={{ fontFamily: 'Roboto Flex, var(--font-family-sans)' }}
                  >
                    {item.label}
                  </span>
                )}
              </div>
            ))}
            {rights ? (
              <span
                className="mt-auto text-sm text-[#EBE7DF]! font-normal leading-[120%]"
                style={{ fontFamily: 'Roboto Flex, var(--font-family-sans)' }}
              >
                {rights.label}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </footer>
  )
}
