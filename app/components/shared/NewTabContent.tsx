import { Icon } from '@iconify/react'
import { NewTabContentProps } from '@/app/types/new-tab-content/NewTabContent'

export const NewTabContent = ({
  showNewTabIcon = true,
  hideIconOnMobile = false,
}: NewTabContentProps) => (
  <>
    <span className="sr-only">(Opens in a new tab)</span>
    {showNewTabIcon && (
      <Icon
        className={`ml-1 ${hideIconOnMobile ? 'hidden sm:inline-block' : ''}`}
        icon="fluent:window-new-16-regular"
      />
    )}
  </>
)
