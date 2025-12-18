import Link from 'next/link'
import { MainIcon2 } from '@/shared/ui/icons'
import { FOOTER_LINKS, FOOTER_META_LINKS } from '../model/const'

export const Footer = () => {
  const [privacy, offer, rights] = FOOTER_META_LINKS

  return (
    <footer className="bg-secondary text-white mt-16">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-0 pt-6 pb-14 lg:py-20">
        {/* Мобилка */}
        <div className="flex flex-col gap-10 md:hidden">
          <MainIcon2 />
          <p
            className="text-[18px] font-medium leading-[130%]"
            style={{ fontFamily: 'Roboto Flex, var(--font-family-sans)' }}
          >
            Контакты
          </p>

          <div className="flex flex-col gap-6 mt-28">
            {FOOTER_LINKS.map((item) => (
              <div key={item.label}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-[18px] font-medium leading-[130%]"
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
          </div>

          <div className="flex flex-col gap-4 text-sm text-[#EBE7DF]" style={{ fontFamily: 'Roboto Flex, var(--font-family-sans)' }}>
            {FOOTER_META_LINKS.map((item) => (
              <span key={item.label}>{item.label}</span>
            ))}
          </div>
        </div>

        {/* MD+ сетка */}
        <div className="hidden md:grid grid-cols-3 items-start gap-12 lg:gap-20 text-left">
          <div className="flex flex-col gap-6 shrink-0 h-full">
            <MainIcon2 />
            {privacy ? (
              <span
                className="mt-auto text-sm text-[#EBE7DF] font-normal leading-[120%]"
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
                className="mt-auto text-sm text-[#EBE7DF] font-normal leading-[120%]"
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
                className="mt-auto text-sm text-[#EBE7DF] font-normal leading-[120%]"
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
