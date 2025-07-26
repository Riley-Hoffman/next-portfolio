import { Icon } from '@iconify/react'

interface NewTabContentProps {
  icon?: boolean
  hideIconOnMobile?: boolean
}

export const NewTabContent = ({
  icon = true,
  hideIconOnMobile = false,
}: NewTabContentProps) => (
  <>
    <span className="sr-only"> (Opens in a new tab)</span>
    {icon && (
      <Icon
        className={`ml-1 ${hideIconOnMobile ? 'hidden sm:inline-block' : ''}`}
        icon="fluent:window-new-16-regular"
      />
    )}
  </>
)
