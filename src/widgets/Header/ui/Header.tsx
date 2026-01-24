'use client'

import { SearchOverlay } from '@/shared/ui'
import { DesktopHeader } from './desktop/DesktopHeader'
import { MobileHeader } from './mobile/MobileHeader'
import { TabletHeader } from './tablet/TabletHeader'
import { MobileMenu } from './MobileMenu'
import { useHeaderStore } from '../model/store/useHeaderStore'

export const Header = () => {
  const { isSearchOpen, closeSearch } = useHeaderStore()

  return (
    <header className="w-full mt-5 rounded-[50px] bg-white pr-4 relative z-30">
      <DesktopHeader />
      <TabletHeader />
      <MobileHeader />
      <MobileMenu />
      <SearchOverlay isOpen={isSearchOpen} onClose={closeSearch} />
    </header>
  )
}
